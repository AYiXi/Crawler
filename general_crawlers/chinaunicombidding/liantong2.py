# 瑞数 5.5, 来自 齐天宇

import execjs
import requests
from lxml import etree
import re
from multiprocessing.dummy import Pool
def request1():

    url = 'http://www.chinaunicombidding.cn/jsp/cnceb/web/info1/infoList.jsp?page=4'
    session = requests.Session()
    session.headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
    }
    res_first = session.get(url,allow_redirects=False, timeout=10, verify=False)
    if res_first.status_code in [412, 202]:
        cook = []
        for k, v in session.cookies.items():
            if k == "proxyBase":
                continue
            cook.append(f"{k}={v}")
        cookies = "; ".join(cook)
    meta_content = re.findall('<meta content="(.*?)"',res_first.text.replace('\n',''))[0]
    content = re.findall('\(function\(\).*?\}\}\}\)\(\)',res_first.text)[0]
    content = content.replace("(function()", "function a()")
    content = content.replace("}}}}}}}})()", "}}}}}}}}")
    content = 'window.eval=eval;\n' +content
    content = 'var js_str = "";\n' +content
    content = 'document={};\n' +content
    content = re.sub('_\$.{2}\[_\$.{2}\[27\]\]\.length','{}',content)
    jt = re.findall('_\$.{2}=_\$.{2}\[_\$.{2}\[49]]\(_\$.{2},(_\$.{2})\);',content)[0]
    content = re.sub('_\$.{2}=_\$.{2}\[_\$.{2}\[49]]\(_\$.{2},_\$.{2}\)','js_str = {};main_ts=window.$_ts;'.format(jt),content)
    content += '(function get_main_js() {a();return {"js_str":js_str, "main_ts":main_ts};})()'
    with open('liantong_ts.js', 'r', encoding='utf-8') as f:
      jstext = f.read()
    with open('liantong_eval.js', 'r', encoding='utf-8') as f:
      jstext2 = f.read()
    try:
        utils = execjs.compile(jstext)
        utils2 = execjs.compile(jstext2)
        js_text = utils.call("getMainJsTs", content)
        data2 = utils.call("get_ts", js_text['js_str'],js_text['main_ts'])
        cookie2 = utils2.call("get_cookie",data2,meta_content)
        res_end = requests.get('http://www.chinaunicombidding.cn/jsp/cnceb/web/info1/infoList.jsp?page=4', headers={
        # res_end = requests.get('http://www.customs.gov.cn/', headers={
           'Pragma': 'no-cache',
             'Cache-Control': 'no-cache',
             'Upgrade-Insecure-Requests': '1',
             'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
             'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
             'Referer': url,
             # "ProxyBase": res_first.headers.get('ProxyBase'),
             # "Cookie": 'BIGipServerpool_anquanfanghu=851583876.16671.0000; jqmEwVYRfTEJS=5eZR7rXfnuiLgshxPyYKu3YAgPu8KovLzRqBSgwuGrI8poP4Gw5cENHqsUek1wptyPIk0LjGT3iF0RsRh.1RQZA' + "; jqmEwVYRfTEJT=" + cookie2}, allow_redirects=True, timeout=10, verify=False)
             "Cookie": cookies+ "; jqmEwVYRfTEJT=" + cookie2}, allow_redirects=True, timeout=10, verify=False)
             # "Cookie": cookies+ "; WvY7XhIMu0fGT=" + cookie2}, allow_redirects=True, timeout=10, verify=False)
        # print(res_end.status_code)
        if res_end.status_code==412:
            print('未通过')
        else:
            html = etree.HTML(res_end.text)
            print(html.xpath('//*[@id="div1"]/table//tr[1]/td[1]/span/@title')[0])
    except Exception as e:
        # print(js_text['js_str'])
        print(e )
        # print(res_first.text)

if __name__ == '__main__':
    while True:
        pool = Pool(20)
        for i in range(20):
            pool.apply_async(request1, ())
        pool.close()
        pool.join()

