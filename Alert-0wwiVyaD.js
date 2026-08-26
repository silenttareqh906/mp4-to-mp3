import {
    $ as e,
    Ft as t,
    On as n,
    Q as r,
    V as i,
    Yt as a,
    Z as o,
    et as s,
    fr as c,
    hr as l,
    lr as u,
    nn as d,
    st as f,
    tn as p,
    tt as m,
    vn as h
} from "./dist-DAh4MArN.js";
import {
    _ as g,
    y as _
} from "./Link-_LwZUouH.js";
import {
    a as v,
    i as y,
    t as b,
    x
} from "./tv-Dcq2oBvx.js";
import {
    n as S
} from "./useLocale-q2DNpnCy.js";
import {
    D as C
} from "./app-CYWi0gZD.js";
var w = {
        slots: {
            root: `relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5`,
            wrapper: `min-w-0 flex-1 flex flex-col`,
            title: `text-sm font-medium`,
            description: `text-sm opacity-90`,
            icon: `shrink-0 size-5`,
            avatar: `shrink-0`,
            avatarSize: `2xl`,
            actions: `flex flex-wrap gap-1.5 shrink-0`,
            close: `p-0`
        },
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
            orientation: {
                horizontal: {
                    root: `items-center`,
                    actions: `items-center`
                },
                vertical: {
                    root: `items-start`,
                    actions: `items-start mt-2.5`
                }
            },
            title: {
                true: {
                    description: `mt-1`
                }
            }
        },
        compoundVariants: [{
            color: `primary`,
            variant: `solid`,
            class: {
                root: `bg-primary text-inverted`
            }
        }, {
            color: `secondary`,
            variant: `solid`,
            class: {
                root: `bg-secondary text-inverted`
            }
        }, {
            color: `success`,
            variant: `solid`,
            class: {
                root: `bg-success text-inverted`
            }
        }, {
            color: `info`,
            variant: `solid`,
            class: {
                root: `bg-info text-inverted`
            }
        }, {
            color: `warning`,
            variant: `solid`,
            class: {
                root: `bg-warning text-inverted`
            }
        }, {
            color: `error`,
            variant: `solid`,
            class: {
                root: `bg-error text-inverted`
            }
        }, {
            color: `primary`,
            variant: `outline`,
            class: {
                root: `text-primary ring ring-inset ring-primary/25`
            }
        }, {
            color: `secondary`,
            variant: `outline`,
            class: {
                root: `text-secondary ring ring-inset ring-secondary/25`
            }
        }, {
            color: `success`,
            variant: `outline`,
            class: {
                root: `text-success ring ring-inset ring-success/25`
            }
        }, {
            color: `info`,
            variant: `outline`,
            class: {
                root: `text-info ring ring-inset ring-info/25`
            }
        }, {
            color: `warning`,
            variant: `outline`,
            class: {
                root: `text-warning ring ring-inset ring-warning/25`
            }
        }, {
            color: `error`,
            variant: `outline`,
            class: {
                root: `text-error ring ring-inset ring-error/25`
            }
        }, {
            color: `primary`,
            variant: `soft`,
            class: {
                root: `bg-primary/10 text-primary`
            }
        }, {
            color: `secondary`,
            variant: `soft`,
            class: {
                root: `bg-secondary/10 text-secondary`
            }
        }, {
            color: `success`,
            variant: `soft`,
            class: {
                root: `bg-success/10 text-success`
            }
        }, {
            color: `info`,
            variant: `soft`,
            class: {
                root: `bg-info/10 text-info`
            }
        }, {
            color: `warning`,
            variant: `soft`,
            class: {
                root: `bg-warning/10 text-warning`
            }
        }, {
            color: `error`,
            variant: `soft`,
            class: {
                root: `bg-error/10 text-error`
            }
        }, {
            color: `primary`,
            variant: `subtle`,
            class: {
                root: `bg-primary/10 text-primary ring ring-inset ring-primary/25`
            }
        }, {
            color: `secondary`,
            variant: `subtle`,
            class: {
                root: `bg-secondary/10 text-secondary ring ring-inset ring-secondary/25`
            }
        }, {
            color: `success`,
            variant: `subtle`,
            class: {
                root: `bg-success/10 text-success ring ring-inset ring-success/25`
            }
        }, {
            color: `info`,
            variant: `subtle`,
            class: {
                root: `bg-info/10 text-info ring ring-inset ring-info/25`
            }
        }, {
            color: `warning`,
            variant: `subtle`,
            class: {
                root: `bg-warning/10 text-warning ring ring-inset ring-warning/25`
            }
        }, {
            color: `error`,
            variant: `subtle`,
            class: {
                root: `bg-error/10 text-error ring ring-inset ring-error/25`
            }
        }, {
            color: `neutral`,
            variant: `solid`,
            class: {
                root: `text-inverted bg-inverted`
            }
        }, {
            color: `neutral`,
            variant: `outline`,
            class: {
                root: `text-highlighted bg-default ring ring-inset ring-default`
            }
        }, {
            color: `neutral`,
            variant: `soft`,
            class: {
                root: `text-highlighted bg-elevated/50`
            }
        }, {
            color: `neutral`,
            variant: `subtle`,
            class: {
                root: `text-highlighted bg-elevated/50 ring ring-inset ring-accented`
            }
        }],
        defaultVariants: {
            color: `primary`,
            variant: `solid`
        }
    },
    T = {
        __name: `Alert`,
        props: {
            as: {
                type: null,
                required: !1
            },
            title: {
                type: String,
                required: !1
            },
            description: {
                type: String,
                required: !1
            },
            icon: {
                type: null,
                required: !1
            },
            avatar: {
                type: Object,
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
            orientation: {
                type: null,
                required: !1,
                default: `vertical`
            },
            actions: {
                type: Array,
                required: !1
            },
            close: {
                type: [Boolean, Object],
                required: !1
            },
            closeIcon: {
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
        emits: [`update:open`],
        setup(T, {
            emit: E
        }) {
            let D = T,
                O = E,
                k = h(),
                A = y(`alert`, D),
                {
                    t: j
                } = S(),
                M = x(),
                N = o(() => b({
                    extend: w,
                    ...M.ui ? .alert || {}
                })({
                    color: A.color,
                    variant: A.variant,
                    orientation: A.orientation,
                    title: !!A.title || !!k.title
                }));
            return (o, h) => (a(), e(u(v), {
                as: u(A).as,
                "data-orientation": u(A).orientation,
                "data-slot": `root`,
                class: c(N.value.root({
                    class: [u(A).ui ? .root, u(A).class]
                }))
            }, {
                default: n(() => [d(o.$slots, `leading`, {
                    ui: N.value
                }, () => [u(A).avatar ? (a(), e(g, t({
                    key: 0,
                    size: u(A).ui ? .avatarSize || N.value.avatarSize()
                }, u(A).avatar, {
                    "data-slot": `avatar`,
                    class: N.value.avatar({
                        class: u(A).ui ? .avatar
                    })
                }), null, 16, [`size`, `class`])) : u(A).icon ? (a(), e(_, {
                    key: 1,
                    name: u(A).icon,
                    "data-slot": `icon`,
                    class: c(N.value.icon({
                        class: u(A).ui ? .icon
                    }))
                }, null, 8, [`name`, `class`])) : s(``, !0)]), r(`div`, {
                    "data-slot": `wrapper`,
                    class: c(N.value.wrapper({
                        class: u(A).ui ? .wrapper
                    }))
                }, [u(A).title || k.title ? (a(), m(`div`, {
                    key: 0,
                    "data-slot": `title`,
                    class: c(N.value.title({
                        class: u(A).ui ? .title
                    }))
                }, [d(o.$slots, `title`, {}, () => [f(l(u(A).title), 1)])], 2)) : s(``, !0), u(A).description || k.description ? (a(), m(`div`, {
                    key: 1,
                    "data-slot": `description`,
                    class: c(N.value.description({
                        class: u(A).ui ? .description
                    }))
                }, [d(o.$slots, `description`, {}, () => [f(l(u(A).description), 1)])], 2)) : s(``, !0), u(A).orientation === `vertical` && (u(A).actions ? .length || k.actions) ? (a(), m(`div`, {
                    key: 2,
                    "data-slot": `actions`,
                    class: c(N.value.actions({
                        class: u(A).ui ? .actions
                    }))
                }, [d(o.$slots, `actions`, {}, () => [(a(!0), m(i, null, p(u(A).actions, (n, r) => (a(), e(C, t({
                    key: r,
                    size: `xs`
                }, {
                    ref_for: !0
                }, n), null, 16))), 128))])], 2)) : s(``, !0)], 2), u(A).orientation === `horizontal` && (u(A).actions ? .length || k.actions) || u(A).close ? (a(), m(`div`, {
                    key: 0,
                    "data-slot": `actions`,
                    class: c(N.value.actions({
                        class: u(A).ui ? .actions,
                        orientation: `horizontal`
                    }))
                }, [u(A).orientation === `horizontal` && (u(A).actions ? .length || k.actions) ? d(o.$slots, `actions`, {
                    key: 0
                }, () => [(a(!0), m(i, null, p(u(A).actions, (n, r) => (a(), e(C, t({
                    key: r,
                    size: `xs`
                }, {
                    ref_for: !0
                }, n), null, 16))), 128))]) : s(``, !0), d(o.$slots, `close`, {
                    ui: N.value
                }, () => [u(A).close ? (a(), e(C, t({
                    key: 0,
                    icon: u(A).closeIcon || u(M).ui.icons.close,
                    color: `neutral`,
                    variant: `link`,
                    "aria-label": u(j)(`alert.close`)
                }, typeof u(A).close == `object` ? u(A).close : {}, {
                    "data-slot": `close`,
                    class: N.value.close({
                        class: u(A).ui ? .close
                    }),
                    onClick: h[0] || = e => O(`update:open`, !1)
                }), null, 16, [`icon`, `aria-label`, `class`])) : s(``, !0)])], 2)) : s(``, !0)]),
                _: 3
            }, 8, [`as`, `data-orientation`, `class`]))
        }
    };
export {
    T as t
};