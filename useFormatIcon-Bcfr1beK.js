import {
    Z as e,
    lr as t
} from "./dist-DAh4MArN.js";
import {
    At as n,
    Mt as r,
    Qn as i,
    St as a,
    Un as o,
    Z as s,
    dn as c,
    ft as l,
    jn as u,
    lt as d,
    p as f,
    wt as p,
    yt as m
} from "./solid-xsGUDKgI.js";
import {
    n as h
} from "./FormatSelectorMenu-z-XF99CY.js";
var g = {
        archive: r,
        audio: l,
        cad: s,
        document: a,
        ebook: f,
        font: o,
        image: m,
        presentation: c,
        spreadsheet: u,
        vector: i,
        video: n,
        other: d
    },
    _ = {
        pdf: p
    };

function v(e) {
    return e ? g[e.toLowerCase()] ? ? d : d
}

function y(n) {
    let {
        groupForFormat: r,
        loadFormatGroups: i
    } = h();
    return i(), e(() => {
        let e = t(n);
        return (e ? _[e.toLowerCase()] : void 0) || v(r(e))
    })
}
export {
    v as n, y as r, _ as t
};