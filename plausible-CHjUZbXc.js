var e, t, n, r = {};

function i(e) {
    return Object.assign(e, {
        autoCapturePageviews: !1 !== e.autoCapturePageviews,
        logging: !1 !== e.logging,
        bindToWindow: !1 !== e.bindToWindow
    })
}

function a(e) {
    if (r.isInitialized) throw Error(`plausible.init() can only be called once`);
    if (!e || !e.domain) throw Error(`plausible.init(): domain argument is required`);
    e.endpoint || = `https://plausible.io/api/event`, Object.assign(r, e), r.isInitialized = !0
}

function o(e, t, n) {
    window.fetch && fetch(e, {
        method: `POST`,
        headers: {
            "Content-Type": `text/plain`
        },
        keepalive: !0,
        body: JSON.stringify(t)
    }).then(function(e) {
        n && n.callback && n.callback({
            status: e.status
        })
    }).catch(function(e) {
        n && n.callback && n.callback({
            error: e
        })
    })
}
var s = !1,
    c = location.href,
    l = {},
    u = -1,
    d = 0,
    f = 0;

function p() {
    s && (g(), t = b(), n = x())
}

function m(t) {
    e = !1, c = t.u, l = t.p, u = -1, f = 0, d = Date.now(), v()
}

function h() {
    e = !0
}

function g() {
    var i = y();
    if (!e && (u < n || i >= 3e3)) {
        u = n;
        var a = {
            n: `engagement`,
            sd: Math.round(n / t * 100),
            d: r.domain,
            u: c,
            p: l,
            e: i,
            v: 33
        };
        d = 0, f = 0, r.hashBasedRouting && (a.h = 1), o(r.endpoint, a)
    }
}

function _() {
    document.visibilityState === `visible` && document.hasFocus() && d === 0 ? d = Date.now() : document.visibilityState !== `hidden` && document.hasFocus() || (f = y(), d = 0, g())
}

function v() {
    s || = (document.addEventListener(`visibilitychange`, _), window.addEventListener(`blur`, _), window.addEventListener(`focus`, _), !0)
}

function y() {
    return d ? f + (Date.now() - d) : f
}

function b() {
    var e = document.body || {},
        t = document.documentElement || {};
    return Math.max(e.scrollHeight || 0, e.offsetHeight || 0, e.clientHeight || 0, t.scrollHeight || 0, t.offsetHeight || 0, t.clientHeight || 0)
}

function x() {
    var e = document.body || {},
        n = document.documentElement || {},
        r = window.innerHeight || n.clientHeight || 0,
        i = window.scrollY || n.scrollTop || e.scrollTop || 0;
    return t <= r ? t : i + r
}

function S() {
    t = b(), n = x(), window.addEventListener(`load`, function() {
        t = b();
        var e = 0,
            n = setInterval(function() {
                t = b(), ++e == 15 && clearInterval(n)
            }, 200)
    }), document.addEventListener(`scroll`, function() {
        t = b();
        var e = x();
        e > n && (n = e)
    })
}

function C(e, t) {
    if (!r.isInitialized) throw Error(`plausible.track() can only be called after plausible.init()`);
    var n, i = e === `pageview`;
    if (i && p(), !r.captureOnLocalhost) {
        if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(location.hostname) || location.protocol === `file:`) return w(e, t, `localhost`);
        if ((window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) && !window.__plausible) return w(e, t)
    }
    try {
        if (window.localStorage.plausible_ignore === `true`) return w(e, t, `localStorage flag`)
    } catch {}
    var a = {};
    a.n = e, a.v = 33;
    var s = t && (t.u || t.url);
    if (a.u = s || location.href, a.d = r.domain, a.r = document.referrer || null, t && t.props && (a.p = t.props), t && !1 === t.interactive && (a.i = !1), t && t.revenue && (a.$ = t.revenue), r.customProperties) {
        var n = r.customProperties;
        typeof n == `function` && (n = r.customProperties(e)), typeof n == `object` && (a.p = Object.assign({}, n, a.p))
    }
    if (r.hashBasedRouting && (a.h = 1), typeof r.transformRequest == `function` && !(a = r.transformRequest(a))) return w(e, t, `transformRequest`);
    i && m(a), o(r.endpoint, a, t)
}

function w(e, t, n) {
    n && r.logging && console.warn(`Ignoring Event: ` + n), t && t.callback && t.callback(), e === `pageview` && h()
}
var T = `pdf.xlsx.docx.txt.rtf.csv.exe.key.pps.ppt.pptx.7z.pkg.rar.gz.zip.avi.mov.mp4.mpeg.wmv.midi.mp3.wav.wma.dmg`.split(`.`),
    E = 1,
    D = 3,
    O = T;

function k(e) {
    for (; e && (e.tagName === void 0 || !A(e) || !e.href);) e = e.parentNode;
    return e
}

function A(e) {
    return e && e.tagName && e.tagName.toLowerCase() === `a`
}

function j(e) {
    if (e.type !== `auxclick` || e.button === E) {
        var t = k(e.target),
            n = t && typeof t.href == `string` && t.href.split(`?`)[0];
        if (!I(t, 0)) {
            if (r.outboundLinks && N(t)) return M(e, t, {
                name: `Outbound Link: Click`,
                props: {
                    url: t.href
                }
            });
            if (r.fileDownloads && P(n)) return M(e, t, {
                name: `File Download`,
                props: {
                    url: n
                }
            })
        }
    }
}

function M(e, t, n) {
    var r;
    (r = {
        props: n.props
    }).revenue = n.revenue, C(n.name, r)
}

function N(e) {
    return e && typeof e.href == `string` && e.host && e.host !== location.host
}

function P(e) {
    if (!e) return !1;
    var t = e.split(`.`).pop();
    return O.some(function(e) {
        return e === t
    })
}

function F(e) {
    var t = e && e.classList;
    if (t) {
        for (var n = 0; n < t.length; n++)
            if (t.item(n).match(/plausible-event-name(=|--)(.+)/)) return !0
    }
    return !1
}

function I(e, t) {
    return !!e && !(t > D) && (!!F(e) || I(e.parentNode, t + 1))
}

function L(e) {
    var t = F(e) ? e : e && e.parentNode,
        n = {
            name: null,
            props: {}
        };
    n.revenue = {};
    var r = t && t.classList;
    if (!r) return n;
    for (var i = 0; i < r.length; i++) {
        var a, o, s = r.item(i),
            c = s.match(/plausible-event-(.+)(=|--)(.+)/);
        c && (a = c[1], o = c[3].replace(/\+/g, ` `), a.toLowerCase() == `name` ? n.name = o : n.props[a] = o);
        var l = s.match(/plausible-revenue-(.+)(=|--)(.+)/);
        l && (a = l[1], o = l[3], n.revenue[a] = o)
    }
    return n
}

function R() {
    function e(e) {
        if (e.type !== `auxclick` || e.button === E) {
            for (var t, n, r, i = e.target, a = 0; a <= D && i; a++) {
                if ((t = i) && t.tagName && t.tagName.toLowerCase() === `form`) return;
                A(i) && (n = i), F(i) && (r = i), i = i.parentNode
            }
            if (r) {
                var o = L(r);
                if (n) o.props.url = n.href, M(e, n, o);
                else {
                    var s = {};
                    s.props = o.props, s.revenue = o.revenue, C(o.name, s)
                }
            }
        }
    }
    document.addEventListener(`click`, j), document.addEventListener(`auxclick`, j), r.fileDownloads && typeof r.fileDownloads == `object` && Array.isArray(r.fileDownloads.fileExtensions) && (O = r.fileDownloads.fileExtensions), r.formSubmissions && document.addEventListener(`submit`, function(e) {
        (e.target.hasAttribute(`novalidate`) || e.target.checkValidity()) && (I(e.target, 0) || C(`Form: Submission`))
    }, !0), document.addEventListener(`submit`, function(e) {
        var t, n = L(e.target);
        n.name && ((t = {
            props: n.props
        }).revenue = n.revenue, C(n.name, t))
    }), document.addEventListener(`click`, e), document.addEventListener(`auxclick`, e)
}

function z(e) {
    function t(t) {
        (r.hashBasedRouting || !t || n !== location.pathname) && (n = location.pathname, e(`pageview`))
    }
    var n, i = function() {
        t(!0)
    };
    if (r.hashBasedRouting) window.addEventListener(`hashchange`, i);
    else {
        var a = window.history;
        if (a.pushState) {
            var o = a.pushState;
            a.pushState = function() {
                o.apply(this, arguments), i()
            }, window.addEventListener(`popstate`, i)
        }
    }
    document.visibilityState === `hidden` || document.visibilityState === `prerender` ? document.addEventListener(`visibilitychange`, function() {
        n || document.visibilityState !== `visible` || t()
    }) : t(), window.addEventListener(`pageshow`, function(e) {
        e.persisted && t()
    })
}

function B(e) {
    a(i(e || {})), S(), r.autoCapturePageviews && z(C), R(), r.bindToWindow && typeof window < `u` && (window.plausible = C, window.plausible.s = `npm`, window.plausible.v = 33, window.plausible.l = !0)
}
export {
    B as init, C as track
};