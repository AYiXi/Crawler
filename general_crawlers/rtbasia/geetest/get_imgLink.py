import json
import requests
import time

url = "https://www.tianyancha.com/verify/geetest.xhtml"
url = 'https://ip.rtbasia.com/geetest/StartCaptchaServlet'
url2 = "https://api.geetest.com/get.php"
url2 = 'https://api.geetest.com/get.php'
headers1 = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/json; charset=UTF-8",
    "Referer": "https://www.tianyancha.com/login",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
}
headers2 = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
}

def pop_ImgLink():
    req = requests.get(url=url, headers=headers2)
    obj = req.json()
    print(obj)
    callback = f"geetest_{int(time.time() * 1000)}"
    params = {
        "gt": obj["gt"],
        "challenge": obj["challenge"],
        "product": "popup",
        "offline": "false",
        "protocol": "https://",
        "type": "slide",
        "voice": "/static/js/voice.1.2.0.js",
        "beeline": "/static/js/beeline.1.0.1.js",
        "path": "/static/js/geetest.6.0.9.js",
        "maze": "/static/js/maze.1.0.1.js",
        "pencil": "/static/js/pencil.1.0.3.js",
        "callback": callback
    }
    req2 = requests.get(url=url2, headers=headers2, params=params)
    jsStr = req2.text.replace(callback, "")[1:-1]
    js_dict = json.loads(jsStr)
    return js_dict
    # return "https://static.geetest.com/" + js_dict["bg"],"https://static.geetest.com/" + js_dict["fullbg"]


if __name__ == '__main__':
    print(pop_ImgLink())