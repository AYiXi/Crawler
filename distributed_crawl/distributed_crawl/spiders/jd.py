# -*- coding: utf-8 -*-
import json
from copy import deepcopy
# from scrapy_redis.spiders import RedisSpider

import scrapy
from urllib.parse import urljoin

'''
"dmoz:requests": (zset)  [zrange "dmoz:requests" 0 -1]
    待请求的request对象，已经序列化，读出来要反序列化

"dmoz:items": (list) [lrange "dmoz:items" 0 -1]
    通过'scrapy_redis.pipelines.RedisPipeline'保存

"dmoz:dupefilter" (set) [smembers "dmoz:dupefilter"]
    已经抓到过的request请求


scrapy-redis 去重方法
- 使用sha1加密request得到指纹
- 把指纹存在redis的set中
- 下一次新的request，同样生成指纹，判断是否存在

生成指纹
fp = hashlib.sha1()
fp.update(to_bytes(request.method))  # 请求方法
fp.update(to_bytes(canonicalize_url(request.url))) # url
fp.update(request.body or 'b') # 请求体
return fp.hexdigest()

判断数据是否在redis的集合中，不存在插入
added = self.server.sadd(self.key, fp)
return added != 0
'''


# todo : scrapy-redis 断点续爬

class JdSpider(scrapy.Spider):
    name = 'jd'
    allowed_domains = ['jd.com', 'p.3.cn']  # TODO:记得添加
    start_urls = ['https://book.jd.com/booksort.html']

    def parse(self, response):
        dt_list = response.xpath('//div[@class="mc"]/dl/dt')  # 大分类列表
        for dt in dt_list:
            item = {}
            item['b_cate'] = dt.xpath('./a/text()').get()
            em_list = dt.xpath('./following-sibling::dd[1]/em')  # 小分类列表
            for em in em_list:
                item['s_href'] = em.xpath('./a/@href').get()
                item['s_href'] = 'https:' + item['s_href']
                item['s_cate'] = em.xpath('./a/text()').get()
                if item['s_href'] is not None:
                    yield scrapy.Request(
                        url=item['s_href'],
                        callback=self.parse_book_list,
                        meta={'item': item}
                    )

    def parse_book_list(self, response):
        item = response.meta['item']
        li_list = response.xpath("//div[@id='plist']/ul/li")
        for li in li_list:
            item['book_img'] = li.xpath('.//div[@class="p-img"]//img/@src').get()
            if item['book_img'] is None:
                item['book_img'] = li.xpath('.//div[@class="p-img"]//img/@data-lazy-img').get()
            item['book_img'] = 'https:' + item['book_img'] if item['book_img'] is not None else None
            item['book_name'] = li.xpath('.//div[@class="p-name"]/a/em/text()').get().strip()
            item['book_author'] = li.xpath('.//span[@class="author_type_1"]/a/text()').getall()
            item['book_press'] = li.xpath('.//span[@class="p-bi-store"]/a/@title').get()
            item['book_publish_date'] = li.xpath('.//span[@class="p-bi-date"]/text()').get().strip()
            item['book_sku'] = li.xpath('./div/@data-sku').get()
            urls = 'https://p.3.cn/prices/mgets?skuIds=J_{}'.format(item['book_sku'])

            yield scrapy.Request(
                url=urls,
                callback=self.parse_book_price,
                meta={'item': deepcopy(item)},
            )
            print(item)

        # 列表页翻页
        next_url = response.xpath('//a[@class="pn-next"]/@href').get()
        if next_url is not None:
            next_url = urljoin(response.url, next_url)
            yield scrapy.Request(
                next_url,
                callback=self.parse_book_list,
                meta={'item': item}
            )

    def parse_book_price(self, response):
        item = response.meta['item']
        item['book_price'] = json.loads(response.body.decode())[0]['op']
        print(item)  # todo:被封了，需要验证

        '''
        <GET https://p.3.cn/prices/mgets?skuIds=J_17852039063> (referer: https://list.jd.com/list.html?cat=1713,13627,13628&tid=13628&page=2&sort=sort_rank_asc&trans=1&JL=6_0_0)
        '''
