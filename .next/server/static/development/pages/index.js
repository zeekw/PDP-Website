module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_carousel_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/carousel.sass */ "./styles/carousel.sass");
/* harmony import */ var _styles_carousel_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_carousel_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sanity-client */ "./sanity-client.js");
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helperFunctions.js */ "./helperFunctions.js");
var _jsxFileName = "/Users/isaac/Desktop/PDP-Website/components/Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class HomeCarousel extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const props = this.props;
    const data = props.data;
    var itemsWithImages = [];

    for (var item of data) {
      if (typeof item.image != "undefined") {
        itemsWithImages.push(item);
      }
    }

    var Items = itemsWithImages.map(itemData => __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
      key: itemData.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: '/' + itemData._type + '/[slug]',
      as: '/' + itemData._type + '/' + itemData.slug.current,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("img", {
      className: "d-block w-100",
      src: Object(_helperFunctions_js__WEBPACK_IMPORTED_MODULE_8__["SanityImageUrl"])(itemData.image, {
        w: "1200",
        h: "600"
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx("div", {
      className: "CarouselCaption",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, itemData.title)))));
    return __jsx("div", {
      id: "CarouselContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, Items));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HomeCarousel);

/***/ }),

/***/ "./components/DocumentList.js":
/*!************************************!*\
  !*** ./components/DocumentList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocumentList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-autobind */ "react-autobind");
/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_lines_ellipsis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-lines-ellipsis */ "react-lines-ellipsis");
/* harmony import */ var react_lines_ellipsis__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lines_ellipsis__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-truncate */ "react-truncate");
/* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_truncate__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lines_ellipsis_lib_responsiveHOC__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lines-ellipsis/lib/responsiveHOC */ "react-lines-ellipsis/lib/responsiveHOC");
/* harmony import */ var react_lines_ellipsis_lib_responsiveHOC__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lines_ellipsis_lib_responsiveHOC__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_textfit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-textfit */ "react-textfit");
/* harmony import */ var react_textfit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_textfit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_innertext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-innertext */ "react-innertext");
/* harmony import */ var react_innertext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_innertext__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_DocumentListStyle_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/DocumentListStyle.sass */ "./styles/DocumentListStyle.sass");
/* harmony import */ var _styles_DocumentListStyle_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_DocumentListStyle_sass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sanity_client_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sanity-client.js */ "./sanity-client.js");
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helperFunctions.js */ "./helperFunctions.js");

var _jsxFileName = "/Users/isaac/Desktop/PDP-Website/components/DocumentList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const BlockContent = __webpack_require__(/*! @sanity/block-content-to-react */ "@sanity/block-content-to-react");

const ResponsiveEllipsis = react_lines_ellipsis_lib_responsiveHOC__WEBPACK_IMPORTED_MODULE_7___default()()(react_lines_ellipsis__WEBPACK_IMPORTED_MODULE_5___default.a);
class DocumentList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      data: []
    });
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }

  render() {
    var data = this.state.data;

    if ("maxLength" in this.props) {
      data = data.slice(0, 3);
    }

    var headlineKey = this.props.headline;
    var imageKey = this.props.image;
    var primaryDetailKey = this.props.primaryDetail;
    var secondaryDetailKey = this.props.secondaryDetail;
    var bodyKey = this.props.body;
    const serializers = {
      types: {
        code: props => __jsx("pre", {
          "data-language": props.node.language,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx("code", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, props.node.code))
      }
    };

    var returnImg = function (item) {
      if (imageKey == null) {
        return '';
      } else if (!(imageKey in item)) {
        return '';
      } else if (!("asset" in item[imageKey])) {
        return '';
      } else {
        return __jsx("img", {
          class: "DocumentListItemImage",
          src: Object(_helperFunctions_js__WEBPACK_IMPORTED_MODULE_12__["SanityImageUrl"])(item[imageKey], {
            w: 730,
            h: 730
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        });
      }
    };

    var Items = data.slice(0, this.props.limit).map(function (itemData) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/" + itemData._type + "/[slug]",
        as: "/" + itemData._type + "/" + itemData.slug.current,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("li", {
        className: "DocumentListItem",
        key: itemData._id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("div", {
        className: "DocumentListItemBody",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, returnImg(itemData), __jsx("div", {
        className: "DocumentListItemText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(react_textfit__WEBPACK_IMPORTED_MODULE_8__["Textfit"], {
        max: 32,
        mode: "single",
        className: "DocumentListItemName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, itemData[headlineKey]), __jsx("h2", {
        className: "DocumentListItemName-Mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, itemData[headlineKey]), __jsx(react_textfit__WEBPACK_IMPORTED_MODULE_8__["Textfit"], {
        max: 14,
        mode: "single",
        className: "DocumentListItemInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("span", {
        className: "DocumentListItemDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, itemData[primaryDetailKey]), "\xA0", __jsx("span", {
        className: "DocumentListItemInfoDivider",
        style: {
          opacity: secondaryDetailKey == null || itemData[secondaryDetailKey] == '' ? '0' : '1'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, " | "), __jsx("span", {
        className: "DocumentListItemPrice",
        style: {
          display: itemData[secondaryDetailKey] == '' ? 'none' : 'inline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, itemData[secondaryDetailKey])), __jsx(react_truncate__WEBPACK_IMPORTED_MODULE_6___default.a, {
        lines: 4,
        ellipsis: "...",
        className: "DocumentListItemDescription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx(BlockContent, {
        blocks: itemData[bodyKey],
        serializers: serializers,
        projectId: "ocpl5ulk",
        dataset: "pdp-data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }))))));
    });
    return __jsx("ul", {
      id: "DocumentList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, Items);
  }

}

/***/ }),

/***/ "./components/DonateButton.js":
/*!************************************!*\
  !*** ./components/DonateButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_donatestyle_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/donatestyle.sass */ "./styles/donatestyle.sass");
/* harmony import */ var _styles_donatestyle_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_donatestyle_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/isaac/Desktop/PDP-Website/components/DonateButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DonateButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      id: "DonateButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("form", {
      action: "https://www.paypal.com/cgi-bin/webscr",
      method: "post",
      target: "_top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("input", {
      type: "hidden",
      name: "cmd",
      value: "_s-xclick",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), __jsx("input", {
      type: "hidden",
      name: "hosted_button_id",
      value: "4MR4GXLTFHUMU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("input", {
      id: "DonateButtonImage",
      type: "submit",
      src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
      border: "0",
      name: "submit",
      title: "PayPal - The safer, easier way to pay online!",
      alt: "Donate with PayPal button",
      value: "DONATE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("img", {
      alt: "",
      border: "0",
      src: "https://www.paypal.com/en_US/i/scr/pixel.gif",
      width: "1",
      height: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DonateButton);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_footerstyle_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/footerstyle.sass */ "./styles/footerstyle.sass");
/* harmony import */ var _styles_footerstyle_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footerstyle_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DonateButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DonateButton.js */ "./components/DonateButton.js");
var _jsxFileName = "/Users/isaac/Desktop/PDP-Website/components/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      id: "Footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      id: "FooterBody",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, '\u00A9 ' + new Date().getFullYear() + ' Philadelphia Dance Projects'), __jsx("div", {
      id: "ButtonContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(_components_DonateButton_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      id: "ContactButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "CONTACT")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "react-bootstrap/Dropdown");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_headerstyle_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/headerstyle.sass */ "./styles/headerstyle.sass");
/* harmony import */ var _styles_headerstyle_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_headerstyle_sass__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/isaac/Desktop/PDP-Website/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const props = this.props;
    const CurrentPage = props.CurrentPage;

    var NavStyle = function (Navigator) {
      if (Navigator == CurrentPage) {
        return {
          borderBottomWidth: 2,
          borderBottomStyle: 'solid',
          borderBottomColor: 'black !important'
        };
      } else {
        return {};
      }
    };

    return __jsx("div", {
      id: "Header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "../static/bootstrap.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), __jsx("img", {
      src: "../static/logo.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx("ul", {
      id: "Navigator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("li", {
      style: NavStyle("Home"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/projects",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("li", {
      style: NavStyle("Projects"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/press",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("li", {
      style: NavStyle("Press"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Press")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contributors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("li", {
      style: NavStyle("Contributors"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Contributors")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("li", {
      style: NavStyle("About"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/calendar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("li", {
      style: NavStyle("Calendar"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Calendar")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/announcements",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("li", {
      style: NavStyle("Announcements"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Announcements")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("li", {
      style: NavStyle("Contact"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Contact"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "MobileNavigator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
      id: "MobileNavigatorToggle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, CurrentPage), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Menu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Home"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/projects",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Projects"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/press",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Press"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contributors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Contributors"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "About"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/calendar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Calendar"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/announcements",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Announcements"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Contact"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./helperFunctions.js":
/*!****************************!*\
  !*** ./helperFunctions.js ***!
  \****************************/
/*! exports provided: sortByTimeDelta, SanityImageUrl, SortProjects, findFocalPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByTimeDelta", function() { return sortByTimeDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanityImageUrl", function() { return SanityImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortProjects", function() { return SortProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFocalPoint", function() { return findFocalPoint; });
/* harmony import */ var _sanity_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanity-client.js */ "./sanity-client.js");
 // Sort data by timeDelta value in ascending order

function sortByTimeDelta(data) {
  // Give each announcement/event a "timeDelta" value that is the number of milliseconds between when an announcement was last updated or an event occurs.
  for (var item of data) {
    var itemTime = 0;

    if (item._type == "event") {
      var itemTime = Date.parse(item.date);
    } else if (item._type == "announcement") {
      var itemTime = Date.parse(item._updatedAt);
    }

    item.timeDelta = Math.abs(itemTime - new Date().getTime());
  } // Sort


  data.sort(function compare(a, b) {
    if (a.timeDelta < b.timeDelta) {
      return -1;
    }

    if (a.timeDelta > b.timeDelta) {
      return 1;
    }

    return 0;
  });
  return data;
} // Custom UrlBuilder

function SanityImageUrl(image, options) {
  // Build assetID
  var fullRef = image.asset._ref;
  var ref = fullRef.split("-");
  var assetID = ref[1];
  var dimensions = ref[2];
  var extension = ref[3];
  var assetID = assetID + "-" + dimensions + "." + extension; // Assemble baseURL

  var baseArray = ["https://cdn.sanity.io/images", _sanity_client_js__WEBPACK_IMPORTED_MODULE_0__["projectId"], _sanity_client_js__WEBPACK_IMPORTED_MODULE_0__["dataset"], assetID];
  var baseURL = baseArray.join("/"); // Assemble queryString

  var params = [];

  for (const key in options) {
    var param = key + "=" + options[key];
    params.push(param);
  }

  if (!("fit" in options)) {
    params.push("fit=crop");
  }

  if (!("crop" in options)) {
    params.push("crop=focalpoint");
    var focalPoint = findFocalPoint(image);
    params.push("fp-x=" + focalPoint.x);
    params.push("fp-y=" + focalPoint.y);
  }

  params.push("q=80");
  params.push("auto=format");
  var queryString = params.join("&"); // Assemble fullURL

  var fullURL = baseURL + "?" + queryString;
  return fullURL;
}
function SortProjects(raw) {
  var sorted = [];
  var prioritized = [];
  var nonPrioritized = [];

  for (var i = 0; i < raw.length; i++) {
    if (raw[i].node.order > 0) {
      prioritized.push(raw[i]);
    } else {
      nonPrioritized.push(raw[i]);
    }
  }

  nonPrioritized.sort(function (a, b) {
    return Date.parse(b.node._updatedAt) - Date.parse(a.node._updatedAt);
  });
  sorted = nonPrioritized;

  for (var i = 0; i < prioritized.length; i++) {
    sorted.splice(prioritized[i].node.order - 1, 0, prioritized[i]);
  }

  return sorted;
}
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sanity_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sanity-client.js */ "./sanity-client.js");
/* harmony import */ var react_favicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-favicon */ "react-favicon");
/* harmony import */ var react_favicon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_favicon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Carousel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Carousel.js */ "./components/Carousel.js");
/* harmony import */ var _components_DocumentList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DocumentList.js */ "./components/DocumentList.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _helperFunctions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helperFunctions.js */ "./helperFunctions.js");
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.sass */ "./styles/index.sass");
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_sass__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/isaac/Desktop/PDP-Website/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const getData = async function () {
  // Get announcements and events to display on page
  var currentDate = new Date().toISOString();
  const query = `*[(_type == "event" && date >= "${currentDate}") || _type == "announcement"]`;
  var data = await _sanity_client_js__WEBPACK_IMPORTED_MODULE_2__["default"].fetch(query, {}); // Sort data by timeDelta value in ascending order

  var sortedData = Object(_helperFunctions_js__WEBPACK_IMPORTED_MODULE_8__["sortByTimeDelta"])(data);
  return {
    data: sortedData
  };
};

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    var Events = this.props.data.filter(obj => {
      return obj._type === "event";
    });

    for (var event of Events) {
      event.readableDate = new Date(event.date).toLocaleString([], {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      event.readablePrice = event.price == 0 ? '' : "$" + event.price;
    }

    var Announcements = this.props.data.filter(obj => {
      return obj._type === "announcement";
    });

    for (var announcement of Announcements) {
      announcement.readableDate = new Date(announcement._createdAt).toLocaleString([], {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "PDP"), __jsx(react_favicon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      url: "../static/favicon.ico",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      CurrentPage: "Home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx(_components_Carousel_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: this.props.data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("div", {
      id: "AboutContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      id: "MissionStatement",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Our Mission"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "The mission of Philadelphia Dance Projects is to support contemporary dance through Projects that encourage artists and audiences to more fully participate and engage in the experience and pursuit of dance as an evolving form."))), __jsx("div", {
      id: "Lists",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      id: "Upcoming",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("h1", {
      id: "UpcomingHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, Events.length > 0 ? "Upcoming:" : ""), __jsx(_components_DocumentList_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: Events,
      headline: "title",
      primaryDetail: "readableDate",
      secondaryDetail: "readablePrice",
      image: "image",
      maxLength: 3,
      body: "Description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })), __jsx("div", {
      id: "Announcements",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("h1", {
      id: "AnnouncementsHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, Announcements.length > 0 ? "Announcements:" : ""), __jsx(_components_DocumentList_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: Announcements,
      headline: "title",
      primaryDetail: "readableDate",
      secondaryDetail: null,
      image: "image",
      maxLength: 3,
      body: "body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }))), __jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }));
  }

}

Index.getInitialProps = getData;
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./sanity-client.js":
/*!**************************!*\
  !*** ./sanity-client.js ***!
  \**************************/
/*! exports provided: projectId, dataset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectId", function() { return projectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset", function() { return dataset; });
const projectId = "ocpl5ulk";
const dataset = "pdp-data";

const sanityClient = __webpack_require__(/*! @sanity/client */ "@sanity/client");

const client = sanityClient({
  projectId: projectId,
  dataset: dataset,
  // token: process.env.emailjs_uid, // or leave blank to be anonymous user
  useCdn: true
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./styles/DocumentListStyle.sass":
/*!***************************************!*\
  !*** ./styles/DocumentListStyle.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/carousel.sass":
/*!******************************!*\
  !*** ./styles/carousel.sass ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/donatestyle.sass":
/*!*********************************!*\
  !*** ./styles/donatestyle.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/footerstyle.sass":
/*!*********************************!*\
  !*** ./styles/footerstyle.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/headerstyle.sass":
/*!*********************************!*\
  !*** ./styles/headerstyle.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/index.sass":
/*!***************************!*\
  !*** ./styles/index.sass ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isaac/Desktop/PDP-Website/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-autobind":
/*!*********************************!*\
  !*** external "react-autobind" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-autobind");

/***/ }),

/***/ "react-bootstrap/Carousel":
/*!*******************************************!*\
  !*** external "react-bootstrap/Carousel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ "react-bootstrap/Dropdown":
/*!*******************************************!*\
  !*** external "react-bootstrap/Dropdown" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ "react-favicon":
/*!********************************!*\
  !*** external "react-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-favicon");

/***/ }),

/***/ "react-innertext":
/*!**********************************!*\
  !*** external "react-innertext" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-innertext");

/***/ }),

/***/ "react-lines-ellipsis":
/*!***************************************!*\
  !*** external "react-lines-ellipsis" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lines-ellipsis");

/***/ }),

/***/ "react-lines-ellipsis/lib/responsiveHOC":
/*!*********************************************************!*\
  !*** external "react-lines-ellipsis/lib/responsiveHOC" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lines-ellipsis/lib/responsiveHOC");

/***/ }),

/***/ "react-textfit":
/*!********************************!*\
  !*** external "react-textfit" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-textfit");

/***/ }),

/***/ "react-truncate":
/*!*********************************!*\
  !*** external "react-truncate" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-truncate");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map