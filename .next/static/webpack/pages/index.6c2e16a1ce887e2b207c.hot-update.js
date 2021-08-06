self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-date-range/dist/styles.css */ "./node_modules/react-date-range/dist/styles.css");
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-date-range/dist/theme/default.css */ "./node_modules/react-date-range/dist/theme/default.css");
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-date-range */ "./node_modules/react-date-range/dist/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\gupta\\Music\\Airbnb\\components\\Header.js",
    _s = $RefreshSig$();




 // main style file

 // theme css file




function Header(_ref) {
  _s();

  var _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "Start your search" : _ref$placeholder;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      searchInput = _useState[0],
      setSearchInput = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date()),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date()),
      endDate = _useState3[0],
      setEndDate = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      noOfGuests = _useState4[0],
      setNoOfGuest = _useState4[1];

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  var selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  };

  var search = function search() {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests
      }
    });
    setSearchInput("");
  };

  var handleSelect = function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  var resetInput = function resetInput() {
    setSearchInput("");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: " sticky top-0 z-50 grid grid-cols-3 bg-white shadow p-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: function onClick() {
        return router.push("/search");
      },
      className: "\r relative \r flex \r items-center \r h-10 \r cursor-pointer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: "https://links.papareact.com/qd3",
        layout: "fill",
        objectFit: "contain",
        objectPosition: "left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center md:border-2 rounded-full py-2 md:shadow-sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "flex-grow pl-5 bg-transparent outline-none",
        value: searchInput,
        onChange: function onChange(e) {
          return setSearchInput(e.target.value);
        },
        type: "text",
        placeholder: placeholder
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {
        className: "hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-4 justify-end text-gray-500",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: " hidden md:line cursor-pointer",
        children: "Become a host"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.GlobeAltIcon, {
        className: "h-6 cursor-pointer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2 border-2 p-2 rounded-full",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.MenuIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.UserCircleIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), searchInput && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col col-span-3 mx-auto ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_date_range__WEBPACK_IMPORTED_MODULE_6__.DateRangePicker, {
        ranges: [selectionRange],
        minDate: new Date(),
        rangeColors: ["#FD5B61"],
        onChange: handleSelect
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 20
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-2xlflex-grow font-semibold",
          children: "Number of guests"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.UsersIcon, {
            className: "h-5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            value: noOfGuests,
            onChange: function onChange(e) {
              return setNoOfGuest(e.target.value);
            },
            min: 1,
            type: "number",
            className: "w-12 pl-2 mb-2 text-lg outline-none text-red-400"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "flex-grow text-gray-500",
          onClick: resetInput,
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "flex-grow text-red-400",
          onClick: search,
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, this);
}

_s(Header, "al3w1fRt1hLlEddAIypzZHK6SxU=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicGxhY2Vob2xkZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJEYXRlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJub09mR3Vlc3RzIiwic2V0Tm9PZkd1ZXN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwic2VsZWN0aW9uUmFuZ2UiLCJrZXkiLCJzZWFyY2giLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImxvY2F0aW9uIiwidG9JU09TdHJpbmciLCJoYW5kbGVTZWxlY3QiLCJyYW5nZXMiLCJzZWxlY3Rpb24iLCJyZXNldElucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFMkM7O0NBQ087O0FBQ2xEO0FBQ0E7O0FBR0EsU0FBU0EsTUFBVCxPQUFxRDtBQUFBOztBQUFBLDhCQUFwQ0MsV0FBb0M7QUFBQSxNQUFwQ0EsV0FBb0MsaUNBQXRCLG1CQUFzQjs7QUFBQSxrQkFDWEMsK0NBQVEsQ0FBQyxFQUFELENBREc7QUFBQSxNQUMxQ0MsV0FEMEM7QUFBQSxNQUM3QkMsY0FENkI7O0FBQUEsbUJBRWZGLCtDQUFRLENBQUMsSUFBSUcsSUFBSixFQUFELENBRk87QUFBQSxNQUUxQ0MsU0FGMEM7QUFBQSxNQUUvQkMsWUFGK0I7O0FBQUEsbUJBR25CTCwrQ0FBUSxDQUFDLElBQUlHLElBQUosRUFBRCxDQUhXO0FBQUEsTUFHMUNHLE9BSDBDO0FBQUEsTUFHakNDLFVBSGlDOztBQUFBLG1CQUlkUCwrQ0FBUSxDQUFDLENBQUQsQ0FKTTtBQUFBLE1BSTFDUSxVQUowQztBQUFBLE1BSTlCQyxZQUo4Qjs7QUFLakQsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUdBLE1BQU1DLGNBQWMsR0FBRztBQUVuQlIsYUFBUyxFQUFDQSxTQUZTO0FBR25CRSxXQUFPLEVBQUVBLE9BSFU7QUFJbkJPLE9BQUcsRUFBQztBQUplLEdBQXZCOztBQU9BLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakJKLFVBQU0sQ0FBQ0ssSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxTQURGO0FBRVJDLFdBQUssRUFBQztBQUNGQyxnQkFBUSxFQUFDakIsV0FEUDtBQUVGRyxpQkFBUyxFQUFFQSxTQUFTLENBQUNlLFdBQVYsRUFGVDtBQUdGYixlQUFPLEVBQUVBLE9BQU8sQ0FBQ2EsV0FBUixFQUhQO0FBSUZYLGtCQUFVLEVBQVZBO0FBSkU7QUFGRSxLQUFaO0FBU0FOLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0gsR0FYRDs7QUFhQSxNQUFNa0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCaEIsZ0JBQVksQ0FBQ2dCLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQmxCLFNBQWxCLENBQVo7QUFDQUcsY0FBVSxDQUFDYyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJoQixPQUFsQixDQUFWO0FBQ0gsR0FIRDs7QUFNQSxNQUFNaUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQnJCLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0gsR0FGRDs7QUFHQSxzQkFDSTtBQUFRLGFBQVMsRUFBQyx5REFBbEI7QUFBQSw0QkFHSTtBQUFLLGFBQU8sRUFBRTtBQUFBLGVBQU1RLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLFNBQVosQ0FBTjtBQUFBLE9BQWQ7QUFBNEMsZUFBUyxFQUFDLCtEQUF0RDtBQUFBLDZCQU1JLDhEQUFDLG1EQUFEO0FBQ0EsV0FBRyxFQUFDLGlDQURKO0FBRUEsY0FBTSxFQUFDLE1BRlA7QUFHQSxpQkFBUyxFQUFDLFNBSFY7QUFJQSxzQkFBYyxFQUFDO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQWtCSTtBQUFLLGVBQVMsRUFBQyw4REFBZjtBQUFBLDhCQUNJO0FBQU8saUJBQVMsRUFBQyw0Q0FBakI7QUFDQSxhQUFLLEVBQUVkLFdBRFA7QUFFQSxnQkFBUSxFQUFHLGtCQUFDdUIsQ0FBRDtBQUFBLGlCQUFPdEIsY0FBYyxDQUFDc0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSxTQUZYO0FBR0EsWUFBSSxFQUFDLE1BSEw7QUFJQSxtQkFBVyxFQUFFM0I7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFPSSw4REFBQyw4REFBRDtBQUNBLGlCQUFTLEVBQUM7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKLGVBK0JJO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFDLGdDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw4REFBQyxnRUFBRDtBQUFjLGlCQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBSUk7QUFBSyxpQkFBUyxFQUFDLHVEQUFmO0FBQUEsZ0NBQ0EsOERBQUMsNERBQUQ7QUFBVSxtQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFQSw4REFBQyxrRUFBRDtBQUFnQixtQkFBUyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JKLEVBd0NLRSxXQUFXLGlCQUNSO0FBQUssZUFBUyxFQUFDLG1DQUFmO0FBQUEsOEJBQ0csOERBQUMsNkRBQUQ7QUFDQSxjQUFNLEVBQUUsQ0FBQ1csY0FBRCxDQURSO0FBRUEsZUFBTyxFQUFFLElBQUlULElBQUosRUFGVDtBQUdBLG1CQUFXLEVBQUUsQ0FBQyxTQUFELENBSGI7QUFJQSxnQkFBUSxFQUFFaUI7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFRQTtBQUFLLGlCQUFTLEVBQUMsbUNBQWY7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMsaUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGtDQUNJLDhEQUFDLDZEQUFEO0FBQVcscUJBQVMsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFDQSxpQkFBSyxFQUFFWixVQURQO0FBRUEsb0JBQVEsRUFBRSxrQkFBQ2dCLENBQUQ7QUFBQSxxQkFBT2YsWUFBWSxDQUFDZSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUFBLGFBRlY7QUFHQSxlQUFHLEVBQUUsQ0FITDtBQUlBLGdCQUFJLEVBQUMsUUFKTDtBQUtBLHFCQUFTLEVBQUM7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSQSxlQXFCQTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNJO0FBQVEsbUJBQVMsRUFBQyx5QkFBbEI7QUFBNEMsaUJBQU8sRUFBRUgsVUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLG1CQUFTLEVBQUMsd0JBQWxCO0FBQTJDLGlCQUFPLEVBQUVULE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3RUg7O0dBN0dRaEIsTTtVQUtVYSw4RDs7O0tBTFZiLE07QUErR1QsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmMyZTE2YTFjZTg4N2UyYjIwN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtHbG9iZUFsdEljb24sIE1lbnVJY29uLCBTZWFyY2hJY29uLCBVc2VyQ2lyY2xlSWNvbiwgVXNlcnNJY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiXHJcblxyXG5pbXBvcnQgJ3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9zdHlsZXMuY3NzJzsgLy8gbWFpbiBzdHlsZSBmaWxlXHJcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3RoZW1lL2RlZmF1bHQuY3NzJzsgLy8gdGhlbWUgY3NzIGZpbGVcclxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAncmVhY3QtZGF0ZS1yYW5nZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7cGxhY2Vob2xkZXIgPSBcIlN0YXJ0IHlvdXIgc2VhcmNoXCJ9KSB7XHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgW25vT2ZHdWVzdHMsIHNldE5vT2ZHdWVzdF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICBjb25zdCBzZWxlY3Rpb25SYW5nZSA9IHtcclxuXHJcbiAgICAgICAgc3RhcnREYXRlOnN0YXJ0RGF0ZSxcclxuICAgICAgICBlbmREYXRlOiBlbmREYXRlLFxyXG4gICAgICAgIGtleTpcInNlbGVjdGlvblwiLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAgICAgICAgICAgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246c2VhcmNoSW5wdXQsXHJcbiAgICAgICAgICAgICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogZW5kRGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgbm9PZkd1ZXN0cyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0U2VhcmNoSW5wdXQoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHJhbmdlcykgPT4ge1xyXG4gICAgICAgIHNldFN0YXJ0RGF0ZShyYW5nZXMuc2VsZWN0aW9uLnN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgc2V0RW5kRGF0ZShyYW5nZXMuc2VsZWN0aW9uLmVuZERhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCByZXNldElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaElucHV0KFwiXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIiBzdGlja3kgdG9wLTAgei01MCBncmlkIGdyaWQtY29scy0zIGJnLXdoaXRlIHNoYWRvdyBwLTVcIj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBMZWZ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3NlYXJjaFwiKX0gY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgIHJlbGF0aXZlIFxyXG4gICAgICAgICAgICBmbGV4IFxyXG4gICAgICAgICAgICBpdGVtcy1jZW50ZXIgXHJcbiAgICAgICAgICAgIGgtMTAgXHJcbiAgICAgICAgICAgIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vcWQzXCJcclxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogTWlkZGxlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOmJvcmRlci0yIHJvdW5kZWQtZnVsbCBweS0yIG1kOnNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwbC01IGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfS8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1mbGV4IGgtOCBiZy1yZWQtNDAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMiBjdXJzb3ItcG9pbnRlciBtZDpteC0yXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFJpZ2h0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBqdXN0aWZ5LWVuZCB0ZXh0LWdyYXktNTAwXCI+IFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGhpZGRlbiBtZDpsaW5lIGN1cnNvci1wb2ludGVyXCI+QmVjb21lIGEgaG9zdDwvcD5cclxuICAgICAgICAgICAgICAgIDxHbG9iZUFsdEljb24gY2xhc3NOYW1lPVwiaC02IGN1cnNvci1wb2ludGVyXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGJvcmRlci0yIHAtMiByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJoLTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT1cImgtNlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzZWFyY2hJbnB1dCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMyBteC1hdXRvIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPERhdGVSYW5nZVBpY2tlciBcclxuICAgICAgICAgICAgICAgICAgIHJhbmdlcz17W3NlbGVjdGlvblJhbmdlXX0gXHJcbiAgICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgcmFuZ2VDb2xvcnM9e1tcIiNGRDVCNjFcIl19XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bGZsZXgtZ3JvdyBmb250LXNlbWlib2xkXCI+TnVtYmVyIG9mIGd1ZXN0czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc0ljb24gY2xhc3NOYW1lPVwiaC01XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9PZkd1ZXN0c30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm9PZkd1ZXN0KGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIHBsLTIgbWItMiB0ZXh0LWxnIG91dGxpbmUtbm9uZSB0ZXh0LXJlZC00MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgdGV4dC1ncmF5LTUwMFwiIG9uQ2xpY2s9e3Jlc2V0SW5wdXR9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleC1ncm93IHRleHQtcmVkLTQwMFwiIG9uQ2xpY2s9e3NlYXJjaH0+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9