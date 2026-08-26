import {
    $ as e,
    On as t,
    Yt as n,
    Z as r,
    Zt as i,
    fr as a,
    lr as o,
    nn as s
} from "./dist-DAh4MArN.js";
import {
    m as c
} from "./Link-_LwZUouH.js";
import {
    a as l,
    i as u,
    t as d,
    x as f
} from "./tv-Dcq2oBvx.js";
var p = {
        base: `relative`,
        variants: {
            size: {
                xs: ``,
                sm: ``,
                md: ``,
                lg: ``,
                xl: ``
            },
            orientation: {
                horizontal: `inline-flex -space-x-px`,
                vertical: `flex flex-col -space-y-px`
            }
        }
    },
    m = {
        __name: `FieldGroup`,
        props: {
            as: {
                type: null,
                required: !1
            },
            size: {
                type: null,
                required: !1
            },
            orientation: {
                type: null,
                required: !1,
                default: `horizontal`
            },
            class: {
                type: null, required: !1
            },
            ui: {
                type: Object,
                required: !1
            }
        },
        setup(m) {
            let h = u(`fieldGroup`, m),
                g = f(),
                _ = r(() => d({
                    extend: p,
                    ...g.ui ? .fieldGroup || {}
                }));
            return i(c, r(() => ({
                orientation: h.orientation,
                size: h.size
            }))), (r, i) => (n(), e(o(l), {
                as: o(h).as,
                "data-orientation": o(h).orientation,
                class: a(_.value({
                    orientation: o(h).orientation,
                    class: [o(h).ui ? .base, o(h).class]
                }))
            }, {
                default: t(() => [s(r.$slots, `default`)]),
                _: 3
            }, 8, [`as`, `data-orientation`, `class`]))
        }
    };
export {
    m as t
};