# https://www.cods.org.cn/ APP 安卓逆向

import requests
from tenacity import retry
import uuid
from urllib.parse import quote, urlencode
from hashlib import md5
import random
from concurrent.futures import ThreadPoolExecutor, as_completed

class Crawler:
    def __init__(self) -> None:
        self.secret_key = 'A523B4A5C52203AA9C2D97F6CB45CB35'
        self.search_url = 'https://ss.cods.org.cn:8443/APPService/search/searchR'
        self.login_url = 'https://ss.cods.org.cn:8443/APPService/usercenter/validateLogin'

        # self.payload = "jsonString=%257B%2522zczj%2522%253A%2522%2522%252C%2522userId%2522%253A%2522%2522%252C%2522xzqh%2522%253A%2522%2522%252C%2522q%2522%253A%2522%25E7%2599%25BE%25E5%25BA%25A6%2522%252C%2522longitudeApp%2522%253A%2522%2522%252C%2522um%2522%253A%2522%2522%252C%2522t%2522%253A%2522common%2522%252C%2522isDeepSearch%2522%253A%2522false%2522%252C%2522osname%2522%253A%2522Android%2B6.0.1%2528MuMu%2529%2522%252C%2522dimensionApp%2522%253A%2522%2522%252C%2522version%2522%253A%2522v1.4.2%2522%252C%2522jglx%2522%253A%2522%2522%252C%2522clrq%2522%253A%2522%2522%252C%2522currentPage%2522%253A7%252C%2522misskey%2522%253A%2522%25257B%252522sw%252522%25253A1053%25252C%252522sh%252522%25253A1872%25252C%252522dpi%252522%25253A416%25252C%252522point1%252522%25253A%25257B%252522x%252522%25253A611.54504%25252C%252522y%252522%25253A420.9077%25257D%25252C%252522point2%252522%25253A%25257B%252522x%252522%25253A732.2959%25252C%252522y%252522%25253A439.74466%25257D%25257D%2522%252C%2522channel%2522%253A%2522common%2522%252C%2522userCookie%2522%253A%2522541947bc4f0e45fbb579a539788e42f5%2522%257D&sign=6442b4ae48721f68022bc8a7052543eb"
        self.headers = {
            # 可以不要 cookie
            'Cookie': 'JSESSIONID=16A16966817F349F926C237EB1CDBEE7',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 6.0.1; MuMu Build/V417IR)',
            'Host': 'ss.cods.org.cn:8443',
            'Accept-Encoding': 'gzip',
            'Content-Length': '0'
        }
        self.cert_path = "./border_ks_20.pem"

    @property
    def get_random_uuid(self):
        return str(uuid.uuid4()).replace('-', '')

    def get_sign(self, json_string):
        return md5((quote(json_string) + self.secret_key).encode()).hexdigest()

    @property
    def get_random_xy(self):
        a = random.randint(300, 700)
        b = str(random.random())[2:][-random.randint(3, 5):]

        return str(a) + '.' + b

    def get_search_payload(self, query, page):
        # TODO: 新增查询
        # x, y 都需要随机
        misskey = '{"sw":1053,"sh":1872,"dpi":416,"point1":{"x":%s,"y":%s},"point2":{"x":%s,"y":%s}}' % (self.get_random_xy, self.get_random_xy, self.get_random_xy, self.get_random_xy)
        json_string = '{"zczj":"","userId":"","xzqh":"","q":"腾讯","longitudeApp":"","um":"","t":"common","isDeepSearch":"false","osname":"Android+6.0.1(MuMu)","dimensionApp":"","version":"v1.4.2","jglx":"","clrq":"","currentPage":1,"misskey":"%s","channel":"common","userCookie":"%s"}' % (quote(misskey), self.get_random_uuid)
        sign = self.get_sign(json_string)
        payload = {
            'jsonString': quote(json_string),
            'sign': sign
        }

        return urlencode(payload)

    def get_login_payload(self):
        user_cookie = self.get_random_uuid
        username = '1674xxxx300'
        pwd = 'qwer1234'
        json_string = '{"user_pswd":"%s","osname":"Android+6.0.1(MuMu)","dimensionApp":"23.12866761304201","version":"v1.4.2","longitudeApp":"113.3677213563342","user_name":"%s","channel":"common","userCookie":"%s"}' % (pwd, username, user_cookie)
        sign = self.get_sign(json_string)

        payload = {
            'jsonString': quote(json_string),
            'sign': sign
        }

        return urlencode(payload)

    def get_ip(self):
        ip = requests.get('http:///10.xxxx.178:8021/getProxy?spider=zhongdengwang').json()
        assert ip['msg'] == 'success'

        return ip

    def put_ip(self, proxy, status):
        url = 'http://10.xxxx.178:8021/putResult?'
        queryData = {
            'proxy': proxy,
            'spider': 'zhongdengwang',
            'status': status
        }
        resp = requests.get(url, params=queryData)
        print(resp.json())

    def start(self):
        ip = self.get_ip()
        print(ip)
        proxies = {
            'http': 'http://{}'.format(ip['data']),
            'https': 'http://{}'.format(ip['data']),
        }
        r = requests.post(self.search_url, data=self.get_payload(), headers=self.headers, proxies=proxies, cert=self.cert_path, timeout=10)
        # print(r.text)

        self.put_ip(ip['data'], ip['status'])

        return r.text, ip

    def login(self):
        ip = self.get_ip()
        print(ip)
        proxies = {
            'http': 'http://{}'.format(ip['data']),
            'https': 'http://{}'.format(ip['data']),
        }
        r = requests.post(self.login_url, data=self.get_login_payload(), headers=self.headers, proxies=proxies, cert=self.cert_path, timeout=10)
        print(r.text)

        self.put_ip(ip['data'], ip['status'])

        return r.text, ip

def test_proxy():
    c = Crawler()
    succ_count = 0

    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(c.start) for i in range(1000)]

        for future in as_completed(futures):
            if future.exception():
                print(future.exception())
            else:
                text, ip = future.result()
                if '腾讯' in text:
                    succ_count += 1
                    print('成功的ip:', ip['data'], '成功次数:', succ_count)
                else:
                    print('失败的ip:', ip['data'])

    print(f'成功率: {succ_count / 1000 * 100}%')

if __name__ == "__main__":
    c = Crawler()
    c.login()
    # print(c.get_payload())