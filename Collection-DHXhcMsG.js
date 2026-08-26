import {
    $n as e,
    Cn as t,
    Z as n,
    Zt as r,
    kt as i,
    qn as a,
    sr as o,
    ut as s,
    wn as c,
    xt as l
} from "./dist-DAh4MArN.js";
import {
    s as u
} from "./dist-BnMQmsWl.js";
import {
    o as d
} from "./tv-Dcq2oBvx.js";
import {
    t as f
} from "./usePrimitiveElement-BsEpVwz7.js";

function p(e) {
    return n(() => !o(e) || !!u(e) ? .closest(`form`))
}
var m = `data-reka-collection-item`;

function h(o = {}) {
    let {
        key: u = ``,
        isProvider: p = !1
    } = o, h = `${u}CollectionProvider`, g;
    if (p) {
        let t = e(new Map);
        g = {
            collectionRef: e(),
            itemMap: t
        }, r(h, g)
    } else g = i(h);
    let _ = (e = !1) => {
            let t = g.collectionRef.value;
            if (!t) return [];
            let n = Array.from(t.querySelectorAll(`[${m}]`)),
                r = new Map(n.map((e, t) => [e, t])),
                i = Array.from(g.itemMap.value.values()).sort((e, t) => (r.get(e.ref) ? ? -1) - (r.get(t.ref) ? ? -1));
            return e ? i : i.filter(e => e.ref.dataset.disabled !== ``)
        },
        v = s({
            name: `CollectionSlot`,
            inheritAttrs: !1,
            setup(e, {
                slots: n,
                attrs: r
            }) {
                let {
                    primitiveElement: i,
                    currentElement: a
                } = f();
                return t(a, () => {
                    g.collectionRef.value = a.value
                }), () => l(d, {
                    ref: i,
                    ...r
                }, n)
            }
        }),
        y = s({
            name: `CollectionItem`,
            inheritAttrs: !1,
            props: {
                value: {
                    validator: () => !0
                }
            },
            setup(e, {
                slots: t,
                attrs: n
            }) {
                let {
                    primitiveElement: r,
                    currentElement: i
                } = f();
                return c(t => {
                    if (i.value) {
                        let n = a(i.value);
                        g.itemMap.value.set(n, {
                            ref: i.value,
                            value: e.value
                        }), t(() => g.itemMap.value.delete(n))
                    }
                }), () => l(d, { ...n,
                    [m]: ``,
                    ref: r
                }, t)
            }
        });
    return {
        getItems: _,
        reactiveItems: n(() => Array.from(g.itemMap.value.values())),
        itemMapSize: n(() => g.itemMap.value.size),
        CollectionSlot: v,
        CollectionItem: y
    }
}
export {
    p as n, h as t
};