import {
    $ as e,
    $n as t,
    Cn as n,
    It as r,
    On as i,
    Q as a,
    V as o,
    Yt as s,
    Z as c,
    ct as l,
    et as ee,
    fr as u,
    hr as d,
    lr as f,
    nn as te,
    st as ne,
    tn as p,
    tt as m,
    ut as h
} from "./dist-DAh4MArN.js";
import {
    y as re
} from "./Link-_LwZUouH.js";
import {
    t as ie
} from "./Input-B42cV3Tc.js";
import {
    $t as ae,
    D as oe,
    E as g,
    M as se,
    tr as _
} from "./solid-xsGUDKgI.js";
import {
    D as ce,
    b as le
} from "./app-CYWi0gZD.js";
import {
    i as v
} from "./useApi-CTGQWKI_.js";
var y = t({}),
    b = t(!1),
    x = null,
    S = `other`;
async function C() {
    if (Object.keys(y.value).length) return y.value;
    if (!x) {
        let e = v(`/v2/formatgroups`, {
            credentials: `omit`
        }, {
            immediate: !1
        }).json();
        x = e.execute().then(() => e.data.value ? ? {}).catch(e => {
            throw x = null, e
        })
    }
    b.value = !0;
    try {
        y.value = await x
    } finally {
        b.value = !1
    }
    return y.value
}

function w(e) {
    return e ? y.value[e.toLowerCase()] ? ? S : S
}

function T() {
    return {
        formatGroups: y,
        loading: b,
        loadFormatGroups: C,
        groupForFormat: w
    }
}
var E = {
        class: `flex h-72 min-h-0`
    },
    D = {
        key: 0,
        class: `flex-1 flex items-center justify-center text-dimmed`
    },
    O = {
        key: 0,
        class: `w-[10rem] shrink-0 overflow-y-auto border-r border-default py-1`
    },
    k = [`onMouseenter`, `onClick`, `onKeydown`],
    A = {
        class: `truncate capitalize`
    },
    ue = {
        class: `flex-1 min-w-0 overflow-y-auto p-2`
    },
    de = {
        key: 0,
        class: `flex h-full items-center justify-center text-sm text-muted`
    },
    fe = {
        key: 1,
        class: `grid grid-cols-3 gap-1.5`
    },
    pe = [`onClick`, `onKeydown`],
    j = 3,
    M = h({
        inheritAttrs: !1,
        __name: `FormatSelectorMenu`,
        props: {
            modelValue: {
                default: null
            },
            items: {
                default: () => []
            },
            loading: {
                type: Boolean,
                default: !1
            },
            placeholder: {
                default: `Select Format`
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            size: {
                default: `md`
            },
            color: {
                default: `neutral`
            },
            variant: {
                default: `outline`
            },
            valueKey: {},
            labelKey: {
                default: `label`
            },
            clear: {
                type: Boolean,
                default: !1
            },
            defaultGroup: {},
            defaultGroupByFormat: {},
            contentWidth: {
                default: `w-[24rem]`
            },
            class: {},
            ui: {}
        },
        emits: [`update:modelValue`, `update:open`],
        setup(h, {
            emit: v
        }) {
            let y = h,
                b = v,
                {
                    formatGroups: x,
                    loading: S,
                    loadFormatGroups: C,
                    groupForFormat: w
                } = T(),
                M = t(!1),
                N = t(``),
                P = t(null),
                F = t({}),
                I = t(null),
                L = t(null);

            function R(e, t) {
                F.value[e] = t ? ? null
            }

            function z(e) {
                e && r(() => {
                    F.value[e] ? .scrollIntoView({
                        block: `nearest`
                    })
                })
            }

            function B(e) {
                if (e == null) return ``;
                if (typeof e == `string`) return e;
                let t = y.valueKey;
                return String((t && e[t] != null ? e[t] : e.value) ? ? e[y.labelKey] ? ? ``)
            }

            function me(e) {
                return e == null ? `` : typeof e == `string` ? e : String(e[y.labelKey] ? ? B(e))
            }
            let V = c(() => Array.from(new Set((y.items ? ? []).map(B).filter(Boolean)))),
                H = c(() => {
                    let e = new Set;
                    for (let t of V.value) e.add(w(t));
                    return Array.from(e).sort()
                }),
                U = c(() => N.value === `` && H.value.length > 1),
                W = c(() => {
                    if (N.value !== ``) {
                        let e = N.value.toLowerCase();
                        return V.value.filter(t => t.toLowerCase().includes(e)).sort()
                    }
                    return P.value ? V.value.filter(e => w(e) === P.value).sort() : [...V.value].sort()
                }),
                G = c(() => {
                    if (!y.modelValue) return y.placeholder;
                    let e = (y.items ? ? []).find(e => B(e) === y.modelValue);
                    return (e ? me(e) : y.modelValue).toUpperCase()
                }),
                K = c(() => !!y.modelValue);

            function q(e) {
                b(`update:modelValue`, e), M.value = !1
            }

            function J() {
                y.modelValue && b(`update:modelValue`, null)
            }
            let Y = c(() => y.clear && K.value && !y.disabled && !y.loading),
                he = c(() => Y.value ? _ : g);

            function ge(e) {
                Y.value && e.target ? .closest(`[data-slot="trailingIcon"]`) && (e.preventDefault(), e.stopImmediatePropagation(), J())
            }
            let X = c(() => {
                let e = H.value.indexOf(P.value ? ? ``);
                return e === -1 ? null : e
            });

            function Z(e, t) {
                let n = I.value ? .querySelectorAll(e);
                n ? .length && n[Math.max(0, Math.min(t, n.length - 1))].focus()
            }

            function Q() {
                L.value ? .inputRef ? .focus()
            }

            function _e(e) {
                if (e.key === `ArrowDown`) {
                    if (e.preventDefault(), !U.value) {
                        Z(`[data-format-item]`, 0);
                        return
                    }
                    let t = X.value,
                        n = t === null ? 0 : Math.min(t + 1, H.value.length - 1);
                    P.value = H.value[n], Z(`[data-format-group]`, n)
                } else if (e.key === `ArrowUp`) {
                    if (!U.value) return;
                    e.preventDefault();
                    let t = Math.max((X.value ? ? 0) - 1, 0);
                    P.value = H.value[t], Z(`[data-format-group]`, t)
                } else if (e.key === `ArrowRight`) {
                    let t = e.target;
                    if (!(!t ? .value || t.selectionStart === (t.value ? .length ? ? 0)) || !W.value.length) return;
                    e.preventDefault(), r(() => Z(`[data-format-item]`, 0))
                }
            }

            function ve(e, t, n) {
                switch (e.key) {
                    case `ArrowDown`:
                        e.preventDefault(), t < H.value.length - 1 && (P.value = H.value[t + 1], Z(`[data-format-group]`, t + 1));
                        break;
                    case `ArrowUp`:
                        e.preventDefault(), t === 0 ? Q() : (P.value = H.value[t - 1], Z(`[data-format-group]`, t - 1));
                        break;
                    case `ArrowRight`:
                    case `Enter`:
                        e.preventDefault(), P.value = n, r(() => Z(`[data-format-item]`, 0))
                }
            }

            function ye(e, t, n) {
                switch (e.key) {
                    case `ArrowRight`:
                        e.preventDefault(), t < W.value.length - 1 && Z(`[data-format-item]`, t + 1);
                        break;
                    case `ArrowLeft`:
                        e.preventDefault(), t % j === 0 ? U.value && Z(`[data-format-group]`, X.value ? ? 0) : Z(`[data-format-item]`, t - 1);
                        break;
                    case `ArrowDown`:
                        e.preventDefault(), Z(`[data-format-item]`, t + j);
                        break;
                    case `ArrowUp`:
                        e.preventDefault(), t < j ? Q() : Z(`[data-format-item]`, t - j);
                        break;
                    case `Enter`:
                    case ` `:
                        e.preventDefault(), q(n)
                }
            }

            function $() {
                if (y.modelValue) {
                    let e = w(y.modelValue);
                    if (H.value.includes(e)) {
                        P.value = e;
                        return
                    }
                }
                if (y.defaultGroupByFormat) {
                    let e = w(y.defaultGroupByFormat);
                    if (H.value.includes(e)) {
                        P.value = e;
                        return
                    }
                }
                if (y.defaultGroup && H.value.includes(y.defaultGroup)) {
                    P.value = y.defaultGroup;
                    return
                }
                P.value = H.value[0] ? ? null
            }
            return n(M, async e => {
                if (b(`update:open`, e), !e) {
                    N.value = ``;
                    return
                }
                await C(), $(), z(P.value)
            }), n([() => y.modelValue, V, x], () => {
                M.value && $()
            }), n(P, e => {
                M.value && z(e)
            }), n(V, e => {
                y.modelValue && e.length && !e.includes(y.modelValue) && b(`update:modelValue`, null)
            }), (t, n) => {
                let r = ce,
                    c = ie,
                    g = re,
                    _ = le;
                return s(), e(_, {
                    open: M.value,
                    "onUpdate:open": n[1] || = e => M.value = e,
                    content: {
                        align: `start`,
                        side: `bottom`,
                        sideOffset: 4
                    },
                    ui: {
                        content: `p-0 overflow-hidden`
                    }
                }, {
                    content: i(() => [a(`div`, {
                        ref_key: `popoverContentRef`,
                        ref: I,
                        class: u([`flex flex-col`, h.contentWidth])
                    }, [l(c, {
                        ref_key: `searchInputRef`,
                        ref: L,
                        modelValue: N.value,
                        "onUpdate:modelValue": n[0] || = e => N.value = e,
                        icon: f(ae),
                        variant: `none`,
                        size: `md`,
                        placeholder: `Search Format`,
                        autocomplete: `off`,
                        spellcheck: `false`,
                        autofocus: ``,
                        ui: {
                            root: `w-full`,
                            base: `w-full border-b border-default rounded-none focus:ring-0`,
                            leadingIcon: `size-4`
                        },
                        onKeydown: _e
                    }, null, 8, [`modelValue`, `icon`]), a(`div`, E, [h.loading || f(S) ? (s(), m(`div`, D, [l(g, {
                        name: f(se),
                        class: `size-5 animate-spin`
                    }, null, 8, [`name`])])) : (s(), m(o, {
                        key: 1
                    }, [U.value ? (s(), m(`ul`, O, [(s(!0), m(o, null, p(H.value, (e, t) => (s(), m(`li`, {
                        key: e,
                        ref_for: !0,
                        ref: t => R(e, t)
                    }, [a(`button`, {
                        type: `button`,
                        "data-format-group": ``,
                        class: u([`group/item flex w-full items-center justify-between gap-2 px-3 py-2 text-sm transition-colors focus:outline-none focus-visible:bg-elevated focus-visible:text-highlighted`, P.value === e ? `text-highlighted bg-elevated` : `text-default hover:text-highlighted hover:bg-elevated/60`]),
                        onMouseenter: t => P.value = e,
                        onClick: t => P.value = e,
                        onKeydown: n => ve(n, t, e)
                    }, [a(`span`, A, d(e), 1), l(g, {
                        name: f(oe),
                        class: u([`size-3 text-muted transition-opacity`, P.value === e ? `opacity-100` : `opacity-0 group-hover/item:opacity-50`])
                    }, null, 8, [`name`, `class`])], 42, k)]))), 128))])) : ee(``, !0), a(`div`, ue, [W.value.length === 0 ? (s(), m(`div`, de, ` No formats found `)) : (s(), m(`div`, fe, [(s(!0), m(o, null, p(W.value, (e, t) => (s(), m(`button`, {
                        key: e,
                        type: `button`,
                        "data-format-item": ``,
                        class: u([`flex items-center justify-center rounded-md px-2 py-2 text-xs font-semibold uppercase tracking-wide ring ring-inset transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`, h.modelValue === e ? `bg-primary text-inverted ring-primary hover:bg-primary` : `text-default ring-default hover:bg-elevated hover:text-highlighted hover:ring-accented`]),
                        onClick: t => q(e),
                        onKeydown: n => ye(n, t, e)
                    }, d(e), 43, pe))), 128))]))])], 64))])], 2)]),
                    default: i(() => [te(t.$slots, `trigger`, {
                        label: G.value,
                        hasValue: K.value,
                        loading: h.loading,
                        disabled: h.disabled,
                        clear: J,
                        showClearIcon: Y.value
                    }, () => [l(r, {
                        color: h.color,
                        variant: h.variant,
                        size: h.size,
                        disabled: h.disabled,
                        loading: h.loading,
                        block: ``,
                        "trailing-icon": he.value,
                        class: u([`font-normal`, y.class]),
                        ui: {
                            base: `justify-start cursor-pointer disabled:cursor-not-allowed` + (!K.value && y.color === `neutral` ? ` text-dimmed` : ``),
                            trailingIcon: Y.value ? `ms-auto text-dimmed hover:text-default cursor-pointer` : `ms-auto` + (y.color === `neutral` ? ` text-dimmed` : ``),
                            ...h.ui ? ? {}
                        },
                        onClickCapture: ge
                    }, {
                        default: i(() => [ne(d(G.value), 1)]),
                        _: 1
                    }, 8, [`color`, `variant`, `size`, `disabled`, `loading`, `trailing-icon`, `class`, `ui`])])]),
                    _: 3
                }, 8, [`open`])
            }
        }
    });
export {
    T as n, M as t
};