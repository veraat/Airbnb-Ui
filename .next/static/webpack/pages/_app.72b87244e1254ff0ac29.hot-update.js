self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/@badrap/bar-of-progress/dist/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@badrap/bar-of-progress/dist/index.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e){var t=function(e,t){Object.keys(t).forEach(function(o){e[o]=t[o]})},o={size:2,color:"#29e",className:"bar-of-progress",delay:80};e&&t(o,e);var a,i,s={position:"fixed",top:0,left:0,margin:0,padding:0,border:"none",borderRadius:0,backgroundColor:"currentColor",zIndex:1e4,height:"number"==typeof o.size?o.size+"px":o.size,color:o.color,opacity:0,width:"0%"},n={opacity:1,width:"99%",transition:"width 10s cubic-bezier(0.1, 0.05, 0, 1)"},l={opacity:0,width:"100%",transition:"width 0.1s ease-out, opacity 0.5s ease 0.2s"},c={opacity:.4,boxShadow:"3px 0 8px",height:"100%"};this.start=function(){i&&i.parentNode&&i.parentNode.removeChild(i),(i=document.body.appendChild(document.createElement("div"))).className=o.className+" stopped",t(i.style,s);var e=i.appendChild(document.createElement("div"));e.className="glow",t(e.style,c),null!=a&&clearTimeout(a),a=setTimeout(function(){a=null,i.className=o.className+" started",t(i.style,n)},o.delay),i.scrollTop=0},this.finish=function(){null!=a&&(clearTimeout(a),a=null),i&&(i.className=o.className+" finished",t(i.style,l))}}
//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_gupta_Music_Airbnb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @badrap/bar-of-progress */ "./node_modules/@badrap/bar-of-progress/dist/index.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\gupta\\Music\\Airbnb\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_gupta_Music_Airbnb_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWRyYXAvYmFyLW9mLXByb2dyZXNzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQWUsb0NBQVMsR0FBRyxvQkFBb0IsbUNBQW1DLFVBQVUsRUFBRSxJQUFJLDBEQUEwRCxVQUFVLFdBQVcsNk1BQTZNLElBQUksMkVBQTJFLElBQUksZ0ZBQWdGLElBQUksZ0RBQWdELHNCQUFzQix3SkFBd0osbURBQW1ELGlGQUFpRix1REFBdUQsd0JBQXdCLHdCQUF3QjtBQUM5K0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFFQTs7QUFDQSxTQUFTQSxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN2QyxzQkFBTyw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztLQUZRRixLO0FBSVQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43MmI4NzI0NGUxMjU0ZmYwYWMyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKG8pe2Vbb109dFtvXX0pfSxvPXtzaXplOjIsY29sb3I6XCIjMjllXCIsY2xhc3NOYW1lOlwiYmFyLW9mLXByb2dyZXNzXCIsZGVsYXk6ODB9O2UmJnQobyxlKTt2YXIgYSxpLHM9e3Bvc2l0aW9uOlwiZml4ZWRcIix0b3A6MCxsZWZ0OjAsbWFyZ2luOjAscGFkZGluZzowLGJvcmRlcjpcIm5vbmVcIixib3JkZXJSYWRpdXM6MCxiYWNrZ3JvdW5kQ29sb3I6XCJjdXJyZW50Q29sb3JcIix6SW5kZXg6MWU0LGhlaWdodDpcIm51bWJlclwiPT10eXBlb2Ygby5zaXplP28uc2l6ZStcInB4XCI6by5zaXplLGNvbG9yOm8uY29sb3Isb3BhY2l0eTowLHdpZHRoOlwiMCVcIn0sbj17b3BhY2l0eToxLHdpZHRoOlwiOTklXCIsdHJhbnNpdGlvbjpcIndpZHRoIDEwcyBjdWJpYy1iZXppZXIoMC4xLCAwLjA1LCAwLCAxKVwifSxsPXtvcGFjaXR5OjAsd2lkdGg6XCIxMDAlXCIsdHJhbnNpdGlvbjpcIndpZHRoIDAuMXMgZWFzZS1vdXQsIG9wYWNpdHkgMC41cyBlYXNlIDAuMnNcIn0sYz17b3BhY2l0eTouNCxib3hTaGFkb3c6XCIzcHggMCA4cHhcIixoZWlnaHQ6XCIxMDAlXCJ9O3RoaXMuc3RhcnQ9ZnVuY3Rpb24oKXtpJiZpLnBhcmVudE5vZGUmJmkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKSwoaT1kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpKS5jbGFzc05hbWU9by5jbGFzc05hbWUrXCIgc3RvcHBlZFwiLHQoaS5zdHlsZSxzKTt2YXIgZT1pLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO2UuY2xhc3NOYW1lPVwiZ2xvd1wiLHQoZS5zdHlsZSxjKSxudWxsIT1hJiZjbGVhclRpbWVvdXQoYSksYT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YT1udWxsLGkuY2xhc3NOYW1lPW8uY2xhc3NOYW1lK1wiIHN0YXJ0ZWRcIix0KGkuc3R5bGUsbil9LG8uZGVsYXkpLGkuc2Nyb2xsVG9wPTB9LHRoaXMuZmluaXNoPWZ1bmN0aW9uKCl7bnVsbCE9YSYmKGNsZWFyVGltZW91dChhKSxhPW51bGwpLGkmJihpLmNsYXNzTmFtZT1vLmNsYXNzTmFtZStcIiBmaW5pc2hlZFwiLHQoaS5zdHlsZSxsKSl9fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIiwiaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsLmNzc1wiXG5cbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3NcIjtcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==