import time
from pprint import pprint as print_

import schedule

from Crawler.zhengwu_crawler.crawl import crawl
from OpDatabase.mysql_base import mysql_execute, mysql_execute_with_result
from settings_patent import MYSQL_DBS, MAIL_LBW
from Utils.decorator_utils import time_use
from Utils.mail_utils import Mail

update_time_ = time.localtime()


def update():
    rows = crawl()
    sql = '''INSERT INTO zhengwu_crawl (name, date, detail_url, type, platform, platform_url, update_time, see) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            ON DUPLICATE KEY UPDATE update_time=values(update_time), name=values(name)'''
    [row.extend([update_time_, 0]) for row in rows]

    if rows:
        mysql_execute(sql=sql, dbs=MYSQL_DBS['XIQING_ZHENGWU_CRAWL'], rows=rows,
                      executemany=True, category='ZW_CRAWL')

    name = [(i[0], i[1]) for i in rows]
    print_(name)
    print('\n')


def delete():
    sql = '''SELECT id, name FROM zhengwu_crawl;'''

    results = mysql_execute_with_result(sql=sql, db=MYSQL_DBS['XIQING_ZHENGWU_CRAWL'])

    import re

    key_words = ['项目', '通知', '公示', '认定', '资金', '申报']

    ids = []
    for result in results:
        match = re.findall('|'.join(key_words), result[1])
        if len(set(match)) > 1:
            ids.append(['+'.join(set(match)), result[0]])

    sql2 = '''UPDATE zhengwu_crawl SET type=%s WHERE id=%s'''
    print(ids[:5])
    mysql_execute(sql=sql2, dbs=MYSQL_DBS['XIQING_ZHENGWU_CRAWL'], rows=ids,
                  executemany=True)



@time_use
def update_timer():
    schedule.every().day.at("09:00").do(update)
    schedule.every().day.at("15:00").do(update)

    while True:
        schedule.run_pending()

        time.sleep(100)


if __name__ == '__main__':
    # nohup /home/ayixi/.virtualenvs/Patent/bin/python /home/ayixi/Patent/Crawler/zhengwu_crawler/update.py >>  /home/ayixi/Patent/Files/logs/update_zhengwu.log &
    # delete()
    try:
        # update()
        update_timer()
    except Exception as e:
        Mail(receive=MAIL_LBW, title='政务平台公告爬虫 Exception').send_mail(str(e))