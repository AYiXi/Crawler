import sys

import frida


class FridaEncryptHook:
    def __init__(self, pkg_name):
        self.pkg_name = pkg_name
        self.log_file = open(pkg_name + '.log', 'w+', encoding='utf-8')
        self.js_code = open('/Users/ayixi/Documents/Code/python/Crawler/frida-hook/ncsearch.js').read()

    def message(self, message, data):
        if message["type"] == 'send':
            print(u"[*] {0}".format(message['payload']))
            self.log_file.write(u"[*] {0}\n".format(message['payload']))
            self.log_file.flush()
        else:
            print(message)

    def start(self):
        process = frida.get_usb_device().attach(self.pkg_name)
        script = process.create_script(self.js_code)
        script.on("message", self.message)
        script.load()
        sys.stdin.read()


if __name__ == "__main__":
    try:
        pkg_name = sys.argv[1]
    except:
        pkg_name = 'com.ninemax.ncsearchnew'
    fh = FridaEncryptHook(pkg_name)
    fh.start()
