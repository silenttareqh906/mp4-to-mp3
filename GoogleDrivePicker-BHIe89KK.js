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
    i as a
} from "./useApi-CTGQWKI_.js";
import {
    r as o
} from "./file-BTZOgq-y.js";
import {
    t as s
} from "./useOauthAccount-De4_2Qw4.js";
var c = r({
    __name: `GoogleDrivePicker`,
    props: {
        cspNonce: {},
        googleAppId: {
            default: `199590644126`
        },
        googleDriveState: {
            default: null
        }
    },
    emits: [`files`, `error`, `update:loading`],
    setup(r, {
        expose: c,
        emit: l
    }) {
        let u = r,
            d = l;
        c({
            show: g
        });
        let f = e(!1);

        function p(e) {
            f.value = e, d(`update:loading`, e)
        }
        let {
            getConnectedOauthAccount: m
        } = s(), {
            load: h
        } = i(`https://apis.google.com/js/api.js`, () => {}, {
            manual: !0,
            nonce: u.cspNonce
        });
        async function g() {
            p(!0);
            try {
                let e = await m(`googledrive`);
                if (!e) return;
                await h(), gapi.load(`picker`, {
                    callback() {
                        let t = new google.picker.PickerBuilder;
                        t.enableFeature(google.picker.Feature.MULTISELECT_ENABLED), t.enableFeature(google.picker.Feature.NAV_HIDDEN), t.enableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES), t.setAppId(u.googleAppId), t.setOAuthToken(e.access_token);
                        let n = new google.picker.DocsView(google.picker.ViewId.DOCS);
                        n.setMode(google.picker.DocsViewMode.LIST), n.setIncludeFolders(!0), n.setOwnedByMe(!0), t.addView(n), t.setCallback(e => {
                            e.action === google.picker.Action.PICKED && _((e[google.picker.Response.DOCUMENTS] ? ? []).map(e => e.id))
                        }).build().setVisible(!0)
                    }
                })
            } catch {
                d(`error`, `Failed to load Google Drive Picker`)
            } finally {
                p(!1)
            }
        }
        async function _(e) {
            let t = Array.isArray(e) ? e : [e];
            if (t.length !== 0) {
                p(!0);
                try {
                    let e = await m(`googledrive`);
                    if (!e) return;
                    let n = (await Promise.all(t.map(async t => {
                        let n = a(`/v2/users/me/connected_oauth_accounts/${e.id}/google_drive_file/${t}`, {
                            method: `GET`
                        }, {
                            immediate: !1
                        }).json();
                        await n.execute();
                        let r = n.data.value;
                        if (!r) return d(`error`, `Failed to get file info from Google Drive`), null;
                        let i, s;
                        if (r.downloadUrl) i = r.title || r.originalFilename, r.fileExtension && i && !i.endsWith(`.` + r.fileExtension) && (i = i + `.` + r.fileExtension), s = r.downloadUrl;
                        else if (r.exportLinks) {
                            for (let [e, t] of [
                                    [`application/vnd.oasis.opendocument.text`, `odt`],
                                    [`application/x-vnd.oasis.opendocument.spreadsheet`, `ods`],
                                    [`application/vnd.openxmlformats-officedocument.presentationml.presentation`, `ppt`],
                                    [`image/svg+xml`, `svg`],
                                    [`image/png`, `png`],
                                    [`application/pdf`, `pdf`]
                                ])
                                if (r.exportLinks[e]) {
                                    s = r.exportLinks[e], i = `${r.title}.${t}`;
                                    break
                                }
                        }
                        if (!s || !i) return d(`error`, `Google Drive error: This file cannot be downloaded`), null;
                        let c = o(i);
                        return c.type = `googledrive`, c.url = s, c.headers = {
                            Authorization: `Bearer ` + e.access_token
                        }, r.fileSize && (c.size = parseInt(r.fileSize, 10)), r.parents && (c.parents = r.parents.map(e => e.id)), c
                    }))).filter(e => !!e);
                    if (n.length === 0) return;
                    p(!1), d(`files`, n)
                } catch {
                    d(`error`, `Failed to get file info from Google Drive`)
                } finally {
                    p(!1)
                }
            }
        }
        return t(() => {
            _([...u.googleDriveState ? .exportIds ? ? [], ...u.googleDriveState ? .ids ? ? []])
        }), (e, t) => n(e.$slots, `default`, {
            show: g,
            loading: f.value
        })
    }
});
export {
    c as
    default
};