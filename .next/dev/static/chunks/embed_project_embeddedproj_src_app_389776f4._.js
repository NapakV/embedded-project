(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/embed/project/embeddedproj/src/app/components/icons/MicIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MicIcon",
    ()=>MicIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/embed/project/embeddedproj/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/embed/project/embeddedproj/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const MicIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "b7f8fb7ce05357786a9a81c03efcbbac3058838a0ce59e16662b189abc2130fb") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b7f8fb7ce05357786a9a81c03efcbbac3058838a0ce59e16662b189abc2130fb";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "size-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z"
                }, void 0, false, {
                    fileName: "[project]/embed/project/embeddedproj/src/app/components/icons/MicIcon.tsx",
                    lineNumber: 12,
                    columnNumber: 109
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z"
                }, void 0, false, {
                    fileName: "[project]/embed/project/embeddedproj/src/app/components/icons/MicIcon.tsx",
                    lineNumber: 12,
                    columnNumber: 185
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/embed/project/embeddedproj/src/app/components/icons/MicIcon.tsx",
            lineNumber: 12,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = MicIcon;
var _c;
__turbopack_context__.k.register(_c, "MicIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/embed/project/embeddedproj/src/app/api/google.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadFormDataToDrive",
    ()=>uploadFormDataToDrive
]);
const { google } = __turbopack_context__.r("[project]/embed/project/embeddedproj/node_modules/googleapis/build/src/index.js [app-client] (ecmascript)");
const FormData = __turbopack_context__.r("[project]/embed/project/embeddedproj/node_modules/form-data/lib/browser.js [app-client] (ecmascript)");
const axios = __turbopack_context__.r("[project]/embed/project/embeddedproj/node_modules/axios/dist/browser/axios.cjs [app-client] (ecmascript)");
async function uploadFormDataToDrive(formData, accessToken) {
    try {
        // If you have the file as Buffer from FormData
        const fileBuffer = formData; // Assuming you extract the file buffer
        const auth = new google.auth.OAuth2();
        auth.setCredentials({
            access_token: accessToken
        });
        const drive = google.drive({
            version: 'v3',
            auth
        });
        const response = await drive.files.create({
            requestBody: {
                name: `audio-${Date.now()}.webm`,
                mimeType: 'audio/webm',
                parents: [
                    'root'
                ] // Optional: specify folder ID
            },
            media: {
                mimeType: 'audio/webm',
                body: fileBuffer
            },
            fields: 'id, name, webViewLink, webContentLink'
        });
        return {
            success: true,
            fileId: response.data.id,
            fileName: response.data.name,
            viewLink: response.data.webViewLink,
            downloadLink: response.data.webContentLink
        };
    } catch (error) {
        console.error('Google Drive upload error:', error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/embed/project/embeddedproj/src/app/components/Mic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mic",
    ()=>Mic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/embed/project/embeddedproj/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/embed/project/embeddedproj/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$src$2f$app$2f$components$2f$icons$2f$MicIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/embed/project/embeddedproj/src/app/components/icons/MicIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/embed/project/embeddedproj/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$src$2f$app$2f$api$2f$google$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/embed/project/embeddedproj/src/app/api/google.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Mic = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "718d9e8ed7274b3d1436997d99e5f6720b46f0f7b4a5b45a3a26979f7f2891be") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "718d9e8ed7274b3d1436997d99e5f6720b46f0f7b4a5b45a3a26979f7f2891be";
    }
    const [canRecord, setCanRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioUrl, setAudioUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const sendGoogleDriveApi = _temp;
    let t1;
    if ($[2] !== audioUrl) {
        t1 = ()=>{
            let mounted = true;
            const init = async function init() {
                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    setCanRecord(false);
                    return;
                }
                ;
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        audio: true
                    });
                    if (!mounted) {
                        return;
                    }
                    streamRef.current = stream;
                    const recorder = new MediaRecorder(stream);
                    recorder.ondataavailable = (e)=>{
                        if (e.data && e.data.size > 0) {
                            chunksRef.current.push(e.data);
                        }
                    };
                    recorder.onstop = ()=>{
                        const audioBlob_0 = new Blob(chunksRef.current, {
                            type: "audio/webm"
                        });
                        chunksRef.current = [];
                        const url = URL.createObjectURL(audioBlob_0);
                        setAudioUrl(url);
                        sendGoogleDriveApi(audioBlob_0);
                    };
                    recorderRef.current = recorder;
                    setCanRecord(true);
                } catch (t2) {
                    const err = t2;
                    console.error("Error accessing microphone:", err);
                    setCanRecord(false);
                }
            };
            init();
            return ()=>{
                mounted = false;
                if (recorderRef.current && recorderRef.current.state !== "inactive") {
                    try {
                        recorderRef.current.stop();
                    } catch  {}
                }
                if (streamRef.current) {
                    streamRef.current.getTracks().forEach(_temp2);
                    streamRef.current = null;
                }
                if (audioUrl) {
                    URL.revokeObjectURL(audioUrl);
                }
            };
        };
        $[2] = audioUrl;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== canRecord || $[6] !== isRecording) {
        t3 = ()=>{
            if (!canRecord) {
                return;
            }
            const recorder_0 = recorderRef.current;
            if (!recorder_0) {
                return;
            }
            if (!isRecording) {
                chunksRef.current = [];
                ;
                try {
                    recorder_0.start();
                    setIsRecording(true);
                } catch (t4) {
                    const err_0 = t4;
                    console.error("Failed to start recorder", err_0);
                }
            } else {
                ;
                try {
                    recorder_0.stop();
                } catch (t5) {
                    const err_1 = t5;
                    console.error("Failed to stop recorder", err_1);
                }
                setIsRecording(false);
            }
        };
        $[5] = canRecord;
        $[6] = isRecording;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleClick = t3;
    const t4 = `bg-primary-200 h-[70px] w-[70px] relative text-primary-800 py-2 px-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center
                        ${isRecording ? "animate-bounce" : ""}`;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center absolute justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$src$2f$app$2f$components$2f$icons$2f$MicIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicIcon"], {}, void 0, false, {
                fileName: "[project]/embed/project/embeddedproj/src/app/components/Mic.tsx",
                lineNumber: 142,
                columnNumber: 69
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/embed/project/embeddedproj/src/app/components/Mic.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== handleClick || $[10] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t4,
            onClick: handleClick,
            children: t5
        }, void 0, false, {
            fileName: "[project]/embed/project/embeddedproj/src/app/components/Mic.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = handleClick;
        $[10] = t4;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== isRecording) {
        t7 = isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-primary-200",
            children: "Listening..."
        }, void 0, false, {
            fileName: "[project]/embed/project/embeddedproj/src/app/components/Mic.tsx",
            lineNumber: 158,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-primary-200",
            children: "Tap to speak"
        }, void 0, false, {
            fileName: "[project]/embed/project/embeddedproj/src/app/components/Mic.tsx",
            lineNumber: 158,
            columnNumber: 87
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = isRecording;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== audioUrl) {
        t8 = audioUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
            className: "mt-2",
            controls: true,
            src: audioUrl
        }, void 0, false, {
            fileName: "[project]/embed/project/embeddedproj/src/app/components/Mic.tsx",
            lineNumber: 166,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = audioUrl;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t6 || $[17] !== t7 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center gap-1",
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/embed/project/embeddedproj/src/app/components/Mic.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    return t9;
};
_s(Mic, "KCjUOnyNthHN4/sqs8LAl5sY0ow=");
_c = Mic;
async function _temp(audioBlob) {
    const formData = new FormData();
    formData.append("file", audioBlob, "recording.webm");
    console.log("Uploading to Google Drive...");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$embed$2f$project$2f$embeddedproj$2f$src$2f$app$2f$api$2f$google$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFormDataToDrive"])(formData);
}
function _temp2(t) {
    return t.stop();
}
var _c;
__turbopack_context__.k.register(_c, "Mic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=embed_project_embeddedproj_src_app_389776f4._.js.map