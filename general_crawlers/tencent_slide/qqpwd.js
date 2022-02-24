const jsdom = require("jsdom");

const {
  JSDOM
} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
atob = require("atob");
window = dom.window;
window.atob = atob;
document = window.document;
location = window.location;
navigator = window.navigator;
window.pt = {
    "str": {
        "no_uin": "你还没有输入帐号！",
        "no_pwd": "你还没有输入密码！",
        "no_vcode": "你还没有输入验证码！",
        "inv_uin": "请输入正确的帐号！",
        "inv_vcode": "请输入完整的验证码！",
        "qlogin_expire": "你所选择号码对应的QQ已经失效，请检查该号码对应的QQ是否已经被关闭。",
        "other_login": "帐号登录",
        "h_pt_login": "帐号密码登录",
        "otherqq_login": "QQ帐号密码登录",
        "onekey_return": "返回扫码登录"
    },
    "ptui": {
        "s_url": "https://qzs.qzone.qq.com/qzone/v5/loginsucc.html?para=izone",
        "proxy_url": "https://qzs.qq.com/qzone/v6/portal/proxy.html",
        "jumpname": "",
        "mibao_css": "",
        "defaultUin": "",
        "lockuin": 0,
        "href": "https://xui.ptlogin2.qq.com/cgi-bin/xlogin?proxy_url=https%3A//qzs.qq.com/qzone/v6/portal/proxy.html&daid=5&&hide_title_bar=1&low_login=0&qlogin_auto_login=1&no_verifyimg=1&link_target=blank&appid=549000912&style=22&target=self&s_url=https%3A%2F%2Fqzs.qzone.qq.com%2Fqzone%2Fv5%2Floginsucc.html%3Fpara%3Dizone&pt_qr_app=%E6%89%8B%E6%9C%BAQQ%E7%A9%BA%E9%97%B4&pt_qr_link=http%3A//z.qzone.com/download.html&self_regurl=https%3A//qzs.qq.com/qzone/v6/reg/index.html&pt_qr_help_link=http%3A//z.qzone.com/download.html&pt_no_auth=1",
        "login_sig": "",
        "clientip": "",
        "serverip": "",
        "version": "202112281458",
        "ptui_version": "21122814",
        "isHttps": false,
        "cssPath": "https://ui.ptlogin2.qq.com/style.ssl/40",
        "domain": "qq.com",
        "fromStyle": null,
        "pt_3rd_aid": "0",
        "appid": "549000912",
        "lang": "2052",
        "style": "40",
        "low_login": "0",
        "daid": "5",
        "regmaster": "",
        "enable_qlogin": "1",
        "noAuth": "1",
        "target": 0,
        "csimc": "0",
        "csnum": "0",
        "authid": "0",
        "auth_mode": "0",
        "pt_qzone_sig": "0",
        "pt_light": "0",
        "pt_vcode_v1": "1",
        "pt_ver_md5": "000D64FF6AF2E4247B21E209EB22A1DBCF002087B988CCCCD4B51233",
        "gzipEnable": "1"
    }
}

var TT;

f = [
    function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            "value": !0
        }),
            exports["default"] = void 0,
            window.console || (window.console = {
                "log": function () { },
                "warn": function () { },
                "error": function () { }
            });
        var $ = function $(t) {
            return "string" == typeof t ? document.getElementById(t) : t
        }, Fb, Db, Eb, Ac;
        function Hb() {
            if (void 0 === Fb)
                if (window.localStorage)
                    Fb = localStorage;
                else
                    try {
                        (t = document.createElement("link")).style.display = "none",
                            t.id = Db,
                            document.getElementsByTagName("head")[0].appendChild(t),
                            t.addBehavior("#default#userdata"),
                            (Fb = t).load(Db)
                    } catch (e) {
                        return void (Fb = !1)
                    }
            var t;
            return 1
        }
        function Ib(t) {
            return "string" == typeof t && Eb.test(t)
        }
        function pluginBegin() {
            if (!$.sso_loadComplete)
                try {
                    $.checkNPPlugin()
                } catch (t) { }
            $.sso_loadComplete = !0,
                $.report.setSpeedPoint($.plugin_isd_flag, 1, (new Date).getTime()),
                window.setTimeout(function (t) {
                    $.report.isdSpeed($.plugin_isd_flag, .05)
                }, 2e3)
        }
        $.cookie = {
            "get": function (t) {
                var o = function o(t) {
                    if (!t)
                        return t;
                    for (; t != unescape(t);)
                        t = unescape(t);
                    for (var e = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], n = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], i = 0; i < e.length; i++)
                        t = t.replace(new RegExp(e[i], "gi"), n[i]);
                    return t
                };
                return o((t = document.cookie.match(RegExp("(^|;\\s*)" + t + "=([^;]*)(;|$)"))) ? unescape(t[2]) : "")
            },
            "set": function (t, e, n, i, o) {
                var r = new Date;
                o ? (r.setTime(r.getTime() + 36e5 * o),
                    document.cookie = t + "=" + e + "; expires=" + r.toGMTString() + "; path=" + (i || "/") + "; " + (n ? "domain=" + n + ";" : "")) : document.cookie = t + "=" + e + "; path=" + (i || "/") + "; " + (n ? "domain=" + n + ";" : "")
            },
            "del": function (t, e, n) {
                document.cookie = t + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=" + (n || "/") + "; " + (e ? "domain=" + e + ";" : "")
            },
            "uin": function () {
                var t = $.cookie.get("uin");
                return t ? parseInt(t.substring(1, t.length), 10) : null
            }
        },
            $.iframe = function () {
                return new function () {
                    this.id = "",
                        this.parent = null,
                        this.parentID = "",
                        this.init = function (t) {
                            var e, n, i, t = t || {};
                            (this.opt = t).initTime = +new Date,
                                t.heartBeatTime = t.heartBeatTime || 1e4,
                                t.heartBeat = t.heartBeat || "heartBeat",
                                this.__hasinit || (this.__hasinit = !0,
                                    e = document.createElement("iframe"),
                                    console.log("createElement iFrame opt:", t),
                                    console.trace(),
                                    e.name = t.name || "iframe",
                                    this.id = e.id = t.id || "iframeid",
                                    this.parentID = t.parentID,
                                    e.style.cssText = t.iframeStyle || "z-index:999;height:100%;width:100%;position:fixed;left:0;top:0;right:0;bottom:0",
                                    e.src = t.url,
                                    e.scrolling = "no",
                                    i = null,
                                    this.parentID ? (i = document.createElement("div"),
                                        t.parentStyle && i.setAttribute("style", t.parentStyle),
                                        i.setAttribute("id", t.parentID),
                                        t.bgFilter && ((n = document.createElement("div")).setAttribute("style", "width:100%;height:100%;position: absolute;left:0;top:0;background: inherit;filter: blur(15px);"),
                                            i.appendChild(n)),
                                        i.appendChild(e),
                                        document.body.appendChild(i)) : document.body.appendChild(e),
                                    this.receiveMessageFromIframePage = function (t) {
                                        switch (console.log("receiveMessageFromIframePage", t),
                                        t && t.data && t.data.msg || "") {
                                            case "exit":
                                                this.opt.onClose && this.opt.onClose(t),
                                                    this.reset(t);
                                                break;
                                            case "success":
                                                this.opt.success && this.opt.success(t);
                                                break;
                                            case this.opt.heartBeat:
                                                this.opt.onload && this.opt.onload(t),
                                                    this._hasHeartBeat = !0;
                                                break;
                                            case "pt_smsSubmit":
                                                this.opt.smsSubmitEvent && this.opt.smsSubmitEvent()
                                        }
                                    }
                                        .bind(this),
                                    this.heartBeat(t),
                                    this.addListener(t))
                        }
                        ,
                        this.__hasinit = !1,
                        this._hasHeartBeat = !1,
                        this.addListener = function (t) {
                            window.addEventListener("message", this.receiveMessageFromIframePage, !1)
                        }
                        ,
                        this.postMessage = function (t) {
                            document.getElementById(this.id).contentWindow.postMessage(t, "https://ui.ptlogin2.qq.com")
                        }
                        ,
                        this.heartBeat = function (t) {
                            var e = this
                                , n = t.heartBeatTime || 1e4;
                            setTimeout(function () {
                                e._hasHeartBeat ? console.log("子页面调起成功") : (console.log("子页面调起失败"),
                                    t.fail && t.fail({
                                        "msg": "子页面调起失败,timeout"
                                    }))
                            }, n)
                        }
                        // ,
                        // this.reset = function () {
                        //     this.__hasinit = !1;
                        //     var t = document.getElementById(this.id)
                        //         , e = document.getElementById(this.parentID);
                        //     e ? document.body.removeChild(e) : t && document.body.removeChild(t),
                        //         window.removeEventListener("message", this.receiveMessageFromIframePage, !1)
                        // }
                }
            }
            ,
            $.url = {
                "getParam": function (t, e) {
                    e = e || window.location.href;
                    t = new RegExp("(\\?|#|&)" + t + "=(.*?)(&|#|$)"),
                        t = e.match(t);
                    return t ? decodeURIComponent(t[2]) : ""
                }
            },
            $.http = {
                "getXHR": function () {
                    return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
                },
                "ajax": function ajax(url, para, cb, method, type) {
                    var xhr = $.http.getXHR();
                    return xhr.open(method, url),
                        xhr.onreadystatechange = function () {
                            4 == xhr.readyState && (200 <= xhr.status && xhr.status < 300 || 304 === xhr.status || 1223 === xhr.status || 0 === xhr.status ? void 0 === type && xhr.responseText ? cb(eval("(" + xhr.responseText + ")")) : (cb(xhr.responseText),
                                !xhr.responseText && $.badjs._smid && $.badjs("HTTP Empty[xhr.status]:" + xhr.status, url, 0, $.badjs._smid)) : $.badjs._smid && $.badjs("HTTP Error[xhr.status]:" + xhr.status, url, 0, $.badjs._smid),
                                xhr = null)
                        }
                        ,
                        xhr.send(para),
                        xhr
                },
                "post": function (t, e, n, i) {
                    var o, r = "";
                    for (o in e)
                        r += "&" + o + "=" + e[o];
                    return $.http.ajax(t, r, n, "POST", i)
                },
                "get": function (t, e, n, i) {
                    var o, r = [];
                    for (o in e)
                        r.push(o + "=" + e[o]);
                    return -1 == t.indexOf("?") && (t += "?"),
                        t += r.join("&"),
                        $.http.ajax(t, null, n, "GET", i)
                },
                "jsonp": function (t) {
                    var e = document.createElement("script");
                    e.src = t,
                        document.getElementsByTagName("head")[0].appendChild(e)
                },
                "loadScript": function (t, e, n) {
                    var i = document.createElement("script");
                    i.onload = i.onreadystatechange = function () {
                        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || ("function" == typeof e && e(),
                            i.onload = i.onreadystatechange = null,
                            i.parentNode && i.parentNode.removeChild(i))
                    }
                        ,
                        i.src = t,
                        document.getElementsByTagName("head")[0].appendChild(i)
                },
                "preload": function (t) {
                    document.createElement("img").src = t
                }
            },
            $.get = $.http.get,
            $.post = $.http.post,
            $.jsonp = $.http.jsonp,
            $.browser = function (t) {
                var e, n;
                return "undefined" == typeof $.browser.info && (e = {
                    "type": ""
                },
                    n = navigator.userAgent.toLowerCase(),
                    /webkit/.test(n) ? e = {
                        "type": "webkit",
                        "version": /webkit[\/ ]([\w.]+)/
                    } : /opera/.test(n) ? e = {
                        "type": "opera",
                        "version": /version/.test(n) ? /version[\/ ]([\w.]+)/ : /opera[\/ ]([\w.]+)/
                    } : /msie/.test(n) ? e = {
                        "type": "msie",
                        "version": /msie ([\w.]+)/
                    } : /mozilla/.test(n) && !/compatible/.test(n) && (e = {
                        "type": "ff",
                        "version": /rv:([\w.]+)/
                    }),
                    e.version = (e.version && e.version.exec(n) || [0, "0"])[1],
                    $.browser.info = e),
                    $.browser.info[t]
            }
            ,
            $.e = {
                "_counter": 0,
                "_uid": function () {
                    return "h" + $.e._counter++
                },
                "add": function (e, t, n) {
                    var i, o, r;
                    "object" != typeof e && (e = $(e)),
                        document.addEventListener ? e.addEventListener(t, n, !1) : document.attachEvent && -1 == $.e._find(e, t, n) && (i = function i(t) {
                            t = {
                                "_event": t = t || window.event,
                                "type": t.type,
                                "target": t.srcElement,
                                "currentTarget": e,
                                "relatedTarget": t.fromElement || t.toElement,
                                "eventPhase": t.srcElement == e ? 2 : 3,
                                "clientX": t.clientX,
                                "clientY": t.clientY,
                                "screenX": t.screenX,
                                "screenY": t.screenY,
                                "altKey": t.altKey,
                                "ctrlKey": t.ctrlKey,
                                "shiftKey": t.shiftKey,
                                "keyCode": t.keyCode,
                                "data": t.data,
                                "origin": t.origin,
                                "stopPropagation": function () {
                                    this._event.cancelBubble = !0
                                },
                                "preventDefault": function () {
                                    this._event.returnValue = !1
                                }
                            };
                            Function.prototype.call ? n.call(e, t) : (e._currentHandler = n,
                                e._currentHandler(t),
                                e._currentHandler = null)
                        }
                            ,
                            e.attachEvent("on" + t, i),
                            o = {
                                "element": e,
                                "eventType": t,
                                "handler": n,
                                "wrappedHandler": i
                            },
                            r = (e.document || e).parentWindow,
                            t = $.e._uid(),
                            r._allHandlers || (r._allHandlers = {}),
                            r._allHandlers[t] = o,
                            e._handlers || (e._handlers = []),
                            e._handlers.push(t),
                            r._onunloadHandlerRegistered || (r._onunloadHandlerRegistered = !0,
                                r.attachEvent("onunload", $.e._removeAllHandlers)))
                },
                "remove": function (t, e, n) {
                    var i, o, r;
                    document.addEventListener ? t.removeEventListener(e, n, !1) : !document.attachEvent || -1 != (i = $.e._find(t, e, n)) && (o = (t.document || t).parentWindow,
                        r = t._handlers[i],
                        n = o._allHandlers[r],
                        t.detachEvent("on" + e, n.wrappedHandler),
                        t._handlers.splice(i, 1),
                        delete o._allHandlers[r])
                },
                "_find": function (t, e, n) {
                    var i = t._handlers;
                    if (!i)
                        return -1;
                    for (var o = (t.document || t).parentWindow, r = i.length - 1; 0 <= r; r--) {
                        var a = i[r]
                            , a = o._allHandlers[a];
                        if (a.eventType == e && a.handler == n)
                            return r
                    }
                    return -1
                },
                "_removeAllHandlers": function () {
                    for (id in this._allHandlers) {
                        var t = this._allHandlers[id];
                        t.element.detachEvent("on" + t.eventType, t.wrappedHandler),
                            delete this._allHandlers[id]
                    }
                },
                "src": function (t) {
                    return t ? t.target : event.srcElement
                },
                "stopPropagation": function (t) {
                    t ? t.stopPropagation() : event.cancelBubble = !0
                },
                "trigger": function (t, e) {
                    var n = {
                        "HTMLEvents": "abort,blur,change,error,focus,load,reset,resize,scroll,select,submit,unload",
                        "UIEevents": "keydown,keypress,keyup",
                        "MouseEvents": "click,mousedown,mousemove,mouseout,mouseover,mouseup"
                    };
                    if (document.createEvent) {
                        var i, o = "";
                        for (i in "mouseleave" == e && (e = "mouseout"),
                            "mouseenter" == e && (e = "mouseover"),
                            n)
                            if (n[i].indexOf(e)) {
                                o = i;
                                break
                            }
                        var r = document.createEvent(o);
                        r.initEvent(e, !0, !1),
                            t.dispatchEvent(r)
                    } else
                        document.createEventObject && t.fireEvent("on" + e)
                }
            },
            $.bom = {
                "query": function (t) {
                    t = window.location.search.match(new RegExp("(\\?|&)" + t + "=([^&]*)(&|$)"));
                    return t ? decodeURIComponent(t[2]) : ""
                },
                "getHash": function (t) {
                    t = window.location.hash.match(new RegExp("(#|&)" + t + "=([^&]*)(&|$)"));
                    return t ? decodeURIComponent(t[2]) : ""
                }
            },
            $.winName = {
                "set": function (t, e) {
                    var n = window.name || "";
                    n.match(new RegExp(";" + t + "=([^;]*)(;|$)")) ? window.name = n.replace(new RegExp(";" + t + "=([^;]*)"), ";" + t + "=" + e) : window.name = n + ";" + t + "=" + e
                },
                "get": function (t) {
                    t = (window.name || "").match(new RegExp(";" + t + "=([^;]*)(;|$)"));
                    return t ? t[1] : ""
                },
                "clear": function (t) {
                    var e = window.name || "";
                    window.name = e.replace(new RegExp(";" + t + "=([^;]*)"), "")
                }
            },
            $.localData = (Db = "ptlogin2.qq.com",
                Eb = /^[0-9A-Za-z_-]*$/,
            {
                "set": function (t, e) {
                    var n = !1;
                    if (Ib(t) && Hb())
                        try {
                            e += "",
                                n = window.localStorage ? (Fb.setItem(t, e),
                                    !0) : (Fb.setAttribute(t, e),
                                        Fb.save(Db),
                                        Fb.getAttribute(t) === e)
                        } catch (i) { }
                    return n
                },
                "get": function (t) {
                    if (Ib(t) && Hb())
                        try {
                            return window.localStorage ? Fb.getItem(t) : Fb.getAttribute(t)
                        } catch (e) { }
                    return null
                },
                "remove": function (t) {
                    if (Ib(t) && Hb())
                        try {
                            return window.localStorage ? Fb.removeItem(t) : Fb.removeAttribute(t),
                                !0
                        } catch (e) { }
                    return !1
                }
            }),
            $.str = function () {
                var htmlDecodeDict = {
                    "quot": '"',
                    "lt": "<",
                    "gt": ">",
                    "amp": "&",
                    "nbsp": " ",
                    "#34": '"',
                    "#60": "<",
                    "#62": ">",
                    "#38": "&",
                    "#160": " "
                }
                    , htmlEncodeDict = {
                        '"': "#34",
                        "<": "#60",
                        ">": "#62",
                        "&": "#38",
                        " ": "#160"
                    };
                return {
                    "decodeHtml": function (t) {
                        return (t += "").replace(/&(quot|lt|gt|amp|nbsp);/gi, function (t, e) {
                            return htmlDecodeDict[e]
                        }).replace(/&#u([a-f\d]{4});/gi, function (t, e) {
                            return String.fromCharCode(parseInt("0x" + e))
                        }).replace(/&#(\d+);/gi, function (t, e) {
                            return String.fromCharCode(+e)
                        })
                    },
                    "encodeHtml": function (t) {
                        return (t += "").replace(/["<>& ]/g, function (t) {
                            return "&" + htmlEncodeDict[t] + ";"
                        })
                    },
                    "trim": function (t) {
                        for (var e = /\s/, n = (t = (t += "").replace(/^\s+/, "")).length; e.test(t.charAt(--n));)
                            ;
                        return t.slice(0, n + 1)
                    },
                    "uin2hex": function uin2hex(str) {
                        var maxLength = 16;
                        str = parseInt(str);
                        for (var hex = str.toString(16), len = hex.length, i = len; i < maxLength; i++)
                            hex = "0" + hex;
                        for (var arr = [], j = 0; j < maxLength; j += 2)
                            arr.push("\\x" + hex.substr(j, 2));
                        var result = arr.join("");
                        return eval('result="' + result + '"'),
                            result
                    },
                    "bin2String": function (t) {
                        for (var e = [], n = 0, i = t.length; n < i; n++) {
                            var o = t.charCodeAt(n).toString(16);
                            1 == o.length && (o = "0" + o),
                                e.push(o)
                        }
                        return e = "0x" + e.join(""),
                            e = parseInt(e, 16)
                    },
                    "str2bin": function str2bin(str) {
                        for (var arr = [], i = 0; i < str.length; i += 2)
                            arr.push(eval("'\\x" + str.charAt(i) + str.charAt(i + 1) + "'"));
                        return arr.join("")
                    },
                    "utf8ToUincode": function (t) {
                        var e = "";
                        try {
                            var n = t.length
                                , o = [];
                            for (i = 0; i < n; i += 2)
                                o.push("%" + t.substr(i, 2));
                            e = decodeURIComponent(o.join("")),
                                e = $.str.decodeHtml(e)
                        } catch (r) {
                            e = ""
                        }
                        return e
                    },
                    "json2str": function (t) {
                        var e = "";
                        if ("undefined" != typeof JSON)
                            e = JSON.stringify(t);
                        else {
                            var n, i = [];
                            for (n in t)
                                i.push('"' + n + '":"' + t[n] + '"');
                            e = "{" + i.join(",") + "}"
                        }
                        return e
                    },
                    "time33": function (t) {
                        for (var e = 0, n = 0, i = t.length; n < i; n++)
                            e = (33 * e + t.charCodeAt(n)) % 4294967296;
                        return e
                    },
                    "hash33": function (t) {
                        for (var e = 0, n = 0, i = t.length; n < i; ++n)
                            e += (e << 5) + t.charCodeAt(n);
                        return 2147483647 & e
                    }
                }
            }(),
            $.css = (Ac = document.documentElement,
            {
                "getComputedStyle": function (t) {
                    return window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle
                },
                "getCurrentPixelStyle": function (t, e) {
                    if (window.getComputedStyle)
                        var n = parseInt(window.getComputedStyle(t)[e]);
                    else {
                        if ("auto" === (n = t.currentStyle[e] || 0))
                            switch (e || "") {
                                case "width":
                                case "height":
                                    return t.offsetHeight
                            }
                        var i = t.style.left
                            , o = t.runtimeStyle.left;
                        t.runtimeStyle.left = t.currentStyle.left,
                            t.style.left = "fontSize" === e ? "1em" : n,
                            n = t.style.pixelLeft + "px",
                            t.style.left = i,
                            t.runtimeStyle.left = o
                    }
                    return parseInt(n)
                },
                "getPageScrollTop": function () {
                    return window.pageYOffset || Ac.scrollTop || document.body.scrollTop || 0
                },
                "getPageScrollLeft": function () {
                    return window.pageXOffset || Ac.scrollLeft || document.body.scrollLeft || 0
                },
                "getOffsetPosition": function (t) {
                    t = $(t);
                    var e = 0
                        , n = 0;
                    if (Ac.getBoundingClientRect && t.getBoundingClientRect)
                        var i = t.getBoundingClientRect()
                            , o = Ac.clientTop || document.body.clientTop || 0
                            , r = Ac.clientLeft || document.body.clientLeft || 0
                            , e = i.top + this.getPageScrollTop() - o
                            , n = i.left + this.getPageScrollLeft() - r;
                    else
                        for (; e += t.offsetTop || 0,
                            n += t.offsetLeft || 0,
                            t = t.offsetParent,
                            t;)
                            ;
                    return {
                        "left": n,
                        "top": e
                    }
                },
                "getWidth": function (t) {
                    return $(t).offsetWidth
                },
                "getHeight": function (t) {
                    return $(t).offsetHeight
                },
                "show": function (t) {
                    t.style.display = "block"
                },
                "hide": function (t) {
                    t.style.display = "none"
                },
                "hasClass": function (t, e) {
                    if (!t.className)
                        return !1;
                    for (var n = t.className.split(" "), i = 0, o = n.length; i < o; i++)
                        if (e == n[i])
                            return !0;
                    return !1
                },
                "addClass": function (t, e) {
                    $.css.updateClass(t, e, !1)
                },
                "removeClass": function (t, e) {
                    $.css.updateClass(t, !1, e)
                },
                "updateClass": function (t, e, n) {
                    for (var i = t.className.split(" "), o = {}, r = 0, a = i.length; r < a; r++)
                        i[r] && (o[i[r]] = !0);
                    if (e)
                        for (var l = e.split(" "), r = 0, a = l.length; r < a; r++)
                            l[r] && (o[l[r]] = !0);
                    if (n) {
                        var s = n.split(" ");
                        for (r = 0,
                            a = s.length; r < a; r++)
                            s[r] && delete o[s[r]]
                    }
                    var u, c = [];
                    for (u in o)
                        c.push(u);
                    t.className = c.join(" ")
                },
                "setClass": function (t, e) {
                    t.className = e
                }
            }),
            $.animate = {
                "fade": function (t, e, n, i, o) {
                    var r, a, l, s, u, c, d;
                    (t = $(t)) && (t.effect || (t.effect = {}),
                        r = Object.prototype.toString.call(e),
                        a = 100,
                        isNaN(e) ? "[object Object]" == r && e && e.to && (isNaN(e.to) || (a = e.to),
                            isNaN(e.from) || (t.style.opacity = e.from / 100,
                                t.style.filter = "alpha(opacity=" + e.from + ")")) : a = e,
                        "undefined" == typeof t.effect.fade && (t.effect.fade = 0),
                        window.clearInterval(t.effect.fade),
                        n = n || 1,
                        i = i || 20,
                        l = window.navigator.userAgent.toLowerCase(),
                        s = function s(t) {
                            var e;
                            return t = -1 != l.indexOf("msie") ? 0 <= (e = (t.currentStyle || {}).filter || "").indexOf("opacity") ? parseFloat(e.match(/opacity=([^)]*)/)[1]) + "" : "100" : 100 * ((e = (e = t.ownerDocument.defaultView) && e.getComputedStyle) && e(t, null)["opacity"] || 1),
                                parseFloat(t)
                        }
                        ,
                        u = s(t),
                        c = u < a ? 1 : -1,
                        -1 != l.indexOf("msie") && i < 15 && (n = Math.floor(15 * n / i),
                            i = 15),
                        d = function d() {
                            u += n * c,
                                0 <= (Math.round(u) - a) * c ? (t.style.opacity = a / 100,
                                    t.style.filter = "alpha(opacity=" + a + ")",
                                    window.clearInterval(t.effect.fade),
                                    "function" == typeof o && o(t)) : (t.style.opacity = u / 100,
                                        t.style.filter = "alpha(opacity=" + u + ")")
                        }
                        ,
                        t.effect.fade = window.setInterval(d, i))
                },
                "animate": function (n, i, o, t, r) {
                    if (n = $(n)) {
                        for (var e in n.effect || (n.effect = {}),
                            "undefined" == typeof n.effect.animate && (n.effect.animate = 0),
                            i)
                            i[e] = parseInt(i[e]) || 0;
                        window.clearInterval(n.effect.animate);
                        var o = o || 10
                            , t = t || 20
                            , a = function a(t) {
                                return {
                                    "left": t.offsetLeft,
                                    "top": t.offsetTop
                                }
                            }
                            , l = a(n)
                            , s = {
                                "width": n.clientWidth,
                                "height": n.clientHeight,
                                "left": l.left,
                                "top": l.top
                            }
                            , u = [];
                        -1 != window.navigator.userAgent.toLowerCase().indexOf("msie") && "BackCompat" == document.compatMode || (d = document.defaultView ? document.defaultView.getComputedStyle(n, null) : n.currentStyle,
                            l = i.width || 0 == i.width ? parseInt(i.width) : null,
                            c = i.height || 0 == i.height ? parseInt(i.height) : null,
                            "number" == typeof l && (u.push("width"),
                                i.width = l - d.paddingLeft.replace(/\D/g, "") - d.paddingRight.replace(/\D/g, "")),
                            "number" == typeof c && (u.push("height"),
                                i.height = c - d.paddingTop.replace(/\D/g, "") - d.paddingBottom.replace(/\D/g, "")),
                            t < 15 && (o = Math.floor(15 * o / t),
                                t = 15));
                        var c = i.left || 0 == i.left ? parseInt(i.left) : null
                            , d = i.top || 0 == i.top ? parseInt(i.top) : null;
                        "number" == typeof c && (u.push("left"),
                            n.style.position = "absolute"),
                            "number" == typeof d && (u.push("top"),
                                n.style.position = "absolute");
                        for (var f = [], p = u.length, e = 0; e < p; e++)
                            f[u[e]] = s[u[e]] < i[u[e]] ? 1 : -1;
                        var h = n.style
                            , g = function g() {
                                for (var t = !0, e = 0; e < p; e++)
                                    s[u[e]] = s[u[e]] + f[u[e]] * Math.abs(i[u[e]] - s[u[e]]) * o / 100,
                                        0 <= (Math.round(s[u[e]]) - i[u[e]]) * f[u[e]] ? (t = t && !0,
                                            h[u[e]] = i[u[e]] + "px") : (t = t && !1,
                                                h[u[e]] = s[u[e]] + "px");
                                t && (window.clearInterval(n.effect.animate),
                                    "function" == typeof r && r(n))
                            };
                        n.effect.animate = window.setInterval(g, t)
                    }
                },
                "animate2": function (t, e, n, i, o) {
                    var r, n = n || 1, i = i || 20, a = $(t), l = $.css.getComputedStyle(a), s = {}, u = {};
                    for (r in e)
                        s[r] = l[r].replace(/[-\d\s]/g, "") || e[r].replace(/[-\d\s]/g, "") || "",
                            e[r] = parseFloat(e[r]),
                            u[r] = parseFloat(l[r]);
                    var c = 100 / n
                        , d = 0
                        , f = setInterval(function () {
                            if (d++ >= c)
                                clearInterval(f);
                            else
                                for (var t in e)
                                    a.style[t] = (e[t] - u[t]) * d / c + u[t] + s[t]
                        }, i)
                }
            },
            $.check = {
                "isHttps": function () {
                    return "https:" == document.location.protocol
                },
                "isSsl": function () {
                    var t = document.location.host;
                    return /^ssl./i.test(t)
                },
                "isIpad": function () {
                    var t = navigator.userAgent.toLowerCase();
                    return /ipad/i.test(t)
                },
                "isQQ": function (t) {
                    return /^[1-9]{1}\d{4,9}$/.test(t)
                },
                "isQQMail": function (t) {
                    return /^[1-9]{1}\d{4,9}@qq\.com$/.test(t)
                },
                "isNullQQ": function (t) {
                    return /^\d{1,4}$/.test(t)
                },
                "isNick": function (t) {
                    return /^[a-zA-Z]{1}([a-zA-Z0-9]|[-_]){0,19}$/.test(t)
                },
                "isName": function (t) {
                    return "<请输入帐号>" != t && /[\u4E00-\u9FA5]{1,8}/.test(t)
                },
                "isPhone": function (t) {
                    return /^(?:86|886|)1\d{10}\s*$/.test(t)
                },
                "isSeaPhone": function (t) {
                    return /^(00)?(?:852|853|886(0)?\d{1})\d{8}$/.test(t)
                },
                "isMail": function (t) {
                    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)
                },
                "isQiyeQQ800": function (t) {
                    return /^(800)\d{7}$/.test(t)
                },
                "isPassword": function (t) {
                    return t && 16 <= t.length
                },
                "isForeignPhone": function (t) {
                    return /^00\d{7,}/.test(t)
                },
                "needVip": function (t) {
                    for (var e = ["21001601", "21000110", "21000121", "46000101", "716027609", "716027610", "549000912", "637009801"], n = !0, i = 0, o = e.length; i < o; i++)
                        if (e[i] == t) {
                            n = !1;
                            break
                        }
                    return n
                },
                "isPaipai": function () {
                    return /paipai.com$/.test(window.location.hostname)
                },
                "is_weibo_appid": function (t) {
                    return 46000101 == t || 607000101 == t || 558032501 == t || 682023901 == t
                }
            },
            $.report = {
                "monitor": function (t, e) {
                    if (!(Math.random() > (e || 1)))
                        try {
                            var n = location.protocol + "//ui.ptlogin2.qq.com/cgi-bin/report?id=" + t;
                            $.http.preload(n)
                        } catch (i) { }
                },
                "nlog": function (t, e, n, i) {
                    if (!(Math.random() >= (n || 1)))
                        try {
                            var o = "//ui.ptlogin2.qq.com/cgi-bin/report?"
                                , r = encodeURIComponent(t + "|_|" + location.href + "|_|" + window.navigator.userAgent);
                            i && (o += "u=" + i + "&"),
                                o += "id=" + (e = e || 0) + "&msg=" + r + "&v=" + Math.random(),
                                $.http.preload(o)
                        } catch (a) { }
                },
                "simpleIsdSpeed": function (t, e) {
                    Math.random() < (e || 1) && (e = "http://isdspeed.qq.com/cgi-bin/r.cgi?",
                        $.check.isHttps() && (e = "https://huatuospeed.weiyun.com/cgi-bin/r.cgi?"),
                        e += t,
                        $.http.preload(e))
                },
                "isdSpeed": function (t, e) {
                    var n = !1
                        , i = "http://isdspeed.qq.com/cgi-bin/r.cgi?";
                    if ($.check.isHttps() && (i = "https://huatuospeed.weiyun.com/cgi-bin/r.cgi?"),
                        i += t,
                        Math.random() < (e || 1)) {
                        var o, r = $.report.getSpeedPoints(t);
                        for (o in r)
                            r[o] && r[o] < 3e4 && (i += "&" + o + "=" + r[o],
                                n = !0);
                        i += "&v=" + Math.random(),
                            n && $.http.preload(i)
                    }
                    $.report.setSpeedPoint(t)
                },
                "speedPoints": {},
                "basePoint": {},
                "setBasePoint": function (t, e) {
                    $.report.basePoint[t] = e
                },
                "setSpeedPoint": function (t, e, n) {
                    e ? ($.report.speedPoints[t] || ($.report.speedPoints[t] = {}),
                        $.report.speedPoints[t][e] = n - $.report.basePoint[t]) : $.report.speedPoints[t] = {}
                },
                "setSpeedPoints": function (t, e) {
                    $.report.speedPoints[t] = e
                },
                "getSpeedPoints": function (t) {
                    return $.report.speedPoints[t]
                }
            },
            $.sso_ver = 0,
            $.sso_state = 0,
            $.plugin_isd_flag = "",
            $.nptxsso = null,
            $.activetxsso = null,
            $.sso_loadComplete = !0,
            $.np_clock = 0,
            $.loginQQnum = 0,
            $.suportActive = function () {
                var t = !0;
                try {
                    window.ActiveXObject || window.ActiveXObject.prototype ? (t = !0,
                        window.ActiveXObject.prototype && !window.ActiveXObject && $.report.nlog("activeobject 判断有问题")) : t = !1
                } catch (e) {
                    t = !1
                }
                return t
            }
            ,
            $.getLoginQQNum = function () {
                try {
                    var t = 0;
                    if ($.suportActive()) {
                        $.plugin_isd_flag = "flag1=7808&flag2=1&flag3=20",
                            $.report.setBasePoint($.plugin_isd_flag, new Date);
                        var e = new ActiveXObject("SSOAxCtrlForPTLogin.SSOForPTLogin2")
                            , n = ($.activetxsso = e).CreateTXSSOData();
                        e.InitSSOFPTCtrl(0, n);
                        t = e.DoOperation(2, n).GetArray("PTALIST").GetSize();
                        try {
                            var i = e.QuerySSOInfo(1);
                            $.sso_ver = i.GetInt("nSSOVersion")
                        } catch (a) {
                            $.sso_ver = 0
                        }
                    } else if (navigator.mimeTypes["application/nptxsso"])
                        if ($.plugin_isd_flag = "flag1=7808&flag2=1&flag3=21",
                            $.report.setBasePoint($.plugin_isd_flag, (new Date).getTime()),
                            $.nptxsso || ($.nptxsso = document.createElement("embed"),
                                $.nptxsso.type = "application/nptxsso",
                                $.nptxsso.style.width = "0px",
                                $.nptxsso.style.height = "0px",
                                document.body.appendChild($.nptxsso)),
                            "function" != typeof $.nptxsso.InitPVANoST)
                            $.sso_loadComplete = !1,
                                $.report.nlog("没有找到插件的InitPVANoST方法", 269929);
                        else {
                            $.nptxsso.InitPVANoST() && (t = $.nptxsso.GetPVACount(),
                                $.sso_loadComplete = !0);
                            try {
                                $.sso_ver = $.nptxsso.GetSSOVersion()
                            } catch (a) {
                                $.sso_ver = 0
                            }
                        }
                    else
                        $.report.nlog("插件没有注册成功", 263744),
                            $.sso_state = 2
                } catch (a) {
                    var o = null;
                    try {
                        o = $.http.getXHR()
                    } catch (a) {
                        return 0
                    }
                    var r = a.message || a;
                    return /^pt_windows_sso/.test(r) ? (/^pt_windows_sso_\d+_3/.test(r) ? $.report.nlog("QQ插件不支持该url" + a.message, 326044) : $.report.nlog("QQ插件抛出内部错误" + a.message, 325361),
                        $.sso_state = 1) : o && "msie" == $.browser("type") ? "Win64" != window.navigator.platform ? ($.report.nlog("可能没有安装QQ" + a.message, 322340),
                            $.sso_state = 2) : $.report.nlog("使用64位IE" + a.message, 343958) : ($.report.nlog("获取登录QQ号码出错" + a.message, 263745),
                                window.ActiveXObject && "Win32" == window.navigator.platform && ($.sso_state = 1)),
                        0
                }
                return $.loginQQnum = t
            }
            ,
            $.checkNPPlugin = function () {
                var t = 10;
                window.clearInterval($.np_clock),
                    $.np_clock = window.setInterval(function () {
                        "function" == typeof $.nptxsso.InitPVANoST || 0 == t ? (window.clearInterval($.np_clock),
                            "function" == typeof $.nptxsso.InitPVANoST && pt.plogin.auth()) : t--
                    }, 200)
            }
            ,
            $.guanjiaPlugin = null,
            $.initGuanjiaPlugin = function () {
                try {
                    window.ActiveXObject ? $.guanjiaPlugin = new ActiveXObject("npQMExtensionsIE.Basic") : navigator.mimeTypes["application/qqpcmgr-extensions-mozilla"] && ($.guanjiaPlugin = document.createElement("embed"),
                        $.guanjiaPlugin.type = "application/qqpcmgr-extensions-mozilla",
                        $.guanjiaPlugin.style.width = "0px",
                        $.guanjiaPlugin.style.height = "0px",
                        document.body.appendChild($.guanjiaPlugin));
                    var t = $.guanjiaPlugin.QMGetVersion().split(".");
                    4 == t.length && 9319 <= t[2] || ($.guanjiaPlugin = null)
                } catch (e) {
                    $.guanjiaPlugin = null
                }
            }
            ,
            "" != $.cookie.get("nohost_guid") && $.http.loadScript("/nohost_htdocs/js/SwitchHost.js", function () {
                var t = window["SwitchHost"] && window["SwitchHost"].init;
                t && t()
            }),
            document.getElementsByClassName || (document.getElementsByClassName = function (t) {
                for (var e = [], n = new RegExp("(^| )" + t + "( |$)"), i = document.getElementsByTagName("*"), o = 0, r = i.length; o < r; o++)
                    n.test(i[o].className) && e.push(i[o]);
                return e
            }
            );
        var _default = $;
        exports["default"] = _default
    }
    , function (t, e) {
        var n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (i) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.getCallerName = e.logger = void 0;
        var l = (new Date).getTime()
            , s = function s(t, e, n) {
                return String.prototype.padStart ? String.prototype.padStart.call(t, e, n) : t
            }
            , i = 1
            , o = 10
            , r = 100
            , a = o
            , u = function u(t) {
                return ""
            };
        e.getCallerName = u;
        var c = function c() {
            var t = new Date
                , e = s(String(t.getMonth() + 1), 2, "0")
                , n = s(String(t.getDate()), 2, "0")
                , i = s(String(t.getHours()), 2, "0")
                , o = s(String(t.getMinutes()), 2, "0")
                , r = s(String(t.getSeconds()), 2, "0")
                , a = s(String(t.getUTCMilliseconds()), 3, "0");
            return "".concat(t.getFullYear(), "-").concat(e, "-").concat(n, " ").concat(i, ":").concat(o, ":").concat(r, " ").concat(a)
        }
            , d = function d(t, e) {
                for (var n, i = arguments.length, o = new Array(2 < i ? i - 2 : 0), r = 2; r < i; r++)
                    o[r - 2] = arguments[r];
                try {
                    if (!window.console || !window.console.log || "function" != typeof window.console.log)
                        return;
                    if ((n = console).log.apply(n, ["".concat(c(), " [").concat(l, "][").concat(t.toUpperCase(), "]").concat(e ? "[".concat(e, "]") : "")].concat(o)),
                        !window.g_aegis || !window.g_aegis.info)
                        return void console.log("aegis instance is null, do not report");
                    if (!o || !o.join)
                        return void console.log("illegal args:", o);
                    (n = window.g_aegis).info.apply(n, ["".concat(c(), " [").concat(t.toUpperCase(), "][").concat(l, "]").concat(e ? "[".concat(e, "]") : "")].concat(o))
                } catch (a) {
                    console.log("[ERROR] error occured when print log", a)
                }
            }
            , f = {
                "log": function () {
                    if (!(i < a)) {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                            e[n] = arguments[n];
                        d.apply(void 0, [" log  ", "".concat(u(3))].concat(e))
                    }
                },
                "info": function () {
                    if (!(o < a)) {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                            e[n] = arguments[n];
                        d.apply(void 0, [" info ", "".concat(u(3))].concat(e))
                    }
                },
                "warn": function () {
                    if (!(r < a)) {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                            e[n] = arguments[n];
                        d.apply(void 0, [" warn ", "".concat(u(3))].concat(e))
                    }
                },
                "error": function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    d.apply(void 0, [" error", "".concat(u(3))].concat(e))
                }
            };
        e.logger = f
    }
    , function (t, e, n) {
        "use strict";
        e["a"] = function (e) {
            var n = this.constructor;
            return this.then(function (t) {
                return n.resolve(e()).then(function () {
                    return t
                })
            }, function (t) {
                return n.resolve(e()).then(function () {
                    return n.reject(t)
                })
            })
        }
    }
    , function (t, e, n) {
        "use strict";
        e["a"] = function (n) {
            return new this(function (i, t) {
                if (!n || "undefined" == typeof n.length)
                    return t(new TypeError(typeof n + " " + n + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                var o = Array.prototype.slice.call(n);
                if (0 === o.length)
                    return i([]);
                var r = o.length;
                for (var e = 0; e < o.length; e++)
                    !function a(e, t) {
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if ("function" == typeof n)
                                return void n.call(t, function (t) {
                                    a(e, t)
                                }, function (t) {
                                    o[e] = {
                                        "status": "rejected",
                                        "reason": t
                                    },
                                        0 == --r && i(o)
                                })
                        }
                        o[e] = {
                            "status": "fulfilled",
                            "value": t
                        },
                            0 == --r && i(o)
                    }(e, o[e])
            }
            )
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var s = {
            "PADCHAR": "=",
            "ALPHA": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            "getbyte": function (t, e) {
                e = t.charCodeAt(e);
                if (255 < e)
                    throw "INVALID_CHARACTER_ERR: DOM Exception 5";
                return e
            },
            "encode": function (t) {
                if (1 != arguments.length)
                    throw "SyntaxError: Not enough arguments";
                var e, n, i = s.PADCHAR, o = s.ALPHA, r = s.getbyte, a = [], l = (t = "" + t).length - t.length % 3;
                if (0 == t.length)
                    return t;
                for (e = 0; e < l; e += 3)
                    n = r(t, e) << 16 | r(t, e + 1) << 8 | r(t, e + 2),
                        a.push(o.charAt(n >> 18)),
                        a.push(o.charAt(n >> 12 & 63)),
                        a.push(o.charAt(n >> 6 & 63)),
                        a.push(o.charAt(63 & n));
                switch (t.length - l) {
                    case 1:
                        n = r(t, e) << 16,
                            a.push(o.charAt(n >> 18) + o.charAt(n >> 12 & 63) + i + i);
                        break;
                    case 2:
                        n = r(t, e) << 16 | r(t, e + 1) << 8,
                            a.push(o.charAt(n >> 18) + o.charAt(n >> 12 & 63) + o.charAt(n >> 6 & 63) + i)
                }
                return a.join("")
            }
        };
        e["default"] = s
    }
    , function (t, e) {
        var i = Object.defineProperty;
        i && function () {
            var t = {};
            try {
                for (var e in i(t, "x", {
                    "enumerable": !1,
                    "value": t
                }),
                    t)
                    return !1;
                return t.x === t
            } catch (n) {
                return !1
            }
        }() || (Object.defineProperty = function (t, e, n) {
            if (i && 1 == t.nodeType)
                return i(t, e, n);
            t[e] = n.value || n.get && n.get()
        }
            )
    }
    , function (t, e, n) {
        "use strict";
        Function.prototype.bind || (Function.prototype.bind = function (t) {
            if ("function" != typeof this)
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1)
                , n = this
                , i = function i() { }
                , o = function o() {
                    return n.apply(this instanceof i && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                };
            return i.prototype = this.prototype,
                o.prototype = new i,
                o
        }
        )
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.HTTP_CODE = e.RET_CODE = e.TYPE = e.report007 = void 0;
        var i = function () {
            return (i = Object.assign || function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }
            ).apply(this, arguments)
        }
            , o = {
                "SUCCESS": 0,
                "FAILED": 1
            };
        e.TYPE = o;
        var r = {
            "OK": 200,
            "SERVER_INTERNAL_ERROR": 500,
            "TIMEOUT": 504
        };
        e.HTTP_CODE = r;
        var a = {
            "OK": 0,
            "UNKNOW": 9998,
            "MEANINGLESS": 9999,
            "JSON_PARSE_ERROR": 9997,
            "EMPTY_RESPONSE_BODY": 9996
        };
        e.RET_CODE = a;
        var l = function l(t) {
            var e;
            t.cgi ? (e = i({
                "app": "ptlogin",
                "type": o.FAILED,
                "retcode": a.UNKNOW,
                "cost": 10086
            }, t),
                t.httpcode !== r.OK && (e.retcode = a.MEANINGLESS),
                e = "https://report.qqweb.qq.com/report/007?app=" + encodeURIComponent(e.app) + "&url=" + encodeURIComponent(e.cgi) + "&type=" + e.type + "&httpcode=" + e.httpcode + "&retcode=" + e.retcode + "&cost=" + e.cost,
                (new Image).src = e) : console.log("cgi 为空，忽略上报")
        };
        e.report007 = l
    }
    , , function (t, e, i) {
        "use strict";
        (function (o) {
            var f = i(24)
                , p = i(25)
                , r = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/
                , e = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i
                , n = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");
            function h(t) {
                return (t || "").toString().replace(n, "")
            }
            var g = [["#", "hash"], ["?", "query"], function (t) {
                return t.replace("\\", "/")
            }
                , ["/", "pathname"], ["@", "auth", 1], [NaN, "host", undefined, 1, 1], [/:(\d+)$/, "port", undefined, 1], [NaN, "hostname", undefined, 1, 1]]
                , a = {
                    "hash": 1,
                    "query": 1
                };
            function m(t) {
                var e, n = "undefined" != typeof window ? window : void 0 !== o ? o : "undefined" != typeof self ? self : {}, n = n.location || {}, i = {}, n = typeof (t = t || n);
                if ("blob:" === t.protocol)
                    i = new y(unescape(t.pathname), {});
                else if ("string" == n)
                    for (e in i = new y(t, {}),
                        a)
                        delete i[e];
                else if ("object" == n) {
                    for (e in t)
                        e in a || (i[e] = t[e]);
                    i.slashes === undefined && (i.slashes = r.test(t.href))
                }
                return i
            }
            function _(t) {
                t = h(t);
                t = e.exec(t);
                return {
                    "protocol": t[1] ? t[1].toLowerCase() : "",
                    "slashes": !!(t[2] && 2 <= t[2].length),
                    "rest": t[2] && 1 === t[2].length ? "/" + t[3] : t[3]
                }
            }
            function y(t, e, n) {
                if (t = h(t),
                    !(this instanceof y))
                    return new y(t, e, n);
                var i, o, r, a, l, s = g.slice(), u = typeof e, c = this, d = 0;
                for ("object" != u && "string" != u && (n = e,
                    e = null),
                    n && "function" != typeof n && (n = p.parse),
                    e = m(e),
                    i = !(u = _(t || "")).protocol && !u.slashes,
                    c.slashes = u.slashes || i && e.slashes,
                    c.protocol = u.protocol || e.protocol || "",
                    t = u.rest,
                    u.slashes || (s[3] = [/(.*)/, "pathname"]); d < s.length; d++)
                    "function" != typeof (r = s[d]) ? (o = r[0],
                        l = r[1],
                        o != o ? c[l] = t : "string" == typeof o ? ~(a = t.indexOf(o)) && (t = "number" == typeof r[2] ? (c[l] = t.slice(0, a),
                            t.slice(a + r[2])) : (c[l] = t.slice(a),
                                t.slice(0, a))) : (a = o.exec(t)) && (c[l] = a[1],
                                    t = t.slice(0, a.index)),
                        c[l] = c[l] || i && r[3] && e[l] || "",
                        r[4] && (c[l] = c[l].toLowerCase())) : t = r(t);
                n && (c.query = n(c.query)),
                    i && e.slashes && "/" !== c.pathname.charAt(0) && ("" !== c.pathname || "" !== e.pathname) && (c.pathname = function (t, e) {
                        if ("" === t)
                            return e;
                        for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), i = n.length, t = n[i - 1], o = !1, r = 0; i--;)
                            "." === n[i] ? n.splice(i, 1) : ".." === n[i] ? (n.splice(i, 1),
                                r++) : r && (0 === i && (o = !0),
                                    n.splice(i, 1),
                                    r--);
                        return o && n.unshift(""),
                            "." !== t && ".." !== t || n.push(""),
                            n.join("/")
                    }(c.pathname, e.pathname)),
                    "/" !== c.pathname.charAt(0) && c.hostname && (c.pathname = "/" + c.pathname),
                    f(c.port, c.protocol) || (c.host = c.hostname,
                        c.port = ""),
                    c.username = c.password = "",
                    c.auth && (r = c.auth.split(":"),
                        c.username = r[0] || "",
                        c.password = r[1] || ""),
                    c.origin = c.protocol && c.host && "file:" !== c.protocol ? c.protocol + "//" + c.host : "null",
                    c.href = c.toString()
            }
            y.prototype = {
                "set": function (t, e, n) {
                    var i, o = this;
                    switch (t) {
                        case "query":
                            "string" == typeof e && e.length && (e = (n || p.parse)(e)),
                                o[t] = e;
                            break;
                        case "port":
                            o[t] = e,
                                f(e, o.protocol) ? e && (o.host = o.hostname + ":" + e) : (o.host = o.hostname,
                                    o[t] = "");
                            break;
                        case "hostname":
                            o[t] = e,
                                o.port && (e += ":" + o.port),
                                o.host = e;
                            break;
                        case "host":
                            o[t] = e,
                                /:\d+$/.test(e) ? (e = e.split(":"),
                                    o.port = e.pop(),
                                    o.hostname = e.join(":")) : (o.hostname = e,
                                        o.port = "");
                            break;
                        case "protocol":
                            o.protocol = e.toLowerCase(),
                                o.slashes = !n;
                            break;
                        case "pathname":
                        case "hash":
                            e ? (i = "pathname" === t ? "/" : "#",
                                o[t] = e.charAt(0) !== i ? i + e : e) : o[t] = e;
                            break;
                        default:
                            o[t] = e
                    }
                    for (var r = 0; r < g.length; r++) {
                        var a = g[r];
                        a[4] && (o[a[1]] = o[a[1]].toLowerCase())
                    }
                    return o.origin = o.protocol && o.host && "file:" !== o.protocol ? o.protocol + "//" + o.host : "null",
                        o.href = o.toString(),
                        o
                },
                "toString": function (t) {
                    t && "function" == typeof t || (t = p.stringify);
                    var e = this
                        , n = e.protocol;
                    return n && ":" !== n.charAt(n.length - 1) && (n += ":"),
                        n += e.slashes ? "//" : "",
                        e.username && (n += e.username,
                            e.password && (n += ":" + e.password),
                            n += "@"),
                        n += e.host + e.pathname,
                        (t = "object" == typeof e.query ? t(e.query) : e.query) && (n += "?" !== t.charAt(0) ? "?" + t : t),
                        e.hash && (n += e.hash),
                        n
                }
            },
                y.extractProtocol = _,
                y.location = m,
                y.trimLeft = h,
                y.qs = p,
                t.exports = y
        }
        ).call(this, i(1))
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var a = i(n(12))
            , l = i(n(13))
            , s = i(n(5));
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var o, r, d, n = (o = 1,
            r = 8,
            d = 32,
        {
            "getEncryption": function (t, e, n, i) {
                n = n || "",
                    t = t || "";
                for (var i = i ? t : u(t), t = u(w(i) + e), n = l["default"].strToBytes(n.toUpperCase(), !0), o = Number(n.length / 2).toString(16); o.length < 4;)
                    o = "0" + o;
                l["default"].initkey(t),
                    n = l["default"].encrypt(i + l["default"].strToBytes(e) + o + n),
                    l["default"].initkey("");
                for (var r = Number(n.length / 2).toString(16); r.length < 4;)
                    r = "0" + r;
                return n = a["default"].rsa_encrypt(w(r + n)),
                    setTimeout(function () {
                        !function (t, e) {
                            if (!(Math.random() > (e || 1)))
                                try {
                                    var n = location.protocol + "//ui.ptlogin2.qq.com/cgi-bin/report?id=" + t;
                                    document.createElement("img").src = n
                                } catch (i) { }
                        }(488358, 1)
                    }, 0),
                    s["default"].encode(w(n)).replace(/[\/\+=]/g, function (t) {
                        return {
                            "/": "-",
                            "+": "*",
                            "=": "_"
                        }[t]
                    })
            },
            "getRSAEncryption": function (t, e, n) {
                return e = (n ? t : u(t)) + e.toUpperCase(),
                    a["default"].rsa_encrypt(e)
            },
            "md5": u
        });
        function u(t) {
            return v(c(y(t = t), t.length * r))
        }
        function c(t, e) {
            t[e >> 5] |= 128 << e % 32,
                t[14 + (e + 64 >>> 9 << 4)] = e;
            for (var n = 1732584193, i = -271733879, o = -1732584194, r = 271733878, a = 0; a < t.length; a += 16) {
                var l = n
                    , s = i
                    , u = o
                    , c = r
                    , n = p(n, i, o, r, t[a + 0], 7, -680876936)
                    , r = p(r, n, i, o, t[a + 1], 12, -389564586)
                    , o = p(o, r, n, i, t[a + 2], 17, 606105819)
                    , i = p(i, o, r, n, t[a + 3], 22, -1044525330);
                n = p(n, i, o, r, t[a + 4], 7, -176418897),
                    r = p(r, n, i, o, t[a + 5], 12, 1200080426),
                    o = p(o, r, n, i, t[a + 6], 17, -1473231341),
                    i = p(i, o, r, n, t[a + 7], 22, -45705983),
                    n = p(n, i, o, r, t[a + 8], 7, 1770035416),
                    r = p(r, n, i, o, t[a + 9], 12, -1958414417),
                    o = p(o, r, n, i, t[a + 10], 17, -42063),
                    i = p(i, o, r, n, t[a + 11], 22, -1990404162),
                    n = p(n, i, o, r, t[a + 12], 7, 1804603682),
                    r = p(r, n, i, o, t[a + 13], 12, -40341101),
                    o = p(o, r, n, i, t[a + 14], 17, -1502002290),
                    n = h(n, i = p(i, o, r, n, t[a + 15], 22, 1236535329), o, r, t[a + 1], 5, -165796510),
                    r = h(r, n, i, o, t[a + 6], 9, -1069501632),
                    o = h(o, r, n, i, t[a + 11], 14, 643717713),
                    i = h(i, o, r, n, t[a + 0], 20, -373897302),
                    n = h(n, i, o, r, t[a + 5], 5, -701558691),
                    r = h(r, n, i, o, t[a + 10], 9, 38016083),
                    o = h(o, r, n, i, t[a + 15], 14, -660478335),
                    i = h(i, o, r, n, t[a + 4], 20, -405537848),
                    n = h(n, i, o, r, t[a + 9], 5, 568446438),
                    r = h(r, n, i, o, t[a + 14], 9, -1019803690),
                    o = h(o, r, n, i, t[a + 3], 14, -187363961),
                    i = h(i, o, r, n, t[a + 8], 20, 1163531501),
                    n = h(n, i, o, r, t[a + 13], 5, -1444681467),
                    r = h(r, n, i, o, t[a + 2], 9, -51403784),
                    o = h(o, r, n, i, t[a + 7], 14, 1735328473),
                    n = g(n, i = h(i, o, r, n, t[a + 12], 20, -1926607734), o, r, t[a + 5], 4, -378558),
                    r = g(r, n, i, o, t[a + 8], 11, -2022574463),
                    o = g(o, r, n, i, t[a + 11], 16, 1839030562),
                    i = g(i, o, r, n, t[a + 14], 23, -35309556),
                    n = g(n, i, o, r, t[a + 1], 4, -1530992060),
                    r = g(r, n, i, o, t[a + 4], 11, 1272893353),
                    o = g(o, r, n, i, t[a + 7], 16, -155497632),
                    i = g(i, o, r, n, t[a + 10], 23, -1094730640),
                    n = g(n, i, o, r, t[a + 13], 4, 681279174),
                    r = g(r, n, i, o, t[a + 0], 11, -358537222),
                    o = g(o, r, n, i, t[a + 3], 16, -722521979),
                    i = g(i, o, r, n, t[a + 6], 23, 76029189),
                    n = g(n, i, o, r, t[a + 9], 4, -640364487),
                    r = g(r, n, i, o, t[a + 12], 11, -421815835),
                    o = g(o, r, n, i, t[a + 15], 16, 530742520),
                    n = m(n, i = g(i, o, r, n, t[a + 2], 23, -995338651), o, r, t[a + 0], 6, -198630844),
                    r = m(r, n, i, o, t[a + 7], 10, 1126891415),
                    o = m(o, r, n, i, t[a + 14], 15, -1416354905),
                    i = m(i, o, r, n, t[a + 5], 21, -57434055),
                    n = m(n, i, o, r, t[a + 12], 6, 1700485571),
                    r = m(r, n, i, o, t[a + 3], 10, -1894986606),
                    o = m(o, r, n, i, t[a + 10], 15, -1051523),
                    i = m(i, o, r, n, t[a + 1], 21, -2054922799),
                    n = m(n, i, o, r, t[a + 8], 6, 1873313359),
                    r = m(r, n, i, o, t[a + 15], 10, -30611744),
                    o = m(o, r, n, i, t[a + 6], 15, -1560198380),
                    i = m(i, o, r, n, t[a + 13], 21, 1309151649),
                    n = m(n, i, o, r, t[a + 4], 6, -145523070),
                    r = m(r, n, i, o, t[a + 11], 10, -1120210379),
                    o = m(o, r, n, i, t[a + 2], 15, 718787259),
                    i = m(i, o, r, n, t[a + 9], 21, -343485551),
                    n = _(n, l),
                    i = _(i, s),
                    o = _(o, u),
                    r = _(r, c)
            }
            return 16 == d ? Array(i, o) : Array(n, i, o, r)
        }
        function f(t, e, n, i, o, r) {
            return _((r = _(_(e, t), _(i, r))) << (o = o) | r >>> 32 - o, n)
        }
        function p(t, e, n, i, o, r, a) {
            return f(e & n | ~e & i, t, e, o, r, a)
        }
        function h(t, e, n, i, o, r, a) {
            return f(e & i | n & ~i, t, e, o, r, a)
        }
        function g(t, e, n, i, o, r, a) {
            return f(e ^ n ^ i, t, e, o, r, a)
        }
        function m(t, e, n, i, o, r, a) {
            return f(n ^ (e | ~i), t, e, o, r, a)
        }
        function _(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
        }
        function y(t) {
            for (var e = Array(), n = (1 << r) - 1, i = 0; i < t.length * r; i += r)
                e[i >> 5] |= (t.charCodeAt(i / r) & n) << i % 32;
            return e
        }
        function v(t) {
            for (var e = o ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < 4 * t.length; i++)
                n += e.charAt(t[i >> 2] >> i % 4 * 8 + 4 & 15) + e.charAt(t[i >> 2] >> i % 4 * 8 & 15);
            return n
        }
        function w(t) {
            for (var e = [], n = 0; n < t.length; n += 2)
                e.push(String.fromCharCode(parseInt(t.substr(n, 2), 16)));
            return e.join("")
        }
        e["default"] = n
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var i = function () {
            function o() {
                this.n = null,
                    this.e = 0,
                    this.d = null,
                    this.p = null,
                    this.q = null,
                    this.dmp1 = null,
                    this.dmq1 = null,
                    this.coeff = null
            }
            var t;
            o.prototype.doPublic = function (t) {
                return t.modPowInt(this.e, this.n)
            }
                ,
                o.prototype.setPublic = function (t, e) {
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = new _(t, 16),
                        this.e = parseInt(e, 16)) : uv_alert("Invalid RSA public key")
                }
                ,
                o.prototype.encrypt = function (t) {
                    return null == (t = function (t, e) {
                        if (e < t.length + 11)
                            return uv_alert("Message too long for RSA"),
                                null;
                        for (var n = new Array, i = t.length - 1; 0 <= i && 0 < e;) {
                            var o = t.charCodeAt(i--);
                            n[--e] = o
                        }
                        n[--e] = 0;
                        for (var r = new w, a = new Array; 2 < e;) {
                            for (a[0] = 0; 0 == a[0];)
                                r.nextBytes(a);
                            n[--e] = a[0]
                        }
                        return n[--e] = 2,
                            n[--e] = 0,
                            new _(n)
                    }(t, this.n.bitLength() + 7 >> 3)) || null == (t = this.doPublic(t)) ? null : 0 == (1 & (t = t.toString(16)).length) ? t : "0" + t
                }
                ;
            function _(t, e, n) {
                null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
            }
            function y() {
                return new _(null)
            }
            t = "Microsoft Internet Explorer" == navigator.appName ? (_.prototype.am = function (t, e, n, i, o, r) {
                for (var a = 32767 & e, l = e >> 15; 0 <= --r;) {
                    var s = 32767 & this[t]
                        , u = this[t++] >> 15
                        , c = l * s + u * a;
                    o = ((s = a * s + ((32767 & c) << 15) + n[i] + (1073741823 & o)) >>> 30) + (c >>> 15) + l * u + (o >>> 30),
                        n[i++] = 1073741823 & s
                }
                return o
            }
                ,
                30) : "Netscape" != navigator.appName ? (_.prototype.am = function (t, e, n, i, o, r) {
                    for (; 0 <= --r;) {
                        var a = e * this[t++] + n[i] + o;
                        o = Math.floor(a / 67108864),
                            n[i++] = 67108863 & a
                    }
                    return o
                }
                    ,
                    26) : (_.prototype.am = function (t, e, n, i, o, r) {
                        for (var a = 16383 & e, l = e >> 14; 0 <= --r;) {
                            var s = 16383 & this[t]
                                , u = this[t++] >> 14
                                , c = l * s + u * a;
                            o = ((s = a * s + ((16383 & c) << 14) + n[i] + o) >> 28) + (c >> 14) + l * u,
                                n[i++] = 268435455 & s
                        }
                        return o
                    }
                        ,
                        28),
                _.prototype.DB = t,
                _.prototype.DM = (1 << t) - 1,
                _.prototype.DV = 1 << t;
            _.prototype.FV = Math.pow(2, 52),
                _.prototype.F1 = 52 - t,
                _.prototype.F2 = 2 * t - 52;
            for (var e, n = "0123456789abcdefghijklmnopqrstuvwxyz", l = new Array, i = "0".charCodeAt(0), r = 0; r <= 9; ++r)
                l[i++] = r;
            for (i = "a".charCodeAt(0),
                r = 10; r < 36; ++r)
                l[i++] = r;
            for (i = "A".charCodeAt(0),
                r = 10; r < 36; ++r)
                l[i++] = r;
            function s(t) {
                return n.charAt(t)
            }
            function a(t) {
                var e = y();
                return e.fromInt(t),
                    e
            }
            function v(t) {
                var e, n = 1;
                return 0 != (e = t >>> 16) && (t = e,
                    n += 16),
                    0 != (e = t >> 8) && (t = e,
                        n += 8),
                    0 != (e = t >> 4) && (t = e,
                        n += 4),
                    0 != (e = t >> 2) && (t = e,
                        n += 2),
                    0 != (e = t >> 1) && (t = e,
                        n += 1),
                    n
            }
            function u(t) {
                this.m = t
            }
            function c(t) {
                this.m = t,
                    this.mp = t.invDigit(),
                    this.mpl = 32767 & this.mp,
                    this.mph = this.mp >> 15,
                    this.um = (1 << t.DB - 15) - 1,
                    this.mt2 = 2 * t.t
            }
            function d() {
                var t;
                t = (new Date).getTime(),
                    f[p++] ^= 255 & t,
                    f[p++] ^= t >> 8 & 255,
                    f[p++] ^= t >> 16 & 255,
                    f[p++] ^= t >> 24 & 255,
                    k <= p && (p -= k)
            }
            if (u.prototype.convert = function (t) {
                return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
            }
                ,
                u.prototype.revert = function (t) {
                    return t
                }
                ,
                u.prototype.reduce = function (t) {
                    t.divRemTo(this.m, null, t)
                }
                ,
                u.prototype.mulTo = function (t, e, n) {
                    t.multiplyTo(e, n),
                        this.reduce(n)
                }
                ,
                u.prototype.sqrTo = function (t, e) {
                    t.squareTo(e),
                        this.reduce(e)
                }
                ,
                c.prototype.convert = function (t) {
                    var e = y();
                    return t.abs().dlShiftTo(this.m.t, e),
                        e.divRemTo(this.m, null, e),
                        t.s < 0 && 0 < e.compareTo(_.ZERO) && this.m.subTo(e, e),
                        e
                }
                ,
                c.prototype.revert = function (t) {
                    var e = y();
                    return t.copyTo(e),
                        this.reduce(e),
                        e
                }
                ,
                c.prototype.reduce = function (t) {
                    for (; t.t <= this.mt2;)
                        t[t.t++] = 0;
                    for (var e = 0; e < this.m.t; ++e) {
                        var n = 32767 & t[e]
                            , i = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                        for (t[n = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[n] >= t.DV;)
                            t[n] -= t.DV,
                                t[++n]++
                    }
                    t.clamp(),
                        t.drShiftTo(this.m.t, t),
                        0 <= t.compareTo(this.m) && t.subTo(this.m, t)
                }
                ,
                c.prototype.mulTo = function (t, e, n) {
                    t.multiplyTo(e, n),
                        this.reduce(n)
                }
                ,
                c.prototype.sqrTo = function (t, e) {
                    t.squareTo(e),
                        this.reduce(e)
                }
                ,
                _.prototype.copyTo = function (t) {
                    for (var e = this.t - 1; 0 <= e; --e)
                        t[e] = this[e];
                    t.t = this.t,
                        t.s = this.s
                }
                ,
                _.prototype.fromInt = function (t) {
                    this.t = 1,
                        this.s = t < 0 ? -1 : 0,
                        0 < t ? this[0] = t : t < -1 ? this[0] = t + DV : this.t = 0
                }
                ,
                _.prototype.fromString = function (t, e) {
                    var n;
                    if (16 == e)
                        n = 4;
                    else if (8 == e)
                        n = 3;
                    else if (256 == e)
                        n = 8;
                    else if (2 == e)
                        n = 1;
                    else if (32 == e)
                        n = 5;
                    else {
                        if (4 != e)
                            return void this.fromRadix(t, e);
                        n = 2
                    }
                    this.t = 0,
                        this.s = 0;
                    for (var i = t.length, o = !1, r = 0; 0 <= --i;) {
                        var a = 8 == n ? 255 & t[i] : (a = i,
                            null == (a = l[t.charCodeAt(a)]) ? -1 : a);
                        a < 0 ? "-" == t.charAt(i) && (o = !0) : (o = !1,
                            0 == r ? this[this.t++] = a : r + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - r) - 1) << r,
                                this[this.t++] = a >> this.DB - r) : this[this.t - 1] |= a << r,
                            (r += n) >= this.DB && (r -= this.DB))
                    }
                    8 == n && 0 != (128 & t[0]) && (this.s = -1,
                        0 < r && (this[this.t - 1] |= (1 << this.DB - r) - 1 << r)),
                        this.clamp(),
                        o && _.ZERO.subTo(this, this)
                }
                ,
                _.prototype.clamp = function () {
                    for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;)
                        --this.t
                }
                ,
                _.prototype.dlShiftTo = function (t, e) {
                    for (var n = this.t - 1; 0 <= n; --n)
                        e[n + t] = this[n];
                    for (n = t - 1; 0 <= n; --n)
                        e[n] = 0;
                    e.t = this.t + t,
                        e.s = this.s
                }
                ,
                _.prototype.drShiftTo = function (t, e) {
                    for (var n = t; n < this.t; ++n)
                        e[n - t] = this[n];
                    e.t = Math.max(this.t - t, 0),
                        e.s = this.s
                }
                ,
                _.prototype.lShiftTo = function (t, e) {
                    for (var n = t % this.DB, i = this.DB - n, o = (1 << i) - 1, r = Math.floor(t / this.DB), a = this.s << n & this.DM, l = this.t - 1; 0 <= l; --l)
                        e[l + r + 1] = this[l] >> i | a,
                            a = (this[l] & o) << n;
                    for (l = r - 1; 0 <= l; --l)
                        e[l] = 0;
                    e[r] = a,
                        e.t = this.t + r + 1,
                        e.s = this.s,
                        e.clamp()
                }
                ,
                _.prototype.rShiftTo = function (t, e) {
                    e.s = this.s;
                    var n = Math.floor(t / this.DB);
                    if (n >= this.t)
                        e.t = 0;
                    else {
                        var i = t % this.DB
                            , o = this.DB - i
                            , r = (1 << i) - 1;
                        e[0] = this[n] >> i;
                        for (var a = n + 1; a < this.t; ++a)
                            e[a - n - 1] |= (this[a] & r) << o,
                                e[a - n] = this[a] >> i;
                        0 < i && (e[this.t - n - 1] |= (this.s & r) << o),
                            e.t = this.t - n,
                            e.clamp()
                    }
                }
                ,
                _.prototype.subTo = function (t, e) {
                    for (var n = 0, i = 0, o = Math.min(t.t, this.t); n < o;)
                        i += this[n] - t[n],
                            e[n++] = i & this.DM,
                            i >>= this.DB;
                    if (t.t < this.t) {
                        for (i -= t.s; n < this.t;)
                            i += this[n],
                                e[n++] = i & this.DM,
                                i >>= this.DB;
                        i += this.s
                    } else {
                        for (i += this.s; n < t.t;)
                            i -= t[n],
                                e[n++] = i & this.DM,
                                i >>= this.DB;
                        i -= t.s
                    }
                    e.s = i < 0 ? -1 : 0,
                        i < -1 ? e[n++] = this.DV + i : 0 < i && (e[n++] = i),
                        e.t = n,
                        e.clamp()
                }
                ,
                _.prototype.multiplyTo = function (t, e) {
                    var n = this.abs()
                        , i = t.abs()
                        , o = n.t;
                    for (e.t = o + i.t; 0 <= --o;)
                        e[o] = 0;
                    for (o = 0; o < i.t; ++o)
                        e[o + n.t] = n.am(0, i[o], e, o, 0, n.t);
                    e.s = 0,
                        e.clamp(),
                        this.s != t.s && _.ZERO.subTo(e, e)
                }
                ,
                _.prototype.squareTo = function (t) {
                    for (var e = this.abs(), n = t.t = 2 * e.t; 0 <= --n;)
                        t[n] = 0;
                    for (n = 0; n < e.t - 1; ++n) {
                        var i = e.am(n, e[n], t, 2 * n, 0, 1);
                        (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, i, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                            t[n + e.t + 1] = 1)
                    }
                    0 < t.t && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                        t.s = 0,
                        t.clamp()
                }
                ,
                _.prototype.divRemTo = function (t, e, n) {
                    var i = t.abs();
                    if (!(i.t <= 0)) {
                        var o = this.abs();
                        if (o.t < i.t)
                            return null != e && e.fromInt(0),
                                void (null != n && this.copyTo(n));
                        null == n && (n = y());
                        var r = y()
                            , a = this.s
                            , l = t.s
                            , t = this.DB - v(i[i.t - 1]);
                        0 < t ? (i.lShiftTo(t, r),
                            o.lShiftTo(t, n)) : (i.copyTo(r),
                                o.copyTo(n));
                        var s = r.t
                            , u = r[s - 1];
                        if (0 != u) {
                            var o = u * (1 << this.F1) + (1 < s ? r[s - 2] >> this.F2 : 0)
                                , c = this.FV / o
                                , d = (1 << this.F1) / o
                                , f = 1 << this.F2
                                , p = n.t
                                , h = p - s
                                , g = null == e ? y() : e;
                            for (r.dlShiftTo(h, g),
                                0 <= n.compareTo(g) && (n[n.t++] = 1,
                                    n.subTo(g, n)),
                                _.ONE.dlShiftTo(s, g),
                                g.subTo(r, r); r.t < s;)
                                r[r.t++] = 0;
                            for (; 0 <= --h;) {
                                var m = n[--p] == u ? this.DM : Math.floor(n[p] * c + (n[p - 1] + f) * d);
                                if ((n[p] += r.am(0, m, n, h, 0, s)) < m)
                                    for (r.dlShiftTo(h, g),
                                        n.subTo(g, n); n[p] < --m;)
                                        n.subTo(g, n)
                            }
                            null != e && (n.drShiftTo(s, e),
                                a != l && _.ZERO.subTo(e, e)),
                                n.t = s,
                                n.clamp(),
                                0 < t && n.rShiftTo(t, n),
                                a < 0 && _.ZERO.subTo(n, n)
                        }
                    }
                }
                ,
                _.prototype.invDigit = function () {
                    if (this.t < 1)
                        return 0;
                    var t = this[0];
                    if (0 == (1 & t))
                        return 0;
                    var e = 3 & t;
                    return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
                }
                ,
                _.prototype.isEven = function () {
                    return 0 == (0 < this.t ? 1 & this[0] : this.s)
                }
                ,
                _.prototype.exp = function (t, e) {
                    if (4294967295 < t || t < 1)
                        return _.ONE;
                    var n, i = y(), o = y(), r = e.convert(this), a = v(t) - 1;
                    for (r.copyTo(i); 0 <= --a;)
                        e.sqrTo(i, o),
                            0 < (t & 1 << a) ? e.mulTo(o, r, i) : (n = i,
                                i = o,
                                o = n);
                    return e.revert(i)
                }
                ,
                _.prototype.toString = function (t) {
                    if (this.s < 0)
                        return "-" + this.negate().toString(t);
                    var e;
                    if (16 == t)
                        e = 4;
                    else if (8 == t)
                        e = 3;
                    else if (2 == t)
                        e = 1;
                    else if (32 == t)
                        e = 5;
                    else {
                        if (4 != t)
                            return this.toRadix(t);
                        e = 2
                    }
                    var n, i = (1 << e) - 1, o = !1, r = "", a = this.t, l = this.DB - a * this.DB % e;
                    if (0 < a--)
                        for (l < this.DB && 0 < (n = this[a] >> l) && (o = !0,
                            r = s(n)); 0 <= a;)
                            l < e ? (n = (this[a] & (1 << l) - 1) << e - l,
                                n |= this[--a] >> (l += this.DB - e)) : (n = this[a] >> (l -= e) & i,
                                    l <= 0 && (l += this.DB,
                                        --a)),
                                0 < n && (o = !0),
                                o && (r += s(n));
                    return o ? r : "0"
                }
                ,
                _.prototype.negate = function () {
                    var t = y();
                    return _.ZERO.subTo(this, t),
                        t
                }
                ,
                _.prototype.abs = function () {
                    return this.s < 0 ? this.negate() : this
                }
                ,
                _.prototype.compareTo = function (t) {
                    var e = this.s - t.s;
                    if (0 != e)
                        return e;
                    var n = this.t;
                    if (0 != (e = n - t.t))
                        return e;
                    for (; 0 <= --n;)
                        if (0 != (e = this[n] - t[n]))
                            return e;
                    return 0
                }
                ,
                _.prototype.bitLength = function () {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + v(this[this.t - 1] ^ this.s & this.DM)
                }
                ,
                _.prototype.mod = function (t) {
                    var e = y();
                    return this.abs().divRemTo(t, null, e),
                        this.s < 0 && 0 < e.compareTo(_.ZERO) && t.subTo(e, e),
                        e
                }
                ,
                _.prototype.modPowInt = function (t, e) {
                    return e = new (t < 256 || e.isEven() ? u : c)(e),
                        this.exp(t, e)
                }
                ,
                _.ZERO = a(0),
                _.ONE = a(1),
                null == f) {
                var f = new Array
                    , p = 0;
                if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto && window.crypto.random)
                    for (var h = window.crypto.random(32), g = 0; g < h.length; ++g)
                        f[p++] = 255 & h.charCodeAt(g);
                for (; p < k;)
                    g = Math.floor(65536 * Math.random()),
                        f[p++] = g >>> 8,
                        f[p++] = 255 & g;
                p = 0,
                    d()
            }
            function m() {
                if (null == e) {
                    for (d(),
                        (e = new b).init(f),
                        p = 0; p < f.length; ++p)
                        f[p] = 0;
                    p = 0
                }
                return e.next()
            }
            function w() { }
            function b() {
                this.i = 0,
                    this.j = 0,
                    this.S = new Array
            }
            w.prototype.nextBytes = function (t) {
                for (var e = 0; e < t.length; ++e)
                    t[e] = m()
            }
                ,
                b.prototype.init = function (t) {
                    for (var e, n, i = 0; i < 256; ++i)
                        this.S[i] = i;
                    for (i = e = 0; i < 256; ++i)
                        e = e + this.S[i] + t[i % t.length] & 255,
                            n = this.S[i],
                            this.S[i] = this.S[e],
                            this.S[e] = n;
                    this.i = 0,
                        this.j = 0
                }
                ,
                b.prototype.next = function () {
                    var t;
                    return this.i = this.i + 1 & 255,
                        this.j = this.j + this.S[this.i] & 255,
                        t = this.S[this.i],
                        this.S[this.i] = this.S[this.j],
                        this.S[this.j] = t,
                        this.S[t + this.S[this.i] & 255]
                }
                ;
            var k = 256;
            return {
                "rsa_encrypt": function (t, e, n) {
                    var i = new o;
                    return i.setPublic("e9a815ab9d6e86abbf33a4ac64e9196d5be44a09bd0ed6ae052914e1a865ac8331fed863de8ea697e9a7f63329e5e23cda09c72570f46775b7e39ea9670086f847d3c9c51963b131409b1e04265d9747419c635404ca651bbcbc87f99b8008f7f5824653e3658be4ba73e4480156b390bb73bc1f8b33578e7a4e12440e9396f2552c1aff1c92e797ebacdc37c109ab7bce2367a19c56a033ee04534723cc2558cb27368f5b9d32c04d12dbd86bbd68b1d99b7c349a8453ea75d1b2e94491ab30acf6c46a36a75b721b312bedf4e7aad21e54e9bcbcf8144c79b6e3c05eb4a1547750d224c0085d80e6da3907c3d945051c13c7c1dcefd6520ee8379c4f5231ed", "10001"),
                        i.encrypt(t)
                }
            }
        }();
        e["default"] = i
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var i, r = (i = n(5)) && i.__esModule ? i : {
            "default": i
        };
        var u = ""
            , a = 0
            , o = []
            , l = []
            , s = 0
            , c = 0
            , d = []
            , f = []
            , p = !0;
        function h() {
            return Math.round(4294967295 * Math.random())
        }
        function g(t, e, n) {
            (!n || 4 < n) && (n = 4);
            for (var i = 0, o = e; o < e + n; o++)
                i <<= 8,
                    i |= t[o];
            return (4294967295 & i) >>> 0
        }
        function m(t, e, n) {
            t[e + 3] = n >> 0 & 255,
                t[e + 2] = n >> 8 & 255,
                t[e + 1] = n >> 16 & 255,
                t[e + 0] = n >> 24 & 255
        }
        function _(t) {
            if (!t)
                return "";
            for (var e = "", n = 0; n < t.length; n++) {
                var i = Number(t[n]).toString(16);
                1 == i.length && (i = "0" + i),
                    e += i
            }
            return e
        }
        function y(t) {
            o = new Array(8),
                l = new Array(8),
                s = c = 0,
                p = !0,
                a = 0;
            var e = t.length
                , n = 0;
            0 != (a = (e + 10) % 8) && (a = 8 - a),
                d = new Array(e + a + 10),
                o[0] = 255 & (248 & h() | a);
            for (var i = 1; i <= a; i++)
                o[i] = 255 & h();
            a++;
            for (i = 0; i < 8; i++)
                l[i] = 0;
            for (n = 1; n <= 2;)
                a < 8 && (o[a++] = 255 & h(),
                    n++),
                    8 == a && v();
            for (i = 0; 0 < e;)
                a < 8 && (o[a++] = t[i++],
                    e--),
                    8 == a && v();
            for (n = 1; n <= 7;)
                a < 8 && (o[a++] = 0,
                    n++),
                    8 == a && v();
            return d
        }
        function v() {
            for (var t = 0; t < 8; t++)
                o[t] ^= p ? l[t] : d[c + t];
            for (var e = function (t) {
                var e = 16
                    , n = g(t, 0, 4)
                    , i = g(t, 4, 4)
                    , o = g(u, 0, 4)
                    , r = g(u, 4, 4)
                    , a = g(u, 8, 4)
                    , l = g(u, 12, 4)
                    , s = 0;
                for (; 0 < e--;)
                    i = (4294967295 & (i += ((n = (4294967295 & (n += (i << 4) + o ^ i + (s = (4294967295 & (s += 2654435769)) >>> 0) ^ (i >>> 5) + r)) >>> 0) << 4) + a ^ n + s ^ (n >>> 5) + l)) >>> 0;
                t = new Array(8);
                return m(t, 0, n),
                    m(t, 4, i),
                    t
            }(o), t = 0; t < 8; t++)
                d[s + t] = e[t] ^ l[t],
                    l[t] = o[t];
            c = s,
                s += 8,
                a = 0,
                p = !1
        }
        function w(t) {
            for (var e = 16, n = g(t, 0, 4), i = g(t, 4, 4), o = g(u, 0, 4), r = g(u, 4, 4), a = g(u, 8, 4), l = g(u, 12, 4), s = 3816266640; 0 < e--;)
                n = (4294967295 & (n -= ((i = (4294967295 & (i -= (n << 4) + a ^ n + s ^ (n >>> 5) + l)) >>> 0) << 4) + o ^ i + s ^ (i >>> 5) + r)) >>> 0,
                    s = (4294967295 & (s -= 2654435769)) >>> 0;
            t = new Array(8);
            return m(t, 0, n),
                m(t, 4, i),
                t
        }
        function b() {
            f.length;
            for (var t = 0; t < 8; t++)
                l[t] ^= f[s + t];
            return l = w(l),
                s += 8,
                a = 0,
                1
        }
        function k(t, e) {
            var n = [];
            if (e)
                for (var i = 0; i < t.length; i++)
                    n[i] = 255 & t.charCodeAt(i);
            else
                for (var o = 0, i = 0; i < t.length; i += 2)
                    n[o++] = parseInt(t.substr(i, 2), 16);
            return n
        }
        var S = {
            "encrypt": function (t, e) {
                return _(y(k(t, e)))
            },
            "enAsBase64": function (t, e) {
                for (var n = y(k(t, e)), i = "", o = 0; o < n.length; o++)
                    i += String.fromCharCode(n[o]);
                return r["default"].encode(i)
            },
            "decrypt": function (t) {
                return _(function (t) {
                    var e = 0
                        , n = new Array(8)
                        , i = t.length;
                    if (f = t,
                        i % 8 != 0 || i < 16)
                        return null;
                    if (l = w(t),
                        (e = i - (a = 7 & l[0]) - 10) < 0)
                        return null;
                    for (var o = 0; o < n.length; o++)
                        n[o] = 0;
                    d = new Array(e),
                        c = 0,
                        s = 8,
                        a++;
                    for (var r = 1; r <= 2;)
                        if (a < 8 && (a++,
                            r++),
                            8 == a && (n = t,
                                !b()))
                            return null;
                    for (o = 0; 0 != e;)
                        if (a < 8 && (d[o] = 255 & (n[c + a] ^ l[a]),
                            o++,
                            e--,
                            a++),
                            8 == a && (n = t,
                                c = s - 8,
                                !b()))
                            return null;
                    for (r = 1; r < 8; r++) {
                        if (a < 8) {
                            if (0 != (n[c + a] ^ l[a]))
                                return null;
                            a++
                        }
                        if (8 == a && (n = t,
                            c = s,
                            !b()))
                            return null
                    }
                    return d
                }(k(t, !1)))
            },
            "initkey": function (t, e) {
                u = k(t, e)
            },
            "bytesToStr": function (t) {
                for (var e = "", n = 0; n < t.length; n += 2)
                    e += String.fromCharCode(parseInt(t.substr(n, 2), 16));
                return e
            },
            "strToBytes": function (t, e) {
                if (!t)
                    return "";
                e && (t = function (t) {
                    var e, n, i = [], o = t.length;
                    for (e = 0; e < o; e++)
                        0 < (n = t.charCodeAt(e)) && n <= 127 ? i.push(t.charAt(e)) : 128 <= n && n <= 2047 ? i.push(String.fromCharCode(192 | n >> 6 & 31), String.fromCharCode(128 | 63 & n)) : 2048 <= n && n <= 65535 && i.push(String.fromCharCode(224 | n >> 12 & 15), String.fromCharCode(128 | n >> 6 & 63), String.fromCharCode(128 | 63 & n));
                    return i.join("")
                }(t));
                for (var n = [], i = 0; i < t.length; i++)
                    n[i] = t.charCodeAt(i);
                return _(n)
            },
            "bytesInStr": _,
            "dataFromStr": k
        };
        e["default"] = S
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
      e["default"] = void 0;
      var q = {
            "LoginState": {
                "PLogin": 1,
                "QLogin": 2,
                "OneKeyLogin": 3
            }
        }
        var p = "newVcodeIframe"
            , h = "newVcodeArea"
            , C = window.pt
            , T = {
                "toggleManager": null,
                "smsCheck": "",
                "needSms": !1,
                "hasVCSuccess": !1,
                "account": "",
                "at_account": "",
                "uin": "",
                "salt": "",
                "checkState": !1,
                "lastCheckAccount": "",
                "needVc": !1,
                "vcFlag": !1,
                "ckNum": {},
                "action": [0, 0],
                "passwordErrorNum": 1,
                "isIpad": !1,
                "seller_id": 703010802,
                "checkUrl": "",
                "loginUrl": "",
                "verifycodeUrl": "",
                "huatuosdk": "https://i.gtimg.cn/huatuo/sdk/huatuoping-sdk.min-0.1.js",
                "needShowNewVc": !1,
                "pt_verifysession": "",
                "checkClock": 0,
                "isCheckTimeout": !1,
                "cntCheckTimeout": 0,
                "qrloginGetTime": 0,
                "qrloginRefreshInterval": 2e3,
                "checkTime": 0,
                "submitTime": 0,
                "defaultTimeoutTime": 5e3,
                "errclock": 0,
                "loginClock": 0,
                "login_param": C.ptui.href.substring(C.ptui.href.indexOf("?") + 1),
                "login_param": 0,
                "err_m": (0,
                    k["default"])("err_m"),
                "low_login_enable": !0,
                "low_login_hour": 720,
                "low_login_isshow": !1,
                "list_index": [-1, 2],
                "keyCode": {
                    "UP": 38,
                    "DOWN": 40,
                    "LEFT": 37,
                    "RIGHT": 39,
                    "ENTER": 13,
                    "TAB": 9,
                    "BACK": 8,
                    "DEL": 46,
                    "F5": 116
                },
                "knownEmail": 25 == C.ptui.style ? ["qq.com", "vip.qq.com", "foxmail.com"] : ["qq.com", "foxmail.com", "gmail.com", "hotmail.com", "yahoo.com", "sina.com", "163.com", "126.com", "vip.qq.com", "vip.sina.com", "sina.cn", "sohu.com", "yahoo.cn", "yahoo.com.cn", "139.com", "wo.com.cn", "189.cn", "live.com", "msn.com", "live.hk", "live.cn", "hotmail.com.cn", "hinet.net", "msa.hinet.net", "cm1.hinet.net", "umail.hinet.net", "xuite.net", "yam.com", "pchome.com.tw", "netvigator.com", "seed.net.tw", "anet.net.tw"],
                "qrlogin_clock": 0,
                "qrlogin_timeout": 0,
                "qrlogin_timeout_time": 6e5,
                "qrlogin_invalid": !1,
                "isQrLogin": !1,
                "qr_uin": "",
                "qr_nick": "",
                "onekey_verify_timeout": 36e5,
                "onekeyVerifyClock": 0,
                "dftImg": "",
                "need_hide_operate_tips": !0,
                "js_type": 1,
                "xuiState": 1,
                "delayTime": 5e3,
                "delayMonitorId": "294059",
                "hasSubmit": !1,
                "isdTime": {},
                "authUin": "",
                "authSubmitUrl": "",
                "loginState": q.LoginState.PLogin,
                "aqScanLink": function () {
                    var t;
                    switch (C.ptui.lang) {
                        case "2052":
                            t = "立刻扫描";
                            break;
                        case "1028":
                            t = "立即掃描";
                            break;
                        case "1033":
                            t = "Scan now"
                    }
                    return "<a href='javascript:void(0)'; onclick='pt.plogin.switch_qrlogin()'>".concat(t, "</a>")
                }(),
                "isNewQr": !1,
                "hasNoQlogin": !1,
                "checkRet": -1,
                "cap_cd": 0,
                "authTimes": 0,
                "checkErr": {
                    "2052": "网络繁忙，请稍后重试。",
                    "1028": "網絡繁忙，請稍後重試。",
                    "1033": "The network is busy, please try again later."
                },
                "isTenpay": 34 == C.ptui.style,
                "isMailLogin": 25 == C.ptui.style || 30 == C.ptui.style,
                "captcha": null,
                "isPwdFirst": function () {
                    if (C.ptui.lockuin)
                        return !0;
                    if ("0" == k["default"].bom.query("pt_pwd"))
                        return !1;
                    var t = [/\bqcloud\.com$/, /\bcloud\.tencent\.com$/, /\b110\.qq\.com$/, /\baq\.qq\.com$/, /\breg\.t\.qq\.com$/, /\bb\.qq\.com$/, /\bmail\.qq\.com$/, /\bqmail\.com$/]
                        , e = (0,
                            i["default"])(document.referrer);
                    for (n in t)
                        if (t[n] && t[n].test && t[n].test(e.hostname))
                            return !0;
                    if ("1" == k["default"].bom.query("pt_pwd"))
                        for (var n in t = [/\bjiazhang.qq.com$/, /\bqidian.qq.com$/])
                            if (t[n] && t[n].test && t[n].test(e.hostname))
                                return !0;
                    return !1
                },
                "isQcloud": function () {
                    return !!(0,
                        i["default"])(document.referrer).hostname.match(/\b(qcloud\.com|cloud\.tencent\.com)$/)
                },
                "isNewStyle": 40 <= C.ptui.style,
                "isTim": 41 == C.ptui.style,
                "switchpageCount": 0,
                "isUIStyle": C.ptui.fromStyle,
                "domFocus": function (t) {
                    try {
                        window.setTimeout(function () {
                            t.focus()
                        }, 0)
                    } catch (e) { }
                },
                "formFocus": function () {
                    var t = document.loginform;
                    try {
                        var e = t.u
                            , n = t.p
                            , i = t.verifycode;
                        if ("" == e.value)
                            return void e.focus();
                        if ("" == n.value)
                            return void n.focus();
                        "" == i.value && i.focus()
                    } catch (o) { }
                },
                "getAuthUrl": function () {
                    var t = (C.ptui.isHttps ? "https://ssl." : "http://") + "ptlogin2." + C.ptui.domain + "/pt4_auth?daid=" + C.ptui.daid + "&appid=" + C.ptui.appid + "&auth_token=" + k["default"].str.time33(k["default"].cookie.get("supertoken"))
                        , e = C.ptui.s_url;
                    return /^https/.test(e) && (t += "&pt4_shttps=1"),
                        "1" == C.ptui.pt_qzone_sig && (t += "&pt_qzone_sig=1"),
                        t
                },
                "auth": function () {
                    T.authTimes = T.authTimes + 1,
                        C.ptui.isHttps = k["default"].check.isHttps();
                    var t = T.getAuthUrl()
                        , e = k["default"].cookie.get("superuin");
                    C.ptui.daid && "1" != C.ptui.noAuth && !T.isTim && "" != e && "" == C.ptui.regmaster && "0" == C.ptui.pt_3rd_aid && k["default"].http.loadScript(t)
                },
                "initAuthInfo": function (t) {
                    var e = k["default"].cookie.get("uin").replace(/^o0*/, "")
                        , n = k["default"].str.utf8ToUincode(k["default"].cookie.get("ptnick_" + e)) || e;
                    (0,
                        k["default"])("auth_uin").innerHTML = k["default"].str.encodeHtml(e),
                        (0,
                            k["default"])("auth_nick").innerHTML = k["default"].str.encodeHtml(n),
                        (0,
                            k["default"])("auth_area").setAttribute("authUrl", k["default"].str.encodeHtml(t)),
                        k["default"].http.loadScript((C.ptui.isHttps ? "https://ssl.ptlogin2." : "http://ptlogin2.") + C.ptui.domain + "/getface?appid=" + C.ptui.appid + "&imgtype=3&encrytype=0&devtype=0&keytpye=0&uin=" + e + "&r=" + Math.random())
                },
                "showAuth": function (t, e) {
                    2 == t && k["default"].css.hide((0,
                        k["default"])("cancleAuthOuter")),
                        T.initAuthInfo(e);
                    e = C.ptui.style;
                    22 != e && 23 != e || (k["default"].css.hide((0,
                        k["default"])("header")),
                        k["default"].css.hide((0,
                            k["default"])("authHeader"))),
                        (0,
                            k["default"])("authLogin").style.height = (0,
                                k["default"])("login").offsetHeight - (11 == e ? 2 : 4) + "px",
                        k["default"].css.show((0,
                            k["default"])("authLogin")),
                        T.ptui_notifySize("login")
                },
                "cancleAuth": function () {
                    var t = C.ptui.style;
                    22 != t && 23 != t || (k["default"].css.show((0,
                        k["default"])("header")),
                        k["default"].css.show((0,
                            k["default"])("authHeader"))),
                        k["default"].css.hide((0,
                            k["default"])("authLogin")),
                        T.ptui_notifySize("login")
                },
                "authLogin": function () {
                    l["default"].authLoginSubmit()
                },
                "authMouseDowm": function () {
                    var t = (0,
                        k["default"])("auth_mengban");
                    t && (t.className = "face_mengban")
                },
                "authMouseUp": function () {
                    var t = (0,
                        k["default"])("auth_mengban");
                    t && (t.className = "")
                },
                "onQloginSwitch": function (t) {
                    t.preventDefault(),
                        T.switchpage(q.LoginState.QLogin),
                        k["default"].report.monitor("331284", .05)
                },
                "switchpage": function (t, e) {
                    switch (S.logger.info("plogin.switchpage()", "flag=".concat(t, " force=").concat(e)),
                    T.switchpageCount = T.switchpageCount + 1,
                    T.loginState = t,
                    e || T.hide_err(),
                    t) {
                        case 1:
                            T.hideQrTips(),
                                k["default"].css.hide((0,
                                    k["default"])("bottom_qlogin")),
                                k["default"].css.hide((0,
                                    k["default"])("qlogin")),
                                k["default"].css.show((0,
                                    k["default"])("web_qr_login")),
                                (0,
                                    k["default"])("qrswitch") && k["default"].css.show((0,
                                        k["default"])("qrswitch")),
                                T.isNewStyle || ((0,
                                    k["default"])("switcher_plogin").className = "switch_btn_focus",
                                    (0,
                                        k["default"])("switcher_qlogin").className = "switch_btn"),
                                "ff" != k["default"].browser("type") && window.setTimeout(function () {
                                    T.formFocus()
                                }, 0),
                                T.isNewQr && T.cancle_qrlogin(),
                                T.armSafeEdit && T.armSafeEdit.everSafe && (T.armSafeEdit.lockToggle(),
                                    T.armSafeEdit.everSafe = !1),
                                0 != T.onekeyVerifyClock && T.onekeyVerify("normal"),
                                T.hasCheck(!1);
                            break;
                        case 2:
                            k["default"].css.hide((0,
                                k["default"])("web_qr_login")),
                                k["default"].css.show((0,
                                    k["default"])("qlogin")),
                                T.isNewStyle || ((0,
                                    k["default"])("switcher_plogin").className = "switch_btn",
                                    (0,
                                        k["default"])("switcher_qlogin").className = "switch_btn_focus"),
                                (0,
                                    k["default"])("qrswitch") && k["default"].css.hide((0,
                                        k["default"])("qrswitch")),
                                k["default"].css.show((0,
                                    k["default"])("bottom_qlogin")),
                                l["default"].focusHeader(),
                                T.armSafeEdit.isSafe && (T.armSafeEdit.lockToggle(),
                                    T.armSafeEdit.everSafe = !0),
                                l["default"].buildQloginDom()
                    }
                    T.ptui_notifySize("login")
                },
                "detectCapsLock": function (t) {
                    var e = t.keyCode || t.which
                        , t = t.shiftKey || 16 == e || !1;
                    return !!(65 <= e && e <= 90 && !t || 97 <= e && e <= 122 && t)
                },
                "generateEmailTips": function (t) {
                    for (var e = t.indexOf("@"), n = "", n = -1 == e ? t : t.substring(0, e), i = [], o = 0, r = T.knownEmail.length; o < r; o++)
                        i.push(n + "@" + T.knownEmail[o]);
                    for (var a = [], l = 0, r = i.length; l < r; l++)
                        -1 < i[l].indexOf(t) && a.push(k["default"].str.encodeHtml(i[l]));
                    return 19 == C.ptui.style && (a = []),
                        a
                },
                "createEmailTips": function (t) {
                    var e, n = T.generateEmailTips(t), i = n.length, o = [];
                    if (0 == (i = Math.min(i, 4)))
                        return T.list_index[0] = -1,
                            void T.hideEmailTips();
                    for (var r = 0; r < i; r++) {
                        if (t == n[r])
                            return void T.hideEmailTips();
                        e = "emailTips_" + r,
                            0 == r ? o.push("<li id=" + e + " class='hover' >" + n[r] + "</li>") : o.push("<li id=" + e + ">" + n[r] + "</li>")
                    }
                    (0,
                        k["default"])("email_list").innerHTML = o.join(" "),
                        T.list_index[0] = 0
                },
                "showEmailTips": function () {
                    k["default"].css.show((0,
                        k["default"])("email_list")),
                        T.__isShowEmailTips = !0
                },
                "hideEmailTips": function () {
                    k["default"].css.hide((0,
                        k["default"])("email_list")),
                        T.__isShowEmailTips = !1
                },
                "setUrl": function () {
                    var t = C.ptui.domain
                        , e = k["default"].check.isHttps() && k["default"].check.isSsl();
                    T.checkUrl = (C.ptui.isHttps ? "https://ssl." : "http://check.") + "ptlogin2." + t + "/check",
                        T.loginUrl = (C.ptui.isHttps ? "https://ssl." : "http://") + "ptlogin2." + t + "/",
                        T.verifycodeUrl = (C.ptui.isHttps ? "https://ssl." : "http://") + "captcha." + t + "/getimage",
                        e && "qq.com" != t && "tenpay.com" != t && (T.verifycodeUrl = "https://ssl.ptlogin2." + t + "/ptgetimage"),
                        T.dftImg = C.ptui.isHttps ? "https://ui.ptlogin2.qq.com/style/0/images/1.gif" : "http://imgcache.qq.com/ptlogin/v4/style/0/images/1.gif"
                },
                "VCCallback": function (t) {
                    setTimeout(function () {
                        0 == t.ret ? T.vcodeMessage(t) : T.hideVC()
                    }, 0)
                },
                "init": function () {
                    T.toggleManager = new c.ToggleManager(window.g_aegisUid, window.navigator.userAgent),
                        C.ptui.login_sig = C.ptui.login_sig || k["default"].cookie.get("pt_login_sig"),
                        T.setLowloginCheckbox(),
                        T.isNewQr = !(25 != C.ptui.style && 32 != C.ptui.style && 33 != C.ptui.style && !T.isNewStyle && !T.isTenpay),
                        C.ptui.isHttps = k["default"].check.isHttps(),
                        T.setUrl(),
                        T.bindEvent(),
                        (0,
                            k["default"])("login_button") && ((0,
                                k["default"])("login_button").disabled = !1),
                        T.set_default_uin(C.ptui.defaultUin),
                        T.isTenpay && C.ptui.defaultUin && (C.ptui.lockuin = 1),
                        k["default"].check.is_weibo_appid(C.ptui.appid) && (0,
                            k["default"])("u") && ((0,
                                k["default"])("u").style.imeMode = "auto"),
                        C.ptui.isHttps && (T.delayTime = 7e3,
                            T.delayMonitorId = "294060"),
                        T.hideVipLink(),
                        "0" != C.ptui.pt_3rd_aid && l["default"].detectPCMgr(),
                        C.ptui.lockuin ? T.doLockuin() : (l["default"].fetchOnekeyList(),
                            l["default"].fetchQloginList()),
                        !(T.isTenpay && 1093 <= k["default"].sso_ver) || T.isWin8() && k["default"].suportActive() || T.armSafeEdit(),
                        l["default"].buildUnifiedQloginList(),
                        window.setTimeout(function () {
                            T.domLoad(),
                                S.logger.info("plogin.init()", "domLoaded, pt.ptui=".concat(k["default"].str.json2str(C.ptui, null, 4)))
                        }, 100)
                },
                "isWin8": function () {
                    var t = navigator.userAgent.toLowerCase();
                    return -1 < t.indexOf("windows nt 6.2") || -1 < t.indexOf("windows nt 6.3")
                },
                "aq_patch": function () {
                    Math.random() < .05 && !C.ptui.isHttps && k["default"].http.loadScript("http://mat1.gtimg.com/www/js/common_v2.js", function () {
                        if ("function" == typeof checkNonTxDomain)
                            try {
                                checkNonTxDomain(1, 5)
                            } catch (t) { }
                    })
                },
                "hideVipLink": function () {
                    var t = (0,
                        k["default"])("vip_link2")
                        , e = (0,
                            k["default"])("vip_dot");
                    !t || !e || k["default"].check.needVip(C.ptui.appid) && "2052" == C.ptui.lang || (k["default"].css.addClass(t, "hide"),
                        k["default"].css.addClass(e, "hide"))
                },
                "set_default_uin": function (t) {
                    "0" != t && (t || (t = k["default"].cookie.get("ptui_loginuin"),
                        k["default"].check.is_weibo_appid(C.ptui.appid) || !k["default"].check.isNick(t) && !k["default"].check.isName(t) || (t = 0 == (t = +k["default"].cookie.get("pt2gguin").replace(/^o/, "")) ? "" : t)),
                        ((0,
                            k["default"])("u").value = t) && (k["default"].css.hide((0,
                                k["default"])("uin_tips")),
                                (0,
                                    k["default"])("uin_del") && k["default"].css.show((0,
                                        k["default"])("uin_del")),
                                T.set_account()))
                },
                "doLockuin": function () {
                    T.switchpage(q.LoginState.PLogin, !0),
                        (0,
                            k["default"])("u").readOnly = !0,
                        (0,
                            k["default"])("qlogin_entry") && ((0,
                                k["default"])("qlogin_entry").style.display = "none");
                    var t = (0,
                        k["default"])("uinArea");
                    k["default"].css.hasClass(t, "default") || k["default"].css.addClass(t, "default");
                    t = (0,
                        k["default"])("uin_del");
                    t && t.parentNode.removeChild(t),
                        k["default"].e.remove((0,
                            k["default"])("switcher_qlogin"), "click", T.onQloginSwitch),
                        (0,
                            k["default"])("switcher_qlogin").className = "switch_btn_disabled",
                        (0,
                            k["default"])("p").focus()
                },
                "set_account": function () {
                    var t = k["default"].str.trim((0,
                        k["default"])("u").value)
                        , e = C.ptui.appid;
                    if (T.account = t,
                        T.at_account = t,
                        k["default"].check.isQiyeQQ800(t))
                        return T.at_account = "@" + t,
                            !0;
                    if (k["default"].check.is_weibo_appid(e)) {
                        if (k["default"].check.isQQ(t) || k["default"].check.isMail(t))
                            return !0;
                        if (k["default"].check.isNick(t) || k["default"].check.isName(t))
                            return T.at_account = "@" + t,
                                !0;
                        if (k["default"].check.isPhone(t))
                            return T.at_account = "@" + t.replace(/^(86|886)/, ""),
                                !0;
                        if (k["default"].check.isSeaPhone(t))
                            return T.at_account = "@00" + t.replace(/^(00)/, ""),
                                /^(@0088609)/.test(T.at_account) && (T.at_account = T.at_account.replace(/^(@0088609)/, "@008869")),
                                !0
                    } else {
                        if (k["default"].check.isQQ(t) || k["default"].check.isMail(t))
                            return !0;
                        if (k["default"].check.isPhone(t))
                            return T.at_account = "@" + t.replace(/^(86|886)/, ""),
                                !0;
                        if (k["default"].check.isNick(t))
                            return (0,
                                k["default"])("u").value = t + "@qq.com",
                                T.account = t + "@qq.com",
                                T.at_account = t + "@qq.com",
                                !0
                    }
                    return k["default"].check.isForeignPhone(t) && (T.at_account = "@" + t),
                        !0
                },
                "adjustErrTips": function () {
                    var t, e, n;
                    T.isNewStyle && (t = (0,
                        k["default"])("error_tips"),
                        e = (0,
                            k["default"])("loading_tips"),
                        "block" == k["default"].css.getComputedStyle((0,
                            k["default"])("qlogin_tips_0")).display && "block" == k["default"].css.getComputedStyle((0,
                                k["default"])("qlogin")).display && (n = (0,
                                    k["default"])("qlogin_tips_0")),
                        "block" == k["default"].css.getComputedStyle((0,
                            k["default"])("qlogin_tips_1")).display && "block" == k["default"].css.getComputedStyle((0,
                                k["default"])("qlogin")).display && (n = (0,
                                    k["default"])("qlogin_tips_1")),
                        "block" == k["default"].css.getComputedStyle((0,
                            k["default"])("qlogin_tips_2")).display && "block" == k["default"].css.getComputedStyle((0,
                                k["default"])("qlogin")).display && (n = (0,
                                    k["default"])("qlogin_tips_2")),
                        "block" == k["default"].css.getComputedStyle((0,
                            k["default"])("qlogin_tips_3")).display && "block" == k["default"].css.getComputedStyle((0,
                                k["default"])("qlogin")).display && (n = (0,
                                    k["default"])("qlogin_tips_3")),
                        (0,
                            k["default"])("qlogin_tips_4") && "block" == k["default"].css.getComputedStyle((0,
                                k["default"])("qlogin_tips_4")).display && "block" == k["default"].css.getComputedStyle((0,
                                    k["default"])("qlogin")).display && (n = (0,
                                        k["default"])("qlogin_tips_4")),
                        "block" == k["default"].css.getComputedStyle((0,
                            k["default"])("tips")).display && "block" == k["default"].css.getComputedStyle((0,
                                k["default"])("web_qr_login")).display && (n = (0,
                                    k["default"])("tips")),
                        t.style.top = k["default"].css.getOffsetPosition(n).top + parseInt(k["default"].css.getCurrentPixelStyle(n, "height"), 10) + "px",
                        e.style.top = k["default"].css.getOffsetPosition(n).top + parseInt(k["default"].css.getCurrentPixelStyle(n, "height"), 10) + "px")
                },
                "show_err": function (t, e) {
                    var n;
                    T.smsCheck || ((n = (0,
                        k["default"])("onekey_step2")) && "block" == k["default"].css.getComputedStyle(n).display ? (0,
                            k["default"])("onekey_tips").innerHTML = t : (T.hideLoading(),
                                T.adjustErrTips(),
                                k["default"].css.show((0,
                                    k["default"])("error_tips")),
                                T.err_m.innerHTML = t),
                        clearTimeout(T.errclock),
                        e || (T.errclock = setTimeout("pt.plogin.hide_err()", 5e3)))
                },
                "hide_err": function () {
                    var t = (0,
                        k["default"])("onekey_step2");
                    t && "block" == k["default"].css.getComputedStyle(t).display ? (0,
                        k["default"])("onekey_tips").innerHTML = "" : (k["default"].css.hide((0,
                            k["default"])("error_tips")),
                            T.err_m.innerHTML = "")
                },
                "showAssistant": function (t) {
                    if ("2052" == C.ptui.lang) {
                        T.hideLoading(),
                            T.adjustErrTips(),
                            k["default"].css.show((0,
                                k["default"])("error_tips"));
                        var e = "";
                        switch (t) {
                            case 0:
                                e = "快速登录异常，试试 {/assistant/troubleshooter.html,登录助手,} 修复",
                                    k["default"].report.monitor("315785");
                                break;
                            case 1:
                                e = "快速登录异常，试试 {/assistant/troubleshooter.html,登录助手,} 修复",
                                    k["default"].report.monitor("315786");
                                break;
                            case 2:
                                e = "登录异常，试试 {/assistant/troubleshooter.html,登录助手,} 修复",
                                    k["default"].report.monitor("315787");
                                break;
                            case 3:
                                e = "快速登录异常，试试 {http://im.qq.com/qq/2013/,升级QQ,onclick='$.report.monitor(326049);'} 修复",
                                    k["default"].report.monitor("326046");
                                break;
                            case 4:
                                e = "快速登录异常，试试 {http://im.qq.com/macqq/index.shtml#im.qqformac.plusdown,安装插件,} 并重启浏览器"
                        }
                        T.err_m.innerHTML = e.replace(/{([^,]+?),([^,]+?),(.*?)}/, "<a class='tips_link' style='color: #29B1F1' href='$1' target='_blank' $3>$2</a>")
                    }
                },
                "showGuanjiaTips": function () {
                    k["default"].initGuanjiaPlugin(),
                        k["default"].guanjiaPlugin ? (k["default"].guanjiaPlugin.QMStartUp(16, '/traytip=3 /tipProblemid=1401 /tipSource=18 /tipType=0 /tipIdParam=0 /tipIconUrl="http://dldir2.qq.com/invc/xfspeed/qqpcmgr/clinic/image/tipsicon_qq.png" /tipTitle="QQ快速登录异常?" /tipDesc="不能用已登录的QQ号快速登录，只能手动输入账号密码，建议用电脑诊所一键修复。"'),
                            k["default"].report.monitor("316548")) : k["default"].report.monitor("316549")
                },
                "showLoading": function (t) {
                    T.isNewStyle ? T.adjustErrTips() : (t = T.loginState == q.LoginState.QLogin ? 10 : 20,
                        (0,
                            k["default"])("loading_tips").style.top = t + "px"),
                        T.hide_err(),
                        k["default"].css.show((0,
                            k["default"])("loading_tips"))
                },
                "hideLoading": function () {
                    k["default"].css.hide((0,
                        k["default"])("loading_tips"))
                },
                "showLowList": function () {
                    var t = (0,
                        k["default"])("combox_list");
                    t && (k["default"].css.show(t),
                        T.low_login_isshow = !0)
                },
                "hideLowList": function () {
                    var t = (0,
                        k["default"])("combox_list");
                    t && (k["default"].css.hide(t),
                        T.low_login_isshow = !1)
                },
                "u_focus": function () {
                    "" == (0,
                        k["default"])("u").value && (k["default"].css.show((0,
                            k["default"])("uin_tips")),
                            (0,
                                k["default"])("uin_tips").className = "input_tips_focus"),
                        (0,
                            k["default"])("u").parentNode.className = "inputOuter_focus"
                },
                "u_blur": function () {
                    var t, e;
                    T.__isShowEmailTips || (/^\+/.test(this.value) && (this.value = this.value.replace(/^\+/, ""),
                        /^00/.test(this.value) || (this.value = "00" + this.value)),
                        "" == (t = (0,
                            k["default"])("u")).value ? (e = (0,
                                k["default"])("uin_tips"),
                                k["default"].css.show(e),
                                e.className = "input_tips") : (T.set_account(),
                                    T.check()),
                        t.parentNode.className = "inputOuter")
                },
                "u_mouseover": function () {
                    "inputOuter_focus" == (0,
                        k["default"])("u").parentNode.className || ((0,
                            k["default"])("u").parentNode.className = "inputOuter_hover")
                },
                "u_mouseout": function () {
                    "inputOuter_focus" == (0,
                        k["default"])("u").parentNode.className || ((0,
                            k["default"])("u").parentNode.className = "inputOuter")
                },
                "window_blur": function () {
                    T.lastCheckAccount = ""
                },
                "u_refresh_dom": function () {
                    "" == (0,
                        k["default"])("u").value ? (k["default"].css.show((0,
                            k["default"])("uin_tips")),
                            (0,
                                k["default"])("uin_tips").className = "input_tips_focus",
                            (0,
                                k["default"])("uin_del") && k["default"].css.hide((0,
                                    k["default"])("uin_del"))) : (k["default"].css.hide((0,
                                        k["default"])("uin_tips")),
                                        (0,
                                            k["default"])("uin_del") && k["default"].css.show((0,
                                                k["default"])("uin_del")))
                },
                "u_change": function () {
                    T.set_account(),
                        T.passwordErrorNum = 1,
                        T.hasCheck(!1),
                        T.hasSubmit = !1
                },
                "list_keydown": function (t, e) {
                    var n = (0,
                        k["default"])("email_list")
                        , i = (0,
                            k["default"])("u");
                    1 == e && (n = (0,
                        k["default"])("combox_list"));
                    var o = n.getElementsByTagName("li")
                        , r = o.length;
                    switch (t.keyCode) {
                        case T.keyCode.UP:
                            o[T.list_index[e]].className = "",
                                T.list_index[e] = (T.list_index[e] - 1 + r) % r,
                                o[T.list_index[e]].className = "hover";
                            break;
                        case T.keyCode.DOWN:
                            o[T.list_index[e]].className = "",
                                T.list_index[e] = (T.list_index[e] + 1) % r,
                                o[T.list_index[e]].className = "hover";
                            break;
                        case T.keyCode.ENTER:
                            var a = o[T.list_index[e]].innerHTML;
                            0 == e && (i.value = k["default"].str.decodeHtml(a)),
                                T.hideEmailTips(),
                                T.hideLowList(),
                                t.preventDefault();
                            break;
                        case T.keyCode.TAB:
                            T.hideEmailTips(),
                                T.hideLowList()
                    }
                    1 == e && ((0,
                        k["default"])("combox_box").innerHTML = o[T.list_index[e]].innerHTML,
                        (0,
                            k["default"])("low_login_hour").value = o[T.list_index[e]].getAttribute("value"))
                },
                "u_keydown": function (t) {
                    k["default"].css.hide((0,
                        k["default"])("uin_tips")),
                        -1 != T.list_index[0] && T.list_keydown(t, 0)
                },
                "u_keyup": function (t) {
                    "" == this.value ? (k["default"].css.show((0,
                        k["default"])("uin_tips")),
                        (0,
                            k["default"])("uin_tips").className = "input_tips_focus",
                        (0,
                            k["default"])("uin_del") && k["default"].css.hide((0,
                                k["default"])("uin_del"))) : (0,
                                    k["default"])("uin_del") && k["default"].css.show((0,
                                        k["default"])("uin_del"));
                    t = t.keyCode;
                    t != T.keyCode.UP && t != T.keyCode.DOWN && t != T.keyCode.ENTER && t != T.keyCode.TAB && t != T.keyCode.F5 && (-1 < (0,
                        k["default"])("u").value.indexOf("@") ? (T.showEmailTips(),
                            T.createEmailTips((0,
                                k["default"])("u").value)) : T.hideEmailTips())
                },
                "email_mousemove": function (t) {
                    var e, n = t.target;
                    "li" == n.tagName.toLowerCase() && ((e = (0,
                        k["default"])("emailTips_" + T.list_index[0])) && (e.className = ""),
                        n.className = "hover",
                        T.list_index[0] = parseInt(n.getAttribute("id").substring(10), 10),
                        t.stopPropagation())
                },
                "email_click": function (t) {
                    var e;
                    "li" == t.target.tagName.toLowerCase() && ((e = (0,
                        k["default"])("emailTips_" + T.list_index[0])) && ((0,
                            k["default"])("u").value = k["default"].str.decodeHtml(e.innerHTML),
                            T.set_account(),
                            T.check()),
                        T.hideEmailTips(),
                        t.stopPropagation())
                },
                "p_focus": function () {
                    "" == this.value && (k["default"].css.show((0,
                        k["default"])("pwd_tips")),
                        (0,
                            k["default"])("pwd_tips").className = "input_tips_focus"),
                        this.parentNode.className = "inputOuter_focus",
                        T.check()
                },
                "p_blur": function () {
                    "" == this.value && (k["default"].css.show((0,
                        k["default"])("pwd_tips")),
                        (0,
                            k["default"])("pwd_tips").className = "input_tips"),
                        k["default"].css.hide((0,
                            k["default"])("caps_lock_tips")),
                        this.parentNode.className = "inputOuter"
                },
                "p_mouseover": function () {
                    "inputOuter_focus" == (0,
                        k["default"])("p").parentNode.className || ((0,
                            k["default"])("p").parentNode.className = "inputOuter_hover")
                },
                "p_mouseout": function () {
                    "inputOuter_focus" == (0,
                        k["default"])("p").parentNode.className || ((0,
                            k["default"])("p").parentNode.className = "inputOuter")
                },
                "p_keydown": function () {
                    k["default"].css.hide((0,
                        k["default"])("pwd_tips"))
                },
                "p_keyup": function () {
                    "" == this.value && k["default"].css.show((0,
                        k["default"])("pwd_tips"))
                },
                "p_keypress": function (t) {
                    T.detectCapsLock(t) ? k["default"].css.show((0,
                        k["default"])("caps_lock_tips")) : k["default"].css.hide((0,
                            k["default"])("caps_lock_tips"))
                },
                "p_refresh_dom": function () {
                    "" == (0,
                        k["default"])("p").value ? (k["default"].css.show((0,
                            k["default"])("pwd_tips")),
                            (0,
                                k["default"])("pwd_tips").className = "input_tips_focus") : k["default"].css.hide((0,
                                    k["default"])("pwd_tips"))
                },
                "vc_focus": function () {
                    "" == this.value && (k["default"].css.show((0,
                        k["default"])("vc_tips")),
                        (0,
                            k["default"])("vc_tips").className = "input_tips_focus"),
                        this.parentNode.className = "inputOuter_focus"
                },
                "vc_blur": function () {
                    "" == this.value && (k["default"].css.show((0,
                        k["default"])("vc_tips")),
                        (0,
                            k["default"])("vc_tips").className = "input_tips"),
                        this.parentNode.className = "inputOuter"
                },
                "vc_keydown": function () {
                    k["default"].css.hide((0,
                        k["default"])("vc_tips"))
                },
                "vc_keyup": function () {
                    "" == this.value && k["default"].css.show((0,
                        k["default"])("vc_tips"))
                },
                "document_click": function () {
                    T.action[0] = T.action[0] + 1,
                        T.hideEmailTips(),
                        T.hideLowList()
                },
                "document_keydown": function () {
                    T.action[1] = T.action[1] + 1
                },
                "setLowloginCheckbox": function () {
                    T.isMailLogin && (T.low_login_enable = !1),
                        1 == C.ptui.low_login && (T.low_login_enable ? ((0,
                            k["default"])("q_low_login_enable").className = "checked",
                            (0,
                                k["default"])("p_low_login_enable").className = "checked",
                            (0,
                                k["default"])("auth_low_login_enable").className = "checked") : ((0,
                                    k["default"])("q_low_login_enable").className = "uncheck",
                                    (0,
                                        k["default"])("p_low_login_enable").className = "uncheck",
                                    (0,
                                        k["default"])("auth_low_login_enable").className = "uncheck"))
                },
                "checkbox_click": function () {
                    T.low_login_enable ? ((0,
                        k["default"])("q_low_login_enable").className = "uncheck",
                        (0,
                            k["default"])("p_low_login_enable").className = "uncheck",
                        (0,
                            k["default"])("auth_low_login_enable").className = "uncheck") : ((0,
                                k["default"])("q_low_login_enable").className = "checked",
                                (0,
                                    k["default"])("p_low_login_enable").className = "checked",
                                (0,
                                    k["default"])("auth_low_login_enable").className = "checked"),
                        T.low_login_enable = !T.low_login_enable
                },
                "feedback": function () {
                    window.open("https://support.qq.com/products/14800")
                },
                "bind_account": function () {
                    k["default"].css.hide((0,
                        k["default"])("operate_tips")),
                        T.need_hide_operate_tips = !0,
                        window.open("https://id.qq.com/index.html#account"),
                        k["default"].report.monitor("234964")
                },
                "combox_click": function (t) {
                    T.low_login_isshow ? T.hideLowList() : T.showLowList(),
                        t.stopPropagation()
                },
                "delUin": function (t) {
                    t && k["default"].css.hide(t.target),
                        (0,
                            k["default"])("u").value = "",
                        T.domFocus((0,
                            k["default"])("u")),
                        T.hasCheck(!1)
                },
                "check_cdn_img": function () {
                    var e;
                    window.g_cdn_js_fail && !C.ptui.isHttps && ((e = new Image).onload = function () {
                        e.onload = null,
                            e.onerror = null
                    }
                        ,
                        e.onerror = function () {
                            e.onload = null;
                            var t = (t = (e.onerror = null,
                                k["default"])("main_css").innerHTML).replace(new RegExp("https://imgcache.qq.com/ptlogin/v4/style/", "g"), "https://ui.ptlogin2.qq.com/style/");
                            T.insertInlineCss(t),
                                k["default"].report.monitor(312520)
                        }
                        ,
                        e.src = "https://imgcache.qq.com/ptlogin/v4/style/20/images/c_icon_1.png")
                },
                "insertInlineCss": function (t) {
                    var e;
                    document.createStyleSheet ? document.createStyleSheet("").cssText = t : ((e = document.createElement("style")).type = "text/css",
                        e.textContent = t,
                        document.getElementsByTagName("head")[0].appendChild(e))
                },
                "createLink": function (t) {
                    var e = document.createElement("link");
                    e.setAttribute("type", "text/css"),
                        e.setAttribute("rel", "stylesheet"),
                        e.setAttribute("href", t),
                        document.getElementsByTagName("head")[0].appendChild(e)
                },
                "checkInputLable": function () {
                    try {
                        (0,
                            k["default"])("u").value && k["default"].css.hide((0,
                                k["default"])("uin_tips")),
                            window.setTimeout(function () {
                                (0,
                                    k["default"])("p").value && k["default"].css.hide((0,
                                        k["default"])("pwd_tips"))
                            }, 1e3)
                    } catch (t) { }
                },
                "domLoad": function () {
                    if (!T.hasDomLoad) {
                        var t, e;
                        T.hasDomLoad = !0,
                            T.isPwdFirst() || T.switchpage(q.LoginState.QLogin),
                            "1" == k["default"].bom.query("pt_disable_pwd") && (T.switchpage(q.LoginState.QLogin),
                                t = (0,
                                    k["default"])("switcher_plogin"),
                                e = (0,
                                    k["default"])("docs_dotted"),
                                t && k["default"].css.hide(t),
                                e && k["default"].css.hide(e)),
                            "1" == k["default"].bom.query("pt_isdocs") && (i = (0,
                                k["default"])("login"),
                                k["default"].css.addClass(i, "docsqq")),
                            T.checkInputLable(),
                            T.checkNPLoad(),
                            T.loadQrTipsPic();
                        var n, i = (0,
                            k["default"])("loading_img");
                        i && i.setAttribute("src", i.getAttribute("place_src")),
                            T.check_cdn_img(),
                            T.ptui_notifySize("login"),
                            k["default"].report.monitor("373507&union=256042", .05),
                            navigator.cookieEnabled || (k["default"].report.monitor(408084),
                                k["default"].cookie.get("ptcz") && k["default"].report.monitor(408085)),
                            T.isTenpay && (1093 <= k["default"].sso_ver ? k["default"].report.monitor("451205") : k["default"].report.monitor("451206")),
                            T.dottedShow(),
                            T.webLoginReport(),
                            T.monitorQQNum(),
                            T.aq_patch(),
                            T.gzipReport(),
                            setTimeout(function () {
                                T.isNewStyle && l["default"].hasNoQlogin() && !T.isPwdFirst() && T.showQrTips()
                            }, 1e3),
                            T.isNewStyle && setTimeout("window.scrollTo(0, 0)", 100),
                            !T.isTim || (n = (0,
                                k["default"])("bottom_qlogin")) && k["default"].css.hide(n),
                            !C.plogin.isOnlyQQLogin() || (n = (0,
                                k["default"])("uin_tips")) && (n.innerHTML = k["default"].str.encodeHtml(n.getAttribute("data-onlyqq")));
                        var o = (0,
                            k["default"])("qr_tips_pic");
                        if (o)
                            switch (parseInt(C.ptui.lang, 10)) {
                                case 1033:
                                    o.style.background = "url(//imgcache.qq.com/ptlogin/v4/style/40/images/scanQRcode.png)";
                                    break;
                                case 1028:
                                    o.style.background = "url(//imgcache.qq.com/ptlogin/v4/style/40/images/scanQRcode_cht.png)"
                            }
                        T.isTim || k["default"].http.loadScript("https://ssl.captcha.qq.com/TCaptcha.js", function () {
                            T.initNewVerifyCodeUI(),
                                T.formFocus()
                        })
                    }
                },
                "dottedShow": function () {
                    try {
                        var t = (0,
                            k["default"])("bottom_qlogin");
                        if (!t)
                            return;
                        t = t.getElementsByTagName("span");
                        if (!t || 0 == t.length)
                            return;
                        for (var t = t[t.length - 1], e = t, n = !1; e;) {
                            if ("a" == (e.tagName && e.tagName.toLowerCase())) {
                                n = !0;
                                break
                            }
                            e = e.nextSibling
                        }
                        n || (t.style.display = "none")
                    } catch (i) {
                        k["default"].report.nlog("dotted show " + i.message)
                    }
                },
                "isOnlyQQLogin": function () {
                    return C.plogin.isQcloud() || 527 == C.ptui.daid || "358" === C.ptui.daid
                },
                "checkNPLoad": function () {
                    navigator.mimeTypes["application/nptxsso"] && !k["default"].sso_loadComplete && k["default"].checkNPPlugin()
                },
                "gzipReport": function () {
                    var n, t;
                    "1" == C.ptui.gzipEnable || C.ptui.isHttps || T.isUIStyle || (k["default"].report.monitor("455847"),
                        (n = k["default"].http.getXHR()) && (t = "/cgi-bin/xver?t=" + Math.random(),
                            n.open("get", t),
                            n.onreadystatechange = function () {
                                if (4 == n.readyState)
                                    if (200 <= n.status && n.status < 300 || 304 === n.status || 1223 === n.status || 0 === n.status) {
                                        try {
                                            var t = document.createElement("script");
                                            t.innerHTML = n.responseText,
                                                document.getElementsByTagName("head")[0].appendChild(t)
                                        } catch (e) { }
                                        window._gz || k["default"].report.nlog("gzip探测异常，返回内容：" + n.responseText + "返回码：" + n.status + "uin=" + k["default"].cookie.get("pt2gguin"), "462348")
                                    } else
                                        k["default"].report.nlog("gzip探测异常，返回内容：" + n.responseText + "返回码：" + n.status + "uin=" + k["default"].cookie.get("pt2gguin"), "462348")
                            }
                            ,
                            n.send()))
                },
                "monitorQQNum": function () {
                    switch (k["default"].loginQQnum) {
                        case 0:
                            k["default"].report.monitor("330314", .05);
                            break;
                        case 1:
                            k["default"].report.monitor("330315", .05);
                            break;
                        case 2:
                            k["default"].report.monitor("330316", .05);
                            break;
                        case 3:
                            k["default"].report.monitor("330317", .05);
                            break;
                        case 4:
                            k["default"].report.monitor("330318", .05);
                            break;
                        default:
                            k["default"].report.monitor("330319", .05)
                    }
                },
                "noscript_err": function () {
                    k["default"].report.nlog("noscript_err", 316648),
                        (0,
                            k["default"])("noscript_area").style.display = "none"
                },
                "bindEvent": function () {
                    var t = (0,
                        k["default"])("u")
                        , e = (0,
                            k["default"])("p")
                        , n = (0,
                            k["default"])("verifycode")
                        , i = (0,
                            k["default"])("verifyimgArea")
                        , o = (0,
                            k["default"])("login_button")
                        , r = (0,
                            k["default"])("p_low_login_box")
                        , a = (0,
                            k["default"])("q_low_login_box")
                        , l = (0,
                            k["default"])("auth_low_login_box")
                        , s = (0,
                            k["default"])("email_list")
                        , u = (0,
                            k["default"])("close")
                        , c = (0,
                            k["default"])("switcher_qlogin")
                        , d = (0,
                            k["default"])("switcher_plogin")
                        , f = (0,
                            k["default"])("uin_del")
                        , p = (0,
                            k["default"])("bind_account")
                        , h = (0,
                            k["default"])("cancleAuth")
                        , g = (0,
                            k["default"])("authClose")
                        , m = (0,
                            k["default"])("auth_area")
                        , _ = ((0,
                            k["default"])("qr_invalid"),
                            (0,
                                k["default"])("goBack"))
                        , y = (0,
                            k["default"])("qr_img_box")
                        , v = (0,
                            k["default"])("qrlogin_img")
                        , w = (0,
                            k["default"])("qr_info_link")
                        , b = (0,
                            k["default"])("qrswitch_logo");
                    b && k["default"].e.add(b, "click", T.switch_qrlogin),
                        w && k["default"].e.add(v, "click", function () {
                            k["default"].report.monitor("331287", .05)
                        }),
                        y && (k["default"].e.add(y, "mouseover", T.showQrTips),
                            k["default"].e.add(y, "mouseout", T.hideQrTips)),
                        _ && k["default"].e.add(_, "click", function (t) {
                            t.preventDefault(),
                                T.go_qrlogin_step(1),
                                k["default"].report.monitor("331288", .05)
                        }),
                        m && (k["default"].e.add(m, "click", T.authLogin),
                            k["default"].e.add(m, "mousedown", T.authMouseDowm),
                            k["default"].e.add(m, "mouseup", T.authMouseUp)),
                        h && k["default"].e.add(h, "click", T.cancleAuth),
                        g && k["default"].e.add(g, "click", T.ptui_notifyClose),
                        c && k["default"].e.add(c, "click", T.onQloginSwitch),
                        d && k["default"].e.add(d, "click", function (t) {
                            t.preventDefault(),
                                T.switchpage(q.LoginState.PLogin),
                                k["default"].report.monitor("331285", .05)
                        }),
                        p && (k["default"].e.add(p, "click", T.bind_account),
                            k["default"].e.add(p, "mouseover", function () {
                                T.need_hide_operate_tips = !1
                            }),
                            k["default"].e.add(p, "mouseout", function () {
                                T.need_hide_operate_tips = !0
                            })),
                        u && k["default"].e.add(u, "click", T.ptui_notifyClose),
                        1 == C.ptui.low_login && r && a && (k["default"].e.add(r, "click", T.checkbox_click),
                            k["default"].e.add(a, "click", T.checkbox_click)),
                        1 == C.ptui.low_login && l && k["default"].e.add(l, "click", T.checkbox_click),
                        k["default"].e.add(t, "focus", T.u_focus),
                        k["default"].e.add(t, "blur", T.u_blur),
                        k["default"].e.add(t, "change", T.u_change),
                        k["default"].e.add(t, "keydown", T.u_keydown),
                        k["default"].e.add(t, "paste", function () {
                            setTimeout(T.u_refresh_dom, 0)
                        }),
                        k["default"].e.add(t, "keyup", T.u_keyup),
                        k["default"].e.add(f, "click", T.delUin),
                        k["default"].e.add(e, "focus", T.p_focus),
                        k["default"].e.add(e, "blur", T.p_blur),
                        k["default"].e.add(e, "keydown", T.p_keydown),
                        k["default"].e.add(e, "keyup", T.p_keyup),
                        k["default"].e.add(e, "keypress", T.p_keypress),
                        k["default"].e.add(e, "paste", function () {
                            setTimeout(T.p_refresh_dom, 0)
                        }),
                        k["default"].e.add(o, "click", function (t) {
                            var e;
                            S.logger.log("$login_btn.onClick()"),
                                t && t.preventDefault(),
                                1 != T.needShowNewVc || T.hasVCSuccess ? 1 == T.needShowNewVc && T.hasVCSuccess ? (e = T.checkUrl.replace(/^https?:\/\//gi, "").split("/")[0],
                                    T.show_err('网络遇到点问题，请稍后刷新页面重试。<a target="_blank" href="https://ping.huatuo.qq.com/' + e + '">点击排查。</a>', !0),
                                    S.logger.info("$login_btn.onClick()", "plogin.cntCheckTimeout=".concat(T.cntCheckTimeout))) : T.submit(t) : (T.showVC(),
                                        S.logger.info("$login_btn.onClick()", "showVC"))
                        }),
                        k["default"].e.add(i, "click", T.changeVC),
                        k["default"].e.add(s, "mousemove", T.email_mousemove),
                        k["default"].e.add(s, "click", T.email_click),
                        k["default"].e.add(document, "click", T.document_click),
                        k["default"].e.add(document, "keydown", T.document_keydown),
                        k["default"].e.add(n, "focus", T.vc_focus),
                        k["default"].e.add(n, "blur", T.vc_blur),
                        k["default"].e.add(n, "keydown", T.vc_keydown),
                        k["default"].e.add(n, "keyup", T.vc_keyup),
                        k["default"].e.add(window, "load", T.domLoad);
                    n = (0,
                        k["default"])("noscript_img");
                    n && (k["default"].e.add(n, "load", T.noscript_err),
                        k["default"].e.add(n, "error", T.noscript_err));
                    n = (0,
                        k["default"])("vip_link2");
                    n && k["default"].e.add(n, "click", function (t) {
                        window.open("https://pay.qq.com/qqvip/index.shtml?aid=vip.gongneng.other.red.dengluweb_wording2_open"),
                            t.preventDefault(),
                            k["default"].report.monitor("263482")
                    }),
                        T.isNewQr && k["default"].e.add(document, "visibilitychange", function () {
                            var t = (0,
                                k["default"])("onekey_step2");
                            if (!t || "block" != k["default"].css.getComputedStyle(t).display)
                                switch (document.visibilityState) {
                                    case "hidden":
                                        T.cancle_qrlogin();
                                        break;
                                    case "visible":
                                        T.loginState == q.LoginState.QLogin && T.qrlogin_invalid && T.begin_qrlogin()
                                }
                        })
                },
                "vcodeMessage": function (t) {
                    t.randstr && t.ticket || k["default"].report.nlog("vcode postMessage error：" + t),
                        (0,
                            k["default"])("verifycode").value = t.randstr,
                        S.logger.info("vcodeMessage set verifycode to", t.randstr),
                        T.pt_verifysession = t.ticket,
                        T.hasVCSuccess = !0,
                        T.hideVC(),
                        T.submit()
                },
                "onSmsSubmit": function () {
                    S.logger.info("plogin.onSmsSubmit()");
                    var t = T.smsLoginUrl;
                    t && (k["default"].cookie.get("pt_sms") && (t += "&pt_sms_code=" + k["default"].cookie.get("pt_sms")),
                        k["default"].http.loadScript(t),
                        S.logger.info("plogin.onSmsSubmit", "url: ".concat(t, ", pt_sms=").concat(k["default"].cookie.get("pt_sms"))))
                },
                "newVCFirst": !0,
                "showNewVC": function () {
                    var t = (0,
                        k["default"])(h);
                    t.style.cssText = "background: none #FFFFFF; position: absolute; top: 0; width: 100%; z-index:9999;",
                        t.style.height = (0,
                            k["default"])("login").offsetHeight - (21 == C.ptui.style ? 2 : 4) + "px",
                        k["default"].css.show(t),
                        T.captcha = new TencentCaptcha(document.getElementById(p), C.ptui.appid, T.VCCallback, {
                            "sid": T.sessionID,
                            "type": "embed"
                        }),
                        T.captcha.show()
                },
                "hideNewVC": function () {
                    (0,
                        k["default"])(h) && k["default"].css.hide((0,
                            k["default"])(h)),
                        window.TencentCaptcha && T.captcha instanceof TencentCaptcha && T.captcha.destroy(),
                        T.captcha = null
                },
                "changeNewVC": function () {
                    T.showNewVC()
                },
                "initNewVerifyCodeUI": function () {
                    var t = (0,
                        k["default"])(h)
                        , e = document.createElement("div")
                        , n = document.createElement("div");
                    n.id = p,
                        T.isQcloud() ? (e.innerHTML = '<div style=" width: 300px; left:50%; margin-left:-150px; position: relative"><div style="position: relative; margin-left: 10px"><a href="javascript:pt.plogin.hideVC();" style="color: #007aff; text-decoration: none;">返回</a></div></div>',
                            n.style.cssText = "background: none #FFFFFF; position: relative; width: 300px; left:50%; margin-left:-150px; z-index:9999;",
                            t.appendChild(n),
                            t.appendChild(e)) : (e.innerHTML = '<div style="border-bottom: 1px solid #d7d7d7;"><div style="position: absolute; margin-left: 10px"><a href="javascript:pt.plogin.hideVC();" style="color: #007aff; text-decoration: none;">返回</a></div><div style="width: 100%; text-align: center; font-size: 16px; font-weight: bold">安全验证</div></div>',
                                n.style.cssText = "background: none #FFFFFF; position: absolute; width: 300px; left:50%; margin-left:-150px; z-index:9999;",
                                t.appendChild(e),
                                t.appendChild(n)),
                        e.style.cssText = "margin: 0px; padding: 0px; line-height: 40px"
                },
                "showVC": function () {
                    T.vcFlag = !0,
                        "1" == C.ptui.pt_vcode_v1 ? T.showNewVC() : (k["default"].css.show((0,
                            k["default"])("verifyArea")),
                            ((0,
                                k["default"])("verifycode").value = "",
                                k["default"])("verifyimg").src = T.getVCUrl(),
                            console.log("showVC set verifycode to empty")),
                        T.ptui_notifySize("login")
                },
                "hideVC": function () {
                    T.vcFlag = !1,
                        "1" == C.ptui.pt_vcode_v1 ? T.hideNewVC() : k["default"].css.hide((0,
                            k["default"])("verifyArea")),
                        T.ptui_notifySize("login")
                },
                "changeVC": function (t) {
                    t && t.preventDefault(),
                        "1" == C.ptui.pt_vcode_v1 ? T.changeNewVC() : (0,
                            k["default"])("verifyimg").src = T.getVCUrl(),
                        t && k["default"].report.monitor("330322", .05)
                },
                "getVCUrl": function () {
                    var t = T.at_account
                        , e = C.ptui.appid
                        , n = T.sessionID || "";
                    return T.verifycodeUrl + "?uin=" + t + "&aid=" + e + "&cap_cd=" + T.cap_cd + (n ? "&sessionID=" + n : "") + "&" + Math.random()
                },
                "checkValidate": function (t) {
                    try {
                        var e = t.u
                            , n = t.p
                            , i = t.verifycode
                            , o = (0,
                                k["default"])("safe_edit");
                        if ("" == k["default"].str.trim(e.value))
                            return T.show_err(C.str.no_uin),
                                T.domFocus(e),
                                !1;
                        if (k["default"].check.isNullQQ(e.value))
                            return T.show_err(C.str.inv_uin),
                                T.domFocus(e),
                                !1;
                        e = n.value;
                        if (T.armSafeEdit.isSafe && o && ("D41D8CD98F00B204E9800998ECF8427E" == (e = o.GetPwdHash()) && (e = ""),
                            T.armSafeEdit.safepwd = e),
                            !e)
                            return T.show_err(C.str.no_pwd),
                                T.domFocus(n),
                                !1;
                        if ("" == i.value)
                            return T.needVc || T.vcFlag ? (T.show_err(C.str.no_vcode),
                                T.domFocus(i)) : (T.checkResultReport(14),
                                    clearTimeout(T.checkClock),
                                    T.showVC()),
                                !1;
                        if (i.value.length < 4)
                            return T.show_err(C.str.inv_vcode),
                                T.domFocus(i),
                                i.select(),
                                !1
                    } catch (r) { }
                    return !0
                },
                "checkTimeout": function () {
                    var t = k["default"].str.trim((0,
                        k["default"])("u").value);
                    (k["default"].check.isQQ(t) || k["default"].check.isQQMail(t)) && (T.cap_cd = 0,
                        T.salt = k["default"].str.uin2hex(t.replace("@qq.com", "")),
                        T.needVc = !0,
                        "1" == C.ptui.pt_vcode_v1 ? T.needShowNewVc = !0 : T.showVC(),
                        T.isCheckTimeout = !0,
                        T.checkRet = 1,
                        T.cntCheckTimeout = T.cntCheckTimeout + 1),
                        k["default"].report.monitor(216082),
                        S.logger.info("plogin.checkTimeout()", "uin=".concat(t))
                },
                "loginTimeout": function () {
                    T.showAssistant(2),
                        console.warn("login Timeout")
                },
                "hasCheck": function (t) {
                    if (void 0 === t)
                        return T.checkState;
                    T.checkState = t
                },
                "check": function (t) {
                    var e;
                    {
                        if (S.logger.log("check start, caller=".concat((0,
                            S.getCallerName)(3))),
                            !T.smsCheck)
                            return 0 === T.checkState ? (S.logger.info("checking, holding"),
                                T.check.cb = t) : (T.account || T.set_account(),
                                    k["default"].check.isNullQQ(T.account) ? (T.show_err(C.str.inv_uin),
                                        !1) : void (T.account != T.lastCheckAccount && "" != T.account ? (T.hasCheck(0),
                                            e = C.ptui.appid,
                                            e = T.getCheckUrl(T.at_account, e),
                                            T.isCheckTimeout = !1,
                                            clearTimeout(T.checkClock),
                                            T.checkClock = setTimeout("pt.plogin.checkTimeout();", 5e3),
                                            k["default"].http.loadScript(e),
                                            T.check.cb = t,
                                            S.logger.info("start to req check api")) : S.logger.info("need not to check, plogin.account=".concat(T.account, " plogin.lastCheckAccount=").concat(T.lastCheckAccount))));
                        S.logger.info("sms need not to check")
                    }
                },
                "getCheckUrl": function (t, e) {
                    var n = T.checkUrl + "?regmaster=" + C.ptui.regmaster + "&pt_tea=2&pt_vcode=" + C.ptui.pt_vcode_v1 + "&";
                    return n += "uin=" + t + "&appid=" + e + "&js_ver=" + C.ptui.ptui_version + "&js_type=" + T.js_type + "&login_sig=" + C.ptui.login_sig + "&u1=" + encodeURIComponent(C.ptui.s_url) + "&r=" + Math.random() + "&pt_uistyle=" + C.ptui.style,
                        window.TDC && window.TDC.getInfo && window.TDC.getInfo().tokenid && (n += "&pt_jstoken=" + window.TDC.getInfo().tokenid),
                        n
                },
                "getSubmitUrl": function (t) {
                    var e, n, i = T.loginUrl + t + "?", o = {};
                    if ("pt_susp_repush" == t)
                        return i + ("appid=" + C.ptui.appid + "&daid=" + C.ptui.daid);
                    for (n in "login" == t && (o.u = encodeURIComponent(T.at_account),
                        o.verifycode = (0,
                            k["default"])("verifycode").value,
                        S.logger.info("getSubmitUrl setParams verifycode", (0,
                            k["default"])("verifycode").value),
                        T.needShowNewVc ? o.pt_vcode_v1 = 1 : o.pt_vcode_v1 = 0,
                        o.pt_verifysession_v1 = T.pt_verifysession || k["default"].cookie.get("verifysession"),
                        e = (0,
                            k["default"])("p").value,
                        T.armSafeEdit.isSafe && (e = T.armSafeEdit.safepwd),
                        o.p = r["default"].getEncryption(e, T.salt, o.verifycode, T.armSafeEdit.isSafe),
                        o.pt_randsalt = T.isRandSalt || 0,
                        window.TDC && window.TDC.getInfo && window.TDC.getInfo().tokenid && (o.pt_jstoken = window.TDC.getInfo().tokenid),
                        S.logger.log("getSubmitUrl loginName == login branch finished")),
                        o.u1 = "login" == t ? encodeURIComponent(l["default"].getSurl((0,
                            k["default"])("u").value)) : encodeURIComponent(l["default"].getSurl()),
                        "ptqrlogin" == t && (o.ptqrtoken = k["default"].str.hash33(k["default"].cookie.get("qrsig"))),
                        "pt_susp_poll" == t && (o.pt_susp_poll_token = k["default"].str.hash33(k["default"].cookie.get("pt_susp_sig"))),
                        o.ptredirect = C.ptui.target,
                        o.h = 1,
                        o.t = 1,
                        o.g = 1,
                        o.from_ui = 1,
                        o.ptlang = C.ptui.lang,
                        o.action = T.action.join("-") + "-" + +new Date,
                        o.js_ver = C.ptui.ptui_version,
                        o.js_type = T.js_type,
                        o.login_sig = C.ptui.login_sig,
                        o.pt_uistyle = C.ptui.style,
                        1 == C.ptui.low_login && T.low_login_enable && !T.isMailLogin && (o.low_login_enable = 1,
                            o.low_login_hour = T.low_login_hour),
                        "0" != C.ptui.csimc && (o.csimc = C.ptui.csimc,
                            o.csnum = C.ptui.csnum,
                            o.authid = C.ptui.authid),
                        o.aid = C.ptui.appid,
                        C.ptui.daid && (o.daid = C.ptui.daid),
                        "0" != C.ptui.pt_3rd_aid && (o.pt_3rd_aid = C.ptui.pt_3rd_aid),
                        C.ptui.regmaster && (o.regmaster = C.ptui.regmaster),
                        C.ptui.mibao_css && (o.mibao_css = C.ptui.mibao_css),
                        "1" == C.ptui.pt_qzone_sig && (o.pt_qzone_sig = 1),
                        "1" == C.ptui.pt_light && (o.pt_light = 1),
                        T.ptdrvs && (o.ptdrvs = T.ptdrvs),
                        T.sessionID && (o.sid = T.sessionID),
                        o)
                        i += n + "=" + o[n] + "&";
                    return T.isTim && (i += "tim=1&"),
                        l["default"].hasOneKeyList() && (i += "has_onekey=1&"),
                        l["default"].QQProtectGUID && (i += "&pt_guid_sig=" + l["default"].QQProtectGUID),
                        i
                },
                "submit": function (t) {
                    if (S.logger.log("submit() caller=".concat((0,
                        S.getCallerName)(3))),
                        2 <= T.cntCheckTimeout)
                        return T.show_err(T.checkErr[C.ptui.lang]),
                            T.needVc = !1,
                            T.needShowNewVc = !1,
                            void S.logger.warn("check超时2次，提示网络错误");
                    if (T.submitTime = (new Date).getTime(),
                        t && t.preventDefault(),
                        T.lastCheckAccount != T.account && !T.hasCheck())
                        return S.logger.info("start check, plogin.lastCheckAccount=".concat(T.lastCheckAccount, " plogin.account=").concat(T.account, " plogin.hasCheck()=").concat(T.hasCheck())),
                            void T.check(T.submit);
                    if (!T.ptui_onLogin(document.loginform))
                        return S.logger.info("表单合法性检查不通过，中止submit"),
                            !1;
                    if (k["default"].cookie.set("ptui_loginuin", escape(document.loginform.u.value), C.ptui.domain, "/", 720),
                        -1 == T.checkRet || 3 == T.checkRet)
                        return T.show_err(T.checkErr[C.ptui.lang]),
                            T.lastCheckAccount = "",
                            T.domFocus((0,
                                k["default"])("p")),
                            S.logger.info("retry check, plogin.checkRet=".concat(T.checkRet)),
                            void T.check();
                    clearTimeout(T.loginClock),
                        T.loginClock = setTimeout("pt.plogin.loginTimeout();", 5e3);
                    t = T.getSubmitUrl("login");
                    return T.smsLoginUrl = t,
                        k["default"].winName.set("login_href", encodeURIComponent(C.ptui.href)),
                        T.showLoading(),
                        T.isVCSessionTimeOut() && !T.needVc ? (T.lastCheckAccount = "",
                            T.check(T.submit),
                            S.logger.info("start check, vcsession timeout")) : (l["default"].reportPCMgr(T.at_account, 1),
                                l["default"].reportPath(T.at_account, 0),
                                S.logger.info("start to req login api, loginuin=".concat(document.loginform.u.value)),
                                k["default"].http.loadScript(t),
                                T.isdTime["7808-7-2-0"] = (new Date).getTime()),
                        !1
                },
                "isVCSessionTimeOut": function () {
                    return T.checkTime = T.checkTime || (new Date).getTime(),
                        12e5 < T.submitTime - T.checkTime && (k["default"].report.monitor(330323, .05),
                            !0)
                },
                "webLoginReport": function () { },
                "ptui_speedReport": function () { },
                "resultReport": function () { },
                "crossMessage": function (t) {
                    if (T.isUIStyle && T.uistyleCM(t),
                        "undefined" != typeof window.postMessage)
                        window.parent.postMessage(k["default"].str.json2str(t), "*");
                    else if (C.ptui.proxy_url) {
                        var e, n = C.ptui.proxy_url + "#";
                        for (e in t)
                            n += e + "=" + t[e] + "&";
                        (0,
                            k["default"])("proxy") && ((0,
                                k["default"])("proxy").innerHTML = '<iframe src="' + encodeURI(n) + '"></iframe>')
                    } else
                        try {
                            navigator.ptlogin_callback && navigator.ptlogin_callback(k["default"].str.json2str(t))
                        } catch (i) {
                            k["default"].report.nlog("ptlogin_callback " + i.message)
                        }
                },
                "uistyleCM": function (t) {
                    var e = encodeURIComponent(k["default"].str.json2str(t))
                        , t = document.location.protocol + "//ui.ptlogin2." + C.ptui.domain + "/cross_proxy.html#" + e
                        , e = (0,
                            k["default"])("proxy");
                    e && (e.innerHTML = '<iframe  allowtransparency="true" scrolling="no" frameborder="0" width="1" height="1" src="' + t + '">')
                },
                "ptui_notifyClose": function (t) {
                    t && t.preventDefault();
                    t = {
                        "action": "close"
                    };
                    T.crossMessage(t),
                        T.cancle_qrlogin()
                },
                "ptui_notifySize": function (t) {
                    T.loginState == q.LoginState.PLogin && ((0,
                        k["default"])("bottom_web") && k["default"].css.hide((0,
                            k["default"])("bottom_web")),
                        T.adjustLoginsize(),
                        (0,
                            k["default"])("bottom_web") && k["default"].css.show((0,
                                k["default"])("bottom_web")));
                    var e = (0,
                        k["default"])(t)
                        , t = {};
                    T.isNewStyle && (e.style.height = "100%"),
                        t.action = "resize",
                        t.width = e.offsetWidth || 1,
                        t.height = e.offsetHeight || 1,
                        T.isNewStyle && (t.height -= k["default"].css.getCurrentPixelStyle(e, "border-top-width") + k["default"].css.getCurrentPixelStyle(e, "border-bottom-width"),
                            e.style.height = t.height - k["default"].css.getCurrentPixelStyle(e, "border-top-width") - k["default"].css.getCurrentPixelStyle(e, "border-bottom-width") + "px"),
                        T.crossMessage(t)
                },
                "ptui_onLogin": function (t) {
                    return T.checkValidate(t)
                },
                "ptui_uin": function () { },
                "is_mibao": function (t) {
                    return /^http(s)?:\/\/(ssl\.)?ui.ptlogin2.(\S)+\/cgi-bin\/mibao_vry/.test(t)
                },
                "__get_polling_url": function (t) {
                    t = (C.ptui.isHttps ? "https://ssl." : "http://") + "ptlogin2." + C.ptui.domain + "/" + t + "?";
                    return t += "appid=" + C.ptui.appid + "&e=2&l=M&s=3&d=72&v=4&t=" + Math.random(),
                        C.ptui.regmaster && (t += "&regmaster=" + C.ptui.regmaster),
                        C.ptui.daid && (t += "&daid=" + C.ptui.daid),
                        T.isTim && (t += "&tim=1"),
                        C.ptui.pt_3rd_aid && (t += "&pt_3rd_aid=" + C.ptui.pt_3rd_aid),
                        t
                },
                "get_qrlogin_pic": function () {
                    return T.__get_polling_url("ptqrshow")
                },
                "go_qrlogin_step": function (t) {
                    switch (t) {
                        case 1:
                            T.begin_qrlogin(),
                                T.isNewQr || k["default"].css.show((0,
                                    k["default"])("qrlogin_step1")),
                                k["default"].css.hide((0,
                                    k["default"])("qrlogin_step2"));
                            break;
                        case 2:
                            T.isNewQr ? ((0,
                                k["default"])("qrlogin_step2").style.height = (0,
                                    k["default"])("login").offsetHeight - 8 + "px",
                                k["default"].css.show((0,
                                    k["default"])("qrlogin_step2"))) : (k["default"].css.show((0,
                                        k["default"])("qrlogin_step2")),
                                        k["default"].css.hide((0,
                                            k["default"])("qrlogin_step1")))
                    }
                },
                "go_onekey_step": function (t) {
                    var e = (0,
                        k["default"])("onekey_step2");
                    switch (t) {
                        case 1:
                            k["default"].css.hide(e),
                                T.begin_qrlogin();
                            break;
                        case 2:
                            k["default"].css.show(e),
                                T.showLoading(),
                                T.hideLoading()
                    }
                },
                "begin_qrlogin": function () {
                    if (S.logger.log("开始拉取qrlogin，caller=".concat((0,
                        S.getCallerName)(3))),
                        C.ptui.lockuin)
                        S.logger.info("固定UIN，不需要qrlogin，pt.ptui.lockuin=".concat(C.ptui.lockuin));
                    else {
                        var e, t = (0,
                            k["default"])("qr_invalid"), n = (0,
                                k["default"])("qrlogin_img");
                        if (t && (S.logger.info("隐藏QRCode不可用的遮罩"),
                            k["default"].css.hide(t)),
                            n) {
                            if (e = setTimeout(function () {
                                S.logger.warn("拉取二维码超时"),
                                    k["default"].report.monitor("33902489")
                            }, T.defaultTimeoutTime),
                                n.onload = function () {
                                    try {
                                        if (S.logger.log("qrloginImg.onload timer=".concat(e)),
                                            clearTimeout(e),
                                            !(0,
                                                o.isInPage)(this))
                                            return void S.logger.info("当前图片元素已经从dom树上移除，忽略");
                                        S.logger.log("parentNode=", this.parentNode),
                                            S.logger.log("parentNode.childNodes=", this.parentNode.childNodes),
                                            ((0,
                                                k["default"])("qrlogin_img").onload = null,
                                                k["default"])("qrlogin_img").onerror = null,
                                            T.cancle_qrlogin(),
                                            T.qrlogin_clock = window.setInterval("pt.plogin.qrlogin_submit();", 3e3),
                                            T.qrlogin_timeout = window.setTimeout(function () {
                                                S.logger.info("将QR登录设置为不可用 timer=".concat(e)),
                                                    T.set_qrlogin_invalid()
                                            }, T.qrlogin_timeout_time),
                                            S.logger.info("拉取二维码成功")
                                    } catch (t) {
                                        S.logger.warn("qrloginImg.onload 遇到错误", t)
                                    }
                                }
                                ,
                                n.onerror = function () {
                                    try {
                                        if (S.logger.log("qrloginImg.onerror timer=".concat(e)),
                                            clearTimeout(e),
                                            !(0,
                                                o.isInPage)(this))
                                            return void S.logger.info("当前图片元素已经从dom树上移除，忽略");
                                        S.logger.log("parentNode=", this.parentNode),
                                            S.logger.log("parentNode.childNodes=", this.parentNode.childNodes),
                                            ((0,
                                                k["default"])("qrlogin_img").onload = null,
                                                k["default"])("qrlogin_img").onerror = null,
                                            T.set_qrlogin_invalid(),
                                            S.logger.warn("拉取二维码失败 处理完成")
                                    } catch (t) {
                                        S.logger.warn("qrloginImg.onerror 遇到错误", t)
                                    }
                                }
                                ,
                                S.logger.log("begin_qrlogin timer=".concat(e)),
                                T.qrloginGetTime && new Date - T.qrloginGetTime < T.qrloginRefreshInterval)
                                return clearTimeout(e),
                                    !T.qrlogin_clock && T.qrlogin_invalid && (0,
                                        k["default"])("qr_invalid") && (S.logger.info("显示二维码不可用遮罩 timer=".concat(e)),
                                            k["default"].css.show((0,
                                                k["default"])("qr_invalid"))),
                                    void S.logger.info("距离上次拉取时间太短, plogin.qrloginGetTime = ".concat(T.qrloginGetTime, " timer=").concat(e, " qrlogin_invalid=").concat(T.qrlogin_invalid));
                            S.logger.info("开始拉取二维码 timer=".concat(e)),
                                T.qrlogin_invalid = !1,
                                T.qrloginGetTime = (new Date).getTime(),
                                setTimeout(function () {
                                    try {
                                        (0,
                                            k["default"])("qrlogin_img").src = T.get_qrlogin_pic()
                                    } catch (t) {
                                        T.qrloginGetTime = 0,
                                            S.logger.warn("拉取二维码遇到异常,timer=".concat(e, " :"), t)
                                    }
                                }, 0)
                        } else
                            S.logger.warn("qrloginImg 元素不存在")
                    }
                },
                "cancle_qrlogin": function () {
                    S.logger.log("cancle_qrlogin caller=".concat((0,
                        S.getCallerName)())),
                        window.clearInterval(T.qrlogin_clock),
                        window.clearTimeout(T.qrlogin_timeout),
                        T.qrlogin_clock = 0,
                        T.qrlogin_invalid = !0
                },
                "set_qrlogin_invalid": function () {
                    S.logger.log("set_qrlogin_invalid caller=".concat((0,
                        S.getCallerName)())),
                        T.cancle_qrlogin(),
                        T.switch_qrlogin(),
                        (0,
                            k["default"])("qr_invalid") && (S.logger.info("显示QRCode不可用的遮罩"),
                                k["default"].css.show((0,
                                    k["default"])("qr_invalid"))),
                        T.hideQrTips()
                },
                "loadQrTipsPic": function () {
                    if (T.isNewQr) {
                        var t = (0,
                            k["default"])("qr_tips_pic")
                            , e = "chs";
                        switch (C.ptui.lang + "") {
                            case "2052":
                                e = "chs";
                                break;
                            case "1033":
                                e = "en";
                                break;
                            case "1028":
                                e = "cht"
                        }
                        k["default"].css.addClass(t, "qr_tips_pic_" + e)
                    } else {
                        t = C.ptui.cssPath + "/c_qr_login.css";
                        (0,
                            k["default"])("qrswitch_logo") && T.createLink(t)
                    }
                },
                "showQrTips": function () {
                    var t, e, n, i;
                    T.inTipsAnimate || T.isTim || 2 === T.loginState && (t = {},
                        e = k["default"].css.getOffsetPosition("qrlogin_img"),
                        n = k["default"].css.getOffsetPosition("login"),
                        t.left = e.left - n.left,
                        t.right = (0,
                            k["default"])("login").offsetWidth - (0,
                                k["default"])("qrlogin_img").offsetWidth - t.left,
                        t.left = t.left - 92 - 6,
                        (0,
                            k["default"])("qr_tips").style.left = t.left + "px",
                        i = function i() {
                            t.left < 0 || (k["default"].css.show((0,
                                k["default"])("qr_tips")),
                                ((0,
                                    k["default"])("qr_tips_pic").style.opacity = 0,
                                    k["default"])("qr_tips_pic").style.filter = "alpha(opacity=0)",
                                (0,
                                    k["default"])("qr_tips_menban").className = "qr_tips_menban",
                                k["default"].animate.fade("qr_tips_pic", 100, 10, 10, function () {
                                    T.inTipsAnimate = !1
                                }))
                        }
                        ,
                        T.inTipsAnimate = !0,
                        i(),
                        T.hideQrTipsClock = window.setTimeout("pt.plogin.hideQrTips()", 5e3),
                        k["default"].report.monitor("331286", .05))
                },
                "hideQrTips": function () {
                    T.isTim || T.isNewQr && (T.inTipsAnimate = !0,
                        window.clearTimeout(T.hideQrTipsClock),
                        (0,
                            k["default"])("qr_tips_menban").className = "",
                        k["default"].animate.fade("qr_tips_pic", 0, 10, 10, function () {
                            l["default"].hasNoQlogin() ? (k["default"].css.hide((0,
                                k["default"])("qr_tips")),
                                k["default"].animate.animate("qrlogin_img", {
                                    "left": 12
                                }, 10, 10, function () {
                                    T.inTipsAnimate = !1
                                })) : (k["default"].css.hide((0,
                                    k["default"])("qr_tips")),
                                    T.inTipsAnimate = !1)
                        }))
                },
                "resetQrTips": function () {
                    T.isTim || T.isNewQr && ((0,
                        k["default"])("qrlogin_img") && ((0,
                            k["default"])("qrlogin_img").style.cssText = ""),
                        (0,
                            k["default"])("qr_tips") && k["default"].css.hide((0,
                                k["default"])("qr_tips")))
                },
                "qr_load": function () { },
                "qr_error": function () { },
                "switch_qrlogin_animate": function () {
                    var t = T.isQrLogin
                        , e = (0,
                            k["default"])("web_qr_login_show")
                        , n = 0;
                    t ? (T.isNewStyle || (n = -(0,
                        k["default"])("web_login").offsetHeight,
                        (0,
                            k["default"])("web_qr_login").style.height = ((0,
                                k["default"])("qrlogin").offsetHeight || 265) + "px"),
                        (0,
                            k["default"])("qrlogin").style.visibility = "visible",
                        (0,
                            k["default"])("web_login").style.visibility = "hidden") : (T.isNewStyle || ((n = 0,
                                k["default"])("web_qr_login").style.height = (0,
                                    k["default"])("web_login").offsetHeight + "px"),
                                (0,
                                    k["default"])("web_login").style.visibility = "visible",
                                (0,
                                    k["default"])("qrlogin").style.visibility = "hidden"),
                        k["default"].animate.animate(e, {
                            "top": n
                        }, 30, 20)
                },
                "switch_qrlogin": function (t) {
                    T.isNewQr || (t && t.preventDefault(),
                        T.hide_err(),
                        T.isQrLogin ? ((0,
                            k["default"])("qrlogin").style.visibility = "hidden",
                            T.cancle_qrlogin(),
                            (0,
                                k["default"])("qrswitch_logo").title = "二维码登录",
                            (0,
                                k["default"])("qrswitch_logo").className = "qrswitch_logo",
                            k["default"].report.monitor("273368", .05)) : ((0,
                                k["default"])("qrlogin").style.visibility = "visible",
                                T.go_qrlogin_step(1),
                                (0,
                                    k["default"])("qrswitch_logo").title = "返回",
                                (0,
                                    k["default"])("qrswitch_logo").className = "qrswitch_logo_qr",
                                T.begin_qrlogin(),
                                k["default"].report.monitor("273367", .05)),
                        T.isQrLogin = !T.isQrLogin,
                        T.switch_qrlogin_animate(),
                        T.ptui_notifySize("login"))
                },
                "adjustLoginsize": function () {
                    var t;
                    T.isNewStyle || (t = T.isQrLogin,
                        (0,
                            k["default"])("web_qr_login").style.height = t ? ((0,
                                k["default"])("qrlogin").offsetHeight || 265) + "px" : (0,
                                    k["default"])("web_login").offsetHeight + "px")
                },
                "qrlogin_submit": function () {
                    S.logger.log("qr_loginsubmit caller=".concat((0,
                        S.getCallerName)(3)));
                    var t = T.getSubmitUrl("ptqrlogin");
                    k["default"].winName.set("login_href", encodeURIComponent(C.ptui.href)),
                        "qq.com" === C.ptui.domain && T.toggleManager.featureEnable(T.toggleManager.FEATURE_KEYS.QR_LOGIN_XHR) ? a.get((0,
                            s.getProxyUrl)(t)).then(function (t) {
                                var e;
                                try {
                                    e = JSON.parse(t.data.replace(/'/g, '"').replace("ptuiCB(", "[").replace(/\)$/, "]"))
                                } catch (n) {
                                    throw S.logger.warn("error occured when parse ptuiCB params", n),
                                    n
                                }
                                u.ptuiCB.apply(window, e)
                            })["catch"](function (t) {
                                S.logger.warn("error occured when request qrlogin:", t)
                            }) : k["default"].http.loadScript(t)
                },
                "force_qrlogin": function () {
                    if (!C.ptui.lockuin)
                        switch (parseInt(C.ptui.style, 10)) {
                            case 21:
                            case 22:
                            case 23:
                                T.switch_qrlogin();
                                break;
                            default:
                                T.switchpage(q.LoginState.QLogin)
                        }
                },
                "redirect": function (t, e) {
                    switch (t + "") {
                        case "0":
                            location.replace(e);
                            break;
                        case "1":
                            top.location.replace(e);
                            break;
                        case "2":
                            parent.location.replace(e);
                            break;
                        default:
                            top.location.replace(e)
                    }
                },
                "armSafeEdit": function () {
                    var n = (0,
                        k["default"])("pwdArea")
                        , i = (0,
                            k["default"])("p")
                        , o = n.style.height;
                    i.style.width = "208px";
                    var r = document.createElement("a");
                    r.tabIndex = 1,
                        r.id = "safe_lock",
                        r.title = "安全控件登录开关";
                    var t = {
                        "background": "url(https://ui.ptlogin2.qq.com/style/34/images/icon_5.png) no-repeat -130px -130px",
                        "width": "13px",
                        "height": "20px",
                        "display": "block",
                        "margin": "-29px 20px 0 0",
                        "cursor": "pointer",
                        "webkitUserSelect": "none",
                        "outline": "none",
                        "marginLeft": "220px"
                    };
                    for (e in "6.0" == k["default"].browser("version") && (t.background = t.background.replace("icon_5.png", "icon_5_8.png")),
                        t)
                        r.style[e] = t[e];
                    r.style.style = "right",
                        T.armSafeEdit.isSafe = !1,
                        n.appendChild(r);
                    var e, a = document.createElement("div");
                    for (e in t = {
                        "position": "absolute",
                        "top": "2px",
                        "left": "1px"
                    })
                        a.style[e] = t[e];
                    function l() {
                        if (T.armSafeEdit.isSafe)
                            i.style.display = "block",
                                i.value = "",
                                setTimeout(function () {
                                    try {
                                        i.focus()
                                    } catch (t) { }
                                }, 0),
                                n.removeChild(a),
                                r.style.backgroundPosition = "-130px -130px",
                                T.armSafeEdit.isSafe = !1;
                        else {
                            var t = (0,
                                k["default"])("safe_edit");
                            t ? a.style.display = "block" : (a.innerHTML = (k["default"].suportActive() ? '<object id="safe_edit" classid="CLSID:EAAED308-7322-4b9b-965E-171933ADD473" width="208" height="38">                    <param name="bkColor" value="16777215"/>                    <param name="fontColor" value="0"/>                    <param name="fontHeight" value="0.25" />                    <param name="caretHeight" value="0.2" />                    <param name="borderType" value="2" />                    <param name="borderColor" value="16777215" />                </object>' : '<embed id="safe_edit" type="application/nptxsso"     width="208" height="38" bkcolor="16777215" fontcolor="0"     fontheight="0.25" caretheight="0.8" bordertype="2" bordercolor="16777215" />') + '<div class="safe-edit-tips"     style="color: #2C9E62; height: 28px; line-height: 34px; width: 208px;">    当前为安全登录模式，使用密码控件</div>',
                                n.appendChild(a),
                                t = (0,
                                    k["default"])("safe_edit"),
                                k["default"].e.add(t, "focus", T.check));
                            try {
                                t.CreateSafeEdit(),
                                    t.ClearAllInput(),
                                    setTimeout(function () {
                                        t.focus()
                                    }, 200),
                                    i.style.display = "none",
                                    r.style.backgroundPosition = "-117px -130px",
                                    T.armSafeEdit.isSafe = !0
                            } catch (e) {
                                T.show_err("安全控件加载失败"),
                                    i.focus(),
                                    T.armSafeEdit.isSafe = !1,
                                    a.style.display = "none",
                                    n.removeChild(a),
                                    k["default"].report.monitor("456099")
                            }
                            k["default"].report.monitor("456098")
                        }
                        return T.armSafeEdit.isSafe ? n.style.height = "74px" : n.style.height = o,
                            T.ptui_notifySize("login"),
                            !1
                    }
                    k["default"].e.add(r, "click", l),
                        T.armSafeEdit.lockToggle = l
                },
                "onekeyVerify": function (t, e, n) {
                    var i = (0,
                        k["default"])("onekey_verify")
                        , o = (0,
                            k["default"])("ov_retry_wrap")
                        , r = (0,
                            k["default"])("ov_retry")
                        , a = (0,
                            k["default"])("ov_back")
                        , l = (0,
                            k["default"])("p")
                        , s = document.loginform
                        , u = e
                        , c = n;
                    if (i) {
                        clearInterval(T.onekeyVerifyClock),
                            u = parseInt(u, 10) || T.onekeyVerify.__style || 1,
                            T.onekeyVerify.__style = u;
                        for (var d = i.getElementsByTagName("span"), f = ["占位"], p = 0; p < d.length; p++)
                            -1 < d[p].className.indexOf("ov-tips") && f.push(d[p]);
                        r.onclick = function () {
                            k["default"].http.loadScript(T.getSubmitUrl("pt_susp_repush"))
                        }
                            ,
                            "hide" == t ? (T.onekeyVerifyClock = 0,
                                T.hide_err(),
                                k["default"].css.hide(i),
                                k["default"].css.show(s),
                                setTimeout(function () {
                                    l.value = "",
                                        T.domFocus(l)
                                }, 0)) : ("invalid" == t ? (T.onekeyVerifyClock = 0,
                                    k["default"].css.addClass(i, "invalid"),
                                    T.hide_err(),
                                    k["default"].e.add(a, "click", function () {
                                        T.onekeyVerify("hide")
                                    })) : (k["default"].css.setClass(i, "ov-" + u),
                                        f[u] && f[u].appendChild(o),
                                        c = c || T.onekeyVerify.__tips || "你的帐号千金难求。为确保安全，请务必对手机收到的登录请求进行确认。",
                                        T.onekeyVerify.__tips = c,
                                        T.show_err(c, !0),
                                        T.onekeyVerifyClock = setInterval(function () {
                                            k["default"].http.loadScript(T.getSubmitUrl("pt_susp_poll"))
                                        }, 3e3),
                                        setTimeout(function () {
                                            clearInterval(T.onekeyVerifyClock),
                                                T.onekeyVerify("invalid")
                                        }, T.onekey_verify_timeout)),
                                    k["default"].css.show(i),
                                    k["default"].css.hide(s))
                    }
                },
                "getLoginParams": function (t) {
                    if (T.login_param)
                        for (var e = T.login_param.split("&"), n = 0; n < e.length; n++) {
                            var i = e[n].split("=");
                            if (i[0] === t)
                                return i[1]
                        }
                    return null
                }
            };
        TT = T
        e["default"] = T
    }
    , function (t, p, h) {
        "use strict";
        (function (e) {
            var t = h(3)
                , n = h(4)
                , i = setTimeout;
            function u(t) {
                return Boolean(t && "undefined" != typeof t.length)
            }
            function o() { }
            function a(t) {
                if (!(this instanceof a))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t)
                    throw new TypeError("not a function");
                this._state = 0,
                    this._handled = !1,
                    this._value = undefined,
                    this._deferreds = [],
                    f(t, this)
            }
            function r(i, o) {
                for (; 3 === i._state;)
                    i = i._value;
                0 !== i._state ? (i._handled = !0,
                    a._immediateFn(function () {
                        var t, e = 1 === i._state ? o.onFulfilled : o.onRejected;
                        if (null !== e) {
                            try {
                                t = e(i._value)
                            } catch (n) {
                                return void s(o.promise, n)
                            }
                            l(o.promise, t)
                        } else
                            (1 === i._state ? l : s)(o.promise, i._value)
                    })) : i._deferreds.push(o)
            }
            function l(t, e) {
                try {
                    if (e === t)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if (e instanceof a)
                            return t._state = 3,
                                t._value = e,
                                void c(t);
                        if ("function" == typeof n)
                            return void f((i = n,
                                o = e,
                                function () {
                                    i.apply(o, arguments)
                                }
                            ), t)
                    }
                    t._state = 1,
                        t._value = e,
                        c(t)
                } catch (r) {
                    s(t, r)
                }
                var i, o
            }
            function s(t, e) {
                t._state = 2,
                    t._value = e,
                    c(t)
            }
            function c(t) {
                2 === t._state && 0 === t._deferreds.length && a._immediateFn(function () {
                    t._handled || a._unhandledRejectionFn(t._value)
                });
                for (var e = 0, n = t._deferreds.length; e < n; e++)
                    r(t, t._deferreds[e]);
                t._deferreds = null
            }
            function d(t, e, n) {
                this.onFulfilled = "function" == typeof t ? t : null,
                    this.onRejected = "function" == typeof e ? e : null,
                    this.promise = n
            }
            function f(t, e) {
                var n = !1;
                try {
                    t(function (t) {
                        n || (n = !0,
                            l(e, t))
                    }, function (t) {
                        n || (n = !0,
                            s(e, t))
                    })
                } catch (i) {
                    if (n)
                        return;
                    n = !0,
                        s(e, i)
                }
            }
            a.prototype["catch"] = function (t) {
                return this.then(null, t)
            }
                ,
                a.prototype.then = function (t, e) {
                    var n = new this.constructor(o);
                    return r(this, new d(t, e, n)),
                        n
                }
                ,
                a.prototype["finally"] = t["a"],
                a.all = function (e) {
                    return new a(function (o, r) {
                        if (!u(e))
                            return r(new TypeError("Promise.all accepts an array"));
                        var a = Array.prototype.slice.call(e);
                        if (0 === a.length)
                            return o([]);
                        var l = a.length;
                        for (var t = 0; t < a.length; t++)
                            !function s(e, t) {
                                try {
                                    if (t && ("object" == typeof t || "function" == typeof t)) {
                                        var n = t.then;
                                        if ("function" == typeof n)
                                            return void n.call(t, function (t) {
                                                s(e, t)
                                            }, r)
                                    }
                                    a[e] = t,
                                        0 == --l && o(a)
                                } catch (i) {
                                    r(i)
                                }
                            }(t, a[t])
                    }
                    )
                }
                ,
                a.allSettled = n["a"],
                a.resolve = function (e) {
                    return e && "object" == typeof e && e.constructor === a ? e : new a(function (t) {
                        t(e)
                    }
                    )
                }
                ,
                a.reject = function (n) {
                    return new a(function (t, e) {
                        e(n)
                    }
                    )
                }
                ,
                a.race = function (o) {
                    return new a(function (t, e) {
                        if (!u(o))
                            return e(new TypeError("Promise.race accepts an array"));
                        for (var n = 0, i = o.length; n < i; n++)
                            a.resolve(o[n]).then(t, e)
                    }
                    )
                }
                ,
                a._immediateFn = "function" == typeof e ? function (t) {
                    e(t)
                }
                    : function (t) {
                        i(t, 0)
                    }
                ,
                a._unhandledRejectionFn = function (t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                }
                ,
                p["a"] = a
        }
        ).call(this, h(21).setImmediate)
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.getProxyUrl = e.shouldProxy = void 0;
        var i = function i(t) {
            return t && "string" == typeof t && 0 === t.indexOf("https://ssl.ptlogin2.qq.com/")
        };
        e.shouldProxy = i;
        var o = function o(t) {
            return i(t) ? t.replace("https://ssl.ptlogin2.qq.com/", "https://" + location.hostname + "/ssl/") : t
        };
        e.getProxyUrl = o
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e["default"] = void 0;
        var k = r(n(0))
            , S = r(n(14))
            , i = function (t) {
                if (t && t.__esModule)
                    return t;
                if (null === t || "object" != typeof t && "function" != typeof t)
                    return {
                        "default": t
                    };
                var e = a();
                if (e && e.has(t))
                    return e.get(t);
                var n, i = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (n in t) {
                    var r;
                    Object.prototype.hasOwnProperty.call(t, n) && ((r = o ? Object.getOwnPropertyDescriptor(t, n) : null) && (r.get || r.set) ? Object.defineProperty(i, n, r) : i[n] = t[n])
                }
                i["default"] = t,
                    e && e.set(t, i);
                return i
            }(n(34))
            , q = n(18)
            , c = n(2)
            , u = n(59)
            , o = n(35);
        function a() {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap;
            return a = function a() {
                return t
            }
                ,
                t
        }
        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function l(t, e, n, i, o, r, a) {
            try {
                var l = t[r](a)
                    , s = l.value
            } catch (u) {
                return void n(u)
            }
            l.done ? e(s) : Promise.resolve(s).then(i, o)
        }
        var g, s, C, d, f, p, T, m, h, _, y, v, w, b, x, N, E, P, L, O, I, A, j, M, D, Q, $, U, B, R, F, H, V, G, z, X, K, W, J, Y, Z, tt, et, nt, it, ot, rt, at, lt, st, ut, ct, dt, ft = window.pt, pt = (g = 5,
            s = [],
            C = [],
            d = [],
            f = [],
            p = 0,
            T = 9,
            m = '<a hidefocus=true draggable=false href="javascript:void(0);" tabindex="#tabindex#" uin="#uin#" type="#type#" onclick="pt.qlogin.imgClick(this);return false;" onfocus="pt.qlogin.imgFocus(this);" onblur="pt.qlogin.imgBlur(this);" onmouseover="pt.qlogin.imgMouseover(this);" onmousedown="pt.qlogin.imgMouseDowm(this)" onmouseup="pt.qlogin.imgMouseUp(this)" onmouseout="pt.qlogin.imgMouseUp(this)" class="face"  >          <img  id="img_#uin#" uin="#uin#" type="#type#" src="#src#"    onerror="pt.qlogin.imgErr(this);" />           <span id="mengban_#uin#"></span>          <span class="uin_menban"></span>          <span class="uin">#uin#</span>          <span id="img_out_#uin#" uin="#uin#" type="#type#"  class="img_out"  ></span>          <span id="nick_#uin#" class="#nick_class#">#nick#</span>          <span class="#vip_logo#"></span>          <span class="#onekey_logo#"></span>      </a><a  class="#return#" onclick="pt.qlogin.buildUnifiedQloginList();pt.plogin.hide_err();return false;">#return_text#</a>',
            h = 1,
            _ = {
                "17": 2,
                "19": 3,
                "20": 2,
                "21": 3,
                "22": 3,
                "23": 3,
                "25": 3,
                "32": 3,
                "33": 3,
                "34": 3,
                "40": 2
            }[ft.ptui.style],
            y = {
                "17": 240,
                "19": 300,
                "20": 240,
                "21": 360,
                "22": 360,
                "23": 300,
                "25": 300,
                "32": 360,
                "33": 300,
                "34": 300,
                "40": 240
            }[ft.ptui.style],
            v = 1,
            w = null,
            b = [4300, 4302, 4304, 4306, 4308],
            x = [4301, 4303, 4305, 4307, 4309],
            N = function N(t) {
                var e, n, i, o;
                1 == t && v <= 1 || 2 == t && h <= v || (n = (e = 0,
                    k["default"])("qlogin_show").offsetWidth || y,
                    i = Math.ceil(n / 10),
                    o = 0,
                    1 == t ? --v <= 1 ? (k["default"].css.hide((0,
                        k["default"])("prePage")),
                        k["default"].css.show((0,
                            k["default"])("nextPage"))) : (k["default"].css.show((0,
                                k["default"])("nextPage")),
                                k["default"].css.show((0,
                                    k["default"])("prePage"))) : (h <= (v += 1) ? k["default"].css.hide((0,
                                        k["default"])("nextPage")) : k["default"].css.show((0,
                                            k["default"])("nextPage")),
                                        k["default"].css.show((0,
                                            k["default"])("prePage"))),
                    e = window.setInterval(function () {
                        (0,
                            k["default"])("qlogin_list").style.left = 1 == t ? 10 * o - v * n + "px" : (2 - v) * n - 10 * o + "px",
                            i < (o += 1) && window.clearInterval(e)
                    }, 1))
            }
            ,
            E = function E() {
                if (C.length = 0,
                    !S["default"].isTim) {
                    if (k["default"].suportActive())
                        try {
                            var t = k["default"].activetxsso
                                , e = t.CreateTXSSOData();
                            t.InitSSOFPTCtrl(0, e);
                            e = t.DoOperation(1, e);
                            if (null == e)
                                return;
                            for (var n = e.GetArray("PTALIST"), i = n.GetSize(), o = 0; o < i; o++) {
                                var r = n.GetData(o)
                                    , a = r.GetDWord("dwSSO_Account_dwAccountUin")
                                    , l = r.GetDWord("dwSSO_Account_dwAccountUin")
                                    , s = r.GetByte("cSSO_Account_cAccountType")
                                    , u = a;
                                if (1 == s)
                                    try {
                                        u = r.GetArray("SSO_Account_AccountValueList").GetStr(0)
                                    } catch (b) { }
                                var c = 0;
                                try {
                                    c = r.GetWord("wSSO_Account_wFaceIndex")
                                } catch (b) {
                                    c = 0
                                }
                                var d = "";
                                try {
                                    d = r.GetStr("strSSO_Account_strNickName")
                                } catch (b) {
                                    d = ""
                                }
                                for (var f = r.GetBuf("bufST_PTLOGIN"), p = "", h = f.GetSize(), g = 0; g < h; g++) {
                                    var m = f.GetAt(g).toString("16");
                                    1 == m.length && (m = "0" + m),
                                        p += m
                                }
                                var _ = {
                                    "uin": a,
                                    "name": u,
                                    "uinString": l,
                                    "type": s,
                                    "face": c,
                                    "nick": d,
                                    "flag": r.GetDWord("dwSSO_Account_dwUinFlag"),
                                    "key": p,
                                    "loginType": 2
                                };
                                C.push(_)
                            }
                            0 == i && (O(),
                                k["default"].report.monitor(2129652, 1))
                        } catch (b) {
                            O(),
                                k["default"].report.nlog("IE获取快速登录信息失败：" + b.message, "391626", .05)
                        }
                    else
                        try {
                            var y = k["default"].nptxsso
                                , v = y.InitPVA()
                                , w = 0;
                            if (0 != v) {
                                w = y.GetPVACount();
                                for (g = 0; g < w; g++) {
                                    _ = {
                                        "uin": y.GetUin(g),
                                        "name": y.GetAccountName(g),
                                        "uinString": y.GetUinString(g),
                                        "type": 0,
                                        "face": y.GetFaceIndex(g),
                                        "nick": y.GetNickname(g) || y.GetUinString(g),
                                        "flag": y.GetUinFlag(g),
                                        "key": y.GetST(g),
                                        "loginType": 2
                                    };
                                    C.push(_)
                                }
                                "function" == typeof y.GetKeyIndex && (T = y.GetKeyIndex())
                            }
                            v && 0 != w || (O(),
                                k["default"].report.monitor(2129654, 1))
                        } catch (b) {
                            O(),
                                k["default"].report.nlog("非IE获取快速登录信息失败：" + (b.message || b), "391627", .05)
                        }
                    C.length && S["default"].isMailLogin && S["default"].switchpage(q.LoginState.QLogin)
                }
            }
            ,
            P = function P(t) {
                for (var e = 0, n = C.length; e < n; e++) {
                    var i = C[e];
                    if (i.uinString == t)
                        return i
                }
                return null
            }
            ,
            L = function L(t, e, n, i, o) {
                var r;
                /linux/i.test(navigator.userAgent) && -1 == navigator.userAgent.indexOf("virtual machine 2 ") ? c.logger.info("need not to onekey login") : k["default"].cookie.get("pt_local_token") || (k["default"].cookie.set("pt_local_token", Math.random(), "ptlogin2." + ft.ptui.domain),
                    k["default"].cookie.get("pt_local_token")) ? (r = ft.ptui.isHttps ? x : b,
                        t = "https://localhost.ptlogin2." + ft.ptui.domain + ":[port]/" + t + "&r=" + Math.random() + "&pt_local_tk=" + k["default"].cookie.get("pt_local_token"),
                        dt(t, r, e, window[n], i, o)) : c.logger.warn("无法设置cookie，无法使用快速登录")
            }
            ,
            O = function O() {
                0 != ft.ptui.enable_qlogin ? L("pt_get_uins?callback=ptui_getuins_CB", 300, "ptui_getuins_CB") : c.logger.info("need not to onekey login，enable_qlogin=".concat(ft.ptui.enable_qlogin))
            }
            ,
            I = function I() {
                var t;
                /windows/i.test(navigator.userAgent) && (t = "pc_querystatus?callback=ptui_pc_querystatus_CB&appid=ptlogin&subappid=" + ft.ptui.pt_3rd_aid,
                    L(t, 100, "ptui_pc_querystatus_CB", null, function () {
                        pt.callQQProtect({
                            "service": 104,
                            "action": 3,
                            "wparam": k["default"].str.json2str({
                                "appid": "ptlogin",
                                "subappid": ft.ptui.pt_3rd_aid,
                                "qqnum": "123456",
                                "msgid": 1
                            }),
                            "callbackName": "ptui_qqprotect_querystatus_CB"
                        })
                    }))
            }
            ,
            A = "0",
            j = function j(t, e, n, i) {
                var o = t;
                if (/windows/i.test(navigator.userAgent)) {
                    switch (parseInt(n, 10)) {
                        case 0:
                        case 1:
                            o = A;
                            break;
                        default:
                            A = o
                    }
                    if (pt.PCMgrSession) {
                        var r = "pc_action?callback=ptui_action_result_CB&appid=ptlogin&subappid=" + ft.ptui.pt_3rd_aid + "&operator=" + pt.PCMgrChecked + "&actionstring=" + encodeURIComponent(pt.PCMgrSession) + "&qqnum=" + encodeURIComponent(o) + "&loginType=" + e;
                        switch (parseInt(n, 10)) {
                            case 0:
                                r += "&errcode=0";
                                break;
                            case 1:
                                r += "&errcode=1"
                        }
                        L(r, 100, "ptui_action_result_CB", i, i)
                    } else if (pt.PCMgrSession2) {
                        var a = {
                            "appid": "ptlogin",
                            "subappid": ft.ptui.pt_3rd_aid,
                            "qqnum": o,
                            "ActionString": pt.PCMgrSession2
                        };
                        switch (pt.PCMgrChecked) {
                            case 1:
                            case 3:
                                a.check = 1;
                                break;
                            default:
                                a.check = 0
                        }
                        switch (parseInt(n, 10)) {
                            case 0:
                                a.msgid = 3,
                                    a.result = 1;
                                break;
                            case 1:
                                a.msgid = 3,
                                    a.result = 0;
                                break;
                            default:
                                a.msgid = 2
                        }
                        pt.callQQProtect({
                            "service": 104,
                            "action": 1,
                            "callbackName": "ptui_qqprotect_result_CB",
                            "wparam": k["default"].str.json2str(a),
                            "callback": i,
                            "timeoutCallback": i
                        })
                    } else
                        "function" == typeof i && i()
                } else
                    "function" == typeof i && i()
            }
            ,
            M = function M(t) {
                t && (S["default"].showLoading(),
                    L("pt_get_st?clientuin=" + t, 8e3, "ptui_getst_CB", function (t) {
                        c.logger.info("pt_get_st data", t),
                            i.ptui_getst_CB(t)
                    }, function () {
                        S["default"].hideLoading(),
                            i.ptui_qlogin_CB("-1234", "", "快速登录失败，请检查QQ客户端是否打开。")
                    }),
                    i.ptui_getst_CB.submitUrl = B({
                        "uin": t,
                        "pt_local_tk": "{{hash_clientkey}}"
                    }))
            }
            ,
            D = function D(t, e) {
                if (S["default"].isNewStyle) {
                    if (1 == e)
                        switch (t) {
                            case 1:
                                k["default"].css.hide((0,
                                    k["default"])("qlogin_tips_0")),
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_1")),
                                    k["default"].css.show((0,
                                        k["default"])("qlogin_tips_2")),
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_3")),
                                    (0,
                                        k["default"])("qlogin_tips_4") && k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_4"));
                                break;
                            case 2:
                                k["default"].css.hide((0,
                                    k["default"])("qlogin_tips_0")),
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_1")),
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_2")),
                                    k["default"].css.show((0,
                                        k["default"])("qlogin_tips_3")),
                                    (0,
                                        k["default"])("qlogin_tips_4") && k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_4"));
                                break;
                            case 3:
                                k["default"].css.hide((0,
                                    k["default"])("qlogin_tips_0")),
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_1")),
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_2")),
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_3")),
                                    (0,
                                        k["default"])("qlogin_tips_4") && k["default"].css.show((0,
                                            k["default"])("qlogin_tips_4"));
                                break;
                            default:
                                k["default"].css.show((0,
                                    k["default"])("qlogin_tips_0")),
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_1")),
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_2")),
                                    k["default"].css.hide((0,
                                        k["default"])("qlogin_tips_3")),
                                    (0,
                                        k["default"])("qlogin_tips_4") && k["default"].css.hide((0,
                                            k["default"])("qlogin_tips_4"))
                        }
                    else
                        k["default"].css.hide((0,
                            k["default"])("qlogin_tips_0")),
                            k["default"].css.show((0,
                                k["default"])("qlogin_tips_1")),
                            k["default"].css.hide((0,
                                k["default"])("qlogin_tips_2")),
                            k["default"].css.hide((0,
                                k["default"])("qlogin_tips_3")),
                            (0,
                                k["default"])("qlogin_tips_4") && k["default"].css.hide((0,
                                    k["default"])("qlogin_tips_4"));
                    t ? (k["default"].css.show((0,
                        k["default"])("title_1")),
                        k["default"].css.hide((0,
                            k["default"])("title_0"))) : (k["default"].css.hide((0,
                                k["default"])("title_1")),
                                k["default"].css.show((0,
                                    k["default"])("title_0")))
                }
            }
            ,
            Q = function Q(t) {
                var e;
                t ? (E(),
                    null == (e = P(t)) ? (c.logger.info("qloginObj is null, show error, uin=".concat(t)),
                        S["default"].show_err(ft.str.qlogin_expire),
                        k["default"].report.monitor(231544, 1)) : (c.logger.info("qloginObj exists, start submit, uin=".concat(t, " jump200=").concat(!0)),
                            e = B(e),
                            j(t, 2),
                            k["default"].http.loadScript(e),
                            S["default"].showLoading(),
                            window.clearTimeout(pt.__getstClock),
                            pt.__getstClock = window.setTimeout("pt.plogin.hideLoading();pt.plogin.showAssistant(0);", 1e4))) : c.logger.warn("uin is empty")
            }
            ,
            $ = function $(t, e, n) {
                var i = t.split("#")
                    , t = 0 < i[0].indexOf("?") ? "&" : "?";
                return "?" == i[0].substr(i[0].length - 1, 1) && (t = ""),
                    i[1] ? i[1] = "#" + i[1] : i[1] = "",
                    i[0] + t + e + "=" + n + i[1]
            }
            ,
            U = function U(t) {
                var e = ft.ptui.s_url;
                return 1 == ft.ptui.low_login && S["default"].low_login_enable && S["default"].isMailLogin && (e = $(e, "ss", 1)),
                    S["default"].isMailLogin && t && (e = $(e, "account", encodeURIComponent(t))),
                    e
            }
            ,
            B = function B(t) {
                var e = (ft.ptui.isHttps ? "https://ssl.ptlogin2." : "http://ptlogin2.") + ft.ptui.domain + "/" + (ft.ptui.jumpname || "jump") + "?";
                switch (ft.ptui.domain) {
                    case "tencent.com":
                    case "bkcloud.cc":
                    case "bkclouds.cc":
                        e = ft.ptui.isHttps ? "https" : "http://ptlogin2." + ft.ptui.domain + "/jump?"
                }
                return e += "clientuin=" + t.uin + "&keyindex=" + T + "&pt_aid=" + ft.ptui.appid + (ft.ptui.daid ? "&daid=" + ft.ptui.daid : "") + "&u1=" + encodeURIComponent(U()),
                    "undefined" != typeof t.key ? e += "&clientkey=" + t.key : e += "&pt_local_tk=" + t.pt_local_tk,
                    1 == ft.ptui.low_login && S["default"].low_login_enable && !S["default"].isMailLogin && (e += "&low_login_enable=1&low_login_hour=" + S["default"].low_login_hour),
                    "0" != ft.ptui.csimc && ft.ptui.csimc && (e += "&csimc=" + ft.ptui.csimc + "&csnum=" + ft.ptui.csnum + "&authid=" + ft.ptui.authid),
                    "1" == ft.ptui.pt_qzone_sig && (e += "&pt_qzone_sig=1"),
                    "1" == ft.ptui.pt_light && (e += "&pt_light=1"),
                    ft.ptui.pt_3rd_aid && (e += "&pt_3rd_aid=" + ft.ptui.pt_3rd_aid),
                    e += "&ptopt=1",
                    e += "&style=" + ft.ptui.style,
                    pt.hasOneKeyList() && (e += "&has_onekey=1"),
                    ft.ptui.regmaster && (e += "&regmaster=" + ft.ptui.regmaster),
                    pt.QQProtectGUID && (e += "&pt_guid_sig=" + pt.QQProtectGUID),
                    e
            }
            ,
            R = function R() {
                var t = F();
                S["default"].redirect(ft.ptui.target, t),
                    S["default"].showLoading(),
                    c.logger.info("authLoginSubmit finished")
            }
            ,
            F = function F() {
                var t = S["default"].authSubmitUrl;
                return t += "&regmaster=" + ft.ptui.regmaster + "&aid=" + ft.ptui.appid + "&s_url=" + encodeURIComponent(U()),
                    1 == ft.ptui.low_login && S["default"].low_login_enable && (t += "&low_login_enable=1&low_login_hour=" + S["default"].low_login_hour),
                    "1" == ft.ptui.pt_light && (t += "&pt_light=1"),
                    pt.hasOneKeyList() && (t += "&has_onekey=1"),
                    pt.QQProtectGUID && (t += "&pt_guid_sig=" + pt.QQProtectGUID),
                    t
            }
            ,
            H = function H(t, e) {
                var n = "https://ssl.ptlogin2." + ft.ptui.domain + "/ptqrshow?qr_push_uin=" + t + "&type=1&qr_push=1&appid=" + ft.ptui.appid + "&t=" + Math.random() + "&ptlang=" + ft.ptui.lang;
                ft.ptui.daid && (n += "&daid=" + ft.ptui.daid),
                    ft.ptui.pt_3rd_aid && (n += "&pt_3rd_aid=" + ft.ptui.pt_3rd_aid),
                    pt.__onekeyClock = setTimeout(function () {
                        S["default"].hideLoading(),
                            S["default"].showAssistant(0)
                    }, 5e3),
                    S["default"].showLoading(),
                    k["default"].http.loadScript(n),
                    c.logger.info("推送手机授权到服务端 uin=".concat(t, " appid=").concat(ft.ptui.appid, " daid=").concat(ft.ptui.daid, " pt_3rd_aid=").concat(ft.ptui.pt_3rd_aid)),
                    pt.__onekeyUin = t,
                    pt.__onekeyFirst = !!e
            }
            ,
            V = function V(t) {
                return t.onerror = null,
                    t.src != S["default"].dftImg && (t.src = S["default"].dftImg),
                    !1
            }
            ,
            G = function G(t) {
                var e = parseInt(t.getAttribute("type"), 10)
                    , n = t.getAttribute("uin");
                switch (c.logger.info("点击快速登录头像 uin=".concat(n, " type=").concat(e)),
                e) {
                    case 1:
                        pt.reportPath(n, 2),
                            R();
                        break;
                    case 2:
                        Q(n),
                            pt.reportPath(n, 1);
                        break;
                    case 4:
                        M(n),
                            pt.reportPath(n, 1);
                        break;
                    case g:
                        H(n, !0),
                            pt.reportPath(n, 4)
                }
            }
            ,
            z = function z(t) {
                !t || (t = t.getAttribute("uin")) && ((0,
                    k["default"])("img_out_" + t).className = "img_out_focus")
            }
            ,
            X = function X(t) {
                !t || (t = t.getAttribute("uin")) && ((0,
                    k["default"])("img_out_" + t).className = "img_out")
            }
            ,
            K = function K(t) {
                t && (w != t && (X(w),
                    w = t),
                    z(t))
            }
            ,
            W = function W(t) {
                t && (t = t.getAttribute("uin"),
                    (t = (0,
                        k["default"])("mengban_" + t)) && (t.className = "face_mengban"))
            }
            ,
            J = function J(t) {
                t && (t = t.getAttribute("uin"),
                    (t = (0,
                        k["default"])("mengban_" + t)) && (t.className = ""))
            }
            ,
            Y = function Y() {
                var t = (0,
                    k["default"])("qlogin_list").getElementsByTagName("a");
                0 < t.length && (w = t[0])
            }
            ,
            Z = function Z() {
                try {
                    w.focus()
                } catch (t) { }
            }
            ,
            tt = function tt() {
                var t = (0,
                    k["default"])("prePage")
                    , e = (0,
                        k["default"])("nextPage");
                t && k["default"].e.add(t, "click", function () {
                    N(1)
                }),
                    e && k["default"].e.add(e, "click", function () {
                        N(2)
                    });
                for (var n = document.getElementsByClassName("guanjia_checkbox"), i = 0; i < n.length; ++i)
                    k["default"].e.add(n[i], "change", function (t) {
                        pt.PCMgrChecked = t.target.checked;
                        for (var e = 0; e < n.length; ++e)
                            n[e].checked = pt.PCMgrChecked
                    })
            }
            ,
            et = function et() {
                for (var t = f.length, e = 0; e < t; e++)
                    f[e].uinString && (f[e].uinString in o.headerCache ? o.headerCache.update(f[e].uinString) : k["default"].http.loadScript((ft.ptui.isHttps ? "https://ssl.ptlogin2." : "http://ptlogin2.") + ft.ptui.domain + "/getface?appid=" + ft.ptui.appid + "&imgtype=3&encrytype=0&devtype=0&keytpye=0&uin=" + f[e].uinString + "&r=" + Math.random()))
            }
            ,
            nt = function nt() {
                tt(),
                    c.logger.info("qloginInited"),
                    setTimeout(function () {
                        k["default"].report.monitor(492804, .05)
                    }, 0)
            }
            ,
            it = function it() {
                c.logger.log("removeAllChildrenExceptQRCode child length is=", (0,
                    k["default"])("qlogin_list").childNodes.length);
                for (var t = (0,
                    k["default"])("qlogin_list").childNodes, e = 0; e < t.length; e++) {
                    var n = t[e];
                    "qr_area" !== n.id && (n.parentNode.removeChild(n),
                        --e)
                }
                c.logger.log("after remove, child length is =", (0,
                    k["default"])("qlogin_list").childNodes.length)
            }
            ,
            at = function at(t, e) {
                for (var n, i = 0; i < e; i++)
                    3 == t[i].loginType && (n = (0,
                        k["default"])("qr_area"),
                        1 == e ? (n && ((0,
                            k["default"])("qr_area").className = "qr_0"),
                            "1033" == ft.ptui.lang && ((0,
                                k["default"])("qlogin_show").style.height = (0,
                                    k["default"])("qlogin_show").offsetHeight + 10 + "px")) : n && ((0,
                                        k["default"])("qr_area").className = "qr_1"))
            }
            ,
            lt = function lt(t, e, n) {
                for (var i = document.createDocumentFragment(), o = (0,
                    k["default"])("qlogin_list"), r = 0; r < e; r++) {
                    var a = t[r]
                        , l = function (t) {
                            var e = k["default"].str.encodeHtml(t.uinString + "")
                                , n = k["default"].str.encodeHtml(t.nick);
                            "" == k["default"].str.trim(t.nick) && (n = e);
                            var i = t.flag;
                            return {
                                "uin": e,
                                "nick": n,
                                "flag": i,
                                "vipFlag": 4 == (4 & i),
                                "onekeyFlag": t.loginType == g,
                                "userAvatar": S["default"].dftImg,
                                "loginType": t.loginType
                            }
                        }(a)
                        , s = l.uin
                        , u = l.nick
                        , c = l.vipFlag
                        , d = l.onekeyFlag
                        , f = l.userAvatar;
                    if (3 != l.loginType) {
                        f = m.replace(/#uin#/g, s).replace(/#nick#/g, k["default"].str.trim(u) || s).replace(/#nick_class#/, c ? "nick red" : "nick").replace(/#vip_logo#/, c ? "vip_logo" : "").replace(/#onekey_logo#/, d ? "onekey_logo" : "").replace(/#type#/g, a.loginType).replace(/#src#/g, f).replace(/#tabindex#/, r + 1).replace(/#class#/g, 1 == a.loginType ? "auth" : "hide").replace(/#return#/g, 3 == n ? "return" : "hide").replace(/#return_text#/g, ft.str.onekey_return),
                            a = document.createElement("div");
                        a.innerHTML = f;
                        for (var p = a.childNodes, h = 0; h < p.length; h++)
                            i.appendChild(p[h])
                    }
                }
                o.appendChild(i)
            }
            ,
            st = function st(o) {
                c.logger.log("buildQloginDom，caller=".concat((0,
                    c.getCallerName)(3)));
                var r = p
                    , a = f;
                if (c.logger.log("buildQloginDom type=".concat(r, " list=").concat(a)),
                    S["default"].loginState == q.LoginState.QLogin) {
                    var l = (0,
                        k["default"])("qlogin_list")
                        , t = (0,
                            k["default"])("qr_area");
                    it(),
                        e = t,
                        3 == r ? k["default"].css.hide(e) : e.style.display = "";
                    var e, s = (t = a,
                        e = 5,
                        !S["default"].isNewStyle && t.length > e ? e : t.length);
                    if (0 == s)
                        return c.logger.info("没有获取到快速登录的账号，切回普通登录"),
                            void S["default"].switchpage(q.LoginState.PLogin, !0);
                    for (var n = 0; n < (r ? 1 : a.length); n++)
                        4 != a[n].loginType && 2 != a[n].loginType || (pt.hasBuildQlogin = !0);
                    S["default"].isNewStyle ? D(r, s) : S["default"].isNewQr && (1 == s ? ((0,
                        k["default"])("qlogin_tips") && k["default"].css.hide((0,
                            k["default"])("qlogin_tips")),
                        (0,
                            k["default"])("qlogin_show").style.top = "25px") : ((0,
                                k["default"])("qlogin_tips") && k["default"].css.show((0,
                                    k["default"])("qlogin_tips")),
                                (0,
                                    k["default"])("qlogin_show").style.top = "")),
                        at(a, s),
                        lt(a, s, r),
                        setTimeout(function () {
                            var t, e = (0,
                                k["default"])("qlogin_show").offsetWidth || y, n = S["default"].isMailLogin ? 93 : 100;
                            S["default"].isNewStyle && (_ = 3 != r && 1 == s ? 3 : Math.floor(e / n)),
                                h = Math.ceil(s / _),
                                S["default"].isNewStyle && (t = (0,
                                    k["default"])("qlogin_show"),
                                    e = 3 != r && 1 == s ? 3 * n : _ * n,
                                    t.style.width = e + "px",
                                    t.style.left = "50%",
                                    t.style.marginLeft = -50 * _ + "px"),
                                2 <= h ? k["default"].css.show((0,
                                    k["default"])("nextPage")) : (k["default"].css.hide((0,
                                        k["default"])("prePage")),
                                        k["default"].css.hide((0,
                                            k["default"])("nextPage"))),
                                v = 1,
                                (0,
                                    k["default"])("qlogin_list").style.left = "",
                                n = S["default"].isNewStyle ? 1 == h ? e : e / _ * s : 1 == h ? e : s * n,
                                l.style.width = n + "px",
                                S["default"].isMailLogin && (l.style.width = n + 14 + "px");
                            for (var i = 0; i < s; i++)
                                if (3 == a[i].loginType) {
                                    c.logger.info("start qrlogin, uIndex==".concat(i)),
                                        S["default"].begin_qrlogin();
                                    break
                                }
                            setTimeout(function () {
                                "function" == typeof o && o()
                            }, 0)
                        }, 0),
                        Y(),
                        Z(),
                        et(),
                        S["default"].resetQrTips()
                } else
                    c.logger.log("plogin.loginState != LoginState.QLogin, exit")
            }
            ,
            ut = function ut(t, e, n, i, o, r) {
                var a = 0
                    , l = function l() {
                        clearInterval(u),
                            "function" == typeof o && o()
                    }
                    , s = function s() {
                        if (a >= e.length)
                            return clearInterval(u),
                                i.called || "function" != typeof r || r(),
                                void c.logger.info("尝试完所有端口，都失败了 url=".concat(t, " ports="), e);
                        k["default"].http.loadScript(t.replace("[port]", e[a]), l),
                            a += 1
                    };
                i.called = !1;
                var u = setInterval(s, n);
                s()
            }
            ,
            ot = regeneratorRuntime.mark(function ht(e, n, i, o, r) {
                var a, l, s;
                return regeneratorRuntime.wrap(function (t) {
                    for (; ;)
                        switch (t.prev = t.next) {
                            case 0:
                                c.logger.info("loadLocalAsync Started"),
                                    a = 0;
                            case 2:
                                if (a < n.length)
                                    return l = (0,
                                        u.jsonp)(e.replace("[port]", n[a]).replace(/&callback=[_\w]+&/gi, "&"), {
                                            "timeout": i
                                        }),
                                        t.next = 6,
                                        l.promise["catch"](function (t) {
                                            return {
                                                "err": t
                                            }
                                        });
                                t.next = 30;
                                break;
                            case 6:
                                if (!(s = t.sent).err) {
                                    t.next = 20;
                                    break
                                }
                                if ("Error" === s.err.message)
                                    return c.logger.info("port=".concat(n[a], " onError try next")),
                                        t.abrupt("continue", 27);
                                t.next = 13;
                                break;
                            case 13:
                                if ("Timeout" === s.err.message)
                                    return c.logger.info("timeout stop trying"),
                                        r && r(),
                                        t.abrupt("break", 30);
                                t.next = 19;
                                break;
                            case 19:
                                throw s.err;
                            case 20:
                                if (c.logger.info("responseData:", s),
                                    "array" == typeof s || "object" == typeof s)
                                    return o && o(s),
                                        t.abrupt("break", 30);
                                t.next = 26;
                                break;
                            case 26:
                                throw new Error("unknown response data type");
                            case 27:
                                a++,
                                    t.next = 2;
                                break;
                            case 30:
                                c.logger.info("loadLocalAsync Ended");
                            case 31:
                            case "end":
                                return t.stop()
                        }
                }, ht)
            }),
            rt = function () {
                var t = this
                    , a = arguments;
                return new Promise(function (e, n) {
                    var i = ot.apply(t, a);
                    function o(t) {
                        l(i, e, n, o, r, "next", t)
                    }
                    function r(t) {
                        l(i, e, n, o, r, "throw", t)
                    }
                    o(undefined)
                }
                )
            }
            ,
            ct = function ct(t, e, n, i, o) {
                return rt.apply(this, arguments)
            }
            ,
            dt = function dt(t, e, n, i, o, r) {
                -1 < t.indexOf("/pt_get_st?") ? ct(t, e, n, o, r) : ut(t, e, n, i, o, r)
            }
            ,
            nt(),
        {
            "hasBuildQlogin": !1,
            "imgClick": G,
            "imgFocus": z,
            "imgBlur": X,
            "imgMouseover": K,
            "imgMouseDowm": W,
            "imgMouseUp": J,
            "imgErr": V,
            "focusHeader": Z,
            "authLoginSubmit": R,
            "__getstClock": 0,
            "__onekeyClock": 0,
            "__onekeyUin": 0,
            "__onekeyFirst": !0,
            "getSurl": U,
            "pcsvrQloginSubmit": M,
            "PCSvrQlogin": 4,
            "OneKeyPush": g,
            "onekeyPush": H,
            "setPCSvrQloginList": function (t) {
                C = t
            },
            "setOneKeyList": function (t) {
                d = t
            },
            "hasOneKeyList": function () {
                return !!d.length
            },
            "buildUnifiedQloginList": function (t, e) {
                c.logger.log("start buildUnifiedQloginList，caller=".concat((0,
                    c.getCallerName)(3))),
                    p = void 0 === t ? 0 : t;
                var n, i = [], o = {};
                if (s.length = 0,
                    c.logger.log("buildUnifiedQloginList init status type=".concat(t, " uin=").concat(e, " list.length=").concat(i.length, " plogin.isNewQr=").concat(S["default"].isNewQr, " clientUinList=").concat(k["default"].str.json2str(C), " onekeyUinList=").concat(k["default"].str.json2str(d))),
                    S["default"].isNewQr && i.push({
                        "loginType": 3
                    }),
                    1 == t || 2 == t)
                    return c.logger.info("type=".concat(t, "，清空qloginBuildList")),
                        f = i,
                        void st();
                if (S["default"].authUin && "0" == ft.ptui.auth_mode && "" == ft.ptui.regmaster && "1" != ft.ptui.noAuth && !S["default"].isTim && (c.logger.info("authUin=".concat(S["default"].authUin, " auth_mode=").concat(ft.ptui.auth_mode, " regmaster=").concat(ft.ptui.regmaster, " noAuth=").concat(ft.ptui.noAuth, " plogin.isTim=").concat(S["default"].isTim)),
                    n = {
                        "name": S["default"].authUin,
                        "uinString": S["default"].authUin,
                        "nick": k["default"].str.utf8ToUincode(k["default"].cookie.get("ptnick_" + S["default"].authUin)) || S["default"].authUin,
                        "loginType": 1
                    },
                    i.push(n),
                    o[n.name] = n,
                    s.push(n)),
                    "1" == ft.ptui.enable_qlogin && !S["default"].isTim)
                    for (var r in C)
                        !Object.prototype.hasOwnProperty.call(C, r) || o[C[r].name] || o[C[r].uinString] || (i.push(C[r]),
                            o[C[r].uinString] = C[r],
                            s.push(C[r]));
                if ("1" == ft.ptui.enable_qlogin && !S["default"].isTim)
                    for (var r in d)
                        !Object.prototype.hasOwnProperty.call(d, r) || o[d[r].name] || o[d[r].uinString] || (i.push(d[r]),
                            o[d[r].uinString] = d[r],
                            s.push(d[r]));
                3 == t && o[e] && (i.length = 0,
                    i.push(o[e])),
                    c.logger.info("before buildQloginDom, list=".concat(k["default"].str.json2str(i))),
                    f = i,
                    st()
            },
            "buildQloginDom": st,
            "fetchQloginList": E,
            "QQProtectSession": "",
            "QQProtectPortList": [9410, 16873],
            "QQProtectGUID": "",
            "callQQProtect": function (t) {
                if (/windows/i.test(navigator.userAgent)) {
                    var e = k["default"].cookie.get("_qpsvr_localtk");
                    if (e || k["default"].cookie.set("_qpsvr_localtk", Math.random(), "qq.com"),
                        e = k["default"].cookie.get("_qpsvr_localtk")) {
                        var n = t.timeout || 200
                            , i = t.wparam || ""
                            , o = t.lparam || "";
                        switch (parseInt(t.service, 10)) {
                            case 103:
                                var r = 1
                                    , a = pt.QQProtectSession;
                                break;
                            case 104:
                            default:
                                r = 0,
                                    a = ""
                        }
                        o = "https://localhost.sec.qq.com:[port]/?cmd=101&service=" + encodeURIComponent(t.service) + "&action=" + encodeURIComponent(t.action) + "&timeout=5000&_tk=" + encodeURIComponent(e) + "&encrypt=" + r + "&_ts=" + (new Date).getTime() + "&callback=" + encodeURIComponent(t.callbackName) + "&wparam=" + encodeURIComponent(i) + "&lparam=" + encodeURIComponent(o) + "&session=" + encodeURIComponent(a);
                        dt(o, [9410, 16873], n, window[t.callbackName], t.callback, t.timeoutCallback)
                    }
                }
            },
            "fetchOnekeyListByGUID": function (t) {
                if (t)
                    var e = "https://ssl.ptlogin2." + ft.ptui.domain + "/pt_fetch_dev_uin?r=" + Math.random() + "&pt_guid_sig=" + t;
                else {
                    t = k["default"].cookie.get("pt_guid_sig");
                    if (!t)
                        return;
                    e = "https://ssl.ptlogin2." + ft.ptui.domain + "/pt_fetch_dev_uin?r=" + Math.random() + "&pt_guid_token=" + k["default"].str.hash33(t)
                }
                k["default"].http.loadScript(e)
            },
            "fetchOnekeyList": function () {
                if (S["default"].isNewStyle && !S["default"].isTim && "0" != ft.ptui.enable_qlogin)
                    return navigator.userAgent.match(/Windows/) ? void pt.callQQProtect({
                        "service": 1,
                        "callbackName": "pt_qqprotect_version",
                        "timeoutCallback": function () {
                            pt.fetchOnekeyListByGUID(),
                                k["default"].report.monitor(2732844)
                        }
                    }) : (c.logger.info("非windows没有Q盾，直接从GUID获取快速登录"),
                        pt.fetchOnekeyListByGUID())
            },
            "hasNoQlogin": function () {
                return 0 == s.length
            },
            "detectPCMgr": I,
            "reportPCMgr": j,
            "PCMgrSession": "",
            "PCMgrSession2": "",
            "PCMgrChecked": 3,
            "processPCMgrStatus": function (t, e, n) {
                for (var i = document.getElementsByClassName("guanjia"), o = 0; o < i.length; ++o)
                    k["default"].css.show(i[o]);
                for (var r = document.getElementsByClassName("guanjia_tips"), o = 0; o < r.length; ++o)
                    r[o].innerHTML = k["default"].str.encodeHtml(e);
                switch (parseInt(t, 10)) {
                    case 0:
                        return;
                    case 1:
                        for (var a = document.getElementsByClassName("guanjia_logo"), o = 0; o < a.length; ++o)
                            a[o].style.display = "inline";
                        for (o = 0; o < i.length; ++o) {
                            i[o].style.opacity = 0,
                                i[o].style.filter = "alpha(opacity=0)";
                            var l = k["default"].css.getCurrentPixelStyle(i[o], "top");
                            i[o].style.top = l + 10 + "px",
                                k["default"].animate.animate2(i[o], {
                                    "top": l + "px"
                                }, 5),
                                k["default"].animate.fade(i[o], 100, 5)
                        }
                        break;
                    case 2:
                        for (var s = document.getElementsByClassName("guanjia_checkbox"), o = 0; o < s.length; ++o) {
                            s[o].style.display = "inline";
                            var u = "true" == n.toString().toLowerCase() || "1" == n;
                            s[o].checked = u,
                                pt.PCMgrChecked = u ? 1 : 2
                        }
                }
                for (var c = document.getElementsByClassName("bottom"), o = 0; o < c.length; ++o)
                    k["default"].css.addClass(c[o], "center")
            },
            "reportPath": function (t, e) {
                for (var n = 0, i = 0, o = 0, r = 0, a = 0, l = 0; l < f.length; ++l) {
                    switch (f[l].loginType) {
                        case 1:
                            i += 1;
                            break;
                        case g:
                            r += 1;
                            break;
                        case 2:
                        case 4:
                            o += 1
                    }
                    if (f[l].uinString == t)
                        switch (l < _ && (a = 1),
                        f[l].loginType) {
                            case 1:
                                n = 2;
                                break;
                            case g:
                                n = 4;
                                break;
                            case 2:
                            case 4:
                                n = 1
                        }
                }
                k["default"].http.loadScript("//ui.ptlogin2.qq.com/cgi-bin/report?ct=2&path=" + e + "-" + n + "-" + a + "-" + i + "-" + o + "-" + r)
            }
        });
        e["default"] = pt
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.LoginState = void 0;
        e.LoginState = {
            "PLogin": 1,
            "QLogin": 2,
            "OneKeyLogin": 3
        }
    }
    , function (t, e, n) {
        var i = function (a) {
            "use strict";
            var u, t = Object.prototype, s = t.hasOwnProperty, e = "function" == typeof Symbol ? Symbol : {}, o = e.iterator || "@@iterator", n = e.asyncIterator || "@@asyncIterator", i = e.toStringTag || "@@toStringTag";
            function r(t, e, n) {
                return Object.defineProperty(t, e, {
                    "value": n,
                    "enumerable": !0,
                    "configurable": !0,
                    "writable": !0
                }),
                    t[e]
            }
            try {
                r({}, "")
            } catch (N) {
                r = function (t, e, n) {
                    return t[e] = n
                }
            }
            function l(t, e, n, i) {
                var r, a, l, s, e = e && e.prototype instanceof m ? e : m, e = Object.create(e.prototype), i = new C(i || []);
                return e._invoke = (r = t,
                    a = n,
                    l = i,
                    s = d,
                    function (t, e) {
                        if (s === p)
                            throw new Error("Generator is already running");
                        if (s === h) {
                            if ("throw" === t)
                                throw e;
                            return x()
                        }
                        for (l.method = t,
                            l.arg = e; ;) {
                            var n = l.delegate;
                            if (n) {
                                var i = function o(t, e) {
                                    var n = t.iterator[e.method];
                                    if (n === u) {
                                        if (e.delegate = null,
                                            "throw" === e.method) {
                                            if (t.iterator["return"] && (e.method = "return",
                                                e.arg = u,
                                                o(t, e),
                                                "throw" === e.method))
                                                return g;
                                            e.method = "throw",
                                                e.arg = new TypeError("The iterator does not provide a 'throw' method")
                                        }
                                        return g
                                    }
                                    n = c(n, t.iterator, e.arg);
                                    if ("throw" === n.type)
                                        return e.method = "throw",
                                            e.arg = n.arg,
                                            e.delegate = null,
                                            g;
                                    var n = n.arg;
                                    if (!n)
                                        return e.method = "throw",
                                            e.arg = new TypeError("iterator result is not an object"),
                                            e.delegate = null,
                                            g;
                                    {
                                        if (!n.done)
                                            return n;
                                        e[t.resultName] = n.value,
                                            e.next = t.nextLoc,
                                            "return" !== e.method && (e.method = "next",
                                                e.arg = u)
                                    }
                                    e.delegate = null;
                                    return g
                                }(n, l);
                                if (i) {
                                    if (i === g)
                                        continue;
                                    return i
                                }
                            }
                            if ("next" === l.method)
                                l.sent = l._sent = l.arg;
                            else if ("throw" === l.method) {
                                if (s === d)
                                    throw s = h,
                                    l.arg;
                                l.dispatchException(l.arg)
                            } else
                                "return" === l.method && l.abrupt("return", l.arg);
                            s = p;
                            i = c(r, a, l);
                            if ("normal" === i.type) {
                                if (s = l.done ? h : f,
                                    i.arg !== g)
                                    return {
                                        "value": i.arg,
                                        "done": l.done
                                    }
                            } else
                                "throw" === i.type && (s = h,
                                    l.method = "throw",
                                    l.arg = i.arg)
                        }
                    }
                ),
                    e
            }
            function c(t, e, n) {
                try {
                    return {
                        "type": "normal",
                        "arg": t.call(e, n)
                    }
                } catch (N) {
                    return {
                        "type": "throw",
                        "arg": N
                    }
                }
            }
            a.wrap = l;
            var d = "suspendedStart"
                , f = "suspendedYield"
                , p = "executing"
                , h = "completed"
                , g = {};
            function m() { }
            function _() { }
            function y() { }
            var v = {};
            v[o] = function () {
                return this
            }
                ;
            e = Object.getPrototypeOf,
                e = e && e(e(T([])));
            e && e !== t && s.call(e, o) && (v = e);
            var w = y.prototype = m.prototype = Object.create(v);
            function b(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    r(t, e, function (t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function k(a, l) {
                var e;
                this._invoke = function (n, i) {
                    function t() {
                        return new l(function (t, e) {
                            !function r(t, e, n, i) {
                                t = c(a[t], a, e);
                                if ("throw" !== t.type) {
                                    var o = t.arg
                                        , e = o.value;
                                    return e && "object" == typeof e && s.call(e, "__await") ? l.resolve(e.__await).then(function (t) {
                                        r("next", t, n, i)
                                    }, function (t) {
                                        r("throw", t, n, i)
                                    }) : l.resolve(e).then(function (t) {
                                        o.value = t,
                                            n(o)
                                    }, function (t) {
                                        return r("throw", t, n, i)
                                    })
                                }
                                i(t.arg)
                            }(n, i, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function S(t) {
                var e = {
                    "tryLoc": t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                        e.afterLoc = t[3]),
                    this.tryEntries.push(e)
            }
            function q(t) {
                var e = t.completion || {};
                e.type = "normal",
                    delete e.arg,
                    t.completion = e
            }
            function C(t) {
                this.tryEntries = [{
                    "tryLoc": "root"
                }],
                    t.forEach(S, this),
                    this.reset(!0)
            }
            function T(t) {
                if (t) {
                    var e = t[o];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                            , i = function i() {
                                for (; ++n < t.length;)
                                    if (s.call(t, n))
                                        return i.value = t[n],
                                            i.done = !1,
                                            i;
                                return i.value = u,
                                    i.done = !0,
                                    i
                            };
                        return i.next = i
                    }
                }
                return {
                    "next": x
                }
            }
            function x() {
                return {
                    "value": u,
                    "done": !0
                }
            }
            return ((_.prototype = w.constructor = y).constructor = _).displayName = r(y, i, "GeneratorFunction"),
                a.isGeneratorFunction = function (t) {
                    t = "function" == typeof t && t.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                a.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y,
                        r(t, i, "GeneratorFunction")),
                        t.prototype = Object.create(w),
                        t
                }
                ,
                a.awrap = function (t) {
                    return {
                        "__await": t
                    }
                }
                ,
                b(k.prototype),
                k.prototype[n] = function () {
                    return this
                }
                ,
                a.AsyncIterator = k,
                a.async = function (t, e, n, i, o) {
                    void 0 === o && (o = Promise);
                    var r = new k(l(t, e, n, i), o);
                    return a.isGeneratorFunction(e) ? r : r.next().then(function (t) {
                        return t.done ? t.value : r.next()
                    })
                }
                ,
                b(w),
                r(w, i, "Generator"),
                w[o] = function () {
                    return this
                }
                ,
                w.toString = function () {
                    return "[object Generator]"
                }
                ,
                a.keys = function (e) {
                    var t, n = [];
                    for (t in e)
                        n.push(t);
                    return n.reverse(),
                        function i() {
                            for (; n.length;) {
                                var t = n.pop();
                                if (t in e)
                                    return i.value = t,
                                        i.done = !1,
                                        i
                            }
                            return i.done = !0,
                                i
                        }
                }
                ,
                a.values = T,
                C.prototype = {
                    "constructor": C,
                    "reset": function (t) {
                        if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = u,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = u,
                            this.tryEntries.forEach(q),
                            !t)
                            for (var e in this)
                                "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = u)
                    },
                    "stop": function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    "dispatchException": function (n) {
                        if (this.done)
                            throw n;
                        var i = this;
                        function t(t, e) {
                            return r.type = "throw",
                                r.arg = n,
                                i.next = t,
                                e && (i.method = "next",
                                    i.arg = u),
                                !!e
                        }
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var o = this.tryEntries[e]
                                , r = o.completion;
                            if ("root" === o.tryLoc)
                                return t("end");
                            if (o.tryLoc <= this.prev) {
                                var a = s.call(o, "catchLoc")
                                    , l = s.call(o, "finallyLoc");
                                if (a && l) {
                                    if (this.prev < o.catchLoc)
                                        return t(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc)
                                        return t(o.finallyLoc)
                                } else if (a) {
                                    if (this.prev < o.catchLoc)
                                        return t(o.catchLoc, !0)
                                } else {
                                    if (!l)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc)
                                        return t(o.finallyLoc)
                                }
                            }
                        }
                    },
                    "abrupt": function (t, e) {
                        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && s.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var r = o ? o.completion : {};
                        return r.type = t,
                            r.arg = e,
                            o ? (this.method = "next",
                                this.next = o.finallyLoc,
                                g) : this.complete(r)
                    },
                    "complete": function (t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === t.type && e && (this.next = e),
                            g
                    },
                    "finish": function (t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                    q(n),
                                    g
                        }
                    },
                    "catch": function (t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i, o = n.completion;
                                return "throw" === o.type && (i = o.arg,
                                    q(n)),
                                    i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    "delegateYield": function (t, e, n) {
                        return this.delegate = {
                            "iterator": T(t),
                            "resultName": e,
                            "nextLoc": n
                        },
                            "next" === this.method && (this.arg = u),
                            g
                    }
                },
                a
        }(t.exports);
        try {
            regeneratorRuntime = i
        } catch (o) {
            Function("r", "regeneratorRuntime = r")(i)
        }
    }
    , function (t, e, r) {
        "use strict";
        r.r(e),
            function (t) {
                var e = r(15)
                    , n = r(3)
                    , i = r(4)
                    , o = function () {
                        if ("undefined" != typeof self)
                            return self;
                        if ("undefined" != typeof window)
                            return window;
                        if (void 0 !== t)
                            return t;
                        throw new Error("unable to locate global object")
                    }();
                "function" != typeof o["Promise"] ? o["Promise"] = e["a"] : o.Promise.prototype["finally"] ? o.Promise.allSettled || (o.Promise.allSettled = i["a"]) : o.Promise.prototype["finally"] = n["a"]
            }
                .call(this, r(1))
    }
    , function (t, o, r) {
        (function (t) {
            var e = void 0 !== t && t || "undefined" != typeof self && self || window
                , n = Function.prototype.apply;
            function i(t, e) {
                this._id = t,
                    this._clearFn = e
            }
            o.setTimeout = function () {
                return new i(n.call(setTimeout, e, arguments), clearTimeout)
            }
                ,
                o.setInterval = function () {
                    return new i(n.call(setInterval, e, arguments), clearInterval)
                }
                ,
                o.clearTimeout = o.clearInterval = function (t) {
                    t && t.close()
                }
                ,
                i.prototype.unref = i.prototype.ref = function () { }
                ,
                i.prototype.close = function () {
                    this._clearFn.call(e, this._id)
                }
                ,
                o.enroll = function (t, e) {
                    clearTimeout(t._idleTimeoutId),
                        t._idleTimeout = e
                }
                ,
                o.unenroll = function (t) {
                    clearTimeout(t._idleTimeoutId),
                        t._idleTimeout = -1
                }
                ,
                o._unrefActive = o.active = function (t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    0 <= e && (t._idleTimeoutId = setTimeout(function () {
                        t._onTimeout && t._onTimeout()
                    }, e))
                }
                ,
                r(22),
                o.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate,
                o.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }
        ).call(this, r(1))
    }
    , function (t, e, n) {
        (function (t, h) {
            !function (n, i) {
                "use strict";
                var o, r, e, a, l, s, u, c, t, d;
                function f(t) {
                    delete r[t]
                }
                function p(t) {
                    if (e)
                        setTimeout(p, 0, t);
                    else {
                        var n = r[t];
                        if (n) {
                            e = !0;
                            try {
                                !function () {
                                    var t = n.callback
                                        , e = n.args;
                                    switch (e.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(e[0]);
                                            break;
                                        case 2:
                                            t(e[0], e[1]);
                                            break;
                                        case 3:
                                            t(e[0], e[1], e[2]);
                                            break;
                                        default:
                                            t.apply(i, e)
                                    }
                                }()
                            } finally {
                                f(t),
                                    e = !1
                            }
                        }
                    }
                }
                n.setImmediate || (o = 1,
                    e = !(r = {}),
                    a = n.document,
                    d = (d = Object.getPrototypeOf && Object.getPrototypeOf(n)) && d.setTimeout ? d : n,
                    l = "[object process]" === {}.toString.call(n.process) ? function (t) {
                        h.nextTick(function () {
                            p(t)
                        })
                    }
                        : function () {
                            if (n.postMessage && !n.importScripts) {
                                var t = !0
                                    , e = n.onmessage;
                                return n.onmessage = function () {
                                    t = !1
                                }
                                    ,
                                    n.postMessage("", "*"),
                                    n.onmessage = e,
                                    t
                            }
                        }() ? (c = "setImmediate$" + Math.random() + "$",
                            t = function (t) {
                                t.source === n && "string" == typeof t.data && 0 === t.data.indexOf(c) && p(+t.data.slice(c.length))
                            }
                            ,
                            n.addEventListener ? n.addEventListener("message", t, !1) : n.attachEvent("onmessage", t),
                            function (t) {
                                n.postMessage(c + t, "*")
                            }
                        ) : n.MessageChannel ? ((u = new MessageChannel).port1.onmessage = function (t) {
                            p(t.data)
                        }
                            ,
                            function (t) {
                                u.port2.postMessage(t)
                            }
                        ) : a && "onreadystatechange" in a.createElement("script") ? (s = a.documentElement,
                            function (t) {
                                var e = a.createElement("script");
                                e.onreadystatechange = function () {
                                    p(t),
                                        e.onreadystatechange = null,
                                        s.removeChild(e),
                                        e = null
                                }
                                    ,
                                    s.appendChild(e)
                            }
                        ) : function (t) {
                            setTimeout(p, 0, t)
                        }
                    ,
                    d.setImmediate = function (t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)
                            e[n] = arguments[n + 1];
                        return t = {
                            "callback": t,
                            "args": e
                        },
                            r[o] = t,
                            l(o),
                            o++
                    }
                    ,
                    d.clearImmediate = f)
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }
        ).call(this, n(1), n(23))
    }
    , function (t, e) {
        var n, i, t = t.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(t) {
            if (n === setTimeout)
                return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout)
                return n = setTimeout,
                    setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }
        !function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                n = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                i = r
            }
        }();
        var l, s = [], u = !1, c = -1;
        function d() {
            u && l && (u = !1,
                l.length ? s = l.concat(s) : c = -1,
                s.length && f())
        }
        function f() {
            if (!u) {
                var t = a(d);
                u = !0;
                for (var e = s.length; e;) {
                    for (l = s,
                        s = []; ++c < e;)
                        l && l[c].run();
                    c = -1,
                        e = s.length
                }
                l = null,
                    u = !1,
                    function (t) {
                        if (i === clearTimeout)
                            return clearTimeout(t);
                        if ((i === r || !i) && clearTimeout)
                            return i = clearTimeout,
                                clearTimeout(t);
                        try {
                            i(t)
                        } catch (e) {
                            try {
                                return i.call(null, t)
                            } catch (e) {
                                return i.call(this, t)
                            }
                        }
                    }(t)
            }
        }
        function p(t, e) {
            this.fun = t,
                this.array = e
        }
        function h() { }
        t.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            s.push(new p(t, e)),
                1 !== s.length || u || a(f)
        }
            ,
            p.prototype.run = function () {
                this.fun.apply(null, this.array)
            }
            ,
            t.title = "browser",
            t.browser = !0,
            t.env = {},
            t.argv = [],
            t.version = "",
            t.versions = {},
            t.on = h,
            t.addListener = h,
            t.once = h,
            t.off = h,
            t.removeListener = h,
            t.removeAllListeners = h,
            t.emit = h,
            t.prependListener = h,
            t.prependOnceListener = h,
            t.listeners = function (t) {
                return []
            }
            ,
            t.binding = function (t) {
                throw new Error("process.binding is not supported")
            }
            ,
            t.cwd = function () {
                return "/"
            }
            ,
            t.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }
            ,
            t.umask = function () {
                return 0
            }
    }
    , function (t, e, n) {
        "use strict";
        t.exports = function (t, e) {
            if (e = e.split(":")[0],
                !(t = +t))
                return !1;
            switch (e) {
                case "http":
                case "ws":
                    return 80 !== t;
                case "https":
                case "wss":
                    return 443 !== t;
                case "ftp":
                    return 21 !== t;
                case "gopher":
                    return 70 !== t;
                case "file":
                    return !1
            }
            return 0 !== t
        }
    }
    , function (t, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty;
        function a(t) {
            try {
                return decodeURIComponent(t.replace(/\+/g, " "))
            } catch (e) {
                return null
            }
        }
        function l(t) {
            try {
                return encodeURIComponent(t)
            } catch (e) {
                return null
            }
        }
        e.stringify = function (t, e) {
            var n, i, o = [];
            for (i in "string" != typeof (e = e || "") && (e = "?"),
                t)
                r.call(t, i) && ((n = t[i]) || null != n && !isNaN(n) || (n = ""),
                    i = l(i),
                    n = l(n),
                    null !== i && null !== n && o.push(i + "=" + n));
            return o.length ? e + o.join("&") : ""
        }
            ,
            e.parse = function (t) {
                for (var e = /([^=?#&]+)=?([^&]*)/g, n = {}; o = e.exec(t);) {
                    var i = a(o[1])
                        , o = a(o[2]);
                    null === i || null === o || i in n || (n[i] = o)
                }
                return n
            }
    }
    , , , , , , , , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.ptui_auth_CB = function (t, e) {
                t = parseInt(t, 10);
                2 === t && "0" != w.ptui.pt_3rd_aid && (t = 0);
                switch (t) {
                    case 0:
                        _["default"].authUin = m["default"].cookie.get("superuin").replace(/^o0*/, ""),
                            _["default"].authSubmitUrl = e,
                            y["default"].buildUnifiedQloginList(),
                            _["default"].isMailLogin && _["default"].switchpage(l.LoginState.QLogin);
                        break;
                    case 1:
                        break;
                    case 2:
                        var n = e + "&regmaster=" + w.ptui.regmaster + "&aid=" + w.ptui.appid + "&s_url=" + encodeURIComponent(w.ptui.s_url);
                        "1" == w.ptui.pt_light && (n += "&pt_light=1"),
                            _["default"].redirect(w.ptui.target, n);
                        break;
                    default:
                        w.preload.init()
                }
            }
            ,
            e.ptui_checkVC = function (t, e, n, i, o, r, a) {
                v.logger.log("ret=".concat(t, ", code=").concat(e, ", salt=").concat(n, ", veryfysession=").concat(i, ", isRandSalt=").concat(o, ", ptdrvs=").concat(r, ", sessionID=").concat(a)),
                    clearTimeout(_["default"].checkClock),
                    _["default"].isRandSalt = o,
                    _["default"].salt = n,
                    _["default"].checkRet = t,
                    _["default"].lastCheckAccount = _["default"].account,
                    _["default"].ptdrvs = r || "",
                    _["default"].sessionID = a || "",
                    "2" == t ? _["default"].loginState == l.LoginState.PLogin && _["default"].show_err(w.str.inv_uin) : "3" == t || _["default"].hasSubmit;
                switch (t + "") {
                    case "0":
                    case "2":
                    case "3":
                        v.logger.info("checkVC pass, ret=".concat(t)),
                            _["default"].hideVC(),
                            "1" == w.ptui.pt_vcode_v1 && (_["default"].needShowNewVc = !1),
                            (0,
                                m["default"])("verifycode").value = e || "abcd",
                            _["default"].needVc = !1,
                            m["default"].report.monitor("330321", .05),
                            e || v.logger.info("check no code return");
                        break;
                    case "1":
                        v.logger.info("need to showVC"),
                            _["default"].cap_cd = e,
                            "1" == w.ptui.pt_vcode_v1 ? _["default"].needShowNewVc = !0 : (_["default"].showVC(),
                                m["default"].css.show((0,
                                    m["default"])("vc_tips"))),
                            _["default"].needVc = !0,
                            m["default"].report.monitor("330320", .05)
                }
                1 == w.ptui.pt_vcode_v1 && 1 == t || (_["default"].pt_verifysession = i);
                _["default"].hasCheck(!0),
                    _["default"].checkTime = (new Date).getTime(),
                    _["default"].check.cb && (_["default"].check.cb(),
                        v.logger.info("cb called"))
            }
            ,
            e.ptuiCB = function (t, e, n, i, o, r) {
                v.logger.log("ret=".concat(t, " extret=").concat(e, " jumpUrl=xxx redirect=").concat(i, ", Mmsg=").concat(o));
                var a = (0,
                    m["default"])("p")
                    , l = n
                    , s = !(!_["default"].at_account || !a.value && !_["default"].armSafeEdit.safepwd)
                    , u = !1;
                function c() {
                    _["default"].is_mibao(l) && (l += "&style=" + w.ptui.style + "&proxy_url=" + encodeURIComponent(w.ptui.proxy_url),
                        l += "#login_href=" + encodeURIComponent(w.ptui.href)),
                        setTimeout(function () {
                            _["default"].redirect(i, l)
                        }, 110)
                }
                clearTimeout(_["default"].loginClock),
                    s && (_["default"].lastCheckAccount = "");
                _["default"].hasSubmit = !0;
                var d = !1;
                switch (_["default"].hasVCSuccess = !1,
                t) {
                    case "0":
                        var f = function f() {
                            s || _["default"].is_mibao(l) || window.clearInterval(_["default"].qrlogin_clock),
                                c()
                        };
                        return v.logger.info("登录成功, 即将跳转, ptui.pt_3rd_aid=".concat(w.ptui.pt_3rd_aid)),
                            void ("0" != w.ptui.pt_3rd_aid ? y["default"].reportPCMgr(_["default"].at_account, 0, 0, f) : f());
                    case "3":
                        (0,
                            m["default"])("p").value = "",
                            _["default"].domFocus((0,
                                m["default"])("p")),
                            _["default"].passwordErrorNum = _["default"].passwordErrorNum + 1,
                            "101" != e && "102" != e && "103" != e || _["default"].showVC(),
                            v.logger.info("密码错误，check，ret=".concat(t)),
                            _["default"].check();
                        break;
                    case "4":
                        v.logger.info("验证码错误，check，ret=".concat(t)),
                            _["default"].check();
                        break;
                    case "12":
                    case "51":
                        v.logger.info("后台策略，check, ret=".concat(t)),
                            _["default"].check(),
                            d = !0;
                        break;
                    case "65":
                        return v.logger.info("二维码失效"),
                            void (0 != _["default"].onekeyVerifyClock ? _["default"].onekeyVerify("invalid") : _["default"].set_qrlogin_invalid());
                    case "66":
                        return;
                    case "67":
                        return v.logger.info("手机端扫码成功，等待确认"),
                            void _["default"].go_qrlogin_step(2);
                    case "22005":
                    case "68":
                        _["default"].onekeyVerify("hide");
                        break;
                    case "98":
                        u = d = !0,
                            _["default"].go_qrlogin_step(1);
                        break;
                    case "10005":
                    case "10006":
                    case "22009":
                        _["default"].force_qrlogin(),
                            _["default"].isNewStyle && y["default"].buildUnifiedQloginList(10006 == t ? 2 : 1),
                            v.logger.info("rsa 失败，check，ret=".concat(t)),
                            _["default"].check();
                        break;
                    case "10008":
                        return void _["default"].onekeyVerify("normal", e, o);
                    case "10010":
                        _["default"].smsIframe.postMessage({
                            "msg": "smsError"
                        });
                        break;
                    case "10009":
                        if (_["default"].showSmsIframe)
                            return;
                        _["default"].showSmsIframe = !0,
                            m["default"].cookie.set("pt_sms_phone", o, w.ptui.domain, "/", 6e4),
                            _["default"].smsCheck = !0;
                        var p = m["default"].url.getParam("appid")
                            , h = m["default"].cookie.get("pt_loginuin") || document.loginform.u.value
                            , g = m["default"].iframe();
                        g.init({
                            "name": "verify",
                            "id": "verify",
                            "parentID": "verify_iframe_mask",
                            "parentStyle": "position:absolute;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,0.1);z-index:9999;",
                            "url": "https://ui.ptlogin2.qq.com/web/verify/iframe?uin=" + h + "&appid=" + p,
                            "iframeStyle": "width:290px;height:244px;margin: 0 auto;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);border: none;",
                            "smsSubmitEvent": _["default"].onSmsSubmit
                        }),
                            _["default"].smsIframe = g;
                        break;
                    default:
                        _["default"].needVc && !_["default"].needShowNewVc ? _["default"].changeVC() : (v.logger.log("走到switch的default, check, ret=".concat(t)),
                            _["default"].check())
                }
                0 != t && (s || u) && _["default"].show_err(o, d);
                !_["default"].hasCheck() && s && "1" != w.ptui.pt_vcode_v1 && (_["default"].showVC(),
                    (0,
                        m["default"])("verifycode").focus(),
                    (0,
                        m["default"])("verifycode").select());
                "0" != w.ptui.pt_3rd_aid && y["default"].reportPCMgr(_["default"].at_account, 0, 1)
            }
            ;
        var m = i(n(0))
            , _ = i(n(14))
            , y = i(n(17))
            , l = n(18)
            , v = n(2);
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var w = window.pt
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.pt_qqprotect_version = v,
            e.pt_request_guid_callback = h,
            e.ptui_action_result_CB = y,
            e.ptui_fetch_dev_uin_CB = function (t) {
                if (!t || 22028 != t.errcode)
                    return;
                for (var e = t.data, n = [], i = 0; i < e.length; i++) {
                    var o = e[i];
                    n.push({
                        "uin": o,
                        "name": a["default"].str.utf8ToUincode(a["default"].cookie.get("ptnick_" + o)) || o,
                        "uinString": o,
                        "type": 0,
                        "nick": a["default"].str.utf8ToUincode(a["default"].cookie.get("ptnick_" + o)) || o,
                        "flag": 0,
                        "loginType": l["default"].OneKeyPush
                    })
                }
                l["default"].setOneKeyList(n),
                    n.length ? l["default"].buildUnifiedQloginList() : u.logger.info("OneKeyList.length===0, 不用重建快速登录列表");
                e.length && r["default"].isMailLogin && r["default"].switchpage(s.LoginState.QLogin)
            }
            ,
            e.ptui_getst_CB = p,
            e.ptui_getuins_CB = f,
            e.ptui_pc_querystatus_CB = g,
            e.ptui_qlogin_CB = d,
            e.ptui_qqprotect_querystatus_CB = m,
            e.ptui_qqprotect_result_CB = _,
            e.ptui_qrcode_CB = function (t) {
                switch (u.logger.log("resp.ec=".concat(t.ec, " resp.em=").concat(t.em)),
                r["default"].hideLoading(),
                clearTimeout(l["default"].__onekeyClock),
                t && parseInt(t.ec, 10)) {
                    case 0:
                        r["default"].go_onekey_step(2),
                            r["default"].cancle_qrlogin(),
                            l["default"].__onekeyFirst || r["default"].show_err(t.em),
                            r["default"].qrlogin_clock = window.setInterval("pt.plogin.qrlogin_submit();", 3e3),
                            u.logger.info("已完成手机端消息推送，启动后台轮询授权登录状态");
                        break;
                    case 313:
                        r["default"].go_onekey_step(1),
                            t && r["default"].show_err(t.em),
                            l["default"].fetchOnekeyList();
                        break;
                    default:
                        t && r["default"].show_err(t.em)
                }
            }
            ,
            e.setHeader = function (t) {
                for (var e in t)
                    i.headerCache[e] = t[e],
                        "" != e && i.headerCache.update(e)
            }
            ;
        var r = o(n(14))
            , a = o(n(0))
            , l = o(n(17))
            , s = n(18)
            , i = n(35)
            , u = n(2);
        function o(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var c = window.pt;
        function d(t, e, n) {
            switch (window.clearTimeout(l["default"].__getstClock),
            d.called = !0,
            t) {
                case "0":
                    var i = function i() {
                        r["default"].redirect(c.ptui.target, e)
                    };
                    return void ("0" != c.ptui.pt_3rd_aid ? l["default"].reportPCMgr(r["default"].at_account, 0, 0, i) : i());
                case "10006":
                    r["default"].force_qrlogin(),
                        r["default"].show_err(n, !0);
                    break;
                default:
                    r["default"].switchpage(s.LoginState.PLogin),
                        r["default"].show_err(n, !0)
            }
            "0" != c.ptui.pt_3rd_aid && l["default"].reportPCMgr(r["default"].at_account, 0, 1)
        }
        function f(t) {
            u.logger.info("ptui_getuins_CB, uinlist.length=".concat(t.length));
            var e = r["default"].getLoginParams("jumpuin");
            if (f.called = !0,
                t || e) {
                if (r["default"].hide_err(),
                    e && t) {
                    for (var n = 0; n < t.length; ++n)
                        if (e == t[n].uin) {
                            l["default"].pcsvrQloginSubmit(e),
                                l["default"].reportPath(e, 1);
                            break
                        }
                    n === t.length && (window.location.href = l["default"].getSurl())
                }
                for (var i = [], n = 0; n < t.length; n++) {
                    var o = t[n];
                    i.push({
                        "uin": o.uin,
                        "name": o.account,
                        "uinString": o.uin,
                        "type": 0,
                        "face": o.face_index,
                        "nick": o.nickname,
                        "flag": o.uin_flag,
                        "loginType": l["default"].PCSvrQlogin
                    })
                }
                l["default"].setPCSvrQloginList(i),
                    i.length && l["default"].buildUnifiedQloginList(),
                    t.length && r["default"].isMailLogin && r["default"].switchpage(s.LoginState.QLogin),
                    a["default"].report.monitor(508158, 1),
                    navigator.userAgent.match(/\bmac\b/i) && a["default"].report.monitor(2423545, 1),
                    window.localStorage && localStorage.setItem("newQQ", !0)
            } else
                u.logger.info("uinlist.length===0 && jumpuin is null")
        }
        function p(t) {
            var e;
            p.called = !0,
                t && (r["default"].hideLoading(),
                    p.submitUrl && (e = p.submitUrl.replace("{{hash_clientkey}}", a["default"].str.hash33(a["default"].cookie.get("clientkey"))),
                        t.keyindex && (e = e.replace(/keyindex=\d+/, "keyindex=" + t.keyindex),
                            a["default"].report.monitor(2423538, 1)),
                        l["default"].reportPCMgr(t.uin, 2),
                        a["default"].http.loadScript(e)),
                    a["default"].report.monitor(508159, 1))
        }
        function h(t) {
            if (h.called = !0,
                !(t && Object.prototype.hasOwnProperty.call(t, "ret") && 1 == t.ret && Object.prototype.hasOwnProperty.call(t, "data") && Object.prototype.hasOwnProperty.call(t, "serverdata") && Object.prototype.hasOwnProperty.call(t, "status") && Object.prototype.hasOwnProperty.call(t, "session")))
                return l["default"].fetchOnekeyListByGUID(),
                    a["default"].report.nlog("pt_request_guid_callback result:" + a["default"].str.json2str(t), 2732842),
                    0;
            switch (parseInt(t.data.serverdata.status, 10)) {
                case 1:
                    Object.prototype.hasOwnProperty.call(t.data.serverdata, "guidsig") ? (l["default"].fetchOnekeyListByGUID(t.data.serverdata.guidsig),
                        l["default"].QQProtectGUID = t.data.serverdata.guidsig,
                        a["default"].report.monitor(2732843)) : (a["default"].report.nlog("pt_request_guid_callback result:" + a["default"].str.json2str(t), 2732842),
                            l["default"].fetchOnekeyListByGUID());
                    break;
                case 2:
                    l["default"].QQProtectSession = t.session,
                        l["default"].callQQProtect({
                            "service": 103,
                            "action": 2,
                            "callbackName": "pt_request_guid_callback",
                            "timeoutCallback": function () {
                                l["default"].fetchOnekeyListByGUID(),
                                    a["default"].report.monitor(2751524)
                            }
                        });
                    break;
                default:
                    l["default"].fetchOnekeyListByGUID(),
                        a["default"].report.nlog("pt_request_guid_callback result:" + a["default"].str.json2str(t), 2732842)
            }
        }
        function g(t) {
            g.called = !0,
                t && (l["default"].PCMgrSession = t.actionString,
                    l["default"].processPCMgrStatus(t.qqpcstatus, t.wording, t.bautoCheck))
        }
        function m(t) {
            m.called = !0,
                t && Object.prototype.hasOwnProperty.call(t, "ret") && 1 == t.ret && Object.prototype.hasOwnProperty.call(t, "data") && (l["default"].PCMgrSession || (l["default"].PCMgrSession2 = t.data.actionstring,
                    l["default"].processPCMgrStatus(t.data.qqpcstatus, t.data.wording, t.data.bautoCheck)))
        }
        function _() {
            _.called = !0
        }
        function y() {
            y.called = !0
        }
        function v() {
            v.called = !0,
                l["default"].callQQProtect({
                    "service": 103,
                    "action": 1,
                    "callbackName": "pt_request_guid_callback",
                    "timeoutCallback": function () {
                        l["default"].fetchOnekeyListByGUID(),
                            a["default"].report.monitor(2751523)
                    }
                })
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.headerCache = void 0;
        var i = r(n(0))
            , o = r(n(14));
        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var a = {
            "update": function (t) {
                var e = (0,
                    i["default"])("img_" + t);
                e ? a[t] && -1 < a[t].indexOf("sys.getface.qq.com") ? e.src = o["default"].dftImg : e.src = a[t] || o["default"].dftImg : a[t] && -1 < a[t].indexOf("sys.getface.qq.com") ? (0,
                    i["default"])("auth_face").src = o["default"].dftImg : (0,
                        i["default"])("auth_face").src = a[t] || o["default"].dftImg
            }
        };
        e.headerCache = a
    }
    , , , , , , , , , , , , , function (t, e, n) {
        n(6),
            n(49),
            n(50),
            n(7),
            n(51),
            n(19),
            n(20),
            t.exports = n(52)
    }
    , function (t, e, n) {
        "use strict";
        Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
            var n, i;
            if (null == this)
                throw new TypeError(" this is null or not defined");
            var o, r = Object(this), a = r.length >>> 0;
            if ("function" != typeof t)
                throw new TypeError(t + " is not a function");
            for (1 < arguments.length && (n = e),
                i = 0; i < a;)
                i in r && (o = r[i],
                    t.call(n, o, i, r)),
                    i++
        }
        )
    }
    , function (t, e, n) {
        "use strict";
        "function" != typeof Object.create && (Object.create = function (t, e) {
            if ("object" != typeof t && "function" != typeof t)
                throw new TypeError("Object prototype may only be an Object: " + t);
            if (null === t)
                throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
            if (void 0 !== e)
                throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
            function n() { }
            return n.prototype = t,
                new n
        }
        )
    }
    , function (module, exports, __webpack_require__) {
        "use strict";
        "object" != typeof JSON && (JSON = {}),
            function () {
                var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep;
                function f(t) {
                    return t < 10 ? "0" + t : t
                }
                function this_value() {
                    return this.valueOf()
                }
                function quote(t) {
                    return rx_escapable.lastIndex = 0,
                        rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) {
                            var e = meta[t];
                            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + t + '"'
                }
                function str(t, e) {
                    var n, i, o, r, a, l = gap, s = e[t];
                    switch (s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(t)),
                    "function" == typeof rep && (s = rep.call(e, t, s)),
                    typeof s) {
                        case "string":
                            return quote(s);
                        case "number":
                            return isFinite(s) ? String(s) : "null";
                        case "boolean":
                        case "null":
                            return String(s);
                        case "object":
                            if (!s)
                                return "null";
                            if (gap += indent,
                                a = [],
                                "[object Array]" === Object.prototype.toString.apply(s)) {
                                for (r = s.length,
                                    n = 0; n < r; n += 1)
                                    a[n] = str(n, s) || "null";
                                return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + l + "]" : "[" + a.join(",") + "]",
                                    gap = l,
                                    o
                            }
                            if (rep && "object" == typeof rep)
                                for (r = rep.length,
                                    n = 0; n < r; n += 1)
                                    "string" == typeof rep[n] && (o = str(i = rep[n], s)) && a.push(quote(i) + (gap ? ": " : ":") + o);
                            else
                                for (i in s)
                                    Object.prototype.hasOwnProperty.call(s, i) && (o = str(i, s)) && a.push(quote(i) + (gap ? ": " : ":") + o);
                            return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + l + "}" : "{" + a.join(",") + "}",
                                gap = l,
                                o
                    }
                }
                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                }
                    ,
                    Boolean.prototype.toJSON = this_value,
                    Number.prototype.toJSON = this_value,
                    String.prototype.toJSON = this_value),
                    "function" != typeof JSON.stringify && (meta = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                        JSON.stringify = function (t, e, n) {
                            var i;
                            if (indent = gap = "",
                                "number" == typeof n)
                                for (i = 0; i < n; i += 1)
                                    indent += " ";
                            else
                                "string" == typeof n && (indent = n);
                            if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                                throw new Error("JSON.stringify");
                            return str("", {
                                "": t
                            })
                        }
                    ),
                    "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                        var j;
                        function walk(t, e) {
                            var n, i, o = t[e];
                            if (o && "object" == typeof o)
                                for (n in o)
                                    Object.prototype.hasOwnProperty.call(o, n) && ((i = walk(o, n)) !== undefined ? o[n] = i : delete o[n]);
                            return reviver.call(t, e, o)
                        }
                        if (text = String(text),
                            rx_dangerous.lastIndex = 0,
                            rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) {
                                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                            })),
                            rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                            return j = eval("(" + text + ")"),
                                "function" == typeof reviver ? walk({
                                    "": j
                                }, "") : j;
                        throw new SyntaxError("JSON.parse")
                    }
                    )
            }()
    }
    , function (t, e, n) {
        "use strict";
        var i = l(n(17))
            , o = l(n(14))
            , r = n(34)
            , a = n(33);
        function l(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        window.c_login_2_inited || (window.pt = window.pt || {},
            window.ptui_auth_CB = a.ptui_auth_CB,
            window.ptui_checkVC = a.ptui_checkVC,
            window.ptuiCB = a.ptuiCB,
            window.pt_qqprotect_version = r.pt_qqprotect_version,
            window.pt_request_guid_callback = r.pt_request_guid_callback,
            window.ptui_action_result_CB = r.ptui_action_result_CB,
            window.ptui_fetch_dev_uin_CB = r.ptui_fetch_dev_uin_CB,
            window.ptui_getst_CB = r.ptui_getst_CB,
            window.ptui_getuins_CB = r.ptui_getuins_CB,
            window.ptui_pc_querystatus_CB = r.ptui_pc_querystatus_CB,
            window.ptui_qlogin_CB = r.ptui_qlogin_CB,
            window.ptui_qqprotect_querystatus_CB = r.ptui_qqprotect_querystatus_CB,
            window.ptui_qqprotect_result_CB = r.ptui_qqprotect_result_CB,
            window.ptui_qrcode_CB = r.ptui_qrcode_CB,
            window.pt.setHeader = r.setHeader,
            window.pt.qlogin = i["default"],
            window.pt.plogin = o["default"],
            o["default"].auth(),
            o["default"].init(),
            window.c_login_2_inited = !0)
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.isInPage = void 0;
        var i = n(2);
        var o = function o(t) {
            if (document.body) {
                if (t === document.body)
                    return !1;
                if (e = t,
                    !("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName))
                    return i.logger.info("node 不是一个HTMLElement"),
                        !1;
                var e;
                if (document.body.contains) {
                    t = document.body.contains(t);
                    return i.logger.info("isContain:", t),
                        t
                }
                return !1
            }
            i.logger.warn("document.body 不存在，忽略")
        };
        e.isInPage = o
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.get = e.request = void 0;
        var l = i(n(55))
            , s = n(8)
            , u = i(n(10));
        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var o = function (t, e, l, s) {
            return new (l = l || Promise)(function (n, i) {
                function o(t) {
                    try {
                        a(s.next(t))
                    } catch (e) {
                        i(e)
                    }
                }
                function r(t) {
                    try {
                        a(s["throw"](t))
                    } catch (e) {
                        i(e)
                    }
                }
                function a(t) {
                    var e;
                    t.done ? n(t.value) : ((e = t.value) instanceof l ? e : new l(function (t) {
                        t(e)
                    }
                    )).then(o, r)
                }
                a((s = s.apply(t, e || [])).next())
            }
            )
        }
            , r = function (n, i) {
                var o, r, a, l = {
                    "label": 0,
                    "sent": function () {
                        if (1 & a[0])
                            throw a[1];
                        return a[1]
                    },
                    "trys": [],
                    "ops": []
                }, t = {
                    "next": e(0),
                    "throw": e(1),
                    "return": e(2)
                };
                return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
                    return this
                }
                ),
                    t;
                function e(e) {
                    return function (t) {
                        return s([e, t])
                    }
                }
                function s(t) {
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; l;)
                        try {
                            if (o = 1,
                                r && (a = 2 & t[0] ? r["return"] : t[0] ? r["throw"] || ((a = r["return"]) && a.call(r),
                                    0) : r.next) && !(a = a.call(r, t[1])).done)
                                return a;
                            switch (r = 0,
                            a && (t = [2 & t[0], a.value]),
                            t[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return l.label++,
                                    {
                                        "value": t[1],
                                        "done": !1
                                    };
                                case 5:
                                    l.label++,
                                        r = t[1],
                                        t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(),
                                        l.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < a[1]) {
                                        l.label = a[1],
                                            a = t;
                                        break
                                    }
                                    if (a && l.label < a[2]) {
                                        l.label = a[2],
                                            l.ops.push(t);
                                        break
                                    }
                                    a[2] && l.ops.pop(),
                                        l.trys.pop();
                                    continue
                            }
                            t = i.call(n, l)
                        } catch (e) {
                            t = [6, e],
                                r = 0
                        } finally {
                            o = a = 0
                        }
                    if (5 & t[0])
                        throw t[1];
                    return {
                        "value": t[0] ? t[1] : void 0,
                        "done": !0
                    }
                }
            }
            , c = function c() {
                return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
            }
            , a = 200
            , d = 304
            , f = 1223
            , p = 0
            , h = function h(t) {
                return t === a || t === d || t === f || t === p
            }
            , g = function g(a) {
                return o(this, void 0, void 0, function () {
                    return r(this, function (t) {
                        return [2, new Promise(function (n, i) {
                            var o = c()
                                , r = (new Date).getTime();
                            o.open(a.method, a.url),
                                o.onreadystatechange = function () {
                                    if (4 === o.readyState) {
                                        var t = (new Date).getTime();
                                        if (!h(o.status))
                                            return i({
                                                "msg": "服务器返回了一个错误 " + o.status,
                                                "xhr": o
                                            }),
                                                void (0,
                                                    s.report007)({
                                                        "app": "ptlogin",
                                                        "cgi": "/common_monitor" + (0,
                                                            u["default"])(a.url).pathname,
                                                        "type": 1,
                                                        "httpcode": o.status,
                                                        "retcode": s.RET_CODE.MEANINGLESS,
                                                        "cost": t - r
                                                    });
                                        if ("json" === a.dataType)
                                            try {
                                                n({
                                                    "data": JSON.parse(o.responseText),
                                                    "xhr": o,
                                                    "msg": "成功"
                                                }),
                                                    (0,
                                                        s.report007)({
                                                            "app": "ptlogin",
                                                            "cgi": "/common_monitor" + (0,
                                                                u["default"])(a.url).pathname,
                                                            "type": 0,
                                                            "httpcode": o.status,
                                                            "retcode": s.RET_CODE.MEANINGLESS,
                                                            "cost": t - r
                                                        })
                                            } catch (e) {
                                                i({
                                                    "msg": "解析JSON时发生错误",
                                                    "xhr": o
                                                }),
                                                    (0,
                                                        s.report007)({
                                                            "app": "ptlogin",
                                                            "cgi": "/common_monitor" + (0,
                                                                u["default"])(a.url).pathname,
                                                            "type": 1,
                                                            "httpcode": o.status,
                                                            "retcode": s.RET_CODE.JSON_PARSE_ERROR,
                                                            "cost": t - r
                                                        })
                                            }
                                        else
                                            n({
                                                "xhr": o,
                                                "data": o.responseText,
                                                "msg": "成功"
                                            }),
                                                o.responseText ? (0,
                                                    s.report007)({
                                                        "app": "ptlogin",
                                                        "cgi": "/common_monitor" + (0,
                                                            u["default"])(a.url).pathname,
                                                        "type": 0,
                                                        "httpcode": o.status,
                                                        "retcode": s.RET_CODE.MEANINGLESS,
                                                        "cost": t - r
                                                    }) : (0,
                                                        s.report007)({
                                                            "app": "ptlogin",
                                                            "cgi": "/common_monitor" + (0,
                                                                u["default"])(a.url).pathname,
                                                            "type": 1,
                                                            "httpcode": o.status,
                                                            "retcode": s.RET_CODE.EMPTY_RESPONSE_BODY,
                                                            "cost": t - r
                                                        })
                                    }
                                }
                                ;
                            var t = null;
                            "POST" === a.method && a.data && (t = l["default"].stringify(a.data)),
                                o.send(t)
                        }
                        )]
                    })
                })
            };
        e.request = g;
        var m = function m(e, n, i) {
            return o(this, void 0, void 0, function () {
                return r(this, function (t) {
                    return [2, g({
                        "url": n ? e + (e.includes("?") ? "&" : "?") + l["default"].stringify(n) : e,
                        "method": "GET",
                        "dataType": (null == i ? void 0 : i.dataType) || "text"
                    })]
                })
            })
        };
        e.get = m
    }
    , function (t, e, n) {
        "use strict";
        e.decode = e.parse = n(56),
            e.encode = e.stringify = n(57)
    }
    , function (t, e, n) {
        "use strict";
        t.exports = function (t, e, n, i) {
            e = e || "&",
                n = n || "=";
            var o = {};
            if ("string" != typeof t || 0 === t.length)
                return o;
            var r = /\+/g;
            t = t.split(e);
            e = 1e3;
            i && "number" == typeof i.maxKeys && (e = i.maxKeys);
            var a = t.length;
            0 < e && e < a && (a = e);
            for (var l = 0; l < a; ++l) {
                var s, u = t[l].replace(r, "%20"), c = u.indexOf(n), d = 0 <= c ? (s = u.substr(0, c),
                    u.substr(c + 1)) : (s = u,
                        ""), f = decodeURIComponent(s), c = decodeURIComponent(d);
                u = o,
                    d = f,
                    Object.prototype.hasOwnProperty.call(u, d) ? p(o[f]) ? o[f].push(c) : o[f] = [o[f], c] : o[f] = c
            }
            return o
        }
            ;
        var p = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    }
    , function (t, e, n) {
        "use strict";
        var r = function (t) {
            switch (typeof t) {
                case "string":
                    return t;
                case "boolean":
                    return t ? "true" : "false";
                case "number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
            }
        };
        t.exports = function (n, i, o, t) {
            return i = i || "&",
                o = o || "=",
                null === n && (n = undefined),
                "object" == typeof n ? l(s(n), function (t) {
                    var e = encodeURIComponent(r(t)) + o;
                    return a(n[t]) ? l(n[t], function (t) {
                        return e + encodeURIComponent(r(t))
                    }).join(i) : e + encodeURIComponent(r(n[t]))
                }).join(i) : t ? encodeURIComponent(r(t)) + o + encodeURIComponent(r(n)) : ""
        }
            ;
        var a = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
            ;
        function l(t, e) {
            if (t.map)
                return t.map(e);
            for (var n = [], i = 0; i < t.length; i++)
                n.push(e(t[i], i));
            return n
        }
        var s = Object.keys || function (t) {
            var e, n = [];
            for (e in t)
                Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
            return n
        }
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.ToggleManager = void 0;
        var i = (o.prototype.featureEnable = function (t) {
            return !(t !== this.FEATURE_KEYS.QR_LOGIN_XHR || !this.uid || this.uid.slice(-1) !== this.DEFAULT_SUFFIX)
        }
            ,
            o);
        function o(t, e) {
            this.DEFAULT_SUFFIX = "2",
                this.FEATURE_KEYS = {
                    "QR_LOGIN_XHR": "QR_LOGIN_XHR"
                },
                this.uid = t,
                this.userAgent = e
        }
        e.ToggleManager = i
    }
    , function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            "value": !0
        }),
            e.jsonp = function (t, e) {
                var i, o, r, n = e.prefix || "__jp", a = e.param || "callback", l = e.timeout || 15e3, s = document.getElementsByTagName("script")[0] || document.head, u = n + d++;
                console.log("jsonp url=" + t + " timeout=" + l);
                var c = function c() {
                    i && i.parentNode && i.parentNode.removeChild(i),
                        window[u] = f,
                        o && clearTimeout(o)
                };
                return {
                    "promise": new Promise(function (n, e) {
                        l && (o = window.setTimeout(function () {
                            console.log("url " + t + " timeout"),
                                c(),
                                e(new Error("Timeout"))
                        }, l)),
                            window[u] = function () {
                                for (var t = [], e = 0; e < arguments.length; e++)
                                    t[e] = arguments[e];
                                c(),
                                    1 === t.length && "object" == typeof t[0] ? n(t[0]) : n(t)
                            }
                            ,
                            t = (t += (~t.indexOf("?") ? "&" : "?") + a + "=" + encodeURIComponent(u)).replace("?&", "?"),
                            (i = document.createElement("script")).src = t,
                            i.onerror = function (t) {
                                this.onerror = null,
                                    console.log("script onerror", t),
                                    window[u] && (c(),
                                        e(new Error("Error")))
                            }
                            ,
                            s.parentNode.insertBefore(i, s),
                            r = function r() {
                                window[u] && (c(),
                                    e(new Error("Canceled")))
                            }
                    }
                    ),
                    "cancel": r
                }
            }
            ;
        var d = 0;
        function f() { }
    }
]

function n(t) {
    var i = {}
    if (i[t])
        return i[t].exports;
    var e = i[t] = {
        "i": t,
        "l": !1,
        "exports": {}
    };
    return f[t].call(e.exports, e, e.exports, n),
    e.l = !0,
    e.exports
}

function enc(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        "value": !0
    }),
        e["default"] = void 0;
    var a = i(n(12))
        , l = i(n(13))
        , s = i(n(5));
    function i(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    var o, r, d, n = (
        o = 1,
        r = 8,
        d = 32,
        {
            "getEncryption": function (t, e, n, i) {
                n = n || "",
                    t = t || "";
                for (var i = i ? t : u(t), t = u(w(i) + e), n = l["default"].strToBytes(n.toUpperCase(), !0), o = Number(n.length / 2).toString(16); o.length < 4;)
                    o = "0" + o;
                l["default"].initkey(t),
                    n = l["default"].encrypt(i + l["default"].strToBytes(e) + o + n),
                    l["default"].initkey("");
                for (var r = Number(n.length / 2).toString(16); r.length < 4;)
                    r = "0" + r;
                return n = a["default"].rsa_encrypt(w(r + n)),
                    setTimeout(function () {
                        !function (t, e) {
                            if (!(Math.random() > (e || 1)))
                                try {
                                    var n = location.protocol + "//ui.ptlogin2.qq.com/cgi-bin/report?id=" + t;
                                    document.createElement("img").src = n
                                } catch (i) { }
                        }(488358, 1)
                    }, 0),
                    s["default"].encode(w(n)).replace(/[\/\+=]/g, function (t) {
                        return {
                            "/": "-",
                            "+": "*",
                            "=": "_"
                        }[t]
                    })
            },
            "getRSAEncryption": function (t, e, n) {
                return e = (n ? t : u(t)) + e.toUpperCase(),
                    a["default"].rsa_encrypt(e)
            },
            "md5": u
        }
    );
    function u(t) {
        return v(c(y(t = t), t.length * r))
    }
    function c(t, e) {
        t[e >> 5] |= 128 << e % 32,
            t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var n = 1732584193, i = -271733879, o = -1732584194, r = 271733878, a = 0; a < t.length; a += 16) {
            var l = n
                , s = i
                , u = o
                , c = r
                , n = p(n, i, o, r, t[a + 0], 7, -680876936)
                , r = p(r, n, i, o, t[a + 1], 12, -389564586)
                , o = p(o, r, n, i, t[a + 2], 17, 606105819)
                , i = p(i, o, r, n, t[a + 3], 22, -1044525330);
            n = p(n, i, o, r, t[a + 4], 7, -176418897),
                r = p(r, n, i, o, t[a + 5], 12, 1200080426),
                o = p(o, r, n, i, t[a + 6], 17, -1473231341),
                i = p(i, o, r, n, t[a + 7], 22, -45705983),
                n = p(n, i, o, r, t[a + 8], 7, 1770035416),
                r = p(r, n, i, o, t[a + 9], 12, -1958414417),
                o = p(o, r, n, i, t[a + 10], 17, -42063),
                i = p(i, o, r, n, t[a + 11], 22, -1990404162),
                n = p(n, i, o, r, t[a + 12], 7, 1804603682),
                r = p(r, n, i, o, t[a + 13], 12, -40341101),
                o = p(o, r, n, i, t[a + 14], 17, -1502002290),
                n = h(n, i = p(i, o, r, n, t[a + 15], 22, 1236535329), o, r, t[a + 1], 5, -165796510),
                r = h(r, n, i, o, t[a + 6], 9, -1069501632),
                o = h(o, r, n, i, t[a + 11], 14, 643717713),
                i = h(i, o, r, n, t[a + 0], 20, -373897302),
                n = h(n, i, o, r, t[a + 5], 5, -701558691),
                r = h(r, n, i, o, t[a + 10], 9, 38016083),
                o = h(o, r, n, i, t[a + 15], 14, -660478335),
                i = h(i, o, r, n, t[a + 4], 20, -405537848),
                n = h(n, i, o, r, t[a + 9], 5, 568446438),
                r = h(r, n, i, o, t[a + 14], 9, -1019803690),
                o = h(o, r, n, i, t[a + 3], 14, -187363961),
                i = h(i, o, r, n, t[a + 8], 20, 1163531501),
                n = h(n, i, o, r, t[a + 13], 5, -1444681467),
                r = h(r, n, i, o, t[a + 2], 9, -51403784),
                o = h(o, r, n, i, t[a + 7], 14, 1735328473),
                n = g(n, i = h(i, o, r, n, t[a + 12], 20, -1926607734), o, r, t[a + 5], 4, -378558),
                r = g(r, n, i, o, t[a + 8], 11, -2022574463),
                o = g(o, r, n, i, t[a + 11], 16, 1839030562),
                i = g(i, o, r, n, t[a + 14], 23, -35309556),
                n = g(n, i, o, r, t[a + 1], 4, -1530992060),
                r = g(r, n, i, o, t[a + 4], 11, 1272893353),
                o = g(o, r, n, i, t[a + 7], 16, -155497632),
                i = g(i, o, r, n, t[a + 10], 23, -1094730640),
                n = g(n, i, o, r, t[a + 13], 4, 681279174),
                r = g(r, n, i, o, t[a + 0], 11, -358537222),
                o = g(o, r, n, i, t[a + 3], 16, -722521979),
                i = g(i, o, r, n, t[a + 6], 23, 76029189),
                n = g(n, i, o, r, t[a + 9], 4, -640364487),
                r = g(r, n, i, o, t[a + 12], 11, -421815835),
                o = g(o, r, n, i, t[a + 15], 16, 530742520),
                n = m(n, i = g(i, o, r, n, t[a + 2], 23, -995338651), o, r, t[a + 0], 6, -198630844),
                r = m(r, n, i, o, t[a + 7], 10, 1126891415),
                o = m(o, r, n, i, t[a + 14], 15, -1416354905),
                i = m(i, o, r, n, t[a + 5], 21, -57434055),
                n = m(n, i, o, r, t[a + 12], 6, 1700485571),
                r = m(r, n, i, o, t[a + 3], 10, -1894986606),
                o = m(o, r, n, i, t[a + 10], 15, -1051523),
                i = m(i, o, r, n, t[a + 1], 21, -2054922799),
                n = m(n, i, o, r, t[a + 8], 6, 1873313359),
                r = m(r, n, i, o, t[a + 15], 10, -30611744),
                o = m(o, r, n, i, t[a + 6], 15, -1560198380),
                i = m(i, o, r, n, t[a + 13], 21, 1309151649),
                n = m(n, i, o, r, t[a + 4], 6, -145523070),
                r = m(r, n, i, o, t[a + 11], 10, -1120210379),
                o = m(o, r, n, i, t[a + 2], 15, 718787259),
                i = m(i, o, r, n, t[a + 9], 21, -343485551),
                n = _(n, l),
                i = _(i, s),
                o = _(o, u),
                r = _(r, c)
        }
        return 16 == d ? Array(i, o) : Array(n, i, o, r)
    }
    function f(t, e, n, i, o, r) {
        return _((r = _(_(e, t), _(i, r))) << (o = o) | r >>> 32 - o, n)
    }
    function p(t, e, n, i, o, r, a) {
        return f(e & n | ~e & i, t, e, o, r, a)
    }
    function h(t, e, n, i, o, r, a) {
        return f(e & i | n & ~i, t, e, o, r, a)
    }
    function g(t, e, n, i, o, r, a) {
        return f(e ^ n ^ i, t, e, o, r, a)
    }
    function m(t, e, n, i, o, r, a) {
        return f(n ^ (e | ~i), t, e, o, r, a)
    }
    function _(t, e) {
        var n = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function y(t) {
        for (var e = Array(), n = (1 << r) - 1, i = 0; i < t.length * r; i += r)
            e[i >> 5] |= (t.charCodeAt(i / r) & n) << i % 32;
        return e
    }
    function v(t) {
        for (var e = o ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < 4 * t.length; i++)
            n += e.charAt(t[i >> 2] >> i % 4 * 8 + 4 & 15) + e.charAt(t[i >> 2] >> i % 4 * 8 & 15);
        return n
    }
    function w(t) {
        for (var e = [], n = 0; n < t.length; n += 2)
            e.push(String.fromCharCode(parseInt(t.substr(n, 2), 16)));
        return e.join("")
    }
    e["default"] = n
}

k = n(0)
T = n(14)

e = {}
enc(undefined, e, n)

username = "821346679"
pwd = "123456"

console.log(e.default.getEncryption(pwd, k.default.str.uin2hex(username), '!7X5', undefined));

/**
 * i.qq.com 登录加密参数 p 的算法
 * 
 * 和头条差不多
 * 函数执行时加载一个大的数组, 然后各种 exports
 * 通过密码, 用户名加盐, 验证码(网页取), 加密生成
 */