# -*- coding: utf-8 -*-
import json
import re
from copy import deepcopy

import scrapy
from scrapy import Request, FormRequest
from scrapy.http import Response
from loguru import logger

class QuerySpider(scrapy.Spider):
    name = 'query'
    allowed_domains = ['twitter.com']
    start_urls = ['http://twitter.com/']

    url = 'https://api.twitter.com/2/search/adaptive.json'

    params = {
        'include_profile_interstitial_type': '1',
        'include_blocking'                 : '1',
        'include_blocked_by'               : '1',
        'include_followed_by'              : '1',
        'include_want_retweets'            : '1',
        'include_mute_edge'                : '1',
        'include_can_dm'                   : '1',
        'include_can_media_tag'            : '1',
        'skip_status'                      : '1',
        'cards_platform'                   : 'Web-12',
        'include_cards'                    : '1',
        'include_composer_source'          : 'true',
        'include_ext_alt_text'             : 'true',
        'include_reply_count'              : '1',
        'tweet_mode'                       : 'extended',
        'include_entities'                 : 'true',
        'include_user_entities'            : 'true',
        'include_ext_media_color'          : 'true',
        'include_ext_media_availability'   : 'true',
        'send_error_codes'                 : 'true',
        'simple_quoted_tweets'             : 'true',
        'q'                                : 'China',
        'count'                            : '200',
        # 'query_source'                     : 'typed_query',
        # 'cursor'                           : 'scroll:thGAVUV0VFVBYBFoDo9M7Fkb2gIhIYtAESY8LrAAAB9D-AYk3S8an8AAAAFBEgKhqJ1PAAESBWsVbVAAARIEtp1NTwABEgfTkyVPACESA8GxpUYAARIBfBVBawAREf9lQvlBABESAc8xyU0AERH-XAdFVQABEgACK4lFAEESBuVuwUcAARIMdTydUAABEgaC_ClNACER_YZLMU4AARIF22whRgABEgYfQ2VGAAESBFzFJVAAARH_1AglRwABEfxnu-1QAAER_zqw8U4AAVABUAFQAVABUAERXIhXoVgIl6GAdERUZBVUxUFQAVAAA=',
        # 'pc'                               : '1',
        # 'spelling_corrections'             : '1',
        # 'ext'                              : 'mediaStats,highlightedLabel,cameraMoment',
    }

    count = 0
    tweets = set()

    def start_requests(self):
        yield FormRequest(
            url=self.url,
            formdata=self.params,
            method='GET',
        )

    def parse(self, response: Response):
        json_data = json.loads(response.text)

        cursor = re.findall('"value":"(scroll.*?)","cursorType', response.text)[0]

        tweets = json_data['globalObjects']['tweets']
        for key in tweets.keys():
            self.tweets.add(key)

        # self.count += len(tweets.keys())
        logger.success(len(self.tweets))

        params = deepcopy(self.params)
        params.update(cursor=cursor)
        yield FormRequest(
            url=self.url,
            formdata=params,
            method='GET',
        )


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
