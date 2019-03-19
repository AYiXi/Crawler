from selenium import webdriver
import time
import datetime

dr = webdriver.Chrome(r'C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe')

dr.get('https://twitter.com/search?f=tweets&vertical=default&q=from%3ArealDonaldTrump%20since%3A2006-03-21%20until%3A2019-02-27&src=typd')
#
start_time = datetime.datetime.now()
#
#
while True:
    dr.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    end_time = datetime.datetime.now()
    print((end_time - start_time).seconds)
    if (end_time - start_time).seconds > 2000:
        break
