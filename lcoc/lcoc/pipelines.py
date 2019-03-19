# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import os

from scrapy.pipelines.images import ImagesPipeline
from lcoc.settings import *

class LcocPipeline(object):
    def process_item(self, item, spider):
        return item


# class LcocImagePipeline(ImagesPipeline):
#     def get_media_requests(self, item, info):
#         # 发送下载请求之前调用
#         # 这个方法本身是发送请求的
#         request_objs = super(LcocImagePipeline, self).get_media_requests(item, info)
#         for request_obj in request_objs:
#             request_obj.item = item
#
#     def file_path(self, request, response=None, info=None):
#         # 这个方法在图片存储是调用，用来获取图片存储的路径
#         path = super(LcocImagePipeline, self).file_path(request, response, info)
#         image_name = path.replace('full/', '')
#         image_path = os.path.join(settings.IMAGE_STORE, '4KHD')
#         return image_path
