import requests

url = 'https://www.twitter.com'
proxies = {
    "http" : "http://127.0.0.1:1081",
    "https": "https://127.0.0.1:1081"
}


resp = requests.get(url, proxies=proxies)

print(resp.text)


