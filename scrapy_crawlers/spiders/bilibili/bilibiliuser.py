import scrapy
import json

# 太快被封IP
class BilibiliUserSpider(scrapy.Spider):
    name = 'biliuser'
    allowed_domains = ['bilibili.com']

    # 用户页 level,name,mid,sex,vip
    user_url = 'https://api.bilibili.com/x/space/acc/info?mid={}'
    # 用户粉丝
    user_fans = 'https://api.bilibili.com/x/relation/stat?vmid={}'
    # 粉丝列表 ps最大50, pn最大为5
    fans_list = 'https://api.bilibili.com/x/relation/followers?vmid={}&pn={}&ps=50'
    # 关注列表 ps最大50, pn无限制，超出之后返回为空
    follow_list = 'https://api.bilibili.com/x/relation/followings?vmid={}&pn={}&ps=50'

    # 从我的关注337和粉丝698开始
    my_mid = 37329542

    def start_requests(self):
        yield scrapy.Request(self.user_url.format(self.my_mid))

    def parse(self, response):
        data = json.loads(response.body.decode())
        data = data['data']
        birthday = data['birthday']
        level = data['level']
        name = data['name']
        title = data['official']['title']
        sex = data['sex']
        sign = data['sign']
        vip = data['vip']['status']
        mid = data['mid']

        item = {
            'name': name,
            'birthday': birthday,
            'sex': sex,
            'sign': sign,
            'title': title,
            'vip': vip,
            'level': level,
            'mid': mid,
        }

        # print(item)
        # 获取用户粉丝
        yield scrapy.Request(self.user_fans.format(mid), meta={'item': item}, callback=self.get_user_fans)

    def get_user_fans(self, response):
        item = response.meta['item']
        data = json.loads(response.body.decode())
        data = data['data']
        item['follower'] = data['follower']
        item['following'] = data['following']

        print(item)
        yield item

        # 获取粉丝用户
        follower_number = int(data['follower'])
        if follower_number:
            page = follower_number // 50
            page = page if page <= 5 else 5
            for i in range(page):
                yield scrapy.Request(self.fans_list.format(item['mid'], i+1), callback=self.get_user_list)

        # 获取关注用户
        following_number = int(data['following'])
        if following_number:
            for i in range((following_number // 50) + 1):
                yield scrapy.Request(self.follow_list.format(item['mid'], i+1), callback=self.get_user_list)

    def get_user_list(self, response):
        data = json.loads(response.body.decode())
        data = data['data']
        for i in data['list']:
            mid = i['mid']
            yield scrapy.Request(self.user_url.format(mid), callback=self.parse)




