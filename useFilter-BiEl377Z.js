import {
    d as e
} from "./tv-Dcq2oBvx.js";
import {
    S as t
} from "./ComboboxVirtualizer-BJOTKEou.js";

function n() {
    let {
        contains: n,
        startsWith: r
    } = t({
        sensitivity: `base`
    });

    function i(e, t) {
        return n(e, t) ? n(t, e) ? 0 : r(e, t) ? 1 : 2 : null
    }

    function a(t, n, r) {
        if (typeof t != `object` || !t) return i(String(t), n);
        let a = null;
        for (let o of r) {
            let r = e(t, o);
            if (r == null) continue;
            let s = Array.isArray(r) ? r.map(String) : [String(r)];
            for (let e of s) {
                let t = i(e, n);
                if (t !== null && (a === null || t < a) && (a = t), a === 0) return 0
            }
        }
        return a
    }

    function o(e, t, n) {
        if (!t) return e;
        let r = [];
        for (let i of e) {
            let e = a(i, t, n);
            e !== null && r.push({
                item: i,
                score: e
            })
        }
        return r.sort((e, t) => e.score - t.score), r.map(({
            item: e
        }) => e)
    }

    function s(e, t, n) {
        return t ? e.map(e => {
            let r = [];
            for (let i of e) {
                if (i == null) continue;
                if (n.isStructural ? .(i)) {
                    r.push({
                        item: i,
                        score: -1
                    });
                    continue
                }
                let e = a(i, t, n.fields);
                e !== null && r.push({
                    item: i,
                    score: e
                })
            }
            return r.sort((e, t) => e.score - t.score), r.map(({
                item: e
            }) => e)
        }).filter(e => e.some(e => !n.isStructural ? .(e))) : e
    }
    return {
        score: i,
        scoreItem: a,
        filter: o,
        filterGroups: s
    }
}
export {
    n as t
};