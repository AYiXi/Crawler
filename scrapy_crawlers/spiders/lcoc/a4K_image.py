# -*- coding: utf-8 -*-
import scrapy
import json
from scrapy_crawlers.scrapy_crawlers.items import *
# todo:下载图片和文件

'''
内置下载器：
    避免重复
    方便指出存储路径
    可以转换为通用格式如jpg png
    方便生成缩略图
    可以检测图片宽高，确保满足最小限制
    异步下载效率非常高

下载文件的 Files Pipeline：
    定义一个item，然后在item加上 file_urls & files 属性，file_urls 是用来存储需要下载文件的url连接，需要一个列表
    当文件下载完成后，会把文件下载的相关信息存储到 item 的 files 属性中，比如下载路径、下载的url、和文件的校验码等
    在settings中配置 FILES_STORE ，用来设置文件下载的路径
    启动 pipeline

下载图片的 Images Pipeline：
    定义一个item，然后在item加上 image_urls & images 属性，image_urls 是用来存储需要下载文件的url连接，需要一个列表
    当文件下载完成后，会把文件下载的相关信息存储到 item 的 images 属性中，比如下载路径、下载的url、和文件的校验码等
    在settings中配置 IMAGES_STORE ，用来设置文件下载的路径
    启动 pipeline
'''

class A4kImageSpider(scrapy.Spider):
    name = '4K_image'
    allowed_domains = ['lcoc.top']
    # start_urls = ['http://lcoc.top/']

    def start_requests(self):
        url = 'http://lcoc.top/bizhi/api.php?cid=36&start={}&count=200'
        for i in range(0, 1000, 200):  # 提取前1000张图片
            yield scrapy.Request(url.format(i))


    def parse(self, response):
        data = json.loads(response.body.decode())
        urls = data['data']
        if urls is not None:
            image_urls = []
            for url in urls:
                image_urls.append(url['url'])

        item = LcocItem(image_urls=image_urls)
        print(item)
        yield item
