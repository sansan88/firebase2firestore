(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/build/8bggen5k.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/deckdeckgo-qrcode/dist/esm/es5/build/8bggen5k.entry.js ***!
  \*****************************************************************************/
/*! exports provided: DeckgoQrcode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckgoQrcode", function() { return DeckdeckgoQRCode; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _deckdeckgo_qrcode_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deckdeckgo-qrcode.core.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/deckdeckgo-qrcode.core.js");
var DeckdeckgoQRCodeType,qrcode=function(){var r=function(r,t){var e=r,n=o[t],a=null,d=0,v=null,w=[],y={},C=function(r,t){a=function(r){for(var t=new Array(r),e=0;e<r;e+=1){t[e]=new Array(r);for(var n=0;n<r;n+=1)t[e][n]=null}return t}(d=4*e+17),k(0,0),k(d-7,0),k(0,d-7),b(),m(),A(r,t),e>=7&&B(r),null==v&&(v=S(e,n,w)),M(v,t)},k=function(r,t){for(var e=-1;e<=7;e+=1)if(!(r+e<=-1||d<=r+e))for(var n=-1;n<=7;n+=1)t+n<=-1||d<=t+n||(a[r+e][t+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},m=function(){for(var r=8;r<d-8;r+=1)null==a[r][6]&&(a[r][6]=r%2==0);for(var t=8;t<d-8;t+=1)null==a[6][t]&&(a[6][t]=t%2==0)},b=function(){for(var r=i.getPatternPosition(e),t=0;t<r.length;t+=1)for(var n=0;n<r.length;n+=1){var o=r[t],u=r[n];if(null==a[o][u])for(var f=-2;f<=2;f+=1)for(var c=-2;c<=2;c+=1)a[o+f][u+c]=-2==f||2==f||-2==c||2==c||0==f&&0==c}},B=function(r){for(var t=i.getBCHTypeNumber(e),n=0;n<18;n+=1){var o=!r&&1==(t>>n&1);a[Math.floor(n/3)][n%3+d-8-3]=o}for(n=0;n<18;n+=1)o=!r&&1==(t>>n&1),a[n%3+d-8-3][Math.floor(n/3)]=o},A=function(r,t){for(var e=i.getBCHTypeInfo(n<<3|t),o=0;o<15;o+=1){var u=!r&&1==(e>>o&1);o<6?a[o][8]=u:o<8?a[o+1][8]=u:a[d-15+o][8]=u}for(o=0;o<15;o+=1)u=!r&&1==(e>>o&1),o<8?a[8][d-o-1]=u:o<9?a[8][15-o-1+1]=u:a[8][15-o-1]=u;a[d-8][8]=!r},M=function(r,t){for(var e=-1,n=d-1,o=7,u=0,f=i.getMaskFunction(t),c=d-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==a[n][c-g]){var l=!1;u<r.length&&(l=1==(r[u]>>>o&1)),f(n,c-g)&&(l=!l),a[n][c-g]=l,-1==(o-=1)&&(u+=1,o=7)}if((n+=e)<0||d<=n){n-=e,e=-e;break}}},S=function(r,t,e){for(var n=f.getRSBlocks(r,t),o=c(),a=0;a<e.length;a+=1){var g=e[a];o.put(g.getMode(),4),o.put(g.getLength(),i.getLengthInBits(g.getMode(),r)),g.write(o)}var l=0;for(a=0;a<n.length;a+=1)l+=n[a].dataCount;if(o.getLengthInBits()>8*l)throw"code length overflow. ("+o.getLengthInBits()+">"+8*l+")";for(o.getLengthInBits()+4<=8*l&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*l||(o.put(236,8),o.getLengthInBits()>=8*l));)o.put(17,8);return function(r,t){for(var e=0,n=0,o=0,a=new Array(t.length),f=new Array(t.length),c=0;c<t.length;c+=1){var g=t[c].dataCount,l=t[c].totalCount-g;n=Math.max(n,g),o=Math.max(o,l),a[c]=new Array(g);for(var s=0;s<a[c].length;s+=1)a[c][s]=255&r.getBuffer()[s+e];e+=g;var h=i.getErrorCorrectPolynomial(l),d=u(a[c],h.getLength()-1).mod(h);for(f[c]=new Array(h.getLength()-1),s=0;s<f[c].length;s+=1){var v=s+d.getLength()-f[c].length;f[c][s]=v>=0?d.getAt(v):0}}var p=0;for(s=0;s<t.length;s+=1)p+=t[s].totalCount;var w=new Array(p),y=0;for(s=0;s<n;s+=1)for(c=0;c<t.length;c+=1)s<a[c].length&&(w[y]=a[c][s],y+=1);for(s=0;s<o;s+=1)for(c=0;c<t.length;c+=1)s<f[c].length&&(w[y]=f[c][s],y+=1);return w}(o,n)};return y.addData=function(r,t){var e=null;switch(t=t||"Byte"){case"Numeric":e=g(r);break;case"Alphanumeric":e=l(r);break;case"Byte":e=s(r);break;case"Kanji":e=h(r);break;default:throw"mode:"+t}w.push(e),v=null},y.isDark=function(r,t){if(r<0||d<=r||t<0||d<=t)throw r+","+t;return a[r][t]},y.getModuleCount=function(){return d},y.make=function(){if(e<1){for(var r=1;r<40;r++){for(var t=f.getRSBlocks(r,n),o=c(),a=0;a<w.length;a++){var u=w[a];o.put(u.getMode(),4),o.put(u.getLength(),i.getLengthInBits(u.getMode(),r)),u.write(o)}var g=0;for(a=0;a<t.length;a++)g+=t[a].dataCount;if(o.getLengthInBits()<=8*g)break}e=r}C(!1,function(){for(var r=0,t=0,e=0;e<8;e+=1){C(!0,e);var n=i.getLostPoint(y);(0==e||r>n)&&(r=n,t=e)}return t}())},y.createTableTag=function(r,t){r=r||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(t=void 0===t?4*r:t)+"px;",e+='">',e+="<tbody>";for(var n=0;n<y.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<y.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+r+"px;",e+=" height: "+r+"px;",e+=" background-color: ",e+=y.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return(e+="</tbody>")+"</table>"},y.createSvgTag=function(r,t){r=r||2,t=void 0===t?4*r:t;var e,n,o,i,a=y.getModuleCount()*r+2*t,u="";for(i="l"+r+",0 0,"+r+" -"+r+",0 0,-"+r+"z ",u+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',u+=' width="'+a+'px"',u+=' height="'+a+'px"',u+=' viewBox="0 0 '+a+" "+a+'" ',u+=' preserveAspectRatio="xMinYMin meet">',u+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',u+='<path d="',n=0;n<y.getModuleCount();n+=1)for(o=n*r+t,e=0;e<y.getModuleCount();e+=1)y.isDark(n,e)&&(u+="M"+(e*r+t)+","+o+i);return(u+='" stroke="transparent" fill="black"/>')+"</svg>"},y.createDataURL=function(r,t,e,n){r=r||2,t=void 0===t?4*r:t;var o=y.getModuleCount()*r+2*t,i=t,a=o-t;return p(o,o,e,n,function(t,e){if(i<=t&&t<a&&i<=e&&e<a){var n=Math.floor((t-i)/r),o=Math.floor((e-i)/r);return y.isDark(o,n)?0:1}return 1})},y.createImgTag=function(r,t,e,n,o){r=r||2,t=void 0===t?4*r:t;var i=y.getModuleCount()*r+2*t,a="";return a+="<img",a+=' src="',a+=y.createDataURL(r,t,n,o),a+='"',a+=' width="',a+=i,a+='"',a+=' height="',a+=i,a+='"',e&&(a+=' alt="',a+=e,a+='"'),a+"/>"},y.createASCII=function(r,t){if((r=r||1)<2)return function(r){r=void 0===r?2:r;var t,e,n,o,i,a=1*y.getModuleCount()+2*r,u=r,f=a-r,c={"██":"█","█ ":"▀"," █":"▄","  ":" "},g="";for(t=0;t<a;t+=2){for(n=Math.floor((t-u)/1),o=Math.floor((t+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<f&&u<=t&&t<f&&y.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<f&&u<=t+1&&t+1<f&&y.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",g+=c[i];g+="\n"}return a%2?g.substring(0,g.length-a-1)+Array(a+1).join("▀"):g.substring(0,g.length-1)}(t);r-=1,t=void 0===t?2*r:t;var e,n,o,i,a=y.getModuleCount()*r+2*t,u=t,f=a-t,c=Array(r+1).join("██"),g=Array(r+1).join("  "),l="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/r),s="",n=0;n<a;n+=1)i=1,u<=n&&n<f&&u<=e&&e<f&&y.isDark(o,Math.floor((n-u)/r))&&(i=0),s+=i?c:g;for(o=0;o<r;o+=1)l+=s+"\n"}return l.substring(0,l.length-1)},y.renderTo2dContext=function(r,t){t=t||2;for(var e=y.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)r.fillStyle=y.isDark(n,o)?"black":"white",r.fillRect(n*t,o*t,t,t)},y};r.stringToBytes=(r.stringToBytesFuncs={default:function(r){for(var t=[],e=0;e<r.length;e+=1){var n=r.charCodeAt(e);t.push(255&n)}return t}}).default,r.createStringToBytes=function(r,t){var e=function(){for(var e=v(r),n=function(){var r=e.read();if(-1==r)throw"eof";return r},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n(),c=n();i[String.fromCharCode(a<<8|u)]=f<<8|c,o+=1}if(o!=t)throw o+" != "+t;return i}(),n="?".charCodeAt(0);return function(r){for(var t=[],o=0;o<r.length;o+=1){var i=r.charCodeAt(o);if(i<128)t.push(i);else{var a=e[r.charAt(o)];"number"==typeof a?(255&a)==a?t.push(a):(t.push(a>>>8),t.push(255&a)):t.push(n)}}return t}};var t,e,n,o={L:1,M:0,Q:3,H:2},i=(t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=function(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t},(e={}).getBCHTypeInfo=function(r){for(var t=r<<10;n(t)-n(1335)>=0;)t^=1335<<n(t)-n(1335);return 21522^(r<<10|t)},e.getBCHTypeNumber=function(r){for(var t=r<<12;n(t)-n(7973)>=0;)t^=7973<<n(t)-n(7973);return r<<12|t},e.getPatternPosition=function(r){return t[r-1]},e.getMaskFunction=function(r){switch(r){case 0:return function(r,t){return(r+t)%2==0};case 1:return function(r,t){return r%2==0};case 2:return function(r,t){return t%3==0};case 3:return function(r,t){return(r+t)%3==0};case 4:return function(r,t){return(Math.floor(r/2)+Math.floor(t/3))%2==0};case 5:return function(r,t){return r*t%2+r*t%3==0};case 6:return function(r,t){return(r*t%2+r*t%3)%2==0};case 7:return function(r,t){return(r*t%3+(r+t)%2)%2==0};default:throw"bad maskPattern:"+r}},e.getErrorCorrectPolynomial=function(r){for(var t=u([1],0),e=0;e<r;e+=1)t=t.multiply(u([1,a.gexp(e)],0));return t},e.getLengthInBits=function(r,t){if(1<=t&&t<10)switch(r){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+r}else if(t<27)switch(r){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+r}else{if(!(t<41))throw"type:"+t;switch(r){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+r}}},e.getLostPoint=function(r){for(var t=r.getModuleCount(),e=0,n=0;n<t;n+=1)for(var o=0;o<t;o+=1){for(var i=0,a=r.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||t<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||t<=o+f||0==u&&0==f||a==r.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<t-1;n+=1)for(o=0;o<t-1;o+=1){var c=0;r.isDark(n,o)&&(c+=1),r.isDark(n+1,o)&&(c+=1),r.isDark(n,o+1)&&(c+=1),r.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<t;n+=1)for(o=0;o<t-6;o+=1)r.isDark(n,o)&&!r.isDark(n,o+1)&&r.isDark(n,o+2)&&r.isDark(n,o+3)&&r.isDark(n,o+4)&&!r.isDark(n,o+5)&&r.isDark(n,o+6)&&(e+=40);for(o=0;o<t;o+=1)for(n=0;n<t-6;n+=1)r.isDark(n,o)&&!r.isDark(n+1,o)&&r.isDark(n+2,o)&&r.isDark(n+3,o)&&r.isDark(n+4,o)&&!r.isDark(n+5,o)&&r.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<t;o+=1)for(n=0;n<t;n+=1)r.isDark(n,o)&&(g+=1);return e+Math.abs(100*g/t/t-50)/5*10},e),a=function(){for(var r=new Array(256),t=new Array(256),e=0;e<8;e+=1)r[e]=1<<e;for(e=8;e<256;e+=1)r[e]=r[e-4]^r[e-5]^r[e-6]^r[e-8];for(e=0;e<255;e+=1)t[r[e]]=e;return{glog:function(r){if(r<1)throw"glog("+r+")";return t[r]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r[t]}}}();function u(r,t){if(void 0===r.length)throw r.length+"/"+t;var e=function(){for(var e=0;e<r.length&&0==r[e];)e+=1;for(var n=new Array(r.length-e+t),o=0;o<r.length-e;o+=1)n[o]=r[o+e];return n}(),n={getAt:function(r){return e[r]},getLength:function(){return e.length},multiply:function(r){for(var t=new Array(n.getLength()+r.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<r.getLength();o+=1)t[e+o]^=a.gexp(a.glog(n.getAt(e))+a.glog(r.getAt(o)));return u(t,0)},mod:function(r){if(n.getLength()-r.getLength()<0)return n;for(var t=a.glog(n.getAt(0))-a.glog(r.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<r.getLength();o+=1)e[o]^=a.gexp(a.glog(r.getAt(o))+t);return u(e,0).mod(r)}};return n}var f=function(){var r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(r,t){var e={};return e.totalCount=r,e.dataCount=t,e},e={getRSBlocks:function(e,n){var i=function(t,e){switch(e){case o.L:return r[4*(t-1)+0];case o.M:return r[4*(t-1)+1];case o.Q:return r[4*(t-1)+2];case o.H:return r[4*(t-1)+3];default:return}}(e,n);if(void 0===i)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var a=i.length/3,u=[],f=0;f<a;f+=1)for(var c=i[3*f+0],g=i[3*f+1],l=i[3*f+2],s=0;s<c;s+=1)u.push(t(g,l));return u}};return e}(),c=function(){var r=[],t=0,e={getBuffer:function(){return r},getAt:function(t){var e=Math.floor(t/8);return 1==(r[e]>>>7-t%8&1)},put:function(r,t){for(var n=0;n<t;n+=1)e.putBit(1==(r>>>t-n-1&1))},getLengthInBits:function(){return t},putBit:function(e){var n=Math.floor(t/8);r.length<=n&&r.push(0),e&&(r[n]|=128>>>t%8),t+=1}};return e},g=function(r){var t=r,e={getMode:function(){return 1},getLength:function(r){return t.length},write:function(r){for(var e=t,o=0;o+2<e.length;)r.put(n(e.substring(o,o+3)),10),o+=3;o<e.length&&(e.length-o==1?r.put(n(e.substring(o,o+1)),4):e.length-o==2&&r.put(n(e.substring(o,o+2)),7))}},n=function(r){for(var t=0,e=0;e<r.length;e+=1)t=10*t+o(r.charAt(e));return t},o=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+r};return e},l=function(r){var t=r,e={getMode:function(){return 2},getLength:function(r){return t.length},write:function(r){for(var e=t,o=0;o+1<e.length;)r.put(45*n(e.charAt(o))+n(e.charAt(o+1)),11),o+=2;o<e.length&&r.put(n(e.charAt(o)),6)}},n=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-"0".charCodeAt(0);if("A"<=r&&r<="Z")return r.charCodeAt(0)-"A".charCodeAt(0)+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return e},s=function(t){var e=r.stringToBytes(t);return{getMode:function(){return 4},getLength:function(r){return e.length},write:function(r){for(var t=0;t<e.length;t+=1)r.put(e[t],8)}}},h=function(t){var e=r.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(r,t){var n=e("友");if(2!=n.length||38726!=(n[0]<<8|n[1]))throw"sjis not supported."}();var n=e(t);return{getMode:function(){return 8},getLength:function(r){return~~(n.length/2)},write:function(r){for(var t=n,e=0;e+1<t.length;){var o=(255&t[e])<<8|255&t[e+1];if(33088<=o&&o<=40956)o-=33088;else{if(!(57408<=o&&o<=60351))throw"illegal char at "+(e+1)+"/"+o;o-=49472}r.put(o=192*(o>>>8&255)+(255&o),13),e+=2}if(e<t.length)throw"illegal char at "+(e+1)}}},d=function(){var r=[],t={writeByte:function(t){r.push(255&t)},writeShort:function(r){t.writeByte(r),t.writeByte(r>>>8)},writeBytes:function(r,e,n){e=e||0,n=n||r.length;for(var o=0;o<n;o+=1)t.writeByte(r[o+e])},writeString:function(r){for(var e=0;e<r.length;e+=1)t.writeByte(r.charCodeAt(e))},toByteArray:function(){return r},toString:function(){var t="";t+="[";for(var e=0;e<r.length;e+=1)e>0&&(t+=","),t+=r[e];return t+"]"}};return t},v=function(r){var t=r,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=t.length){if(0==o)return-1;throw"unexpected end of file./"+o}var r=t.charAt(e);if(e+=1,"="==r)return o=0,-1;r.match(/^\s$/)||(n=n<<6|a(r.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(r){if(65<=r&&r<=90)return r-65;if(97<=r&&r<=122)return r-97+26;if(48<=r&&r<=57)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw"c:"+r};return i},p=function(r,t,e,n,o){for(var i=function(r,t,e,n){var o=r,i=t,a=new Array(r*t),u={setPixel:function(r,t,e){a[t*o+r]=e},write:function(r){r.writeString("GIF87a"),r.writeShort(o),r.writeShort(i),r.writeByte(128),r.writeByte(0),r.writeByte(0),r.writeByte(e&&e.length>=6?parseInt("0x"+e.substr(0,2)):0),r.writeByte(e&&e.length>=6?parseInt("0x"+e.substr(2,2)):0),r.writeByte(e&&e.length>=6?parseInt("0x"+e.substr(4,2)):0),r.writeByte(n&&n.length>=6?parseInt("0x"+n.substr(0,2)):255),r.writeByte(n&&n.length>=6?parseInt("0x"+n.substr(2,2)):255),r.writeByte(n&&n.length>=6?parseInt("0x"+n.substr(4,2)):255),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(o),r.writeShort(i),r.writeByte(0);var t=f(2);r.writeByte(2);for(var a=0;t.length-a>255;)r.writeByte(255),r.writeBytes(t,a,255),a+=255;r.writeByte(t.length-a),r.writeBytes(t,a,t.length-a),r.writeByte(0),r.writeString(";")}},f=function(r){for(var t=1<<r,e=1+(1<<r),n=r+1,o=c(),i=0;i<t;i+=1)o.add(String.fromCharCode(i));o.add(String.fromCharCode(t)),o.add(String.fromCharCode(e));var u,f,g,l=d(),s=(u=l,f=0,g=0,{write:function(r,t){if(r>>>t!=0)throw"length over";for(;f+t>=8;)u.writeByte(255&(r<<f|g)),t-=8-f,r>>>=8-f,g=0,f=0;g|=r<<f,f+=t},flush:function(){f>0&&u.writeByte(g)}});s.write(t,n);var h=0,v=String.fromCharCode(a[h]);for(h+=1;h<a.length;){var p=String.fromCharCode(a[h]);h+=1,o.contains(v+p)?v+=p:(s.write(o.indexOf(v),n),o.size()<4095&&(o.size()==1<<n&&(n+=1),o.add(v+p)),v=p)}return s.write(o.indexOf(v),n),s.write(e,n),s.flush(),l.toByteArray()},c=function(){var r={},t=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;r[n]=t,t+=1},size:function(){return t},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return e};return u}(r,t,e,n),a=0;a<t;a+=1)for(var u=0;u<r;u+=1)i.setPixel(u,a,o(u,a));var f=d();i.write(f);for(var c,g,l,s,h,v,p,w=(c=0,g=0,l=0,s="",v=function(r){s+=String.fromCharCode(p(63&r))},p=function(r){if(r<0);else{if(r<26)return 65+r;if(r<52)return r-26+97;if(r<62)return r-52+48;if(62==r)return 43;if(63==r)return 47}throw"n:"+r},(h={}).writeByte=function(r){for(c=c<<8|255&r,g+=8,l+=1;g>=6;)v(c>>>g-6),g-=6},h.flush=function(){if(g>0&&(v(c<<6-g),c=0,g=0),l%3!=0)for(var r=3-l%3,t=0;t<r;t+=1)s+="="},h.toString=function(){return s},h),y=f.toByteArray(),C=0;C<y.length;C+=1)w.writeByte(y[C]);return w.flush(),"data:image/gif;base64,"+w};return r}();qrcode.stringToBytesFuncs["UTF-8"]=function(r){return function(r){for(var t=[],e=0;e<r.length;e++){var n=r.charCodeAt(e);n<128?t.push(n):n<2048?t.push(192|n>>6,128|63&n):n<55296||n>=57344?t.push(224|n>>12,128|n>>6&63,128|63&n):(n=65536+((1023&n)<<10|1023&r.charCodeAt(++e)),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return t}(r)},function(r){"function"==typeof define&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")?define([],r):"object"==typeof exports&&(module.exports=r())}(function(){return qrcode}),function(r){r.SVG="svg",r.IMG="img"}(DeckdeckgoQRCodeType||(DeckdeckgoQRCodeType={}));var DeckdeckgoQRCode=function(){function r(){this.type=DeckdeckgoQRCodeType.SVG}return r.prototype.componentDidLoad=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(r){switch(r.label){case 0:return[4,this.generate()];case 1:return r.sent(),[2]}})})},r.prototype.generate=function(){var r=this;return new Promise(function(t){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](r,void 0,void 0,function(){var r;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(e){switch(e.label){case 0:return[4,this.createQRCode()];case 1:return r=e.sent(),[4,this.parseQRCode(r)];case 2:return e.sent(),t(),[2]}})})})},r.prototype.createQRCode=function(){var r=this;return new Promise(function(t){if(!r.content||r.content.length<=0)t(null);else{var e=qrcode(0,"H");e.addData(r.content,"Byte"),e.make(),t(r.isQRCodeTypeImg()?e.createImgTag(r.qrCellSize,r.qrMargin,r.qrAlt,r.qrFillColor,r.qrBackgroundColor):e.createSvgTag(r.qrCellSize,r.qrMargin))}})},r.prototype.parseQRCode=function(r){var t=this;return new Promise(function(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](t,void 0,void 0,function(){var t,n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(o){if(!r)return e(),[2];if(t=this.el.shadowRoot.querySelector("div.deckgo-qrcode-container")){this.removePreviousQRCode(t);try{(n=document.createElement("template")).innerHTML=r,t.appendChild(n.content.firstChild)}catch(r){}}return e(),[2]})})})},r.prototype.removePreviousQRCode=function(r){var t=r.querySelector("svg");t&&t.parentNode.removeChild(t);var e=r.querySelector("img");e&&e.parentNode.removeChild(e)},r.prototype.isQRCodeTypeImg=function(){return this.type===DeckdeckgoQRCodeType.IMG},r.prototype.render=function(){return Object(_deckdeckgo_qrcode_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"deckgo-qrcode-container"},Object(_deckdeckgo_qrcode_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"logo"}))},Object.defineProperty(r,"is",{get:function(){return"deckgo-qrcode"},enumerable:!0,configurable:!0}),Object.defineProperty(r,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(r,"properties",{get:function(){return{content:{type:String,attr:"content"},el:{elementRef:!0},generate:{method:!0},qrAlt:{type:String,attr:"qr-alt"},qrBackgroundColor:{type:String,attr:"qr-background-color"},qrCellSize:{type:Number,attr:"qr-cell-size"},qrFillColor:{type:String,attr:"qr-fill-color"},qrMargin:{type:Number,attr:"qr-margin"},type:{type:String,attr:"type"}}},enumerable:!0,configurable:!0}),Object.defineProperty(r,"style",{get:function(){return":host{position:relative}:host,div.deckgo-qrcode-container{display:var(--deckgo-qrcode-container-display,inline-block)}div.deckgo-qrcode-container svg{width:var(--deckgo-qrcode-size);height:var(--deckgo-qrcode-size);stroke:var(--deckgo-qrcode-border-stroke)}div.deckgo-qrcode-container svg rect{fill:var(--deckgo-qrcode-background-fill,transparent)}div.deckgo-qrcode-container svg path{fill:var(--deckgo-qrcode-color-fill)}::slotted([slot=logo]){width:calc(var(--deckgo-qrcode-size, 100%) / var(--deckgo-qrcode-logo-ratio-size, 3));height:calc(var(--deckgo-qrcode-size, 100%) / var(--deckgo-qrcode-logo-ratio-size, 3));position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"},enumerable:!0,configurable:!0}),r}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/polyfills/tslib.js":
/*!************************************************************************!*\
  !*** ./node_modules/deckdeckgo-qrcode/dist/esm/es5/polyfills/tslib.js ***!
  \************************************************************************/
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

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=79.f80adab20ffa4630225c.js.map