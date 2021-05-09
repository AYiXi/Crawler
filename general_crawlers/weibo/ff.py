import requests
from lxml import etree
import json
import re
from copy import deepcopy
import datetime
from requests.exceptions import InvalidURL
from scrapy import Selector
import time
from openpyxl import Workbook


class WeiBo:
    def __init__(self):
        self.headers = {
            'Accept'                   : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding'          : 'gzip, deflate, br',
            'Accept-Language'          : 'en,zh-CN;q=0.9,zh;q=0.8',
            'Cache-Control'            : 'no-cache',
            'Connection'               : 'keep-alive',
            'Cookie'                   : '_s_tentry=-; Apache=2008799566049.6748.1587986531540; SINAGLOBAL=2008799566049.6748.1587986531540; ULV=1587986531544:1:1:1:2008799566049.6748.1587986531540:; WBtopGlobal_register_version=fd6b3a12bb72ffed; ALF=1619522541; SSOLoginState=1587986542; SUB=_2A25zorA-DeRhGeNK41oQ8SbPzj2IHXVQ2ab2rDV8PUNbmtAKLWWgkW9NSQdFEAnn9gR01fJrfZOknoRfsV_LdBJR; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhbEep_szqecD_H0rINazRe5JpX5KzhUgL.Fo-X1hnpeKn0SK22dJLoI0MLxKMLB-zL12zLxKBLBonL1KqLxKnL1h5L1h-LxK-L1h-L1hnLxKMLB-zL12zLxK-LB.qL1hSk; SUHB=0qjEXVk8a_3EcW; wvr=6; UOR=,,graph.qq.com; webim_unReadCount=%7B%22time%22%3A1587986995789%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A0%2C%22msgbox%22%3A0%7D; WBStorage=42212210b087ca50|undefined',
            'Host'                     : 's.weibo.com',
            'Pragma'                   : 'no-cache',
            'Referer'                  : 'https://s.weibo.com/weibo?q=%E6%96%B9%E6%96%B9%E6%97%A5%E8%AE%B0&xsort=hot&suball=1&Refer=g&page=3',
            'Sec-Fetch-Dest'           : 'document',
            'Sec-Fetch-Mode'           : 'navigate',
            'Sec-Fetch-Site'           : 'same-origin',
            'Sec-Fetch-User'           : '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent'               : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
        }

        self.url = 'https://s.weibo.com/weibo'

        self.params = {
            'q'        : '方方日记',
            'xsort'    : 'hot',
            'suball'   : '1',
            'timescope': 'custom:2020-03-11-0:2020-03-10-0',
            'Refer'    : 'g',
        }

        self.book = Workbook()
        self.sheet = self.book.active
        self.sheet.append(['date', 'name', 're_name', 'forward_num', 'comment_num', 'like_num', 'content'])

    @staticmethod
    def time_range(date_from=(2020, 2, 1), date_to=(2020, 4, 27)):
        # def time_range(date_from=(2020, 4, 8), date_to=(2020, 4, 12)):
        begin = datetime.date(*date_from)
        end = datetime.date(*date_to)
        for i in range((end - begin).days):
            day = begin + datetime.timedelta(days=i)
            next_day = begin + datetime.timedelta(days=i + 1)
            yield [str(day), str(next_day)]

    def get_page(self):
        t_range = self.time_range()
        params = deepcopy(self.params)

        for t in t_range:
            timescope = f'custom:{t[0]}-0:{t[1]}-0'
            params.update(timescope=timescope)
            try:
                resp = requests.get(self.url, params=params, headers=self.headers)
            except InvalidURL:
                return None

            html = etree.HTML(resp.text)
            try:
                page = html.xpath('//ul[@action-type="feed_list_page_morelist"]/li[last()]//text()')[0]
                page = re.findall('第(\d+)页', page)[0]
            except IndexError:
                page = '1'
            yield page, params, t[0]

    def get_real_href(self, name):
        params = {
            'q'    : '',
            'wvr'  : '6',
            'b'    : '1',
            'Refer': 'SWeibo_box',
        }

        params.update(q=name)
        url = 'https://s.weibo.com/weibo'
        resp = requests.get(url, params=params, headers=self.headers)
        html = Selector(text=resp.text)
        href = html.xpath('//div[@class="card card-user-b s-pg16 s-brt1"]//a[@class="name"]/@href').get()
        return 'https:' + href

    def get_fans(self, name):
        href = self.get_real_href(name)
        headers = {
            'Accept'                   : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding'          : 'gzip, deflate, br',
            'Accept-Language'          : 'en,zh-CN;q=0.9,zh;q=0.8',
            'Cache-Control'            : 'no-cache',
            'Connection'               : 'keep-alive',
            'Cookie'                   : '_s_tentry=-; Apache=2008799566049.6748.1587986531540; SINAGLOBAL=2008799566049.6748.1587986531540; ULV=1587986531544:1:1:1:2008799566049.6748.1587986531540:; WBtopGlobal_register_version=fd6b3a12bb72ffed; ALF=1619522541; SSOLoginState=1587986542; SUB=_2A25zorA-DeRhGeNK41oQ8SbPzj2IHXVQ2ab2rDV8PUNbmtAKLWWgkW9NSQdFEAnn9gR01fJrfZOknoRfsV_LdBJR; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhbEep_szqecD_H0rINazRe5JpX5KzhUgL.Fo-X1hnpeKn0SK22dJLoI0MLxKMLB-zL12zLxKBLBonL1KqLxKnL1h5L1h-LxK-L1h-L1hnLxKMLB-zL12zLxK-LB.qL1hSk; SUHB=0qjEXVk8a_3EcW; wvr=6; UOR=,,graph.qq.com; webim_unReadCount=%7B%22time%22%3A1587986995789%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A0%2C%22msgbox%22%3A0%7D; WBStorage=42212210b087ca50|undefined',
            'Host'                     : 's.weibo.com',
            'Pragma'                   : 'no-cache',
            'Sec-Fetch-Dest'           : 'document',
            'Sec-Fetch-Mode'           : 'navigate',
            'Sec-Fetch-Site'           : 'same-origin',
            'Sec-Fetch-User'           : '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent'               : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
        }

        resp = requests.get(href, headers=headers, allow_redirects=False)
        print(resp.text)
        fans = re.findall('<strong class=\"W_f14\">(\d+)<strong>', resp.text)
        return fans

    def get_html(self, page_params):
        pages, params, t = page_params

        print(f'pages: {pages}\nparams: {params}\nt: {t}')
        # params.update(Refer='SWeibo_box')

        for page in range(1, int(pages) + 1):
            time.sleep(1)
            params.update(page=str(page))

            try:
                resp = requests.get(self.url, params=params, headers=self.headers, allow_redirects=False)
                if '您可以尝试更换关键词' in resp.text:
                    return
            except InvalidURL:
                return

            html = Selector(text=resp.text)
            divs = html.xpath('//div[@action-type="feed_list_item"]')
            for div in divs:
                name = div.xpath('.//div[@class="info"]//a[@class="name"]/@nick-name').get()
                # href = div.xpath('.//div[@class="info"]//a[@class="name"]/@href').get()
                # href = 'https://weibo.com/u/' + re.findall('com/(\d+)\?refer', href)[0]
                forward_name = div.xpath('.//div[@node-type="feed_list_forwardContent"]/a/@nick-name').get()
                content_before = div.xpath('.//p[@node-type="feed_list_content" and @nick-name]//text()').getall()
                content = ''.join(content_before).strip()
                content = re.sub(u'\u200b', '', content).strip()

                forward_num = div.xpath('.//div[@class="card-act"]/ul/li[2]//text()').get()
                comment_num = div.xpath('.//div[@class="card-act"]/ul/li[3]//text()').get()
                like_num = div.xpath('.//div[@class="card-act"]/ul/li[4]/a/em/text()').get()

                # fans = self.get_fans(name)

                # item = {
                #     'date': t,
                #     'name': name,
                #     'forward_name': forward_name,
                #     'forward_num': forward_num,
                #     'comment_num': comment_num,
                #     'like_num': like_num,
                #     # 'content': content,
                # }

                item = [t, name, forward_name, forward_num, comment_num, like_num, content]
                print(item)
                self.sheet.append(item)

    def go(self):
        page_params = self.get_page()

        for item in page_params:
            if item:
                self.get_html(item)

        name = str(time.time())
        self.book.save(name + '.xlsx')


if __name__ == "__main__":
    weibo = WeiBo()
    weibo.go()
