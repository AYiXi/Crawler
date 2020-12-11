# -*- coding: utf-8 -*-
import json
from scrapy_crawlers.spiders.csdn import csdn_headers

import scrapy
from scrapy import Request
from scrapy.http import Response


class CsdnBlinkSpider(scrapy.Spider):
    name = 'csdn'

    query_url = 'https://app-gw.csdn.net/blink/v1/blink/hotBlinkV2?pageNum={}&pageSize=20'

    def start_requests(self):
        for p in range(1, 101):
            headers = csdn_headers(page=p)

            yield Request(
                self.query_url.format(p),
                headers=headers,
                callback=self.parse_json_page
            )

    def parse_json_page(self, response: Response):
        data_json = json.loads(response.text)

        assert data_json['code'] == 200

        for item in data_json['data']:
            yield {
                'date': item['publishDate'],
                'content': item['content'],
                'nickname': item['nickname'],
                'blinkid': item['blinkId'],
                'type': item['type']
            }
