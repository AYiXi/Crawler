# -*- coding: utf-8 -*-
import re

import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy_redis.spiders import RedisCrawlSpider


class AmazonSpider(RedisCrawlSpider):
    name = 'amazon'
    allowed_domains = ['amazon.cn']
    redis_key = 'amazon'
    # start_urls = ['https://www.amazon.cn/%E5%9B%BE%E4%B9%A6/b/ref=sd_allcat_books_l1?ie=UTF8&node=658390051']

    # todo:crawlspider
    rules = (
        # 匹配大分类的url和小分类的url
        Rule(
            LinkExtractor(restrict_xpaths=('//div[@class="a-row a-expander-container a-expander-extend-container"]/li',)),
            follow=True,
        ),
        # 匹配图书的url
        Rule(
            LinkExtractor(restrict_xpaths=('//div[@id="mainResults"]/ul/li//h2/..',)),  # '..' 父标签
            callback='parse_book_detail',
        ),
        # 列表页翻页
        Rule(
            LinkExtractor(restrict_xpaths=('//div[@id="pagn"]',)),
            follow=True,
        )
    )

    # def __init__(self, *args, **kwargs):
    #     domain = kwargs.pop('domain', '')
    #     self.allowed_domains = filter(None, domain.split(','))
    #     super(AmazonSpider, self).__init__(*args, **kwargs)

    def parse_book_detail(self, response):
        item = {}
        item['url'] = response.url
        item['book_title'] = response.xpath('//span[@id="productTitle"]/text()').get()
        item['book_publish_date'] = response.xpath('//h1[@id="title"]/span[last()]/text()').get()
        item['book_author'] = response.xpath('//div[@id="byline"]/span/a/text()').getall()
        item['book_price'] = response.xpath('//div[@id="soldByThirdParty"]/span[2]/text()').get()
        item['book_cate'] = response.xpath('//div[@id="wayfinding-breadcrumbs_feature_div"]/ul/li[not(@class)]/span/a/text()').getall()
        # item['book_press'] = response.xpath('//span[@id="productTitle"]/text()').get()
        item['book_desc'] = re.findall(r'<noscript>.*?<div>(.*?)(/div).*?</noscript>', response.body.decode())
        item['book_desc'] = item['book_desc'][0].lsplit('<br>', 1)[0] if len(item['book_desc']) > 0 else None
        print(item)
