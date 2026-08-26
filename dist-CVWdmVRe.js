import {
    $n as e,
    Bn as t,
    Cn as n,
    Ct as r,
    Gn as i,
    It as a,
    Jn as o,
    Ln as s,
    Qn as c,
    Ut as l,
    Z as u,
    Zn as d,
    ar as f,
    kt as p,
    lr as m,
    nr as h,
    or as g,
    qt as ee,
    sr as _,
    tr as v,
    vt as y,
    zn as b,
    zt as x
} from "./dist-DAh4MArN.js";

function S(e, t, r = {}) {
    let i, a, o, c = !0,
        l = () => {
            c = !0, o()
        };
    n(e, l, {
        flush: `sync`,
        ...r
    });
    let u = typeof t == `function` ? t : t.get,
        d = typeof t == `function` ? void 0 : t.set,
        f = s((e, t) => (a = e, o = t, {
            get() {
                return c && = (i = u(i), !1), a(), i
            },
            set(e) {
                d ? .(e)
            }
        }));
    return f.trigger = l, f
}

function C(e, n) {
    return t() ? (o(e, n), !0) : !1
}

function w() {
    let e = new Set,
        t = t => {
            e.delete(t)
        };
    return {
        on: n => {
            e.add(n);
            let r = () => t(n);
            return C(r), {
                off: r
            }
        },
        off: t,
        trigger: (...t) => Promise.all(Array.from(e).map(e => e(...t))),
        clear: () => {
            e.clear()
        }
    }
}

function T(e) {
    let t = !1,
        n, r = b(!0);
    return ((...i) => (t || = (n = r.run(() => e(...i)), !0), n))
}
var E = new WeakMap,
    te = (...e) => {
        let n = e[0],
            i = y() ? .proxy ? ? t();
        if (i == null && !r()) throw Error(`injectLocal must be called in setup`);
        return i && E.has(i) && n in E.get(i) ? E.get(i)[n] : p(...e)
    };

function ne(t, n) {
    return n === !0 ? e(t) : h(t)
}
var D = typeof window < `u` && typeof document < `u`;
typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var re = e => e !== void 0,
    O = e => e != null,
    k = Object.prototype.toString,
    A = e => k.call(e) === `[object Object]`,
    j = () => {},
    ie = (e, t) => Object.hasOwn(e, t),
    ae = oe();

function oe() {
    var e, t;
    return D && !!((e = window) != null && (e = e.navigator) != null && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window ? .navigator.userAgent))
}

function M(...t) {
    if (t.length !== 1) return f(...t);
    let n = t[0];
    return typeof n == `function` ? c(s(() => ({
        get: n,
        set: j
    }))) : e(n)
}

function N(e, t) {
    function n(...n) {
        return new Promise((r, i) => {
            Promise.resolve(e(() => t.apply(this, n), {
                fn: t,
                thisArg: this,
                args: n
            })).then(r).catch(i)
        })
    }
    return n
}
var P = e => e();

function F(e, t = {}) {
    let n, r, i = j,
        a = e => {
            clearTimeout(e), i(), i = j
        },
        o;
    return s => {
        let c = _(e),
            l = _(t.maxWait);
        return n && a(n), c <= 0 || l !== void 0 && l <= 0 ? (r && = (a(r), void 0), Promise.resolve(s())) : new Promise((e, u) => {
            i = t.rejectOnCancel ? u : e, o = s, l && !r && (r = setTimeout(() => {
                n && a(n), r = void 0, e(o())
            }, l)), n = setTimeout(() => {
                r && a(r), r = void 0, e(s())
            }, c)
        })
    }
}

function I(...e) {
    let t = 0,
        n, r = !0,
        a = j,
        o, s, c, l, u;
    !i(e[0]) && typeof e[0] == `object` ? {
        delay: s,
        trailing: c = !0,
        leading: l = !0,
        rejectOnCancel: u = !1
    } = e[0] : [s, c = !0, l = !0, u = !1] = e;
    let d = () => {
        n && (clearTimeout(n), n = void 0, a(), a = j)
    };
    return e => {
        let i = _(s),
            f = Date.now() - t,
            p = () => o = e();
        return d(), i <= 0 ? (t = Date.now(), p()) : (f > i ? (t = Date.now(), (l || !r) && p()) : c && (o = new Promise((e, o) => {
            a = u ? o : e, n = setTimeout(() => {
                t = Date.now(), r = !0, e(p()), d()
            }, Math.max(0, i - f))
        })), !l && !n && (n = setTimeout(() => r = !0, i)), r = !1, o)
    }
}

function L(e = P, t = {}) {
    let {
        initialState: n = `active`
    } = t, r = M(n === `active`);

    function i() {
        r.value = !1
    }

    function a() {
        r.value = !0
    }
    return {
        isActive: v(r),
        pause: i,
        resume: a,
        eventFilter: (...t) => {
            r.value && e(...t)
        }
    }
}

function R(e, t = !1, n = `Timeout`) {
    return new Promise((r, i) => {
        t ? setTimeout(i, e, n) : setTimeout(r, e)
    })
}

function z(e) {
    return e
}

function B(e) {
    let t;

    function n() {
        return t || = e(), t
    }
    return n.reset = async () => {
        let e = t;
        t = void 0, e && await e
    }, n
}

function V(e, ...t) {
    return t.some(t => t in e)
}

function H(e) {
    return e.endsWith(`rem`) ? Number.parseFloat(e) * 16 : Number.parseFloat(e)
}

function U(e) {
    return Array.isArray(e) ? e : [e]
}

function W(e) {
    let t = Object.create(null);
    return (n => t[n] || (t[n] = e(n)))
}
var G = /-(\w)/g,
    K = W(e => e.replace(G, (e, t) => t ? t.toUpperCase() : ``));

function q(e) {
    return e || y()
}

function se(e) {
    if (!D) return e;
    let t = 0,
        n, r, i = () => {
            --t, r && t <= 0 && (r.stop(), n = void 0, r = void 0)
        };
    return ((...a) => (t += 1, r || (r = b(!0), n = r.run(() => e(...a))), C(i), n))
}

function ce(e, t) {
    if (typeof Symbol < `u`) {
        let n = { ...e
        };
        return Object.defineProperty(n, Symbol.iterator, {
            enumerable: !1,
            value() {
                let e = 0;
                return {
                    next: () => ({
                        value: t[e++],
                        done: e > t.length
                    })
                }
            }
        }), n
    }
    return Object.assign([...t], e)
}

function le(e) {
    return i(e) ? d(new Proxy({}, {
        get(t, n, r) {
            return m(Reflect.get(e.value, n, r))
        },
        set(t, n, r) {
            return i(e.value[n]) && !i(r) ? e.value[n].value = r : e.value[n] = r, !0
        },
        deleteProperty(t, n) {
            return Reflect.deleteProperty(e.value, n)
        },
        has(t, n) {
            return Reflect.has(e.value, n)
        },
        ownKeys() {
            return Object.keys(e.value)
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: !0,
                configurable: !0
            }
        }
    })) : d(e)
}

function J(e) {
    return le(u(e))
}

function ue(e, ...t) {
    let n = t.flat(),
        r = n[0];
    return J(() => Object.fromEntries(typeof r == `function` ? Object.entries(g(e)).filter(([e, t]) => !r(_(t), e)) : Object.entries(g(e)).filter(e => !n.includes(e[0]))))
}

function de(e, ...t) {
    let n = t.flat(),
        r = n[0];
    return J(() => Object.fromEntries(typeof r == `function` ? Object.entries(g(e)).filter(([e, t]) => r(_(t), e)) : n.map(t => [t, M(e, t)])))
}

function fe(e, t = 1e4) {
    return s((n, r) => {
        let i = _(e),
            a, o = () => setTimeout(() => {
                i = _(e), r()
            }, _(t));
        return C(() => {
            clearTimeout(a)
        }), {
            get() {
                return n(), i
            },
            set(e) {
                i = e, r(), clearTimeout(a), a = o()
            }
        }
    })
}

function pe(e, t = 200, n = {}) {
    return N(F(t, n), e)
}

function me(e, t = 200, n = !1, r = !0, i = !1) {
    return N(I(t, n, r, i), e)
}

function Y(e, t, r = {}) {
    let {
        eventFilter: i = P,
        ...a
    } = r;
    return n(e, N(i, t), a)
}

function X(e, t, n = {}) {
    let {
        eventFilter: r,
        initialState: i = `active`,
        ...a
    } = n, {
        eventFilter: o,
        pause: s,
        resume: c,
        isActive: l
    } = L(r, {
        initialState: i
    });
    return {
        stop: Y(e, t, { ...a,
            eventFilter: o
        }),
        pause: s,
        resume: c,
        isActive: l
    }
}

function he(e, t, ...[n]) {
    let {
        flush: r = `sync`,
        deep: i = !1,
        immediate: a = !0,
        direction: o = `both`,
        transform: s = {}
    } = n || {}, c = [], l = `ltr` in s && s.ltr || (e => e), u = `rtl` in s && s.rtl || (e => e);
    return (o === `both` || o === `ltr`) && c.push(X(e, e => {
        c.forEach(e => e.pause()), t.value = l(e), c.forEach(e => e.resume())
    }, {
        flush: r,
        deep: i,
        immediate: a
    })), (o === `both` || o === `rtl`) && c.push(X(t, t => {
        c.forEach(e => e.pause()), e.value = u(t), c.forEach(e => e.resume())
    }, {
        flush: r,
        deep: i,
        immediate: a
    })), () => {
        c.forEach(e => e.stop())
    }
}

function ge(e, t) {
    q(t) && x(e, t)
}

function _e(e, t = !0, n) {
    q(n) ? l(e, n) : t ? e() : a(e)
}

function ve(e, t) {
    q(t) && ee(e, t)
}

function Z(e, t = !1) {
    function r(r, {
        flush: i = `sync`,
        deep: o = !1,
        timeout: s,
        throwOnTimeout: c
    } = {}) {
        let l = null,
            u = [new Promise(s => {
                l = n(e, e => {
                    r(e) !== t && (l ? l() : a(() => l ? .()), s(e))
                }, {
                    flush: i,
                    deep: o,
                    immediate: !0
                })
            })];
        return s != null && u.push(R(s, c).then(() => _(e)).finally(() => l ? .())), Promise.race(u)
    }

    function o(o, s) {
        if (!i(o)) return r(e => e === o, s);
        let {
            flush: c = `sync`,
            deep: l = !1,
            timeout: u,
            throwOnTimeout: d
        } = s ? ? {}, f = null, p = [new Promise(r => {
            f = n([e, o], ([e, n]) => {
                t !== (e === n) && (f ? f() : a(() => f ? .()), r(e))
            }, {
                flush: c,
                deep: l,
                immediate: !0
            })
        })];
        return u != null && p.push(R(u, d).then(() => _(e)).finally(() => (f ? .(), _(e)))), Promise.race(p)
    }

    function s(e) {
        return r(e => !!e, e)
    }

    function c(e) {
        return o(null, e)
    }

    function l(e) {
        return o(void 0, e)
    }

    function u(e) {
        return r(Number.isNaN, e)
    }

    function d(e, t) {
        return r(t => {
            let n = Array.from(t);
            return n.includes(e) || n.includes(_(e))
        }, t)
    }

    function f(e) {
        return p(1, e)
    }

    function p(e = 1, t) {
        let n = -1;
        return r(() => (n += 1, n >= e), t)
    }
    return Array.isArray(_(e)) ? {
        toMatch: r,
        toContains: d,
        changed: f,
        changedTimes: p,
        get not() {
            return Z(e, !t)
        }
    } : {
        toMatch: r,
        toBe: o,
        toBeTruthy: s,
        toBeNull: c,
        toBeNaN: u,
        toBeUndefined: l,
        changed: f,
        changedTimes: p,
        get not() {
            return Z(e, !t)
        }
    }
}

function ye(e) {
    return Z(e)
}

function Q(e, t = 1e3, r = {}) {
    let {
        immediate: a = !0,
        immediateCallback: o = !1
    } = r, s = null, c = h(!1);

    function l() {
        s && = (clearInterval(s), null)
    }

    function u() {
        c.value = !1, l()
    }

    function d() {
        let n = _(t);
        n <= 0 || (c.value = !0, o && e(), l(), c.value && (s = setInterval(e, n)))
    }
    return a && D && d(), (i(t) || typeof t == `function`) && C(n(t, () => {
        c.value && D && d()
    })), C(u), {
        isActive: v(c),
        pause: u,
        resume: d
    }
}

function $(e, t, n = {}) {
    let {
        immediate: r = !0,
        immediateCallback: i = !1
    } = n, a = h(!1), o;

    function s() {
        o && = (clearTimeout(o), void 0)
    }

    function c() {
        a.value = !1, s()
    }

    function l(...n) {
        i && e(), s(), a.value = !0, o = setTimeout(() => {
            a.value = !1, o = void 0, e(...n)
        }, _(t))
    }
    return r && (a.value = !0, D && l()), C(c), {
        isPending: v(a),
        start: l,
        stop: c
    }
}

function be(e = 1e3, t = {}) {
    let {
        controls: n = !1,
        callback: r
    } = t, i = $(r ? ? j, e, t), a = u(() => !i.isPending.value);
    return n ? {
        ready: a,
        ...i
    } : a
}

function xe(e, t, n = {}) {
    let {
        debounce: r = 0,
        maxWait: i = void 0,
        ...a
    } = n;
    return Y(e, t, { ...a,
        eventFilter: F(r, {
            maxWait: i
        })
    })
}

function Se(e, t, r) {
    return n(e, t, { ...r,
        immediate: !0
    })
}

function Ce(e, t, r) {
    return n(e, t, { ...r,
        once: !0
    })
}

function we(e, t, n = {}) {
    let {
        throttle: r = 0,
        trailing: i = !0,
        leading: a = !0,
        ...o
    } = n;
    return Y(e, t, { ...o,
        eventFilter: I(r, i, a)
    })
}
export {
    C as A, Ce as B, de as C, M as D, U as E, me as F, we as H, be as I, $ as L, ye as M, pe as N, ge as O, Q as P, xe as R, ue as S, he as T, X as V, j as _, T as a, R as b, B as c, te as d, D as f, ce as g, A as h, w as i, ve as j, _e as k, ie as l, ae as m, S as n, ne as o, re as p, V as r, se as s, K as t, z as u, O as v, fe as w, H as x, L as y, Se as z
};