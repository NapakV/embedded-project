module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/embed/project/embeddedproj/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/25b59_8c761232._.js",
  "chunks/[root-of-the-server]__12eebb8a._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/embed/project/embeddedproj/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];