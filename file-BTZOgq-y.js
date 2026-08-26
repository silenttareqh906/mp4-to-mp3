function e(e) {
    let t = e.lastIndexOf(`.`);
    return t === -1 ? `` : e.slice(t + 1).toLowerCase()
}

function t(t) {
    return {
        filename: t,
        ext: e(t)
    }
}

function n(e) {
    return { ...t(e.name),
        type: `upload`,
        size: e.size,
        localFile: e
    }
}

function r(e) {
    return {
        type: `url`,
        url: e
    }
}
var i = [`B`, `KB`, `MB`, `GB`, `TB`, `PB`];

function a(e) {
    if (e == null || !Number.isFinite(e) || e <= 0) return ``;
    let t = Math.min(Math.floor(Math.log(e) / Math.log(1024)), i.length - 1),
        n = e / 1024 ** t;
    return `${n>=10||t===0?Math.round(n):Math.round(n*10)/10} ${i[t]}`
}
export {
    r as a, n as i, a as n, t as r, e as t
};