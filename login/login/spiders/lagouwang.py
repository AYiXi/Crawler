import re

import requests
import time

from lxml import etree
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.common.by import By

class LagouSpider(object):
    driver_path = r'C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe'

    def __init__(self):
        self.driver = webdriver.Chrome(executable_path=LagouSpider.driver_path)
        self.url = 'https://www.lagou.com/jobs/list_python?labelWords=&fromSearch=true&suginput='
        self.positions = []

    def run(self):
        self.driver.get(self.url)
        while True:
            source = self.driver.page_source
            WebDriverWait(driver=self.driver, timeout=10).until(
                expected_conditions.presence_of_element_located((
                    By.XPATH, '//div[@class="pager_container"]/span[last()]'
                ))
            )
            self.parse_list_page(source)

            next_btn = self.driver.find_element_by_xpath('//div[@class="pager_container"]/span[last()]')
            if 'pager_next_disabled' in next_btn.get_attribute('class'):
                break
            else:
                next_btn.click()
            time.sleep(1)

    def parse_list_page(self, source):
        html = etree.HTML(source)
        links = html.xpath('//a[@class="position_link"]/@href')
        for link in links:
            self.request_detail_page(link)
            time.sleep(1)


    def request_detail_page(self, url):

        self.driver.execute_script(f"window.open('{url}')")
        self.driver.switch_to_window(self.driver.window_handles[1])

        if 'login' in url:
            pass  # todo :login

        WebDriverWait(driver=self.driver, timeout=10).until(
            expected_conditions.presence_of_element_located((
                By.XPATH, '//div[@class="job-name"]/span[@class="name"]'
            ))
        )

        source = self.driver.page_source
        self.parse_detail_page(source)
        self.driver.close()
        self.driver.switch_to.window(self.driver.window_handles[0])

    def parse_detail_page(self, source):
        html = etree.HTML(source)

        job_request_spans = html.xpath('//dd[@class="job_request"]//span')
        item = {
            'position_name': html.xpath('//span[@class="name"]/text()')[0],
            'salary': job_request_spans[0].xpath('.//text()')[0].strip(),
            'city': re.sub('[\s/]', '', job_request_spans[1].xpath('.//text()')[0].strip()),
            'work_years': re.sub('[\s/]', '', job_request_spans[2].xpath('.//text()')[0].strip()),
            'education': re.sub('[\s/]', '', job_request_spans[3].xpath('.//text()')[0].strip()),
            # 'desc': ''.join(html.xpath('//dd[@class="job_bt"]//text()')).strip(),
        }


        print(item)

if __name__ == '__main__':
    LagouSpider().run()
