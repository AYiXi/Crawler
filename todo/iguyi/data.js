// http://hdweb3.iguyi.com/#/

var lz = function () {
    "use strict";

    function r(e, r) {
        postMessage({
            action: xt,
            cbn: r,
            result: e
        })
    }

    function t(e) {
        var r = [];
        return r[e - 1] = void 0,
            r
    }

    function o(e, r) {
        return i(e[0] + r[0], e[1] + r[1])
    }

    function n(e, r) {
        return u(~~Math.max(Math.min(e[1] / Ot, 2147483647), -2147483648) & ~~Math.max(Math.min(r[1] / Ot, 2147483647), -2147483648), c(e) & c(r))
    }

    function s(e, r) {
        var t, o;
        return e[0] == r[0] && e[1] == r[1] ? 0 : (t = 0 > e[1],
            o = 0 > r[1],
            t && !o ? -1 : !t && o ? 1 : h(e, r)[1] < 0 ? -1 : 1)
    }

    function i(e, r) {
        var t, o;
        for (r %= 0x10000000000000000,
                 e %= 0x10000000000000000,
                 t = r % Ot,
                 o = Math.floor(e / Ot) * Ot,
                 r = r - t + o,
                 e = e - o + t; 0 > e;)
            e += Ot,
                r -= Ot;
        for (; e > 4294967295;)
            e -= Ot,
                r += Ot;
        for (r %= 0x10000000000000000; r > 0x7fffffff00000000;)
            r -= 0x10000000000000000;
        for (; -0x8000000000000000 > r;)
            r += 0x10000000000000000;
        return [e, r]
    }

    function _(e, r) {
        return e[0] == r[0] && e[1] == r[1]
    }

    function a(e) {
        return e >= 0 ? [e, 0] : [e + Ot, -Ot]
    }

    function c(e) {
        return e[0] >= 2147483648 ? ~~Math.max(Math.min(e[0] - Ot, 2147483647), -2147483648) : ~~Math.max(Math.min(e[0], 2147483647), -2147483648)
    }

    function u(e, r) {
        var t, o;
        return t = e * Ot,
            o = r,
        0 > r && (o += Ot),
            [o, t]
    }

    function f(e) {
        return 30 >= e ? 1 << e : f(30) * f(e - 30)
    }

    function m(e, r) {
        var t, o, n, s;
        if (r &= 63,
            _(e, Ht))
            return r ? Gt : e;
        if (0 > e[1])
            throw Error("Neg");
        return s = f(r),
            o = e[1] * s % 0x10000000000000000,
            n = e[0] * s,
            t = n - n % Ot,
            o += t,
            n -= t,
        o >= 0x8000000000000000 && (o -= 0x10000000000000000),
            [n, o]
    }

    function d(e, r) {
        var t;
        return r &= 63,
            t = f(r),
            i(Math.floor(e[0] / t), e[1] / t)
    }

    function p(e, r) {
        var t;
        return r &= 63,
            t = d(e, r),
        0 > e[1] && (t = o(t, m([2, 0], 63 - r))),
            t
    }

    function h(e, r) {
        return i(e[0] - r[0], e[1] - r[1])
    }

    function P(e, r) {
        return e.Mc = r,
            e.Lc = 0,
            e.Vb = r.length,
            e
    }

    function l(e) {
        return e.Lc >= e.Vb ? -1 : 255 & e.Mc[e.Lc++]
    }

    function v(e, r, t, o) {
        return e.Lc >= e.Vb ? -1 : (o = Math.min(o, e.Vb - e.Lc),
            M(e.Mc, e.Lc, r, t, o),
            e.Lc += o,
            o)
    }

    function B(e) {
        return e.Mc = t(32),
            e.Vb = 0,
            e
    }

    function S(e) {
        var r = e.Mc;
        return r.length = e.Vb,
            r
    }

    function g(e, r) {
        e.Mc[e.Vb++] = r << 24 >> 24
    }

    function k(e, r, t, o) {
        M(r, t, e.Mc, e.Vb, o),
            e.Vb += o
    }

    function R(e, r, t, o, n) {
        var s;
        for (s = r; t > s; ++s)
            o[n++] = e.charCodeAt(s)
    }

    function M(e, r, t, o, n) {
        for (var s = 0; n > s; ++s)
            t[o + s] = e[r + s]
    }

    function D(e, r) {
        Ar(r, 1 << e.s),
            r.n = e.f,
            Hr(r, e.m),
            r.eb = 0,
            r.fb = 3,
            r.Y = 2,
            r.y = 3
    }

    function b(e, r, t, o, n) {
        var i, _;
        if (s(o, At) < 0)
            throw Error("invalid length " + o);
        for (e.Nb = o,
                 i = Dr({}),
                 D(n, i),
                 i.Gc = 1,
                 Gr(i, t),
                 _ = 0; 64 > _; _ += 8)
            g(t, 255 & c(d(o, _)));
        e.ac = (i.S = 0,
            i.kc = r,
            i.lc = 0,
            Mr(i),
            i.d.zb = t,
            Fr(i),
            wr(i),
            br(i),
            i._.pb = i.n + 1 - 2,
            Qr(i._, 1 << i.Y),
            i.i.pb = i.n + 1 - 2,
            Qr(i.i, 1 << i.Y),
            void (i.g = Gt),
            X({}, i))
    }

    function w(e, r, t) {
        return e.rc = B({}),
            b(e, P({}, r), e.rc, a(r.length), t),
            e
    }

    function E(e, r, t) {
        var o, n, s, i, _ = "", c = [];
        for (n = 0; 5 > n; ++n) {
            if (s = l(r),
            -1 == s)
                throw Error("truncated input");
            c[n] = s << 24 >> 24
        }
        if (o = ir({}),
            !ar(o, c))
            throw Error("corrupted input");
        for (n = 0; 64 > n; n += 8) {
            if (s = l(r),
            -1 == s)
                throw Error("truncated input");
            s = s.toString(16),
            1 == s.length && (s = "0" + s),
                _ = s + "" + _
        }
        /^0+$|^f+$/i.test(_) ? e.Nb = At : (i = parseInt(_, 16),
            e.Nb = i > 4294967295 ? At : a(i)),
            e.ac = nr(o, r, t, e.Nb)
    }

    function L(e, r) {
        return e.rc = B({}),
            E(e, P({}, r), e.rc),
            e
    }

    function C(e, r, o, n) {
        var s;
        e.Bc = r,
            e._b = o,
            s = r + o + n,
        (null == e.c || e.Jb != s) && (e.c = null,
            e.Jb = s,
            e.c = t(e.Jb)),
            e.H = e.Jb - o
    }

    function y(e, r) {
        return e.c[e.f + e.o + r]
    }

    function z(e, r, t, o) {
        var n, s;
        for (e.X && e.o + r + o > e.h && (o = e.h - (e.o + r)),
                 ++t,
                 s = e.f + e.o + r,
                 n = 0; o > n && e.c[s + n] == e.c[s + n - t]; ++n)
            ;
        return n
    }

    function F(e) {
        return e.h - e.o
    }

    function I(e) {
        var r, t, o;
        for (o = e.f + e.o - e.Bc,
             o > 0 && --o,
                 t = e.f + e.h - o,
                 r = 0; t > r; ++r)
            e.c[r] = e.c[o + r];
        e.f -= o
    }

    function x(e) {
        var r;
        ++e.o,
        e.o > e.yb && (r = e.f + e.o,
        r > e.H && I(e),
            N(e))
    }

    function N(e) {
        var r, t, o;
        if (!e.X)
            for (; ;) {
                if (o = -e.f + e.Jb - e.h,
                    !o)
                    return;
                if (r = v(e.bc, e.c, e.f + e.h, o),
                -1 == r)
                    return e.yb = e.h,
                        t = e.f + e.yb,
                    t > e.H && (e.yb = e.H - e.f),
                        void (e.X = 1);
                e.h += r,
                e.h >= e.o + e._b && (e.yb = e.h - e._b)
            }
    }

    function O(e, r) {
        e.f += r,
            e.yb -= r,
            e.o -= r,
            e.h -= r
    }

    function A(e, r, o, n, s) {
        var i, _, a;
        1073741567 > r && (e.Ec = 16 + (n >> 1),
            a = ~~((r + o + n + s) / 2) + 256,
            C(e, r + o, n + s, a),
            e.ub = n,
            i = r + 1,
        e.p != i && (e.M = t(2 * (e.p = i))),
            _ = 65536,
        e.rb && (_ = r - 1,
            _ |= _ >> 1,
            _ |= _ >> 2,
            _ |= _ >> 4,
            _ |= _ >> 8,
            _ >>= 1,
            _ |= 65535,
        _ > 16777216 && (_ >>= 1),
            e.Fc = _,
            ++_,
            _ += e.N),
        _ != e.sc && (e.qb = t(e.sc = _)))
    }

    function H(e, r) {
        var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v, B, S, g, k;
        if (e.h >= e.o + e.ub)
            h = e.ub;
        else if (h = e.h - e.o,
        e.xb > h)
            return W(e),
                0;
        for (v = 0,
                 P = e.o > e.p ? e.o - e.p : 0,
                 o = e.f + e.o,
                 l = 1,
                 c = 0,
                 u = 0,
                 e.rb ? (k = Tt[255 & e.c[o]] ^ 255 & e.c[o + 1],
                     c = 1023 & k,
                     k ^= (255 & e.c[o + 2]) << 8,
                     u = 65535 & k,
                     f = (k ^ Tt[255 & e.c[o + 3]] << 5) & e.Fc) : f = 255 & e.c[o] ^ (255 & e.c[o + 1]) << 8,
                 n = e.qb[e.N + f] || 0,
             e.rb && (s = e.qb[c] || 0,
                 i = e.qb[1024 + u] || 0,
                 e.qb[c] = e.o,
                 e.qb[1024 + u] = e.o,
             s > P && e.c[e.f + s] == e.c[o] && (r[v++] = l = 2,
                 r[v++] = e.o - s - 1),
             i > P && e.c[e.f + i] == e.c[o] && (i == s && (v -= 2),
                 r[v++] = l = 3,
                 r[v++] = e.o - i - 1,
                 s = i),
             0 != v && s == n && (v -= 2,
                 l = 1)),
                 e.qb[e.N + f] = e.o,
                 S = (e.k << 1) + 1,
                 g = e.k << 1,
                 d = p = e.w,
             0 != e.w && n > P && e.c[e.f + n + e.w] != e.c[o + e.w] && (r[v++] = l = e.w,
                 r[v++] = e.o - n - 1),
                 t = e.Ec; ;) {
            if (P >= n || 0 == t--) {
                e.M[S] = e.M[g] = 0;
                break
            }
            if (a = e.o - n,
                _ = (e.k >= a ? e.k - a : e.k - a + e.p) << 1,
                B = e.f + n,
                m = p > d ? d : p,
            e.c[B + m] == e.c[o + m]) {
                for (; ++m != h && e.c[B + m] == e.c[o + m];)
                    ;
                if (m > l && (r[v++] = l = m,
                    r[v++] = a - 1,
                m == h)) {
                    e.M[g] = e.M[_],
                        e.M[S] = e.M[_ + 1];
                    break
                }
            }
            (255 & e.c[o + m]) > (255 & e.c[B + m]) ? (e.M[g] = n,
                g = _ + 1,
                n = e.M[g],
                p = m) : (e.M[S] = n,
                S = _,
                n = e.M[S],
                d = m)
        }
        return W(e),
            v
    }

    function G(e) {
        e.f = 0,
            e.o = 0,
            e.h = 0,
            e.X = 0,
            N(e),
            e.k = 0,
            O(e, -1)
    }

    function W(e) {
        var r;
        ++e.k >= e.p && (e.k = 0),
            x(e),
        1073741823 == e.o && (r = e.o - e.p,
            T(e.M, 2 * e.p, r),
            T(e.qb, e.sc, r),
            O(e, r))
    }

    function T(e, r, t) {
        var o, n;
        for (o = 0; r > o; ++o)
            n = e[o] || 0,
                t >= n ? n = 0 : n -= t,
                e[o] = n
    }

    function Y(e, r) {
        e.rb = r > 2,
            e.rb ? (e.w = 0,
                e.xb = 4,
                e.N = 66560) : (e.w = 2,
                e.xb = 3,
                e.N = 0)
    }

    function Z(e, r) {
        var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v;
        do {
            if (e.h >= e.o + e.ub)
                d = e.ub;
            else if (d = e.h - e.o,
            e.xb > d) {
                W(e);
                continue
            }
            for (p = e.o > e.p ? e.o - e.p : 0,
                     o = e.f + e.o,
                     e.rb ? (v = Tt[255 & e.c[o]] ^ 255 & e.c[o + 1],
                         _ = 1023 & v,
                         e.qb[_] = e.o,
                         v ^= (255 & e.c[o + 2]) << 8,
                         a = 65535 & v,
                         e.qb[1024 + a] = e.o,
                         c = (v ^ Tt[255 & e.c[o + 3]] << 5) & e.Fc) : c = 255 & e.c[o] ^ (255 & e.c[o + 1]) << 8,
                     n = e.qb[e.N + c],
                     e.qb[e.N + c] = e.o,
                     P = (e.k << 1) + 1,
                     l = e.k << 1,
                     f = m = e.w,
                     t = e.Ec; ;) {
                if (p >= n || 0 == t--) {
                    e.M[P] = e.M[l] = 0;
                    break
                }
                if (i = e.o - n,
                    s = (e.k >= i ? e.k - i : e.k - i + e.p) << 1,
                    h = e.f + n,
                    u = m > f ? f : m,
                e.c[h + u] == e.c[o + u]) {
                    for (; ++u != d && e.c[h + u] == e.c[o + u];)
                        ;
                    if (u == d) {
                        e.M[l] = e.M[s],
                            e.M[P] = e.M[s + 1];
                        break
                    }
                }
                (255 & e.c[o + u]) > (255 & e.c[h + u]) ? (e.M[l] = n,
                    l = s + 1,
                    n = e.M[l],
                    m = u) : (e.M[P] = n,
                    P = s,
                    n = e.M[P],
                    f = u)
            }
            W(e)
        } while (0 != --r)
    }

    function V(e, r, t) {
        var o = e.o - r - 1;
        for (0 > o && (o += e.L); 0 != t; --t)
            o >= e.L && (o = 0),
                e.Kb[e.o++] = e.Kb[o++],
            e.o >= e.L && $(e)
    }

    function j(e, r) {
        (null == e.Kb || e.L != r) && (e.Kb = t(r)),
            e.L = r,
            e.o = 0,
            e.h = 0
    }

    function $(e) {
        var r = e.o - e.h;
        r && (k(e.bc, e.Kb, e.h, r),
        e.o >= e.L && (e.o = 0),
            e.h = e.o)
    }

    function K(e, r) {
        var t = e.o - r - 1;
        return 0 > t && (t += e.L),
            e.Kb[t]
    }

    function q(e, r) {
        e.Kb[e.o++] = r,
        e.o >= e.L && $(e)
    }

    function J(e) {
        $(e),
            e.bc = null
    }

    function Q(e) {
        return e -= 2,
            4 > e ? e : 3
    }

    function U(e) {
        return 4 > e ? 0 : 10 > e ? e - 3 : e - 6
    }

    function X(e, r) {
        return e.cb = r,
            e.$ = null,
            e.zc = 1,
            e
    }

    function er(e, r) {
        return e.$ = r,
            e.cb = null,
            e.zc = 1,
            e
    }

    function rr(e) {
        if (!e.zc)
            throw Error("bad state");
        return e.cb ? or(e) : tr(e),
            e.zc
    }

    function tr(e) {
        var r = sr(e.$);
        if (-1 == r)
            throw Error("corrupted input");
        e.Sb = At,
            e.Pc = e.$.g,
        (r || s(e.$.Nc, Gt) >= 0 && s(e.$.g, e.$.Nc) >= 0) && ($(e.$.B),
            J(e.$.B),
            e.$.e.zb = null,
            e.zc = 0)
    }

    function or(e) {
        Rr(e.cb, e.cb.Ub, e.cb.vc, e.cb.Kc),
            e.Sb = e.cb.Ub[0],
        e.cb.Kc[0] && (Or(e.cb),
            e.zc = 0)
    }

    function nr(e, r, t, o) {
        return e.e.zb = r,
            J(e.B),
            e.B.bc = t,
            _r(e),
            e.W = 0,
            e.ib = 0,
            e.Jc = 0,
            e.Ic = 0,
            e.Qc = 0,
            e.Nc = o,
            e.g = Gt,
            e.gc = 0,
            er({}, e)
    }

    function sr(e) {
        var r, t, n, i, _, u;
        if (u = c(e.g) & e.Dc,
            vt(e.e, e.Gb, (e.W << 4) + u)) {
            if (vt(e.e, e.Wb, e.W))
                n = 0,
                    vt(e.e, e.Cb, e.W) ? (vt(e.e, e.Db, e.W) ? (vt(e.e, e.Eb, e.W) ? (t = e.Qc,
                        e.Qc = e.Ic) : t = e.Ic,
                        e.Ic = e.Jc) : t = e.Jc,
                        e.Jc = e.ib,
                        e.ib = t) : vt(e.e, e.tb, (e.W << 4) + u) || (e.W = 7 > e.W ? 9 : 11,
                        n = 1),
                n || (n = mr(e.sb, e.e, u) + 2,
                    e.W = 7 > e.W ? 8 : 11);
            else if (e.Qc = e.Ic,
                e.Ic = e.Jc,
                e.Jc = e.ib,
                n = 2 + mr(e.Mb, e.e, u),
                e.W = 7 > e.W ? 7 : 10,
                _ = at(e.kb[Q(n)], e.e),
            _ >= 4) {
                if (i = (_ >> 1) - 1,
                    e.ib = (2 | 1 & _) << i,
                14 > _)
                    e.ib += ut(e.jc, e.ib - _ - 1, e.e, i);
                else if (e.ib += Bt(e.e, i - 4) << 4,
                    e.ib += ct(e.Bb, e.e),
                0 > e.ib)
                    return -1 == e.ib ? 1 : -1
            } else
                e.ib = _;
            if (s(a(e.ib), e.g) >= 0 || e.ib >= e.mb)
                return -1;
            V(e.B, e.ib, n),
                e.g = o(e.g, a(n)),
                e.gc = K(e.B, 0)
        } else
            r = Pr(e.jb, c(e.g), e.gc),
                e.gc = 7 > e.W ? vr(r, e.e) : Br(r, e.e, K(e.B, e.ib)),
                q(e.B, e.gc),
                e.W = U(e.W),
                e.g = o(e.g, Wt);
        return 0
    }

    function ir(e) {
        e.B = {},
            e.e = {},
            e.Gb = t(192),
            e.Wb = t(12),
            e.Cb = t(12),
            e.Db = t(12),
            e.Eb = t(12),
            e.tb = t(192),
            e.kb = t(4),
            e.jc = t(114),
            e.Bb = _t({}, 4),
            e.Mb = dr({}),
            e.sb = dr({}),
            e.jb = {};
        for (var r = 0; 4 > r; ++r)
            e.kb[r] = _t({}, 6);
        return e
    }

    function _r(e) {
        e.B.h = 0,
            e.B.o = 0,
            gt(e.Gb),
            gt(e.tb),
            gt(e.Wb),
            gt(e.Cb),
            gt(e.Db),
            gt(e.Eb),
            gt(e.jc),
            lr(e.jb);
        for (var r = 0; 4 > r; ++r)
            gt(e.kb[r].G);
        pr(e.Mb),
            pr(e.sb),
            gt(e.Bb.G),
            St(e.e)
    }

    function ar(e, r) {
        var t, o, n, s, i, _, a;
        if (5 > r.length)
            return 0;
        for (a = 255 & r[0],
                 n = a % 9,
                 _ = ~~(a / 9),
                 s = _ % 5,
                 i = ~~(_ / 5),
                 t = 0,
                 o = 0; 4 > o; ++o)
            t += (255 & r[1 + o]) << 8 * o;
        return t > 99999999 || !ur(e, n, s, i) ? 0 : cr(e, t)
    }

    function cr(e, r) {
        return 0 > r ? 0 : (e.Pb != r && (e.Pb = r,
            e.mb = Math.max(e.Pb, 1),
            j(e.B, Math.max(e.mb, 4096))),
            1)
    }

    function ur(e, r, t, o) {
        if (r > 8 || t > 4 || o > 4)
            return 0;
        hr(e.jb, t, r);
        var n = 1 << o;
        return fr(e.Mb, n),
            fr(e.sb, n),
            e.Dc = n - 1,
            1
    }

    function fr(e, r) {
        for (; r > e.P; ++e.P)
            e.ec[e.P] = _t({}, 3),
                e.hc[e.P] = _t({}, 3)
    }

    function mr(e, r, t) {
        if (!vt(r, e.uc, 0))
            return at(e.ec[t], r);
        var o = 8;
        return o += vt(r, e.uc, 1) ? 8 + at(e.tc, r) : at(e.hc[t], r)
    }

    function dr(e) {
        return e.uc = t(2),
            e.ec = t(16),
            e.hc = t(16),
            e.tc = _t({}, 8),
            e.P = 0,
            e
    }

    function pr(e) {
        gt(e.uc);
        for (var r = 0; e.P > r; ++r)
            gt(e.ec[r].G),
                gt(e.hc[r].G);
        gt(e.tc.G)
    }

    function hr(e, r, o) {
        var n, s;
        if (null == e.V || e.u != o || e.I != r)
            for (e.I = r,
                     e.oc = (1 << r) - 1,
                     e.u = o,
                     s = 1 << e.u + e.I,
                     e.V = t(s),
                     n = 0; s > n; ++n)
                e.V[n] = Sr({})
    }

    function Pr(e, r, t) {
        return e.V[((r & e.oc) << e.u) + ((255 & t) >>> 8 - e.u)]
    }

    function lr(e) {
        var r, t;
        for (t = 1 << e.u + e.I,
                 r = 0; t > r; ++r)
            gt(e.V[r].Hb)
    }

    function vr(e, r) {
        var t = 1;
        do
            t = t << 1 | vt(r, e.Hb, t);
        while (256 > t);
        return t << 24 >> 24
    }

    function Br(e, r, t) {
        var o, n, s = 1;
        do
            if (n = t >> 7 & 1,
                t <<= 1,
                o = vt(r, e.Hb, (1 + n << 8) + s),
                s = s << 1 | o,
            n != o) {
                for (; 256 > s;)
                    s = s << 1 | vt(r, e.Hb, s);
                break
            }
        while (256 > s);
        return s << 24 >> 24
    }

    function Sr(e) {
        return e.Hb = t(768),
            e
    }

    function gr(e, r) {
        var t, o, n, s;
        e.lb = r,
            n = e.a[r].r,
            o = e.a[r].j;
        do
            e.a[r].t && (st(e.a[n]),
                e.a[n].r = n - 1,
            e.a[r].yc && (e.a[n - 1].t = 0,
                e.a[n - 1].r = e.a[r].r2,
                e.a[n - 1].j = e.a[r].j2)),
                s = n,
                t = o,
                o = e.a[s].j,
                n = e.a[s].r,
                e.a[s].j = t,
                e.a[s].r = r,
                r = s;
        while (r > 0);
        return e.nb = e.a[0].j,
            e.q = e.a[0].r
    }

    function kr(e) {
        e.l = 0,
            e.J = 0;
        for (var r = 0; 4 > r; ++r)
            e.v[r] = 0
    }

    function Rr(e, r, t, n) {
        var i, u, f, m, d, p, P, l, v, B, S, g, k, R, M;
        if (r[0] = Gt,
            t[0] = Gt,
            n[0] = 1,
        e.kc && (e.b.bc = e.kc,
            G(e.b),
            e.S = 1,
            e.kc = null),
            !e.lc) {
            if (e.lc = 1,
                R = e.g,
                _(e.g, Gt)) {
                if (!F(e.b))
                    return void Er(e, c(e.g));
                xr(e),
                    k = c(e.g) & e.y,
                    kt(e.d, e.C, (e.l << 4) + k, 0),
                    e.l = U(e.l),
                    f = y(e.b, -e.s),
                    rt(Xr(e.A, c(e.g), e.J), e.d, f),
                    e.J = f,
                    --e.s,
                    e.g = o(e.g, Wt)
            }
            if (!F(e.b))
                return void Er(e, c(e.g));
            for (; ;) {
                if (P = Lr(e, c(e.g)),
                    B = e.nb,
                    k = c(e.g) & e.y,
                    u = (e.l << 4) + k,
                1 == P && -1 == B)
                    kt(e.d, e.C, u, 0),
                        f = y(e.b, -e.s),
                        M = Xr(e.A, c(e.g), e.J),
                        7 > e.l ? rt(M, e.d, f) : (v = y(e.b, -e.v[0] - 1 - e.s),
                            tt(M, e.d, v, f)),
                        e.J = f,
                        e.l = U(e.l);
                else {
                    if (kt(e.d, e.C, u, 1),
                    4 > B) {
                        if (kt(e.d, e.bb, e.l, 1),
                            B ? (kt(e.d, e.gb, e.l, 1),
                                1 == B ? kt(e.d, e.Ob, e.l, 0) : (kt(e.d, e.Ob, e.l, 1),
                                    kt(e.d, e.wc, e.l, B - 2))) : (kt(e.d, e.gb, e.l, 0),
                                1 == P ? kt(e.d, e.Z, u, 0) : kt(e.d, e.Z, u, 1)),
                            1 == P ? e.l = 7 > e.l ? 9 : 11 : (Kr(e.i, e.d, P - 2, k),
                                e.l = 7 > e.l ? 8 : 11),
                            m = e.v[B],
                        0 != B) {
                            for (p = B; p >= 1; --p)
                                e.v[p] = e.v[p - 1];
                            e.v[0] = m
                        }
                    } else {
                        for (kt(e.d, e.bb, e.l, 0),
                                 e.l = 7 > e.l ? 7 : 10,
                                 Kr(e._, e.d, P - 2, k),
                                 B -= 4,
                                 g = Tr(B),
                                 l = Q(P),
                                 mt(e.K[l], e.d, g),
                             g >= 4 && (d = (g >> 1) - 1,
                                 i = (2 | 1 & g) << d,
                                 S = B - i,
                                 14 > g ? Pt(e.Lb, i - g - 1, e.d, d, S) : (Rt(e.d, S >> 4, d - 4),
                                     pt(e.U, e.d, 15 & S),
                                     ++e.Qb)),
                                 m = B,
                                 p = 3; p >= 1; --p)
                            e.v[p] = e.v[p - 1];
                        e.v[0] = m,
                            ++e.Rb
                    }
                    e.J = y(e.b, P - 1 - e.s)
                }
                if (e.s -= P,
                    e.g = o(e.g, a(P)),
                    !e.s) {
                    if (e.Rb >= 128 && wr(e),
                    e.Qb >= 16 && br(e),
                        r[0] = e.g,
                        t[0] = Mt(e.d),
                        !F(e.b))
                        return void Er(e, c(e.g));
                    if (s(h(e.g, R), [4096, 0]) >= 0)
                        return e.lc = 0,
                            void (n[0] = 0)
                }
            }
        }
    }

    function Mr(e) {
        var r, t;
        e.b || (r = {},
            t = 4,
        e.T || (t = 2),
            Y(r, t),
            e.b = r),
            Ur(e.A, e.eb, e.fb),
        (e.ab != e.wb || e.Fb != e.n) && (A(e.b, e.ab, 4096, e.n, 274),
            e.wb = e.ab,
            e.Fb = e.n)
    }

    function Dr(e) {
        var r;
        for (e.v = t(4),
                 e.a = [],
                 e.d = {},
                 e.C = t(192),
                 e.bb = t(12),
                 e.gb = t(12),
                 e.Ob = t(12),
                 e.wc = t(12),
                 e.Z = t(192),
                 e.K = [],
                 e.Lb = t(114),
                 e.U = ft({}, 4),
                 e._ = qr({}),
                 e.i = qr({}),
                 e.A = {},
                 e.m = [],
                 e.R = [],
                 e.hb = [],
                 e.mc = t(16),
                 e.x = t(4),
                 e.O = t(4),
                 e.Ub = [Gt],
                 e.vc = [Gt],
                 e.Kc = [0],
                 e.fc = t(5),
                 e.xc = t(128),
                 e.vb = 0,
                 e.T = 1,
                 e.D = 0,
                 e.Fb = -1,
                 e.nb = 0,
                 r = 0; 4096 > r; ++r)
            e.a[r] = {};
        for (r = 0; 4 > r; ++r)
            e.K[r] = ft({}, 6);
        return e
    }

    function br(e) {
        for (var r = 0; 16 > r; ++r)
            e.mc[r] = ht(e.U, r);
        e.Qb = 0
    }

    function wr(e) {
        var r, t, o, n, s, i, _, a;
        for (n = 4; 128 > n; ++n)
            i = Tr(n),
                o = (i >> 1) - 1,
                r = (2 | 1 & i) << o,
                e.xc[n] = lt(e.Lb, r - i - 1, o, n - r);
        for (s = 0; 4 > s; ++s) {
            for (t = e.K[s],
                     _ = s << 6,
                     i = 0; e.cc > i; ++i)
                e.R[_ + i] = dt(t, i);
            for (i = 14; e.cc > i; ++i)
                e.R[_ + i] += (i >> 1) - 1 - 4 << 6;
            for (a = 128 * s,
                     n = 0; 4 > n; ++n)
                e.hb[a + n] = e.R[_ + n];
            for (; 128 > n; ++n)
                e.hb[a + n] = e.R[_ + Tr(n)] + e.xc[n]
        }
        e.Rb = 0
    }

    function Er(e, r) {
        Nr(e),
            Wr(e, r & e.y);
        for (var t = 0; 5 > t; ++t)
            bt(e.d)
    }

    function Lr(e, r) {
        var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v, B, S, g, k, R, M, D, b, w, E, L, C, I, x, N, O, A, H, G,
            W, T, Y, Z, V, j, $, K, q, J, Q, X, er, rr;
        if (e.lb != e.q)
            return p = e.a[e.q].r - e.q,
                e.nb = e.a[e.q].j,
                e.q = e.a[e.q].r,
                p;
        if (e.q = e.lb = 0,
            e.Q ? (d = e.vb,
                e.Q = 0) : d = xr(e),
            E = e.D,
            b = F(e.b) + 1,
        2 > b)
            return e.nb = -1,
                1;
        for (b > 273 && (b = 273),
                 Z = 0,
                 u = 0; 4 > u; ++u)
            e.x[u] = e.v[u],
                e.O[u] = z(e.b, -1, e.x[u], 273),
            e.O[u] > e.O[Z] && (Z = u);
        if (e.O[Z] >= e.n)
            return e.nb = Z,
                p = e.O[Z],
                Ir(e, p - 1),
                p;
        if (d >= e.n)
            return e.nb = e.m[E - 1] + 4,
                Ir(e, d - 1),
                d;
        if (a = y(e.b, -1),
            v = y(e.b, -e.v[0] - 1 - 1),
        2 > d && a != v && 2 > e.O[Z])
            return e.nb = -1,
                1;
        if (e.a[0].Hc = e.l,
            A = r & e.y,
            e.a[1].z = Zt[e.C[(e.l << 4) + A] >>> 2] + nt(Xr(e.A, r, e.J), e.l >= 7, v, a),
            st(e.a[1]),
            B = Zt[2048 - e.C[(e.l << 4) + A] >>> 2],
            Y = B + Zt[2048 - e.bb[e.l] >>> 2],
        v == a && (V = Y + zr(e, e.l, A),
        e.a[1].z > V && (e.a[1].z = V,
            it(e.a[1]))),
            m = d >= e.O[Z] ? d : e.O[Z],
        2 > m)
            return e.nb = e.a[1].j,
                1;
        e.a[1].r = 0,
            e.a[0].Yb = e.x[0],
            e.a[0].Zb = e.x[1],
            e.a[0].$b = e.x[2],
            e.a[0].pc = e.x[3],
            f = m;
        do
            e.a[f--].z = 268435455;
        while (f >= 2);
        for (u = 0; 4 > u; ++u)
            if (T = e.O[u],
                !(2 > T)) {
                G = Y + yr(e, u, e.l, A);
                do
                    s = G + Jr(e.i, T - 2, A),
                        x = e.a[T],
                    x.z > s && (x.z = s,
                        x.r = 0,
                        x.j = u,
                        x.t = 0);
                while (--T >= 2)
            }
        if (D = B + Zt[e.bb[e.l] >>> 2],
            f = e.O[0] >= 2 ? e.O[0] + 1 : 2,
        d >= f) {
            for (L = 0; f > e.m[L];)
                L += 2;
            for (; c = e.m[L + 1],
                       s = D + Cr(e, c, f, A),
                       x = e.a[f],
                   x.z > s && (x.z = s,
                       x.r = 0,
                       x.j = c + 4,
                       x.t = 0),
                   f != e.m[L] || (L += 2,
                   L != E); ++f)
                ;
        }
        for (t = 0; ;) {
            if (++t,
            t == m)
                return gr(e, t);
            if (S = xr(e),
                E = e.D,
            S >= e.n)
                return e.vb = S,
                    e.Q = 1,
                    gr(e, t);
            if (++r,
                O = e.a[t].r,
                e.a[t].t ? (--O,
                    e.a[t].yc ? ($ = e.a[e.a[t].r2].Hc,
                        $ = 4 > e.a[t].j2 ? 7 > $ ? 8 : 11 : 7 > $ ? 7 : 10) : $ = e.a[O].Hc,
                    $ = U($)) : $ = e.a[O].Hc,
                O == t - 1 ? $ = e.a[t].j ? U($) : 7 > $ ? 9 : 11 : (e.a[t].t && e.a[t].yc ? (O = e.a[t].r2,
                    N = e.a[t].j2,
                    $ = 7 > $ ? 8 : 11) : (N = e.a[t].j,
                    $ = 4 > N ? 7 > $ ? 8 : 11 : 7 > $ ? 7 : 10),
                    I = e.a[O],
                    4 > N ? N ? 1 == N ? (e.x[0] = I.Zb,
                        e.x[1] = I.Yb,
                        e.x[2] = I.$b,
                        e.x[3] = I.pc) : 2 == N ? (e.x[0] = I.$b,
                        e.x[1] = I.Yb,
                        e.x[2] = I.Zb,
                        e.x[3] = I.pc) : (e.x[0] = I.pc,
                        e.x[1] = I.Yb,
                        e.x[2] = I.Zb,
                        e.x[3] = I.$b) : (e.x[0] = I.Yb,
                        e.x[1] = I.Zb,
                        e.x[2] = I.$b,
                        e.x[3] = I.pc) : (e.x[0] = N - 4,
                        e.x[1] = I.Yb,
                        e.x[2] = I.Zb,
                        e.x[3] = I.$b)),
                e.a[t].Hc = $,
                e.a[t].Yb = e.x[0],
                e.a[t].Zb = e.x[1],
                e.a[t].$b = e.x[2],
                e.a[t].pc = e.x[3],
                _ = e.a[t].z,
                a = y(e.b, -1),
                v = y(e.b, -e.x[0] - 1 - 1),
                A = r & e.y,
                o = _ + Zt[e.C[($ << 4) + A] >>> 2] + nt(Xr(e.A, r, y(e.b, -2)), $ >= 7, v, a),
                R = e.a[t + 1],
                g = 0,
            R.z > o && (R.z = o,
                R.r = t,
                R.j = -1,
                R.t = 0,
                g = 1),
                B = _ + Zt[2048 - e.C[($ << 4) + A] >>> 2],
                Y = B + Zt[2048 - e.bb[$] >>> 2],
            v != a || t > R.r && !R.j || (V = Y + (Zt[e.gb[$] >>> 2] + Zt[e.Z[($ << 4) + A] >>> 2]),
            R.z >= V && (R.z = V,
                R.r = t,
                R.j = 0,
                R.t = 0,
                g = 1)),
                w = F(e.b) + 1,
                w = w > 4095 - t ? 4095 - t : w,
                b = w,
                !(2 > b)) {
                if (b > e.n && (b = e.n),
                !g && v != a && (q = Math.min(w - 1, e.n),
                    P = z(e.b, 0, e.x[0], q),
                P >= 2)) {
                    for (K = U($),
                             H = r + 1 & e.y,
                             M = o + Zt[2048 - e.C[(K << 4) + H] >>> 2] + Zt[2048 - e.bb[K] >>> 2],
                             C = t + 1 + P; C > m;)
                        e.a[++m].z = 268435455;
                    s = M + (J = Jr(e.i, P - 2, H),
                    J + yr(e, 0, K, H)),
                        x = e.a[C],
                    x.z > s && (x.z = s,
                        x.r = t + 1,
                        x.j = 0,
                        x.t = 1,
                        x.yc = 0)
                }
                for (j = 2,
                         W = 0; 4 > W; ++W)
                    if (h = z(e.b, -1, e.x[W], b),
                        !(2 > h)) {
                        l = h;
                        do {
                            for (; t + h > m;)
                                e.a[++m].z = 268435455;
                            s = Y + (Q = Jr(e.i, h - 2, A),
                            Q + yr(e, W, $, A)),
                                x = e.a[t + h],
                            x.z > s && (x.z = s,
                                x.r = t,
                                x.j = W,
                                x.t = 0)
                        } while (--h >= 2);
                        if (h = l,
                        W || (j = h + 1),
                        w > h && (q = Math.min(w - 1 - h, e.n),
                            P = z(e.b, h, e.x[W], q),
                        P >= 2)) {
                            for (K = 7 > $ ? 8 : 11,
                                     H = r + h & e.y,
                                     n = Y + (X = Jr(e.i, h - 2, A),
                                     X + yr(e, W, $, A)) + Zt[e.C[(K << 4) + H] >>> 2] + nt(Xr(e.A, r + h, y(e.b, h - 1 - 1)), 1, y(e.b, h - 1 - (e.x[W] + 1)), y(e.b, h - 1)),
                                     K = U(K),
                                     H = r + h + 1 & e.y,
                                     k = n + Zt[2048 - e.C[(K << 4) + H] >>> 2],
                                     M = k + Zt[2048 - e.bb[K] >>> 2],
                                     C = h + 1 + P; t + C > m;)
                                e.a[++m].z = 268435455;
                            s = M + (er = Jr(e.i, P - 2, H),
                            er + yr(e, 0, K, H)),
                                x = e.a[t + C],
                            x.z > s && (x.z = s,
                                x.r = t + h + 1,
                                x.j = 0,
                                x.t = 1,
                                x.yc = 1,
                                x.r2 = t,
                                x.j2 = W)
                        }
                    }
                if (S > b) {
                    for (S = b,
                             E = 0; S > e.m[E]; E += 2)
                        ;
                    e.m[E] = S,
                        E += 2
                }
                if (S >= j) {
                    for (D = B + Zt[e.bb[$] >>> 2]; t + S > m;)
                        e.a[++m].z = 268435455;
                    for (L = 0; j > e.m[L];)
                        L += 2;
                    for (h = j; ; ++h)
                        if (i = e.m[L + 1],
                            s = D + Cr(e, i, h, A),
                            x = e.a[t + h],
                        x.z > s && (x.z = s,
                            x.r = t,
                            x.j = i + 4,
                            x.t = 0),
                        h == e.m[L]) {
                            if (w > h && (q = Math.min(w - 1 - h, e.n),
                                P = z(e.b, h, i, q),
                            P >= 2)) {
                                for (K = 7 > $ ? 7 : 10,
                                         H = r + h & e.y,
                                         n = s + Zt[e.C[(K << 4) + H] >>> 2] + nt(Xr(e.A, r + h, y(e.b, h - 1 - 1)), 1, y(e.b, h - (i + 1) - 1), y(e.b, h - 1)),
                                         K = U(K),
                                         H = r + h + 1 & e.y,
                                         k = n + Zt[2048 - e.C[(K << 4) + H] >>> 2],
                                         M = k + Zt[2048 - e.bb[K] >>> 2],
                                         C = h + 1 + P; t + C > m;)
                                    e.a[++m].z = 268435455;
                                s = M + (rr = Jr(e.i, P - 2, H),
                                rr + yr(e, 0, K, H)),
                                    x = e.a[t + C],
                                x.z > s && (x.z = s,
                                    x.r = t + h + 1,
                                    x.j = 0,
                                    x.t = 1,
                                    x.yc = 1,
                                    x.r2 = t,
                                    x.j2 = i + 4)
                            }
                            if (L += 2,
                            L == E)
                                break
                        }
                }
            }
        }
    }

    function Cr(e, r, t, o) {
        var n, s = Q(t);
        return n = 128 > r ? e.hb[128 * s + r] : e.R[(s << 6) + Yr(r)] + e.mc[15 & r],
        n + Jr(e._, t - 2, o)
    }

    function yr(e, r, t, o) {
        var n;
        return r ? (n = Zt[2048 - e.gb[t] >>> 2],
            1 == r ? n += Zt[e.Ob[t] >>> 2] : (n += Zt[2048 - e.Ob[t] >>> 2],
                n += wt(e.wc[t], r - 2))) : (n = Zt[e.gb[t] >>> 2],
            n += Zt[2048 - e.Z[(t << 4) + o] >>> 2]),
            n
    }

    function zr(e, r, t) {
        return Zt[e.gb[r] >>> 2] + Zt[e.Z[(r << 4) + t] >>> 2]
    }

    function Fr(e) {
        kr(e),
            Dt(e.d),
            gt(e.C),
            gt(e.Z),
            gt(e.bb),
            gt(e.gb),
            gt(e.Ob),
            gt(e.wc),
            gt(e.Lb),
            et(e.A);
        for (var r = 0; 4 > r; ++r)
            gt(e.K[r].G);
        jr(e._, 1 << e.Y),
            jr(e.i, 1 << e.Y),
            gt(e.U.G),
            e.Q = 0,
            e.lb = 0,
            e.q = 0,
            e.s = 0
    }

    function Ir(e, r) {
        r > 0 && (Z(e.b, r),
            e.s += r)
    }

    function xr(e) {
        var r = 0;
        return e.D = H(e.b, e.m),
        e.D > 0 && (r = e.m[e.D - 2],
        r == e.n && (r += z(e.b, r - 1, e.m[e.D - 1], 273 - r))),
            ++e.s,
            r
    }

    function Nr(e) {
        e.b && e.S && (e.b.bc = null,
            e.S = 0)
    }

    function Or(e) {
        Nr(e),
            e.d.zb = null
    }

    function Ar(e, r) {
        e.ab = r;
        for (var t = 0; r > 1 << t; ++t)
            ;
        e.cc = 2 * t
    }

    function Hr(e, r) {
        var t = e.T;
        e.T = r,
        e.b && t != e.T && (e.wb = -1,
            e.b = null)
    }

    function Gr(e, r) {
        e.fc[0] = 9 * (5 * e.Y + e.eb) + e.fb << 24 >> 24;
        for (var t = 0; 4 > t; ++t)
            e.fc[1 + t] = e.ab >> 8 * t << 24 >> 24;
        k(r, e.fc, 0, 5)
    }

    function Wr(e, r) {
        if (e.Gc) {
            kt(e.d, e.C, (e.l << 4) + r, 1),
                kt(e.d, e.bb, e.l, 0),
                e.l = 7 > e.l ? 7 : 10,
                Kr(e._, e.d, 0, r);
            var t = Q(2);
            mt(e.K[t], e.d, 63),
                Rt(e.d, 67108863, 26),
                pt(e.U, e.d, 15)
        }
    }

    function Tr(e) {
        return 2048 > e ? Yt[e] : 2097152 > e ? Yt[e >> 10] + 20 : Yt[e >> 20] + 40
    }

    function Yr(e) {
        return 131072 > e ? Yt[e >> 6] + 12 : 134217728 > e ? Yt[e >> 16] + 32 : Yt[e >> 26] + 52
    }

    function Zr(e, r, t, o) {
        8 > t ? (kt(r, e.db, 0, 0),
            mt(e.Tb[o], r, t)) : (t -= 8,
            kt(r, e.db, 0, 1),
            8 > t ? (kt(r, e.db, 1, 0),
                mt(e.Xb[o], r, t)) : (kt(r, e.db, 1, 1),
                mt(e.dc, r, t - 8)))
    }

    function Vr(e) {
        e.db = t(2),
            e.Tb = t(16),
            e.Xb = t(16),
            e.dc = ft({}, 8);
        for (var r = 0; 16 > r; ++r)
            e.Tb[r] = ft({}, 3),
                e.Xb[r] = ft({}, 3);
        return e
    }

    function jr(e, r) {
        gt(e.db);
        for (var t = 0; r > t; ++t)
            gt(e.Tb[t].G),
                gt(e.Xb[t].G);
        gt(e.dc.G)
    }

    function $r(e, r, t, o, n) {
        var s, i, _, a, c;
        for (s = Zt[e.db[0] >>> 2],
                 i = Zt[2048 - e.db[0] >>> 2],
                 _ = i + Zt[e.db[1] >>> 2],
                 a = i + Zt[2048 - e.db[1] >>> 2],
                 c = 0,
                 c = 0; 8 > c; ++c) {
            if (c >= t)
                return;
            o[n + c] = s + dt(e.Tb[r], c)
        }
        for (; 16 > c; ++c) {
            if (c >= t)
                return;
            o[n + c] = _ + dt(e.Xb[r], c - 8)
        }
        for (; t > c; ++c)
            o[n + c] = a + dt(e.dc, c - 8 - 8)
    }

    function Kr(e, r, t, o) {
        Zr(e, r, t, o),
        0 == --e.nc[o] && ($r(e, o, e.pb, e.Cc, 272 * o),
            e.nc[o] = e.pb)
    }

    function qr(e) {
        return Vr(e),
            e.Cc = [],
            e.nc = [],
            e
    }

    function Jr(e, r, t) {
        return e.Cc[272 * t + r]
    }

    function Qr(e, r) {
        for (var t = 0; r > t; ++t)
            $r(e, t, e.pb, e.Cc, 272 * t),
                e.nc[t] = e.pb
    }

    function Ur(e, r, o) {
        var n, s;
        if (null == e.V || e.u != o || e.I != r)
            for (e.I = r,
                     e.oc = (1 << r) - 1,
                     e.u = o,
                     s = 1 << e.u + e.I,
                     e.V = t(s),
                     n = 0; s > n; ++n)
                e.V[n] = ot({})
    }

    function Xr(e, r, t) {
        return e.V[((r & e.oc) << e.u) + ((255 & t) >>> 8 - e.u)]
    }

    function et(e) {
        var r, t = 1 << e.u + e.I;
        for (r = 0; t > r; ++r)
            gt(e.V[r].ob)
    }

    function rt(e, r, t) {
        var o, n, s = 1;
        for (n = 7; n >= 0; --n)
            o = t >> n & 1,
                kt(r, e.ob, s, o),
                s = s << 1 | o
    }

    function tt(e, r, t, o) {
        var n, s, i, _, a = 1, c = 1;
        for (s = 7; s >= 0; --s)
            n = o >> s & 1,
                _ = c,
            a && (i = t >> s & 1,
                _ += 1 + i << 8,
                a = i == n),
                kt(r, e.ob, _, n),
                c = c << 1 | n
    }

    function ot(e) {
        return e.ob = t(768),
            e
    }

    function nt(e, r, t, o) {
        var n, s, i = 1, _ = 7, a = 0;
        if (r)
            for (; _ >= 0; --_)
                if (s = t >> _ & 1,
                    n = o >> _ & 1,
                    a += wt(e.ob[(1 + s << 8) + i], n),
                    i = i << 1 | n,
                s != n) {
                    --_;
                    break
                }
        for (; _ >= 0; --_)
            n = o >> _ & 1,
                a += wt(e.ob[i], n),
                i = i << 1 | n;
        return a
    }

    function st(e) {
        e.j = -1,
            e.t = 0
    }

    function it(e) {
        e.j = 0,
            e.t = 0
    }

    function _t(e, r) {
        return e.F = r,
            e.G = t(1 << r),
            e
    }

    function at(e, r) {
        var t, o = 1;
        for (t = e.F; 0 != t; --t)
            o = (o << 1) + vt(r, e.G, o);
        return o - (1 << e.F)
    }

    function ct(e, r) {
        var t, o, n = 1, s = 0;
        for (o = 0; e.F > o; ++o)
            t = vt(r, e.G, n),
                n <<= 1,
                n += t,
                s |= t << o;
        return s
    }

    function ut(e, r, t, o) {
        var n, s, i = 1, _ = 0;
        for (s = 0; o > s; ++s)
            n = vt(t, e, r + i),
                i <<= 1,
                i += n,
                _ |= n << s;
        return _
    }

    function ft(e, r) {
        return e.F = r,
            e.G = t(1 << r),
            e
    }

    function mt(e, r, t) {
        var o, n, s = 1;
        for (n = e.F; 0 != n;)
            --n,
                o = t >>> n & 1,
                kt(r, e.G, s, o),
                s = s << 1 | o
    }

    function dt(e, r) {
        var t, o, n = 1, s = 0;
        for (o = e.F; 0 != o;)
            --o,
                t = r >>> o & 1,
                s += wt(e.G[n], t),
                n = (n << 1) + t;
        return s
    }

    function pt(e, r, t) {
        var o, n, s = 1;
        for (n = 0; e.F > n; ++n)
            o = 1 & t,
                kt(r, e.G, s, o),
                s = s << 1 | o,
                t >>= 1
    }

    function ht(e, r) {
        var t, o, n = 1, s = 0;
        for (o = e.F; 0 != o; --o)
            t = 1 & r,
                r >>>= 1,
                s += wt(e.G[n], t),
                n = n << 1 | t;
        return s
    }

    function Pt(e, r, t, o, n) {
        var s, i, _ = 1;
        for (i = 0; o > i; ++i)
            s = 1 & n,
                kt(t, e, r + _, s),
                _ = _ << 1 | s,
                n >>= 1
    }

    function lt(e, r, t, o) {
        var n, s, i = 1, _ = 0;
        for (s = t; 0 != s; --s)
            n = 1 & o,
                o >>>= 1,
                _ += Zt[(2047 & (e[r + i] - n ^ -n)) >>> 2],
                i = i << 1 | n;
        return _
    }

    function vt(e, r, t) {
        var o, n = r[t];
        return o = (e.E >>> 11) * n,
            (-2147483648 ^ o) > (-2147483648 ^ e.Ab) ? (e.E = o,
                r[t] = n + (2048 - n >>> 5) << 16 >> 16,
            -16777216 & e.E || (e.Ab = e.Ab << 8 | l(e.zb),
                e.E <<= 8),
                0) : (e.E -= o,
                e.Ab -= o,
                r[t] = n - (n >>> 5) << 16 >> 16,
            -16777216 & e.E || (e.Ab = e.Ab << 8 | l(e.zb),
                e.E <<= 8),
                1)
    }

    function Bt(e, r) {
        var t, o, n = 0;
        for (t = r; 0 != t; --t)
            e.E >>>= 1,
                o = e.Ab - e.E >>> 31,
                e.Ab -= e.E & o - 1,
                n = n << 1 | 1 - o,
            -16777216 & e.E || (e.Ab = e.Ab << 8 | l(e.zb),
                e.E <<= 8);
        return n
    }

    function St(e) {
        e.Ab = 0,
            e.E = -1;
        for (var r = 0; 5 > r; ++r)
            e.Ab = e.Ab << 8 | l(e.zb)
    }

    function gt(e) {
        for (var r = e.length - 1; r >= 0; --r)
            e[r] = 1024
    }

    function kt(e, r, t, s) {
        var i, _ = r[t];
        i = (e.E >>> 11) * _,
            s ? (e.Ac = o(e.Ac, n(a(i), [4294967295, 0])),
                e.E -= i,
                r[t] = _ - (_ >>> 5) << 16 >> 16) : (e.E = i,
                r[t] = _ + (2048 - _ >>> 5) << 16 >> 16),
        -16777216 & e.E || (e.E <<= 8,
            bt(e))
    }

    function Rt(e, r, t) {
        for (var n = t - 1; n >= 0; --n)
            e.E >>>= 1,
            1 == (r >>> n & 1) && (e.Ac = o(e.Ac, a(e.E))),
            -16777216 & e.E || (e.E <<= 8,
                bt(e))
    }

    function Mt(e) {
        return o(o(a(e.Ib), e.qc), [4, 0])
    }

    function Dt(e) {
        e.qc = Gt,
            e.Ac = Gt,
            e.E = -1,
            e.Ib = 1,
            e.Oc = 0
    }

    function bt(e) {
        var r, t = c(p(e.Ac, 32));
        if (0 != t || s(e.Ac, [4278190080, 0]) < 0) {
            e.qc = o(e.qc, a(e.Ib)),
                r = e.Oc;
            do
                g(e.zb, r + t),
                    r = 255;
            while (0 != --e.Ib);
            e.Oc = c(e.Ac) >>> 24
        }
        ++e.Ib,
            e.Ac = m(n(e.Ac, [16777215, 0]), 8)
    }

    function wt(e, r) {
        return Zt[(2047 & (e - r ^ -r)) >>> 2]
    }

    function Et(e) {
        for (var r, t, o, n = 0, s = 0, i = e.length, _ = [], a = []; i > n; ++n,
            ++s) {
            if (r = 255 & e[n],
            128 & r)
                if (192 == (224 & r)) {
                    if (n + 1 >= i)
                        return e;
                    if (t = 255 & e[++n],
                    128 != (192 & t))
                        return e;
                    a[s] = (31 & r) << 6 | 63 & t
                } else {
                    if (224 != (240 & r))
                        return e;
                    if (n + 2 >= i)
                        return e;
                    if (t = 255 & e[++n],
                    128 != (192 & t))
                        return e;
                    if (o = 255 & e[++n],
                    128 != (192 & o))
                        return e;
                    a[s] = (15 & r) << 12 | (63 & t) << 6 | 63 & o
                }
            else {
                if (!r)
                    return e;
                a[s] = r
            }
            65535 == s && (_.push(String.fromCharCode.apply(String, a)),
                s = -1)
        }
        return s > 0 && (a.length = s,
            _.push(String.fromCharCode.apply(String, a))),
            _.join("")
    }

    function Lt(e) {
        var r, t, o, n = [], s = 0, i = e.length;
        if ("object" == typeof e)
            return e;
        for (R(e, 0, i, n, 0),
                 o = 0; i > o; ++o)
            r = n[o],
                r >= 1 && 127 >= r ? ++s : s += !r || r >= 128 && 2047 >= r ? 2 : 3;
        for (t = [],
                 s = 0,
                 o = 0; i > o; ++o)
            r = n[o],
                r >= 1 && 127 >= r ? t[s++] = r << 24 >> 24 : !r || r >= 128 && 2047 >= r ? (t[s++] = (192 | r >> 6 & 31) << 24 >> 24,
                    t[s++] = (128 | 63 & r) << 24 >> 24) : (t[s++] = (224 | r >> 12 & 15) << 24 >> 24,
                    t[s++] = (128 | r >> 6 & 63) << 24 >> 24,
                    t[s++] = (128 | 63 & r) << 24 >> 24);
        return t
    }

    function Ct(e) {
        return e[1] + e[0]
    }

    function yt(e, t, o, n) {
        function s() {
            for (var e, t = (new Date).getTime(); rr(a.c.ac);)
                if (i = Ct(a.c.ac.Sb) / Ct(a.c.Nb),
                (new Date).getTime() - t > 200)
                    return n ? n(i) : void 0 !== _ && r(i, _),
                        Nt(s, 0),
                        0;
            n ? n(1) : void 0 !== _ && r(1, _),
                e = S(a.c.rc),
                o ? o(e) : void 0 !== _;
            return {
                action: Ft,
                cbn: _,
                result: e
            }
        }

        var i, _, a = {};
        "function" != typeof o && (_ = o,
            o = n = 0),
            a.c = w({}, Lt(e), Vt(t)),
            n ? n(0) : void 0 !== _ && r(0, _);
        return s()
    }

    function zt(e, t, o) {
        function n() {
            for (var e, u = 0, f = (new Date).getTime(); rr(c.d.ac);)
                if (++u % 1e3 == 0 && (new Date).getTime() - f > 200)
                    return _ && (s = Ct(c.d.ac.$.g) / a,
                        o ? o(s) : void 0 !== i && r(s, i)),
                        Nt(n, 0),
                        0;
            _ && (o ? o(1) : void 0 !== i && r(1, i)),
                e = Et(S(c.d.rc)),
                t ? t(e) : void 0 !== i && postMessage({
                    action: It,
                    cbn: i,
                    result: e
                })
        }

        var s, i, _, a, c = {};
        "function" != typeof t && (i = t,
            t = o = 0),
            c.d = L({}, e),
            a = Ct(c.d.Nb),
            _ = a > -1,
            o ? o(_ ? 0 : -1) : void 0 !== i && r(_ ? 0 : -1, i),
            Nt(n, 0)
    }

    var Ft = 1
        , It = 2
        , xt = 3
        , Nt = "function" == typeof setImmediate ? setImmediate : setTimeout
        , Ot = 4294967296
        , At = [4294967295, -Ot]
        , Ht = [0, -0x8000000000000000]
        , Gt = [0, 0]
        , Wt = [1, 0]
        , Tt = function () {
        var e, r, t, o = [];
        for (e = 0; 256 > e; ++e) {
            for (t = e,
                     r = 0; 8 > r; ++r)
                0 != (1 & t) ? t = t >>> 1 ^ -306674912 : t >>>= 1;
            o[e] = t
        }
        return o
    }()
        , Yt = function () {
        var e, r, t, o = 2, n = [0, 1];
        for (t = 2; 22 > t; ++t)
            for (r = 1 << (t >> 1) - 1,
                     e = 0; r > e; ++e,
                     ++o)
                n[o] = t << 24 >> 24;
        return n
    }()
        , Zt = function () {
        var e, r, t, o, n = [];
        for (r = 8; r >= 0; --r)
            for (o = 1 << 9 - r - 1,
                     e = 1 << 9 - r,
                     t = o; e > t; ++t)
                n[t] = (r << 6) + (e - t << 6 >>> 9 - r - 1);
        return n
    }()
        , Vt = function () {
        var e = [{
            s: 16,
            f: 64,
            m: 0
        }, {
            s: 20,
            f: 64,
            m: 0
        }, {
            s: 19,
            f: 64,
            m: 1
        }, {
            s: 20,
            f: 64,
            m: 1
        }, {
            s: 21,
            f: 128,
            m: 1
        }, {
            s: 22,
            f: 128,
            m: 1
        }, {
            s: 23,
            f: 128,
            m: 1
        }, {
            s: 24,
            f: 255,
            m: 1
        }, {
            s: 25,
            f: 255,
            m: 1
        }];
        return function (r) {
            return e[r - 1] || e[6]
        }
    }();
    return yt
}();
var _$_480d = ["use strict", "year", "1.6.5", "run", "config", "app", "ui.router", "ngDialog", "ngFlatDatepicker", "ngclipboard", "module", "$inject", "$httpProvider", "$stateProvider", "$urlRouterProvider", "$locationProvider", "ngDialogProvider", "useXDomain", "defaults", "withCredentials", "X-Requested-With", "common", "headers", "ngdialog-theme-default", "setDefaults", "httpInterceptor", "push", "interceptors", "/index.html", "otherwise", "main.frame.help", "/frame/help", "views/help/help.html?v=", "baseController", "state", "main.frame.notices", "/frame/notices", "views/msg/notices.html?v=", "noticesController", "main.frame.wallet", "/frame/wallet", "views/funds/wallet.html?v=", "walletController", "main.frame.withdrawconfirm", "/frame/withdrawconfirm", "views/funds/withdrawconfirm.html?v=", "withdrawController", "main.frame.withdraw", "/frame/withdraw", "views/funds/withdraw.html?v=", "main.frame.rechargeresult", "/frame/rechargeresult", "views/funds/rechargeresult.html?v=", "rechargeController", "main.frame.bankoption", "/frame/bankoption", "views/funds/bankoption.html?v=", "main.frame.qrcodescan", "/frame/qrcodescan", "views/funds/qrcodescan.html?v=", "main.frame.bankremit", "/frame/bankremit", "views/funds/bankremit.html?v=", "main.frame.recharge", "/frame/recharge", "views/funds/recharge.html?v=", "main.frame.memberapi", "/frame/memberapi", "views/member/memberapi.html?v=", "membercenterController", "main.frame.suggest", "/frame/suggest", "views/msg/suggest.html?v=", "messageController", "main.frame.msglist", "/frame/msglist", "views/msg/msglist.html?v=", "main.frame.message", "/frame/message", "views/msg/msggroup.html?v=", "main.frame.promotion", "/frame/promotion", "views/team/promotion.html?v=", "promController", "main.frame.dividendset", "/frame/dividendset", "views/query/dividendSet.html?v=", "queryController", "main.frame.ylwage", "/frame/ylwage", "views/query/memberYlWage.html?v=", "main.frame.rankwageresult", "/frame/rankwageresult", "views/query/memberWageResult.html?v=", "main.frame.rankwage", "/frame/rankwage", "views/query/memberRankWage.html?v=", "main.frame.wage", "/frame/wage", "views/query/memberWage.html?v=", "main.frame.bonusdetails", "/frame/bonusdetails", "views/help/bonusdetails.html?v=", "main.frame.ylbetrecord", "/frame/ylbetrecord", "views/query/ylbetRecord.html?v=", "main.frame.transferrecord", "/frame/transferrecord", "views/query/transferRecord.html?v=", "main.frame.teamstats", "/frame/teamstats", "views/query/teamStats.html?v=", "main.frame.submemberstat", "/frame/submemberstat", "views/query/submemberstat.html?v=", "main.frame.ylteamreport", "/frame/ylteamreport", "views/query/ylTeamReport.html?v=", "main.frame.ylreport", "/frame/ylreport", "views/query/ylReport.html?v=", "main.frame.teamreport", "/frame/teamreport", "views/query/teamReport.html?v=", "main.frame.personreport", "/frame/personreport", "views/query/personReport.html?v=", "main.frame.teamwdra", "/frame/teamwdra", "views/query/teamWdraRecord.html?v=", "main.frame.teamrchg", "/frame/teamrchg", "views/query/teamRchgRecord.html?v=", "main.frame.teamchasere", "/frame/teamchasere", "views/query/teamChasereRecord.html?v=", "main.frame.teamvrbet", "/frame/teamvrbet", "views/query/teamVRBetRecord.html?v=", "main.frame.teambet", "/frame/teambet", "views/query/teamBetRecord.html?v=", "main.frame.wdra", "/frame/wdra", "views/query/wdraRecord.html?v=", "main.frame.rchg", "/frame/rchg", "views/query/rchgRecord.html?v=", "main.frame.order", "/frame/order", "views/query/orderRecord.html?v=", "main.frame.vrbet", "/frame/vrbet", "views/query/vrbetRecord.html?v=", "main.frame.acd", "/frame/acd", "views/query/acdRecord.html?v=", "main.frame.ac", "/frame/ac", "views/query/acRecord.html?v=", "main.frame.chasere", "/frame/chasere", "views/query/chasereRecord.html?v=", "main.frame.bet", "/frame/bet", "views/query/betRecord.html?v=", "main.frame.bank", "/bank", "views/safe/bank.html?v=", "bankController", "main.frame.memberlist", "/frame/memberlist", "views/member/memberlist.html?v=", "memberlistController", "main.frame.safecenter", "/frame/safecenter", "views/safe/safecenter.html?v=", "safecenterController", "main.frame.membercenter", "/frame/membercenter", "views/member/membercenter.html?v=", "main.frame", "main.lotteryxy", "/lotteryxy", "views/lottery/lotteryxy.html?v=", "lotteryxyController", "main.lottery", "/lottery", "views/lottery/lottery.html?v=", "lotteryController", "main.notices", "/notices", "main.hall", "/hall", "views/home/hall.html?v=", "main.rec", "\u5168\u90e8", "/rec", "views/home/rec.html?v=", "recController", "main.home", "/home", "views/home/home.html?v=", "homeController", "main", "/main", "views/main.html?v=", "mainController", "safe.offsite", "/offsite", "views/safe/offsite.html?v=", "offsiteController", "safe.freeze", "/freeze", "views/safe/freeze.html?v=", "freezeController", "safe.forget", "/forget", "views/safe/forget.html?v=", "forgetController", "safe.reg", "/reg", "views/safe/reg.html?v=", "regController", "safe.login", "/login", "views/safe/login.html?v=", "loginController", "safe.check", "/check", "views/safe/check.html?v=", "checkController", "safe", "<ui-view name=\"safe\"></ui-view>", "index", "/", "$rootScope", "$state", "$stateParams", "$http", "$timeout", "$location", "comServices", "wlaServices", "?", "#", "replace", "absUrl", "indexOf", "substr", "jsversion", "apiservers", "\u9ed8\u8ba4", "smartlayout", "defulatBody", "url", "\u7248\u672c\u66f4\u65b0", "\u670d\u52a1\u5668\u7248\u672c\uff1a", "\uff0c\u5f53\u524d\u7248\u672c\uff1a", "\uff0c\u68c0\u6d4b\u60a8\u5f53\u524d\u4e0d\u662f\u6700\u65b0\u7248\u672c\uff08\u5982\u4e0d\u66f4\u65b0\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u5f53\u524d\u4f7f\u7528\uff09\uff0c\u5efa\u8bae\u6e05\u7406\u60a8\u7684\u6d4f\u89c8\u5668\u7f13\u5b58\u540e\u518d\u91cd\u65b0\u6253\u5f00\u5373\u53ef\u5b8c\u6210\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002<a href=\"http://jingyan.baidu.com/article/8065f87fc59f1723312498f1.html\" target=\"_blank\">\u5982\u4f55\u6e05\u7406\uff1f</a>", "onlynotify", "\u89e3\u6790\u670d\u52a1\u5668\u5931\u8d25", "\u8bf7\u5173\u95ed\u7a0b\u5e8f\u540e\u91cd\u65b0\u8fd0\u884c\uff01", "notifyfail", "success", "getRes", "datepickerConfig", "YYYY-MM-DD 03:00", "$stateChangeStart", "name", "public", "noIpOrArea", "href", "location", "/pages/noIp/index.html", "post", "$on", "$stateChangeSuccess", "user", "token", "expire", "backgroundStyle", "lotBody", "defaultTop", "defaultFooter", "defaultHeader", "$stateChangeError", "preventDefault", "\u8fde\u63a5\u5931\u8d25", "\u8fde\u63a5\u670d\u52a1\u5668\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\uff01", "isnotnull", "$current", "monitor", "online", "nid", "data", "csurl", "betpwd", "parse", "ntitle", "nsummary", "<a ng-click=\"closeThisDialog();\" ui-sref=\"main.notices({id:", "})\">\u3010\u67e5\u8be2\u8be6\u60c5\u3011</a>", "setUserInfo", "dpmd5", "init", "lottery", "getResByVer", "initxy", "lotteryxy", "isShowAddToHomeScreen", "load", "toLocaleLowerCase", "userAgent", "navigator", "chrome", "serviceWorker", "/sw.min.js?v=", "then", "register", "beforeinstallprompt", "prompt", "outcome", "accepted", "remove", "addToHomeScreenByChrome", "getElementById", "userChoice", "addEventListener", "appinstalled", "bind", "element", "blankApp", "controller", "$scope", "$interval", "rchgVM", "", "modes", "funds", "getRchgTypeMode", "bcnum", "\u5145\u503c", "\u672a\u7ed1\u5b9a\u94f6\u884c\u5361\uff0c\u8bf7\u5148\u7ed1\u5b9a\u94f6\u884c\u5361\u540e\u518d\u8fdb\u884c\u5145\u503c\u64cd\u4f5c\uff01", "go", "onlyconfirm", "length", "types", "id", "dtype", "notify", "selectType", "status", "forEach", "type", "selectMode", "mode", "selectMoney", "money", "recharge", "isnull", "code", "1000000000001", "mark", "bankpayremit2", "confirm", "moneys", "getPayQrCode", "\u626b\u63cf\u4e8c\u7ef4\u7801", "<img src=\"", "\">", "lastRechargeId", "\u63d0\u793a", "\u60a82\u5c0f\u65f6\u5185\u5df2\u7ecf\u6709\u4e00\u7b14\u5145\u503c\u7533\u8bf7\uff0c\u662f\u5426\u7ee7\u7eed\u4f7f\u7528\u4e0a\u4e00\u7b14\u7533\u8bf7\u4fe1\u606f\uff1f", "lastMoney", "clientName", "lastClientName", "thisRechargeId", "recevie", "bankName", "lastAccountName", "lastAccountNum", "confirmRecharge", "overconfirm", "newMoney", "message", "onSuccess", "\u590d\u5236", "\u590d\u5236\u6210\u529f\uff01", "autoCloseDialog", "onError", "\u6d4f\u89c8\u5668\u7248\u672c\u592a\u4f4e\uff0c\u8bf7\u66f4\u65b0\u60a8\u7684\u6d4f\u89c8\u5668\uff01", "rechargeConfirm", "bankpayremit", "accountName", "bankAccount", "selectBank", "bank", "goRchgRecord", "goRecharge", "confirmOption", "form", "createElement", "onlineForm", "method", "action", "req", "target", "_blank", "input", "hidden", "value", "appendChild", "bk", "ip", "sign", "body", "submit", "removeChild", "<h3>\u5728\u7ebf\u5145\u503c\u63d0\u793a</h3>", "<br /><p>\u8bf7\u5728\u65b0\u5f00\u9875\u9762\u4e0a\u5b8c\u6210\u6c47\u6b3e\uff01</p><br />", "<div class=\"ngdialog-buttons\">", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-primary\" ng-click=\"closeThisDialog();goRecharge()\">\u7ee7\u7eed\u8fdb\u884c\u4ed8\u6b3e</button>", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-secondary\" ng-click=\"closeThisDialog();goRchgRecord()\">\u67e5\u770b\u4ed8\u6b3e\u7ed3\u679c</button>", "</div>", "openConfirm", "time", "2:00:00", "letime", "leaveTime", "timerInterval", "cancel", "\u8bf7\u8fd4\u56de\u91cd\u65b0\u53d1\u8d77\u7533\u8bf7\uff01", "diff", "hour", "fftime", ":", "minute", "second", "floor", "$destroy", "current", "transferVM", "clientVM", "agaming", "getWallet", "balance", "handlefail", "switchType", "item2", "wallet1", "wallet2", "switchMoney", "item1", "filterId1", "filterId2", "wallet", "pwd", "key", "item3", "md5", "transfer", "\u94b1\u5305\u8f6c\u8d26", "switchWallet", "getAccount", "list", "ctrlName", "uptAllWallet", "<font color=\"blue\">", "\uff1a\u66f4\u65b0\u6210\u529f\uff01</font><br/>", "<font color=\"red\">", "\uff1a", "</font><br/>", "\u94b1\u5305", "tsfAllWallet", "\u8f6c\u56de\u7684\u91d1\u989d\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e1\uff0c\u5f53\u524d\u6ca1\u6709\u53ef\u8f6c\u56de\u7684\u91d1\u989d\uff01", "$sce", "$controller", "extend", "getTikuanPageData", "tikuanMoney", "minMoney", "isF", "\uff1a\u8d44\u91d1\u5bc6\u7801\u672a\u8bbe\u7f6e\uff0c\u9700\u8981\u5148\u8bbe\u7f6e\u8d44\u91d1\u5bc6\u7801\u3002", "updatePwd", "promptInfo", "\u6e29\u99a8\u63d0\u793a", "openconfirm", "wd", "getWithdrawAndVirtual", "expToArrive", "fee", "currentBank", "rate", "withdraw", "calculateWithdrawFee", "userBankId", "\u63d0\u6b3e\u7533\u8bf7", "confirmWithdraw", "fundsPass", "\u63d0\u73b0\u7533\u8bf7\u6210\u529f", "chooseBank", "isShowGoogle", "bankList", "isGByUsdt", "isG", "showMainWin", "pageIndex", "pageNavIndex", "pageSubNavIndex", "pageCurrentState", "openMainWin", "switchFramePage", "closeMainWin", "switchMainPage", "gogame", "getGameUrl", "post.html", "dynamicpost", "<a class=\"button\" style=\"color:#fff;\" href=\"", "\" target=\"_blank\">\u70b9\u51fb\u6211\u7acb\u5373\u8fdb\u5165\u3010", "\u3011</a>", "\u8fdb\u5165\u6e38\u620f", "switchLottery", "vr", "vrbet", "lotteryId", "lotteryType", "gorec", "PKTT", "recCurrentId", "recCurrentPf", "recCurrentType", "home", "web", "param", "star", "star_o", "security", "<i class=\"i if if94\"></i>", "<i class=\"i if if95\"></i>", "trustAsHtml", "notices", "topNotice", "title", "setTopNotice", "summary", "<a style=\"font-size:18px;\" ng-click=\"closeThisDialog();\" ui-sref=\"main.notices({id:", "})\">\u3010\u67e5\u770b\u8be6\u60c5\u3011</a>", "announcement", "\u83b7\u5f97\u6570\u636e", "confirmOffsite", "offsite", "tuple", "views/safe/closeOffsite.html?v=", "open", "switchOffsite", "\u5f02\u5730\u767b\u5f55\u9a8c\u8bc1", "\u786e\u5b9a\u8981", "\u5173\u95ed", "\u5f00\u542f", "\u5f02\u5730\u767b\u5f55\u9a8c\u8bc1\u5417\uff1f", "closeOffsite", "$emit", "setOpenMainWin", "csController", "reGetCsUrl", "cs", "getcs", "c", "clientURL", "reGetGcData", "qz", "getqz", "gc", "indexController", "dataVM", "phoneClient", "dict", "views/index/phone.html?v=", "\u8bfb\u53d6\u6570\u636e", "\u83b7\u53d6\u5404\u7248\u672cAPP\u4e0b\u8f7d\u5730\u5740\u5931\u8d25\uff01", "linesController", "lines", "\u5f53\u524d\u7ebf\u8def", "toString", "splice", "\u7ebf\u8def", "baseLotteryController", "$window", "isShowXY", "isNeedBetPwd", "showLotteryMenu", "showGamesMenu", "defOpencode", "--", "curHelpers", "isShowHelper", "isLoadHelper", "cancelBetMode", "myCustomPlay", "query", "getCustomPlay", "setCustomGroup", "saveCustomPlay", "ecp", "getCustomGroupId", "getGroups", "l", "g", "i", ",", "member", "\u5e38\u7528\u73a9\u6cd5", "switchEcp", "cancelBet", "\u786e\u5b9a\u8981\u64a4\u5355\u5417\uff1f", "\u6295\u6ce8\u64a4\u5355", "confirmCancelBet", "bet", "betCancel", "\u5df2\u64a4\u5355", "optHelper", "curPlayId", "getHelpers", "des", "setHelpers", "dp", "helpdes", "optPattern", "pattern", "curPlay", "toFixed", "optMultiple", "multiple", "optTrend", "getTrendUrl", "n", "curLottery", "<a ng-click=\"closeThisDialog()\" href=\"", "\u3011\u8d70\u52bf\u56fe</a>", "\u8d70\u52bf\u56fe", "unique", "content", "importfile", "File", "FileList", "FileReader", "file", "change", "click", "\u9a8c\u8bc1", "\u60a8\u7684\u6d4f\u89c8\u5668\u7248\u672c\u592a\u4f4e\uff0c\u4e0d\u652f\u6301\u5355\u5f0f\u6587\u4ef6\u5bfc\u5165\u53f7\u7801\uff0c\u8bf7\u5347\u7ea7\u60a8\u7684\u6d4f\u89c8\u5668\uff01", "onloadend", ".", "lastIndexOf", "txt", "\u8bf7\u9009\u62e9TXT\u7c7b\u578b\u7684\u6587\u4ef6\uff01", "result", "innerHTML", "my_file", "<input id=\"file\" type=\"file\" accept=\".txt\" />", "files", "gb2312", "readAsText", "getCurName", "[", "]-[", "curCategoryName", "curPlayName", "]", "betList", "winIsStop", "betNumList", "chaseNumList", "totalQuantity", "totalAmount", "totalChaseAmount", "totalBonus", "totalChaseBonus", "totalBonusString", "addBet", "test", "quantity", "amount", "\u6295\u6ce8\u53f7\u7801\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u6216\u8f93\u5165\uff01", "\u6295\u6ce8\u91d1\u989d\u4e0d\u80fd\u4f4e\u4e8e0.2\u5143\uff01", "bonusInfo", "position", "unshift", "getBetBonus", "getRealTimeBonus", "rtb", "initPlay", "directBet", "betType", "confirmBet", "betNGDialog", "views/lottery/betConfirm.html?v=", "beting", "issuo", "betPwd", "startBet", "latelyType", "refreshLately", "confirmClearBet", "close", "chaseNGDialog", "fail", "\u8f93\u5165\u6295\u6ce8\u5bc6\u7801", "ids", "getLotteryInfo", "printing", "betResult", "\u6295\u6ce8\u7ed3\u679c", "confirmPrint", "isUpdateLotInfo", "regetLotteryInfo", "confirmprint", "rebetNGDialog", "reBet", "reBetMode", "views/lottery/rebetConfirm.html?v=", "confirmReBet", "startReBet", "join", "betPrint", "width=", "availWidth", "screen", ",height=", "availHeight", ",top=0,left=0", "bets", "chaseres", "<!DOCTYPE html>", "<html>", "<head>", "<meta charset=\"utf-8\">", "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">", "<style media=\"print\">", "body { font-size: 12px; }", "@page { size: auto; margin: 0mm; }", "@media print { .noprint { display: none; }}", "</style>", "<title>\u6253\u5370</title>", "</head>", "<body>", "<table style=\"border:0px;\">", "<tr><td colspan=\"3\">", "  -  ", "\u6295\u6ce8", "\u8ffd\u53f7", "\u6e05\u5355</td></tr>", "<tr><td>\u8ba2\u5355</td><td colspan=\"2\">", "</td></tr>", "<tr><td>\u5f69\u79cd</td><td colspan=\"2\">", "<tr><td>\u671f\u53f7</td><td colspan=\"2\">", "<tr><td>", "play", "</td><td>", "</td><td>\uffe5", "\u5143</td></tr>", "<tr><td>\u65f6\u95f4</td><td colspan=\"2\">", "<tr><td>\u603b\u989d</td><td colspan=\"2\">\uffe5", "total", "<tr class=\"noprint\"><td></td><td colspan=\"2\"><input type=\"button\" value=\"\u5173    \u95ed\" onclick=\"window.close()\" /></td></tr>", "<tr class=\"noprint prompt\"><td colspan=\"3\" style=\"color:red;\">\u6e29\u99a8\u63d0\u793a\uff1a\u8bf7\u5173\u95ed\u8be5\u7a97\u4f53\u540e\u624d\u80fd\u7ee7\u7eed\u6295\u6ce8\u548c\u6253\u5370\uff01</td></tr>", "</table>", "<script>window.print();</script>", "</body>", "</html>", "document", "write", "delBet", "clearBet", "\u6e05\u9664\u5f69\u7968\u8d2d\u7269\u8f66", "\u786e\u5b9a\u8981\u6e05\u9664\u5f69\u7968\u8d2d\u7269\u8f66\u6240\u6709\u7684\u6295\u6ce8\u6e05\u5355\u5417\uff1f", "showBet", "$new", "views/lottery/betInfo.html", "chaseList", "chase", "minRate", "startMultiple", "separate", "times", "periods", "totalPeriods", "icn", "\u6295\u6ce8\u91d1\u989d\u8fc7\u5927\uff0c\u65e0\u6cd5\u8fdb\u884c\u8ffd\u53f7\u64cd\u4f5c\uff01", "max", "views/lottery/chase.html", "genchase", "profit", "\u5f53\u524d\u8ffd\u53f7\u65b9\u6848\u603b\u6295\u6ce8\u989d\u5927\u4e8e20\u4e07\uff0c\u8bf7\u60a8\u964d\u4f4e\u6536\u76ca\u7387\u6216\u8005\u51cf\u5c11\u8ffd\u53f7\u671f\u6570\uff01", "period", "bonus", "user.rebate", "curCategoryId", "getXYBonus", "getBonus", "$watch", "chase.chaseList", "confirmChase", "\u751f\u6210\u7684\u8ffd\u53f7\u8ba1\u5212\u65e0\u6548\uff0c\u8bf7\u91cd\u65b0\u751f\u6210\uff01", "\u7b2c\u3010", "\u3011\u671f\u8ffd\u53f7\u500d\u6570\u5fc5\u987b\u4e3a\u5927\u4e8e0\u7684\u6574\u6570\uff01", "showopencode", "switchShowOpenCode", "getLatelyOpenCode", "latelyOpenCode", "showendprompt", "optPropmt", "latelyBet", "latelyChase", "latelyAccount", "latelyPftLoss", "latelyRchg", "latelyWdra", "gglloading", "getLatelyBet", "getLatelyChase", "getLatelyAccount", "getLatelyPftLoss", "getLatelyRchg", "getLatelyWdra", "switchLatelyType", "curCategorys", "lotteryPlay", "getCategorys", "getCategorysxy", "b", "curGroups", "getPlayxy", "convertPlayxy", "lastPlay", "getPlay", "convertPlay", "calculation", "gliloading", "opencodeing", "lotteryTimeOut", "lotteryOpenTimeOut", "getLottery", "endtimestr", "00:00:00", "opentimestr", "\u5f00\u5956\u53f7\u7801", "**********", "lastissuo", "openissuo", "nowtime", "endtime", "opentime", "lastendtime", "lastopentime", "opencode", "\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u7b49......", "num", "showend", "lotteryTimeInterval", "isMoment", "s", "add", "isSame", "isBefore", "interval", "millisecondsToTime", "[ ", "round", " ]\u79d2\u540e\u5f00\u5956", "bettimestr", "\u6295\u6ce8\u5269\u4f59\u65f6\u95f4", "\u6b63\u5728\u5237\u65b0\u4e2d...", "opencodestr", "getOpenCode", "\u5b98\u65b9\u505c\u552e", "msg", "\u6682\u672a\u5f00\u653e", "\u4e34\u65f6\u7ef4\u62a4", "\u83b7\u53d6\u5f69\u7968\u4fe1\u606f\u5931\u8d25\uff0c\u786e\u5b9a\u8981\u91cd\u65b0\u83b7\u53d6\u4e00\u6b21\u5417\uff1f", "\u83b7\u53d6\u5f69\u7968\u4fe1\u606f\u5931\u8d25", "getOpenCodeFailNum", "\u6b63\u5728\u5f00\u5956\u4e2d...", "- - - - -", "updateBetStatusTimeOut", "updateBetStatus", "showinfo", "volumeup", "lotwinlist", "\u672a\u5f00\u5956", "getLatelyBetStatus", "\u5df2\u4e2d\u5956", "/res/info.wav", "switchVolume", "betDetailController", "extendMessage", "getBetDetail", "pId", "pName", "\u6295\u6ce8\u8be6\u60c5", "allowCancel", "betDetailExtend", "\u6b63\u5728\u52aa\u529b\u52a0\u8f7d\u4e2d...\u8bf7\u8010\u5fc3\u7b49\u5f85\uff01", "getNumberDetail", "chaseDetailController", "getChasereDetail", "pType", "\u8ffd\u53f7\u8be6\u60c5", "cancelChase", "\u8ffd\u53f7\u64a4\u5355", "confirmCancelChase", "issuoList", "\u8bf7\u9009\u62e9\u9700\u8981\u64a4\u5355\u7684\u671f\u53f7\uff01", "betTraceCancel", "isall", "all", "chasereDetailExtend", "lotteryPrintController", "autoMoeny", "bonusmode", "switchBonusMode", "quickMoneyPos", "quickMoney", "getQuickMoneys", "showQuickMoney", "openQuickDialog", "openQuickMoney", "views/lottery/quickMoney.html?v=", "saveQuickMoney", "setQuickMoneys", "curZ", "autoFill", "m", "innerHeight", "pageY", "left", "pageX", "top", "stopPropagation", "cancelBubble", "event", "setQuickMoney", "initBet", "realTimeBonus", "rows", "h", " - ", "p", "=", "y", "getRealTimeBonusXY", "\u6295\u6ce8\u91d1\u989d\u4e3a\u7a7a\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u6295\u6ce8\u91d1\u989d\uff01", "\u6e05\u9664\u6240\u6709\u6295\u6ce8\u91d1\u989d", "\u786e\u5b9a\u8981\u6e05\u9664\u6240\u6709\u6295\u6ce8\u91d1\u989d\u5417\uff1f", "vrbetDetailController", "getVRBetDetail", "\uff36\uff32\u6295\u6ce8\u8be6\u60c5", "getVRNumberDetail", "nva", "sub", "params", "menuAuth", "webMenu", "setUserByRootScope", "\u7528\u6237\u767b\u5f55", "moneyloading", "showmoney", "showleft", "showlotmenu", "switchShow", "lot", "getBalance", "fast", "switchPage", "printOrder", "openPrintOrder", "views/lottery/betPrintOrder.html", "printOrderData", "getBetPrintOrder", "logout", "membercenter", "\u7528\u6237\u4e2d\u5fc3", "greetings", "nickName", "greetingsDialog", "views/member/greetings.html?v=", "confirmGreetings", "nick", "isNewApiKey", "getMemberApi", "\u81ea\u52a8\u6302\u673a\u63a5\u53e3", "openMemberApi", "closeMemberApi", "\u7533\u8bf7\u81ea\u52a8\u6302\u673a\u63a5\u53e3", "clientPwd", "123456", "condition", "operatMember", "getMemberBouns", "regVM", "memberBouns", "currentDialog", "views/member/memberadd.html?v=", "\u4f1a\u5458\u7ba1\u7406", "save", "operat", "getTime", "strength", "lpwd", "\u4f1a\u5458\u540d\u79f0\uff1a", "\x0A", "\u9884\u8bbe\u5bc6\u7801\uff1a", "\u4f1a\u5458\u7c7b\u578b\uff1a", "\u4ee3\u7406", "\u4f1a\u5458", "\u4f1a\u5458\u5956\u91d1\uff1a", "\u5f53\u524d\u7ebf\u8def\uff1a", "hostname", "confirmclip", "getMember", "rowCount", "queryMember", "recordType", "querySubMeber", "memberName", "tsfValid", "tsfVM", "tsfOpenVM", "views/funds/tsfmember.html?v=", "views/funds/tsfopen.html?v=", "\u4f1a\u5458\u8f6c\u8d26", "tsfOpen", "fpwd", "tsfClose", "tsfMember", "rytsfOpen", "views/funds/rytsfmember.html?v=", "rytsfMember", "\u4efb\u610f\u8f6c\u8d26", "btsfOpen", "btsfModel", "btsfVM", "\u6a21\u677f\u4e00", "0", "getBtsfSet", "btsfData", "btsfSelect", "views/funds/btsfmember.html?v=", "btsfSetSave", "saveBtsfSet", "\u6279\u91cf\u8f6c\u8d26", "addRow", "delRow", "\u5fc5\u987b\u4fdd\u7559\u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u7684\u4f1a\u5458\u4fe1\u606f\uff01", "btsfMember", "names", "banMemberBet", "banMember", "allowBet", "\u7981\u6b62\u4f1a\u5458\u6295\u6ce8", "\u60a8\u786e\u5b9a\u8981\u7981\u6b62\u4f1a\u5458\u3010", "\u3011\u6295\u6ce8\u5417\uff1f", "confirmBanMemberBet", "\u89e3\u9664\u7981\u6b62\u4f1a\u5458\u6295\u6ce8", "\u60a8\u786e\u5b9a\u8981\u89e3\u9664\u7981\u6b62\u4f1a\u5458\u3010", "NaN", "childMembers", "beginTime", "endTime", "defulatMsg", "getMsgGroup", "pageCount", "\u9519\u8bef", "openMessageSend", "showMessageSend", "getChildMembers", "receives", "cond", "views/msg/msgsend.html?v=", "switchMember", "\u6240\u6709\u4f1a\u5458", "isshow", "fitCond", "sender", "\u77ed\u6d88\u606f", "delMsgGroup", "delAllMsgGroup", "msgGroup", "msgInfo", "groupId", "getMsgList", "reply", "now", "\u6211", "answer", "getSuggestList", "addSuggest", "\u6295\u8bc9\u5efa\u8bae", "notice", "getNoticeList", "loadContent", "\u901a\u77e5\u516c\u544a", "getNoticeContent", "$filter", "clientData", "jumpurl", "jump", "sorting", "sortStatus", "orderBy", "getlotterys", "getLotterys", "lotterys", "\u83b7\u5f97\u5f69\u79cd", "getyltypes", "rec", "getYuleTypes", "yltypes", "\u83b7\u5f97\u5a31\u4e50\u7c7b\u578b", "changeDay", "getBlottersType", "blottersType", "\u5e10\u53d8\u8bb0\u5f55", "getBlottersDividendType", "blottersDividendType", "getAccountDividend", "\u5206\u7ea2\u5e10\u53d8\u8bb0\u5f55", "recordId", "getDividendSet", "\u5206\u7ea2\u7ba1\u7406", "switchCycle", "addRule", "dividendRule", "delRule", "useTlp", "getDividendRule", "dividendSet", "curNgDialog", "curMember", "views/member/setdividend.html?v=", "saveDividendSet", "filterId", "grant", "wallets", "grantDividendVM", "mustgrant", "views/member/grantdividend.html?v=", "onekeygrant", "calculateOneKeyGrantDividend", "views/member/onekeygrant.html?v=", "grantDividend", "grentDividend", "oneKeyGrantDividend", "getMemberWage", "\u5de5\u8d44\u7ba1\u7406", "setWage", "wageVM", "wage", "getAllowSetWage", "wageInfo", "views/member/setwage.html?v=", "saveWage", "getMemberRankWage", "\u6392\u540d\u5de5\u8d44\u7ba1\u7406", "setRankWage", "getAllowSetRankWage", "views/member/setrankwage.html?v=", "saveRankWage", "yesterDay", "getMemberWageResult", "\u6392\u540d\u5de5\u8d44\u67e5\u8be2", "getMemberYlWage", "\u5a31\u4e50\u5de5\u8d44\u7ba1\u7406", "setYlWage", "getAllowSetYlWage", "setWageVM", "views/member/setylwage.html?v=", "saveYlWage", "stime", "\u5f53\u524d", "issuoNo", "getBet", "\u6211\u7684\u6295\u6ce8", "getVRBet", "\u6211\u7684VR\u6295\u6ce8", "getChasere", "\u6211\u7684\u8ffd\u53f7", "getBankAbb", "banks", "getOrder", "\u94f6\u884c\u8ba2\u5355", "getRecharge", "\u6211\u7684\u5145\u503c", "getWithdrawals", "\u6211\u7684\u63d0\u6b3e", "queryType", "\u56e2\u961f\u6295\u6ce8", "\u67e5\u8be2\u6240\u6709\u4e0b\u7ea7\u65f6\uff0c\u5fc5\u987b\u8f93\u5165\u4f1a\u5458\u540d\uff01", "getTeamBet", "\u56e2\u961fVR\u6295\u6ce8", "getTeamVRBet", "\u56e2\u961f\u8ffd\u53f7", "getTeamChasere", "getTeamRecharge", "\u56e2\u961f\u5145\u503c", "getTeamWithdrawals", "\u56e2\u961f\u63d0\u6b3e", "getPersonReport", "\u4e2a\u4eba\u62a5\u8868", "getTeamReport", "levs", "\u56e2\u961f\u62a5\u8868", "getYlBetRecord", "\u5a31\u4e50\u6295\u6ce8\u8bb0\u5f55", "getYLReport", "\u5a31\u4e50\u62a5\u8868", "getYLTeamReport", "getSubStatic", "\u4e0b\u7ea7\u72b6\u6001", "curMemberName", "setIsBReprot", "\u786e\u8ba4\u8bbe\u7f6e", "\u4e00\u65e6\u88ab\u8bbe\u7f6e\uff0c\u5c31\u6c38\u8fdc\u90fd\u662f\u7eaf\u65e0\u5206\u7ea2\u6a21\u5f0f\u4e86\uff0c\u4e0d\u53ef\u4ee5\u518d\u6539\u56de\u7efc\u5408\u6a21\u5f0f\uff0c\u786e\u8ba4\u8981\u8bbe\u7f6e\u5417\uff1f", "confirmSetIsBReprot", "\u8bbe\u7f6e\u7ed3\u679c", "getTeamStats", "\u56e2\u961f\u7edf\u8ba1", "help", "getBonusDetails", "\u5956\u91d1\u8be6\u60c5", "remove-vr", "transferMode", "getTransferRecord", "\u5a31\u4e50\u8f6c\u8d26\u8bb0\u5f55", "pfs", "swithType", "pf", "getYuleGames", "walletInit", "swithPf", "swithRecTabs", "isfav", "isFav", "favorite", "yuleGameFavorite", "\u6e38\u620f\u6536\u85cf", "gameName", "views/home/recconfirm.html", "goto", "defualtBank", "0000000", "\u94f6\u884c\u5361", "../../img/0000000.png", "\u94f6\u884c\u5361\u4fe1\u606f", "getBankAndVirtualWallet", "getBankInfo", "item4", "item5", "addBankData", "addType", "views/safe/addBankData.html?v=", "addVirtualWalle", "tuple2", "confirmAdd", "confirmAddBankData", "confirmAddVirtualWalle", "addVirtualWallet", "substring", "\u6dfb\u52a0\u94b1\u5305", "**", "../../img/", ".png", "delBankData", "$index", "views/safe/delBankData.html?v=", "confirmDelBankData", "isreload", "reload", "loginMode", "checkVM", "browser", "wechatVM", "switchLoginMode", "wechatTimeout", "wechatLoginNum", "wx", "wechatLogin", "switchLoginType", "\u5fae\u4fe1\u626b\u63cf\u81ea\u52a8\u767b\u5f55", "\u5fae\u4fe1\u626b\u63cf\u81ea\u52a8\u767b\u5f55\u5df2\u5931\u6548\uff01", "loginVM", "weblogin", "username", "\u6b63\u5728\u767b\u5f55\u4e2d", "check", "info", "goToStatic", "/pages/index.html", "checktype", "\u521d\u6b21\u767b\u5f55", "pwdClient", "pwdVM", "views/safe/fristUpdatePwd.html?v=", "\u8bf7\u60a8\u52a1\u5fc5\u4ed4\u7ec6\u67e5\u770b\u4ee5\u4e0b\u5185\u5bb9", "captcha", "codesinfo", "CAPTCHA", "base64String", "\u9a8c\u8bc1\u7801", "forget", "checkvalue", "\u5fd8\u8bb0\u5bc6\u7801\u9a8c\u8bc1", "\u7528\u6237\u540d\u548c\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01", "resetPwdVM", "resetPwdClient", "views/safe/resetPwd.html?v=", "confirmResetPwd", "repwd", "problem1", "problem2", "reloginpwd", "\u91cd\u7f6e\u5bc6\u7801", "fristUpdatePwd", "oldpwd", "newpwd", "reppwd", "\u5b89\u5168\u4e2d\u5fc3", "freeze", "freezeVM", "\u51bb\u7ed3\u7528\u6237", "login", "setGoogleRecaptchaToken", "password", "validatype", "validavalue", "search", "reg", "\u4f1a\u5458\u6ce8\u518c", "refresh", "safeCenter", "<i class=\"fa fa-star\"></i>", "resetPwdData", "resetPwd", "confirmLNG", "isLNG", "views/safe/closeLNG.html?v=", "loginNeedGoogle", "switchLNG", "\u8c37\u6b4c\u767b\u5f55\u9a8c\u8bc1\u5417\uff1f", "\u8c37\u6b4c\u767b\u5f55\u9a8c\u8bc1", "closeLNG", "views/safe/updatePwd.html?v=", "confirmUpdatePwd", "pwdtype", "lpwdstrength", "fpwdstrength", "bpwdstrength", "pwdStringth", "bankBind", "emailBind", "emailVM", "emailDialog", "views/safe/emailBind.html?v=", "confirmEmailBind", "isbindemail", "email", "problemBind", "problems", "\u6211\u6700\u559c\u6b22\u7684\u4e00\u7ec4\u6570\u5b57\uff1f", "\u6211\u6700\u559c\u6b22\u7684\u56fd\u5bb6\u6216\u57ce\u5e02\uff1f", "\u6211\u6700\u559c\u6b22\u7684\u4e00\u9996\u6b4c\uff1f", "\u6211\u6700\u559c\u6b22\u7684\u4eba\u751f\u683c\u8a00\uff1f", "\u6211\u6700\u559c\u6b22\u7684\u4e00\u90e8\u7535\u5f71\uff1f", "\u6211\u6700\u559c\u6b22\u7684\u660e\u661f\u662f\u8c01\uff1f", "problemVM", "problemClient", "views/safe/problemBind.html?v=", "confirmProblemBind", "problem3", "\u5b89\u5168\u95ee\u9898\u7ed1\u5b9a", "\u4e0d\u80fd\u9009\u62e9\u91cd\u590d\u7684\u95ee\u9898\uff01", "answer1", "answer2", "answer3", "isbindproblem", "gauthGenerate", "gauth", "googlekey", "Item1", "views/safe/gauthGenerate.html?v=", "gauthValidate", "guathClient", "guathVM", "views/safe/gauthApply.html?v=", "gauthApply", "fundspwd", "isbindgoogle", "removeGoogle", "googleValidVM", "\u89e3\u9664\u8c37\u6b4c\u9a8c\u8bc1", "views/safe/gauthGoogle.html?v=", "confirmRemoveGoogle", "gauthGoogle", "wechatBind", "iswechat", "wechatClient", "views/safe/wechatBind.html?v=", "getWechatBindCode", "getWechatBindState", "prom", "get", "\u5fae\u4fe1\u63a8\u5e7f", "addDialog", "views/team/addPromotion.html?v=", "\u8bda\u62db\uff1a", "\u5956\u91d1\uff1a", "\u94fe\u63a5\uff1a", "\u5907\u6ce8\uff1a", "del", "pid", "\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f", "confirmDel", "wechatProm", "views/team/wechatProm.html?v=", "drag", "directive", "$document", "A", "domid", "style", "%", "clientWidth", "documentElement", "clientHeight", "mousedown", "move", "css", "mousemove", "on", "mouseup", "px", "auto", "off", "lotteryCategorys", "EA", "<a ng-repeat=\"m in curCategorys\" ng-click=\"switchCategory(this)\" ng-class=\"{active: m.b==1}\">{{m.n}}</a>", "switchCategory", "lotteryDetail", "<a ng-click=\"showDetail()\" class=\"c1\">{{pId}}</a>", "=pId", "=pName", "=pType", "showDetail", "views/lottery/betDetail.html?v=", "views/lottery/chaseDetail.html?v=", "views/lottery/vrbetDetail.html?v=", "lotteryGroups", "<p ng-repeat=\"m in curGroups\"><label>{{m.n}}\uff1a</label><button type=\"button\" ng-click=\"switchGroup(this,$index)\" ng-repeat=\"item in m.l\" ng-class=\"{active: item.b==1}\">{{item.n}}<i ng-show=\"ecp\">{{curCategoryName==\'\u6211\u7684\'?\'\xD7\':\'\uff0b\'}}</i></button></p>", "switchGroup", "item", "\u6211\u7684", "\u81ea\u5b9a\u4e49\u73a9\u6cd5", "\u5220\u9664\u6210\u529f\uff0c\u7f16\u8f91\u5b8c\u6210\u540e\u8bf7\u70b9\u51fb\u4fdd\u5b58\u6309\u94ae\u8fdb\u884c\u4fdd\u5b58\u3002", "clone", "\u6dfb\u52a0\u6210\u529f\uff0c\u7f16\u8f91\u5b8c\u6210\u540e\u8bf7\u70b9\u51fb\u4fdd\u5b58\u6309\u94ae\u8fdb\u884c\u4fdd\u5b58\u3002", "lotteryKl8opts", "<div class=\"tzbtnrow\" ng-show=\"curPlay.showkl8opt\">", "<div>", "    <button type=\"button\" ng-click=\"kl8opt(1)\">\u673a\u9009\u4e00\u6ce8</button>", "    <button type=\"button\" ng-click=\"kl8opt(2)\">\u5956\u91d1\u8be6\u60c5</button>(\u8da3\u5473\u673a\u9009\uff0c\u6bcf\u6b21\u9009\u53d68\u4e2a\u53f7\u7801)", "<p>", "    <button type=\"button\" ng-click=\"kl8opt(3)\">\u4e0a</button>", "    <button type=\"button\" ng-click=\"kl8opt(4)\">\u5355</button>", "    <button type=\"button\" ng-click=\"kl8opt(5)\">\u4e0a.\u5355</button>", "    <button type=\"button\" ng-click=\"kl8opt(6)\">\u4e0a.\u53cc</button>", "    <button type=\"button\" ng-click=\"kl8opt(7)\">\u6df7\u5408</button>", "    <button type=\"button\" ng-click=\"kl8opt(8)\">\u4e0b</button>", "    <button type=\"button\" ng-click=\"kl8opt(9)\">\u53cc</button>", "    <button type=\"button\" ng-click=\"kl8opt(10)\">\u4e0b.\u5355</button>", "    <button type=\"button\" ng-click=\"kl8opt(11)\">\u4e0b.\u53cc</button>", "</p>", "kl8opt", "views/lottery/kl8pbd.html", "\u4e2d", "\u4e2a\u53f7\u7801", "kl8count", "nums", "\u9009", "-", "\u90097\u4e2d0", "7-0", "\u4e2d1\u4e2a\u53f7\u7801", "\u4e2d0\u4e2a\u53f7\u7801", "random", "lotteryNumbers", "<div class=\"tzrow\" ng-repeat=\"m in curPlay.l\">", "   <p><span><strong>{{m.name}}</strong><a ng-show=\"curPlay.y==1\">\u5f53\u524d\u9057\u6f0f</a><a ng-show=\"curPlay.bonusInfo.isnum\">\u5f53\u524d\u8d54\u7387</a></span></p>", "   <div>", "       <p><button type=\"button\" ng-repeat=\"n in m.nums\" ng-class=\"{active: n.s}\" ng-click=\"selectNumber(this,m.name)\" style=\"margin-bottom:{{curPlay.bonusInfo.isnum?35:0}}px;\">{{n.n}}", "          <br><i ng-show=\"curPlay.bonusInfo.isnum\">{{curPlay.bonusInfo.nums[n.n]}}</i></button></p>", "       <p ng-show=\"curPlay.y==1\"><label ng-repeat=\"n in m.nums\">0</label></p>", "   </div>", "   <span>", "        <button type=\"button\" ng-repeat=\"o in m.opts\" ng-click=switchOperat(this,m.name,o)>{{o}}</button>", "    </span>", "selectNumber", "_", "getExtend", "t", "switchOperat", "o", "\u5168", "\u5927", "\u5c0f", "\u5947", "\u5076", "\u6e05", "$parent", "\u80c6\u7801", "\u540c\u53f7", "$$nextSibling", "\u62d6\u7801", "\u4e0d\u540c\u53f7", "$$prevSibling", "pagination", "<div class=\"pagingcontainer\">", "<ul class=\"pagination\" ng-show=\"param.rowCount > 0\">", "<li ng-class=\"{disabled: param.pageIndex == 1}\" ng-click=\"prevPage()\"><a><i class=\"fa fa-chevron-left\"></i></a></li>", "<li ng-repeat=\"item in pageList track by $index\" ng-class=\"{active: item == param.pageIndex, separate: item == \'...\'}\" ", "ng-click=\"changeCurrentPage(item)\">", "<a>{{ item }}</a>", "</li>", "<li ng-class=\"{disabled: param.pageIndex == param.pageCount}\" ng-click=\"nextPage()\"><a><i class=\"fa fa-chevron-right\"></i></a></li>", "</ul>", "<div class=\"pagingtotal\" ng-show=\"param.rowCount > 0\">", "&nbsp;&nbsp;\u6bcf\u9875&nbsp;&nbsp;<select ng-model=\"param.pageSize\" ng-options=\"option for option in [5,10,15,20,25,30]\" ng-change=\"changeItemsPerPage()\"></select>", "&nbsp;&nbsp;\u6761&nbsp;&nbsp;/&nbsp;&nbsp;\u5171<strong>&nbsp;&nbsp;{{ param.rowCount }}&nbsp;&nbsp;</strong>\u6761\uff0c ", "\u8df3\u8f6c\u81f3&nbsp;&nbsp;<input type=\"text\" ng-model=\"jumpPageNum\" ng-keyup=\"jumpPageKeyUp($event)\"/>", "<div class=\"no-items\" ng-show=\"param.rowCount <= 0\">\u5f53\u524d\u6ca1\u6709\u67e5\u8be2\u5230\u4efb\u4f55\u6570\u636e\uff01</div>", "pageSize", "ceil", "pageList", "...", "prevPage", "nextPage", "changeCurrentPage", "changeItemsPerPage", "jumpToPage", "jumpPageNum", "match", "jumpPageKeyUp", "keyCode", "which", "param.rowCount", "resize", "=headerHeight", "height", "headerHeight", "$apply", "rightClick", "ngRightClick", "contextmenu", "keydown", "statusColor", "AE", "<label class=\"s1\" ng-style=\"backgroundColor\">{{pStatus}}</label>", "=pStatus", "pStatus", "\u5df2\u5b8c\u6210", "\u4e2d\u5956\u540e\u7ee7\u7eed", "\u5728\u7ebf", "backgroundColor", "#3fa00a", "\u672a\u4e2d\u5956", "\u4e2d\u5956\u540e\u505c\u6b62", "#f52c2c", "\u6536\u5230\u672a\u8bfb", "#f93204", "\u9001\u51fa\u672a\u8bfb", "#9d0589", "\u672a\u8bfb", "#229d05", "#666", "tipsInstr", "$compile", "<div ng-bind-html=\"tipsInstrContent\" class=\"{{className}}\" id=\"tipsInstr\"></div>", "@pageName", "=actionName", "@className", "@isWatch", "=data", "isWatch", "actionName", "getTipsAndInstr", "pageName", "empty", "append", "tipsInstrContent", "factory", "public/noIpOrArea", "safe/captcha", "safe/check", "safe/forget", "safe/freeze", "safe/login", "safe/offsite", "safe/reg", "safe/reloginpwd", "safe/fristUpdatePwd", "wx/code", "wx/weblogin", "dict/lines", "dict/index", "?v=", "../res/", ".json", ".json?v=", "/api/", "\u91cd\u65b0\u767b\u5f55", "\u9650\u5236\u5730\u533a", "log", "<h3>", "  [ \u6309 Esc \u952e\u5feb\u901f\u5173\u95ed ]</h3>", "<br /><p class=\"", "c3", "c4", "</p><br />", "<div class=\"ngdialog-buttons\"><button type=\"button\" class=\"ngdialog-button ngdialog-button-secondary\" ng-click=\"closeThisDialog()\">\u5173\u95ed</button></div>", "<br /><p>", "<h1 style=\"color:#25838b;font-size:18px;\">", "  [ \u6309 Esc \u952e\u5feb\u901f\u5173\u95ed ]</h1>", "<br /><p style=\"color:#25838b;font-size:18px;\">", "\u5904\u7406\u6570\u636e\u5931\u8d25", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-secondary\" ng-click=\"closeThisDialog();", "()\">\u53d6\u6d88", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-primary\" ng-click=\"closeThisDialog();", "()\">\u786e\u8ba4", "</button></div>", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-secondary\" ng-click=\"closeThisDialog()\">\u5173\u95ed[ {{num}} ]", "<button type=\"button\" ng-show=\"betResult.extend.status>=1\" ng-disabled=\"printing\" class=\"ngdialog-button ngdialog-button-primary\" ng-click=\"", "()\">{{printing?\"\u51c6\u5907\u4e2d...\":\"\u6253\u5370\"}}", "closeThisDialog", "<form method=\"post\" action=\"", "\" target=\"_blank\" >", "<input type=\"hidden\" name=\"", "\" value=\"", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-secondary\" ng-click=\"closeThisDialog()\">\u53d6\u6d88</button>", "<button type=\"submit\" class=\"ngdialog-button ngdialog-button-primary\" ng-click=\"closeThisDialog()\">\u786e\u8ba4</button>", "</form>", "<br /><p ng-bind-html=\"msg\"></p><br />", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-secondary\" ng-click=\"closeThisDialog()\">\u5173\u95ed", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-primary\" ngclipboard ngclipboard-success=\"onSuccess(e)\" ngclipboard-error=\"onError(e)\" data-clipboard-text=\"{{content}}\">\u590d\u5236", "<br/>", "</h3><br /><p>", "</p><br /><div class=\"ngdialog-buttons\"><button type=\"button\" class=\"ngdialog-button ngdialog-button-primary\" ng-click=\"closeThisDialog()\">\u786e\u8ba4[ {{num}} ]</button></div>", "[\\d]", "[A-Z]", "[a-z]", "[`~!@#$%^&*()_+<>?:\"{},./;\'[\\]]", "charCodeAt", "fromCharCode", "toLowerCase", "split", "exec", "IE", "8", "4.0", "9", "5.0", "10", "6.0", "11", "7.0", "undefined", "attachEvent", "opera", "Opera", " browser", "version", "&", "getFullYear", "getMonth", "getDay", " ", "getHours", "getMinutes", "getSeconds", "YYYY-MM-DD", "format", "day", "YYYY-MM-01 03:00", "string", "number", "boolean", "object", "minutes", "host", "stringify", "setItem", "getItem", "timeout", "removeItem", "cp", "trim", "buffer", "call", "prototype", "[object object]", "standalone", "matches", "(display-mode: standalone)", "matchMedia", "safari", "addToHomeScreenBySafari", "addToHomeScreenByOther", "<div class=\"addToHomeScreen animated fadeInDown\" id=\"", "  <div class=\"addToHomeScreenHead\"></div>", "  <div class=\"addToHomeScreenMain\">", "      <div class=\"addToHomeScreenTitle\">", "          \u514d\u4e0b\u8f7d\u5b89\u88c5\uff0c\u628a\u5e73\u53f0\u52a0\u5230\u4e3b\u5c4f\u5e55<i class=\"iconfont icon-guanbi\" style=\"top:", "20", "px;\" onclick=\"document.getElementById(\'", "\').remove()\"></i>", "      </div>", "      <div class=\"addToHomeScreenCon\">", "          <dl>", "              <dd><span><i class=\"iconfont icon-", "share", "caidan", "\"></i></span><p>\u70b9\u51fb</p></dd>", "              <dt><i class=\"iconfont icon-arrow\"></i></dt>", "              <dd><span><i class=\"iconfont icon-adddesk\"></i></span><p>", "\u52a0\u5165\u4e3b\u5c4f\u5e55", "\u6dfb\u52a0\u81f3\u684c\u9762", "</p></dd>", "              <dd><span><label><img src=\"img/addtohomescreen/logo.png\"></label></span><p>\u65b0\u589e[\u6052\u8fbe]</p></dd>", "              <dt></dt>", "          </dl>", "  </div>", "  <div class=\"addToHomeScreenFoot\"></div>", "</div >", "getElementsByTagName", "<div class=\"addToHomeScreenByChrome animated fadeInDown\" id=\"addToHomeScreenByChrome\">", "   <div class=\"addToHomeScreenByChromeMain\">", "       <span><img src=\"img/addtohomescreen/logo.png\"></span><strong>\u6dfb\u52a0\u5230\u684c\u9762</strong>", "       <p>\u514d\u4e0b\u8f7d\u5b89\u88c5\uff0c\u628a\u5e73\u53f0\u52a0\u5230\u4e3b\u5c4f\u5e55</p><label onclick=\"document.getElementById(\'addToHomeScreenByChrome\').remove()\">+</label>", "   <div class=\"addToHomeScreenByChromeFoot\">", "       <button type=\"button\" id=\"_addToHomeScreenByChrome\">\u786e\u5b9a</button>", "_addToHomeScreenByChrome", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-primary\" ng-click=\"confirmfw()\">\u786e\u8ba4", "confirmfw", "function", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-secondary\" ng-click=\"confirmOver()\">\u786e\u8ba4", "<button type=\"button\" class=\"ngdialog-button ngdialog-button-primary\" ng-click=\"cancelOver()\">\u53d6\u6d88", "confirmOver", "cancelOver", "<form id=\"postForm\" method=\"post\" target=\"_blank\" action=\"", "<button class=\"button\" type=\"submit\">\u70b9\u51fb\u6211\u7acb\u5373\u8fdb\u5165\u3010", "\u3011</button></form>", "recaptcha_v3", "src", "grToken", "execute", "\u9000\u51fa", "\u786e\u5b9a\u8981\u9000\u51fa\u5417\uff1f", "</h3>", "<br /><p class=\"c4\">", "<div class=\"ngdialog-buttons\"><button type=\"button\" class=\"ngdialog-button ngdialog-button-secondary\" ng-click=\"close();\">\u5173\u95ed</button></div>", "$q", "$injector", "reject", "loading", "/api/(.+?)/", "/api/member/monitor", "/api/public/velocity", "\u4e07", "\u5343", "\u767e", "\u5341", "\u4e2a", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "1", "2", "3", "4", "5", "6", "7", "intersect", "categorys", "groups", "plays", "regulars", "replaces", "categorysxy", "playsxy", "v", "isConvert", "hasOwnProperty", "r", "pos_w", "pos_f", "pos", "e", "slice", "|", "*", "x", "showkl8opt", "z", "rebate", "iscache", "getBonusInfo", "categoryId", "getXYBonusInfo", "playId", "isnum", "apply", "min", "n1", "n2", "_moneys_xy", "var ", "showbonus", "+", "f", "}", "(", ")", "zx_", "jq_", "=\"", "\",", ";", "c0=\"", "\";", "var p0=", ",w0=", "01", "j", "k"];
function getRes(name, cache) {
    var timestamp = _$_480d[1615] + new Date()[_$_480d[1008]]();
    var url = _$_480d[1616] + name + _$_480d[1617] + (cache ? _$_480d[337] : timestamp);
    return $http[_$_480d[1412]](url, {
        cache: cache
    })[_$_480d[264]](function success(res) {
        return res[_$_480d[295]]
    })
}
function getResByVer(name, version) {
    var url = _$_480d[1616] + name + _$_480d[1618] + version;
    return $http[_$_480d[1412]](url)[_$_480d[264]](function success(res) {
        return res[_$_480d[295]]
    })
}
function post(controller, action, params, operat) {
    if ($rootScope[_$_480d[279]] == null && urls[_$_480d[248]](controller + _$_480d[235] + action) == -1) {
        if (getUserInfo() == false) {
            $state[_$_480d[344]](_$_480d[228]);
            return
        }
    }
    ;var timestamp = new Date()[_$_480d[1008]]();
    var user = isnull($rootScope[_$_480d[278]]) ? _$_480d[337] : $rootScope[_$_480d[278]][_$_480d[269]];
    var packet = {
        data: isnull(params) ? _$_480d[337] : params,
        time: timestamp,
        user: user
    };
    var url = _$_480d[1619] + controller + _$_480d[235] + action;
    cp(packet, function(result) {
        if (result) {
            var hex = bth(result);
            var data = hex + md5(hex);
            $http[_$_480d[275]](url, {
                data: data
            })[_$_480d[318]](function success(res) {
                if (res[_$_480d[295]][_$_480d[708]] && res[_$_480d[295]][_$_480d[385]] != null) {
                    if (res[_$_480d[295]][_$_480d[385]][_$_480d[248]](_$_480d[1620]) != -1) {
                        exit(_$_480d[1620], res[_$_480d[295]][_$_480d[385]])
                    } else {
                        if (res[_$_480d[295]][_$_480d[385]][_$_480d[248]](_$_480d[1621]) != -1) {
                            window[_$_480d[273]][_$_480d[272]] = _$_480d[274]
                        } else {
                            operat(res[_$_480d[295]])
                        }
                    }
                } else {
                    operat(res[_$_480d[295]])
                }
            }, function error(res) {
                console[_$_480d[1622]](res)
            })
        } else {
            handlefail()
        }
    })
}
function postByNative(controller, action, params, operat) {
    var url = _$_480d[1619] + controller + _$_480d[235] + action;
    $http[_$_480d[275]](url, params)[_$_480d[318]](function success(res) {
        operat(res[_$_480d[295]])
    }, function error(res) {
        console[_$_480d[1622]](res)
    })
}
function notify(title, result) {
    ngDialog[_$_480d[555]]({
        template: _$_480d[1623] + title + _$_480d[1624] + _$_480d[1625] + (result[_$_480d[264]] ? _$_480d[1626] : _$_480d[1627]) + _$_480d[370] + result[_$_480d[385]] + _$_480d[1628] + _$_480d[1629],
        plain: true
    })
}
function onlynotify(title, message) {
    ngDialog[_$_480d[555]]({
        template: _$_480d[1623] + title + _$_480d[1624] + _$_480d[1630] + message + _$_480d[1628] + _$_480d[1629],
        plain: true
    })
}
function notifyfail(title, message) {
    notify(title, {
        success: false,
        message: message
    })
}
function announcement(title, message) {
    ngDialog[_$_480d[555]]({
        template: _$_480d[1631] + title + _$_480d[1632] + _$_480d[1633] + message + _$_480d[1628] + _$_480d[1629],
        plain: true,
        width: 750,
        height: 600
    })
}
function handlefail() {
    notify(_$_480d[1634], {
        success: false,
        message: _$_480d[1634]
    })
}
function confirm(title, msg, scope, evenvName, cancelName) {
    ngDialog[_$_480d[425]]({
        template: _$_480d[1623] + title + _$_480d[1624] + _$_480d[1630] + msg + _$_480d[1628] + _$_480d[421] + _$_480d[1635] + cancelName + _$_480d[1636] + _$_480d[1637] + evenvName + _$_480d[1638] + _$_480d[1639],
        plain: true,
        scope: scope
    })
}
function confirmprint(title, result, scope, evenvName, closeCallback) {
    ngDialog[_$_480d[425]]({
        template: _$_480d[1623] + title + _$_480d[1624] + _$_480d[1625] + (result[_$_480d[264]] ? _$_480d[1626] : _$_480d[1627]) + _$_480d[370] + result[_$_480d[385]] + _$_480d[1628] + _$_480d[421] + _$_480d[1640] + _$_480d[1641] + evenvName + _$_480d[1642] + _$_480d[1639],
        plain: true,
        scope: scope,
        closeByEscape: true,
        preCloseCallback: closeCallback,
        controller: [_$_480d[334], function($scope) {
            $scope[_$_480d[859]] = 3;
            var counter = $interval(function() {
                $scope[_$_480d[859]] = $scope[_$_480d[859]] - 1;
                if ($scope[_$_480d[859]] <= 1) {
                    $interval[_$_480d[431]](counter);
                    $scope[_$_480d[1643]]()
                }
            }, 1000);
            $scope[_$_480d[276]](_$_480d[440], function() {
                $interval[_$_480d[431]](counter)
            })
        }
        ]
    })
}
function confirmpost(title, result) {
    var form = _$_480d[1644] + result[_$_480d[295]][_$_480d[405]] + _$_480d[1645];
    form += _$_480d[1623] + title + _$_480d[1624];
    form += _$_480d[1630] + result[_$_480d[385]] + _$_480d[1628];
    form += _$_480d[421];
    for (var p in result[_$_480d[295]]) {
        if (p == _$_480d[405]) {
            continue
        }
        ;form += _$_480d[1646] + p + _$_480d[1647] + result[_$_480d[295]][p] + _$_480d[370]
    }
    ;form += _$_480d[1648];
    form += _$_480d[1649];
    form += _$_480d[424];
    form += _$_480d[1650];
    ngDialog[_$_480d[425]]({
        template: form,
        plain: true
    })
}
function confirmclip(title, content) {
    ngDialog[_$_480d[425]]({
        template: _$_480d[1623] + title + _$_480d[1624] + _$_480d[1651] + _$_480d[421] + _$_480d[1652] + _$_480d[1653] + _$_480d[1639],
        plain: true,
        controller: [_$_480d[334], _$_480d[476], function($scope, $sce) {
            $scope[_$_480d[643]] = content;
            var msg = content[_$_480d[246]](/\r\n/g, _$_480d[1654]);
            msg = content[_$_480d[246]](/\n/g, _$_480d[1654]);
            $scope[_$_480d[878]] = $sce[_$_480d[541]](msg);
            $scope[_$_480d[386]] = function(e) {
                autoCloseDialog(_$_480d[387], _$_480d[388])
            }
            ;
            $scope[_$_480d[390]] = function(e) {
                notifyfail(_$_480d[387], _$_480d[391])
            }
        }
        ]
    })
}
function autoCloseDialog(title, msg) {
    ngDialog[_$_480d[555]]({
        template: _$_480d[1623] + title + _$_480d[1655] + msg + _$_480d[1656],
        plain: true,
        closeByEscape: false,
        controller: [_$_480d[334], function($scope) {
            $scope[_$_480d[859]] = 3;
            var counter = $interval(function() {
                $scope[_$_480d[859]] = $scope[_$_480d[859]] - 1;
                if ($scope[_$_480d[859]] <= 1) {
                    $interval[_$_480d[431]](counter);
                    $scope[_$_480d[1643]]()
                }
            }, 1000);
            $scope[_$_480d[276]](_$_480d[440], function() {
                $interval[_$_480d[431]](counter)
            })
        }
        ]
    })
}
function strength(pwd) {
    var strength = 0;
    var patterns = new Array(4);
    patterns[0] = _$_480d[1657];
    patterns[1] = _$_480d[1658];
    patterns[2] = _$_480d[1659];
    patterns[3] = _$_480d[1660];
    for (var i = 0; i < 4; i++) {
        var reg = RegExp(patterns[i]);
        if (reg[_$_480d[682]](pwd)) {
            strength += 1
        }
    }
    ;return strength - 1
}
function md5(str) {
    var md5 = function(s) {
        function L(k, d) {
            return (k << d) | (k >>> (32 - d))
        }
        function K(G, k) {
            var I, d, F, H, x;
            F = (G & 2147483648);
            H = (k & 2147483648);
            I = (G & 1073741824);
            d = (k & 1073741824);
            x = (G & 1073741823) + (k & 1073741823);
            if (I & d) {
                return (x ^ 2147483648 ^ F ^ H)
            }
            ;if (I | d) {
                if (x & 1073741824) {
                    return (x ^ 3221225472 ^ F ^ H)
                } else {
                    return (x ^ 1073741824 ^ F ^ H)
                }
            } else {
                return (x ^ F ^ H)
            }
        }
        function r(d, F, k) {
            return (d & F) | ((~d) & k)
        }
        function q(d, F, k) {
            return (d & k) | (F & (~k))
        }
        function p(d, F, k) {
            return (d ^ F ^ k)
        }
        function n(d, F, k) {
            return (F ^ (d | (~k)))
        }
        function u(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(r(F, aa, Z), k), I));
            return K(L(G, H), F)
        }
        function f(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(q(F, aa, Z), k), I));
            return K(L(G, H), F)
        }
        function D(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(p(F, aa, Z), k), I));
            return K(L(G, H), F)
        }
        function t(G, F, aa, Z, k, H, I) {
            G = K(G, K(K(n(F, aa, Z), k), I));
            return K(L(G, H), F)
        }
        function e(G) {
            var Z;
            var F = G[_$_480d[346]];
            var x = F + 8;
            var k = (x - (x % 64)) / 64;
            var I = (k + 1) * 16;
            var aa = Array(I - 1);
            var d = 0;
            var H = 0;
            while (H < F) {
                Z = (H - (H % 4)) / 4;
                d = (H % 4) * 8;
                aa[Z] = (aa[Z] | (G[_$_480d[1661]](H) << d));
                H++
            }
            ;Z = (H - (H % 4)) / 4;
            d = (H % 4) * 8;
            aa[Z] = aa[Z] | (128 << d);
            aa[I - 2] = F << 3;
            aa[I - 1] = F >>> 29;
            return aa
        }
        function B(x) {
            var k = _$_480d[337], F = _$_480d[337], G, d;
            for (d = 0; d <= 3; d++) {
                G = (x >>> (d * 8)) & 255;
                F = _$_480d[1045] + G[_$_480d[585]](16);
                k = k + F[_$_480d[249]](F[_$_480d[346]] - 2, 2)
            }
            ;return k
        }
        function J(k) {
            k = k[_$_480d[246]](/rn/g, _$_480d[637]);
            var d = _$_480d[337];
            for (var F = 0; F < k[_$_480d[346]]; F++) {
                var x = k[_$_480d[1661]](F);
                if (x < 128) {
                    d += String[_$_480d[1662]](x)
                } else {
                    if ((x > 127) && (x < 2048)) {
                        d += String[_$_480d[1662]]((x >> 6) | 192);
                        d += String[_$_480d[1662]]((x & 63) | 128)
                    } else {
                        d += String[_$_480d[1662]]((x >> 12) | 224);
                        d += String[_$_480d[1662]](((x >> 6) & 63) | 128);
                        d += String[_$_480d[1662]]((x & 63) | 128)
                    }
                }
            }
            ;return d
        }
        var C = Array();
        var P, h, E, v, g, Y, X, W, V;
        var S = 7
            , Q = 12
            , N = 17
            , M = 22;
        var A = 5
            , z = 9
            , y = 14
            , w = 20;
        var o = 4
            , m = 11
            , l = 16
            , j = 23;
        var U = 6
            , T = 10
            , R = 15
            , O = 21;
        s = J(s);
        C = e(s);
        Y = 1732584193;
        X = 4023233417;
        W = 2562383102;
        V = 271733878;
        for (P = 0; P < C[_$_480d[346]]; P += 16) {
            h = Y;
            E = X;
            v = W;
            g = V;
            Y = u(Y, X, W, V, C[P + 0], S, 3614090360);
            V = u(V, Y, X, W, C[P + 1], Q, 3905402710);
            W = u(W, V, Y, X, C[P + 2], N, 606105819);
            X = u(X, W, V, Y, C[P + 3], M, 3250441966);
            Y = u(Y, X, W, V, C[P + 4], S, 4118548399);
            V = u(V, Y, X, W, C[P + 5], Q, 1200080426);
            W = u(W, V, Y, X, C[P + 6], N, 2821735955);
            X = u(X, W, V, Y, C[P + 7], M, 4249261313);
            Y = u(Y, X, W, V, C[P + 8], S, 1770035416);
            V = u(V, Y, X, W, C[P + 9], Q, 2336552879);
            W = u(W, V, Y, X, C[P + 10], N, 4294925233);
            X = u(X, W, V, Y, C[P + 11], M, 2304563134);
            Y = u(Y, X, W, V, C[P + 12], S, 1804603682);
            V = u(V, Y, X, W, C[P + 13], Q, 4254626195);
            W = u(W, V, Y, X, C[P + 14], N, 2792965006);
            X = u(X, W, V, Y, C[P + 15], M, 1236535329);
            Y = f(Y, X, W, V, C[P + 1], A, 4129170786);
            V = f(V, Y, X, W, C[P + 6], z, 3225465664);
            W = f(W, V, Y, X, C[P + 11], y, 643717713);
            X = f(X, W, V, Y, C[P + 0], w, 3921069994);
            Y = f(Y, X, W, V, C[P + 5], A, 3593408605);
            V = f(V, Y, X, W, C[P + 10], z, 38016083);
            W = f(W, V, Y, X, C[P + 15], y, 3634488961);
            X = f(X, W, V, Y, C[P + 4], w, 3889429448);
            Y = f(Y, X, W, V, C[P + 9], A, 568446438);
            V = f(V, Y, X, W, C[P + 14], z, 3275163606);
            W = f(W, V, Y, X, C[P + 3], y, 4107603335);
            X = f(X, W, V, Y, C[P + 8], w, 1163531501);
            Y = f(Y, X, W, V, C[P + 13], A, 2850285829);
            V = f(V, Y, X, W, C[P + 2], z, 4243563512);
            W = f(W, V, Y, X, C[P + 7], y, 1735328473);
            X = f(X, W, V, Y, C[P + 12], w, 2368359562);
            Y = D(Y, X, W, V, C[P + 5], o, 4294588738);
            V = D(V, Y, X, W, C[P + 8], m, 2272392833);
            W = D(W, V, Y, X, C[P + 11], l, 1839030562);
            X = D(X, W, V, Y, C[P + 14], j, 4259657740);
            Y = D(Y, X, W, V, C[P + 1], o, 2763975236);
            V = D(V, Y, X, W, C[P + 4], m, 1272893353);
            W = D(W, V, Y, X, C[P + 7], l, 4139469664);
            X = D(X, W, V, Y, C[P + 10], j, 3200236656);
            Y = D(Y, X, W, V, C[P + 13], o, 681279174);
            V = D(V, Y, X, W, C[P + 0], m, 3936430074);
            W = D(W, V, Y, X, C[P + 3], l, 3572445317);
            X = D(X, W, V, Y, C[P + 6], j, 76029189);
            Y = D(Y, X, W, V, C[P + 9], o, 3654602809);
            V = D(V, Y, X, W, C[P + 12], m, 3873151461);
            W = D(W, V, Y, X, C[P + 15], l, 530742520);
            X = D(X, W, V, Y, C[P + 2], j, 3299628645);
            Y = t(Y, X, W, V, C[P + 0], U, 4096336452);
            V = t(V, Y, X, W, C[P + 7], T, 1126891415);
            W = t(W, V, Y, X, C[P + 14], R, 2878612391);
            X = t(X, W, V, Y, C[P + 5], O, 4237533241);
            Y = t(Y, X, W, V, C[P + 12], U, 1700485571);
            V = t(V, Y, X, W, C[P + 3], T, 2399980690);
            W = t(W, V, Y, X, C[P + 10], R, 4293915773);
            X = t(X, W, V, Y, C[P + 1], O, 2240044497);
            Y = t(Y, X, W, V, C[P + 8], U, 1873313359);
            V = t(V, Y, X, W, C[P + 15], T, 4264355552);
            W = t(W, V, Y, X, C[P + 6], R, 2734768916);
            X = t(X, W, V, Y, C[P + 13], O, 1309151649);
            Y = t(Y, X, W, V, C[P + 4], U, 4149444226);
            V = t(V, Y, X, W, C[P + 11], T, 3174756917);
            W = t(W, V, Y, X, C[P + 2], R, 718787259);
            X = t(X, W, V, Y, C[P + 9], O, 3951481745);
            Y = K(Y, h);
            X = K(X, E);
            W = K(W, v);
            V = K(V, g)
        }
        ;var i = B(Y) + B(X) + B(W) + B(V);
        return i[_$_480d[1663]]()
    };
    return md5(str)
}
function unique(str) {
    if (isnull(str)) {
        return str
    }
    ;var arr = str[_$_480d[1664]](/-|:|,|;|\r?\n/);
    if (arr == null || arr[_$_480d[346]] <= 0) {
        return str
    }
    ;var result = []
        , hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result[_$_480d[26]](elem);
            hash[elem] = true
        }
    }
    ;return (arr[_$_480d[346]] == result[_$_480d[346]]) ? str : result[_$_480d[585]]()
}
function browser() {
    var userAgent = navigator[_$_480d[313]]
        , rMsie = /(msie\s|trident\/7)([\w.]+)/
        , rTrident = /(trident)\/([\w.]+)/
        , rFirefox = /(firefox)\/([\w.]+)/
        , rOpera = /(opera).+version\/([\w.]+)/
        , rNewOpera = /(opr)\/(.+)/
        , rChrome = /(chrome)\/([\w.]+)/
        , rSafari = /version\/([\w.]+).*(safari)/;
    var matchBS, matchBS2;
    var browser;
    var version;
    var ua = userAgent[_$_480d[1663]]();
    var uaMatch = function(ua) {
        matchBS = rMsie[_$_480d[1665]](ua);
        if (matchBS != null) {
            matchBS2 = rTrident[_$_480d[1665]](ua);
            if (matchBS2 != null) {
                switch (matchBS2[2]) {
                    case _$_480d[1668]:
                        return {
                            browser: _$_480d[1666],
                            version: _$_480d[1667]
                        };
                        break;
                    case _$_480d[1670]:
                        return {
                            browser: _$_480d[1666],
                            version: _$_480d[1669]
                        };
                        break;
                    case _$_480d[1672]:
                        return {
                            browser: _$_480d[1666],
                            version: _$_480d[1671]
                        };
                        break;
                    case _$_480d[1674]:
                        return {
                            browser: _$_480d[1666],
                            version: _$_480d[1673]
                        };
                        break;
                    default:
                        return {
                            browser: _$_480d[1666],
                            version: _$_480d[1675]
                        }
                }
            } else {
                return {
                    browser: _$_480d[1666],
                    version: matchBS[2] || _$_480d[1045]
                }
            }
        }
        ;matchBS = rFirefox[_$_480d[1665]](ua);
        if ((matchBS != null) && (!(window[_$_480d[1676]])) && (!(window[_$_480d[315]])) && (!(window[_$_480d[1677]]))) {
            return {
                browser: matchBS[1] || _$_480d[337],
                version: matchBS[2] || _$_480d[1045]
            }
        }
        ;matchBS = rOpera[_$_480d[1665]](ua);
        if ((matchBS != null) && (!(window[_$_480d[1676]]))) {
            return {
                browser: matchBS[1] || _$_480d[337],
                version: matchBS[2] || _$_480d[1045]
            }
        }
        ;matchBS = rChrome[_$_480d[1665]](ua);
        if ((matchBS != null) && (!!(window[_$_480d[315]])) && (!(window[_$_480d[1676]]))) {
            matchBS2 = rNewOpera[_$_480d[1665]](ua);
            if (matchBS2 == null) {
                return {
                    browser: matchBS[1] || _$_480d[337],
                    version: matchBS[2] || _$_480d[1045]
                }
            } else {
                return {
                    browser: _$_480d[1678],
                    version: matchBS2[2] || _$_480d[1045]
                }
            }
        }
        ;matchBS = rSafari[_$_480d[1665]](ua);
        if ((matchBS != null) && (!(window[_$_480d[1676]])) && (!(window[_$_480d[315]])) && (!(window[_$_480d[1677]]))) {
            return {
                browser: matchBS[2] || _$_480d[337],
                version: matchBS[1] || _$_480d[1045]
            }
        }
        ;if (matchBS != null) {
            return {
                browser: _$_480d[1675],
                version: _$_480d[1679]
            }
        }
    };
    var browserMatch = uaMatch(userAgent[_$_480d[1663]]());
    if (browserMatch[_$_480d[1282]]) {
        browser = browserMatch[_$_480d[1282]];
        version = browserMatch[_$_480d[1680]]
    }
    ;return browser + version
}
function isnullobj(value) {
    if (value == undefined) {
        return true
    }
    ;if (value == null) {
        return true
    }
    ;return false
}
function isnull(value) {
    if (value == undefined) {
        return true
    }
    ;if (value == null) {
        return true
    }
    ;if (value[_$_480d[346]] <= 0) {
        return true
    }
    ;return false
}
function isnotnull(value) {
    return !isnull(value)
}
function isemail(email) {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    return reg[_$_480d[682]](email)
}
function geturlparam() {
    var url = window[_$_480d[273]][_$_480d[272]];
    var theRequest = new Object();
    var index = url[_$_480d[248]](_$_480d[244]);
    if (index != -1) {
        var str = url[_$_480d[249]](index + 1);
        var strs = str[_$_480d[1664]](_$_480d[1681]);
        for (var i = 0; i < strs[_$_480d[346]]; i++) {
            theRequest[strs[i][_$_480d[1664]](_$_480d[950])[0]] = unescape(strs[i][_$_480d[1664]](_$_480d[950])[1])
        }
    }
    ;return theRequest
}
function gettime() {
    var now = new Date();
    return now[_$_480d[1682]]() + _$_480d[235] + now[_$_480d[1683]]() + _$_480d[235] + now[_$_480d[1684]]() + _$_480d[1685] + now[_$_480d[1686]]() + _$_480d[436] + now[_$_480d[1687]]() + _$_480d[436] + now[_$_480d[1688]]()
}
function yesterDay() {
    return moment()[_$_480d[864]](-1, _$_480d[1691])[_$_480d[1690]](_$_480d[1689])
}
function beginTime() {
    return moment()[_$_480d[1412]](_$_480d[434]) >= 3 ? moment()[_$_480d[1690]](_$_480d[267]) : moment()[_$_480d[864]](-1, _$_480d[1691])[_$_480d[1690]](_$_480d[267])
}
function endTime() {
    return moment()[_$_480d[1412]](_$_480d[434]) >= 3 ? moment()[_$_480d[864]](1, _$_480d[1691])[_$_480d[1690]](_$_480d[267]) : moment()[_$_480d[1690]](_$_480d[267])
}
function changeDay(type) {
    switch (type) {
        case 1:
            return {
                type: type,
                beginTime: beginTime(),
                endTime: endTime()
            };
            break;
        case 2:
            return {
                type: type,
                beginTime: (moment()[_$_480d[1412]](_$_480d[434]) >= 3 ? moment()[_$_480d[864]](-1, _$_480d[1691])[_$_480d[1690]](_$_480d[267]) : moment()[_$_480d[864]](-2, _$_480d[1691])[_$_480d[1690]](_$_480d[267])),
                endTime: (moment()[_$_480d[1412]](_$_480d[434]) >= 3 ? moment()[_$_480d[1690]](_$_480d[267]) : moment()[_$_480d[864]](-1, _$_480d[1691])[_$_480d[1690]](_$_480d[267]))
            };
            break;
        case 3:
            return {
                type: type,
                beginTime: (moment()[_$_480d[1412]](_$_480d[434]) >= 3 ? moment()[_$_480d[1690]](_$_480d[1692]) : moment()[_$_480d[864]](-1, _$_480d[1691])[_$_480d[1690]](_$_480d[1692])),
                endTime: endTime()
            };
            break;
        default:
            return {
                type: type,
                beginTime: beginTime(),
                endTime: endTime()
            };
            break
    }
}
function clone(obj) {
    var o;
    switch (typeof obj) {
        case _$_480d[1675]:
            break;
        case _$_480d[1693]:
            o = obj + _$_480d[337];
            break;
        case _$_480d[1694]:
            o = obj - 0;
            break;
        case _$_480d[1695]:
            o = obj;
            break;
        case _$_480d[1696]:
            if (obj === null) {
                o = null
            } else {
                if (obj instanceof Array) {
                    o = [];
                    for (var i = 0, len = obj[_$_480d[346]]; i < len; i++) {
                        o[_$_480d[26]](clone(obj[i]))
                    }
                } else {
                    o = {};
                    for (var k in obj) {
                        o[k] = clone(obj[k])
                    }
                }
            }
            ;break;
        default:
            o = obj;
            break
    }
    ;return o
}
function setUserInfo() {
    var user = {
        user: $rootScope[_$_480d[278]],
        token: $rootScope[_$_480d[279]],
        timeout: moment()[_$_480d[864]](15, _$_480d[1697])
    };
    localStorage[_$_480d[1700]]($location[_$_480d[1698]](), JSON[_$_480d[1699]](user))
}
function getUserInfo() {
    var userinfo = localStorage[_$_480d[1701]]($location[_$_480d[1698]]());
    if (isnull(userinfo)) {
        return false
    }
    ;var user = JSON[_$_480d[298]](userinfo);
    if (moment()[_$_480d[866]](user[_$_480d[1702]])) {
        $rootScope[_$_480d[278]] = user[_$_480d[278]];
        $rootScope[_$_480d[279]] = user[_$_480d[279]];
        return true
    } else {
        delUserInfo();
        return false
    }
}
function delUserInfo() {
    localStorage[_$_480d[1703]]($location[_$_480d[1698]]())
}
function setUserByRootScope(user) {
    var betpwd = $rootScope[_$_480d[278]][_$_480d[297]];
    $rootScope[_$_480d[278]] = user;
    $rootScope[_$_480d[278]][_$_480d[297]] = betpwd
}
function cp(str, on_finish, on_progress) {
    var data_to_cp = str;
    if (isArray(str)) {
        data_to_cp = str[_$_480d[725]]()
    } else {
        if (isJson(str)) {
            data_to_cp = JSON[_$_480d[1699]](str)
        }
    }
    ;lz[_$_480d[1704]](data_to_cp, 3, on_finish, on_progress)
}
function dp(hex, on_finish, on_progress) {
    var byte_arr = htb(hex);
    lz[_$_480d[627]](byte_arr, on_finish, on_progress)
}
function dpmd5(hex, on_finish, on_progress) {
    var byte_arr = htb(hex[_$_480d[1269]](0, hex[_$_480d[346]] - 32));
    lz[_$_480d[627]](byte_arr, on_finish, on_progress)
}
function htb(hex_str) {
    if (/[^0-9a-fA-F\s]/[_$_480d[682]](hex_str)) {
        return false
    }
    ;var pos = 0;
    var len = hex_str[_$_480d[346]];
    if (len % 2 != 0) {
        return null
    }
    ;len /= 2;
    var hex_data = new Array();
    for (var i = 0; i < len; i++) {
        var s = hex_str[_$_480d[249]](pos, 2);
        var v = parseInt(s, 16);
        hex_data[_$_480d[26]](v);
        pos += 2
    }
    ;return hex_data
}
function bth(byte_arr) {
    if (!isArray(byte_arr)) {
        return false
    }
    ;var hex_str = _$_480d[337], i, len, tmp_hex;
    len = byte_arr[_$_480d[346]];
    for (i = 0; i < len; ++i) {
        if (byte_arr[i] < 0) {
            byte_arr[i] = byte_arr[i] + 256
        }
        ;tmp_hex = byte_arr[i][_$_480d[585]](16);
        if (tmp_hex[_$_480d[346]] === 1) {
            tmp_hex = _$_480d[1045] + tmp_hex
        }
        ;hex_str += tmp_hex
    }
    ;return hex_str[_$_480d[1705]]()
}
function isArray(input) {
    return input && typeof input === _$_480d[1696] && (input instanceof Array || (input[_$_480d[1706]] && input[_$_480d[1706]]instanceof ArrayBuffer))
}
function isJson(input) {
    return typeof (input) == _$_480d[1696] && Object[_$_480d[1708]][_$_480d[585]][_$_480d[1707]](input)[_$_480d[1663]]() == _$_480d[1709] && !input[_$_480d[346]]
}
function isStandalone() {
    return navigator[_$_480d[1710]] || (window[_$_480d[1713]](_$_480d[1712])[_$_480d[1711]])
}
function addToHomeScreen(type) {
    var id = (type == _$_480d[1714]) ? _$_480d[1715] : _$_480d[1716];
    if (isStandalone() == false) {
        var html = _$_480d[337];
        html += _$_480d[1717] + id + _$_480d[370];
        if (type != _$_480d[1714]) {
            html += _$_480d[1718]
        }
        ;html += _$_480d[1719];
        html += _$_480d[1720];
        html += _$_480d[1721] + ((type == _$_480d[1714]) ? _$_480d[1671] : _$_480d[1722]) + _$_480d[1723] + id + _$_480d[1724];
        html += _$_480d[1725];
        html += _$_480d[1726];
        html += _$_480d[1727];
        html += _$_480d[1728] + ((type == _$_480d[1714]) ? _$_480d[1729] : _$_480d[1730]) + _$_480d[1731];
        html += _$_480d[1732];
        html += _$_480d[1733] + ((type == _$_480d[1714]) ? _$_480d[1734] : _$_480d[1735]) + _$_480d[1736];
        html += _$_480d[1732];
        html += _$_480d[1737];
        html += _$_480d[1738];
        html += _$_480d[1739];
        html += _$_480d[1725];
        html += _$_480d[1740];
        if (type == _$_480d[1714]) {
            html += _$_480d[1741]
        }
        ;html += _$_480d[1742];
        angular[_$_480d[331]](document[_$_480d[1743]](_$_480d[416]))[_$_480d[1598]](html);
        if (type != _$_480d[1714]) {
            $timeout(function() {
                var ath = document[_$_480d[326]](id);
                if (ath && ath[_$_480d[324]]) {
                    ath[_$_480d[324]]()
                }
            }, 5000)
        }
    }
}
function addToHomeScreenByChrome(evn) {
    var html = _$_480d[337];
    html += _$_480d[1744];
    html += _$_480d[1745];
    html += _$_480d[1746];
    html += _$_480d[1747];
    html += _$_480d[1503];
    html += _$_480d[1748];
    html += _$_480d[1749];
    html += _$_480d[1503];
    html += _$_480d[424];
    angular[_$_480d[331]](document[_$_480d[1743]](_$_480d[416]))[_$_480d[1598]](html);
    var _add = document[_$_480d[326]](_$_480d[1750]);
    _add[_$_480d[328]](_$_480d[650], evn);
    $timeout(function() {
        var ath = document[_$_480d[326]](_$_480d[325]);
        if (ath && ath[_$_480d[324]]) {
            ath[_$_480d[324]]()
        }
    }, 5000)
}
function onlyconfirm(title, msg, event) {
    ngDialog[_$_480d[425]]({
        template: _$_480d[1623] + title + _$_480d[1624] + _$_480d[1630] + msg + _$_480d[1628] + _$_480d[421] + _$_480d[1751] + _$_480d[1639],
        plain: true,
        showClose: false,
        closeByEscape: false,
        controller: [_$_480d[334], function($scope) {
            $scope[_$_480d[1752]] = function() {
                $scope[_$_480d[1643]]();
                if (event != null && event != undefined && typeof (event) == _$_480d[1753]) {
                    event()
                }
            }
        }
        ]
    })
}
function overconfirm(title, msg, event, cancel) {
    ngDialog[_$_480d[425]]({
        template: _$_480d[1623] + title + _$_480d[1624] + _$_480d[1630] + msg + _$_480d[1628] + _$_480d[421] + _$_480d[1754] + _$_480d[1755] + _$_480d[1639],
        plain: true,
        controller: [_$_480d[334], function($scope) {
            $scope[_$_480d[1756]] = function() {
                $scope[_$_480d[1643]]();
                if (event != null && event != undefined && typeof (event) == _$_480d[1753]) {
                    event()
                }
            }
            ;
            $scope[_$_480d[1757]] = function() {
                $scope[_$_480d[1643]]();
                if (cancel != null && cancel != undefined && typeof (cancel) == _$_480d[1753]) {
                    cancel()
                }
            }
        }
        ]
    })
}
function dynamicpost(data, name) {
    var index = data[_$_480d[248]](_$_480d[244]);
    data = data[_$_480d[1269]](index + 1);
    var url = data[_$_480d[246]](/^\?/, _$_480d[337])[_$_480d[1664]](_$_480d[1681]);
    var params = {};
    for (var i = 0, iLen = url[_$_480d[346]]; i < iLen; i++) {
        var param = url[i][_$_480d[1664]](_$_480d[950]);
        params[param[0]] = param[1]
    }
    ;var action = decodeURIComponent(params[_$_480d[405]]);
    var fromString = _$_480d[1758] + action + _$_480d[370];
    for (var p in params) {
        if (p == _$_480d[405]) {
            continue
        }
        ;fromString += _$_480d[1646] + p + _$_480d[1647] + params[p] + _$_480d[370]
    }
    ;fromString += _$_480d[1759] + name + _$_480d[1760];
    return fromString
}
function setGoogleRecaptchaToken(actionName, vm) {
    var recaptchaScript = document[_$_480d[326]](_$_480d[1761]);
    var index = recaptchaScript[_$_480d[1762]][_$_480d[248]](_$_480d[950]) + 1;
    var key = recaptchaScript[_$_480d[1762]][_$_480d[249]](index);
    try {
        grecaptcha[_$_480d[1764]](key, {
            action: actionName
        })[_$_480d[318]](function(token) {
            vm[_$_480d[1763]] = token
        })
    } catch (e) {}
}
function logout() {
    overconfirm(_$_480d[1765], _$_480d[1766], function() {
        delUserInfo();
        post(_$_480d[232], _$_480d[981], null, function() {
            $rootScope[_$_480d[278]] = null;
            $rootScope[_$_480d[279]] = null;
            $rootScope[_$_480d[280]] = null;
            $window[_$_480d[273]][_$_480d[1279]]()
        })
    }, null)
}
function exit(title, message) {
    delUserInfo();
    $rootScope[_$_480d[278]] = null;
    $rootScope[_$_480d[279]] = null;
    $rootScope[_$_480d[280]] = null;
    ngDialog[_$_480d[555]]({
        template: _$_480d[1623] + title + _$_480d[1767] + _$_480d[1768] + message + _$_480d[1628] + _$_480d[1769],
        plain: true,
        showClose: false,
        closeByEscape: false,
        controller: [_$_480d[334], _$_480d[237], _$_480d[589], function($scope, $state, $window) {
            $scope[_$_480d[706]] = function() {
                $scope[_$_480d[1643]]();
                $state[_$_480d[344]](_$_480d[228], {
                    isreload: true
                })
            }
        }
        ]
    })
}
function getDta(params){
    var hex = bth(lz(params,3,undefined,undefined).result);
    var data = hex + md5(hex);
    console.log(data)
    return data
}

var p = '{"data":{"item1":"chrome88.0.4324.182"},"time":1618130116812,"user":"18990284571"}'
getDta(p)