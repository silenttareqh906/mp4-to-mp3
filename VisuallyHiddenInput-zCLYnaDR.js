import {
    $ as e,
    Cn as t,
    Ft as n,
    V as r,
    Yt as i,
    Z as a,
    et as o,
    tn as s,
    tt as c,
    ut as l
} from "./dist-DAh4MArN.js";
import {
    t as u
} from "./VisuallyHidden-BsMHQhx3.js";
import {
    t as d
} from "./usePrimitiveElement-BsEpVwz7.js";
var f = l({
        inheritAttrs: !1,
        __name: `VisuallyHiddenInputBubble`,
        props: {
            name: {
                type: String,
                required: !0
            },
            value: {
                type: null,
                required: !0
            },
            checked: {
                type: Boolean,
                required: !1,
                default: void 0
            },
            required: {
                type: Boolean,
                required: !1
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            feature: {
                type: String,
                required: !1,
                default: `fully-hidden`
            }
        },
        setup(r) {
            let o = r,
                {
                    primitiveElement: s,
                    currentElement: c
                } = d(),
                l = a(() => o.checked ? ? o.value);
            return t(l, (e, t) => {
                if (!c.value) return;
                let n = c.value,
                    r = window.HTMLInputElement.prototype,
                    i = Object.getOwnPropertyDescriptor(r, `value`).set;
                if (i && e !== t) {
                    let t = new Event(`input`, {
                            bubbles: !0
                        }),
                        r = new Event(`change`, {
                            bubbles: !0
                        });
                    i.call(n, e), n.dispatchEvent(t), n.dispatchEvent(r)
                }
            }), (t, r) => (i(), e(u, n({
                ref_key: `primitiveElement`,
                ref: s
            }, { ...o,
                ...t.$attrs
            }, {
                as: `input`
            }), null, 16))
        }
    }),
    p = l({
        inheritAttrs: !1,
        __name: `VisuallyHiddenInput`,
        props: {
            name: {
                type: String,
                required: !0
            },
            value: {
                type: null,
                required: !0
            },
            checked: {
                type: Boolean,
                required: !1,
                default: void 0
            },
            required: {
                type: Boolean,
                required: !1
            },
            disabled: {
                type: Boolean,
                required: !1
            },
            feature: {
                type: String,
                required: !1,
                default: `fully-hidden`
            }
        },
        setup(t) {
            let l = t,
                u = a(() => typeof l.value == `object` && Array.isArray(l.value) && l.value.length === 0 && l.required),
                d = a(() => typeof l.value == `string` || typeof l.value == `number` || typeof l.value == `boolean` || l.value === null || l.value === void 0 ? [{
                    name: l.name,
                    value: l.value
                }] : typeof l.value == `object` && Array.isArray(l.value) ? l.value.flatMap((e, t) => typeof e == `object` ? Object.entries(e).map(([e, n]) => ({
                    name: `${l.name}[${t}][${e}]`,
                    value: n
                })) : {
                    name: `${l.name}[${t}]`,
                    value: e
                }) : l.value !== null && typeof l.value == `object` && !Array.isArray(l.value) ? Object.entries(l.value).map(([e, t]) => ({
                    name: `${l.name}[${e}]`,
                    value: t
                })) : []);
            return (t, a) => (i(), c(r, null, [o(` We render single input if it's required `), u.value ? (i(), e(f, n({
                key: t.name
            }, { ...l,
                ...t.$attrs
            }, {
                name: t.name,
                value: t.value
            }), null, 16, [`name`, `value`])) : (i(!0), c(r, {
                key: 1
            }, s(d.value, r => (i(), e(f, n({
                key: r.name
            }, {
                ref_for: !0
            }, { ...l,
                ...t.$attrs
            }, {
                name: r.name,
                value: r.value
            }), null, 16, [`name`, `value`]))), 128))], 2112))
        }
    });
export {
    p as t
};