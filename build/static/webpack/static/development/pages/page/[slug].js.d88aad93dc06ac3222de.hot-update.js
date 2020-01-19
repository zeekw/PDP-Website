webpackHotUpdate("static/development/pages/page/[slug].js",{

/***/ "./components/Document.js":
/*!********************************!*\
  !*** ./components/Document.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-autobind */ "./node_modules/react-autobind/index.js");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_document_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/document.sass */ "./styles/document.sass");
/* harmony import */ var _styles_document_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_document_sass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sanity_client_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sanity-client.js */ "./sanity-client.js");
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helperFunctions.js */ "./helperFunctions.js");
/* harmony import */ var _File_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./File.js */ "./components/File.js");







var _jsxFileName = "/Users/isaac/Desktop/PDP-Website/components/Document.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var BlockContent = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");

var Document =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Document, _React$Component);

  function Document() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Document);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Document).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      data: []
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Document, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      data[null] = '';
      this.setState({
        data: this.props.data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var imageKey = this.props.image;
      var headlineKey = this.props.headline;
      var primaryDetailKey = this.props.primaryDetail;
      var secondaryDetailKey = this.props.secondaryDetail;
      var bodyKey = this.props.body;
      var serializers = {
        types: {
          code: function code(props) {
            return __jsx("pre", {
              "data-language": props.node.language,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            }, __jsx("code", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            }, props.node.code));
          },
          file: function file(props) {
            var _ref = props.node.asset._ref;

            var splitRef = _ref.split('-');

            var reassembledFilename = splitRef[1] + '.' + splitRef[2];
            var url = 'https://cdn.sanity.io/files/ocpl5ulk/pdp-data/' + reassembledFilename;

            var Element = __jsx(_File_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
              src: url,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            });

            return Element;
          },
          embed: function embed(props) {
            return __jsx("div", {
              className: "embed",
              dangerouslySetInnerHTML: {
                __html: props.node.code
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            });
          }
        }
      };

      function findFocalPoint(image) {
        if ("hotspot" in image) {
          var x = image.hotspot.x;
          var y = image.hotspot.y;
          return {
            x: x,
            y: y
          };
        } else {
          return {
            x: 0.5,
            y: 0.5
          };
        }
      }

      var returnImg = function returnImg(item) {
        if (imageKey == null) {
          return '';
        } else if (!(imageKey in item)) {
          return '';
        } else if (!("asset" in item[imageKey])) {
          return '';
        } else {
          return __jsx("img", {
            id: "DocumentImage",
            src: Object(_helperFunctions_js__WEBPACK_IMPORTED_MODULE_13__["SanityImageUrl"])(item[imageKey], {
              w: 800,
              h: 400,
              fp: findFocalPoint(item[imageKey])
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          });
        }
      };

      return __jsx("div", {
        id: "DocumentContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, returnImg(this.props.data) != '' ? __jsx("div", {
        id: "ImageContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, " ", returnImg(this.props.data), " ") : null, __jsx("div", {
        id: "DocumentText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, this.props.data[headlineKey]), __jsx("h6", {
        style: {
          display: primaryDetailKey != null || typeof primaryDetailKey !== 'undefined' ? 'inline' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("span", {
        id: "PrimaryDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.props.data[primaryDetailKey]), __jsx("span", {
        id: "DetailDivider",
        style: {
          display: (secondaryDetailKey != null || typeof secondaryDetailKey !== 'undefined') && this.props.data[secondaryDetailKey] != '' ? 'inline' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "|"), __jsx("span", {
        id: "SecondaryDetail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, this.props.data[secondaryDetailKey])), __jsx(BlockContent, {
        id: "DocumentDescription",
        blocks: this.props.data[bodyKey],
        serializers: serializers,
        projectId: "ocpl5ulk",
        dataset: "pdp-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })));
    }
  }]);

  return Document;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Document);

/***/ }),

/***/ "./components/File.js":
/*!****************************!*\
  !*** ./components/File.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_filestyle_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/filestyle.sass */ "./styles/filestyle.sass");
/* harmony import */ var _styles_filestyle_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_filestyle_sass__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/isaac/Desktop/PDP-Website/components/File.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var File =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(File, _React$Component);

  function File() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, File);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(File).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(File, [{
    key: "render",
    value: function render() {
      return __jsx("a", {
        href: this.props.src,
        className: "File",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("iframe", {
        src: this.props.src,
        height: "260",
        width: "200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), __jsx("div", {
        className: "cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), __jsx("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.src.split('/')[6]));
    }
  }]);

  return File;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (File);

/***/ })

})
//# sourceMappingURL=[slug].js.d88aad93dc06ac3222de.hot-update.js.map