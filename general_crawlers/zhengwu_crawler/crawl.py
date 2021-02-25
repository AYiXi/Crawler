import json
import re
from datetime import datetime as dt
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from pprint import pprint as print_

import requests
from requests import RequestException

from lxml import etree

from general_crawlers.zhengwu_crawler.analyze_func import date_format
from general_crawlers.zhengwu_crawler.sites import SITES
from loguru import logger
from Utils.decorator_utils import time_use


class ZWCrawl:
    def __init__(self, check_keyword=True):
        self.yesterday = date_format(days=-10)
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36',
        }
        self.check_keyword = check_keyword
        # self.yesterday = '2019-07-01'

        self.words = [
            ['公示', '立项'],
            ['公示', '资金'],
            ['通知', '项目'],
            ['通知', '认定'],
            ['通知', '资金'],
            ['申报', '公示'],
            ['申报', '通知'],
            ['申报', '公示'],
            ['申报', '项目'],
            ['申报', '资金'],
            ['知识', '产权']
        ]

    @time_use
    def crawl(self, **kwargs):
        if kwargs.get('referer', None):
            self.headers['referer'] = kwargs['referer']
        else:
            self.headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36',
            }

        post = kwargs.get('post', None)
        url = kwargs['url']
        table_name = kwargs['table_name']
        get_func = kwargs.get('get_func', None)
        platform_url = kwargs.get('platform_url', url)

        if kwargs.get('not_request', None):
            name, date, detail_url = kwargs['diy_func']()
        elif post:
            try:
                response = requests.post(url, headers=self.headers, data=kwargs['data'], timeout=5)
            except RequestException:
                logger.error(f'连接错误, {platform_url}')
                return

            name, date, detail_url = kwargs['post_func'](response)
        else:
            try:
                response = requests.get(url, headers=self.headers, timeout=5)
            except RequestException:
                logger.error(f'{table_name} 连接错误: {platform_url}')
                return

            html = response.content
            xpath_str = etree.HTML(html)
            name = xpath_str.xpath(kwargs['xpath_name'])
            date = xpath_str.xpath(kwargs['xpath_date'])
            detail_url = xpath_str.xpath(kwargs['xpath_url'])

            # remove the blank space
            name = [re.sub('\s', '', i) for i in name]

            # Execute name, date, detail_url three functions
            name_func, date_func, detail_url_func = \
                kwargs.get('name', None), kwargs.get('date', None), kwargs.get('detail_url', None)

            if name_func:
                name = name_func(name)
            if date_func:
                date = date_func(date)
            if detail_url_func:
                detail_url = detail_url_func(detail_url)

        item = [name, date, detail_url]

        if not all(item):
            logger.error(table_name + ' ' + platform_url + ' 爬虫策略失效')

        if get_func:
            item = list(get_func(item))
        else:
            item = list(zip(*item))

        one_page_data = []

        logger.info(f'{table_name} 数据一共 {len(item)} 条')
        for data in item:
            if data:
                if not self.check_keyword:
                    data = list(data)
                    data.extend(['未定义', table_name, platform_url])
                    one_page_data.append(data)
                    continue

                for word in self.words:
                    # if '公示|立项' in name
                    match = re.findall('|'.join(word), re.sub('\s', '', data[0]))

                    # if date > yesterday and (match == [公示, 立项] or match == [立项, 公示])
                    if data[1] >= self.yesterday and (match == word or match == word[::-1]):
                        # if '' in match:
                        data = list(data)
                        data.extend(['+'.join(set(match)), table_name, platform_url])
                        one_page_data.append(data)
                        break

        return one_page_data

    def __call__(self, *args, **kwargs):
        return self.crawl(*args, **kwargs)

def crawl(multi=True):
    all_data = []
    zwcrawl = ZWCrawl(check_keyword=True)

    if multi:
        with ThreadPoolExecutor(max_workers=10) as executor:
            futures = [executor.submit(zwcrawl, **site) for site in SITES]  # if site['table_name'] == '中国招标投标公共服务平台']
            for future in as_completed(futures):
                if future.result():
                    all_data.extend(future.result())
    else:
        for site in SITES:
            if site['table_name']:
                all_data.extend(zwcrawl.crawl(**site))

    return all_data


if __name__ == '__main__':
    results = crawl(multi=True)
    print_(f'results: {len(results)}')
    with open(Path(__file__).parent / 'jsonfiles' / (dt.strftime(dt.today(), '%Y_%m_%d_%H_%M_%S') + '.json'), 'w', encoding='utf8') as f:
        f.write(json.dumps(results, ensure_ascii=False))
