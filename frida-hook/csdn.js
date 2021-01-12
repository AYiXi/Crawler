Java.perform(function () {
    var Mac = Java.use('javax.crypto.Mac');
    send(Mac)

    var classes = Java.enumerateLoadedClassesSync();
    for(var i = 0; i < classes.length; i++){
        if(classes[i].indexOf("com.csdn.bbscomponent.http.utils.HttpUtils") != -1){
            console.log(classes[i]);
            var clazz = Java.use(classes[i]);
            var methods = clazz.class.getDeclaredMethods();
            for(var j = 0; j < methods.length; j++){
                console.log(methods[j]);
            }
        }
    }

    // Mac.getInstance.overload("java.lang.String").implementation = function(a) {
    //     console.log("buildResource")

    //     return this.getInstance(a)
    // }

    Mac.doFinal.overload("[B").implementation = function(a) {
        send(a)
        console.log("doFinal a" + a)
        var b = this.doFinal(a)
        send("doFinal" + b)
        return b
    }

    var Base64 = Java.use('android.util.Base64')
    send(Base64)
    Base64.encode.overload('[B', 'int').implementation = function(b, a) {
        console.log("Base64.encode")
        if (a != 0) {
            return this.encode(b, a)
        }
        send("encode a="+a)
        send("encode b="+b)
        // send(b)
        var c = this.encode(b, a)
        send("encode c="+c)
        return c
    }

    var HttpUtils = Java.use('com.csdn.bbscomponent.http.utils.HttpUtils')
    send(HttpUtils)
    
    HttpUtils.getHeaderParams.overload('java.lang.String', 'java.util.Map').implementation = function(a, b) {
        send('HttpUtils.getHeaderParams')
        return this.getHeaderParams(a, b)
    }
});