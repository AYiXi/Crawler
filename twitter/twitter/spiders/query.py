# -*- coding: utf-8 -*-
import json
import re
from copy import deepcopy

import scrapy
from scrapy import Request, FormRequest
from scrapy.http import Response

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
        'q'                                : 'trump',
        'count'                            : '20',
        # 'query_source'                     : 'typed_query',
        # 'cursor'                           : 'scroll:thGAVUV0VFVBYBFoDo9M7Fkb2gIhIYtAESY8LrAAAB9D-AYk3S8an8AAAAFBEgKhqJ1PAAESBWsVbVAAARIEtp1NTwABEgfTkyVPACESA8GxpUYAARIBfBVBawAREf9lQvlBABESAc8xyU0AERH-XAdFVQABEgACK4lFAEESBuVuwUcAARIMdTydUAABEgaC_ClNACER_YZLMU4AARIF22whRgABEgYfQ2VGAAESBFzFJVAAARH_1AglRwABEfxnu-1QAAER_zqw8U4AAVABUAFQAVABUAERXIhXoVgIl6GAdERUZBVUxUFQAVAAA=',
        # 'pc'                               : '1',
        # 'spelling_corrections'             : '1',
        # 'ext'                              : 'mediaStats,highlightedLabel,cameraMoment',
    }

    def start_requests(self):
        yield FormRequest(
                url=self.url,
                formdata=self.params,
                method='GET',
        )

    def parse(self, response: Response):
        json_data = json.loads(response.text)
        self.logger.warning('OK OK OK')
        cursor = re.findall('"value":"(scroll.*?)","cursorType', response.text)[0]

        tweets = json_data['globalObjects']['tweets']
        for key in tweets.keys():
            print(tweets[key]['full_text'][:100])
            print('\n')
        print(len(tweets.keys()))

        params = deepcopy(self.params)
        params.update(cursor=cursor)
        yield FormRequest(
                url=self.url,
                formdata=params,
                method='GET',
        )
