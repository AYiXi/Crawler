import requests
from scrapy import Selector

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Cookie': '_s_tentry=-; Apache=9256142635775.578.1586684948674; SINAGLOBAL=9256142635775.578.1586684948674; ULV=1586684948682:1:1:1:9256142635775.578.1586684948674:; TC-V5-G0=4de7df00d4dc12eb0897c97413797808; login_sid_t=8531eaf3811f18290b02710e91320820; cross_origin_proto=SSL; Ugrow-G0=6fd5dedc9d0f894fec342d051b79679e; UOR=,,www.baidu.com; wb_view_log=2560*14401.3499999046325684; SCF=AiOVpvljsXt7lWGPNAQVxf55fkdBWN6y7lG4nlv-akDYgbNGVPew8-GLdHZ28yZd7_U-KvpP4TNiD1SUsCj-yZo.; SUB=_2A25zlpTeDeRhGeNK41oQ8SbPzj2IHXVQ5YEWrDV8PUNbmtAKLVPtkW9NSQdFEFJarw2o5kfAGLePfp0NRfC-MNWu; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhbEep_szqecD_H0rINazRe5JpX5K2hUgL.Fo-X1hnpeKn0SK22dJLoI0MLxKMLB-zL12zLxKBLBonL1KqLxKnL1h5L1h-LxK-L1h-L1hnLxKMLB-zL12zLxK-LB.qL1hSk; SUHB=0gHSBNkeqJq35O; ALF=1587289869; SSOLoginState=1586685070; secsys_id=1e01cd1dfe26dbb82e13c9203c1c99c0; wb_view_log_5488118351=2560*14401.3499999046325684; TC-Page-G0=04dc502e635144031713f186989293c7|1586704322|1586704206; webim_unReadCount=%7B%22time%22%3A1586704489536%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A3%2C%22msgbox%22%3A0%7D',
    'Host': 'weibo.com',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
}


url = 'https://weibo.com/u/1978895060'

# resp = requests.get(url, headers=headers)
# print(resp.text)


def get_fans(href=url):
    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Cookie': '_s_tentry=-; Apache=9256142635775.578.1586684948674; SINAGLOBAL=9256142635775.578.1586684948674; ULV=1586684948682:1:1:1:9256142635775.578.1586684948674:; TC-V5-G0=4de7df00d4dc12eb0897c97413797808; login_sid_t=8531eaf3811f18290b02710e91320820; cross_origin_proto=SSL; Ugrow-G0=6fd5dedc9d0f894fec342d051b79679e; UOR=,,www.baidu.com; wb_view_log=2560*14401.3499999046325684; SCF=AiOVpvljsXt7lWGPNAQVxf55fkdBWN6y7lG4nlv-akDYgbNGVPew8-GLdHZ28yZd7_U-KvpP4TNiD1SUsCj-yZo.; SUB=_2A25zlpTeDeRhGeNK41oQ8SbPzj2IHXVQ5YEWrDV8PUNbmtAKLVPtkW9NSQdFEFJarw2o5kfAGLePfp0NRfC-MNWu; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhbEep_szqecD_H0rINazRe5JpX5K2hUgL.Fo-X1hnpeKn0SK22dJLoI0MLxKMLB-zL12zLxKBLBonL1KqLxKnL1h5L1h-LxK-L1h-L1hnLxKMLB-zL12zLxK-LB.qL1hSk; SUHB=0gHSBNkeqJq35O; ALF=1587289869; SSOLoginState=1586685070; secsys_id=1e01cd1dfe26dbb82e13c9203c1c99c0; wb_view_log_5488118351=2560*14401.3499999046325684; TC-Page-G0=04dc502e635144031713f186989293c7|1586704322|1586704206; webim_unReadCount=%7B%22time%22%3A1586704489536%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A3%2C%22msgbox%22%3A0%7D',
        'Host': 'weibo.com',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
    }

    resp = requests.get(href, headers=headers)
    print(resp.text)
    html = Selector(text=resp.text)
    fans = html.xpath('//strong[@class="W_f16"]/text()').getall()
    print(fans)


get_fans()
