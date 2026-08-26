import {
    $n as e
} from "./dist-DAh4MArN.js";
import {
    l as t
} from "./dist-BnMQmsWl.js";
import {
    S as n
} from "./tv-Dcq2oBvx.js";

function r(e, t = {}, n) {
    for (let i in e) {
        let a = e[i],
            o = n ? `${n}:${i}` : i;
        typeof a == `object` && a ? r(a, t, o) : typeof a == `function` && (t[o] = a)
    }
    return t
}
var i = (() => {
    if (console.createTask) return console.createTask;
    let e = {
        run: e => e()
    };
    return () => e
})();

function a(e, t, n, r) {
    for (let i = n; i < e.length; i += 1) try {
        let n = r ? r.run(() => e[i](...t)) : e[i](...t);
        if (n && typeof n.then == `function`) return Promise.resolve(n).then(() => a(e, t, i + 1, r))
    } catch (e) {
        return Promise.reject(e)
    }
}

function o(e, t, n) {
    if (e.length > 0) return a(e, t, 0, i(n))
}

function s(e, t, n) {
    if (e.length > 0) {
        let r = i(n);
        return Promise.all(e.map(e => r.run(() => e(...t))))
    }
}

function c(e, t) {
    for (let n of [...e]) n(t)
}
var l = class {
    _hooks;
    _before;
    _after;
    _deprecatedHooks;
    _deprecatedMessages;
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(e, t, n = {}) {
        if (!e || typeof t != `function`) return () => {};
        let r = e,
            i;
        for (; this._deprecatedHooks[e];) i = this._deprecatedHooks[e], e = i.to;
        if (i && !n.allowDeprecated) {
            let e = i.message;
            e || = `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : ``), this._deprecatedMessages || = new Set, this._deprecatedMessages.has(e) || (console.warn(e), this._deprecatedMessages.add(e))
        }
        if (!t.name) try {
            Object.defineProperty(t, "name", {
                get: () => `_` + e.replace(/\W+/g, `_`) + `_hook_cb`,
                configurable: !0
            })
        } catch {}
        return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
            t && = (this.removeHook(e, t), void 0)
        }
    }
    hookOnce(e, t) {
        let n, r = (...e) => (typeof n == `function` && n(), n = void 0, r = void 0, t(...e));
        return n = this.hook(e, r), n
    }
    removeHook(e, t) {
        let n = this._hooks[e];
        if (n) {
            let r = n.indexOf(t);
            r !== -1 && n.splice(r, 1), n.length === 0 && (this._hooks[e] = void 0)
        }
    }
    clearHook(e) {
        this._hooks[e] = void 0
    }
    deprecateHook(e, t) {
        this._deprecatedHooks[e] = typeof t == `string` ? {
            to: t
        } : t;
        let n = this._hooks[e] || [];
        this._hooks[e] = void 0;
        for (let t of n) this.hook(e, t)
    }
    deprecateHooks(e) {
        for (let t in e) this.deprecateHook(t, e[t])
    }
    addHooks(e) {
        let t = r(e),
            n = Object.keys(t).map(e => this.hook(e, t[e]));
        return () => {
            for (let e of n) e();
            n.length = 0
        }
    }
    removeHooks(e) {
        let t = r(e);
        for (let e in t) this.removeHook(e, t[e])
    }
    removeAllHooks() {
        this._hooks = {}
    }
    callHook(e, ...t) {
        return this.callHookWith(o, e, t)
    }
    callHookParallel(e, ...t) {
        return this.callHookWith(s, e, t)
    }
    callHookWith(e, t, n) {
        let r = this._before || this._after ? {
            name: t,
            args: n,
            context: {}
        } : void 0;
        this._before && c(this._before, r);
        let i = e(this._hooks[t] ? [...this._hooks[t]] : [], n, t);
        return i instanceof Promise ? i.finally(() => {
            this._after && r && c(this._after, r)
        }) : (this._after && r && c(this._after, r), i)
    }
    beforeEach(e) {
        return this._before = this._before || [], this._before.push(e), () => {
            if (this._before !== void 0) {
                let t = this._before.indexOf(e);
                t !== -1 && this._before.splice(t, 1)
            }
        }
    }
    afterEach(e) {
        return this._after = this._after || [], this._after.push(e), () => {
            if (this._after !== void 0) {
                let t = this._after.indexOf(e);
                t !== -1 && this._after.splice(t, 1)
            }
        }
    }
};

function u() {
    return new l
}
var d = () => {},
    f = () => {
        if (!n.colorMode) return {
            forced: !0
        };
        let {
            store: e,
            system: r
        } = t();
        return {
            get preference() {
                return e.value === `auto` ? `system` : e.value
            },
            set preference(t) {
                e.value = t === `system` ? `auto` : t
            },
            get value() {
                return e.value === `auto` ? r.value : e.value
            },
            forced: !1
        }
    },
    p = {},
    m = (t, n) => {
        if (p[t]) return p[t];
        let r = e(n());
        return p[t] = r, r
    },
    h = u();

function g() {
    return {
        isHydrating: !0,
        payload: {
            serverRendered: !1
        },
        hooks: h,
        hook: h.hook
    }
}

function _(e) {
    return {
        install(t) {
            t.runWithContext(() => e({
                vueApp: t
            }))
        }
    }
}
export {
    m as a, g as i, _ as n, u as o, f as r, d as t
};