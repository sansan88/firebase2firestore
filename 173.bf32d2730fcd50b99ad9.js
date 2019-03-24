(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[173],{

/***/ "./node_modules/web-social-share/dist/esm/es5/build/6xmdnp1u.entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm/es5/build/6xmdnp1u.entry.js ***!
  \****************************************************************************/
/*! exports provided: WebSocialShare, WebSocialShareTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocialShare", function() { return WebSocialShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocialShareTarget", function() { return WebSocialShareTarget; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/web-social-share/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../websocialshare.core.js */ "./node_modules/web-social-share/dist/esm/es5/websocialshare.core.js");
var WebSocialShare=function(){function e(){}return e.prototype.moveSlotOnLoad=function(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(o){switch(o.label){case 0:return e&&e.detail?[4,this.moveSlot(e.detail)]:[2];case 1:return o.sent(),[2]}})})},e.prototype.moveSlot=function(e){var o=this;return new Promise(function(a){var t=o.el.querySelector("[slot='"+e+"']"),i=o.el.shadowRoot.querySelector("web-social-share-target.web-social-share-"+e);i&&t&&i.appendChild(t),a()})},e.prototype.hide=function(){var e=this,o=this.el.shadowRoot.querySelector("div.web-social-share");o?(o.classList.add("web-social-share-transition-close"),setTimeout(function(){e.show=!1,o.classList.remove("web-social-share-transition-close"),e.closed.emit(!0)},200)):(this.show=!1,this.closed.emit(!0))},e.prototype.render=function(){var e=this;return Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:this.show?"web-social-share web-social-share-open":"web-social-share web-social-share-close"},Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"web-social-share-backdrop",onClick:function(){return e.hide()}}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"web-social-share-action-sheet",onClick:function(){return e.hide()}},Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"web-social-share-action-sheet-container"},Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"web-social-share-action-sheet-group"},this.renderTargets()))),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"facebook"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"twitter"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"email"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"linkedin"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"pinterest"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"reddit"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"whatsapp"}))},e.prototype.renderTargets=function(){var e=this;return this.share&&this.share.config?this.share.config.map(function(o){return Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("web-social-share-target",{displayNames:e.share.displayNames,share:o})}):Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span",null)},Object.defineProperty(e,"is",{get:function(){return"web-social-share"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},share:{type:"Any",attr:"share"},show:{type:Boolean,attr:"show",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"closed",method:"closed",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"socialShareLoaded",method:"moveSlotOnLoad"},{name:"selected",method:"hide"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"div.web-social-share{visibility:hidden;opacity:0;cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation}div.web-social-share.web-social-share-open{visibility:visible;opacity:1}div.web-social-share.web-social-share-open div.web-social-share-backdrop{opacity:var(--web-social-share-backdrop-opacity,.25)}div.web-social-share.web-social-share-open div.web-social-share-action-sheet{opacity:1}div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height,80px)}\@media (max-width:540px){div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height-small-device,140px)}}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-backdrop{opacity:0}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:0}div.web-social-share div.web-social-share-backdrop{opacity:0;-webkit-transition:opacity .1s linear;transition:opacity .1s linear;background-color:var(--web-social-share-backdrop-background,#000);z-index:1000;-webkit-transform:translateZ(2px);transform:translateZ(2px);left:0;top:0;position:fixed;height:100%;width:100%}div.web-social-share div.web-social-share-action-sheet{left:0;right:0;top:0;bottom:0;margin:auto;position:fixed;z-index:1001;-webkit-transform:translateZ(3px);transform:translateZ(3px);width:100%;max-width:500px}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{z-index:1010;-webkit-transform:translateZ(10px);transform:translateZ(10px);background:var(--web-social-share-action-sheet-group-background,#fafafa);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;height:0;-webkit-transition-timing-function:cubic-bezier(.36,.66,.04,1);transition-timing-function:cubic-bezier(.36,.66,.04,1);-webkit-transition:height .2s;transition:height .2s}\@media (max-width:540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{-ms-flex-pack:start;justify-content:flex-start}}::slotted([slot=email]),::slotted([slot=facebook]),::slotted([slot=linkedin]),::slotted([slot=pinterest]),::slotted([slot=reddit]),::slotted([slot=twitter]),::slotted([slot=whatsapp]){display:none}"},enumerable:!0,configurable:!0}),e}(),WebSocialShareFacebook=function(){function e(){}return e.share=function(e){var o;e.socialShareType&&"feed"===e.socialShareType?(o="https://www.facebook.com/dialog/feed?",e.socialShareVia&&(o+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(o+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(o+="&link="+encodeURIComponent(e.socialShareUrl)),e.socialShareTo&&(o+="&to="+encodeURIComponent(e.socialShareTo)),e.socialShareDisplay&&(o+="&display="+encodeURIComponent(e.socialShareDisplay)),e.socialShareRef&&(o+="&ref="+encodeURIComponent(e.socialShareRef)),e.socialShareFrom&&(o+="&from="+encodeURIComponent(e.socialShareFrom)),e.socialShareSource&&(o+="&source="+encodeURIComponent(e.socialShareSource)),window.open(o,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):e.socialShareType&&"share"===e.socialShareType?(o="https://www.facebook.com/dialog/share?",e.socialShareVia&&(o+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(o+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(o+="&href="+encodeURIComponent(e.socialShareUrl)),e.socialShareQuote&&(o+="&quote="+encodeURIComponent(e.socialShareQuote)),e.socialShareDisplay&&(o+="&display="+encodeURIComponent(e.socialShareDisplay)),e.socialShareMobileiframe&&(o+="&mobile_iframe="+encodeURIComponent(e.socialShareMobileiframe)),e.socialShareHashtags&&(o+="&hashtag="+encodeURIComponent(e.socialShareHashtags)),window.open(o,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):e.socialShareType&&"send"===e.socialShareType?(o="https://www.facebook.com/dialog/send?",e.socialShareVia&&(o+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(o+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(o+="&link="+encodeURIComponent(e.socialShareUrl)),e.socialShareTo&&(o+="&to="+encodeURIComponent(e.socialShareTo)),e.socialShareDisplay&&(o+="&display="+encodeURIComponent(e.socialShareDisplay)),window.open(o,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e.socialShareUrl||window.location.href),"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),WebSocialShareUtils=function(){function e(){}return e.isMobile=function(){if(!window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))},e.staticOpenNewWindow=function(e){window.self!==window.top?window.open(e,"_blank"):window.open(e,"_self")},e}(),WebSocialShareTwitter=function(){function e(){}return e.share=function(e){var o="https://www.twitter.com/intent/tweet?";e.socialShareText&&(o+="text="+encodeURIComponent(e.socialShareText)),e.socialShareVia&&(o+="&via="+encodeURIComponent(e.socialShareVia)),e.socialShareHashtags&&(o+="&hashtags="+encodeURIComponent(e.socialShareHashtags)),o+="&url="+encodeURIComponent(e.socialShareUrl||window.location.href),WebSocialShareUtils.isMobile()?WebSocialShareUtils.staticOpenNewWindow(o):window.open(o,"Twitter","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),WebSocialShareEmail=function(){function e(){}return e.share=function(e){var o="mailto:";e.socialShareTo&&(o+=encodeURIComponent(e.socialShareTo)),o+="?",e.socialShareBody&&(o+="body="+encodeURIComponent(e.socialShareBody)),e.socialShareSubject&&(o+="&subject="+encodeURIComponent(e.socialShareSubject)),e.socialShareCc&&(o+="&cc="+encodeURIComponent(e.socialShareCc)),e.socialShareBcc&&(o+="&bcc="+encodeURIComponent(e.socialShareBcc)),WebSocialShareUtils.staticOpenNewWindow(o)},e}(),WebSocialShareLinkedin=function(){function e(){}return e.share=function(e){var o="https://www.linkedin.com/shareArticle?mini=true";o+="&url="+encodeURIComponent(e.socialShareUrl||window.location.href),e.socialShareText&&(o+="&title="+encodeURIComponent(e.socialShareText)),e.socialShareDescription&&(o+="&summary="+encodeURIComponent(e.socialShareDescription)),e.socialShareSource&&(o+="&source="+encodeURIComponent(e.socialShareSource)),window.open(o,"Linkedin","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),WebSocialSharePinterest=function(){function e(){}return e.share=function(e){window.open("https://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(e.socialShareUrl||window.location.href)+"&media="+encodeURIComponent(e.socialShareMedia)+"&description="+encodeURIComponent(e.socialShareText),"Pinterest","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),WebSocialShareReddit=function(){function e(){}return e.share=function(e){var o="https://www.reddit.com/";o+=e.socialShareSubreddit?"r/"+e.socialShareSubreddit+"/submit?url=":"submit?url=",e.socialSharePopupWidth<900&&(e.socialSharePopupWidth=900),e.socialSharePopupHeight<650&&(e.socialSharePopupHeight=650),window.open(o+encodeURIComponent(e.socialShareUrl||window.location.href)+"&title="+encodeURIComponent(e.socialShareText),"Reddit","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),WebSocialShareWhatsapp=function(){function e(){}return e.share=function(e){var o=WebSocialShareUtils.isMobile(),a=o?"https://api.whatsapp.com/send?text=":"https://web.whatsapp.com/send?text=";e.socialShareText&&(a+=encodeURIComponent(e.socialShareText)+"%0A"),a+=encodeURIComponent(e.socialShareUrl||window.location.href),o?WebSocialShareUtils.staticOpenNewWindow(a):window.open(a,"WhatsApp","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),WebSocialShareTarget=function(){function e(){this.displayNames=!1}return e.prototype.componentDidLoad=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(e){switch(e.label){case 0:return[4,this.emitSocialShareLoaded()];case 1:return e.sent(),[2]}})})},e.prototype.emitSocialShareLoaded=function(){var e=this;return new Promise(function(o){e.share.facebook?e.socialShareLoaded.emit("facebook"):e.share.twitter?e.socialShareLoaded.emit("twitter"):e.share.email?e.socialShareLoaded.emit("email"):e.share.linkedin?e.socialShareLoaded.emit("linkedin"):e.share.pinterest?e.socialShareLoaded.emit("pinterest"):e.share.reddit?e.socialShareLoaded.emit("reddit"):e.share.whatsapp&&e.socialShareLoaded.emit("whatsapp"),o()})},e.prototype.handleFacebookShare=function(e){e.stopPropagation(),WebSocialShareFacebook.share(this.share.facebook),this.selected.emit()},e.prototype.handleTwitterShare=function(e){e.stopPropagation(),WebSocialShareTwitter.share(this.share.twitter),this.selected.emit()},e.prototype.handleEmailShare=function(e){e.stopPropagation(),WebSocialShareEmail.share(this.share.email),this.selected.emit()},e.prototype.handleLinkedinShare=function(e){e.stopPropagation(),WebSocialShareLinkedin.share(this.share.linkedin),this.selected.emit()},e.prototype.handlePinterestShare=function(e){e.stopPropagation(),WebSocialSharePinterest.share(this.share.pinterest),this.selected.emit()},e.prototype.handleRedditShare=function(e){e.stopPropagation(),WebSocialShareReddit.share(this.share.reddit),this.selected.emit()},e.prototype.handleWhatsappShare=function(e){e.stopPropagation(),WebSocialShareWhatsapp.share(this.share.whatsapp),this.selected.emit()},e.prototype.render=function(){var e=this;return this.share.facebook?Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",{onClick:function(o){return e.handleFacebookShare(o)},class:"web-social-share-button web-social-share-button-facebook"},this.renderIcon(),this.renderName(this.share.facebook,"Facebook")):this.share.twitter?Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",{onClick:function(o){return e.handleTwitterShare(o)},class:"web-social-share-button web-social-share-button-twitter"},this.renderIcon(),this.renderName(this.share.twitter,"Twitter")):this.share.email?Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",{onClick:function(o){return e.handleEmailShare(o)},class:"web-social-share-button web-social-share-button-email"},this.renderIcon(),this.renderName(this.share.email,"Email")):this.share.linkedin?Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",{onClick:function(o){return e.handleLinkedinShare(o)},class:"web-social-share-button web-social-share-button-linkedin"},this.renderIcon(),this.renderName(this.share.linkedin,"Linkedin")):this.share.pinterest?Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",{onClick:function(o){return e.handlePinterestShare(o)},class:"web-social-share-button web-social-share-button-pinterest"},this.renderIcon(),this.renderName(this.share.pinterest,"Pinterest")):this.share.reddit?Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",{onClick:function(o){return e.handleRedditShare(o)},class:"web-social-share-button web-social-share-button-reddit"},this.renderIcon(),this.renderName(this.share.reddit,"Reddit")):this.share.whatsapp?Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button",{onClick:function(o){return e.handleWhatsappShare(o)},class:"web-social-share-button web-social-share-button-whatsapp"},this.renderIcon(),this.renderName(this.share.whatsapp,"WhatsApp")):Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",null)},e.prototype.renderIcon=function(){return Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"web-social-share-button-icon"},Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"facebook"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"twitter"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"email"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"linkedin"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"pinterest"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"reddit"}),Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"whatsapp"}))},e.prototype.renderName=function(e,o){return this.displayNames?Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("p",null,e&&e.brandName&&""!==e.brandName?e.brandName:o):Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span",null)},e.prototype.hostData=function(){return{class:{"web-social-share-facebook":this.share.facebook,"web-social-share-twitter":this.share.twitter,"web-social-share-email":this.share.email,"web-social-share-linkedin":this.share.linkedin,"web-social-share-pinterest":this.share.pinterest,"web-social-share-reddit":this.share.reddit,"web-social-share-whatsapp":this.share.whatsapp}}},Object.defineProperty(e,"is",{get:function(){return"web-social-share-target"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{displayNames:{type:Boolean,attr:"display-names"},share:{type:"Any",attr:"share"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"selected",method:"selected",bubbles:!0,cancelable:!0,composed:!0},{name:"socialShareLoaded",method:"socialShareLoaded",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{margin:auto;width:var(--web-social-share-target-width,4rem);height:var(--web-social-share-target-height,3rem);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}button{position:relative;cursor:pointer;border:0;background:transparent;width:var(--web-social-share-button-width,100%);height:var(--web-social-share-button-height,100%);font-size:var(--web-social-share-button-font-size)}p{bottom:0;color:var(--web-social-share-brand-color,inherit);font-size:var(--web-social-share-brand-font-size,.6rem)}div.web-social-share-button-icon,p{position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);margin:0}div.web-social-share-button-icon{top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:var(--web-social-share-target-icon-container-height,2rem)}"},enumerable:!0,configurable:!0}),e}();

/***/ }),

/***/ "./node_modules/web-social-share/dist/esm/es5/polyfills/tslib.js":
/*!***********************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm/es5/polyfills/tslib.js ***!
  \***********************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
// REV: 9dd9aa322c893e5e0b3f1609b1126314ccf37bbb

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
          t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
  if (m) return m.call(o);
  return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

/***/ })

}]);
//# sourceMappingURL=173.bf32d2730fcd50b99ad9.js.map