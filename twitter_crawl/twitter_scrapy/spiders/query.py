import scrapy
import json
import re
from scrapy.selector import Selector
from twitter_scrapy.items import TwitterCommentlItem


class TrumpSpider(scrapy.Spider):
    name = 'trump'
    allowed_domains = ['twitter.com']

    headers = {
        'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
        'cookie'       : 'personalization_id="v1_0ryuvBzC9e0EfO8QMh4AYw=="; tfw_exp=0; guest_id=v1%3A158393259915657941; _ga=GA1.2.2006580157.1583932601; des_opt_in=Y; dnt=1; ads_prefs="HBISAAA="; kdt=830f5uhEpKWNdDKtY0LCXnvtnhlGFbx2PueHLJaz; remember_checked_on=1; _twitter_sess=BAh7CiIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCPLJvclwAToMY3NyZl9p%250AZCIlOWYyMGI4ZTQ1ZTNhOGMzYTZmOTA1MTVjMzgxODg4NzM6B2lkIiU1Yjcz%250AZGYzZmExMjkwNTAwNWY4MGRiNmQ1M2EzMjZlNjoJdXNlcmwrCQCwl%252BFk2FEM--5b99c76c7183c046bde60cd932839ecff8c6f95a; csrf_same_site_set=1; rweb_optin=side_no_out; csrf_same_site=1; auth_token=a164af97d93cf309799ce6525a618523444e2587; twid=u%3D887728529361842176; external_referer=padhuUp37zggTSJRzbzC6fIm5jDRw6%2BrCdD3fF%2FV4qw%2B2%2BtaKMuzFxPok%2F6DHuf%2B||8e8t2xd8A2w%3D; ct0=b37371e05a50e3753b3dfcda6898d24c; _gid=GA1.2.20284008.1584167889',
        'x-csrf-token' : 'b37371e05a50e3753b3dfcda6898d24c',
    }

    # 第一个网址开始的位置
    position = 'thGAVUV0VFVBaEwLWR9qee0h4WgIC2hfXyi-MeEhjUAhJjwusAAAH0P4BiTdLxqfwAAAAoDvmMpcfUUAAO_WpjI5bAAA4-y2YsltAAD1I8yuGWkAEOrv_llJdABg5LwazIVtAKDoRnNgcX0AEOV86l3xfQAA75jKVUlNABD2MXy6hWwAAOqL4h8VdwAA62mYX-V9AADnEVX2oW4AAPON86tZbAAg8XKRHnFsAADeS7yMHW4AAN8uUahJaQAg7kTngwlqACDu42eD7WwAEOu8AufBeAAA75jKWKlQAADm0WrfYXoAAOk7hduZeAAA6G_j2c1uAADvmMpjoVYAAPUj2IxhdAAQ70SqkrF0AADvmMpF_VAAAOtCli4dbgAA9SPJ-xFrACDjhvVLsW4AENt9f9uxdQAQ9SPO6rltAADenbuZbXkAAOtClj7tfgAA4maN5gl9AADtTt4wbWoAEOtCllZdfgAw5crOQNl9ABDsjFdRGW0AAVABUAFQAlAAA='

    # 请求网址
    # home_url = 'https://twitter.com/i/search/timeline?f=tweets&vertical=default&q=from%3ArealDonaldTrump%20since%3A2006-03-21%20until%3A2019-02-27&src=typd&include_available_features=1&include_entities=1&max_position={}&oldest_unread_id=0&reset_error_state=false'
    home_url = 'https://twitter.com/i/search/timeline?f=tweets&vertical=default&q=from%{}%20since%3A2006-03-21%20until%3A2019-02-27&src=typd&include_available_features=1&include_entities=1&max_position={}&oldest_unread_id=0&reset_error_state=false'

    comment_url = 'https://twitter.com/i/realDonaldTrump/conversation/1115057524770844672?include_available_features=1&include_entities=1&max_position={}&reset_error_state=false'

    def start_requests(self):
        yield scrapy.Request(self.comment_url, headers=self.headers, callback=self.parse_detail)

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

        text = Selector(text=items_html)

        res = text.xpath('//li[contains(@class, "js-stream-item")]')
        for r in res:
            try:
                replay = re.findall('>(\d.* replies)', r.get())[0]  # '123,123'
            except:
                replay = '0'
            try:
                retweet = re.findall('>(\d.* retweets)', r.get())[0]  # '123'
            except:
                retweet = '0'
            try:
                like = re.findall('>(\d.* likes)', r.get())[0]  # '43,322'
            except:
                like = '0'
            replay_retweet_like = '/'.join([t.split(' ')[0] for t in [replay, retweet, like]])  # '123,444/4,123/123,43'

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
                replay_retweet_like=replay_retweet_like
            )

            yield item

        if has_more_items:
            yield scrapy.Request(self.comment_url.format(position),
                                 headers=self.headers,
                                 callback=self.parse_detail,
                                 )
