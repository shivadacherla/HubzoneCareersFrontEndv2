module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/providers/theme-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: "class",
        defaultTheme: "system",
        enableColorScheme: true,
        disableTransitionOnChange: true,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/providers/theme-provider.tsx",
        lineNumber: 8,
        columnNumber: 6
    }, this);
}
}),
"[project]/src/components/providers/query-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryProvider",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query-devtools/build/modern/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const DEFAULT_STALE_TIME = 1000 * 30;
function QueryProvider({ children }) {
    const [client] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    staleTime: DEFAULT_STALE_TIME,
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: true,
                    retry: 1
                }
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: client,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactQueryDevtools"], {
                initialIsOpen: false
            }, void 0, false, {
                fileName: "[project]/src/components/providers/query-provider.tsx",
                lineNumber: 28,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/providers/query-provider.tsx",
        lineNumber: 26,
        columnNumber: 6
    }, this);
}
}),
"[project]/src/lib/theme/presets.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "themePresets",
    ()=>themePresets
]);
const themePresets = [
    {
        name: "neutral",
        label: "Neutral Focus",
        light: {
            "--background": "oklch(1 0 0)",
            "--foreground": "oklch(0.145 0 0)",
            "--card": "oklch(1 0 0)",
            "--card-foreground": "oklch(0.145 0 0)",
            "--popover": "oklch(1 0 0)",
            "--popover-foreground": "oklch(0.145 0 0)",
            "--primary": "oklch(0.205 0 0)",
            "--primary-foreground": "oklch(0.985 0 0)",
            "--secondary": "oklch(0.97 0 0)",
            "--secondary-foreground": "oklch(0.205 0 0)",
            "--muted": "oklch(0.97 0 0)",
            "--muted-foreground": "oklch(0.556 0 0)",
            "--accent": "oklch(0.97 0 0)",
            "--accent-foreground": "oklch(0.205 0 0)",
            "--destructive": "oklch(0.577 0.245 27.325)",
            "--border": "oklch(0.922 0 0)",
            "--input": "oklch(0.922 0 0)",
            "--ring": "oklch(0.708 0 0)",
            "--chart-1": "oklch(0.646 0.222 41.116)",
            "--chart-2": "oklch(0.6 0.118 184.704)",
            "--chart-3": "oklch(0.398 0.07 227.392)",
            "--chart-4": "oklch(0.828 0.189 84.429)",
            "--chart-5": "oklch(0.769 0.188 70.08)",
            "--sidebar": "oklch(0.985 0 0)",
            "--sidebar-foreground": "oklch(0.145 0 0)",
            "--sidebar-primary": "oklch(0.205 0 0)",
            "--sidebar-primary-foreground": "oklch(0.985 0 0)",
            "--sidebar-accent": "oklch(0.97 0 0)",
            "--sidebar-accent-foreground": "oklch(0.205 0 0)",
            "--sidebar-border": "oklch(0.922 0 0)",
            "--sidebar-ring": "oklch(0.708 0 0)"
        },
        dark: {
            "--background": "oklch(0.145 0 0)",
            "--foreground": "oklch(0.985 0 0)",
            "--card": "oklch(0.205 0 0)",
            "--card-foreground": "oklch(0.985 0 0)",
            "--popover": "oklch(0.205 0 0)",
            "--popover-foreground": "oklch(0.985 0 0)",
            "--primary": "oklch(0.922 0 0)",
            "--primary-foreground": "oklch(0.205 0 0)",
            "--secondary": "oklch(0.269 0 0)",
            "--secondary-foreground": "oklch(0.985 0 0)",
            "--muted": "oklch(0.269 0 0)",
            "--muted-foreground": "oklch(0.708 0 0)",
            "--accent": "oklch(0.269 0 0)",
            "--accent-foreground": "oklch(0.985 0 0)",
            "--destructive": "oklch(0.704 0.191 22.216)",
            "--border": "oklch(1 0 0 / 10%)",
            "--input": "oklch(1 0 0 / 15%)",
            "--ring": "oklch(0.556 0 0)",
            "--chart-1": "oklch(0.488 0.243 264.376)",
            "--chart-2": "oklch(0.696 0.17 162.48)",
            "--chart-3": "oklch(0.769 0.188 70.08)",
            "--chart-4": "oklch(0.627 0.265 303.9)",
            "--chart-5": "oklch(0.645 0.246 16.439)",
            "--sidebar": "oklch(0.205 0 0)",
            "--sidebar-foreground": "oklch(0.985 0 0)",
            "--sidebar-primary": "oklch(0.488 0.243 264.376)",
            "--sidebar-primary-foreground": "oklch(0.985 0 0)",
            "--sidebar-accent": "oklch(0.269 0 0)",
            "--sidebar-accent-foreground": "oklch(0.985 0 0)",
            "--sidebar-border": "oklch(1 0 0 / 10%)",
            "--sidebar-ring": "oklch(0.556 0 0)"
        }
    },
    {
        name: "corporate-blue",
        label: "Corporate Blue",
        light: {
            "--background": "#F9FAFB",
            "--foreground": "#111827",
            "--card": "#FFFFFF",
            "--card-foreground": "#111827",
            "--popover": "#FFFFFF",
            "--popover-foreground": "#111827",
            "--primary": "#1E40AF",
            "--primary-foreground": "#F8FAFC",
            "--secondary": "#2563EB",
            "--secondary-foreground": "#F8FAFC",
            "--muted": "#E5E7EB",
            "--muted-foreground": "#4B5563",
            "--accent": "#FACC15",
            "--accent-foreground": "#172554",
            "--destructive": "#DC2626",
            "--border": "#D1D5DB",
            "--input": "#E5E7EB",
            "--ring": "#2563EB",
            "--chart-1": "#1D4ED8",
            "--chart-2": "#60A5FA",
            "--chart-3": "#FACC15",
            "--chart-4": "#9333EA",
            "--chart-5": "#10B981",
            "--sidebar": "#1E293B",
            "--sidebar-foreground": "#E2E8F0",
            "--sidebar-primary": "#2563EB",
            "--sidebar-primary-foreground": "#F8FAFC",
            "--sidebar-accent": "#1E293B",
            "--sidebar-accent-foreground": "#E5E7EB",
            "--sidebar-border": "#1E293B",
            "--sidebar-ring": "#2563EB"
        },
        dark: {
            "--background": "#0B1120",
            "--foreground": "#E2E8F0",
            "--card": "#111C2E",
            "--card-foreground": "#F8FAFC",
            "--popover": "#111C2E",
            "--popover-foreground": "#F8FAFC",
            "--primary": "#2563EB",
            "--primary-foreground": "#F8FAFC",
            "--secondary": "#1E40AF",
            "--secondary-foreground": "#E0E7FF",
            "--muted": "#1E293B",
            "--muted-foreground": "#94A3B8",
            "--accent": "#FACC15",
            "--accent-foreground": "#172554",
            "--destructive": "#F87171",
            "--border": "#1E293B",
            "--input": "#1E293B",
            "--ring": "#3B82F6",
            "--chart-1": "#3B82F6",
            "--chart-2": "#60A5FA",
            "--chart-3": "#FACC15",
            "--chart-4": "#A855F7",
            "--chart-5": "#34D399",
            "--sidebar": "#111C2E",
            "--sidebar-foreground": "#E2E8F0",
            "--sidebar-primary": "#2563EB",
            "--sidebar-primary-foreground": "#F8FAFC",
            "--sidebar-accent": "#172554",
            "--sidebar-accent-foreground": "#CBD5F5",
            "--sidebar-border": "#1E293B",
            "--sidebar-ring": "#3B82F6"
        }
    },
    {
        name: "emerald-tech",
        label: "Emerald Tech",
        light: {
            "--background": "#F3F4F6",
            "--foreground": "#1F2937",
            "--card": "#FFFFFF",
            "--card-foreground": "#1F2937",
            "--popover": "#FFFFFF",
            "--popover-foreground": "#1F2937",
            "--primary": "#047857",
            "--primary-foreground": "#ECFDF5",
            "--secondary": "#10B981",
            "--secondary-foreground": "#0B1120",
            "--muted": "#E5E7EB",
            "--muted-foreground": "#4B5563",
            "--accent": "#FBBF24",
            "--accent-foreground": "#1F2937",
            "--destructive": "#DC2626",
            "--border": "#D1D5DB",
            "--input": "#E5E7EB",
            "--ring": "#047857",
            "--chart-1": "#10B981",
            "--chart-2": "#34D399",
            "--chart-3": "#059669",
            "--chart-4": "#FBBF24",
            "--chart-5": "#0EA5E9",
            "--sidebar": "#0F172A",
            "--sidebar-foreground": "#ECFDF5",
            "--sidebar-primary": "#047857",
            "--sidebar-primary-foreground": "#ECFDF5",
            "--sidebar-accent": "#134E4A",
            "--sidebar-accent-foreground": "#A7F3D0",
            "--sidebar-border": "#134E4A",
            "--sidebar-ring": "#10B981"
        },
        dark: {
            "--background": "#0D1412",
            "--foreground": "#EAFAF3",
            "--card": "#10201C",
            "--card-foreground": "#EAFAF3",
            "--popover": "#10201C",
            "--popover-foreground": "#EAFAF3",
            "--primary": "#10B981",
            "--primary-foreground": "#03241C",
            "--secondary": "#047857",
            "--secondary-foreground": "#D1FAE5",
            "--muted": "#134E4A",
            "--muted-foreground": "#A7F3D0",
            "--accent": "#FBBF24",
            "--accent-foreground": "#1F2937",
            "--destructive": "#FB7185",
            "--border": "#134E4A",
            "--input": "#134E4A",
            "--ring": "#10B981",
            "--chart-1": "#34D399",
            "--chart-2": "#10B981",
            "--chart-3": "#059669",
            "--chart-4": "#FBBF24",
            "--chart-5": "#22D3EE",
            "--sidebar": "#0F1D19",
            "--sidebar-foreground": "#EAFAF3",
            "--sidebar-primary": "#10B981",
            "--sidebar-primary-foreground": "#03241C",
            "--sidebar-accent": "#134E4A",
            "--sidebar-accent-foreground": "#A7F3D0",
            "--sidebar-border": "#134E4A",
            "--sidebar-ring": "#10B981"
        }
    },
    {
        name: "royal-purple",
        label: "Royal Purple",
        light: {
            "--background": "#FAFAFA",
            "--foreground": "#111827",
            "--card": "#FFFFFF",
            "--card-foreground": "#111827",
            "--popover": "#FFFFFF",
            "--popover-foreground": "#111827",
            "--primary": "#4F46E5",
            "--primary-foreground": "#EEF2FF",
            "--secondary": "#6366F1",
            "--secondary-foreground": "#EEF2FF",
            "--muted": "#E5E7EB",
            "--muted-foreground": "#4B5563",
            "--accent": "#F59E0B",
            "--accent-foreground": "#1F2937",
            "--destructive": "#DC2626",
            "--border": "#E5E7EB",
            "--input": "#E5E7EB",
            "--ring": "#6366F1",
            "--chart-1": "#6366F1",
            "--chart-2": "#7C3AED",
            "--chart-3": "#F59E0B",
            "--chart-4": "#22D3EE",
            "--chart-5": "#EC4899",
            "--sidebar": "#1F1A3F",
            "--sidebar-foreground": "#E0E7FF",
            "--sidebar-primary": "#6366F1",
            "--sidebar-primary-foreground": "#EEF2FF",
            "--sidebar-accent": "#312E81",
            "--sidebar-accent-foreground": "#C7D2FE",
            "--sidebar-border": "#312E81",
            "--sidebar-ring": "#6366F1"
        },
        dark: {
            "--background": "#0F1022",
            "--foreground": "#E0E7FF",
            "--card": "#161636",
            "--card-foreground": "#E0E7FF",
            "--popover": "#161636",
            "--popover-foreground": "#E0E7FF",
            "--primary": "#6366F1",
            "--primary-foreground": "#1E1B4B",
            "--secondary": "#4F46E5",
            "--secondary-foreground": "#E0E7FF",
            "--muted": "#312E81",
            "--muted-foreground": "#C7D2FE",
            "--accent": "#F59E0B",
            "--accent-foreground": "#1F2937",
            "--destructive": "#F87171",
            "--border": "#312E81",
            "--input": "#312E81",
            "--ring": "#818CF8",
            "--chart-1": "#818CF8",
            "--chart-2": "#A855F7",
            "--chart-3": "#F59E0B",
            "--chart-4": "#06B6D4",
            "--chart-5": "#EC4899",
            "--sidebar": "#161636",
            "--sidebar-foreground": "#C7D2FE",
            "--sidebar-primary": "#6366F1",
            "--sidebar-primary-foreground": "#1E1B4B",
            "--sidebar-accent": "#312E81",
            "--sidebar-accent-foreground": "#E0E7FF",
            "--sidebar-border": "#2E2D5A",
            "--sidebar-ring": "#818CF8"
        }
    },
    {
        name: "neutral-executive",
        label: "Neutral Executive",
        light: {
            "--background": "#FFFFFF",
            "--foreground": "#111827",
            "--card": "#FFFFFF",
            "--card-foreground": "#111827",
            "--popover": "#FFFFFF",
            "--popover-foreground": "#111827",
            "--primary": "#111827",
            "--primary-foreground": "#F9FAFB",
            "--secondary": "#374151",
            "--secondary-foreground": "#F9FAFB",
            "--muted": "#F3F4F6",
            "--muted-foreground": "#4B5563",
            "--accent": "#2563EB",
            "--accent-foreground": "#F8FAFC",
            "--destructive": "#B91C1C",
            "--border": "#E5E7EB",
            "--input": "#E5E7EB",
            "--ring": "#2563EB",
            "--chart-1": "#2563EB",
            "--chart-2": "#64748B",
            "--chart-3": "#0EA5E9",
            "--chart-4": "#6B7280",
            "--chart-5": "#111827",
            "--sidebar": "#111827",
            "--sidebar-foreground": "#E5E7EB",
            "--sidebar-primary": "#2563EB",
            "--sidebar-primary-foreground": "#F8FAFC",
            "--sidebar-accent": "#1F2937",
            "--sidebar-accent-foreground": "#E5E7EB",
            "--sidebar-border": "#1F2937",
            "--sidebar-ring": "#2563EB"
        },
        dark: {
            "--background": "#0B0F19",
            "--foreground": "#E5E7EB",
            "--card": "#10131F",
            "--card-foreground": "#E5E7EB",
            "--popover": "#10131F",
            "--popover-foreground": "#E5E7EB",
            "--primary": "#F3F4F6",
            "--primary-foreground": "#111827",
            "--secondary": "#1F2937",
            "--secondary-foreground": "#E5E7EB",
            "--muted": "#1F2937",
            "--muted-foreground": "#9CA3AF",
            "--accent": "#3B82F6",
            "--accent-foreground": "#0B1120",
            "--destructive": "#FCA5A5",
            "--border": "#1F2937",
            "--input": "#1F2937",
            "--ring": "#2563EB",
            "--chart-1": "#3B82F6",
            "--chart-2": "#0EA5E9",
            "--chart-3": "#6B7280",
            "--chart-4": "#94A3B8",
            "--chart-5": "#F3F4F6",
            "--sidebar": "#0B0F19",
            "--sidebar-foreground": "#E5E7EB",
            "--sidebar-primary": "#2563EB",
            "--sidebar-primary-foreground": "#F8FAFC",
            "--sidebar-accent": "#111827",
            "--sidebar-accent-foreground": "#E5E7EB",
            "--sidebar-border": "#1F2937",
            "--sidebar-ring": "#2563EB"
        }
    },
    {
        name: "warm-trust",
        label: "Warm Trust",
        light: {
            "--background": "#FFF7ED",
            "--foreground": "#1F2937",
            "--card": "#FFFFFF",
            "--card-foreground": "#1F2937",
            "--popover": "#FFFFFF",
            "--popover-foreground": "#1F2937",
            "--primary": "#EA580C",
            "--primary-foreground": "#FEF3C7",
            "--secondary": "#FB923C",
            "--secondary-foreground": "#1F2937",
            "--muted": "#FFE7D3",
            "--muted-foreground": "#7C2D12",
            "--accent": "#2563EB",
            "--accent-foreground": "#F8FAFC",
            "--destructive": "#B91C1C",
            "--border": "#FED7AA",
            "--input": "#FED7AA",
            "--ring": "#FB923C",
            "--chart-1": "#EA580C",
            "--chart-2": "#FB923C",
            "--chart-3": "#FACC15",
            "--chart-4": "#2563EB",
            "--chart-5": "#10B981",
            "--sidebar": "#7C2D12",
            "--sidebar-foreground": "#FEEEDA",
            "--sidebar-primary": "#EA580C",
            "--sidebar-primary-foreground": "#FEF3C7",
            "--sidebar-accent": "#FB923C",
            "--sidebar-accent-foreground": "#1F2937",
            "--sidebar-border": "#9A3412",
            "--sidebar-ring": "#EA580C"
        },
        dark: {
            "--background": "#2D160A",
            "--foreground": "#FEEEDA",
            "--card": "#3C1D0D",
            "--card-foreground": "#FEEEDA",
            "--popover": "#3C1D0D",
            "--popover-foreground": "#FEEEDA",
            "--primary": "#FB923C",
            "--primary-foreground": "#2D160A",
            "--secondary": "#EA580C",
            "--secondary-foreground": "#FFF7ED",
            "--muted": "#9A3412",
            "--muted-foreground": "#FED7AA",
            "--accent": "#60A5FA",
            "--accent-foreground": "#0B1120",
            "--destructive": "#F87171",
            "--border": "#9A3412",
            "--input": "#9A3412",
            "--ring": "#FB923C",
            "--chart-1": "#FB923C",
            "--chart-2": "#F97316",
            "--chart-3": "#FACC15",
            "--chart-4": "#3B82F6",
            "--chart-5": "#34D399",
            "--sidebar": "#3C1D0D",
            "--sidebar-foreground": "#FEEEDA",
            "--sidebar-primary": "#FB923C",
            "--sidebar-primary-foreground": "#2D160A",
            "--sidebar-accent": "#EA580C",
            "--sidebar-accent-foreground": "#FEEEDA",
            "--sidebar-border": "#7C2D12",
            "--sidebar-ring": "#FB923C"
        }
    }
];
}),
"[project]/src/lib/theme/palette-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PALETTE_STORAGE_KEY",
    ()=>PALETTE_STORAGE_KEY,
    "getStoredPalette",
    ()=>getStoredPalette,
    "setStoredPalette",
    ()=>setStoredPalette
]);
const PALETTE_STORAGE_KEY = "palettePreset";
function getStoredPalette() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function setStoredPalette(name) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/hooks/use-theme-palette.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThemePalette",
    ()=>useThemePalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2f$presets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme/presets.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2f$palette$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme/palette-storage.ts [app-ssr] (ecmascript)");
;
;
;
;
function useThemePalette(presetName) {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [override, setOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Read persisted palette once on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = requestAnimationFrame(()=>{
            setOverride((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2f$palette$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredPalette"])());
        });
        return ()=>cancelAnimationFrame(id);
    }, []);
    // React to external palette-change events (storage/URL toggles)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onPaletteChange(e) {
            if ("detail" in e) {
                setOverride(e.detail);
            }
        }
        window.addEventListener("palette-change", onPaletteChange);
        return ()=>window.removeEventListener("palette-change", onPaletteChange);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const activeName = override || presetName;
        const palette = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2f$presets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themePresets"].find((preset)=>preset.name === activeName) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2f$presets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themePresets"].find((p)=>p.name === "corporate-blue") ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2f$presets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themePresets"][0];
        if (!palette) return;
        const vars = theme === "dark" ? palette.dark : palette.light;
        for (const [key, value] of Object.entries(vars)){
            document.documentElement.style.setProperty(key, value);
        }
    }, [
        presetName,
        override,
        theme
    ]);
}
}),
"[project]/src/lib/auth/cookie-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Cookie storage utility for authentication tokens
 * Uses cookies instead of localStorage for better security
 */ __turbopack_context__.s([
    "authStorage",
    ()=>authStorage
]);
const TOKEN_COOKIE_NAME = "token";
const ROLE_COOKIE_NAME = "role";
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds
/**
 * Set a cookie with secure defaults
 */ function setCookie(name, value, maxAge = COOKIE_MAX_AGE) {
    if (typeof document === "undefined") return;
    const isProduction = ("TURBOPACK compile-time value", "development") === "production";
    const secure = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
    const sameSite = "; SameSite=Strict";
    document.cookie = `${name}=${value}; Max-Age=${maxAge}; Path=/${secure}${sameSite}`;
}
/**
 * Get a cookie value by name
 */ function getCookie(name) {
    if (typeof document === "undefined") return null;
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for(let i = 0; i < cookies.length; i++){
        let cookie = cookies[i];
        while(cookie.charAt(0) === " ")cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}
/**
 * Delete a cookie
 */ function deleteCookie(name) {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=; Max-Age=0; Path=/`;
}
/**
 * Clean up old localStorage tokens (migration from localStorage to cookies)
 */ function cleanupOldLocalStorage() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
const authStorage = {
    setToken (token) {
        // Clean up any old localStorage tokens
        cleanupOldLocalStorage();
        setCookie(TOKEN_COOKIE_NAME, token);
    },
    getToken () {
        return getCookie(TOKEN_COOKIE_NAME);
    },
    setRole (role) {
        // Clean up any old localStorage roles
        cleanupOldLocalStorage();
        setCookie(ROLE_COOKIE_NAME, role);
    },
    getRole () {
        return getCookie(ROLE_COOKIE_NAME);
    },
    clear () {
        // Clear cookies
        deleteCookie(TOKEN_COOKIE_NAME);
        deleteCookie(ROLE_COOKIE_NAME);
        // Also clear any old localStorage tokens (just in case)
        cleanupOldLocalStorage();
    },
    isAuthenticated () {
        return !!this.getToken();
    },
    /**
   * Initialize and clean up old localStorage tokens
   * Call this once when the app loads
   */ initialize () {
        cleanupOldLocalStorage();
    }
};
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/providers/app-providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProviders",
    ()=>AppProviders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/theme-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$query$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/query-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2d$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-theme-palette.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2f$palette$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme/palette-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/cookie-storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const DEFAULT_PRESET = process.env.NEXT_PUBLIC_THEME_PRESET?.toLowerCase() ?? "corporate-blue";
function PaletteApplier() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2d$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemePalette"])(DEFAULT_PRESET);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Clean up old localStorage tokens (migration from localStorage to cookies)
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$cookie$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authStorage"].initialize();
        const q = params.get("palette");
        if (q) {
            // URL parameter takes precedence - set the palette from URL
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2f$palette$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStoredPalette"])(q.toLowerCase());
            // clean the URL
            const url = new URL(window.location.href);
            url.searchParams.delete("palette");
            router.replace(url.pathname + url.search);
        } else {
            // If no URL parameter and no stored palette, use default
            const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2f$palette$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredPalette"])();
            if (!stored) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2f$palette$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStoredPalette"])(DEFAULT_PRESET);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
}
function AppProviders({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$theme$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PaletteApplier, {}, void 0, false, {
                fileName: "[project]/src/components/providers/app-providers.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$query$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/providers/app-providers.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/providers/app-providers.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__815dc0b4._.js.map