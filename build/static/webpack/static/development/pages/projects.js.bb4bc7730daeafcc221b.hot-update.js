webpackHotUpdate("static/development/pages/projects.js",{

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
var projectId = "ocpl5ulk";
var dataset = "pdp-data";

var sanityClient = __webpack_require__(/*! @sanity/client */ "./node_modules/@sanity/client/lib/sanityClient.js");

var client = sanityClient({
  projectId: projectId,
  dataset: dataset,
  token: "sk0dnkibET2NVyTDvlZgFLtnYbAArK5ali0JUZUgsaS2GryecBjk74Wz3X0SeXwnwhrGn8gvEwfx38EWXUpGSvNeNApkllg6k07MUn1c8p3elD99MEhEjSVKRoyKSPfaP0nyy7tuEc7mIYOhSRnPgOk8O2OLVRSR4dtxZuTgP68GbS4fcs0l",
  // or leave blank to be anonymous user
  useCdn: true
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ })

})
//# sourceMappingURL=projects.js.bb4bc7730daeafcc221b.hot-update.js.map