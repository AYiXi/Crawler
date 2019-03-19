# -*- coding: utf-8 -*-
import scrapy
from urllib.parse import urlencode
import json
import re
from scrapy.selector import Selector
from twitter_crawl.items import TwitterCrawlItem
from twitter_crawl.items import TwitterCommentlItem


class TrumpSpider(scrapy.Spider):
    name = 'trump'
    allowed_domains = ['twitter.com']

    headers = {
        'cookie': 'personalization_id="v1_t8iFUJxnOsSxNRDYft5dSA=="; guest_id=v1%3A153836166937473422; _ga=GA1.2.1664495742.1538361674; dnt=1; ads_prefs="HBISAAA="; kdt=R34EiMTPCjAL5pEy76CeZsPsKXs786Xgk9dmj6zL; remember_checked_on=1; _twitter_sess=BAh7CiIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCAE3gC1mAToMY3NyZl9p%250AZCIlZmFmZGQ3NDBiYTU1NGQzOWFjYTBlNDlkZDJmODM2YTE6B2lkIiVmNDk2%250AZjYyZmI0YWU2NmMyZDZhZDdhYzUwODY2MjhhMjoJdXNlcmwrCQCwl%252BFk2FEM--8890ed96abc579b9b6fd0f710dfdd15442690da3; twid="u=887728529361842176"; auth_token=c6efc7c79bc4be94594273f801cb8d10aea459d8; csrf_same_site_set=1; csrf_same_site=1; tfw_exp=0; lang=en; _gid=GA1.2.1438302391.1551243467; external_referer=8e8t2xd8A2w%3D|0|Row7tAmsAfIEmjPNOVSmwU7WBxyUUJED%2FJi%2FFP0ccJT9RY3xcqy%2B%2Bw%3D%3D; twtr_pixel_opt_in=Y; mbox=PC#3c709382378d41fd9b4530daf9f99cd1.22_39#1552483291|session#365fabc6395846b2b118698b6bc7dbb8#1551275551|check#true#1551273751; ct0=b24b75c33ff375ceed3d0ad9e030d2cb; _gat=1',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'referer': 'https://twitter.com/search?f=tweets&vertical=default&q=from%3ArealDonaldTrump%20since%3A2006-03-21%20until%3A2019-02-27&src=typd',
        'authority': 'twitter.com',
        'x-requested-with': 'XMLHttpRequest',
        'x-twitter-active-user': 'yes',
    }


    # 第一个网址开始的位置
    position = 'thGAVUV0VFVBaEgL-Vtcmjwx4WgoCohejFucUeEjUAFQAlAAA='

    # 请求网址
    home_url = 'https://twitter.com/i/search/timeline?f=tweets&vertical=default&q=from%3ArealDonaldTrump%20since%3A2006-03-21%20until%3A2019-02-27&src=typd&include_available_features=1&include_entities=1&max_position={}&oldest_unread_id=0&reset_error_state=false'

    # data = {
    #     'f': 'tweets',
    #     'vertical': 'default',
    #     'q': 'from:realDonaldTrump since:2006-03-21 until:2019-02-27',
    #     'src': 'typd',
    #     'include_available_features': '1',
    #     'include_entities': '1',
    #     'include_new_items_bar': 'true',
    #     'interval': '30000',
    #     'latent_count': '0',
    #     'max_position': position,
    #     'oldest_unread_id': '0',
    # }

    detail_url = 'https://twitter.com/i/realDonaldTrump/conversation/1096926633708134406?include_available_features=1&include_entities=1&max_position={}&reset_error_state=false'

    def start_requests(self):
        yield scrapy.Request(self.home_url, headers=self.headers, callback=self.parse_home)

    # 所有twitter列表
    def parse_home(self, response):
        # print(response.text)
        json_text = json.loads(response.text)
        position = json_text['min_position']
        items_html = json_text['items_html']
        has_more_items = json_text['has_more_items']

        text = Selector(text=items_html)

        lis = text.xpath('//li[contains(@class, "js-stream-item")]')

        for li in lis:
            name = li.xpath('.//span[@class="FullNameGroup"]/strong/text()').get()  # 'trump'
            content = re.findall('>(.*)</p>', li.get())
            # content = re.sub('<[^>]*>', '', content.strip())  # 'i like ....'
            time = re.findall('js-tooltip" title="(.*)" data-conversation-id', li.get())[0]  # '8:11 AM - 28 Feb 2019'
            replay = re.findall('>(\d.* replies)', li.get())[0]  # '123,123'
            retweet = re.findall('>(\d.* retweets)', li.get())[0]  # '123'
            like = re.findall('>(\d.* likes)', li.get())[0]  # '43,322'
            detail_url = 'https://twitter.com' + li.xpath(
                './/div[@class="stream-item-header"]/small/a/@href').get()  # 每条评论的url 'https://twitter.com/Mandaluvspcakes/status/1101152875370237952'
            replay_retweet_like = '/'.join([t.split(' ')[0] for t in [replay, retweet, like]])  # '123,444/4,123/123,43'
            item = TwitterCrawlItem(
                name=name,
                content=content,
                time=time,
                replay_retweet_like=replay_retweet_like
            )
            print(item)
            # yield scrapy.Request(url=detail_url, headers=self.headers, meta=item, callback=self.parse_detail)

        if has_more_items:
            yield scrapy.Request(url=self.home_url.format(position), headers=self.headers, callback=self.parse_home)


    # 每条twitter的详情页
    def parse_detail(self, response):
        json_text = json.loads(response.text)
        position = json_text['min_position']
        items_html = json_text['items_html']
        has_more_items = json_text['has_more_items']

        # print(response.meta)

        tweet_url = response.meta['url']

        text = Selector(text=items_html)

        res = text.xpath('//li[contains(@class, "js-stream-item")]')
        for r in res:
            username = r.xpath('.//span[@class="FullNameGroup"]/strong/text()').get()
            try:
                time = re.findall('js-tooltip" title="(.*)" data-conversation-id', r.get())[0]
            except:
                time = None
            try:
                content = re.findall('>(.*)</p>', r.get())[0]
            except:
                content = None
            if content is not None:
                content = re.sub('<[^>]*>', '', content.strip())
            # location
            # fans
            user_url = 'https://twitter.com' + r.xpath('.//a[contains(@class,"account-group")]/@href').get()

            item = TwitterCommentlItem(
                username=username,
                time=time,
                content=content,
                user_url=user_url,
                tweet_url=tweet_url
            )

            yield item

        # if has_more_items == True:
        yield scrapy.Request(self.detail_url.format(position),
                             headers=self.headers,
                             callback=self.parse_detail,
                             meta={'url': tweet_url})
