# -*- coding: utf-8 -*-
import re

import scrapy


class Github2Spider(scrapy.Spider):
    name = 'github2'
    allowed_domains = ['github.com']
    start_urls = ['https://github.com/login']

    def parse(self, response):
        yield scrapy.FormRequest.from_response(  # formname=None, formid=None 可以用这些字段定位某个具体的form
            response,  # todo:自动寻找表单登录
            formdata={'login': '821346679@qq.com', 'password': 'NIANshao1'},
            callback=self.after_login
        )

    def after_login(self, response):
        print(re.findall('AYiXi', response.body.decode()))
