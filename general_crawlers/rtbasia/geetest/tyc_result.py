import requests, json
from urllib.request import quote

cookies = {'TYCID': 'cdb428b0d3bc11eaac6717822aee6dce', 'aliyungf_tc': 'AQAAAG8gV34n0QUAkCpM3vdrEAMsxHaS', 'csrfToken': 'rBfwbJ_7mjB1gXtrw8basteY', 'tyc-user-info': '%257B%2527claimEditPoint%2527%253A%2520%25270%2527%252C%2520%2527vipToMonth%2527%253A%2520%2527false%2527%252C%2520%2527explainPoint%2527%253A%2520%25270%2527%252C%2520%2527personalClaimType%2527%253A%2520%2527none%2527%252C%2520%2527integrity%2527%253A%2520%252710%2525%2527%252C%2520%2527state%2527%253A%2520%25270%2527%252C%2520%2527score%2527%253A%2520%25271766%2527%252C%2520%2527announcementPoint%2527%253A%2520%25270%2527%252C%2520%2527bidSubscribe%2527%253A%2520%2527-1%2527%252C%2520%2527vipManager%2527%253A%2520%25270%2527%252C%2520%2527onum%2527%253A%2520%25270%2527%252C%2520%2527monitorUnreadCount%2527%253A%2520%25270%2527%252C%2520%2527discussCommendCount%2527%253A%2520%25270%2527%252C%2520%2527showPost%2527%253A%2520None%252C%2520%2527claimPoint%2527%253A%2520%25270%2527%252C%2520%2527token%2527%253A%2520%2527eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNzA3ODY5MjQ3MCIsImlhdCI6MTU5NjI2MTg0NCwiZXhwIjoxNjI3Nzk3ODQ0fQ.PWNbL3dsYItFebP6_aKeq9Q8MQlyoSXyMKV1RmKPryv-U67a8NZDvKPeblQUHWav9wuxzQZWeVw1EtnpfMyC1g%2527%252C%2520%2527schoolAuthStatus%2527%253A%2520%25272%2527%252C%2520%2527scoreUnit%2527%253A%2520%2527%2527%252C%2520%2527redPoint%2527%253A%2520%25270%2527%252C%2520%2527myTidings%2527%253A%2520%25270%2527%252C%2520%2527companyAuthStatus%2527%253A%2520%25272%2527%252C%2520%2527myAnswerCount%2527%253A%2520%25270%2527%252C%2520%2527myQuestionCount%2527%253A%2520%25270%2527%252C%2520%2527signUp%2527%253A%2520%25270%2527%252C%2520%2527privateMessagePointWeb%2527%253A%2520%25270%2527%252C%2520%2527nickname%2527%253A%2520%2527%25E9%2583%2591%25E5%25A4%259A%25E5%25BD%25AC%2527%252C%2520%2527privateMessagePoint%2527%253A%2520%25270%2527%252C%2520%2527bossStatus%2527%253A%2520%25272%2527%252C%2520%2527isClaim%2527%253A%2520%25270%2527%252C%2520%2527yellowDiamondEndTime%2527%253A%2520%25270%2527%252C%2520%2527yellowDiamondStatus%2527%253A%2520%2527-1%2527%252C%2520%2527pleaseAnswerCount%2527%253A%2520%25270%2527%252C%2520%2527vnum%2527%253A%2520%25270%2527%252C%2520%2527bizCardUnread%2527%253A%2520%25270%2527%252C%2520%2527mobile%2527%253A%2520%252717078692470%2527%257D', 'auth_token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNzA3ODY5MjQ3MCIsImlhdCI6MTU5NjI2MTg0NCwiZXhwIjoxNjI3Nzk3ODQ0fQ.PWNbL3dsYItFebP6_aKeq9Q8MQlyoSXyMKV1RmKPryv-U67a8NZDvKPeblQUHWav9wuxzQZWeVw1EtnpfMyC1g'}



# print([f"{i}={quote(cookies[i])}" for i in cookies])
# print(';'.join([f"{i}={quote(json.dumps(cookies[i]))}" for i in cookies]))

url = "https://www.tianyancha.com/company/28956085"

resp = requests.get(url=url, headers={
    # "Cookie": ';'.join([f"{i}={quote(json.dumps(cookies[i]))}" for i in cookies]),
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
},cookies=cookies)
# cookie = ';'.join([f"{i}={quote(json.dumps(cookies[i]))}" for i in cookies])
print(resp.cookies)
print(resp.text)
# print(cookie)
