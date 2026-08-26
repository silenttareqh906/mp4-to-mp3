import {
    $ as e,
    $n as t,
    Cn as n,
    G as r,
    It as i,
    On as a,
    Yt as o,
    Z as s,
    Zn as c,
    et as l,
    kt as u,
    lr as d,
    mr as f,
    nn as p,
    sr as m,
    ut as h,
    wn as g
} from "./dist-DAh4MArN.js";
import {
    r as _
} from "./Presence-DsJ68V4l.js";
import {
    f as v
} from "./dist-CVWdmVRe.js";
import {
    o as y,
    v as b
} from "./dist-BnMQmsWl.js";
import {
    a as x
} from "./tv-Dcq2oBvx.js";
import {
    r as S
} from "./VisuallyHidden-BsMHQhx3.js";
import {
    t as C
} from "./useForwardExpose-BkJ4ptaU.js";

function w(e, t, n) {
    let r = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), r.dispatchEvent(i)
}
var T = `dismissableLayer.pointerDownOutside`,
    E = `dismissableLayer.focusOutside`;

function D(e, t) {
    if (!(t instanceof Element)) return !1;
    let n = t.closest(`[data-dismissable-layer]`),
        r = e.dataset.dismissableLayer === `` ? e : e.querySelector(`[data-dismissable-layer]`),
        i = Array.from(e.ownerDocument.querySelectorAll(`[data-dismissable-layer]`));
    return !!(n && (r === n || i.indexOf(r) < i.indexOf(n)))
}

function O(e, n, r = !0) {
    let i = n ? .value ? .ownerDocument ? ? globalThis ? .document,
        a = t(!1),
        o = t(() => {});
    return g(t => {
        if (!v || !m(r)) return;
        let s = async t => {
                let r = t.target;
                if (!(!n ? .value || !r)) {
                    if (D(n.value, r)) {
                        a.value = !1;
                        return
                    }
                    if (t.target && !a.value) {
                        let n = {
                            originalEvent: t
                        };

                        function r() {
                            w(T, e, n)
                        }
                        t.pointerType === `touch` ? (i.removeEventListener(`click`, o.value), o.value = r, i.addEventListener(`click`, o.value, {
                            once: !0
                        })) : r()
                    } else i.removeEventListener(`click`, o.value);
                    a.value = !1
                }
            },
            c = window.setTimeout(() => {
                i.addEventListener(`pointerdown`, s)
            }, 0);
        t(() => {
            window.clearTimeout(c), i.removeEventListener(`pointerdown`, s), i.removeEventListener(`click`, o.value)
        })
    }), {
        onPointerDownCapture: () => {
            m(r) && (a.value = !0)
        }
    }
}

function k(e, n, r = !0) {
    let a = n ? .value ? .ownerDocument ? ? globalThis ? .document,
        o = t(!1);
    return g(t => {
        if (!v || !m(r)) return;
        let s = async t => {
            if (!n ? .value) return;
            await i(), await i();
            let r = t.target;
            !n.value || !r || D(n.value, r) || t.target && !o.value && w(E, e, {
                originalEvent: t
            })
        };
        a.addEventListener(`focusin`, s), t(() => a.removeEventListener(`focusin`, s))
    }), {
        onFocusCapture: () => {
            m(r) && (o.value = !0)
        },
        onBlurCapture: () => {
            m(r) && (o.value = !1)
        }
    }
}
var A = c({
        layersRoot: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        originalBodyPointerEvents: void 0,
        branches: new Set
    }),
    j = h({
        __name: `DismissableLayer`,
        props: {
            disableOutsidePointerEvents: {
                type: Boolean,
                required: !1,
                default: !1
            },
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            },
            present: {
                type: Boolean,
                required: !1,
                default: !0
            }
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `dismiss`],
        setup(t, {
            emit: r
        }) {
            let c = t,
                l = r,
                {
                    forwardRef: u,
                    currentElement: m
                } = C(),
                h = s(() => m.value ? .ownerDocument ? ? globalThis.document),
                v = s(() => A.layersRoot),
                b = s(() => m.value ? Array.from(v.value).indexOf(m.value) : -1),
                S = s(() => A.layersWithOutsidePointerEventsDisabled.size > 0),
                w = s(() => {
                    let e = Array.from(v.value),
                        [t] = [...A.layersWithOutsidePointerEventsDisabled].slice(-1),
                        n = e.indexOf(t);
                    return b.value >= n
                }),
                T = O(async e => {
                    let t = [...A.branches].some(t => t ? .contains(e.target));
                    !c.present || !w.value || t || (l(`pointerDownOutside`, e), l(`interactOutside`, e), await i(), e.defaultPrevented || l(`dismiss`))
                }, m),
                E = k(e => {
                    let t = [...A.branches].some(t => t ? .contains(e.target));
                    !c.present || t || (l(`focusOutside`, e), l(`interactOutside`, e), e.defaultPrevented || l(`dismiss`))
                }, m);
            return y(`Escape`, e => {
                c.present && b.value === v.value.size - 1 && (l(`escapeKeyDown`, e), e.defaultPrevented || l(`dismiss`))
            }), n([m, () => c.disableOutsidePointerEvents, () => c.present], ([e, t, n], r, i) => {
                !e || !n || t && (A.layersWithOutsidePointerEventsDisabled.size === 0 && (A.originalBodyPointerEvents = h.value.body.style.pointerEvents, h.value.body.style.pointerEvents = `none`), A.layersWithOutsidePointerEventsDisabled.add(e), i(() => {
                    A.layersWithOutsidePointerEventsDisabled.delete(e), A.layersWithOutsidePointerEventsDisabled.size === 0 && !_(A.originalBodyPointerEvents) && (h.value.body.style.pointerEvents = A.originalBodyPointerEvents)
                }))
            }, {
                immediate: !0
            }), n([m, () => c.present], ([e, t], n, r) => {
                !e || !t || (v.value.add(e), r(() => {
                    v.value.delete(e)
                }))
            }, {
                immediate: !0
            }), g(e => {
                e(() => {
                    m.value && (v.value.delete(m.value), A.layersWithOutsidePointerEventsDisabled.delete(m.value))
                })
            }), (t, n) => (o(), e(d(x), {
                ref: d(u),
                "as-child": t.asChild,
                as: t.as,
                "data-dismissable-layer": ``,
                style: f({
                    pointerEvents: S.value ? w.value ? `auto` : `none` : void 0
                }),
                onFocusCapture: d(E).onFocusCapture,
                onBlurCapture: d(E).onBlurCapture,
                onPointerdownCapture: d(T).onPointerDownCapture
            }, {
                default: a(() => [p(t.$slots, `default`)]),
                _: 3
            }, 8, [`as-child`, `as`, `style`, `onFocusCapture`, `onBlurCapture`, `onPointerdownCapture`]))
        }
    }),
    M = h({
        __name: `Teleport`,
        props: {
            to: {
                type: null,
                required: !1
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            defer: {
                type: Boolean,
                required: !1
            },
            forceMount: {
                type: Boolean,
                required: !1
            }
        },
        setup(t) {
            let n = t,
                i = S({}),
                a = s(() => n.to ? ? i.teleportTo ? .value ? ? `body`),
                c = b();
            return (t, n) => d(c) || t.forceMount ? (o(), e(r, {
                key: 0,
                to: a.value,
                disabled: t.disabled,
                defer: t.defer
            }, [p(t.$slots, `default`)], 8, [`to`, `disabled`, `defer`])) : l(`v-if`, !0)
        }
    }),
    N = Symbol(`nuxt-ui.portal-target`);

function P(e) {
    let t = u(N, void 0),
        n = s(() => e.value === !0 ? t ? .value : e.value),
        r = s(() => typeof n.value == `boolean` && !n.value),
        i = s(() => typeof n.value == `boolean` ? `body` : n.value);
    return s(() => ({
        to: i.value,
        disabled: r.value
    }))
}
export {
    A as a, j as i, P as n, w as o, M as r, N as t
};