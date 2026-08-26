import {
    $n as e,
    Cn as t,
    Z as n,
    lr as r
} from "./dist-DAh4MArN.js";
import {
    A as i,
    C as a,
    D as o,
    E as s,
    M as c,
    O as l,
    S as u,
    T as d,
    c as f,
    d as p,
    f as m,
    g as h,
    h as g,
    i as _,
    k as v,
    m as y,
    n as b,
    p as x,
    r as S,
    s as C,
    t as w,
    v as T,
    y as E
} from "./_Uint8Array-BAKrA5Nj.js";
import {
    c as D,
    f as O,
    l as k,
    m as A,
    s as ee,
    u as te
} from "./app-CYWi0gZD.js";
import {
    i as ne
} from "./useApi-CTGQWKI_.js";

function j(e, t, n, r) {
    for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;)
        if (t(e[a], a, e)) return a;
    return -1
}
var re = `__lodash_hash_undefined__`;

function ie(e) {
    return this.__data__.set(e, re), this
}

function ae(e) {
    return this.__data__.has(e)
}

function M(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.__data__ = new g; ++t < n;) this.add(e[t])
}
M.prototype.add = M.prototype.push = ie, M.prototype.has = ae;

function oe(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e)) return !0;
    return !1
}

function se(e, t) {
    return e.has(t)
}
var ce = 1,
    le = 2;

function N(e, t, n, r, i, a) {
    var o = n & ce,
        s = e.length,
        c = t.length;
    if (s != c && !(o && c > s)) return !1;
    var l = a.get(e),
        u = a.get(t);
    if (l && u) return l == t && u == e;
    var d = -1,
        f = !0,
        p = n & le ? new M : void 0;
    for (a.set(e, t), a.set(t, e); ++d < s;) {
        var m = e[d],
            h = t[d];
        if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
        if (g !== void 0) {
            if (g) continue;
            f = !1;
            break
        }
        if (p) {
            if (!oe(t, function(e, t) {
                    if (!se(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t)
                })) {
                f = !1;
                break
            }
        } else if (!(m === h || i(m, h, n, r, a))) {
            f = !1;
            break
        }
    }
    return a.delete(e), a.delete(t), f
}

function ue(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach(function(e, r) {
        n[++t] = [r, e]
    }), n
}

function de(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach(function(e) {
        n[++t] = e
    }), n
}
var fe = 1,
    pe = 2,
    me = `[object Boolean]`,
    he = `[object Date]`,
    ge = `[object Error]`,
    _e = `[object Map]`,
    ve = `[object Number]`,
    ye = `[object RegExp]`,
    be = `[object Set]`,
    xe = `[object String]`,
    Se = `[object Symbol]`,
    Ce = `[object ArrayBuffer]`,
    we = `[object DataView]`,
    P = A ? A.prototype : void 0,
    F = P ? P.valueOf : void 0;

function Te(e, t, n, r, i, a, o) {
    switch (n) {
        case we:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
        case Ce:
            return !(e.byteLength != t.byteLength || !a(new w(e), new w(t)));
        case me:
        case he:
        case ve:
            return l(+e, +t);
        case ge:
            return e.name == t.name && e.message == t.message;
        case ye:
        case xe:
            return e == t + ``;
        case _e:
            var s = ue;
        case be:
            var c = r & fe;
            if (s || = de, e.size != t.size && !c) return !1;
            var u = o.get(e);
            if (u) return u == t;
            r |= pe, o.set(e, t);
            var d = N(s(e), s(t), r, i, a, o);
            return o.delete(e), d;
        case Se:
            if (F) return F.call(e) == F.call(t)
    }
    return !1
}
var Ee = 1,
    De = Object.prototype.hasOwnProperty;

function Oe(e, t, n, r, i, a) {
    var o = n & Ee,
        s = _(e),
        c = s.length;
    if (c != _(t).length && !o) return !1;
    for (var l = c; l--;) {
        var u = s[l];
        if (!(o ? u in t : De.call(t, u))) return !1
    }
    var d = a.get(e),
        f = a.get(t);
    if (d && f) return d == t && f == e;
    var p = !0;
    a.set(e, t), a.set(t, e);
    for (var m = o; ++l < c;) {
        u = s[l];
        var h = e[u],
            g = t[u];
        if (r) var v = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
        if (!(v === void 0 ? h === g || i(h, g, n, r, a) : v)) {
            p = !1;
            break
        }
        m || = u == `constructor`
    }
    if (p && !m) {
        var y = e.constructor,
            b = t.constructor;
        y != b && `constructor` in e && `constructor` in t && !(typeof y == `function` && y instanceof y && typeof b == `function` && b instanceof b) && (p = !1)
    }
    return a.delete(e), a.delete(t), p
}
var ke = 1,
    I = `[object Arguments]`,
    L = `[object Array]`,
    R = `[object Object]`,
    z = Object.prototype.hasOwnProperty;

function Ae(e, t, n, r, i, a) {
    var o = k(e),
        s = k(t),
        c = o ? L : b(e),
        l = s ? L : b(t);
    c = c == I ? R : c, l = l == I ? R : l;
    var d = c == R,
        p = l == R,
        m = c == l;
    if (m && u(e)) {
        if (!u(t)) return !1;
        o = !0, d = !1
    }
    if (m && !d) return a || = new f, o || E(e) ? N(e, t, n, r, i, a) : Te(e, t, c, n, r, i, a);
    if (!(n & ke)) {
        var h = d && z.call(e, `__wrapped__`),
            g = p && z.call(t, `__wrapped__`);
        if (h || g) {
            var _ = h ? e.value() : e,
                v = g ? t.value() : t;
            return a || = new f, i(_, v, n, r, a)
        }
    }
    return m ? (a || = new f, Oe(e, t, n, r, i, a)) : !1
}

function B(e, t, n, r, i) {
    return e === t ? !0 : e == null || t == null || !O(e) && !O(t) ? e !== e && t !== t : Ae(e, t, n, r, B, i)
}
var je = 1,
    Me = 2;

function Ne(e, t, n, r) {
    var i = n.length,
        a = i,
        o = !r;
    if (e == null) return !a;
    for (e = Object(e); i--;) {
        var s = n[i];
        if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
    }
    for (; ++i < a;) {
        s = n[i];
        var c = s[0],
            l = e[c],
            u = s[1];
        if (o && s[2]) {
            if (l === void 0 && !(c in e)) return !1
        } else {
            var d = new f;
            if (r) var p = r(l, u, c, e, t, d);
            if (!(p === void 0 ? B(u, l, je | Me, r, d) : p)) return !1
        }
    }
    return !0
}

function V(e) {
    return e === e && !D(e)
}

function Pe(e) {
    for (var t = T(e), n = t.length; n--;) {
        var r = t[n],
            i = e[r];
        t[n] = [r, i, V(i)]
    }
    return t
}

function H(e, t) {
    return function(n) {
        return n != null && n[e] === t && (t !== void 0 || e in Object(n))
    }
}

function Fe(e) {
    var t = Pe(e);
    return t.length == 1 && t[0][2] ? H(t[0][0], t[0][1]) : function(n) {
        return n === e || Ne(n, e, t)
    }
}

function Ie(e, t) {
    return e != null && t in Object(e)
}

function U(e, t, n) {
    t = y(t, e);
    for (var r = -1, o = t.length, c = !1; ++r < o;) {
        var l = x(t[r]);
        if (!(c = e != null && n(e, l))) break;
        e = e[l]
    }
    return c || ++r != o ? c : (o = e == null ? 0 : e.length, !!o && s(o) && i(l, o) && (k(e) || a(e)))
}

function W(e, t) {
    return e != null && U(e, t, Ie)
}
var Le = 1,
    Re = 2;

function ze(e, t) {
    return h(e) && V(t) ? H(x(e), t) : function(n) {
        var r = p(n, e);
        return r === void 0 && r === t ? W(n, e) : B(t, r, Le | Re)
    }
}

function Be(e) {
    return function(t) {
        return t ? .[e]
    }
}

function Ve(e) {
    return function(t) {
        return m(t, e)
    }
}

function He(e) {
    return h(e) ? Be(x(e)) : Ve(e)
}

function G(e) {
    return typeof e == `function` ? e : e == null ? c : typeof e == `object` ? k(e) ? ze(e[0], e[1]) : Fe(e) : He(e)
}

function Ue(e, t, n, r) {
    for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) {
        var o = e[i];
        t(r, o, n(o), e)
    }
    return r
}

function We(e) {
    return function(t, n, r) {
        for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
            var c = o[e ? s : ++i];
            if (n(a[c], c, a) === !1) break
        }
        return t
    }
}
var Ge = We();

function Ke(e, t) {
    return e && Ge(e, t, T)
}

function qe(e, t) {
    return function(n, r) {
        if (n == null) return n;
        if (!d(n)) return e(n, r);
        for (var i = n.length, a = t ? i : -1, o = Object(n);
            (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
        return n
    }
}
var K = qe(Ke);

function Je(e, t, n, r) {
    return K(e, function(e, i, a) {
        t(r, e, n(e), a)
    }), r
}

function Ye(e, t) {
    return function(n, r) {
        var i = k(n) ? Ue : Je,
            a = t ? t() : {};
        return i(n, e, G(r, 2), a)
    }
}

function Xe(e, t) {
    var n = [];
    return K(e, function(e, r, i) {
        t(e, r, i) && n.push(e)
    }), n
}

function q(e, t) {
    return (k(e) ? C : Xe)(e, G(t, 3))
}

function Ze(e) {
    return function(t, n, r) {
        var i = Object(t);
        if (!d(t)) {
            var a = G(n, 3);
            t = T(t), n = function(e) {
                return a(i[e], e, i)
            }
        }
        var o = e(t, n, r);
        return o > -1 ? i[a ? t[o] : o] : void 0
    }
}
var Qe = Math.max;

function J(e, t, n) {
    var r = e == null ? 0 : e.length;
    if (!r) return -1;
    var i = n == null ? 0 : ee(n);
    return i < 0 && (i = Qe(r + i, 0)), j(e, G(t, 3), i)
}
var Y = Ze(J);

function $e(e, t) {
    var n = -1,
        r = d(e) ? Array(e.length) : [];
    return K(e, function(e, i, a) {
        r[++n] = t(e, i, a)
    }), r
}

function X(e, t) {
    return (k(e) ? te : $e)(e, G(t, 3))
}
var Z = Ye(function(e, t, n) {
    v(e, n, t)
});

function et(e, t, n, r) {
    if (!D(e)) return e;
    t = y(t, e);
    for (var a = -1, s = t.length, c = s - 1, l = e; l != null && ++a < s;) {
        var u = x(t[a]),
            d = n;
        if (u === `__proto__` || u === `constructor` || u === `prototype`) return e;
        if (a != c) {
            var f = l[u];
            d = r ? r(f, u, l) : void 0, d === void 0 && (d = D(f) ? f : i(t[a + 1]) ? [] : {})
        }
        o(l, u, d), l = l[u]
    }
    return e
}

function tt(e, t, n) {
    for (var r = -1, i = t.length, a = {}; ++r < i;) {
        var o = t[r],
            s = m(e, o);
        n(s, o) && et(a, y(o, e), s)
    }
    return a
}

function nt(e, t) {
    if (e == null) return {};
    var n = te(S(e), function(e) {
        return [e]
    });
    return t = G(t), tt(e, n, function(e, n) {
        return t(e, n[0])
    })
}
var Q = new Map;

function $(i) {
    let {
        includeAlternativeEngines: a = !0,
        setDefaultEngine: o = !0,
        initialEngine: s = null
    } = i, c = typeof i.operation == `string` ? e(i.operation) : i.operation, l = e(null), u = e(null), d = e(null), f = e(null), p = e(null), m = e(!1), h = e(null), g = e(!1), _ = e(!1), v = n(() => X(h.value || [], `engine`)), y = n(() => {
        let e = Y(h.value || [], {
            engine: l.value
        });
        return e && e.engine_versions ? X(e.engine_versions, `version`) : []
    }), b = n(() => m.value || g.value), x = n(() => {
        let e = Y(h.value || [], {
            engine: l.value
        });
        return e ? e.experimental ? ? !1 : !1
    }), S = n(() => {
        let e = Y(h.value || [], {
            engine: l.value
        });
        return e && e.note ? e.note : null
    });
    async function C(e = {}) {
        let t = r(c);
        if (!t) return [];
        let n = `/v2/operations?${new URLSearchParams({...e,"filter[operation]":t}).toString()}`;
        if (Q.has(n)) return Q.get(n);
        let i = ne(n, {
                credentials: `omit`
            }, {
                immediate: !1
            }).json(),
            a = i.execute().then(() => i.data.value ? .data ? ? []).catch(e => {
                throw Q.delete(n), e
            });
        return Q.set(n, a), a
    }
    async function w() {
        m.value = !0, f.value = await C(), m.value = !1
    }
    async function E(e = {}) {
        if (g.value = !0, h.value = await C({
                alternatives: a,
                include: `options,engine_versions`,
                ...e
            }), h.value && h.value.length === 1) u.value = h.value[0].engine;
        else {
            f.value || await w();
            let t = {};
            for (let n in e) n.replace(/^filter\[(.+)\]$/, (r, i) => (t[i] = e[n], ``));
            let n = Y(f.value || [], t);
            u.value = n ? n.engine : null
        }
        o && !l.value && u.value && (l.value = u.value), g.value = !1
    }

    function D(e) {
        let t = u.value === e ? [`default`] : [],
            n = Y(h.value || [], {
                engine: e
            });
        return n && n.credits && t.push(`credits: ` + n.credits), n && n.experimental && t.push(`experimental`), t
    }

    function O(e, t) {
        let n = Y(Y(h.value || [], {
            engine: e
        }) ? .engine_versions || [], {
            version: t
        });
        return n ? T(nt(n, (e, t) => e && t !== `version`)) : []
    }
    return t(f, () => {
        !l.value && o && (l.value = u.value)
    }), t(h, () => {
        !_.value && s && rt(h.value, s) && (l.value = s, _.value = !0);
        let e = Y(h.value || [], {
            engine: l.value || u.value
        });
        p.value = e && e.options ? e.options : []
    }), t(l, () => {
        if (l.value || u.value) {
            let e = Y(h.value || [], {
                engine: l.value || u.value
            });
            p.value = e && e.options ? e.options : []
        } else p.value = null;
        d.value = null
    }), t(u, () => {
        if (!(o || l.value))
            if (u.value) {
                let e = Y(h.value || [], {
                    engine: u.value
                });
                p.value = e && e.options ? e.options : null
            } else p.value = null
    }), t(c, async e => {
        e ? await w() : (f.value = null, h.value = null)
    }, {
        immediate: !0
    }), {
        engine: l,
        engineVersion: d,
        formats: f,
        options: p,
        loadingFormats: m,
        alternatives: h,
        loadingAlternatives: g,
        engines: v,
        engineVersions: y,
        defaultEngine: u,
        loading: b,
        experimental: x,
        note: S,
        getFormats: w,
        getAlternatives: E,
        getOperations: C,
        engineLabels: D,
        engineVersionLabels: O
    }
}

function rt(e, t) {
    return !!Y(e || [], {
        engine: t
    })
}

function it(r) {
    let {
        operation: i,
        initialInputFormat: a,
        initialOutputFormat: o,
        initialEngine: s,
        filterOutputFormats: c = !0,
        filterInputFormats: l = !1,
        includeAlternativeEngines: u = !0,
        setDefaultEngine: d = !0
    } = r, f = $({
        operation: i,
        initialEngine: s,
        includeAlternativeEngines: u,
        setDefaultEngine: d
    }), p = e(a || null), m = e(o || null), h = n(() => {
        if (!f.formats.value) return null;
        let e = f.formats.value;
        return l && m.value && (e = q(e, e => e.output_format === m.value)), T(Z(e, `input_format`))
    }), g = n(() => {
        if (!f.formats.value) return null;
        let e = f.formats.value;
        return c && p.value && (e = q(e, e => e.input_format === p.value)), T(Z(e, `output_format`))
    });
    async function _() {
        f.loadingAlternatives.value || (await f.getAlternatives({
            "filter[input_format]": p.value,
            "filter[output_format]": m.value
        }), d && (f.engine.value = f.defaultEngine.value))
    }
    return t(p, async () => {
        f.engine.value = null, p.value && m.value ? (await _(), d && (f.engine.value = f.defaultEngine.value)) : f.alternatives.value = null
    }, {
        immediate: !0
    }), t(m, async () => {
        f.engine.value = null, p.value && m.value ? (await _(), d && (f.engine.value = f.defaultEngine.value)) : f.alternatives.value = null
    }, {
        immediate: !0
    }), {
        inputFormat: p,
        outputFormat: m,
        inputFormats: h,
        outputFormats: g,
        defaultEngine: f.defaultEngine,
        engine: f.engine,
        engineVersion: f.engineVersion,
        options: f.options,
        alternatives: f.alternatives,
        engines: f.engines,
        engineVersions: f.engineVersions,
        loading: f.loading,
        experimental: f.experimental,
        note: f.note,
        engineLabels: f.engineLabels,
        engineVersionLabels: f.engineVersionLabels
    }
}
export {
    Z as a, J as c, W as d, U as f, j as h, tt as i, q as l, M as m, $ as n, X as o, se as p, nt as r, Y as s, it as t, G as u
};