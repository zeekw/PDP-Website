module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "/UNz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sortByTimeDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanityImageUrl; });
/* unused harmony export SortProjects */
/* unused harmony export findFocalPoint */
/* harmony import */ var _sanity_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SLNS");
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

  var baseArray = ["https://cdn.sanity.io/images", _sanity_client_js__WEBPACK_IMPORTED_MODULE_0__[/* projectId */ "c"], _sanity_client_js__WEBPACK_IMPORTED_MODULE_0__[/* dataset */ "a"], assetID];
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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("L26G");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./styles/footerstyle.sass
var footerstyle = __webpack_require__("FVSk");

// EXTERNAL MODULE: ./styles/donatestyle.sass
var donatestyle = __webpack_require__("B5Y8");

// CONCATENATED MODULE: ./components/DonateButton.js
var __jsx = external_react_default.a.createElement;



class DonateButton_DonateButton extends external_react_default.a.Component {
  render() {
    return __jsx("div", {
      id: "DonateButton"
    }, __jsx("form", {
      action: "https://www.paypal.com/cgi-bin/webscr",
      method: "post",
      target: "_top"
    }, __jsx("input", {
      type: "hidden",
      name: "cmd",
      value: "_s-xclick"
    }), __jsx("input", {
      type: "hidden",
      name: "hosted_button_id",
      value: "4MR4GXLTFHUMU"
    }), __jsx("input", {
      id: "DonateButtonImage",
      type: "submit",
      src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
      border: "0",
      name: "submit",
      title: "PayPal - The safer, easier way to pay online!",
      alt: "Donate with PayPal button",
      value: "DONATE"
    }), __jsx("img", {
      alt: "",
      border: "0",
      src: "https://www.paypal.com/en_US/i/scr/pixel.gif",
      width: "1",
      height: "1"
    })));
  }

}

/* harmony default export */ var components_DonateButton = (DonateButton_DonateButton);
// CONCATENATED MODULE: ./components/Footer.js
var Footer_jsx = external_react_default.a.createElement;





class Footer_Footer extends external_react_default.a.Component {
  render() {
    return Footer_jsx("div", {
      id: "Footer"
    }, Footer_jsx("div", {
      id: "FooterBody"
    }, Footer_jsx("h6", null, '\u00A9 ' + new Date().getFullYear() + ' Philadelphia Dance Projects'), Footer_jsx("div", {
      id: "ButtonContainer"
    }, Footer_jsx(components_DonateButton, null), Footer_jsx(link_default.a, {
      href: "/contact"
    }, Footer_jsx("div", {
      id: "ContactButton"
    }, "CONTACT")))));
  }

}

/* harmony default export */ var components_Footer = __webpack_exports__["a"] = (Footer_Footer);

/***/ }),

/***/ "Aog/":
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "B5Y8":
/***/ (function(module, exports) {



/***/ }),

/***/ "BLB4":
/***/ (function(module, exports) {



/***/ }),

/***/ "FVSk":
/***/ (function(module, exports) {



/***/ }),

/***/ "Ipk4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "react-autobind"
var external_react_autobind_ = __webpack_require__("bleF");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: ./styles/document.sass
var styles_document = __webpack_require__("oTbS");

// EXTERNAL MODULE: ./sanity-client.js
var sanity_client = __webpack_require__("SLNS");

// EXTERNAL MODULE: ./helperFunctions.js
var helperFunctions = __webpack_require__("/UNz");

// EXTERNAL MODULE: ./styles/filestyle.sass
var filestyle = __webpack_require__("BLB4");

// CONCATENATED MODULE: ./components/File.js
var __jsx = external_react_default.a.createElement;




class File_File extends external_react_default.a.Component {
  render() {
    return __jsx("a", {
      href: this.props.src,
      className: "File"
    }, __jsx("div", {
      className: "cover"
    }), __jsx("div", {
      className: "info"
    }, this.props.src.split('/')[6]));
  }

}

/* harmony default export */ var components_File = (File_File);
// CONCATENATED MODULE: ./components/Document.js

var Document_jsx = external_react_default.a.createElement;









const BlockContent = __webpack_require__("gEUu");

class Document_Document extends external_react_default.a.Component {
  constructor() {
    super();

    Object(defineProperty["a" /* default */])(this, "state", {
      data: []
    });
  }

  componentDidMount() {
    var data = this.props.data;
    data[null] = '';
    this.setState({
      data: this.props.data
    });
  }

  render() {
    var imageKey = this.props.image;
    var headlineKey = this.props.headline;
    var primaryDetailKey = this.props.primaryDetail;
    var secondaryDetailKey = this.props.secondaryDetail;
    var tertiaryDetailKey = this.props.tertiaryDetail;
    var bodyKey = this.props.body;
    const serializers = {
      types: {
        code: props => Document_jsx("pre", {
          "data-language": props.node.language
        }, Document_jsx("code", null, props.node.code)),
        file: props => {
          var _ref = props.node.asset._ref;

          var splitRef = _ref.split('-');

          var reassembledFilename = splitRef[1] + '.' + splitRef[2];
          var url = 'https://cdn.sanity.io/files/ocpl5ulk/pdp-data/' + reassembledFilename;

          var Element = Document_jsx(components_File, {
            src: url
          });

          return Element;
        },
        embed: props => Document_jsx("div", {
          className: "embed",
          dangerouslySetInnerHTML: {
            __html: props.node.code
          }
        })
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

    var returnImg = function (item) {
      if (imageKey == null) {
        return '';
      } else if (!(imageKey in item)) {
        return '';
      } else if (!("asset" in item[imageKey])) {
        return '';
      } else {
        return Document_jsx("img", {
          id: "DocumentImage",
          src: Object(helperFunctions["a" /* SanityImageUrl */])(item[imageKey], {
            w: 800,
            h: 400,
            fp: findFocalPoint(item[imageKey])
          })
        });
      }
    };

    return Document_jsx("div", {
      id: "DocumentContainer"
    }, returnImg(this.props.data) != '' ? Document_jsx("div", {
      id: "ImageContainer"
    }, " ", returnImg(this.props.data), " ") : null, Document_jsx("div", {
      id: "DocumentText"
    }, Document_jsx("h3", null, this.props.data[headlineKey]), Document_jsx("h6", {
      style: {
        display: primaryDetailKey != null || typeof primaryDetailKey !== 'undefined' ? 'inline' : 'none'
      }
    }, Document_jsx("span", {
      id: "PrimaryDetail"
    }, this.props.data[primaryDetailKey]), Document_jsx("span", {
      id: "DetailDivider",
      style: {
        display: (secondaryDetailKey != null || typeof secondaryDetailKey !== 'undefined') && this.props.data[secondaryDetailKey] != '' ? 'inline' : 'none'
      }
    }, "|"), Document_jsx("span", {
      id: "SecondaryDetail"
    }, this.props.data[secondaryDetailKey]), Document_jsx("span", {
      id: "DetailDivider",
      style: {
        display: (tertiaryDetailKey != null || typeof tertiaryDetailKey !== 'undefined') && this.props.data[tertiaryDetailKey] != '' ? 'inline' : 'none'
      }
    }, "|"), Document_jsx("span", {
      id: "tertiaryDetail"
    }, this.props.data[tertiaryDetailKey])), Document_jsx(BlockContent, {
      id: "DocumentDescription",
      blocks: this.props.data[bodyKey],
      serializers: serializers,
      projectId: "ocpl5ulk",
      dataset: "pdp-data"
    })));
  }

}

/* harmony default export */ var components_Document = __webpack_exports__["a"] = (Document_Document);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "L26G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sanity_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SLNS");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("b0oO");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8lYe");
/* harmony import */ var _components_Document_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Ipk4");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class Announcement extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      data: {}
    });
  }

  componentDidMount() {
    var data = this.props.data;
    data.readableDate = new Date(data._createdAt).toLocaleString([], {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    this.setState({
      data: data
    });
  }

  render() {
    return __jsx("div", null, __jsx("title", null, "PDP"), __jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      CurrentPage: "Announcement"
    }), __jsx(_components_Document_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      data: this.props.data,
      image: "heroImage",
      headline: "title",
      body: "body",
      primaryDetail: "readableDate"
    }), __jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null));
  }

}

Announcement.getInitialProps = async function (context) {
  // Get slug from URL
  var slug = context.query.slug; // Get event data

  const query = `*[_type == "announcement" && slug.current == "${slug}"]`;
  var data = await _sanity_client_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"].fetch(query, {});
  data = data[0];
  return {
    data: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Announcement);

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "SLNS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return projectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataset; });
const projectId = "ocpl5ulk";
const dataset = "pdp-data";

const sanityClient = __webpack_require__("Aog/");

const client = sanityClient({
  projectId: projectId,
  dataset: dataset,
  token: "user_iwNYDzYdroz7xWuiQ7c0q",
  // or leave blank to be anonymous user
  useCdn: true
});
/* harmony default export */ __webpack_exports__["b"] = (client);

/***/ }),

/***/ "SibU":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "b0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SibU");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_headerstyle_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("edLm");
/* harmony import */ var _styles_headerstyle_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_headerstyle_sass__WEBPACK_IMPORTED_MODULE_4__);
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
      id: "Header"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "../static/bootstrap.min.css"
    })), __jsx("img", {
      src: "../static/logo.svg"
    }), __jsx("ul", {
      id: "Navigator"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("li", {
      style: NavStyle("Home")
    }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/projects"
    }, __jsx("li", {
      style: NavStyle("Projects")
    }, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/press"
    }, __jsx("li", {
      style: NavStyle("Press")
    }, "Press")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contributors"
    }, __jsx("li", {
      style: NavStyle("Contributors")
    }, "Contributors")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("li", {
      style: NavStyle("About")
    }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/calendar"
    }, __jsx("li", {
      style: NavStyle("Calendar")
    }, "Calendar")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/announcements"
    }, __jsx("li", {
      style: NavStyle("Announcements")
    }, "Announcements")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("li", {
      style: NavStyle("Contact")
    }, "Contact"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "MobileNavigator"
    }, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
      id: "MobileNavigatorToggle"
    }, CurrentPage), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Menu, null, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem"
    }, "Home"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/projects"
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem"
    }, "Projects"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/calendar"
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem"
    }, "Calendar"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog"
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem"
    }, "Blog"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contributors"
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem"
    }, "Contributors"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem"
    }, "About"))), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("div", {
      className: "MobileNavigatorInnerItem"
    }, "Contact"))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "bleF":
/***/ (function(module, exports) {

module.exports = require("react-autobind");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

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

      const cb = listeners.get(entry.target);

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

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
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
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
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

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
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
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "edLm":
/***/ (function(module, exports) {



/***/ }),

/***/ "gEUu":
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

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
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = function createRouter() {
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
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
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

/***/ "oTbS":
/***/ (function(module, exports) {



/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });