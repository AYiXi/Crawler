import mitmproxy.http
from mitmproxy import options
from mitmproxy import proxy
from mitmproxy.tools.dump import DumpMaster

# 要注入到页面的js代码
inject = """
//连接websocket服务端
var ws = new WebSocket('ws://localhost:8000/ws');

//连接成功时执行
ws.onopen= function() {
    ws.send('browser started')
};

// 收到服务端消息时执行
ws.onmessage= function(evt) {
    // evt.data 是websocket服务端发送过来的值
    console.log(evt.data);

    //调用目标加密函数
    signature = window.byted_acrawler.sign({url: evt.data});

    //将生成的值发送给websocket服务端
    ws.send(signature);
    console.log(signature);
};
"""


class Myaddon():
    def response(self, flow: mitmproxy.http.HTTPFlow):
        if 'acrawler.js' in flow.request.url: # 注入到acrawler.js文件里
            flow.response.text = inject + flow.response.text

addons = [
    Myaddon()
]


def run():
    myaddon = Myaddon()
    port = 8080
    opts = options.Options(listen_port=port)
    pconf = proxy.config.ProxyConfig(opts)
    m = DumpMaster(opts)
    m.server = proxy.server.ProxyServer(pconf)
    m.addons.add(myaddon)

    print(f'启动监听 {port} 端口')
    try:
        m.run()
    except KeyboardInterrupt:
        m.shutdown()

if __name__ == "__main__":
    run()
