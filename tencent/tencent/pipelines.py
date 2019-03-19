# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import pymongo
from tencent.items import *

client = pymongo.MongoClient()
collection = client['python']['腾讯招聘']

class TencentPipeline(object):
    def process_item(self, item, spider):
        # spider.settings.get('MONGO_HOST')
        # if isinstance(item, TencentItem):  # todo:  isinstance(item, TencentItem) & spider.settings.get('MONGO_HOST')
        print(item)
        collection.insert(dict(item))
        return item

class MongoPipeline(object):
    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get('MONGO_URI'),  # 'localhost'
            mongo_db=crawler.settings.get('MONGO_DB'),    # 'mydb'
        )

    def open_spider(self, spider):  # 爬虫刚要启动时的操作
        self.client = pymongo.MongoClient()
        self.db = self.client[self.mongo_db]

    def process_item(self, item, spider):
        name = item.__class__.__name__   #  dict
        self.db['quotes'].insert(dict(item))
        return item

    def close_spider(self, spider):
        self.client.close()