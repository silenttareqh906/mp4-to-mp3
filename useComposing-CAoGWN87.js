import {
    $n as e,
    It as t
} from "./dist-DAh4MArN.js";

function n(n) {
    let r = e(!1);

    function i() {
        r.value = !0
    }

    function a(e) {
        t(() => {
            r.value = !1, n ? .(e)
        })
    }
    return {
        isComposing: r,
        handleCompositionStart: i,
        handleCompositionEnd: a
    }
}
export {
    n as t
};