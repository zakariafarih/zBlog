(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_d4020534._.js", {

"[project]/src/components/posts/ExplorePostsFilter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ExplorePostsFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ExplorePostsFilter({ onFilterChange }) {
    _s();
    const [keyword, setKeyword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tag, setTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("recent");
    const handleChange = ()=>{
        onFilterChange({
            keyword,
            tag,
            dateRange,
            sort
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row items-center gap-4 mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: keyword,
                onChange: (e)=>{
                    setKeyword(e.target.value);
                    handleChange();
                },
                placeholder: "Search posts...",
                className: "border rounded px-3 py-2 w-full md:w-1/3 bg-slate-700 text-white placeholder:text-slate-400"
            }, void 0, false, {
                fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: tag,
                onChange: (e)=>{
                    setTag(e.target.value);
                    handleChange();
                },
                className: "border rounded px-3 py-2 w-full md:w-1/4 bg-slate-700 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "All Tags"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "Coding",
                        children: "Coding"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "TypeScript",
                        children: "TypeScript"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "Microservices",
                        children: "Microservices"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "Design",
                        children: "Design"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "Cloud",
                        children: "Cloud"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "AI",
                        children: "AI"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "VS Code",
                        children: "VS Code"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "Python",
                        children: "Python"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "Data Science",
                        children: "Data Science"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: dateRange,
                onChange: (e)=>{
                    setDateRange(e.target.value);
                    handleChange();
                },
                className: "border rounded px-3 py-2 w-full md:w-1/4 bg-slate-700 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "all",
                        children: "All Time"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "today",
                        children: "Today"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "7d",
                        children: "Last 7 Days"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "month",
                        children: "This Month"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: sort,
                onChange: (e)=>{
                    setSort(e.target.value);
                    handleChange();
                },
                className: "border rounded px-3 py-2 w-full md:w-1/4 bg-slate-700 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "recent",
                        children: "Most Recent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "popular",
                        children: "Most Liked"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "comments",
                        children: "Most Commented"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/posts/ExplorePostsFilter.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ExplorePostsFilter, "zQ8nQaCFd8UEOyggFhvsADoPjWE=");
_c = ExplorePostsFilter;
var _c;
__turbopack_context__.k.register(_c, "ExplorePostsFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/posts/PostCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function PostCard({ id, title, description, author, timestamp, tags = [], imageUrl, reactionCount = 0, commentCount = 0, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            scale: 1.02
        },
        whileTap: {
            scale: 0.98
        },
        onClick: ()=>onClick?.(id),
        className: "relative h-64 w-full rounded-xl overflow-hidden shadow-md bg-slate-800 cursor-pointer",
        children: [
            imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: imageUrl,
                alt: title,
                fill: true,
                className: "object-cover blur-sm opacity-60",
                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }, void 0, false, {
                fileName: "[project]/src/components/posts/PostCard.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col justify-end h-full p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-2",
                        children: tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded",
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/src/components/posts/PostCard.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/PostCard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white text-lg font-semibold line-clamp-1",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/PostCard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 text-sm line-clamp-2 mt-1",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/PostCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mt-3 text-xs text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "By ",
                                    author,
                                    " · ",
                                    timestamp
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/posts/PostCard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                className: "w-4 h-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/posts/PostCard.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: reactionCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/posts/PostCard.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/posts/PostCard.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                className: "w-4 h-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/posts/PostCard.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: commentCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/posts/PostCard.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/posts/PostCard.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/posts/PostCard.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/posts/PostCard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/posts/PostCard.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/posts/PostCard.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = PostCard;
var _c;
__turbopack_context__.k.register(_c, "PostCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/posts/RecentPosts.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RecentPosts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$posts$2f$PostCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/posts/PostCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
function RecentPosts({ posts, onLoadMore, hasMore = false }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return(// Static main container so it fits nicely under the navbar
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-slate-900 text-white pt-8 pb-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "max-w-7xl mx-auto px-4 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl font-bold",
                            children: "📰 Recent Posts"
                        }, void 0, false, {
                            fileName: "[project]/src/components/posts/RecentPosts.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-400 text-sm md:text-base md:text-right max-w-xl",
                            children: "Catch up on what the community is talking about!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/posts/RecentPosts.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/posts/RecentPosts.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    variants: containerVariants,
                    initial: "hidden",
                    animate: "visible",
                    children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: cardVariants,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$posts$2f$PostCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ...post,
                                onClick: (postId)=>router.push(`/posts/${postId}`)
                            }, void 0, false, {
                                fileName: "[project]/src/components/posts/RecentPosts.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        }, post.id, false, {
                            fileName: "[project]/src/components/posts/RecentPosts.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/posts/RecentPosts.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: onLoadMore,
                        whileHover: {
                            scale: 1.03
                        },
                        whileTap: {
                            scale: 0.97
                        },
                        className: "bg-slate-700 hover:bg-slate-600 text-white rounded-xl py-2 px-6 font-medium transition",
                        children: "Load More"
                    }, void 0, false, {
                        fileName: "[project]/src/components/posts/RecentPosts.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/posts/RecentPosts.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/posts/RecentPosts.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/posts/RecentPosts.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this));
}
_s(RecentPosts, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RecentPosts;
var _c;
__turbopack_context__.k.register(_c, "RecentPosts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/animations/empty-state.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"v\":\"4.8.0\",\"meta\":{\"g\":\"LottieFiles AE 1.1.0\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":29.9700012207031,\"ip\":0,\"op\":77.0000031362743,\"w\":1000,\"h\":1000,\"nm\":\"Comp 1\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[480,506,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[41,-30],[34,-78],[-36.607,20.098],[40,-43],[-71,185],[26,-28]],\"o\":[[0,0],[-30.454,22.283],[-34,78],[51,-28],[-61.995,66.645],[70.57,-183.88],[-26,28]],\"v\":[[-142,44],[-139,140],[-352,106],[-171,308],[-204,227],[-313,168],[-413,67]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":30,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":1369,\"ix\":2}},{\"n\":\"o\",\"nm\":\"offset\",\"v\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":32,\"s\":[103]},{\"t\":70.0000028511585,\"s\":[-1303]}],\"ix\":7}}],\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":22.0000008960784,\"op\":1810.00007372281,\"st\":12.00000048877,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[500,500,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[41,-30],[34,-78],[-36.607,20.098],[40,-43],[-71,185],[26,-28]],\"o\":[[0,0],[-30.454,22.283],[-34,78],[51,-28],[-61.995,66.645],[70.57,-183.88],[-26,28]],\"v\":[[-142,44],[-139,140],[-352,106],[-171,308],[-204,227],[-313,168],[-413,67]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":12,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":1369,\"ix\":2}},{\"n\":\"o\",\"nm\":\"offset\",\"v\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":20,\"s\":[103]},{\"t\":58.0000023623884,\"s\":[-1303]}],\"ix\":7}}],\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":22.0000008960784,\"op\":1798.00007323404,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"head/boxgirl2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":9,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":45,\"s\":[-5]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":50,\"s\":[-5]},{\"t\":75.0000030548126,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[504.173,279.4,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[615.874,302.163,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[83,83,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.203,0],[0,0],[0.188,-0.112],[0.266,-0.265],[0.11,-0.275],[-0.203,0],[0,0],[-0.188,0.113],[-0.266,0.266],[-0.11,0.274]],\"o\":[[0,0],[-0.231,0],[-0.322,0.194],[-0.206,0.206],[-0.041,0.103],[0,0],[0.232,0],[0.322,-0.194],[0.206,-0.205],[0.041,-0.104]],\"v\":[[3.115,-1.01],[-1.033,-1.01],[-1.711,-0.745],[-2.621,-0.032],[-3.193,0.682],[-3.115,1.01],[1.032,1.01],[1.711,0.745],[2.621,0.031],[3.193,-0.682]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[592.024,140.01],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.441,0],[0,0],[0.377,-0.376],[-0.441,0],[0,0],[-0.377,0.376]],\"o\":[[0,0],[-0.571,0],[-0.086,0.085],[0,0],[0.572,0],[0.085,-0.085]],\"v\":[[4.643,-1.01],[-2.561,-1.01],[-4.149,-0.032],[-4.643,1.01],[2.56,1.01],[4.149,0.032]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[589.932,134.862],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.203,0],[0,0],[0.187,-0.112],[0.266,-0.265],[0.109,-0.275],[-0.203,0],[0,0],[-0.188,0.113],[-0.266,0.265],[-0.11,0.274]],\"o\":[[0,0],[-0.232,0],[-0.323,0.194],[-0.206,0.206],[-0.042,0.103],[0,0],[0.232,0],[0.322,-0.193],[0.206,-0.206],[0.041,-0.104]],\"v\":[[2.569,-1.01],[-0.487,-1.01],[-1.165,-0.745],[-2.076,-0.032],[-2.647,0.682],[-2.57,1.01],[0.486,1.01],[1.165,0.745],[2.075,0.032],[2.647,-0.682]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[594.189,130.405],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.697,0.13],[1.381,-1.402],[-1.277,-1.162],[-0.539,-2.933],[1.291,0.371],[0.599,1.294],[-0.397,-0.857],[-2.347,3.604],[1.566,1.335],[1.014,0.42],[0.075,0.558],[-0.756,-0.141]],\"o\":[[-1.872,-0.349],[-1.032,1.047],[1.762,1.602],[0.338,1.839],[-1.421,-0.409],[-0.212,-0.458],[1.982,4.281],[1.124,-1.727],[-0.848,-0.723],[-0.383,-0.158],[-0.118,-0.875],[0.82,0.152]],\"v\":[[2.104,-7.117],[-2.682,-5.892],[-3.188,-2.149],[2.92,2.141],[-0.213,3.831],[-3.175,1.063],[-5.296,3.185],[4.569,3.198],[3.753,-1.848],[0.801,-3.374],[-1.262,-4.469],[0.261,-4.868]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[602.895,136.398],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-5.784,2.336]],\"o\":[[0,0],[0,0]],\"v\":[[-6.716,-0.848],[6.716,-1.168]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.1716,0.2297,0.4884,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[605.021,201.209],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-5.784,2.336]],\"o\":[[0,0],[0,0]],\"v\":[[-6.716,-2.008],[6.716,-0.328]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.1716,0.2297,0.4884,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[582.244,200.369],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.901,0.241],[8.078,-4.259],[-3.323,-5.913],[-6.748,-0.677],[-6.62,1.477],[0,0]],\"o\":[[-0.963,-0.223],[-21.25,-5.699],[-6,3.163],[3.324,5.912],[6.748,0.678],[0,0],[0,0]],\"v\":[[22.043,0.722],[19.248,0.025],[-14.734,-11.997],[-18.914,5.764],[-1.981,15.578],[22.237,12.775],[19.248,0.025]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.1716,0.2297,0.4884,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[543.515,174.404],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-27.722,-3.24],[2.66,-27.783],[19.547,5.242],[8.078,-4.258],[-3.324,-5.912],[-6.748,-0.677],[-6.62,1.476],[0,0]],\"o\":[[0,0],[3.818,-27.648],[27.722,3.24],[-63.214,18.371],[-21.25,-5.699],[-6,3.163],[3.323,5.912],[6.748,0.678],[0,0],[0,0]],\"v\":[[-72.745,16.895],[-29.706,4.359],[30.081,-41.908],[77.588,16.899],[-38.763,28.917],[-72.745,16.895],[-76.924,34.656],[-59.992,44.47],[-35.774,41.668],[-38.763,28.917]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.1558,0.249,0.6642,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[601.526,145.512],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-2.734,-12.941],[-15.624,-0.096],[-3.417,15.247]],\"o\":[[2.734,12.941],[3.23,15.288],[15.625,0.095],[0,0]],\"v\":[[-36.33,-25.893],[-31.201,-1.615],[2.397,25.799],[36.33,-1.201]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[602.33,214.252],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[6.091,-7.297]],\"o\":[[-0.924,12.992],[0,0]],\"v\":[[5.451,-19.487],[-5.451,19.487]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[594.411,259.908],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":4,\"s\":[{\"i\":[[0,0],[1.404,-13.995],[-7.319,-22.945],[-22.358,-8.953],[-13.565,19.901],[22.678,8.11],[-0.689,25.725],[5.686,1.105]],\"o\":[[7.301,7.834],[-2.405,23.964],[7.32,22.944],[22.358,8.953],[13.565,-19.9],[-24.231,-8.665],[0.155,-5.79],[-5.686,-1.106]],\"v\":[[-67.624,-74.46],[-60.836,-50.411],[-55.453,11.567],[-9.899,64.62],[54.789,47.744],[37.918,-12.56],[2.322,-69.611],[-7.677,-82.077]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":34,\"s\":[{\"i\":[[0,0],[1.404,-13.995],[-7.319,-22.945],[-22.358,-8.953],[-13.565,19.901],[22.678,8.11],[-0.689,25.725],[5.686,1.105]],\"o\":[[7.301,7.834],[-2.405,23.964],[7.32,22.944],[22.358,8.953],[13.565,-19.9],[-24.231,-8.665],[0.155,-5.79],[-5.686,-1.106]],\"v\":[[-67.624,-74.46],[-60.836,-50.411],[-56.182,21.178],[-10.628,74.23],[54.06,57.355],[37.189,-2.949],[2.322,-69.611],[-7.677,-82.077]],\"c\":true}]},{\"t\":74.0000030140818,\"s\":[{\"i\":[[0,0],[1.404,-13.995],[-7.319,-22.945],[-22.358,-8.953],[-13.565,19.901],[22.678,8.11],[-0.689,25.725],[5.686,1.105]],\"o\":[[7.301,7.834],[-2.405,23.964],[7.32,22.944],[22.358,8.953],[13.565,-19.9],[-24.231,-8.665],[0.155,-5.79],[-5.686,-1.106]],\"v\":[[-67.624,-74.46],[-60.836,-50.411],[-55.453,11.567],[-9.899,64.62],[54.789,47.744],[37.918,-12.56],[2.322,-69.611],[-7.677,-82.077]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.36,0.4773,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[692.302,244.019],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":1798.00007323404,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"arms/boxgirl2 Outlines\",\"parent\":5,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":7,\"s\":[-18]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":13.824,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":21,\"s\":[-18]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":27,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":37,\"s\":[-18]},{\"t\":54.0000021994651,\"s\":[-18]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[506.439,444.242,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[534.439,398.222,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-3.407],[3.407,0],[0,3.407],[-3.407,0]],\"o\":[[0,3.407],[-3.407,0],[0,-3.407],[3.407,0]],\"v\":[[6.169,0],[0,6.169],[-6.168,0],[0,-6.169]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[632.081,461.246],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":7,\"s\":[{\"i\":[[0,0],[-22.517,-0.724],[-10.788,37.86]],\"o\":[[25.288,-7.398],[36.098,3.218],[0,0]],\"v\":[[-38.207,26.791],[38.078,30.823],[87.513,-6.807]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":14,\"s\":[{\"i\":[[0,0],[-22.888,-13.053],[-2.749,18.008]],\"o\":[[25.288,-7.398],[-17.303,-28.448],[0,0]],\"v\":[[-38.207,26.791],[38.207,35.761],[21.086,-17.93]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":21,\"s\":[{\"i\":[[0,0],[-22.517,-0.724],[-10.788,37.86]],\"o\":[[25.288,-7.398],[36.098,3.218],[0,0]],\"v\":[[-38.207,26.791],[38.078,30.823],[87.513,-6.807]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":27.176,\"s\":[{\"i\":[[0,0],[-22.888,-13.053],[-2.749,18.008]],\"o\":[[25.288,-7.398],[-17.303,-28.448],[0,0]],\"v\":[[-38.207,26.791],[38.207,35.761],[21.086,-17.93]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":37,\"s\":[{\"i\":[[0,0],[-22.517,-0.724],[-10.788,37.86]],\"o\":[[25.288,-7.398],[36.098,3.218],[0,0]],\"v\":[[-38.207,26.791],[38.078,30.823],[87.513,-6.807]],\"c\":false}]},{\"t\":54.0000021994651,\"s\":[{\"i\":[[0,0],[-22.517,-0.724],[-10.788,37.86]],\"o\":[[25.288,-7.398],[36.098,3.218],[0,0]],\"v\":[[-38.207,26.791],[38.078,30.823],[87.513,-6.807]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[636.453,358.075],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-2.991,-1.935],[1.393,-9.397],[3.254,-8.925],[-1.049,-10.002],[0,0],[-11.042,-10.598],[20.008,35.512]],\"o\":[[3.543,-0.536],[7.976,5.16],[-1.392,9.397],[-3.253,8.925],[0,0],[0.418,10.558],[7.218,-35.73],[0,0]],\"v\":[[-34.042,-55.116],[-23.763,-53.142],[-14.661,-27.77],[-23.79,-0.843],[-27.997,28.159],[-28.105,26.975],[6.752,55.652],[14.035,-54.499]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.1558,0.249,0.6642,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[635.71,439.352],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-19.251,-20.715],[19.252,-11.749],[12.525,20.715],[-9.779,13.975]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":3,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.408,0.5077,0.952,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[617.497,415.331],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.037,-6.22],[4.993,-23.691],[-34.033,29.139],[0,0]],\"o\":[[0,0],[0,0],[-4.999,-3.701],[0,0],[-3.982,18.892],[0,0],[0,0]],\"v\":[[55.805,-7.473],[11.559,-17.777],[-4.366,-29.569],[-16.488,-23.507],[-52.904,-14.08],[1.026,8.632],[56.886,25.512]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.8,0.8367,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[554.414,404.877],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-7.976,-5.16],[1.393,-9.397],[3.254,-8.925],[-1.049,-10.001],[2.982,11.029]],\"o\":[[0.571,-9.482],[7.975,5.161],[-1.393,9.396],[-3.254,8.925],[-2.982,-11.029],[0,0]],\"v\":[[-16.19,-29.242],[5.695,-38.07],[14.797,-12.698],[5.668,14.229],[1.461,43.23],[-8.484,4.143]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.1716,0.2297,0.4884,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[606.252,424.28],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":7,\"s\":[{\"i\":[[0,0],[76.287,8.852],[17.248,1.993]],\"o\":[[77.45,65.728],[-17.247,-2.001],[0,0]],\"v\":[[63.279,-99.083],[-7.091,82.071],[-65.557,72.343]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":14,\"s\":[{\"i\":[[0,0],[84.904,4.88],[17.248,1.993]],\"o\":[[83.039,26.063],[-17.334,-0.997],[0,0]],\"v\":[[-26.996,-99.139],[-19.347,87.726],[-65.557,72.343]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":21,\"s\":[{\"i\":[[0,0],[76.287,8.852],[17.248,1.993]],\"o\":[[77.45,65.728],[-17.247,-2.001],[0,0]],\"v\":[[63.279,-99.083],[-7.091,82.071],[-65.557,72.343]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"t\":27,\"s\":[{\"i\":[[0,0],[84.904,4.88],[17.248,1.993]],\"o\":[[88.231,6.819],[-17.334,-0.997],[0,0]],\"v\":[[-46.273,-107.574],[-19.347,87.726],[-65.557,72.343]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":37,\"s\":[{\"i\":[[0,0],[76.287,8.852],[17.248,1.993]],\"o\":[[77.45,65.728],[-17.247,-2.001],[0,0]],\"v\":[[63.279,-99.083],[-7.091,82.071],[-65.557,72.343]],\"c\":false}]},{\"t\":54.0000021994651,\"s\":[{\"i\":[[0,0],[76.287,8.852],[17.248,1.993]],\"o\":[[77.45,65.728],[-17.247,-2.001],[0,0]],\"v\":[[63.279,-99.083],[-7.091,82.071],[-65.557,72.343]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.1558,0.249,0.6642,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[717.313,386.909],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":1798.00007323404,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"BOX/boxgirl2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":7,\"s\":[-11]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":14.961,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":21.216,\"s\":[-11]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":26.903,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":36.569,\"s\":[-11]},{\"t\":76.0000030955435,\"s\":[-11]}],\"ix\":10},\"p\":{\"s\":true,\"x\":{\"a\":0,\"k\":497.232,\"ix\":3},\"y\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.525],\"y\":[0.999]},\"o\":{\"x\":[0.167],\"y\":[0.012]},\"t\":7,\"s\":[534.782]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.714],\"y\":[-0.001]},\"t\":14.961,\"s\":[473.393]},{\"i\":{\"x\":[0.086],\"y\":[1.001]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":20.648,\"s\":[554.791]},{\"i\":{\"x\":[0.345],\"y\":[1.257]},\"o\":{\"x\":[0.475],\"y\":[0.001]},\"t\":26.903,\"s\":[484.088]},{\"i\":{\"x\":[0.058],\"y\":[8.039]},\"o\":{\"x\":[0.207],\"y\":[-15.641]},\"t\":37.138,\"s\":[534.782]},{\"t\":76.0000030955435,\"s\":[534.782]}],\"ix\":4}},\"a\":{\"a\":0,\"k\":[572.5,586.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[83,83,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[4.345,-40.918],[0,0],[0,0],[0,0]],\"o\":[[0,0],[5.794,-40.405],[0,0],[0,0]],\"v\":[[2.264,43.63],[-8.285,42.896],[-2.262,-43.63],[8.286,-42.896]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[307.842,426.297],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[5.221,1.428]],\"o\":[[0,0],[0,0]],\"v\":[[0.841,-83.44],[-2.611,82.013]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[306.142,427.058],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-69.992,1.014]],\"o\":[[69.993,-1.014],[0,0]],\"v\":[[-112.026,3.123],[112.026,-3.123]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[477.19,351.902],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-38.969,-5.99],[1.82,-62.867]],\"o\":[[41.66,9.085],[-1.821,62.868],[0,0]],\"v\":[[-56.581,-95.724],[56.581,-72.475],[52.313,95.724]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.5534,0.6108,0.8666,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[308.254,427.051],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-43.799,3.2],[-73.661,-9.244],[-9.976,-73.578],[68.598,2.806],[42.988,11.764],[6.219,42.049]],\"o\":[[64.703,16],[-14.075,53.761],[-67.608,11.939],[-42.988,-11.764],[7.574,-63.979],[43.799,-3.2]],\"v\":[[-15.044,-99.102],[169.981,-81.65],[161.058,90.364],[-59.207,94.101],[-169.981,65.062],[-167.562,-99.102]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.5534,0.6108,0.8666,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[419.236,430.43],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[0,0],[4.29,-26.25],[54.595,20.476],[-5.348,26.556]],\"o\":[[-5.881,28.24],[-48.63,-17.126],[7.005,-28.32],[0,0]],\"v\":[[81.443,-11.521],[72.476,56.222],[-39.877,9.497],[-29.331,-40.56]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":17.235,\"s\":[{\"i\":[[0,0],[4.29,-26.25],[54.595,20.475],[-5.348,26.556]],\"o\":[[-5.881,28.24],[-48.63,-17.126],[7.005,-28.32],[0,0]],\"v\":[[81.443,-11.521],[72.476,56.222],[-39.877,9.497],[-29.331,-40.56]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":20,\"s\":[{\"i\":[[0,0],[18.337,-0.432],[53.327,11.084],[-23.981,4.669]],\"o\":[[-25.774,-4.099],[-48.63,-17.126],[24.904,-3.29],[0,0]],\"v\":[[81.443,-11.521],[31.961,-12.457],[-76.764,-40.908],[-29.331,-40.56]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":22.921,\"s\":[{\"i\":[[0,0],[4.29,-26.25],[54.595,20.476],[-5.348,26.556]],\"o\":[[-5.881,28.24],[-48.63,-17.126],[7.005,-28.32],[0,0]],\"v\":[[81.443,-11.521],[72.476,56.222],[-39.877,9.497],[-29.331,-40.56]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":28.608,\"s\":[{\"i\":[[0,0],[4.29,-26.25],[54.595,20.476],[-5.348,26.556]],\"o\":[[-5.881,28.24],[-48.63,-17.126],[7.005,-28.32],[0,0]],\"v\":[[81.443,-11.521],[72.476,56.222],[-39.877,9.497],[-29.331,-40.56]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":31,\"s\":[{\"i\":[[0,0],[18.337,-0.432],[53.327,11.084],[-23.981,4.669]],\"o\":[[-25.774,-4.099],[-48.63,-17.126],[24.904,-3.29],[0,0]],\"v\":[[81.443,-11.521],[31.961,-12.457],[-76.764,-40.909],[-29.331,-40.56]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":46,\"s\":[{\"i\":[[0,0],[4.29,-26.25],[54.595,20.476],[-5.348,26.556]],\"o\":[[-5.881,28.24],[-48.63,-17.126],[7.005,-28.32],[0,0]],\"v\":[[81.443,-11.521],[72.476,56.222],[-39.877,9.497],[-29.331,-40.56]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":62,\"s\":[{\"i\":[[0,0],[5.295,-25.538],[54.595,20.476],[-5.348,26.556]],\"o\":[[-5.881,28.24],[-48.63,-17.126],[7.005,-28.32],[0,0]],\"v\":[[81.443,-11.521],[68.394,55.122],[-39.877,9.497],[-29.331,-40.56]],\"c\":false}]},{\"t\":77.0000031362743,\"s\":[{\"i\":[[0,0],[4.29,-26.25],[54.595,20.476],[-5.348,26.556]],\"o\":[[-5.881,28.24],[-48.63,-17.126],[7.005,-28.32],[0,0]],\"v\":[[81.443,-11.521],[72.476,56.222],[-39.877,9.497],[-29.331,-40.56]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.5534,0.6108,0.8666,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[278.586,536.051],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[{\"i\":[[0,0],[-3.518,-24.757],[85.647,-5.976],[4.373,25.634]],\"o\":[[1.938,21.197],[-80.626,8.376],[-2.305,-27.236],[0,0]],\"v\":[[96.352,-34.341],[106.656,24.809],[-115.038,40.968],[-118.704,-27.565]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":8,\"s\":[{\"i\":[[0,0],[-7.408,-22.677],[85.647,-5.975],[4.373,25.634]],\"o\":[[1.938,21.197],[-80.626,8.376],[-2.305,-27.236],[0,0]],\"v\":[[96.353,-34.341],[110.216,25.436],[-110.292,41.803],[-118.704,-27.565]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":16.666,\"s\":[{\"i\":[[0,0],[-3.518,-24.757],[85.647,-5.975],[4.373,25.634]],\"o\":[[1.938,21.197],[-80.626,8.376],[-2.305,-27.236],[0,0]],\"v\":[[96.353,-34.341],[106.656,24.809],[-115.038,40.968],[-118.704,-27.565]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":20,\"s\":[{\"i\":[[0,0],[-29.356,-13.941],[84.442,-5.729],[19.387,14.399]],\"o\":[[13.559,13.713],[-83.638,8.019],[-32.035,-13.191],[0,0]],\"v\":[[96.353,-34.341],[136.329,-10.87],[-68.498,3.481],[-118.704,-27.565]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":22.921,\"s\":[{\"i\":[[0,0],[-3.518,-24.757],[85.647,-5.976],[4.373,25.634]],\"o\":[[1.938,21.197],[-80.626,8.376],[-2.305,-27.236],[0,0]],\"v\":[[96.352,-34.341],[106.656,24.809],[-115.038,40.968],[-118.704,-27.565]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":28.608,\"s\":[{\"i\":[[0,0],[-3.518,-24.757],[85.647,-5.976],[4.373,25.634]],\"o\":[[1.938,21.197],[-80.626,8.376],[-2.305,-27.236],[0,0]],\"v\":[[96.352,-34.341],[106.656,24.809],[-115.038,40.968],[-118.704,-27.565]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":31,\"s\":[{\"i\":[[0,0],[-29.356,-13.941],[84.442,-5.729],[19.387,14.399]],\"o\":[[13.559,13.713],[-83.638,8.019],[-32.035,-13.191],[0,0]],\"v\":[[96.353,-34.341],[136.329,-10.87],[-68.498,3.481],[-118.704,-27.565]],\"c\":false}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":46,\"s\":[{\"i\":[[0,0],[-3.518,-24.757],[85.647,-5.976],[4.373,25.634]],\"o\":[[1.938,21.197],[-80.626,8.376],[-2.305,-27.236],[0,0]],\"v\":[[96.352,-34.341],[106.656,24.809],[-115.038,40.968],[-118.704,-27.565]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":52,\"s\":[{\"i\":[[0,0],[4.341,-23.172],[85.647,-5.976],[-5.305,25.866]],\"o\":[[-4.364,20.108],[-80.626,8.376],[3.168,-26.192],[0,0]],\"v\":[[96.352,-34.341],[83.496,23.989],[-128.163,39.03],[-118.704,-27.565]],\"c\":false}]},{\"t\":77.0000031362743,\"s\":[{\"i\":[[0,0],[-3.518,-24.757],[85.647,-5.976],[4.373,25.634]],\"o\":[[1.938,21.197],[-80.626,8.376],[-2.305,-27.236],[0,0]],\"v\":[[96.352,-34.341],[106.656,24.809],[-115.038,40.968],[-118.704,-27.565]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.5534,0.6108,0.8666,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[483.54,552.116],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":1798.00007323404,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Legs/boxgirl2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[477.232,513.782,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[572.5,586.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[83,83,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.742,-7.41],[-14.493,-3.584],[-25.452,2.565]],\"o\":[[-5.443,5.57],[2.029,20.261],[13.455,3.327],[0,0]],\"v\":[[-48.474,-30.191],[-57.779,-10.254],[-0.625,23.639],[58.521,27.626]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.8,0.8367,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[647.342,989.901],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-8.064,5.222]],\"o\":[[0,0],[0,0]],\"v\":[[-11.624,-6.953],[11.624,1.731]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.8,0.8367,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[618.704,1014.636],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,3.45],[0,0],[0,0],[0,0],[0,0],[3.45,0]],\"o\":[[-3.45,0],[0,0],[0,0],[0,0],[0,0],[0,3.45],[0,0]],\"v\":[[-66.997,10.39],[-73.244,4.143],[-73.244,-10.39],[-70.416,-10.39],[73.244,-10.39],[73.244,4.143],[66.997,10.39]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.8,0.8367,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[630.328,1057.988],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0.745,2.543],[-7.412,2.56],[0,0],[0,0]],\"o\":[[0,0],[0,0],[-2.561,-2.245],[-2.206,-7.525],[0,0],[0,0],[0,0]],\"v\":[[74.419,-1.574],[75.315,23.542],[-68.346,23.542],[-73.109,16.217],[-63.465,-1.762],[-21.177,-16.372],[-11.369,-23.542]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.8,0.8367,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[628.258,1024.055],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-1.406,-7.312],[-14.756,-2.265],[-25.117,4.846]],\"o\":[[0,20.776],[3.845,19.996],[13.701,2.102],[0,0]],\"v\":[[-30.309,-32.271],[-58.915,0.168],[1.056,28.779],[60.321,27.425]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[561.487,975.205],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-7.561,5.927]],\"o\":[[0,0],[0,0]],\"v\":[[-11.967,-6.242],[11.968,0.315]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[519.21,1005.327],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-3.437,0.31]],\"o\":[[0,0],[0,0],[0,0],[0.311,3.436],[0,0]],\"v\":[[74.051,5],[71.843,-16.903],[-74.051,-3.715],[-72.448,10.933],[-65.663,16.593]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[535.094,1047.055],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[1.577,12.468],[-1.576,-12.468]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[605.36,1017.685],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-2.874,-7.296],[-2.753,-2.005]],\"o\":[[0,0],[0,0],[-7.151,3.218],[0.971,2.467],[0,0]],\"v\":[[30.393,-26.012],[21.269,-17.987],[-19.532,0.37],[-27.519,19.143],[-22.114,26.012]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[485.974,1017.073],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":10.98,\"s\":[{\"i\":[[0,0],[-3.442,-105.571]],\"o\":[[-18.704,112.217],[0,0]],\"v\":[[-9.493,-158.357],[9.494,158.357]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":14.393,\"s\":[{\"i\":[[0,0],[-3.442,-105.571]],\"o\":[[3.442,105.571],[0,0]],\"v\":[[-9.493,-158.357],[9.494,158.357]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":20.648,\"s\":[{\"i\":[[0,0],[-3.442,-105.571]],\"o\":[[-18.704,112.217],[0,0]],\"v\":[[-9.493,-158.357],[9.494,158.357]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":25.765,\"s\":[{\"i\":[[0,0],[-3.442,-105.571]],\"o\":[[3.442,105.571],[0,0]],\"v\":[[-9.493,-158.357],[9.494,158.357]],\"c\":false}]},{\"t\":32.588751327367,\"s\":[{\"i\":[[0,0],[-3.442,-105.571]],\"o\":[[-18.704,112.217],[0,0]],\"v\":[[-9.493,-158.357],[9.494,158.357]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[519.695,753.384],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":10.98,\"s\":[{\"i\":[[0,0],[3.081,-104.652]],\"o\":[[-11.201,108.609],[0,0]],\"v\":[[2.06,-160.308],[6.06,160.309]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":14.393,\"s\":[{\"i\":[[0,0],[3.081,-104.652]],\"o\":[[5.242,106.157],[0,0]],\"v\":[[2.06,-160.308],[6.06,160.309]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":20.648,\"s\":[{\"i\":[[0,0],[3.081,-104.652]],\"o\":[[-11.201,108.609],[0,0]],\"v\":[[2.06,-160.308],[6.06,160.309]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":25.765,\"s\":[{\"i\":[[0,0],[3.081,-104.652]],\"o\":[[5.242,106.156],[0,0]],\"v\":[[2.06,-160.308],[6.06,160.309]],\"c\":false}]},{\"t\":32.588751327367,\"s\":[{\"i\":[[0,0],[3.081,-104.652]],\"o\":[[-11.201,108.609],[0,0]],\"v\":[[2.06,-160.308],[6.06,160.309]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[591.424,810.794],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":10.98,\"s\":[{\"i\":[[0,0],[-21.928,-106.278]],\"o\":[[-33.777,91.486],[0,0]],\"v\":[[12.646,-187.238],[21.131,187.238]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":14.393,\"s\":[{\"i\":[[0,0],[-10.66,-108.482]],\"o\":[[-4.585,92.5],[0,0]],\"v\":[[12.646,-187.238],[21.131,187.238]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":20.648,\"s\":[{\"i\":[[0,0],[-21.928,-106.278]],\"o\":[[-33.777,91.486],[0,0]],\"v\":[[12.646,-187.238],[21.131,187.238]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":25.765,\"s\":[{\"i\":[[0,0],[-10.66,-108.482]],\"o\":[[-4.585,92.5],[0,0]],\"v\":[[12.646,-187.238],[21.131,187.238]],\"c\":false}]},{\"t\":32.588751327367,\"s\":[{\"i\":[[0,0],[-21.928,-106.278]],\"o\":[[-33.777,91.486],[0,0]],\"v\":[[12.646,-187.238],[21.131,187.238]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[685.846,756.199],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":1798.00007323404,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Body/boxgirl2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":10.98,\"s\":[477.232,513.782,0],\"to\":[0,-1.167,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":14.393,\"s\":[477.232,506.782,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":20.648,\"s\":[477.232,513.782,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":25.765,\"s\":[477.232,506.782,0],\"to\":[0,0,0],\"ti\":[0,-1.167,0]},{\"t\":32.588751327367,\"s\":[477.232,513.782,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[572.5,586.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[83,83,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":11,\"s\":[{\"i\":[[0,0],[-1.842,-18.593],[20.162,4.991],[50.908,0.473],[-108.373,217.759],[-16.355,0],[0,0],[0,0],[-16.432,-8.614]],\"o\":[[6.366,18.406],[2.049,20.67],[-36.237,-8.969],[0,0],[10.336,-20.768],[0,0],[0,0],[18.522,-12.748],[0,0]],\"v\":[[132.53,-11.826],[161.147,106.417],[106.529,126.902],[-0.019,112.697],[-47.61,-79.325],[-1.019,-144.415],[23.696,-102.197],[71.999,-130.707],[125.265,-134.421]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":15,\"s\":[{\"i\":[[0,0],[-1.842,-18.593],[20.162,4.991],[50.908,0.473],[-104.743,241.812],[-16.355,0],[0,0],[0,0],[-16.432,-8.614]],\"o\":[[6.366,18.406],[2.049,20.67],[-36.237,-8.969],[0,0],[9.221,-21.286],[0,0],[0,0],[18.522,-12.748],[0,0]],\"v\":[[132.53,-11.826],[161.147,106.417],[106.529,126.902],[-0.019,112.697],[-75.32,-116.675],[-1.019,-144.415],[23.696,-102.197],[71.999,-130.707],[125.265,-134.421]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":20,\"s\":[{\"i\":[[0,0],[-1.842,-18.593],[20.162,4.991],[50.908,0.473],[-108.373,217.759],[-16.355,0],[0,0],[0,0],[-16.432,-8.614]],\"o\":[[6.366,18.406],[2.049,20.67],[-36.237,-8.969],[0,0],[10.336,-20.768],[0,0],[0,0],[18.522,-12.748],[0,0]],\"v\":[[132.53,-11.826],[161.147,106.417],[106.529,126.902],[-0.019,112.697],[-47.61,-88.964],[-1.019,-144.415],[23.696,-102.197],[71.999,-130.707],[125.265,-134.421]],\"c\":false}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":26,\"s\":[{\"i\":[[0,0],[-1.842,-18.593],[20.162,4.991],[50.908,0.473],[-108.373,217.759],[-16.355,0],[0,0],[0,0],[-16.432,-8.614]],\"o\":[[6.366,18.406],[2.049,20.67],[-36.237,-8.969],[0,0],[10.336,-20.768],[0,0],[0,0],[18.522,-12.748],[0,0]],\"v\":[[132.53,-11.826],[161.147,106.417],[106.529,126.902],[-0.019,112.697],[-63.272,-105.831],[-1.019,-144.415],[23.696,-102.197],[71.999,-130.707],[125.265,-134.421]],\"c\":false}]},{\"t\":33.0000013441176,\"s\":[{\"i\":[[0,0],[-1.842,-18.593],[20.162,4.991],[50.908,0.473],[-108.373,217.759],[-16.355,0],[0,0],[0,0],[-16.432,-8.614]],\"o\":[[6.366,18.406],[2.049,20.67],[-36.237,-8.969],[0,0],[10.336,-20.768],[0,0],[0,0],[18.522,-12.748],[0,0]],\"v\":[[132.53,-11.826],[161.147,106.417],[106.529,126.902],[-0.019,112.697],[-47.61,-79.325],[-1.019,-144.415],[23.696,-102.197],[71.999,-130.707],[125.265,-134.421]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.0078,0.0235,0.0902,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":5,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.1558,0.249,0.6642,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[559.529,428.725],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":1798.00007323404,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Layer 8/boxgirl2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[477.232,513.782,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[572.5,586.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[83,83,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[47.878,-14.752],[3.234,-71.293],[-5.895,-75.093],[33.038,-81.93],[-85.728,-107.22],[-68.517,107.681],[-69.828,139.983],[-38.029,115.117],[46.807,57.257],[162.699,89.342]],\"o\":[[-55.539,17.112],[-3.198,70.52],[6.233,79.398],[-49.442,122.608],[99.596,124.565],[62.205,-97.761],[57.996,-116.263],[25.413,-76.926],[-71.866,-87.91],[-72.635,-39.886]],\"v\":[[-164.114,-536.141],[-273.101,-369.18],[-225.408,-209.28],[-297.757,-3.278],[-280.381,426.328],[113.978,424.615],[140.88,74.349],[340.696,-142.095],[303.58,-375.651],[-19.035,-471.694]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.8,0.8367,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[655.005,614.237],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":1798.00007323404,\"st\":0,\"bm\":0}],\"markers\":[]}"));}}),
"[project]/src/components/posts/NoPostsHolder.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NoPostsHolder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lottie$2d$react$2f$build$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lottie-react/build/index.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$animations$2f$empty$2d$state$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/assets/animations/empty-state.json (json)");
"use client";
;
;
;
function NoPostsHolder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lottie$2d$react$2f$build$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    animationData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$animations$2f$empty$2d$state$2e$json__$28$json$29$__["default"],
                    loop: true
                }, void 0, false, {
                    fileName: "[project]/src/components/posts/NoPostsHolder.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/posts/NoPostsHolder.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-gray-400 text-center",
                children: "Oops! We couldn't find any posts matching your filters."
            }, void 0, false, {
                fileName: "[project]/src/components/posts/NoPostsHolder.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/posts/NoPostsHolder.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = NoPostsHolder;
var _c;
__turbopack_context__.k.register(_c, "NoPostsHolder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/posts/mockPosts.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "mockPosts": (()=>mockPosts)
});
const mockPosts = [
    {
        id: "1",
        title: "Mastering TypeScript",
        description: "Discover the power of static typing in JavaScript and how it can improve your productivity.",
        author: "Zakaria",
        timestamp: "2 hours ago",
        tags: [
            "Coding",
            "TypeScript"
        ],
        imageUrl: "https://picsum.photos/600/400?random=1",
        reactionCount: 24,
        commentCount: 5
    },
    {
        id: "2",
        title: "Exploring Microservices Architecture",
        description: "Learn how a microservices architecture can help you build scalable applications.",
        author: "Alice",
        timestamp: "3 hours ago",
        tags: [
            "Microservices",
            "Architecture"
        ],
        imageUrl: "https://picsum.photos/600/400?random=2",
        reactionCount: 35,
        commentCount: 12
    },
    {
        id: "3",
        title: "UI/UX Best Practices",
        description: "Designing interfaces that are not only visually appealing but also provide great user experience.",
        author: "Bob",
        timestamp: "5 hours ago",
        tags: [
            "Design",
            "UI/UX"
        ],
        imageUrl: "https://picsum.photos/600/400?random=3",
        reactionCount: 10,
        commentCount: 8
    },
    {
        id: "4",
        title: "Understanding Cloud-Native Development",
        description: "An in-depth look into building applications using cloud-native technologies and microservices.",
        author: "Clara",
        timestamp: "1 day ago",
        tags: [
            "Cloud",
            "Microservices"
        ],
        imageUrl: "https://picsum.photos/600/400?random=4",
        reactionCount: 18,
        commentCount: 3
    },
    {
        id: "5",
        title: "The Future of AI in Software Development",
        description: "How artificial intelligence is reshaping coding, testing, and deployment workflows.",
        author: "Derek",
        timestamp: "2 days ago",
        tags: [
            "AI",
            "Software Development"
        ],
        imageUrl: "https://picsum.photos/600/400?random=5",
        reactionCount: 44,
        commentCount: 16
    },
    {
        id: "6",
        title: "Boosting Productivity with VS Code",
        description: "Tips, tricks, and essential extensions to make Visual Studio Code your power tool.",
        author: "Eva",
        timestamp: "3 days ago",
        tags: [
            "Productivity",
            "VS Code"
        ],
        imageUrl: "https://picsum.photos/600/400?random=6",
        reactionCount: 27,
        commentCount: 6
    },
    {
        id: "7",
        title: "Learning Python: A Beginner's Guide",
        description: "Get started with Python programming with practical examples and exercises.",
        author: "Frank",
        timestamp: "4 days ago",
        tags: [
            "Coding",
            "Python"
        ],
        imageUrl: "https://picsum.photos/600/400?random=7",
        reactionCount: 30,
        commentCount: 10
    },
    {
        id: "8",
        title: "Exploring the World of Data Science",
        description: "Data science and analytics explained with real-world projects and examples.",
        author: "Grace",
        timestamp: "5 days ago",
        tags: [
            "Data Science",
            "Analytics"
        ],
        imageUrl: "https://picsum.photos/600/400?random=8",
        reactionCount: 22,
        commentCount: 7
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/posts/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ExplorePostsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$posts$2f$ExplorePostsFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/posts/ExplorePostsFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$posts$2f$RecentPosts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/posts/RecentPosts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$posts$2f$NoPostsHolder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/posts/NoPostsHolder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$posts$2f$mockPosts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/posts/mockPosts.ts [app-client] (ecmascript)");
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
function ExplorePostsPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialTag = searchParams.get("tag") || "";
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        keyword: "",
        tag: initialTag,
        dateRange: "all",
        sort: "recent"
    });
    const [filteredPosts, setFilteredPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$posts$2f$mockPosts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPosts"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExplorePostsPage.useEffect": ()=>{
            let results = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$posts$2f$mockPosts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockPosts"];
            if (filters.keyword) {
                results = results.filter({
                    "ExplorePostsPage.useEffect": (post)=>post.title.toLowerCase().includes(filters.keyword.toLowerCase()) || post.description.toLowerCase().includes(filters.keyword.toLowerCase())
                }["ExplorePostsPage.useEffect"]);
            }
            if (filters.tag) {
                results = results.filter({
                    "ExplorePostsPage.useEffect": (post)=>post.tags?.includes(filters.tag)
                }["ExplorePostsPage.useEffect"]);
            }
            setFilteredPosts(results);
        }
    }["ExplorePostsPage.useEffect"], [
        filters
    ]);
    const handleLoadMore = ()=>{
        console.log("Load more posts");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-slate-900 text-white pt-8 pb-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "max-w-7xl mx-auto px-4 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.4
                    },
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl font-bold",
                            children: "🔍 Explore Posts"
                        }, void 0, false, {
                            fileName: "[project]/src/app/posts/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-400 text-sm md:text-base mt-1",
                            children: "Use the filters below to discover relevant content."
                        }, void 0, false, {
                            fileName: "[project]/src/app/posts/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/posts/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$posts$2f$ExplorePostsFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onFilterChange: setFilters
                }, void 0, false, {
                    fileName: "[project]/src/app/posts/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                filteredPosts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$posts$2f$RecentPosts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    posts: filteredPosts,
                    onLoadMore: handleLoadMore,
                    hasMore: true
                }, void 0, false, {
                    fileName: "[project]/src/app/posts/page.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$posts$2f$NoPostsHolder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/posts/page.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/posts/page.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/posts/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(ExplorePostsPage, "YzEL8zbGWBTWx9IKtmiNj4bP3vM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ExplorePostsPage;
var _c;
__turbopack_context__.k.register(_c, "ExplorePostsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d4020534._.js.map