import re

from general_crawlers.zhengwu_crawler.analyze_func import culture_and_tourism, xiqing, baoshui, hedong, jinnan, zhongxin, okcis, tj_gov_purchase, cebpubservice, hongqiao

'''
table_name  :[str ] table name 
url         :[str ] request url or home url
xpath_name  :[str ] xpath expression to get name
xpath_date  :[str ] xpath expression to get date
xpath_url   :[str ] xpath expression to get url
date        :[func] generate like '2000-01-01' format date 
detail_url  :[func] generate detail url of one item
get_func    :[func] function corresponding to get request
post        :[bool] post or get request
data        :[dict] post request data
post_func   :[func] function corresponding to post request
platform_url:[str ] url of platform if it is not equal to url
referer     :[str ] http referer
not_request :[bool] not request from crawl
diy_func    :[func] diy function of a site
'''

SITES = [
    {
        'table_name': '天津市商务局',
        'url'       : 'http://shangwuju.tj.gov.cn/html/gongshigonggao/index.html',
        'xpath_name': '//div[@class="news_1"]//ul/li/a/text()',
        'xpath_date': '//div[@class="news_1"]//ul/li/span/text()',
        'xpath_url' : '//div[@class="news_1"]//ul/li/a/@href',
    },
    {
        'table_name': '天津市工业和信息化局',
        'url'       : 'http://gyxxh.tj.gov.cn/tzggzs_index.htm?yearOfIssue=2020',
        'xpath_name': '//div[@class="list01"]//a/span/text()',
        'xpath_date': '//div[@class="list01"]//li/font/text()',
        'xpath_url' : '//div[@class="list01"]//li/a/@href',
        'date'      : (lambda date: [re.findall('\d{4}-\d{2}-\d{2}', i)[0] for i in date]),
        'detail_url': (lambda detail_url: ['http://gyxxh.tj.gov.cn' + i for i in detail_url])
    },
    {
        'table_name': '天津市发展和改革委员会',
        'url'       : 'http://fzgg.tj.gov.cn/dtzx/tzgg/index.shtml',
        'xpath_name': '//div[@class="gg_list"]/ul//a/text()',
        'xpath_date': '//div[@class="gg_list"]/ul//span/text()',
        'xpath_url' : '//div[@class="gg_list"]/ul//a/@href',
        'detail_url': (lambda detail_url: [i.replace('./', 'http://fzgg.tj.gov.cn/dtzx/tzgg/') for i in detail_url])
    },
    {
        'table_name': '天津市科学技术局',
        'url'       : 'http://kxjs.tj.gov.cn/xinwen/tzgg/index.html',
        'xpath_name': '//div[@class="sub_sameconrcc"]//li/a/@title',
        'xpath_date': '//div[@class="sub_sameconrcc"]//li/span/text()',
        'xpath_url' : '//div[@class="sub_sameconrcc"]//li/a/@href',
        'detail_url': (lambda detail_url: [i.replace('./', 'http://kxjs.tj.gov.cn/xinwen/tzgg/') for i in detail_url])
    },
    {
        'table_name': '天津市科技计划项目管理信息系统',
        'url'       : 'http://xmgl.kxjs.tj.gov.cn/publishInfoMore.do',
        'xpath_name': '//table//tr[not(@style)]/td[3]/a/text()',
        'xpath_date': '//table//tr[not(@style)]/td[5]/text()',
        'xpath_url' : '//table//tr[not(@style)]/td[3]/a/@href',
        'referer'   : 'http://xmgl.kxjs.tj.gov.cn/publishInfoMore.do',
        'detail_url': (lambda detail_url: ['http://xmgl.kxjs.tj.gov.cn/' + i for i in detail_url])
    },
    {
        'table_name': '天津市和平区人民政府',
        'url'       : 'http://www.tjhp.gov.cn/tjhp/zxxx/list.shtml',
        'xpath_name': '//ul[@class="list gglists"]/li/a/@title',
        'xpath_date': '//ul[@class="list gglists"]/li/span/text()',
        'xpath_url' : '//ul[@class="list gglists"]/li/a/@href',
        'detail_url': (lambda detail_url: [('http://www.tjhp.gov.cn/' + i) for i in detail_url])
    },
    {
        'table_name': '天津市河西区人民政府',
        'url'       : 'http://www.tjhx.gov.cn/tjhx/tzgg/liebiao.shtml',
        'xpath_name': '//div[@class="con_right1 fr"]/ul/li/a/@title',
        'xpath_date': '//div[@class="con_right1 fr"]/ul/li/span/text()',
        'xpath_url' : '//div[@class="con_right1 fr"]/ul/li/a/@href',
        'detail_url': (lambda detail_url: [i.replace('../..', 'http://www.tjhx.gov.cn') for i in detail_url])
    },
    {
        'table_name': '天津市河北区人民政府',
        'url'       : 'http://www.tjhbq.gov.cn/zfxxgk/gsgg/',
        'xpath_name': '//td[@class="hanggao30 zi14"]/table//tr/td[1]/a/span/text()',
        'xpath_date': '//td[@class="hanggao30 zi14"]/table//tr/td[2]/span/text()',
        'xpath_url' : '//td[@class="hanggao30 zi14"]/table//tr/td[1]/a/@href',
    },
    {
        'table_name': '天津市河东区人民政府',
        'url'       : 'http://www.hedong.gov.cn/xw/tzgg.htm',
        'xpath_name': '//ul[@class="listNewsList"]/li/a/text()',
        'xpath_date': '//ul[@class="listNewsList"]/li/a/font/text()',
        'xpath_url' : '//ul[@class="listNewsList"]/li/a/@href',
        'detail_url': (lambda detail_url: [re.sub('(\.\./)+', 'http://www.hedong.gov.cn/', i) for i in detail_url]),
        'get_func'  : hedong
    },
    {
        'table_name': '天津市南开区人民政府',
        'url'       : 'http://www.tjnk.gov.cn/xxdt/gggs/',
        'date'      : (lambda d: ['20' + i for i in d]),
        'xpath_name': '//td[@valign="top"]/table//table[2]//tr//a[2]/text()',
        'xpath_date': '//td[@valign="top"]/table//table[2]//tr//div/text()',
        'xpath_url' : '//td[@valign="top"]/table//table[2]//tr//a[2]/@href',
    },
    {
        # TODO: invalid
        'table_name' : '天津市虹桥区人民政府',
        'url'        : 'http://www.tjhq.gov.cn/zwgk/zfxx/gsgg/index.shtml',
        'diy_func'   : hongqiao,
        'not_request': True
    },
    {
        'table_name': '天津市东丽区人民政府',
        'url'       : 'http://www.tjdl.gov.cn/zwgk/gsgg/gsgg/index.shtml',
        'date'      : (lambda d: [i.split(' ')[0] for i in d]),
        'xpath_name': '//ul[@class="newsList"]//li/a/text()',
        'xpath_date': '//ul[@class="newsList"]//li/span/text()',
        'xpath_url' : '//ul[@class="newsList"]//li/a/@href',
    },
    {
        'table_name': '天津市津南区人民政府',
        'url'       : 'http://www.tjjn.gov.cn/xxgk/tzgg/index.html',
        'xpath_name': '//div[@class="list_content"]//li/a/text()',
        'xpath_date': '//div[@class="list_content"]//li/span/text()',
        'xpath_url' : '//div[@class="list_content"]//li/a/@href',
        'detail_url': (lambda detail_url: [re.sub('\./', 'http://www.tjjn.gov.cn/xxgk/tzgg/', i) for i in detail_url]),
        'get_func'  : jinnan
    },
    {
        'table_name': '天津市西青区人民政府',
        'url'       : 'http://www.tjxq.gov.cn/xqxwzx/gsgg/index.shtml',
        'xpath_name': '//table[2]//tr//span/a/text()',
        'xpath_date': '//table[2]//tr//td[@width="30%"]/text()',
        'xpath_url' : '//table[2]//tr//span/a/@href',
        'get_func'  : xiqing,
    },
    {
        'table_name': '天津市北辰区人民政府',
        'url'       : 'http://www.tjbc.gov.cn/zwgk/tzgg/',
        'xpath_name': '//table//tr//table[@width="95%"]//a/text()',
        'xpath_date': '//table//tr//table[@width="95%"]//td[@align="right"]/text()',
        'xpath_url' : '//table//tr//table[@width="95%"]//a/@href',
    },
    {
        'table_name': '天津市蓟州区人民政府',
        'url'       : 'http://www.tjjz.gov.cn/jxzww/gsgg/list.shtml',
        'xpath_name': '//div[@class="list_ul"]//li//a/@title',
        'xpath_date': '//div[@class="list_ul"]//li/span[2]/text()',
        'xpath_url' : '//div[@class="list_ul"]//li//a/@href',
        'detail_url': (lambda detail_url: [re.sub('\.\./\.\./', 'http://www.tjjz.gov.cn/', i) for i in detail_url])
    },
    {
        'table_name': '天津市宝坻区人民政府',
        'url'       : 'http://www.tjbd.gov.cn/zjbd/gsgg/',
        'xpath_name': '//td[@class="hanggao36 zi16"]//tr//a/@title',
        'xpath_date': '//td[@class="zi15 hanggao34 time"]/text()',
        'xpath_url' : '//td[@class="hanggao36 zi16"]//tr//a/@href',
    },
    {
        'table_name': '天津市武清区人民政府',
        'url'       : 'http://www.tjwq.gov.cn/xwdt/tzgg/index.shtml',
        'xpath_name': '//td[@class="hanggao28"]//a/text()',
        'xpath_date': '//td[@class="hanggao28"]//td[@width="30%"]/text()',
        'xpath_url' : '//td[@class="hanggao28"]//a/@href',
    },
    {
        'table_name': '天津市静海区人民政府',
        'url'       : 'http://www.tjjh.gov.cn/zwgk/gggs/index.shtml',
        'xpath_name': '//td[@class="hanggao35 weiruan zi14"]//table[@width="100%"]//a/text()',
        'xpath_date': '//td[@class="hanggao35 weiruan zi14"]//table[@width="100%"]//td[@width="110"]/text()',
        'xpath_url' : '//td[@class="hanggao35 weiruan zi14"]//table[@width="100%"]//a/@href',
    },
    {
        'table_name': '天津市宁河区人民政府',
        'url'       : 'http://www.tjnh.gov.cn/zwgk/gsgg/index.shtml',
        'xpath_name': '//td[@class="hanggao38 zi14"]//td//a/text()',
        'xpath_date': '//td[@class="hanggao38 zi14"]//td//td[@width="100"]/text()',
        'xpath_url' : '//td[@class="hanggao38 zi14"]//td//a/@href',
    },
    {
        'table_name': '天津市滨海新区人民政府',
        'url'       : 'http://www.tjbh.gov.cn/channels/6346.html',
        'date'      : (lambda d: [re.findall('\d{4}-\d{2}-\d{2}', i)[0] for i in d]),
        'xpath_name': '//li[@class="xxgk-list"]//a/@title',
        'xpath_date': '//li[@class="xxgk-list"]//div[@class="layui-col-md2 layui-col-sm2"]//span/text()',
        'xpath_url' : '//li[@class="xxgk-list"]//a/@href',
        'detail_url': (lambda detail_url: ['http://www.tjbh.gov.cn' + i for i in detail_url])
    },
    {
        'table_name': '天津经济技术开发区',
        'url'       : 'https://www.teda.gov.cn/channels/3961.html',
        'xpath_name': '//div[@class="ET_main_list"]//li/a/text()',
        'xpath_date': '//div[@class="ET_main_list"]//li/span/text()',
        'xpath_url' : '//div[@class="ET_main_list"]//li/a/@href',
        'detail_url': (lambda detail_url: ['https://www.teda.gov.cn' + i for i in detail_url])
    },
    {
        'table_name': '天津滨海高新技术产业开发区',
        'url'       : 'http://www.tht.gov.cn/channels/3909.html',
        'name'      : (lambda na: [i.replace('•', '').strip() for i in na]),
        'date'      : (lambda d: [re.findall('\d{4}-\d{2}-\d{2}', i)[0] for i in d]),
        'xpath_name': '//ul[@class="sec-list gk-level4"]//a/text()',
        'xpath_date': '//ul[@class="sec-list gk-level4"]//div[@class="layui-col-md2 layui-hide-xs"]/span/text()',
        'xpath_url' : '//ul[@class="sec-list gk-level4"]//a/@href',
        'detail_url': (lambda detail_url: ['http://www.tht.gov.cn' + i for i in detail_url])
    },
    {
        'table_name': '保税区政务网',
        'url'       : 'http://www-main.tjftz.gov.cn/bsq3/zwgk/tzgg/index.shtml',
        'xpath_name': '//table[@width="100%"]//td[@width="76%"]/a/text()',
        'xpath_date': '//table[@width="100%"]//td[@width="20%"]/text()',
        'xpath_url' : '//table[@width="100%"]//td[@width="76%"]/a/@href',
        'get_func'  : baoshui
    },
    {
        'table_name': '科服网',
        'url'       : 'https://i.tten.cn/news/tzgg/',
        'date'      : (lambda d: [re.findall('\d{4}/\d{2}/\d{2}', i)[0].replace('/', '-') for i in d]),
        'xpath_name': '//ul[@style="list-style-type:none"]//a/text()',
        'xpath_date': '//ul[@style="list-style-type:none"]//span/text()',
        'xpath_url' : '//ul[@style="list-style-type:none"]//a/@href',
        'detail_url': (lambda detail_url: [i.replace('./', 'https://i.tten.cn/news/tzgg/') for i in detail_url])
    },
    {
        'table_name': '天津市农村工作委员会',
        'url'       : 'http://nync.tj.gov.cn/zwgk_13546/tzgg/index.html',
        'name'      : (lambda na: [i for i in na if i != '']),
        'xpath_name': '//ul[@class="normal_list"]//a/text()',
        'xpath_date': '//ul[@class="normal_list"]//a/span/text()',
        'xpath_url' : '//ul[@class="normal_list"]//a/@href',
        'detail_url': (lambda detail_url: [i.replace('./', 'http://nync.tj.gov.cn/zwgk/tzgg/') for i in detail_url])
    },
    {
        'table_name': '保税区科技和工业创新局',
        'url'       : 'http://kjfzj.tjftz.gov.cn/ggl/index.html',
        'xpath_name': '//td[@class="font14"]/a/text()',
        'xpath_date': '//td[@valign="bottom"]/font/text()',
        'xpath_url' : '//td[@class="font14"]/a/@href',
    },
    {
        'table_name': '天津市武清开发区',
        'url'       : 'http://www.tjuda.com/zxzt/zxgg/',
        'xpath_name': '//ul[@class="list-group list-fuwu"]/li/a/text()',
        'xpath_date': '//ul[@class="list-group list-fuwu"]/li/span/text()',
        'xpath_url' : '//ul[@class="list-group list-fuwu"]/li/a/@href',
        'detail_url': (lambda detail_url: ['http://www.tjuda.com' + i for i in detail_url])
    },
    {
        'table_name': '南开区科技局',
        'url'       : 'http://www.tjnk.gov.cn/nkkw/tzgg/index.shtml',
        'date'      : (lambda d: ['20' + i for i in d]),
        'xpath_name': '//div[@align="left"]/a[2]/text()',
        'xpath_date': '//td[@valign="bottom"]/div/text()',
        'xpath_url' : '//div[@align="left"]/a[2]/@href',
    },
    {
        'table_name': '天津市知识产权局',
        'url'       : 'http://zscq.tj.gov.cn/xwdt/tztg/',
        'xpath_name': '//ul/li/span[1]/a/text()',
        'xpath_date': '//ul/li/span[2]/text()',
        'xpath_url' : '//ul/li/span[1]/a/@href',
        'detail_url': (lambda detail_url: [i.replace('./', 'http://zscq.tj.gov.cn/xwdt/tztg/') for i in detail_url])
    },
    {
        'table_name': '西青经济技术开发区',
        'url'       : 'http://xeda.tjxq.gov.cn/news_list03/&newsCategoryId=13.html',
        'date'      : (lambda d: [re.findall('\d{4}-\d{2}-\d{2}', i)[0] for i in d]),
        'xpath_name': '//li[@class="content column-num1"]//a/@title',
        'xpath_date': '//li[@class="content column-num1"]//input/@value',
        'xpath_url' : '//li[@class="content column-num1"]//a/@href',
        'detail_url': (lambda detail_url: ['http://xeda.tjxq.gov.cn' + i for i in detail_url])
    },
    # cant connect main site
    # {
    #     'table_name': '天津子牙经济技术开发区',
    #     'url'       : 'http://ziya.tjjh.gov.cn/tjzy/yqgg/zd_list.shtml',
    #     'date'      : (lambda d: (['-'.join(re.findall('\d+', i)) for i in d])),
    #     'xpath_name': '//ul[@class="emTimeList"]//a/@title',
    #     'xpath_date': '//ul[@class="emTimeList"]/li/span/text()',
    #     'xpath_url' : '//ul[@class="emTimeList"]//a/@href',
    #     'detail_url': (lambda detail_url: [('http://ziya.tjjh.gov.cn' + i).replace(' ', '%20') for i in detail_url])
    # },
    {
        'table_name': '天津八里台工业园',
        'url'       : 'https://www.tjblt.com/tzgg',
        'xpath_name': '//ul[@id="ulList_con_58_50"]/li//a/text()',
        'xpath_date': '//ul[@id="ulList_con_58_50"]/li/span/text()',
        'xpath_url' : '//ul[@id="ulList_con_58_50"]/li//a/@href',
        'detail_url': (lambda detail_url: ['https://www.tjblt.com' + i for i in detail_url])
    },
    {
        'table_name'  : '天津市文化和旅游局',
        'url'         : 'http://whly.tj.gov.cn/admin/api/common/getArticleList',
        'post_func'   : culture_and_tourism,
        'data'        : {'pageno': '1', 'pagesize': '20', 'menu': '通知公告'},
        'platform_url': 'http://whly.tj.gov.cn/pages/info-list.html#?type=0/2/2',
        'post'        : True
    },
    {
        'table_name': '北辰经济开发区',
        'url'       : 'http://www.bceda.com/bckfq/tzgg/',
        'xpath_name': '//ul[@class="downLoad newsList"]//a/div/text()',
        'xpath_date': '//ul[@class="downLoad newsList"]//span/text()',
        'xpath_url' : '//ul[@class="downLoad newsList"]//a/@href',
        'detail_url': (lambda detail_url: ['http://www.bceda.com' + i for i in detail_url])
    },
    {
        'table_name': '中新天津生态城管理委员会',
        'url'       : 'https://www.eco-city.gov.cn/html/zwgg/',
        'xpath_name': '//div[@class="biaoti"]/h4/text()',
        'xpath_date': '//div[@class="riqi"]/span/text()',
        'xpath_url' : '//div[@class="text_lists"]//li/a/@href',
        'date'      : (lambda d: ([i.replace('/', '-') for index, i in enumerate(d) if index % 2 == 0])),
        'detail_url': (lambda detail_url: ['https://www.eco-city.gov.cn' + i for i in detail_url]),
        'get_func'  : zhongxin
    },
    {
        'table_name'  : '招标采购导航网',
        'url'         : 'https://www.okcis.cn/searched/',
        'post_func'   : okcis,
        'data'        : {
            'result-search-type-form' : 'jingdian',
            'result-search-type-input': 'jingdian',
            'search_start_time_input' : '2020-03-24',
            'search_end_time_input'   : '2020-03-27',
            'result-keyword-and-form' : '知识产权',
            'city-result-more-single' : 'single',
            'result-city-form'        : '120000',  # tianjin
        },
        'platform_url': 'https://www.okcis.cn/bn/',
        'post'        : True
    },
    {
        'table_name' : '天津市政府采购网',
        'url'        : 'http://tjgp.cz.tj.gov.cn/portal/topicView.do?method=view&view=Infor&id=1665&ver=2&st=1',
        'diy_func'  : tj_gov_purchase,
        'post'       : True,
        'not_request': True
    },
    # {
           # ruishu
    #     'table_name' : '中国招标投标公共服务平台',
    #     'url'        : 'http://bulletin.cebpubservice.com/',
    #     'diy_func'   : cebpubservice,
    #     'not_request': True
    # }
    # {
    #     'table_name': '天津市财政局',
    #     'url': 'http://cz.tj.gov.cn/module/jslib/jquery/jpage/dataproxy.jsp?startrecord=1&endrecord=45&perpage=15',
    #     'post_func': finance,
    #     'data': {
    #         'col': '1',
    #         'appid': '1',
    #         'webid': '1',
    #         'path': '/',
    #         'columnid': '18',
    #         'sourceContentType': '1',
    #         'unitid': '703',
    #         'webname': '天津市财政局',
    #         'permissiontype': '0',
    #         'searchTitle703': None,
    #         'searchStartTime703': date_format(days=-3),
    #         'searchEndTime703': date_format(),
    #         'crumb': None,
    #         'undefined': '检索',
    #     },
    #     'platform_url': 'http://cz.tj.gov.cn/col/col18/index.html',
    #     'post': True
    # },
]

if __name__ == "__main__":
    print(len(SITES))
