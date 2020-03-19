import json
import pprint

import requests
home_url = 'https://www.twitter.com'
url = 'https://api.twitter.com/2/search/adaptive.json'
proxies = {
    "https": "https://127.0.0.1:1081"
}
headers = {
    # 'authority'                : 'api.twitter.com',
    # 'method'                   : 'GET',
    # 'path'                     : '/2/search/adaptive.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_composer_source=true&include_ext_alt_text=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&send_error_codes=true&simple_quoted_tweets=true&q=Python&count=20&query_source=typed_query&cursor=scroll%3AthGAVUV0VFVBYBFoCooJzQ4fuvIhIYxAESY8LrAAAB9D-AYk3S8an8AAAAFhEvnr0aFQAAES-G954WAAARLtxM3FdgABEvRypRFMABES7OpfOXQAARMAIt_pRwABEur9XUVqAAES8OfFOUUAARL1Iv2FdAAREvBpgHlrACETAhu8YU0AERLtumgZaQARDDVkAzlHABES-_aVVWAAARLwhkVxYAABEvi7AGVgAAEPljSzWU4AARMIP2zBeABhEvDtVfFrAHES_vqRVU4AERLvW2DVfQAREu5lNbFrABFQAVABUAFQAVABEVjIV6FYCJehgETkVXUxUAFQAA&pc=1&spelling_corrections=1&ext=mediaStats%2ChighlightedLabel%2CcameraMoment',
    # 'scheme'                   : 'https',
    # 'accept'                   : '*/*',
    # 'accept-encoding'          : 'gzip, deflate, br',
    # 'accept-language'          : 'en,zh-CN;q=0.9,zh;q=0.8',
    'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
    'cookie'       : 'personalization_id="v1_0ryuvBzC9e0EfO8QMh4AYw=="; tfw_exp=0; guest_id=v1%3A158393259915657941; _ga=GA1.2.2006580157.1583932601; des_opt_in=Y; dnt=1; ads_prefs="HBISAAA="; kdt=830f5uhEpKWNdDKtY0LCXnvtnhlGFbx2PueHLJaz; remember_checked_on=1; _twitter_sess=BAh7CiIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCPLJvclwAToMY3NyZl9p%250AZCIlOWYyMGI4ZTQ1ZTNhOGMzYTZmOTA1MTVjMzgxODg4NzM6B2lkIiU1Yjcz%250AZGYzZmExMjkwNTAwNWY4MGRiNmQ1M2EzMjZlNjoJdXNlcmwrCQCwl%252BFk2FEM--5b99c76c7183c046bde60cd932839ecff8c6f95a; csrf_same_site_set=1; rweb_optin=side_no_out; csrf_same_site=1; auth_token=a164af97d93cf309799ce6525a618523444e2587; twid=u%3D887728529361842176; external_referer=padhuUp37zggTSJRzbzC6fIm5jDRw6%2BrCdD3fF%2FV4qw%2B2%2BtaKMuzFxPok%2F6DHuf%2B||8e8t2xd8A2w%3D; ct0=b37371e05a50e3753b3dfcda6898d24c; _gid=GA1.2.20284008.1584167889',
    # 'origin'                   : 'https://twitter.com',
    # 'referer'                  : 'https://twitter.com/search?q=python%20since%3A2019-01-17&src=typed_query',
    # 'sec-fetch-dest'           : 'empty',
    # 'sec-fetch-mode'           : 'cors',
    # 'sec-fetch-site'           : 'same-site',
    # 'user-agent'               : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
    'x-csrf-token' : 'b37371e05a50e3753b3dfcda6898d24c',
    # 'x-twitter-active-user'    : 'yes',
    # 'x-twitter-auth-type'      : 'OAuth2Session',
}

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
    # 'count'                            : '99999',
    # 'query_source'                     : 'typed_query',
    # 'cursor'                           : 'scroll:thGAVUV0VFVBYBFoDo9M7Fkb2gIhIYtAESY8LrAAAB9D-AYk3S8an8AAAAFBEgKhqJ1PAAESBWsVbVAAARIEtp1NTwABEgfTkyVPACESA8GxpUYAARIBfBVBawAREf9lQvlBABESAc8xyU0AERH-XAdFVQABEgACK4lFAEESBuVuwUcAARIMdTydUAABEgaC_ClNACER_YZLMU4AARIF22whRgABEgYfQ2VGAAESBFzFJVAAARH_1AglRwABEfxnu-1QAAER_zqw8U4AAVABUAFQAVABUAERXIhXoVgIl6GAdERUZBVUxUFQAVAAA=',
    # 'pc'                               : '1',
    # 'spelling_corrections'             : '1',
    # 'ext'                              : 'mediaStats,highlightedLabel,cameraMoment',
}

sess = requests.Session()

sess.get(url, proxies=proxies, )

resp = sess.get(url, proxies=proxies, headers=headers, params=params)
# resp.encoding = 'i18n-horizon'
print(resp.text)

all_data = json.loads(resp.text)
# print(all_data)
tweets = all_data['globalObjects']['tweets']
for key in tweets.keys():
    print(tweets[key]['full_text'])
    print('\n' * 2)

print(len(tweets.keys()))
