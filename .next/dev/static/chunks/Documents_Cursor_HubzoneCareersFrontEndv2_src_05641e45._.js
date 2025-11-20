(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "b802ea7e3e3b6481fbda6eba08a406753f085e49e4c2b055134a221e940fb7ba") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b802ea7e3e3b6481fbda6eba08a406753f085e49e4c2b055134a221e940fb7ba";
    }
    let className;
    let props;
    let size;
    let t1;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, size, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = size;
        $[5] = t1;
        $[6] = variant;
    } else {
        className = $[2];
        props = $[3];
        size = $[4];
        t1 = $[5];
        variant = $[6];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    let t2;
    if ($[7] !== className || $[8] !== size || $[9] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        }));
        $[7] = className;
        $[8] = size;
        $[9] = variant;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== Comp || $[12] !== props || $[13] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/button.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[11] = Comp;
        $[12] = props;
        $[13] = t2;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    return t3;
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "c454c119c515a6be93f8c8a8070a94d19217e458a72ae5aa00ed23f1509b43ce") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c454c119c515a6be93f8c8a8070a94d19217e458a72ae5aa00ed23f1509b43ce";
    }
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggle[useEffect()]": ()=>{
                const id = requestAnimationFrame({
                    "ThemeToggle[useEffect() > requestAnimationFrame()]": ()=>setMounted(true)
                }["ThemeToggle[useEffect() > requestAnimationFrame()]"]);
                return ()=>cancelAnimationFrame(id);
            }
        })["ThemeToggle[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!mounted) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                className: "h-9 w-9 rounded-full border border-border/50",
                "aria-label": "Toggle theme",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/theme-toggle.tsx",
                    lineNumber: 43,
                    columnNumber: 131
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/theme-toggle.tsx",
                lineNumber: 43,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    const isDark = theme === "dark";
    let t2;
    if ($[4] !== isDark || $[5] !== setTheme) {
        t2 = ({
            "ThemeToggle[<Button>.onClick]": ()=>setTheme(isDark ? "light" : "dark")
        })["ThemeToggle[<Button>.onClick]"];
        $[4] = isDark;
        $[5] = setTheme;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== isDark) {
        t3 = isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/theme-toggle.tsx",
            lineNumber: 64,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/theme-toggle.tsx",
            lineNumber: 64,
            columnNumber: 49
        }, this);
        $[7] = isDark;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t2 || $[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            className: "h-9 w-9 rounded-full border border-border/50",
            "aria-label": "Toggle theme",
            onClick: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/theme-toggle.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    return t4;
}
_s(ThemeToggle, "QzD9o/ztWUlpI51A2uKjoxDGfZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/workflow-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkflowToggle",
    ()=>WorkflowToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/shuffle.js [app-client] (ecmascript) <export default as Shuffle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WorkflowToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "b33376541914574b936e6537d5d19709d30c6cc1a5273e3ea09bfb66e5cca880") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b33376541914574b936e6537d5d19709d30c6cc1a5273e3ea09bfb66e5cca880";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isApplicant = pathname.startsWith("/applicant");
    const target = isApplicant ? "/employer" : "/applicant";
    const label = isApplicant ? "Switch to Employer" : "Switch to Applicant";
    let t0;
    if ($[1] !== router || $[2] !== target) {
        t0 = ({
            "WorkflowToggle[<Button>.onClick]": ()=>router.push(target)
        })["WorkflowToggle[<Button>.onClick]"];
        $[1] = router;
        $[2] = target;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    let t1;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/workflow-toggle.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== label || $[6] !== t0) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            className: "gap-2",
            onClick: t0,
            "aria-label": label,
            children: [
                t1,
                label
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/workflow-toggle.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = label;
        $[6] = t0;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return t2;
}
_s(WorkflowToggle, "gA9e4WsoP6a20xDgQgrFkfMP8lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = WorkflowToggle;
var _c;
__turbopack_context__.k.register(_c, "WorkflowToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71";
    }
    let children;
    let className;
    let inset;
    let props;
    if ($[1] !== t0) {
        ({ className, inset, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = inset;
        $[5] = props;
    } else {
        children = $[2];
        className = $[3];
        inset = $[4];
        props = $[5];
    }
    const t1 = inset && "pl-8";
    let t2;
    if ($[6] !== className || $[7] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", t1, className);
        $[6] = className;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "ml-auto h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== children || $[11] !== props || $[12] !== ref || $[13] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
            ref: ref,
            className: t2,
            ...props,
            children: [
                children,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = children;
        $[11] = props;
        $[12] = ref;
        $[13] = t2;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    return t4;
});
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== ref || $[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
            ref: ref,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = ref;
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
});
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, sideOffset: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const sideOffset = t1 === undefined ? 4 : t1;
    let t2;
    if ($[5] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className);
        $[5] = className;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== ref || $[9] !== sideOffset || $[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                sideOffset: sideOffset,
                className: t2,
                ...props
            }, void 0, false, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
                lineNumber: 157,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 157,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = props;
        $[8] = ref;
        $[9] = sideOffset;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
});
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71";
    }
    let className;
    let inset;
    let props;
    if ($[1] !== t0) {
        ({ className, inset, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = inset;
        $[4] = props;
    } else {
        className = $[2];
        inset = $[3];
        props = $[4];
    }
    const t1 = inset && "pl-8";
    let t2;
    if ($[5] !== className || $[6] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t1, className);
        $[5] = className;
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== props || $[9] !== ref || $[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
            ref: ref,
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 209,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = props;
        $[9] = ref;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
});
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71";
    }
    let checked;
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, checked, ...props } = t0);
        $[1] = t0;
        $[2] = checked;
        $[3] = children;
        $[4] = className;
        $[5] = props;
    } else {
        checked = $[2];
        children = $[3];
        className = $[4];
        props = $[5];
    }
    let t1;
    if ($[6] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className);
        $[6] = className;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 260,
                    columnNumber: 126
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
                lineNumber: 260,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 260,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== checked || $[10] !== children || $[11] !== props || $[12] !== ref || $[13] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
            ref: ref,
            className: t1,
            checked: checked,
            ...props,
            children: [
                t2,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 267,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = checked;
        $[10] = children;
        $[11] = props;
        $[12] = ref;
        $[13] = t1;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    return t3;
});
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                    className: "h-2 w-2 fill-current"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 316,
                    columnNumber: 126
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
                lineNumber: 316,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 316,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== children || $[9] !== props || $[10] !== ref || $[11] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
            ref: ref,
            className: t1,
            ...props,
            children: [
                t2,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 323,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = children;
        $[9] = props;
        $[10] = ref;
        $[11] = t1;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
});
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71";
    }
    let className;
    let inset;
    let props;
    if ($[1] !== t0) {
        ({ className, inset, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = inset;
        $[4] = props;
    } else {
        className = $[2];
        inset = $[3];
        props = $[4];
    }
    const t1 = inset && "pl-8";
    let t2;
    if ($[5] !== className || $[6] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", t1, className);
        $[5] = className;
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== props || $[9] !== ref || $[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            ref: ref,
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 375,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = props;
        $[9] = ref;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
});
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = (t0, ref)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== ref || $[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            ref: ref,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 418,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = ref;
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
});
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "934f5ab0c7bee410b78ee5d0bd32e8db76c720928054725adcdd0025dcb73e71";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx",
            lineNumber: 461,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DropdownMenuSubContent");
__turbopack_context__.k.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "DropdownMenuContent");
__turbopack_context__.k.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c7, "DropdownMenuItem");
__turbopack_context__.k.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_context__.k.register(_c11, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_context__.k.register(_c13, "DropdownMenuLabel");
__turbopack_context__.k.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_context__.k.register(_c15, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c16, "DropdownMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Avatar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "af3322cffb6a477a8ea8c662f1fecc361a6a733805b6d5974446305dd6226c48") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "af3322cffb6a477a8ea8c662f1fecc361a6a733805b6d5974446305dd6226c48";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex size-8 shrink-0 overflow-hidden rounded-full", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "avatar",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/avatar.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Avatar;
function AvatarImage(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "af3322cffb6a477a8ea8c662f1fecc361a6a733805b6d5974446305dd6226c48") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "af3322cffb6a477a8ea8c662f1fecc361a6a733805b6d5974446305dd6226c48";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
            "data-slot": "avatar-image",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/avatar.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = AvatarImage;
function AvatarFallback(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "af3322cffb6a477a8ea8c662f1fecc361a6a733805b6d5974446305dd6226c48") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "af3322cffb6a477a8ea8c662f1fecc361a6a733805b6d5974446305dd6226c48";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex size-full items-center justify-center rounded-full", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
            "data-slot": "avatar-fallback",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/avatar.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = AvatarFallback;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "AvatarImage");
__turbopack_context__.k.register(_c2, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProfileMenu",
    ()=>UserProfileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/auth/cookie-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function UserProfileMenu(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "2c6f7e0213fcbb8fefad811090a8e75033043737eb24fcb8d37e4c2bcd134c4b") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c6f7e0213fcbb8fefad811090a8e75033043737eb24fcb8d37e4c2bcd134c4b";
    }
    const { firstName: t1, lastName: t2, email, profilePicture, className, dashboardPath: t3, profilePath: t4, settingsPath: t5, logoutRedirectPath: t6 } = t0;
    const firstName = t1 === undefined ? "User" : t1;
    const lastName = t2 === undefined ? "" : t2;
    const dashboardPath = t3 === undefined ? "/applicant/dashboard" : t3;
    const profilePath = t4 === undefined ? "/applicant/dashboard/profile" : t4;
    const settingsPath = t5 === undefined ? "/applicant/dashboard/settings" : t5;
    const logoutRedirectPath = t6 === undefined ? "/applicant" : t6;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t7;
    let t8;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "UserProfileMenu[useEffect()]": ()=>{
                setMounted(true);
            }
        })["UserProfileMenu[useEffect()]"];
        t8 = [];
        $[1] = t7;
        $[2] = t8;
    } else {
        t7 = $[1];
        t8 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[3] !== logoutRedirectPath || $[4] !== router) {
        t9 = ({
            "UserProfileMenu[handleLogout]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].clear();
                if ("TURBOPACK compile-time truthy", 1) {
                    window.dispatchEvent(new Event("authChanged"));
                }
                router.push(logoutRedirectPath);
            }
        })["UserProfileMenu[handleLogout]"];
        $[3] = logoutRedirectPath;
        $[4] = router;
        $[5] = t9;
    } else {
        t9 = $[5];
    }
    const handleLogout = t9;
    let t10;
    if ($[6] !== email || $[7] !== firstName || $[8] !== lastName) {
        t10 = ({
            "UserProfileMenu[getInitials]": ()=>{
                if (firstName && lastName) {
                    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
                }
                if (firstName) {
                    return firstName.charAt(0).toUpperCase();
                }
                if (email) {
                    return email.charAt(0).toUpperCase();
                }
                return "U";
            }
        })["UserProfileMenu[getInitials]"];
        $[6] = email;
        $[7] = firstName;
        $[8] = lastName;
        $[9] = t10;
    } else {
        t10 = $[9];
    }
    const getInitials = t10;
    if (!mounted) {
        return null;
    }
    const displayName = firstName && lastName ? `${firstName} ${lastName}` : firstName || email || "User";
    let t11;
    if ($[10] !== className) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-10 w-10 rounded-full p-0", className);
        $[10] = className;
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] !== displayName || $[13] !== getInitials || $[14] !== profilePicture) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
            className: "h-10 w-10 ring-2 ring-primary/20 ring-offset-2 ring-offset-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: profilePicture ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                        src: profilePicture,
                        alt: displayName
                    }, void 0, false, {
                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                        lineNumber: 130,
                        columnNumber: 12
                    }, this)
                }, "image", false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                    lineNumber: 124,
                    columnNumber: 148
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary/60 text-sm font-semibold text-primary-foreground",
                    children: getInitials()
                }, "initial", false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                    lineNumber: 130,
                    columnNumber: 82
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                lineNumber: 124,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[12] = displayName;
        $[13] = getInitials;
        $[14] = profilePicture;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                boxShadow: [
                    "0 0 0 0 rgba(37, 99, 235, 0.4)",
                    "0 0 0 4px rgba(37, 99, 235, 0)",
                    "0 0 0 0 rgba(37, 99, 235, 0)"
                ]
            },
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            },
            className: "absolute inset-0 rounded-full"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t11 || $[18] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                className: t11,
                "aria-label": "User menu",
                children: [
                    t12,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                lineNumber: 162,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t12;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== dashboardPath || $[21] !== displayName || $[22] !== email || $[23] !== getInitials || $[24] !== handleLogout || $[25] !== isOpen || $[26] !== profilePath || $[27] !== profilePicture || $[28] !== settingsPath) {
        t15 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
            align: "end",
            className: "w-72 rounded-xl border border-border/80 bg-background/95 p-2 shadow-xl backdrop-blur-xl",
            sideOffset: 8,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                        className: "p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                    className: "h-12 w-12 ring-2 ring-primary/20 ring-offset-2 ring-offset-background flex-shrink-0",
                                    children: [
                                        profilePicture ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: profilePicture,
                                            alt: displayName
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                            lineNumber: 180,
                                            columnNumber: 208
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            className: "bg-gradient-to-br from-primary to-primary/60 text-base font-semibold text-primary-foreground",
                                            children: getInitials()
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                            lineNumber: 180,
                                            columnNumber: 270
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                    lineNumber: 180,
                                    columnNumber: 86
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col space-y-0.5 min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold leading-none truncate",
                                            children: displayName
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                            lineNumber: 180,
                                            columnNumber: 490
                                        }, this),
                                        email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground leading-none break-all",
                                            children: email
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                            lineNumber: 180,
                                            columnNumber: 576
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                    lineNumber: 180,
                                    columnNumber: 432
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                            lineNumber: 180,
                            columnNumber: 45
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                        lineNumber: 180,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                        className: "my-2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                        lineNumber: 180,
                        columnNumber: 688
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                asChild: true,
                                className: "cursor-pointer rounded-lg transition-colors hover:bg-accent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: dashboardPath,
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                            lineNumber: 180,
                                            columnNumber: 922
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                            lineNumber: 180,
                                            columnNumber: 983
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                    lineNumber: 180,
                                    columnNumber: 862
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                lineNumber: 180,
                                columnNumber: 757
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                asChild: true,
                                className: "cursor-pointer rounded-lg transition-colors hover:bg-accent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: profilePath,
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                            lineNumber: 180,
                                            columnNumber: 1191
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                            lineNumber: 180,
                                            columnNumber: 1241
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                    lineNumber: 180,
                                    columnNumber: 1133
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                lineNumber: 180,
                                columnNumber: 1028
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                asChild: true,
                                className: "cursor-pointer rounded-lg transition-colors hover:bg-accent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: settingsPath,
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                            lineNumber: 180,
                                            columnNumber: 1448
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                            lineNumber: 180,
                                            columnNumber: 1502
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                    lineNumber: 180,
                                    columnNumber: 1389
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                lineNumber: 180,
                                columnNumber: 1284
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                        lineNumber: 180,
                        columnNumber: 730
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                        className: "my-2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                        lineNumber: 180,
                        columnNumber: 1552
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: handleLogout,
                        className: "cursor-pointer rounded-lg text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700 dark:text-red-400 dark:hover:bg-red-950/50 dark:hover:text-red-300 dark:focus:bg-red-950/50 dark:focus:text-red-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "mr-3 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                lineNumber: 180,
                                columnNumber: 1890
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Sign out"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                                lineNumber: 180,
                                columnNumber: 1925
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                        lineNumber: 180,
                        columnNumber: 1594
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
                lineNumber: 171,
                columnNumber: 169
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
            lineNumber: 171,
            columnNumber: 21
        }, this);
        $[20] = dashboardPath;
        $[21] = displayName;
        $[22] = email;
        $[23] = getInitials;
        $[24] = handleLogout;
        $[25] = isOpen;
        $[26] = profilePath;
        $[27] = profilePicture;
        $[28] = settingsPath;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t15
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== isOpen || $[33] !== t14 || $[34] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            open: isOpen,
            onOpenChange: setIsOpen,
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[32] = isOpen;
        $[33] = t14;
        $[34] = t16;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    return t17;
}
_s(UserProfileMenu, "d75DnVP5VHbNVxWw8+3b436OBGI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserProfileMenu;
var _c;
__turbopack_context__.k.register(_c, "UserProfileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/animated-logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedLogo",
    ()=>AnimatedLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnimatedLogo(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "48203db2a5e1f9c80400054ab29510b97c7db6012c0b2d121d4ca5d45571fa71") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48203db2a5e1f9c80400054ab29510b97c7db6012c0b2d121d4ca5d45571fa71";
    }
    let alt;
    let props;
    let src;
    let style;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ src, alt, width: t1, height: t2, className: t3, style, ...props } = t0);
        $[1] = t0;
        $[2] = alt;
        $[3] = props;
        $[4] = src;
        $[5] = style;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        alt = $[2];
        props = $[3];
        src = $[4];
        style = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
    }
    const width = t1 === undefined ? 48 : t1;
    const height = t2 === undefined ? 48 : t2;
    const className = t3 === undefined ? "h-12 w-auto object-contain" : t3;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "AnimatedLogo[useEffect()]": ()=>{
                setMounted(true);
            }
        })["AnimatedLogo[useEffect()]"];
        t5 = [];
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            filter: "none",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            borderRadius: "10px",
            boxShadow: "0 2px 12px rgba(25, 118, 210, 0.13)"
        };
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== mounted) {
        t7 = mounted ? {
            y: [
                0,
                -8,
                0
            ],
            scale: [
                1,
                1.05,
                1
            ],
            rotate: [
                0,
                2,
                -2,
                0
            ]
        } : {};
        $[12] = mounted;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            times: [
                0,
                0.5,
                1
            ]
        };
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = [
            0,
            5,
            -5,
            0
        ];
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            scale: 1.15,
            rotate: t9,
            boxShadow: "0 4px 16px rgba(25, 118, 210, 0.2)",
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        };
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== style) {
        t11 = {
            display: "block",
            objectFit: "contain",
            borderRadius: "10px",
            imageRendering: "crisp-edges",
            WebkitImageRendering: "crisp-edges",
            ...style
        };
        $[17] = style;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== alt || $[20] !== className || $[21] !== height || $[22] !== props || $[23] !== src || $[24] !== t11 || $[25] !== width) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            width: width,
            height: height,
            className: className,
            style: t11,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/animated-logo.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[19] = alt;
        $[20] = className;
        $[21] = height;
        $[22] = props;
        $[23] = src;
        $[24] = t11;
        $[25] = width;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)"
        };
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 rounded-full blur-xl opacity-0 pointer-events-none",
            style: t13,
            whileHover: {
                opacity: 0.6,
                scale: 1.3,
                transition: {
                    duration: 0.3
                }
            }
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/animated-logo.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t12 || $[30] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative inline-block isolate",
            style: t6,
            initial: false,
            animate: t7,
            transition: t8,
            whileHover: t10,
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/animated-logo.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t7;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    return t15;
}
_s(AnimatedLogo, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = AnimatedLogo;
var _c;
__turbopack_context__.k.register(_c, "AnimatedLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/api/applicant-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API utilities for applicant endpoints
 */ __turbopack_context__.s([
    "addEducation",
    ()=>addEducation,
    "addExperience",
    ()=>addExperience,
    "addSkill",
    ()=>addSkill,
    "deleteEducation",
    ()=>deleteEducation,
    "deleteExperience",
    ()=>deleteExperience,
    "deleteSkill",
    ()=>deleteSkill,
    "getApplicantProfile",
    ()=>getApplicantProfile,
    "updateApplicantProfile",
    ()=>updateApplicantProfile,
    "updateEducation",
    ()=>updateEducation,
    "updateExperience",
    ()=>updateExperience,
    "updateSkill",
    ()=>updateSkill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/auth/cookie-storage.ts [app-client] (ecmascript)");
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";
async function getApplicantProfile() {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicantuser/profile`;
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include"
        });
        if (!response.ok) {
            if (response.status === 401) {
                // Token expired or invalid
                throw new Error("Authentication failed. Please log in again.");
            }
            if (response.status === 404) {
                // Profile not found
                return null;
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to fetch profile");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching applicant profile:", error);
        throw error;
    }
}
async function updateApplicantProfile(profileData) {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/profile`;
        const response = await fetch(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include",
            body: JSON.stringify(profileData)
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please log in again.");
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to update profile");
        }
        const responseText = await response.text();
        // Backend returns "Profile updated successfully" string
        return profileData;
    } catch (error) {
        console.error("Error updating applicant profile:", error);
        throw error;
    }
}
async function addSkill(skillData) {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/skill`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include",
            body: JSON.stringify(skillData)
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please log in again.");
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to add skill");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error adding skill:", error);
        throw error;
    }
}
async function updateSkill(skillId, skillData) {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/skill/${skillId}`;
        const response = await fetch(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include",
            body: JSON.stringify(skillData)
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please log in again.");
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to update skill");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating skill:", error);
        throw error;
    }
}
async function deleteSkill(skillId) {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/skill/${skillId}`;
        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include"
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please log in again.");
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to delete skill");
        }
    } catch (error) {
        console.error("Error deleting skill:", error);
        throw error;
    }
}
async function addEducation(educationData) {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/education`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include",
            body: JSON.stringify(educationData)
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please log in again.");
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to add education");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error adding education:", error);
        throw error;
    }
}
async function updateEducation(educationId, educationData) {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/education/${educationId}`;
        const response = await fetch(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include",
            body: JSON.stringify(educationData)
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please log in again.");
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to update education");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating education:", error);
        throw error;
    }
}
async function deleteEducation(educationId) {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/education/${educationId}`;
        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include"
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please log in again.");
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to delete education");
        }
    } catch (error) {
        console.error("Error deleting education:", error);
        throw error;
    }
}
async function addExperience(experienceData) {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/experience`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include",
            body: JSON.stringify(experienceData)
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please log in again.");
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to add experience");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error adding experience:", error);
        throw error;
    }
}
async function updateExperience(experienceId, experienceData) {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/experience/${experienceId}`;
        const response = await fetch(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include",
            body: JSON.stringify(experienceData)
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please log in again.");
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to update experience");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating experience:", error);
        throw error;
    }
}
async function deleteExperience(experienceId) {
    if (!API_BASE_URL) {
        throw new Error("API base URL is not configured.");
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getToken();
    if (!token) {
        throw new Error("No authentication token found.");
    }
    try {
        const endpoint = `${API_BASE_URL}/api/v1/applicant/profile/experience/${experienceId}`;
        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            credentials: "include"
        });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Authentication failed. Please log in again.");
            }
            const errorText = await response.text();
            throw new Error(errorText || "Failed to delete experience");
        }
    } catch (error) {
        console.error("Error deleting experience:", error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationMenu",
    ()=>NavigationMenu,
    "NavigationMenuContent",
    ()=>NavigationMenuContent,
    "NavigationMenuIndicator",
    ()=>NavigationMenuIndicator,
    "NavigationMenuItem",
    ()=>NavigationMenuItem,
    "NavigationMenuLink",
    ()=>NavigationMenuLink,
    "NavigationMenuList",
    ()=>NavigationMenuList,
    "NavigationMenuTrigger",
    ()=>NavigationMenuTrigger,
    "NavigationMenuViewport",
    ()=>NavigationMenuViewport,
    "navigationMenuTriggerStyle",
    ()=>navigationMenuTriggerStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
function NavigationMenu(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, children, viewport: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const viewport = t1 === undefined ? true : t1;
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== viewport) {
        t3 = viewport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationMenuViewport, {}, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 48,
            columnNumber: 22
        }, this);
        $[8] = viewport;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== children || $[11] !== props || $[12] !== t2 || $[13] !== t3 || $[14] !== viewport) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "navigation-menu",
            "data-viewport": viewport,
            className: t2,
            ...props,
            children: [
                children,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[10] = children;
        $[11] = props;
        $[12] = t2;
        $[13] = t3;
        $[14] = viewport;
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    return t4;
}
_c = NavigationMenu;
function NavigationMenuList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex flex-1 list-none items-center justify-center gap-1", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
            "data-slot": "navigation-menu-list",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = NavigationMenuList;
function NavigationMenuItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
            "data-slot": "navigation-menu-item",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = NavigationMenuItem;
const navigationMenuTriggerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1");
function NavigationMenuTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(navigationMenuTriggerStyle(), "group", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 187,
            columnNumber: 10
        }, this);
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== children || $[9] !== props || $[10] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "navigation-menu-trigger",
            className: t1,
            ...props,
            children: [
                children,
                " ",
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = props;
        $[10] = t1;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
}
_c3 = NavigationMenuTrigger;
function NavigationMenuContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto", "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "navigation-menu-content",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 236,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = NavigationMenuContent;
function NavigationMenuViewport(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-full left-0 isolate z-50 flex justify-center");
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]", className);
        $[5] = className;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "navigation-menu-viewport",
                className: t2,
                ...props
            }, void 0, false, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
                lineNumber: 284,
                columnNumber: 30
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 284,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c5 = NavigationMenuViewport;
function NavigationMenuLink(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            "data-slot": "navigation-menu-link",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 325,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = NavigationMenuLink;
function NavigationMenuIndicator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc1ee5ae3dabc71ff531ab86b4f99868ee106b208bc45f1442181074dc44c323";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 366,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "navigation-menu-indicator",
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx",
            lineNumber: 373,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c7 = NavigationMenuIndicator;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "NavigationMenu");
__turbopack_context__.k.register(_c1, "NavigationMenuList");
__turbopack_context__.k.register(_c2, "NavigationMenuItem");
__turbopack_context__.k.register(_c3, "NavigationMenuTrigger");
__turbopack_context__.k.register(_c4, "NavigationMenuContent");
__turbopack_context__.k.register(_c5, "NavigationMenuViewport");
__turbopack_context__.k.register(_c6, "NavigationMenuLink");
__turbopack_context__.k.register(_c7, "NavigationMenuIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Sheet(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "sheet",
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Sheet;
function SheetTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "sheet-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = SheetTrigger;
function SheetClose(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "sheet-close",
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = SheetClose;
function SheetPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            "data-slot": "sheet-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = SheetPortal;
function SheetOverlay(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            "data-slot": "sheet-overlay",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = SheetOverlay;
function SheetContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, children, side: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const side = t1 === undefined ? "right" : t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const t3 = side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l-2 border-border/60 sm:max-w-sm";
    const t4 = side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm";
    const t5 = side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b";
    const t6 = side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t";
    let t7;
    if ($[7] !== className || $[8] !== t3 || $[9] !== t4 || $[10] !== t5 || $[11] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", t3, t4, t5, t6, className);
        $[7] = className;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
                    lineNumber: 217,
                    columnNumber: 279
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
                    lineNumber: 217,
                    columnNumber: 307
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 217,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== children || $[15] !== props || $[16] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    "data-slot": "sheet-content",
                    className: t7,
                    ...props,
                    children: [
                        children,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
                    lineNumber: 224,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 224,
            columnNumber: 10
        }, this);
        $[14] = children;
        $[15] = props;
        $[16] = t7;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    return t9;
}
_c5 = SheetContent;
function SheetHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "sheet-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 266,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = SheetHeader;
function SheetFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "sheet-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 307,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = SheetFooter;
function SheetTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
            "data-slot": "sheet-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 348,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c8 = SheetTitle;
function SheetDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b85daa147e951b0ef62e9348c73d2c60030a31ca8897a700dcc28c015e995b";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
            "data-slot": "sheet-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx",
            lineNumber: 389,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplicantHeader",
    ()=>ApplicantHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$layout$2f$workflow$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/workflow-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$layout$2f$user$2d$profile$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/user-profile-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$animated$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/animated-logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/auth/cookie-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$api$2f$applicant$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/api/applicant-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/navigation-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/sheet.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const NAV_ITEMS = [
    {
        href: "/applicant",
        label: "Home"
    },
    {
        href: "/applicant/careers",
        label: "Careers"
    },
    {
        href: "/applicant/companies",
        label: "Companies"
    },
    {
        href: "/applicant/resources",
        label: "Resources"
    },
    {
        href: "/applicant/ai-copilot",
        label: "Copilot"
    },
    {
        href: "/applicant/about",
        label: "About"
    },
    {
        href: "/applicant/faq",
        label: "FAQ"
    },
    {
        href: "/applicant/contact",
        label: "Contact"
    }
];
function ApplicantHeader() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3); // Mock notification count - replace with API call
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        profilePicture: null
    });
    const [isLoadingProfile, setIsLoadingProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check authentication status and fetch user profile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApplicantHeader.useEffect": ()=>{
            setMounted(true);
            const checkAuth = {
                "ApplicantHeader.useEffect.checkAuth": async ()=>{
                    const authenticated = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].isAuthenticated();
                    const role = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStorage"].getRole();
                    setIsAuthenticated(authenticated);
                    setUserRole(role);
                    // Fetch user profile if authenticated
                    if (authenticated && role === "APPLICANT_USER") {
                        setIsLoadingProfile(true);
                        try {
                            const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$api$2f$applicant$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApplicantProfile"])();
                            if (profile) {
                                setUserData({
                                    firstName: profile.firstName || undefined,
                                    lastName: profile.lastName || undefined,
                                    email: profile.email || undefined,
                                    profilePicture: profile.profilePicture || null
                                });
                            }
                        } catch (error) {
                            console.error("Failed to fetch user profile:", error);
                        // Keep default/empty user data on error
                        } finally{
                            setIsLoadingProfile(false);
                        }
                    } else {
                        // Reset user data when not authenticated
                        setUserData({
                            firstName: undefined,
                            lastName: undefined,
                            email: undefined,
                            profilePicture: null
                        });
                    }
                }
            }["ApplicantHeader.useEffect.checkAuth"];
            checkAuth();
            // Listen for auth changes (login/logout)
            const handleAuthChange = {
                "ApplicantHeader.useEffect.handleAuthChange": ()=>{
                    checkAuth();
                }
            }["ApplicantHeader.useEffect.handleAuthChange"];
            window.addEventListener("authChanged", handleAuthChange);
            return ({
                "ApplicantHeader.useEffect": ()=>{
                    window.removeEventListener("authChanged", handleAuthChange);
                }
            })["ApplicantHeader.useEffect"];
        }
    }["ApplicantHeader.useEffect"], []);
    const showWorkflowToggle = !isAuthenticated || userRole !== "APPLICANT_USER";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky inset-x-0 top-0 z-50 border-b border-border/60 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-xl shadow-sm shadow-primary/5 dark:shadow-primary/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50 dark:opacity-30"
            }, void 0, false, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/applicant",
                        className: "flex min-w-0 items-center gap-3 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$animated$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedLogo"], {
                            src: "/brand/hub_logo2.png",
                            alt: "Hubzone Careers",
                            width: 48,
                            height: 48,
                            className: "h-12 w-auto object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                            lineNumber: 119,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden flex-1 items-center justify-end gap-4 md:flex md:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenu"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuList"], {
                                    children: NAV_ITEMS.map((item)=>{
                                        const isActive = item.href === "/applicant" ? pathname === "/applicant" : pathname.startsWith(item.href);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuItem"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuLink"], {
                                                href: item.href,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-muted-foreground"),
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, this)
                                        }, item.href, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                            lineNumber: 127,
                                            columnNumber: 22
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            showWorkflowToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$layout$2f$workflow$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkflowToggle"], {}, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                lineNumber: 135,
                                columnNumber: 34
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            mounted && isAuthenticated && userRole === "APPLICANT_USER" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            delay: 0.3,
                                            type: "spring"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "relative",
                                            onClick: ()=>router.push("/applicant/dashboard/notifications"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                notifications > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    className: "absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[0.65rem] font-semibold text-primary-foreground",
                                                    children: notifications
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$layout$2f$user$2d$profile$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProfileMenu"], {
                                        firstName: userData.firstName,
                                        lastName: userData.lastName,
                                        email: userData.email,
                                        profilePicture: userData.profilePicture
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: !pathname.startsWith("/applicant/dashboard") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            variant: "outline",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/applicant/login",
                                                children: "Log in"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                lineNumber: 162,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/applicant/signup",
                                                children: "Join Now"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 md:hidden",
                        children: [
                            showWorkflowToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$layout$2f$workflow$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkflowToggle"], {}, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                lineNumber: 172,
                                columnNumber: 34
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            mounted && isAuthenticated && userRole === "APPLICANT_USER" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "relative",
                                        onClick: ()=>router.push("/applicant/dashboard/notifications"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            notifications > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[0.65rem] font-semibold text-primary-foreground",
                                                children: notifications
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                lineNumber: 178,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$layout$2f$user$2d$profile$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProfileMenu"], {
                                        firstName: userData.firstName,
                                        lastName: userData.lastName,
                                        email: userData.email,
                                        profilePicture: userData.profilePicture
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                                open: open,
                                onOpenChange: setOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            "aria-label": "Open navigation",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                        side: "right",
                                        className: "w-72",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4 pt-10",
                                            children: [
                                                NAV_ITEMS.map((item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item_0.href,
                                                        onClick: ()=>setOpen(false),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-medium transition-colors hover:text-primary", pathname.startsWith(item_0.href) ? "text-primary" : "text-muted-foreground"),
                                                        children: item_0.label
                                                    }, item_0.href, false, {
                                                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 44
                                                    }, this)),
                                                !isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            asChild: true,
                                                            variant: "outline",
                                                            onClick: ()=>setOpen(false),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/applicant/login",
                                                                children: "Log in"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            asChild: true,
                                                            onClick: ()=>setOpen(false),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/applicant/signup",
                                                                children: "Join Now"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                                lineNumber: 183,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-header.tsx",
        lineNumber: 115,
        columnNumber: 10
    }, this);
}
_s(ApplicantHeader, "ktvzGn43zvYRB2K6GzQsTZg9uPc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ApplicantHeader;
var _c;
__turbopack_context__.k.register(_c, "ApplicantHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Input(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "447c43d4b753cfece5e3fe0a7ab5d95756ce45e88a83f2b457989222bede9559") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "447c43d4b753cfece5e3fe0a7ab5d95756ce45e88a83f2b457989222bede9559";
    }
    let className;
    let props;
    let type;
    if ($[1] !== t0) {
        ({ className, type, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = type;
    } else {
        className = $[2];
        props = $[3];
        type = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== props || $[8] !== t1 || $[9] !== type) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: type,
            "data-slot": "input",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/input.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t1;
        $[9] = type;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function Dialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "dialog",
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = Dialog;
function DialogTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "dialog-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = DialogTrigger;
function DialogPortal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            "data-slot": "dialog-portal",
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = DialogPortal;
function DialogClose(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "dialog-close",
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c3 = DialogClose;
function DialogOverlay(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
            "data-slot": "dialog-overlay",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = DialogOverlay;
function DialogContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, children, showCloseButton: t1, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const showCloseButton = t1 === undefined ? true : t1;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const findDialogTitle = {
        "DialogContent[findDialogTitle]": (children_0)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children_0).some({
                "DialogContent[findDialogTitle > (anonymous)()]": (child)=>{
                    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child)) {
                        return false;
                    }
                    const componentName = child.type?.displayName || child.type?.name;
                    if (componentName === "DialogTitle" || child.type === DialogTitle) {
                        return true;
                    }
                    if (child.type === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"]) {
                        return true;
                    }
                    if (child.props?.children) {
                        return findDialogTitle(child.props.children);
                    }
                    return false;
                }
            }["DialogContent[findDialogTitle > (anonymous)()]"])
    }["DialogContent[findDialogTitle]"];
    const hasTitle = findDialogTitle(children);
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 216,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className);
        $[7] = className;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const t4 = hasTitle ? "sr-only" : "";
    const t5 = hasTitle ? "" : "Dialog";
    let t6;
    if ($[9] !== t4 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogTitle, {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 233,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== showCloseButton) {
        t7 = showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            "data-slot": "dialog-close",
            className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
                    lineNumber: 242,
                    columnNumber: 443
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
                    lineNumber: 242,
                    columnNumber: 452
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 242,
            columnNumber: 29
        }, this);
        $[12] = showCloseButton;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== children || $[15] !== props || $[16] !== t3 || $[17] !== t6 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
            "data-slot": "dialog-portal",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    "data-slot": "dialog-content",
                    className: t3,
                    ...props,
                    children: [
                        t6,
                        children,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
                    lineNumber: 250,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 250,
            columnNumber: 10
        }, this);
        $[14] = children;
        $[15] = props;
        $[16] = t3;
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
}
_c5 = DialogContent;
function DialogHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 294,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = DialogHeader;
function DialogFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "dialog-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 335,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c7 = DialogFooter;
function DialogTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
            "data-slot": "dialog-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 376,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c8 = DialogTitle;
function DialogDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1ac628cde2c5ce1aa505228ff62eba4030ee31e933ba64f0bd9135e4631ed41";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
            "data-slot": "dialog-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx",
            lineNumber: 417,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrivacyPolicy",
    ()=>PrivacyPolicy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function PrivacyPolicy() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "b221a9d0b8da763dcfd6bc8af0950f48d74c3de41cba11b2b159a415a51af1f3") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b221a9d0b8da763dcfd6bc8af0950f48d74c3de41cba11b2b159a415a51af1f3";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "This Privacy Policy explains how HUBZone Careers collects, uses, and protects your personal information when you use our website and services."
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 12,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "1. Information We Collect"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-foreground",
                                    children: "Employers:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                                    lineNumber: 26,
                                    columnNumber: 97
                                }, this),
                                " Name, company name, email, billing address, job posting content."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 26,
                            columnNumber: 94
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-foreground",
                                    children: "Job Seekers:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                                    lineNumber: 26,
                                    columnNumber: 224
                                }, this),
                                " Name, email, resume, application details."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 26,
                            columnNumber: 221
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-foreground",
                                    children: "Payments:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                                    lineNumber: 26,
                                    columnNumber: 330
                                }, this),
                                " We do not store credit card data. All payments are securely processed via Stripe."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 26,
                            columnNumber: 327
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 26,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "2. How We Use Information"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside space-y-1 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "To deliver job posting and application services"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 40,
                            columnNumber: 115
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "To process payments and provide invoices"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 40,
                            columnNumber: 171
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "To communicate with users via email (account updates, notifications)"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 40,
                            columnNumber: 220
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 40,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "3. Data Sharing"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "We do not sell or rent your personal information. We may share it with:"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside space-y-1 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Stripe (for payment processing)"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 58,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Law enforcement if legally required"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 58,
                            columnNumber: 159
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Third-party tools (e.g., email services, analytics) only under strict confidentiality"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 58,
                            columnNumber: 203
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 58,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "4. Cookies & Tracking"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "We use cookies for:"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside space-y-1 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Session management"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 76,
                            columnNumber: 120
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Analytics (e.g., Google Analytics)"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 76,
                            columnNumber: 147
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Improving user experience"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 76,
                            columnNumber: 190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 76,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "You can disable cookies in your browser, though this may affect functionality."
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 76,
                    columnNumber: 229
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 76,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: "5. Data Security"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 83,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "We implement industry-standard security protocols to protect your data, including encryption and secure access controls."
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 83,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 83,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "6. Your Rights"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 91,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "You may request:"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "list-disc list-inside space-y-1 text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "A copy of your data"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 101,
                    columnNumber: 81
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Correction or deletion of your account"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 101,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: "Opt-out from marketing emails"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 101,
                    columnNumber: 156
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                t12,
                t13,
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: [
                        "To request, email:",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:privacy@hubzonecareers.com",
                            className: "text-primary hover:underline",
                            children: "privacy@hubzonecareers.com"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 108,
                            columnNumber: 117
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 108,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: "7. Children's Privacy"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 115,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "HUBZone Careers is not intended for children under 16. We do not knowingly collect personal data from minors."
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 115,
                    columnNumber: 106
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: "8. Changes to This Policy"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 122,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "We may update this Privacy Policy from time to time. We will notify users via email or website notice."
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 122,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    let t19;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "9. Contact"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "Questions?"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[19] = t18;
        $[20] = t19;
    } else {
        t18 = $[19];
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 text-sm text-foreground",
            children: [
                t0,
                t2,
                t4,
                t7,
                t10,
                t11,
                t15,
                t16,
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-3",
                    children: [
                        t18,
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:privacy@hubzonecareers.com",
                                className: "text-primary hover:underline",
                                children: "privacy@hubzonecareers.com"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                                lineNumber: 140,
                                columnNumber: 181
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                            lineNumber: 140,
                            columnNumber: 144
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
                    lineNumber: 140,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    return t20;
}
_c = PrivacyPolicy;
var _c;
__turbopack_context__.k.register(_c, "PrivacyPolicy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TermsOfService",
    ()=>TermsOfService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function TermsOfService() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "9b74df07cfa1284a3ec2e3c6c2a9938a7363cf67a9806e44992854d3527731a1") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b74df07cfa1284a3ec2e3c6c2a9938a7363cf67a9806e44992854d3527731a1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "Welcome to HUBZone Careers, a job posting and recruitment platform for businesses and job seekers in the United States. By accessing or using our website (https://www.hubzonecareers.com), you agree to the following Terms of Use."
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 12,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "1. Use of the Site"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside space-y-1 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "You agree to use the site only for lawful purposes."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 26,
                            columnNumber: 115
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Employers may post jobs, manage listings, and view applicant data."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 26,
                            columnNumber: 175
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Job seekers may view, apply for, and track job applications."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 26,
                            columnNumber: 250
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "You must not post false, misleading, or inappropriate content."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 26,
                            columnNumber: 319
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 26,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "2. Account Responsibility"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside space-y-1 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "You are responsible for maintaining the confidentiality of your account login credentials."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 40,
                            columnNumber: 115
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "You agree not to share your login account access with others or impersonate another user."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 40,
                            columnNumber: 214
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 40,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "3. Payments and Refunds"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside space-y-1 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Payments for job postings and subscriptions are processed securely via Stripe."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 54,
                            columnNumber: 115
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "All payments are final. Refunds are issued only in the case of duplicate charges or platform errors."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 54,
                            columnNumber: 202
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Subscription plans renew automatically unless canceled prior to the billing date."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 54,
                            columnNumber: 311
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 54,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: "4. Intellectual Property"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 61,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "All content, logos, and platform technology are the intellectual property of HUBZone Careers and may not be copied or reused without permission."
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 61,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: "5. Termination"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 68,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "We reserve the right to suspend or terminate accounts that violate these Terms or misuse the platform."
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 68,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "6. Disclaimer"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside space-y-1 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "HUBZone Careers does not guarantee job placement or hiring outcomes."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 82,
                            columnNumber: 116
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: 'The platform is provided "as is" without warranty of any kind.'
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 82,
                            columnNumber: 193
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 82,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 82,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: "7. Governing Law"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 89,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "These Terms are governed by the laws of the State of Virginia, without regard to its conflict of law provisions."
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 89,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 89,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold",
            children: "8. Contact"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "For legal questions or support, please contact:"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 text-sm text-foreground",
            children: [
                t0,
                t2,
                t4,
                t6,
                t7,
                t8,
                t10,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-3",
                    children: [
                        t12,
                        t13,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:support@hubzonecareers.com",
                                className: "text-primary hover:underline",
                                children: "support@hubzonecareers.com"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                                lineNumber: 107,
                                columnNumber: 174
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                            lineNumber: 107,
                            columnNumber: 137
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
                    lineNumber: 107,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    return t14;
}
_c = TermsOfService;
var _c;
__turbopack_context__.k.register(_c, "TermsOfService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplicantFooter",
    ()=>ApplicantFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$legal$2f$privacy$2d$policy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/privacy-policy.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$legal$2f$terms$2d$of$2d$service$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/legal/terms-of-service.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const APPLICANT_FOOTER_LINKS = [
    {
        title: "For Job Seekers",
        links: [
            {
                href: "/applicant",
                label: "Home"
            },
            {
                href: "/applicant/careers",
                label: "Careers"
            },
            {
                href: "/applicant/companies",
                label: "Companies"
            }
        ]
    },
    {
        title: "Resources",
        links: [
            {
                href: "/applicant/resources",
                label: "Resources"
            },
            {
                href: "/applicant/ai-copilot",
                label: "AI Copilot"
            },
            {
                href: "/applicant/faq",
                label: "FAQ"
            }
        ]
    },
    {
        title: "About",
        links: [
            {
                href: "/applicant/about",
                label: "About Us"
            },
            {
                href: "/applicant/contact",
                label: "Contact"
            }
        ]
    }
];
function ApplicantFooter() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "f87765fed892a4b475f3d9d07fa68b1ce7b533c57be98e19ac878dd5b6ce3dd1") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f87765fed892a4b475f3d9d07fa68b1ce7b533c57be98e19ac878dd5b6ce3dd1";
    }
    const [privacyOpen, setPrivacyOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [termsOpen, setTermsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== email) {
        t0 = function handleNewsletterSubmit(e) {
            e.preventDefault();
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                return;
            }
            setIsSubmitting(true);
            setTimeout({
                "ApplicantFooter[handleNewsletterSubmit > setTimeout()]": ()=>{
                    alert("Thank you for subscribing! Check your email for confirmation.");
                    setEmail("");
                    setIsSubmitting(false);
                }
            }["ApplicantFooter[handleNewsletterSubmit > setTimeout()]"], 500);
        };
        $[1] = email;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleNewsletterSubmit = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50 dark:opacity-30"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold uppercase tracking-widest text-muted-foreground",
                            children: "Hubzone Careers"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                            lineNumber: 89,
                            columnNumber: 42
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 max-w-xs text-sm text-muted-foreground",
                            children: "Find your next opportunity in government contracting. AI-powered job matching and career guidance."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                            lineNumber: 89,
                            columnNumber: 152
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 89,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Copyright ©️ HUBZone Careers 2025"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 89,
                    columnNumber: 319
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Powered by Techathon Inc."
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 89,
                    columnNumber: 401
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        t3 = APPLICANT_FOOTER_LINKS.map(_ApplicantFooterAPPLICANT_FOOTER_LINKSMap);
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-foreground",
            children: "Legal"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto grid max-w-6xl gap-4 px-6 py-12 md:grid-cols-5 md:gap-6 md:px-10",
            children: [
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1.5 text-sm text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ApplicantFooter[<button>.onClick]": ()=>setPrivacyOpen(true)
                                        }["ApplicantFooter[<button>.onClick]"],
                                        className: "transition-colors hover:text-primary text-left",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                                        lineNumber: 106,
                                        columnNumber: 210
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                                    lineNumber: 106,
                                    columnNumber: 206
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ApplicantFooter[<button>.onClick]": ()=>setTermsOpen(true)
                                        }["ApplicantFooter[<button>.onClick]"],
                                        className: "transition-colors hover:text-primary text-left",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                                        lineNumber: 108,
                                        columnNumber: 144
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                                    lineNumber: 108,
                                    columnNumber: 140
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                            lineNumber: 106,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 106,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold text-foreground",
                    children: "Join the newsletter"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 117,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Subscribe for weekly updates. No spams ever!"
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 117,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "ApplicantFooter[<Input>.onChange]": (e_0)=>setEmail(e_0.target.value)
        })["ApplicantFooter[<Input>.onChange]"];
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== email) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            type: "email",
            placeholder: "Your email address",
            value: email,
            onChange: t7,
            className: "h-10 flex-1 text-sm",
            required: true
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[10] = email;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const t9 = isSubmitting ? "Subscribing..." : "Subscribe";
    let t10;
    if ($[12] !== isSubmitting || $[13] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            size: "default",
            className: "w-full md:w-auto md:whitespace-nowrap",
            disabled: isSubmitting,
            children: t9
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[12] = isSubmitting;
        $[13] = t9;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== handleNewsletterSubmit || $[16] !== t10 || $[17] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "relative border-t border-border/60 bg-gradient-to-b from-background via-background/95 to-background/90 shadow-lg shadow-primary/5 dark:shadow-primary/10",
            children: [
                t1,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto max-w-6xl border-t border-border/60 px-6 pt-8 md:px-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6",
                        children: [
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleNewsletterSubmit,
                                className: "flex flex-1 flex-col gap-3 md:flex-row md:items-center md:gap-3",
                                children: [
                                    t8,
                                    t10
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                                lineNumber: 151,
                                columnNumber: 378
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                        lineNumber: 151,
                        columnNumber: 281
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 151,
                    columnNumber: 192
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[15] = handleNewsletterSubmit;
        $[16] = t10;
        $[17] = t8;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            className: "text-3xl font-semibold",
            children: "Privacy Policy"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-h-[90vh] max-w-5xl overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: [
                                "Last updated: ",
                                new Date().toLocaleDateString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                            lineNumber: 168,
                            columnNumber: 96
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 168,
                    columnNumber: 77
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$legal$2f$privacy$2d$policy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivacyPolicy"], {}, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 168,
                    columnNumber: 197
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== privacyOpen) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: privacyOpen,
            onOpenChange: setPrivacyOpen,
            children: t13
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[21] = privacyOpen;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            className: "text-3xl font-semibold",
            children: "Terms of Service"
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-h-[90vh] max-w-5xl overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: [
                                "Last updated: ",
                                new Date().toLocaleDateString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                            lineNumber: 190,
                            columnNumber: 96
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 190,
                    columnNumber: 77
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$legal$2f$terms$2d$of$2d$service$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermsOfService"], {}, void 0, false, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                    lineNumber: 190,
                    columnNumber: 197
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== termsOpen) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: termsOpen,
            onOpenChange: setTermsOpen,
            children: t16
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[25] = termsOpen;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== t11 || $[28] !== t14 || $[29] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t11,
                t14,
                t17
            ]
        }, void 0, true);
        $[27] = t11;
        $[28] = t14;
        $[29] = t17;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    return t18;
}
_s(ApplicantFooter, "lA9rcbwirkq/VKQhXSKYlzOP1qs=");
_c = ApplicantFooter;
function _ApplicantFooterAPPLICANT_FOOTER_LINKSMap(section) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-foreground",
                children: section.title
            }, void 0, false, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                lineNumber: 216,
                columnNumber: 57
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-1.5 text-sm text-muted-foreground",
                children: section.links.map(_ApplicantFooterAPPLICANT_FOOTER_LINKSMapSectionLinksMap)
            }, void 0, false, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
                lineNumber: 216,
                columnNumber: 129
            }, this)
        ]
    }, section.title, true, {
        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
        lineNumber: 216,
        columnNumber: 10
    }, this);
}
function _ApplicantFooterAPPLICANT_FOOTER_LINKSMapSectionLinksMap(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: link.href,
            className: "transition-colors hover:text-primary",
            children: link.label
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
            lineNumber: 219,
            columnNumber: 30
        }, this)
    }, link.href, false, {
        fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/layout/applicant-footer.tsx",
        lineNumber: 219,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ApplicantFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/scroll-to-bottom.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollToBottom",
    ()=>ScrollToBottom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ScrollToBottom() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "11ac7c9a6ba2c9a90237ba5a14799244ed8ccf551abb08a03100c582f6a43b68") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11ac7c9a6ba2c9a90237ba5a14799244ed8ccf551abb08a03100c582f6a43b68";
    }
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, setIsAtBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ScrollToBottom[useEffect()]": ()=>{
                const handleScroll = {
                    "ScrollToBottom[useEffect() > handleScroll]": ()=>{
                        const windowHeight = window.innerHeight;
                        const documentHeight = document.documentElement.scrollHeight;
                        const scrollTop = window.scrollY || document.documentElement.scrollTop;
                        const scrollBottom = scrollTop + windowHeight;
                        const nearBottom = scrollBottom >= documentHeight - 100;
                        setIsAtBottom(nearBottom);
                        setIsVisible(!nearBottom && scrollTop > 300);
                    }
                }["ScrollToBottom[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                handleScroll();
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["ScrollToBottom[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const scrollToBottom = _ScrollToBottomScrollToBottom;
    let t2;
    if ($[3] !== isVisible) {
        t2 = isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20,
                scale: 0.8
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                y: 20,
                scale: 0.8
            },
            transition: {
                opacity: {
                    duration: 0.3
                },
                scale: {
                    duration: 0.3
                }
            },
            className: "fixed bottom-8 right-8 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    y: [
                        0,
                        -8,
                        0
                    ],
                    scale: [
                        1,
                        1.05,
                        1
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: scrollToBottom,
                    size: "icon",
                    className: "h-12 w-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 bg-primary hover:bg-primary/90 relative overflow-hidden",
                    "aria-label": "Scroll to bottom",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 rounded-full bg-primary/20",
                            animate: {
                                scale: [
                                    1,
                                    1.5,
                                    1
                                ],
                                opacity: [
                                    0.5,
                                    0,
                                    0.5
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/scroll-to-bottom.tsx",
                            lineNumber: 75,
                            columnNumber: 256
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                y: [
                                    0,
                                    3,
                                    0
                                ],
                                rotate: [
                                    0,
                                    5,
                                    -5,
                                    0
                                ]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            className: "relative z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/scroll-to-bottom.tsx",
                                lineNumber: 89,
                                columnNumber: 40
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/scroll-to-bottom.tsx",
                            lineNumber: 82,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/scroll-to-bottom.tsx",
                    lineNumber: 75,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/scroll-to-bottom.tsx",
                lineNumber: 68,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/scroll-to-bottom.tsx",
            lineNumber: 50,
            columnNumber: 23
        }, this);
        $[3] = isVisible;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Cursor$2f$HubzoneCareersFrontEndv2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t2
        }, void 0, false, {
            fileName: "[project]/Documents/Cursor/HubzoneCareersFrontEndv2/src/components/ui/scroll-to-bottom.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_s(ScrollToBottom, "a8xPMK++4GUlo8cGw65O1TbGGnk=");
_c = ScrollToBottom;
function _ScrollToBottomScrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    });
}
var _c;
__turbopack_context__.k.register(_c, "ScrollToBottom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Cursor_HubzoneCareersFrontEndv2_src_05641e45._.js.map