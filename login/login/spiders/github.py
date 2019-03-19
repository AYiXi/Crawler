# -*- coding: utf-8 -*-
import re

import scrapy


class GithubSpider(scrapy.Spider):
    name = 'github'
    allowed_domains = ['github.com']
    start_urls = ['https://github.com/login']

    def parse(self, response):
        authenticity_token = response.xpath('//input[@name="authenticity_token"]/@value').get()
        utf8 = response.xpath('//input[@name="utf8"]/@value').get()
        commit = response.xpath('//input[@name="commit"]/@value').get()

        post_data = dict(
            login='821346679@qq.com',
            password='NIANshao1',
            authenticity_token=authenticity_token,
            utf8=utf8,
            commit=commit,
        )

        yield scrapy.FormRequest(
            'https://github.com/session',  # 向该网页发送一个post请求
            formdata=post_data,
            callback=self.after_login,
        )

    def after_login(self, response):
        print(re.findall('AYiXi', response.body.decode()))
