# -*- coding: utf-8 -*-
import scrapy
from scrapy_crawlers.scrapy_crawlers.items import *
import re
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule

class HrSpider(CrawlSpider):
    name = 'hr'
    allowed_domains = ['tencent.com']
    start_urls = ['http://hr.tencent.com/position.php']

    rules = (
        Rule(LinkExtractor(allow=r'https://hr.tencent.com/position.php'),
             follow=True),
        Rule(LinkExtractor(allow=r'https://hr.tencent.com/position_detail.php'),
             callback='parse_detail',
             follow=False),
    )  # todo:有重复  restrict_css=()

    def parse_detail(self, response):
        item = {'职位名称': response.xpath('//td[@id="sharetitle"]/text()').get(),
                '工作地点': response.xpath('//tr[@class="c bottomline"]/td[1]/text()').get(),
                '职位类别': response.xpath('//tr[@class="c bottomline"]/td[2]/text()').get(),
                '招聘人数': response.xpath('//tr[@class="c bottomline"]/td[3]/text()').get()}

        responsibility = re.findall('工作职责：.*?<li>(.*?)</ul>', response.body.decode())[0].split('；')
        item['工作职责'] = [re.sub('<.*?>', '', i) for i in responsibility]

        require = re.findall('工作要求：.*?<li>(.*?)</ul>', response.body.decode())[0].split('；')
        item['工作要求'] = [re.sub('<.*?>', '', i) for i in require]

        print(item)
        yield item

    # class HrSpider(scrapy.Spider):
    #     name = 'hr'
    #     allowed_domains = ['tencent.com']
    #     start_urls = ['http://hr.tencent.com/position.php']
    #
    #     def parse(self, response):
    #         tr_list = response.xpath('//table[@class="tablelist"]/tr')[1:-1]
    #         for tr in tr_list:
    #             items = {
    #                 'title': tr.xpath('./td[1]/a/text()').get(),
    #                 'position': tr.xpath('./td[2]/text()').get(),
    #                 'location': tr.xpath('./td[4]/text()').get(),
    #                 'publish_date': tr.xpath('./td[5]/text()').get()
    #             }
    #             item = TencentItem(**items)  # todo: **items
    #
    #             yield item
    #
    #         next_url = response.xpath('//a[@id="next"]/@href').get()
    #         if next_url != 'javascript:;':
    #             next_url = 'http://hr.tencent.com/' + next_url
    #
    #             yield scrapy.Request(
    #                 next_url,
    #                 callback=self.parse
    #             )