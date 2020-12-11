import base64
import hashlib
import hmac
import time

API_SECRET = '0u94vkvsewic9kkgsp1r3nuq3ir0lv3n'
x_ca_key = '203789067'


def csdn_headers(page):
    x_ca_timestamp = int(time.time() * 1000)
    blink_str = 'GET\napplication/json\n\napplication/json; charset=UTF-8\n\nX-Ca-Key:{x_ca_key}\nX-Ca-Timestamp:{x_ca_timestamp}\n/blink/v1/blink/hotBlinkV2?pageNum={page}&pageSize=20'
    msg = blink_str.format(x_ca_key=x_ca_key, x_ca_timestamp=x_ca_timestamp, page=page)
    signature = hmac.new(
        key=bytes(API_SECRET, 'UTF-8'),
        msg=bytes(msg, 'UTF-8'),
        digestmod=hashlib.sha256
    )

    signature = base64.b64encode(signature.digest()).decode()

    headers = {
        'Host': 'app-gw.csdn.net',
        'x-ca-key': x_ca_key,
        'accept': 'application/json',
        'version': '4.4.3',
        'platform': 'android',
        'x-ca-signature-headers': 'X-Ca-Timestamp,X-Ca-Key',
        'x-os': 'Android',
        'x-ca-timestamp': str(x_ca_timestamp),
        'c_appversion': '4.4.3',
        'x-app-id': 'CSDN-APP',
        'content-type': 'application/json; charset=UTF-8',
        'x-ca-signature': signature,
        'user-agent': 'okhttp/3.12.0',
    }

    return headers
