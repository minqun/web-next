"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n/*\n * @Date: 1985-10-26 16:15:00\n * @LastEditors: M.re c1029mq@qq.com\n * @LastEditTime: 2022-09-02 15:50:12\n * @FilePath: /uuspy-website-node/pages/index.js\n */ \n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Home(data) {\n    _s();\n    var ref = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)(\"common\"), t = ref.t, i18n = ref.i18n;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(data.locale), locale = ref1[0], setLocale = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(data, document);\n    }, [\n        locale\n    ]);\n    var handleChangeLanguage = function() {\n        console.log(\"document.body\", data.locale);\n        if (data.locale == \"zh\") {\n            router.push(\"/en\");\n        } else {\n            router.push(\"/zh\");\n        }\n        i18n.changeLanguage(\"zh\");\n        setLocale(\"zh\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: data.favicon\n                    }, void 0, false, {\n                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: [\n                            \"Welcome\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleChangeLanguage,\n                                children: locale\n                            }, void 0, false, {\n                                fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 18\n                            }, this),\n                            t(\"footer.end\")\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/posts\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"\\u8DEF\\u75311\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: [\n                            \"Get started by editing\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().code),\n                                children: \"pages/index.js\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/docs\",\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Documentation \\u2192\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Find in-depth information about Next.js features and API.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/learn\",\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Learn \\u2192\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Learn about Next.js in an interactive course with quizzes!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/vercel/next.js/tree/canary/examples\",\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Examples \\u2192\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Discover and deploy boilerplate example Next.js projects.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Deploy \\u2192\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Instantly deploy your Next.js site to a public URL with Vercel.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chenminqun/Desktop/board/otherProject/uuspy-website-node/pages/index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"CH0jybjgKFzEWtSI2J8t49RGgfQ=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGF0ZTogMTk4NS0xMC0yNiAxNjoxNTowMFxuICogQExhc3RFZGl0b3JzOiBNLnJlIGMxMDI5bXFAcXEuY29tXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTA5LTAyIDE1OjUwOjEyXG4gKiBARmlsZVBhdGg6IC91dXNweS13ZWJzaXRlLW5vZGUvcGFnZXMvaW5kZXguanNcbiAqL1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB2YXJpYWJsZXMgZnJvbSAnLi4vc3R5bGVzL3ZhcmlhYmxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJztcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnO1xuaW1wb3J0IHsgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaTE4bmV4dC9zZXJ2ZXJTaWRlVHJhbnNsYXRpb25zJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyAoY29udGV4dCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCAoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L2FwaS90ZXN0YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbiAoKTtcbiAgZGF0YS5mYXZpY29uID0gJy9mYXZpY29uLmljbyc7XG4gIGRhdGEudGl0bGUgPSAnQ3JlYXRlIE5leHQgQXBwMSAnO1xuICByZXR1cm4ge1xuICAgIFxuICAgIHByb3BzOiB7Li4uZGF0YSwuLi4oYXdhaXQgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyhjb250ZXh0LmxvY2FsZSwgWydjb21tb24nXSkpLGxvY2FsZTogY29udGV4dC5sb2NhbGV9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKGRhdGEpIHtcbiAgY29uc3Qge3QsIGkxOG59ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlciAoKTtcbiAgY29uc3QgW2xvY2FsZSwgc2V0TG9jYWxlXSA9IHVzZVN0YXRlKGRhdGEubG9jYWxlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zb2xlLmxvZyAoZGF0YSwgZG9jdW1lbnQpXG4gIH0sIFtsb2NhbGVdKTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlTGFuZ3VhZ2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RvY3VtZW50LmJvZHknLCBkYXRhLmxvY2FsZSlcbiAgICBpZiAoZGF0YS5sb2NhbGUgPT0gJ3poJykge1xuICAgICByb3V0ZXIucHVzaCgnL2VuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goJy96aCcpXG4gICAgfVxuICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoJ3poJyk7XG4gICAgc2V0TG9jYWxlKCd6aCcpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntkYXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtkYXRhLmZhdmljb259IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VMYW5ndWFnZX0+e2xvY2FsZX08L2J1dHRvbj5cbiAgICAgICAgICB7dCgnZm9vdGVyLmVuZCcpfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHNcIj5cbiAgICAgICAgICA8YT7ot6/nlLExPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5neycgJ31cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5wYWdlcy9pbmRleC5qczwvY29kZT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+RG9jdW1lbnRhdGlvbiAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMj5MZWFybiAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5FeGFtcGxlcyAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5EZXBsb3kgJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ2YXJpYWJsZXMiLCJzdHlsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVRyYW5zbGF0aW9uIiwidXNlUm91dGVyIiwiSG9tZSIsImRhdGEiLCJ0IiwiaTE4biIsInJvdXRlciIsImxvY2FsZSIsInNldExvY2FsZSIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImhhbmRsZUNoYW5nZUxhbmd1YWdlIiwicHVzaCIsImNoYW5nZUxhbmd1YWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImZhdmljb24iLCJtYWluIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiYSIsInAiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJncmlkIiwiY2FyZCIsImgyIiwiZm9vdGVyIiwidGFyZ2V0Iiwic3BhbiIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});