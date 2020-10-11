import time
import requests
from requests.adapters import HTTPAdapter

'爬取B站UP主的硬币数'

# 秀出自己的ID
__author__ = 'Jannchie见齐'

# 输入 · 需要获取硬币的用户ID列表
# 附注 · 1850091是作者的B站ID，欢迎关注，1是bishi，122879是敖厂长
mid_list = [1850091, 1, 122879]

# 输出 · 把爬到的数据搞到这个文件里
output_path = "D:/输出文件.csv"

# 素材 · 待爬取链接
URL = 'https://api.bilibili.com/x/space/acc/info?mid={mid}'

# 创建 · 会话实例
s = requests.Session()

# 附魔 · 附加错误重试Buff
# 效果 · 请求错误三次内自动重连
s.mount('https://', HTTPAdapter(max_retries=3))

# 打开 · 输出的文件，准备往里面写东西
with open(output_path, 'w', encoding="utf-8-sig") as f:

    # 写入 · 输出的是一张表，先写入一下表头
    f.write('"UP主名称","硬币数"\n')

    # 循环 · 针对 mid_list 中的每一个 mid，进行如下操作
    for mid in mid_list:

        # 获取 · 发起一个GET请求，这个请求的链接由URL和mid构造。返回的数据存入response
        response = s.get(URL.format(mid=mid))
        # 解析 · 用json 解析 response里的数据
        j = response.json()
        # 判断 · 如果爬到的数据是没问题的话
        if 'code' in j and j['code'] != -404 and 'data' in j and 'coins' in j[
                'data']:
            # 查看 · 在控制台终端中打印一下爬到了什么鬼
            print('{}\t{}'.format(j['data']['name'], j['data']['coins']))
            # 写入 · 把爬到的内容存放到
            f.write('"{}","{}"\n'.format(
                j['data']['name'], j['data']['coins']))
        # 休息 · 冷静半秒，不要撸太快，对服务器不好
        time.sleep(0.5)