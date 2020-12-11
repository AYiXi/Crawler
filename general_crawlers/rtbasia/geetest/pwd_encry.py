import execjs

js_str = """
function t(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}
function n(e, t) {
    return e << t | e >>> 32 - t
}
function o(e, o, i, r, a, s) {
    return t(n(t(t(o, e), t(r, s)), a), i)
}
function i(e, t, n, i, r, a, s) {
    return o(t & n | ~t & i, e, t, r, a, s)
}
function r(e, t, n, i, r, a, s) {
    return o(t & i | n & ~i, e, t, r, a, s)
}
function a(e, t, n, i, r, a, s) {
    return o(t ^ n ^ i, e, t, r, a, s)
}
function s(e, t, n, i, r, a, s) {
    return o(n ^ (t | ~i), e, t, r, a, s)
}
function u(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0,
        t = 0; t < n.length; t += 1)
            n[t] = 0;
        var o = 8 * e.length;
        for (t = 0; t < o; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
    };

function l(e, n) {
        e[n >> 5] |= 128 << n % 32,
        e[14 + (n + 64 >>> 9 << 4)] = n;
        var o, l, c, u, d, h = 1732584193, f = -271733879, p = -1732584194, m = 271733878;
        for (o = 0; o < e.length; o += 16)
            l = h,
            c = f,
            u = p,
            d = m,
            h = i(h, f, p, m, e[o], 7, -680876936),
            m = i(m, h, f, p, e[o + 1], 12, -389564586),
            p = i(p, m, h, f, e[o + 2], 17, 606105819),
            f = i(f, p, m, h, e[o + 3], 22, -1044525330),
            h = i(h, f, p, m, e[o + 4], 7, -176418897),
            m = i(m, h, f, p, e[o + 5], 12, 1200080426),
            p = i(p, m, h, f, e[o + 6], 17, -1473231341),
            f = i(f, p, m, h, e[o + 7], 22, -45705983),
            h = i(h, f, p, m, e[o + 8], 7, 1770035416),
            m = i(m, h, f, p, e[o + 9], 12, -1958414417),
            p = i(p, m, h, f, e[o + 10], 17, -42063),
            f = i(f, p, m, h, e[o + 11], 22, -1990404162),
            h = i(h, f, p, m, e[o + 12], 7, 1804603682),
            m = i(m, h, f, p, e[o + 13], 12, -40341101),
            p = i(p, m, h, f, e[o + 14], 17, -1502002290),
            f = i(f, p, m, h, e[o + 15], 22, 1236535329),
            h = r(h, f, p, m, e[o + 1], 5, -165796510),
            m = r(m, h, f, p, e[o + 6], 9, -1069501632),
            p = r(p, m, h, f, e[o + 11], 14, 643717713),
            f = r(f, p, m, h, e[o], 20, -373897302),
            h = r(h, f, p, m, e[o + 5], 5, -701558691),
            m = r(m, h, f, p, e[o + 10], 9, 38016083),
            p = r(p, m, h, f, e[o + 15], 14, -660478335),
            f = r(f, p, m, h, e[o + 4], 20, -405537848),
            h = r(h, f, p, m, e[o + 9], 5, 568446438),
            m = r(m, h, f, p, e[o + 14], 9, -1019803690),
            p = r(p, m, h, f, e[o + 3], 14, -187363961),
            f = r(f, p, m, h, e[o + 8], 20, 1163531501),
            h = r(h, f, p, m, e[o + 13], 5, -1444681467),
            m = r(m, h, f, p, e[o + 2], 9, -51403784),
            p = r(p, m, h, f, e[o + 7], 14, 1735328473),
            f = r(f, p, m, h, e[o + 12], 20, -1926607734),
            h = a(h, f, p, m, e[o + 5], 4, -378558),
            m = a(m, h, f, p, e[o + 8], 11, -2022574463),
            p = a(p, m, h, f, e[o + 11], 16, 1839030562),
            f = a(f, p, m, h, e[o + 14], 23, -35309556),
            h = a(h, f, p, m, e[o + 1], 4, -1530992060),
            m = a(m, h, f, p, e[o + 4], 11, 1272893353),
            p = a(p, m, h, f, e[o + 7], 16, -155497632),
            f = a(f, p, m, h, e[o + 10], 23, -1094730640),
            h = a(h, f, p, m, e[o + 13], 4, 681279174),
            m = a(m, h, f, p, e[o], 11, -358537222),
            p = a(p, m, h, f, e[o + 3], 16, -722521979),
            f = a(f, p, m, h, e[o + 6], 23, 76029189),
            h = a(h, f, p, m, e[o + 9], 4, -640364487),
            m = a(m, h, f, p, e[o + 12], 11, -421815835),
            p = a(p, m, h, f, e[o + 15], 16, 530742520),
            f = a(f, p, m, h, e[o + 2], 23, -995338651),
            h = s(h, f, p, m, e[o], 6, -198630844),
            m = s(m, h, f, p, e[o + 7], 10, 1126891415),
            p = s(p, m, h, f, e[o + 14], 15, -1416354905),
            f = s(f, p, m, h, e[o + 5], 21, -57434055),
            h = s(h, f, p, m, e[o + 12], 6, 1700485571),
            m = s(m, h, f, p, e[o + 3], 10, -1894986606),
            p = s(p, m, h, f, e[o + 10], 15, -1051523),
            f = s(f, p, m, h, e[o + 1], 21, -2054922799),
            h = s(h, f, p, m, e[o + 8], 6, 1873313359),
            m = s(m, h, f, p, e[o + 15], 10, -30611744),
            p = s(p, m, h, f, e[o + 6], 15, -1560198380),
            f = s(f, p, m, h, e[o + 13], 21, 1309151649),
            h = s(h, f, p, m, e[o + 4], 6, -145523070),
            m = s(m, h, f, p, e[o + 11], 10, -1120210379),
            p = s(p, m, h, f, e[o + 2], 15, 718787259),
            f = s(f, p, m, h, e[o + 9], 21, -343485551),
            h = t(h, l),
            f = t(f, c),
            p = t(p, u),
            m = t(m, d);
        return [h, f, p, m]
    }
    
function c(e) {
    var t, n = "", o = 32 * e.length;
    for (t = 0; t < o; t += 8)
        n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
    return n
}

function f(e) {
    var t, n, o = "0123456789abcdef", i = "";
    for (n = 0; n < e.length; n += 1)
        t = e.charCodeAt(n),
        i += o.charAt(t >>> 4 & 15) + o.charAt(15 & t);
    return i
}

function main(pwd){
    return f(c(l(u(pwd),8*pwd.length)))
}

main("123456")
"""

js_fun = execjs.compile(js_str)
print(js_fun.call("main", "123456789aa"))