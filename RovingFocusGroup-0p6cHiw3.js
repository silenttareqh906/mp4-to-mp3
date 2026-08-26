import {
    $ as e,
    $n as t,
    On as n,
    Yt as r,
    ct as i,
    lr as a,
    nn as o,
    or as s,
    ut as c
} from "./dist-DAh4MArN.js";
import {
    T as l
} from "./dist-BnMQmsWl.js";
import {
    a as u,
    c as d
} from "./tv-Dcq2oBvx.js";
import {
    t as f
} from "./getActiveElement-DWEoD8ZB.js";
import {
    n as p
} from "./usePrimitiveElement-BsEpVwz7.js";
import {
    t as m
} from "./Collection-DHXhcMsG.js";
var h = `rovingFocusGroup.onEntryFocus`,
    g = {
        bubbles: !1,
        cancelable: !0
    },
    _ = {
        ArrowLeft: `prev`,
        ArrowUp: `prev`,
        ArrowRight: `next`,
        ArrowDown: `next`,
        PageUp: `first`,
        Home: `first`,
        PageDown: `last`,
        End: `last`
    };

function v(e, t) {
    return t === `rtl` ? e === `ArrowLeft` ? `ArrowRight` : e === `ArrowRight` ? `ArrowLeft` : e : e
}

function y(e, t, n) {
    let r = v(e.key, n);
    if (!(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) && !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r))) return _[r]
}

function b(e, t = !1) {
    let n = f();
    for (let r of e)
        if (r === n || (r.focus({
                preventScroll: t
            }), f() !== n)) return
}

function x(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}
var [S, C] = d(`RovingFocusGroup`), w = c({
    __name: `RovingFocusGroup`,
    props: {
        orientation: {
            type: String,
            required: !1,
            default: void 0
        },
        dir: {
            type: String,
            required: !1
        },
        loop: {
            type: Boolean,
            required: !1,
            default: !1
        },
        currentTabStopId: {
            type: [String, null],
            required: !1
        },
        defaultCurrentTabStopId: {
            type: String,
            required: !1
        },
        preventScrollOnEntryFocus: {
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
        }
    },
    emits: [`entryFocus`, `update:currentTabStopId`],
    setup(c, {
        expose: d,
        emit: f
    }) {
        let _ = c,
            v = f,
            {
                loop: y,
                orientation: x,
                dir: S
            } = s(_),
            w = p(S),
            T = l(_, `currentTabStopId`, v, {
                defaultValue: _.defaultCurrentTabStopId,
                passive: _.currentTabStopId === void 0
            }),
            E = t(!1),
            D = t(!1),
            O = t(0),
            {
                getItems: k,
                CollectionSlot: A
            } = m({
                isProvider: !0
            });

        function j(e) {
            let t = !D.value;
            if (e.currentTarget && e.target === e.currentTarget && t && !E.value) {
                let t = new CustomEvent(h, g);
                if (e.currentTarget.dispatchEvent(t), v(`entryFocus`, t), !t.defaultPrevented) {
                    let e = k().map(e => e.ref).filter(e => e.dataset.disabled !== ``);
                    b([e.find(e => e.getAttribute(`data-active`) === ``), e.find(e => e.getAttribute(`data-highlighted`) === ``), e.find(e => e.id === T.value), ...e].filter(Boolean), _.preventScrollOnEntryFocus)
                }
            }
            D.value = !1
        }

        function M() {
            setTimeout(() => {
                D.value = !1
            }, 1)
        }
        return d({
            getItems: k
        }), C({
            loop: y,
            dir: w,
            orientation: x,
            currentTabStopId: T,
            onItemFocus: e => {
                T.value = e
            },
            onItemShiftTab: () => {
                E.value = !0
            },
            onFocusableItemAdd: () => {
                O.value++
            },
            onFocusableItemRemove: () => {
                O.value--
            }
        }), (t, s) => (r(), e(a(A), null, {
            default: n(() => [i(a(u), {
                tabindex: E.value || O.value === 0 ? -1 : 0,
                "data-orientation": a(x),
                as: t.as,
                "as-child": t.asChild,
                dir: a(w),
                style: {
                    outline: `none`
                },
                onMousedown: s[0] || = e => D.value = !0,
                onMouseup: M,
                onFocus: j,
                onBlur: s[1] || = e => E.value = !1
            }, {
                default: n(() => [o(t.$slots, `default`)]),
                _: 3
            }, 8, [`tabindex`, `data-orientation`, `as`, `as-child`, `dir`])]),
            _: 3
        }))
    }
});
export {
    y as a, b as i, S as n, x as o, _ as r, w as t
};