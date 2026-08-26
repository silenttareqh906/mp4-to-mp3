import {
    $ as e,
    On as t,
    Yt as n,
    lr as r,
    nn as i,
    or as a,
    ut as o
} from "./dist-DAh4MArN.js";
import {
    a as s,
    c
} from "./tv-Dcq2oBvx.js";
var [l, u] = c(`ConfigProvider`), d = o({
    inheritAttrs: !1,
    __name: `ConfigProvider`,
    props: {
        dir: {
            type: String,
            required: !1,
            default: `ltr`
        },
        locale: {
            type: String,
            required: !1,
            default: `en`
        },
        scrollBody: {
            type: [Boolean, Object],
            required: !1,
            default: !0
        },
        nonce: {
            type: String,
            required: !1,
            default: void 0
        },
        teleportTo: {
            type: null,
            required: !1,
            default: void 0
        },
        useId: {
            type: Function,
            required: !1,
            default: void 0
        }
    },
    setup(e) {
        let t = e,
            {
                dir: n,
                locale: r,
                scrollBody: o,
                nonce: s,
                teleportTo: c
            } = a(t);
        return u({
            dir: n,
            locale: r,
            scrollBody: o,
            nonce: s,
            teleportTo: c,
            useId: t.useId
        }), (e, t) => i(e.$slots, `default`)
    }
}), f = o({
    __name: `VisuallyHidden`,
    props: {
        feature: {
            type: String,
            required: !1,
            default: `focusable`
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
    setup(a) {
        return (a, o) => (n(), e(r(s), {
            as: a.as,
            "as-child": a.asChild,
            "aria-hidden": a.feature === `focusable` || a.feature === `fully-hidden` ? `true` : void 0,
            "data-hidden": a.feature === `fully-hidden` ? `` : void 0,
            tabindex: a.feature === `fully-hidden` ? `-1` : void 0,
            style: {
                position: `absolute`,
                border: 0,
                width: `1px`,
                height: `1px`,
                padding: 0,
                margin: `-1px`,
                overflow: `hidden`,
                clip: `rect(0, 0, 0, 0)`,
                clipPath: `inset(50%)`,
                whiteSpace: `nowrap`,
                wordWrap: `normal`,
                top: `-1px`,
                left: `-1px`
            }
        }, {
            default: t(() => [i(a.$slots, `default`)]),
            _: 3
        }, 8, [`as`, `as-child`, `aria-hidden`, `data-hidden`, `tabindex`]))
    }
});
export {
    d as n, l as r, f as t
};