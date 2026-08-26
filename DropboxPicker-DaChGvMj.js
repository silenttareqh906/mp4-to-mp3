import {
    $n as e,
    Ut as t,
    nn as n,
    ut as r
} from "./dist-DAh4MArN.js";
import {
    C as i
} from "./dist-BnMQmsWl.js";
import {
    r as a
} from "./file-BTZOgq-y.js";
import {
    t as o
} from "./useOauthAccount-De4_2Qw4.js";
var s = r({
    __name: `DropboxPicker`,
    props: {
        cspNonce: {},
        dropboxAppKey: {
            default: `xstxrra49fqo23f`
        },
        dropboxOpenFileId: {
            default: null
        }
    },
    emits: [`files`, `error`, `update:loading`],
    setup(r, {
        expose: s,
        emit: c
    }) {
        let l = r,
            u = c;
        s({
            show: h
        });
        let d = e(!1);

        function f(e) {
            d.value = e, u(`update:loading`, e)
        }
        let {
            getConnectedOauthAccount: p
        } = o(), {
            load: m
        } = i(`https://www.dropbox.com/static/api/2/dropins.js`, () => {}, {
            manual: !0,
            nonce: l.cspNonce,
            attrs: {
                id: `dropboxjs`,
                "data-app-key": l.dropboxAppKey
            }
        });
        async function h() {
            f(!0);
            try {
                let e = await p(`dropbox`);
                if (!e) return;
                if (!e.access_token_expires_at) {
                    document.location.href = `/connect/redirect/dropbox`;
                    return
                }
                await m(), Dropbox.choose({
                    success(e) {
                        g(e.flatMap(e => e.isDir ? (u(`error`, `Choosing a folder is not supported`), []) : [e.id]))
                    },
                    cancel() {},
                    linkType: `direct`,
                    multiselect: !0
                })
            } catch {
                u(`error`, `Failed to load Dropbox Chooser`)
            } finally {
                f(!1)
            }
        }
        async function g(e) {
            let t = Array.isArray(e) ? e : [e];
            if (t.length !== 0) {
                f(!0);
                try {
                    let e = await p(`dropbox`);
                    if (!e) return;
                    if (!e.access_token_expires_at) {
                        document.location.href = `/connect/redirect/dropbox`;
                        return
                    }
                    let n = (await Promise.all(t.map(async t => {
                        let n = await fetch(`https://api.dropboxapi.com/2/files/get_temporary_link`, {
                            method: `POST`,
                            credentials: `omit`,
                            headers: {
                                Authorization: `Bearer ` + e.access_token,
                                "Content-Type": `application/json`
                            },
                            body: JSON.stringify({
                                path: t
                            })
                        });
                        if (!n.ok) return u(`error`, `Failed to get file info from Dropbox`), null;
                        let r = await n.json(),
                            i = a(r.metadata.name);
                        i.type = `dropbox`, i.url = r.link, i.size = r.metadata.size;
                        let o = r.metadata.path_lower;
                        return i.path = o.slice(0, o.lastIndexOf(`/`)), i
                    }))).filter(e => !!e);
                    if (n.length === 0) return;
                    f(!1), u(`files`, n)
                } catch {
                    u(`error`, `Failed to get file info from Dropbox`)
                } finally {
                    f(!1)
                }
            }
        }
        return t(() => {
            l.dropboxOpenFileId && g(l.dropboxOpenFileId)
        }), (e, t) => n(e.$slots, `default`, {
            show: h,
            loading: d.value
        })
    }
});
export {
    s as
    default
};