import {
    Yt as e,
    Z as t,
    a as n,
    nn as r,
    tt as i,
    ut as a
} from "./dist-DAh4MArN.js";
import {
    E as o
} from "./dist-BnMQmsWl.js";
var s = {
        class: `-mt-20 -mb-10`
    },
    c = a({
        __name: `ProductLayout`,
        setup(a) {
            let {
                y: c
            } = o(), l = t(() => ({
                header: {
                    root: `border-none` + (c.value < 100 ? ` bg-none shadow-none` : ``)
                },
                container: {
                    base: `[main>&]:max-w-full [main>&]:px-0!`
                }
            }));
            return n({
                theme: l
            }), (t, n) => (e(), i(`div`, s, [r(t.$slots, `default`)]))
        }
    });
export {
    c as t
};