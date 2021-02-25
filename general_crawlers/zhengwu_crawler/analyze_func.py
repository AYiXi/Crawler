import re
import time
from copy import deepcopy
from datetime import datetime as dt
from dateutil.relativedelta import relativedelta
import requests
from loguru import logger
from lxml import etree
from requests import Response

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36',
}


# 返回与今天的日期差值的字符串
def date_format(days=0, months=0, symbol='-'):
    return dt.datetime.strftime(dt.datetime.now() + relativedelta(months=months, days=days),
                                '%Y{}%m{}%d'.format(symbol, symbol))


def hongqiao():
    url = 'http://www.tjhq.gov.cn/zwgk/zfxx/gsgg/index.shtml'
    # 天津市虹桥区人民政府
    resp = requests.get(url, headers=headers)
    resp.encoding = 'utf8'
    results = re.findall('alist\[\d\] = (\[\'.*?\'\]);', resp.text)
    results = [eval(i) for i in results]
    return zip(*results)


def culture_and_tourism(response: Response):
    # 天津市文化和旅游局
    json_data = response.json()
    data = json_data['data']

    name = [i['title'] for i in data]
    detail_url = ['http://whly.tj.gov.cn/admin/console/File/downloadFile?fileID={}'.format(i['attachId']) for i in data]
    date = [time.strftime('%Y-%m-%d', time.localtime(int(i['issueTime']) / 1000)) for i in data]

    return name, date, detail_url


def finance(response: Response):
    # 天津市财务局
    text = response.text

    name = re.findall("title='(.*)' target", text)
    date = re.findall('#ccc">\[(\d+-\d+)\]', text)
    detail_url = re.findall("href='(.*)' class", text)

    year = [re.findall('/art/(20\d+)/', i)[0] for i in detail_url]

    date = [year[index] + '-' + i for index, i in enumerate(date)]

    detail_url = ['http://cz.tj.gov.cn' + i for i in detail_url]

    return name, date, detail_url


def xiqing(item):
    # 天津市西青区人民政府, 名称不全, 需要补全
    for name, date, detail_url in zip(*item):
        response = requests.get(detail_url, headers=headers)
        response.encoding = 'utf8'

        if response.status_code == 200:
            name = re.findall('name="ArticleTitle" content="(.*)" />', response.text)[0].replace(' ', '')
        else:
            raise requests.RequestException('请求错误')

        yield [name, date, detail_url]


def baoshui(item):
    # 保税区政务网, 名称不全, 需要补全
    headers_baoshui = {
        'Host'                     : 'www-main.tjftz.gov.cn',
        'Upgrade-Insecure-Requests': '1',
        **headers
    }

    for name, date, detail_url in zip(*item):
        response = requests.get(detail_url, headers=headers_baoshui)
        response.encoding = 'gb2312'

        if response.status_code == 200:
            try:
                name = re.findall('<title>(.*?)</title>', response.text)[0]
            except IndexError:
                continue
        else:
            raise requests.RequestException('请求错误')

        yield [name, date, detail_url]


def hedong(item):
    # 天津市河东区人民政府, 年份需要在 url 里面找
    for name, date, detail_url in zip(*item):

        # 通过 url 最后四个数字大小判断是哪一年, 递增关系, 很好找规律
        # http://www.hedong.gov.cn/info/2299/87444.htm 2020-01-02
        try:
            year_num = re.findall('/(\d+)\.htm', detail_url)[0]
        except IndexError:
            year = '2020-'

        if year_num >= '87444':
            year = '2020-'
        else:
            year = '2019-'

        yield [name, year + date, detail_url]


def jinnan(item):
    # 天津市津南区人民政府, 年份需要在 url 里面找
    for name, date, detail_url in zip(*item):

        try:
            year_num = re.findall('/(20[1|2]\d)', detail_url)[0]
        except IndexError:
            logger.error(detail_url + 'yield None')
            yield None

        yield [name, year_num + '-' + date, detail_url]


def zhongxin(item):
    # 中新天津生态城管理委员会
    for name, date, detail_url in zip(*item):
        if '...' in name:
            resp = requests.get(detail_url)
            name = re.findall('<title>(.*?)</title>', resp.text)[0]

        yield [name, date, detail_url]


def okcis(response: Response):
    # 招标采购导航网
    html = etree.HTML(response.text)
    name = html.xpath('//td[@name="result-list-title-td"]/a/@title')
    date = html.xpath('//table[@name="result-list"]//tr/td[last()]/text()')
    detail_url = html.xpath('//td[@name="result-list-title-td"]/a/@href')
    detail_url = ['https://www.okcis.cn' + u for u in detail_url]

    return name, date, detail_url


def cebpubservice() -> list:
    # 中国招标投标公共服务平台
    url = 'http://bulletin.cebpubservice.com/xxfbcmses/search/bulletin.html'

    params = {
        'searchDate'    : '1995-03-27',
        'dates'         : '300',
        'word'          : '知识产权',
        'categoryId'    : '88',
        'status'        : '01',
        'startcheckDate': date_format(),
        'endcheckDate'  : date_format(),
        'page'          : '1',
    }

    return cebpubservice_date(url, params)


def cebpubservice_date(url, params):
    resp = requests.get(url, params=params)
    page = int(re.findall('共<label>(\d+)</label>页 ', resp.text)[0])

    name_items, date_items, detail_url_items = [], [], []
    for i in range(1, page + 1):
        params.update(page=str(i))
        resp = requests.get(url, params=params)
        html = etree.HTML(resp.text)
        name = html.xpath('//td/a/@title')
        date = html.xpath('//td[@name="imgShow"]/@id')
        date = [i[:10] for i in date]
        detail_url = html.xpath('//td/a/@href')
        detail_url = [re.findall('(http.*.html)', i)[0] for i in detail_url]

        name_items.extend(name)
        date_items.extend(date)
        detail_url_items.extend(detail_url)

    return [name_items, date_items, detail_url_items]


def tj_gov_purchase() -> tuple:
    # 天津市政府采购网
    url = 'http://tjgp.cz.tj.gov.cn/portal/topicView.do'
    prefix = 'http://tjgp.cz.tj.gov.cn/portal/documentView.do?method=view&'

    date_from = date_format(days=-3)
    data_to = date_format()

    city_data = {
        'name'     : '',
        'ldateQGE' : date_from,
        'ldateQLE' : data_to,
        'id'       : '1664',
        'view'     : 'Infor',
        'siteLists': '',
        'page'     : '1',
        'method'   : 'find'
    }

    distinct_data = {
        'name'     : '',
        'ldateQGE' : date_from,
        'ldateQLE' : data_to,
        'id'       : '1665',
        'view'     : 'Infor',
        'siteLists': '',
        'page'     : '1',
        'method'   : 'find'
    }

    city_items = tj_gov_purchase_data(url, prefix, city_data)
    distinct_items = tj_gov_purchase_data(url, prefix, distinct_data)

    name = city_items[0] + distinct_items[0]
    date = city_items[1] + distinct_items[1]
    detail_url = city_items[2] + distinct_items[2]

    return name, date, detail_url


def tj_gov_purchase_data(url, prefix, data):
    resp = requests.post(url, data=data)
    page = int(re.findall('class="countPage">共<b>(\d+)</b>页', resp.text)[0])

    name_items, date_items, detail_url_items = [], [], []
    for i in range(1, int(page) + 1):
        d = deepcopy(data)
        d.update(page=str(i))
        resp_d = requests.post(url, data=d)

        html = etree.HTML(resp_d.text)
        name = html.xpath('//ul[@class="dataList"]/li/a/@title')
        date = html.xpath('//ul[@class="dataList"]/li/span/text()')
        detail_url = html.xpath('//ul[@class="dataList"]/li/a/@href')

        detail_url = [prefix + url.split('?')[-1] for url in detail_url]
        date = [dt.strftime(dt.strptime(i, '%a %b %d %H:%M:%S CST %Y'), '%Y-%m-%d') for i in date]

        name_items.extend(name)
        date_items.extend(date)
        detail_url_items.extend(detail_url)

    return [name_items, date_items, detail_url_items]


if __name__ == '__main__':
    print(date_format(days=-3))
