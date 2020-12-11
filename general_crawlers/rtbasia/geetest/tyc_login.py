import json
from urllib.request import quote
import requests
from .track2 import crack


url2 = "https://www.tianyancha.com/cd/login.json"
headers = {
    "Content-Type": "application/json; charset=UTF-8",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
}


# user_list = ["18200******"]

while 1:
    print("登录中...")

    for i in range(5):
        url = "https://api.geetest.com/ajax.php"
        params, initData = crack()
        # print(params)
        # print(initData)
        resp = requests.get(url=url, params=params, headers=headers, timeout=15)

        obj = json.loads(resp.text[1:-1])
        if obj["message"] == "success":
            validate = obj["validate"]
            break
    else:
        validate = ""

    data = json.dumps(
        {"mobile": "18990284571", "cdpassword": "b2afb80b062d3484bd7bdd18e91d5659", "loginway": "PL", "autoLogin": False,
            "challenge": initData["challenge"], "validate": validate,
            "seccode": f"{validate}|jordan"})

    resp = requests.post(url=url2, data=data, headers=headers, timeout=15)
    data = resp.json().get("data")
    print(data)
    auth = data["token"]
    url_data = quote(quote(str(data)))
    user_cookie = {"tyc-user-info": url_data, "auth_token": auth.strip()}
    cookies = resp.cookies.get_dict()
    cookies.update(user_cookie)

    cookies_str = ';'.join([f"{i}={cookies[i]}" for i in cookies])
    break