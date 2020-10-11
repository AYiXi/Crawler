# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class Re0Spider(CrawlSpider):
    name = 're0'
    allowed_domains = ['re0.co']
    start_urls = ['https://re0.co/archives/category/%E4%B8%89%E6%AC%A1%E5%85%83']  # https://re0.co/archives/3275
    cookie = 'wordpress_sec_ba841b50e34e9aca6dc69376fc9a3dc5=d68d7ebf56%7C1557142044%7CtHqxipvt4riZQIjppZrJQ4tvbtG6OdIOBivngPrjl5X%7C23a3c28af5a0bdd48d8a629b5aad7d080c811cab97baefe51965d02a8e90c0ef; __cfduid=dd7a0ce8ce8092c61e26b4db017d449f91555675372; zrz_webp=1; PHPSESSID=47a8nhnsdn8uoptvfive8tmt3m; wordpress_logged_in_ba841b50e34e9aca6dc69376fc9a3dc5=d68d7ebf56%7C1557142044%7CtHqxipvt4riZQIjppZrJQ4tvbtG6OdIOBivngPrjl5X%7C8265469c5f1a90e3f62dc44ef13692c7873e0742bb0b7a3c568e83c4c732cbd8; Hm_lvt_642b5c12f91c1349bc344e6debc16da4=1555675372,1555675505,1555932659,1555932661; Hm_lpvt_642b5c12f91c1349bc344e6debc16da4=1555936994'


    cookie = {i.split('=')[0]: i.split('=')[1] for i in cookie.split('; ')}
    print(cookie)
    headers = {
        'origin': 'https://re0.co',
        'referer': 'https://re0.co/archives/3275',
    }

    def start_requests(self):
        yield scrapy.Request(self.start_urls[0], headers=self.headers, cookies=self.cookie)  # todo:没法模拟登录

    rules = (
        Rule(LinkExtractor(allow=r'https://re0.co/archives/\d+'), callback='parse_item', follow=False),
        Rule(LinkExtractor(allow=r'https://re0.co/'), callback='parse_home', follow=True),
    )

    def parse_item(self, response):
        items = {}
        name = response.xpath('//h1/text()').get()
        href = response.xpath('//div[@class="single-file-content pos-r"]/a/@href').get()
        password = response.xpath('//div[@class="single-file-title clearfix mar10-b"]/p/text()').get()
        if password:
            tiquma = password.split('，')[0].split('：')[1]
            jieyama = password.split('，')[1]
            items['tiquma'] = tiquma
            items['jieyama'] = jieyama
        items['href'] = href
        items['name'] = name
        print(items)
        # yield items
