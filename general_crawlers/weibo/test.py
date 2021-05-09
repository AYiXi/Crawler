import calendar

import time
import random
from datetime import datetime

import random

import requests

year = 2019
month = random.randint(1, 12)
day = random.randint(1, 31)

print(datetime.now().weekday())
headers = {
    'cookie': '_s_tentry=passport.weibo.com; Apache=8732949052827.304.1582468230855; SINAGLOBAL=8732949052827.304.1582468230855; ULV=1582468230860:1:1:1:8732949052827.304.1582468230855:; TC-V5-G0=4de7df00d4dc12eb0897c97413797808; WBtopGlobal_register_version=307744aa77dd5677; login_sid_t=13744dc1ba725eb84b927f0a76f8ee0a; cross_origin_proto=SSL; SSOLoginState=1585387877; Ugrow-G0=5c7144e56a57a456abed1d1511ad79e8; UOR=,,www.google.com; wb_view_log=2560*14401.6500000953674316; ALF=1628945521; SCF=AivDpZjAJ9uuTsj6WcxllQxfDmP-G9p92PVI4fKwWx63nXS5n52SWWl5hCrZjA5dAk9ELxTQhAVwLxJyRQLwyUI.; SUB=_2A25yMviiDeRhGeNK41oQ8SbPzj2IHXVRRm1qrDV8PUNbmtAKLWf2kW9NSQdFECiFn8E_b-f8xuCmpLOAPUpeaABP; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhbEep_szqecD_H0rINazRe5JpX5KzhUgL.Fo-X1hnpeKn0SK22dJLoI0MLxKMLB-zL12zLxKBLBonL1KqLxKnL1h5L1h-LxK-L1h-L1hnLxKMLB-zL12zLxK-LB.qL1hSk; SUHB=0mxkK7I76frChL; wvr=6; wb_view_log_5488118351=2560*14401.6500000953674316; TC-Page-G0=54dda3ce6ba2b3df8cf7ce403a115e72|1597410138|1597410109; webim_unReadCount=%7B%22time%22%3A1597410142024%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22chat_group_notice%22%3A0%2C%22allcountNum%22%3A1%2C%22msgbox%22%3A0%7D; TC-Page-G0=f968c82d530c2324c223bba2ac17a3c9|1597412886|1597412886'
}


def mkdate():
    start = time.mktime((2019, 1, 1, 0, 0, 0, 0, 0, 0))  # 生成开始时间戳
    end = time.mktime((2019, 12, 31, 23, 59, 59, 0, 0, 0))  # 生成结束时间戳

    time_d = [(i, random.randint(1, 12)) for i in range(1, 31)]

    # 随机生成10个日期字符串
    for day in range(10):
        t = random.randint(start, end)  # 在开始和结束时间戳中随机取出一个
        date = time.localtime(t)  # 将时间戳生成时间元组
        print(date.tm_mday)
        # date = datetime. # 将时间元组转成格式化字符串（1976-05-21）
        # print(date)


if __name__ == '__main__':
    mkdate()

'''
2019-08-12
2019-04-09
2019-10-16
2019-08-08
2019-11-01
2019-12-14
2019-07-28
'''