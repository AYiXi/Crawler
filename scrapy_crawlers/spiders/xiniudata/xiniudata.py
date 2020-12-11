# 烯牛数据爬虫
# 爬取 API: https://www.xiniudata.com/project/lib
'''
逻辑: 
    第一次请求得到 company_code, 再次请求得到数据
    每次请求, body 需要加密, 结果需要解密
    个人用户最多访问 300 条

使用 nodejs 搭建本地服务器, 返回加密的参数和解密的结果

需要登录
'''


from base_settings import NODE_PORT
import json
from copy import deepcopy
from pprint import pprint

import requests
import scrapy
from scrapy.http import Response


class XiNiuSpider(scrapy.Spider):
    name = 'xiniudata'

    custom_settings = {
        'LOG_LEVEL': 'ERROR'
    }

    payload = {
        'tag_names': [],
        'corporate_regionIds': [1],
        'corporate_provinceIds': [],
        'corporate_cityIds': [],
        'corporate_districtIds': [],
        'corporate_establishDate_start': None,
        'corporate_establishDate_end': None,
        'funding_fundingDate_start': None,
        'funding_fundingDate_end': None,
        'corporate_locationIds': [],
        'corporate_rounds': [],
        'operator': 'and',
        'notFromGongshang': True,
        'sort': 76006,
        'order': -1,
        'start': 0,
        'limit': 20,
        'domestic': None
    }

    headers = {
        'authority': 'www.xiniudata.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'accept': 'application/json',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
        'content-type': 'application/json',
        'origin': 'https://www.xiniudata.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.xiniudata.com/project/lib',
        'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8',
    }

    cookie = 'btoken=TEZ59NRIXN1PPZIF3GYKG0YY4GVRDEAE; export_notice=true; utoken=HV5TJW5P3UB9WLPMULWT93JMRCSHBB1C; username=%E9%A5%AE%E5%86%B0%E5%8D%81%E5%B9%B4-%E9%9A%BE%E5%87%89%E7%83%AD%E8%A1%80'
    cookies = {i.split('=')[0]: i.split('=')[1] for i in cookie.split('; ')}

    query_url = 'https://www.xiniudata.com/api/search3/company/search_company_for_lib'
    data_url = 'https://www.xiniudata.com/api2/service/x_service/person_company4_list/list_companies4_list_by_codes'

    def start_requests(self):
        payload = deepcopy(self.payload)
        sig, payload = self.get_sig_payload(json.dumps(payload))
        data = {
            'payload': payload,
            'sig': sig,
            'v': 1
        }

        yield scrapy.Request(
            self.query_url,
            method='POST',
            body=json.dumps(data),
            callback=self.parse_query,
            headers=self.headers,
            cookies=self.cookies,
            meta={'page': 1}
        )

    def parse_query(self, response: Response):
        page = response.meta['page']
        data_json = json.loads(response.text)
        # 公司信息
        data = self.get_data(data_json['d'])
        payload = {
            'codes': [i['company_code'] for i in data['data']]
        }

        sig, payload = self.get_sig_payload(json.dumps(payload))
        req_data = {
            'payload': payload,
            'sig': sig,
            'v': 1
        }

        yield scrapy.Request(
            self.data_url,
            method='POST',
            body=json.dumps(req_data),
            callback=self.parse_item,
            headers=self.headers,
            cookies=self.cookies,
            meta={'page': page}
        )

        if page == 1:
            total = 300  
            for p in range(20, total, 20):
                payload = deepcopy(self.payload)
                payload.update(start=p)
                sig, payload = self.get_sig_payload(json.dumps(payload))
                data = {
                    'payload': payload,
                    'sig': sig,
                    'v': 1
                }

                yield scrapy.Request(
                    self.query_url,
                    method='POST',
                    body=json.dumps(data),
                    callback=self.parse_query,
                    meta={'page': p},
                    cookies=self.cookies,
                    headers=self.headers,
                )

    def parse_item(self, response: Response):
        data_json = json.loads(response.text)
        # 公司信息
        data = self.get_data(data_json['d'])
        for i in data['list']:

            pprint({
                'id': i['id'],
                'name': i['name'],
                'brief': i['brief']
            })

    def get_sig_payload(self, payload):
        r = requests.get('http://127.0.0.1:{}/xiniu/payload/?e={}'.format(NODE_PORT, payload)).json()
        return r['sig'], r['payload']

    def get_data(self, data):
        r = requests.post('http://127.0.0.1:{}/xiniu/jiemi/'.format(NODE_PORT), data={'e': data})
        return json.loads(r.text)
