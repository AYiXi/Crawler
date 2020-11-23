let md5 = require('js-md5')

var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
var _p = "W5D80NFZHAYB8EUI2T649RT2MNRMVE2O"
function e1(e) {
    if (null == e)
        return null;
    for (var t, n, r, o, i, a, u, c = "", s = 0; s < e.length;)
        o = (t = e.charCodeAt(s++)) >> 2,
            i = (3 & t) << 4 | (n = e.charCodeAt(s++)) >> 4,
            a = (15 & n) << 2 | (r = e.charCodeAt(s++)) >> 6,
            u = 63 & r,
            isNaN(n) ? a = u = 64 : isNaN(r) && (u = 64),
            c = c + _keyStr.charAt(o) + _keyStr.charAt(i) + _keyStr.charAt(a) + _keyStr.charAt(u);
    return c
}
function e2(e) {
    if (null == (e = _u_e(e)))
        return null;
    for (var t = "", n = 0; n < e.length; n++) {
        var r = _p.charCodeAt(n % _p.length);
        t += String.fromCharCode(e.charCodeAt(n) ^ r)
    }
    return t
}
function sig(e) {
    return md5(e + _p).toUpperCase()
}
function d1(e) {
    var t, n, r, o, i, a, u = "", c = 0;
    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length;)
        t = _keyStr.indexOf(e.charAt(c++)) << 2 | (o = _keyStr.indexOf(e.charAt(c++))) >> 4,
            n = (15 & o) << 4 | (i = _keyStr.indexOf(e.charAt(c++))) >> 2,
            r = (3 & i) << 6 | (a = _keyStr.indexOf(e.charAt(c++))),
            u += String.fromCharCode(t),
            64 != i && (u += String.fromCharCode(n)),
            64 != a && (u += String.fromCharCode(r));
    return u
}
function _u_e(e) {
    if (null == e)
        return null;
    e = e.replace(/\r\n/g, "\n");
    for (var t = "", n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
            t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
                t += String.fromCharCode(r >> 6 & 63 | 128),
                t += String.fromCharCode(63 & r | 128))
    }
    return t
}
function _u_d(e) {
    for (var t = "", n = 0, r = 0, o = 0, i = 0; n < e.length;)
        (r = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(r),
            n++) : r > 191 && r < 224 ? (o = e.charCodeAt(n + 1),
                t += String.fromCharCode((31 & r) << 6 | 63 & o),
                n += 2) : (o = e.charCodeAt(n + 1),
                    i = e.charCodeAt(n + 2),
                    t += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i),
                    n += 3);
    return t
}
function d2(e) {
    for (var t = "", n = 0; n < e.length; n++) {
        var r = _p.charCodeAt(n % _p.length);
        t += String.fromCharCode(e.charCodeAt(n) ^ r)
    }
    return t = _u_d(t)
}

function d1(e) {
    var t, n, r, o, i, a, u = "", c = 0;
    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length; )
        t = _keyStr.indexOf(e.charAt(c++)) << 2 | (o = _keyStr.indexOf(e.charAt(c++))) >> 4,
        n = (15 & o) << 4 | (i = _keyStr.indexOf(e.charAt(c++))) >> 2,
        r = (3 & i) << 6 | (a = _keyStr.indexOf(e.charAt(c++))),
        u += String.fromCharCode(t),
        64 != i && (u += String.fromCharCode(n)),
        64 != a && (u += String.fromCharCode(r));
    return u
}

var x = e1(e2('{"codes":["nanshangyunying","gdfndshjchjsh","shengshuishiye","hnxclkj87","zhsfcchps","qdptqchpj","chqzshhkfdjzhz","shenzhenanke85","bosieboxi","shanghaishenshikeji","taibangshengwu","SD7W25AH","qidiandianqi","zeyi26","JustSyjsxx","yongxinzhicheng","qichezaoshiwang","bianchengmao","guangzhouyifangkeji","JDC5Z1HZ"]}'))


function xiniu_get_payload(payload) {
    var x = e1(e2(payload))
    return {
        payload: x,
        sig: sig(x)
    }
}

function xiniu_jiemi(l) {
    var d = d1(l)
    , m = d2(d)

    return JSON.parse(m)
}

module.exports = {
    xiniu_get_payload,
    xiniu_jiemi
}

var dd = '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'
console.log(xiniu_jiemi(dd));