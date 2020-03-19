# -*- coding: utf-8 -*-

# Scrapy settings for twitter_crawl project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://doc.scrapy.org/en/latest/topics/settings.html
#     https://doc.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://doc.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'twitter_crawl'

SPIDER_MODULES = ['twitter_crawl.spiders']
NEWSPIDER_MODULE = 'twitter_crawl.spiders'

# Crawl responsibly by identifying yourself (and your website) on the user-agent
# USER_AGENT = 'twitter_crawl (+http://www.yourdomain.com)'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Configure maximum concurrent requests performed by Scrapy (default: 16)
# CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See https://doc.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
# DOWNLOAD_DELAY = 3
# The download delay setting will honor only one of:
# CONCURRENT_REQUESTS_PER_DOMAIN = 16
# CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
COOKIES_ENABLED = True

# Disable Telnet Console (enabled by default)
# TELNETCONSOLE_ENABLED = False

# Override the default request headers:
# DEFAULT_REQUEST_HEADERS = {
#     'cookie': 'personalization_id="v1_t8iFUJxnOsSxNRDYft5dSA=="; guest_id=v1%3A153836166937473422; _ga=GA1.2.1664495742.1538361674; dnt=1; ads_prefs="HBISAAA="; kdt=R34EiMTPCjAL5pEy76CeZsPsKXs786Xgk9dmj6zL; remember_checked_on=1; _twitter_sess=BAh7CiIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCAE3gC1mAToMY3NyZl9p%250AZCIlZmFmZGQ3NDBiYTU1NGQzOWFjYTBlNDlkZDJmODM2YTE6B2lkIiVmNDk2%250AZjYyZmI0YWU2NmMyZDZhZDdhYzUwODY2MjhhMjoJdXNlcmwrCQCwl%252BFk2FEM--8890ed96abc579b9b6fd0f710dfdd15442690da3; twid="u=887728529361842176"; auth_token=c6efc7c79bc4be94594273f801cb8d10aea459d8; csrf_same_site_set=1; csrf_same_site=1; tfw_exp=0; lang=en; _gid=GA1.2.1438302391.1551243467; external_referer=8e8t2xd8A2w%3D|0|Row7tAmsAfIEmjPNOVSmwU7WBxyUUJED%2FJi%2FFP0ccJT9RY3xcqy%2B%2Bw%3D%3D; twtr_pixel_opt_in=Y; mbox=PC#3c709382378d41fd9b4530daf9f99cd1.22_39#1552483291|session#365fabc6395846b2b118698b6bc7dbb8#1551275551|check#true#1551273751; ct0=b24b75c33ff375ceed3d0ad9e030d2cb; _gat=1',
#     'accept-encoding': 'gzip, deflate, br',
#     'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8',
#     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36',
#     'accept': 'application/json, text/javascript, */*; q=0.01',
#     'referer': 'https://twitter.com/search?f=tweets&vertical=default&q=from%3ArealDonaldTrump%20since%3A2006-03-21%20until%3A2019-02-27&src=typd',
#     'authority': 'twitter.com',
#     'x-requested-with': 'XMLHttpRequest',
#     'x-twitter-active-user': 'yes',
# }

# Enable or disable spider middlewares
# See https://doc.scrapy.org/en/latest/topics/spider-middleware.html
# SPIDER_MIDDLEWARES = {
#    'twitter_crawl.middlewares.SeleniumCrawlDownloaderMiddleware': 543,
# }

# Enable or disable downloader middlewares
# See https://doc.scrapy.org/en/latest/topics/downloader-middleware.html
# DOWNLOADER_MIDDLEWARES = {
#    'twitter_crawl.middlewares.TwitterCrawlDownloaderMiddleware': 543,
# }

# Enable or disable extensions
# See https://doc.scrapy.org/en/latest/topics/extensions.html
# EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
# }

# Configure item pipelines
# See https://doc.scrapy.org/en/latest/topics/item-pipeline.html
MONGO_URI = 'localhost'
MONGO_DB = 'python'

ITEM_PIPELINES = {
    'twitter_crawl.pipelines.MongoPipeline': 300,
}

# Enable and configure the AutoThrottle extension (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/autothrottle.html
# AUTOTHROTTLE_ENABLED = True
# The initial download delay
# AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
# AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
# AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
# AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
# HTTPCACHE_ENABLED = True
# HTTPCACHE_EXPIRATION_SECS = 0
# HTTPCACHE_DIR = 'httpcache'
# HTTPCACHE_IGNORE_HTTP_CODES = []
# HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'
