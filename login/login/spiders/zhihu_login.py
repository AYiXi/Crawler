# -*- coding: utf-8 -*-
import re

import scrapy


class LoginSpider(scrapy.Spider):
    name = 'login'
    allowed_domains = ['www.zhihu.com']
    start_urls = ['https://www.zhihu.com/people/mengLV/activities']

    # cookies 放在 headers里面无效
    cookies = '_zap=e87ad648-c29c-4feb-bd80-26ad2a1e3ea8; _xsrf=5ab607b3-df13-4c09-8e87-efb161009888; d_c0="AFClZNgmPw6PTnC7uiuyRo7P6V-oLcQeElA=|1537536210"; _ga=GA1.2.1778749343.1537677483; l_n_c=1; n_c=1; __utma=155987696.1778749343.1537677483.1542181556.1542181556.1; __utmc=155987696; __utmz=155987696.1542181556.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); tst=h; q_c1=af8a73eb237a49faa509d5fd228172e9|1550375251000|1541173686000; tgw_l7_route=537a925d07d06cecbf34cd06a153f671; capsion_ticket="2|1:0|10:1552705027|14:capsion_ticket|44:ODA0MGE5MGRjYTcyNGEzYTkwMTZjMTIyMTA5OGEzZGI=|7b0776349f6a468a1b39f9372eef58b447182fce656ad2ea81b6349808478593"; z_c0="2|1:0|10:1552705031|4:z_c0|92:Mi4xYVpHNkFnQUFBQUFBVUtWazJDWV9EaVlBQUFCZ0FsVk5CN1I1WFFBN3EzRWJtVlBQRjg0NHc0Qkx6REV3RXhoMGN3|bff8dcf6dd203b20c00f00c63862246e4cba9034626165b471c05cfc98896f1f"'
    cookies = {i.split('=')[0]: i.split('=')[1] for i in cookies.split('; ')}

    def parse(self, response):
        print(response.body.decode('utf8'))
        print(re.findall('饮冰十年难凉热血', response.body.decode()))
        yield scrapy.Request(
            self.start_urls[0],
            callback=self.parse,
            cookies=self.cookies  # todo:这样cookies才有效
        )
