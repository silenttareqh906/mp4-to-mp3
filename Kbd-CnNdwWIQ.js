import {
    $ as e,
    $n as t,
    On as n,
    Ut as r,
    Yt as i,
    Z as a,
    Zn as o,
    fr as s,
    hr as c,
    lr as l,
    nn as u,
    st as d,
    wn as f
} from "./dist-DAh4MArN.js";
import {
    A as p,
    i as m,
    s as h,
    w as g
} from "./dist-CVWdmVRe.js";
import {
    a as _,
    i as v,
    t as y,
    x as b
} from "./tv-Dcq2oBvx.js";
var x = {
        meta: ``,
        ctrl: ``,
        alt: ``,
        win: `⊞`,
        command: `⌘`,
        shift: `⇧`,
        control: `⌃`,
        option: `⌥`,
        enter: `↵`,
        delete: `⌦`,
        backspace: `⌫`,
        escape: `Esc`,
        tab: `⇥`,
        capslock: `⇪`,
        arrowup: `↑`,
        arrowright: `→`,
        arrowdown: `↓`,
        arrowleft: `←`,
        pageup: `⇞`,
        pagedown: `⇟`,
        home: `↖`,
        end: `↘`
    },
    S = h(() => {
        let e = a(() => navigator && navigator.userAgent && navigator.userAgent.match(/Macintosh;/)),
            t = o({
                meta: ` `,
                alt: ` `,
                ctrl: ` `
            });
        r(() => {
            t.meta = e.value ? x.command : `Ctrl`, t.ctrl = e.value ? x.control : `Ctrl`, t.alt = e.value ? x.option : `Alt`
        });

        function n(e) {
            if (e) return [`meta`, `alt`, `ctrl`].includes(e) ? t[e] : x[e] || e
        }
        return {
            macOS: e,
            getKbdKey: n
        }
    });

function C(e, n) {
    let r = g(!1, 300);
    p(() => {
        r.value = !1
    });
    let i = t(null),
        a = m();

    function o() {
        i.value = null, r.value = !1
    }

    function s(e, t) {
        if (!t) return;
        let n = e.currentTarget,
            a = {
                x: e.clientX,
                y: e.clientY
            },
            o = T(a, w(a, n.getBoundingClientRect()), 1),
            s = E(t.getBoundingClientRect()),
            c = O([...o, ...s]);
        i.value = c, r.value = !0
    }
    return f(t => {
        if (e.value && n.value) {
            let r = e => s(e, n.value),
                i = t => s(t, e.value);
            e.value.addEventListener(`pointerleave`, r), n.value.addEventListener(`pointerleave`, i), t(() => {
                e.value ? .removeEventListener(`pointerleave`, r), n.value ? .removeEventListener(`pointerleave`, i)
            })
        }
    }), f(t => {
        if (i.value) {
            let r = t => {
                if (!i.value || !(t.target instanceof Element)) return;
                let r = t.target,
                    s = {
                        x: t.clientX,
                        y: t.clientY
                    },
                    c = e.value ? .contains(r) || n.value ? .contains(r),
                    l = !D(s, i.value),
                    u = !!r.closest(`[data-grace-area-trigger]`);
                c ? o() : (l || u) && (o(), a.trigger())
            };
            e.value ? .ownerDocument.addEventListener(`pointermove`, r), t(() => e.value ? .ownerDocument.removeEventListener(`pointermove`, r))
        }
    }), {
        isPointerInTransit: r,
        onPointerExit: a.on
    }
}

function w(e, t) {
    let n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        i = Math.abs(t.right - e.x),
        a = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, a)) {
        case a:
            return `left`;
        case i:
            return `right`;
        case n:
            return `top`;
        case r:
            return `bottom`;
        default:
            throw Error(`unreachable`)
    }
}

function T(e, t, n = 5) {
    let r = [];
    switch (t) {
        case `top`:
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case `bottom`:
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case `left`:
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case `right`:
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            })
    }
    return r
}

function E(e) {
    let {
        top: t,
        right: n,
        bottom: r,
        left: i
    } = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}

function D(e, t) {
    let {
        x: n,
        y: r
    } = e, i = !1;
    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
        let o = t[e].x,
            s = t[e].y,
            c = t[a].x,
            l = t[a].y;
        s > r != l > r && n < (c - o) * (r - s) / (l - s) + o && (i = !i)
    }
    return i
}

function O(e) {
    let t = e.slice();
    return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), k(t)
}

function k(e) {
    if (e.length <= 1) return e.slice();
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        for (; t.length >= 2;) {
            let e = t.at(-1),
                n = t[t.length - 2];
            if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
            else break
        }
        t.push(r)
    }
    t.pop();
    let n = [];
    for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        for (; n.length >= 2;) {
            let e = n.at(-1),
                t = n[n.length - 2];
            if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
            else break
        }
        n.push(r)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var A = {
        base: `inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase`,
        variants: {
            color: {
                primary: ``,
                secondary: ``,
                success: ``,
                info: ``,
                warning: ``,
                error: ``,
                neutral: ``
            },
            variant: {
                solid: ``,
                outline: ``,
                soft: ``,
                subtle: ``
            },
            size: {
                sm: `h-4 min-w-[16px] text-[10px]`,
                md: `h-5 min-w-[20px] text-[11px]`,
                lg: `h-6 min-w-[24px] text-[12px]`
            }
        },
        compoundVariants: [{
            color: `primary`,
            variant: `solid`,
            class: `text-inverted bg-primary`
        }, {
            color: `secondary`,
            variant: `solid`,
            class: `text-inverted bg-secondary`
        }, {
            color: `success`,
            variant: `solid`,
            class: `text-inverted bg-success`
        }, {
            color: `info`,
            variant: `solid`,
            class: `text-inverted bg-info`
        }, {
            color: `warning`,
            variant: `solid`,
            class: `text-inverted bg-warning`
        }, {
            color: `error`,
            variant: `solid`,
            class: `text-inverted bg-error`
        }, {
            color: `primary`,
            variant: `outline`,
            class: `ring ring-inset ring-primary/50 text-primary`
        }, {
            color: `secondary`,
            variant: `outline`,
            class: `ring ring-inset ring-secondary/50 text-secondary`
        }, {
            color: `success`,
            variant: `outline`,
            class: `ring ring-inset ring-success/50 text-success`
        }, {
            color: `info`,
            variant: `outline`,
            class: `ring ring-inset ring-info/50 text-info`
        }, {
            color: `warning`,
            variant: `outline`,
            class: `ring ring-inset ring-warning/50 text-warning`
        }, {
            color: `error`,
            variant: `outline`,
            class: `ring ring-inset ring-error/50 text-error`
        }, {
            color: `primary`,
            variant: `soft`,
            class: `text-primary bg-primary/10`
        }, {
            color: `secondary`,
            variant: `soft`,
            class: `text-secondary bg-secondary/10`
        }, {
            color: `success`,
            variant: `soft`,
            class: `text-success bg-success/10`
        }, {
            color: `info`,
            variant: `soft`,
            class: `text-info bg-info/10`
        }, {
            color: `warning`,
            variant: `soft`,
            class: `text-warning bg-warning/10`
        }, {
            color: `error`,
            variant: `soft`,
            class: `text-error bg-error/10`
        }, {
            color: `primary`,
            variant: `subtle`,
            class: `text-primary ring ring-inset ring-primary/25 bg-primary/10`
        }, {
            color: `secondary`,
            variant: `subtle`,
            class: `text-secondary ring ring-inset ring-secondary/25 bg-secondary/10`
        }, {
            color: `success`,
            variant: `subtle`,
            class: `text-success ring ring-inset ring-success/25 bg-success/10`
        }, {
            color: `info`,
            variant: `subtle`,
            class: `text-info ring ring-inset ring-info/25 bg-info/10`
        }, {
            color: `warning`,
            variant: `subtle`,
            class: `text-warning ring ring-inset ring-warning/25 bg-warning/10`
        }, {
            color: `error`,
            variant: `subtle`,
            class: `text-error ring ring-inset ring-error/25 bg-error/10`
        }, {
            color: `neutral`,
            variant: `solid`,
            class: `text-inverted bg-inverted`
        }, {
            color: `neutral`,
            variant: `outline`,
            class: `ring ring-inset ring-accented text-default bg-default`
        }, {
            color: `neutral`,
            variant: `soft`,
            class: `text-default bg-elevated`
        }, {
            color: `neutral`,
            variant: `subtle`,
            class: `ring ring-inset ring-accented text-default bg-elevated`
        }],
        defaultVariants: {
            variant: `outline`,
            color: `neutral`,
            size: `md`
        }
    },
    j = {
        __name: `Kbd`,
        props: {
            as: {
                type: null,
                required: !1,
                default: `kbd`
            },
            value: {
                type: null,
                required: !1
            },
            color: {
                type: null,
                required: !1
            },
            variant: {
                type: null,
                required: !1
            },
            size: {
                type: null,
                required: !1
            },
            class: {
                type: null, required: !1
            },
            ui: {
                type: Object,
                required: !1
            }
        },
        setup(t) {
            let r = v(`kbd`, t),
                {
                    getKbdKey: o
                } = S(),
                f = b(),
                p = a(() => y({
                    extend: A,
                    ...f.ui ? .kbd || {}
                }));
            return (t, a) => (i(), e(l(_), {
                as: l(r).as,
                class: s(p.value({
                    class: [l(r).ui ? .base, l(r).class],
                    color: l(r).color,
                    variant: l(r).variant,
                    size: l(r).size
                }))
            }, {
                default: n(() => [u(t.$slots, `default`, {}, () => [d(c(l(o)(l(r).value)), 1)])]),
                _: 3
            }, 8, [`as`, `class`]))
        }
    };
export {
    C as n, j as t
};