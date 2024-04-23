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

/***/ "./src/components/teams/Teams.tsx":
/*!****************************************!*\
  !*** ./src/components/teams/Teams.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Card_CardContent_Grid_Typography_material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CardContent,Grid,Typography!=!@material-ui/core */ \"__barrel_optimize__?names=Card,CardContent,Grid,Typography!=!./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _TeamMemberList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamMemberList */ \"./src/components/teams/TeamMemberList.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TeamList = (param)=>{\n    let { teams } = param;\n    _s();\n    const [selectedTeam, setSelectedTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleToggleMembers = (team)=>{\n        setSelectedTeam(team === selectedTeam ? null : team);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_Grid_Typography_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n        container: true,\n        spacing: 3,\n        children: teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_Grid_Typography_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                item: true,\n                xs: 12,\n                sm: 6,\n                md: 4,\n                lg: 3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/team-members/\".concat(team.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_Grid_Typography_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                            onClick: ()=>handleToggleMembers(team),\n                            style: {\n                                cursor: \"pointer\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: team.imageUrl,\n                                        alt: team.name,\n                                        className: \"team-image\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\RCToolkit\\\\blackCobra\\\\src\\\\components\\\\teams\\\\Teams.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_Grid_Typography_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_Grid_Typography_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                            variant: \"h5\",\n                                            children: team.name\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\react\\\\RCToolkit\\\\blackCobra\\\\src\\\\components\\\\teams\\\\Teams.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\RCToolkit\\\\blackCobra\\\\src\\\\components\\\\teams\\\\Teams.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\react\\\\RCToolkit\\\\blackCobra\\\\src\\\\components\\\\teams\\\\Teams.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\RCToolkit\\\\blackCobra\\\\src\\\\components\\\\teams\\\\Teams.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\RCToolkit\\\\blackCobra\\\\src\\\\components\\\\teams\\\\Teams.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined),\n                    selectedTeam === team && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TeamMemberList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        members: team.members\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\RCToolkit\\\\blackCobra\\\\src\\\\components\\\\teams\\\\Teams.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 37\n                    }, undefined)\n                ]\n            }, team.id, true, {\n                fileName: \"D:\\\\react\\\\RCToolkit\\\\blackCobra\\\\src\\\\components\\\\teams\\\\Teams.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\react\\\\RCToolkit\\\\blackCobra\\\\src\\\\components\\\\teams\\\\Teams.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TeamList, \"eqN+G1oLwScSKTXhlnHomHnK2Ds=\");\n_c = TeamList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamList);\nvar _c;\n$RefreshReg$(_c, \"TeamList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZWFtcy9UZWFtcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNnQztBQUMxQjtBQUNmO0FBQ0Y7QUFZN0IsTUFBTVMsV0FBb0M7UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQ2xELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFjO0lBRTlELE1BQU1ZLHNCQUFzQixDQUFDQztRQUMzQkYsZ0JBQWdCRSxTQUFTSCxlQUFlLE9BQU9HO0lBQ2pEO0lBRUEscUJBQ0UsOERBQUNaLDBHQUFJQTtRQUFDYSxTQUFTO1FBQUNDLFNBQVM7a0JBQ3RCTixNQUFNTyxHQUFHLENBQUMsQ0FBQ0gscUJBQ1YsOERBQUNaLDBHQUFJQTtnQkFBQ2dCLElBQUk7Z0JBQUNDLElBQUk7Z0JBQUlDLElBQUk7Z0JBQUdDLElBQUk7Z0JBQUdDLElBQUk7O2tDQUNuQyw4REFBQ2Qsa0RBQUlBO3dCQUFDZSxNQUFNLGlCQUF5QixPQUFSVCxLQUFLVSxFQUFFO2tDQUNwQyw0RUFBQ3JCLDBHQUFJQTs0QkFBQ3NCLFNBQVMsSUFBTVosb0JBQW9CQzs0QkFBT1ksT0FBTztnQ0FBRUMsUUFBUTs0QkFBVTtzQ0FDekUsNEVBQUNDOztrREFDQyw4REFBQ3JCLG1EQUFLQTt3Q0FBQ3NCLEtBQUtmLEtBQUtnQixRQUFRO3dDQUFFQyxLQUFLakIsS0FBS2tCLElBQUk7d0NBQUVDLFdBQVU7Ozs7OztrREFDckQsOERBQUM3QixpSEFBV0E7a0RBQ1YsNEVBQUNDLGdIQUFVQTs0Q0FBQzZCLFNBQVE7c0RBQU1wQixLQUFLa0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUt4Q3JCLGlCQUFpQkcsc0JBQVEsOERBQUNSLHVEQUFjQTt3QkFBQzZCLFNBQVNyQixLQUFLcUIsT0FBTzs7Ozs7OztlQVhwQnJCLEtBQUtVLEVBQUU7Ozs7Ozs7Ozs7QUFnQjVEO0dBMUJNZjtLQUFBQTtBQTRCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90ZWFtcy9UZWFtcy50c3g/OWUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdyaWQsIENhcmQsIENhcmRDb250ZW50LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgVGVhbU1lbWJlckxpc3QgZnJvbSAnLi9UZWFtTWVtYmVyTGlzdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW50ZXJmYWNlIFRlYW0ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG1lbWJlcnM6IHN0cmluZ1tdO1xyXG4gIGltYWdlVXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUZWFtTGlzdFByb3BzIHtcclxuICB0ZWFtczogVGVhbVtdO1xyXG59XHJcblxyXG5jb25zdCBUZWFtTGlzdDogUmVhY3QuRkM8VGVhbUxpc3RQcm9wcz4gPSAoeyB0ZWFtcyB9KSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGVhbSwgc2V0U2VsZWN0ZWRUZWFtXSA9IHVzZVN0YXRlPFRlYW0gfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlTWVtYmVycyA9ICh0ZWFtOiBUZWFtKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRlYW0odGVhbSA9PT0gc2VsZWN0ZWRUZWFtID8gbnVsbCA6IHRlYW0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgIHt0ZWFtcy5tYXAoKHRlYW0pID0+IChcclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fSBsZz17M30ga2V5PXt0ZWFtLmlkfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdGVhbS1tZW1iZXJzLyR7dGVhbS5pZH1gfT4gXHJcbiAgICAgICAgICA8Q2FyZCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGVNZW1iZXJzKHRlYW0pfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0ZWFtLmltYWdlVXJsfSBhbHQ9e3RlYW0ubmFtZX0gY2xhc3NOYW1lPVwidGVhbS1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3RlYW0ubmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7c2VsZWN0ZWRUZWFtID09PSB0ZWFtICYmIDxUZWFtTWVtYmVyTGlzdCBtZW1iZXJzPXt0ZWFtLm1lbWJlcnN9IC8+fVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKSl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1MaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdyaWQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwiVGVhbU1lbWJlckxpc3QiLCJJbWFnZSIsIkxpbmsiLCJUZWFtTGlzdCIsInRlYW1zIiwic2VsZWN0ZWRUZWFtIiwic2V0U2VsZWN0ZWRUZWFtIiwiaGFuZGxlVG9nZ2xlTWVtYmVycyIsInRlYW0iLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwiaXRlbSIsInhzIiwic20iLCJtZCIsImxnIiwiaHJlZiIsImlkIiwib25DbGljayIsInN0eWxlIiwiY3Vyc29yIiwiZGl2Iiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJuYW1lIiwiY2xhc3NOYW1lIiwidmFyaWFudCIsIm1lbWJlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/teams/Teams.tsx\n"));

/***/ })

});