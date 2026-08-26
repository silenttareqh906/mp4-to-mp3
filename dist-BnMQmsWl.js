import {
    $n as e,
    Bn as t,
    Cn as n,
    Ct as r,
    Gn as i,
    It as a,
    Jt as o,
    Qn as s,
    Ut as c,
    Z as l,
    Zn as u,
    ir as d,
    lr as f,
    nr as p,
    sr as m,
    tr as h,
    ut as g,
    vt as _,
    wn as v
} from "./dist-DAh4MArN.js";
import {
    A as y,
    B as b,
    D as x,
    E as S,
    F as C,
    L as w,
    M as T,
    N as E,
    V as D,
    _ as O,
    b as k,
    c as A,
    d as j,
    f as M,
    g as N,
    h as P,
    i as F,
    j as I,
    k as L,
    l as R,
    n as z,
    p as B,
    r as ee,
    t as te,
    u as ne,
    v as re,
    x as ie,
    z as ae
} from "./dist-CVWdmVRe.js";

function oe(e = {}) {
    let {
        inheritAttrs: t = !0,
        name: n = `ReusableTemplate`
    } = e, r = p(), i = g({
        name: `${n}.define`,
        setup(e, {
            slots: t
        }) {
            return () => {
                r.value = t.default
            }
        }
    }), a = g({
        inheritAttrs: t,
        name: `${n}.reuse`,
        props: e.props,
        setup(n, {
            attrs: i,
            slots: a
        }) {
            return () => {
                if (!r.value) throw Error(`[VueUse] Failed to find the definition of reusable template`);
                let o = r.value ? .call(r, { ...e.props == null ? se(i) : n,
                    $slots: a
                });
                return t && o ? .length === 1 ? o[0] : o
            }
        }
    });
    return N({
        define: i,
        reuse: a
    }, [i, a])
}

function se(e) {
    let t = {};
    for (let n in e) t[te(n)] = e[n];
    return t
}
var V = M ? window : void 0,
    H = M ? window.document : void 0,
    ce = M ? window.navigator : void 0;
M && window.location;

function U(e) {
    let t = m(e);
    return t ? .$el ? ? t
}

function W(...e) {
    let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)),
        n = l(() => {
            let t = S(m(e[0])).filter(e => e != null);
            return t.every(e => typeof e != `string`) ? t : void 0
        });
    return ae(() => [n.value ? .map(e => U(e)) ? ? [V].filter(e => e != null), S(m(n.value ? e[1] : e[0])), S(f(n.value ? e[2] : e[1])), m(n.value ? e[3] : e[2])], ([e, n, r, i], a, o) => {
        if (!e ? .length || !n ? .length || !r ? .length) return;
        let s = P(i) ? { ...i
            } : i,
            c = e.flatMap(e => n.flatMap(n => r.map(r => t(e, n, r, s))));
        o(() => {
            c.forEach(e => e())
        })
    }, {
        flush: `post`
    })
}

function le() {
    let e = p(!1),
        t = _();
    return t && c(() => {
        e.value = !0
    }, t), e
}

function G(e) {
    let t = le();
    return l(() => (t.value, !!e()))
}

function K(e, t, r = {}) {
    let {
        window: i = V,
        ...a
    } = r, o, s = G(() => i && `MutationObserver` in i), c = () => {
        o && = (o.disconnect(), void 0)
    }, u = n(l(() => {
        let t = S(m(e)).map(U).filter(re);
        return new Set(t)
    }), e => {
        c(), s.value && e.size && (o = new MutationObserver(t), e.forEach(e => o.observe(e, a)))
    }, {
        immediate: !0,
        flush: `post`
    }), d = () => o ? .takeRecords(), f = () => {
        u(), c()
    };
    return y(f), {
        isSupported: s,
        stop: f,
        takeRecords: d
    }
}

function ue(e, t, n = {}) {
    let {
        window: r = V,
        document: i = r ? .document,
        flush: a = `sync`
    } = n;
    if (!r || !i) return O;
    let o, s = e => {
            o ? .(), o = e
        },
        c = v(() => {
            let n = U(e);
            if (n) {
                let {
                    stop: e
                } = K(i, e => {
                    e.map(e => [...e.removedNodes]).flat().some(e => e === n || e.contains(n)) && t(e)
                }, {
                    window: r,
                    childList: !0,
                    subtree: !0
                });
                s(e)
            }
        }, {
            flush: a
        }),
        l = () => {
            c(), s()
        };
    return y(l), l
}

function de(e) {
    return typeof e == `function` ? e : typeof e == `string` ? t => t.key === e : Array.isArray(e) ? t => e.includes(t.key) : () => !0
}

function fe(...e) {
    let t, n, r = {};
    e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == `object` ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
    let {
        target: i = V,
        eventName: a = `keydown`,
        passive: o = !1,
        dedupe: s = !1
    } = r, c = de(t);
    return W(i, a, e => {
        e.repeat && m(s) || c(e) && n(e)
    }, o)
}

function pe(e = {}) {
    let {
        window: t = V,
        deep: n = !0,
        triggerOnRemoval: r = !1
    } = e, i = e.document ? ? t ? .document, a = () => {
        let e = i ? .activeElement;
        if (n)
            for (var t; e ? .shadowRoot;) e = e == null || (t = e.shadowRoot) == null ? void 0 : t.activeElement;
        return e
    }, o = p(), s = () => {
        o.value = a()
    };
    if (t) {
        let e = {
            capture: !0,
            passive: !0
        };
        W(t, `blur`, e => {
            e.relatedTarget === null && s()
        }, e), W(t, `focus`, s, e)
    }
    return r && ue(o, s, {
        document: i
    }), s(), o
}

function me(e, t = {}) {
    let {
        immediate: n = !0,
        fpsLimit: r = null,
        window: i = V,
        once: a = !1
    } = t, o = p(!1), s = l(() => {
        let e = m(r);
        return e ? 1e3 / e : null
    }), c = 0, u = null;

    function d(t) {
        if (!o.value || !i) return;
        c || = t;
        let n = t - c;
        if (s.value && n < s.value) {
            u = i.requestAnimationFrame(d);
            return
        }
        if (c = t, e({
                delta: n,
                timestamp: t
            }), a) {
            o.value = !1, u = null;
            return
        }
        u = i.requestAnimationFrame(d)
    }

    function f() {
        !o.value && i && (o.value = !0, c = 0, u = i.requestAnimationFrame(d))
    }

    function g() {
        o.value = !1, u != null && i && (i.cancelAnimationFrame(u), u = null)
    }
    return n && f(), y(g), {
        isActive: h(o),
        pause: g,
        resume: f
    }
}
var he = Symbol(`vueuse-ssr-width`);

function ge() {
    let e = r() ? j(he, null) : null;
    return typeof e == `number` ? e : void 0
}

function _e(e, t = {}) {
    let {
        window: n = V,
        ssrWidth: r = ge()
    } = t, i = G(() => n && `matchMedia` in n && typeof n.matchMedia == `function`), a = p(typeof r == `number`), o = p(), s = p(!1);
    return v(() => {
        if (a.value) {
            a.value = !i.value, s.value = m(e).split(`,`).some(e => {
                let t = e.includes(`not all`),
                    n = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
                    i = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
                    a = !!(n || i);
                return n && a && (a = r >= ie(n[1])), i && a && (a = r <= ie(i[1])), t ? !a : a
            });
            return
        }
        i.value && (o.value = n.matchMedia(m(e)), s.value = o.value.matches)
    }), W(o, `change`, e => {
        s.value = e.matches
    }, {
        passive: !0
    }), l(() => s.value)
}

function ve(e, t = {}) {
    let {
        controls: n = !1,
        navigator: r = ce
    } = t, i = G(() => r && `permissions` in r), a = p(), o = typeof e == `string` ? {
        name: e
    } : e, s = p(), c = () => {
        s.value = a.value ? .state ? ? `prompt`
    };
    W(a, `change`, c, {
        passive: !0
    });
    let l = A(async () => {
        if (i.value) {
            if (!a.value) try {
                a.value = await r.permissions.query(o)
            } catch {
                a.value = void 0
            } finally {
                c()
            }
            if (n) return d(a.value)
        }
    });
    return l(), n ? {
        state: s,
        isSupported: i,
        query: l
    } : s
}

function ye(e = {}) {
    let {
        navigator: t = ce,
        read: n = !1,
        source: r,
        copiedDuring: i = 1500,
        legacy: a = !1
    } = e, o = G(() => t && `clipboard` in t), s = ve(`clipboard-read`), c = ve(`clipboard-write`), u = l(() => o.value || a), d = p(``), f = p(!1), g = p(!1), _ = w(() => f.value = !1, i, {
        immediate: !1
    }), v = 0;
    async function y() {
        let e = !(o.value && T(s.value));
        if (!e) try {
            d.value = await t.clipboard.readText()
        } catch {
            e = !0
        }
        e && (d.value = C())
    }
    u.value && n && W([`copy`, `cut`], y, {
        passive: !0
    });
    async function b(e) {
        let n = e ? ? m(r);
        if (u.value && n != null) {
            g.value = !0;
            let e = !(o.value && T(c.value));
            if (!e) try {
                let e = x(n);
                await t.clipboard.write([e])
            } catch {
                e = !0
            }
            if (e)
                if (typeof n == `string`) d.value = n, S(n);
                else {
                    let e = ++v,
                        t = await n();
                    t != null && e === v && (d.value = t, S(t))
                }
            f.value = !0, _.start(), g.value = !1
        }
    }

    function x(e) {
        return typeof e == `string` ? (d.value = e, new ClipboardItem({
            "text/plain": e
        })) : new ClipboardItem({
            "text/plain": e().then((e = ``) => (d.value = e, new Blob([e], {
                type: `text/plain`
            })))
        })
    }

    function S(e) {
        let t = document.createElement(`textarea`);
        t.value = e, t.style.position = `absolute`, t.style.opacity = `0`, t.setAttribute(`readonly`, ``), document.body.appendChild(t), t.select(), document.execCommand(`copy`), t.remove()
    }

    function C() {
        var e, t;
        return ((e = document) == null || (t = e.getSelection) == null || (t = t.call(e)) == null ? void 0 : t.toString()) ? ? ``
    }

    function T(e) {
        return e === `granted` || e === `prompt`
    }
    return {
        copyPending: h(g),
        isSupported: u,
        text: h(d),
        copied: h(f),
        copy: b
    }
}

function be(e) {
    return JSON.parse(JSON.stringify(e))
}
var q = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : {},
    J = `__vueuse_ssr_handlers__`,
    xe = Se();

function Se() {
    return J in q || (q[J] = q[J] || {}), q[J]
}

function Ce(e, t) {
    return xe[e] || t
}

function we(e) {
    return _e(`(prefers-color-scheme: dark)`, e)
}

function Te(e) {
    return e == null ? `any` : e instanceof Set ? `set` : e instanceof Map ? `map` : e instanceof Date ? `date` : typeof e == `boolean` ? `boolean` : typeof e == `string` ? `string` : typeof e == `object` ? `object` : Number.isNaN(e) ? `any` : `number`
}
var Ee = {
        boolean: {
            read: e => e === `true`,
            write: e => String(e)
        },
        object: {
            read: e => JSON.parse(e),
            write: e => JSON.stringify(e)
        },
        number: {
            read: e => Number.parseFloat(e),
            write: e => String(e)
        },
        any: {
            read: e => e,
            write: e => String(e)
        },
        string: {
            read: e => e,
            write: e => String(e)
        },
        map: {
            read: e => new Map(JSON.parse(e)),
            write: e => JSON.stringify(Array.from(e.entries()))
        },
        set: {
            read: e => new Set(JSON.parse(e)),
            write: e => JSON.stringify(Array.from(e))
        },
        date: {
            read: e => new Date(e),
            write: e => e.toISOString()
        }
    },
    De = `vueuse-storage`;

function Oe(t, r, i, o = {}) {
    let {
        flush: s = `pre`,
        deep: c = !0,
        listenToStorageChanges: u = !0,
        writeDefaults: d = !0,
        mergeDefaults: f = !1,
        shallow: h,
        window: g = V,
        eventFilter: _,
        onError: v = e => {
            console.error(e)
        },
        initOnMounted: y
    } = o, b = (h ? p : e)(typeof r == `function` ? r() : r), x = l(() => m(t));
    if (!i) try {
        i = Ce(`getDefaultStorage`, () => V ? .localStorage)()
    } catch (e) {
        v(e)
    }
    if (!i) return b;
    let S = m(r),
        C = Te(S),
        w = o.serializer ? ? Ee[C],
        {
            pause: T,
            resume: E
        } = D(b, e => A(e), {
            flush: s,
            deep: c,
            eventFilter: _
        });
    n(x, () => M(), {
        flush: s
    });
    let O = !1;
    g && u && (i instanceof Storage ? W(g, `storage`, e => {
        y && !O || M(e)
    }, {
        passive: !0
    }) : W(g, De, e => {
        y && !O || N(e)
    })), y ? L(() => {
        O = !0, M()
    }) : M();

    function k(e, t) {
        if (g) {
            let n = {
                key: x.value,
                oldValue: e,
                newValue: t,
                storageArea: i
            };
            g.dispatchEvent(i instanceof Storage ? new StorageEvent(`storage`, n) : new CustomEvent(De, {
                detail: n
            }))
        }
    }

    function A(e) {
        try {
            let t = i.getItem(x.value);
            if (e == null) k(t, null), i.removeItem(x.value);
            else {
                let n = w.write(e);
                t !== n && (i.setItem(x.value, n), k(t, n))
            }
        } catch (e) {
            v(e)
        }
    }

    function j(e) {
        let t = e ? e.newValue : i.getItem(x.value);
        if (t == null) return d && S != null && i.setItem(x.value, w.write(S)), S;
        if (!e && f) {
            let e = w.read(t);
            return typeof f == `function` ? f(e, S) : C === `object` && !Array.isArray(e) ? { ...S,
                ...e
            } : e
        }
        return typeof t == `string` ? w.read(t) : t
    }

    function M(e) {
        if (!(e && e.storageArea !== i)) {
            if (e && e.key == null) {
                b.value = S;
                return
            }
            if (!(e && e.key !== x.value)) {
                T();
                try {
                    let t = w.write(b.value);
                    (e === void 0 || e ? .newValue !== t) && (b.value = j(e))
                } catch (e) {
                    v(e)
                } finally {
                    e ? a(E) : E()
                }
            }
        }
    }

    function N(e) {
        M(e.detail)
    }
    return b
}
var ke = `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`;

function Ae(e = {}) {
    let {
        selector: t = `html`,
        attribute: r = `class`,
        initialValue: i = `auto`,
        window: a = V,
        storage: o,
        storageKey: s = `vueuse-color-scheme`,
        listenToStorageChanges: c = !0,
        storageRef: u,
        emitAuto: d,
        disableTransition: f = !0
    } = e, p = {
        auto: ``,
        light: `light`,
        dark: `dark`,
        ...e.modes || {}
    }, m = we({
        window: a
    }), h = l(() => m.value ? `dark` : `light`), g = u || (s == null ? x(i) : Oe(s, i, o, {
        window: a,
        listenToStorageChanges: c
    })), _ = l(() => g.value === `auto` ? h.value : g.value), v = Ce(`updateHTMLAttrs`, (e, t, n) => {
        let r = typeof e == `string` ? a ? .document.querySelector(e) : U(e);
        if (!r) return;
        let i = new Set,
            o = new Set,
            s = null;
        if (t === `class`) {
            let e = n.split(/\s/g);
            Object.values(p).flatMap(e => (e || ``).split(/\s/g)).filter(Boolean).forEach(t => {
                e.includes(t) ? i.add(t) : o.add(t)
            })
        } else s = {
            key: t,
            value: n
        };
        if (i.size === 0 && o.size === 0 && s === null) return;
        let c;
        f && (c = a.document.createElement(`style`), c.appendChild(document.createTextNode(ke)), a.document.head.appendChild(c));
        for (let e of i) r.classList.add(e);
        for (let e of o) r.classList.remove(e);
        s && r.setAttribute(s.key, s.value), f && (a.getComputedStyle(c).opacity, document.head.removeChild(c))
    });

    function y(e) {
        v(t, r, p[e] ? ? e)
    }

    function b(t) {
        e.onChanged ? e.onChanged(t, y) : y(t)
    }
    n(_, b, {
        flush: `post`,
        immediate: !0
    }), L(() => b(_.value));
    let S = l({
        get() {
            return d ? g.value : _.value
        },
        set(e) {
            g.value = e
        }
    });
    return Object.assign(S, {
        store: g,
        system: h,
        state: _
    })
}

function je(e) {
    let t = _(),
        n = z(() => null, () => e ? U(e) : t.proxy.$el);
    return o(n.trigger), c(n.trigger), n
}

function Me(e = {}) {
    let {
        valueDark: t = `dark`,
        valueLight: n = ``
    } = e, r = Ae({ ...e,
        onChanged: (t, n) => {
            var r;
            e.onChanged ? (r = e.onChanged) == null || r.call(e, t === `dark`, n, t) : n(t)
        },
        modes: {
            dark: t,
            light: n
        }
    }), i = l(() => r.system.value);
    return l({
        get() {
            return r.value === `dark`
        },
        set(e) {
            let t = e ? `dark` : `light`;
            i.value === t ? r.value = `auto` : r.value = t
        }
    })
}

function Ne(e, t = {}) {
    let n = p(!1),
        r = p(null),
        i = 0,
        a = !0;
    if (M) {
        let o = typeof t == `function` ? {
                onDrop: t
            } : t,
            s = o.multiple ? ? !0,
            c = o.preventDefaultForUnhandled ? ? !1,
            l = e => {
                let t = Array.from(e.dataTransfer ? .files ? ? []);
                return t.length === 0 ? null : s ? t : [t[0]]
            },
            u = e => {
                let t = f(o.dataTypes);
                return typeof t == `function` ? t(e) : !t ? .length || e.length !== 0 && e.every(e => t.some(t => e.includes(t)))
            },
            d = e => {
                if (o.checkValidity) return o.checkValidity(e);
                let t = u(Array.from(e ? ? []).map(e => e.type)),
                    n = s || e.length <= 1;
                return t && n
            },
            p = () => /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent) && !(`chrome` in window),
            m = (e, t) => {
                let s = e.dataTransfer ? .items;
                if (a = (s && d(s)) ? ? !1, c && e.preventDefault(), !p() && !a) {
                    e.dataTransfer && (e.dataTransfer.dropEffect = `none`);
                    return
                }
                e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = `copy`);
                let u = l(e);
                switch (t) {
                    case `enter`:
                        var f;
                        i += 1, n.value = !0, (f = o.onEnter) == null || f.call(o, null, e);
                        break;
                    case `over`:
                        var m;
                        (m = o.onOver) == null || m.call(o, null, e);
                        break;
                    case `leave`:
                        var h;
                        --i, i === 0 && (n.value = !1), (h = o.onLeave) == null || h.call(o, null, e);
                        break;
                    case `drop`:
                        if (i = 0, n.value = !1, a) {
                            var g;
                            r.value = u, (g = o.onDrop) == null || g.call(o, u, e)
                        }
                }
            };
        W(e, `dragenter`, e => m(e, `enter`)), W(e, `dragover`, e => m(e, `over`)), W(e, `dragleave`, e => m(e, `leave`)), W(e, `drop`, e => m(e, `drop`))
    }
    return {
        files: r,
        isOverDropZone: n
    }
}

function Y(e, t, r = {}) {
    let {
        window: i = V,
        ...a
    } = r, o, s = G(() => i && `ResizeObserver` in i), c = () => {
        o && = (o.disconnect(), void 0)
    }, u = n(l(() => {
        let t = m(e);
        return Array.isArray(t) ? t.map(e => U(e)) : [U(t)]
    }), e => {
        if (c(), s.value && i) {
            o = new ResizeObserver(t);
            for (let t of e) t && o.observe(t, a)
        }
    }, {
        immediate: !0,
        flush: `post`
    }), d = () => {
        c(), u()
    };
    return y(d), {
        isSupported: s,
        stop: d
    }
}

function Pe(e, t = {}) {
    let {
        reset: r = !0,
        windowResize: i = !0,
        windowScroll: a = !0,
        immediate: o = !0,
        updateTiming: s = `sync`
    } = t, c = p(0), l = p(0), u = p(0), d = p(0), f = p(0), m = p(0), h = p(0), g = p(0);

    function _() {
        let t = U(e);
        if (!t) {
            r && (c.value = 0, l.value = 0, u.value = 0, d.value = 0, f.value = 0, m.value = 0, h.value = 0, g.value = 0);
            return
        }
        let n = t.getBoundingClientRect();
        c.value = n.height, l.value = n.bottom, u.value = n.left, d.value = n.right, f.value = n.top, m.value = n.width, h.value = n.x, g.value = n.y
    }

    function v() {
        s === `sync` ? _() : s === `next-frame` && requestAnimationFrame(() => _())
    }
    return Y(e, v), n(() => U(e), e => !e && v()), K(e, v, {
        attributeFilter: [`style`, `class`]
    }), a && W(`scroll`, v, {
        capture: !0,
        passive: !0
    }), i && W(`resize`, v, {
        passive: !0
    }), L(() => {
        o && v()
    }), {
        height: c,
        bottom: l,
        left: u,
        right: d,
        top: f,
        width: m,
        x: h,
        y: g,
        update: v
    }
}

function Fe(e, t, r = {}) {
    let {
        root: i,
        rootMargin: a,
        threshold: o = 0,
        window: s = V,
        immediate: c = !0
    } = r, u = G(() => s && `IntersectionObserver` in s), d = l(() => S(m(e)).map(U).filter(re)), f = O, h = p(c), g = u.value ? n(() => [d.value, U(i), m(a), h.value], ([e, n, r]) => {
        if (f(), !h.value || !e.length) return;
        let i = new IntersectionObserver(t, {
            root: U(n),
            rootMargin: r,
            threshold: o
        });
        e.forEach(e => e && i.observe(e)), f = () => {
            i.disconnect(), f = O
        }
    }, {
        immediate: c,
        flush: `post`
    }) : O, _ = () => {
        f(), g(), h.value = !1
    };
    return y(_), {
        isSupported: u,
        isActive: h,
        pause() {
            f(), h.value = !1
        },
        resume() {
            h.value = !0
        },
        stop: _
    }
}

function Ie(e, t = {}) {
    let {
        window: n = V,
        scrollTarget: r,
        threshold: i = 0,
        rootMargin: a,
        once: o = !1,
        initialValue: s = !1
    } = t, c = p(s), l = Fe(e, e => {
        let t = c.value,
            n = 0;
        for (let r of e) r.time >= n && (n = r.time, t = r.isIntersecting);
        c.value = t, o && b(c, () => {
            l.stop()
        })
    }, {
        root: r,
        window: n,
        threshold: i,
        rootMargin: a
    });
    return t.controls ? { ...l,
        isVisible: c
    } : c
}
var X = new Map;

function Le(e) {
    let n = t();

    function r(t) {
        var r;
        let i = X.get(e) || new Set;
        i.add(t), X.set(e, i);
        let o = () => a(t);
        return n == null || (r = n.cleanups) == null || r.push(o), o
    }

    function i(e) {
        function t(...n) {
            a(t), e(...n)
        }
        return r(t)
    }

    function a(t) {
        let n = X.get(e);
        n && (n.delete(t), n.size || o())
    }

    function o() {
        X.delete(e)
    }

    function s(t, n) {
        var r;
        (r = X.get(e)) == null || r.forEach(e => e(t, n))
    }
    return {
        on: r,
        once: i,
        off: a,
        emit: s,
        reset: o
    }
}
var Re = {
    json: `application/json`,
    text: `text/plain`
};

function Z(e) {
    return e && ee(e, `immediate`, `refetch`, `initialData`, `timeout`, `beforeFetch`, `afterFetch`, `onFetchError`, `fetch`, `updateDataOnError`)
}
var ze = /^(?:[a-z][a-z\d+\-.]*:)?\/\//i;

function Be(e) {
    return ze.test(e)
}

function Q(e) {
    return typeof Headers < `u` && e instanceof Headers ? Object.fromEntries(e.entries()) : e
}

function $(e, ...t) {
    return e === `overwrite` ? async e => {
        let n;
        for (let e = t.length - 1; e >= 0; e--)
            if (t[e] != null) {
                n = t[e];
                break
            }
        return n ? { ...e,
            ...await n(e)
        } : e
    } : async e => {
        for (let n of t) n && (e = { ...e,
            ...await n(e)
        });
        return e
    }
}

function Ve(e = {}) {
    let t = e.combination || `chain`,
        n = e.options || {},
        r = e.fetchOptions || {};

    function i(i, ...a) {
        let o = l(() => {
                let t = m(e.baseUrl),
                    n = m(i);
                return t && !Be(n) ? Ue(t, n) : n
            }),
            s = n,
            c = r;
        return a.length > 0 && (Z(a[0]) ? s = { ...s,
            ...a[0],
            beforeFetch: $(t, n.beforeFetch, a[0].beforeFetch),
            afterFetch: $(t, n.afterFetch, a[0].afterFetch),
            onFetchError: $(t, n.onFetchError, a[0].onFetchError)
        } : c = { ...c,
            ...a[0],
            headers: { ...Q(c.headers) || {},
                ...Q(a[0].headers) || {}
            }
        }), a.length > 1 && Z(a[1]) && (s = { ...s,
            ...a[1],
            beforeFetch: $(t, n.beforeFetch, a[1].beforeFetch),
            afterFetch: $(t, n.afterFetch, a[1].afterFetch),
            onFetchError: $(t, n.onFetchError, a[1].onFetchError)
        }), He(o, c, s)
    }
    return i
}

function He(e, ...t) {
    let r = typeof AbortController == `function`,
        a = {},
        o = {
            immediate: !0,
            refetch: !1,
            timeout: 0,
            updateDataOnError: !1
        },
        s = {
            method: `GET`,
            type: `text`,
            payload: void 0
        };
    t.length > 0 && (Z(t[0]) ? o = { ...o,
        ...t[0]
    } : a = t[0]), t.length > 1 && Z(t[1]) && (o = { ...o,
        ...t[1]
    });
    let {
        fetch: c = V ? .fetch ? ? globalThis ? .fetch,
        initialData: u,
        timeout: d
    } = o, f = F(), g = F(), _ = F(), v = p(!1), y = p(!1), b = p(!1), S = p(null), C = p(null), E = p(null), D = p(u || null), O = l(() => r && y.value), k, A, j = e => {
        r && (k ? .abort(e), k = new AbortController, k.signal.onabort = () => b.value = !0, a = { ...a,
            signal: k.signal
        })
    }, M = e => {
        y.value = e, v.value = !e
    };
    d && (A = w(j, d, {
        immediate: !1
    }));
    let N = 0,
        P = async (t = !1) => {
            j(), M(!0), E.value = null, S.value = null, b.value = !1, N += 1;
            let n = N,
                r = {
                    method: s.method,
                    headers: {}
                },
                i = m(s.payload);
            if (i) {
                let e = Q(r.headers),
                    t = Object.getPrototypeOf(i);
                !s.payloadType && i && (t === Object.prototype || Array.isArray(t)) && !(i instanceof FormData) && (s.payloadType = `json`), s.payloadType && (e[`Content-Type`] = Re[s.payloadType] ? ? s.payloadType), r.body = s.payloadType === `json` ? JSON.stringify(i) : i
            }
            let l = !1,
                d = {
                    url: m(e),
                    options: { ...r,
                        ...a
                    },
                    cancel: () => {
                        l = !0
                    }
                };
            if (o.beforeFetch && Object.assign(d, await o.beforeFetch(d)), l || !c) return M(!1), Promise.resolve(null);
            let p = null;
            return A && A.start(), c(d.url, { ...r,
                ...d.options,
                headers: { ...Q(r.headers),
                    ...Q(d.options ? .headers)
                }
            }).then(async e => {
                if (C.value = e, S.value = e.status, p = await e.clone()[s.type](), !e.ok) throw D.value = u || null, Error(e.statusText);
                return o.afterFetch && ({
                    data: p
                } = await o.afterFetch({
                    data: p,
                    response: e,
                    context: d,
                    execute: P
                })), D.value = p, f.trigger(e), e
            }).catch(async e => {
                let n = e.message || e.name;
                if (o.onFetchError && ({
                        error: n,
                        data: p
                    } = await o.onFetchError({
                        data: p,
                        error: e,
                        response: C.value,
                        context: d,
                        execute: P
                    })), E.value = n, o.updateDataOnError && (D.value = p), g.trigger(e), t) throw e;
                return null
            }).finally(() => {
                n === N && M(!1), A && A.stop(), _.trigger(null)
            })
        },
        I = x(o.refetch);
    n([I, x(e)], ([e]) => e && P(), {
        deep: !0
    });
    let L = {
        isFinished: h(v),
        isFetching: h(y),
        statusCode: S,
        response: C,
        error: E,
        data: D,
        canAbort: O,
        aborted: b,
        abort: j,
        execute: P,
        onFetchResponse: f.on,
        onFetchError: g.on,
        onFetchFinally: _.on,
        get: R(`GET`),
        put: R(`PUT`),
        post: R(`POST`),
        delete: R(`DELETE`),
        patch: R(`PATCH`),
        head: R(`HEAD`),
        options: R(`OPTIONS`),
        json: B(`json`),
        text: B(`text`),
        blob: B(`blob`),
        arrayBuffer: B(`arrayBuffer`),
        formData: B(`formData`)
    };

    function R(e) {
        return (t, r) => {
            if (!y.value) return s.method = e, s.payload = t, s.payloadType = r, i(s.payload) && n([I, x(s.payload)], ([e]) => e && P(), {
                deep: !0
            }), { ...L,
                then(e, t) {
                    return z().then(e, t)
                }
            }
        }
    }

    function z() {
        return new Promise((e, t) => {
            T(v).toBe(!0).then(() => e(L)).catch(t)
        })
    }

    function B(e) {
        return () => {
            if (!y.value) return s.type = e, { ...L,
                then(e, t) {
                    return z().then(e, t)
                }
            }
        }
    }
    return o.immediate && Promise.resolve().then(() => P()), { ...L,
        then(e, t) {
            return z().then(e, t)
        }
    }
}

function Ue(e, t) {
    return !e.endsWith(`/`) && !t.startsWith(`/`) ? `${e}/${t}` : e.endsWith(`/`) && t.startsWith(`/`) ? `${e.slice(0,-1)}${t}` : `${e}${t}`
}
var We = {
    multiple: !0,
    accept: `*`,
    reset: !1,
    directory: !1
};

function Ge(e) {
    if (!e) return null;
    if (e instanceof FileList) return e;
    let t = new DataTransfer;
    for (let n of e) t.items.add(n);
    return t.files
}

function Ke(t = {}) {
    let {
        document: n = H
    } = t, r = e(Ge(t.initialFiles)), {
        on: i,
        trigger: a
    } = F(), {
        on: o,
        trigger: c
    } = F(), u = l(() => {
        let e = U(t.input) ? ? (n ? n.createElement(`input`) : void 0);
        return e && (e.type = `file`, e.onchange = e => {
            r.value = e.target.files, a(r.value)
        }, e.oncancel = () => {
            c()
        }), e
    }), d = () => {
        r.value = null, u.value && u.value.value && (u.value.value = ``, a(null))
    }, f = e => {
        let t = u.value;
        t && (t.multiple = m(e.multiple), t.accept = m(e.accept), t.webkitdirectory = m(e.directory), R(e, `capture`) && (t.capture = m(e.capture)))
    };
    return v(() => {
        f(t)
    }), {
        files: s(r),
        open: e => {
            let n = u.value;
            if (!n) return;
            let r = { ...We,
                ...t,
                ...e
            };
            f(r), m(r.reset) && d(), n.click()
        },
        reset: d,
        onCancel: o,
        onChange: i
    }
}
var qe = `focusin`,
    Je = `focusout`,
    Ye = `:focus-within`;

function Xe(e, t = {}) {
    let {
        window: n = V
    } = t, r = l(() => U(e)), i = p(!1), a = l(() => i.value), o = pe(t);
    if (!n || !o.value) return {
        focused: a
    };
    let s = {
        passive: !0
    };
    return W(r, qe, () => i.value = !0, s), W(r, Je, () => {
        var e, t;
        return i.value = ((e = r.value) == null || (t = e.matches) == null ? void 0 : t.call(e, Ye)) ? ? !1
    }, s), {
        focused: a
    }
}
var Ze = 1;

function Qe(e, t = {}) {
    let {
        throttle: n = 0,
        idle: r = 200,
        onStop: i = O,
        onScroll: a = O,
        offset: o = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        observe: s = {
            mutation: !1
        },
        eventListenerOptions: c = {
            capture: !1,
            passive: !0
        },
        behavior: d = `auto`,
        window: f = V,
        onError: h = e => {
            console.error(e)
        }
    } = t, g = typeof s == `boolean` ? {
        mutation: s
    } : s, _ = p(0), v = p(0), y = l({
        get() {
            return _.value
        },
        set(e) {
            x(e, void 0)
        }
    }), b = l({
        get() {
            return v.value
        },
        set(e) {
            x(void 0, e)
        }
    });

    function x(t, n) {
        var r, i;
        if (!f) return;
        let a = m(e);
        if (!a) return;
        (r = a instanceof Document ? f.document.body : a) == null || r.scrollTo({
            top: m(n) ? ? b.value,
            left: m(t) ? ? y.value,
            behavior: m(d)
        });
        let o = (a == null || (i = a.document) == null ? void 0 : i.documentElement) || a ? .documentElement || a;
        y != null && (_.value = o.scrollLeft), b != null && (v.value = o.scrollTop)
    }
    let S = p(!1),
        w = u({
            left: !0,
            right: !1,
            top: !0,
            bottom: !1
        }),
        T = u({
            left: !1,
            right: !1,
            top: !1,
            bottom: !1
        }),
        D = e => {
            S.value && (S.value = !1, T.left = !1, T.right = !1, T.top = !1, T.bottom = !1, i(e))
        },
        k = E(D, n + r),
        A = e => {
            var t;
            if (!f) return;
            let n = (e == null || (t = e.document) == null ? void 0 : t.documentElement) || e ? .documentElement || U(e),
                {
                    display: r,
                    flexDirection: i,
                    direction: a
                } = f.getComputedStyle(n),
                s = a === `rtl` ? -1 : 1,
                c = n.scrollLeft;
            T.left = c < _.value, T.right = c > _.value;
            let l = Math.abs(c * s) <= (o.left || 0),
                u = Math.abs(c * s) + n.clientWidth >= n.scrollWidth - (o.right || 0) - Ze;
            r === `flex` && i === `row-reverse` ? (w.left = u, w.right = l) : (w.left = l, w.right = u), _.value = c;
            let d = n.scrollTop;
            e === f.document && !d && (d = f.document.body.scrollTop), T.top = d < v.value, T.bottom = d > v.value;
            let p = Math.abs(d) <= (o.top || 0),
                m = Math.abs(d) + n.clientHeight >= n.scrollHeight - (o.bottom || 0) - Ze;
            r === `flex` && i === `column-reverse` ? (w.top = m, w.bottom = p) : (w.top = p, w.bottom = m), v.value = d
        },
        j = e => {
            f && (A(e.target.documentElement ? ? e.target), S.value = !0, k(e), a(e))
        };
    return W(e, `scroll`, n ? C(j, n, !0, !1) : j, c), L(() => {
        try {
            let t = m(e);
            if (!t) return;
            A(t)
        } catch (e) {
            h(e)
        }
    }), g ? .mutation && e != null && e !== f && e !== document && K(e, () => {
        let t = m(e);
        t && A(t)
    }, {
        attributes: !0,
        childList: !0,
        subtree: !0
    }), W(e, `scrollend`, D, c), {
        x: y,
        y: b,
        isScrolling: S,
        arrivedState: w,
        directions: T,
        measure() {
            let t = m(e);
            f && t && A(t)
        }
    }
}
var $e = {
    page: e => [e.pageX, e.pageY],
    client: e => [e.clientX, e.clientY],
    screen: e => [e.screenX, e.screenY],
    movement: e => e instanceof MouseEvent ? [e.movementX, e.movementY] : null
};

function et(e = {}) {
    let {
        type: t = `page`,
        touch: n = !0,
        resetOnTouchEnds: r = !1,
        initialValue: i = {
            x: 0,
            y: 0
        },
        window: a = V,
        target: o = a,
        scroll: s = !0,
        eventFilter: c
    } = e, l = null, u = 0, d = 0, f = p(i.x), m = p(i.y), h = p(null), g = typeof t == `function` ? t : $e[t], _ = e => {
        let t = g(e);
        l = e, t && ([f.value, m.value] = t, h.value = `mouse`), a && (u = a.scrollX, d = a.scrollY)
    }, v = e => {
        if (e.touches.length > 0) {
            let t = g(e.touches[0]);
            t && ([f.value, m.value] = t, h.value = `touch`)
        }
    }, y = () => {
        if (!l || !a) return;
        let e = g(l);
        l instanceof MouseEvent && e && (f.value = e[0] + a.scrollX - u, m.value = e[1] + a.scrollY - d)
    }, b = () => {
        f.value = i.x, m.value = i.y
    }, x = c ? e => c(() => _(e), {}) : e => _(e), S = c ? e => c(() => v(e), {}) : e => v(e), C = c ? () => c(() => y(), {}) : () => y();
    if (o) {
        let e = {
            passive: !0
        };
        W(o, [`mousemove`, `dragover`], x, e), n && t !== `movement` && (W(o, [`touchstart`, `touchmove`], S, e), r && W(o, `touchend`, b, e)), s && t === `page` && W(a, `scroll`, C, e)
    }
    return {
        x: f,
        y: m,
        sourceType: h
    }
}

function tt(e, t = {}) {
    let {
        windowResize: r = !0,
        windowScroll: i = !0,
        handleOutside: a = !0,
        window: o = V
    } = t, s = t.type || `page`, {
        x: c,
        y: l,
        sourceType: u
    } = et(t), d = p(e ? ? o ? .document.body), f = p(0), m = p(0), h = p(0), g = p(0), _ = p(0), v = p(0), y = p(!0);

    function b() {
        if (!o) return;
        let e = U(d);
        if (!(!e || !(e instanceof Element)))
            for (let t of e.getClientRects()) {
                let {
                    left: e,
                    top: n,
                    width: r,
                    height: i
                } = t;
                h.value = e + (s === `page` ? o.pageXOffset : 0), g.value = n + (s === `page` ? o.pageYOffset : 0), _.value = i, v.value = r;
                let u = c.value - h.value,
                    d = l.value - g.value;
                if (y.value = r === 0 || i === 0 || u < 0 || d < 0 || u > r || d > i, (a || !y.value) && (f.value = u, m.value = d), !y.value) break
            }
    }
    let x = [];

    function S() {
        x.forEach(e => e()), x.length = 0
    }
    if (L(() => {
            b()
        }), o) {
        let {
            stop: e
        } = Y(d, b), {
            stop: t
        } = K(d, b, {
            attributeFilter: [`style`, `class`]
        }), a = n([d, c, l], b);
        x.push(e, t, a), W(document, `mouseleave`, () => y.value = !0, {
            passive: !0
        }), i && x.push(W(`scroll`, b, {
            capture: !0,
            passive: !0
        })), r && x.push(W(`resize`, b, {
            passive: !0
        }))
    }
    return {
        x: c,
        y: l,
        sourceType: u,
        elementX: f,
        elementY: m,
        elementPositionX: h,
        elementPositionY: g,
        elementHeight: _,
        elementWidth: v,
        isOutside: y,
        stop: S
    }
}

function nt(e = je()) {
    let t = p(),
        r = () => {
            let n = U(e);
            n && (t.value = n.parentElement)
        };
    return L(r), n(() => m(e), r), t
}

function rt(e, t = O, n = {}) {
    let {
        immediate: r = !0,
        manual: i = !1,
        type: a = `text/javascript`,
        async: o = !0,
        crossOrigin: s,
        referrerPolicy: c,
        noModule: l,
        defer: u,
        document: d = H,
        attrs: f = {},
        nonce: h = void 0
    } = n, g = p(null), _ = null, v = n => new Promise((r, i) => {
        let p = e => (g.value = e, r(e), e);
        if (!d) {
            r(!1);
            return
        }
        let _ = !1,
            v = d.querySelector(`script[src="${m(e)}"]`);
        v ? v.hasAttribute(`data-loaded`) && p(v) : (v = d.createElement(`script`), v.type = a, v.async = o, v.src = m(e), u && (v.defer = u), s && (v.crossOrigin = s), l && (v.noModule = l), c && (v.referrerPolicy = c), h && (v.nonce = h), Object.entries(f).forEach(([e, t]) => v ? .setAttribute(e, t)), _ = !0);
        let y = {
            passive: !0
        };
        W(v, `error`, e => i(e), y), W(v, `abort`, e => i(e), y), W(v, `load`, () => {
            v.setAttribute(`data-loaded`, `true`), t(v), p(v)
        }, y), _ && (v = d.head.appendChild(v)), n || p(v)
    }), y = (e = !0) => (_ || = v(e), _), b = () => {
        if (!d) return;
        _ = null, g.value && = null;
        let t = d.querySelector(`script[src="${m(e)}"]`);
        t && d.head.removeChild(t)
    };
    return r && !i && L(y), i || I(b), {
        scriptTag: g,
        load: y,
        unload: b
    }
}
var it = Object.assign({}, {
    linear: ne
}, {
    easeInSine: [.12, 0, .39, 0],
    easeOutSine: [.61, 1, .88, 1],
    easeInOutSine: [.37, 0, .63, 1],
    easeInQuad: [.11, 0, .5, 0],
    easeOutQuad: [.5, 1, .89, 1],
    easeInOutQuad: [.45, 0, .55, 1],
    easeInCubic: [.32, 0, .67, 0],
    easeOutCubic: [.33, 1, .68, 1],
    easeInOutCubic: [.65, 0, .35, 1],
    easeInQuart: [.5, 0, .75, 0],
    easeOutQuart: [.25, 1, .5, 1],
    easeInOutQuart: [.76, 0, .24, 1],
    easeInQuint: [.64, 0, .78, 0],
    easeOutQuint: [.22, 1, .36, 1],
    easeInOutQuint: [.83, 0, .17, 1],
    easeInExpo: [.7, 0, .84, 0],
    easeOutExpo: [.16, 1, .3, 1],
    easeInOutExpo: [.87, 0, .13, 1],
    easeInCirc: [.55, 0, 1, .45],
    easeOutCirc: [0, .55, .45, 1],
    easeInOutCirc: [.85, 0, .15, 1],
    easeInBack: [.36, 0, .66, -.56],
    easeOutBack: [.34, 1.56, .64, 1],
    easeInOutBack: [.68, -.6, .32, 1.6]
});

function at([e, t, n, r]) {
    let i = (e, t) => 1 - 3 * t + 3 * e,
        a = (e, t) => 3 * t - 6 * e,
        o = e => 3 * e,
        s = (e, t, n) => ((i(t, n) * e + a(t, n)) * e + o(t)) * e,
        c = (e, t, n) => 3 * i(t, n) * e * e + 2 * a(t, n) * e + o(t),
        l = t => {
            let r = t;
            for (let i = 0; i < 4; ++i) {
                let i = c(r, e, n);
                if (i === 0) return r;
                let a = s(r, e, n) - t;
                r -= a / i
            }
            return r
        };
    return i => e === t && n === r ? i : s(l(i), t, r)
}

function ot(e, t, n) {
    return e + n * (t - e)
}

function st(e, t, n) {
    let r = m(e),
        i = m(t);
    if (typeof r == `number` && typeof i == `number`) return ot(r, i, n);
    if (Array.isArray(r) && Array.isArray(i)) return r.map((e, t) => ot(e, m(i[t]), n));
    throw TypeError(`Unknown transition type, specify an interpolation function.`)
}

function ct(e) {
    return typeof e == `function` ? e : m(e) ? ? ne
}

function lt(e, t, n, r = {}) {
    let {
        window: i = V
    } = r, a = m(t), o = m(n), s = m(r.duration) ? ? 1e3, c = Date.now(), l = Date.now() + s, u = typeof r.interpolation == `function` ? r.interpolation : st, d = r.easing === void 0 ? ct(r.transition) : ct(r.easing), f = typeof d == `function` ? d : at(d);
    return new Promise(t => {
        e.value = a;
        let n = () => {
            if (r.abort ? .call(r)) {
                t();
                return
            }
            let d = Date.now();
            e.value = u(a, o, f((d - c) / s)), d < l ? i ? .requestAnimationFrame(n) : (e.value = o, t())
        };
        n()
    })
}

function ut(e, t = {}) {
    let r = 0,
        i = () => {
            let n = m(e);
            return t.interpolation === void 0 && Array.isArray(n) ? n.map(m) : n
        },
        a = p(i());
    return n(i, async e => {
        var n, i;
        if (m(t.disabled)) return;
        let o = ++r;
        t.delay && await k(m(t.delay)), o === r && ((n = t.onStarted) == null || n.call(t), await lt(a, a.value, e, { ...t,
            abort: () => o !== r || t.abort ? .call(t)
        }), (i = t.onFinished) == null || i.call(t))
    }, {
        deep: !0
    }), n(() => m(t.disabled), e => {
        e && (r++, a.value = i())
    }), y(() => {
        r++
    }), l(() => m(t.disabled) ? i() : a.value)
}

function dt(t, r, i, o = {}) {
    var s, c;
    let {
        clone: u = !1,
        passive: d = !1,
        eventName: f,
        deep: p = !1,
        defaultValue: m,
        shouldEmit: h
    } = o, g = _(), v = i || g ? .emit || (g == null || (s = g.$emit) == null ? void 0 : s.bind(g)) || (g == null || (c = g.proxy) == null || (c = c.$emit) == null ? void 0 : c.bind(g ? .proxy)), y = f;
    r || = `modelValue`, y || = `update:${r.toString()}`;
    let b = e => u ? typeof u == `function` ? u(e) : be(e) : e,
        x = () => B(t[r]) ? b(t[r]) : m,
        S = e => {
            h ? h(e) && v(y, e) : v(y, e)
        };
    if (d) {
        let i = e(x()),
            o = !1;
        return n(() => t[r], e => {
            o || (o = !0, i.value = b(e), a(() => o = !1))
        }), n(i, e => {
            !o && (e !== t[r] || p) && S(e)
        }, {
            deep: p
        }), i
    }
    return l({
        get() {
            return x()
        },
        set(e) {
            S(e)
        }
    })
}

function ft(e = {}) {
    let {
        window: t = V,
        ...n
    } = e;
    return Qe(t, n)
}

function pt(e = {}) {
    let {
        window: t = V,
        initialWidth: r = 1 / 0,
        initialHeight: i = 1 / 0,
        listenOrientation: a = !0,
        includeScrollbar: o = !0,
        type: s = `inner`
    } = e, c = p(r), l = p(i), u = () => {
        if (t)
            if (s === `outer`) c.value = t.outerWidth, l.value = t.outerHeight;
            else if (s === `visual` && t.visualViewport) {
            let {
                width: e,
                height: n,
                scale: r
            } = t.visualViewport;
            c.value = Math.round(e * r), l.value = Math.round(n * r)
        } else o ? (c.value = t.innerWidth, l.value = t.innerHeight) : (c.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight)
    };
    u(), L(u);
    let d = {
        passive: !0
    };
    return W(`resize`, u, d), t && s === `visual` && t.visualViewport && W(t.visualViewport, `resize`, u, d), a && n(_e(`(orientation: portrait)`), () => u()), {
        width: c,
        height: l
    }
}
export {
    rt as C, pt as D, ft as E, Y as S, dt as T, Xe as _, V as a, nt as b, ye as c, Ne as d, Pe as f, Ke as g, W as h, H as i, Ae as l, Le as m, Ve as n, fe as o, Ie as p, oe as r, U as s, it as t, Me as u, le as v, ut as w, me as x, tt as y
};