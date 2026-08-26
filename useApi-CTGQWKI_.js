import {
    _r as e,
    c as t
} from "./dist-DAh4MArN.js";
import {
    n
} from "./dist-BnMQmsWl.js";
var r = t(),
    i = n({
        baseUrl: () => r.props ? r.props.api_url : `https://api.cloudconvert.com`,
        options: {
            beforeFetch: async function({
                options: t,
                url: n
            }) {
                t.credentials = t.credentials || `include`;
                let r = new Headers(t.headers),
                    i = (t.method ? ? `GET`).toString().toUpperCase();
                if ((t.credentials !== `omit` || i !== `GET`) && r.set(`X-XSRF-TOKEN`, c() || ``), t.headers = r, typeof document < `u` && !n.endsWith(`/stats/running`)) try {
                    e.start()
                } catch {}
                return {
                    options: t
                }
            },
            afterFetch: async function(t) {
                if (typeof document < `u` && e.isStarted()) try {
                    e.finish()
                } catch {}
                return t
            },
            onFetchError: async function(t) {
                if (typeof document < `u` && e.isStarted()) try {
                    e.finish()
                } catch {}
                return t
            }
        }
    });
async function a(e) {
    return (await o(e)) ? .message ? ? void 0
}
async function o(e) {
    try {
        let t = e ? .data ? .value;
        if (t && typeof t == `object` && `message` in t) return t;
        let n = e ? .response ? .value;
        if (n) {
            let e = n.clone();
            if ((e.headers.get(`content-type`) || ``).includes(`application/json`)) {
                let t = await e.json().catch(() => void 0);
                if (t && typeof t == `object` && `message` in t) return t
            }
            let t = await e.text().catch(() => ``);
            if (t) return {
                message: t,
                code: `NETWORK_ERROR`
            }
        }
    } catch {}
}

function s(e) {
    if (typeof document > `u`) return null;
    let t = document.cookie.match(RegExp(`(^|;\\s*)(` + e + `)=([^;]*)`));
    return t ? decodeURIComponent(t[3]) : null
}

function c() {
    return s(`XSRF-TOKEN`)
}
export {
    i,
    a as n,
    c as r,
    o as t
};