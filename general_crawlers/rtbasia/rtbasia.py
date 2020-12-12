import asyncio
from asyncio import tasks
import json
import re
import time
from io import BytesIO
from urllib.parse import urlencode, urljoin

import aiohttp
import requests
from general_crawlers.rtbasia.geetest.encrypt import Encrypter
from general_crawlers.rtbasia.geetest.img_join import coord, crop_52
from general_crawlers.rtbasia.geetest.track1 import choice_track
from general_crawlers.rtbasia.geetest.track2 import crack, get_userresponse_a
from PIL import Image, ImageChops
from tenacity import retry, retry_if_exception_type, stop_after_attempt
from utils.decorator_utils import async_time_use


class IpCrawler:
    def __init__(self) -> None:
        self.headers = {
            # 'Content-Type': 'application/json; charset=UTF-8',
            # 'Referer': 'https://ip.rtbasia.com/',
            # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
            'Accept': '*/*',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Dest': 'script',
            'Referer': 'https://ip.rtbasia.com/',
            'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8',
        }

        self.headers2 = {
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Origin': 'https://ip.rtbasia.com',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8',
        }

        self.get_gt_url = 'https://ip.rtbasia.com/geetest/StartCaptchaServlet'
        self.get_type_url = 'https://api.geetest.com/gettype.php?gt={}&callback=geetest_{}'
        self.get_cap_url = 'https://api.geetest.com/get.php'
        self.gee_ajax_url = 'https://api.geetest.com/ajax.php'
        self.gee_static_url = 'https://static.geetest.com/'
        self.verify_cap_url = 'https://ip.rtbasia.com/geetest/VerifyLoginServlet'

    @property
    def timestamp(self):
        return int(time.time() * 1000)

    def get_json(self, data):
        return json.loads(re.findall('geetest_\d+\((\{.*\})\)', data, re.S)[0])

    @async_time_use
    @retry(stop=stop_after_attempt(10), retry=retry_if_exception_type((AssertionError, IndexError)))
    async def process(self, ip):
        async with aiohttp.ClientSession(headers=self.headers) as sess:
            gt, challenge = await self.start_captcha(sess)

            img_data = await self.get_type(sess, gt, challenge)

            ajax_params, new_challenge = await self.get_ajax_params(sess, img_data, challenge)

            async with sess.get(self.gee_ajax_url, params=ajax_params) as r:
                validate_text = json.loads((await r.text())[1:-1])

            print(validate_text)
            assert validate_text['success'] == 1
            validate = validate_text['validate']
            data = {
                'geetest_challenge': new_challenge,
                'geetest_validate': validate,
                'geetest_seccode': '{}|jordan'.format(validate),
                'geetest_t': 'need_ip_captcha,'
            }
            data = urlencode(data)
            async with sess.post(self.verify_cap_url, data=data, headers=self.headers2) as r:
                print(await r.text())
            # r = requests.post(self.verify_cap_url, data=data, headers={
            #     "Content-Type": "application/json; charset=UTF-8",
            #     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
            # })
            # print(r.text)
            # print(r.status_code)

            async with sess.get('https://ip.rtbasia.com/?ipstr={}'.format(ip)) as r:
                text = await r.text()
                x = re.findall('<span>真人概率：(.*?%)</span>', text)[0]
                print(ip,x)

            # r = requests.get(url=self.gee_ajax_url, params=params, headers=self.headers, timeout=15)
            # print(r.text)

    async def start_captcha(self, sess):
        async with sess.get(self.get_gt_url) as r:
            gt_challenge = json.loads(await r.text())

            gt, challenge = gt_challenge['gt'], gt_challenge['challenge']
            return gt, challenge

    async def get_type(self, sess, gt, challenge):
        async with sess.get(self.get_type_url.format(gt, self.timestamp)) as r:
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

        return data

    async def get_ajax_params(self, sess, img_data, challenge):
        async with sess.get(self.get_cap_url, data=img_data) as r:
            get_cap_text = await r.text()

            get_cap_json = self.get_json(get_cap_text)
            assert get_cap_json['challenge'][:32] == challenge
            
            new_challenge = get_cap_json['challenge']

            img_bg = await self.handle_img(sess, urljoin(self.gee_static_url, get_cap_json['bg']))
            img_full_bg = await self.handle_img(sess, urljoin(self.gee_static_url, get_cap_json['fullbg']))

            img = ImageChops.difference(img_bg, img_full_bg)
            coordinate = coord(img)
            track = choice_track(coordinate - 7)

            userresponse, aa = get_userresponse_a(get_cap_json, track)

            passtime = track[-1][-1]
            await asyncio.sleep(1)
            ep = Encrypter()
            params = ep.encrypted_request(get_cap_json, userresponse, passtime, aa)

        return params, new_challenge

    async def handle_img(self, sess, url):
        async with sess.get(url) as r:
            img = await r.content.read()
            img = BytesIO(img)
            img = crop_52(Image.open(img))
            return img

    def process2(self):
        params, initData = crack()
        r = requests.get(url=self.gee_ajax_url, params=params, headers=self.headers, timeout=15)

        print(r.text)
        data_json = json.loads(r.text[1:-1])
        assert data_json['message'] == 'success'
        validate = data_json['validate']

        print(validate)

    def start():
        pass


@async_time_use
async def main():
    ip_crawler = IpCrawler()
    ips = [
        '58.213.108.192',
        '58.213.108.194',
        '58.213.108.195',
        '58.213.108.196'
        '58.213.108.197'
    ]

    # loop = asyncio.get_event_loop()
    tasks = [asyncio.create_task(ip_crawler.process(ip)) for ip in ips]
    await asyncio.wait(tasks)

if __name__ == '__main__':
    asyncio.run(main())
    # ip_crawler.process2()
