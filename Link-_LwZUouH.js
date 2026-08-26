import {
    $ as e,
    $n as t,
    Cn as n,
    Ft as r,
    Gn as i,
    It as a,
    On as o,
    Pt as s,
    Ut as c,
    Yt as l,
    Z as u,
    Zt as d,
    an as f,
    ar as p,
    bt as m,
    c as h,
    ct as g,
    et as _,
    fr as v,
    gn as y,
    gr as b,
    hr as ee,
    i as te,
    kt as x,
    lr as S,
    nn as C,
    nr as ne,
    pr as re,
    qt as ie,
    sr as ae,
    st as oe,
    tt as se,
    ur as ce,
    ut as w,
    vt as le,
    xt as T
} from "./dist-DAh4MArN.js";
import {
    C as ue,
    N as de,
    S as fe
} from "./dist-CVWdmVRe.js";
import {
    a as pe,
    b as me,
    g as he,
    i as ge,
    o as _e,
    t as ve,
    x as ye
} from "./tv-Dcq2oBvx.js";
var be = /^[a-z0-9]+(-[a-z0-9]+)*$/,
    xe = (e, t, n, r = ``) => {
        let i = e.split(`:`);
        if (e.slice(0, 1) === `@`) {
            if (i.length < 2 || i.length > 3) return null;
            r = i.shift().slice(1)
        }
        if (i.length > 3 || !i.length) return null;
        if (i.length > 1) {
            let e = i.pop(),
                n = i.pop(),
                a = {
                    provider: i.length > 0 ? i[0] : r,
                    prefix: n,
                    name: e
                };
            return t && !Se(a) ? null : a
        }
        let a = i[0],
            o = a.split(`-`);
        if (o.length > 1) {
            let e = {
                provider: r,
                prefix: o.shift(),
                name: o.join(`-`)
            };
            return t && !Se(e) ? null : e
        }
        if (n && r === ``) {
            let e = {
                provider: r,
                prefix: ``,
                name: a
            };
            return t && !Se(e, n) ? null : e
        }
        return null
    },
    Se = (e, t) => e ? !!((t && e.prefix === `` || e.prefix) && e.name) : !1;

function Ce(e, t) {
    let n = e.icons,
        r = e.aliases || Object.create(null),
        i = Object.create(null);

    function a(e) {
        if (n[e]) return i[e] = [];
        if (!(e in i)) {
            i[e] = null;
            let t = r[e] && r[e].parent,
                n = t && a(t);
            n && (i[e] = [t].concat(n))
        }
        return i[e]
    }
    return Object.keys(n).concat(Object.keys(r)).forEach(a), i
}
var we = Object.freeze({
        left: 0,
        top: 0,
        width: 16,
        height: 16
    }),
    Te = Object.freeze({
        rotate: 0,
        vFlip: !1,
        hFlip: !1
    }),
    Ee = Object.freeze({ ...we,
        ...Te
    }),
    De = Object.freeze({ ...Ee,
        body: ``,
        hidden: !1
    });

function Oe(e, t) {
    let n = {};
    !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
    let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (n.rotate = r), n
}

function ke(e, t) {
    let n = Oe(e, t);
    for (let r in De) r in Te ? r in e && !(r in n) && (n[r] = Te[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
    return n
}

function Ae(e, t, n) {
    let r = e.icons,
        i = e.aliases || Object.create(null),
        a = {};

    function o(e) {
        a = ke(r[e] || i[e], a)
    }
    return o(t), n.forEach(o), ke(e, a)
}

function je(e, t) {
    let n = [];
    if (typeof e != `object` || typeof e.icons != `object`) return n;
    e.not_found instanceof Array && e.not_found.forEach(e => {
        t(e, null), n.push(e)
    });
    let r = Ce(e);
    for (let i in r) {
        let a = r[i];
        a && (t(i, Ae(e, i, a)), n.push(i))
    }
    return n
}
var Me = {
    provider: ``,
    aliases: {},
    not_found: {},
    ...we
};

function Ne(e, t) {
    for (let n in t)
        if (n in e && typeof e[n] != typeof t[n]) return !1;
    return !0
}

function Pe(e) {
    if (typeof e != `object` || !e) return null;
    let t = e;
    if (typeof t.prefix != `string` || !e.icons || typeof e.icons != `object` || !Ne(e, Me)) return null;
    let n = t.icons;
    for (let e in n) {
        let t = n[e];
        if (!e || typeof t.body != `string` || !Ne(t, De)) return null
    }
    let r = t.aliases || Object.create(null);
    for (let e in r) {
        let t = r[e],
            i = t.parent;
        if (!e || typeof i != `string` || !n[i] && !r[i] || !Ne(t, De)) return null
    }
    return t
}
var Fe = Object.create(null);

function Ie(e, t) {
    return {
        provider: e,
        prefix: t,
        icons: Object.create(null),
        missing: new Set
    }
}

function E(e, t) {
    let n = Fe[e] || (Fe[e] = Object.create(null));
    return n[t] || (n[t] = Ie(e, t))
}

function Le(e, t) {
    return Pe(t) ? je(t, (t, n) => {
        n ? e.icons[t] = n : e.missing.add(t)
    }) : []
}

function Re(e, t, n) {
    try {
        if (typeof n.body == `string`) return e.icons[t] = { ...n
        }, !0
    } catch {}
    return !1
}
var D = !1;

function ze(e) {
    return typeof e == `boolean` && (D = e), D
}

function Be(e) {
    let t = typeof e == `string` ? xe(e, !0, D) : e;
    if (t) {
        let e = E(t.provider, t.prefix),
            n = t.name;
        return e.icons[n] || (e.missing.has(n) ? null : void 0)
    }
}

function Ve(e, t) {
    let n = xe(e, !0, D);
    if (!n) return !1;
    let r = E(n.provider, n.prefix);
    return t ? Re(r, n.name, t) : (r.missing.add(n.name), !0)
}

function He(e, t) {
    if (typeof e != `object`) return !1;
    if (typeof t != `string` && (t = e.provider || ``), D && !t && !e.prefix) {
        let t = !1;
        return Pe(e) && (e.prefix = ``, je(e, (e, n) => {
            Ve(e, n) && (t = !0)
        })), t
    }
    let n = e.prefix;
    return Se({
        prefix: n,
        name: `a`
    }) ? !!Le(E(t, n), e) : !1
}
var Ue = Object.freeze({
        width: null,
        height: null
    }),
    We = Object.freeze({ ...Ue,
        ...Te
    }),
    Ge = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
    Ke = /^-?[0-9.]*[0-9]+[0-9.]*$/g;

function qe(e, t, n) {
    if (t === 1) return e;
    if (n || = 100, typeof e == `number`) return Math.ceil(e * t * n) / n;
    if (typeof e != `string`) return e;
    let r = e.split(Ge);
    if (r === null || !r.length) return e;
    let i = [],
        a = r.shift(),
        o = Ke.test(a);
    for (;;) {
        if (o) {
            let e = parseFloat(a);
            isNaN(e) ? i.push(a) : i.push(Math.ceil(e * t * n) / n)
        } else i.push(a);
        if (a = r.shift(), a === void 0) return i.join(``);
        o = !o
    }
}

function Je(e, t = `defs`) {
    let n = ``,
        r = e.indexOf(`<` + t);
    for (; r >= 0;) {
        let i = e.indexOf(`>`, r),
            a = e.indexOf(`</` + t);
        if (i === -1 || a === -1) break;
        let o = e.indexOf(`>`, a);
        if (o === -1) break;
        n += e.slice(i + 1, a).trim(), e = e.slice(0, r).trim() + e.slice(o + 1)
    }
    return {
        defs: n,
        content: e
    }
}

function Ye(e, t) {
    return e ? `<defs>` + e + `</defs>` + t : t
}

function Xe(e, t, n) {
    let r = Je(e);
    return Ye(r.defs, t + r.content + n)
}
var Ze = e => e === `unset` || e === `undefined` || e === `none`;

function Qe(e, t) {
    let n = { ...Ee,
            ...e
        },
        r = { ...We,
            ...t
        },
        i = {
            left: n.left,
            top: n.top,
            width: n.width,
            height: n.height
        },
        a = n.body;
    [n, r].forEach(e => {
        let t = [],
            n = e.hFlip,
            r = e.vFlip,
            o = e.rotate;
        n ? r ? o += 2 : (t.push(`translate(` + (i.width + i.left).toString() + ` ` + (0 - i.top).toString() + `)`), t.push(`scale(-1 1)`), i.top = i.left = 0) : r && (t.push(`translate(` + (0 - i.left).toString() + ` ` + (i.height + i.top).toString() + `)`), t.push(`scale(1 -1)`), i.top = i.left = 0);
        let s;
        switch (o < 0 && (o -= Math.floor(o / 4) * 4), o %= 4, o) {
            case 1:
                s = i.height / 2 + i.top, t.unshift(`rotate(90 ` + s.toString() + ` ` + s.toString() + `)`);
                break;
            case 2:
                t.unshift(`rotate(180 ` + (i.width / 2 + i.left).toString() + ` ` + (i.height / 2 + i.top).toString() + `)`);
                break;
            case 3:
                s = i.width / 2 + i.left, t.unshift(`rotate(-90 ` + s.toString() + ` ` + s.toString() + `)`)
        }
        o % 2 == 1 && (i.left !== i.top && (s = i.left, i.left = i.top, i.top = s), i.width !== i.height && (s = i.width, i.width = i.height, i.height = s)), t.length && (a = Xe(a, `<g transform="` + t.join(` `) + `">`, `</g>`))
    });
    let o = r.width,
        s = r.height,
        c = i.width,
        l = i.height,
        u, d;
    o === null ? (d = s === null ? `1em` : s === `auto` ? l : s, u = qe(d, c / l)) : (u = o === `auto` ? c : o, d = s === null ? qe(u, l / c) : s === `auto` ? l : s);
    let f = {},
        p = (e, t) => {
            Ze(t) || (f[e] = t.toString())
        };
    p(`width`, u), p(`height`, d);
    let m = [i.left, i.top, c, l];
    return f.viewBox = m.join(` `), {
        attributes: f,
        viewBox: m,
        body: a
    }
}
var $e = /\sid="(\S+)"/g,
    et = new Map;

function tt(e) {
    e = e.replace(/[0-9]+$/, ``) || `a`;
    let t = et.get(e) || 0;
    return et.set(e, t + 1), t ? `${e}${t}` : e
}

function nt(e) {
    let t = [],
        n;
    for (; n = $e.exec(e);) t.push(n[1]);
    if (!t.length) return e;
    let r = `suffix` + (Math.random() * 16777216 | Date.now()).toString(16);
    return t.forEach(t => {
        let n = tt(t),
            i = t.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
        e = e.replace(RegExp(`([#;"])(` + i + `)([")]|\\.[a-z])`, `g`), `$1` + n + r + `$3`)
    }), e = e.replace(new RegExp(r, `g`), ``), e
}
var rt = Object.create(null);

function it(e, t) {
    rt[e] = t
}

function at(e) {
    return rt[e] || rt[``]
}

function ot(e) {
    let t;
    if (typeof e.resources == `string`) t = [e.resources];
    else if (t = e.resources, !(t instanceof Array) || !t.length) return null;
    return {
        resources: t,
        path: e.path || `/`,
        maxURL: e.maxURL || 500,
        rotate: e.rotate || 750,
        timeout: e.timeout || 5e3,
        random: e.random === !0,
        index: e.index || 0,
        dataAfterTimeout: e.dataAfterTimeout !== !1
    }
}
for (var st = Object.create(null), ct = [`https://api.simplesvg.com`, `https://api.unisvg.com`], lt = []; ct.length > 0;) ct.length === 1 || Math.random() > .5 ? lt.push(ct.shift()) : lt.push(ct.pop());
st[``] = ot({
    resources: [`https://api.iconify.design`].concat(lt)
});

function ut(e, t) {
    let n = ot(t);
    return n !== null && (st[e] = n, !0)
}

function dt(e) {
    return st[e]
}
var ft = (() => {
    let e;
    try {
        if (e = fetch, typeof e == `function`) return e
    } catch {}
})();

function pt(e, t) {
    let n = dt(e);
    if (!n) return 0;
    let r;
    if (!n.maxURL) r = 0;
    else {
        let e = 0;
        n.resources.forEach(t => {
            e = Math.max(e, t.length)
        });
        let i = t + `.json?icons=`;
        r = n.maxURL - e - n.path.length - i.length
    }
    return r
}

function mt(e) {
    return e === 404
}
var ht = (e, t, n) => {
    let r = [],
        i = pt(e, t),
        a = `icons`,
        o = {
            type: a,
            provider: e,
            prefix: t,
            icons: []
        },
        s = 0;
    return n.forEach((n, c) => {
        s += n.length + 1, s >= i && c > 0 && (r.push(o), o = {
            type: a,
            provider: e,
            prefix: t,
            icons: []
        }, s = n.length), o.icons.push(n)
    }), r.push(o), r
};

function gt(e) {
    if (typeof e == `string`) {
        let t = dt(e);
        if (t) return t.path
    }
    return `/`
}
var _t = {
    prepare: ht,
    send: (e, t, n) => {
        if (!ft) {
            n(`abort`, 424);
            return
        }
        let r = gt(t.provider);
        switch (t.type) {
            case `icons`:
                {
                    let e = t.prefix,
                        n = t.icons.join(`,`),
                        i = new URLSearchParams({
                            icons: n
                        });r += e + `.json?` + i.toString();
                    break
                }
            case `custom`:
                {
                    let e = t.uri;r += e.slice(0, 1) === `/` ? e.slice(1) : e;
                    break
                }
            default:
                n(`abort`, 400);
                return
        }
        let i = 503;
        ft(e + r).then(e => {
            let t = e.status;
            if (t !== 200) {
                setTimeout(() => {
                    n(mt(t) ? `abort` : `next`, t)
                });
                return
            }
            return i = 501, e.json()
        }).then(e => {
            if (typeof e != `object` || !e) {
                setTimeout(() => {
                    e === 404 ? n(`abort`, e) : n(`next`, i)
                });
                return
            }
            setTimeout(() => {
                n(`success`, e)
            })
        }).catch(() => {
            n(`next`, i)
        })
    }
};

function vt(e, t) {
    e.forEach(e => {
        let n = e.loaderCallbacks;
        n && (e.loaderCallbacks = n.filter(e => e.id !== t))
    })
}

function yt(e) {
    e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
        e.pendingCallbacksFlag = !1;
        let t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
        if (!t.length) return;
        let n = !1,
            r = e.provider,
            i = e.prefix;
        t.forEach(t => {
            let a = t.icons,
                o = a.pending.length;
            a.pending = a.pending.filter(t => {
                if (t.prefix !== i) return !0;
                let o = t.name;
                if (e.icons[o]) a.loaded.push({
                    provider: r,
                    prefix: i,
                    name: o
                });
                else if (e.missing.has(o)) a.missing.push({
                    provider: r,
                    prefix: i,
                    name: o
                });
                else return n = !0, !0;
                return !1
            }), a.pending.length !== o && (n || vt([e], t.id), t.callback(a.loaded.slice(0), a.missing.slice(0), a.pending.slice(0), t.abort))
        })
    }))
}
var bt = 0;

function xt(e, t, n) {
    let r = bt++,
        i = vt.bind(null, n, r);
    if (!t.pending.length) return i;
    let a = {
        id: r,
        icons: t,
        callback: e,
        abort: i
    };
    return n.forEach(e => {
        (e.loaderCallbacks || = []).push(a)
    }), i
}

function St(e) {
    let t = {
            loaded: [],
            missing: [],
            pending: []
        },
        n = Object.create(null);
    e.sort((e, t) => e.provider === t.provider ? e.prefix === t.prefix ? e.name.localeCompare(t.name) : e.prefix.localeCompare(t.prefix) : e.provider.localeCompare(t.provider));
    let r = {
        provider: ``,
        prefix: ``,
        name: ``
    };
    return e.forEach(e => {
        if (r.name === e.name && r.prefix === e.prefix && r.provider === e.provider) return;
        r = e;
        let i = e.provider,
            a = e.prefix,
            o = e.name,
            s = n[i] || (n[i] = Object.create(null)),
            c = s[a] || (s[a] = E(i, a)),
            l;
        l = o in c.icons ? t.loaded : a === `` || c.missing.has(o) ? t.missing : t.pending;
        let u = {
            provider: i,
            prefix: a,
            name: o
        };
        l.push(u)
    }), t
}

function Ct(e, t = !0, n = !1) {
    let r = [];
    return e.forEach(e => {
        let i = typeof e == `string` ? xe(e, t, n) : e;
        i && r.push(i)
    }), r
}
var wt = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};

function Tt(e, t, n, r) {
    let i = e.resources.length,
        a = e.random ? Math.floor(Math.random() * i) : e.index,
        o;
    if (e.random) {
        let t = e.resources.slice(0);
        for (o = []; t.length > 1;) {
            let e = Math.floor(Math.random() * t.length);
            o.push(t[e]), t = t.slice(0, e).concat(t.slice(e + 1))
        }
        o = o.concat(t)
    } else o = e.resources.slice(a).concat(e.resources.slice(0, a));
    let s = Date.now(),
        c = `pending`,
        l = 0,
        u, d = null,
        f = [],
        p = [];
    typeof r == `function` && p.push(r);

    function m() {
        d && = (clearTimeout(d), null)
    }

    function h() {
        c === `pending` && (c = `aborted`), m(), f.forEach(e => {
            e.status === `pending` && (e.status = `aborted`)
        }), f = []
    }

    function g(e, t) {
        t && (p = []), typeof e == `function` && p.push(e)
    }

    function _() {
        return {
            startTime: s,
            payload: t,
            status: c,
            queriesSent: l,
            queriesPending: f.length,
            subscribe: g,
            abort: h
        }
    }

    function v() {
        c = `failed`, p.forEach(e => {
            e(void 0, u)
        })
    }

    function y() {
        f.forEach(e => {
            e.status === `pending` && (e.status = `aborted`)
        }), f = []
    }

    function b(t, n, r) {
        let i = n !== `success`;
        switch (f = f.filter(e => e !== t), c) {
            case `pending`:
                break;
            case `failed`:
                if (i || !e.dataAfterTimeout) return;
                break;
            default:
                return
        }
        if (n === `abort`) {
            u = r, v();
            return
        }
        if (i) {
            u = r, f.length || (o.length ? ee() : v());
            return
        }
        if (m(), y(), !e.random) {
            let n = e.resources.indexOf(t.resource);
            n !== -1 && n !== e.index && (e.index = n)
        }
        c = `completed`, p.forEach(e => {
            e(r)
        })
    }

    function ee() {
        if (c !== `pending`) return;
        m();
        let r = o.shift();
        if (r === void 0) {
            if (f.length) {
                d = setTimeout(() => {
                    m(), c === `pending` && (y(), v())
                }, e.timeout);
                return
            }
            v();
            return
        }
        let i = {
            status: `pending`,
            resource: r,
            callback: (e, t) => {
                b(i, e, t)
            }
        };
        f.push(i), l++, d = setTimeout(ee, e.rotate), n(r, t, i.callback)
    }
    return setTimeout(ee), _
}

function Et(e) {
    let t = { ...wt,
            ...e
        },
        n = [];

    function r() {
        n = n.filter(e => e().status === `pending`)
    }

    function i(e, i, a) {
        let o = Tt(t, e, i, (e, t) => {
            r(), a && a(e, t)
        });
        return n.push(o), o
    }

    function a(e) {
        return n.find(t => e(t)) || null
    }
    return {
        query: i,
        find: a,
        setIndex: e => {
            t.index = e
        },
        getIndex: () => t.index,
        cleanup: r
    }
}

function Dt() {}
var Ot = Object.create(null);

function kt(e) {
    if (!Ot[e]) {
        let t = dt(e);
        if (!t) return;
        Ot[e] = {
            config: t,
            redundancy: Et(t)
        }
    }
    return Ot[e]
}

function At(e, t, n) {
    let r, i;
    if (typeof e == `string`) {
        let t = at(e);
        if (!t) return n(void 0, 424), Dt;
        i = t.send;
        let a = kt(e);
        a && (r = a.redundancy)
    } else {
        let t = ot(e);
        if (t) {
            r = Et(t);
            let n = at(e.resources ? e.resources[0] : ``);
            n && (i = n.send)
        }
    }
    return !r || !i ? (n(void 0, 424), Dt) : r.query(t, i, n)().abort
}

function jt() {}

function Mt(e) {
    e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
        e.iconsLoaderFlag = !1, yt(e)
    }))
}

function Nt(e) {
    let t = [],
        n = [];
    return e.forEach(e => {
        (e.match(be) ? t : n).push(e)
    }), {
        valid: t,
        invalid: n
    }
}

function Pt(e, t, n) {
    function r() {
        let n = e.pendingIcons;
        t.forEach(t => {
            n && n.delete(t), e.icons[t] || e.missing.add(t)
        })
    }
    if (n && typeof n == `object`) try {
        if (!Le(e, n).length) {
            r();
            return
        }
    } catch (e) {
        console.error(e)
    }
    r(), Mt(e)
}

function Ft(e, t) {
    e instanceof Promise ? e.then(e => {
        t(e)
    }).catch(() => {
        t(null)
    }) : t(e)
}

function It(e, t) {
    e.iconsToLoad = e.iconsToLoad ? e.iconsToLoad.concat(t).sort() : t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
        e.iconsQueueFlag = !1;
        let {
            provider: t,
            prefix: n
        } = e, r = e.iconsToLoad;
        if (delete e.iconsToLoad, !r || !r.length) return;
        let i = e.loadIcon;
        if (e.loadIcons && (r.length > 1 || !i)) {
            Ft(e.loadIcons(r, n, t), t => {
                Pt(e, r, t)
            });
            return
        }
        if (i) {
            r.forEach(r => {
                Ft(i(r, n, t), t => {
                    Pt(e, [r], t ? {
                        prefix: n,
                        icons: {
                            [r]: t
                        }
                    } : null)
                })
            });
            return
        }
        let {
            valid: a,
            invalid: o
        } = Nt(r);
        if (o.length && Pt(e, o, null), !a.length) return;
        let s = n.match(be) ? at(t) : null;
        if (!s) {
            Pt(e, a, null);
            return
        }
        s.prepare(t, n, a).forEach(n => {
            At(t, n, t => {
                Pt(e, n.icons, t)
            })
        })
    }))
}
var Lt = (e, t) => {
    let n = St(Ct(e, !0, ze()));
    if (!n.pending.length) {
        let e = !0;
        return t && setTimeout(() => {
            e && t(n.loaded, n.missing, n.pending, jt)
        }), () => {
            e = !1
        }
    }
    let r = Object.create(null),
        i = [],
        a, o;
    return n.pending.forEach(e => {
        let {
            provider: t,
            prefix: n
        } = e;
        if (n === o && t === a) return;
        a = t, o = n, i.push(E(t, n));
        let s = r[t] || (r[t] = Object.create(null));
        s[n] || (s[n] = [])
    }), n.pending.forEach(e => {
        let {
            provider: t,
            prefix: n,
            name: i
        } = e, a = E(t, n), o = a.pendingIcons || = new Set;
        o.has(i) || (o.add(i), r[t][n].push(i))
    }), i.forEach(e => {
        let t = r[e.provider][e.prefix];
        t.length && It(e, t)
    }), t ? xt(t, n, i) : jt
};

function Rt(e, t) {
    let n = { ...e
    };
    for (let e in t) {
        let r = t[e],
            i = typeof r;
        e in Ue ? (r === null || r && (i === `string` || i === `number`)) && (n[e] = r) : i === typeof n[e] && (n[e] = e === `rotate` ? r % 4 : r)
    }
    return n
}
var zt = /[\s,]+/;

function Bt(e, t) {
    t.split(zt).forEach(t => {
        switch (t.trim()) {
            case `horizontal`:
                e.hFlip = !0;
                break;
            case `vertical`:
                e.vFlip = !0
        }
    })
}

function Vt(e, t = 0) {
    let n = e.replace(/^-?[0-9.]*/, ``);

    function r(e) {
        for (; e < 0;) e += 4;
        return e % 4
    }
    if (n === ``) {
        let t = parseInt(e);
        return isNaN(t) ? 0 : r(t)
    }
    if (n !== e) {
        let t = 0;
        switch (n) {
            case `%`:
                t = 25;
                break;
            case `deg`:
                t = 90
        }
        if (t) {
            let i = parseFloat(e.slice(0, e.length - n.length));
            return isNaN(i) ? 0 : (i /= t, i % 1 == 0 ? r(i) : 0)
        }
    }
    return t
}

function Ht(e, t) {
    let n = e.indexOf(`xlink:`) === -1 ? `` : ` xmlns:xlink="http://www.w3.org/1999/xlink"`;
    for (let e in t) n += ` ` + e + `="` + t[e] + `"`;
    return `<svg xmlns="http://www.w3.org/2000/svg"` + n + `>` + e + `</svg>`
}

function Ut(e) {
    return e.replace(/"/g, `'`).replace(/%/g, `%25`).replace(/#/g, `%23`).replace(/</g, `%3C`).replace(/>/g, `%3E`).replace(/\s+/g, ` `)
}

function Wt(e) {
    return `data:image/svg+xml,` + Ut(e)
}

function Gt(e) {
    return `url("` + Wt(e) + `")`
}
var Kt = { ...We,
        inline: !1
    },
    qt = {
        xmlns: `http://www.w3.org/2000/svg`,
        "xmlns:xlink": `http://www.w3.org/1999/xlink`,
        "aria-hidden": !0,
        role: `img`
    },
    Jt = {
        display: `inline-block`
    },
    Yt = {
        backgroundColor: `currentColor`
    },
    Xt = {
        backgroundColor: `transparent`
    },
    Zt = {
        Image: `var(--svg)`,
        Repeat: `no-repeat`,
        Size: `100% 100%`
    },
    Qt = {
        webkitMask: Yt,
        mask: Yt,
        background: Xt
    };
for (let e in Qt) {
    let t = Qt[e];
    for (let n in Zt) t[e + n] = Zt[n]
}
var $t = {};
[`horizontal`, `vertical`].forEach(e => {
    let t = e.slice(0, 1) + `Flip`;
    $t[e + `-flip`] = t, $t[e.slice(0, 1) + `-flip`] = t, $t[e + `Flip`] = t
});

function en(e) {
    return e + (e.match(/^[-0-9.]+$/) ? `px` : ``)
}
var tn = (e, t) => {
    let n = Rt(Kt, t),
        r = { ...qt
        },
        i = t.mode || `svg`,
        a = {},
        o = t.style,
        s = typeof o == `object` && !(o instanceof Array) ? o : {};
    for (let e in t) {
        let i = t[e];
        if (i !== void 0) switch (e) {
            case `icon`:
            case `style`:
            case `onLoad`:
            case `mode`:
            case `ssr`:
            case `customise`:
                break;
            case `inline`:
            case `hFlip`:
            case `vFlip`:
                n[e] = i === !0 || i === `true` || i === 1;
                break;
            case `flip`:
                typeof i == `string` && Bt(n, i);
                break;
            case `color`:
                a.color = i;
                break;
            case `rotate`:
                typeof i == `string` ? n[e] = Vt(i) : typeof i == `number` && (n[e] = i);
                break;
            case `ariaHidden`:
            case `aria-hidden`:
                i !== !0 && i !== `true` && delete r[`aria-hidden`];
                break;
            default:
                {
                    let t = $t[e];t ? (i === !0 || i === `true` || i === 1) && (n[t] = !0) : Kt[e] === void 0 && (r[e] = i)
                }
        }
    }
    let c = Qe(e, n),
        l = c.attributes;
    if (n.inline && (a.verticalAlign = `-0.125em`), i === `svg`) return r.style = { ...a,
        ...s
    }, Object.assign(r, l), r.innerHTML = nt(c.body), T(`svg`, r);
    let {
        body: u,
        width: d,
        height: f
    } = e, p = i === `mask` || i !== `bg` && u.indexOf(`currentColor`) !== -1, m = Ht(u, { ...l,
        width: d + ``,
        height: f + ``
    });
    return r.style = { ...a,
        "--svg": Gt(m),
        width: en(l.width),
        height: en(l.height),
        ...Jt,
        ...p ? Yt : Xt,
        ...s
    }, T(`span`, r)
};
if (ze(!0), it(``, _t), typeof document < `u` && typeof window < `u`) {
    let e = window;
    if (e.IconifyPreload !== void 0) {
        let t = e.IconifyPreload,
            n = `Invalid IconifyPreload syntax.`;
        typeof t == `object` && t && (t instanceof Array ? t : [t]).forEach(e => {
            try {
                (typeof e != `object` || !e || e instanceof Array || typeof e.icons != `object` || typeof e.prefix != `string` || !He(e)) && console.error(n)
            } catch {
                console.error(n)
            }
        })
    }
    if (e.IconifyProviders !== void 0) {
        let t = e.IconifyProviders;
        if (typeof t == `object` && t)
            for (let e in t) {
                let n = `IconifyProviders[` + e + `] is invalid.`;
                try {
                    let r = t[e];
                    if (typeof r != `object` || !r || r.resources === void 0) continue;
                    ut(e, r) || console.error(n)
                } catch {
                    console.error(n)
                }
            }
    }
}
var nn = { ...Ee,
        body: ``
    },
    rn = w((e, {
        emit: r
    }) => {
        let i = t(null);

        function o() {
            i.value && = (i.value.abort ? .(), null)
        }
        let s = t(!!e.ssr),
            l = t(``),
            u = ne(null);

        function d() {
            let t = e.icon;
            if (typeof t == `object` && t && typeof t.body == `string`) return l.value = ``, {
                data: t
            };
            let n;
            if (typeof t != `string` || (n = xe(t, !1, !0)) === null) return null;
            let s = Be(n);
            if (!s) {
                let e = i.value;
                return (!e || e.name !== t) && (s === null ? i.value = {
                    name: t
                } : i.value = {
                    name: t,
                    abort: Lt([n], f)
                }), null
            }
            o(), l.value !== t && (l.value = t, a(() => {
                r(`load`, t)
            }));
            let c = e.customise;
            if (c) {
                s = Object.assign({}, s);
                let e = c(s.body, n.name, n.prefix, n.provider);
                typeof e == `string` && (s.body = e)
            }
            let u = [`iconify`];
            return n.prefix !== `` && u.push(`iconify--` + n.prefix), n.provider !== `` && u.push(`iconify--` + n.provider), {
                data: s,
                classes: u
            }
        }

        function f() {
            let e = d();
            e ? e.data !== u.value ? .data && (u.value = e) : u.value = null
        }
        return s.value ? f() : c(() => {
            s.value = !0, f()
        }), n(() => e.icon, f), ie(o), () => {
            let t = u.value;
            if (!t) return tn(nn, e);
            let n = e;
            return t.classes && (n = { ...e,
                class: t.classes.join(` `)
            }), tn({ ...Ee,
                ...t.data
            }, n)
        }
    }, {
        props: [`icon`, `mode`, `ssr`, `width`, `height`, `style`, `color`, `inline`, `rotate`, `hFlip`, `horizontalFlip`, `vFlip`, `verticalFlip`, `flip`, `id`, `ariaHidden`, `customise`, `title`],
        emits: [`load`]
    });
String.fromCharCode;
var an = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    on = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    sn = /^([/\\]\s*){2,}[^/\\]/;

function cn(e, t = {}) {
    return typeof t == `boolean` && (t = {
        acceptRelative: t
    }), t.strict ? an.test(e) : on.test(e) || (t.acceptRelative ? sn.test(e) : !1)
}

function ln(e) {
    let t = le(),
        n = t ? .type.emits,
        r = {};
    return n ? .length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), n ? .forEach(t => {
        r[b(ce(t))] = (...n) => e(t, ...n)
    }), r
}

function un(e) {
    let t = le(),
        n = Object.keys(t ? .type.props ? ? {}).reduce((e, n) => {
            let r = (t ? .type.props[n]).default;
            return r !== void 0 && (e[n] = r), e
        }, {}),
        r = p(e);
    return u(() => {
        let e = {},
            i = t ? .vnode.props ? ? {};
        return Object.keys(i).forEach(t => {
            e[ce(t)] = i[t]
        }), Object.keys({ ...n,
            ...e
        }).reduce((e, t) => (r.value[t] !== void 0 && (e[t] = r.value[t]), e), {})
    })
}

function dn(e, t) {
    let n = t ? ln(t) : {};
    return u(() => {
        let t = i(e) ? e.value : e,
            r = { ...n
            };
        for (let e in t) {
            let n = t[e];
            n !== void 0 && (r[e] = n)
        }
        return r
    })
}

function fn(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function pn(e) {
    if (Array.isArray(e)) return e
}

function mn(e) {
    if (Array.isArray(e)) return fn(e)
}

function hn(e, t) {
    if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
}

function gn(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, En(r.key), r)
    }
}

function _n(e, t, n) {
    return t && gn(e.prototype, t), n && gn(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function vn(e, t) {
    var n = typeof Symbol < `u` && e[Symbol.iterator] || e[`@@iterator`];
    if (!n) {
        if (Array.isArray(e) || (n = On(e)) || t && e && typeof e.length == `number`) {
            n && (e = n);
            var r = 0,
                i = function() {};
            return {
                s: i,
                n: function() {
                    return r >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[r++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: i
            }
        }
        throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var a, o = !0,
        s = !1;
    return {
        s: function() {
            n = n.call(e)
        },
        n: function() {
            var e = n.next();
            return o = e.done, e
        },
        e: function(e) {
            s = !0, a = e
        },
        f: function() {
            try {
                o || n.return == null || n.return()
            } finally {
                if (s) throw a
            }
        }
    }
}

function O(e, t, n) {
    return (t = En(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function yn(e) {
    if (typeof Symbol < `u` && e[Symbol.iterator] != null || e[`@@iterator`] != null) return Array.from(e)
}

function bn(e, t) {
    var n = e == null ? null : typeof Symbol < `u` && e[Symbol.iterator] || e[`@@iterator`];
    if (n != null) {
        var r, i, a, o, s = [],
            c = !0,
            l = !1;
        try {
            if (a = (n = n.call(e)).next, t === 0) {
                if (Object(n) !== n) return;
                c = !1
            } else
                for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
        } catch (e) {
            l = !0, i = e
        } finally {
            try {
                if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return s
    }
}

function xn() {
    throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Sn() {
    throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Cn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? Cn(Object(n), !0).forEach(function(t) {
            O(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cn(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function wn(e, t) {
    return pn(e) || bn(e, t) || On(e, t) || xn()
}

function A(e) {
    return mn(e) || yn(e) || On(e) || Sn()
}

function Tn(e, t) {
    if (typeof e != `object` || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || `default`);
        if (typeof r != `object`) return r;
        throw TypeError(`@@toPrimitive must return a primitive value.`)
    }
    return (t === `string` ? String : Number)(e)
}

function En(e) {
    var t = Tn(e, `string`);
    return typeof t == `symbol` ? t : t + ``
}

function Dn(e) {
    "@babel/helpers - typeof";
    return Dn = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
    }, Dn(e)
}

function On(e, t) {
    if (e) {
        if (typeof e == `string`) return fn(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set` ? Array.from(e) : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fn(e, t) : void 0
    }
}
var kn = function() {},
    An = {},
    jn = {},
    Mn = null,
    Nn = {
        mark: kn,
        measure: kn
    };
try {
    typeof window < `u` && (An = window), typeof document < `u` && (jn = document), typeof MutationObserver < `u` && (Mn = MutationObserver), typeof performance < `u` && (Nn = performance)
} catch {}
var Pn = (An.navigator || {}).userAgent,
    Fn = Pn === void 0 ? `` : Pn,
    j = An,
    M = jn,
    In = Mn,
    Ln = Nn;
j.document;
var N = !!M.documentElement && !!M.head && typeof M.addEventListener == `function` && typeof M.createElement == `function`,
    Rn = ~Fn.indexOf(`MSIE`) || ~Fn.indexOf(`Trident/`),
    zn, Bn = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
    Vn = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
    Hn = {
        classic: {
            fa: `solid`,
            fas: `solid`,
            "fa-solid": `solid`,
            far: `regular`,
            "fa-regular": `regular`,
            fal: `light`,
            "fa-light": `light`,
            fat: `thin`,
            "fa-thin": `thin`,
            fab: `brands`,
            "fa-brands": `brands`
        },
        duotone: {
            fa: `solid`,
            fad: `solid`,
            "fa-solid": `solid`,
            "fa-duotone": `solid`,
            fadr: `regular`,
            "fa-regular": `regular`,
            fadl: `light`,
            "fa-light": `light`,
            fadt: `thin`,
            "fa-thin": `thin`
        },
        sharp: {
            fa: `solid`,
            fass: `solid`,
            "fa-solid": `solid`,
            fasr: `regular`,
            "fa-regular": `regular`,
            fasl: `light`,
            "fa-light": `light`,
            fast: `thin`,
            "fa-thin": `thin`
        },
        "sharp-duotone": {
            fa: `solid`,
            fasds: `solid`,
            "fa-solid": `solid`,
            fasdr: `regular`,
            "fa-regular": `regular`,
            fasdl: `light`,
            "fa-light": `light`,
            fasdt: `thin`,
            "fa-thin": `thin`
        },
        slab: {
            "fa-regular": `regular`,
            faslr: `regular`
        },
        "slab-press": {
            "fa-regular": `regular`,
            faslpr: `regular`
        },
        thumbprint: {
            "fa-light": `light`,
            fatl: `light`
        },
        whiteboard: {
            "fa-semibold": `semibold`,
            fawsb: `semibold`
        },
        notdog: {
            "fa-solid": `solid`,
            fans: `solid`
        },
        "notdog-duo": {
            "fa-solid": `solid`,
            fands: `solid`
        },
        etch: {
            "fa-solid": `solid`,
            faes: `solid`
        },
        graphite: {
            "fa-thin": `thin`,
            fagt: `thin`
        },
        jelly: {
            "fa-regular": `regular`,
            fajr: `regular`
        },
        "jelly-fill": {
            "fa-regular": `regular`,
            fajfr: `regular`
        },
        "jelly-duo": {
            "fa-regular": `regular`,
            fajdr: `regular`
        },
        chisel: {
            "fa-regular": `regular`,
            facr: `regular`
        },
        utility: {
            "fa-semibold": `semibold`,
            fausb: `semibold`
        },
        "utility-duo": {
            "fa-semibold": `semibold`,
            faudsb: `semibold`
        },
        "utility-fill": {
            "fa-semibold": `semibold`,
            faufsb: `semibold`
        }
    },
    Un = {
        GROUP: `duotone-group`,
        SWAP_OPACITY: `swap-opacity`,
        PRIMARY: `primary`,
        SECONDARY: `secondary`
    },
    Wn = [`fa-classic`, `fa-duotone`, `fa-sharp`, `fa-sharp-duotone`, `fa-thumbprint`, `fa-whiteboard`, `fa-notdog`, `fa-notdog-duo`, `fa-chisel`, `fa-etch`, `fa-graphite`, `fa-jelly`, `fa-jelly-fill`, `fa-jelly-duo`, `fa-slab`, `fa-slab-press`, `fa-utility`, `fa-utility-duo`, `fa-utility-fill`],
    P = `classic`,
    Gn = `duotone`,
    Kn = `sharp`,
    qn = `sharp-duotone`,
    Jn = `chisel`,
    Yn = `etch`,
    Xn = `graphite`,
    Zn = `jelly`,
    Qn = `jelly-duo`,
    $n = `jelly-fill`,
    er = `notdog`,
    tr = `notdog-duo`,
    nr = `slab`,
    rr = `slab-press`,
    ir = `thumbprint`,
    ar = `utility`,
    or = `utility-duo`,
    sr = `utility-fill`,
    cr = `whiteboard`,
    lr = `Classic`,
    ur = `Duotone`,
    dr = `Sharp`,
    fr = `Sharp Duotone`,
    pr = `Chisel`,
    mr = `Etch`,
    hr = `Graphite`,
    gr = `Jelly`,
    _r = `Jelly Duo`,
    vr = `Jelly Fill`,
    yr = `Notdog`,
    br = `Notdog Duo`,
    xr = `Slab`,
    Sr = `Slab Press`,
    Cr = `Thumbprint`,
    wr = `Utility`,
    Tr = `Utility Duo`,
    Er = `Utility Fill`,
    Dr = `Whiteboard`,
    Or = [P, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr];
zn = {}, O(O(O(O(O(O(O(O(O(O(zn, P, lr), Gn, ur), Kn, dr), qn, fr), Jn, pr), Yn, mr), Xn, hr), Zn, gr), Qn, _r), $n, vr), O(O(O(O(O(O(O(O(O(zn, er, yr), tr, br), nr, xr), rr, Sr), ir, Cr), ar, wr), or, Tr), sr, Er), cr, Dr);
var kr = {
        classic: {
            900: `fas`,
            400: `far`,
            normal: `far`,
            300: `fal`,
            100: `fat`
        },
        duotone: {
            900: `fad`,
            400: `fadr`,
            300: `fadl`,
            100: `fadt`
        },
        sharp: {
            900: `fass`,
            400: `fasr`,
            300: `fasl`,
            100: `fast`
        },
        "sharp-duotone": {
            900: `fasds`,
            400: `fasdr`,
            300: `fasdl`,
            100: `fasdt`
        },
        slab: {
            400: `faslr`
        },
        "slab-press": {
            400: `faslpr`
        },
        whiteboard: {
            600: `fawsb`
        },
        thumbprint: {
            300: `fatl`
        },
        notdog: {
            900: `fans`
        },
        "notdog-duo": {
            900: `fands`
        },
        etch: {
            900: `faes`
        },
        graphite: {
            100: `fagt`
        },
        chisel: {
            400: `facr`
        },
        jelly: {
            400: `fajr`
        },
        "jelly-fill": {
            400: `fajfr`
        },
        "jelly-duo": {
            400: `fajdr`
        },
        utility: {
            600: `fausb`
        },
        "utility-duo": {
            600: `faudsb`
        },
        "utility-fill": {
            600: `faufsb`
        }
    },
    Ar = {
        "Font Awesome 7 Free": {
            900: `fas`,
            400: `far`
        },
        "Font Awesome 7 Pro": {
            900: `fas`,
            400: `far`,
            normal: `far`,
            300: `fal`,
            100: `fat`
        },
        "Font Awesome 7 Brands": {
            400: `fab`,
            normal: `fab`
        },
        "Font Awesome 7 Duotone": {
            900: `fad`,
            400: `fadr`,
            normal: `fadr`,
            300: `fadl`,
            100: `fadt`
        },
        "Font Awesome 7 Sharp": {
            900: `fass`,
            400: `fasr`,
            normal: `fasr`,
            300: `fasl`,
            100: `fast`
        },
        "Font Awesome 7 Sharp Duotone": {
            900: `fasds`,
            400: `fasdr`,
            normal: `fasdr`,
            300: `fasdl`,
            100: `fasdt`
        },
        "Font Awesome 7 Jelly": {
            400: `fajr`,
            normal: `fajr`
        },
        "Font Awesome 7 Jelly Fill": {
            400: `fajfr`,
            normal: `fajfr`
        },
        "Font Awesome 7 Jelly Duo": {
            400: `fajdr`,
            normal: `fajdr`
        },
        "Font Awesome 7 Slab": {
            400: `faslr`,
            normal: `faslr`
        },
        "Font Awesome 7 Slab Press": {
            400: `faslpr`,
            normal: `faslpr`
        },
        "Font Awesome 7 Thumbprint": {
            300: `fatl`,
            normal: `fatl`
        },
        "Font Awesome 7 Notdog": {
            900: `fans`,
            normal: `fans`
        },
        "Font Awesome 7 Notdog Duo": {
            900: `fands`,
            normal: `fands`
        },
        "Font Awesome 7 Etch": {
            900: `faes`,
            normal: `faes`
        },
        "Font Awesome 7 Graphite": {
            100: `fagt`,
            normal: `fagt`
        },
        "Font Awesome 7 Chisel": {
            400: `facr`,
            normal: `facr`
        },
        "Font Awesome 7 Whiteboard": {
            600: `fawsb`,
            normal: `fawsb`
        },
        "Font Awesome 7 Utility": {
            600: `fausb`,
            normal: `fausb`
        },
        "Font Awesome 7 Utility Duo": {
            600: `faudsb`,
            normal: `faudsb`
        },
        "Font Awesome 7 Utility Fill": {
            600: `faufsb`,
            normal: `faufsb`
        }
    },
    jr = new Map([
        [`classic`, {
            defaultShortPrefixId: `fas`,
            defaultStyleId: `solid`,
            styleIds: [`solid`, `regular`, `light`, `thin`, `brands`],
            futureStyleIds: [],
            defaultFontWeight: 900
        }],
        [`duotone`, {
            defaultShortPrefixId: `fad`,
            defaultStyleId: `solid`,
            styleIds: [`solid`, `regular`, `light`, `thin`],
            futureStyleIds: [],
            defaultFontWeight: 900
        }],
        [`sharp`, {
            defaultShortPrefixId: `fass`,
            defaultStyleId: `solid`,
            styleIds: [`solid`, `regular`, `light`, `thin`],
            futureStyleIds: [],
            defaultFontWeight: 900
        }],
        [`sharp-duotone`, {
            defaultShortPrefixId: `fasds`,
            defaultStyleId: `solid`,
            styleIds: [`solid`, `regular`, `light`, `thin`],
            futureStyleIds: [],
            defaultFontWeight: 900
        }],
        [`chisel`, {
            defaultShortPrefixId: `facr`,
            defaultStyleId: `regular`,
            styleIds: [`regular`],
            futureStyleIds: [],
            defaultFontWeight: 400
        }],
        [`etch`, {
            defaultShortPrefixId: `faes`,
            defaultStyleId: `solid`,
            styleIds: [`solid`],
            futureStyleIds: [],
            defaultFontWeight: 900
        }],
        [`graphite`, {
            defaultShortPrefixId: `fagt`,
            defaultStyleId: `thin`,
            styleIds: [`thin`],
            futureStyleIds: [],
            defaultFontWeight: 100
        }],
        [`jelly`, {
            defaultShortPrefixId: `fajr`,
            defaultStyleId: `regular`,
            styleIds: [`regular`],
            futureStyleIds: [],
            defaultFontWeight: 400
        }],
        [`jelly-duo`, {
            defaultShortPrefixId: `fajdr`,
            defaultStyleId: `regular`,
            styleIds: [`regular`],
            futureStyleIds: [],
            defaultFontWeight: 400
        }],
        [`jelly-fill`, {
            defaultShortPrefixId: `fajfr`,
            defaultStyleId: `regular`,
            styleIds: [`regular`],
            futureStyleIds: [],
            defaultFontWeight: 400
        }],
        [`notdog`, {
            defaultShortPrefixId: `fans`,
            defaultStyleId: `solid`,
            styleIds: [`solid`],
            futureStyleIds: [],
            defaultFontWeight: 900
        }],
        [`notdog-duo`, {
            defaultShortPrefixId: `fands`,
            defaultStyleId: `solid`,
            styleIds: [`solid`],
            futureStyleIds: [],
            defaultFontWeight: 900
        }],
        [`slab`, {
            defaultShortPrefixId: `faslr`,
            defaultStyleId: `regular`,
            styleIds: [`regular`],
            futureStyleIds: [],
            defaultFontWeight: 400
        }],
        [`slab-press`, {
            defaultShortPrefixId: `faslpr`,
            defaultStyleId: `regular`,
            styleIds: [`regular`],
            futureStyleIds: [],
            defaultFontWeight: 400
        }],
        [`thumbprint`, {
            defaultShortPrefixId: `fatl`,
            defaultStyleId: `light`,
            styleIds: [`light`],
            futureStyleIds: [],
            defaultFontWeight: 300
        }],
        [`utility`, {
            defaultShortPrefixId: `fausb`,
            defaultStyleId: `semibold`,
            styleIds: [`semibold`],
            futureStyleIds: [],
            defaultFontWeight: 600
        }],
        [`utility-duo`, {
            defaultShortPrefixId: `faudsb`,
            defaultStyleId: `semibold`,
            styleIds: [`semibold`],
            futureStyleIds: [],
            defaultFontWeight: 600
        }],
        [`utility-fill`, {
            defaultShortPrefixId: `faufsb`,
            defaultStyleId: `semibold`,
            styleIds: [`semibold`],
            futureStyleIds: [],
            defaultFontWeight: 600
        }],
        [`whiteboard`, {
            defaultShortPrefixId: `fawsb`,
            defaultStyleId: `semibold`,
            styleIds: [`semibold`],
            futureStyleIds: [],
            defaultFontWeight: 600
        }]
    ]),
    Mr = {
        chisel: {
            regular: `facr`
        },
        classic: {
            brands: `fab`,
            light: `fal`,
            regular: `far`,
            solid: `fas`,
            thin: `fat`
        },
        duotone: {
            light: `fadl`,
            regular: `fadr`,
            solid: `fad`,
            thin: `fadt`
        },
        etch: {
            solid: `faes`
        },
        graphite: {
            thin: `fagt`
        },
        jelly: {
            regular: `fajr`
        },
        "jelly-duo": {
            regular: `fajdr`
        },
        "jelly-fill": {
            regular: `fajfr`
        },
        notdog: {
            solid: `fans`
        },
        "notdog-duo": {
            solid: `fands`
        },
        sharp: {
            light: `fasl`,
            regular: `fasr`,
            solid: `fass`,
            thin: `fast`
        },
        "sharp-duotone": {
            light: `fasdl`,
            regular: `fasdr`,
            solid: `fasds`,
            thin: `fasdt`
        },
        slab: {
            regular: `faslr`
        },
        "slab-press": {
            regular: `faslpr`
        },
        thumbprint: {
            light: `fatl`
        },
        utility: {
            semibold: `fausb`
        },
        "utility-duo": {
            semibold: `faudsb`
        },
        "utility-fill": {
            semibold: `faufsb`
        },
        whiteboard: {
            semibold: `fawsb`
        }
    },
    Nr = [`fak`, `fa-kit`, `fakd`, `fa-kit-duotone`],
    Pr = {
        kit: {
            fak: `kit`,
            "fa-kit": `kit`
        },
        "kit-duotone": {
            fakd: `kit-duotone`,
            "fa-kit-duotone": `kit-duotone`
        }
    },
    Fr = [`kit`];
O(O({}, `kit`, `Kit`), `kit-duotone`, `Kit Duotone`);
var Ir = {
        kit: {
            "fa-kit": `fak`
        },
        "kit-duotone": {
            "fa-kit-duotone": `fakd`
        }
    },
    Lr = {
        "Font Awesome Kit": {
            400: `fak`,
            normal: `fak`
        },
        "Font Awesome Kit Duotone": {
            400: `fakd`,
            normal: `fakd`
        }
    },
    Rr = {
        kit: {
            fak: `fa-kit`
        },
        "kit-duotone": {
            fakd: `fa-kit-duotone`
        }
    },
    zr = {
        kit: {
            kit: `fak`
        },
        "kit-duotone": {
            "kit-duotone": `fakd`
        }
    },
    Br, Vr = {
        GROUP: `duotone-group`,
        SWAP_OPACITY: `swap-opacity`,
        PRIMARY: `primary`,
        SECONDARY: `secondary`
    },
    Hr = [`fa-classic`, `fa-duotone`, `fa-sharp`, `fa-sharp-duotone`, `fa-thumbprint`, `fa-whiteboard`, `fa-notdog`, `fa-notdog-duo`, `fa-chisel`, `fa-etch`, `fa-graphite`, `fa-jelly`, `fa-jelly-fill`, `fa-jelly-duo`, `fa-slab`, `fa-slab-press`, `fa-utility`, `fa-utility-duo`, `fa-utility-fill`];
Br = {}, O(O(O(O(O(O(O(O(O(O(Br, `classic`, `Classic`), `duotone`, `Duotone`), `sharp`, `Sharp`), `sharp-duotone`, `Sharp Duotone`), `chisel`, `Chisel`), `etch`, `Etch`), `graphite`, `Graphite`), `jelly`, `Jelly`), `jelly-duo`, `Jelly Duo`), `jelly-fill`, `Jelly Fill`), O(O(O(O(O(O(O(O(O(Br, `notdog`, `Notdog`), `notdog-duo`, `Notdog Duo`), `slab`, `Slab`), `slab-press`, `Slab Press`), `thumbprint`, `Thumbprint`), `utility`, `Utility`), `utility-duo`, `Utility Duo`), `utility-fill`, `Utility Fill`), `whiteboard`, `Whiteboard`), O(O({}, `kit`, `Kit`), `kit-duotone`, `Kit Duotone`);
var Ur = {
        classic: {
            "fa-brands": `fab`,
            "fa-duotone": `fad`,
            "fa-light": `fal`,
            "fa-regular": `far`,
            "fa-solid": `fas`,
            "fa-thin": `fat`
        },
        duotone: {
            "fa-regular": `fadr`,
            "fa-light": `fadl`,
            "fa-thin": `fadt`
        },
        sharp: {
            "fa-solid": `fass`,
            "fa-regular": `fasr`,
            "fa-light": `fasl`,
            "fa-thin": `fast`
        },
        "sharp-duotone": {
            "fa-solid": `fasds`,
            "fa-regular": `fasdr`,
            "fa-light": `fasdl`,
            "fa-thin": `fasdt`
        },
        slab: {
            "fa-regular": `faslr`
        },
        "slab-press": {
            "fa-regular": `faslpr`
        },
        whiteboard: {
            "fa-semibold": `fawsb`
        },
        thumbprint: {
            "fa-light": `fatl`
        },
        notdog: {
            "fa-solid": `fans`
        },
        "notdog-duo": {
            "fa-solid": `fands`
        },
        etch: {
            "fa-solid": `faes`
        },
        graphite: {
            "fa-thin": `fagt`
        },
        jelly: {
            "fa-regular": `fajr`
        },
        "jelly-fill": {
            "fa-regular": `fajfr`
        },
        "jelly-duo": {
            "fa-regular": `fajdr`
        },
        chisel: {
            "fa-regular": `facr`
        },
        utility: {
            "fa-semibold": `fausb`
        },
        "utility-duo": {
            "fa-semibold": `faudsb`
        },
        "utility-fill": {
            "fa-semibold": `faufsb`
        }
    },
    Wr = {
        classic: [`fas`, `far`, `fal`, `fat`, `fad`],
        duotone: [`fadr`, `fadl`, `fadt`],
        sharp: [`fass`, `fasr`, `fasl`, `fast`],
        "sharp-duotone": [`fasds`, `fasdr`, `fasdl`, `fasdt`],
        slab: [`faslr`],
        "slab-press": [`faslpr`],
        whiteboard: [`fawsb`],
        thumbprint: [`fatl`],
        notdog: [`fans`],
        "notdog-duo": [`fands`],
        etch: [`faes`],
        graphite: [`fagt`],
        jelly: [`fajr`],
        "jelly-fill": [`fajfr`],
        "jelly-duo": [`fajdr`],
        chisel: [`facr`],
        utility: [`fausb`],
        "utility-duo": [`faudsb`],
        "utility-fill": [`faufsb`]
    },
    Gr = {
        classic: {
            fab: `fa-brands`,
            fad: `fa-duotone`,
            fal: `fa-light`,
            far: `fa-regular`,
            fas: `fa-solid`,
            fat: `fa-thin`
        },
        duotone: {
            fadr: `fa-regular`,
            fadl: `fa-light`,
            fadt: `fa-thin`
        },
        sharp: {
            fass: `fa-solid`,
            fasr: `fa-regular`,
            fasl: `fa-light`,
            fast: `fa-thin`
        },
        "sharp-duotone": {
            fasds: `fa-solid`,
            fasdr: `fa-regular`,
            fasdl: `fa-light`,
            fasdt: `fa-thin`
        },
        slab: {
            faslr: `fa-regular`
        },
        "slab-press": {
            faslpr: `fa-regular`
        },
        whiteboard: {
            fawsb: `fa-semibold`
        },
        thumbprint: {
            fatl: `fa-light`
        },
        notdog: {
            fans: `fa-solid`
        },
        "notdog-duo": {
            fands: `fa-solid`
        },
        etch: {
            faes: `fa-solid`
        },
        graphite: {
            fagt: `fa-thin`
        },
        jelly: {
            fajr: `fa-regular`
        },
        "jelly-fill": {
            fajfr: `fa-regular`
        },
        "jelly-duo": {
            fajdr: `fa-regular`
        },
        chisel: {
            facr: `fa-regular`
        },
        utility: {
            fausb: `fa-semibold`
        },
        "utility-duo": {
            faudsb: `fa-semibold`
        },
        "utility-fill": {
            faufsb: `fa-semibold`
        }
    },
    Kr = `fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Hr, [`fa-solid`, `fa-regular`, `fa-light`, `fa-thin`, `fa-duotone`, `fa-brands`, `fa-semibold`]),
    qr = [`solid`, `regular`, `light`, `thin`, `duotone`, `brands`, `semibold`],
    Jr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Yr = Jr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    Xr = [].concat(A(Object.keys(Wr)), qr, [`aw`, `fw`, `pull-left`, `pull-right`], [`2xs`, `xs`, `sm`, `lg`, `xl`, `2xl`, `beat`, `border`, `fade`, `beat-fade`, `bounce`, `flip-both`, `flip-horizontal`, `flip-vertical`, `flip`, `inverse`, `layers`, `layers-bottom-left`, `layers-bottom-right`, `layers-counter`, `layers-text`, `layers-top-left`, `layers-top-right`, `li`, `pull-end`, `pull-start`, `pulse`, `rotate-180`, `rotate-270`, `rotate-90`, `rotate-by`, `shake`, `spin-pulse`, `spin-reverse`, `spin`, `stack-1x`, `stack-2x`, `stack`, `ul`, `width-auto`, `width-fixed`, Vr.GROUP, Vr.SWAP_OPACITY, Vr.PRIMARY, Vr.SECONDARY], Jr.map(function(e) {
        return `${e}x`
    }), Yr.map(function(e) {
        return `w-${e}`
    })),
    Zr = {
        "Font Awesome 5 Free": {
            900: `fas`,
            400: `far`
        },
        "Font Awesome 5 Pro": {
            900: `fas`,
            400: `far`,
            normal: `far`,
            300: `fal`
        },
        "Font Awesome 5 Brands": {
            400: `fab`,
            normal: `fab`
        },
        "Font Awesome 5 Duotone": {
            900: `fad`
        }
    },
    F = `___FONT_AWESOME___`,
    Qr = 16,
    $r = `fa`,
    ei = `svg-inline--fa`,
    I = `data-fa-i2svg`,
    ti = `data-fa-pseudo-element`,
    ni = `data-fa-pseudo-element-pending`,
    ri = `data-prefix`,
    ii = `data-icon`,
    ai = `fontawesome-i2svg`,
    oi = `async`,
    si = [`HTML`, `HEAD`, `STYLE`, `SCRIPT`],
    ci = [`::before`, `::after`, `:before`, `:after`],
    li = function() {
        try {
            return !0
        } catch {
            return !1
        }
    }();

function ui(e) {
    return new Proxy(e, {
        get: function(e, t) {
            return t in e ? e[t] : e[P]
        }
    })
}
var di = k({}, Hn);
di[P] = k(k(k(k({}, {
    "fa-duotone": `duotone`
}), Hn[P]), Pr.kit), Pr[`kit-duotone`]);
var fi = ui(di),
    pi = k({}, Mr);
pi[P] = k(k(k(k({}, {
    duotone: `fad`
}), pi[P]), zr.kit), zr[`kit-duotone`]);
var mi = ui(pi),
    hi = k({}, Gr);
hi[P] = k(k({}, hi[P]), Rr.kit);
var gi = ui(hi),
    _i = k({}, Ur);
_i[P] = k(k({}, _i[P]), Ir.kit), ui(_i);
var vi = Bn,
    yi = `fa-layers-text`,
    bi = Vn;
ui(k({}, kr));
var xi = [`class`, `data-prefix`, `data-icon`, `data-fa-transform`, `data-fa-mask`],
    Si = Un,
    Ci = [].concat(A(Fr), A(Xr)),
    wi = j.FontAwesomeConfig || {};

function Ti(e) {
    var t = M.querySelector(`script[` + e + `]`);
    if (t) return t.getAttribute(e)
}

function Ei(e) {
    return e === `` ? !0 : e === `false` ? !1 : e === `true` || e
}
M && typeof M.querySelector == `function` && [
    [`data-family-prefix`, `familyPrefix`],
    [`data-css-prefix`, `cssPrefix`],
    [`data-family-default`, `familyDefault`],
    [`data-style-default`, `styleDefault`],
    [`data-replacement-class`, `replacementClass`],
    [`data-auto-replace-svg`, `autoReplaceSvg`],
    [`data-auto-add-css`, `autoAddCss`],
    [`data-search-pseudo-elements`, `searchPseudoElements`],
    [`data-search-pseudo-elements-warnings`, `searchPseudoElementsWarnings`],
    [`data-search-pseudo-elements-full-scan`, `searchPseudoElementsFullScan`],
    [`data-observe-mutations`, `observeMutations`],
    [`data-mutate-approach`, `mutateApproach`],
    [`data-keep-original-source`, `keepOriginalSource`],
    [`data-measure-performance`, `measurePerformance`],
    [`data-show-missing-icons`, `showMissingIcons`]
].forEach(function(e) {
    var t = wn(e, 2),
        n = t[0],
        r = t[1],
        i = Ei(Ti(n));
    i != null && (wi[r] = i)
});
var Di = {
    styleDefault: `solid`,
    familyDefault: P,
    cssPrefix: $r,
    replacementClass: ei,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    searchPseudoElements: !1,
    searchPseudoElementsWarnings: !0,
    searchPseudoElementsFullScan: !1,
    observeMutations: !0,
    mutateApproach: `async`,
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
};
wi.familyPrefix && (wi.cssPrefix = wi.familyPrefix);
var L = k(k({}, Di), wi);
L.autoReplaceSvg || (L.observeMutations = !1);
var R = {};
Object.keys(Di).forEach(function(e) {
    Object.defineProperty(R, e, {
        enumerable: !0,
        set: function(t) {
            L[e] = t, Oi.forEach(function(e) {
                return e(R)
            })
        },
        get: function() {
            return L[e]
        }
    })
}), Object.defineProperty(R, "familyPrefix", {
    enumerable: !0,
    set: function(e) {
        L.cssPrefix = e, Oi.forEach(function(e) {
            return e(R)
        })
    },
    get: function() {
        return L.cssPrefix
    }
}), j.FontAwesomeConfig = R;
var Oi = [];

function ki(e) {
    return Oi.push(e),
        function() {
            Oi.splice(Oi.indexOf(e), 1)
        }
}
var z = Qr,
    B = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
    };

function Ai(e) {
    if (!(!e || !N)) {
        var t = M.createElement(`style`);
        t.setAttribute(`type`, `text/css`), t.innerHTML = e;
        for (var n = M.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
            var a = n[i],
                o = (a.tagName || ``).toUpperCase();
            [`STYLE`, `LINK`].indexOf(o) > -1 && (r = a)
        }
        return M.head.insertBefore(t, r), e
    }
}
var ji = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

function Mi() {
    for (var e = 12, t = ``; e-- > 0;) t += ji[Math.random() * 62 | 0];
    return t
}

function V(e) {
    for (var t = [], n = (e || []).length >>> 0; n--;) t[n] = e[n];
    return t
}

function Ni(e) {
    return e.classList ? V(e.classList) : (e.getAttribute(`class`) || ``).split(` `).filter(function(e) {
        return e
    })
}

function Pi(e) {
    return `${e}`.replace(/&/g, `&amp;`).replace(/"/g, `&quot;`).replace(/'/g, `&#39;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`)
}

function Fi(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t + `${n}="${Pi(e[n])}" `
    }, ``).trim()
}

function Ii(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t + `${n}: ${e[n].trim()};`
    }, ``)
}

function Li(e) {
    return e.size !== B.size || e.x !== B.x || e.y !== B.y || e.rotate !== B.rotate || e.flipX || e.flipY
}

function Ri(e) {
    var t = e.transform,
        n = e.containerWidth,
        r = e.iconWidth;
    return {
        outer: {
            transform: `translate(${n/2} 256)`
        },
        inner: {
            transform: `${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`
        },
        path: {
            transform: `translate(${r/2*-1} -256)`
        }
    }
}

function zi(e) {
    var t = e.transform,
        n = e.width,
        r = n === void 0 ? Qr : n,
        i = e.height,
        a = i === void 0 ? Qr : i,
        o = e.startCentered,
        s = o !== void 0 && o,
        c = ``;
    return c += s && Rn ? `translate(${t.x/z-r/2}em, ${t.y/z-a/2}em) ` : s ? `translate(calc(-50% + ${t.x/z}em), calc(-50% + ${t.y/z}em)) ` : `translate(${t.x/z}em, ${t.y/z}em) `, c += `scale(${t.size/z*(t.flipX?-1:1)}, ${t.size/z*(t.flipY?-1:1)}) `, c += `rotate(${t.rotate}deg) `, c
}
var Bi = `:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;

function Vi() {
    var e = $r,
        t = ei,
        n = R.cssPrefix,
        r = R.replacementClass,
        i = Bi;
    if (n !== e || r !== t) {
        var a = RegExp(`\\.${e}\\-`, `g`),
            o = RegExp(`\\--${e}\\-`, `g`),
            s = RegExp(`\\.${t}`, `g`);
        i = i.replace(a, `.${n}-`).replace(o, `--${n}-`).replace(s, `.${r}`)
    }
    return i
}
var Hi = !1;

function Ui() {
    R.autoAddCss && !Hi && (Ai(Vi()), Hi = !0)
}
var Wi = {
        mixout: function() {
            return {
                dom: {
                    css: Vi,
                    insertCss: Ui
                }
            }
        },
        hooks: function() {
            return {
                beforeDOMElementCreation: function() {
                    Ui()
                },
                beforeI2svg: function() {
                    Ui()
                }
            }
        }
    },
    H = j || {};
H[F] || (H[F] = {}), H[F].styles || (H[F].styles = {}), H[F].hooks || (H[F].hooks = {}), H[F].shims || (H[F].shims = []);
var U = H[F],
    Gi = [],
    Ki = function() {
        M.removeEventListener(`DOMContentLoaded`, Ki), qi = 1, Gi.map(function(e) {
            return e()
        })
    },
    qi = !1;
N && (qi = (M.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(M.readyState), qi || M.addEventListener(`DOMContentLoaded`, Ki));

function Ji(e) {
    N && (qi ? setTimeout(e, 0) : Gi.push(e))
}

function W(e) {
    var t = e.tag,
        n = e.attributes,
        r = n === void 0 ? {} : n,
        i = e.children,
        a = i === void 0 ? [] : i;
    return typeof e == `string` ? Pi(e) : `<${t} ${Fi(r)}>${a.map(W).join(``)}</${t}>`
}

function Yi(e, t, n) {
    if (e && e[t] && e[t][n]) return {
        prefix: t,
        iconName: n,
        icon: e[t][n]
    }
}
var Xi = function(e, t) {
        return function(n, r, i, a) {
            return e.call(t, n, r, i, a)
        }
    },
    Zi = function(e, t, n, r) {
        var i = Object.keys(e),
            a = i.length,
            o = r === void 0 ? t : Xi(t, r),
            s, c, l;
        for (n === void 0 ? (s = 1, l = e[i[0]]) : (s = 0, l = n); s < a; s++) c = i[s], l = o(l, e[c], c, e);
        return l
    };

function Qi(e) {
    return A(e).length === 1 ? e.codePointAt(0).toString(16) : null
}

function $i(e) {
    return Object.keys(e).reduce(function(t, n) {
        var r = e[n];
        return r.icon ? t[r.iconName] = r.icon : t[n] = r, t
    }, {})
}

function ea(e, t) {
    var n = (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}).skipHooks,
        r = n !== void 0 && n,
        i = $i(t);
    typeof U.hooks.addPack == `function` && !r ? U.hooks.addPack(e, $i(t)) : U.styles[e] = k(k({}, U.styles[e] || {}), i), e === `fas` && ea(`fa`, t)
}
var ta = U.styles,
    na = U.shims,
    ra = Object.keys(gi),
    ia = ra.reduce(function(e, t) {
        return e[t] = Object.keys(gi[t]), e
    }, {}),
    aa = null,
    oa = {},
    sa = {},
    ca = {},
    la = {},
    ua = {};

function da(e) {
    return ~Ci.indexOf(e)
}

function fa(e, t) {
    var n = t.split(`-`),
        r = n[0],
        i = n.slice(1).join(`-`);
    return r === e && i !== `` && !da(i) ? i : null
}
var pa = function() {
    var e = function(e) {
        return Zi(ta, function(t, n, r) {
            return t[r] = Zi(n, e, {}), t
        }, {})
    };
    oa = e(function(e, t, n) {
        return t[3] && (e[t[3]] = n), t[2] && t[2].filter(function(e) {
            return typeof e == `number`
        }).forEach(function(t) {
            e[t.toString(16)] = n
        }), e
    }), sa = e(function(e, t, n) {
        return e[n] = n, t[2] && t[2].filter(function(e) {
            return typeof e == `string`
        }).forEach(function(t) {
            e[t] = n
        }), e
    }), ua = e(function(e, t, n) {
        var r = t[2];
        return e[n] = n, r.forEach(function(t) {
            e[t] = n
        }), e
    });
    var t = `far` in ta || R.autoFetchSvg,
        n = Zi(na, function(e, n) {
            var r = n[0],
                i = n[1],
                a = n[2];
            return i === `far` && !t && (i = `fas`), typeof r == `string` && (e.names[r] = {
                prefix: i,
                iconName: a
            }), typeof r == `number` && (e.unicodes[r.toString(16)] = {
                prefix: i,
                iconName: a
            }), e
        }, {
            names: {},
            unicodes: {}
        });
    ca = n.names, la = n.unicodes, aa = ba(R.styleDefault, {
        family: R.familyDefault
    })
};
ki(function(e) {
    aa = ba(e.styleDefault, {
        family: R.familyDefault
    })
}), pa();

function ma(e, t) {
    return (oa[e] || {})[t]
}

function ha(e, t) {
    return (sa[e] || {})[t]
}

function G(e, t) {
    return (ua[e] || {})[t]
}

function ga(e) {
    return ca[e] || {
        prefix: null,
        iconName: null
    }
}

function _a(e) {
    var t = la[e],
        n = ma(`fas`, e);
    return t || (n ? {
        prefix: `fas`,
        iconName: n
    } : null) || {
        prefix: null,
        iconName: null
    }
}

function K() {
    return aa
}
var va = function() {
    return {
        prefix: null,
        iconName: null,
        rest: []
    }
};

function ya(e) {
    var t = P,
        n = ra.reduce(function(e, t) {
            return e[t] = `${R.cssPrefix}-${t}`, e
        }, {});
    return Or.forEach(function(r) {
        (e.includes(n[r]) || e.some(function(e) {
            return ia[r].includes(e)
        })) && (t = r)
    }), t
}

function ba(e) {
    var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).family,
        n = t === void 0 ? P : t,
        r = fi[n][e];
    if (n === Gn && !e) return `fad`;
    var i = mi[n][e] || mi[n][r],
        a = e in U.styles ? e : null;
    return i || a || null
}

function xa(e) {
    var t = [],
        n = null;
    return e.forEach(function(e) {
        var r = fa(R.cssPrefix, e);
        r ? n = r : e && t.push(e)
    }), {
        iconName: n,
        rest: t
    }
}

function Sa(e) {
    return e.sort().filter(function(e, t, n) {
        return n.indexOf(e) === t
    })
}
var Ca = Kr.concat(Nr);

function wa(e) {
    var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).skipLookups,
        n = t !== void 0 && t,
        r = null,
        i = Sa(e.filter(function(e) {
            return Ca.includes(e)
        })),
        a = Sa(e.filter(function(e) {
            return !Ca.includes(e)
        })),
        o = wn(i.filter(function(e) {
            return r = e, !Wn.includes(e)
        }), 1)[0],
        s = o === void 0 ? null : o,
        c = ya(i),
        l = k(k({}, xa(a)), {}, {
            prefix: ba(s, {
                family: c
            })
        });
    return k(k(k({}, l), Oa({
        values: e,
        family: c,
        styles: ta,
        config: R,
        canonical: l,
        givenPrefix: r
    })), Ta(n, r, l))
}

function Ta(e, t, n) {
    var r = n.prefix,
        i = n.iconName;
    if (e || !r || !i) return {
        prefix: r,
        iconName: i
    };
    var a = t === `fa` ? ga(i) : {},
        o = G(r, i);
    return i = a.iconName || o || i, r = a.prefix || r, r === `far` && !ta.far && ta.fas && !R.autoFetchSvg && (r = `fas`), {
        prefix: r,
        iconName: i
    }
}
var Ea = Or.filter(function(e) {
        return e !== P || e !== Gn
    }),
    Da = Object.keys(Gr).filter(function(e) {
        return e !== P
    }).map(function(e) {
        return Object.keys(Gr[e])
    }).flat();

function Oa(e) {
    var t = e.values,
        n = e.family,
        r = e.canonical,
        i = e.givenPrefix,
        a = i === void 0 ? `` : i,
        o = e.styles,
        s = o === void 0 ? {} : o,
        c = e.config,
        l = c === void 0 ? {} : c,
        u = n === Gn,
        d = t.includes(`fa-duotone`) || t.includes(`fad`),
        f = l.familyDefault === `duotone`,
        p = r.prefix === `fad` || r.prefix === `fa-duotone`;
    return !u && (d || f || p) && (r.prefix = `fad`), (t.includes(`fa-brands`) || t.includes(`fab`)) && (r.prefix = `fab`), !r.prefix && Ea.includes(n) && (Object.keys(s).find(function(e) {
        return Da.includes(e)
    }) || l.autoFetchSvg) && (r.prefix = jr.get(n).defaultShortPrefixId, r.iconName = G(r.prefix, r.iconName) || r.iconName), (r.prefix === `fa` || a === `fa`) && (r.prefix = K() || `fas`), r
}
var ka = function() {
        function e() {
            hn(this, e), this.definitions = {}
        }
        return _n(e, [{
            key: `add`,
            value: function() {
                var e = this,
                    t = [...arguments].reduce(this._pullDefinitions, {});
                Object.keys(t).forEach(function(n) {
                    e.definitions[n] = k(k({}, e.definitions[n] || {}), t[n]), ea(n, t[n]);
                    var r = gi[P][n];
                    r && ea(r, t[n]), pa()
                })
            }
        }, {
            key: `reset`,
            value: function() {
                this.definitions = {}
            }
        }, {
            key: `_pullDefinitions`,
            value: function(e, t) {
                var n = t.prefix && t.iconName && t.icon ? {
                    0: t
                } : t;
                return Object.keys(n).map(function(t) {
                    var r = n[t],
                        i = r.prefix,
                        a = r.iconName,
                        o = r.icon,
                        s = o[2];
                    e[i] || (e[i] = {}), s.length > 0 && s.forEach(function(t) {
                        typeof t == `string` && (e[i][t] = o)
                    }), e[i][a] = o
                }), e
            }
        }])
    }(),
    Aa = [],
    q = {},
    J = {},
    ja = Object.keys(J);

function Ma(e, t) {
    var n = t.mixoutsTo;
    return Aa = e, q = {}, Object.keys(J).forEach(function(e) {
        ja.indexOf(e) === -1 && delete J[e]
    }), Aa.forEach(function(e) {
        var t = e.mixout ? e.mixout() : {};
        if (Object.keys(t).forEach(function(e) {
                typeof t[e] == `function` && (n[e] = t[e]), Dn(t[e]) === `object` && Object.keys(t[e]).forEach(function(r) {
                    n[e] || (n[e] = {}), n[e][r] = t[e][r]
                })
            }), e.hooks) {
            var r = e.hooks();
            Object.keys(r).forEach(function(e) {
                q[e] || (q[e] = []), q[e].push(r[e])
            })
        }
        e.provides && e.provides(J)
    }), n
}

function Na(e, t) {
    var n = [...arguments].slice(2);
    return (q[e] || []).forEach(function(e) {
        t = e.apply(null, [t].concat(n))
    }), t
}

function Y(e) {
    var t = [...arguments].slice(1);
    (q[e] || []).forEach(function(e) {
        e.apply(null, t)
    })
}

function X() {
    var e = arguments[0],
        t = Array.prototype.slice.call(arguments, 1);
    return J[e] ? J[e].apply(null, t) : void 0
}

function Pa(e) {
    e.prefix === `fa` && (e.prefix = `fas`);
    var t = e.iconName,
        n = e.prefix || K();
    if (t) return t = G(n, t) || t, Yi(Fa.definitions, n, t) || Yi(U.styles, n, t)
}
var Fa = new ka,
    Z = {
        noAuto: function() {
            R.autoReplaceSvg = !1, R.observeMutations = !1, Y(`noAuto`)
        },
        config: R,
        dom: {
            i2svg: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return N ? (Y(`beforeI2svg`, e), X(`pseudoElements2svg`, e), X(`i2svg`, e)) : Promise.reject(Error(`Operation requires a DOM of some kind.`))
            },
            watch: function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    t = e.autoReplaceSvgRoot;
                R.autoReplaceSvg === !1 && (R.autoReplaceSvg = !0), R.observeMutations = !0, Ji(function() {
                    Ia({
                        autoReplaceSvgRoot: t
                    }), Y(`watch`, e)
                })
            }
        },
        parse: {
            icon: function(e) {
                if (e === null) return null;
                if (Dn(e) === `object` && e.prefix && e.iconName) return {
                    prefix: e.prefix,
                    iconName: G(e.prefix, e.iconName) || e.iconName
                };
                if (Array.isArray(e) && e.length === 2) {
                    var t = e[1].indexOf(`fa-`) === 0 ? e[1].slice(3) : e[1],
                        n = ba(e[0]);
                    return {
                        prefix: n,
                        iconName: G(n, t) || t
                    }
                }
                if (typeof e == `string` && (e.indexOf(`${R.cssPrefix}-`) > -1 || e.match(vi))) {
                    var r = wa(e.split(` `), {
                        skipLookups: !0
                    });
                    return {
                        prefix: r.prefix || K(),
                        iconName: G(r.prefix, r.iconName) || r.iconName
                    }
                }
                if (typeof e == `string`) {
                    var i = K();
                    return {
                        prefix: i,
                        iconName: G(i, e) || e
                    }
                }
            }
        },
        library: Fa,
        findIconDefinition: Pa,
        toHtml: W
    },
    Ia = function() {
        var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).autoReplaceSvgRoot,
            t = e === void 0 ? M : e;
        (Object.keys(U.styles).length > 0 || R.autoFetchSvg) && N && R.autoReplaceSvg && Z.dom.i2svg({
            node: t
        })
    };

function La(e, t) {
    return Object.defineProperty(e, "abstract", {
        get: t
    }), Object.defineProperty(e, "html", {
        get: function() {
            return e.abstract.map(function(e) {
                return W(e)
            })
        }
    }), Object.defineProperty(e, "node", {
        get: function() {
            if (N) {
                var t = M.createElement(`div`);
                return t.innerHTML = e.html, t.children
            }
        }
    }), e
}

function Ra(e) {
    var t = e.children,
        n = e.main,
        r = e.mask,
        i = e.attributes,
        a = e.styles,
        o = e.transform;
    if (Li(o) && n.found && !r.found) {
        var s = {
            x: n.width / n.height / 2,
            y: .5
        };
        i.style = Ii(k(k({}, a), {}, {
            "transform-origin": `${s.x+o.x/16}em ${s.y+o.y/16}em`
        }))
    }
    return [{
        tag: `svg`,
        attributes: i,
        children: t
    }]
}

function za(e) {
    var t = e.prefix,
        n = e.iconName,
        r = e.children,
        i = e.attributes,
        a = e.symbol,
        o = a === !0 ? `${t}-${R.cssPrefix}-${n}` : a;
    return [{
        tag: `svg`,
        attributes: {
            style: `display: none;`
        },
        children: [{
            tag: `symbol`,
            attributes: k(k({}, i), {}, {
                id: o
            }),
            children: r
        }]
    }]
}

function Ba(e) {
    return [`aria-label`, `aria-labelledby`, `title`, `role`].some(function(t) {
        return t in e
    })
}

function Va(e) {
    var t = e.icons,
        n = t.main,
        r = t.mask,
        i = e.prefix,
        a = e.iconName,
        o = e.transform,
        s = e.symbol,
        c = e.maskId,
        l = e.extra,
        u = e.watchable,
        d = u !== void 0 && u,
        f = r.found ? r : n,
        p = f.width,
        m = f.height,
        h = [R.replacementClass, a ? `${R.cssPrefix}-${a}` : ``].filter(function(e) {
            return l.classes.indexOf(e) === -1
        }).filter(function(e) {
            return e !== `` || !!e
        }).concat(l.classes).join(` `),
        g = {
            children: [],
            attributes: k(k({}, l.attributes), {}, {
                "data-prefix": i,
                "data-icon": a,
                class: h,
                role: l.attributes.role || `img`,
                viewBox: `0 0 ${p} ${m}`
            })
        };
    !Ba(l.attributes) && !l.attributes[`aria-hidden`] && (g.attributes[`aria-hidden`] = `true`), d && (g.attributes[I] = ``);
    var _ = k(k({}, g), {}, {
            prefix: i,
            iconName: a,
            main: n,
            mask: r,
            maskId: c,
            transform: o,
            symbol: s,
            styles: k({}, l.styles)
        }),
        v = r.found && n.found ? X(`generateAbstractMask`, _) || {
            children: [],
            attributes: {}
        } : X(`generateAbstractIcon`, _) || {
            children: [],
            attributes: {}
        },
        y = v.children,
        b = v.attributes;
    return _.children = y, _.attributes = b, s ? za(_) : Ra(_)
}

function Ha(e) {
    var t = e.content,
        n = e.width,
        r = e.height,
        i = e.transform,
        a = e.extra,
        o = e.watchable,
        s = o !== void 0 && o,
        c = k(k({}, a.attributes), {}, {
            class: a.classes.join(` `)
        });
    s && (c[I] = ``);
    var l = k({}, a.styles);
    Li(i) && (l.transform = zi({
        transform: i,
        startCentered: !0,
        width: n,
        height: r
    }), l[`-webkit-transform`] = l.transform);
    var u = Ii(l);
    u.length > 0 && (c.style = u);
    var d = [];
    return d.push({
        tag: `span`,
        attributes: c,
        children: [t]
    }), d
}

function Ua(e) {
    var t = e.content,
        n = e.extra,
        r = k(k({}, n.attributes), {}, {
            class: n.classes.join(` `)
        }),
        i = Ii(n.styles);
    i.length > 0 && (r.style = i);
    var a = [];
    return a.push({
        tag: `span`,
        attributes: r,
        children: [t]
    }), a
}
var Wa = U.styles;

function Ga(e) {
    var t = e[0],
        n = e[1],
        r = wn(e.slice(4), 1)[0],
        i = null;
    return i = Array.isArray(r) ? {
        tag: `g`,
        attributes: {
            class: `${R.cssPrefix}-${Si.GROUP}`
        },
        children: [{
            tag: `path`,
            attributes: {
                class: `${R.cssPrefix}-${Si.SECONDARY}`,
                fill: `currentColor`,
                d: r[0]
            }
        }, {
            tag: `path`,
            attributes: {
                class: `${R.cssPrefix}-${Si.PRIMARY}`,
                fill: `currentColor`,
                d: r[1]
            }
        }]
    } : {
        tag: `path`,
        attributes: {
            fill: `currentColor`,
            d: r
        }
    }, {
        found: !0,
        width: t,
        height: n,
        icon: i
    }
}
var Ka = {
    found: !1,
    width: 512,
    height: 512
};

function qa(e, t) {
    !li && !R.showMissingIcons && e && console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)
}

function Ja(e, t) {
    var n = t;
    return t === `fa` && R.styleDefault !== null && (t = K()), new Promise(function(r, i) {
        if (n === `fa`) {
            var a = ga(e) || {};
            e = a.iconName || e, t = a.prefix || t
        }
        if (e && t && Wa[t] && Wa[t][e]) {
            var o = Wa[t][e];
            return r(Ga(o))
        }
        qa(e, t), r(k(k({}, Ka), {}, {
            icon: R.showMissingIcons && e && X(`missingIconAbstract`) || {}
        }))
    })
}
var Ya = function() {},
    Xa = R.measurePerformance && Ln && Ln.mark && Ln.measure ? Ln : {
        mark: Ya,
        measure: Ya
    },
    Za = `FA "7.2.0"`,
    Qa = function(e) {
        return Xa.mark(`${Za} ${e} begins`),
            function() {
                return $a(e)
            }
    },
    $a = function(e) {
        Xa.mark(`${Za} ${e} ends`), Xa.measure(`${Za} ${e}`, `${Za} ${e} begins`, `${Za} ${e} ends`)
    },
    eo = {
        begin: Qa,
        end: $a
    },
    to = function() {};

function no(e) {
    return typeof(e.getAttribute ? e.getAttribute(I) : null) == `string`
}

function ro(e) {
    var t = e.getAttribute ? e.getAttribute(ri) : null,
        n = e.getAttribute ? e.getAttribute(ii) : null;
    return t && n
}

function io(e) {
    return e && e.classList && e.classList.contains && e.classList.contains(R.replacementClass)
}

function ao() {
    return R.autoReplaceSvg === !0 ? uo.replace : uo[R.autoReplaceSvg] || uo.replace
}

function oo(e) {
    return M.createElementNS(`http://www.w3.org/2000/svg`, e)
}

function so(e) {
    return M.createElement(e)
}

function co(e) {
    var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).ceFn,
        n = t === void 0 ? e.tag === `svg` ? oo : so : t;
    if (typeof e == `string`) return M.createTextNode(e);
    var r = n(e.tag);
    return Object.keys(e.attributes || []).forEach(function(t) {
        r.setAttribute(t, e.attributes[t])
    }), (e.children || []).forEach(function(e) {
        r.appendChild(co(e, {
            ceFn: n
        }))
    }), r
}

function lo(e) {
    var t = ` ${e.outerHTML} `;
    return t = `${t}Font Awesome fontawesome.com `, t
}
var uo = {
    replace: function(e) {
        var t = e[0];
        if (t.parentNode)
            if (e[1].forEach(function(e) {
                    t.parentNode.insertBefore(co(e), t)
                }), t.getAttribute(I) === null && R.keepOriginalSource) {
                var n = M.createComment(lo(t));
                t.parentNode.replaceChild(n, t)
            } else t.remove()
    },
    nest: function(e) {
        var t = e[0],
            n = e[1];
        if (~Ni(t).indexOf(R.replacementClass)) return uo.replace(e);
        var r = RegExp(`${R.cssPrefix}-.*`);
        if (delete n[0].attributes.id, n[0].attributes.class) {
            var i = n[0].attributes.class.split(` `).reduce(function(e, t) {
                return t === R.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e
            }, {
                toNode: [],
                toSvg: []
            });
            n[0].attributes.class = i.toSvg.join(` `), i.toNode.length === 0 ? t.removeAttribute(`class`) : t.setAttribute(`class`, i.toNode.join(` `))
        }
        var a = n.map(function(e) {
            return W(e)
        }).join(`
`);
        t.setAttribute(I, ``), t.innerHTML = a
    }
};

function fo(e) {
    e()
}

function po(e, t) {
    var n = typeof t == `function` ? t : to;
    if (e.length === 0) n();
    else {
        var r = fo;
        R.mutateApproach === oi && (r = j.requestAnimationFrame || fo), r(function() {
            var t = ao(),
                r = eo.begin(`mutate`);
            e.map(t), r(), n()
        })
    }
}
var mo = !1;

function ho() {
    mo = !0
}

function go() {
    mo = !1
}
var _o = null;

function vo(e) {
    if (In && R.observeMutations) {
        var t = e.treeCallback,
            n = t === void 0 ? to : t,
            r = e.nodeCallback,
            i = r === void 0 ? to : r,
            a = e.pseudoElementsCallback,
            o = a === void 0 ? to : a,
            s = e.observeMutationsRoot,
            c = s === void 0 ? M : s;
        _o = new In(function(e) {
            if (!mo) {
                var t = K();
                V(e).forEach(function(e) {
                    if (e.type === `childList` && e.addedNodes.length > 0 && !no(e.addedNodes[0]) && (R.searchPseudoElements && o(e.target), n(e.target)), e.type === `attributes` && e.target.parentNode && R.searchPseudoElements && o([e.target], !0), e.type === `attributes` && no(e.target) && ~xi.indexOf(e.attributeName))
                        if (e.attributeName === `class` && ro(e.target)) {
                            var r = wa(Ni(e.target)),
                                a = r.prefix,
                                s = r.iconName;
                            e.target.setAttribute(ri, a || t), s && e.target.setAttribute(ii, s)
                        } else io(e.target) && i(e.target)
                })
            }
        }), N && _o.observe(c, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        })
    }
}

function yo() {
    _o && _o.disconnect()
}

function bo(e) {
    var t = e.getAttribute(`style`),
        n = [];
    return t && (n = t.split(`;`).reduce(function(e, t) {
        var n = t.split(`:`),
            r = n[0],
            i = n.slice(1);
        return r && i.length > 0 && (e[r] = i.join(`:`).trim()), e
    }, {})), n
}

function xo(e) {
    var t = e.getAttribute(`data-prefix`),
        n = e.getAttribute(`data-icon`),
        r = e.innerText === void 0 ? `` : e.innerText.trim(),
        i = wa(Ni(e));
    return i.prefix || = K(), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix ? i : (i.prefix && r.length > 0 && (i.iconName = ha(i.prefix, e.innerText) || ma(i.prefix, Qi(e.innerText))), !i.iconName && R.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data), i)
}

function So(e) {
    return V(e.attributes).reduce(function(e, t) {
        return e.name !== `class` && e.name !== `style` && (e[t.name] = t.value), e
    }, {})
}

function Co() {
    return {
        iconName: null,
        prefix: null,
        transform: B,
        symbol: !1,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    }
}

function wo(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            styleParser: !0
        },
        n = xo(e),
        r = n.iconName,
        i = n.prefix,
        a = n.rest,
        o = So(e),
        s = Na(`parseNodeAttributes`, {}, e);
    return k({
        iconName: r,
        prefix: i,
        transform: B,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
            classes: a,
            styles: t.styleParser ? bo(e) : [],
            attributes: o
        }
    }, s)
}
var To = U.styles;

function Eo(e) {
    var t = R.autoReplaceSvg === `nest` ? wo(e, {
        styleParser: !1
    }) : wo(e);
    return ~t.extra.classes.indexOf(yi) ? X(`generateLayersText`, e, t) : X(`generateSvgReplacementMutation`, e, t)
}

function Do() {
    return [].concat(A(Nr), A(Kr))
}

function Oo(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!N) return Promise.resolve();
    var n = M.documentElement.classList,
        r = function(e) {
            return n.add(`${ai}-${e}`)
        },
        i = function(e) {
            return n.remove(`${ai}-${e}`)
        },
        a = R.autoFetchSvg ? Do() : Wn.concat(Object.keys(To));
    a.includes(`fa`) || a.push(`fa`);
    var o = [`.${yi}:not([${I}])`].concat(a.map(function(e) {
        return `.${e}:not([${I}])`
    })).join(`, `);
    if (o.length === 0) return Promise.resolve();
    var s = [];
    try {
        s = V(e.querySelectorAll(o))
    } catch {}
    if (s.length > 0) r(`pending`), i(`complete`);
    else return Promise.resolve();
    var c = eo.begin(`onTree`),
        l = s.reduce(function(e, t) {
            try {
                var n = Eo(t);
                n && e.push(n)
            } catch (e) {
                li || e.name === `MissingIcon` && console.error(e)
            }
            return e
        }, []);
    return new Promise(function(e, n) {
        Promise.all(l).then(function(n) {
            po(n, function() {
                r(`active`), r(`complete`), i(`pending`), typeof t == `function` && t(), c(), e()
            })
        }).catch(function(e) {
            c(), n(e)
        })
    })
}

function ko(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    Eo(e).then(function(e) {
        e && po([e], t)
    })
}

function Ao(e) {
    return function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = (t || {}).icon ? t : Pa(t || {}),
            i = n.mask;
        return i && = (i || {}).icon ? i : Pa(i || {}), e(r, k(k({}, n), {}, {
            mask: i
        }))
    }
}
var jo = function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            n = t.transform,
            r = n === void 0 ? B : n,
            i = t.symbol,
            a = i !== void 0 && i,
            o = t.mask,
            s = o === void 0 ? null : o,
            c = t.maskId,
            l = c === void 0 ? null : c,
            u = t.classes,
            d = u === void 0 ? [] : u,
            f = t.attributes,
            p = f === void 0 ? {} : f,
            m = t.styles,
            h = m === void 0 ? {} : m;
        if (e) {
            var g = e.prefix,
                _ = e.iconName,
                v = e.icon;
            return La(k({
                type: `icon`
            }, e), function() {
                return Y(`beforeDOMElementCreation`, {
                    iconDefinition: e,
                    params: t
                }), Va({
                    icons: {
                        main: Ga(v),
                        mask: s ? Ga(s.icon) : {
                            found: !1,
                            width: null,
                            height: null,
                            icon: {}
                        }
                    },
                    prefix: g,
                    iconName: _,
                    transform: k(k({}, B), r),
                    symbol: a,
                    maskId: l,
                    extra: {
                        attributes: p,
                        styles: h,
                        classes: d
                    }
                })
            })
        }
    },
    Mo = {
        mixout: function() {
            return {
                icon: Ao(jo)
            }
        },
        hooks: function() {
            return {
                mutationObserverCallbacks: function(e) {
                    return e.treeCallback = Oo, e.nodeCallback = ko, e
                }
            }
        },
        provides: function(e) {
            e.i2svg = function(e) {
                var t = e.node,
                    n = t === void 0 ? M : t,
                    r = e.callback;
                return Oo(n, r === void 0 ? function() {} : r)
            }, e.generateSvgReplacementMutation = function(e, t) {
                var n = t.iconName,
                    r = t.prefix,
                    i = t.transform,
                    a = t.symbol,
                    o = t.mask,
                    s = t.maskId,
                    c = t.extra;
                return new Promise(function(t, l) {
                    Promise.all([Ja(n, r), o.iconName ? Ja(o.iconName, o.prefix) : Promise.resolve({
                        found: !1,
                        width: 512,
                        height: 512,
                        icon: {}
                    })]).then(function(o) {
                        var l = wn(o, 2),
                            u = l[0],
                            d = l[1];
                        t([e, Va({
                            icons: {
                                main: u,
                                mask: d
                            },
                            prefix: r,
                            iconName: n,
                            transform: i,
                            symbol: a,
                            maskId: s,
                            extra: c,
                            watchable: !0
                        })])
                    }).catch(l)
                })
            }, e.generateAbstractIcon = function(e) {
                var t = e.children,
                    n = e.attributes,
                    r = e.main,
                    i = e.transform,
                    a = e.styles,
                    o = Ii(a);
                o.length > 0 && (n.style = o);
                var s;
                return Li(i) && (s = X(`generateAbstractTransformGrouping`, {
                    main: r,
                    transform: i,
                    containerWidth: r.width,
                    iconWidth: r.width
                })), t.push(s || r.icon), {
                    children: t,
                    attributes: n
                }
            }
        }
    },
    No = {
        mixout: function() {
            return {
                layer: function(e) {
                    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        n = t.classes,
                        r = n === void 0 ? [] : n;
                    return La({
                        type: `layer`
                    }, function() {
                        Y(`beforeDOMElementCreation`, {
                            assembler: e,
                            params: t
                        });
                        var n = [];
                        return e(function(e) {
                            Array.isArray(e) ? e.map(function(e) {
                                n = n.concat(e.abstract)
                            }) : n = n.concat(e.abstract)
                        }), [{
                            tag: `span`,
                            attributes: {
                                class: [`${R.cssPrefix}-layers`].concat(A(r)).join(` `)
                            },
                            children: n
                        }]
                    })
                }
            }
        }
    },
    Po = {
        mixout: function() {
            return {
                counter: function(e) {
                    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        n = t.title,
                        r = n === void 0 ? null : n,
                        i = t.classes,
                        a = i === void 0 ? [] : i,
                        o = t.attributes,
                        s = o === void 0 ? {} : o,
                        c = t.styles,
                        l = c === void 0 ? {} : c;
                    return La({
                        type: `counter`,
                        content: e
                    }, function() {
                        return Y(`beforeDOMElementCreation`, {
                            content: e,
                            params: t
                        }), Ua({
                            content: e.toString(),
                            title: r,
                            extra: {
                                attributes: s,
                                styles: l,
                                classes: [`${R.cssPrefix}-layers-counter`].concat(A(a))
                            }
                        })
                    })
                }
            }
        }
    },
    Fo = {
        mixout: function() {
            return {
                text: function(e) {
                    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        n = t.transform,
                        r = n === void 0 ? B : n,
                        i = t.classes,
                        a = i === void 0 ? [] : i,
                        o = t.attributes,
                        s = o === void 0 ? {} : o,
                        c = t.styles,
                        l = c === void 0 ? {} : c;
                    return La({
                        type: `text`,
                        content: e
                    }, function() {
                        return Y(`beforeDOMElementCreation`, {
                            content: e,
                            params: t
                        }), Ha({
                            content: e,
                            transform: k(k({}, B), r),
                            extra: {
                                attributes: s,
                                styles: l,
                                classes: [`${R.cssPrefix}-layers-text`].concat(A(a))
                            }
                        })
                    })
                }
            }
        },
        provides: function(e) {
            e.generateLayersText = function(e, t) {
                var n = t.transform,
                    r = t.extra,
                    i = null,
                    a = null;
                if (Rn) {
                    var o = parseInt(getComputedStyle(e).fontSize, 10),
                        s = e.getBoundingClientRect();
                    i = s.width / o, a = s.height / o
                }
                return Promise.resolve([e, Ha({
                    content: e.innerHTML,
                    width: i,
                    height: a,
                    transform: n,
                    extra: r,
                    watchable: !0
                })])
            }
        }
    },
    Io = RegExp(`"`, `ug`),
    Lo = [1105920, 1112319],
    Ro = k(k(k(k({}, {
        FontAwesome: {
            normal: `fas`,
            400: `fas`
        }
    }), Ar), Zr), Lr),
    zo = Object.keys(Ro).reduce(function(e, t) {
        return e[t.toLowerCase()] = Ro[t], e
    }, {}),
    Bo = Object.keys(zo).reduce(function(e, t) {
        var n = zo[t];
        return e[t] = n[900] || A(Object.entries(n))[0][1], e
    }, {});

function Vo(e) {
    return Qi(A(e.replace(Io, ``))[0] || ``)
}

function Ho(e) {
    var t = e.getPropertyValue(`font-feature-settings`).includes(`ss01`),
        n = e.getPropertyValue(`content`).replace(Io, ``),
        r = n.codePointAt(0),
        i = r >= Lo[0] && r <= Lo[1],
        a = n.length === 2 && n[0] === n[1];
    return i || a || t
}

function Uo(e, t) {
    var n = e.replace(/^['"]|['"]$/g, ``).toLowerCase(),
        r = parseInt(t),
        i = isNaN(r) ? `normal` : r;
    return (zo[n] || {})[i] || Bo[n]
}

function Wo(e, t) {
    var n = `${ni}${t.replace(`:`,`-`)}`;
    return new Promise(function(r, i) {
        if (e.getAttribute(n) !== null) return r();
        var a = V(e.children).filter(function(e) {
                return e.getAttribute(ti) === t
            })[0],
            o = j.getComputedStyle(e, t),
            s = o.getPropertyValue(`font-family`),
            c = s.match(bi),
            l = o.getPropertyValue(`font-weight`),
            u = o.getPropertyValue(`content`);
        if (a && !c) return e.removeChild(a), r();
        if (c && u !== `none` && u !== ``) {
            var d = o.getPropertyValue(`content`),
                f = Uo(s, l),
                p = Vo(d),
                m = c[0].startsWith(`FontAwesome`),
                h = Ho(o),
                g = ma(f, p),
                _ = g;
            if (m) {
                var v = _a(p);
                v.iconName && v.prefix && (g = v.iconName, f = v.prefix)
            }
            if (g && !h && (!a || a.getAttribute(ri) !== f || a.getAttribute(ii) !== _)) {
                e.setAttribute(n, _), a && e.removeChild(a);
                var y = Co(),
                    b = y.extra;
                b.attributes[ti] = t, Ja(g, f).then(function(i) {
                    var a = Va(k(k({}, y), {}, {
                            icons: {
                                main: i,
                                mask: va()
                            },
                            prefix: f,
                            iconName: _,
                            extra: b,
                            watchable: !0
                        })),
                        o = M.createElementNS(`http://www.w3.org/2000/svg`, `svg`);
                    t === `::before` ? e.insertBefore(o, e.firstChild) : e.appendChild(o), o.outerHTML = a.map(function(e) {
                        return W(e)
                    }).join(`
`), e.removeAttribute(n), r()
                }).catch(i)
            } else r()
        } else r()
    })
}

function Go(e) {
    return Promise.all([Wo(e, `::before`), Wo(e, `::after`)])
}

function Ko(e) {
    return e.parentNode !== document.head && !~si.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ti) && (!e.parentNode || e.parentNode.tagName !== `svg`)
}
var qo = function(e) {
        return !!e && ci.some(function(t) {
            return e.includes(t)
        })
    },
    Jo = function(e) {
        if (!e) return [];
        var t = new Set,
            n = e.split(/,(?![^()]*\))/).map(function(e) {
                return e.trim()
            });
        n = n.flatMap(function(e) {
            return e.includes(`(`) ? e : e.split(`,`).map(function(e) {
                return e.trim()
            })
        });
        var r = vn(n),
            i;
        try {
            for (r.s(); !(i = r.n()).done;) {
                var a = i.value;
                if (qo(a)) {
                    var o = ci.reduce(function(e, t) {
                        return e.replace(t, ``)
                    }, a);
                    o !== `` && o !== `*` && t.add(o)
                }
            }
        } catch (e) {
            r.e(e)
        } finally {
            r.f()
        }
        return t
    };

function Yo(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    if (N) {
        var n;
        if (t) n = e;
        else if (R.searchPseudoElementsFullScan) n = e.querySelectorAll(`*`);
        else {
            var r = new Set,
                i = vn(document.styleSheets),
                a;
            try {
                for (i.s(); !(a = i.n()).done;) {
                    var o = a.value;
                    try {
                        var s = vn(o.cssRules),
                            c;
                        try {
                            for (s.s(); !(c = s.n()).done;) {
                                var l = c.value,
                                    u = vn(Jo(l.selectorText)),
                                    d;
                                try {
                                    for (u.s(); !(d = u.n()).done;) {
                                        var f = d.value;
                                        r.add(f)
                                    }
                                } catch (e) {
                                    u.e(e)
                                } finally {
                                    u.f()
                                }
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                    } catch (e) {
                        R.searchPseudoElementsWarnings && console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)
                    }
                }
            } catch (e) {
                i.e(e)
            } finally {
                i.f()
            }
            if (!r.size) return;
            var p = Array.from(r).join(`, `);
            try {
                n = e.querySelectorAll(p)
            } catch {}
        }
        return new Promise(function(e, t) {
            var r = V(n).filter(Ko).map(Go),
                i = eo.begin(`searchPseudoElements`);
            ho(), Promise.all(r).then(function() {
                i(), go(), e()
            }).catch(function() {
                i(), go(), t()
            })
        })
    }
}
var Xo = {
        hooks: function() {
            return {
                mutationObserverCallbacks: function(e) {
                    return e.pseudoElementsCallback = Yo, e
                }
            }
        },
        provides: function(e) {
            e.pseudoElements2svg = function(e) {
                var t = e.node,
                    n = t === void 0 ? M : t;
                R.searchPseudoElements && Yo(n)
            }
        }
    },
    Zo = !1,
    Qo = {
        mixout: function() {
            return {
                dom: {
                    unwatch: function() {
                        ho(), Zo = !0
                    }
                }
            }
        },
        hooks: function() {
            return {
                bootstrap: function() {
                    vo(Na(`mutationObserverCallbacks`, {}))
                },
                noAuto: function() {
                    yo()
                },
                watch: function(e) {
                    var t = e.observeMutationsRoot;
                    Zo ? go() : vo(Na(`mutationObserverCallbacks`, {
                        observeMutationsRoot: t
                    }))
                }
            }
        }
    },
    $o = function(e) {
        return e.toLowerCase().split(` `).reduce(function(e, t) {
            var n = t.toLowerCase().split(`-`),
                r = n[0],
                i = n.slice(1).join(`-`);
            if (r && i === `h`) return e.flipX = !0, e;
            if (r && i === `v`) return e.flipY = !0, e;
            if (i = parseFloat(i), isNaN(i)) return e;
            switch (r) {
                case `grow`:
                    e.size += i;
                    break;
                case `shrink`:
                    e.size -= i;
                    break;
                case `left`:
                    e.x -= i;
                    break;
                case `right`:
                    e.x += i;
                    break;
                case `up`:
                    e.y -= i;
                    break;
                case `down`:
                    e.y += i;
                    break;
                case `rotate`:
                    e.rotate += i
            }
            return e
        }, {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        })
    },
    es = {
        mixout: function() {
            return {
                parse: {
                    transform: function(e) {
                        return $o(e)
                    }
                }
            }
        },
        hooks: function() {
            return {
                parseNodeAttributes: function(e, t) {
                    var n = t.getAttribute(`data-fa-transform`);
                    return n && (e.transform = $o(n)), e
                }
            }
        },
        provides: function(e) {
            e.generateAbstractTransformGrouping = function(e) {
                var t = e.main,
                    n = e.transform,
                    r = e.containerWidth,
                    i = e.iconWidth,
                    a = {
                        outer: {
                            transform: `translate(${r/2} 256)`
                        },
                        inner: {
                            transform: `${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`
                        },
                        path: {
                            transform: `translate(${i/2*-1} -256)`
                        }
                    };
                return {
                    tag: `g`,
                    attributes: k({}, a.outer),
                    children: [{
                        tag: `g`,
                        attributes: k({}, a.inner),
                        children: [{
                            tag: t.icon.tag,
                            children: t.icon.children,
                            attributes: k(k({}, t.icon.attributes), a.path)
                        }]
                    }]
                }
            }
        }
    },
    ts = {
        x: 0,
        y: 0,
        width: `100%`,
        height: `100%`
    };

function ns(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = `black`), e
}

function rs(e) {
    return e.tag === `g` ? e.children : [e]
}
Ma([Wi, Mo, No, Po, Fo, Xo, Qo, es, {
    hooks: function() {
        return {
            parseNodeAttributes: function(e, t) {
                var n = t.getAttribute(`data-fa-mask`),
                    r = n ? wa(n.split(` `).map(function(e) {
                        return e.trim()
                    })) : va();
                return r.prefix || = K(), e.mask = r, e.maskId = t.getAttribute(`data-fa-mask-id`), e
            }
        }
    },
    provides: function(e) {
        e.generateAbstractMask = function(e) {
            var t = e.children,
                n = e.attributes,
                r = e.main,
                i = e.mask,
                a = e.maskId,
                o = e.transform,
                s = r.width,
                c = r.icon,
                l = i.width,
                u = i.icon,
                d = Ri({
                    transform: o,
                    containerWidth: l,
                    iconWidth: s
                }),
                f = {
                    tag: `rect`,
                    attributes: k(k({}, ts), {}, {
                        fill: `white`
                    })
                },
                p = c.children ? {
                    children: c.children.map(ns)
                } : {},
                m = {
                    tag: `g`,
                    attributes: k({}, d.inner),
                    children: [ns(k({
                        tag: c.tag,
                        attributes: k(k({}, c.attributes), d.path)
                    }, p))]
                },
                h = {
                    tag: `g`,
                    attributes: k({}, d.outer),
                    children: [m]
                },
                g = `mask-${a||Mi()}`,
                _ = `clip-${a||Mi()}`,
                v = {
                    tag: `mask`,
                    attributes: k(k({}, ts), {}, {
                        id: g,
                        maskUnits: `userSpaceOnUse`,
                        maskContentUnits: `userSpaceOnUse`
                    }),
                    children: [f, h]
                },
                y = {
                    tag: `defs`,
                    children: [{
                        tag: `clipPath`,
                        attributes: {
                            id: _
                        },
                        children: rs(u)
                    }, v]
                };
            return t.push(y, {
                tag: `rect`,
                attributes: k({
                    fill: `currentColor`,
                    "clip-path": `url(#${_})`,
                    mask: `url(#${g})`
                }, ts)
            }), {
                children: t,
                attributes: n
            }
        }
    }
}, {
    provides: function(e) {
        var t = !1;
        j.matchMedia && (t = j.matchMedia(`(prefers-reduced-motion: reduce)`).matches), e.missingIconAbstract = function() {
            var e = [],
                n = {
                    fill: `currentColor`
                },
                r = {
                    attributeType: `XML`,
                    repeatCount: `indefinite`,
                    dur: `2s`
                };
            e.push({
                tag: `path`,
                attributes: k(k({}, n), {}, {
                    d: `M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`
                })
            });
            var i = k(k({}, r), {}, {
                    attributeName: `opacity`
                }),
                a = {
                    tag: `circle`,
                    attributes: k(k({}, n), {}, {
                        cx: `256`,
                        cy: `364`,
                        r: `28`
                    }),
                    children: []
                };
            return t || a.children.push({
                tag: `animate`,
                attributes: k(k({}, r), {}, {
                    attributeName: `r`,
                    values: `28;14;28;28;14;28;`
                })
            }, {
                tag: `animate`,
                attributes: k(k({}, i), {}, {
                    values: `1;0;1;1;0;1;`
                })
            }), e.push(a), e.push({
                tag: `path`,
                attributes: k(k({}, n), {}, {
                    opacity: `1`,
                    d: `M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`
                }),
                children: t ? [] : [{
                    tag: `animate`,
                    attributes: k(k({}, i), {}, {
                        values: `1;0;0;0;0;1;`
                    })
                }]
            }), t || e.push({
                tag: `path`,
                attributes: k(k({}, n), {}, {
                    opacity: `0`,
                    d: `M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`
                }),
                children: [{
                    tag: `animate`,
                    attributes: k(k({}, i), {}, {
                        values: `0;0;1;1;0;0;`
                    })
                }]
            }), {
                tag: `g`,
                attributes: {
                    class: `missing`
                },
                children: e
            }
        }
    }
}, {
    hooks: function() {
        return {
            parseNodeAttributes: function(e, t) {
                var n = t.getAttribute(`data-fa-symbol`);
                return e.symbol = n === null ? !1 : n === `` || n, e
            }
        }
    }
}], {
    mixoutsTo: Z
}), Z.noAuto;
var is = Z.config;
Z.library, Z.dom;
var as = Z.parse;
Z.findIconDefinition, Z.toHtml;
var os = Z.icon;
Z.layer;
var ss = Z.text;
Z.counter;

function cs(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function ls(e) {
    if (Array.isArray(e)) return cs(e)
}

function Q(e, t, n) {
    return (t = _s(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function us(e) {
    if (typeof Symbol < `u` && e[Symbol.iterator] != null || e[`@@iterator`] != null) return Array.from(e)
}

function ds() {
    throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function fs(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? fs(Object(n), !0).forEach(function(t) {
            Q(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fs(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function ps(e, t) {
    if (e == null) return {};
    var n, r, i = ms(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}

function ms(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) !== -1) continue;
            n[r] = e[r]
        }
    return n
}

function hs(e) {
    return ls(e) || us(e) || ys(e) || ds()
}

function gs(e, t) {
    if (typeof e != `object` || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || `default`);
        if (typeof r != `object`) return r;
        throw TypeError(`@@toPrimitive must return a primitive value.`)
    }
    return (t === `string` ? String : Number)(e)
}

function _s(e) {
    var t = gs(e, `string`);
    return typeof t == `symbol` ? t : t + ``
}

function vs(e) {
    "@babel/helpers - typeof";
    return vs = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
    }, vs(e)
}

function ys(e, t) {
    if (e) {
        if (typeof e == `string`) return cs(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set` ? Array.from(e) : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? cs(e, t) : void 0
    }
}

function bs(e, t) {
    return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Q({}, e, t) : {}
}

function xs(e) {
    var t, n = (t = {
        "fa-spin": e.spin,
        "fa-pulse": e.pulse,
        "fa-fw": e.fixedWidth,
        "fa-border": e.border,
        "fa-li": e.listItem,
        "fa-inverse": e.inverse,
        "fa-flip": e.flip === !0,
        "fa-flip-horizontal": e.flip === `horizontal` || e.flip === `both`,
        "fa-flip-vertical": e.flip === `vertical` || e.flip === `both`
    }, Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t, `fa-${e.size}`, e.size !== null), `fa-rotate-${e.rotation}`, e.rotation !== null), `fa-rotate-by`, e.rotateBy), `fa-pull-${e.pull}`, e.pull !== null), `fa-swap-opacity`, e.swapOpacity), `fa-bounce`, e.bounce), `fa-shake`, e.shake), `fa-beat`, e.beat), `fa-fade`, e.fade), `fa-beat-fade`, e.beatFade), Q(Q(Q(Q(t, `fa-flash`, e.flash), `fa-spin-pulse`, e.spinPulse), `fa-spin-reverse`, e.spinReverse), `fa-width-auto`, e.widthAuto));
    return Object.keys(n).map(function(e) {
        return n[e] ? e : null
    }).filter(function(e) {
        return e
    })
}
var Ss = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : {},
    Cs = {
        exports: {}
    };
(function(e) {
    (function(t) {
        var n = function(e, t, r) {
                if (!l(t) || d(t) || f(t) || p(t) || c(t)) return t;
                var i, a = 0,
                    o = 0;
                if (u(t))
                    for (i = [], o = t.length; a < o; a++) i.push(n(e, t[a], r));
                else
                    for (var s in i = {}, t) Object.prototype.hasOwnProperty.call(t, s) && (i[e(s, r)] = n(e, t[s], r));
                return i
            },
            r = function(e, t) {
                t || = {};
                var n = t.separator || `_`,
                    r = t.split || /(?=[A-Z])/;
                return e.split(r).join(n)
            },
            i = function(e) {
                return m(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ``
                }), e.substr(0, 1).toLowerCase() + e.substr(1))
            },
            a = function(e) {
                var t = i(e);
                return t.substr(0, 1).toUpperCase() + t.substr(1)
            },
            o = function(e, t) {
                return r(e, t).toLowerCase()
            },
            s = Object.prototype.toString,
            c = function(e) {
                return typeof e == `function`
            },
            l = function(e) {
                return e === Object(e)
            },
            u = function(e) {
                return s.call(e) == `[object Array]`
            },
            d = function(e) {
                return s.call(e) == `[object Date]`
            },
            f = function(e) {
                return s.call(e) == `[object RegExp]`
            },
            p = function(e) {
                return s.call(e) == `[object Boolean]`
            },
            m = function(e) {
                return e -= 0, e === e
            },
            h = function(e, t) {
                var n = t && `process` in t ? t.process : t;
                return typeof n == `function` ? function(t, r) {
                    return n(t, e, r)
                } : e
            },
            g = {
                camelize: i,
                decamelize: o,
                pascalize: a,
                depascalize: o,
                camelizeKeys: function(e, t) {
                    return n(h(i, t), e)
                },
                decamelizeKeys: function(e, t) {
                    return n(h(o, t), e, t)
                },
                pascalizeKeys: function(e, t) {
                    return n(h(a, t), e)
                },
                depascalizeKeys: function() {
                    return this.decamelizeKeys.apply(this, arguments)
                }
            };
        e.exports ? e.exports = g : t.humps = g
    })(Ss)
})(Cs);
var ws = Cs.exports,
    Ts = [`gradientFill`],
    Es = [`class`, `style`],
    Ds = [`type`, `stops`, `id`];

function Os(e) {
    return e.split(`;`).map(function(e) {
        return e.trim()
    }).filter(function(e) {
        return e
    }).reduce(function(e, t) {
        var n = t.indexOf(`:`),
            r = ws.camelize(t.slice(0, n));
        return e[r] = t.slice(n + 1).trim(), e
    }, {})
}

function ks(e) {
    return e.split(/\s+/).reduce(function(e, t) {
        return e[t] = !0, e
    }, {})
}

function As(e, t) {
    return T(`stop`, $({
        key: `${t}-${e.offset}`,
        offset: e.offset,
        "stop-color": e.color
    }, e.opacity !== void 0 && {
        "stop-opacity": e.opacity
    }))
}

function js(e) {
    if (typeof e == `string`) return e;
    var t = (e.children || []).map(js);
    return e.tag === `path` && e.attributes && `fill` in e.attributes ? $($({}, e), {}, {
        attributes: $($({}, e.attributes), {}, {
            fill: void 0
        }),
        children: t
    }) : $($({}, e), {}, {
        children: t
    })
}

function Ms(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof e == `string`) return e;
    var r = t.gradientFill,
        i = r === void 0 ? null : r,
        a = ps(t, Ts),
        o = i || `fill` in n ? js(e) : e,
        s = (o.children || []).map(function(e) {
            return Ms(e, {}, {})
        }),
        c = Object.keys(o.attributes || {}).reduce(function(e, t) {
            var n = o.attributes[t];
            switch (t) {
                case `class`:
                    e.class = ks(n);
                    break;
                case `style`:
                    e.style = Os(n);
                    break;
                default:
                    e.attrs[t] = n
            }
            return e
        }, {
            attrs: {},
            class: {},
            style: {}
        });
    n.class;
    var l = n.style,
        u = l === void 0 ? {} : l,
        d = ps(n, Es);
    if (i && i.id && (i.type === `linear` || i.type === `radial`)) {
        var f = i.type,
            p = i.stops,
            m = p === void 0 ? [] : p,
            h = i.id,
            g = ps(i, Ds),
            _ = T(f === `linear` ? `linearGradient` : `radialGradient`, $($({}, g), {}, {
                id: h
            }), m.map(As));
        return T(o.tag, $($($($({}, a), {}, {
            class: c.class,
            style: $($({}, c.style), u)
        }, c.attrs), d), {}, {
            fill: `url(#${h})`
        }), [_].concat(hs(s)))
    }
    return T(e.tag, $($($({}, a), {}, {
        class: c.class,
        style: $($({}, c.style), u)
    }, c.attrs), d), s)
}
var Ns = !1;
try {
    Ns = !0
} catch {}

function Ps() {
    if (!Ns && console && typeof console.error == `function`) {
        var e;
        (e = console).error.apply(e, arguments)
    }
}

function Fs(e) {
    if (e && vs(e) === `object` && e.prefix && e.iconName && e.icon) return e;
    if (as.icon) return as.icon(e);
    if (e === null) return null;
    if (vs(e) === `object` && e.prefix && e.iconName) return e;
    if (Array.isArray(e) && e.length === 2) return {
        prefix: e[0],
        iconName: e[1]
    };
    if (typeof e == `string`) return {
        prefix: `fas`,
        iconName: e
    }
}
var Is = w({
    name: `FontAwesomeIcon`,
    props: {
        border: {
            type: Boolean,
            default: !1
        },
        fixedWidth: {
            type: Boolean,
            default: !1
        },
        flip: {
            type: [Boolean, String],
            default: !1,
            validator: function(e) {
                return [!0, !1, `horizontal`, `vertical`, `both`].indexOf(e) > -1
            }
        },
        icon: {
            type: [Object, Array, String],
            required: !0
        },
        mask: {
            type: [Object, Array, String],
            default: null
        },
        maskId: {
            type: String,
            default: null
        },
        listItem: {
            type: Boolean,
            default: !1
        },
        pull: {
            type: String,
            default: null,
            validator: function(e) {
                return [`right`, `left`].indexOf(e) > -1
            }
        },
        pulse: {
            type: Boolean,
            default: !1
        },
        rotation: {
            type: [String, Number],
            default: null,
            validator: function(e) {
                return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1
            }
        },
        rotateBy: {
            type: Boolean,
            default: !1
        },
        swapOpacity: {
            type: Boolean,
            default: !1
        },
        size: {
            type: String,
            default: null,
            validator: function(e) {
                return [`2xs`, `xs`, `sm`, `lg`, `xl`, `2xl`, `1x`, `2x`, `3x`, `4x`, `5x`, `6x`, `7x`, `8x`, `9x`, `10x`].indexOf(e) > -1
            }
        },
        spin: {
            type: Boolean,
            default: !1
        },
        transform: {
            type: [String, Object],
            default: null
        },
        symbol: {
            type: [Boolean, String],
            default: !1
        },
        title: {
            type: String,
            default: null
        },
        titleId: {
            type: String,
            default: null
        },
        inverse: {
            type: Boolean,
            default: !1
        },
        bounce: {
            type: Boolean,
            default: !1
        },
        shake: {
            type: Boolean,
            default: !1
        },
        beat: {
            type: Boolean,
            default: !1
        },
        fade: {
            type: Boolean,
            default: !1
        },
        beatFade: {
            type: Boolean,
            default: !1
        },
        flash: {
            type: Boolean,
            default: !1
        },
        spinPulse: {
            type: Boolean,
            default: !1
        },
        spinReverse: {
            type: Boolean,
            default: !1
        },
        widthAuto: {
            type: Boolean,
            default: !1
        },
        gradientFill: {
            type: Object,
            default: null,
            validator: function(e) {
                return typeof e.id != `string` || !e.id ? (console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`), !1) : e.type !== `linear` && e.type !== `radial` ? (console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`), !1) : !0
            }
        }
    },
    setup: function(e, t) {
        var r = t.attrs,
            i = u(function() {
                return Fs(e.icon)
            }),
            a = u(function() {
                return bs(`classes`, xs(e))
            }),
            o = u(function() {
                return bs(`transform`, typeof e.transform == `string` ? as.transform(e.transform) : e.transform)
            }),
            s = u(function() {
                return bs(`mask`, Fs(e.mask))
            }),
            c = u(function() {
                var t = $($($($({}, a.value), o.value), s.value), {}, {
                    symbol: e.symbol,
                    maskId: e.maskId
                });
                return t.title = e.title, t.titleId = e.titleId, os(i.value, t)
            });
        n(c, function(e) {
            if (!e) return Ps(`Could not find one or more icon(s)`, i.value, s.value)
        }, {
            immediate: !0
        }), e.gradientFill && e.symbol && Ps(`gradientFill is not supported when symbol is true and will be ignored`);
        var l = u(function() {
            return c.value ? Ms(c.value.abstract[0], {
                gradientFill: e.symbol ? null : e.gradientFill
            }, r) : null
        });
        return function() {
            return l.value
        }
    }
});
w({
    name: `FontAwesomeLayers`,
    props: {
        fixedWidth: {
            type: Boolean,
            default: !1
        }
    },
    setup: function(e, t) {
        var n = t.slots,
            r = is.familyPrefix,
            i = u(function() {
                return [`${r}-layers`].concat(hs(e.fixedWidth ? [`${r}-fw`] : []))
            });
        return function() {
            return T(`div`, {
                class: i.value
            }, n.default ? n.default() : [])
        }
    }
}), w({
    name: `FontAwesomeLayersText`,
    props: {
        value: {
            type: [String, Number],
            default: ``
        },
        transform: {
            type: [String, Object],
            default: null
        },
        counter: {
            type: Boolean,
            default: !1
        },
        position: {
            type: String,
            default: null,
            validator: function(e) {
                return [`bottom-left`, `bottom-right`, `top-left`, `top-right`].indexOf(e) > -1
            }
        }
    },
    setup: function(e, t) {
        var n = t.attrs,
            r = is.familyPrefix,
            i = u(function() {
                return bs(`classes`, [].concat(hs(e.counter ? [`${r}-layers-counter`] : []), hs(e.position ? [`${r}-layers-${e.position}`] : [])))
            }),
            a = u(function() {
                return bs(`transform`, typeof e.transform == `string` ? as.transform(e.transform) : e.transform)
            }),
            o = u(function() {
                var t = ss(e.value.toString(), $($({}, a.value), i.value)).abstract;
                return e.counter && (t[0].attributes.class = t[0].attributes.class.replace(`fa-layers-text`, ``)), t[0]
            }),
            s = u(function() {
                return Ms(o.value, {}, n)
            });
        return function() {
            return s.value
        }
    }
});
var Ls = w({
        __name: `UIcon`,
        props: {
            name: {},
            class: {}
        },
        setup(t) {
            let n = t,
                r = u(() => n.class ? ? ``),
                i = u(() => typeof n.name == `string` ? n.name.replace(/^i-/, ``) : ``);
            return (t, a) => typeof n.name == `string` ? (l(), e(S(rn), {
                key: 0,
                icon: i.value,
                class: v(r.value)
            }, null, 8, [`icon`, `class`])) : (l(), e(S(Is), {
                key: 1,
                class: v(r.value),
                icon: n.name
            }, null, 8, [`class`, `icon`]))
        }
    }),
    Rs = Symbol(`nuxt-ui.avatar-group`);

function zs(e) {
    let t = x(Rs, void 0),
        n = u(() => e.size ? ? t ? .value.size),
        r = u(() => e.color ? ? t ? .value.color);
    return d(Rs, u(() => ({
        size: n.value,
        color: r.value
    }))), {
        size: n,
        color: r
    }
}
var Bs = {
        slots: {
            root: `relative inline-flex items-center justify-center shrink-0`,
            base: `rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap`
        },
        variants: {
            color: {
                primary: `bg-primary`,
                secondary: `bg-secondary`,
                success: `bg-success`,
                info: `bg-info`,
                warning: `bg-warning`,
                error: `bg-error`,
                neutral: `bg-inverted`
            },
            size: {
                "3xs": `h-[4px] min-w-[4px] text-[4px]`,
                "2xs": `h-[5px] min-w-[5px] text-[5px]`,
                xs: `h-[6px] min-w-[6px] text-[6px]`,
                sm: `h-[7px] min-w-[7px] text-[7px]`,
                md: `h-[8px] min-w-[8px] text-[8px]`,
                lg: `h-[9px] min-w-[9px] text-[9px]`,
                xl: `h-[10px] min-w-[10px] text-[10px]`,
                "2xl": `h-[11px] min-w-[11px] text-[11px]`,
                "3xl": `h-[12px] min-w-[12px] text-[12px]`
            },
            position: {
                "top-right": `top-0 right-0`,
                "bottom-right": `bottom-0 right-0`,
                "top-left": `top-0 left-0`,
                "bottom-left": `bottom-0 left-0`
            },
            inset: {
                false: ``
            },
            standalone: {
                false: `absolute`
            }
        },
        compoundVariants: [{
            position: `top-right`,
            inset: !1,
            class: `-translate-y-1/2 translate-x-1/2 transform`
        }, {
            position: `bottom-right`,
            inset: !1,
            class: `translate-y-1/2 translate-x-1/2 transform`
        }, {
            position: `top-left`,
            inset: !1,
            class: `-translate-y-1/2 -translate-x-1/2 transform`
        }, {
            position: `bottom-left`,
            inset: !1,
            class: `translate-y-1/2 -translate-x-1/2 transform`
        }],
        defaultVariants: {
            size: `md`,
            color: `primary`,
            position: `top-right`
        }
    },
    Vs = Object.assign({
        inheritAttrs: !1
    }, {
        __name: `Chip`,
        props: s({
            as: {
                type: null,
                required: !1
            },
            text: {
                type: [String, Number],
                required: !1
            },
            color: {
                type: null,
                required: !1
            },
            size: {
                type: null,
                required: !1
            },
            position: {
                type: null,
                required: !1
            },
            inset: {
                type: Boolean,
                required: !1,
                default: !1
            },
            standalone: {
                type: Boolean,
                required: !1,
                default: !1
            },
            class: {
                type: null, required: !1
            },
            ui: {
                type: Object,
                required: !1
            }
        }, {
            show: {
                type: Boolean,
                default: !0
            },
            showModifiers: {}
        }),
        emits: [`update:show`],
        setup(t) {
            let n = t,
                r = ge(`chip`, n),
                i = y(t, `show`, {
                    type: Boolean,
                    default: !0
                }),
                {
                    size: a
                } = zs(n),
                s = ye(),
                c = u(() => ve({
                    extend: Bs,
                    ...s.ui ? .chip || {}
                })({
                    color: r.color,
                    size: a.value ? ? r.size,
                    position: r.position,
                    inset: r.inset,
                    standalone: r.standalone
                }));
            return (t, n) => (l(), e(S(pe), {
                as: S(r).as,
                "data-slot": t.$attrs[`data-slot`] ? ? `root`,
                class: v(c.value.root({
                    class: [S(r).ui ? .root, S(r).class]
                }))
            }, {
                default: o(() => [g(S(_e), re(m({ ...t.$attrs,
                    "data-slot": void 0
                })), {
                    default: o(() => [C(t.$slots, `default`)]),
                    _: 3
                }, 16), i.value ? (l(), se(`span`, {
                    key: 0,
                    "data-slot": `base`,
                    class: v(c.value.base({
                        class: S(r).ui ? .base
                    }))
                }, [C(t.$slots, `content`, {}, () => [oe(ee(S(r).text), 1)])], 2)) : _(``, !0)]),
                _: 3
            }, 8, [`as`, `data-slot`, `class`]))
        }
    }),
    Hs = {
        slots: {
            root: `inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle`,
            image: `h-full w-full rounded-[inherit] object-cover`,
            fallback: `font-medium truncate`,
            icon: `shrink-0`
        },
        variants: {
            color: {
                primary: {
                    root: `bg-primary/10`,
                    fallback: `text-primary`,
                    icon: `text-primary`
                },
                secondary: {
                    root: `bg-secondary/10`,
                    fallback: `text-secondary`,
                    icon: `text-secondary`
                },
                success: {
                    root: `bg-success/10`,
                    fallback: `text-success`,
                    icon: `text-success`
                },
                info: {
                    root: `bg-info/10`,
                    fallback: `text-info`,
                    icon: `text-info`
                },
                warning: {
                    root: `bg-warning/10`,
                    fallback: `text-warning`,
                    icon: `text-warning`
                },
                error: {
                    root: `bg-error/10`,
                    fallback: `text-error`,
                    icon: `text-error`
                },
                neutral: {
                    root: `bg-elevated`,
                    fallback: `text-muted`,
                    icon: `text-muted`
                }
            },
            size: {
                "3xs": {
                    root: `size-4 text-[8px]`
                },
                "2xs": {
                    root: `size-5 text-[10px]`
                },
                xs: {
                    root: `size-6 text-xs`
                },
                sm: {
                    root: `size-7 text-sm`
                },
                md: {
                    root: `size-8 text-base`
                },
                lg: {
                    root: `size-9 text-lg`
                },
                xl: {
                    root: `size-10 text-xl`
                },
                "2xl": {
                    root: `size-11 text-[22px]`
                },
                "3xl": {
                    root: `size-12 text-2xl`
                }
            }
        },
        defaultVariants: {
            size: `md`,
            color: `neutral`
        }
    },
    Us = Object.assign({
        inheritAttrs: !1
    }, {
        __name: `Avatar`,
        props: {
            as: {
                type: null,
                required: !1
            },
            src: {
                type: String,
                required: !1
            },
            alt: {
                type: String,
                required: !1
            },
            icon: {
                type: null,
                required: !1
            },
            text: {
                type: String,
                required: !1
            },
            size: {
                type: null,
                required: !1
            },
            color: {
                type: null,
                required: !1
            },
            chip: {
                type: [Boolean, Object],
                required: !1
            },
            class: {
                type: null, required: !1
            },
            style: {
                type: null,
                required: !1
            },
            ui: {
                type: Object,
                required: !1
            }
        },
        setup(i) {
            let a = i,
                s = ge(`avatar`, a),
                c = u(() => typeof s.as == `string` || typeof s.as ? .render == `function` ? {
                    root: s.as
                } : me(s.as, {
                    root: `span`
                })),
                d = u(() => s.text || (s.alt || ``).split(` `).map(e => e.charAt(0)).join(``).substring(0, 2)),
                p = ye(),
                {
                    size: m,
                    color: h
                } = zs(a),
                g = u(() => ve({
                    extend: Hs,
                    ...p.ui ? .avatar || {}
                })({
                    size: m.value ? ? s.size,
                    color: h.value ? ? s.color
                })),
                _ = u(() => g.value.root({
                    class: [s.ui ? .root, s.class]
                })),
                y = u(() => {
                    let e = (_.value || ``).split(` `).find(e => /^size-\d+$/.test(e));
                    if (e) {
                        let t = Number.parseFloat(e.split(`-`)[1] ? ? ``);
                        if (!Number.isNaN(t)) return t * 4
                    }
                    return null
                }),
                b = t(!1);
            n(() => s.src, () => {
                b.value && = !1
            });

            function te() {
                b.value = !0
            }
            return (t, n) => (l(), e(f(S(s).chip ? Vs : S(pe)), r({
                as: c.value.root
            }, S(s).chip ? typeof S(s).chip == `object` ? {
                inset: !0,
                ...S(s).chip
            } : {
                inset: !0
            } : {}, {
                "data-slot": t.$attrs[`data-slot`] ? ? `root`,
                class: _.value,
                style: S(s).style
            }), {
                default: o(() => [S(s).src && !b.value ? (l(), e(f(c.value.img || S(`img`)), r({
                    key: 0,
                    src: S(s).src,
                    alt: S(s).alt,
                    width: y.value,
                    height: y.value
                }, t.$attrs, {
                    "data-slot": `image`,
                    class: g.value.image({
                        class: S(s).ui ? .image
                    }),
                    onError: te
                }), null, 16, [`src`, `alt`, `width`, `height`, `class`])) : (l(), e(S(_e), re(r({
                    key: 1
                }, { ...t.$attrs,
                    "data-slot": void 0
                })), {
                    default: o(() => [C(t.$slots, `default`, {}, () => [S(s).icon ? (l(), e(Ls, {
                        key: 0,
                        name: S(s).icon,
                        "data-slot": `icon`,
                        class: v(g.value.icon({
                            class: S(s).ui ? .icon
                        }))
                    }, null, 8, [`name`, `class`])) : (l(), se(`span`, {
                        key: 1,
                        "data-slot": `fallback`,
                        class: v(g.value.fallback({
                            class: S(s).ui ? .fallback
                        }))
                    }, ee(d.value || `\xA0`), 3))])]),
                    _: 3
                }, 16))]),
                _: 3
            }, 16, [`as`, `data-slot`, `class`, `style`]))
        }
    });

function Ws(e) {
    let t = ye(),
        n = u(() => ae(e)),
        r = u(() => n.value.icon && n.value.leading || n.value.icon && !n.value.trailing || n.value.loading && !n.value.trailing || !!n.value.leadingIcon);
    return {
        isLeading: r,
        isTrailing: u(() => n.value.icon && n.value.trailing || n.value.loading && n.value.trailing || !!n.value.trailingIcon && n.value.trailing !== !1),
        leadingIconName: u(() => n.value.loading ? n.value.loadingIcon || t.ui.icons.loading : n.value.leadingIcon || n.value.icon),
        trailingIconName: u(() => n.value.loading && !r.value ? n.value.loadingIcon || t.ui.icons.loading : n.value.trailingIcon || n.value.icon)
    }
}
var Gs = Symbol(`nuxt-ui.field-group`);

function Ks(e) {
    let t = x(Gs, void 0);
    return {
        orientation: u(() => t ? .value.orientation),
        size: u(() => e ? .size ? ? t ? .value.size)
    }
}
var qs = w({
        name: `FieldGroupReset`,
        setup(e, {
            slots: t
        }) {
            return d(Gs, u(() => ({
                size: void 0,
                orientation: void 0
            }))), () => t.default ? .()
        }
    }),
    Js = Symbol(`nuxt-ui.form-options`),
    Ys = Symbol(`nuxt-ui.form-events`),
    Xs = Symbol(`nuxt-ui.form-state`),
    Zs = Symbol(`nuxt-ui.form-field`),
    Qs = Symbol(`nuxt-ui.input-id`),
    $s = Symbol(`nuxt-ui.form-inputs`),
    ec = Symbol(`nuxt-ui.form-loading`),
    tc = Symbol(`nuxt-ui.form-errors`);

function nc(e, t) {
    let n = x(Js, void 0),
        r = x(Ys, void 0),
        i = x(Zs, void 0),
        a = x(Qs, void 0);
    d(Zs, void 0), i && a && (t ? .bind === !1 ? a.value = void 0 : e ? .id && (a.value = e ? .id));

    function o(e, t, n) {
        r && i && t && r.emit({
            type: e,
            name: t,
            eager: n
        })
    }

    function s() {
        o(`blur`, i ? .value.name)
    }

    function c() {
        o(`focus`, i ? .value.name)
    }

    function l() {
        o(`change`, i ? .value.name)
    }
    let f = de(() => {
        o(`input`, i ? .value.name, !t ? .deferInputValidation || i ? .value.eagerValidation)
    }, i ? .value.validateOnInputDelay ? ? n ? .value.validateOnInputDelay ? ? 0);
    return {
        id: u(() => e ? .id ? ? a ? .value),
        name: u(() => e ? .name ? ? i ? .value.name),
        size: u(() => e ? .size ? ? i ? .value.size),
        color: u(() => i ? .value.error ? `error` : e ? .color),
        highlight: u(() => i ? .value.error ? !0 : e ? .highlight),
        disabled: u(() => n ? .value.disabled || e ? .disabled),
        emitFormBlur: s,
        emitFormInput: f,
        emitFormChange: l,
        emitFormFocus: c,
        ariaAttrs: u(() => {
            if (!i ? .value) return;
            let e = [`error`, `hint`, `description`, `help`].filter(e => i ? .value ? .[e]).map(e => `${i?.value.ariaId}-${e}`) || [],
                t = {
                    "aria-invalid": !!i ? .value.error
                };
            return e.length > 0 && (t[`aria-describedby`] = e.join(` `)), t
        })
    }
}
var rc = `active.activeClass.ariaCurrentValue.as.disabled.download.exact.exactActiveClass.exactHash.exactQuery.external.form.formaction.formenctype.formmethod.formnovalidate.formtarget.href.hreflang.inactiveClass.locale.media.noPrefetch.noRel.onClick.ping.prefetch.prefetchOn.prefetchedClass.referrerpolicy.rel.replace.target.title.to.trailingSlash.type.viewTransition`.split(`.`);

function ic(e) {
    let t = Object.keys(e),
        n = t.filter(e => e.startsWith(`aria-`)),
        r = t.filter(e => e.startsWith(`data-`)),
        i = [...rc, ...n, ...r];
    return ue(e, ...i)
}
var ac = Object.assign({
        inheritAttrs: !1
    }, {
        __name: `LinkBase`,
        props: {
            as: {
                type: String,
                required: !1,
                default: `button`
            },
            type: {
                type: String,
                required: !1,
                default: `button`
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            onClick: {
                type: [Function, Array],
                required: !1
            },
            href: {
                type: String,
                required: !1
            },
            target: {
                type: [String, Object, null],
                required: !1
            },
            rel: {
                type: [String, Object, null],
                required: !1
            },
            active: {
                type: Boolean,
                required: !1
            },
            isExternal: {
                type: Boolean,
                required: !1
            }
        },
        setup(t) {
            let n = t;

            function i(e) {
                if (n.disabled) {
                    e.stopPropagation(), e.preventDefault();
                    return
                }
                if (n.onClick)
                    for (let t of Array.isArray(n.onClick) ? n.onClick : [n.onClick]) t(e)
            }
            return (n, a) => t.href && !t.isExternal && !t.disabled ? (l(), e(S(te), r({
                key: 0,
                href: t.href
            }, {
                rel: t.rel,
                target: t.target,
                ...n.$attrs
            }, {
                onClick: i
            }), {
                default: o(() => [C(n.$slots, `default`)]),
                _: 3
            }, 16, [`href`])) : (l(), e(S(pe), r({
                key: 1
            }, t.href ? {
                as: `a`,
                href: t.disabled ? void 0 : t.href,
                "aria-disabled": t.disabled ? `true` : void 0,
                role: t.disabled ? `link` : void 0,
                tabindex: t.disabled ? -1 : void 0,
                rel: t.rel,
                target: t.target,
                ...n.$attrs
            } : t.as === `button` ? {
                as: t.as,
                type: t.type,
                disabled: t.disabled,
                ...n.$attrs
            } : {
                as: t.as,
                ...n.$attrs
            }, {
                onClick: i
            }), {
                default: o(() => [C(n.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    oc = {
        base: `outline-primary/25 focus-visible:outline-3 rounded-md`,
        variants: {
            active: {
                true: `text-primary`,
                false: `text-muted`
            },
            disabled: {
                true: `cursor-not-allowed opacity-75`
            }
        },
        compoundVariants: [{
            active: !1,
            disabled: !1,
            class: [`hover:text-default`, `transition-colors`]
        }]
    },
    sc = Object.assign({
        inheritAttrs: !1
    }, {
        __name: `Link`,
        props: {
            as: {
                type: null,
                required: !1,
                default: `button`
            },
            activeClass: {
                type: String,
                required: !1
            },
            to: {
                type: String,
                required: !1
            },
            href: {
                type: String,
                required: !1
            },
            external: {
                type: Boolean,
                required: !1
            },
            target: {
                type: [String, Object, null],
                required: !1
            },
            rel: {
                type: [String, Object, null],
                required: !1
            },
            noRel: {
                type: Boolean,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                required: !1,
                default: `page`
            },
            type: {
                type: null,
                required: !1,
                default: `button`
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            active: {
                type: Boolean,
                required: !1,
                default: void 0
            },
            exact: {
                type: Boolean,
                required: !1
            },
            inactiveClass: {
                type: String,
                required: !1
            },
            custom: {
                type: Boolean,
                required: !1
            },
            raw: {
                type: Boolean,
                required: !1
            },
            class: {
                type: null, required: !1
            },
            component: {
                type: [String, null],
                required: !1
            },
            data: {
                type: null,
                required: !1
            },
            method: {
                type: String,
                required: !1
            },
            replace: {
                type: Boolean,
                required: !1
            },
            preserveScroll: {
                type: [Boolean, String, Function],
                required: !1
            },
            preserveState: {
                type: [Boolean, String, Function],
                required: !1
            },
            preserveUrl: {
                type: Boolean,
                required: !1
            },
            only: {
                type: Array,
                required: !1
            },
            except: {
                type: Array,
                required: !1
            },
            headers: {
                type: Object,
                required: !1
            },
            queryStringArrayFormat: {
                type: String,
                required: !1
            },
            async: {
                type: Boolean,
                required: !1
            },
            viewTransition: {
                type: [Boolean, Function],
                required: !1
            },
            onCancelToken: {
                type: Function,
                required: !1
            },
            onBefore: {
                type: Function,
                required: !1
            },
            onBeforeUpdate: {
                type: Function,
                required: !1
            },
            onStart: {
                type: Function,
                required: !1
            },
            onProgress: {
                type: Function,
                required: !1
            },
            onFinish: {
                type: Function,
                required: !1
            },
            onCancel: {
                type: Function,
                required: !1
            },
            onSuccess: {
                type: Function,
                required: !1
            },
            onError: {
                type: Function,
                required: !1
            },
            onHttpException: {
                type: Function,
                required: !1
            },
            onNetworkError: {
                type: Function,
                required: !1
            },
            onFlash: {
                type: Function,
                required: !1
            },
            onPrefetched: {
                type: Function,
                required: !1
            },
            onPrefetching: {
                type: Function,
                required: !1
            },
            instant: {
                type: Boolean,
                required: !1
            },
            pageProps: {
                type: [Object, Function, null],
                required: !1
            },
            prefetch: {
                type: [Boolean, String, Array],
                required: !1
            },
            cacheFor: {
                type: null,
                required: !1
            },
            cacheTags: {
                type: [String, Array],
                required: !1
            }
        },
        setup(t) {
            let n = t,
                i = h(),
                a = ye(),
                s = un(fe(n, `as`, `type`, `disabled`, `active`, `exact`, `activeClass`, `inactiveClass`, `to`, `href`, `raw`, `custom`, `class`, `target`, `rel`, `noRel`)),
                c = u(() => ve({
                    extend: oc,
                    ...me({
                        variants: {
                            active: {
                                true: he(a.ui ? .link ? .variants ? .active ? .true, n.activeClass),
                                false: he(a.ui ? .link ? .variants ? .active ? .false, n.inactiveClass)
                            }
                        }
                    }, a.ui ? .link || {})
                })),
                d = u(() => n.to ? ? n.href),
                f = u(() => n.target === `_blank` || n.external ? !0 : d.value ? typeof d.value == `string` && cn(d.value, {
                    acceptRelative: !0
                }) : !1),
                p = u(() => !!n.target && n.target !== `_self`),
                g = u(() => n.noRel ? null : n.rel === void 0 ? f.value || p.value ? `noopener noreferrer` : null : n.rel || null),
                _ = u(() => n.active === void 0 ? d.value ? !!(n.exact && i.url === d.value || !n.exact && i.url.startsWith(d.value)) : !1 : n.active),
                v = u(() => {
                    let e = _.value;
                    return n.raw ? [n.class, e ? n.activeClass : n.inactiveClass] : c.value({
                        class: n.class,
                        active: e,
                        disabled: n.disabled
                    })
                });
            return (n, i) => t.custom ? (l(), e(S(_e), {
                key: 0
            }, {
                default: o(() => [C(n.$slots, `default`, re(m({ ...n.$attrs,
                    ...S(s),
                    as: t.as,
                    type: t.type,
                    disabled: t.disabled,
                    href: d.value,
                    rel: g.value,
                    target: t.target,
                    active: _.value,
                    isExternal: f.value
                })))]),
                _: 3
            })) : (l(), e(ac, r({
                key: 1
            }, { ...n.$attrs,
                ...S(s),
                as: t.as,
                type: t.type,
                disabled: t.disabled,
                href: d.value,
                rel: g.value,
                target: t.target,
                isExternal: f.value
            }, {
                class: v.value
            }), {
                default: o(() => [C(n.$slots, `default`, {
                    active: _.value
                })]),
                _: 3
            }, 16, [`class`]))
        }
    });
export {
    ln as C, un as S, Us as _, tc as a, is as b, ec as c, Qs as d, nc as f, Ws as g, Ks as h, Ys as i, Js as l, Gs as m, ac as n, Zs as o, qs as p, ic as r, $s as s, sc as t, Xs as u, Vs as v, Ve as w, dn as x, Ls as y
};