import random
import time

import requests
from copy import deepcopy
from scrapy import Selector
import json
import re
from openpyxl import Workbook
from requests import Session


class WeiBo:
    def __init__(self):
        self.url = "https://weibo.com/p/aj/v6/mblog/mbloglist"

        self.headers = {
            'cookie'    : 'TC-V5-G0=eb26629f4af10d42f0485dca5a8e5e20; wb_view_log_5488118351=2560*14401.6500000953674316; _s_tentry=login.sina.com.cn; Apache=3313556715874.062.1597423870680; SINAGLOBAL=3313556715874.062.1597423870680; ULV=1597423870701:1:1:1:3313556715874.062.1597423870680:; Ugrow-G0=cf25a00b541269674d0feadd72dce35f; login_sid_t=17984807d4ae9f58c70e881ee4495beb; cross_origin_proto=SSL; wb_view_log=2560*14401.6500000953674316; WBtopGlobal_register_version=434eed67f50005bd; wb_view_log_5804918385=2560*14401.6500000953674316; WBStorage=42212210b087ca50|undefined; crossidccode=CODE-tc-1K6OjK-22SNHN-HRt6s61vO8zmPS073a56d; ALF=1629003684; SSOLoginState=1597467685; SCF=AivDpZjAJ9uuTsj6WcxllQxfDmP-G9p92PVI4fKwWx63hNT4tAMHHaqk30A9Es5YjmLTUijVssKQpHko5jA3ZtY.; SUB=_2A25yMxx1DeRhGeNK41oQ8SbPzj2IHXVRSQq9rDV8PUNbmtAKLVOgkW9NSQdFEAWkaqVVBOXPn12tLq4DbGcDbqQj; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhbEep_szqecD_H0rINazRe5JpX5KzhUgL.Fo-X1hnpeKn0SK22dJLoI0MLxKMLB-zL12zLxKBLBonL1KqLxKnL1h5L1h-LxK-L1h-L1hnLxKMLB-zL12zLxK-LB.qL1hSk; SUHB=04WeyFgZs_cuSh; wvr=6; UOR=login.sina.com.cn,weibo.com,graph.qq.com; TC-Page-G0=841d8e04c4761f733a87c822f72195f3|1597467688|1597467619; webim_unReadCount=%7B%22time%22%3A1597467691355%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A0%2C%22msgbox%22%3A0%7D',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36'
        }

        # pagebar 0 / 1 表示上半部分和下半部分, 只有下半部分可以看见 页数, 其他参数不能少
        self.params = {
            'domain'      : '100106',
            'start_time'  : '2020-08-13',
            'end_time'    : '2020-08-14',
            'pagebar'     : '1',
            'id'          : '1001061523766213',
            'page'        : '1',
            'pre_page'    : '1',
            'ajwvr'       : '6',
            'is_ori'      : '1',
            'is_text'     : '1',
            'is_pic'      : '1',
            'is_video'    : '1',
            'is_music'    : '1',
            'is_article'  : '1',
            'is_search'   : '1',
            'is_searchadv': '1',
            'pl_name'     : 'Pl_Official_MyProfileFeed__24',
            'feed_type'   : '0',
            'domain_op'   : '100106',
        }

        self.date = ['2019' + '-' + str(random.randint(1, 12)).zfill(2) + '-' + str(i).zfill(2) for i in range(1, 29)]
        self.mid_set = set()
        # self.date = ['2019-07-01', '2019-02-02', '2019-07-03', '2019-11-04', '2019-02-05', '2019-05-06', '2019-09-07', '2019-02-08', '2019-01-09', '2019-02-10', '2019-04-11', '2019-11-12', '2019-01-13', '2019-01-14', '2019-12-15', '2019-06-16', '2019-02-17', '2019-08-18', '2019-04-19', '2019-01-20', '2019-04-21', '2019-04-22', '2019-10-23', '2019-04-24', '2019-01-25', '2019-03-26', '2019-06-27', '2019-10-28', '2019-12-29', '2019-01-30']
        # self.date = [
        #     '2019-08-12',
        #     '2019-04-09',
        #     '2019-10-16',
        #     '2019-08-08',
        #     '2019-11-01',
        #     '2019-12-14',
        #     '2019-07-28'
        # ]
        self.book = Workbook()
        self.sheet = self.book.active
        self.sheet.append(['date', 'name', 'forward_num', 'comment_num', 'like_num', 'content'])

    def start(self):
        self.get_data()

        self.book.save(str(random.randint(1000, 100000)) + '.xlsx')
        print(self.mid_set)

    def get_data(self):
        params = deepcopy(self.params)

        for date in self.date:
            params.update(start_time=date, end_time=date)

            page_ = self.get_page(params)

            for page in range(1, int(page_) + 1):
                for i in range(2):
                    params.update(pagebar=str(i))
                    self.analyze(params)
                    time.sleep(2)

    def analyze(self, params):
        response = requests.get(self.url, headers=self.headers, params=params)
        assert response.status_code == 200
        html = Selector(text=json.loads(response.text)['data'])

        items = html.xpath('//div[@action-type="feed_list_item"]')
        for item in items:
            user = item.xpath('.//div[@class="WB_info"]/a/text()').get()
            mid = int(item.xpath('.//ancestor::div[@action-type="feed_list_item"]/@mid').get())
            if mid in self.mid_set:
                print(f'mid: {mid} in self.mid_set {self.mid_set}')
                return
            self.mid_set.add(mid)

            pub_time = item.xpath('.//div[@class="WB_from S_txt2"]/a/@title').get()
            is_more = item.xpath('.//a[@class="WB_text_opt"]/@action-data').get()
            if is_more:
                try:
                    resp = requests.get('https://weibo.com/p/aj/mblog/getlongtext?ajwvr=6&mid={}'.format(mid), headers=self.headers)
                    assert resp.status_code == 200
                    text = resp.json()['data']['html']
                    # print(f'{mid} get long text')
                    time.sleep(1)
                except:
                    continue
            else:
                text_list = item.xpath('.//div[@node-type="feed_list_content"]//text()').getall()
                text = ''.join(text_list).strip()
                text = re.sub(u'\u200b', '', text).strip()

            compile = re.compile(r'<[^>]+>', re.S)
            text = compile.sub('', text)

            # 21 转发, 22 评论, 33 赞
            forward_num = item.xpath('.//em[contains(@class, "ficon_forward")]/following-sibling::em/text()').get()
            forward_num = '0' if forward_num.strip() == '转发' else forward_num

            comment_num = item.xpath('.//em[contains(@class, "ficon_repeat")]/following-sibling::em/text()').get()
            comment_num = '0' if comment_num.strip() == '评论' else comment_num

            like_num = item.xpath('.//em[contains(@class, "ficon_praised")]/following-sibling::em/text()').get()
            like_num = '0' if like_num.strip() == '赞' else like_num

            # ['date', 'name', 'forward_num', 'comment_num', 'like_num', 'content']
            row = [pub_time, user, forward_num, comment_num, like_num, text]
            print(row, ',')
            self.sheet.append(row)
            # yield row

    def get_page(self, params):
        response = requests.get(self.url, headers=self.headers, params=params)
        assert response.status_code == 200
        html = Selector(text=json.loads(response.text)['data'])
        print(html)
        page_str = html.xpath('//a[@bpfilter="page"]/@action-data').get()
        try:
            pages = re.findall('currentPage=\d+&countPage=(\d+)', page_str)[0]
        except TypeError:
            pages = '1'
        return pages


if __name__ == '__main__':
    w = WeiBo()
    w.start()
