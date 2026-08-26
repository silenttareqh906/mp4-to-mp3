import {
    $n as e
} from "./dist-DAh4MArN.js";
import {
    i as t
} from "./useApi-CTGQWKI_.js";
var n = {};

function r(e) {
    if (!e.access_token_expires_at) return !1;
    let t = new Date(e.access_token_expires_at).getTime();
    return !Number.isNaN(t) && t - Date.now() < 6e5
}

function i(e) {
    typeof document > `u` || (e === `googledrive` ? document.location.href = `/login/social/redirect/google` : document.location.href = `/connect/redirect/` + e)
}

function a() {
    let a = e(!1);
    async function o(e) {
        let o = n[e];
        if (o && !r(o)) return o;
        a.value = !0;
        try {
            let r = t(`/v2/users/me/connected_oauth_accounts?filter[provider]=${e}`, {
                method: `GET`
            }, {
                immediate: !1
            }).json();
            if (await r.execute(), r.response.value ? .status === 401) return i(e), null;
            let a = r.data.value ? .data ? .[0] ? ? null;
            return a ? (n[e] = a, a) : (i(e), null)
        } catch {
            return i(e), null
        } finally {
            a.value = !1
        }
    }

    function s(e) {
        e ? delete n[e] : Object.keys(n).forEach(e => delete n[e])
    }
    return {
        loading: a,
        getConnectedOauthAccount: o,
        clear: s
    }
}
export {
    a as t
};