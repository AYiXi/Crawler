import asyncio
import json
import re
import time
from pprint import pprint

import aiohttp
import requests
from general_crawlers.rtbasia.geetest.track2 import crack

class IpCrawler:
    def __init__(self) -> None:
        self.headers = {
            "Content-Type": "application/json; charset=UTF-8",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
        }
        self.get_gt_url = 'https://ip.rtbasia.com/geetest/StartCaptchaServlet'
        self.get_type_url = 'https://api.geetest.com/gettype.php?gt={}&callback=geetest_{}'
        self.get_cap_url = 'https://api.geetest.com/get.php'
        self.gee_ajax_url = 'https://api.geetest.com/ajax.php'

    @property
    def timestamp(self):
        return int(time.time() * 1000)

    def get_json(self, data):
        return json.loads(re.findall('geetest_\d+\((\{.*\})\)', data, re.S)[0])

    async def process(self):
        async with aiohttp.ClientSession() as sess:
            async with sess.get(self.get_gt_url) as r:
                gt_challenge = json.loads(await r.text())

            gt, challenge = gt_challenge['gt'], gt_challenge['challenge']

            async with sess.get(self.get_type_url.format(gt_challenge['gt'], self.timestamp)) as r:
                get_type_text = await r.text()

            get_type_json = self.get_json(get_type_text)
            assert get_type_json['status'] == 'success'

            data = get_type_json['data']
            data.pop('static_servers')
            data.update({
                'gt': gt,
                'challenge': challenge,
                'product': 'embed',
                'offline': 'false',
                'protocol': 'https://',
                'callback': 'geetest_{}'.format(self.timestamp),
            })

            async with sess.get(self.get_cap_url, data=data) as r:
                get_cap_text = await r.text()

            get_cap_json = self.get_json(get_cap_text)
            assert get_cap_json['challenge'][:32] == challenge
            pprint(get_cap_json)

    def process2(self):
        params, initData = crack()
        r = requests.get(url=self.gee_ajax_url, params=params, headers=self.headers, timeout=15)

        print(r.text)
        data_json = json.loads(r.text[1:-1])
        assert data_json["message"] == "success"
        validate = data_json["validate"]

        print(validate)

    def start():
        pass


if __name__ == "__main__":
    ip_crawler = IpCrawler()
    asyncio.run(ip_crawler.process())
    # ip_crawler.process2()
