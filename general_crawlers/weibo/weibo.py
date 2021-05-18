import datetime
import json
import re
import time
from collections import OrderedDict
from copy import deepcopy
from random import randint
from urllib.parse import unquote

import pymongo
import requests
from lxml import etree
from pymongo.errors import DuplicateKeyError
from requests.exceptions import InvalidURL
from scrapy import Selector
from utils import get_logger

logger = get_logger(__file__)


class WeiBo:
    def __init__(self):
        self.headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Cookie': 'login_sid_t=74b3461ab2b5894e28a2aafebbe79d5d; cross_origin_proto=SSL; _s_tentry=passport.weibo.com; Apache=7759071496294.137.1615541675236; SINAGLOBAL=7759071496294.137.1615541675236; ULV=1615541675267:1:1:1:7759071496294.137.1615541675236:; ALF=1651832437; SCF=AoVQ1IA-GK2l3gnYQTZomUTtz0qyXwTwsbwKT5h0qKFxWbwQoOvsIYG4bSYBEg4QrNr0tCudIhTnqSHGkB6ai2w.; SSOLoginState=1620296544; SUB=_2A25Nl7MwDeRhGeNK41oQ8SbPzj2IHXVve914rDV8PUJbkNAKLWXjkW1NSQdFEHs-nPG-ewNXICHHv6rqDHAGxd3N; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhbEep_szqecD_H0rINazRe5NHD95QfShnReK2Re0-pWs4DqcjNi--Ni-8FiKyFi--Xi-zRiK.ci--RiKn7iKnfi--fiKnfiKnRi--Ni-8FiKyFi--fi-isiKn0P7tt; UOR=,,www.google.com.hk; WBStorage=202105141044|undefined; webim_unReadCount=%7B%22time%22%3A1620960448206%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A2%2C%22msgbox%22%3A0%7D',
            # 'Cookie': 'login_sid_t=74b3461ab2b5894e28a2aafebbe79d5d; cross_origin_proto=SSL; _s_tentry=passport.weibo.com; Apache=7759071496294.137.1615541675236; SINAGLOBAL=7759071496294.137.1615541675236; ULV=1615541675267:1:1:1:7759071496294.137.1615541675236:; ALF=1651832437; SCF=AoVQ1IA-GK2l3gnYQTZomUTtz0qyXwTwsbwKT5h0qKFxWbwQoOvsIYG4bSYBEg4QrNr0tCudIhTnqSHGkB6ai2w.; SSOLoginState=1620296544; SUB=_2A25Nl7MwDeRhGeNK41oQ8SbPzj2IHXVve914rDV8PUJbkNAKLWXjkW1NSQdFEHs-nPG-ewNXICHHv6rqDHAGxd3N; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhbEep_szqecD_H0rINazRe5NHD95QfShnReK2Re0-pWs4DqcjNi--Ni-8FiKyFi--Xi-zRiK.ci--RiKn7iKnfi--fiKnfiKnRi--Ni-8FiKyFi--fi-isiKn0P7tt; UOR=,,www.google.com.hk; webim_unReadCount=%7B%22time%22%3A1620960268218%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A2%2C%22msgbox%22%3A0%7D; WBStorage=202105141044|undefined',
            # 'Cookie': 'login_sid_t=74b3461ab2b5894e28a2aafebbe79d5d; cross_origin_proto=SSL; _s_tentry=passport.weibo.com; Apache=7759071496294.137.1615541675236; SINAGLOBAL=7759071496294.137.1615541675236; ULV=1615541675267:1:1:1:7759071496294.137.1615541675236:; ALF=1651832437; SCF=AoVQ1IA-GK2l3gnYQTZomUTtz0qyXwTwsbwKT5h0qKFxWbwQoOvsIYG4bSYBEg4QrNr0tCudIhTnqSHGkB6ai2w.; SSOLoginState=1620296544; SUB=_2A25Nl7MwDeRhGeNK41oQ8SbPzj2IHXVve914rDV8PUJbkNAKLWXjkW1NSQdFEHs-nPG-ewNXICHHv6rqDHAGxd3N; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhbEep_szqecD_H0rINazRe5NHD95QfShnReK2Re0-pWs4DqcjNi--Ni-8FiKyFi--Xi-zRiK.ci--RiKn7iKnfi--fiKnfiKnRi--Ni-8FiKyFi--fi-isiKn0P7tt; UOR=,,www.google.com.hk; webim_unReadCount=%7B%22time%22%3A1620959190394%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A2%2C%22msgbox%22%3A0%7D; WBStorage=8daec78e6a891122|undefined',
            # 'Cookie': 'login_sid_t=74b3461ab2b5894e28a2aafebbe79d5d; cross_origin_proto=SSL; _s_tentry=passport.weibo.com; Apache=7759071496294.137.1615541675236; SINAGLOBAL=7759071496294.137.1615541675236; ULV=1615541675267:1:1:1:7759071496294.137.1615541675236:; ALF=1651832437; SCF=AoVQ1IA-GK2l3gnYQTZomUTtz0qyXwTwsbwKT5h0qKFxWbwQoOvsIYG4bSYBEg4QrNr0tCudIhTnqSHGkB6ai2w.; SSOLoginState=1620296544; SUB=_2A25Nl7MwDeRhGeNK41oQ8SbPzj2IHXVve914rDV8PUJbkNAKLWXjkW1NSQdFEHs-nPG-ewNXICHHv6rqDHAGxd3N; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhbEep_szqecD_H0rINazRe5NHD95QfShnReK2Re0-pWs4DqcjNi--Ni-8FiKyFi--Xi-zRiK.ci--RiKn7iKnfi--fiKnfiKnRi--Ni-8FiKyFi--fi-isiKn0P7tt; wvr=6; UOR=,,mail.sina.com.cn; webim_unReadCount=%7B%22time%22%3A1620615832139%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A0%2C%22msgbox%22%3A0%7D; WBStorage=202105110905|undefined',
            'Host': 's.weibo.com',
            'Pragma': 'no-cache',
            'Referer': 'https://s.weibo.com/weibo?q=%E6%96%B9%E6%96%B9%E6%97%A5%E8%AE%B0&xsort=hot&suball=1&Refer=g&page=3',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
        }

        # Referer: https://s.weibo.com/weibo/%25E4%25B8%258D%25E6%2598%258E%25E5%258E%259F%25E5%259B%25A0%25E8%2582%25BA%25E7%2582%258E?topnav=1&wvr=6&b=1
        self.url = 'https://s.weibo.com/weibo'

        self.params = {
            'q': '不明原因肺炎',
            'typeall': '1',
            'suball': '1',
            'timescope': 'custom:2019-12-12-0:2019-12-13-0',
            'Refer': 'g',
        }

        self.client = pymongo.MongoClient('mongodb://localhost:27017')
        self.db = self.client['weibo']

    def clear_num(self, text):
        if text is None:
            return 0

        t = text.replace('转发', '').replace('评论', '').strip()
        t = t.replace('万+', '0000')
        return int(t) if t else 0

    def clear_time(self, old_date):
        try:
            # 2019年3月8日, 19年3月8日, 2008-09-26, 2008-09-26T01:51:42.000Z
            date_f = re.search('(?P<year>\d+)[-/年](?P<month>\d+)[-/月](?P<day>\d+)[-/日]?.?'
                            '(?P<hour>\d+)?[-:/时]?(?P<minute>\d+)?[-:/分]?(?P<second>\d+)?[-:/秒]?',
                            old_date)

            year, month, day = date_f.group('year'), date_f.group('month').zfill(2), date_f.group('day').zfill(2)
            hour, minute, second = date_f.group('hour'), date_f.group('minute'), date_f.group('second')
            if len(year) == 2:
                year = '21' + year

            if minute is None:
                minute = str(randint(0, 59))
            if second is None:
                second = str(randint(0, 59))

            hour, minute, second = hour.zfill(2), minute.zfill(2), second.zfill(2)
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
        except:
            logger.error(f'{old_date} -> FORMAT ERROR.')
            return old_date

    def clear_content(self, content: list):
        content = ''.join([i.strip() for i in content]).strip()
        content = re.sub(u'\u200b|\u3000|\ue627|收起全文d', '', content).strip()
        return content

    def time_range(self, date_from=(2019, 12, 12), date_to=(2020, 1, 9)):
        begin = datetime.date(*date_from)
        end = datetime.date(*date_to)
        for i in range((end - begin).days):
            day = begin + datetime.timedelta(days=i)
            next_day = begin + datetime.timedelta(days=i + 1)
            yield f'custom:{day}-0:{next_day}-0'

    def time_range_hour(self, date_from=(2019, 12, 12), date_to=(2020, 1, 9), hour=None):
        if hour is None:
            return list(self.time_range(date_from, date_to))

        div, mod = divmod(24, hour)
        hours = [0] + [0 + hour * i for i in range(1, div)]

        begin = datetime.date(*date_from)
        end = datetime.date(*date_to)

        timescopes = []
        for i in range((end - begin).days):
            day = begin + datetime.timedelta(days=i)
            next_day = begin + datetime.timedelta(days=i + 1)
            d = [str(day), str(next_day)]
            timescope = [f'custom:{d[0]}-{hours[i]}:{d[0]}-{hours[i + 1]}' for i in range(len(hours) - 1)]
            timescope.append(f'custom:{d[0]}-{hours[-1]}:{d[1]}-0')
            timescopes.extend(timescope)

        return timescopes

    def get_ftrack(self, f_uids, content):
        # 转发轨迹
        if not f_uids:
            return []

        # 去重排序
        uids = sorted(set(f_uids), key=f_uids.index)
        # 获取用户名 https://weibo.com/n/%E6%9C%A8%E7%A6%BE%E9%9D%92%E9%9D%92
        uids = [unquote(i.split('/n/')[1]) for i in uids]

        tracks = []
        for u in uids:
            if '//@' + u + ':' in content:
                tracks.insert(0, u)
        
        return tracks

    def save(self, item):
        collection = self.db['wb']

        try:
            collection.insert(dict(item))
            logger.success(f'{item["username"]} -> {item["id"]} | Insert Mongodb')
            # collection.update_one({'id': item['id']}, {'$set': dict(item)}, True)
        except DuplicateKeyError:
            logger.error()(f'{item["username"]} -> {item["id"]} | Duplicated Data')
            """
            说明有重复数据
            """
            pass

        # collection.update_one({'id': item['id']}, {'$set': item}, True)

    def get_page(self, key, timescope):
        params = deepcopy(self.params)
        params.update(timescope=timescope, q=key)

        try:
            r = requests.get(self.url, params=params, headers=self.headers)
            assert r.status_code == 200
        except InvalidURL:
            return None
        except AssertionError:
            logger.error("403 Forbidden")
            return None

        html = etree.HTML(r.text)
        try:
            page = html.xpath('//ul[@action-type="feed_list_page_morelist"]/li[last()]//text()')[0]
            page = re.findall('第(\d+)页', page)[0]
        except IndexError:
            page = '1'

        logger.info(f'queried page: {page} | {key} | timescope: {timescope}')
        return page, params

    def get_html(self, page_params, timescope):
        pages, params = page_params

        for page in range(1, int(pages) + 1):
            time.sleep(1)
            params.update(page=str(page))
            logger.info(f'page={page}, timescope={timescope}')

            try:
                r = requests.get(self.url, params=params, headers=self.headers, allow_redirects=False)
                if '您可以尝试更换关键词' in r.text:
                    return
            except InvalidURL:
                return

            html = Selector(text=r.text)
            divs = html.xpath('//div[@action-type="feed_list_item"]')
            for div in divs:
                # 微博 id -> https://m.weibo.cn/detail/{mid} -> http://jermic.cc/2019/02/13/weibo-url-mid-convert/
                wbid = div.xpath('.//parent::div[@action-type="feed_list_item"]/@mid').get()

                # 用户名
                username = div.xpath('.//div[@class="info"]//a[@class="name"]/@nick-name').get()

                # 用户 uid -> https://weibo.com/u/{uid}
                href = div.xpath('.//div[@class="info"]//a[@class="name"]/@href').get()
                uid = re.findall('//weibo.com/(\d+)', href)[0]

                # 用户头像地址, 太小, 不要
                # avator_url = div.xpath('.//div[@class="avator"]/a/img/@src').get()

                # 发送时间
                origin_time = self.clear_time(div.xpath('.//p[@class="from"]/a[1]/text()').get())

                # 内容
                # 是否是展开阅读全文
                content_full = div.xpath('.//p[@node-type="feed_list_content_full" and @nick-name]//text()')
                if content_full:
                    content = self.clear_content(content_full.getall())
                else:
                    content = self.clear_content(div.xpath('.//p[@node-type="feed_list_content" and @nick-name]//text()').getall())

                # 转发, 评论, 点赞
                forward_num = self.clear_num(div.xpath('.//div[@class="card-act"]/ul/li[2]//text()').get())
                comment_num = self.clear_num(div.xpath('.//div[@class="card-act"]/ul/li[3]//text()').get())
                like_num = self.clear_num(div.xpath('.//div[@class="card-act"]/ul/li[4]/a/em/text()').get())

                # 转发
                has_forward = div.xpath('.//div[@class="content"]/div[@class="card-comment"]')
                if has_forward:
                    # 转发微博中的初始发送者
                    f_name = has_forward.xpath('.//div[@node-type="feed_list_forwardContent"]/a[1]/@nick-name').get()
                    f_href = has_forward.xpath('.//div[@node-type="feed_list_forwardContent"]/a[1]/@href').get() or ''
                    if f_href:
                        f_href = 'https:' + f_href
                
                    f_uid = re.findall('//weibo.com/(\d+)', href)[0]

                    # 所有 @ 到的人
                    f_uids = div.xpath('.//p[@node-type="feed_list_content"]//a[starts-with(@href, "//weibo.com/n/")]/@href').getall()
                    f_tracks = self.get_ftrack(f_uids, content)
                    f_tracks.insert(0, f_name or '未显示用户')
                    f_tracks.append(username or '未显示用户')
                    f_track = ' -> '.join(f_tracks)

                    f_time = self.clear_time(has_forward.xpath('.//p[@class="from"]/a[1]/text()').get())
                    f_content = self.clear_content(has_forward.xpath('.//p[@node-type="feed_list_content"]//text()').getall())

                    f_forward_num = self.clear_num(has_forward.xpath('.//ul[@class="act s-fr"]/li[1]/a/text()').get())
                    f_comment_num = self.clear_num(has_forward.xpath('.//ul[@class="act s-fr"]/li[2]/a/text()').get())
                    f_like_num = self.clear_num(has_forward.xpath('.//ul[@class="act s-fr"]/li[3]/a/em/text()').get())

                    f_item = {
                        'f_name': f_name,
                        'f_href': f_href,
                        'f_uid': f_uid,
                        'f_time': f_time,
                        'f_content': f_content,
                        'f_forward_num': f_forward_num,
                        'f_comment_num': f_comment_num,
                        'f_like_num': f_like_num,
                        'f_track': f_track,
                    }
                else:
                    f_item = None

                item = {
                    'id': wbid,  # mongodb 去重 id
                    'username': username,
                    'uid': uid,
                    'time': origin_time,
                    'forward_num': forward_num,
                    'comment_num': comment_num,
                    'like_num': like_num,
                    'content': content,
                    'f_item': f_item,
                }

                self.save(item)

    def get_queries(self):
        # 不明原因肺炎 12.31 开始, 需要细分粒度
        queries1 = self.time_range_hour((2019, 12, 12), (2020, 1, 9))
        queries2 = self.time_range_hour((2020, 1, 9), (2020, 1, 20), hour=4)
        queries3 = self.time_range_hour((2020, 1, 20), (2020, 4, 9), hour=1)

        return OrderedDict({
            '不明原因肺炎': queries1,
            '新型冠状病毒': queries2,
            '新冠': queries3
        })

    def start(self):
        queries = self.get_queries()

        for k, v in queries.items():
            for timescope in v:
                # custom:2020-01-25-6:2020-01-25-7
                day, hour = re.findall('(\d{4}-\d{2}-\d{2})-(\d+):', timescope)[0]

                if (day, int(hour)) < ('2020-03-04', 16):
                    logger.warning(f'skip {timescope}')
                    continue

                self.crawl(k, timescope)

    def crawl(self, key, timescope):
        page_params = self.get_page(key, timescope)

        items = []
        self.get_html(page_params, timescope)

        return items

    def test(self):
        key = '不明原因肺炎'
        timescope = 'custom:2020-03-04-16'
        page_params = self.get_page(key, timescope)

        items = []
        self.get_html(page_params, timescope)

        return items

if __name__ == "__main__":
    '''
    步骤
    1. 通过搜索词和时间获取查询条件
    2. 搜索入库, MongoDB
    
    !! 需要自己手动更改 cookie
    '''

    weibo = WeiBo()
    try:
        weibo.start()
    except Exception as e:
        logger.exception(e)


# page 50 但只走到 15
# queried page: 50 | 不明原因肺炎 | timescope: custom:2020-01-06-0:2020-01-07-0
