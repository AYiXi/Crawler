import scrapy
from scrapy import cmdline
from scrapy.http import Request
import requests

class BgmSpider(scrapy.Spider):
    name = 'bgm'

    def start_requests(self):
        for i in range(1, 51):
            url = 'http://www.tukuppt.com/yinxiao/{}.html'.format(i)
            yield Request(url)

    def parse(self, response):
        titles = response.css('.title::text').extract()
        bgm_url = response.xpath('//audio/source/@src').extract()

        for i, title in enumerate(titles):
            with open('F:\Library\Bgm\{}{}'.format(title, '.mp3'), 'wb') as f:
                content = requests.get(bgm_url[i]).content
                f.write(content)
        yield


if __name__ == '__main__':
    cmdline.execute("scrapy crawl bgm".split())