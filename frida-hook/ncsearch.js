// hook 全国组织机构统一社会信用代码公示查询平台 app

function showStacks() {
    Java.perform(function () {
        send(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
    });
}

function buf2hex(array, readLimit) {
    var result = [];
    var ascii = ""
    readLimit = readLimit || array.length;
    for (var i = 0; i < readLimit; ++i) {
        var elem = array[i] & 0xFF
        var str = (0x100 + elem).toString(16).substr(1)
        result.push(str);

        if (elem < 127 && elem >= 32) {
            ascii += String.fromCharCode(elem)
        } else {
            ascii += "."
        }
    }
    return result.join(' ') + " | " + ascii
}

Java.perform(function () {
    // var secretKeySpec = Java.use('javax.crypto.spec.SecretKeySpec');
    // secretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function (a, b) {
    //     showStacks();
    //     var result = this.$init(a, b);
    //     send("======================================");
    //     send("算法名：" + b + "|Dec密钥:" + bytesToString(a));
    //     send("算法名：" + b + "|Hex密钥:" + bytesToHex(a));
    //     return result;
    // }
    // var mac = Java.use('javax.crypto.Mac');
    // mac.getInstance.overload('java.lang.String').implementation = function (a) {
    //     showStacks();
    //     var result = this.getInstance(a);
    //     send("======================================");
    //     send("算法名：" + a);
    //     return result;
    // }

    var HttpClientSslHelper = Java.use('com.ninemax.ncsearchnew.utils.HttpClientSslHelper');
    HttpClientSslHelper.getSSLContext.implementation = function (ct) {
        console.log('ct', typeof ct);
        var des = ""
        for (var name in ct) {
            des += name + ":" + ct[name] + ";";
        }
        console.log(des);

        console.log("Hook getSSLContext");
        var retval = this.getSSLContext(ct);
        console.log(retval);
        return retval
    }

    var HttpUtils = Java.use('com.ninemax.ncsearchnew.utils.HttpUtils');
    HttpUtils.request.implementation = function (method, url, params, cb) {
        console.log("Hook request");
        send(method.toString())
        send(url)
        send(params.toString())
        var retval = this.request(method, url, params, cb);
        console.log(retval);
        return retval
    }

    // var KeyStore = Java.use('java.security.KeyStore');
    // KeyStore.load.overload('java.io.InputStream', '[C').implementation = function (a, b) {
    //     console.log('a', a);
    //     console.log('b', b);
    //     send(a)
    //     console.log("Hook KeyStore.load");
    //     var retval = this.load(a, b);
    //     return retval
    // }


});