(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_1e90f4a4._.js", {

"[project]/src/lib/cognitoConfig.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cognitoConfig": (()=>cognitoConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const cognitoConfig = {
    authority: ("TURBOPACK compile-time value", "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_tHNOp1k1R"),
    client_id: ("TURBOPACK compile-time value", "1nqekkmah4j4eitv8ng3160jor"),
    redirect_uri: ("TURBOPACK compile-time value", "http://localhost:3000"),
    response_type: "code",
    scope: "phone openid email"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/providers/CognitoProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CognitoProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$oidc$2d$context$2f$dist$2f$esm$2f$react$2d$oidc$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-oidc-context/dist/esm/react-oidc-context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cognitoConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cognitoConfig.ts [app-client] (ecmascript)");
"use client";
;
;
;
function CognitoProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$oidc$2d$context$2f$dist$2f$esm$2f$react$2d$oidc$2d$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cognitoConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cognitoConfig"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/CognitoProvider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = CognitoProvider;
var _c;
__turbopack_context__.k.register(_c, "CognitoProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1e90f4a4._.js.map