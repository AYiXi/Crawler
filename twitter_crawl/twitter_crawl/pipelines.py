# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import pymongo

class TwitterCrawlPipeline(object):
    def process_item(self, item, spider):
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
        name = item.__class__.__name__   # dict
        self.db['trump1'].insert(dict(item))
        return item

    def close_spider(self, spider):
        self.client.close()
