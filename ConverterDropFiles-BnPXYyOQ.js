const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/GoogleDrivePicker-BHIe89KK.js", "assets/dist-DAh4MArN.js", "assets/dist-BnMQmsWl.js", "assets/dist-CVWdmVRe.js", "assets/useApi-CTGQWKI_.js", "assets/file-BTZOgq-y.js", "assets/useOauthAccount-De4_2Qw4.js", "assets/DropboxPicker-DaChGvMj.js", "assets/OneDrivePicker-D03pfNG0.js", "assets/ConverterAddFileByUrlModal-BMd7kpHX.js", "assets/Input-B42cV3Tc.js", "assets/Link-_LwZUouH.js", "assets/tv-Dcq2oBvx.js", "assets/solid-xsGUDKgI.js", "assets/app-CYWi0gZD.js", "assets/preload-helper-B6JZccWF.js", "assets/Presence-DsJ68V4l.js", "assets/rolldown-runtime-hePW80VL.js", "assets/VisuallyHidden-BsMHQhx3.js", "assets/base-BpR3vnOF.js", "assets/Kbd-CnNdwWIQ.js", "assets/useLocale-q2DNpnCy.js", "assets/getActiveElement-DWEoD8ZB.js", "assets/usePortal-C8FDDOJ7.js", "assets/useForwardExpose-BkJ4ptaU.js", "assets/isValueEqualOrExist-BR_dkgff.js", "assets/useArrowNavigation-LczgkNfS.js", "assets/FocusScope-BOzJiDWr.js", "assets/usePrimitiveElement-BsEpVwz7.js", "assets/Collection-DHXhcMsG.js", "assets/PopperArrow-DcCRQpSl.js", "assets/utils-DTWskMUQ.js", "assets/namespaced-uoTZDoAr.js", "assets/ComboboxVirtualizer-BJOTKEou.js", "assets/useComposing-CAoGWN87.js", "assets/useTypeahead-B8CAC5c7.js", "assets/useKbd-D5ogEQRo.js", "assets/VisuallyHiddenInput-zCLYnaDR.js", "assets/RovingFocusGroup-0p6cHiw3.js", "assets/useNonce-COzqMoKM.js", "assets/overlay-DR-nxSLa.js", "assets/useFilter-BiEl377Z.js", "assets/app-DSoh9UDA.css", "assets/FormField-Cdn8rKIg.js", "assets/Label-B7TztqMU.js", "assets/Alert-0wwiVyaD.js", "assets/useConfirmDialog-Cy4Engmf.js"]))) => i.map(i => d[i]);
import {
    $n as e,
    Cn as t,
    It as n,
    On as r,
    P as i,
    Pt as a,
    Q as o,
    Ut as s,
    Yt as c,
    Z as l,
    c as u,
    ct as d,
    gn as f,
    hr as p,
    lr as m,
    lt as h,
    st as g,
    tt as _,
    ut as v
} from "./dist-DAh4MArN.js";
import {
    t as y
} from "./preload-helper-B6JZccWF.js";
import {
    d as b
} from "./dist-BnMQmsWl.js";
import {
    t as x
} from "./Input-B42cV3Tc.js";
import {
    E as S,
    Pt as C,
    Tt as w,
    Xt as T,
    un as E
} from "./solid-xsGUDKgI.js";
import {
    D,
    T as O,
    _ as k
} from "./app-CYWi0gZD.js";
import {
    c as A,
    d as j,
    m as M
} from "./brands-De-Egc8p.js";
import {
    i as N
} from "./useApi-CTGQWKI_.js";
import {
    a as P,
    i as F
} from "./file-BTZOgq-y.js";
import {
    t as I
} from "./FieldGroup-BatvTA1c.js";

function L(e) {
    if (e ? .length) return e.find(e => !e.operation.startsWith(`import/`) && !e.operation.startsWith(`export/`) && !e.name ? .endsWith(`-archive`) && !e.name ? .endsWith(`-resize`)) ? .operation ? ? void 0
}
var R = e([]),
    z = e(!1),
    B = null,
    V = e(null);

function H() {
    return Math.random().toString(36).slice(2, 11)
}

function U(e) {
    return R.value.find(t => t.id === e || t.data ? .id === e)
}

function W(e) {
    return e === `merge` || e === `archive`
}

function G(e = {}) {
    let t = l(() => R.value.length > 0),
        r = l(() => R.value.some(e => !e.status || e.status === `error`)),
        i = l(() => R.value.some(e => e.status && ![`finished`, `error`].includes(e.status)));

    function a(e) {
        return {
            id: H(),
            status: null,
            files: null,
            data: null,
            ...e
        }
    }
    async function o(e) {
        return R.value.push(e), await n(), e
    }

    function s(e) {
        R.value.splice(e, 1)
    }

    function c(e) {
        let t = R.value.findIndex(t => t.id === e);
        t !== -1 && R.value.splice(t, 1)
    }

    function d(e, t) {
        let n = R.value.findIndex(t => t.id === e);
        n !== -1 && (R.value[n] = { ...R.value[n],
            ...t
        })
    }

    function f() {
        R.value = []
    }

    function p(t, n) {
        let r = R.value.find(e => !e.data);
        W(n) && r ? r.files = [...r.files ? ? [], t] : o(a({
            files: [t]
        })), t.type && e.outputStorage && e.outputStorages && e.outputStorages.value.includes(t.type) && (e.outputStorage.value = t.type)
    }

    function m(e, t) {
        e.forEach(e => p(e, t))
    }
    async function h() {
        if (z.value) return R.value;
        if (B) return B;
        let e = u().props.auth ? .user ? .id;
        if (!e) return z.value = !0, R.value;
        let t = new URLSearchParams({
            "filter[tag]": `webinterface`,
            include: `tasks`,
            per_page: `1000`
        });
        t.set(`filter[user_id]`, String(e));
        let n = N(`/v2/jobs?${t.toString()}`, {
            method: `GET`
        }, {
            immediate: !1
        }).json();
        return B = n.execute().then(async () => {
            if (n.error.value) return z.value = !1, R.value;
            let e = n.data.value ? .data ? ? [];
            for (let t of e) {
                let e = L(t.tasks),
                    n = U(t.id);
                if (n) {
                    n.data = t, n.status = t.status ? ? null, n.operation = e;
                    continue
                }
                await o(a({
                    id: t.id,
                    data: t,
                    status: t.status ? ? null,
                    operation: e
                }))
            }
            return z.value = !0, R.value
        }).catch(() => (z.value = !1, R.value)).finally(() => {
            B = null
        }), B
    }

    function g(e, t) {
        let n = t ? ? V.value;
        if (V.value = e, n === null || e === n) return;
        (e === `capture-website` || n === `capture-website`) && (R.value = R.value.filter(t => !!(t.status || e === `capture-website` && t.files ? .[0] ? .type === `url`)));
        let r = W(e),
            i = W(n);
        if (r && !i) {
            let e = null,
                t = [];
            for (let n of R.value) {
                if (n.status || !n.files) {
                    t.push(n);
                    continue
                }
                e === null ? (e = t.length, t.push(n)) : t[e].files = [...t[e].files ? ? [], ...n.files ? ? []]
            }
            R.value = t
        } else if (!r && i) {
            let e = [];
            for (let t of R.value) {
                if (t.status || !t.files) {
                    e.push(t);
                    continue
                }
                let [n, ...r] = t.files;
                e.push({ ...t,
                    files: n ? [n] : []
                });
                for (let t of r) e.push(a({
                    files: [t]
                }))
            }
            R.value = e
        }
    }

    function _(t, n) {
        function r(e) {
            let t = null;
            for (let r of n) {
                let n = r[e] ? ? null;
                if (n != null) {
                    if (t === null) t = n;
                    else if (t !== n) return null
                }
            }
            return t
        }
        if (!(!e.inputFormat && !e.outputFormat)) switch (t) {
            case `convert`:
                e.inputFormat && (e.inputFormat.value = r(`inputFormat`)), e.outputFormat && (e.outputFormat.value = r(`outputFormat`));
                break;
            case `optimize`:
            case `archive/extract`:
                e.inputFormat && (e.inputFormat.value = r(`inputFormat`));
                break;
            case `capture-website`:
            case `archive`:
                e.outputFormat && (e.outputFormat.value = r(`outputFormat`))
        }
    }
    return {
        jobs: R,
        hasJobs: t,
        hasUnstartedJobs: r,
        hasProcessingJobs: i,
        createJob: a,
        addJob: o,
        addFile: p,
        addFiles: m,
        removeJob: s,
        removeJobById: c,
        updateJob: d,
        clear: f,
        loadExistingJobs: h,
        applyOperationChange: g,
        syncCommonFormats: _,
        isMultipleFilesOperation: W
    }
}
var K = {
        class: `inline-flex`
    },
    q = v({
        __name: `ConverterAddFile`,
        props: {
            cspNonce: {},
            text: {
                default: `Select File`
            },
            color: {
                default: `neutral`
            },
            variant: {},
            size: {
                default: `md`
            },
            googleDriveState: {
                default: null
            },
            dropboxOpenFileId: {
                default: null
            }
        },
        emits: [`files`, `operation`, `error`, `file-size-exceeded`, `update:loading`],
        setup(t, {
            emit: n
        }) {
            let i = h(() => y(() =>
                    import (`./GoogleDrivePicker-BHIe89KK.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]))),
                a = h(() => y(() =>
                    import (`./DropboxPicker-DaChGvMj.js`), __vite__mapDeps([7, 1, 2, 3, 5, 6, 4]))),
                s = h(() => y(() =>
                    import (`./OneDrivePicker-D03pfNG0.js`), __vite__mapDeps([8, 1, 2, 3, 5, 6, 4]))),
                f = h(() => y(() =>
                    import (`./ConverterAddFileByUrlModal-BMd7kpHX.js`), __vite__mapDeps([9, 1, 10, 11, 3, 12, 2, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 4, 45, 46, 5]))),
                v = n,
                b = u(),
                x = l(() => !!b.props.auth ? .user ? .paying),
                E = l(() => x.value ? null : 1073741824),
                N = e(null),
                P = e(null),
                L = e(null),
                R = e(null),
                z = O();

            function B() {
                N.value ? .click()
            }

            function V(e) {
                let t = (Array.isArray(e) ? e : [e]).filter(e => E.value && e.size && e.size > E.value ? (v(`file-size-exceeded`), !1) : !0);
                t.length > 0 && v(`files`, t)
            }

            function H(e) {
                let t = e.target;
                V(Array.from(t.files ? ? []).map(F)), t.value = ``
            }
            async function U() {
                let e = await z.create(f, {
                    destroyOnClose: !0
                }).open();
                e && (V(e.file), e.operation && v(`operation`, e.operation))
            }
            let W = l(() => [
                [{
                    label: `From my computer`,
                    icon: C,
                    onSelect: B
                }, {
                    label: `By URL`,
                    icon: T,
                    onSelect: U
                }],
                [{
                    label: `From Google Drive`,
                    icon: j,
                    onSelect: () => P.value ? .show()
                }, {
                    label: `From Dropbox`,
                    icon: A,
                    onSelect: () => L.value ? .show()
                }, {
                    label: `From OneDrive`,
                    icon: M,
                    onSelect: () => R.value ? .show()
                }]
            ]);

            function G(e) {
                v(`update:loading`, e)
            }
            return (e, n) => {
                let l = D,
                    u = k,
                    f = I;
                return c(), _(`div`, K, [d(f, {
                    class: `w-full`
                }, {
                    default: r(() => [d(l, {
                        color: t.color,
                        size: t.size,
                        class: `w-full`,
                        variant: t.variant,
                        icon: m(w),
                        onClick: B
                    }, {
                        default: r(() => [g(p(t.text), 1)]),
                        _: 1
                    }, 8, [`color`, `size`, `variant`, `icon`]), d(u, {
                        items: W.value,
                        content: {
                            align: `end`
                        }
                    }, {
                        default: r(() => [d(l, {
                            color: t.color,
                            size: t.size,
                            variant: t.variant,
                            icon: m(S),
                            "aria-label": `Select file source`
                        }, null, 8, [`color`, `size`, `variant`, `icon`])]),
                        _: 1
                    }, 8, [`items`])]),
                    _: 1
                }), o(`input`, {
                    ref_key: `fileInput`,
                    ref: N,
                    type: `file`,
                    class: `hidden`,
                    multiple: ``,
                    onChange: H
                }, null, 544), d(m(i), {
                    ref_key: `googleDriveRef`,
                    ref: P,
                    "csp-nonce": t.cspNonce,
                    "google-drive-state": t.googleDriveState,
                    onFiles: V,
                    onError: n[0] || = e => v(`error`, e),
                    "onUpdate:loading": G
                }, {
                    default: r(() => [...n[3] || = [o(`span`, null, null, -1)]]),
                    _: 1
                }, 8, [`csp-nonce`, `google-drive-state`]), d(m(a), {
                    ref_key: `dropboxRef`,
                    ref: L,
                    "csp-nonce": t.cspNonce,
                    "dropbox-open-file-id": t.dropboxOpenFileId ? ? void 0,
                    onFiles: V,
                    onError: n[1] || = e => v(`error`, e),
                    "onUpdate:loading": G
                }, {
                    default: r(() => [...n[4] || = [o(`span`, null, null, -1)]]),
                    _: 1
                }, 8, [`csp-nonce`, `dropbox-open-file-id`]), d(m(s), {
                    ref_key: `oneDriveRef`,
                    ref: R,
                    "csp-nonce": t.cspNonce,
                    onFiles: V,
                    onError: n[2] || = e => v(`error`, e),
                    "onUpdate:loading": G
                }, {
                    default: r(() => [...n[5] || = [o(`span`, null, null, -1)]]),
                    _: 1
                }, 8, [`csp-nonce`])])
            }
        }
    }),
    J = {
        class: `flex w-full gap-2`
    },
    Y = v({
        __name: `ConverterAddUrl`,
        props: {
            text: {
                default: `Add URL`
            },
            placeholder: {
                default: `https://...`
            },
            variant: {},
            color: {
                default: `neutral`
            },
            size: {
                default: `md`
            }
        },
        emits: [`file`],
        setup(t, {
            emit: n
        }) {
            let a = n,
                o = e(``);

            function s() {
                o.value.trim().length !== 0 && (a(`file`, P(o.value.trim())), o.value = ``)
            }
            return (e, n) => {
                let a = x,
                    l = D,
                    u = I;
                return c(), _(`div`, J, [d(u, {
                    class: `w-full`
                }, {
                    default: r(() => [d(a, {
                        modelValue: o.value,
                        "onUpdate:modelValue": n[0] || = e => o.value = e,
                        type: `url`,
                        size: t.size,
                        placeholder: t.placeholder,
                        class: `flex-1`,
                        onKeyup: i(s, [`enter`])
                    }, null, 8, [`modelValue`, `size`, `placeholder`]), d(l, {
                        color: t.color,
                        size: t.size,
                        variant: t.variant,
                        icon: m(E),
                        onClick: s
                    }, {
                        default: r(() => [g(p(t.text), 1)]),
                        _: 1
                    }, 8, [`color`, `size`, `variant`, `icon`])]),
                    _: 1
                })])
            }
        }
    }),
    X = {
        hidden: ``
    },
    Z = v({
        __name: `ConverterDropFiles`,
        props: {
            dragging: {
                type: Boolean,
                default: !1
            },
            draggingModifiers: {}
        },
        emits: a([`files`], [`update:dragging`]),
        setup(n, {
            emit: r
        }) {
            let i = r,
                a = f(n, `dragging`),
                o = e(null);
            s(() => {
                o.value = document.body
            });
            let {
                isOverDropZone: l
            } = b(o, {
                onDrop(e) {
                    !e || e.length === 0 || i(`files`, e.map(e => F(e)))
                }
            });
            return t(l, e => {
                a.value = e
            }), (e, t) => (c(), _(`span`, X))
        }
    });
export {
    G as i, Y as n, q as r, Z as t
};