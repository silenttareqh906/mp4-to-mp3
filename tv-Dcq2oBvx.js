import {
    Ft as e,
    R as t,
    V as n,
    X as r,
    Z as i,
    Zn as a,
    Zt as o,
    c as s,
    kt as c,
    ut as l,
    vt as u,
    xt as d
} from "./dist-DAh4MArN.js";
var f = {
        ui: {
            colors: {
                primary: `dark-red`,
                secondary: `zinc`,
                success: `green`,
                info: `blue`,
                warning: `yellow`,
                error: `red`,
                neutral: `zinc`
            },
            icons: {
                arrowDown: {
                    prefix: `fas`,
                    iconName: `arrow-down`,
                    icon: [384, 512, [8595], `f063`, `M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]
                },
                arrowLeft: {
                    prefix: `fas`,
                    iconName: `arrow-left`,
                    icon: [512, 512, [8592], `f060`, `M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z`]
                },
                arrowRight: {
                    prefix: `fas`,
                    iconName: `arrow-right`,
                    icon: [512, 512, [8594], `f061`, `M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z`]
                },
                arrowUp: {
                    prefix: `fas`,
                    iconName: `arrow-up`,
                    icon: [384, 512, [8593], `f062`, `M214.6 17.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 117.3 160 488c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z`]
                },
                caution: {
                    prefix: `fas`,
                    iconName: `circle-exclamation`,
                    icon: [512, 512, [`exclamation-circle`], `f06a`, `M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`]
                },
                check: {
                    prefix: `fas`,
                    iconName: `check`,
                    icon: [448, 512, [10003, 10004], `f00c`, `M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]
                },
                chevronDoubleLeft: {
                    prefix: `fas`,
                    iconName: `chevrons-left`,
                    icon: [448, 512, [`chevron-double-left`], `f323`, `M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192zm384-192l-192 192c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256 438.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z`]
                },
                chevronDoubleRight: {
                    prefix: `fas`,
                    iconName: `chevrons-right`,
                    icon: [448, 512, [`chevron-double-right`], `f324`, `M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 201.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192zm-384 192l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 9.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z`]
                },
                chevronDown: {
                    prefix: `fas`,
                    iconName: `chevron-down`,
                    icon: [448, 512, [], `f078`, `M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`]
                },
                chevronLeft: {
                    prefix: `fas`,
                    iconName: `chevron-left`,
                    icon: [320, 512, [9001], `f053`, `M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`]
                },
                chevronRight: {
                    prefix: `fas`,
                    iconName: `chevron-right`,
                    icon: [320, 512, [9002], `f054`, `M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`]
                },
                chevronUp: {
                    prefix: `fas`,
                    iconName: `chevron-up`,
                    icon: [448, 512, [], `f077`, `M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z`]
                },
                close: {
                    prefix: `fas`,
                    iconName: `xmark`,
                    icon: [384, 512, [215, 10005, 10006, 10060, 128473, `close`, `multiply`, `remove`, `times`], `f00d`, `M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]
                },
                copy: {
                    prefix: `fas`,
                    iconName: `copy`,
                    icon: [448, 512, [], `f0c5`, `M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`]
                },
                copyCheck: {
                    prefix: `fas`,
                    iconName: `check`,
                    icon: [448, 512, [10003, 10004], `f00c`, `M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]
                },
                dark: {
                    prefix: `fas`,
                    iconName: `moon`,
                    icon: [512, 512, [9214, 127769], `f186`, `M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z`]
                },
                drag: `i-lucide-grip-vertical`,
                ellipsis: {
                    prefix: `fas`,
                    iconName: `ellipsis`,
                    icon: [448, 512, [`ellipsis-h`], `f141`, `M0 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm168 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm224-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z`]
                },
                error: {
                    prefix: `fas`,
                    iconName: `circle-x`,
                    icon: [512, 512, [], `e12e`, `M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM202.6 152.8l53.4 65.3 53.4-65.3c8.4-10.3 23.5-11.8 33.8-3.4s11.8 23.5 3.4 33.8L287 256 346.6 328.8c8.4 10.3 6.9 25.4-3.4 33.8s-25.4 6.9-33.8-3.4l-53.4-65.3-53.4 65.3c-8.4 10.3-23.5 11.8-33.8 3.4s-11.8-23.5-3.4-33.8L225 256 165.4 183.2c-8.4-10.3-6.9-25.4 3.4-33.8s25.4-6.9 33.8 3.4z`]
                },
                external: {
                    prefix: `fas`,
                    iconName: `arrow-up-right-from-square`,
                    icon: [512, 512, [`external-link`], `f08e`, `M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z`]
                },
                eye: {
                    prefix: `fas`,
                    iconName: `eye`,
                    icon: [576, 512, [128065], `f06e`, `M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`]
                },
                eyeOff: {
                    prefix: `fas`,
                    iconName: `eye-slash`,
                    icon: [576, 512, [], `f070`, `M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z`]
                },
                file: {
                    prefix: `fas`,
                    iconName: `file`,
                    icon: [384, 512, [61462, 128196, 128459], `f15b`, `M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z`]
                },
                folder: {
                    prefix: `fas`,
                    iconName: `folder`,
                    icon: [512, 512, [61716, 128193, 128447, `folder-blank`], `f07b`, `M64 448l384 0c35.3 0 64-28.7 64-64l0-240c0-35.3-28.7-64-64-64L298.7 80c-6.9 0-13.7-2.2-19.2-6.4L241.1 44.8C230 36.5 216.5 32 202.7 32L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64z`]
                },
                folderOpen: {
                    prefix: `fas`,
                    iconName: `folder-open`,
                    icon: [576, 512, [61717, 128194, 128449], `f07c`, `M56 225.6L32.4 296.2 32.4 96c0-35.3 28.7-64 64-64l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4l117.3 0c35.3 0 64 28.7 64 64l0 16-365.4 0c-41.3 0-78 26.4-91.1 65.6zM477.8 448L99 448c-32.8 0-55.9-32.1-45.5-63.2l48-144C108 221.2 126.4 208 147 208l378.8 0c32.8 0 55.9 32.1 45.5 63.2l-48 144c-6.5 19.6-24.9 32.8-45.5 32.8z`]
                },
                hash: {
                    prefix: `fas`,
                    iconName: `hashtag`,
                    icon: [512, 512, [62098], `23`, `M214.7 .7c17.3 3.7 28.3 20.7 24.6 38l-19.1 89.3 126.5 0 22-102.7C372.4 8 389.4-3 406.7 .7s28.3 20.7 24.6 38L412.2 128 480 128c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-27.4 128 67.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l19.1-89.3-126.5 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38L99.8 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 27.4-128-67.8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 22-102.7C180.4 8 197.4-3 214.7 .7zM206.4 192l-27.4 128 126.5 0 27.4-128-126.5 0z`]
                },
                info: {
                    prefix: `fas`,
                    iconName: `circle-info`,
                    icon: [512, 512, [`info-circle`], `f05a`, `M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`]
                },
                light: {
                    prefix: `fas`,
                    iconName: `sun-bright`,
                    icon: [512, 512, [`sun-alt`], `e28f`, `M232 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 56zm0-408c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 56zM75 75c-9.4 9.4-9.4 24.6 0 33.9l39.6 39.6c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L108.9 75c-9.4-9.4-24.6-9.4-33.9 0zM363.5 363.5c-9.4 9.4-9.4 24.6 0 33.9L403.1 437c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0zM0 256c0 13.3 10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0c-13.3 0-24 10.7-24 24zm408 0c0 13.3 10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0c-13.3 0-24 10.7-24 24zM75 437c9.4 9.4 24.6 9.4 33.9 0l39.6-39.6c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L75 403.1c-9.4 9.4-9.4 24.6 0 33.9zM363.5 148.5c9.4 9.4 24.6 9.4 33.9 0L437 108.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39.6 39.6c-9.4 9.4-9.4 24.6 0 33.9zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224z`]
                },
                loading: {
                    prefix: `fas`,
                    iconName: `circle-notch`,
                    icon: [512, 512, [], `f1ce`, `M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8-79.3 23.6-137.1 97.1-137.1 184.1 0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256 512 397.4 397.4 512 256 512S0 397.4 0 256c0-116 77.1-213.9 182.9-245.4 16.9-5 34.8 4.6 39.8 21.5z`]
                },
                menu: {
                    prefix: `fas`,
                    iconName: `bars`,
                    icon: [448, 512, [`navicon`], `f0c9`, `M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`]
                },
                minus: {
                    prefix: `fas`,
                    iconName: `minus`,
                    icon: [448, 512, [8211, 8722, 10134, `subtract`], `f068`, `M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z`]
                },
                panelClose: {
                    prefix: `fas`,
                    iconName: `left-to-line`,
                    icon: [512, 512, [`arrow-alt-to-left`], `f34b`, `M32 448c-17.7 0-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64S64 78.3 64 96l0 320c0 17.7-14.3 32-32 32zM135 273c-9.4-9.4-9.4-24.6 0-33.9L279 95c6.9-6.9 17.2-8.9 26.2-5.2S320 102.3 320 112l0 80 144 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-144 0 0 80c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2L135 273z`]
                },
                panelOpen: {
                    prefix: `fas`,
                    iconName: `right-to-line`,
                    icon: [512, 512, [`arrow-alt-to-right`], `f34c`, `M480 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32zM377 239c9.4 9.4 9.4 24.6 0 33.9L233 417c-6.9 6.9-17.2 8.9-26.2 5.2S192 409.7 192 400l0-80-144 0c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48l144 0 0-80c0-9.7 5.8-18.5 14.8-22.2S226.1 88.2 233 95L377 239z`]
                },
                plus: {
                    prefix: `fas`,
                    iconName: `plus`,
                    icon: [448, 512, [10133, 61543, `add`], `2b`, `M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`]
                },
                reload: {
                    prefix: `fas`,
                    iconName: `rotate`,
                    icon: [512, 512, [128260, `sync-alt`], `f2f1`, `M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z`]
                },
                search: {
                    prefix: `fas`,
                    iconName: `magnifying-glass`,
                    icon: [512, 512, [128269, `search`], `f002`, `M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]
                },
                stop: {
                    prefix: `fas`,
                    iconName: `stop`,
                    icon: [448, 512, [9209], `f04d`, `M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z`]
                },
                star: `i-lucide-star`,
                success: {
                    prefix: `fas`,
                    iconName: `circle-check`,
                    icon: [512, 512, [61533, `check-circle`], `f058`, `M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]
                },
                system: {
                    prefix: `fas`,
                    iconName: `desktop`,
                    icon: [512, 512, [61704, 128421, `desktop-alt`], `f390`, `M64 32C28.7 32 0 60.7 0 96L0 352c0 35.3 28.7 64 64 64l144 0-16 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0-16-48 144 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 32zM96 96l320 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32L96 320c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32z`]
                },
                tip: {
                    prefix: `fas`,
                    iconName: `lightbulb`,
                    icon: [384, 512, [128161], `f0eb`, `M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z`]
                },
                upload: {
                    prefix: `fas`,
                    iconName: `upload`,
                    icon: [448, 512, [], `f093`, `M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z`]
                },
                warning: {
                    prefix: `fas`,
                    iconName: `triangle-exclamation`,
                    icon: [512, 512, [9888, `exclamation-triangle`, `warning`], `f071`, `M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`]
                }
            },
            tv: {
                twMergeConfig: {}
            },
            header: {
                slots: {
                    root: `bg-linear-45 from-neutral-800/90 to-neutral-900/90 bg-neutral-900/5`,
                    header: `bg-neutral-900/90`,
                    title: `dark`,
                    left: `dark`,
                    right: `[&>button]:text-neutral-200 [&>button]:hover:text-default [&>svg.hidden]:hidden!`,
                    center: `dark`,
                    toggle: `dark`
                }
            },
            footer: {
                slots: {
                    left: `flex-col lg:items-start mt-8`,
                    center: `mt-8`,
                    container: `lg:items-start lg:py-8`,
                    root: `bg-accented/50 dark:bg-elevated/50`
                }
            },
            pageAside: {
                slots: {
                    root: `py-4`
                }
            },
            footerColumns: {
                slots: {
                    root: `xl:grid-cols-2`,
                    center: `grid grid-cols-2 grid-flow-row md:grid-flow-col`,
                    list: `mt-4`,
                    link: `text-primary! font-medium hover:underline`
                }
            },
            card: {
                slots: {
                    root: `rounded-none`
                }
            },
            pageCard: {
                slots: {
                    root: `rounded-none`
                }
            },
            table: {
                slots: {
                    root: `shrink-0 border-default border-l border-r rounded-none`,
                    base: `table-fixed border-separate border-spacing-0`,
                    thead: `[&>tr]:bg-elevated/50 [&>tr]:after:content-none`,
                    tbody: ``,
                    separator: `hidden`,
                    th: `border-y border-default`,
                    td: `border-b border-default bg-elevated/20 text-default whitespace-normal`,
                    empty: `border-b border-default`
                }
            },
            alert: {
                slots: {
                    root: `rounded-none`
                },
                compoundVariants: [{
                    color: `secondary`,
                    variant: `subtle`,
                    class: {
                        root: `dark:text-default`
                    }
                }]
            },
            input: {
                compoundVariants: [{
                    fixed: !1,
                    size: `md`,
                    class: `text-sm`
                }, {
                    fixed: !1,
                    size: `lg`,
                    class: `text-sm`
                }]
            },
            textarea: {
                compoundVariants: [{
                    fixed: !1,
                    size: `md`,
                    class: `text-sm`
                }, {
                    fixed: !1,
                    size: `lg`,
                    class: `text-sm`
                }]
            },
            button: {
                compoundVariants: [{
                    color: `primary`,
                    variant: `solid`,
                    class: `dark:text-default`
                }, {
                    color: `secondary`,
                    variant: `solid`,
                    class: `dark:text-default`
                }],
                variants: {
                    size: {
                        xs: {
                            leadingIcon: `size-3`,
                            trailingIcon: `size-3`
                        },
                        md: {
                            leadingIcon: `size-4`,
                            trailingIcon: `size-4`
                        },
                        lg: {
                            leadingIcon: `size-4`,
                            trailingIcon: `size-4`
                        },
                        xl: {
                            leadingIcon: `size-5`,
                            trailingIcon: `size-5`
                        }
                    }
                }
            },
            selectMenu: {
                variants: {
                    size: {
                        md: {
                            leadingIcon: `size-4`,
                            trailingIcon: `size-4`
                        }
                    }
                }
            },
            dropdownMenu: {
                slots: {
                    item: `items-center`
                },
                variants: {
                    size: {
                        md: {
                            itemLeadingIcon: `size-4`,
                            itemTrailingIcon: `size-4`
                        }
                    }
                }
            },
            navigationMenu: {
                slots: {
                    item: `data-[state=open]:mb-1.5`,
                    link: `data-[state=open]:text-highlighted`,
                    label: `text-sm font-medium`,
                    linkLeadingIcon: `size-4 mr-1`,
                    linkTrailingIcon: `size-4`,
                    childLinkIcon: `size-4`,
                    linkLabelExternalIcon: `ml-1`
                }
            },
            modal: {
                slots: {
                    content: `rounded-none! max-w-3xl! bg-muted dark:bg-default`,
                    header: `bg-elevated/20`,
                    footer: `bg-elevated/20`,
                    close: `text-primary`
                },
                variants: {
                    overlay: {
                        true: {
                            overlay: `bg-black/50`
                        }
                    }
                }
            },
            fileUpload: {
                slots: {
                    fileLeadingAvatar: `[&>svg]:size-5 border border-default`,
                    avatar: `[&>svg]:size-5`
                }
            },
            prose: {
                codeGroup: {
                    slots: {
                        list: `rounded-t-none`
                    }
                },
                pre: {
                    slots: {
                        header: `rounded-t-none`,
                        base: `rounded-none`
                    }
                },
                collapsible: {
                    slots: {
                        root: `border-muted border-1 rounded-3xl p-3 my-3`
                    }
                },
                h2: {
                    slots: {
                        link: `flex items-center gap-2`
                    }
                },
                field: {
                    slots: {
                        root: `my-3`,
                        description: `text-default`
                    }
                },
                fieldGroup: {
                    base: `*:not-last:pb-3`
                },
                card: {
                    slots: {
                        icon: `size-6!`
                    }
                },
                cardGroup: {},
                codeIcon: {
                    php: `code-php`,
                    nodejs: `code-nodejs`,
                    js: `code-nodejs`,
                    javascript: `code-nodejs`,
                    python: `code-python`,
                    ruby: `code-ruby`,
                    java: `code-java`,
                    csharp: `code-dotnet`,
                    ".net": `code-dotnet`,
                    bash: `code-bash`,
                    curl: `code-curl`,
                    cli: `code-cli`,
                    json: `code-json`,
                    "raw request": `code-json`,
                    html: `code-html`,
                    "html form": `code-html`
                }
            },
            checkbox: {
                slots: {
                    icon: `size-3/4`
                }
            }
        },
        colorMode: !0,
        icon: {}
    },
    p = a(f),
    m = () => p;

function h(e) {
    if (typeof e != `object` || !e) return !1;
    let t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === `[object Module]` : !0
}

function g(e, t, n = `.`, r) {
    if (!h(t)) return g(e, {}, n, r);
    let i = { ...t
    };
    for (let t of Object.keys(e)) {
        if (t === `__proto__` || t === `constructor`) continue;
        let a = e[t];
        a != null && (r && r(i, t, a, n) || (i[t] = Array.isArray(a) && Array.isArray(i[t]) ? [...a, ...i[t]] : h(a) && h(i[t]) ? g(a, i[t], (n ? `${n}.` : ``) + t.toString(), r) : a))
    }
    return i
}

function _(e) {
    return (...t) => t.reduce((t, n) => g(t, n, ``, e), {})
}
var v = _();

function y(e) {
    return typeof e == `string` ? `'${e}'` : new b().serialize(e)
}
var b = function() {
    class e {#
        e = new Map;
        compare(e, t) {
            let n = typeof e,
                r = typeof t;
            return n === `string` && r === `string` ? e.localeCompare(t) : n === `number` && r === `number` ? e - t : String.prototype.localeCompare.call(this.serialize(e, !0), this.serialize(t, !0))
        }
        serialize(e, t) {
            if (e === null) return `null`;
            switch (typeof e) {
                case `string`:
                    return t ? e : `'${e}'`;
                case `bigint`:
                    return `${e}n`;
                case `object`:
                    return this.$object(e);
                case `function`:
                    return this.$function(e)
            }
            return String(e)
        }
        serializeObject(e) {
            let t = Object.prototype.toString.call(e);
            if (t !== `[object Object]`) return this.serializeBuiltInType(t.length < 10 ? `unknown:${t}` : t.slice(8, -1), e);
            let n = e.constructor,
                r = n === Object || n === void 0 ? `` : n.name;
            if (r !== `` && globalThis[r] === n) return this.serializeBuiltInType(r, e);
            if (typeof e.toJSON == `function`) {
                let t = e.toJSON();
                return r + (typeof t == `object` && t ? this.$object(t) : `(${this.serialize(t)})`)
            }
            return this.serializeObjectEntries(r, Object.entries(e))
        }
        serializeBuiltInType(e, t) {
            let n = this[`$` + e];
            if (n) return n.call(this, t);
            if (typeof t ? .entries == `function`) return this.serializeObjectEntries(e, t.entries());
            throw Error(`Cannot serialize ${e}`)
        }
        serializeObjectEntries(e, t) {
            let n = Array.from(t).sort((e, t) => this.compare(e[0], t[0])),
                r = `${e}{`;
            for (let e = 0; e < n.length; e++) {
                let [t, i] = n[e];
                r += `${this.serialize(t,!0)}:${this.serialize(i)}`, e < n.length - 1 && (r += `,`)
            }
            return r + `}`
        }
        $object(e) {
            let t = this.#e.get(e);
            return t === void 0 && (this.#e.set(e, `#${this.#e.size}`), t = this.serializeObject(e), this.#e.set(e, t)), t
        }
        $function(e) {
            let t = Function.prototype.toString.call(e);
            return t.slice(-15) === `[native code] }` ? `${e.name||``}()[native]` : `${e.name}(${e.length})${t.replace(/\s*\n\s*/g,``)}`
        }
        $Array(e) {
            let t = `[`;
            for (let n = 0; n < e.length; n++) t += this.serialize(e[n]), n < e.length - 1 && (t += `,`);
            return t + `]`
        }
        $Date(e) {
            try {
                return `Date(${e.toISOString()})`
            } catch {
                return `Date(null)`
            }
        }
        $ArrayBuffer(e) {
            return `ArrayBuffer[${new Uint8Array(e).join(`,`)}]`
        }
        $Set(e) {
            return `Set${this.$Array(Array.from(e).sort((e,t)=>this.compare(e,t)))}`
        }
        $Map(e) {
            return this.serializeObjectEntries(`Map`, e.entries())
        }
    }
    for (let t of [`Error`, `RegExp`, `URL`]) e.prototype[`$` + t] = function(e) {
        return `${t}(${e})`
    };
    for (let t of [`Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`]) e.prototype[`$` + t] = function(e) {
        return `${t}[${e.join(`,`)}]`
    };
    for (let t of [`BigInt64Array`, `BigUint64Array`]) e.prototype[`$` + t] = function(e) {
        return `${t}[${e.join(`n,`)}${e.length>0?`n`:``}]`
    };
    return e
}();

function x(e, t) {
    return e === t || y(e) === y(t)
}

function S(e, t) {
    let n = {};
    for (let r of t) n[r] = e[r];
    return n
}

function ee(e, t) {
    let n = { ...e
    };
    for (let e of t) delete n[e];
    return n
}

function C(e, t, n) {
    typeof t == `string` && (t = t.split(`.`).map(e => {
        let t = Number(e);
        return Number.isNaN(t) ? e : t
    }));
    let r = e;
    for (let e of t) {
        if (r == null) return n;
        r = r[e]
    }
    return r === void 0 ? n : r
}

function w(e) {
    let t = Number.parseFloat(e);
    return Number.isNaN(t) ? e : t
}

function te(e, t, n) {
    return e === void 0 || t === void 0 ? !1 : typeof e == `string` ? e === t : typeof n == `function` ? n(e, t) : typeof n == `string` ? C(e, n) === C(t, n) : x(e, t)
}

function ne(e) {
    if (e == null) return !0;
    if (typeof e == `boolean` || typeof e == `number`) return !1;
    if (typeof e == `string`) return e.trim().length === 0;
    if (Array.isArray(e)) return e.length === 0;
    if (e instanceof Map || e instanceof Set) return e.size === 0;
    if (e instanceof Date || e instanceof RegExp || typeof e == `function`) return !1;
    if (typeof e == `object`) {
        for (let t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0
    }
    return !1
}

function T(e, t, n = {}) {
    let {
        valueKey: r,
        labelKey: i,
        by: a
    } = n, o = e.find(e => te(typeof e == `object` && e && r ? C(e, r) : e, t, a));
    if (ne(t) && o) return i ? C(o, i) : void 0;
    if (ne(t)) return;
    let s = o ? ? t;
    if (s != null) return typeof s == `object` ? i ? C(s, i) : void 0 : String(s)
}

function re(e) {
    return Array.isArray(e[0])
}

function ie(e, t) {
    return !e && !t ? `` : [...Array.isArray(e) ? e : [e], t].filter(Boolean)
}

function E(e) {
    return e.map(e => {
        if (!e.children || typeof e.children == `string`) return e.children || ``;
        if (Array.isArray(e.children)) return E(e.children);
        if (e.children.default) return E(e.children.default())
    }).join(``)
}
var D = () => {
    let e = s();
    return {
        get fullPath() {
            return e.url
        }
    }
};

function O(e, t) {
    let n = typeof e == `string` && !t ? `${e}Context` : t,
        r = Symbol(n);
    return [t => {
        let n = c(r, t);
        if (n || n === null) return n;
        throw Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(`, `)}`:`\`${e}\``}`)
    }, e => (o(r, e), e)]
}

function k(e) {
    return e ? e.flatMap(e => e.type === n ? k(e.children) : [e]) : []
}
var A = l({
        name: `PrimitiveSlot`,
        inheritAttrs: !1,
        setup(n, {
            attrs: i,
            slots: a
        }) {
            return () => {
                if (!a.default) return null;
                let n = k(a.default()),
                    o = n.findIndex(e => e.type !== t);
                if (o === -1) return n;
                let s = n[o];
                delete s.props ? .ref;
                let c = s.props ? e(i, s.props) : i,
                    l = r({ ...s,
                        props: {}
                    }, c);
                return n.length === 1 ? l : (n[o] = l, n)
            }
        }
    }),
    j = [`area`, `img`, `input`],
    ae = l({
        name: `Primitive`,
        inheritAttrs: !1,
        props: {
            asChild: {
                type: Boolean,
                default: !1
            },
            as: {
                type: [String, Object],
                default: `div`
            }
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            let r = e.asChild ? `template` : e.as;
            return typeof r == `string` && j.includes(r) ? () => d(r, t) : r === `template` ? () => d(A, t, {
                default: n.default
            }) : () => d(e.as, t, {
                default: n.default
            })
        }
    }),
    [oe, se] = O(`UTheme`, `RootContext`),
    ce = {
        defaults: i(() => ({}))
    };

function M(e = ce) {
    return oe(e)
}

function N(e) {
    return e.replace(/-(\w)/g, (e, t) => t.toUpperCase())
}

function P(e) {
    return e.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`)
}

function le(e, t) {
    return !e || !e.props ? !1 : e.props[N(t)] !== void 0 || e.props[P(t)] !== void 0
}

function F(e, t) {
    let n = u(),
        {
            defaults: r
        } = M(),
        i = m();
    return new Proxy(t, {
        get(t, a, o) {
            if (a === `__v_isReactive`) return !0;
            if (a === `__v_raw`) return t;
            let s = Reflect.get(t, a, o);
            if (typeof a != `string`) return s;
            let c = e.includes(`.`) ? C(r.value, e) : r.value[e];
            if (a === `ui`) {
                let e = c ? .ui;
                return !s && !e ? s : v(s ? ? {}, e ? ? {})
            }
            if (n && le(n.vnode, a)) return s;
            let l = c ? .[a];
            if (l !== void 0) return l;
            let u = (e.includes(`.`) ? C(i.ui ? ? {}, e) : i.ui ? .[e]) ? .defaultVariants ? .[a];
            if (u !== void 0) return u;
            let d = n ? .type ? .props ? .[a];
            if (d && Object.prototype.hasOwnProperty.call(d, `default`)) return s
        },
        has: (e, t) => Reflect.has(e, t),
        ownKeys: e => Reflect.ownKeys(e),
        getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e, t)
    })
}
var ue = /\s+/g,
    I = e => typeof e != `string` || !e ? e : e.replace(ue, ` `).trim(),
    L = (...e) => {
        let t = [],
            n = e => {
                if (!e && e !== 0 && e !== 0 n) return;
                if (Array.isArray(e)) {
                    for (let t = 0, r = e.length; t < r; t++) n(e[t]);
                    return
                }
                let r = typeof e;
                if (r === `string` || r === `number` || r === `bigint`) {
                    if (r === `number` && e !== e) return;
                    t.push(String(e))
                } else if (r === `object`) {
                    let n = Object.keys(e);
                    for (let r = 0, i = n.length; r < i; r++) {
                        let i = n[r];
                        e[i] && t.push(i)
                    }
                }
            };
        for (let t = 0, r = e.length; t < r; t++) {
            let r = e[t];
            r != null && n(r)
        }
        return t.length > 0 ? I(t.join(` `)) : void 0
    },
    R = e => e === !1 ? `false` : e === !0 ? `true` : e === 0 ? `0` : e,
    z = e => {
        if (!e || typeof e != `object`) return !0;
        for (let t in e) return !1;
        return !0
    },
    de = (e, t) => {
        if (e === t) return !0;
        if (!e || !t) return !1;
        let n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let i = 0; i < n.length; i++) {
            let a = n[i];
            if (!r.includes(a) || e[a] !== t[a]) return !1
        }
        return !0
    },
    fe = (e, t) => {
        for (let n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                let r = t[n];
                e[n] = n in e ? L(e[n], r) : r
            }
        return e
    },
    pe = (e, t) => {
        for (let n = 0; n < e.length; n++) {
            let r = e[n];
            Array.isArray(r) ? pe(r, t) : r && t.push(r)
        }
    },
    me = (...e) => {
        let t = [];
        pe(e, t);
        let n = [];
        for (let e = 0; e < t.length; e++) t[e] && n.push(t[e]);
        return n
    },
    he = (e, t) => {
        let n = {};
        for (let r in e) {
            let i = e[r];
            if (r in t) {
                let e = t[r];
                n[r] = Array.isArray(i) || Array.isArray(e) ? me(e, i) : typeof i == `object` && typeof e == `object` && i && e ? he(i, e) : e + ` ` + i
            } else n[r] = i
        }
        for (let r in t) r in e || (n[r] = t[r]);
        return n
    },
    ge = {
        twMerge: !0,
        twMergeConfig: {}
    };

function _e() {
    let e = null,
        t = {},
        n = !1;
    return {
        get cachedTwMerge() {
            return e
        },
        set cachedTwMerge(t) {
            e = t
        },
        get cachedTwMergeConfig() {
            return t
        },
        set cachedTwMergeConfig(e) {
            t = e
        },
        get didTwMergeConfigChange() {
            return n
        },
        set didTwMergeConfigChange(e) {
            n = e
        },
        reset() {
            e = null, t = {}, n = !1
        }
    }
}
var B = _e(),
    ve = e => {
        let t = (t, n) => {
            let {
                extend: r = null,
                slots: i = {},
                variants: a = {},
                compoundVariants: o = [],
                compoundSlots: s = [],
                defaultVariants: c = {}
            } = t, l = { ...ge,
                ...n
            }, u = r ? .base ? L(r.base, t ? .base) : t ? .base, d = r ? .variants && !z(r.variants) ? he(a, r.variants) : a, f = r ? .defaultVariants && !z(r.defaultVariants) ? { ...r.defaultVariants,
                ...c
            } : c;
            !z(l.twMergeConfig) && !de(l.twMergeConfig, B.cachedTwMergeConfig) && (B.didTwMergeConfigChange = !0, B.cachedTwMergeConfig = l.twMergeConfig);
            let p = z(r ? .slots),
                m = z(i) ? {} : {
                    base: L(t ? .base, p && r ? .base),
                    ...i
                },
                h = p ? m : fe({ ...r ? .slots
                }, z(m) ? {
                    base: t ? .base
                } : m),
                g = z(r ? .compoundVariants) ? o : me(r ? .compoundVariants, o),
                _ = t => {
                    if (z(d) && z(i) && p) return e(u, t ? .class, t ? .className)(l);
                    if (g && !Array.isArray(g)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g}`);
                    if (s && !Array.isArray(s)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
                    let n = (e, n = d, r = null, i = null) => {
                            let a = n[e];
                            if (!a || z(a)) return null;
                            let o = i ? .[e] ? ? t ? .[e];
                            if (o === null) return null;
                            let s = R(o);
                            if (typeof s == `object`) return null;
                            let c = f ? .[e];
                            return a[(s ? ? R(c)) || `false`]
                        },
                        r = () => {
                            if (!d) return null;
                            let e = Object.keys(d),
                                t = [];
                            for (let r = 0; r < e.length; r++) {
                                let i = n(e[r], d);
                                i && t.push(i)
                            }
                            return t
                        },
                        a = (e, t) => {
                            if (!d || typeof d != `object`) return null;
                            let r = [];
                            for (let i in d) {
                                let a = n(i, d, e, t),
                                    o = e === `base` && typeof a == `string` ? a : a && a[e];
                                o && r.push(o)
                            }
                            return r
                        },
                        o = {};
                    for (let e in t) {
                        let n = t[e];
                        n !== void 0 && (o[e] = n)
                    }
                    let c = (e, n) => {
                            let r = typeof t ? .[e] == `object` ? {
                                [e]: t[e] ? .initial
                            } : {};
                            return { ...f,
                                ...o,
                                ...r,
                                ...n
                            }
                        },
                        m = (e = [], t) => {
                            let n = [],
                                r = e.length;
                            for (let i = 0; i < r; i++) {
                                let {
                                    class: r,
                                    className: a,
                                    ...o
                                } = e[i], s = !0, l = c(null, t);
                                for (let e in o) {
                                    let t = o[e],
                                        n = l[e];
                                    if (Array.isArray(t)) {
                                        if (!t.includes(n)) {
                                            s = !1;
                                            break
                                        }
                                    } else {
                                        if ((t == null || t === !1) && (n == null || n === !1)) continue;
                                        if (n !== t) {
                                            s = !1;
                                            break
                                        }
                                    }
                                }
                                s && (r && n.push(r), a && n.push(a))
                            }
                            return n
                        },
                        _ = t => {
                            let n = m(g, t);
                            if (!Array.isArray(n)) return n;
                            let r = {},
                                i = e;
                            for (let e = 0; e < n.length; e++) {
                                let t = n[e];
                                if (typeof t == `string`) r.base = i(r.base, t)(l);
                                else if (typeof t == `object`)
                                    for (let e in t) r[e] = i(r[e], t[e])(l)
                            }
                            return r
                        },
                        v = e => {
                            if (s.length < 1) return null;
                            let t = {},
                                n = c(null, e);
                            for (let e = 0; e < s.length; e++) {
                                let {
                                    slots: r = [],
                                    class: i,
                                    className: a,
                                    ...o
                                } = s[e];
                                if (!z(o)) {
                                    let e = !0;
                                    for (let t in o) {
                                        let r = n[t],
                                            i = o[t];
                                        if (r === void 0 || (Array.isArray(i) ? !i.includes(r) : i !== r)) {
                                            e = !1;
                                            break
                                        }
                                    }
                                    if (!e) continue
                                }
                                for (let e = 0; e < r.length; e++) {
                                    let n = r[e];
                                    t[n] || (t[n] = []), t[n].push([i, a])
                                }
                            }
                            return t
                        };
                    if (!z(i) || !p) {
                        let t = {};
                        if (typeof h == `object` && !z(h)) {
                            let n = e;
                            for (let e in h) t[e] = t => {
                                let r = _(t),
                                    i = v(t);
                                return n(h[e], a(e, t), r ? r[e] : void 0, i ? i[e] : void 0, t ? .class, t ? .className)(l)
                            }
                        }
                        return t
                    }
                    return e(u, r(), m(g), t ? .class, t ? .className)(l)
                };
            return _.variantKeys = (() => {
                if (!(!d || typeof d != `object`)) return Object.keys(d)
            })(), _.extend = r, _.base = u, _.slots = h, _.variants = d, _.defaultVariants = f, _.compoundSlots = s, _.compoundVariants = g, _
        };
        return {
            tv: t,
            createTV: e => (n, r) => t(n, r ? he(e, r) : e)
        }
    },
    ye = (e, t) => {
        let n = Array(e.length + t.length);
        for (let t = 0; t < e.length; t++) n[t] = e[t];
        for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
        return n
    },
    be = (e, t) => ({
        classGroupId: e,
        validator: t
    }),
    xe = (e = new Map, t = null, n) => ({
        nextPart: e,
        validators: t,
        classGroupId: n
    }),
    Se = `-`,
    Ce = [],
    we = `arbitrary..`,
    Te = e => {
        let t = Oe(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: e => {
                if (e.startsWith(`[`) && e.endsWith(`]`)) return De(e);
                let n = e.split(Se);
                return Ee(n, +(n[0] === `` && n.length > 1), t)
            },
            getConflictingClassGroupIds: (e, t) => {
                if (t) {
                    let t = r[e],
                        i = n[e];
                    return t ? i ? ye(i, t) : t : i || Ce
                }
                return n[e] || Ce
            }
        }
    },
    Ee = (e, t, n) => {
        if (e.length - t === 0) return n.classGroupId;
        let r = e[t],
            i = n.nextPart.get(r);
        if (i) {
            let n = Ee(e, t + 1, i);
            if (n) return n
        }
        let a = n.validators;
        if (a === null) return;
        let o = t === 0 ? e.join(Se) : e.slice(t).join(Se),
            s = a.length;
        for (let e = 0; e < s; e++) {
            let t = a[e];
            if (t.validator(o)) return t.classGroupId
        }
    },
    De = e => e.slice(1, -1).indexOf(`:`) === -1 ? void 0 : (() => {
        let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
        return r ? we + r : void 0
    })(),
    Oe = e => {
        let {
            theme: t,
            classGroups: n
        } = e;
        return ke(n, t)
    },
    ke = (e, t) => {
        let n = xe();
        for (let r in e) {
            let i = e[r];
            Ae(i, n, r, t)
        }
        return n
    },
    Ae = (e, t, n, r) => {
        let i = e.length;
        for (let a = 0; a < i; a++) {
            let i = e[a];
            je(i, t, n, r)
        }
    },
    je = (e, t, n, r) => {
        if (typeof e == `string`) {
            Me(e, t, n);
            return
        }
        if (typeof e == `function`) {
            Ne(e, t, n, r);
            return
        }
        Pe(e, t, n, r)
    },
    Me = (e, t, n) => {
        let r = e === `` ? t : Fe(t, e);
        r.classGroupId = n
    },
    Ne = (e, t, n, r) => {
        if (Ie(e)) {
            Ae(e(r), t, n, r);
            return
        }
        t.validators === null && (t.validators = []), t.validators.push(be(n, e))
    },
    Pe = (e, t, n, r) => {
        let i = Object.entries(e),
            a = i.length;
        for (let e = 0; e < a; e++) {
            let [a, o] = i[e];
            Ae(o, Fe(t, a), n, r)
        }
    },
    Fe = (e, t) => {
        let n = e,
            r = t.split(Se),
            i = r.length;
        for (let e = 0; e < i; e++) {
            let t = r[e],
                i = n.nextPart.get(t);
            i || (i = xe(), n.nextPart.set(t, i)), n = i
        }
        return n
    },
    Ie = e => `isThemeGetter` in e && e.isThemeGetter === !0,
    Le = e => {
        if (e < 1) return {
            get: () => void 0,
            set: () => {}
        };
        let t = 0,
            n = Object.create(null),
            r = Object.create(null),
            i = (i, a) => {
                n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null))
            };
        return {
            get(e) {
                let t = n[e];
                if (t !== void 0) return t;
                if ((t = r[e]) !== void 0) return i(e, t), t
            },
            set(e, t) {
                e in n ? n[e] = t : i(e, t)
            }
        }
    },
    Re = `!`,
    ze = `:`,
    Be = [],
    Ve = (e, t, n, r, i) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: n,
        maybePostfixModifierPosition: r,
        isExternal: i
    }),
    He = e => {
        let {
            prefix: t,
            experimentalParseClassName: n
        } = e, r = e => {
            let t = [],
                n = 0,
                r = 0,
                i = 0,
                a, o = e.length;
            for (let s = 0; s < o; s++) {
                let o = e[s];
                if (n === 0 && r === 0) {
                    if (o === ze) {
                        t.push(e.slice(i, s)), i = s + 1;
                        continue
                    }
                    if (o === `/`) {
                        a = s;
                        continue
                    }
                }
                o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--
            }
            let s = t.length === 0 ? e : e.slice(i),
                c = s,
                l = !1;
            s.endsWith(Re) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Re) && (c = s.slice(1), l = !0);
            let u = a && a > i ? a - i : void 0;
            return Ve(t, l, c, u)
        };
        if (t) {
            let e = t + ze,
                n = r;
            r = t => t.startsWith(e) ? n(t.slice(e.length)) : Ve(Be, !1, t, void 0, !0)
        }
        if (n) {
            let e = r;
            r = t => n({
                className: t,
                parseClassName: e
            })
        }
        return r
    },
    Ue = e => {
        let t = new Map;
        return e.orderSensitiveModifiers.forEach((e, n) => {
            t.set(e, 1e6 + n)
        }), e => {
            let n = [],
                r = [];
            for (let i = 0; i < e.length; i++) {
                let a = e[i],
                    o = a[0] === `[`,
                    s = t.has(a);
                o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a)
            }
            return r.length > 0 && (r.sort(), n.push(...r)), n
        }
    },
    We = e => ({
        cache: Le(e.cacheSize),
        parseClassName: He(e),
        sortModifiers: Ue(e),
        postfixLookupClassGroupIds: Ge(e),
        ...Te(e)
    }),
    Ge = e => {
        let t = Object.create(null),
            n = e.postfixLookupClassGroups;
        if (n)
            for (let e = 0; e < n.length; e++) t[n[e]] = !0;
        return t
    },
    Ke = /\s+/,
    qe = (e, t) => {
        let {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: i,
            sortModifiers: a,
            postfixLookupClassGroupIds: o
        } = t, s = [], c = e.trim().split(Ke), l = ``;
        for (let e = c.length - 1; e >= 0; --e) {
            let t = c[e],
                {
                    isExternal: u,
                    modifiers: d,
                    hasImportantModifier: f,
                    baseClassName: p,
                    maybePostfixModifierPosition: m
                } = n(t);
            if (u) {
                l = t + (l.length > 0 ? ` ` + l : l);
                continue
            }
            let h = !!m,
                g;
            if (h) {
                g = r(p.substring(0, m));
                let e = g && o[g] ? r(p) : void 0;
                e && e !== g && (g = e, h = !1)
            } else g = r(p);
            if (!g) {
                if (!h) {
                    l = t + (l.length > 0 ? ` ` + l : l);
                    continue
                }
                if (g = r(p), !g) {
                    l = t + (l.length > 0 ? ` ` + l : l);
                    continue
                }
                h = !1
            }
            let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
                v = f ? _ + Re : _,
                y = v + g;
            if (s.indexOf(y) > -1) continue;
            s.push(y);
            let b = i(g, h);
            for (let e = 0; e < b.length; ++e) {
                let t = b[e];
                s.push(v + t)
            }
            l = t + (l.length > 0 ? ` ` + l : l)
        }
        return l
    },
    Je = (...e) => {
        let t = 0,
            n, r, i = ``;
        for (; t < e.length;)(n = e[t++]) && (r = Ye(n)) && (i && (i += ` `), i += r);
        return i
    },
    Ye = e => {
        if (typeof e == `string`) return e;
        let t, n = ``;
        for (let r = 0; r < e.length; r++) e[r] && (t = Ye(e[r])) && (n && (n += ` `), n += t);
        return n
    },
    Xe = (e, ...t) => {
        let n, r, i, a, o = o => (n = We(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)),
            s = e => {
                let t = r(e);
                if (t) return t;
                let a = qe(e, n);
                return i(e, a), a
            };
        return a = o, (...e) => a(Je(...e))
    },
    Ze = [],
    V = e => {
        let t = t => t[e] || Ze;
        return t.isThemeGetter = !0, t
    },
    Qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    $e = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    et = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    tt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    nt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    rt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    it = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    at = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    H = e => et.test(e),
    U = e => !!e && !Number.isNaN(Number(e)),
    W = e => !!e && Number.isInteger(Number(e)),
    ot = e => e.endsWith(`%`) && U(e.slice(0, -1)),
    G = e => tt.test(e),
    st = () => !0,
    ct = e => nt.test(e) && !rt.test(e),
    lt = () => !1,
    ut = e => it.test(e),
    dt = e => at.test(e),
    ft = e => !K(e) && !J(e),
    pt = e => e.startsWith(`@container`) && (e[10] === `/` && e[11] !== void 0 || e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10) || e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10)),
    mt = e => X(e, kt, lt),
    K = e => Qe.test(e),
    q = e => X(e, At, ct),
    ht = e => X(e, jt, U),
    gt = e => X(e, Nt, st),
    _t = e => X(e, Mt, lt),
    vt = e => X(e, Dt, lt),
    yt = e => X(e, Ot, dt),
    bt = e => X(e, Pt, ut),
    J = e => $e.test(e),
    Y = e => Z(e, At),
    xt = e => Z(e, Mt),
    St = e => Z(e, Dt),
    Ct = e => Z(e, kt),
    wt = e => Z(e, Ot),
    Tt = e => Z(e, Pt, !0),
    Et = e => Z(e, Nt, !0),
    X = (e, t, n) => {
        let r = Qe.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1
    },
    Z = (e, t, n = !1) => {
        let r = $e.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1
    },
    Dt = e => e === `position` || e === `percentage`,
    Ot = e => e === `image` || e === `url`,
    kt = e => e === `length` || e === `size` || e === `bg-size`,
    At = e => e === `length`,
    jt = e => e === `number`,
    Mt = e => e === `family-name`,
    Nt = e => e === `number` || e === `weight`,
    Pt = e => e === `shadow`,
    Ft = () => {
        let e = V(`color`),
            t = V(`font`),
            n = V(`text`),
            r = V(`font-weight`),
            i = V(`tracking`),
            a = V(`leading`),
            o = V(`breakpoint`),
            s = V(`container`),
            c = V(`spacing`),
            l = V(`radius`),
            u = V(`shadow`),
            d = V(`inset-shadow`),
            f = V(`text-shadow`),
            p = V(`drop-shadow`),
            m = V(`blur`),
            h = V(`perspective`),
            g = V(`aspect`),
            _ = V(`ease`),
            v = V(`animate`),
            y = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`],
            b = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`],
            x = () => [...b(), J, K],
            S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
            ee = () => [`auto`, `contain`, `none`],
            C = () => [J, K, c],
            w = () => [H, `full`, `auto`, ...C()],
            te = () => [W, `none`, `subgrid`, J, K],
            ne = () => [`auto`, {
                span: [`full`, W, J, K]
            }, W, J, K],
            T = () => [W, `auto`, J, K],
            re = () => [`auto`, `min`, `max`, `fr`, J, K],
            ie = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`],
            E = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`],
            D = () => [`auto`, ...C()],
            O = () => [H, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...C()],
            k = () => [H, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...C()],
            A = () => [H, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...C()],
            j = () => [e, J, K],
            ae = () => [...b(), St, vt, {
                position: [J, K]
            }],
            oe = () => [`no-repeat`, {
                repeat: [``, `x`, `y`, `space`, `round`]
            }],
            se = () => [`auto`, `cover`, `contain`, Ct, mt, {
                size: [J, K]
            }],
            ce = () => [ot, Y, q],
            M = () => [``, `none`, `full`, l, J, K],
            N = () => [``, U, Y, q],
            P = () => [`solid`, `dashed`, `dotted`, `double`],
            le = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`],
            F = () => [U, ot, St, vt],
            ue = () => [``, `none`, m, J, K],
            I = () => [`none`, U, J, K],
            L = () => [`none`, U, J, K],
            R = () => [U, J, K],
            z = () => [H, `full`, ...C()];
        return {
            cacheSize: 500,
            theme: {
                animate: [`spin`, `ping`, `pulse`, `bounce`],
                aspect: [`video`],
                blur: [G],
                breakpoint: [G],
                color: [st],
                container: [G],
                "drop-shadow": [G],
                ease: [`in`, `out`, `in-out`],
                font: [ft],
                "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`],
                "inset-shadow": [G],
                leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
                perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
                radius: [G],
                shadow: [G],
                spacing: [`px`, U],
                text: [G],
                "text-shadow": [G],
                tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`]
            },
            classGroups: {
                aspect: [{
                    aspect: [`auto`, `square`, H, K, J, g]
                }],
                container: [`container`],
                "container-type": [{
                    "@container": [``, `normal`, `size`, J, K]
                }],
                "container-named": [pt],
                columns: [{
                    columns: [U, K, J, s]
                }],
                "break-after": [{
                    "break-after": y()
                }],
                "break-before": [{
                    "break-before": y()
                }],
                "break-inside": [{
                    "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`]
                }],
                "box-decoration": [{
                    "box-decoration": [`slice`, `clone`]
                }],
                box: [{
                    box: [`border`, `content`]
                }],
                display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`],
                sr: [`sr-only`, `not-sr-only`],
                float: [{
                    float: [`right`, `left`, `none`, `start`, `end`]
                }],
                clear: [{
                    clear: [`left`, `right`, `both`, `none`, `start`, `end`]
                }],
                isolation: [`isolate`, `isolation-auto`],
                "object-fit": [{
                    object: [`contain`, `cover`, `fill`, `none`, `scale-down`]
                }],
                "object-position": [{
                    object: x()
                }],
                overflow: [{
                    overflow: S()
                }],
                "overflow-x": [{
                    "overflow-x": S()
                }],
                "overflow-y": [{
                    "overflow-y": S()
                }],
                overscroll: [{
                    overscroll: ee()
                }],
                "overscroll-x": [{
                    "overscroll-x": ee()
                }],
                "overscroll-y": [{
                    "overscroll-y": ee()
                }],
                position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
                inset: [{
                    inset: w()
                }],
                "inset-x": [{
                    "inset-x": w()
                }],
                "inset-y": [{
                    "inset-y": w()
                }],
                start: [{
                    "inset-s": w(),
                    start: w()
                }],
                end: [{
                    "inset-e": w(),
                    end: w()
                }],
                "inset-bs": [{
                    "inset-bs": w()
                }],
                "inset-be": [{
                    "inset-be": w()
                }],
                top: [{
                    top: w()
                }],
                right: [{
                    right: w()
                }],
                bottom: [{
                    bottom: w()
                }],
                left: [{
                    left: w()
                }],
                visibility: [`visible`, `invisible`, `collapse`],
                z: [{
                    z: [W, `auto`, J, K]
                }],
                basis: [{
                    basis: [H, `full`, `auto`, s, ...C()]
                }],
                "flex-direction": [{
                    flex: [`row`, `row-reverse`, `col`, `col-reverse`]
                }],
                "flex-wrap": [{
                    flex: [`nowrap`, `wrap`, `wrap-reverse`]
                }],
                flex: [{
                    flex: [U, H, `auto`, `initial`, `none`, K]
                }],
                grow: [{
                    grow: [``, U, J, K]
                }],
                shrink: [{
                    shrink: [``, U, J, K]
                }],
                order: [{
                    order: [W, `first`, `last`, `none`, J, K]
                }],
                "grid-cols": [{
                    "grid-cols": te()
                }],
                "col-start-end": [{
                    col: ne()
                }],
                "col-start": [{
                    "col-start": T()
                }],
                "col-end": [{
                    "col-end": T()
                }],
                "grid-rows": [{
                    "grid-rows": te()
                }],
                "row-start-end": [{
                    row: ne()
                }],
                "row-start": [{
                    "row-start": T()
                }],
                "row-end": [{
                    "row-end": T()
                }],
                "grid-flow": [{
                    "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`]
                }],
                "auto-cols": [{
                    "auto-cols": re()
                }],
                "auto-rows": [{
                    "auto-rows": re()
                }],
                gap: [{
                    gap: C()
                }],
                "gap-x": [{
                    "gap-x": C()
                }],
                "gap-y": [{
                    "gap-y": C()
                }],
                "justify-content": [{
                    justify: [...ie(), `normal`]
                }],
                "justify-items": [{
                    "justify-items": [...E(), `normal`]
                }],
                "justify-self": [{
                    "justify-self": [`auto`, ...E()]
                }],
                "align-content": [{
                    content: [`normal`, ...ie()]
                }],
                "align-items": [{
                    items: [...E(), {
                        baseline: [``, `last`]
                    }]
                }],
                "align-self": [{
                    self: [`auto`, ...E(), {
                        baseline: [``, `last`]
                    }]
                }],
                "place-content": [{
                    "place-content": ie()
                }],
                "place-items": [{
                    "place-items": [...E(), `baseline`]
                }],
                "place-self": [{
                    "place-self": [`auto`, ...E()]
                }],
                p: [{
                    p: C()
                }],
                px: [{
                    px: C()
                }],
                py: [{
                    py: C()
                }],
                ps: [{
                    ps: C()
                }],
                pe: [{
                    pe: C()
                }],
                pbs: [{
                    pbs: C()
                }],
                pbe: [{
                    pbe: C()
                }],
                pt: [{
                    pt: C()
                }],
                pr: [{
                    pr: C()
                }],
                pb: [{
                    pb: C()
                }],
                pl: [{
                    pl: C()
                }],
                m: [{
                    m: D()
                }],
                mx: [{
                    mx: D()
                }],
                my: [{
                    my: D()
                }],
                ms: [{
                    ms: D()
                }],
                me: [{
                    me: D()
                }],
                mbs: [{
                    mbs: D()
                }],
                mbe: [{
                    mbe: D()
                }],
                mt: [{
                    mt: D()
                }],
                mr: [{
                    mr: D()
                }],
                mb: [{
                    mb: D()
                }],
                ml: [{
                    ml: D()
                }],
                "space-x": [{
                    "space-x": C()
                }],
                "space-x-reverse": [`space-x-reverse`],
                "space-y": [{
                    "space-y": C()
                }],
                "space-y-reverse": [`space-y-reverse`],
                size: [{
                    size: O()
                }],
                "inline-size": [{
                    inline: [`auto`, ...k()]
                }],
                "min-inline-size": [{
                    "min-inline": [`auto`, ...k()]
                }],
                "max-inline-size": [{
                    "max-inline": [`none`, ...k()]
                }],
                "block-size": [{
                    block: [`auto`, ...A()]
                }],
                "min-block-size": [{
                    "min-block": [`auto`, ...A()]
                }],
                "max-block-size": [{
                    "max-block": [`none`, ...A()]
                }],
                w: [{
                    w: [s, `screen`, ...O()]
                }],
                "min-w": [{
                    "min-w": [s, `screen`, `none`, ...O()]
                }],
                "max-w": [{
                    "max-w": [s, `screen`, `none`, `prose`, {
                        screen: [o]
                    }, ...O()]
                }],
                h: [{
                    h: [`screen`, `lh`, ...O()]
                }],
                "min-h": [{
                    "min-h": [`screen`, `lh`, `none`, ...O()]
                }],
                "max-h": [{
                    "max-h": [`screen`, `lh`, ...O()]
                }],
                "font-size": [{
                    text: [`base`, n, Y, q]
                }],
                "font-smoothing": [`antialiased`, `subpixel-antialiased`],
                "font-style": [`italic`, `not-italic`],
                "font-weight": [{
                    font: [r, Et, gt]
                }],
                "font-stretch": [{
                    "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, ot, K]
                }],
                "font-family": [{
                    font: [xt, _t, t]
                }],
                "font-features": [{
                    "font-features": [K]
                }],
                "fvn-normal": [`normal-nums`],
                "fvn-ordinal": [`ordinal`],
                "fvn-slashed-zero": [`slashed-zero`],
                "fvn-figure": [`lining-nums`, `oldstyle-nums`],
                "fvn-spacing": [`proportional-nums`, `tabular-nums`],
                "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
                tracking: [{
                    tracking: [i, J, K]
                }],
                "line-clamp": [{
                    "line-clamp": [U, `none`, J, ht]
                }],
                leading: [{
                    leading: [a, ...C()]
                }],
                "list-image": [{
                    "list-image": [`none`, J, K]
                }],
                "list-style-position": [{
                    list: [`inside`, `outside`]
                }],
                "list-style-type": [{
                    list: [`disc`, `decimal`, `none`, J, K]
                }],
                "text-alignment": [{
                    text: [`left`, `center`, `right`, `justify`, `start`, `end`]
                }],
                "placeholder-color": [{
                    placeholder: j()
                }],
                "text-color": [{
                    text: j()
                }],
                "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
                "text-decoration-style": [{
                    decoration: [...P(), `wavy`]
                }],
                "text-decoration-thickness": [{
                    decoration: [U, `from-font`, `auto`, J, q]
                }],
                "text-decoration-color": [{
                    decoration: j()
                }],
                "underline-offset": [{
                    "underline-offset": [U, `auto`, J, K]
                }],
                "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
                "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
                "text-wrap": [{
                    text: [`wrap`, `nowrap`, `balance`, `pretty`]
                }],
                indent: [{
                    indent: C()
                }],
                "tab-size": [{
                    tab: [W, J, K]
                }],
                "vertical-align": [{
                    align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, J, K]
                }],
                whitespace: [{
                    whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`]
                }],
                break: [{
                    break: [`normal`, `words`, `all`, `keep`]
                }],
                wrap: [{
                    wrap: [`break-word`, `anywhere`, `normal`]
                }],
                hyphens: [{
                    hyphens: [`none`, `manual`, `auto`]
                }],
                content: [{
                    content: [`none`, J, K]
                }],
                "bg-attachment": [{
                    bg: [`fixed`, `local`, `scroll`]
                }],
                "bg-clip": [{
                    "bg-clip": [`border`, `padding`, `content`, `text`]
                }],
                "bg-origin": [{
                    "bg-origin": [`border`, `padding`, `content`]
                }],
                "bg-position": [{
                    bg: ae()
                }],
                "bg-repeat": [{
                    bg: oe()
                }],
                "bg-size": [{
                    bg: se()
                }],
                "bg-image": [{
                    bg: [`none`, {
                        linear: [{
                            to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`]
                        }, W, J, K],
                        radial: [``, J, K],
                        conic: [W, J, K]
                    }, wt, yt]
                }],
                "bg-color": [{
                    bg: j()
                }],
                "gradient-from-pos": [{
                    from: ce()
                }],
                "gradient-via-pos": [{
                    via: ce()
                }],
                "gradient-to-pos": [{
                    to: ce()
                }],
                "gradient-from": [{
                    from: j()
                }],
                "gradient-via": [{
                    via: j()
                }],
                "gradient-to": [{
                    to: j()
                }],
                rounded: [{
                    rounded: M()
                }],
                "rounded-s": [{
                    "rounded-s": M()
                }],
                "rounded-e": [{
                    "rounded-e": M()
                }],
                "rounded-t": [{
                    "rounded-t": M()
                }],
                "rounded-r": [{
                    "rounded-r": M()
                }],
                "rounded-b": [{
                    "rounded-b": M()
                }],
                "rounded-l": [{
                    "rounded-l": M()
                }],
                "rounded-ss": [{
                    "rounded-ss": M()
                }],
                "rounded-se": [{
                    "rounded-se": M()
                }],
                "rounded-ee": [{
                    "rounded-ee": M()
                }],
                "rounded-es": [{
                    "rounded-es": M()
                }],
                "rounded-tl": [{
                    "rounded-tl": M()
                }],
                "rounded-tr": [{
                    "rounded-tr": M()
                }],
                "rounded-br": [{
                    "rounded-br": M()
                }],
                "rounded-bl": [{
                    "rounded-bl": M()
                }],
                "border-w": [{
                    border: N()
                }],
                "border-w-x": [{
                    "border-x": N()
                }],
                "border-w-y": [{
                    "border-y": N()
                }],
                "border-w-s": [{
                    "border-s": N()
                }],
                "border-w-e": [{
                    "border-e": N()
                }],
                "border-w-bs": [{
                    "border-bs": N()
                }],
                "border-w-be": [{
                    "border-be": N()
                }],
                "border-w-t": [{
                    "border-t": N()
                }],
                "border-w-r": [{
                    "border-r": N()
                }],
                "border-w-b": [{
                    "border-b": N()
                }],
                "border-w-l": [{
                    "border-l": N()
                }],
                "divide-x": [{
                    "divide-x": N()
                }],
                "divide-x-reverse": [`divide-x-reverse`],
                "divide-y": [{
                    "divide-y": N()
                }],
                "divide-y-reverse": [`divide-y-reverse`],
                "border-style": [{
                    border: [...P(), `hidden`, `none`]
                }],
                "divide-style": [{
                    divide: [...P(), `hidden`, `none`]
                }],
                "border-color": [{
                    border: j()
                }],
                "border-color-x": [{
                    "border-x": j()
                }],
                "border-color-y": [{
                    "border-y": j()
                }],
                "border-color-s": [{
                    "border-s": j()
                }],
                "border-color-e": [{
                    "border-e": j()
                }],
                "border-color-bs": [{
                    "border-bs": j()
                }],
                "border-color-be": [{
                    "border-be": j()
                }],
                "border-color-t": [{
                    "border-t": j()
                }],
                "border-color-r": [{
                    "border-r": j()
                }],
                "border-color-b": [{
                    "border-b": j()
                }],
                "border-color-l": [{
                    "border-l": j()
                }],
                "divide-color": [{
                    divide: j()
                }],
                "outline-style": [{
                    outline: [...P(), `none`, `hidden`]
                }],
                "outline-offset": [{
                    "outline-offset": [U, J, K]
                }],
                "outline-w": [{
                    outline: [``, U, Y, q]
                }],
                "outline-color": [{
                    outline: j()
                }],
                shadow: [{
                    shadow: [``, `none`, u, Tt, bt]
                }],
                "shadow-color": [{
                    shadow: j()
                }],
                "inset-shadow": [{
                    "inset-shadow": [`none`, d, Tt, bt]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": j()
                }],
                "ring-w": [{
                    ring: N()
                }],
                "ring-w-inset": [`ring-inset`],
                "ring-color": [{
                    ring: j()
                }],
                "ring-offset-w": [{
                    "ring-offset": [U, q]
                }],
                "ring-offset-color": [{
                    "ring-offset": j()
                }],
                "inset-ring-w": [{
                    "inset-ring": N()
                }],
                "inset-ring-color": [{
                    "inset-ring": j()
                }],
                "text-shadow": [{
                    "text-shadow": [`none`, f, Tt, bt]
                }],
                "text-shadow-color": [{
                    "text-shadow": j()
                }],
                opacity: [{
                    opacity: [U, J, K]
                }],
                "mix-blend": [{
                    "mix-blend": [...le(), `plus-darker`, `plus-lighter`]
                }],
                "bg-blend": [{
                    "bg-blend": le()
                }],
                "mask-clip": [{
                    "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
                }, `mask-no-clip`],
                "mask-composite": [{
                    mask: [`add`, `subtract`, `intersect`, `exclude`]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [U]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": F()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": F()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": j()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": j()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": F()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": F()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": j()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": j()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": F()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": F()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": j()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": j()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": F()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": F()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": j()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": j()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": F()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": F()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": j()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": j()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": F()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": F()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": j()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": j()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": F()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": F()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": j()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": j()
                }],
                "mask-image-radial": [{
                    "mask-radial": [J, K]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": F()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": F()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": j()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": j()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": [`circle`, `ellipse`]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: [`side`, `corner`],
                        farthest: [`side`, `corner`]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": b()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [U]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": F()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": F()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": j()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": j()
                }],
                "mask-mode": [{
                    mask: [`alpha`, `luminance`, `match`]
                }],
                "mask-origin": [{
                    "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
                }],
                "mask-position": [{
                    mask: ae()
                }],
                "mask-repeat": [{
                    mask: oe()
                }],
                "mask-size": [{
                    mask: se()
                }],
                "mask-type": [{
                    "mask-type": [`alpha`, `luminance`]
                }],
                "mask-image": [{
                    mask: [`none`, J, K]
                }],
                filter: [{
                    filter: [``, `none`, J, K]
                }],
                blur: [{
                    blur: ue()
                }],
                brightness: [{
                    brightness: [U, J, K]
                }],
                contrast: [{
                    contrast: [U, J, K]
                }],
                "drop-shadow": [{
                    "drop-shadow": [``, `none`, p, Tt, bt]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": j()
                }],
                grayscale: [{
                    grayscale: [``, U, J, K]
                }],
                "hue-rotate": [{
                    "hue-rotate": [U, J, K]
                }],
                invert: [{
                    invert: [``, U, J, K]
                }],
                saturate: [{
                    saturate: [U, J, K]
                }],
                sepia: [{
                    sepia: [``, U, J, K]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": [``, `none`, J, K]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": ue()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [U, J, K]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [U, J, K]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [``, U, J, K]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [U, J, K]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [``, U, J, K]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [U, J, K]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [U, J, K]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [``, U, J, K]
                }],
                "border-collapse": [{
                    border: [`collapse`, `separate`]
                }],
                "border-spacing": [{
                    "border-spacing": C()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": C()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": C()
                }],
                "table-layout": [{
                    table: [`auto`, `fixed`]
                }],
                caption: [{
                    caption: [`top`, `bottom`]
                }],
                transition: [{
                    transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, J, K]
                }],
                "transition-behavior": [{
                    transition: [`normal`, `discrete`]
                }],
                duration: [{
                    duration: [U, `initial`, J, K]
                }],
                ease: [{
                    ease: [`linear`, `initial`, _, J, K]
                }],
                delay: [{
                    delay: [U, J, K]
                }],
                animate: [{
                    animate: [`none`, v, J, K]
                }],
                backface: [{
                    backface: [`hidden`, `visible`]
                }],
                perspective: [{
                    perspective: [h, J, K]
                }],
                "perspective-origin": [{
                    "perspective-origin": x()
                }],
                rotate: [{
                    rotate: I()
                }],
                "rotate-x": [{
                    "rotate-x": I()
                }],
                "rotate-y": [{
                    "rotate-y": I()
                }],
                "rotate-z": [{
                    "rotate-z": I()
                }],
                scale: [{
                    scale: L()
                }],
                "scale-x": [{
                    "scale-x": L()
                }],
                "scale-y": [{
                    "scale-y": L()
                }],
                "scale-z": [{
                    "scale-z": L()
                }],
                "scale-3d": [`scale-3d`],
                skew: [{
                    skew: R()
                }],
                "skew-x": [{
                    "skew-x": R()
                }],
                "skew-y": [{
                    "skew-y": R()
                }],
                transform: [{
                    transform: [J, K, ``, `none`, `gpu`, `cpu`]
                }],
                "transform-origin": [{
                    origin: x()
                }],
                "transform-style": [{
                    transform: [`3d`, `flat`]
                }],
                translate: [{
                    translate: z()
                }],
                "translate-x": [{
                    "translate-x": z()
                }],
                "translate-y": [{
                    "translate-y": z()
                }],
                "translate-z": [{
                    "translate-z": z()
                }],
                "translate-none": [`translate-none`],
                zoom: [{
                    zoom: [W, J, K]
                }],
                accent: [{
                    accent: j()
                }],
                appearance: [{
                    appearance: [`none`, `auto`]
                }],
                "caret-color": [{
                    caret: j()
                }],
                "color-scheme": [{
                    scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`]
                }],
                cursor: [{
                    cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, J, K]
                }],
                "field-sizing": [{
                    "field-sizing": [`fixed`, `content`]
                }],
                "pointer-events": [{
                    "pointer-events": [`auto`, `none`]
                }],
                resize: [{
                    resize: [`none`, ``, `y`, `x`]
                }],
                "scroll-behavior": [{
                    scroll: [`auto`, `smooth`]
                }],
                "scrollbar-thumb-color": [{
                    "scrollbar-thumb": j()
                }],
                "scrollbar-track-color": [{
                    "scrollbar-track": j()
                }],
                "scrollbar-gutter": [{
                    "scrollbar-gutter": [`auto`, `stable`, `both`]
                }],
                "scrollbar-w": [{
                    scrollbar: [`auto`, `thin`, `none`]
                }],
                "scroll-m": [{
                    "scroll-m": C()
                }],
                "scroll-mx": [{
                    "scroll-mx": C()
                }],
                "scroll-my": [{
                    "scroll-my": C()
                }],
                "scroll-ms": [{
                    "scroll-ms": C()
                }],
                "scroll-me": [{
                    "scroll-me": C()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": C()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": C()
                }],
                "scroll-mt": [{
                    "scroll-mt": C()
                }],
                "scroll-mr": [{
                    "scroll-mr": C()
                }],
                "scroll-mb": [{
                    "scroll-mb": C()
                }],
                "scroll-ml": [{
                    "scroll-ml": C()
                }],
                "scroll-p": [{
                    "scroll-p": C()
                }],
                "scroll-px": [{
                    "scroll-px": C()
                }],
                "scroll-py": [{
                    "scroll-py": C()
                }],
                "scroll-ps": [{
                    "scroll-ps": C()
                }],
                "scroll-pe": [{
                    "scroll-pe": C()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": C()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": C()
                }],
                "scroll-pt": [{
                    "scroll-pt": C()
                }],
                "scroll-pr": [{
                    "scroll-pr": C()
                }],
                "scroll-pb": [{
                    "scroll-pb": C()
                }],
                "scroll-pl": [{
                    "scroll-pl": C()
                }],
                "snap-align": [{
                    snap: [`start`, `end`, `center`, `align-none`]
                }],
                "snap-stop": [{
                    snap: [`normal`, `always`]
                }],
                "snap-type": [{
                    snap: [`none`, `x`, `y`, `both`]
                }],
                "snap-strictness": [{
                    snap: [`mandatory`, `proximity`]
                }],
                touch: [{
                    touch: [`auto`, `none`, `manipulation`]
                }],
                "touch-x": [{
                    "touch-pan": [`x`, `left`, `right`]
                }],
                "touch-y": [{
                    "touch-pan": [`y`, `up`, `down`]
                }],
                "touch-pz": [`touch-pinch-zoom`],
                select: [{
                    select: [`none`, `text`, `all`, `auto`]
                }],
                "will-change": [{
                    "will-change": [`auto`, `scroll`, `contents`, `transform`, J, K]
                }],
                fill: [{
                    fill: [`none`, ...j()]
                }],
                "stroke-w": [{
                    stroke: [U, Y, q, ht]
                }],
                stroke: [{
                    stroke: [`none`, ...j()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": [`auto`, `none`]
                }]
            },
            conflictingClassGroups: {
                "container-named": [`container-type`],
                overflow: [`overflow-x`, `overflow-y`],
                overscroll: [`overscroll-x`, `overscroll-y`],
                inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`],
                "inset-x": [`right`, `left`],
                "inset-y": [`top`, `bottom`],
                flex: [`basis`, `grow`, `shrink`],
                gap: [`gap-x`, `gap-y`],
                p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
                px: [`pr`, `pl`],
                py: [`pt`, `pb`],
                m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
                mx: [`mr`, `ml`],
                my: [`mt`, `mb`],
                size: [`w`, `h`],
                "font-size": [`leading`],
                "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`],
                "fvn-ordinal": [`fvn-normal`],
                "fvn-slashed-zero": [`fvn-normal`],
                "fvn-figure": [`fvn-normal`],
                "fvn-spacing": [`fvn-normal`],
                "fvn-fraction": [`fvn-normal`],
                "line-clamp": [`display`, `overflow`],
                rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`],
                "rounded-s": [`rounded-ss`, `rounded-es`],
                "rounded-e": [`rounded-se`, `rounded-ee`],
                "rounded-t": [`rounded-tl`, `rounded-tr`],
                "rounded-r": [`rounded-tr`, `rounded-br`],
                "rounded-b": [`rounded-br`, `rounded-bl`],
                "rounded-l": [`rounded-tl`, `rounded-bl`],
                "border-spacing": [`border-spacing-x`, `border-spacing-y`],
                "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`],
                "border-w-x": [`border-w-r`, `border-w-l`],
                "border-w-y": [`border-w-t`, `border-w-b`],
                "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`],
                "border-color-x": [`border-color-r`, `border-color-l`],
                "border-color-y": [`border-color-t`, `border-color-b`],
                translate: [`translate-x`, `translate-y`, `translate-none`],
                "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
                "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`],
                "scroll-mx": [`scroll-mr`, `scroll-ml`],
                "scroll-my": [`scroll-mt`, `scroll-mb`],
                "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`],
                "scroll-px": [`scroll-pr`, `scroll-pl`],
                "scroll-py": [`scroll-pt`, `scroll-pb`],
                touch: [`touch-x`, `touch-y`, `touch-pz`],
                "touch-x": [`touch`],
                "touch-y": [`touch`],
                "touch-pz": [`touch`]
            },
            conflictingClassGroupModifiers: {
                "font-size": [`leading`]
            },
            postfixLookupClassGroups: [`container-type`],
            orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`]
        }
    },
    It = (e, {
        cacheSize: t,
        prefix: n,
        experimentalParseClassName: r,
        extend: i = {},
        override: a = {}
    }) => (Q(e, `cacheSize`, t), Q(e, `prefix`, n), Q(e, `experimentalParseClassName`, r), Lt(e.theme, a.theme), Lt(e.classGroups, a.classGroups), Lt(e.conflictingClassGroups, a.conflictingClassGroups), Lt(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Q(e, `postfixLookupClassGroups`, a.postfixLookupClassGroups), Q(e, `orderSensitiveModifiers`, a.orderSensitiveModifiers), Rt(e.theme, i.theme), Rt(e.classGroups, i.classGroups), Rt(e.conflictingClassGroups, i.conflictingClassGroups), Rt(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), zt(e, i, `postfixLookupClassGroups`), zt(e, i, `orderSensitiveModifiers`), e),
    Q = (e, t, n) => {
        n !== void 0 && (e[t] = n)
    },
    Lt = (e, t) => {
        if (t)
            for (let n in t) Q(e, n, t[n])
    },
    Rt = (e, t) => {
        if (t)
            for (let n in t) zt(e, t, n)
    },
    zt = (e, t, n) => {
        let r = t[n];
        r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r)
    },
    Bt = (e, ...t) => typeof e == `function` ? Xe(Ft, e, ...t) : Xe(() => It(Ft(), e), ...t),
    Vt = Xe(Ft),
    Ht = e => z(e) ? Vt : Bt({ ...e,
        extend: {
            theme: e.theme,
            classGroups: e.classGroups,
            conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
            conflictingClassGroups: e.conflictingClassGroups,
            ...e.extend
        }
    }),
    Ut = (e, t) => {
        let n = L(e);
        return !n || !(t ? .twMerge ? ? !0) ? n : ((!B.cachedTwMerge || B.didTwMergeConfigChange) && (B.didTwMergeConfigChange = !1, B.cachedTwMerge = Ht(B.cachedTwMergeConfig)), B.cachedTwMerge(n) || void 0)
    },
    Wt = (...e) => t => Ut(e, t),
    {
        createTV: Gt,
        tv: Kt
    } = ve(Wt),
    qt = f.ui ? .tv,
    Jt = Gt(qt);

function $(e) {
    if (typeof e == `function`) return e;
    if (Array.isArray(e))
        for (let t = e.length - 1; t >= 0; t--) {
            let n = $(e[t]);
            if (n) return n
        }
}

function Yt(e) {
    return Array.isArray(e) ? e.flatMap(e => Yt(e)) : typeof e == `function` ? [] : [e]
}

function Xt(e, t, n) {
    return Wt(e(n()), ...Yt(t.class), ...Yt(t.className))(qt) ? ? ``
}

function Zt(e, t) {
    return new Proxy(e, {
        get(e, n) {
            let r = e[n];
            return typeof r == `function` ? (e = {}) => {
                let i = $(e.class) ? ? $(e.className) ? ? t ? .[n];
                return i ? Xt(i, e, () => r({ ...e,
                    class: void 0,
                    className: void 0
                })) : r(e)
            } : r
        }
    })
}

function Qt(e) {
    if (!e || typeof e != `object`) return {
        config: e
    };
    let t = e,
        n;
    typeof e.base == `function` && (n = {
        base: e.base
    }, t = { ...t,
        base: ``
    });
    let r = e.slots;
    if (r && typeof r == `object`) {
        let e = Object.entries(r).filter(([, e]) => typeof e == `function`);
        if (e.length) {
            n ? ? = {};
            let i = { ...r
            };
            for (let [t, r] of e) n[t] = r, i[t] = ``;
            t = { ...t,
                slots: i
            }
        }
    }
    return {
        config: t,
        directives: n
    }
}
var $t = (e => {
    let {
        config: t,
        directives: n
    } = Qt(e), r = Jt(t);
    return new Proxy(r, {
        apply(e, t, r) {
            let i = Reflect.apply(e, t, r);
            if (i && typeof i == `object`) return Zt(i, n);
            if (typeof i == `string`) {
                let i = r[0] ? ? {},
                    a = $(i.class) ? ? $(i.className) ? ? n ? .base;
                if (a) return Xt(a, i, () => Reflect.apply(e, t, [{ ...i,
                    class: void 0,
                    className: void 0
                }]))
            }
            return i
        }
    })
});
export {
    f as S, ee as _, ae as a, v as b, O as c, C as d, T as f, ie as g, w as h, F as i, D as l, re as m, M as n, A as o, E as p, se as r, k as s, $t as t, te as u, S as v, m as x, x as y
};