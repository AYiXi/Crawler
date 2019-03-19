# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class TencentItem(scrapy.Item):
    # define the fields for your item here like:
    title = scrapy.Field()
    position = scrapy.Field()
    location = scrapy.Field()
    publish_date = scrapy.Field()
    numbers = scrapy.Field()
    category = scrapy.Field()
    responsibility = scrapy.Field()
    require = scrapy.Field()


