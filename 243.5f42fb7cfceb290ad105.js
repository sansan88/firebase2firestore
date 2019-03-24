(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[243],{

/***/ "./node_modules/deckdeckgo/dist/esm/es5/build/xnwwtqbw.sc.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/deckdeckgo/dist/esm/es5/build/xnwwtqbw.sc.entry.js ***!
  \*************************************************************************/
/*! exports provided: DeckgoSocial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckgoSocial", function() { return DeckdeckgoSocial; });
/* harmony import */ var _deckdeckgo_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deckdeckgo.core.js */ "./node_modules/deckdeckgo/dist/esm/es5/deckdeckgo.core.js");
var DeckdeckgoSocial=function(){function t(){}return t.prototype.componentDidLoad=function(){this.concatTwitterUrl(),this.concatLinkedinUrl(),this.concatMediumUrl(),this.concatGithubUrl(),this.concatFullUrl()},t.prototype.lazyLoadContent=function(){return new Promise(function(t){t()})},t.prototype.concatTwitterUrl=function(){this.twitter&&(this.url="https://twitter.com/"+this.twitter)},t.prototype.concatLinkedinUrl=function(){this.linkedin&&(this.url="https://www.linkedin.com/in/"+this.linkedin)},t.prototype.concatMediumUrl=function(){this.medium&&(this.url="https://medium.com/@"+this.medium)},t.prototype.concatGithubUrl=function(){this.github&&(this.url="https://github.com/"+this.github)},t.prototype.concatFullUrl=function(){this.fullUrl&&(this.url=this.fullUrl)},t.prototype.render=function(){return Object(_deckdeckgo_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a",{href:this.url},Object(_deckdeckgo_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",{name:"icon"}),Object(_deckdeckgo_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null))},Object.defineProperty(t,"is",{get:function(){return"deckgo-social"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{fullUrl:{type:String,attr:"full-url",watchCallbacks:["concatFullUrl"]},github:{type:String,attr:"github",watchCallbacks:["concatGithubUrl"]},lazyLoadContent:{method:!0},linkedin:{type:String,attr:"linkedin",watchCallbacks:["concatLinkedinUrl"]},medium:{type:String,attr:"medium",watchCallbacks:["concatMediumUrl"]},twitter:{type:String,attr:"twitter",watchCallbacks:["concatTwitterUrl"]},url:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"a.sc-deckgo-social{color:inherit;text-decoration:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.sc-deckgo-social-s > [slot=icon]{margin-right:8px}"},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=243.5f42fb7cfceb290ad105.js.map