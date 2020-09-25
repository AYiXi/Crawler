import json
import re
import sys
from pathlib import Path
from pprint import pprint
from urllib.parse import urljoin

import requests
from lxml import etree
from Crypto.Cipher import AES
from concurrent.futures import ThreadPoolExecutor, as_completed

# 参考: https://my.oschina.net/u/4638454/blog/4544631

class XiaoETong:
    def __init__(self):
        # cid 和 uid 在 https://apppit6dcs05916.pc.xiaoe-tech.com/auth/get_user_info?app_id=appPit6DCs05916 中存在
        self.cid = "appPit6DCs05916"  # app_id
        self.uid = "u_5e1822b8b02ac_zX589eRdpV"  # user_id
        self.rid = "p_xxxxxxxxxxxxx_xxxxxxxx"  # resource_id
        self.index_url = 'https://%(cid)s.pc.xiaoe-tech.com/index' % {'cid': self.cid}
        self.goods_url = 'https://%s.pc.xiaoe-tech.com/api/xe.goods.relation.get/1.0.0?app_id=%s' % (self.cid, self.cid)
        self.headers = {
            'Cookie'      : 'pc_user_key=34e90808c5114d9602b0fe3ae3944a5b; XIAOEID=204e6816673992ba170306bb871d5d41; cookie_channel=internaljump; channel=homepage; cookie_session_id=QmdBWK4VS8TRp7ynuHWovTeIqgtH70QZ',
            'User-Agent'  : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
            'Content-Type': 'application/json;charset=UTF-8',
        }
        self.video_dir = Path(__file__).parent / 'videos'
        Path.mkdir(self.video_dir, exist_ok=True)

    def req_index_page(self):
        r = requests.get(self.index_url)
        assert r.status_code == 200
        html = etree.HTML(r.text)
        resource_urls = html.xpath('//div[@class="hot-list"]/a/@href')
        for resource_url in resource_urls:
            # url = urljoin(self.index_url, resource_url)
            goods_id = re.search('/detail/(.*)/\d+', resource_url).group(1)
            streams = self.req_goods(goods_id)

            with ThreadPoolExecutor(max_workers=4) as executor:
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
        r = requests.post(self.goods_url, data=json.dumps(data), headers=self.headers)
        text_json = r.json()
        assert r.status_code == 200 and text_json['code'] == 0

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
                streams.append(stream)

        return streams

    def download_video(self, stream):
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
        if "EXT-X-KEY" not in text:
            print("没有加密")
            return False

        encrypt = re.findall('#EXT-X-KEY:(.*)\n', text)
        key = re.findall('URI="(.*)"', encrypt[0])
        ts_list = re.findall('EXTINF:(.*),\n(.*)\n#', text)

        keyurl = key[0]
        keycontent = requests.get(keyurl, headers=headers).content

        # 得到每一个完整视频的链接地址
        base_url = url.rsplit('/', 1)[0] + '/'
        urls = [i[1] for i in ts_list]
        ts_urls = [base_url + i for i in urls]

        # 得到解密方法，这里要导入第三方库  pycrypto
        # 这里有一个问题，安装pycrypto成功后，导入from Crypto.Cipher import AES报错
        # 找到使用python环境的文件夹，在Lib文件夹下有一个 site-packages 文件夹，里面是我们环境安装的包。
        # 找到一个crypto文件夹，打开可以看到 Cipher文件夹，此时我们将 crypto文件夹改为 Crypto 即可使用了
        # 必须添加b'0000000000000000'，防止报错ValueError: IV must be 16 bytes long
        cryptor = AES.new(keycontent, AES.MODE_CBC, b'0000000000000000')

        print('下载视频: ', stream['title'])
        path = self.video_dir / (stream['title'] + '.mp4')

        if Path(path).exists():
            print(path + '已存在了..')
            return

        try:
            for ts_url in ts_urls:
                ts_url.replace('http', 'https')
                sys.stdout.write('\r正在下载: ' + ts_url.split('?')[-1])
                sys.stdout.flush()

                r = requests.get(ts_url, headers, stream=True)

                with open(path, 'ab+') as f:
                    # 使用解密方法解密得到的视频文件
                    for chunk in r.iter_content(chunk_size=1024 * 256):
                        f.write(cryptor.decrypt(chunk))
            print('\n')
        except:
            Path(path).unlink()

if __name__ == '__main__':
    xet = XiaoETong()
    xet.req_index_page()
