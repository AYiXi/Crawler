import requests
import scrapy
from scrapy.http import Request
import re
import os
import time

class XimageSpider(scrapy.Spider):
    name = 'ximage'

    def start_requests(self):
        for i in range(1, 35):
            url = f'http://999tv.co/videos?o=mr&page={i}'
            yield Request(url)

    def parse(self, response):
        for n in range(24):
            url = response.css(".thumb-overlay img::attr(src)").extract()[n]
            name = response.xpath("//div[@class='thumb-overlay']/img/@title").extract()[n]
            real_url = response.css(".well.well-sm a::attr(href)").extract()[n]
            img_urls = re.sub('\d+.jpg', '{}.jpg', url)

            dir_name = os.path.join(r'D:\Source\ximages', name)
            if not os.path.exists(dir_name):
                os.mkdir(dir_name)
            else:
                dir_name = os.path.join(r'D:\Source\ximages', name + str(n))
                os.mkdir(dir_name)

            for i in range(1, 21):
                img_url = img_urls.format(i)
                self.down_image(img_url, name, i, real_url, dir_name)

    def down_image(self, img_url, name, i, real_url, dir_name):
        # http://120.52.51.30/cdn.cache1.us/media/videos/tmb/912/20.jpg

        image = os.path.join(dir_name, name[:10] + f'{i}.jpg')
        with open(image, 'wb') as f:
            f.write(requests.get(img_url).content)
            print(f'from {name[:10]} downloading the {i} pictures... ')

        with open(os.path.join(dir_name, 'url.txt'), 'w') as f1:
            f1.write('http://999tv.co' + real_url)


