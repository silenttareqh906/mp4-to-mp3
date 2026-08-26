import {
    $n as e,
    nn as t,
    ut as n
} from "./dist-DAh4MArN.js";
import {
    C as r
} from "./dist-BnMQmsWl.js";
import {
    r as i
} from "./file-BTZOgq-y.js";
import {
    t as a
} from "./useOauthAccount-De4_2Qw4.js";
var o = n({
    __name: `OneDrivePicker`,
    props: {
        cspNonce: {},
        clientId: {
            default: `5ed13b48-de9a-46d8-8cd0-a073437e3053`
        },
        endpointHint: {
            default: `api.onedrive.com`
        },
        redirectUrl: {
            default: typeof window < `u` ? window.location.protocol + `//` + window.location.hostname + `/connect/callback/onedrive` : ``
        }
    },
    emits: [`files`, `error`, `update:loading`],
    setup(n, {
        expose: o,
        emit: s
    }) {
        let c = n,
            l = s;
        o({
            show: m
        });
        let u = e(!1);

        function d(e) {
            u.value = e, l(`update:loading`, e)
        }
        let {
            getConnectedOauthAccount: f
        } = a(), {
            load: p
        } = r(`https://js.live.net/v7.2/OneDrive.js`, () => {}, {
            manual: !0,
            nonce: c.cspNonce
        });
        async function m() {
            d(!0);
            try {
                let e = await f(`onedrive`);
                if (!e) return;
                await p(), OneDrive.open({
                    clientId: c.clientId,
                    action: `query`,
                    multiSelect: !0,
                    advanced: {
                        queryParameters: `select=id,name,size,file,parentReference,@microsoft.graph.downloadUrl`,
                        redirectUri: c.redirectUrl,
                        endpointHint: c.endpointHint,
                        accessToken: e.access_token
                    },
                    success(e) {
                        h(e.value)
                    },
                    cancel() {
                        d(!1)
                    },
                    error(e) {
                        d(!1), l(`error`, e ? .toString ? .() ? ? `OneDrive error`)
                    }
                })
            } catch {
                l(`error`, `Failed to load OneDrive Chooser`), d(!1)
            }
        }

        function h(e) {
            let t = (Array.isArray(e) ? e : [e]).map(e => {
                let t = i(e.name);
                return t.type = `onedrive`, t.url = e[`@content.downloadUrl`], t.size = e.size, t
            });
            d(!1), l(`files`, t)
        }
        return (e, n) => t(e.$slots, `default`, {
            show: m,
            loading: u.value
        })
    }
});
export {
    o as
    default
};