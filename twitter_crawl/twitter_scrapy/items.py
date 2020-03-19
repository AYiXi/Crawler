# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


d = {
    'name': 'trump',
    'date': '2019/2/25',
    'replay_retweet_like': '20K/40K/100K',
    'top_comment': ['fff', 'fff'],
    'comment_user_1': ['mike', 'tokyo', '300'],
    'comment_user_2': ['mike', 'tokyo', '300'],
    'comment_user_3': ['mike', 'tokyo', '300'],
    'comment_user_4': ['mike', 'tokyo', '300'],
    'comment_user_5': ['mike', 'tokyo', '300']
}


class TwitterCrawlItem(scrapy.Item):
    name = scrapy.Field()
    date = scrapy.Field()
    content = scrapy.Field()
    time = scrapy.Field()
    replay_retweet_like = scrapy.Field()
    top_comment = scrapy.Field()


class TwitterCommentlItem(scrapy.Item):
    username = scrapy.Field()
    time = scrapy.Field()
    content = scrapy.Field()
    location = scrapy.Field()
    fans = scrapy.Field()
    user_url = scrapy.Field()
    tweet_url = scrapy.Field()
    replay_retweet_like = scrapy.Field()