# -*- coding: utf-8 -*-
import re
from copy import deepcopy

import scrapy


class SuningSpider(scrapy.Spider):
    name = 'suning'
    allowed_domains = ['suning.com']
    start_urls = ['http://snbook.suning.com/web/trd-fl/999999/0.html']

    def parse(self, response):
        li_list = response.xpath('//ul[@class="ulwrap"]/li')
        for li in li_list:
            item = {'b_cate': li.xpath('./div[1]/a/text()').get()}
            a_list = li.xpath('./div[2]/a')

            for a in a_list:
                item['s_href'] = a.xpath('./@href').get()
                item['s_cate'] = a.xpath('./text()').get()

                if item['s_href'] is not None:
                    item['s_href'] = 'http://snbook.suning.com/' + item['s_href']
                    yield scrapy.Request(
                        item['s_href'],
                        self.parse_booklist,
                        meta={'item': deepcopy(item)}
                    )   # TODO: deepcopy 字典和列表一样不稳定，大dict包含小dict应该deepcopy

    def parse_booklist(self, response):
        item = response.meta['item']
        li_list = response.xpath('//div[@class="filtrate-books list-filtrate-books"]/ul/li')

        for li in li_list:
            item['name'] = li.xpath('.//div[@class="book-title"]/a/@title').get()
            item['image'] = li.xpath('.//div[@class="book-img"]//img/@src').get()
            if item['image'] is None:
                item['image'] = li.xpath('.//div[@class="book-img"]//img/@src2').get()
            item['author'] = li.xpath('.//div[@class="book-author"]/a/text()').get()
            item['publish'] = li.xpath('.//div[@class="book-publish"]/a/text()').get()
            item['desc'] = li.xpath('.//div[@class="book-descrip c6"]/text()').get()
            item['href'] = li.xpath('.//div[@class="book-title"]/a/@href').get()

            yield scrapy.Request(item['href'], self.parse_bookdetail, meta={'item': deepcopy(item)})

    def parse_bookdetail(self, response):
        item = response.meta['item']
        item['price'] = re.findall("\"bp\":'(.*?)',", response.body.decode())  # TODO: response.body.decode()
        item['price'] = item['price'][0] if len(item['price']) > 0 else None
        print(item)
        yield item
