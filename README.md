## 爬虫项目
- 如果有需要 js 逆向参数的, 用 nodejs 执行

### APP
- [全国组织机构统一社会信用代码公示查询平台](./general_crawlers/cods/run.py)
  - 搜索接口和登录接口, 详细注释
  - SSL 双向认证
  - 脱壳 -> 反编译 -> 找到证书 -> 配置 -> 抓包 -> 解密参数
- [CSDN Blink 数据](./scrapy_crawlers/spiders/csdn/blink.py)
  - [使用 frida hook](./frida-hook/csdn.js)


### WEB
- [Twitter](./scrapy_crawlers/spiders/twitter/query.py)
  - 没啥难度, 逻辑梳理
- [烯牛数据](./scrapy_crawlers/spiders/xiniudata/xiniudata.py)
  - js 逆向
- [小鹅通](./general_crawlers/xiaoetong/xiaoetong.py)
  - 实现`视频`, `图文`, `直播`的下载
  - 下载 `m3u8` 视频示例代码
- [猿人学 JS 逆向挑战赛](./general_crawlers/yuanrenxue)