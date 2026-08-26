import {
    $ as e,
    $n as t,
    Cn as n,
    En as r,
    F as i,
    Ft as a,
    Gn as o,
    It as s,
    Nt as c,
    On as l,
    P as u,
    Rt as d,
    Ut as f,
    V as p,
    Yt as m,
    Z as h,
    an as g,
    bt as _,
    ct as v,
    lr as y,
    nn as b,
    or as x,
    pr as S,
    qt as C,
    st as w,
    tt as T,
    ut as E,
    vt as ee,
    wn as D
} from "./dist-DAh4MArN.js";
import {
    n as O,
    t as k
} from "./Presence-DsJ68V4l.js";
import {
    C as A,
    S as j
} from "./Link-_LwZUouH.js";
import {
    S as M,
    T as N,
    i as P,
    s as F
} from "./dist-CVWdmVRe.js";
import {
    T as I,
    h as L
} from "./dist-BnMQmsWl.js";
import {
    a as R,
    c as z
} from "./tv-Dcq2oBvx.js";
import {
    n as te
} from "./Kbd-CnNdwWIQ.js";
import {
    S as ne,
    _ as re,
    a as B,
    b as ie,
    c as V,
    d as H,
    f as ae,
    g as oe,
    h as se,
    i as ce,
    l as le,
    m as ue,
    n as de,
    o as fe,
    p as pe,
    r as me,
    s as he,
    t as ge,
    u as _e,
    x as ve,
    y as ye
} from "./ComboboxVirtualizer-BJOTKEou.js";
import {
    t as U
} from "./getActiveElement-DWEoD8ZB.js";
import {
    i as W,
    r as be
} from "./usePortal-C8FDDOJ7.js";
import {
    t as xe
} from "./useArrowNavigation-LczgkNfS.js";
import {
    a as Se,
    i as Ce,
    t as we
} from "./FocusScope-BOzJiDWr.js";
import {
    t as Te
} from "./useComposing-CAoGWN87.js";
import {
    n as Ee,
    t as De
} from "./usePrimitiveElement-BsEpVwz7.js";
import {
    n as Oe,
    r as ke
} from "./useTypeahead-B8CAC5c7.js";
import {
    t as Ae
} from "./Collection-DHXhcMsG.js";
import {
    t as G
} from "./useForwardExpose-BkJ4ptaU.js";
import {
    a as K,
    i as q,
    n as je,
    r as Me,
    s as J,
    t as Ne
} from "./PopperArrow-DcCRQpSl.js";
import {
    a as Pe,
    c as Fe,
    d as Y,
    f as Ie,
    i as Le,
    l as Re,
    n as ze,
    o as Be,
    r as Ve,
    s as He,
    t as Ue,
    u as We
} from "./utils-DTWskMUQ.js";
import {
    t as Ge
} from "./RovingFocusGroup-0p6cHiw3.js";
import {
    t as Ke
} from "./useNonce-COzqMoKM.js";
var [qe, Je] = z(`AutocompleteRoot`), Ye = E({
    __name: `AutocompleteRoot`,
    props: {
        modelValue: {
            type: String,
            required: !1
        },
        defaultValue: {
            type: String,
            required: !1
        },
        open: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        defaultOpen: {
            type: Boolean,
            required: !1
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        dir: {
            type: String,
            required: !1
        },
        name: {
            type: String,
            required: !1
        },
        required: {
            type: Boolean,
            required: !1
        },
        resetSearchTermOnBlur: {
            type: Boolean,
            required: !1,
            default: !1
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
        highlightOnHover: {
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
    emits: [`update:modelValue`, `highlight`, `update:open`],
    setup(n, {
        expose: r,
        emit: i
    }) {
        let o = n,
            c = i,
            {
                primitiveElement: u,
                currentElement: d
            } = De(),
            {
                disabled: p,
                ignoreFilter: g,
                openOnFocus: _,
                openOnClick: S,
                dir: C,
                highlightOnHover: w
            } = x(o),
            T = Ee(C),
            E = I(o, `modelValue`, c, {
                defaultValue: o.defaultValue ? ? ``,
                passive: o.modelValue === void 0
            }),
            D = I(o, `open`, c, {
                defaultValue: o.defaultOpen,
                passive: o.open === void 0
            }),
            O = h({
                get: () => E.value,
                set: e => {
                    e == null ? E.value = `` : E.value = String(e)
                }
            });
        async function k(e) {
            D.value = e, e ? (B.value = E.value || ``, await s(), u.value ? .highlightSelected(), j.value = !0, N.value ? .focus()) : (j.value = !1, B.value = ``, setTimeout(() => {
                !e && o.resetSearchTermOnBlur && A.trigger()
            }, 1))
        }
        let A = P(),
            j = t(!1),
            M = t(!1),
            N = t(),
            F = t(),
            L = h(() => u.value ? .highlightedElement ? ? void 0),
            R = t(new Map),
            z = t(new Map),
            {
                contains: te
            } = ne({
                sensitivity: `base`
            }),
            B = t(``),
            V = h(e => {
                if (!B.value || o.ignoreFilter || M.value) return {
                    count: R.value.size,
                    items: e ? .items ? ? new Map,
                    groups: e ? .groups ? ? new Set(z.value.keys())
                };
                let t = 0,
                    n = new Map,
                    r = new Set;
                for (let [e, r] of R.value) {
                    let i = te(r, B.value);
                    n.set(e, +!!i), i && t++
                }
                for (let [e, t] of z.value)
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
            H = ee();
        return f(() => {
            H ? .exposed && (H.exposed.highlightItem = u.value ? .highlightItem, H.exposed.highlightFirstItem = u.value ? .highlightFirstItem, H.exposed.highlightSelected = u.value ? .highlightSelected)
        }), r({
            filtered: V,
            highlightedElement: L,
            highlightItem: u.value ? .highlightItem,
            highlightFirstItem: u.value ? .highlightFirstItem,
            highlightSelected: u.value ? .highlightSelected
        }), re({
            modelValue: O,
            multiple: t(!1),
            disabled: p,
            open: D,
            onOpenChange: k,
            contentId: ``,
            isUserInputted: j,
            isVirtual: M,
            inputElement: N,
            highlightedElement: L,
            onInputElementChange: e => N.value = e,
            triggerElement: F,
            onTriggerElementChange: e => F.value = e,
            parentElement: d,
            resetSearchTermOnSelect: t(!1),
            onResetSearchTerm: A.on,
            allItems: R,
            allGroups: z,
            filterSearch: B,
            filterState: V,
            ignoreFilter: g,
            openOnFocus: _,
            openOnClick: S,
            resetModelValueOnClear: t(!0)
        }), Je({
            modelValue: E
        }), (t, n) => (m(), e(y(K), null, {
            default: l(() => [v(y(ie), a({
                ref_key: `primitiveElement`,
                ref: u
            }, t.$attrs, {
                modelValue: O.value,
                "onUpdate:modelValue": n[0] || = e => O.value = e,
                style: {
                    pointerEvents: y(D) ? `auto` : void 0
                },
                as: t.as,
                "as-child": t.asChild,
                dir: y(T),
                name: t.name,
                required: t.required,
                disabled: y(p),
                "highlight-on-hover": y(w),
                onHighlight: n[1] || = e => c(`highlight`, e)
            }), {
                default: l(() => [b(t.$slots, `default`, {
                    open: y(D),
                    modelValue: y(E)
                })]),
                _: 3
            }, 16, [`modelValue`, `style`, `as`, `as-child`, `dir`, `name`, `required`, `disabled`, `highlight-on-hover`])]),
            _: 3
        }))
    }
}), Xe = E({
    __name: `AutocompleteInput`,
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
    setup(t, {
        emit: r
    }) {
        let i = t,
            a = r,
            c = oe(),
            d = qe(),
            p = ve(),
            {
                primitiveElement: h,
                currentElement: g
            } = De(),
            _ = I(i, `modelValue`, a, {
                passive: i.modelValue === void 0
            });
        d.modelValue.value && (_.value = d.modelValue.value), f(() => {
            g.value && c.onInputElementChange(g.value)
        });
        let {
            isComposing: v,
            handleCompositionStart: x,
            handleCompositionEnd: S
        } = Te(e => {
            let t = e.target;
            t && w(t.value)
        });

        function C(e) {
            v.value || (e.preventDefault(), c.open.value || c.onOpenChange(!0))
        }

        function w(e) {
            c.open.value ? c.filterSearch.value = e : (c.onOpenChange(!0), s(() => {
                e && (c.filterSearch.value = e, p.highlightFirstItem())
            })), d.modelValue.value = e
        }

        function T(e) {
            v.value || w(e.target.value)
        }

        function E() {
            c.openOnFocus.value && !c.open.value && c.onOpenChange(!0)
        }

        function ee() {
            c.openOnClick.value && !c.open.value && c.onOpenChange(!0)
        }
        return n(d.modelValue, e => {
            let t = e ? ? ``;
            _.value !== t && (_.value = t)
        }), c.onResetSearchTerm(() => {
            _.value = d.modelValue.value ? ? ``
        }), n(c.filterState, (e, t) => {
            !c.isVirtual.value && t.count === 0 && p.highlightFirstItem()
        }), (t, n) => (m(), e(y(ye), {
            ref_key: `primitiveElement`,
            ref: h,
            modelValue: y(_),
            "onUpdate:modelValue": n[0] || = e => o(_) ? _.value = e : null,
            as: t.as,
            "as-child": t.asChild,
            "auto-focus": t.autoFocus,
            disabled: t.disabled,
            "aria-expanded": y(c).open.value,
            "aria-controls": y(c).contentId,
            "aria-autocomplete": `list`,
            role: `combobox`,
            autocomplete: `off`,
            onClick: ee,
            onInput: T,
            onKeydown: u(C, [`down`, `up`]),
            onFocus: E,
            onCompositionstart: y(x),
            onCompositionend: y(S)
        }, {
            default: l(() => [b(t.$slots, `default`)]),
            _: 3
        }, 8, [`modelValue`, `as`, `as-child`, `auto-focus`, `disabled`, `aria-expanded`, `aria-controls`, `onCompositionstart`, `onCompositionend`]))
    }
}), Ze = E({
    __name: `ComboboxViewport`,
    props: {
        nonce: {
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
        }
    },
    setup(e) {
        let t = e,
            {
                forwardRef: n
            } = G(),
            {
                nonce: r
            } = x(t),
            i = Ke(r),
            o = oe();
        return (e, r) => (m(), T(p, null, [v(y(R), a({ ...e.$attrs,
            ...t
        }, {
            ref: y(n),
            "data-reka-combobox-viewport": ``,
            role: `presentation`,
            style: {
                position: `relative`,
                flex: y(o).isVirtual.value ? void 0 : 1,
                overflow: `auto`
            }
        }), {
            default: l(() => [b(e.$slots, `default`)]),
            _: 3
        }, 16, [`style`]), v(y(R), {
            as: `style`,
            nonce: y(i)
        }, {
            default: l(() => r[0] || = [w(` /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } `)]),
            _: 1,
            __: [0]
        }, 8, [`nonce`])], 64))
    }
}), Qe = E({
    __name: `MenuAnchor`,
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
        let n = t;
        return (t, r) => (m(), e(y(q), S(_(n)), {
            default: l(() => [b(t.$slots, `default`)]),
            _: 3
        }, 16))
    }
}), $e = E({
    __name: `MenuArrow`,
    props: {
        width: {
            type: Number,
            required: !1
        },
        height: {
            type: Number,
            required: !1
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
            required: !1
        }
    },
    setup(t) {
        let n = t;
        return (t, r) => (m(), e(y(Ne), S(_(n)), {
            default: l(() => [b(t.$slots, `default`)]),
            _: 3
        }, 16))
    }
});

function et() {
    let e = t(!1);
    return f(() => {
        L(`keydown`, () => {
            e.value = !0
        }, {
            capture: !0,
            passive: !0
        }), L([`pointerdown`, `pointermove`], () => {
            e.value = !1
        }, {
            capture: !0,
            passive: !0
        })
    }), e
}
var tt = F(et),
    [X, nt] = z([`MenuRoot`, `MenuSub`], `MenuContext`),
    [Z, rt] = z(`MenuRoot`),
    it = E({
        __name: `MenuRoot`,
        props: {
            open: {
                type: Boolean,
                required: !1,
                default: !1
            },
            dir: {
                type: String,
                required: !1
            },
            modal: {
                type: Boolean,
                required: !1,
                default: !0
            }
        },
        emits: [`update:open`],
        setup(n, {
            emit: r
        }) {
            let i = n,
                a = r,
                {
                    modal: o,
                    dir: s
                } = x(i),
                c = Ee(s),
                u = I(i, `open`, a),
                d = t(),
                f = tt();
            return nt({
                open: u,
                onOpenChange: e => {
                    u.value = e
                },
                content: d,
                onContentChange: e => {
                    d.value = e
                }
            }), rt({
                onClose: () => {
                    u.value = !1
                },
                isUsingKeyboardRef: f,
                dir: c,
                modal: o
            }), (t, n) => (m(), e(y(K), null, {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }))
        }
    }),
    [Q, at] = z(`MenuContent`),
    ot = E({
        __name: `MenuContentImpl`,
        props: c({
            loop: {
                type: Boolean,
                required: !1
            },
            disableOutsidePointerEvents: {
                type: Boolean,
                required: !1
            },
            disableOutsideScroll: {
                type: Boolean,
                required: !1
            },
            trapFocus: {
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
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            }
        }, { ...je
        }),
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`, `dismiss`],
        setup(r, {
            emit: i
        }) {
            let a = r,
                o = i,
                s = X(),
                c = Z(),
                {
                    trapFocus: u,
                    disableOutsidePointerEvents: d,
                    loop: f
                } = x(a);
            ke(), Se(d.value);
            let p = t(``),
                h = t(0),
                g = t(0),
                _ = t(null),
                S = t(`right`),
                w = t(0),
                T = t(null),
                E = t(),
                {
                    forwardRef: ee,
                    currentElement: D
                } = G(),
                {
                    handleTypeaheadSearch: O
                } = Oe(),
                k = t();

            function A(e) {
                let t = xe(e, k.value || U(), D.value, {
                    loop: f.value,
                    arrowKeyOptions: `vertical`,
                    dir: c ? .dir.value,
                    focus: !1,
                    attributeName: `[data-reka-collection-item]:not([data-disabled])`
                });
                t && (k.value = t, t.scrollIntoView({
                    block: `nearest`
                }))
            }

            function j() {
                k.value && k.value.click()
            }
            let M = t(),
                N = t();
            n(k, e => {
                if (N.value && (e === void 0 || e !== N.value.trigger.value)) {
                    if (e === void 0) return;
                    N.value.onOpenChange(!1), N.value = void 0
                }
            }), n(D, e => {
                s.onContentChange(e)
            }), C(() => {
                window.clearTimeout(h.value)
            });

            function P(e) {
                return S.value === _.value ? .side && Ie(e, _.value ? .area)
            }
            async function F(e) {
                o(`openAutoFocus`, e), !e.defaultPrevented && (e.preventDefault(), D.value ? .focus({
                    preventScroll: !0
                }))
            }

            function I(e) {
                if (e.defaultPrevented) return;
                let t = e.target,
                    n = t.closest(`[data-reka-menu-content]`) === e.currentTarget,
                    r = [`input`, `textarea`].includes(t.tagName.toLowerCase()),
                    i = e.ctrlKey || e.altKey || e.metaKey,
                    a = e.key.length === 1,
                    o = xe(e, U(), D.value, {
                        loop: f.value,
                        arrowKeyOptions: `vertical`,
                        dir: c ? .dir.value,
                        focus: !0,
                        attributeName: `[data-reka-collection-item]:not([data-disabled])`
                    });
                if (o) return o ? .focus();
                if (e.code === `Space`) return;
                let s = E.value ? .getItems() ? ? [];
                if (n && (e.key === `Tab` && c.modal.value && e.preventDefault(), !i && a && !r && O(e.key, s)), e.target !== D.value || !Ue.includes(e.key)) return;
                e.preventDefault();
                let l = [...s.map(e => e.ref)];
                Ve.includes(e.key) && l.reverse(), He(l)
            }

            function L(e) {
                e ? .currentTarget ? .contains ? .(e.target) || (window.clearTimeout(h.value), p.value = ``)
            }

            function R(e) {
                if (!Y(e)) return;
                let t = e.target,
                    n = w.value !== e.clientX;
                if ((e ? .currentTarget) ? .contains(t) && n) {
                    let t = e.clientX > w.value ? `right` : `left`;
                    S.value = t, w.value = e.clientX
                }
            }

            function z(e) {
                Y(e) && M.value && M.value.focus()
            }
            return at({
                onItemEnter: e => !!P(e),
                onItemLeave: e => P(e) ? !0 : ([`INPUT`, `TEXTAREA`].includes(U() ? .tagName || ``) || D.value ? .focus(), T.value = null, !1),
                onTriggerLeave: e => !!P(e),
                searchRef: p,
                highlightedElement: k,
                onKeydownNavigation: A,
                onKeydownEnter: j,
                filterElement: M,
                onFilterElementChange: e => {
                    M.value = e
                },
                activeSubmenuContext: N,
                pointerGraceTimerRef: g,
                onPointerGraceIntentChange: e => {
                    _.value = e
                }
            }), (t, n) => (m(), e(y(we), {
                "as-child": ``,
                trapped: y(u),
                onMountAutoFocus: F,
                onUnmountAutoFocus: n[7] || = e => o(`closeAutoFocus`, e)
            }, {
                default: l(() => [v(y(W), {
                    "as-child": ``,
                    "disable-outside-pointer-events": y(d),
                    onEscapeKeyDown: n[2] || = e => o(`escapeKeyDown`, e),
                    onPointerDownOutside: n[3] || = e => o(`pointerDownOutside`, e),
                    onFocusOutside: n[4] || = e => o(`focusOutside`, e),
                    onInteractOutside: n[5] || = e => o(`interactOutside`, e),
                    onDismiss: n[6] || = e => o(`dismiss`)
                }, {
                    default: l(() => [v(y(Ge), {
                        ref_key: `rovingFocusGroupRef`,
                        ref: E,
                        "current-tab-stop-id": T.value,
                        "onUpdate:currentTabStopId": n[0] || = e => T.value = e,
                        "as-child": ``,
                        orientation: `vertical`,
                        dir: y(c).dir.value,
                        loop: y(f),
                        onEntryFocus: n[1] || = e => {
                            o(`entryFocus`, e), y(c).isUsingKeyboardRef.value || e.preventDefault()
                        }
                    }, {
                        default: l(() => [v(y(Me), {
                            ref: y(ee),
                            role: `menu`,
                            as: t.as,
                            "as-child": t.asChild,
                            "aria-orientation": `vertical`,
                            "data-reka-menu-content": ``,
                            "data-state": y(Re)(y(s).open.value),
                            dir: y(c).dir.value,
                            side: t.side,
                            "side-offset": t.sideOffset,
                            align: t.align,
                            "align-offset": t.alignOffset,
                            "avoid-collisions": t.avoidCollisions,
                            "collision-boundary": t.collisionBoundary,
                            "collision-padding": t.collisionPadding,
                            "arrow-padding": t.arrowPadding,
                            "prioritize-position": t.prioritizePosition,
                            "position-strategy": t.positionStrategy,
                            "update-position-strategy": t.updatePositionStrategy,
                            sticky: t.sticky,
                            "hide-when-detached": t.hideWhenDetached,
                            reference: t.reference,
                            onKeydown: I,
                            onBlur: L,
                            onPointermove: R,
                            onPointerenter: z
                        }, {
                            default: l(() => [b(t.$slots, `default`)]),
                            _: 3
                        }, 8, [`as`, `as-child`, `data-state`, `dir`, `side`, `side-offset`, `align`, `align-offset`, `avoid-collisions`, `collision-boundary`, `collision-padding`, `arrow-padding`, `prioritize-position`, `position-strategy`, `update-position-strategy`, `sticky`, `hide-when-detached`, `reference`])]),
                        _: 3
                    }, 8, [`current-tab-stop-id`, `dir`, `loop`])]),
                    _: 3
                }, 8, [`disable-outside-pointer-events`])]),
                _: 3
            }, 8, [`trapped`]))
        }
    }),
    st = E({
        inheritAttrs: !1,
        __name: `MenuItemImpl`,
        props: {
            disabled: {
                type: Boolean,
                required: !1
            },
            textValue: {
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
            }
        },
        setup(n) {
            let r = n,
                i = Q(),
                {
                    forwardRef: o,
                    currentElement: c
                } = G(),
                {
                    CollectionItem: u
                } = Ae(),
                d = t(!1),
                f = h(() => d.value || c.value != null && i.highlightedElement.value === c.value);
            async function p(e) {
                if (!(e.defaultPrevented || !Y(e))) {
                    if (r.disabled) i.onItemLeave(e);
                    else if (!i.onItemEnter(e)) {
                        let t = e.currentTarget;
                        i.highlightedElement.value = t, [`INPUT`, `TEXTAREA`].includes(U() ? .tagName || ``) || t.focus({
                            preventScroll: !0
                        })
                    }
                }
            }
            async function g(e) {
                await s(), !e.defaultPrevented && Y(e) && i.highlightedElement.value === c.value && !i.onItemLeave(e) && i.highlightedElement.value === c.value && (i.highlightedElement.value = void 0)
            }
            return (t, n) => (m(), e(y(u), {
                value: {
                    textValue: t.textValue
                }
            }, {
                default: l(() => [v(y(R), a({
                    ref: y(o),
                    role: `menuitem`,
                    tabindex: `-1`
                }, t.$attrs, {
                    as: t.as,
                    "as-child": t.asChild,
                    "aria-disabled": t.disabled || void 0,
                    "data-disabled": t.disabled ? `` : void 0,
                    "data-highlighted": f.value ? `` : void 0,
                    onPointermove: p,
                    onPointerleave: g,
                    onFocus: n[0] || = async e => {
                        await s(), !(e.defaultPrevented || t.disabled) && (d.value = !0, y(i).highlightedElement.value = e.currentTarget)
                    },
                    onBlur: n[1] || = async e => {
                        await s(), !e.defaultPrevented && (d.value = !1)
                    }
                }), {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 16, [`as`, `as-child`, `aria-disabled`, `data-disabled`, `data-highlighted`])]),
                _: 3
            }, 8, [`value`]))
        }
    }),
    ct = E({
        __name: `MenuItem`,
        props: {
            disabled: {
                type: Boolean,
                required: !1
            },
            textValue: {
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
            }
        },
        emits: [`select`],
        setup(n, {
            emit: r
        }) {
            let i = n,
                o = r,
                {
                    forwardRef: c,
                    currentElement: u
                } = G(),
                d = Z(),
                f = Q(),
                p = t(!1);
            async function h() {
                let e = u.value;
                if (!i.disabled && e) {
                    let e = new CustomEvent(ze, {
                        bubbles: !0,
                        cancelable: !0
                    });
                    o(`select`, e), await s(), e.defaultPrevented ? p.value = !1 : d.onClose()
                }
            }
            return (t, n) => (m(), e(st, a(i, {
                ref: y(c),
                onClick: h,
                onPointerdown: n[0] || = () => {
                    p.value = !0
                },
                onPointerup: n[1] || = async e => {
                    await s(), !e.defaultPrevented && (p.value || e.currentTarget ? .click())
                },
                onKeydown: n[2] || = async e => {
                    let n = y(f).searchRef.value !== ``;
                    t.disabled || n && e.key === ` ` || y(Le).includes(e.key) && (e.currentTarget ? .click(), e.preventDefault())
                }
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    [lt, ut] = z([`MenuCheckboxItem`, `MenuRadioItem`], `MenuItemIndicatorContext`),
    dt = E({
        __name: `MenuItemIndicator`,
        props: {
            forceMount: {
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
                default: `span`
            }
        },
        setup(n) {
            let r = lt({
                modelValue: t(!1)
            });
            return (t, n) => (m(), e(y(k), {
                present: t.forceMount || y(We)(y(r).modelValue.value) || y(r).modelValue.value === !0
            }, {
                default: l(() => [v(y(R), {
                    as: t.as,
                    "as-child": t.asChild,
                    "data-state": y(Fe)(y(r).modelValue.value)
                }, {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 8, [`as`, `as-child`, `data-state`])]),
                _: 3
            }, 8, [`present`]))
        }
    }),
    ft = E({
        __name: `MenuCheckboxItem`,
        props: {
            modelValue: {
                type: [Boolean, String],
                required: !1,
                default: !1
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            textValue: {
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
            }
        },
        emits: [`select`, `update:modelValue`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                i = n,
                o = M(r, [`modelValue`]),
                s = j(o),
                c = I(r, `modelValue`, i);
            return ut({
                modelValue: c
            }), (t, n) => (m(), e(ct, a({
                role: `menuitemcheckbox`
            }, y(s), {
                "aria-checked": y(We)(y(c)) ? `mixed` : y(c),
                "data-state": y(Fe)(y(c)),
                onSelect: n[0] || = async e => {
                    i(`select`, e), y(We)(y(c)) ? c.value = !0 : c.value = !y(c)
                }
            }), {
                default: l(() => [b(t.$slots, `default`, {
                    modelValue: y(c)
                })]),
                _: 3
            }, 16, [`aria-checked`, `data-state`]))
        }
    }),
    pt = E({
        __name: `MenuRootContentModal`,
        props: {
            loop: {
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
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            }
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                o = n,
                s = J(r, o),
                c = X(),
                {
                    forwardRef: u,
                    currentElement: d
                } = G();
            return Ce(d), (t, n) => (m(), e(ot, a(y(s), {
                ref: y(u),
                "trap-focus": y(c).open.value,
                "disable-outside-pointer-events": y(c).open.value,
                "disable-outside-scroll": !0,
                onDismiss: n[0] || = e => y(c).onOpenChange(!1),
                onFocusOutside: n[1] || = i(e => o(`focusOutside`, e), [`prevent`])
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16, [`trap-focus`, `disable-outside-pointer-events`]))
        }
    }),
    mt = E({
        __name: `MenuRootContentNonModal`,
        props: {
            loop: {
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
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            }
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`],
        setup(t, {
            emit: n
        }) {
            let r = J(t, n),
                i = X();
            return (t, n) => (m(), e(ot, a(y(r), {
                "trap-focus": !1,
                "disable-outside-pointer-events": !1,
                "disable-outside-scroll": !1,
                onDismiss: n[0] || = e => y(i).onOpenChange(!1)
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    ht = E({
        __name: `MenuContent`,
        props: {
            forceMount: {
                type: Boolean,
                required: !1
            },
            loop: {
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
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            }
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`],
        setup(t, {
            emit: n
        }) {
            let r = J(t, n),
                i = X(),
                o = Z();
            return (t, n) => (m(), e(y(k), {
                present: t.forceMount || y(i).open.value
            }, {
                default: l(() => [y(o).modal.value ? (m(), e(pt, S(a({
                    key: 0
                }, { ...t.$attrs,
                    ...y(r)
                })), {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 16)) : (m(), e(mt, S(a({
                    key: 1
                }, { ...t.$attrs,
                    ...y(r)
                })), {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 16))]),
                _: 3
            }, 8, [`present`]))
        }
    }),
    [gt, _t] = z(`MenuGroup`),
    vt = E({
        __name: `MenuGroup`,
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
                r = O(void 0, `reka-menu-group`);
            return _t({
                id: r
            }), (t, i) => (m(), e(y(R), a({
                role: `group`
            }, n, {
                "aria-labelledby": y(r)
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16, [`aria-labelledby`]))
        }
    }),
    yt = E({
        __name: `MenuLabel`,
        props: {
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
            let n = t,
                r = gt({
                    id: ``
                });
            return (t, i) => (m(), e(y(R), a(n, {
                id: y(r).id || void 0
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16, [`id`]))
        }
    }),
    bt = E({
        __name: `MenuPortal`,
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
            return (t, r) => (m(), e(y(be), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    [xt, St] = z(`MenuRadioGroup`),
    Ct = E({
        __name: `MenuRadioGroup`,
        props: {
            modelValue: {
                type: null,
                required: !1,
                default: ``
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
        emits: [`update:modelValue`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                i = n,
                a = M(r, [`modelValue`]),
                o = j(a),
                s = I(r, `modelValue`, i);
            return St({
                modelValue: s,
                onValueChange: e => {
                    s.value = e
                }
            }), (t, n) => (m(), e(vt, S(_(y(o))), {
                default: l(() => [b(t.$slots, `default`, {
                    modelValue: y(s)
                })]),
                _: 3
            }, 16))
        }
    }),
    wt = E({
        __name: `MenuRadioItem`,
        props: {
            value: {
                type: null,
                required: !0
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            textValue: {
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
            }
        },
        emits: [`select`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                i = n,
                o = M(r, [`value`]),
                s = j(o),
                {
                    value: c
                } = x(r),
                u = xt(),
                d = h(() => u.modelValue.value === c ? .value);
            return ut({
                modelValue: d
            }), (t, n) => (m(), e(ct, a({
                role: `menuitemradio`
            }, y(s), {
                "aria-checked": d.value,
                "data-state": y(Fe)(d.value),
                onSelect: n[0] || = async e => {
                    i(`select`, e), y(u).onValueChange(y(c))
                }
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16, [`aria-checked`, `data-state`]))
        }
    }),
    Tt = E({
        __name: `MenuSeparator`,
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
            return (t, r) => (m(), e(y(R), a(n, {
                role: `separator`,
                "aria-orientation": `horizontal`
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    [Et, Dt] = z(`MenuSub`),
    Ot = E({
        __name: `MenuSub`,
        props: {
            open: {
                type: Boolean,
                required: !1,
                default: void 0
            }
        },
        emits: [`update:open`],
        setup(n, {
            emit: r
        }) {
            let i = n,
                a = I(i, `open`, r, {
                    defaultValue: !1,
                    passive: i.open === void 0
                }),
                o = X(),
                s = t(),
                c = t();
            return D(e => {
                o ? .open.value === !1 && (a.value = !1), e(() => a.value = !1)
            }), nt({
                open: a,
                onOpenChange: e => {
                    a.value = e
                },
                content: c,
                onContentChange: e => {
                    c.value = e
                }
            }), Dt({
                triggerId: ``,
                contentId: ``,
                trigger: s,
                onTriggerChange: e => {
                    s.value = e
                }
            }), (t, n) => (m(), e(y(K), null, {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }))
        }
    }),
    kt = E({
        __name: `MenuSubContent`,
        props: {
            forceMount: {
                type: Boolean,
                required: !1
            },
            loop: {
                type: Boolean,
                required: !1
            },
            memoDependencies: {
                type: Array,
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
                required: !1,
                default: !0
            },
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
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`],
        setup(t, {
            emit: n
        }) {
            let r = J(t, n),
                o = X(),
                s = Z(),
                c = Et(),
                u = Q(),
                {
                    forwardRef: d,
                    currentElement: f
                } = G();
            return c.contentId || = O(void 0, `reka-menu-sub-content`), (t, n) => (m(), e(y(k), {
                present: t.forceMount || y(o).open.value
            }, {
                default: l(() => [v(ot, a(y(r), {
                    id: y(c).contentId,
                    ref: y(d),
                    "aria-labelledby": y(c).triggerId,
                    align: `start`,
                    side: y(s).dir.value === `rtl` ? `left` : `right`,
                    "disable-outside-pointer-events": !1,
                    "disable-outside-scroll": !1,
                    "trap-focus": !1,
                    onOpenAutoFocus: n[0] || = i(e => {
                        y(s).isUsingKeyboardRef.value && y(f) ? .focus()
                    }, [`prevent`]),
                    onCloseAutoFocus: n[1] || = i(() => {}, [`prevent`]),
                    onFocusOutside: n[2] || = e => {
                        if (e.defaultPrevented) return;
                        let t = y(u).filterElement.value ? .contains(e.target);
                        e.target !== y(c).trigger.value && !t && y(o).onOpenChange(!1)
                    },
                    onEscapeKeyDown: n[3] || = e => {
                        y(s).onClose(), e.preventDefault()
                    },
                    onKeydown: n[4] || = e => {
                        let t = e.currentTarget ? .contains(e.target),
                            n = y(Pe)[y(s).dir.value].includes(e.key);
                        t && n && (y(o).onOpenChange(!1), y(u).filterElement.value ? (y(u).filterElement.value.focus(), y(u).highlightedElement.value = y(c).trigger.value, y(c).trigger.value ? .scrollIntoView({
                            block: `nearest`
                        })) : y(c).trigger.value ? .focus(), e.preventDefault())
                    }
                }), {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 16, [`id`, `aria-labelledby`, `side`])]),
                _: 3
            }, 8, [`present`]))
        }
    }),
    At = E({
        __name: `MenuSubTrigger`,
        props: {
            disabled: {
                type: Boolean,
                required: !1
            },
            textValue: {
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
            }
        },
        setup(r) {
            let i = r,
                o = X(),
                c = Z(),
                u = Et(),
                d = Q();
            n(o.open, e => {
                e ? d.activeSubmenuContext.value = {
                    onOpenChange: o.onOpenChange,
                    trigger: u.trigger
                } : d.activeSubmenuContext.value ? .trigger.value === u.trigger.value && (d.activeSubmenuContext.value = void 0)
            });
            let f = t(null);
            u.triggerId || = O(void 0, `reka-menu-sub-trigger`);

            function p() {
                f.value && window.clearTimeout(f.value), f.value = null
            }
            C(() => {
                p()
            });

            function h(e) {
                Y(e) && (d.onItemEnter(e) || !i.disabled && !o.open.value && !f.value && (d.onPointerGraceIntentChange(null), f.value = window.setTimeout(() => {
                    o.onOpenChange(!0), p()
                }, 100)))
            }
            async function g(e) {
                if (!Y(e)) return;
                p();
                let t = o.content.value ? .getBoundingClientRect();
                if (t ? .width) {
                    let n = o.content.value ? .dataset.side,
                        r = n === `right`,
                        i = r ? -5 : 5,
                        a = t[r ? `left` : `right`],
                        s = t[r ? `right` : `left`];
                    d.onPointerGraceIntentChange({
                        area: [{
                            x: e.clientX + i,
                            y: e.clientY
                        }, {
                            x: a,
                            y: t.top
                        }, {
                            x: s,
                            y: t.top
                        }, {
                            x: s,
                            y: t.bottom
                        }, {
                            x: a,
                            y: t.bottom
                        }],
                        side: n
                    }), window.clearTimeout(d.pointerGraceTimerRef.value), d.pointerGraceTimerRef.value = window.setTimeout(() => d.onPointerGraceIntentChange(null), 300)
                } else {
                    if (d.onTriggerLeave(e)) return;
                    d.onPointerGraceIntentChange(null)
                }
            }
            async function _(e) {
                let t = d.searchRef.value !== ``;
                i.disabled || t && e.key === ` ` || Be[c.dir.value].includes(e.key) && (o.onOpenChange(!0), await s(), o.content.value ? .focus(), e.preventDefault())
            }
            return (t, n) => (m(), e(Qe, {
                "as-child": ``
            }, {
                default: l(() => [v(st, a(i, {
                    id: y(u).triggerId,
                    ref: e => {
                        e && y(u) ? .onTriggerChange(e ? .$el)
                    },
                    "aria-haspopup": `menu`,
                    "aria-expanded": y(o).open.value,
                    "aria-controls": y(u).contentId,
                    "data-state": y(Re)(y(o).open.value),
                    onClick: n[0] || = async e => {
                        i.disabled || e.defaultPrevented || (e.currentTarget ? .focus(), y(o).open.value || y(o).onOpenChange(!0))
                    },
                    onPointermove: h,
                    onPointerleave: g,
                    onKeydown: _
                }), {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 16, [`id`, `aria-expanded`, `aria-controls`, `data-state`])]),
                _: 3
            }))
        }
    }),
    [$, jt] = z(`PopoverRoot`),
    Mt = E({
        __name: `PopoverRoot`,
        props: {
            defaultOpen: {
                type: Boolean,
                required: !1,
                default: !1
            },
            open: {
                type: Boolean,
                required: !1,
                default: void 0
            },
            modal: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        emits: [`update:open`],
        setup(n, {
            emit: r
        }) {
            let i = n,
                a = r,
                {
                    modal: o
                } = x(i),
                s = I(i, `open`, a, {
                    defaultValue: i.defaultOpen,
                    passive: i.open === void 0
                });
            return jt({
                contentId: ``,
                triggerId: ``,
                modal: o,
                open: s,
                onOpenChange: e => {
                    s.value = e
                },
                onOpenToggle: () => {
                    s.value = !s.value
                },
                triggerElement: t(),
                hasCustomAnchor: t(!1)
            }), (t, n) => (m(), e(y(K), null, {
                default: l(() => [b(t.$slots, `default`, {
                    open: y(s),
                    close: () => s.value = !1
                })]),
                _: 3
            }))
        }
    }),
    Nt = E({
        __name: `PopoverAnchor`,
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
            let n = t;
            G();
            let r = $();
            return d(() => {
                r.hasCustomAnchor.value = !0
            }), C(() => {
                r.hasCustomAnchor.value = !1
            }), (t, r) => (m(), e(y(q), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    Pt = E({
        __name: `PopoverArrow`,
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
            let n = t;
            return G(), (t, r) => (m(), e(y(Ne), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    Ft = E({
        __name: `PopoverClose`,
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
            G();
            let r = $();
            return (t, i) => (m(), e(y(R), {
                type: t.as === `button` ? `button` : void 0,
                as: t.as,
                "as-child": n.asChild,
                onClick: i[0] || = e => y(r).onOpenChange(!1)
            }, {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 8, [`type`, `as`, `as-child`]))
        }
    }),
    It = E({
        __name: `PopoverContentImpl`,
        props: {
            trapFocus: {
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
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                i = n,
                o = j(M(r, `trapFocus`, `disableOutsidePointerEvents`)),
                {
                    forwardRef: s
                } = G(),
                c = $();
            return ke(), (t, n) => (m(), e(y(we), {
                "as-child": ``,
                loop: ``,
                trapped: t.trapFocus,
                onMountAutoFocus: n[5] || = e => i(`openAutoFocus`, e),
                onUnmountAutoFocus: n[6] || = e => i(`closeAutoFocus`, e)
            }, {
                default: l(() => [v(y(W), {
                    "as-child": ``,
                    "disable-outside-pointer-events": t.disableOutsidePointerEvents,
                    onPointerDownOutside: n[0] || = e => i(`pointerDownOutside`, e),
                    onInteractOutside: n[1] || = e => i(`interactOutside`, e),
                    onEscapeKeyDown: n[2] || = e => i(`escapeKeyDown`, e),
                    onFocusOutside: n[3] || = e => i(`focusOutside`, e),
                    onDismiss: n[4] || = e => y(c).onOpenChange(!1)
                }, {
                    default: l(() => [v(y(Me), a(y(o), {
                        id: y(c).contentId,
                        ref: y(s),
                        "data-state": y(c).open.value ? `open` : `closed`,
                        "aria-labelledby": y(c).triggerId,
                        style: {
                            "--reka-popover-content-transform-origin": `var(--reka-popper-transform-origin)`,
                            "--reka-popover-content-available-width": `var(--reka-popper-available-width)`,
                            "--reka-popover-content-available-height": `var(--reka-popper-available-height)`,
                            "--reka-popover-trigger-width": `var(--reka-popper-anchor-width)`,
                            "--reka-popover-trigger-height": `var(--reka-popper-anchor-height)`
                        },
                        role: `dialog`
                    }), {
                        default: l(() => [b(t.$slots, `default`)]),
                        _: 3
                    }, 16, [`id`, `data-state`, `aria-labelledby`])]),
                    _: 3
                }, 8, [`disable-outside-pointer-events`])]),
                _: 3
            }, 8, [`trapped`]))
        }
    }),
    Lt = E({
        __name: `PopoverContentModal`,
        props: {
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
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`],
        setup(n, {
            emit: r
        }) {
            let o = n,
                s = r,
                c = $(),
                u = t(!1);
            Se(!0);
            let d = J(o, s),
                {
                    forwardRef: f,
                    currentElement: p
                } = G();
            return Ce(p), (t, n) => (m(), e(It, a(y(d), {
                ref: y(f),
                "trap-focus": y(c).open.value,
                "disable-outside-pointer-events": ``,
                onCloseAutoFocus: n[0] || = i(e => {
                    s(`closeAutoFocus`, e), u.value || y(c).triggerElement.value ? .focus()
                }, [`prevent`]),
                onPointerDownOutside: n[1] || = e => {
                    s(`pointerDownOutside`, e);
                    let t = e.detail.originalEvent,
                        n = t.button === 0 && t.ctrlKey === !0,
                        r = t.button === 2 || n;
                    u.value = r
                },
                onFocusOutside: n[2] || = i(() => {}, [`prevent`])
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16, [`trap-focus`]))
        }
    }),
    Rt = E({
        __name: `PopoverContentNonModal`,
        props: {
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
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`],
        setup(n, {
            emit: r
        }) {
            let i = n,
                o = r,
                s = $(),
                c = t(!1),
                u = t(!1),
                d = J(i, o);
            return (t, n) => (m(), e(It, a(y(d), {
                "trap-focus": !1,
                "disable-outside-pointer-events": !1,
                onCloseAutoFocus: n[0] || = e => {
                    o(`closeAutoFocus`, e), e.defaultPrevented || (c.value || y(s).triggerElement.value ? .focus(), e.preventDefault()), c.value = !1, u.value = !1
                },
                onInteractOutside: n[1] || = async e => {
                    o(`interactOutside`, e), e.defaultPrevented || (c.value = !0, e.detail.originalEvent.type === `pointerdown` && (u.value = !0));
                    let t = e.target;
                    y(s).triggerElement.value ? .contains(t) && e.preventDefault(), e.detail.originalEvent.type === `focusin` && u.value && e.preventDefault()
                }
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    zt = E({
        __name: `PopoverContent`,
        props: {
            forceMount: {
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
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                i = n,
                o = $(),
                s = J(r, i),
                {
                    forwardRef: c
                } = G();
            return o.contentId || = O(void 0, `reka-popover-content`), (t, n) => (m(), e(y(k), {
                present: t.forceMount || y(o).open.value
            }, {
                default: l(() => [y(o).modal.value ? (m(), e(Lt, a({
                    key: 0
                }, y(s), {
                    ref: y(c)
                }), {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 16)) : (m(), e(Rt, a({
                    key: 1
                }, y(s), {
                    ref: y(c)
                }), {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 16))]),
                _: 3
            }, 8, [`present`]))
        }
    }),
    Bt = E({
        __name: `PopoverPortal`,
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
            return (t, r) => (m(), e(y(be), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    Vt = E({
        __name: `PopoverTrigger`,
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
            let n = t,
                r = $(),
                {
                    forwardRef: i,
                    currentElement: a
                } = G();
            return r.triggerId || = O(void 0, `reka-popover-trigger`), f(() => {
                r.triggerElement.value = a.value
            }), (t, a) => (m(), e(g(y(r).hasCustomAnchor.value ? y(R) : y(q)), {
                "as-child": ``
            }, {
                default: l(() => [v(y(R), {
                    id: y(r).triggerId,
                    ref: y(i),
                    type: t.as === `button` ? `button` : void 0,
                    "aria-haspopup": `dialog`,
                    "aria-expanded": y(r).open.value,
                    "aria-controls": y(r).contentId,
                    "data-state": y(r).open.value ? `open` : `closed`,
                    as: t.as,
                    "as-child": n.asChild,
                    onClick: y(r).onOpenToggle
                }, {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 8, [`id`, `type`, `aria-expanded`, `aria-controls`, `data-state`, `as`, `as-child`, `onClick`])]),
                _: 3
            }))
        }
    }),
    Ht = E({
        __name: `DropdownMenuArrow`,
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
            let n = t;
            return G(), (t, r) => (m(), e(y($e), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    Ut = E({
        __name: `DropdownMenuCheckboxItem`,
        props: {
            modelValue: {
                type: [Boolean, String],
                required: !1
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            textValue: {
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
            }
        },
        emits: [`select`, `update:modelValue`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                i = A(n);
            return G(), (t, n) => (m(), e(y(ft), S(_({ ...r,
                ...y(i)
            })), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    [Wt, Gt] = z(`DropdownMenuRoot`),
    Kt = E({
        __name: `DropdownMenuRoot`,
        props: {
            defaultOpen: {
                type: Boolean,
                required: !1
            },
            open: {
                type: Boolean,
                required: !1,
                default: void 0
            },
            dir: {
                type: String,
                required: !1
            },
            modal: {
                type: Boolean,
                required: !1,
                default: !0
            }
        },
        emits: [`update:open`],
        setup(n, {
            emit: r
        }) {
            let i = n,
                a = r;
            G();
            let s = I(i, `open`, a, {
                    defaultValue: i.defaultOpen,
                    passive: i.open === void 0
                }),
                c = t(),
                {
                    modal: u,
                    dir: d
                } = x(i),
                f = Ee(d);
            return Gt({
                open: s,
                onOpenChange: e => {
                    s.value = e
                },
                onOpenToggle: () => {
                    s.value = !s.value
                },
                triggerId: ``,
                triggerElement: c,
                contentId: ``,
                modal: u,
                dir: f
            }), (t, n) => (m(), e(y(it), {
                open: y(s),
                "onUpdate:open": n[0] || = e => o(s) ? s.value = e : null,
                dir: y(f),
                modal: y(u)
            }, {
                default: l(() => [b(t.$slots, `default`, {
                    open: y(s)
                })]),
                _: 3
            }, 8, [`open`, `dir`, `modal`]))
        }
    }),
    qt = E({
        __name: `DropdownMenuContent`,
        props: {
            forceMount: {
                type: Boolean,
                required: !1
            },
            loop: {
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
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            }
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `closeAutoFocus`],
        setup(n, {
            emit: r
        }) {
            let i = J(n, r);
            G();
            let o = Wt(),
                s = t(!1);

            function c(e) {
                e.defaultPrevented || (s.value || setTimeout(() => {
                    o.triggerElement.value ? .focus()
                }, 0), s.value = !1, e.preventDefault())
            }
            return o.contentId || = O(void 0, `reka-dropdown-menu-content`), (t, n) => (m(), e(y(ht), a(y(i), {
                id: y(o).contentId,
                "aria-labelledby": y(o) ? .triggerId,
                style: {
                    "--reka-dropdown-menu-content-transform-origin": `var(--reka-popper-transform-origin)`,
                    "--reka-dropdown-menu-content-available-width": `var(--reka-popper-available-width)`,
                    "--reka-dropdown-menu-content-available-height": `var(--reka-popper-available-height)`,
                    "--reka-dropdown-menu-trigger-width": `var(--reka-popper-anchor-width)`,
                    "--reka-dropdown-menu-trigger-height": `var(--reka-popper-anchor-height)`
                },
                onCloseAutoFocus: c,
                onInteractOutside: n[0] || = e => {
                    if (e.defaultPrevented) return;
                    let t = e.detail.originalEvent,
                        n = t.button === 0 && t.ctrlKey === !0,
                        r = t.button === 2 || n;
                    (!y(o).modal.value || r) && (s.value = !0), y(o).triggerElement.value ? .contains(e.target) && e.preventDefault()
                }
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16, [`id`, `aria-labelledby`]))
        }
    }),
    Jt = E({
        __name: `DropdownMenuFilter`,
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
        setup(i, {
            emit: a
        }) {
            let o = i,
                s = I(o, `modelValue`, a, {
                    defaultValue: ``,
                    passive: o.modelValue === void 0
                }),
                c = Z(),
                u = Q(),
                d = Et(null);
            n(s, e => {
                u.searchRef.value = e ? ? ``
            }, {
                immediate: !0
            });
            let {
                primitiveElement: p,
                currentElement: g
            } = De(), _ = h(() => o.disabled || !1), v = t();
            r(() => v.value = u.highlightedElement.value ? .id), f(() => {
                u.onFilterElementChange(g.value), setTimeout(() => {
                    o.autoFocus && (!d || c.isUsingKeyboardRef.value) && g.value ? .focus()
                }, 1)
            }), C(() => {
                u.onFilterElementChange(void 0), u.searchRef.value = ``
            });
            let {
                isComposing: x,
                handleCompositionStart: S,
                handleCompositionEnd: w
            } = Te(e => {
                let t = e.target;
                t && (s.value = t.value, u.searchRef.value = t.value)
            });

            function T(e) {
                if (_.value || x.value) return;
                let t = e.target;
                s.value = t.value, u.searchRef.value = t.value
            }

            function E(e) {
                if (!_.value) {
                    if (x.value) {
                        e.stopPropagation();
                        return
                    }[`ArrowDown`, `ArrowUp`, `Home`, `End`].includes(e.key) ? (e.preventDefault(), u.onKeydownNavigation(e)) : e.key === `Enter` ? (e.preventDefault(), u.onKeydownEnter(e)) : e.key === `Escape` && s.value && (e.stopPropagation(), s.value = ``, u.searchRef.value = ``)
                }
            }
            return (t, n) => (m(), e(y(R), {
                ref_key: `primitiveElement`,
                ref: p,
                as: t.as,
                "as-child": t.asChild,
                value: y(s),
                disabled: _.value ? `` : void 0,
                "data-disabled": _.value ? `` : void 0,
                "aria-disabled": _.value ? !0 : void 0,
                "aria-activedescendant": v.value,
                type: `text`,
                role: `searchbox`,
                onInput: T,
                onKeydown: E,
                onCompositionstart: y(S),
                onCompositionend: y(w)
            }, {
                default: l(() => [b(t.$slots, `default`, {
                    modelValue: y(s)
                })]),
                _: 3
            }, 8, [`as`, `as-child`, `value`, `disabled`, `data-disabled`, `aria-disabled`, `aria-activedescendant`, `onCompositionstart`, `onCompositionend`]))
        }
    }),
    Yt = E({
        __name: `DropdownMenuGroup`,
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
            return G(), (t, r) => (m(), e(y(vt), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    Xt = E({
        __name: `DropdownMenuItem`,
        props: {
            disabled: {
                type: Boolean,
                required: !1
            },
            textValue: {
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
            }
        },
        emits: [`select`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                i = A(n);
            return G(), (t, n) => (m(), e(y(ct), S(_({ ...r,
                ...y(i)
            })), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    Zt = E({
        __name: `DropdownMenuItemIndicator`,
        props: {
            forceMount: {
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
        setup(t) {
            let n = t;
            return G(), (t, r) => (m(), e(y(dt), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    Qt = E({
        __name: `DropdownMenuLabel`,
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
            return G(), (t, r) => (m(), e(y(yt), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    $t = E({
        __name: `DropdownMenuPortal`,
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
            return (t, r) => (m(), e(y(bt), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    en = E({
        __name: `DropdownMenuRadioGroup`,
        props: {
            modelValue: {
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
        emits: [`update:modelValue`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                i = A(n);
            return G(), (t, n) => (m(), e(y(Ct), S(_({ ...r,
                ...y(i)
            })), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    tn = E({
        __name: `DropdownMenuRadioItem`,
        props: {
            value: {
                type: null,
                required: !0
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            textValue: {
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
            }
        },
        emits: [`select`],
        setup(t, {
            emit: n
        }) {
            let r = J(t, n);
            return G(), (t, n) => (m(), e(y(wt), S(_(y(r))), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    nn = E({
        __name: `DropdownMenuSeparator`,
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
            return G(), (t, r) => (m(), e(y(Tt), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    rn = E({
        __name: `DropdownMenuSub`,
        props: {
            defaultOpen: {
                type: Boolean,
                required: !1
            },
            open: {
                type: Boolean,
                required: !1,
                default: void 0
            }
        },
        emits: [`update:open`],
        setup(t, {
            emit: n
        }) {
            let r = t,
                i = I(r, `open`, n, {
                    passive: r.open === void 0,
                    defaultValue: r.defaultOpen ? ? !1
                });
            return G(), (t, n) => (m(), e(y(Ot), {
                open: y(i),
                "onUpdate:open": n[0] || = e => o(i) ? i.value = e : null
            }, {
                default: l(() => [b(t.$slots, `default`, {
                    open: y(i)
                })]),
                _: 3
            }, 8, [`open`]))
        }
    }),
    an = E({
        __name: `DropdownMenuSubContent`,
        props: {
            forceMount: {
                type: Boolean,
                required: !1
            },
            loop: {
                type: Boolean,
                required: !1
            },
            memoDependencies: {
                type: Array,
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
            asChild: {
                type: Boolean,
                required: !1
            },
            as: {
                type: null,
                required: !1
            }
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`],
        setup(t, {
            emit: n
        }) {
            let r = J(t, n);
            return G(), (t, n) => (m(), e(y(kt), a(y(r), {
                style: {
                    "--reka-dropdown-menu-content-transform-origin": `var(--reka-popper-transform-origin)`,
                    "--reka-dropdown-menu-content-available-width": `var(--reka-popper-available-width)`,
                    "--reka-dropdown-menu-content-available-height": `var(--reka-popper-available-height)`,
                    "--reka-dropdown-menu-trigger-width": `var(--reka-popper-anchor-width)`,
                    "--reka-dropdown-menu-trigger-height": `var(--reka-popper-anchor-height)`
                }
            }), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    on = E({
        __name: `DropdownMenuSubTrigger`,
        props: {
            disabled: {
                type: Boolean,
                required: !1
            },
            textValue: {
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
            }
        },
        setup(t) {
            let n = t;
            return G(), (t, r) => (m(), e(y(At), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    sn = E({
        __name: `DropdownMenuTrigger`,
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
                r = Wt(),
                {
                    forwardRef: i,
                    currentElement: a
                } = G();
            return f(() => {
                r.triggerElement = a
            }), r.triggerId || = O(void 0, `reka-dropdown-menu-trigger`), (t, a) => (m(), e(y(Qe), {
                "as-child": ``
            }, {
                default: l(() => [v(y(R), {
                    id: y(r).triggerId,
                    ref: y(i),
                    type: t.as === `button` ? `button` : void 0,
                    "as-child": n.asChild,
                    as: t.as,
                    "aria-haspopup": `menu`,
                    "aria-expanded": y(r).open.value,
                    "aria-controls": y(r).open.value ? y(r).contentId : void 0,
                    "data-disabled": t.disabled ? `` : void 0,
                    disabled: t.disabled,
                    "data-state": y(r).open.value ? `open` : `closed`,
                    onClick: a[0] || = async e => {
                        !t.disabled && e.button === 0 && e.ctrlKey === !1 && (y(r) ? .onOpenToggle(), await s(), y(r).open.value && e.preventDefault())
                    },
                    onKeydown: a[1] || = u(e => {
                        t.disabled || ([`Enter`, ` `].includes(e.key) && y(r).onOpenToggle(), e.key === `ArrowDown` && y(r).onOpenChange(!0), [`Enter`, ` `, `ArrowDown`].includes(e.key) && e.preventDefault())
                    }, [`enter`, `space`, `arrow-down`])
                }, {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 8, [`id`, `type`, `as-child`, `as`, `aria-expanded`, `aria-controls`, `data-disabled`, `disabled`, `data-state`])]),
                _: 3
            }))
        }
    }),
    cn = E({
        __name: `HoverCardArrow`,
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
            let n = t;
            return G(), (t, r) => (m(), e(y(Ne), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    [ln, un] = z(`HoverCardRoot`),
    dn = E({
        __name: `HoverCardRoot`,
        props: {
            defaultOpen: {
                type: Boolean,
                required: !1,
                default: !1
            },
            open: {
                type: Boolean,
                required: !1,
                default: void 0
            },
            openDelay: {
                type: Number,
                required: !1,
                default: 700
            },
            closeDelay: {
                type: Number,
                required: !1,
                default: 300
            },
            enableTouch: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        emits: [`update:open`],
        setup(n, {
            emit: r
        }) {
            let i = n,
                a = r,
                {
                    openDelay: o,
                    closeDelay: s,
                    enableTouch: c
                } = x(i);
            G();
            let u = I(i, `open`, a, {
                    defaultValue: i.defaultOpen,
                    passive: i.open === void 0
                }),
                d = t(0),
                f = t(0),
                p = t(!1),
                h = t(!1),
                g = t(!1),
                _ = t();

            function v() {
                clearTimeout(f.value), d.value = window.setTimeout(() => u.value = !0, o.value)
            }

            function S() {
                clearTimeout(d.value), !p.value && !h.value && (f.value = window.setTimeout(() => u.value = !1, s.value))
            }

            function C() {
                clearTimeout(d.value), u.value = !1
            }
            return un({
                open: u,
                onOpenChange(e) {
                    u.value = e
                },
                onOpen: v,
                onClose: S,
                onDismiss: C,
                hasSelectionRef: p,
                isPointerDownOnContentRef: h,
                isPointerInTransitRef: g,
                triggerElement: _,
                enableTouch: c
            }), (t, n) => (m(), e(y(K), null, {
                default: l(() => [b(t.$slots, `default`, {
                    open: y(u)
                })]),
                _: 3
            }))
        }
    });

function fn(e) {
    return t => t.pointerType === `touch` ? void 0 : e()
}

function pn(e) {
    let t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}
var mn = E({
        __name: `HoverCardContentImpl`,
        props: {
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
            }
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`],
        setup(n, {
            emit: r
        }) {
            let o = n,
                c = r,
                u = j(o),
                {
                    forwardRef: d,
                    currentElement: p
                } = G(),
                h = ln(),
                {
                    isPointerInTransit: g,
                    onPointerExit: _
                } = te(h.triggerElement, p);
            N(h.isPointerInTransitRef, g, {
                direction: `rtl`
            }), _(() => {
                h.onClose()
            });
            let x = t(!1),
                S;
            D(e => {
                if (x.value) {
                    let t = document.body;
                    S = t.style.userSelect || t.style.webkitUserSelect, t.style.userSelect = `none`, t.style.webkitUserSelect = `none`, e(() => {
                        t.style.userSelect = S, t.style.webkitUserSelect = S
                    })
                }
            });

            function w() {
                x.value = !1, h.isPointerDownOnContentRef.value = !1, s(() => {
                    document.getSelection() ? .toString() !== `` && (h.hasSelectionRef.value = !0)
                })
            }
            return f(() => {
                p.value && (document.addEventListener(`pointerup`, w), pn(p.value).forEach(e => e.setAttribute(`tabindex`, `-1`))), L(window, `scroll`, e => {
                    e.target ? .contains(h.triggerElement.value) && h.onDismiss()
                }, {
                    capture: !0
                })
            }), C(() => {
                document.removeEventListener(`pointerup`, w), h.hasSelectionRef.value = !1, h.isPointerDownOnContentRef.value = !1
            }), (t, n) => (m(), e(y(W), {
                "as-child": ``,
                "disable-outside-pointer-events": !1,
                onEscapeKeyDown: n[1] || = e => c(`escapeKeyDown`, e),
                onPointerDownOutside: n[2] || = e => c(`pointerDownOutside`, e),
                onFocusOutside: n[3] || = i(e => c(`focusOutside`, e), [`prevent`]),
                onDismiss: y(h).onDismiss
            }, {
                default: l(() => [v(y(Me), a({ ...y(u),
                    ...t.$attrs
                }, {
                    ref: y(d),
                    "data-state": y(h).open.value ? `open` : `closed`,
                    style: {
                        userSelect: x.value ? `text` : void 0,
                        WebkitUserSelect: x.value ? `text` : void 0,
                        "--reka-hover-card-content-transform-origin": `var(--reka-popper-transform-origin)`,
                        "--reka-hover-card-content-available-width": `var(--reka-popper-available-width)`,
                        "--reka-hover-card-content-available-height": `var(--reka-popper-available-height)`,
                        "--reka-hover-card-trigger-width": `var(--reka-popper-anchor-width)`,
                        "--reka-hover-card-trigger-height": `var(--reka-popper-anchor-height)`
                    },
                    onPointerdown: n[0] || = e => {
                        e.currentTarget.contains(e.target) && (x.value = !0), y(h).hasSelectionRef.value = !1, y(h).isPointerDownOnContentRef.value = !0
                    }
                }), {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 16, [`data-state`, `style`])]),
                _: 3
            }, 8, [`onDismiss`]))
        }
    }),
    hn = E({
        __name: `HoverCardContent`,
        props: {
            forceMount: {
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
            }
        },
        emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`],
        setup(t, {
            emit: n
        }) {
            let r = J(t, n),
                {
                    forwardRef: i
                } = G(),
                o = ln();
            return (t, n) => (m(), e(y(k), {
                present: t.forceMount || y(o).open.value
            }, {
                default: l(() => [v(mn, a(y(r), {
                    ref: y(i),
                    onPointerenter: n[0] || = e => y(fn)(y(o).onOpen)(e)
                }), {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 16)]),
                _: 3
            }, 8, [`present`]))
        }
    }),
    gn = E({
        __name: `HoverCardPortal`,
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
            return (t, r) => (m(), e(y(be), S(_(n)), {
                default: l(() => [b(t.$slots, `default`)]),
                _: 3
            }, 16))
        }
    }),
    _n = E({
        __name: `HoverCardTrigger`,
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
                required: !1,
                default: `a`
            }
        },
        setup(t) {
            let {
                forwardRef: n,
                currentElement: r
            } = G(), i = ln();
            i.triggerElement = r;

            function a() {
                setTimeout(() => {
                    !i.isPointerInTransitRef.value && !i.open.value && i.onClose()
                }, 0)
            }

            function o(e) {
                !i.enableTouch.value || e.pointerType !== `touch` || (i.open.value ? i.onDismiss() : i.onOpenChange(!0))
            }
            return (t, r) => (m(), e(y(q), {
                "as-child": ``,
                reference: t.reference
            }, {
                default: l(() => [v(y(R), {
                    ref: y(n),
                    "as-child": t.asChild,
                    as: t.as,
                    "data-state": y(i).open.value ? `open` : `closed`,
                    "data-grace-area-trigger": ``,
                    onPointerenter: r[0] || = e => y(fn)(y(i).onOpen)(e),
                    onPointerleave: r[1] || = e => y(fn)(a)(e),
                    onPointerup: o,
                    onFocus: r[2] || = e => y(i).onOpen(),
                    onBlur: r[3] || = e => y(i).onClose()
                }, {
                    default: l(() => [b(t.$slots, `default`)]),
                    _: 3
                }, 8, [`as-child`, `as`, `data-state`])]),
                _: 3
            }, 8, [`reference`]))
        }
    }),
    vn = {
        Root: Ye,
        Input: Xe,
        Anchor: ue,
        Empty: _e,
        Trigger: de,
        Cancel: ae,
        Group: le,
        Label: B,
        Content: H,
        Viewport: Ze,
        Virtualizer: ge,
        Item: he,
        ItemIndicator: fe,
        Separator: me,
        Arrow: pe,
        Portal: ce
    },
    yn = {
        Root: se,
        Input: V,
        Anchor: ue,
        Empty: _e,
        Trigger: de,
        Cancel: ae,
        Group: le,
        Label: B,
        Content: H,
        Viewport: Ze,
        Virtualizer: ge,
        Item: he,
        ItemIndicator: fe,
        Separator: me,
        Arrow: pe,
        Portal: ce
    },
    bn = {
        Root: Kt,
        Trigger: sn,
        Portal: $t,
        Content: qt,
        Arrow: Ht,
        Item: Xt,
        Group: Yt,
        Separator: nn,
        CheckboxItem: Ut,
        ItemIndicator: Zt,
        Label: Qt,
        RadioGroup: en,
        RadioItem: tn,
        Sub: rn,
        SubContent: an,
        SubTrigger: on,
        Filter: Jt
    },
    xn = {
        Root: dn,
        Trigger: _n,
        Portal: gn,
        Content: hn,
        Arrow: cn
    },
    Sn = {
        Root: Mt,
        Trigger: Vt,
        Portal: Bt,
        Content: zt,
        Arrow: Pt,
        Close: Ft,
        Anchor: Nt
    };
export {
    Sn as a, Ht as c, xn as i, yn as n, sn as o, bn as r, Kt as s, vn as t
};