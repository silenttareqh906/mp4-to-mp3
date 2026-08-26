import {
    $ as e,
    $n as t,
    Cn as n,
    En as r,
    F as i,
    Ft as a,
    Gn as o,
    It as s,
    Jn as c,
    On as l,
    P as u,
    Ut as d,
    V as f,
    X as p,
    Yt as m,
    Z as h,
    an as g,
    bt as _,
    cr as v,
    ct as y,
    et as b,
    hr as x,
    jn as S,
    lr as C,
    mr as w,
    nn as T,
    nr as E,
    or as ee,
    pr as D,
    qt as O,
    st as k,
    tn as A,
    tt as j,
    ut as M,
    vn as N,
    vt as P
} from "./dist-DAh4MArN.js";
import {
    n as F,
    t as I
} from "./Presence-DsJ68V4l.js";
import {
    S as L
} from "./Link-_LwZUouH.js";
import {
    f as te,
    i as R,
    w as z
} from "./dist-CVWdmVRe.js";
import {
    T as B,
    b as V
} from "./dist-BnMQmsWl.js";
import {
    a as H,
    c as U,
    y as W
} from "./tv-Dcq2oBvx.js";
import {
    t as G
} from "./getActiveElement-DWEoD8ZB.js";
import {
    i as ne,
    o as re,
    r as ie
} from "./usePortal-C8FDDOJ7.js";
import {
    a as ae,
    i as K,
    t as oe
} from "./FocusScope-BOzJiDWr.js";
import {
    t as se
} from "./useComposing-CAoGWN87.js";
import {
    n as ce,
    t as q
} from "./usePrimitiveElement-BsEpVwz7.js";
import {
    n as le,
    r as ue,
    t as de
} from "./useTypeahead-B8CAC5c7.js";
import {
    n as fe,
    t as pe
} from "./Collection-DHXhcMsG.js";
import {
    t as J
} from "./useForwardExpose-BkJ4ptaU.js";
import {
    a as me,
    i as he,
    r as ge,
    s as _e,
    t as ve
} from "./PopperArrow-DcCRQpSl.js";
import {
    t as ye
} from "./useKbd-D5ogEQRo.js";
import {
    t as be
} from "./VisuallyHiddenInput-zCLYnaDR.js";
import {
    a as xe,
    r as Se
} from "./RovingFocusGroup-0p6cHiw3.js";

function Ce(e, t, n) {
    let r = e.findIndex(e => W(e, t)),
        i = e.findIndex(e => W(e, n));
    if (r === -1 || i === -1) return [];
    let [a, o] = [r, i].sort((e, t) => e - t);
    return e.slice(a, o + 1)
}

function we(e) {
    let t = h(() => C(e)),
        n = h(() => new Intl.Collator(`en`, {
            usage: `search`,
            ...t.value
        }));
    return {
        startsWith: (e, t) => t.length === 0 || (e = e.normalize(`NFC`), t = t.normalize(`NFC`), n.value.compare(e.slice(0, t.length), t) === 0),
        endsWith: (e, t) => t.length === 0 || (e = e.normalize(`NFC`), t = t.normalize(`NFC`), n.value.compare(e.slice(-t.length), t) === 0),
        contains: (e, t) => {
            if (t.length === 0) return !0;
            e = e.normalize(`NFC`), t = t.normalize(`NFC`);
            let r = 0,
                i = t.length;
            for (; r + i <= e.length; r++) {
                let a = e.slice(r, r + i);
                if (n.value.compare(t, a) === 0) return !0
            }
            return !1
        }
    }
}

function Te(e) {
    return e ? .querySelector(`[data-state=checked]`)
}

function Ee(e, t, n) {
    return e === void 0 ? !1 : Array.isArray(e) ? e.some(e => Y(e, t, n)) : Y(e, t, n)
}

function Y(e, t, n) {
    return e === void 0 || t === void 0 ? !1 : typeof e == `string` ? e === t : typeof n == `function` ? n(e, t) : typeof n == `string` ? e ? .[n] === t ? .[n] : W(e, t)
}
var [X, De] = U(`ListboxRoot`), Oe = M({
    __name: `ListboxRoot`,
    props: {
        modelValue: {
            type: null,
            required: !1
        },
        defaultValue: {
            type: null,
            required: !1
        },
        multiple: {
            type: Boolean,
            required: !1
        },
        orientation: {
            type: String,
            required: !1,
            default: `vertical`
        },
        dir: {
            type: String,
            required: !1
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        selectionBehavior: {
            type: String,
            required: !1,
            default: `toggle`
        },
        highlightOnHover: {
            type: Boolean,
            required: !1
        },
        by: {
            type: [String, Function],
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        },
        name: {
            type: String,
            required: !1
        },
        required: {
            type: Boolean,
            required: !1
        }
    },
    emits: [`update:modelValue`, `highlight`, `entryFocus`, `leave`],
    setup(r, {
        expose: i,
        emit: a
    }) {
        let o = r,
            c = a,
            {
                multiple: u,
                highlightOnHover: d,
                orientation: f,
                disabled: p,
                selectionBehavior: h,
                dir: g
            } = ee(o),
            {
                getItems: _
            } = pe({
                isProvider: !0
            }),
            {
                handleTypeaheadSearch: v
            } = le(),
            {
                primitiveElement: y,
                currentElement: x
            } = q(),
            S = ye(),
            w = ce(g),
            E = fe(x),
            D = t(),
            O = t(!1),
            k = t(!0),
            A = B(o, `modelValue`, c, {
                defaultValue: o.defaultValue ? ? (u.value ? [] : void 0),
                passive: o.modelValue === void 0,
                deep: !0
            });

        function j(e) {
            if (O.value = !0, o.multiple) {
                let t = Array.isArray(A.value) ? [...A.value] : [],
                    n = t.findIndex(t => Y(t, e, o.by));
                o.selectionBehavior === `toggle` ? (n === -1 ? t.push(e) : t.splice(n, 1), A.value = t) : (A.value = [e], D.value = e)
            } else o.selectionBehavior === `toggle` && Y(A.value, e, o.by) ? A.value = void 0 : A.value = e;
            setTimeout(() => {
                O.value = !1
            }, 1)
        }
        let M = t(null),
            N = t(null),
            P = t(!1),
            F = t(!1),
            I = R(),
            L = R(),
            z = R();

        function V() {
            return _().map(e => e.ref).filter(e => e.dataset.disabled !== ``)
        }

        function U(e, t = !0, n) {
            if (!e) return;
            M.value = e, (n ? ? k.value) && M.value.focus(), t && M.value.scrollIntoView({
                block: `nearest`
            });
            let r = _().find(t => t.ref === e);
            c(`highlight`, r)
        }

        function W(e) {
            if (P.value) z.trigger(e);
            else {
                let t = _().find(t => Y(t.value, e, o.by));
                t && (M.value = t.ref, U(t.ref))
            }
        }

        function G(e) {
            if (M.value && M.value.isConnected) {
                if (e.ctrlKey || e.metaKey || e.altKey) return;
                e.preventDefault(), e.stopPropagation(), F.value || M.value.click()
            }
        }

        function ne(e) {
            if (k.value) {
                if (O.value = !0, P.value) L.trigger(e);
                else {
                    let t = e.altKey || e.ctrlKey || e.metaKey;
                    if (t && e.key === `a` && u.value) {
                        let t = _(),
                            n = t.map(e => e.value);
                        A.value = [...n], e.preventDefault();
                        let r = t.at(-1);
                        r && U(r.ref)
                    } else if (!t) {
                        let t = v(e.key, _());
                        t && U(t)
                    }
                }
                setTimeout(() => {
                    O.value = !1
                }, 1)
            }
        }

        function re() {
            F.value = !0
        }

        function ie() {
            s(() => {
                F.value = !1
            })
        }

        function ae() {
            s(() => {
                se(new KeyboardEvent(`keydown`, {
                    key: `PageUp`
                }))
            })
        }

        function K(e) {
            let t = M.value;
            t ? .isConnected && (N.value = t), M.value = null, c(`leave`, e)
        }

        function oe(e) {
            let t = new CustomEvent(`listbox.entryFocus`, {
                bubbles: !1,
                cancelable: !0
            });
            if (e.currentTarget ? .dispatchEvent(t), c(`entryFocus`, t), !t.defaultPrevented)
                if (N.value) U(N.value);
                else {
                    let e = V() ? .[0];
                    U(e)
                }
        }

        function se(e) {
            let t = xe(e, f.value, w.value);
            if (!t) return;
            let n = V();
            if (M.value) {
                if (t === `last`) n.reverse();
                else if (t === `prev` || t === `next`) {
                    t === `prev` && n.reverse();
                    let e = n.indexOf(M.value);
                    n = n.slice(e + 1)
                }
                ue(e, n[0])
            }
            if (n.length) {
                let e = !M.value && t === `prev` ? n.length - 1 : 0;
                U(n[e])
            }
            if (P.value) return L.trigger(e)
        }

        function ue(e, t) {
            if (!(P.value || o.selectionBehavior !== `replace` || !u.value || !Array.isArray(A.value)) && !((e.altKey || e.ctrlKey || e.metaKey) && !e.shiftKey) && e.shiftKey) {
                let n = _().filter(e => e.ref.dataset.disabled !== ``),
                    r = n.find(e => e.ref === t) ? .value;
                if (e.key === S.END ? r = n.at(-1) ? .value : e.key === S.HOME && (r = n[0] ? .value), !r || !D.value) return;
                let i = Ce(n.map(e => e.value), D.value, r);
                A.value = i
            }
        }
        async function de(e, t = !0) {
            if (te)
                if (await s(), P.value) I.trigger({
                    event: e,
                    scroll: t
                });
                else {
                    let e = V(),
                        n = e.find(e => e.dataset.state === `checked`),
                        r = t ? void 0 : !1;
                    n ? U(n, t, r) : e.length && U(e[0], t, r)
                }
        }
        let J = !1;
        return n(A, () => {
            if (!O.value) {
                let e = J;
                J = !0, s(() => {
                    de(void 0, e)
                })
            }
        }, {
            immediate: !0,
            deep: !0
        }), i({
            highlightedElement: M,
            highlightItem: W,
            highlightFirstItem: ae,
            highlightSelected: de,
            getItems: _
        }), De({
            modelValue: A,
            onValueChange: j,
            multiple: u,
            orientation: f,
            dir: w,
            disabled: p,
            highlightOnHover: d,
            highlightedElement: M,
            isVirtual: P,
            virtualFocusHook: I,
            virtualKeydownHook: L,
            virtualHighlightHook: z,
            by: o.by,
            firstValue: D,
            selectionBehavior: h,
            focusable: k,
            onLeave: K,
            onEnter: oe,
            changeHighlight: U,
            onKeydownEnter: G,
            onKeydownNavigation: se,
            onKeydownTypeAhead: ne,
            onCompositionStart: re,
            onCompositionEnd: ie,
            highlightFirstItem: ae
        }), (t, n) => (m(), e(C(H), {
            ref_key: `primitiveElement`,
            ref: y,
            as: t.as,
            "as-child": t.asChild,
            dir: C(w),
            "data-disabled": C(p) ? `` : void 0,
            onPointerleave: K,
            onFocusout: n[0] || = async e => {
                let t = e.relatedTarget || e.target;
                await s(), M.value && C(x) && !C(x).contains(t) && K(e)
            }
        }, {
            default: l(() => [T(t.$slots, `default`, {
                modelValue: C(A)
            }), C(E) && t.name ? (m(), e(C(be), {
                key: 0,
                name: t.name,
                value: C(A),
                disabled: C(p),
                required: t.required
            }, null, 8, [`name`, `value`, `disabled`, `required`])) : b(`v-if`, !0)]),
            _: 3
        }, 8, [`as`, `as-child`, `dir`, `data-disabled`]))
    }
}), ke = M({
    __name: `ListboxContent`,
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        }
    },
    setup(t) {
        let {
            CollectionSlot: n
        } = pe(), r = X(), a = z(!1, 10);
        return (t, o) => (m(), e(C(n), null, {
            default: l(() => [y(C(H), {
                role: `listbox`,
                as: t.as,
                "as-child": t.asChild,
                tabindex: C(r).focusable.value ? C(r).highlightedElement.value ? `-1` : `0` : `-1`,
                "aria-orientation": C(r).orientation.value,
                "aria-multiselectable": !!C(r).multiple.value,
                "data-orientation": C(r).orientation.value,
                onMousedown: o[0] || = i(e => a.value = !0, [`left`]),
                onFocus: o[1] || = e => {
                    C(a) || C(r).onEnter(e)
                },
                onKeydown: [o[2] || = u(e => {
                    (C(r).orientation.value !== `vertical` || e.key !== `ArrowLeft` && e.key !== `ArrowRight`) && (C(r).orientation.value !== `horizontal` || e.key !== `ArrowUp` && e.key !== `ArrowDown`) && (e.preventDefault(), C(r).focusable.value && C(r).onKeydownNavigation(e))
                }, [`down`, `up`, `left`, `right`, `home`, `end`]), u(C(r).onKeydownEnter, [`enter`]), C(r).onKeydownTypeAhead]
            }, {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 8, [`as`, `as-child`, `tabindex`, `aria-orientation`, `aria-multiselectable`, `data-orientation`, `onKeydown`])]),
            _: 3
        }))
    }
}), Ae = M({
    __name: `ListboxFilter`,
    props: {
        modelValue: {
            type: String,
            required: !1
        },
        autoFocus: {
            type: Boolean,
            required: !1
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: `input`
        }
    },
    emits: [`update:modelValue`],
    setup(n, {
        emit: i
    }) {
        let a = n,
            o = B(a, `modelValue`, i, {
                defaultValue: ``,
                passive: a.modelValue === void 0
            }),
            s = X(),
            {
                primitiveElement: c,
                currentElement: f
            } = q(),
            p = h(() => a.disabled || s.disabled.value || !1),
            g = t();
        r(() => g.value = s.highlightedElement.value ? .id), d(() => {
            s.focusable.value = !1, setTimeout(() => {
                a.autoFocus && f.value ? .focus()
            }, 1)
        }), O(() => {
            s.focusable.value = !0
        });
        let {
            isComposing: _,
            handleCompositionStart: v,
            handleCompositionEnd: y
        } = se(e => {
            o.value = e.target.value, s.onCompositionEnd(), s.highlightFirstItem()
        });

        function b() {
            s.onCompositionStart(), v()
        }

        function x(e) {
            _.value || (o.value = e.target.value, s.highlightFirstItem())
        }

        function S(e) {
            _.value || (e.preventDefault(), s.onKeydownNavigation(e))
        }

        function w(e) {
            _.value || s.onKeydownEnter(e)
        }
        return (t, n) => (m(), e(C(H), {
            ref_key: `primitiveElement`,
            ref: c,
            as: t.as,
            "as-child": t.asChild,
            value: C(o),
            disabled: p.value ? `` : void 0,
            "data-disabled": p.value ? `` : void 0,
            "aria-disabled": p.value ? ? void 0,
            "aria-activedescendant": g.value,
            type: `text`,
            onKeydown: [u(S, [`down`, `up`, `home`, `end`]), u(w, [`enter`])],
            onInput: x,
            onCompositionstart: b,
            onCompositionend: C(y)
        }, {
            default: l(() => [T(t.$slots, `default`, {
                modelValue: C(o)
            })]),
            _: 3
        }, 8, [`as`, `as-child`, `value`, `disabled`, `data-disabled`, `aria-disabled`, `aria-activedescendant`, `onCompositionend`]))
    }
}), [je, Me] = U(`ListboxGroup`), Ne = M({
    __name: `ListboxGroup`,
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        }
    },
    setup(t) {
        let n = t,
            r = F(void 0, `reka-listbox-group`);
        return Me({
            id: r
        }), (t, i) => (m(), e(C(H), a({
            role: `group`
        }, n, {
            "aria-labelledby": C(r)
        }), {
            default: l(() => [T(t.$slots, `default`)]),
            _: 3
        }, 16, [`aria-labelledby`]))
    }
}), Pe = `listbox.select`, [Fe, Ie] = U(`ListboxItem`), Le = M({
    __name: `ListboxItem`,
    props: {
        value: {
            type: null,
            required: !0
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: `div`
        }
    },
    emits: [`select`],
    setup(t, {
        emit: n
    }) {
        let r = t,
            o = n,
            s = F(void 0, `reka-listbox-item`),
            {
                CollectionItem: c
            } = pe(),
            {
                forwardRef: d,
                currentElement: f
            } = J(),
            p = X(),
            g = h(() => f.value != null && f.value === p.highlightedElement.value),
            _ = h(() => Ee(p.modelValue.value, r.value, p.by)),
            v = h(() => p.disabled.value || r.disabled);
        async function b(e) {
            o(`select`, e), !e ? .defaultPrevented && !v.value && e && (p.onValueChange(r.value), p.changeHighlight(f.value))
        }

        function x(e) {
            let t = {
                originalEvent: e,
                value: r.value
            };
            re(Pe, b, t)
        }
        return Ie({
            isSelected: _
        }), (t, n) => (m(), e(C(c), {
            value: t.value
        }, {
            default: l(() => [S([g.value, _.value, v.value, C(p).focusable.value], () => y(C(H), a({
                id: C(s)
            }, t.$attrs, {
                ref: C(d),
                role: `option`,
                tabindex: C(p).focusable.value ? g.value ? `0` : `-1` : -1,
                "aria-selected": _.value,
                as: t.as,
                "as-child": t.asChild,
                disabled: v.value ? `` : void 0,
                "data-disabled": v.value ? `` : void 0,
                "data-highlighted": g.value ? `` : void 0,
                "data-state": _.value ? `checked` : `unchecked`,
                onClick: x,
                onKeydown: u(i(x, [`prevent`]), [`space`]),
                onPointermove: n[0] || = () => {
                    C(p).highlightedElement.value !== C(f) && C(p).highlightOnHover.value && C(p).changeHighlight(C(f), !1, !1)
                }
            }), {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 16, [`id`, `tabindex`, `aria-selected`, `as`, `as-child`, `disabled`, `data-disabled`, `data-highlighted`, `data-state`, `onKeydown`]), n, 1)]),
            _: 3
        }, 8, [`value`]))
    }
}), Re = M({
    __name: `ListboxItemIndicator`,
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: `span`
        }
    },
    setup(t) {
        let n = t;
        J();
        let r = Fe();
        return (t, i) => C(r).isSelected.value ? (m(), e(C(H), a({
            key: 0,
            "aria-hidden": `true`
        }, n), {
            default: l(() => [T(t.$slots, `default`)]),
            _: 3
        }, 16)) : b(`v-if`, !0)
    }
});

function ze(e, t, n) {
    let r = Array(e);
    return new Proxy(r, {
        get(r, i, a) {
            if (typeof i == `string`) {
                let a = i.charCodeAt(0);
                if (a >= 48 && a <= 57) {
                    let a = +i;
                    if (Number.isInteger(a) && a >= 0 && a < e) {
                        let e = r[a];
                        if (!e) {
                            let i = t[a * 2];
                            e = r[a] = {
                                index: a,
                                key: n(a),
                                start: i,
                                size: t[a * 2 + 1],
                                end: i + t[a * 2 + 1],
                                lane: 0
                            }
                        }
                        return e
                    }
                }
                if (i === `length`) return e
            }
            return Reflect.get(r, i, a)
        }
    })
}

function Z(e, t, n) {
    let r = n.initialDeps ? ? [],
        i, a = !0;

    function o() {
        let o = e();
        return o.length !== r.length || o.some((e, t) => r[t] !== e) ? (r = o, i = t(...o), n ? .onChange && !(a && n.skipInitialOnChange) && n.onChange(i), a = !1, i) : i
    }
    return o.updateDeps = e => {
        r = e
    }, o
}

function Be(e, t) {
    if (e === void 0) throw Error(`Unexpected undefined${t?`: ${t}`:``}`);
    return e
}
var Ve = (e, t) => Math.abs(e - t) < 1.01,
    He = (e, t, n) => {
        let r;
        return function(...i) {
            e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, i), n)
        }
    },
    Q, Ue = () => {
        if (Q !== void 0) return Q;
        if (typeof navigator > `u`) return Q = !1;
        if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Q = !0;
        let e = navigator.maxTouchPoints;
        return Q = navigator.platform === `MacIntel` && e !== void 0 && e > 0
    },
    We = e => {
        let {
            offsetWidth: t,
            offsetHeight: n
        } = e;
        return {
            width: t,
            height: n
        }
    },
    Ge = e => e,
    Ke = e => {
        let t = Math.max(e.startIndex - e.overscan, 0),
            n = Math.min(e.endIndex + e.overscan, e.count - 1) - t + 1,
            r = Array(n);
        for (let e = 0; e < n; e++) r[e] = t + e;
        return r
    },
    qe = (e, t) => {
        let n = e.scrollElement;
        if (!n) return;
        let r = e.targetWindow;
        if (!r) return;
        let i = e => {
            let {
                width: n,
                height: r
            } = e;
            t({
                width: Math.round(n),
                height: Math.round(r)
            })
        };
        if (i(We(n)), !r.ResizeObserver) return () => {};
        let a = new r.ResizeObserver(t => {
            let r = () => {
                let e = t[0];
                if (e ? .borderBoxSize) {
                    let t = e.borderBoxSize[0];
                    if (t) {
                        i({
                            width: t.inlineSize,
                            height: t.blockSize
                        });
                        return
                    }
                }
                i(We(n))
            };
            e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r()
        });
        return a.observe(n, {
            box: `border-box`
        }), () => {
            a.unobserve(n)
        }
    },
    Je = {
        passive: !0
    },
    Ye = typeof window > `u` || `onscrollend` in window,
    Xe = (e, t, n) => {
        let r = e.scrollElement;
        if (!r) return;
        let i = e.targetWindow;
        if (!i) return;
        let a = e.options.useScrollendEvent && Ye,
            o = 0,
            s = a ? null : He(i, () => t(o, !1), e.options.isScrollingResetDelay),
            c = e => () => {
                o = n(r), s ? .(), t(o, e)
            },
            l = c(!0),
            u = c(!1);
        return r.addEventListener(`scroll`, l, Je), a && r.addEventListener(`scrollend`, u, Je), () => {
            r.removeEventListener(`scroll`, l), a && r.removeEventListener(`scrollend`, u)
        }
    },
    Ze = (e, t) => Xe(e, t, t => {
        let {
            horizontal: n,
            isRtl: r
        } = e.options;
        return n ? t.scrollLeft * (r && -1 || 1) : t.scrollTop
    }),
    Qe = (e, t, n) => {
        if (n.options.useCachedMeasurements) {
            let t = n.indexFromElement(e),
                r = n.options.getItemKey(t);
            return n.itemSizeCache.get(r) ? ? n.options.estimateSize(t)
        }
        if (t ? .borderBoxSize) {
            let e = t.borderBoxSize[0];
            if (e) return Math.round(e[n.options.horizontal ? `inlineSize` : `blockSize`])
        }
        if (!t) {
            let t = n.indexFromElement(e),
                r = n.options.getItemKey(t),
                i = n.itemSizeCache.get(r);
            if (i !== void 0) return i
        }
        return e[n.options.horizontal ? `offsetWidth` : `offsetHeight`]
    },
    $e = (e, {
        adjustments: t = 0,
        behavior: n
    }, r) => {
        var i, a;
        (a = (i = r.scrollElement) ? .scrollTo) == null || a.call(i, {
            [r.options.horizontal ? `left` : `top`]: e + t,
            behavior: n
        })
    },
    et = class {
        constructor(e) {
            this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = new Map, this.itemSizeCacheVersion = 0, this.laneAssignments = new Map, this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = new Map, this.now = () => {
                var e;
                return ((e = this.targetWindow ? .performance) ? .now) ? .call(e) ? ? Date.now()
            }, this.observer = (() => {
                let e = null,
                    t = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver(e => {
                        e.forEach(e => {
                            let t = () => {
                                let t = e.target,
                                    n = this.indexFromElement(t);
                                if (!t.isConnected) {
                                    this.observer.unobserve(t);
                                    for (let [e, n] of this.elementsCache)
                                        if (n === t) {
                                            this.elementsCache.delete(e);
                                            break
                                        }
                                    return
                                }
                                this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(t, e, this))
                            };
                            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t()
                        })
                    }));
                return {
                    disconnect: () => {
                        var n;
                        (n = t()) == null || n.disconnect(), e = null
                    },
                    observe: e => t() ? .observe(e, {
                        box: `border-box`
                    }),
                    unobserve: e => t() ? .unobserve(e)
                }
            })(), this.range = null, this.setOptions = e => {
                let t = {
                    debug: !1,
                    initialOffset: 0,
                    overscan: 1,
                    paddingStart: 0,
                    paddingEnd: 0,
                    scrollPaddingStart: 0,
                    scrollPaddingEnd: 0,
                    horizontal: !1,
                    getItemKey: Ge,
                    rangeExtractor: Ke,
                    onChange: () => {},
                    measureElement: Qe,
                    initialRect: {
                        width: 0,
                        height: 0
                    },
                    scrollMargin: 0,
                    gap: 0,
                    indexAttribute: `data-index`,
                    initialMeasurementsCache: [],
                    lanes: 1,
                    anchorTo: `start`,
                    followOnAppend: !1,
                    scrollEndThreshold: 1,
                    isScrollingResetDelay: 150,
                    enabled: !0,
                    isRtl: !1,
                    useScrollendEvent: !1,
                    useAnimationFrameWithResizeObserver: !1,
                    laneAssignmentMode: `estimate`,
                    useCachedMeasurements: !1
                };
                for (let n in e) {
                    let r = e[n];
                    r !== void 0 && (t[n] = r)
                }
                let n = this.options,
                    r = null,
                    i = null,
                    a = !1;
                if (n !== void 0 && n.enabled && t.enabled && t.anchorTo === `end` && this.scrollElement !== null) {
                    let e = n.count,
                        o = t.count,
                        s = this.getMeasurements(),
                        c = e > 0 ? s[0] ? .key ? ? n.getItemKey(0) : null,
                        l = e > 0 ? s[e - 1] ? .key ? ? n.getItemKey(e - 1) : null;
                    if (o !== e || e > 0 && o > 0 && (t.getItemKey(0) !== c || t.getItemKey(o - 1) !== l)) {
                        a = !0;
                        let c = e > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ? ? s[0] : null;
                        c && (r = [c.key, this.getScrollOffset() - c.start]);
                        let u = t.followOnAppend === !0 ? `auto` : t.followOnAppend || null;
                        u && o > e && this.isAtEnd(n.scrollEndThreshold) && (e === 0 || t.getItemKey(o - 1) !== l) && (i = u)
                    }
                }
                this.options = t, a && (this.pendingMin = 0, this.itemSizeCacheVersion++);
                let o = !1,
                    s = 0;
                if (r && this.scrollOffset !== null) {
                    let [e, t] = r, n = this.getMeasurements(), {
                        count: i,
                        getItemKey: a
                    } = this.options, c = 0;
                    for (; c < i && a(c) !== e;) c++;
                    if (c < i) {
                        let e = n[c];
                        if (e) {
                            let n = Math.max(0, e.start + t);
                            n !== this.scrollOffset && (s = n - this.scrollOffset, this.scrollOffset = n, o = !0)
                        }
                    }
                }(o || i) && (this.pendingScrollAnchor = [o ? r[0] : null, o ? r[1] : 0, i, s])
            }, this.notify = e => {
                var t, n;
                (n = (t = this.options).onChange) == null || n.call(t, this, e)
            }, this.maybeNotify = Z(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), e => {
                this.notify(e)
            }, {
                key: !1,
                debug: () => this.options.debug,
                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
            }), this.cleanup = () => {
                this.unsubs.filter(Boolean).forEach(e => e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this.scrollElement = null, this.targetWindow = null
            }, this._didMount = () => () => {
                this.cleanup()
            }, this._willUpdate = () => {
                let e = this.options.enabled ? this.options.getScrollElement() : null;
                if (this.scrollElement !== e) {
                    if (this.cleanup(), !e) {
                        this.maybeNotify();
                        return
                    }
                    if (this.scrollElement = e, this.targetWindow = this.scrollElement && `ownerDocument` in this.scrollElement ? this.scrollElement.ownerDocument.defaultView : this.scrollElement ? .window ? ? null, this.elementsCache.forEach(e => {
                            this.observer.observe(e)
                        }), this.unsubs.push(this.options.observeElementRect(this, e => {
                            this.scrollRect = e, this.maybeNotify()
                        })), this.unsubs.push(this.options.observeElementOffset(this, (e, t) => {
                            if (t && this._intendedScrollOffset === null && e === this.scrollOffset) return;
                            this._intendedScrollOffset !== null && Math.abs(e - this._intendedScrollOffset) < 1.5 && (e = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
                            let n = this.getScrollOffset();
                            this.scrollDirection = t ? n === e ? this.scrollDirection : n < e ? `forward` : `backward` : null, this.scrollOffset = e, this.isScrolling = t, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify()
                        })), `addEventListener` in this.scrollElement) {
                        let e = this.scrollElement,
                            t = () => {
                                this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null)
                            },
                            n = () => {
                                this._iosTouching = !1, !(!Ue() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
                                    this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady()
                                }, 150))
                            };
                        e.addEventListener(`touchstart`, t, Je), e.addEventListener(`touchend`, n, Je), this.unsubs.push(() => {
                            e.removeEventListener(`touchstart`, t), e.removeEventListener(`touchend`, n), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null)
                        })
                    }
                    this._scrollToOffset(this.getScrollOffset(), {
                        adjustments: void 0,
                        behavior: void 0
                    })
                }
                let t = this.pendingScrollAnchor;
                if (this.pendingScrollAnchor = null, t && this.scrollElement && this.options.enabled) {
                    let [e, n, r, i] = t;
                    e !== null && !r && (Ue() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? i !== 0 && (this._iosDeferredAdjustment += i) : this._scrollToOffset(this.getScrollOffset(), {
                        adjustments: void 0,
                        behavior: void 0
                    })), r && this.scrollToEnd({
                        behavior: r
                    })
                }
            }, this._flushIosDeferredIfReady = () => {
                if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
                let e = this.getScrollOffset(),
                    t = this.getMaxScrollOffset();
                if (e < 0 || e > t) return;
                if (this._iosDeferredAdjustment < 0 && e >= t - 1) {
                    this._iosDeferredAdjustment = 0;
                    return
                }
                let n = this._iosDeferredAdjustment;
                this._iosDeferredAdjustment = 0, this._scrollToOffset(e, {
                    adjustments: this.scrollAdjustments += n,
                    behavior: void 0
                })
            }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ? ? this.options.initialRect, this.scrollRect[this.options.horizontal ? `width` : `height`]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ? ? (typeof this.options.initialOffset == `function` ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Z(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes, this.options.laneAssignmentMode, this.options.gap], (e, t, n, r, i, a, o, s) => (this.prevLanes !== void 0 && this.prevLanes !== a && (this.lanesChangedFlag = !0), this.prevLanes = a, this.pendingMin = null, {
                count: e,
                paddingStart: t,
                scrollMargin: n,
                getItemKey: r,
                enabled: i,
                lanes: a,
                laneAssignmentMode: o,
                gap: s
            }), {
                key: !1
            }), this.getMeasurements = Z(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({
                count: e,
                paddingStart: t,
                scrollMargin: n,
                getItemKey: r,
                enabled: i,
                lanes: a,
                laneAssignmentMode: o,
                gap: s
            }, c) => {
                let l = this.itemSizeCache;
                if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
                if (this.laneAssignments.size > e)
                    for (let t of this.laneAssignments.keys()) t >= e && this.laneAssignments.delete(t);
                this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(e => {
                    this.itemSizeCache.set(e.key, e.size)
                }));
                let u = this.lanesSettling ? 0 : this.pendingMin ? ? 0;
                if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1), a === 1) {
                    let i = e * 2,
                        a = this._flatMeasurements;
                    if (!a || a.length < i) {
                        let e = new Float64Array(i);
                        a && u > 0 && e.set(a.subarray(0, u * 2)), a = e, this._flatMeasurements = a
                    }
                    let o;
                    if (u === 0) o = t + n;
                    else {
                        let e = u - 1;
                        o = a[e * 2] + a[e * 2 + 1] + s
                    }
                    for (let t = u; t < e; t++) {
                        let e = r(t),
                            n = l.get(e),
                            i = typeof n == `number` ? n : this.options.estimateSize(t);
                        a[t * 2] = o, a[t * 2 + 1] = i, o += i + s
                    }
                    let c = ze(e, a, r);
                    return this.measurementsCache = c, c
                }
                let d = this.measurementsCache.slice(0, u),
                    f = Array(a).fill(void 0),
                    p = new Float64Array(a),
                    m = 0;
                for (let e = 0; e < u; e++) {
                    let t = d[e];
                    t && (f[t.lane] === void 0 && m++, f[t.lane] = e, p[t.lane] = t.end)
                }
                for (let i = u; i < e; i++) {
                    let e = r(i),
                        c = this.laneAssignments.get(i),
                        u, h, g = o === `estimate` || l.has(e);
                    if (c !== void 0 && this.options.lanes > 1) {
                        u = c;
                        let e = f[u],
                            r = e === void 0 ? void 0 : d[e];
                        h = r ? r.end + s : t + n
                    } else if (m === a) {
                        let e = 0,
                            t = p[0],
                            n = f[0];
                        for (let r = 1; r < a; r++) {
                            let i = p[r];
                            (i < t || i === t && f[r] < n) && (e = r, t = i, n = f[r])
                        }
                        u = e, h = t + s, g && this.laneAssignments.set(i, u)
                    } else u = i % this.options.lanes, h = t + n, g && this.laneAssignments.set(i, u);
                    let _ = l.get(e),
                        v = typeof _ == `number` ? _ : this.options.estimateSize(i),
                        y = h + v;
                    d[i] = {
                        index: i,
                        start: h,
                        size: v,
                        end: y,
                        key: e,
                        lane: u
                    }, f[u] === void 0 && m++, f[u] = i, p[u] = y
                }
                return this.measurementsCache = d, d
            }, {
                key: !1,
                debug: () => this.options.debug
            }), this.calculateRange = Z(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (e, t, n, r) => e.length === 0 || t === 0 ? (this.range = null, null) : (this.range = rt(e, t, n, r, r === 1 && this._flatMeasurements != null ? this._flatMeasurements : null), this.range), {
                key: !1,
                debug: () => this.options.debug
            }), this.getVirtualIndexes = Z(() => {
                let e = null,
                    t = null,
                    n = this.calculateRange();
                return n && (e = n.startIndex, t = n.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e, t]), [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
            }, (e, t, n, r, i) => r === null || i === null ? [] : e({
                startIndex: r,
                endIndex: i,
                overscan: t,
                count: n
            }), {
                key: !1,
                debug: () => this.options.debug
            }), this.indexFromElement = e => {
                let t = this.options.indexAttribute,
                    n = e.getAttribute(t);
                return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1)
            }, this.shouldMeasureDuringScroll = e => {
                if (!this.scrollState || this.scrollState.behavior !== `smooth`) return !0;
                let t = this.scrollState.index ? ? this.getVirtualItemForOffset(this.scrollState.lastTargetOffset) ? .index;
                if (t !== void 0 && this.range) {
                    let n = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)),
                        r = Math.max(0, t - n),
                        i = Math.min(this.options.count - 1, t + n);
                    return e >= r && e <= i
                }
                return !0
            }, this.measureElement = e => {
                if (!e) {
                    this.elementsCache.forEach((e, t) => {
                        e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t))
                    });
                    return
                }
                let t = this.indexFromElement(e),
                    n = this.options.getItemKey(t),
                    r = this.elementsCache.get(n);
                r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(n, e)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(t) && this.resizeItem(t, this.options.measureElement(e, void 0, this))
            }, this.resizeItem = (e, t) => {
                if (e < 0 || e >= this.options.count) return;
                let n, r, i, a = this._flatMeasurements;
                if (this.options.lanes === 1 && a !== null) i = this.options.getItemKey(e), r = a[e * 2], n = a[e * 2 + 1];
                else {
                    let t = this.measurementsCache[e];
                    if (!t) return;
                    i = t.key, r = t.start, n = t.size
                }
                let o = t - (this.itemSizeCache.get(i) ? ? n);
                if (o !== 0) {
                    let a = this.options.anchorTo === `end` && this.scrollState ? .behavior !== `smooth` && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold,
                        s = a ? this.getTotalSize() : 0,
                        c = this.scrollState ? .behavior !== `smooth` && (this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? r < this.getScrollOffset() + this.scrollAdjustments && (!this.itemSizeCache.has(i) || this.scrollDirection !== `backward`) : this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e] ? ? {
                            index: e,
                            key: i,
                            start: r,
                            size: n,
                            end: r + n,
                            lane: 0
                        }, o, this));
                    (this.pendingMin === null || e < this.pendingMin) && (this.pendingMin = e), this.itemSizeCache.set(i, t), this.itemSizeCacheVersion++, a ? this.applyScrollAdjustment(this.getTotalSize() - s) : c && this.applyScrollAdjustment(o), this.notify(!1)
                }
            }, this.getVirtualItems = Z(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, t) => {
                let n = [];
                for (let r = 0, i = e.length; r < i; r++) {
                    let i = t[e[r]];
                    n.push(i)
                }
                return n
            }, {
                key: !1,
                debug: () => this.options.debug
            }), this.getVirtualItemForOffset = e => {
                let t = this.getMeasurements();
                if (t.length === 0) return;
                let n = this._flatMeasurements,
                    r = this.options.lanes === 1 && n != null;
                return Be(t[tt(0, t.length - 1, r ? e => n[e * 2] : e => Be(t[e]).start, e)])
            }, this.getMaxScrollOffset = () => {
                if (!this.scrollElement) return 0;
                if (`scrollHeight` in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight; {
                    let e = this.scrollElement.document.documentElement;
                    return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight
                }
            }, this.getVirtualDistanceFromEnd = () => Math.max(this.getTotalSize() - this.getSize() - this.getScrollOffset(), 0), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (e = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= e, this.getOffsetForAlignment = (e, t, n = 0) => {
                if (!this.scrollElement) return 0;
                let r = this.getSize(),
                    i = this.getScrollOffset();
                t === `auto` && (t = e >= i + r ? `end` : `start`), t === `center` ? e += (n - r) / 2 : t === `end` && (e -= r);
                let a = this.getMaxScrollOffset();
                return Math.max(Math.min(a, e), 0)
            }, this.getOffsetForIndex = (e, t = `auto`) => {
                e = Math.max(0, Math.min(e, this.options.count - 1));
                let n = this.getSize(),
                    r = this.getScrollOffset(),
                    i = this.measurementsCache[e];
                if (!i) return;
                if (t === `auto`)
                    if (i.end >= r + n - this.options.scrollPaddingEnd) t = `end`;
                    else if (i.start <= r + this.options.scrollPaddingStart) t = `start`;
                else return [r, t];
                if (t === `end` && e === this.options.count - 1) return [this.getMaxScrollOffset(), t];
                let a = t === `end` ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
                return [this.getOffsetForAlignment(a, t, i.size), t]
            }, this.scrollToOffset = (e, {
                align: t = `start`,
                behavior: n = `auto`
            } = {}) => {
                this._iosDeferredAdjustment = 0;
                let r = this.getOffsetForAlignment(e, t),
                    i = this.now();
                this.scrollState = {
                    index: null,
                    align: t,
                    behavior: n,
                    startedAt: i,
                    lastTargetOffset: r,
                    stableFrames: 0
                }, this._scrollToOffset(r, {
                    adjustments: void 0,
                    behavior: n
                }), this.scheduleScrollReconcile()
            }, this.scrollToIndex = (e, {
                align: t = `auto`,
                behavior: n = `auto`
            } = {}) => {
                this._iosDeferredAdjustment = 0, e = Math.max(0, Math.min(e, this.options.count - 1));
                let r = this.getOffsetForIndex(e, t);
                if (!r) return;
                let [i, a] = r, o = this.now();
                this.scrollState = {
                    index: e,
                    align: a,
                    behavior: n,
                    startedAt: o,
                    lastTargetOffset: i,
                    stableFrames: 0
                }, this._scrollToOffset(i, {
                    adjustments: void 0,
                    behavior: n
                }), this.scheduleScrollReconcile()
            }, this.scrollBy = (e, {
                behavior: t = `auto`
            } = {}) => {
                let n = this.getScrollOffset() + e,
                    r = this.now();
                this.scrollState = {
                    index: null,
                    align: `start`,
                    behavior: t,
                    startedAt: r,
                    lastTargetOffset: n,
                    stableFrames: 0
                }, this._scrollToOffset(n, {
                    adjustments: void 0,
                    behavior: t
                }), this.scheduleScrollReconcile()
            }, this.scrollToEnd = ({
                behavior: e = `auto`
            } = {}) => {
                if (this.options.count > 0) {
                    this.scrollToIndex(this.options.count - 1, {
                        align: `end`,
                        behavior: e
                    });
                    return
                }
                this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
                    behavior: e
                })
            }, this.getTotalSize = () => {
                let e = this.getMeasurements(),
                    t;
                if (e.length === 0) t = this.options.paddingStart;
                else if (this.options.lanes === 1) {
                    let n = e.length - 1,
                        r = this._flatMeasurements;
                    t = r == null ? e[n] ? .end ? ? 0 : r[n * 2] + r[n * 2 + 1]
                } else {
                    let n = Array(this.options.lanes).fill(null),
                        r = e.length - 1;
                    for (; r >= 0 && n.some(e => e === null);) {
                        let t = e[r];
                        n[t.lane] === null && (n[t.lane] = t.end), r--
                    }
                    t = Math.max(...n.filter(e => e !== null))
                }
                return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0)
            }, this.takeSnapshot = () => {
                let e = [];
                if (this.itemSizeCache.size === 0) return e;
                let t = this.getMeasurements();
                for (let n of t) n && this.itemSizeCache.has(n.key) && e.push({
                    index: n.index,
                    key: n.key,
                    start: n.start,
                    size: n.size,
                    end: n.end,
                    lane: n.lane
                });
                return e
            }, this._scrollToOffset = (e, {
                adjustments: t,
                behavior: n
            }) => {
                this._intendedScrollOffset = e + (t ? ? 0), this.options.scrollToFn(e, {
                    behavior: n,
                    adjustments: t
                }, this)
            }, this.measure = () => {
                this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1)
            }, this.setOptions(e)
        }
        applyScrollAdjustment(e, t) {
            e !== 0 && (Ue() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? this._iosDeferredAdjustment += e : (this._scrollToOffset(this.getScrollOffset(), {
                adjustments: this.scrollAdjustments += e,
                behavior: t
            }), this.scrollOffset !== null && (this.scrollOffset += this.scrollAdjustments, this.scrollOffset < 0 && (this.scrollOffset = 0), this.scrollAdjustments = 0)))
        }
        scheduleScrollReconcile() {
            if (!this.targetWindow) {
                this.scrollState = null;
                return
            }
            this.rafId ? ? = this.targetWindow.requestAnimationFrame(() => {
                this.rafId = null, this.reconcileScroll()
            })
        }
        reconcileScroll() {
            if (!this.scrollState || !this.scrollElement) return;
            if (this.now() - this.scrollState.startedAt > 5e3) {
                this.scrollState = null;
                return
            }
            let e = this.scrollState.index == null ? void 0 : this.getOffsetForIndex(this.scrollState.index, this.scrollState.align),
                t = e ? e[0] : this.scrollState.lastTargetOffset,
                n = t !== this.scrollState.lastTargetOffset;
            if (!n && Ve(t, this.getScrollOffset())) {
                if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= 1) {
                    this.getScrollOffset() !== t && this._scrollToOffset(t, {
                        adjustments: void 0,
                        behavior: `auto`
                    }), this.scrollState = null;
                    return
                }
            } else if (this.scrollState.stableFrames = 0, n) {
                let e = this.getSize() || 600,
                    n = Math.abs(t - this.getScrollOffset()),
                    r = this.scrollState.behavior === `smooth` && n > e;
                this.scrollState.lastTargetOffset = t, r || (this.scrollState.behavior = `auto`), this._scrollToOffset(t, {
                    adjustments: void 0,
                    behavior: r ? `smooth` : `auto`
                })
            }
            this.scheduleScrollReconcile()
        }
    },
    tt = (e, t, n, r) => {
        for (; e <= t;) {
            let i = (e + t) / 2 | 0,
                a = n(i);
            if (a < r) e = i + 1;
            else if (a > r) t = i - 1;
            else return i
        }
        return e > 0 ? e - 1 : 0
    };

function nt(e, t, n) {
    let r = 0;
    for (; r <= t;) {
        let i = (r + t) / 2 | 0,
            a = e[i * 2];
        if (a < n) r = i + 1;
        else if (a > n) t = i - 1;
        else return i
    }
    return r > 0 ? r - 1 : 0
}

function rt(e, t, n, r, i) {
    let a = e.length - 1;
    if (e.length <= r) return {
        startIndex: 0,
        endIndex: a
    };
    if (r === 1 && i !== null) {
        let e = nt(i, a, n),
            r = e,
            o = n + t;
        for (; r < a && i[r * 2] + i[r * 2 + 1] < o;) r++;
        return {
            startIndex: e,
            endIndex: r
        }
    }
    let o = tt(0, a, t => e[t].start, n),
        s = o;
    if (r === 1)
        for (; s < a && e[s].end < n + t;) s++;
    else if (r > 1) {
        let i = Array(r).fill(0);
        for (; s < a && i.some(e => e < n + t);) {
            let t = e[s];
            i[t.lane] = t.end, s++
        }
        let c = Array(r).fill(n + t);
        for (; o >= 0 && c.some(e => e >= n);) {
            let t = e[o];
            c[t.lane] = t.start, o--
        }
        o = Math.max(0, o - o % r), s = Math.min(a, s + (r - 1 - s % r))
    }
    return {
        startIndex: o,
        endIndex: s
    }
}

function it(e) {
    let t = new et(C(e)),
        r = E(t),
        i = t._didMount();
    return n(() => C(e).getScrollElement(), e => {
        e && t._willUpdate()
    }, {
        immediate: !0
    }), n(() => C(e), e => {
        t.setOptions({ ...e,
            onChange: (t, n) => {
                var i;
                v(r), (i = e.onChange) == null || i.call(e, t, n)
            }
        }), t._willUpdate(), v(r)
    }, {
        immediate: !0
    }), c(i), r
}

function at(e) {
    return it(h(() => ({
        observeElementRect: qe,
        observeElementOffset: Ze,
        scrollToFn: $e,
        ...C(e)
    })))
}
var ot = M({
        __name: `ListboxVirtualizer`,
        props: {
            options: {
                type: Array,
                required: !0
            },
            overscan: {
                type: Number,
                required: !1
            },
            estimateSize: {
                type: [Number, Function],
                required: !1
            },
            textContent: {
                type: Function,
                required: !1
            }
        },
        setup(t) {
            let n = t,
                r = N(),
                i = X(),
                a = V(),
                {
                    getItems: o
                } = pe();
            i.isVirtual.value = !0;
            let s = h(() => {
                    let e = a.value;
                    if (e) {
                        let t = window.getComputedStyle(e);
                        return {
                            start: Number.parseFloat(t.paddingBlockStart || t.paddingTop),
                            end: Number.parseFloat(t.paddingBlockEnd || t.paddingBottom)
                        }
                    }
                    return {
                        start: 0,
                        end: 0
                    }
                }),
                c = at({
                    get scrollPaddingStart() {
                        return s.value.start
                    },
                    get scrollPaddingEnd() {
                        return s.value.end
                    },
                    get count() {
                        return n.options.length
                    },
                    get horizontal() {
                        return i.orientation.value === `horizontal`
                    },
                    estimateSize(e) {
                        return typeof n.estimateSize == `function` ? n.estimateSize(e) : n.estimateSize ? ? 28
                    },
                    getScrollElement() {
                        return a.value
                    },
                    overscan: n.overscan ? ? 12
                }),
                l = h(() => c.value.getVirtualItems().map(e => {
                    let t = r.default({
                            option: n.options[e.index],
                            virtualizer: c.value,
                            virtualItem: e
                        })[0],
                        i = t.type === f && Array.isArray(t.children) ? t.children.find(e => typeof e.type != `symbol`) : t;
                    return {
                        item: e,
                        is: p(i, {
                            key: `${e.key}`,
                            "data-index": e.index,
                            "aria-setsize": n.options.length,
                            "aria-posinset": e.index + 1,
                            style: {
                                position: `absolute`,
                                top: 0,
                                left: 0,
                                transform: `translateY(${e.start}px)`,
                                overflowAnchor: `none`
                            }
                        })
                    }
                }));
            i.virtualFocusHook.on(({
                event: e,
                scroll: t
            }) => {
                let r = n.options.findIndex(e => Array.isArray(i.modelValue.value) ? Y(e, i.modelValue.value[0], i.by) : Y(e, i.modelValue.value, i.by));
                r === -1 ? t ? i.highlightFirstItem() : requestAnimationFrame(() => {
                    let e = o().find(e => e.ref.dataset.disabled !== ``) ? .ref;
                    e && i.changeHighlight(e, !1, !1)
                }) : (e ? .preventDefault(), c.value.scrollToIndex(r, {
                    align: `start`
                }), requestAnimationFrame(() => {
                    let n = Te(a.value);
                    n && (i.changeHighlight(n, t, t ? void 0 : !1), e && n ? .focus())
                }))
            }), i.virtualHighlightHook.on(e => {
                let t = n.options.findIndex(t => Y(t, e, i.by));
                c.value.scrollToIndex(t, {
                    align: `start`
                }), requestAnimationFrame(() => {
                    let e = Te(a.value);
                    e && i.changeHighlight(e)
                })
            });
            let u = z(``, 1e3),
                d = h(() => {
                    let e = e => n.textContent ? n.textContent(e) : e ? .toString().toLowerCase();
                    return n.options.map((t, n) => ({
                        index: n,
                        textContent: e(t)
                    }))
                });

            function _(e, t) {
                if (!i.firstValue ? .value || !i.multiple.value || !Array.isArray(i.modelValue.value)) return;
                let r = o().filter(e => e.ref.dataset.disabled !== ``).find(e => e.ref === i.highlightedElement.value) ? .value;
                if (!r) return;
                let a = null;
                switch (t) {
                    case `prev`:
                    case `next`:
                        a = Ce(n.options, i.firstValue.value, r);
                        break;
                    case `first`:
                        a = Ce(n.options, i.firstValue.value, n.options ? .[0]);
                        break;
                    case `last`:
                        a = Ce(n.options, i.firstValue.value, n.options.at(-1))
                }
                i.modelValue.value = a
            }
            return i.virtualKeydownHook.on(e => {
                let t = e.altKey || e.ctrlKey || e.metaKey;
                if (e.key === `Tab` && !t) return;
                let r = Se[e.key];
                if (t && e.key === `a` && i.multiple.value ? (e.preventDefault(), i.modelValue.value = [...n.options], r = `last`) : e.shiftKey && r && _(e, r), [`first`, `last`].includes(r)) {
                    e.preventDefault();
                    let t = r === `first` ? 0 : n.options.length - 1;
                    c.value.scrollToIndex(t), requestAnimationFrame(() => {
                        let e = o(),
                            t = r === `first` ? e[0] : e.at(-1);
                        t && i.changeHighlight(t.ref)
                    })
                } else if (!r && !t) {
                    u.value += e.key;
                    let t = Number(G() ? .getAttribute(`data-index`)),
                        n = d.value[t].textContent,
                        r = d.value.map(e => e.textContent ? ? ``),
                        o = de(r, u.value, n),
                        s = d.value.find(e => e.textContent === o);
                    s && (c.value.scrollToIndex(s.index, {
                        align: `start`
                    }), requestAnimationFrame(() => {
                        let e = a.value.querySelector(`[data-index="${s.index}"]`);
                        e instanceof HTMLElement && i.changeHighlight(e)
                    }))
                }
            }), (t, n) => (m(), j(`div`, {
                "data-reka-virtualizer": ``,
                style: w({
                    position: `relative`,
                    width: `100%`,
                    height: `${C(c).getTotalSize()}px`
                })
            }, [(m(!0), j(f, null, A(l.value, ({
                is: t,
                item: n
            }) => (m(), e(g(t), {
                key: n.index
            }))), 128))], 4))
        }
    }),
    [$, st] = U(`ComboboxRoot`),
    ct = M({
        __name: `ComboboxRoot`,
        props: {
            open: {
                type: Boolean,
                required: !1,
                default: void 0
            },
            defaultOpen: {
                type: Boolean,
                required: !1
            },
            resetSearchTermOnBlur: {
                type: Boolean,
                required: !1,
                default: !0
            },
            resetSearchTermOnSelect: {
                type: Boolean,
                required: !1,
                default: !0
            },
            openOnFocus: {
                type: Boolean,
                required: !1,
                default: !1
            },
            openOnClick: {
                type: Boolean,
                required: !1,
                default: !1
            },
            ignoreFilter: {
                type: Boolean,
                required: !1
            },
            resetModelValueOnClear: {
                type: Boolean,
                required: !1,
                default: !1
            },
            modelValue: {
                type: null,
                required: !1
            },
            defaultValue: {
                type: null,
                required: !1
            },
            multiple: {
                type: Boolean,
                required: !1
            },
            dir: {
                type: String,
                required: !1
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            highlightOnHover: {
                type: Boolean,
                required: !1,
                default: !0
            },
            by: {
                type: [String, Function],
                required: !1
            },
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            },
            name: {
                type: String,
                required: !1
            },
            required: {
                type: Boolean,
                required: !1
            }
        },
        emits: [`update:modelValue`, `highlight`, `update:open`],
        setup(n, {
            expose: r,
            emit: i
        }) {
            let c = n,
                u = i,
                {
                    primitiveElement: f,
                    currentElement: p
                } = q(),
                {
                    multiple: g,
                    disabled: _,
                    ignoreFilter: v,
                    resetSearchTermOnSelect: b,
                    openOnFocus: x,
                    openOnClick: S,
                    dir: w,
                    resetModelValueOnClear: E,
                    highlightOnHover: D
                } = ee(c),
                O = ce(w),
                k = B(c, `modelValue`, u, {
                    defaultValue: c.defaultValue ? ? (g.value ? [] : void 0),
                    passive: c.modelValue === void 0,
                    deep: !0
                }),
                A = B(c, `open`, u, {
                    defaultValue: c.defaultOpen,
                    passive: c.open === void 0
                });
            async function j(e) {
                A.value = e, U.value = ``, e ? (await s(), f.value ? .highlightSelected(), N.value = !0, I.value ? .focus()) : (N.value = !1, setTimeout(() => {
                    !e && c.resetSearchTermOnBlur && M.trigger()
                }, 1))
            }
            let M = R(),
                N = t(!1),
                F = t(!1),
                I = t(),
                L = t(),
                te = h(() => f.value ? .highlightedElement ? ? void 0),
                z = t(new Map),
                V = t(new Map),
                {
                    contains: H
                } = we({
                    sensitivity: `base`
                }),
                U = t(``),
                W = h(e => {
                    if (!U.value || c.ignoreFilter || F.value) return {
                        count: z.value.size,
                        items: e ? .items ? ? new Map,
                        groups: e ? .groups ? ? new Set(V.value.keys())
                    };
                    let t = 0,
                        n = new Map,
                        r = new Set;
                    for (let [e, r] of z.value) {
                        let i = H(r, U.value);
                        n.set(e, +!!i), i && t++
                    }
                    for (let [e, t] of V.value)
                        for (let i of t)
                            if (n.get(i) > 0) {
                                r.add(e);
                                break
                            }
                    return {
                        count: t,
                        items: n,
                        groups: r
                    }
                }),
                G = P();
            return d(() => {
                G ? .exposed && (G.exposed.highlightItem = f.value ? .highlightItem, G.exposed.highlightFirstItem = f.value ? .highlightFirstItem, G.exposed.highlightSelected = f.value ? .highlightSelected)
            }), r({
                filtered: W,
                highlightedElement: te,
                highlightItem: f.value ? .highlightItem,
                highlightFirstItem: f.value ? .highlightFirstItem,
                highlightSelected: f.value ? .highlightSelected
            }), st({
                modelValue: k,
                multiple: g,
                disabled: _,
                open: A,
                onOpenChange: j,
                contentId: ``,
                isUserInputted: N,
                isVirtual: F,
                inputElement: I,
                highlightedElement: te,
                onInputElementChange: e => I.value = e,
                triggerElement: L,
                onTriggerElementChange: e => L.value = e,
                parentElement: p,
                resetSearchTermOnSelect: b,
                onResetSearchTerm: M.on,
                allItems: z,
                allGroups: V,
                filterSearch: U,
                filterState: W,
                ignoreFilter: v,
                openOnFocus: x,
                openOnClick: S,
                resetModelValueOnClear: E
            }), (t, n) => (m(), e(C(me), null, {
                default: l(() => [y(C(Oe), a({
                    ref_key: `primitiveElement`,
                    ref: f
                }, t.$attrs, {
                    modelValue: C(k),
                    "onUpdate:modelValue": n[0] || = e => o(k) ? k.value = e : null,
                    style: {
                        pointerEvents: C(A) ? `auto` : void 0
                    },
                    as: t.as,
                    "as-child": t.asChild,
                    dir: C(O),
                    multiple: C(g),
                    name: t.name,
                    required: t.required,
                    disabled: C(_),
                    "highlight-on-hover": C(D),
                    by: c.by,
                    onHighlight: n[1] || = e => u(`highlight`, e)
                }), {
                    default: l(() => [T(t.$slots, `default`, {
                        open: C(A),
                        modelValue: C(k)
                    })]),
                    _: 3
                }, 16, [`modelValue`, `style`, `as`, `as-child`, `dir`, `multiple`, `name`, `required`, `disabled`, `highlight-on-hover`, `by`])]),
                _: 3
            }))
        }
    }),
    lt = M({
        __name: `ComboboxAnchor`,
        props: {
            reference: {
                type: null,
                required: !1
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
        setup(t) {
            let {
                forwardRef: n
            } = J();
            return (t, r) => (m(), e(C(he), {
                "as-child": ``,
                reference: t.reference
            }, {
                default: l(() => [y(C(H), a({
                    ref: C(n),
                    "as-child": t.asChild,
                    as: t.as
                }, t.$attrs), {
                    default: l(() => [T(t.$slots, `default`)]),
                    _: 3
                }, 16, [`as-child`, `as`])]),
                _: 3
            }, 8, [`reference`]))
        }
    }),
    [ut, dt] = U(`ComboboxContent`),
    ft = M({
        __name: `ComboboxContentImpl`,
        props: {
            position: {
                type: String,
                required: !1,
                default: `inline`
            },
            bodyLock: {
                type: Boolean,
                required: !1
            },
            hideWhenEmpty: {
                type: Boolean,
                required: !1
            },
            memoDependencies: {
                type: Array,
                required: !1
            },
            side: {
                type: null,
                required: !1
            },
            sideOffset: {
                type: Number,
                required: !1
            },
            sideFlip: {
                type: Boolean,
                required: !1
            },
            align: {
                type: null,
                required: !1
            },
            alignOffset: {
                type: Number,
                required: !1
            },
            alignFlip: {
                type: Boolean,
                required: !1
            },
            avoidCollisions: {
                type: Boolean,
                required: !1
            },
            collisionBoundary: {
                type: null,
                required: !1
            },
            collisionPadding: {
                type: [Number, Object],
                required: !1
            },
            arrowPadding: {
                type: Number,
                required: !1
            },
            hideShiftedArrow: {
                type: Boolean,
                required: !1
            },
            sticky: {
                type: String,
                required: !1
            },
            hideWhenDetached: {
                type: Boolean,
                required: !1
            },
            positionStrategy: {
                type: String,
                required: !1
            },
            updatePositionStrategy: {
                type: String,
                required: !1
            },
            disableUpdateOnLayoutShift: {
                type: Boolean,
                required: !1
            },
            prioritizePosition: {
                type: Boolean,
                required: !1
            },
            reference: {
                type: null,
                required: !1
            },
            dir: {
                type: String,
                required: !1
            },
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            },
            disableOutsidePointerEvents: {
                type: Boolean,
                required: !1
            }
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`],
        setup(n, {
            emit: r
        }) {
            let o = n,
                s = r,
                {
                    position: c
                } = ee(o),
                u = $(),
                f = h(() => u.ignoreFilter.value ? u.allItems.value.size === 0 : u.filterState.value.count === 0),
                {
                    forwardRef: p,
                    currentElement: _
                } = J();
            ae(o.bodyLock), ue(), K(u.parentElement);
            let v = h(() => o.position === `popper` ? o : {}),
                b = L(v.value),
                x = {
                    boxSizing: `border-box`,
                    "--reka-combobox-content-transform-origin": `var(--reka-popper-transform-origin)`,
                    "--reka-combobox-content-available-width": `var(--reka-popper-available-width)`,
                    "--reka-combobox-content-available-height": `var(--reka-popper-available-height)`,
                    "--reka-combobox-trigger-width": `var(--reka-popper-anchor-width)`,
                    "--reka-combobox-trigger-height": `var(--reka-popper-anchor-height)`
                };
            dt({
                position: c
            });
            let S = t(!1);
            d(() => {
                u.inputElement.value && (S.value = _.value.contains(u.inputElement.value), S.value && u.inputElement.value.focus())
            }), O(() => {
                let e = G();
                S.value && (!e || e === document.body) && u.triggerElement.value ? .focus()
            });

            function w(e) {
                if (u.parentElement.value ? .contains(e)) return !0;
                let t = (e instanceof Element ? e.closest(`label`) : null) ? .control;
                return !!t && !!u.parentElement.value ? .contains(t)
            }
            return (t, n) => (m(), e(C(ke), {
                "as-child": ``
            }, {
                default: l(() => [y(C(oe), {
                    "as-child": ``,
                    onMountAutoFocus: n[5] || = i(() => {}, [`prevent`]),
                    onUnmountAutoFocus: n[6] || = i(() => {}, [`prevent`])
                }, {
                    default: l(() => [y(C(ne), {
                        "as-child": ``,
                        "disable-outside-pointer-events": t.disableOutsidePointerEvents,
                        onDismiss: n[0] || = e => C(u).onOpenChange(!1),
                        onFocusOutside: n[1] || = e => {
                            w(e.target) && e.preventDefault(), s(`focusOutside`, e)
                        },
                        onInteractOutside: n[2] || = e => s(`interactOutside`, e),
                        onEscapeKeyDown: n[3] || = e => s(`escapeKeyDown`, e),
                        onPointerDownOutside: n[4] || = e => {
                            w(e.target) && e.preventDefault(), s(`pointerDownOutside`, e)
                        }
                    }, {
                        default: l(() => [(m(), e(g(C(c) === `popper` ? C(ge) : C(H)), a({ ...t.$attrs,
                            ...C(b)
                        }, {
                            id: C(u).contentId,
                            ref: C(p),
                            "memo-dependencies": C(c) === `popper` ? [C(u).filterSearch.value, C(u).filterState.value] : void 0,
                            "data-state": C(u).open.value ? `open` : `closed`,
                            "data-empty": f.value ? `` : void 0,
                            style: {
                                display: o.hideWhenEmpty && f.value ? `none` : `flex`,
                                flexDirection: `column`,
                                outline: `none`,
                                ...C(c) === `popper` ? x : {}
                            }
                        }), {
                            default: l(() => [T(t.$slots, `default`)]),
                            _: 3
                        }, 16, [`id`, `memo-dependencies`, `data-state`, `data-empty`, `style`]))]),
                        _: 3
                    }, 8, [`disable-outside-pointer-events`])]),
                    _: 3
                })]),
                _: 3
            }))
        }
    }),
    pt = M({
        __name: `ComboboxArrow`,
        props: {
            width: {
                type: Number,
                required: !1,
                default: 10
            },
            height: {
                type: Number,
                required: !1,
                default: 5
            },
            rounded: {
                type: Boolean,
                required: !1
            },
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1,
                default: `svg`
            }
        },
        setup(t) {
            let n = t,
                r = $(),
                i = ut();
            return J(), (t, o) => C(r).open.value && C(i).position.value === `popper` ? (m(), e(C(ve), D(a({
                key: 0
            }, n)), {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 16)) : b(`v-if`, !0)
        }
    }),
    mt = M({
        __name: `ComboboxCancel`,
        props: {
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1,
                default: `button`
            }
        },
        setup(t) {
            let n = t;
            J();
            let r = $();

            function i() {
                r.filterSearch.value = ``, r.inputElement.value && (r.inputElement.value.value = ``, r.inputElement.value.focus()), r.resetModelValueOnClear ? .value && (r.modelValue.value = r.multiple.value ? [] : null)
            }
            return (t, r) => (m(), e(C(H), a({
                type: t.as === `button` ? `button` : void 0
            }, n, {
                tabindex: `-1`,
                onClick: i
            }), {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 16, [`type`]))
        }
    }),
    ht = M({
        __name: `ComboboxContent`,
        props: {
            forceMount: {
                type: Boolean,
                required: !1
            },
            position: {
                type: String,
                required: !1
            },
            bodyLock: {
                type: Boolean,
                required: !1
            },
            hideWhenEmpty: {
                type: Boolean,
                required: !1
            },
            memoDependencies: {
                type: Array,
                required: !1
            },
            side: {
                type: null,
                required: !1
            },
            sideOffset: {
                type: Number,
                required: !1
            },
            sideFlip: {
                type: Boolean,
                required: !1
            },
            align: {
                type: null,
                required: !1
            },
            alignOffset: {
                type: Number,
                required: !1
            },
            alignFlip: {
                type: Boolean,
                required: !1
            },
            avoidCollisions: {
                type: Boolean,
                required: !1
            },
            collisionBoundary: {
                type: null,
                required: !1
            },
            collisionPadding: {
                type: [Number, Object],
                required: !1
            },
            arrowPadding: {
                type: Number,
                required: !1
            },
            hideShiftedArrow: {
                type: Boolean,
                required: !1
            },
            sticky: {
                type: String,
                required: !1
            },
            hideWhenDetached: {
                type: Boolean,
                required: !1
            },
            positionStrategy: {
                type: String,
                required: !1
            },
            updatePositionStrategy: {
                type: String,
                required: !1
            },
            disableUpdateOnLayoutShift: {
                type: Boolean,
                required: !1
            },
            prioritizePosition: {
                type: Boolean,
                required: !1
            },
            reference: {
                type: null,
                required: !1
            },
            dir: {
                type: String,
                required: !1
            },
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            },
            disableOutsidePointerEvents: {
                type: Boolean,
                required: !1
            }
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`],
        setup(t, {
            emit: n
        }) {
            let r = _e(t, n),
                {
                    forwardRef: i
                } = J(),
                o = $();
            return o.contentId || = F(void 0, `reka-combobox-content`), (t, n) => (m(), e(C(I), {
                present: t.forceMount || C(o).open.value
            }, {
                default: l(() => [y(ft, a({ ...C(r),
                    ...t.$attrs
                }, {
                    ref: C(i)
                }), {
                    default: l(() => [T(t.$slots, `default`)]),
                    _: 3
                }, 16)]),
                _: 3
            }, 8, [`present`]))
        }
    }),
    gt = M({
        __name: `ComboboxEmpty`,
        props: {
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            }
        },
        setup(t) {
            let n = t,
                r = $(),
                i = h(() => r.ignoreFilter.value ? r.allItems.value.size === 0 : r.filterState.value.count === 0);
            return (t, r) => i.value ? (m(), e(C(H), D(a({
                key: 0
            }, n)), {
                default: l(() => [T(t.$slots, `default`, {}, () => [r[0] || = k(`No options`)])]),
                _: 3
            }, 16)) : b(`v-if`, !0)
        }
    }),
    [_t, vt] = U(`ComboboxGroup`),
    yt = M({
        __name: `ComboboxGroup`,
        props: {
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            }
        },
        setup(t) {
            let n = t,
                r = F(void 0, `reka-combobox-group`),
                i = $(),
                o = h(() => i.ignoreFilter.value ? !0 : !i.filterSearch.value || i.filterState.value.groups.has(r)),
                s = vt({
                    id: r,
                    labelId: ``
                });
            return d(() => {
                i.allGroups.value.has(r) || i.allGroups.value.set(r, new Set)
            }), O(() => {
                i.allGroups.value.delete(r)
            }), (t, i) => (m(), e(C(Ne), a({
                id: C(r),
                "aria-labelledby": C(s).labelId
            }, n, {
                hidden: !o.value || void 0
            }), {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 16, [`id`, `aria-labelledby`, `hidden`]))
        }
    }),
    bt = M({
        __name: `ComboboxInput`,
        props: {
            displayValue: {
                type: Function,
                required: !1
            },
            modelValue: {
                type: String,
                required: !1
            },
            autoFocus: {
                type: Boolean,
                required: !1
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1,
                default: `input`
            }
        },
        emits: [`update:modelValue`],
        setup(t, {
            emit: r
        }) {
            let i = t,
                a = r,
                c = $(),
                f = X(),
                {
                    primitiveElement: p,
                    currentElement: h
                } = q(),
                g = B(i, `modelValue`, a, {
                    passive: i.modelValue === void 0
                });
            d(() => {
                h.value && c.onInputElementChange(h.value)
            });
            let {
                isComposing: _,
                handleCompositionStart: v,
                handleCompositionEnd: y
            } = se(e => {
                let t = e.target;
                t && x(t.value)
            });

            function b(e) {
                _.value || (e.preventDefault(), c.open.value || c.onOpenChange(!0))
            }

            function x(e) {
                c.open.value ? c.filterSearch.value = e : (c.onOpenChange(!0), s(() => {
                    e && (c.filterSearch.value = e, f.highlightFirstItem())
                }))
            }

            function S(e) {
                _.value || x(e.target.value)
            }

            function w() {
                c.openOnFocus.value && !c.open.value && c.onOpenChange(!0)
            }

            function E(e) {
                if (!c.open.value) return;
                let t = e.relatedTarget;
                if (!t) return;
                let n = c.parentElement.value ? .contains(t),
                    r = document.getElementById(c.contentId) ? .contains(t);
                !n && !r && requestAnimationFrame(() => {
                    if (!c.open.value) return;
                    let e = document.activeElement;
                    !c.parentElement.value ? .contains(e) && !document.getElementById(c.contentId) ? .contains(e) && c.onOpenChange(!1)
                })
            }

            function ee() {
                c.openOnClick.value && !c.open.value && c.onOpenChange(!0)
            }

            function D() {
                let e = c.modelValue.value;
                i.displayValue ? g.value = i.displayValue(e) : !c.multiple.value && e && !Array.isArray(e) ? typeof e == `object` ? g.value = `` : g.value = e.toString() : g.value = ``, s(() => {
                    g.value = g.value
                })
            }
            return c.onResetSearchTerm(() => {
                D()
            }), n(c.modelValue, async () => {
                !c.isUserInputted.value && c.resetSearchTermOnSelect.value && D()
            }, {
                immediate: !0,
                deep: !0
            }), n(c.filterState, (e, t) => {
                !c.isVirtual.value && t.count === 0 && f.highlightFirstItem()
            }), (t, n) => (m(), e(C(Ae), {
                ref_key: `primitiveElement`,
                ref: p,
                modelValue: C(g),
                "onUpdate:modelValue": n[0] || = e => o(g) ? g.value = e : null,
                as: t.as,
                "as-child": t.asChild,
                "auto-focus": t.autoFocus,
                disabled: t.disabled,
                "aria-expanded": C(c).open.value,
                "aria-controls": C(c).contentId,
                "aria-autocomplete": `list`,
                role: `combobox`,
                autocomplete: `off`,
                onClick: ee,
                onInput: S,
                onKeydown: u(b, [`down`, `up`]),
                onFocus: w,
                onBlur: E,
                onCompositionstart: C(v),
                onCompositionend: C(y)
            }, {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 8, [`modelValue`, `as`, `as-child`, `auto-focus`, `disabled`, `aria-expanded`, `aria-controls`, `onCompositionstart`, `onCompositionend`]))
        }
    }),
    xt = M({
        __name: `ComboboxItem`,
        props: {
            textValue: {
                type: String,
                required: !1
            },
            value: {
                type: null,
                required: !0
            },
            disabled: {
                type: Boolean,
                required: !1
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
        emits: [`select`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                i = n,
                o = F(void 0, `reka-combobox-item`),
                s = $(),
                c = _t(null),
                {
                    primitiveElement: u,
                    currentElement: f
                } = q();
            if (r.value === ``) throw Error(`A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.`);
            let p = h(() => {
                if (s.isVirtual.value || s.ignoreFilter.value || !s.filterSearch.value) return !0; {
                    let e = s.filterState.value.items.get(o);
                    return e === void 0 || e > 0
                }
            });
            return d(() => {
                s.allItems.value.set(o, r.textValue || f.value.textContent || f.value.innerText);
                let e = c ? .id;
                e && (s.allGroups.value.has(e) ? s.allGroups.value.get(e) ? .add(o) : s.allGroups.value.set(e, new Set([o])))
            }), O(() => {
                s.allItems.value.delete(o)
            }), (t, n) => p.value ? S([p.value, C(s).filterSearch.value, C(s).disabled.value, t.disabled, r.value, r.as, r.asChild, ...Object.values(t.$attrs)], () => (m(), e(C(Le), a({
                key: 0
            }, r, {
                id: C(o),
                ref_key: `primitiveElement`,
                ref: u,
                disabled: C(s).disabled.value || t.disabled,
                onSelect: n[0] || = e => {
                    i(`select`, e), !e.defaultPrevented && (!C(s).multiple.value && !t.disabled && !C(s).disabled.value ? (e.preventDefault(), C(s).onOpenChange(!1), C(s).modelValue.value = r.value) : C(s).multiple.value && C(s).inputElement.value ? .focus())
                }
            }), {
                default: l(() => [T(t.$slots, `default`, {}, () => [k(x(t.value), 1)])]),
                _: 3
            }, 16, [`id`, `disabled`])), n, 1) : b(`v-if`, !0)
        }
    }),
    St = M({
        __name: `ComboboxItemIndicator`,
        props: {
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1,
                default: `span`
            }
        },
        setup(t) {
            let n = t;
            return (t, r) => (m(), e(C(Re), D(_(n)), {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    Ct = M({
        __name: `ComboboxLabel`,
        props: {
            for: {
                type: String,
                required: !1
            },
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1,
                default: `div`
            }
        },
        setup(t) {
            let n = t;
            J();
            let r = _t({
                id: ``,
                labelId: ``
            });
            return r.labelId || = F(void 0, `reka-combobox-group-label`), (t, i) => (m(), e(C(H), a(n, {
                id: C(r).labelId
            }), {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 16, [`id`]))
        }
    }),
    wt = M({
        __name: `ComboboxPortal`,
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
            let n = t;
            return (t, r) => (m(), e(C(ie), D(_(n)), {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    Tt = M({
        __name: `ComboboxSeparator`,
        props: {
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            }
        },
        setup(t) {
            let n = t;
            return J(), (t, r) => (m(), e(C(H), a(n, {
                "aria-hidden": `true`
            }), {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    Et = M({
        __name: `ComboboxTrigger`,
        props: {
            disabled: {
                type: Boolean,
                required: !1
            },
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1,
                default: `button`
            }
        },
        setup(t) {
            let n = t,
                {
                    forwardRef: r,
                    currentElement: i
                } = J(),
                o = $(),
                s = h(() => n.disabled || o.disabled.value || !1);
            return d(() => {
                i.value && o.onTriggerElementChange(i.value)
            }), (t, i) => (m(), e(C(H), a(n, {
                ref: C(r),
                type: t.as === `button` ? `button` : void 0,
                tabindex: `-1`,
                "aria-label": `Show popup`,
                "aria-haspopup": `listbox`,
                "aria-expanded": C(o).open.value,
                "aria-controls": C(o).contentId,
                "data-state": C(o).open.value ? `open` : `closed`,
                disabled: s.value,
                "data-disabled": s.value ? `` : void 0,
                "aria-disabled": s.value ? ? void 0,
                onClick: i[0] || = e => C(o).onOpenChange(!C(o).open.value)
            }), {
                default: l(() => [T(t.$slots, `default`)]),
                _: 3
            }, 16, [`type`, `aria-expanded`, `aria-controls`, `data-state`, `disabled`, `data-disabled`, `aria-disabled`]))
        }
    }),
    Dt = M({
        __name: `ComboboxVirtualizer`,
        props: {
            options: {
                type: Array,
                required: !0
            },
            overscan: {
                type: Number,
                required: !1
            },
            estimateSize: {
                type: [Number, Function],
                required: !1
            },
            textContent: {
                type: Function,
                required: !1
            }
        },
        setup(t) {
            let n = t,
                r = $();
            return r.isVirtual.value = !0, (t, r) => (m(), e(ot, D(_(n)), {
                default: l(e => [T(t.$slots, `default`, D(_(e)))]),
                _: 3
            }, 16))
        }
    });
export {
    we as S, st as _, Ct as a, Oe as b, bt as c, ht as d, mt as f, $ as g, ct as h, wt as i, yt as l, lt as m, Et as n, St as o, pt as p, Tt as r, xt as s, Dt as t, gt as u, at as v, X as x, Ae as y
};