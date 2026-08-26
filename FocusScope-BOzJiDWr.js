import {
    $ as e,
    $n as t,
    Cn as n,
    It as r,
    On as i,
    Yt as a,
    Z as o,
    Zn as s,
    lr as c,
    nn as l,
    qt as u,
    ut as d,
    wn as f
} from "./dist-DAh4MArN.js";
import {
    O as p,
    a as m,
    f as h,
    m as g,
    s as _
} from "./dist-CVWdmVRe.js";
import {
    h as v,
    s as y
} from "./dist-BnMQmsWl.js";
import {
    a as b,
    b as x
} from "./tv-Dcq2oBvx.js";
import {
    t as S
} from "./getActiveElement-DWEoD8ZB.js";
import {
    r as C
} from "./VisuallyHidden-BsMHQhx3.js";
import {
    t as w
} from "./useForwardExpose-BkJ4ptaU.js";
var T = _(() => {
    let e = t(new Map),
        i = t(),
        a = o(() => {
            for (let t of e.value.values())
                if (t) return !0;
            return !1
        }),
        s = C({
            scrollBody: t(!0)
        }),
        c = null,
        l = () => {
            document.body.style.paddingRight = ``, document.body.style.marginRight = ``, document.body.style.pointerEvents = ``, document.documentElement.style.removeProperty(`--scrollbar-width`), document.body.style.overflow = i.value ? ? ``, g && c ? .(), i.value = void 0
        };
    return n(a, (e, t) => {
        if (!h) return;
        if (!e) {
            t && l();
            return
        }
        i.value === void 0 && (i.value = document.body.style.overflow);
        let n = window.innerWidth - document.documentElement.clientWidth,
            o = {
                padding: n,
                margin: 0
            },
            u = s.scrollBody ? .value ? typeof s.scrollBody.value == `object` ? x({
                padding: s.scrollBody.value.padding === !0 ? n : s.scrollBody.value.padding,
                margin: s.scrollBody.value.margin === !0 ? n : s.scrollBody.value.margin
            }, o) : o : {
                padding: 0,
                margin: 0
            };
        n > 0 && (document.body.style.paddingRight = typeof u.padding == `number` ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == `number` ? `${u.margin}px` : String(u.margin), document.documentElement.style.setProperty(`--scrollbar-width`, `${n}px`), document.body.style.overflow = `hidden`), g && (c = v(document, `touchmove`, e => O(e), {
            passive: !1
        })), r(() => {
            a.value && (document.body.style.pointerEvents = `none`, document.body.style.overflow = `hidden`)
        })
    }, {
        immediate: !0,
        flush: `sync`
    }), e
});

function E(e) {
    let t = Math.random().toString(36).substring(2, 7),
        n = T();
    n.value.set(t, e ? ? !1);
    let r = o({
        get: () => n.value.get(t) ? ? !1,
        set: e => n.value.set(t, e)
    });
    return p(() => {
        n.value.delete(t)
    }), r
}

function D(e) {
    let t = window.getComputedStyle(e);
    if (t.overflowX === `scroll` || t.overflowY === `scroll` || t.overflowX === `auto` && e.clientWidth < e.scrollWidth || t.overflowY === `auto` && e.clientHeight < e.scrollHeight) return !0; {
        let t = e.parentNode;
        return !(t instanceof Element) || t.tagName === `BODY` ? !1 : D(t)
    }
}

function O(e) {
    let t = e || window.event,
        n = t.target;
    return n instanceof Element && D(n) ? !1 : t.touches.length > 1 || (t.preventDefault && t.cancelable && t.preventDefault(), !1)
}
var k = function(e) {
        return typeof document > `u` ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
    },
    A = new WeakMap,
    j = new WeakMap,
    M = {},
    N = 0,
    P = function(e) {
        return e && (e.host || P(e.parentNode))
    },
    F = function(e, t) {
        return t.map(function(t) {
            if (e.contains(t)) return t;
            var n = P(t);
            return n && e.contains(n) ? n : (console.error(`aria-hidden`, t, `in not contained inside`, e, `. Doing nothing`), null)
        }).filter(function(e) {
            return !!e
        })
    },
    I = function(e, t, n, r) {
        var i = F(t, Array.isArray(e) ? e : [e]);
        M[n] || (M[n] = new WeakMap);
        var a = M[n],
            o = [],
            s = new Set,
            c = new Set(i),
            l = function(e) {
                !e || s.has(e) || (s.add(e), l(e.parentNode))
            };
        i.forEach(l);
        var u = function(e) {
            !e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                if (s.has(e)) u(e);
                else try {
                    var t = e.getAttribute(r),
                        i = t !== null && t !== `false`,
                        c = (A.get(e) || 0) + 1,
                        l = (a.get(e) || 0) + 1;
                    A.set(e, c), a.set(e, l), o.push(e), c === 1 && i && j.set(e, !0), l === 1 && e.setAttribute(n, `true`), i || e.setAttribute(r, `true`)
                } catch (t) {
                    console.error(`aria-hidden: cannot operate on `, e, t)
                }
            })
        };
        return u(t), s.clear(), N++,
            function() {
                o.forEach(function(e) {
                    var t = A.get(e) - 1,
                        i = a.get(e) - 1;
                    A.set(e, t), a.set(e, i), t || (j.has(e) || e.removeAttribute(r), j.delete(e)), i || e.removeAttribute(n)
                }), N--, N || (A = new WeakMap, A = new WeakMap, j = new WeakMap, M = {})
            }
    },
    L = function(e, t, n) {
        n === void 0 && (n = `data-aria-hidden`);
        var r = Array.from(Array.isArray(e) ? e : [e]),
            i = t || k(e);
        return i ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))), I(r, i, n, `aria-hidden`)) : function() {
            return null
        }
    };

function R(e) {
    let t;
    n(() => y(e), e => {
        let n = !1;
        try {
            n = !!e ? .closest(`[popover]:not(:popover-open)`)
        } catch {}
        e && !n ? t = L(e) : t && t()
    }), u(() => {
        t && t()
    })
}
var z = m(() => t([]));

function B() {
    let e = z();
    return {
        add(t) {
            let n = e.value[0];
            t !== n && n ? .pause(), e.value = V(e.value, t), e.value.unshift(t)
        },
        remove(t) {
            e.value = V(e.value, t), e.value[0] ? .resume()
        }
    }
}

function V(e, t) {
    let n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}
var H = `focusScope.autoFocusOnMount`,
    U = `focusScope.autoFocusOnUnmount`,
    W = {
        bubbles: !1,
        cancelable: !0
    };

function G(e, {
    select: t = !1
} = {}) {
    let n = S();
    for (let r of e)
        if (Z(r, {
                select: t
            }), S() !== n) return !0
}

function K(e) {
    let t = q(e);
    return [J(t, e), J(t.reverse(), e)]
}

function q(e) {
    let t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
                let t = e.tagName === `INPUT` && e.type === `hidden`;
                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function J(e, t) {
    for (let n of e)
        if (!Y(n, {
                upTo: t
            })) return n
}

function Y(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === `hidden`) return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === `none`) return !0;
        e = e.parentElement
    }
    return !1
}

function X(e) {
    return e instanceof HTMLInputElement && `select` in e
}

function Z(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        let n = S();
        e.focus({
            preventScroll: !0
        }), e !== n && X(e) && t && e.select()
    }
}
var Q = d({
    __name: `FocusScope`,
    props: {
        loop: {
            type: Boolean,
            required: !1,
            default: !1
        },
        trapped: {
            type: Boolean,
            required: !1,
            default: !1
        },
        present: {
            type: Boolean,
            required: !1,
            default: !0
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        }
    },
    emits: [`mountAutoFocus`, `unmountAutoFocus`],
    setup(o, {
        emit: u
    }) {
        let d = o,
            p = u,
            {
                currentRef: m,
                currentElement: g
            } = w(),
            _ = t(null),
            v = B(),
            y = s({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            });
        f(e => {
            if (!h) return;
            let t = g.value;
            if (!d.trapped) return;

            function n(e) {
                if (y.paused || !t) return;
                let n = e.target;
                t.contains(n) ? _.value = n : Z(_.value, {
                    select: !0
                })
            }

            function r(e) {
                if (y.paused || !t) return;
                let n = e.relatedTarget;
                n !== null && (t.contains(n) || Z(_.value, {
                    select: !0
                }))
            }

            function i(e) {
                let n = _.value;
                n !== null && e.some(e => e.removedNodes.length > 0) && (t.contains(n) || Z(t))
            }
            document.addEventListener(`focusin`, n), document.addEventListener(`focusout`, r);
            let a = new MutationObserver(i);
            t && a.observe(t, {
                childList: !0,
                subtree: !0
            }), e(() => {
                document.removeEventListener(`focusin`, n), document.removeEventListener(`focusout`, r), a.disconnect()
            })
        });

        function x(e, t) {
            let n = new CustomEvent(H, W),
                r = e => p(`mountAutoFocus`, e);
            e.addEventListener(H, r), e.dispatchEvent(n), e.removeEventListener(H, r), n.defaultPrevented || (G(q(e), {
                select: !0
            }), S() === t && Z(e))
        }
        f(async e => {
            let t = g.value;
            if (await r(), !t) return;
            d.present !== !1 && v.add(y);
            let n = S();
            !t.contains(n) && d.present !== !1 && x(t, n), e(() => {
                let e = new CustomEvent(U, W),
                    r = e => {
                        p(`unmountAutoFocus`, e)
                    };
                t.addEventListener(U, r), t.dispatchEvent(e), t.setAttribute(`data-focus-scope-unmounting`, ``), setTimeout(() => {
                    e.defaultPrevented || Z(n ? ? document.body, {
                        select: !0
                    }), t.removeEventListener(U, r), v.remove(y), t.removeAttribute(`data-focus-scope-unmounting`)
                }, 0)
            })
        }), n(() => d.present, async (e, t) => {
            if (!h) return;
            if (e === !1 && t === !0) {
                v.remove(y);
                return
            }
            if (e !== !0 || t !== !1) return;
            v.add(y), await r();
            let n = g.value;
            if (!n) return;
            let i = S();
            n.contains(i) || x(n, i)
        });

        function C(e) {
            if (!d.loop && !d.trapped || y.paused) return;
            let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
                n = S();
            if (t && n) {
                let t = e.currentTarget,
                    [r, i] = K(t);
                r && i ? !e.shiftKey && n === i ? (e.preventDefault(), d.loop && Z(r, {
                    select: !0
                })) : e.shiftKey && n === r && (e.preventDefault(), d.loop && Z(i, {
                    select: !0
                })) : n === t && e.preventDefault()
            }
        }
        return (t, n) => (a(), e(c(b), {
            ref_key: `currentRef`,
            ref: m,
            tabindex: `-1`,
            "as-child": t.asChild,
            as: t.as,
            onKeydown: C
        }, {
            default: i(() => [l(t.$slots, `default`)]),
            _: 3
        }, 8, [`as-child`, `as`]))
    }
});
export {
    E as a, R as i, G as n, q as r, Q as t
};