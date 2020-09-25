import json
import re
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from pprint import pprint

import requests
from Crypto.Cipher import AES
from lxml import etree


# 参考: https://my.oschina.net/u/4638454/blog/4544631

class XiaoETong:
    def __init__(self):
        # cid 和 uid 在 https://apppit6dcs05916.pc.xiaoe-tech.com/auth/get_user_info?app_id=appPit6DCs05916 中存在
        self.cid = "appPit6DCs05916"  # app_id
        self.uid = "u_5e1822b8b02ac_zX589eRdpV"  # user_id
        self.rid = "p_xxxxxxxxxxxxx_xxxxxxxx"  # resource_id
        self.index_url = 'https://%(cid)s.pc.xiaoe-tech.com/index' % {'cid': self.cid}
        self.goods_url = 'https://%s.pc.xiaoe-tech.com/api/xe.goods.relation.get/1.0.0?app_id=%s' % (self.cid, self.cid)
        self.live_url = 'https://{}.pc.xiaoe-tech.com/alive/xe.alive.page.get/1.0.0?app_id={}'.format(self.cid, self.cid)
        self.article_url = 'https://{}.pc.xiaoe-tech.com/api/xe.goods.detail.get/2.0.0?app_id={}'.format(self.cid, self.cid)
        self.from_id_url = 'https://{}.pc.xiaoe-tech.com/api/xe.goods.about.products.get/1.0.0?app_id={}'.format(self.cid, self.cid)

        self.headers = {
            'Cookie'      : 'pc_user_key=34e90808c5114d9602b0fe3ae3944a5b; XIAOEID=204e6816673992ba170306bb871d5d41; cookie_channel=internaljump; channel=homepage; cookie_session_id=QmdBWK4VS8TRp7ynuHWovTeIqgtH70QZ',
            'User-Agent'  : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
            'Content-Type': 'application/json;charset=UTF-8',
        }
        self.video_dir = Path(__file__).parent / 'videos'
        Path.mkdir(self.video_dir, exist_ok=True)

        self.article_dir = Path(__file__).parent / 'articles'
        Path.mkdir(self.article_dir, exist_ok=True)

    def get_response(self, url, data):
        # 通用的 post 请求
        r = requests.post(url, data=json.dumps(data), headers=self.headers)
        text_json = r.json()
        assert r.status_code == 200 and text_json['code'] == 0

        return r, text_json

    def start(self):
        # 请求商品页
        r = requests.get(self.index_url)
        assert r.status_code == 200
        html = etree.HTML(r.text)
        resource_urls = html.xpath('//div[@class="hot-list"]/a/@href')
        for resource_url in resource_urls:
            # 遍历商品
            goods_id = re.search('/detail/(.*)/\d+', resource_url).group(1)
            # 拿到视频资源
            streams = self.req_goods(goods_id)

            # 多线程下载视频
            with ThreadPoolExecutor(max_workers=8) as executor:
                futures = [executor.submit(self.download_video, stream) for stream in streams]

    def req_goods(self, goods_id, last_id=None):
        streams = []

        data = {
            "page_size"    : 20,
            "goods_id"     : "%s" % goods_id,
            "last_id"      : last_id or "",
            "goods_type"   : 6,
            "resource_type": [1, 2, 3, 4, 20],
            "order_type"   : 0
        }
        r, text_json = self.get_response(self.goods_url, data)

        # 如果有下一页
        if 'last_id' in text_json['data']:
            streams_ = self.req_goods(goods_id, text_json['data']['last_id'])
            streams.extend(streams_)

        for good in text_json['data']['goods_list']:
            video_m3u8_url = good['video_m3u8_url']
            stream = {
                'title'    : good['title'],
                'video_url': video_m3u8_url
            }
            if video_m3u8_url:
                # 视频, 返回视频地址信息
                pprint(stream)
                streams.append(stream)
            elif good['video_length'] > 0:
                # 直播, 返回视频地址信息
                stream = self.req_live(live_id=good['resource_id'])
                streams.append(stream)
            elif good['video_length'] == 0:
                # 图文, 直接保存 html
                path = self.req_article(resource_id=good['resource_id'])
                print('文章', path, '已经下载.')

        return streams

    def req_live(self, live_id):
        # 请求直播视频信息
        data = {
            "alive_id": live_id,
            "app_id"  : self.cid,
            "user_id" : self.uid
        }
        r, text_json = self.get_response(self.live_url, data)

        return {
            'title'    : text_json['data']['title'],
            'video_url': text_json['data']['mini_alive_video_url']
        }

    def req_article(self, resource_id):
        # 请求网页文本
        from_id = self.req_article_from_id(resource_id)

        data = {
            "goods_id"  : resource_id,
            "goods_type": 1,
            "from_id"   : from_id,
            "type"      : "6"
        }
        r, text_json = self.get_response(self.article_url, data)

        path = self.article_dir / (text_json['data']['title'] + '.html')
        content = text_json['data']['content']

        if path.exists():
            print(path, '已存在了..')
            return

        with open(path, 'w') as f:
            f.write(
                '''<!doctype html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Document</title>
                </head>
                <body>\n
                '''
            )
            f.write(content)
            f.write('''\n</body></html>''')

        return path

    def req_article_from_id(self, resource_id):
        # 请求文章需要的 from_id
        data = {
            "resource_id"  : resource_id,
            "resource_type": 1
        }

        r, text_json = self.get_response(self.from_id_url, data)

        return text_json['data']['relation_list'][0]['id']

    def download_video(self, stream):
        print('下载视频: ', stream['title'])
        path = self.video_dir / (stream['title'] + '.mp4')

        if path.exists():
            print(path, '已存在了..')
            return

        url = stream['video_url']

        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
        }
        r = requests.get(url, headers=headers)
        text = r.text
        assert r.status_code == 200

        if "#EXTM3U" not in text:
            print("这不是一个m3u8的视频链接！")
            return False

        # 得到每一个完整视频的链接地址
        ts_list = re.findall('EXTINF:(.*),\n(.*)\n#', text)
        base_url = url.rsplit('/', 1)[0] + '/'
        urls = [i[1] for i in ts_list]
        ts_urls = [base_url + i for i in urls]

        encrypt = re.findall('#EXT-X-KEY:(.*)\n', text)
        if encrypt:
            # 得到解密方法，这里要导入第三方库  pycrypto
            # 这里有一个问题，安装pycrypto成功后，导入from Crypto.Cipher import AES报错
            # 找到使用python环境的文件夹，在Lib文件夹下有一个 site-packages 文件夹，里面是我们环境安装的包。
            # 找到一个crypto文件夹，打开可以看到 Cipher文件夹，此时我们将 crypto文件夹改为 Crypto 即可使用了
            # 必须添加b'0000000000000000'，防止报错ValueError: IV must be 16 bytes long

            key = re.findall('URI="(.*)"', encrypt[0])
            keyurl = key[0]
            keycontent = requests.get(keyurl, headers=headers).content
            cryptor = AES.new(keycontent, AES.MODE_CBC, b'0000000000000000')

        try:
            for ts_url in ts_urls:
                ts_url.replace('http', 'https')
                sys.stdout.write('\r正在下载: ' + ts_url.split('?')[-1])
                sys.stdout.flush()

                r = requests.get(ts_url, headers, stream=True)

                with open(path, 'ab+') as f:
                    # 使用解密方法解密得到的视频文件
                    for chunk in r.iter_content(chunk_size=1024 * 256):
                        if encrypt:
                            chunk = cryptor.decrypt(chunk)
                        f.write(chunk)
            print('\n')
        except:
            path.unlink()


if __name__ == '__main__':
    xet = XiaoETong()
    xet.start()
    # xet.download_video(stream={
    #     'title'    : 'live-阶段答疑',
    #     'video_url': 'https://1252524126.vod2.myqcloud.com/9764a7a5vodtransgzp1252524126/3a0469825285890805971423010/drm/v.f230.m3u8'
    # })

