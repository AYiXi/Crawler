from tornado import websocket, web, ioloop, gen

cl = []
msg = []
msg_flag = False


class IndexHandler(web.RequestHandler):
    def get(self):
        self.write("hello...")

class SocketHandler(websocket.WebSocketHandler):
    def check_origin(self, origin):
        return True

    def open(self):
        """新的websocket连接后被调动"""
        if self not in cl:
            cl.append(self)
        print('有新客户端连接!')

    def on_close(self):
        """websocket连接关闭后被调用"""
        if self in cl:
            cl.remove(self)

    def on_message(self, message):
        """接收到客户端消息时被调用"""
        global msg_flag
        print('收到客户端发送回来的加密值：%s' % message)
        msg.append(message)
        if not 'started' in message:
            msg_flag = True

class ApiHandler(web.RequestHandler):
    @gen.coroutine
    def post(self):
        global msg_flag,msg
        """接收参数，发送给ws客户端"""
        url = self.get_body_argument('url')
        print('http server收到参数:%s' % url)

        # 将URL推送给客户端
        for c in cl:
            c.write_message(url)

        while not msg_flag:
            yield gen.sleep(0.1)
        msg_flag = False
        self.write(msg[-1])


app = web.Application([
    (r'/', IndexHandler),
    (r'/ws', SocketHandler),  # http://127.0.0.1:8000/ws
    (r'/api', ApiHandler), # http://127.0.0.1:8000/api
])

if __name__ == '__main__':
    app.listen(8000)
    ioloop.IOLoop.instance().start()


