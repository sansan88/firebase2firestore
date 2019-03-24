/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"0":"6c63c7193abcc7deae70","1":"46a084e6f83e2db5b072","2":"537c32916313d139e446","3":"748d6ed1a530376d4739","4":"4b7b134756c13facd90f","5":"b98a21582575e7ff2e56","6":"c0680b2bcf56956178f1","7":"56e9c6e72f082dcea701","8":"e450ba8696964d513e30","9":"6f5c7b939a4bc18a44c3","10":"ecd3a4da5e768e39f1b9","11":"59b692b327af65be0247","12":"13538901538d37d0c379","13":"5e8d1e1db876329433fb","14":"4b56ff2fc5618ec44b15","15":"d0a36f2534b994238c31","16":"7e7045ed5609d66e2bf4","17":"acfdee7856d3374345c6","18":"883f70d4c8b1edd35a54","19":"7aa91fbfa496194d08a3","20":"c4c6112b03bda4e97ef8","21":"103f74f4d0e66e0fa7bd","22":"6da15b15979c85701979","23":"379b1f1a785a5cea1fd8","24":"c832bcf11baa6cafbbc5","25":"8dbfd4eac7dda10b5bec","26":"c723000b7bc55b97b8b5","27":"7d82b7decd3fae9cf33d","28":"bcd5db141e6a6ec3eef4","29":"cd411ccd3984351bf1b4","30":"b1134895fbaf588d2969","31":"016abfa4e0a6f5029505","32":"b440e3245c59393c3295","33":"8cca83003c160e6c1402","34":"aa5c531d8b80f25e9a58","35":"f07404491f006ebfe2dd","36":"78715650d94e9341bc8c","37":"a4fedf15192b38dbe970","38":"0155c7e2ab0175613062","39":"a39a37f63f14d1e76969","40":"ac37e7291c5eea371dcf","41":"5ef3845534bdee882ef2","42":"09cab6fe2b00c26c9460","43":"496f6e74310b8b8bb9ec","44":"41123fd453e70a7063f1","45":"5b2dafc6b8c2e1857665","46":"f4d146d9531cd4481a12","47":"286345d2c05da0c2e026","48":"e74e5ad0c7ecb2ecf2d6","49":"04a1c64a8cf16cb1c43a","50":"ecb259789ec3250e759d","51":"5c34591c2438e1960001","52":"e832d1ed6250afa12b7d","53":"cc542a0f8f00b0658d0a","54":"f3125783ce8766583a9b","55":"4a271c0127c5aea69f02","56":"ebbae06c90041204439c","57":"4287e14f4b7a90fa5277","58":"c2c139eda672c7f5f337","59":"62a8be091a106449fa8c","60":"bc157d512ef61180fd88","61":"4a1401d6beecfb962b44","62":"43b96e1291beea9df46d","63":"ef7def2c890ca680df45","64":"db6432f0f325b5299ad1","65":"c18b0e1375f6a03eda3e","66":"dcae8a8552b109d455d4","67":"143cc6d5b06e5935b5a2","68":"d080f2e115b723791ac2","69":"1650303e46eb6cbc0776","70":"3bda980e3210e4fb6868","71":"d994589f76f8ef343994","72":"52261452861db1c9d8d3","73":"07b9c5c91c42c1d4ce34","74":"713cfffc001626b2908c","75":"ebcc72970f61960a7ef2","76":"c5b6a0dcd519d45d316b","77":"184385aa6339d4c96f34","78":"40ab6f583908069a8ad6","79":"f80adab20ffa4630225c","80":"a3228a730433a9662d1f","81":"f8891777d45a0531dd6a","82":"8050ac22ea489a7f381a","83":"7bbc29709c3ce3ca8437","84":"28d6d73bb21d528d2a4a","85":"4e57aa4929c4519c8ff3","86":"dce9e14a9b142940816a","87":"12a460cb1c38fc236433","88":"29155336f1b3300bb2cf","89":"bfce11aa55a2f1b6b25d","90":"02ae6530eb5cef7b03c3","91":"8245507ea3d0a31cc8ae","92":"330ef9a2677c241e39d8","93":"c403acce786e2c4661a6","94":"fec3229e594b5e3228b9","95":"1007d23fdb98dfedf774","96":"86631e13de74791f109d","97":"a10df645306ac34cb7ee","98":"ae85f3e1c2dae1699928","99":"f83519cfedc5650ad965","100":"49fee3ddcda2d933da14","101":"190a02c5e95a01cf75a0","102":"033597e02253a6e49a0c","103":"c5af52d67be7c9ad80f1","104":"7aeae284612fb15e54a6","105":"551ec501e3746e674d4c","106":"be26ad06061e0f15b509","107":"9a241abea4eea7397359","108":"a4fcc1e674979af5c17f","109":"601bd8db8b20c435d0ca","110":"5674ee1195d29cab413f","111":"9b20a0173cebd649427b","112":"0913fafada3834c14544","113":"64b7099cbbe3548773ea","114":"347d050754c740c20cf8","115":"31c2aa29783569e9ed8a","116":"1d34a004d07cd89a4d54","117":"a226e53cd358c264fc7e","118":"4a5c7b5703c353bca929","119":"35354ce18abbeade032d","120":"7ff7ea75ef9cf9ca51ed","121":"c26e40255f8889d45c4d","122":"1746e3cf55290c98ab9f","123":"800ce983141432a883bc","124":"37ab3b7bb6d40ee2a069","125":"048cfc635989cd531047","126":"a10e8838e89c79b224aa","127":"3ad6492eba37fa36e7fa","128":"71a13da8430a1bc5a35c","129":"875913e2b1d3242ed689","130":"be24016a3437f57e3c36","131":"c24345af4e1a511a03a8","132":"a1b9b3e4181e0197e324","133":"dce1d6088a3e84d9c9cb","134":"20c415adabd3cd8f0b6b","135":"e8ac5d26729b9422e1a0","136":"e822423831b2f96a5503","137":"2f23d375122e2b9bab29","138":"c8ed344b71f8aa08d2f2","139":"e58bb767b3a308dc23ab","140":"4481d1111067090bf0a2","141":"cf3e0c947cb9e947b8e2","142":"6588e9d691b4a39571e3","143":"9cf73179c7971bd29ac5","144":"4407943358740879b879","145":"01084210ce0d21296a9e","146":"74c69f7184de547da56b","147":"b15b5252684c0616b32f","148":"78eb25312871b0e03112","149":"e09b7fa927a514acc97c","150":"d2093296ed93cc1deb03","151":"88c5feb77724523f4e51","152":"aec9d1371790ea1fbbce","153":"a5f6430635beba7bb8eb","154":"e872279dd430e89a9eb3","155":"ffeffc5abcdd8496cec1","156":"68db7fe408e7087e7f85","157":"68fbf5bd0d9ab88bd116","158":"54c375531fa1f7486c4f","159":"761208a5b71e7d59f02e","160":"7ec10050adf6e50e1f30","161":"a6bb02ff10390968f21e","162":"a5465fbef9a03b99b0ba","163":"55e253fd50564069594e","164":"fadb9212bb579257b09d","165":"97a3daa4c25f4b44e1cf","166":"1ce7ef70344f79c136ec","167":"778a90dbcef392261506","168":"671ab3c054fc5ed5b126","169":"b1d7680d6a06b0b168e7","170":"e269f9a6878a99b829d2","171":"186fdc7f48d836d6678f","172":"88a29b4b30fb584f5132","173":"bf32d2730fcd50b99ad9","174":"7436ec58185693cc6066","175":"fbf3afe1be375bc269a9","176":"58582b0f084dce9878ce","177":"571750748a7e4026fa36","178":"b978d7112d36bc850a9f","179":"c5e737248280e9ed8b9b","180":"2d7cb2d37a268b70919a","181":"73e3b30f9434c9f796e5","182":"f5a0f37ba508ec5491ab","183":"374e5466fca96b4929de","184":"2ff462a798f115115fc9","185":"c2c568b3b227b4a3c6a0","186":"5a3867ccae49d09eebb6","187":"1e8428d140de59c64fd0","188":"9aade50b6ad34b59991f","189":"b7981566576ade07f704","190":"4bb3718e3bbdc776c380","191":"8ac988e22d129390b949","192":"027f0fa1e65fd0d97a31","193":"42e68974bc337db674f2","194":"643a99c608fd2cbe58b8","195":"64e0f417f15b0ee54857","196":"94635847003e54ac2921","197":"ab63f32ce8229067105c","198":"3b0d4efbd3013a8d4b5d","199":"0131d5c55012a21f78d8","200":"232a5490213aee5e9bcc","201":"f9cf008e0182869ac745","202":"35eb4cf26f7fe30bc38c","203":"2225058eb9f6eec357fb","204":"3fce6dc4b0a1a5d77f9c","205":"b8eb13d09d69f41802e4","206":"76be81dac4b94994d7aa","207":"8dd1f4bbf4572d6c1f7f","208":"708f8ddf4a59261aa546","209":"02545c8cfb49b76643ce","210":"e075e8162d45e60fdb3d","211":"4a492a450879629298ed","212":"b97e68df58509ee7fa8d","213":"f2e1ee63f9985b9e7929","214":"9ac69f76eb8e915d2798","215":"0b9c073d1d302e82e07d","216":"f072e9935aa267acb09e","217":"166a62f51a10ec4f0333","218":"13e0615966bf552386bd","219":"1d5bb113604337a354db","220":"5d2b082d1feb358a467f","221":"e281fb29d54efb05832a","222":"d4cf95f4fa80fd063056","223":"1fa3bc493257e059a7e7","224":"965ecf9a3676d42ebb2c","225":"06cb5d38f97357e9fcc8","226":"d4c09fd3a7b500debf51","227":"0d15e3e3edb7bec1a656","228":"195d02c5c5b0e2293907","229":"ffb293af5e44e7b7c687","230":"a2f2a048645af239df50","231":"7c4c15172ae53d3903c7","232":"be0fbd350dc20ac3a9ef","233":"f24aef032e54e6c60e45","234":"c3a8ef278415af245142","235":"701535b08e9813728623","236":"eee97f9257ab47767875","237":"730032d46d6ca8350cda","238":"e76baed3b1df5d3775db","239":"d6aa2c63db291c9d7577","240":"afc211d3bd54efb497b0","241":"7a71f198f5c895f72b54","242":"c8b0b945096c821212c0","243":"5f42fb7cfceb290ad105","244":"3cd09bb5467c19ebf8bf","245":"e46efb5277fbaf31da71","246":"11478c44e1b30f5109ca","247":"f8cf42eb1b064a56a993","248":"900cb334b7e4aacaa956","249":"2c99c04f1be602475331","250":"5ad0226b25be3af442aa","251":"10a0a1ce1074086aa5a2","252":"8595f30b2bb39cff5f90","253":"96f2f495d8763f876ff4","254":"7dbf31765f8ccf9f1a85","255":"af45edb249d2ad4aefaa","256":"240f8c84d010bab9830c","257":"57c1c0307339df9548dd","258":"8ab54e7295886029fa26","259":"483788c409a4455274b8","260":"10b739b6262c0751e240","261":"b741d536f82a5ccc275b","262":"f8d2ef9789163322ffd8","263":"4fa7a1885fe81300f875","264":"3aebe576aca0c4d508b0"}[chunkId] + ".js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ionic/core/css/ionic.bundle.css":
/*!*******************************************************!*\
  !*** ./node_modules/@ionic/core/css/ionic.bundle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!./ionic.bundle.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/core/css/ionic.bundle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0owmtgfs.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0owmtgfs.entry.js",
		81
	],
	"./0owmtgfs.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0owmtgfs.sc.entry.js",
		82
	],
	"./0utrggve.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0utrggve.entry.js",
		83
	],
	"./0utrggve.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/0utrggve.sc.entry.js",
		84
	],
	"./3hf0d5sl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/3hf0d5sl.entry.js",
		15
	],
	"./3hf0d5sl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/3hf0d5sl.sc.entry.js",
		16
	],
	"./47ctf96j.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/47ctf96j.entry.js",
		0,
		175
	],
	"./47ctf96j.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/47ctf96j.sc.entry.js",
		0,
		176
	],
	"./4jebvdzz.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4jebvdzz.entry.js",
		19
	],
	"./4jebvdzz.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4jebvdzz.sc.entry.js",
		20
	],
	"./4m739wpj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4m739wpj.entry.js",
		85
	],
	"./4m739wpj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4m739wpj.sc.entry.js",
		86
	],
	"./4ovfvgj2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4ovfvgj2.entry.js",
		0,
		177
	],
	"./4ovfvgj2.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4ovfvgj2.sc.entry.js",
		0,
		178
	],
	"./4tejeecb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4tejeecb.entry.js",
		23
	],
	"./4tejeecb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/4tejeecb.sc.entry.js",
		24
	],
	"./5ccusvgf.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5ccusvgf.entry.js",
		87
	],
	"./5ccusvgf.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5ccusvgf.sc.entry.js",
		88
	],
	"./5ey3bs99.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5ey3bs99.entry.js",
		25
	],
	"./5ey3bs99.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/5ey3bs99.sc.entry.js",
		26
	],
	"./6f4biktp.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6f4biktp.entry.js",
		89
	],
	"./6f4biktp.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/6f4biktp.sc.entry.js",
		90
	],
	"./8ldpeqpe.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/8ldpeqpe.entry.js",
		27
	],
	"./8ldpeqpe.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/8ldpeqpe.sc.entry.js",
		28
	],
	"./8q1e6dus.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/8q1e6dus.entry.js",
		29
	],
	"./8q1e6dus.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/8q1e6dus.sc.entry.js",
		30
	],
	"./96olk0dp.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/96olk0dp.entry.js",
		179
	],
	"./96olk0dp.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/96olk0dp.sc.entry.js",
		180
	],
	"./9rhd7ueu.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9rhd7ueu.entry.js",
		0,
		181
	],
	"./9rhd7ueu.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9rhd7ueu.sc.entry.js",
		0,
		182
	],
	"./9ynbzp83.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9ynbzp83.entry.js",
		31
	],
	"./9ynbzp83.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/9ynbzp83.sc.entry.js",
		32
	],
	"./afjpklm4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/afjpklm4.entry.js",
		91
	],
	"./afjpklm4.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/afjpklm4.sc.entry.js",
		92
	],
	"./bhtvuxzz.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bhtvuxzz.entry.js",
		0,
		33
	],
	"./bhtvuxzz.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/bhtvuxzz.sc.entry.js",
		0,
		34
	],
	"./c2kiol1t.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c2kiol1t.entry.js",
		35
	],
	"./c2kiol1t.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/c2kiol1t.sc.entry.js",
		36
	],
	"./ch8upsxn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ch8upsxn.entry.js",
		0,
		93
	],
	"./ch8upsxn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ch8upsxn.sc.entry.js",
		0,
		94
	],
	"./coytbtgb.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/coytbtgb.entry.js",
		101
	],
	"./coytbtgb.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/coytbtgb.sc.entry.js",
		102
	],
	"./cuwemyof.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cuwemyof.entry.js",
		103
	],
	"./cuwemyof.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cuwemyof.sc.entry.js",
		104
	],
	"./cyhnsxpk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cyhnsxpk.entry.js",
		0,
		185
	],
	"./cyhnsxpk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/cyhnsxpk.sc.entry.js",
		0,
		186
	],
	"./dnpeoh7c.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dnpeoh7c.entry.js",
		37
	],
	"./dnpeoh7c.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/dnpeoh7c.sc.entry.js",
		38
	],
	"./ejzmat7r.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ejzmat7r.entry.js",
		71
	],
	"./ejzmat7r.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ejzmat7r.sc.entry.js",
		72
	],
	"./fcbdrndu.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fcbdrndu.entry.js",
		105
	],
	"./fcbdrndu.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fcbdrndu.sc.entry.js",
		106
	],
	"./ffukzwt6.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ffukzwt6.entry.js",
		143
	],
	"./ffukzwt6.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ffukzwt6.sc.entry.js",
		144
	],
	"./fhznfhbd.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fhznfhbd.entry.js",
		39
	],
	"./fhznfhbd.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fhznfhbd.sc.entry.js",
		40
	],
	"./fiqi6app.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fiqi6app.entry.js",
		187
	],
	"./fiqi6app.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/fiqi6app.sc.entry.js",
		188
	],
	"./g0yheybk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/g0yheybk.entry.js",
		0,
		189
	],
	"./g0yheybk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/g0yheybk.sc.entry.js",
		0,
		190
	],
	"./gvyg1bwh.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/gvyg1bwh.entry.js",
		41
	],
	"./gvyg1bwh.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/gvyg1bwh.sc.entry.js",
		42
	],
	"./i9lnulrx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/i9lnulrx.entry.js",
		21
	],
	"./i9lnulrx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/i9lnulrx.sc.entry.js",
		22
	],
	"./jdcptvrs.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jdcptvrs.entry.js",
		107
	],
	"./jdcptvrs.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jdcptvrs.sc.entry.js",
		108
	],
	"./jpkvsu5y.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jpkvsu5y.entry.js",
		141
	],
	"./jpkvsu5y.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jpkvsu5y.sc.entry.js",
		142
	],
	"./jtkjzkgg.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jtkjzkgg.entry.js",
		43
	],
	"./jtkjzkgg.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jtkjzkgg.sc.entry.js",
		44
	],
	"./jwqvpjte.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jwqvpjte.entry.js",
		109
	],
	"./jwqvpjte.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jwqvpjte.sc.entry.js",
		110
	],
	"./jyrjuxdj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jyrjuxdj.entry.js",
		45
	],
	"./jyrjuxdj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jyrjuxdj.sc.entry.js",
		46
	],
	"./jzmfoyaa.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jzmfoyaa.entry.js",
		47
	],
	"./jzmfoyaa.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/jzmfoyaa.sc.entry.js",
		48
	],
	"./k1gbeuol.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/k1gbeuol.entry.js",
		137
	],
	"./k1gbeuol.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/k1gbeuol.sc.entry.js",
		138
	],
	"./lqvrsauo.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/lqvrsauo.entry.js",
		111
	],
	"./lqvrsauo.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/lqvrsauo.sc.entry.js",
		112
	],
	"./ly8zbpmk.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ly8zbpmk.entry.js",
		49
	],
	"./ly8zbpmk.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ly8zbpmk.sc.entry.js",
		50
	],
	"./mny78lhg.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mny78lhg.entry.js",
		0,
		191
	],
	"./mny78lhg.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/mny78lhg.sc.entry.js",
		0,
		192
	],
	"./n361sgpa.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n361sgpa.entry.js",
		51
	],
	"./n361sgpa.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/n361sgpa.sc.entry.js",
		52
	],
	"./nr6wcehx.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nr6wcehx.entry.js",
		53
	],
	"./nr6wcehx.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nr6wcehx.sc.entry.js",
		54
	],
	"./ntxo2f3d.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ntxo2f3d.entry.js",
		55
	],
	"./ntxo2f3d.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ntxo2f3d.sc.entry.js",
		56
	],
	"./nxacca4l.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nxacca4l.entry.js",
		0,
		193
	],
	"./nxacca4l.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nxacca4l.sc.entry.js",
		0,
		194
	],
	"./nxghvzhm.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nxghvzhm.entry.js",
		57
	],
	"./nxghvzhm.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/nxghvzhm.sc.entry.js",
		58
	],
	"./oboc8zd4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/oboc8zd4.entry.js",
		113
	],
	"./oboc8zd4.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/oboc8zd4.sc.entry.js",
		114
	],
	"./odqmlmdd.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/odqmlmdd.entry.js",
		59
	],
	"./odqmlmdd.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/odqmlmdd.sc.entry.js",
		60
	],
	"./psxwmesv.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/psxwmesv.entry.js",
		0,
		73
	],
	"./psxwmesv.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/psxwmesv.sc.entry.js",
		0,
		74
	],
	"./qtcvseqn.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qtcvseqn.entry.js",
		0,
		195
	],
	"./qtcvseqn.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qtcvseqn.sc.entry.js",
		0,
		196
	],
	"./qvwswew4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qvwswew4.entry.js",
		97
	],
	"./qvwswew4.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/qvwswew4.sc.entry.js",
		98
	],
	"./raunowwy.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/raunowwy.entry.js",
		115
	],
	"./raunowwy.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/raunowwy.sc.entry.js",
		116
	],
	"./s0ahgtia.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/s0ahgtia.entry.js",
		5,
		197
	],
	"./s0ahgtia.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/s0ahgtia.sc.entry.js",
		5,
		198
	],
	"./sdfyvdro.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sdfyvdro.entry.js",
		117
	],
	"./sdfyvdro.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sdfyvdro.sc.entry.js",
		118
	],
	"./sghmhl28.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sghmhl28.entry.js",
		61
	],
	"./sghmhl28.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sghmhl28.sc.entry.js",
		62
	],
	"./sjcqnbtt.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sjcqnbtt.entry.js",
		119
	],
	"./sjcqnbtt.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/sjcqnbtt.sc.entry.js",
		120
	],
	"./t547wlk7.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/t547wlk7.entry.js",
		99
	],
	"./t547wlk7.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/t547wlk7.sc.entry.js",
		100
	],
	"./ta1bgxgm.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ta1bgxgm.entry.js",
		121
	],
	"./ta1bgxgm.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ta1bgxgm.sc.entry.js",
		122
	],
	"./tui62q7d.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tui62q7d.entry.js",
		123
	],
	"./tui62q7d.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tui62q7d.sc.entry.js",
		124
	],
	"./tylmm2yl.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tylmm2yl.entry.js",
		125
	],
	"./tylmm2yl.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/tylmm2yl.sc.entry.js",
		126
	],
	"./uegz8gm3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uegz8gm3.entry.js",
		127
	],
	"./uegz8gm3.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/uegz8gm3.sc.entry.js",
		128
	],
	"./ugjythpm.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ugjythpm.entry.js",
		5,
		199
	],
	"./ugjythpm.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ugjythpm.sc.entry.js",
		5,
		200
	],
	"./unqw84tu.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/unqw84tu.entry.js",
		139
	],
	"./unqw84tu.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/unqw84tu.sc.entry.js",
		140
	],
	"./vjeei8vr.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vjeei8vr.entry.js",
		17
	],
	"./vjeei8vr.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/vjeei8vr.sc.entry.js",
		18
	],
	"./wem5ffil.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wem5ffil.entry.js",
		0,
		75
	],
	"./wem5ffil.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wem5ffil.sc.entry.js",
		0,
		76
	],
	"./wy4rjeqs.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wy4rjeqs.entry.js",
		0,
		95
	],
	"./wy4rjeqs.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/wy4rjeqs.sc.entry.js",
		0,
		96
	],
	"./xbafxwto.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xbafxwto.entry.js",
		0,
		77
	],
	"./xbafxwto.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xbafxwto.sc.entry.js",
		0,
		78
	],
	"./xfbndl84.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xfbndl84.entry.js",
		63
	],
	"./xfbndl84.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xfbndl84.sc.entry.js",
		64
	],
	"./xgnma4yj.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xgnma4yj.entry.js",
		129
	],
	"./xgnma4yj.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xgnma4yj.sc.entry.js",
		130
	],
	"./xrxaow8a.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xrxaow8a.entry.js",
		131
	],
	"./xrxaow8a.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/xrxaow8a.sc.entry.js",
		132
	],
	"./ycyyhg01.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ycyyhg01.entry.js",
		133
	],
	"./ycyyhg01.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ycyyhg01.sc.entry.js",
		134
	],
	"./ygh0szo0.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ygh0szo0.entry.js",
		65
	],
	"./ygh0szo0.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/ygh0szo0.sc.entry.js",
		66
	],
	"./z9eemkqi.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/z9eemkqi.entry.js",
		67
	],
	"./z9eemkqi.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/z9eemkqi.sc.entry.js",
		68
	],
	"./z9nt6ntd.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/z9nt6ntd.entry.js",
		145
	],
	"./z9nt6ntd.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/z9nt6ntd.sc.entry.js",
		146
	],
	"./zktscnoo.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zktscnoo.entry.js",
		135
	],
	"./zktscnoo.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zktscnoo.sc.entry.js",
		136
	],
	"./zykaqnfi.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zykaqnfi.entry.js",
		69
	],
	"./zykaqnfi.sc.entry.js": [
		"./node_modules/@ionic/core/dist/esm/es5/build/zykaqnfi.sc.entry.js",
		70
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/ionic.components.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/ionic.components.js ***!
  \*******************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
// Ionic: Host Data, ES Module/es5 Target
var COMPONENTS = [["ion-action-sheet",{"ios":"9rhd7ueu","md":"47ctf96j"},1,[["animated",1,0,1,4],["backdropDismiss",1,0,"backdrop-dismiss",4],["buttons",1],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["dismiss",32],["el",64],["enterAnimation",1],["header",1,0,1,2],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["present",32],["subHeader",1,0,"sub-header",2],["translucent",1,0,1,4]],2,[["ionBackdropTap","onBackdropTap"],["ionActionSheetWillDismiss","dispatchCancelHandler"]]],["ion-action-sheet-controller",{"ios":"9rhd7ueu","md":"47ctf96j"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-alert",{"ios":"g0yheybk","md":"cyhnsxpk"},1,[["animated",1,0,1,4],["backdropDismiss",1,0,"backdrop-dismiss",4],["buttons",1],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["dismiss",32],["el",64],["enterAnimation",1],["header",1,0,1,2],["inputs",2],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["message",1,0,1,2],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["present",32],["subHeader",1,0,"sub-header",2],["translucent",1,0,1,4]],2,[["ionBackdropTap","onBackdropTap"],["ionAlertWillDismiss","dispatchCancelHandler"]]],["ion-alert-controller",{"ios":"g0yheybk","md":"cyhnsxpk"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-anchor",{"ios":"0utrggve","md":"ycyyhg01"},1,[["color",1,0,1,2],["href",1,0,1,2],["routerDirection",1,0,"router-direction",2],["win",4,0,0,0,"window"]],1,[["click","onClick"]]],["ion-app",{"ios":"s0ahgtia","md":"ugjythpm"},1,[["config",4,0,0,0,"config"],["el",64],["queue",4,0,0,0,"queue"],["win",4,0,0,0,"window"]]],["ion-avatar",{"ios":"xgnma4yj","md":"oboc8zd4"},1,0,1],["ion-back-button",{"ios":"0utrggve","md":"ycyyhg01"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["defaultHref",1,0,"default-href",2],["el",64],["icon",1,0,1,2],["mode",1,0,1,2],["text",1,0,1,2],["win",4,0,0,0,"window"]],2,[["click","onClick"]]],["ion-backdrop",{"ios":"qvwswew4","md":"t547wlk7"},1,[["doc",4,0,0,0,"document"],["stopPropagation",1,0,"stop-propagation",4],["tappable",1,0,1,4],["visible",1,0,1,4]],1,[["touchstart","onTouchStart",0,0,1],["click","onMouseDown",0,0,1],["mousedown","onMouseDown",0,0,1]]],["ion-badge",{"ios":"xgnma4yj","md":"oboc8zd4"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-button",{"ios":"n361sgpa","md":"jyrjuxdj"},1,[["buttonType",2,0,"button-type",2],["color",1,0,1,2],["disabled",1,1,1,4],["el",64],["expand",1,1,1,2],["fill",2,1,1,2],["href",1,0,1,2],["mode",1,0,1,2],["routerDirection",1,0,"router-direction",2],["shape",1,1,1,2],["size",1,1,1,2],["strong",1,0,1,4],["type",1,0,1,2],["win",4,0,0,0,"window"]],1,[["click","onClick"]]],["ion-buttons",{"ios":"s0ahgtia","md":"ugjythpm"},1,0,2],["ion-card",{"ios":"tylmm2yl","md":"jwqvpjte"},1,[["color",1,0,1,2],["mode",1,0,1,2]],2],["ion-card-content",{"ios":"tylmm2yl","md":"jwqvpjte"},1,[["mode",1,0,1,2]]],["ion-card-header",{"ios":"tylmm2yl","md":"jwqvpjte"},1,[["color",1,0,1,2],["mode",1,0,1,2],["translucent",1,0,1,4]],1],["ion-card-subtitle",{"ios":"tylmm2yl","md":"jwqvpjte"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-card-title",{"ios":"tylmm2yl","md":"jwqvpjte"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-checkbox",{"ios":"8ldpeqpe","md":"sghmhl28"},1,[["checked",2,0,1,4],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["mode",1,0,1,2],["name",1,0,1,2],["value",1,0,1,2]],1,[["click","onClick"]]],["ion-chip",{"ios":"0owmtgfs","md":"xrxaow8a"},1,[["color",1,0,1,2],["mode",1,0,1,2],["outline",1,0,1,4]],1],["ion-col","96olk0dp",1,[["el",64],["offset",1,0,1,2],["offsetLg",1,0,"offset-lg",2],["offsetMd",1,0,"offset-md",2],["offsetSm",1,0,"offset-sm",2],["offsetXl",1,0,"offset-xl",2],["offsetXs",1,0,"offset-xs",2],["pull",1,0,1,2],["pullLg",1,0,"pull-lg",2],["pullMd",1,0,"pull-md",2],["pullSm",1,0,"pull-sm",2],["pullXl",1,0,"pull-xl",2],["pullXs",1,0,"pull-xs",2],["push",1,0,1,2],["pushLg",1,0,"push-lg",2],["pushMd",1,0,"push-md",2],["pushSm",1,0,"push-sm",2],["pushXl",1,0,"push-xl",2],["pushXs",1,0,"push-xs",2],["size",1,0,1,2],["sizeLg",1,0,"size-lg",2],["sizeMd",1,0,"size-md",2],["sizeSm",1,0,"size-sm",2],["sizeXl",1,0,"size-xl",2],["sizeXs",1,0,"size-xs",2],["win",4,0,0,0,"window"]],1,[["window:resize","onResize",0,1]]],["ion-content",{"ios":"s0ahgtia","md":"ugjythpm"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["el",64],["forceOverscroll",2,0,"force-overscroll",4],["fullscreen",1,0,1,4],["getScrollElement",32],["queue",4,0,0,0,"queue"],["scrollByPoint",32],["scrollEvents",1,0,"scroll-events",4],["scrollToBottom",32],["scrollToPoint",32],["scrollToTop",32],["scrollX",1,0,"scroll-x",4],["scrollY",1,0,"scroll-y",4],["win",4,0,0,0,"window"]],1,[["click","onClick",0,0,1]]],["ion-datetime",{"ios":"wy4rjeqs","md":"ch8upsxn"},1,[["cancelText",1,0,"cancel-text",2],["dayNames",1,0,"day-names",2],["dayShortNames",1,0,"day-short-names",2],["dayValues",1,0,"day-values",1],["disabled",1,0,1,4],["displayFormat",1,0,"display-format",2],["doneText",1,0,"done-text",2],["el",64],["hourValues",1,0,"hour-values",1],["isExpanded",16],["max",2,0,1,2],["min",2,0,1,2],["minuteValues",1,0,"minute-values",1],["mode",1,0,1,2],["monthNames",1,0,"month-names",2],["monthShortNames",1,0,"month-short-names",2],["monthValues",1,0,"month-values",1],["name",1,0,1,2],["open",32],["pickerCtrl",8,0,0,0,"ion-picker-controller"],["pickerFormat",1,0,"picker-format",2],["pickerOptions",1],["placeholder",1,0,1,2],["readonly",1,0,1,4],["value",2,0,1,2],["yearValues",1,0,"year-values",1]],1,[["click","onClick"]]],["ion-fab",{"ios":"cuwemyof","md":"ta1bgxgm"},1,[["activated",2,0,1,4],["close",32],["edge",1,0,1,4],["el",64],["horizontal",1,0,1,2],["vertical",1,0,1,2]],1,[["click","onClick"]]],["ion-fab-button",{"ios":"cuwemyof","md":"ta1bgxgm"},1,[["activated",1,0,1,4],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["href",1,0,1,2],["mode",1,0,1,2],["routerDirection",1,0,"router-direction",2],["show",1,0,1,4],["size",1,0,1,2],["translucent",1,0,1,4],["type",1,0,1,2],["win",4,0,0,0,"window"]],1],["ion-fab-list",{"ios":"cuwemyof","md":"ta1bgxgm"},1,[["activated",1,0,1,4],["el",64],["side",1,0,1,2]],1],["ion-footer",{"ios":"s0ahgtia","md":"ugjythpm"},1,[["mode",1,0,1,2],["translucent",1,0,1,4]]],["ion-grid","96olk0dp",1,[["fixed",1,0,1,4]],1],["ion-header",{"ios":"s0ahgtia","md":"ugjythpm"},1,[["mode",1,0,1,2],["translucent",1,0,1,4]]],["ion-icon",{"ios":"n361sgpa","md":"jyrjuxdj"},1,[["ariaLabel",2,1,"aria-label",2],["color",1,0,1,2],["doc",4,0,0,0,"document"],["el",64],["flipRtl",1,0,"flip-rtl",4],["icon",1,0,1,2],["ios",1,0,1,2],["isServer",4,0,0,0,"isServer"],["isVisible",16],["lazy",1,0,1,4],["md",1,0,1,2],["mode",1,0,1,2],["name",1,0,1,2],["resourcesUrl",4,0,0,0,"resourcesUrl"],["size",1,0,1,2],["src",1,0,1,2],["svgContent",16],["win",4,0,0,0,"window"]],1],["ion-img","fiqi6app",1,[["alt",1,0,1,2],["el",64],["loadSrc",16],["src",1,0,1,2]],1],["ion-infinite-scroll",{"ios":"fcbdrndu","md":"afjpklm4"},1,[["complete",32],["disabled",1,0,1,4],["el",64],["enableListener",4,0,0,0,"enableListener"],["isLoading",16],["position",1,0,1,2],["queue",4,0,0,0,"queue"],["threshold",1,0,1,2]],0,[["scroll","onScroll",1,1]]],["ion-infinite-scroll-content",{"ios":"fcbdrndu","md":"afjpklm4"},1,[["config",4,0,0,0,"config"],["loadingSpinner",2,0,"loading-spinner",2],["loadingText",1,0,"loading-text",2]]],["ion-input",{"ios":"xfbndl84","md":"zykaqnfi"},1,[["accept",1,0,1,2],["autocapitalize",1,0,1,2],["autocomplete",1,0,1,2],["autocorrect",1,0,1,2],["autofocus",1,0,1,4],["clearInput",1,0,"clear-input",4],["clearOnEdit",2,0,"clear-on-edit",4],["color",1,0,1,2],["debounce",1,0,1,8],["disabled",1,0,1,4],["el",64],["getInputElement",32],["hasFocus",16],["inputmode",1,0,1,2],["max",1,0,1,2],["maxlength",1,0,1,8],["min",1,0,1,2],["minlength",1,0,1,8],["mode",1,0,1,2],["multiple",1,0,1,4],["name",1,0,1,2],["pattern",1,0,1,2],["placeholder",1,0,1,2],["readonly",1,0,1,4],["required",1,0,1,4],["setFocus",32],["size",1,0,1,8],["spellcheck",1,0,1,4],["step",1,0,1,2],["type",1,0,1,2],["value",2,0,1,2]],2],["ion-item",{"ios":"sdfyvdro","md":"sjcqnbtt"},1,[["button",1,0,1,4],["color",1,0,1,2],["detail",1,0,1,4],["detailIcon",1,0,"detail-icon",2],["disabled",1,0,1,4],["el",64],["href",1,0,1,2],["lines",1,0,1,2],["mode",1,0,1,2],["multipleInputs",16],["routerDirection",1,0,"router-direction",2],["type",1,0,1,2],["win",4,0,0,0,"window"]],1,[["ionStyle","itemStyle"]]],["ion-item-divider",{"ios":"sdfyvdro","md":"sjcqnbtt"},1,[["color",1,0,1,2],["el",64],["mode",1,0,1,2],["sticky",1,0,1,4]],1],["ion-item-group",{"ios":"sdfyvdro","md":"sjcqnbtt"},1],["ion-item-option",{"ios":"gvyg1bwh","md":"z9eemkqi"},1,[["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["expandable",1,0,1,4],["href",1,0,1,2],["mode",1,0,1,2]],1,[["click","onClick"]]],["ion-item-options",{"ios":"gvyg1bwh","md":"z9eemkqi"},1,[["el",64],["fireSwipeEvent",32],["side",1,0,1,2],["win",4,0,0,0,"window"]]],["ion-item-sliding",{"ios":"gvyg1bwh","md":"z9eemkqi"},1,[["close",32],["closeOpened",32],["disabled",1,0,1,4],["el",64],["getOpenAmount",32],["getSlidingRatio",32],["queue",4,0,0,0,"queue"],["state",16]]],["ion-label",{"ios":"sdfyvdro","md":"sjcqnbtt"},1,[["color",1,0,1,2],["el",64],["mode",1,0,1,2],["noAnimate",16],["position",1,0,1,2]],2],["ion-list",{"ios":"sdfyvdro","md":"sjcqnbtt"},1,[["closeSlidingItems",32],["el",64],["inset",1,0,1,4],["lines",1,0,1,2],["mode",1,0,1,2]]],["ion-list-header",{"ios":"sdfyvdro","md":"sjcqnbtt"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-loading",{"ios":"4ovfvgj2","md":"mny78lhg"},1,[["animated",1,0,1,4],["backdropDismiss",1,0,"backdrop-dismiss",4],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["dismiss",32],["duration",1,0,1,8],["el",64],["enterAnimation",1],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["message",1,0,1,2],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["present",32],["showBackdrop",1,0,"show-backdrop",4],["spinner",2,0,1,2],["translucent",1,0,1,4]],2,[["ionBackdropTap","onBackdropTap"]]],["ion-loading-controller",{"ios":"4ovfvgj2","md":"mny78lhg"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-menu",{"ios":"ejzmat7r","md":"4tejeecb"},1,[["close",32],["config",4,0,0,0,"config"],["contentId",1,0,"content-id",2],["disabled",2,0,1,4],["doc",4,0,0,0,"document"],["el",64],["enableListener",4,0,0,0,"enableListener"],["isActive",32],["isEndSide",16],["isOpen",32],["isPaneVisible",16],["isServer",4,0,0,0,"isServer"],["lazyMenuCtrl",8,0,0,0,"ion-menu-controller"],["maxEdgeStart",1,0,"max-edge-start",8],["menuId",1,0,"menu-id",2],["open",32],["queue",4,0,0,0,"queue"],["setOpen",32],["side",1,1,1,2],["swipeGesture",1,0,"swipe-gesture",4],["toggle",32],["type",2,0,1,2],["win",4,0,0,0,"window"]],1,[["body:ionSplitPaneVisible","onSplitPaneChanged"],["click","onBackdropClick",1,0,1]]],["ion-menu-button",{"ios":"ejzmat7r","md":"4tejeecb"},1,[["autoHide",1,0,"auto-hide",4],["color",1,0,1,2],["config",4,0,0,0,"config"],["menu",1,0,1,2],["mode",1,0,1,2]],1],["ion-menu-controller",{"ios":"ejzmat7r","md":"4tejeecb"},1,[["_getInstance",32],["close",32],["config",4,0,0,0,"config"],["doc",4,0,0,0,"document"],["enable",32],["get",32],["getMenus",32],["getOpen",32],["isAnimating",32],["isEnabled",32],["isOpen",32],["open",32],["registerAnimation",32],["swipeGesture",32],["toggle",32]]],["ion-menu-toggle",{"ios":"ejzmat7r","md":"4tejeecb"},1,[["autoHide",1,0,"auto-hide",4],["doc",4,0,0,0,"document"],["menu",1,0,1,2],["visible",16]],1,[["click","onClick"],["body:ionMenuChange","updateVisibility"],["body:ionSplitPaneVisible","updateVisibility"]]],["ion-modal",{"ios":"xbafxwto","md":"psxwmesv"},1,[["animated",1,0,1,4],["backdropDismiss",1,0,"backdrop-dismiss",4],["component",1,0,1,2],["componentProps",1],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["delegate",1],["dismiss",32],["el",64],["enterAnimation",1],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["present",32],["showBackdrop",1,0,"show-backdrop",4]],2,[["ionDismiss","onDismiss"],["ionBackdropTap","onBackdropTap"],["ionModalDidPresent","lifecycle"],["ionModalWillPresent","lifecycle"],["ionModalWillDismiss","lifecycle"],["ionModalDidDismiss","lifecycle"]]],["ion-modal-controller",{"ios":"xbafxwto","md":"psxwmesv"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-nav","3hf0d5sl",1,[["animated",1,0,1,4],["animation",1],["canGoBack",32],["config",4,0,0,0,"config"],["delegate",1],["el",64],["getActive",32],["getByIndex",32],["getPrevious",32],["getRouteId",32],["insert",32],["insertPages",32],["pop",32],["popTo",32],["popToRoot",32],["push",32],["queue",4,0,0,0,"queue"],["removeIndex",32],["root",1,0,1,2],["rootParams",1],["setPages",32],["setRoot",32],["setRouteId",32],["swipeGesture",2,0,"swipe-gesture",4],["win",4,0,0,0,"window"]],1],["ion-nav-pop","3hf0d5sl",0,[["el",64]],0,[["child:click","pop"]]],["ion-nav-push","3hf0d5sl",0,[["component",1,0,1,2],["componentProps",1],["el",64]],0,[["child:click","push"]]],["ion-nav-set-root","3hf0d5sl",0,[["component",1,0,1,2],["componentProps",1],["el",64]],0,[["child:click","push"]]],["ion-note",{"ios":"sdfyvdro","md":"sjcqnbtt"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-picker",{"ios":"wy4rjeqs","md":"ch8upsxn"},1,[["animated",1,0,1,4],["backdropDismiss",1,0,"backdrop-dismiss",4],["buttons",1],["columns",1],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["dismiss",32],["duration",1,0,1,8],["el",64],["enterAnimation",1],["getColumn",32],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["present",32],["presented",16],["showBackdrop",1,0,"show-backdrop",4]],2,[["ionBackdropTap","onBackdropTap"]]],["ion-picker-column",{"ios":"wy4rjeqs","md":"ch8upsxn"},1,[["col",1],["el",64],["queue",4,0,0,0,"queue"]]],["ion-picker-controller",{"ios":"wy4rjeqs","md":"ch8upsxn"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-popover",{"ios":"bhtvuxzz","md":"wem5ffil"},1,[["animated",1,0,1,4],["backdropDismiss",1,0,"backdrop-dismiss",4],["component",1,0,1,2],["componentProps",1],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["delegate",1],["dismiss",32],["el",64],["enterAnimation",1],["event",1,0,1,1],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["present",32],["showBackdrop",1,0,"show-backdrop",4],["translucent",1,0,1,4]],2,[["ionDismiss","onDismiss"],["ionBackdropTap","onBackdropTap"],["ionPopoverDidPresent","lifecycle"],["ionPopoverWillPresent","lifecycle"],["ionPopoverWillDismiss","lifecycle"],["ionPopoverDidDismiss","lifecycle"]]],["ion-popover-controller",{"ios":"bhtvuxzz","md":"wem5ffil"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-progress-bar",{"ios":"c2kiol1t","md":"jtkjzkgg"},1,[["buffer",1,0,1,8],["color",1,0,1,2],["config",4,0,0,0,"config"],["mode",1,0,1,2],["reversed",1,0,1,4],["type",1,0,1,2],["value",1,0,1,8]],1],["ion-radio",{"ios":"nr6wcehx","md":"ly8zbpmk"},1,[["checked",2,0,1,4],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["mode",1,0,1,2],["name",1,0,1,2],["value",2,0,1,1]],1,[["click","onClick"]]],["ion-radio-group",{"ios":"nr6wcehx","md":"ly8zbpmk"},0,[["allowEmptySelection",1,0,"allow-empty-selection",4],["el",64],["name",1,0,1,2],["value",2,0,1,1]],0,[["ionRadioDidLoad","onRadioDidLoad"],["ionRadioDidUnload","onRadioDidUnload"],["ionSelect","onRadioSelect"],["ionDeselect","onRadioDeselect"]]],["ion-range",{"ios":"jzmfoyaa","md":"dnpeoh7c"},1,[["color",1,0,1,2],["debounce",1,0,1,8],["disabled",1,0,1,4],["dualKnobs",1,0,"dual-knobs",4],["el",64],["max",1,0,1,8],["min",1,0,1,8],["mode",1,0,1,2],["name",1,0,1,2],["pin",1,0,1,4],["pressedKnob",16],["queue",4,0,0,0,"queue"],["ratioA",16],["ratioB",16],["snaps",1,0,1,4],["step",1,0,1,8],["value",2,0,1,8]],1,[["focusout","onBlur"],["focusin","onFocus"]]],["ion-refresher",{"ios":"5ccusvgf","md":"lqvrsauo"},1,[["cancel",32],["closeDuration",1,0,"close-duration",2],["complete",32],["disabled",1,0,1,4],["el",64],["getProgress",32],["pullMax",1,0,"pull-max",8],["pullMin",1,0,"pull-min",8],["queue",4,0,0,0,"queue"],["snapbackDuration",1,0,"snapback-duration",2],["state",16]]],["ion-refresher-content",{"ios":"5ccusvgf","md":"lqvrsauo"},0,[["config",4,0,0,0,"config"],["pullingIcon",2,0,"pulling-icon",2],["pullingText",1,0,"pulling-text",2],["refreshingSpinner",2,0,"refreshing-spinner",2],["refreshingText",1,0,"refreshing-text",2]]],["ion-reorder",{"ios":"unqw84tu","md":"k1gbeuol"},1,0,1,[["click","onClick",0,0,1]]],["ion-reorder-group",{"ios":"unqw84tu","md":"k1gbeuol"},1,[["complete",32],["disabled",1,0,1,4],["doc",4,0,0,0,"document"],["el",64],["queue",4,0,0,0,"queue"],["state",16]]],["ion-ripple-effect","z9nt6ntd",1,[["addRipple",32],["el",64],["queue",4,0,0,0,"queue"],["type",1,0,1,2],["win",4,0,0,0,"window"]],1],["ion-route","vjeei8vr",0,[["component",1,0,1,2],["componentProps",1],["url",1,0,1,2]]],["ion-route-redirect","vjeei8vr",0,[["from",1,0,1,2],["to",1,0,1,2]]],["ion-router","vjeei8vr",0,[["back",32],["config",4,0,0,0,"config"],["el",64],["navChanged",32],["printDebug",32],["push",32],["queue",4,0,0,0,"queue"],["root",1,0,1,2],["useHash",1,0,"use-hash",4],["win",4,0,0,0,"window"]],0,[["window:popstate","onPopState"],["document:ionBackButton","onBackButton"]]],["ion-router-outlet","vjeei8vr",1,[["animated",1,0,1,4],["animation",1],["commit",32],["config",4,0,0,0,"config"],["delegate",1],["el",64],["getRouteId",32],["mode",1,0,1,2],["queue",4,0,0,0,"queue"],["setRouteId",32],["swipeHandler",1],["win",4,0,0,0,"window"]],1],["ion-row","96olk0dp",1,0,1],["ion-searchbar",{"ios":"ygh0szo0","md":"5ey3bs99"},1,[["animated",1,0,1,4],["autocomplete",1,0,1,2],["autocorrect",1,0,1,2],["cancelButtonIcon",1,0,"cancel-button-icon",2],["cancelButtonText",1,0,"cancel-button-text",2],["clearIcon",1,0,"clear-icon",2],["color",1,0,1,2],["config",4,0,0,0,"config"],["debounce",1,0,1,8],["doc",4,0,0,0,"document"],["el",64],["focused",16],["getInputElement",32],["mode",1,0,1,2],["noAnimate",16],["placeholder",1,0,1,2],["searchIcon",1,0,"search-icon",2],["setFocus",32],["showCancelButton",1,0,"show-cancel-button",4],["spellcheck",1,0,1,4],["type",1,0,1,2],["value",2,0,1,2]],2],["ion-segment",{"ios":"4m739wpj","md":"uegz8gm3"},1,[["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["mode",1,0,1,2],["scrollable",1,0,1,4],["value",2,0,1,2]],2,[["ionSelect","segmentClick"]]],["ion-segment-button",{"ios":"4m739wpj","md":"uegz8gm3"},1,[["checked",2,0,1,4],["disabled",1,0,1,4],["el",64],["layout",1,0,1,2],["mode",1,0,1,2],["value",1,0,1,2]],1,[["click","onClick"]]],["ion-select",{"ios":"nxghvzhm","md":"fhznfhbd"},1,[["actionSheetCtrl",8,0,0,0,"ion-action-sheet-controller"],["alertCtrl",8,0,0,0,"ion-alert-controller"],["cancelText",1,0,"cancel-text",2],["disabled",1,0,1,4],["el",64],["interface",1,0,1,2],["interfaceOptions",1,0,"interface-options",1],["isExpanded",16],["mode",1,0,1,2],["multiple",1,0,1,4],["name",1,0,1,2],["okText",1,0,"ok-text",2],["open",32],["placeholder",1,0,1,2],["popoverCtrl",8,0,0,0,"ion-popover-controller"],["selectedText",1,0,"selected-text",2],["value",2,0,1,1]],1,[["ionSelectOptionDidLoad","selectOptionChanged"],["ionSelectOptionDidUnload","selectOptionChanged"],["click","onClick"]]],["ion-select-option",{"ios":"nxghvzhm","md":"fhznfhbd"},1,[["disabled",1,0,1,4],["el",64],["selected",1,0,1,4],["value",2,0,1,1]],1],["ion-select-popover",{"ios":"nxghvzhm","md":"fhznfhbd"},1,[["header",1,0,1,2],["message",1,0,1,2],["options",1],["subHeader",1,0,"sub-header",2]],2,[["ionSelect","onSelect"]]],["ion-skeleton-text",{"ios":"sdfyvdro","md":"sjcqnbtt"},1,[["width",1,0,1,2]],1],["ion-slide",{"ios":"9ynbzp83","md":"ntxo2f3d"},1],["ion-slides",{"ios":"9ynbzp83","md":"ntxo2f3d"},1,[["el",64],["getActiveIndex",32],["getPreviousIndex",32],["isBeginning",32],["isEnd",32],["length",32],["lockSwipeToNext",32],["lockSwipeToPrev",32],["lockSwipes",32],["mode",1,0,1,2],["options",1,0,1,1],["pager",1,0,1,4],["scrollbar",1,0,1,4],["slideNext",32],["slidePrev",32],["slideTo",32],["startAutoplay",32],["stopAutoplay",32],["update",32],["updateAutoHeight",32]],0,[["ionSlideChanged","onSlideChanged"]]],["ion-spinner","jdcptvrs",1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["duration",1,0,1,8],["name",1,0,1,2],["paused",1,0,1,4]],1],["ion-split-pane",{"ios":"zktscnoo","md":"raunowwy"},1,[["contentId",1,0,"content-id",2],["disabled",1,0,1,4],["el",64],["isServer",4,0,0,0,"isServer"],["visible",16],["when",1,0,1,1],["win",4,0,0,0,"window"]]],["ion-tab","jpkvsu5y",1,[["active",2,0,1,4],["component",1,0,1,2],["delegate",1],["el",64],["setActive",32],["tab",1,0,1,2]],1],["ion-tab-bar",{"ios":"tui62q7d","md":"6f4biktp"},1,[["color",1,0,1,2],["doc",4,0,0,0,"document"],["el",64],["keyboardVisible",16],["mode",1,0,1,2],["queue",4,0,0,0,"queue"],["selectedTab",1,0,"selected-tab",2],["translucent",1,0,1,4]],1,[["window:keyboardWillHide","onKeyboardWillHide"],["window:keyboardWillShow","onKeyboardWillShow"]]],["ion-tab-button",{"ios":"tui62q7d","md":"6f4biktp"},1,[["config",4,0,0,0,"config"],["disabled",1,0,1,4],["doc",4,0,0,0,"document"],["el",64],["href",1,0,1,2],["layout",2,0,1,2],["mode",1,0,1,2],["queue",4,0,0,0,"queue"],["selected",2,0,1,4],["tab",1,0,1,2]],1,[["parent:ionTabBarChanged","onTabBarChanged"],["click","onClick"]]],["ion-tabs","jpkvsu5y",1,[["config",4,0,0,0,"config"],["doc",4,0,0,0,"document"],["el",64],["getRouteId",32],["getSelected",32],["getTab",32],["select",32],["selectedTab",16],["setRouteId",32],["tabs",16],["useRouter",2,0,"use-router",4]],1,[["ionTabButtonClick","onTabClicked"]]],["ion-text","coytbtgb",1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-textarea",{"ios":"8q1e6dus","md":"odqmlmdd"},1,[["autocapitalize",1,0,1,2],["autofocus",1,0,1,4],["clearOnEdit",2,0,"clear-on-edit",4],["color",1,0,1,2],["cols",1,0,1,8],["debounce",1,0,1,8],["disabled",1,0,1,4],["el",64],["getInputElement",32],["hasFocus",16],["maxlength",1,0,1,8],["minlength",1,0,1,8],["mode",1,0,1,2],["name",1,0,1,2],["placeholder",1,0,1,2],["readonly",1,0,1,4],["required",1,0,1,4],["rows",1,0,1,8],["setFocus",32],["spellcheck",1,0,1,4],["value",2,0,1,2],["wrap",1,0,1,2]],2],["ion-thumbnail",{"ios":"xgnma4yj","md":"oboc8zd4"},1,0,1],["ion-title",{"ios":"s0ahgtia","md":"ugjythpm"},1,[["color",1,0,1,2],["el",64]],1],["ion-toast",{"ios":"nxacca4l","md":"qtcvseqn"},1,[["animated",1,0,1,4],["closeButtonText",1,0,"close-button-text",2],["color",1,0,1,2],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["dismiss",32],["duration",1,0,1,8],["el",64],["enterAnimation",1],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["message",1,0,1,2],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["position",1,0,1,2],["present",32],["showCloseButton",1,0,"show-close-button",4],["translucent",1,0,1,4]],1],["ion-toast-controller",{"ios":"nxacca4l","md":"qtcvseqn"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-toggle",{"ios":"4jebvdzz","md":"i9lnulrx"},1,[["activated",16],["checked",2,0,1,4],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["mode",1,0,1,2],["name",1,0,1,2],["queue",4,0,0,0,"queue"],["value",1,0,1,2]],1,[["click","onClick"]]],["ion-toolbar",{"ios":"s0ahgtia","md":"ugjythpm"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["el",64],["mode",1,0,1,2]],1,[["ionStyle","childrenStyle"]]],["ion-virtual-scroll","ffukzwt6",1,[["approxFooterHeight",1,0,"approx-footer-height",8],["approxHeaderHeight",1,0,"approx-header-height",8],["approxItemHeight",1,0,"approx-item-height",8],["checkEnd",32],["checkRange",32],["domRender",1],["el",64],["enableListener",4,0,0,0,"enableListener"],["footerFn",1],["headerFn",1],["itemHeight",1],["items",1],["nodeRender",1],["positionForItem",32],["queue",4,0,0,0,"queue"],["renderFooter",1],["renderHeader",1],["renderItem",1],["totalHeight",16],["win",4,0,0,0,"window"]],0,[["scroll","onScroll",1],["window:resize","onResize",0,1]]]]

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/ionic.core.js ***!
  \*************************************************************/
/*! exports provided: defineCustomElement, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return e; });
/* harmony import */ var _ionic_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.global.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.global.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Ionic: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)A.push(arguments[f]);for(;A.length>0;){var c=A.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)A.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&A.push(f);t.class=A.join(" "),A.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],E):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"Ionic";return B||(B=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),U[s].u(function i(n){var t=C(n),e=t.s,r=d(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return __webpack_require__("./node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$")("./"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!U[s]){var u={},c=e.resourcesUrl||"./";Object(_ionic_global_js__WEBPACK_IMPORTED_MODULE_0__["default"])(s,u,n,i,c,o),U[s]=q(s,u,n,i,c,o,r)}if(window.customStyleShim)return U[s].l=window.customStyleShim,U[s].l.initShim().then(t);t()})}undefined&&undefined.v;var i=undefined&&undefined.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=undefined&&undefined.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,j:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=undefined;function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return x.error=n,x}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===T?s(n,t.C):t.A===W?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===x?(l(n,x.error),x.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.O);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.S&&n.S(n.C),p(n)}function s(n,t){n.A===P&&(n.C=t,n.A=T,0!==n._.length&&M(p,n))}function l(n,t){n.A===P&&(n.A=W,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.S=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){x.error=n,o=x}if(o===x?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===P&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,m=void 0,g=void 0,M=function(n,t){O[b]=n,O[b+1]=t,2===(b+=2)&&(g?g(e):S())},j=(y=void 0!==n?n:void 0)||{},k=j.MutationObserver||j.WebKitMutationObserver;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"=="function"?function(){try{var n=Function("return this")().P("vertx");return void 0!==(m=n.T||n.W)?function(){m(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),P=void 0,T=1,W=2,x={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===P&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==P?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===P&&(this.L--,n===W?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(T,t,n)},function(n){return e.H(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.U=function(n){g=n},L.B=function(n){M=n},L.I=M,L.G=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.G(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(__webpack_require__.e(/*! import() */ 203).then(__webpack_require__.bind(null, /*! ./polyfills/dom.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/dom.js"))),"function"==typeof Object.assign&&Object.entries||t.push(__webpack_require__.e(/*! import() */ 205).then(__webpack_require__.bind(null, /*! ./polyfills/object.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/object.js"))),Array.prototype.find&&Array.prototype.includes||t.push(__webpack_require__.e(/*! import() */ 201).then(__webpack_require__.bind(null, /*! ./polyfills/array.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/array.js"))),String.prototype.startsWith&&String.prototype.endsWith||t.push(__webpack_require__.e(/*! import() */ 206).then(__webpack_require__.bind(null, /*! ./polyfills/string.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/string.js"))),n.fetch||t.push(__webpack_require__.e(/*! import() */ 204).then(__webpack_require__.bind(null, /*! ./polyfills/fetch.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/fetch.js"))),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(__webpack_require__.e(/*! import() */ 202).then(__webpack_require__.bind(null, /*! ./polyfills/css-shim.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/css-shim.js"))),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(__webpack_require__.e(/*! import() */ 207).then(__webpack_require__.bind(null, /*! ./polyfills/url.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/url.js"))),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=function(t,e,r,i){var o=r.t+i.mode,u=r[o];if((2===r.Y||1===r.Y&&!t.J.Z)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u||(u=r[o=r.t+c]),u){var f=e.K.head;if(e.Z)if(1===r.Y)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.V.get(f);if(s||t.V.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.X("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.nn(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},v=function(n){return null!=n},p=function(n){return n.toLowerCase()},d=function(n){return p(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},h=function(){},y=function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(w,p(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(w,p(t),e):n.setAttribute(t,e))},w="http://www.w3.org/1999/xlink",b=function(n,t,e,r,i,o,u){if("class"!==e||o)if("style"===e){for(var f in r)i&&null!=i[f]||(/-/.test(f)?t.style.removeProperty(f):t.style[f]="");for(var f in i)r&&i[f]===r[f]||(/-/.test(f)?t.style.setProperty(f,i[f]):t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var c=n.tn(t);c&&c.en&&c.en[e]?(g(t,e,i),u&&c.en[e].rn&&y(t,c.en[e].in,i,4===c.en[e].on)):"ref"!==e&&(g(t,e,null==i?"":i),null!=i&&!1!==i||n.J.un(t,e))}else null!=i&&"key"!==e?y(t,e,i):(o||n.J.fn(t,e)&&(null==i||!1===i))&&n.J.un(t,e);else e=p(e)in t?p(e.substring(2)):p(e[2])+e.substring(3),i?i!==r&&n.J.cn(t,e,i,0):n.J.an(t,e,0);else if(r!==i){var a=m(r),s=m(i),l=a.filter(function(n){return!s.includes(n)}),v=m(t.className).filter(function(n){return!l.includes(n)}),d=s.filter(function(n){return!a.includes(n)&&!v.includes(n)});v.push.apply(v,d),t.className=v.join(" ")}},m=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},g=function(n,t,e){try{n[t]=e}catch(n){}},M=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||b(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||b(n,o,i,u[i],f[i],r,e.o)},j=!1,k=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){k(n,t)}))},$=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},A=[],E={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},C=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{in:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={sn:e[1],rn:!!e[2],in:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,on:e[4]};return{t:r,s:i,en:Object.assign({},c),Y:u,ln:f?f.map(O):void 0}},O=function(n){return{vn:n[0],pn:n[1],dn:!!n[2],hn:!!n[3],yn:!!n[4]}},S=function(n,t){return v(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},_=function(n,t,e){n.wn.add(t),n.bn.has(t)||(n.bn.set(t,!0),n.mn?n.queue.write(function(){return P(n,t,e)}):n.queue.tick(function(){return P(n,t,e)}))},P=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:if(n.bn.delete(r),n.gn.has(r))return[3,12];if(a=n.Mn.get(r))return[3,6];if((s=n.jn.get(r))&&!s["s-rn"])return(s["s-rc"]=s["s-rc"]||[]).push(function(){P(n,r,f)}),[2];if(!(a=R(n,r,n.kn.get(r),f)))return[3,5];o.label=1;case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.j(),o.label=3;case 3:return[3,5];case 4:return i=o.j(),n.$n(i,3,r),[3,5];case 5:return[3,11];case 6:if(!a)return[3,11];o.label=7;case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.j(),o.label=9;case 9:return[3,11];case 10:return u=o.j(),n.$n(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u,f=r.An.host,c=r.An.encapsulation,a="shadow"===c&&n.J.Z,s=i;if(u=function(n,t,e){return n&&Object.keys(n).forEach(function(r){n[r].reflectToAttr&&((e=e||{})[r]=t[r])}),e}(r.An.properties,o),a&&(s=i.shadowRoot),!i["s-rn"]){n.En(n,n.J,r,i);var l=i["s-sc"];l&&(n.J.Cn(i,t(l,!0)),"scoped"===c&&n.J.Cn(i,t(l)))}if(o.render||o.hostData||f||u){n.On=!0;var v=o.render&&o.render(),p=void 0;p=o.hostData&&o.hostData(),u&&(p=p?Object.assign(p,u):u),n.On=!1;var d=e(null,p,v),h=n.Sn.get(i)||{};h.i=s,d.o=!0,n.Sn.set(i,n.render(i,h,d,a,c))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.On=!1,n.$n(t,8,i,!0)}})(n,n.tn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},T=function(n,t,e,r,i,o,u){(u=n._n.get(t))||n._n.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.Mn.get(t))){var c=u[N+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.On&&t["s-rn"]&&_(n,t,i)}},W=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},x=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},N="wc-",R=function(n,t,e,r,i,o,u,f){try{i=new(o=n.tn(t).An),function(n,t,e,r,i,o){n.Pn.set(r,e),n._n.has(e)||n._n.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type||t.state){var a=n._n.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&v(c=f[t.attr])&&(a[i]=S(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=S(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[N+i]=t.watchCallbacks.slice()),x(r,i,function s(t){return(t=n._n.get(n.Pn.get(this)))&&t[i]},function l(e,r){(r=n.Pn.get(this))&&(t.state||t.mutable)&&T(n,r,i,e,u)})}else if(t.elementRef)W(r,i,e);else if(t.method)W(e,i,r[i].bind(r));else if(t.context){var p=n.Wn(t.context);void 0!==p&&W(r,i,p.getContext&&p.getContext(e)||p)}else t.connect&&W(r,i,n.xn(t.connect))})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function c(n,t,e){if(t){var r=n.Pn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.Nn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i);try{if(u=n.Rn.get(t)){for(f=0;f<u.length;f+=2)i[u[f]](u[f+1]);n.Rn.delete(t)}}catch(e){n.$n(e,2,t)}}catch(e){i={},n.$n(e,7,t,!0)}return n.Mn.set(t,i),i},L=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.tn(r)&&!n.Ln.has(r))return!1;if(!L(n,r))return!1}}return!0},D=function(n,t,e,r,i,o){if(n.wn.delete(t),(i=n.jn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.jn.delete(t)),n.Dn.length&&!n.wn.size)for(;o=n.Dn.shift();)o()},F=function(n,t,e,r){return function(){var i=arguments;return H(n,t,e).then(function(n){return n[r].apply(n,i)})}},H=function(n,t,e,r,i){return r=t[e],(i=n.K.body)?(r||(r=i.querySelector(e)),r||(r=t[e]=n.X(e),n.Fn(i,r)),r.componentOnReady()):Promise.resolve()},q=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},d={},y=r[n]=r[n]||{},w=function(n,t,e){var r=new WeakMap,i={K:e,Z:!!e.documentElement.attachShadow,Hn:!1,qn:function(n){return n.nodeType},X:function(n){return e.createElement(n)},Un:function(n,t){return e.createElementNS(n,t)},Bn:function(n){return e.createTextNode(n)},In:function(n){return e.createComment(n)},nn:function(n,t,e){return n.insertBefore(t,e)},Gn:function(n){return n.remove()},Fn:function(n,t){return n.appendChild(t)},Cn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Qn:function(n){return n.childNodes},Yn:function(n){return n.parentNode},Zn:function(n){return n.nextSibling},zn:function(n){return n.previousSibling},Jn:function(n){return p(n.nodeName)},Kn:function(n){return n.textContent},Vn:function(n,t){return n.textContent=t},Xn:function(n,t){return n.getAttribute(t)},nt:function(n,t,e){return n.setAttribute(t,e)},un:function(n,t){return n.removeAttribute(t)},fn:function(n,t){return n.hasAttribute(t)},tt:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},et:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.rt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},cn:function(t,e,o,u,f,c,a,l,v,p){var d=t,h=o,y=r.get(t);p=e+u,y&&y[p]&&y[p](),"string"==typeof a?d=i.et(t,a):"object"==typeof a?d=a:(v=e.split(":")).length>1&&(d=i.et(t,v[0]),e=v[1]),d&&((v=e.split(".")).length>1&&(e=v[0],h=function(n){n.keyCode===s[v[1]]&&o(n)}),l=i.Hn?{capture:!!f,passive:!!c}:!!f,n.ael(d,e,h,l),y||r.set(t,y={}),y[p]=function(){d&&n.rel(d,e,h,l),y[p]=null})},an:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},it:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},rt:function(n,t){return(t=i.Yn(n))&&11===i.qn(t)?t.host:t},ot:function(n,t,e,r){return n.setAttributeNS(t,e,r)},ut:function(n,t){return n.attachShadow(t)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Hn=!0}}))}catch(n){}return i}(y,r,i),b=w.K.documentElement,m=r["s-defined"]=r["s-defined"]||{},g={J:w,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.ft.has(e)||(n.ft.set(e,!0),function r(n,t){var e=n.tn(t);e.ln&&e.ln.forEach(function(e){e.dn||n.J.cn(t,e.vn,function r(n,t,e,i){return function(r){(i=n.Mn.get(t))?i[e](r):((i=n.Rn.get(t)||[]).push(e,r),n.Rn.set(t,i))}}(n,t,e.pn),1,e.yn,e.hn)})}(n,e)),n.gn.delete(e),n.Ln.has(e)||(n.ct=!0,n.wn.add(e),n.Ln.set(e,!0),function(n,t,e){for(e=t;e=n.J.rt(e);)if(n.at(e)){n.st.has(t)||(n.jn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.kn.set(e,function(n,t,e,r,i){return e.mode||(e.mode=n.tt(e)),e["s-cr"]||n.Xn(e,"ssrv")||n.Z&&1===t.Y||(e["s-cr"]=n.Bn(""),e["s-cr"]["s-cn"]=!0,n.nn(e,e["s-cr"],n.Qn(e)[0])),n.Z||1!==t.Y||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e),1===t.Y&&n.Z&&!e.shadowRoot&&n.ut(e,{mode:"open"}),r={Tn:{}},t.en&&Object.keys(t.en).forEach(function(o){(i=t.en[o].in)&&(r.Tn[i]=n.Xn(e,i))}),r}(n.J,t,e)),n.lt(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){if(!n.vt&&function(n,t){for(;t;){if(!n.Yn(t))return 9!==n.qn(t);t=n.Yn(t)}}(n.J,t)){n.gn.set(t,!0),D(n,t),k(n.Sn.get(t),!0);var e=n.Mn.get(t);e&&e.componentDidUnload&&e.componentDidUnload(),n.J.an(t),n.ft.delete(t),n.l&&n.l.removeHost(t),[n.jn,n.pt,n.kn].forEach(function(n){return n.delete(t)})}})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(L(n,t)&&(i=n.Mn.get(t))&&!n.gn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.st.set(t,!0),(u=n.dt.has(t))||(n.dt.set(t,!0),t["s-ld"]=void 0,n.J.Cn(t,e));try{k(n.Sn.get(t)),(o=n.pt.get(t))&&(o.forEach(function(n){return n(t)}),n.pt.delete(t)),!u&&i.componentDidLoad?i.componentDidLoad():u&&i.componentDidUpdate&&i.componentDidUpdate()}catch(e){n.$n(e,4,t)}D(n,t)}})(n,this,r)},e.forceUpdate=function(){_(n,this,i)},t.en){var o=Object.entries(t.en),u={};o.forEach(function(n){var t=n[0],e=n[1].in;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[p(e)];o&&(t[o]=i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1],u=o.sn;3&u?x(e,i,function t(){return(n._n.get(this)||{})[i]},function t(e){T(n,this,i,S(o.on,e),r)}):32===u&&W(e,i,h)})}(n,0,e,i)}}(g,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.en).map(function(n){return n.in}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},tn:function(n){return a[w.Jn(n)]},Wn:function(n){return t[n]},isClient:!0,at:function(n){return!(!m[w.Jn(n)]&&!g.tn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=$(y,r),lt:function(n,t){var e=!w.Z,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.An=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Y,e.style,e.styleMode)}catch(t){console.error(t),n.An=function i(){}}_(g,t,f)})},On:!1,mn:!1,vt:!1,En:l,jn:new WeakMap,V:new WeakMap,Ln:new WeakMap,ft:new WeakMap,dt:new WeakMap,st:new WeakMap,Pn:new WeakMap,kn:new WeakMap,Mn:new WeakMap,gn:new WeakMap,bn:new WeakMap,pt:new WeakMap,Rn:new WeakMap,Sn:new WeakMap,_n:new WeakMap,wn:new Set,Dn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.enableListener=function(n,t,e,r,i){return function o(n,t,e,r,i,u){if(t){var f=n.Pn.get(t),c=n.tn(f);if(c&&c.ln)if(r){var a=c.ln.find(function(n){return n.vn===e});a&&n.J.cn(f,e,function(n){return t[a.pn](n)},1,a.yn,void 0===u?a.hn:!!u,i)}else n.J.an(f,e,1)}}(g,n,t,e,r,i)},g.Nn=t.emit=function(n,e,r){return w.it(n,t.eventNameFn?t.eventNameFn(e):e,r)},g.xn=function(n){return function(n,t,e){return{create:F(n,t,e,"create"),componentOnReady:F(n,t,e,"componentOnReady")}}(w,d,n)},y.h=e,y.Context=t,y.onReady=function(){return new Promise(function(n){return g.queue.write(function(){return g.wn.size?g.Dn.push(n):n()})})},g.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,l,p,d,h,y,w,b,m){if(b=l.vchildren[p],e||(o=!0,"slot"===b.vtag&&(r&&t.Cn(d,r+"-s"),b.vchildren?b.ht=!0:b.yt=!0)),v(b.vtext))b.i=t.Bn(b.vtext);else if(b.yt)b.i=t.Bn("");else{if(y=b.i=j||"svg"===b.vtag?t.Un("http://www.w3.org/2000/svg",b.vtag):t.X(b.ht?"slot-fb":b.vtag),n.at(y)&&n.st.delete(c),j="svg"===b.vtag||"foreignObject"!==b.vtag&&j,M(n,null,b,j),v(r)&&y["s-si"]!==r&&t.Cn(y,y["s-si"]=r),b.vchildren)for(h=0;h<b.vchildren.length;++h)(w=a(i,b,h,y))&&t.Fn(y,w);"svg"===b.vtag&&(j=!1)}return b.i["s-hn"]=f,(b.ht||b.yt)&&(b.i["s-sr"]=!0,b.i["s-cr"]=u,b.i["s-sn"]=b.vname||"",(m=i&&i.vchildren&&i.vchildren[p])&&m.vtag===b.vtag&&i.i&&s(i.i)),b.i},s=function(e,r,i,u){n.vt=!0;var c=t.Qn(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Gn(u),t.nn(y(u),u,h(u)),t.Gn(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.vt=!1},l=function(n,e,r,i,o,u,c,s){var l=n["s-cr"];for((c=l&&t.Yn(l)||n).shadowRoot&&t.Jn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=v(i[o].vtext)?t.Bn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.nn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)v(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Gn(o["s-ol"]):s(o,!0),t.Gn(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Yn(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;j=r.i&&v(t.rt(r.i))&&void 0!==r.i.ownerSVGElement,j="svg"===r.vtag||"foreignObject"!==r.vtag&&j,v(r.vtext)?(i=o["s-cr"])?t.Vn(t.Yn(i),r.vtext):e.vtext!==r.vtext&&t.Vn(o,r.vtext):("slot"!==r.vtag&&M(n,e,r,j),v(u)&&v(f)?function(n,e,r,i,o,u,f,c){for(var b=0,m=0,g=e.length-1,M=e[0],j=e[g],k=i.length-1,$=i[0],A=i[k];b<=g&&m<=k;)if(null==M)M=e[++b];else if(null==j)j=e[--g];else if(null==$)$=i[++m];else if(null==A)A=i[--k];else if(d(M,$))w(M,$),M=e[++b],$=i[++m];else if(d(j,A))w(j,A),j=e[--g],A=i[--k];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Yn(M.i)),w(M,A),t.nn(n,M.i,t.Zn(j.i)),M=e[++b],A=i[--k];else if(d(j,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Yn(j.i)),w(j,$),t.nn(n,j.i,M.i),j=e[--g],$=i[++m];else{for(o=null,u=b;u<=g;++u)if(e[u]&&v(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}v(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.nn(y(M.i),f,h(M.i))}b>g?l(n,null==i[k+1]?null:i[k+1].i,r,i,m,k):m>k&&p(e,b,g)}(o,u,r,f):v(f)?(v(e.vtext)&&t.Vn(o,""),l(o,null,r,f,0,f.length-1)):v(u)&&p(u,0,u.length-1)),j&&"svg"===r.vtag&&(j=!1)},b=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Qn(n)).length;i<o;i++)if(e=r[i],1===t.qn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.qn(r[u]),""!==f){if(1===c&&f===t.Xn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.Kn(r[u]).trim()){e.hidden=!0;break}b(e)}},m=[],g=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Qn(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Qn(t.Yn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.qn(o))||8===l)&&""===s||1===l&&null===t.Xn(o,"slot")&&""===s||1===l&&t.Xn(o,"slot")===s)&&(m.some(function(n){return n.wt===o})||(i=!0,o["s-sn"]=s,m.push({bt:r,wt:o})));1===t.qn(r)&&g(r)}};return function(a,s,l,v,p,d,h,y,M,j,k,$){if(c=a,f=t.Jn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(g(l.i),h=0;h<m.length;h++)(y=m[h]).wt["s-ol"]||((M=t.Bn(""))["s-nr"]=y.wt,t.nn(t.Yn(y.wt),y.wt["s-ol"]=M,y.wt));for(n.vt=!0,h=0;h<m.length;h++){for(y=m[h],k=t.Yn(y.bt),$=t.Zn(y.bt),M=y.wt["s-ol"];M=t.zn(M);)if((j=M["s-nr"])&&j&&j["s-sn"]===y.wt["s-sn"]&&k===t.Yn(j)&&(j=t.Zn(j))&&j&&!j["s-nr"]){$=j;break}(!$&&k!==t.Yn(y.wt)||t.Zn(y.wt)!==$)&&y.wt!==$&&(t.Gn(y.wt),t.nn(k,y.wt,$))}n.vt=!1}return i&&b(l.i),m.length=0,l}}(g,w),b["s-ld"]=[],b["s-rn"]=!0,b["s-init"]=function(){g.st.set(b,y.loaded=g.mn=!0),w.it(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.tn(t);if(r)if(n.st.has(t))e(t);else{var i=n.pt.get(t)||[];i.push(e),n.pt.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(g,y,r,r["s-apps"],r["s-cr"]),y.initialized=!0,g},U={},B=!1;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/ionic.define.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/ionic.define.js ***!
  \***************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _ionic_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic.components.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.components.js");

// Ionic: Custom Elements Define Library, ES Module/es5 Target




function defineCustomElements(win, opts) {
  return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElement"])(win, _ionic_components_js__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS"], opts);
}


/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/ionic.global.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/ionic.global.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appGlobal; });

function appGlobal(n, x, w, d, r, h) {(function(Context, resourcesUrl){var PLATFORMS_MAP={ipad:isIpad,iphone:isIphone,ios:isIOS,android:isAndroid,phablet:isPhablet,tablet:isTablet,cordova:isCordova,capacitor:isCapacitorNative,electron:isElectron,pwa:isPWA,mobile:isMobile,mobileweb:isMobileWeb,desktop:isDesktop,hybrid:isHybrid};function getPlatforms(t){return setupPlatforms(t)}function isPlatform(t,n){return getPlatforms(t).includes(n)}function setupPlatforms(t){t.Ionic=t.Ionic||{};var n=t.Ionic.platforms;if(null==n){n=t.Ionic.platforms=detectPlatforms(t);var e=t.document.documentElement.classList;n.forEach(function(t){return e.add("plt-"+t)})}return n}function isMobileWeb(t){return isMobile(t)&&!isHybrid(t)}function detectPlatforms(t){return Object.keys(PLATFORMS_MAP).filter(function(n){return PLATFORMS_MAP[n](t)})}function isIpad(t){return testUserAgent(t,/iPad/i)}function isIphone(t){return testUserAgent(t,/iPhone/i)}function isIOS(t){return testUserAgent(t,/iPad|iPhone|iPod/i)}function isAndroid(t){return testUserAgent(t,/android|sink/i)}function isPhablet(t){var n=t.innerWidth,e=t.innerHeight,i=Math.min(n,e),o=Math.max(n,e);return i>390&&i<520&&o>620&&o<800}function isTablet(t){var n=t.innerWidth,e=t.innerHeight,i=Math.min(n,e),o=Math.max(n,e);return i>460&&i<820&&o>780&&o<1400}function isMobile(t){return matchMedia(t,"(any-pointer:coarse)")}function isDesktop(t){return!isMobile(t)}function isHybrid(t){return isCordova(t)||isCapacitorNative(t)}function isCordova(t){return!!(t.cordova||t.phonegap||t.PhoneGap)}function isCapacitorNative(t){var n=t.Capacitor;return!(!n||!n.isNative)}function isElectron(t){return testUserAgent(t,/electron/)}function isPWA(t){return t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone}function testUserAgent(t,n){return n.test(t.navigator.userAgent)}function matchMedia(t,n){return t.matchMedia(n).matches}var Config=function(){function t(t){this.m=new Map(Object.entries(t))}return t.prototype.get=function(t,n){var e=this.m.get(t);return void 0!==e?e:n},t.prototype.getBoolean=function(t,n){void 0===n&&(n=!1);var e=this.m.get(t);return void 0===e?n:"string"==typeof e?"true"===e:!!e},t.prototype.getNumber=function(t,n){var e=parseFloat(this.m.get(t));return isNaN(e)?void 0!==n?n:NaN:e},t.prototype.set=function(t,n){this.m.set(t,n)},t}();function configFromSession(){try{var t=window.sessionStorage.getItem(IONIC_SESSION_KEY);return null!==t?JSON.parse(t):{}}catch(t){return{}}}function saveConfig(t){try{window.sessionStorage.setItem(IONIC_SESSION_KEY,JSON.stringify(t))}catch(t){return}}function configFromURL(){var t={};return window.location.search.slice(1).split("&").map(function(t){return t.split("=")}).map(function(t){var n=t[1];return[decodeURIComponent(t[0]),decodeURIComponent(n)]}).filter(function(t){return startsWith(t[0],IONIC_PREFIX)}).map(function(t){var n=t[1];return[t[0].slice(IONIC_PREFIX.length),n]}).forEach(function(n){t[n[0]]=n[1]}),t}function startsWith(t,n){return t.substr(0,n.length)===n}var IONIC_PREFIX="ionic:",IONIC_SESSION_KEY="ionic-persist-config",win=window,Ionic=win.Ionic=win.Ionic||{};Object.defineProperty(Ionic,"queue",{get:function(){return Context.queue}}),setupPlatforms(win),Context.isPlatform=isPlatform;var configObj=Object.assign({},configFromSession(),{persistConfig:!1},Ionic.config,configFromURL()),config=Ionic.config=Context.config=new Config(configObj);config.getBoolean("persistConfig")&&saveConfig(configObj);var documentElement=document.documentElement,mode=config.get("mode",documentElement.getAttribute("mode")||(isPlatform(win,"ios")?"ios":"md"));Ionic.mode=Context.mode=mode,config.set("mode",mode),documentElement.setAttribute("mode",mode),documentElement.classList.add(mode),config.getBoolean("_testing")&&config.set("animated",!1);
})(x,r);
}

/***/ }),

/***/ "./node_modules/@ionic/core/loader/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@ionic/core/loader/index.js ***!
  \**************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_esm_es5_ionic_define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/esm/es5/ionic.define.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _dist_esm_es5_ionic_define_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"]; });



/***/ }),

/***/ "./node_modules/@webcomponents/custom-elements/custom-elements.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@webcomponents/custom-elements/custom-elements.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){
'use strict';var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function g(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return!a&&b}function l(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}
function p(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}
function q(b,a,d){d=void 0===d?new Set:d;for(var c=b;c;){if(c.nodeType===Node.ELEMENT_NODE){var e=c;a(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){c=e.import;if(c instanceof Node&&!d.has(c))for(d.add(c),c=c.firstChild;c;c=c.nextSibling)q(c,a,d);c=p(b,e);continue}else if("template"===f){c=p(b,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)q(e,a,d)}c=c.firstChild?c.firstChild:p(b,c)}}function t(b,a,d){b[a]=d};function u(){this.a=new Map;this.f=new Map;this.c=[];this.b=!1}function ba(b,a,d){b.a.set(a,d);b.f.set(d.constructorFunction,d)}function v(b,a){b.b=!0;b.c.push(a)}function w(b,a){b.b&&q(a,function(a){return x(b,a)})}function x(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var d=0;d<b.c.length;d++)b.c[d](a)}}function y(b,a){var d=[];q(a,function(a){return d.push(a)});for(a=0;a<d.length;a++){var c=d[a];1===c.__CE_state?b.connectedCallback(c):z(b,c)}}
function A(b,a){var d=[];q(a,function(a){return d.push(a)});for(a=0;a<d.length;a++){var c=d[a];1===c.__CE_state&&b.disconnectedCallback(c)}}
function B(b,a,d){d=void 0===d?{}:d;var c=d.u||new Set,e=d.h||function(a){return z(b,a)},f=[];q(a,function(a){if("link"===a.localName&&"import"===a.getAttribute("rel")){var d=a.import;d instanceof Node&&(d.__CE_isImportDocument=!0,d.__CE_hasRegistry=!0);d&&"complete"===d.readyState?d.__CE_documentLoadHandled=!0:a.addEventListener("load",function(){var d=a.import;if(!d.__CE_documentLoadHandled){d.__CE_documentLoadHandled=!0;var f=new Set(c);f.delete(d);B(b,d,{u:f,h:e})}})}else f.push(a)},c);if(b.b)for(a=
0;a<f.length;a++)x(b,f[a]);for(a=0;a<f.length;a++)e(f[a])}
function z(b,a){if(void 0===a.__CE_state){var d=a.ownerDocument;if(d.defaultView||d.__CE_isImportDocument&&d.__CE_hasRegistry)if(d=b.a.get(a.localName)){d.constructionStack.push(a);var c=d.constructorFunction;try{try{if(new c!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{d.constructionStack.pop()}}catch(m){throw a.__CE_state=2,m;}a.__CE_state=1;a.__CE_definition=d;if(d.attributeChangedCallback)for(d=d.observedAttributes,c=0;c<d.length;c++){var e=
d[c],f=a.getAttribute(e);null!==f&&b.attributeChangedCallback(a,e,null,f,null)}l(a)&&b.connectedCallback(a)}}}u.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};u.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};
u.prototype.attributeChangedCallback=function(b,a,d,c,e){var f=b.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(a)&&f.attributeChangedCallback.call(b,a,d,c,e)};function C(b){var a=document;this.c=b;this.a=a;this.b=void 0;B(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function D(b){b.b&&b.b.disconnect()}C.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||D(this);for(a=0;a<b.length;a++)for(var d=b[a].addedNodes,c=0;c<d.length;c++)B(this.c,d[c])};function ca(){var b=this;this.b=this.a=void 0;this.c=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function E(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function F(b){this.c=!1;this.a=b;this.j=new Map;this.f=function(a){return a()};this.b=!1;this.i=[];this.o=new C(b)}
F.prototype.l=function(b,a){var d=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!g(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(this.a.a.get(b))throw Error("A custom element with name '"+b+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var c=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=a.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=c("connectedCallback");var m=c("disconnectedCallback");var k=c("adoptedCallback");var h=c("attributeChangedCallback");var n=a.observedAttributes||[]}catch(r){return}finally{this.c=!1}a={localName:b,constructorFunction:a,connectedCallback:f,disconnectedCallback:m,adoptedCallback:k,attributeChangedCallback:h,observedAttributes:n,constructionStack:[]};ba(this.a,
b,a);this.i.push(a);this.b||(this.b=!0,this.f(function(){return da(d)}))};F.prototype.h=function(b){B(this.a,b)};
function da(b){if(!1!==b.b){b.b=!1;for(var a=b.i,d=[],c=new Map,e=0;e<a.length;e++)c.set(a[e].localName,[]);B(b.a,document,{h:function(a){if(void 0===a.__CE_state){var e=a.localName,f=c.get(e);f?f.push(a):b.a.a.get(e)&&d.push(a)}}});for(e=0;e<d.length;e++)z(b.a,d[e]);for(;0<a.length;){var f=a.shift();e=f.localName;f=c.get(f.localName);for(var m=0;m<f.length;m++)z(b.a,f[m]);(e=b.j.get(e))&&E(e)}}}F.prototype.get=function(b){if(b=this.a.a.get(b))return b.constructorFunction};
F.prototype.m=function(b){if(!g(b))return Promise.reject(new SyntaxError("'"+b+"' is not a valid custom element name."));var a=this.j.get(b);if(a)return a.c;a=new ca;this.j.set(b,a);this.a.a.get(b)&&!this.i.some(function(a){return a.localName===b})&&E(a);return a.c};F.prototype.s=function(b){D(this.o);var a=this.f;this.f=function(d){return b(function(){return a(d)})}};window.CustomElementRegistry=F;F.prototype.define=F.prototype.l;F.prototype.upgrade=F.prototype.h;F.prototype.get=F.prototype.get;
F.prototype.whenDefined=F.prototype.m;F.prototype.polyfillWrapFlushCallback=F.prototype.s;var G=window.Document.prototype.createElement,H=window.Document.prototype.createElementNS,ea=window.Document.prototype.importNode,fa=window.Document.prototype.prepend,ha=window.Document.prototype.append,ia=window.DocumentFragment.prototype.prepend,ja=window.DocumentFragment.prototype.append,I=window.Node.prototype.cloneNode,J=window.Node.prototype.appendChild,K=window.Node.prototype.insertBefore,L=window.Node.prototype.removeChild,M=window.Node.prototype.replaceChild,N=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),O=window.Element.prototype.attachShadow,P=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Q=window.Element.prototype.getAttribute,R=window.Element.prototype.setAttribute,S=window.Element.prototype.removeAttribute,T=window.Element.prototype.getAttributeNS,U=window.Element.prototype.setAttributeNS,ka=window.Element.prototype.removeAttributeNS,la=window.Element.prototype.insertAdjacentElement,ma=window.Element.prototype.insertAdjacentHTML,na=window.Element.prototype.prepend,
oa=window.Element.prototype.append,V=window.Element.prototype.before,pa=window.Element.prototype.after,qa=window.Element.prototype.replaceWith,ra=window.Element.prototype.remove,sa=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ta=window.HTMLElement.prototype.insertAdjacentElement,ua=window.HTMLElement.prototype.insertAdjacentHTML;var va=new function(){};function wa(){var b=X;window.HTMLElement=function(){function a(){var a=this.constructor,c=b.f.get(a);if(!c)throw Error("The custom element being constructed was not registered with `customElements`.");var e=c.constructionStack;if(0===e.length)return e=G.call(document,c.localName),Object.setPrototypeOf(e,a.prototype),e.__CE_state=1,e.__CE_definition=c,x(b,e),e;c=e.length-1;var f=e[c];if(f===va)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[c]=va;Object.setPrototypeOf(f,a.prototype);x(b,f);return f}a.prototype=sa.prototype;Object.defineProperty(a.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:a});return a}()};function Y(b,a,d){function c(a){return function(d){for(var e=[],c=0;c<arguments.length;++c)e[c]=arguments[c];c=[];for(var f=[],n=0;n<e.length;n++){var r=e[n];r instanceof Element&&l(r)&&f.push(r);if(r instanceof DocumentFragment)for(r=r.firstChild;r;r=r.nextSibling)c.push(r);else c.push(r)}a.apply(this,e);for(e=0;e<f.length;e++)A(b,f[e]);if(l(this))for(e=0;e<c.length;e++)f=c[e],f instanceof Element&&y(b,f)}}void 0!==d.g&&(a.prepend=c(d.g));void 0!==d.append&&(a.append=c(d.append))};function xa(){var b=X;t(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var d=b.a.get(a);if(d)return new d.constructorFunction}a=G.call(this,a);x(b,a);return a});t(Document.prototype,"importNode",function(a,d){a=ea.call(this,a,!!d);this.__CE_hasRegistry?B(b,a):w(b,a);return a});t(Document.prototype,"createElementNS",function(a,d){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var c=b.a.get(d);if(c)return new c.constructorFunction}a=H.call(this,a,
d);x(b,a);return a});Y(b,Document.prototype,{g:fa,append:ha})};function ya(){function b(b,c){Object.defineProperty(b,"textContent",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(b){if(this.nodeType===Node.TEXT_NODE)c.set.call(this,b);else{var d=void 0;if(this.firstChild){var e=this.childNodes,k=e.length;if(0<k&&l(this)){d=Array(k);for(var h=0;h<k;h++)d[h]=e[h]}}c.set.call(this,b);if(d)for(b=0;b<d.length;b++)A(a,d[b])}}})}var a=X;t(Node.prototype,"insertBefore",function(b,c){if(b instanceof DocumentFragment){var e=Array.prototype.slice.apply(b.childNodes);
b=K.call(this,b,c);if(l(this))for(c=0;c<e.length;c++)y(a,e[c]);return b}e=l(b);c=K.call(this,b,c);e&&A(a,b);l(this)&&y(a,b);return c});t(Node.prototype,"appendChild",function(b){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=J.call(this,b);if(l(this))for(var e=0;e<c.length;e++)y(a,c[e]);return b}c=l(b);e=J.call(this,b);c&&A(a,b);l(this)&&y(a,b);return e});t(Node.prototype,"cloneNode",function(b){b=I.call(this,!!b);this.ownerDocument.__CE_hasRegistry?B(a,b):w(a,
b);return b});t(Node.prototype,"removeChild",function(b){var c=l(b),e=L.call(this,b);c&&A(a,b);return e});t(Node.prototype,"replaceChild",function(b,c){if(b instanceof DocumentFragment){var e=Array.prototype.slice.apply(b.childNodes);b=M.call(this,b,c);if(l(this))for(A(a,c),c=0;c<e.length;c++)y(a,e[c]);return b}e=l(b);var f=M.call(this,b,c),d=l(this);d&&A(a,c);e&&A(a,b);d&&y(a,b);return f});N&&N.get?b(Node.prototype,N):v(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){for(var b=[],
a=0;a<this.childNodes.length;a++)b.push(this.childNodes[a].textContent);return b.join("")},set:function(b){for(;this.firstChild;)L.call(this,this.firstChild);J.call(this,document.createTextNode(b))}})})};function za(b){function a(a){return function(e){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var k=[],h=0;h<c.length;h++){var n=c[h];n instanceof Element&&l(n)&&k.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)d.push(n);else d.push(n)}a.apply(this,c);for(c=0;c<k.length;c++)A(b,k[c]);if(l(this))for(c=0;c<d.length;c++)k=d[c],k instanceof Element&&y(b,k)}}var d=Element.prototype;void 0!==V&&(d.before=a(V));void 0!==V&&(d.after=a(pa));void 0!==qa&&
t(d,"replaceWith",function(a){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var m=[],k=0;k<c.length;k++){var h=c[k];h instanceof Element&&l(h)&&m.push(h);if(h instanceof DocumentFragment)for(h=h.firstChild;h;h=h.nextSibling)d.push(h);else d.push(h)}k=l(this);qa.apply(this,c);for(c=0;c<m.length;c++)A(b,m[c]);if(k)for(A(b,this),c=0;c<d.length;c++)m=d[c],m instanceof Element&&y(b,m)});void 0!==ra&&t(d,"remove",function(){var a=l(this);ra.call(this);a&&A(b,this)})};function Aa(){function b(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var d=this,e=void 0;l(this)&&(e=[],q(this,function(a){a!==d&&e.push(a)}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var m=e[f];1===m.__CE_state&&c.disconnectedCallback(m)}this.ownerDocument.__CE_hasRegistry?B(c,this):w(c,this);return a}})}function a(a,b){t(a,"insertAdjacentElement",function(a,d){var e=l(d);a=b.call(this,a,d);e&&A(c,d);l(a)&&y(c,d);return a})}
function d(a,b){function d(a,b){for(var d=[];a!==b;a=a.nextSibling)d.push(a);for(b=0;b<d.length;b++)B(c,d[b])}t(a,"insertAdjacentHTML",function(a,c){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,c);d(e||this.parentNode.firstChild,this)}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,c),d(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,c),d(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,c),d(this.nextSibling,
e);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}var c=X;O&&t(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=O.call(this,a)});P&&P.get?b(Element.prototype,P):W&&W.get?b(HTMLElement.prototype,W):v(c,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){return I.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=H.call(document,
this.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)L.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)J.call(c,a.childNodes[0])}})});t(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return R.call(this,a,b);var d=Q.call(this,a);R.call(this,a,b);b=Q.call(this,a);c.attributeChangedCallback(this,a,d,b,null)});t(Element.prototype,"setAttributeNS",function(a,b,d){if(1!==this.__CE_state)return U.call(this,a,b,d);var e=T.call(this,a,b);U.call(this,
a,b,d);d=T.call(this,a,b);c.attributeChangedCallback(this,b,e,d,a)});t(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return S.call(this,a);var b=Q.call(this,a);S.call(this,a);null!==b&&c.attributeChangedCallback(this,a,b,null,null)});t(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return ka.call(this,a,b);var d=T.call(this,a,b);ka.call(this,a,b);var e=T.call(this,a,b);d!==e&&c.attributeChangedCallback(this,b,d,e,a)});ta?a(HTMLElement.prototype,
ta):la?a(Element.prototype,la):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");ua?d(HTMLElement.prototype,ua):ma?d(Element.prototype,ma):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Y(c,Element.prototype,{g:na,append:oa});za(c)};/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var X=new u;wa();xa();Y(X,DocumentFragment.prototype,{g:ia,append:ja});ya();Aa();document.__CE_hasRegistry=!0;var customElements=new F(X);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/core/css/ionic.bundle.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/core/css/ionic.bundle.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html.ios{--ion-default-font:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",\"Roboto\",sans-serif}html.md{--ion-default-font:\"Roboto\",\"Helvetica Neue\",sans-serif}body.backdrop-no-scroll{overflow:hidden}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff)!important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56,128,255)!important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255,255,255)!important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0)!important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff)!important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #0cd1e8)!important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 12,209,232)!important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255,255,255)!important;--ion-color-shade:var(--ion-color-secondary-shade, #0bb8cc)!important;--ion-color-tint:var(--ion-color-secondary-tint, #24d6ea)!important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #7044ff)!important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 112,68,255)!important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255,255,255)!important;--ion-color-shade:var(--ion-color-tertiary-shade, #633ce0)!important;--ion-color-tint:var(--ion-color-tertiary-tint, #7e57ff)!important}.ion-color-success{--ion-color-base:var(--ion-color-success, #10dc60)!important;--ion-color-base-rgb:var(--ion-color-success-rgb, 16,220,96)!important;--ion-color-contrast:var(--ion-color-success-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255,255,255)!important;--ion-color-shade:var(--ion-color-success-shade, #0ec254)!important;--ion-color-tint:var(--ion-color-success-tint, #28e070)!important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffce00)!important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255,206,0)!important;--ion-color-contrast:var(--ion-color-warning-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 255,255,255)!important;--ion-color-shade:var(--ion-color-warning-shade, #e0b500)!important;--ion-color-tint:var(--ion-color-warning-tint, #ffd31a)!important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #f04141)!important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 240,65,65)!important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255,255,255)!important;--ion-color-shade:var(--ion-color-danger-shade, #d33939)!important;--ion-color-tint:var(--ion-color-danger-tint, #f25454)!important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8)!important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244,245,248)!important;--ion-color-contrast:var(--ion-color-light-contrast, #000)!important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0,0,0)!important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da)!important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9)!important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #989aa2)!important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 152,154,162)!important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255,255,255)!important;--ion-color-shade:var(--ion-color-medium-shade, #86888f)!important;--ion-color-tint:var(--ion-color-medium-tint, #a2a4ab)!important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428)!important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34,36,40)!important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255,255,255)!important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023)!important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e)!important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}.ion-page-hidden,[hidden],ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-menu-controller,ion-modal-controller,ion-nav-controller,ion-picker-controller,ion-popover-controller,ion-route,ion-route-redirect,ion-router,ion-select-option,ion-toast-controller{display:none!important}.ion-page-invisible{opacity:0}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top:20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top:constant(safe-area-inset-top)){html{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top:env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}audio,canvas,progress,video{vertical-align:baseline}audio:not([controls]){display:none;height:0}b,strong{font-weight:700}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:1px;border-width:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}input,label,select,textarea{font-family:inherit;line-height:normal}textarea{overflow:auto;height:auto;font:inherit;color:inherit}textarea::placeholder{padding-left:2px}form,input,optgroup,select{margin:0;font:inherit;color:inherit}html input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}.ion-tappable,[tappable],[tappable] div,[tappable] ion-icon,[tappable] ion-label,[tappable] span,a,a div,a ion-icon,a ion-label,a span,button,button div,button ion-icon,button ion-label,button span,input,textarea{touch-action:manipulation}a ion-label,button ion-label{pointer-events:none}button{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}[tappable]{cursor:pointer}a[disabled],button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input[type=checkbox],input[type=radio]{padding:0;box-sizing:border-box}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}html{--ion-font-family:var(--ion-default-font);width:100%;height:100%;text-size-adjust:100%;font-family:var(--ion-font-family)}html.plt-pwa{height:100vh}body{background:var(--ion-background-color);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;text-size-adjust:none;margin:0;padding:0}a{background-color:transparent;color:var(--ion-color-primary,#3880ff)}h1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}h1{margin-top:20px;font-size:26px}h2{margin-top:18px;font-size:24px}h3{font-size:22px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}small{font-size:75%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}.ion-no-padding,[no-padding]{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;padding:0}.ion-padding,[padding]{--padding-start:var(--ion-padding, 16px);--padding-end:var(--ion-padding, 16px);--padding-top:var(--ion-padding, 16px);--padding-bottom:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px);padding-right:var(--ion-padding,16px);padding-top:var(--ion-padding,16px);padding-bottom:var(--ion-padding,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding,[padding]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding,16px);padding-inline-start:var(--ion-padding,16px);-webkit-padding-end:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}}.ion-padding-top,[padding-top]{--padding-top:var(--ion-padding, 16px);padding-top:var(--ion-padding,16px)}.ion-padding-start,[padding-start]{--padding-start:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px)}.ion-padding-end,[padding-end]{--padding-end:var(--ion-padding, 16px);padding-right:var(--ion-padding,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding-start,[padding-start]{padding-left:unset;-webkit-padding-start:var(--ion-padding,16px);padding-inline-start:var(--ion-padding,16px)}.ion-padding-end,[padding-end]{padding-right:unset;-webkit-padding-end:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}}.ion-padding-bottom,[padding-bottom]{--padding-bottom:var(--ion-padding, 16px);padding-bottom:var(--ion-padding,16px)}.ion-padding-vertical,[padding-vertical]{--padding-top:var(--ion-padding, 16px);--padding-bottom:var(--ion-padding, 16px);padding-top:var(--ion-padding,16px);padding-bottom:var(--ion-padding,16px)}.ion-padding-horizontal,[padding-horizontal]{--padding-start:var(--ion-padding, 16px);--padding-end:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px);padding-right:var(--ion-padding,16px)}.ion-no-margin,[no-margin]{--margin-start:0;--margin-end:0;--margin-top:0;--margin-bottom:0;margin:0}.ion-margin,[margin]{--margin-start:var(--ion-margin, 16px);--margin-end:var(--ion-margin, 16px);--margin-top:var(--ion-margin, 16px);--margin-bottom:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px);margin-right:var(--ion-margin,16px);margin-top:var(--ion-margin,16px);margin-bottom:var(--ion-margin,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding-horizontal,[padding-horizontal]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding,16px);padding-inline-start:var(--ion-padding,16px);-webkit-padding-end:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}.ion-margin,[margin]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin,16px);margin-inline-start:var(--ion-margin,16px);-webkit-margin-end:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}.ion-margin-top,[margin-top]{--margin-top:var(--ion-margin, 16px);margin-top:var(--ion-margin,16px)}.ion-margin-start,[margin-start]{--margin-start:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px)}.ion-margin-end,[margin-end]{--margin-end:var(--ion-margin, 16px);margin-right:var(--ion-margin,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-margin-start,[margin-start]{margin-left:unset;-webkit-margin-start:var(--ion-margin,16px);margin-inline-start:var(--ion-margin,16px)}.ion-margin-end,[margin-end]{margin-right:unset;-webkit-margin-end:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}.ion-margin-bottom,[margin-bottom]{--margin-bottom:var(--ion-margin, 16px);margin-bottom:var(--ion-margin,16px)}.ion-margin-vertical,[margin-vertical]{--margin-top:var(--ion-margin, 16px);--margin-bottom:var(--ion-margin, 16px);margin-top:var(--ion-margin,16px);margin-bottom:var(--ion-margin,16px)}.ion-margin-horizontal,[margin-horizontal]{--margin-start:var(--ion-margin, 16px);--margin-end:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px);margin-right:var(--ion-margin,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-margin-horizontal,[margin-horizontal]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin,16px);margin-inline-start:var(--ion-margin,16px);-webkit-margin-end:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}[float-left],[float-start]{float:left!important}[float-right]{float:right!important}:host-context([dir=rtl]) [float-start]{float:right!important}[float-end]{float:right!important}:host-context([dir=rtl]) [float-end]{float:left!important}.ion-text-center,[text-center]{text-align:center!important}.ion-text-justify,[text-justify]{text-align:justify!important}.ion-text-start,[text-start]{text-align:start!important}.ion-text-end,[text-end]{text-align:end!important}.ion-text-left,[text-left]{text-align:left!important}.ion-text-right,[text-right]{text-align:right!important}.ion-text-nowrap,[text-nowrap]{white-space:nowrap!important}.ion-text-wrap,[text-wrap]{white-space:normal!important}.ion-text-uppercase,[text-uppercase]{text-transform:uppercase!important}.ion-text-lowercase,[text-lowercase]{text-transform:lowercase!important}.ion-text-capitalize,[text-capitalize]{text-transform:capitalize!important}@media (min-width:576px){[float-sm-left],[float-sm-start]{float:left!important}[float-sm-right]{float:right!important}:host-context([dir=rtl]) [float-sm-start]{float:right!important}[float-sm-end]{float:right!important}:host-context([dir=rtl]) [float-sm-end]{float:left!important}.ion-text-sm-center,[text-sm-center]{text-align:center!important}.ion-text-sm-justify,[text-sm-justify]{text-align:justify!important}.ion-text-sm-start,[text-sm-start]{text-align:start!important}.ion-text-sm-end,[text-sm-end]{text-align:end!important}.ion-text-sm-left,[text-sm-left]{text-align:left!important}.ion-text-sm-right,[text-sm-right]{text-align:right!important}.ion-text-sm-nowrap,[text-sm-nowrap]{white-space:nowrap!important}.ion-text-sm-wrap,[text-sm-wrap]{white-space:normal!important}.ion-text-sm-uppercase,[text-sm-uppercase]{text-transform:uppercase!important}.ion-text-sm-lowercase,[text-sm-lowercase]{text-transform:lowercase!important}.ion-text-sm-capitalize,[text-sm-capitalize]{text-transform:capitalize!important}}@media (min-width:768px){[float-md-left],[float-md-start]{float:left!important}[float-md-right]{float:right!important}:host-context([dir=rtl]) [float-md-start]{float:right!important}[float-md-end]{float:right!important}:host-context([dir=rtl]) [float-md-end]{float:left!important}.ion-text-md-center,[text-md-center]{text-align:center!important}.ion-text-md-justify,[text-md-justify]{text-align:justify!important}.ion-text-md-start,[text-md-start]{text-align:start!important}.ion-text-md-end,[text-md-end]{text-align:end!important}.ion-text-md-left,[text-md-left]{text-align:left!important}.ion-text-md-right,[text-md-right]{text-align:right!important}.ion-text-md-nowrap,[text-md-nowrap]{white-space:nowrap!important}.ion-text-md-wrap,[text-md-wrap]{white-space:normal!important}.ion-text-md-uppercase,[text-md-uppercase]{text-transform:uppercase!important}.ion-text-md-lowercase,[text-md-lowercase]{text-transform:lowercase!important}.ion-text-md-capitalize,[text-md-capitalize]{text-transform:capitalize!important}}@media (min-width:992px){[float-lg-left],[float-lg-start]{float:left!important}[float-lg-right]{float:right!important}:host-context([dir=rtl]) [float-lg-start]{float:right!important}[float-lg-end]{float:right!important}:host-context([dir=rtl]) [float-lg-end]{float:left!important}.ion-text-lg-center,[text-lg-center]{text-align:center!important}.ion-text-lg-justify,[text-lg-justify]{text-align:justify!important}.ion-text-lg-start,[text-lg-start]{text-align:start!important}.ion-text-lg-end,[text-lg-end]{text-align:end!important}.ion-text-lg-left,[text-lg-left]{text-align:left!important}.ion-text-lg-right,[text-lg-right]{text-align:right!important}.ion-text-lg-nowrap,[text-lg-nowrap]{white-space:nowrap!important}.ion-text-lg-wrap,[text-lg-wrap]{white-space:normal!important}.ion-text-lg-uppercase,[text-lg-uppercase]{text-transform:uppercase!important}.ion-text-lg-lowercase,[text-lg-lowercase]{text-transform:lowercase!important}.ion-text-lg-capitalize,[text-lg-capitalize]{text-transform:capitalize!important}}@media (min-width:1200px){[float-xl-left],[float-xl-start]{float:left!important}[float-xl-right]{float:right!important}:host-context([dir=rtl]) [float-xl-start]{float:right!important}[float-xl-end]{float:right!important}:host-context([dir=rtl]) [float-xl-end]{float:left!important}.ion-text-xl-center,[text-xl-center]{text-align:center!important}.ion-text-xl-justify,[text-xl-justify]{text-align:justify!important}.ion-text-xl-start,[text-xl-start]{text-align:start!important}.ion-text-xl-end,[text-xl-end]{text-align:end!important}.ion-text-xl-left,[text-xl-left]{text-align:left!important}.ion-text-xl-right,[text-xl-right]{text-align:right!important}.ion-text-xl-nowrap,[text-xl-nowrap]{white-space:nowrap!important}.ion-text-xl-wrap,[text-xl-wrap]{white-space:normal!important}.ion-text-xl-uppercase,[text-xl-uppercase]{text-transform:uppercase!important}.ion-text-xl-lowercase,[text-xl-lowercase]{text-transform:lowercase!important}.ion-text-xl-capitalize,[text-xl-capitalize]{text-transform:capitalize!important}}[align-self-start]{align-self:flex-start!important}[align-self-end]{align-self:flex-end!important}[align-self-center]{align-self:center!important}[align-self-stretch]{align-self:stretch!important}[align-self-baseline]{align-self:baseline!important}[align-self-auto]{align-self:auto!important}[wrap]{flex-wrap:wrap!important}[nowrap]{flex-wrap:nowrap!important}[wrap-reverse]{flex-wrap:wrap-reverse!important}[justify-content-start]{justify-content:flex-start!important}[justify-content-center]{justify-content:center!important}[justify-content-end]{justify-content:flex-end!important}[justify-content-around]{justify-content:space-around!important}[justify-content-between]{justify-content:space-between!important}[justify-content-evenly]{justify-content:space-evenly!important}[align-items-start]{align-items:flex-start!important}[align-items-center]{align-items:center!important}[align-items-end]{align-items:flex-end!important}[align-items-stretch]{align-items:stretch!important}[align-items-baseline]{align-items:baseline!important}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/alert.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/alert.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "ion-alert {\n    --ion-text-color: var(--ion-color-dark);\n    --ion-color-primary: var(--ion-color-dark);\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/deck.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/deck.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "deckgo-deck {\n    --pager-background: var(--ion-color-tertiary-tint);\n    --pager-color: var(--ion-color-primary-shade);\n    --pager-text-color: var(--ion-color-primary-shade);\n\n    --pager-margin-bottom: 18px;\n\n    --pager-size: 40px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/font.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/font.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "*, h3, h4, h5, h6 {\n    font-weight: 300;\n}\n\na, strong {\n    font-weight: 500;\n}\n\nh1, h2 {\n    text-transform: uppercase;\n}\n\nh1 {\n    font-size: 3em;\n}\n\nh2 {\n    font-size: 2em;\n}\n\nh3 {\n    font-size: 1.4em;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    max-width: 100%\n}\n\ndeckgo-deck {\n    --code-font-size: 10px;\n    --code-font-family: Menlo, monospace;\n}\n\nion-label, ion-label[text-wrap].sc-ion-label-md-h, p {\n    font-size: 1em;\n}\n\n@media(min-width: 992px) {\n    body {\n        font-size: 32px;\n    }\n\n    ion-label, ion-label[text-wrap].sc-ion-label-md-h, p {\n        font-size: 32px;\n    }\n\n    deckgo-deck {\n        --code-font-size: 24px;\n    }\n}\n\n@media(max-width: 768px) {\n\n    h1 {\n        font-size: 2.4em;\n    }\n\n    h3 {\n        font-size: 1.2em;\n    }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/google-fonts.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/google-fonts.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(/assets/fonts/mem8YaGs126MiZpBA-UFVZ0f.eot);\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(/assets/fonts/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(/assets/fonts/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(/assets/fonts/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(/assets/fonts/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(/assets/fonts/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(/assets/fonts/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(/assets/fonts/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(/assets/fonts/mem8YaGs126MiZpBA-UFVZ0d.woff) format('woff');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(/assets/fonts/mem8YaGs126MiZpBA-UFVZ0ef8pkAg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(/assets/fonts/mem8YaGs126MiZpBA-UFVZ0c) format('svg');\n}\n\n:root {\n--ion-font-family: \"Open Sans\";\n}\n\n* {\nfont-family: \"Open Sans\";\n--ion-font-family: \"Open Sans\";\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/popover.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/popover.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "ion-popover {\n    --ion-background-color: white;\n    --ion-item-text-color: var(--ion-color-dark);\n}\n\nion-popover ion-list-header {\n    --color: var(--ion-color-dark);\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/print.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/print.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media print {\n\n    body {\n        position: inherit;\n    }\n\n    ion-app.ion-page {\n        overflow: visible;\n        contain: none;\n    }\n\n    ion-content {\n        contain: none;\n    }\n\n    #navigation {\n        display: none;\n    }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/theme.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/theme.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\n    --ion-background-color: #3880ff;\n    --ion-text-color: var(--ion-color-primary);\n    --ion-header-size: 40px;\n}\n\nion-content {\n    --ion-background-color: transparent;\n}\n\nion-fab {\n    direction: ltr;\n}\n\nion-fab ion-fab-button.hide-on-mobile {\n    display: var(--deckgo-hide-on-mobile);\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/variables.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/variables.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\n    --ion-color-primary: #ffffff;\n    --ion-color-primary-rgb: 255,255,255;\n    --ion-color-primary-contrast: #000000;\n    --ion-color-primary-contrast-rgb: 0,0,0;\n    --ion-color-primary-shade: #e0e0e0;\n    --ion-color-primary-tint: #ffffff;\n\n    --ion-color-secondary: #1a3d7a;\n    --ion-color-secondary-rgb: 26,61,122;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #17366b;\n    --ion-color-secondary-tint: #315087;\n\n    --ion-color-tertiary: #3880ff;\n    --ion-color-tertiary-rgb: 56,128,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #3171e0;\n    --ion-color-tertiary-tint: #4c8dff;\n\n    --ion-color-success: #10dc60;\n    --ion-color-success-rgb: 16,220,96;\n    --ion-color-success-contrast: #ffffff;\n    --ion-color-success-contrast-rgb: 255,255,255;\n    --ion-color-success-shade: #0ec254;\n    --ion-color-success-tint: #28e070;\n\n    --ion-color-warning: #ffce00;\n    --ion-color-warning-rgb: 255,206,0;\n    --ion-color-warning-contrast: #ffffff;\n    --ion-color-warning-contrast-rgb: 255,255,255;\n    --ion-color-warning-shade: #e0b500;\n    --ion-color-warning-tint: #ffd31a;\n\n    --ion-color-danger: #f04141;\n    --ion-color-danger-rgb: 245,61,61;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #d33939;\n    --ion-color-danger-tint: #f25454;\n\n    --ion-color-dark: #222428;\n    --ion-color-dark-rgb: 34,34,34;\n    --ion-color-dark-contrast: #ffffff;\n    --ion-color-dark-contrast-rgb: 255,255,255;\n    --ion-color-dark-shade: #1e2023;\n    --ion-color-dark-tint: #383a3e;\n\n    --ion-color-medium: #1a3d7a;\n    --ion-color-medium-rgb: 26,61,122;\n    --ion-color-medium-contrast: #ffffff;\n    --ion-color-medium-contrast-rgb: 255,255,255;\n    --ion-color-medium-shade: #17366b;\n    --ion-color-medium-tint: #315087;\n\n    --ion-color-light: #f4f5f8;\n    --ion-color-light-rgb: 244,244,244;\n    --ion-color-light-contrast: #000000;\n    --ion-color-light-contrast-rgb: 0,0,0;\n    --ion-color-light-shade: #d7d8da;\n    --ion-color-light-tint: #f5f6f9;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/deckdeckgo-charts/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/deckdeckgo-charts/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./3unjmgow.entry.js": [
		"./node_modules/deckdeckgo-charts/dist/esm/es5/build/3unjmgow.entry.js",
		3,
		147
	],
	"./3unjmgow.sc.entry.js": [
		"./node_modules/deckdeckgo-charts/dist/esm/es5/build/3unjmgow.sc.entry.js",
		3,
		148
	],
	"./bsju3xui.entry.js": [
		"./node_modules/deckdeckgo-charts/dist/esm/es5/build/bsju3xui.entry.js",
		3,
		13,
		149
	],
	"./bsju3xui.sc.entry.js": [
		"./node_modules/deckdeckgo-charts/dist/esm/es5/build/bsju3xui.sc.entry.js",
		3,
		13,
		150
	],
	"./q0uvz5fz.entry.js": [
		"./node_modules/deckdeckgo-charts/dist/esm/es5/build/q0uvz5fz.entry.js",
		3,
		13,
		208
	],
	"./q0uvz5fz.sc.entry.js": [
		"./node_modules/deckdeckgo-charts/dist/esm/es5/build/q0uvz5fz.sc.entry.js",
		3,
		13,
		209
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/deckdeckgo-charts/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/deckdeckgo-charts/dist/esm/es5/deckdeckgo-charts.components.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/deckdeckgo-charts/dist/esm/es5/deckdeckgo-charts.components.js ***!
  \*************************************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
// DeckdeckgoCharts: Host Data, ES Module/es5 Target
var COMPONENTS = [["deckgo-bar-chart","3unjmgow",1,[["draw",32],["el",64],["height",1,0,1,8],["marginBottom",1,0,"margin-bottom",8],["marginLeft",1,0,"margin-left",8],["marginRight",1,0,"margin-right",8],["marginTop",1,0,"margin-top",8],["separator",1,0,1,2],["src",1,0,1,2],["width",1,0,1,8]],1],["deckgo-line-chart","bsju3xui",1,[["area",1,0,1,4],["datePattern",1,0,"date-pattern",2],["draw",32],["el",64],["grid",1,0,1,4],["height",1,0,1,8],["marginBottom",1,0,"margin-bottom",8],["marginLeft",1,0,"margin-left",8],["marginRight",1,0,"margin-right",8],["marginTop",1,0,"margin-top",8],["separator",1,0,1,2],["smooth",1,0,1,4],["src",1,0,1,2],["ticks",1,0,1,8],["width",1,0,1,8],["yAxisDomain",1,0,"y-axis-domain",2]],1],["deckgo-pie-chart","q0uvz5fz",1,[["draw",32],["el",64],["height",1,0,1,8],["innerRadius",1,0,"inner-radius",8],["range",1],["separator",1,0,1,2],["src",1,0,1,2],["width",1,0,1,8]],1]]

/***/ }),

/***/ "./node_modules/deckdeckgo-charts/dist/esm/es5/deckdeckgo-charts.core.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/deckdeckgo-charts/dist/esm/es5/deckdeckgo-charts.core.js ***!
  \*******************************************************************************/
/*! exports provided: defineCustomElement, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return e; });
/*!
 * DeckdeckgoCharts: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)k.push(arguments[f]);for(;k.length>0;){var c=k.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)k.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&k.push(f);t.class=k.join(" "),k.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],j):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"DeckdeckgoCharts";return D||(D=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),L[s].u(function i(n){var t=$(n),e=t.s,r=p(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return __webpack_require__("./node_modules/deckdeckgo-charts/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$")("./"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!L[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),L[s]=R(s,u,n,i,c,o,r)}if(window.customStyleShim)return L[s].l=window.customStyleShim,L[s].l.initShim().then(t);t()})}undefined&&undefined.v;var i=undefined&&undefined.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=undefined&&undefined.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,k:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=undefined,f=function(){};function applyPolyfills(n){n.j=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===T?s(n,t.C):t.A===W?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===x&&(n.C=t,n.A=T,0!==n._.length&&M(p,n))}function l(n,t){n.A===x&&(n.A=W,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,b=void 0,g=void 0,M=function(n,t){S[m]=n,S[m+1]=t,2===(m+=2)&&(g?g(e):O())},k=(y=void 0!==n?n:void 0)||{},j=k.MutationObserver||k.WebKitMutationObserver;k="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=j?($=0,A=new j(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"=="function"?function(){try{var n=Function("return this")().T("vertx");return void 0!==(b=n.W||n.P)?function(){b(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===x&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==x?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===x&&(this.L--,n===W?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(T,t,n)},function(n){return e.H(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.U=function(n){g=n},L.B=function(n){M=n},L.I=M,L.G=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.G(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(__webpack_require__.e(/*! import() */ 212).then(__webpack_require__.bind(null, /*! ./polyfills/dom.js */ "./node_modules/deckdeckgo-charts/dist/esm/es5/polyfills/dom.js"))),"function"==typeof Object.assign&&Object.entries||t.push(__webpack_require__.e(/*! import() */ 214).then(__webpack_require__.bind(null, /*! ./polyfills/object.js */ "./node_modules/deckdeckgo-charts/dist/esm/es5/polyfills/object.js"))),Array.prototype.find&&Array.prototype.includes||t.push(__webpack_require__.e(/*! import() */ 210).then(__webpack_require__.bind(null, /*! ./polyfills/array.js */ "./node_modules/deckdeckgo-charts/dist/esm/es5/polyfills/array.js"))),String.prototype.startsWith&&String.prototype.endsWith||t.push(__webpack_require__.e(/*! import() */ 215).then(__webpack_require__.bind(null, /*! ./polyfills/string.js */ "./node_modules/deckdeckgo-charts/dist/esm/es5/polyfills/string.js"))),n.fetch||t.push(__webpack_require__.e(/*! import() */ 213).then(__webpack_require__.bind(null, /*! ./polyfills/fetch.js */ "./node_modules/deckdeckgo-charts/dist/esm/es5/polyfills/fetch.js"))),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(__webpack_require__.e(/*! import() */ 211).then(__webpack_require__.bind(null, /*! ./polyfills/css-shim.js */ "./node_modules/deckdeckgo-charts/dist/esm/es5/polyfills/css-shim.js"))),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(__webpack_require__.e(/*! import() */ 216).then(__webpack_require__.bind(null, /*! ./polyfills/url.js */ "./node_modules/deckdeckgo-charts/dist/esm/es5/polyfills/url.js"))),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.Y||1===r.Y&&!t.J.Z)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.K.head;if(e.Z)if(1===r.Y)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.V.get(f);if(s||t.V.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.X("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.nn(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},l=function(n){return null!=n},v=function(n){return n.toLowerCase()},p=function(n){return v(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},d=function(){},h=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.tn(t);f&&f.en&&f.en[e]?w(t,e,i):"ref"!==e&&(w(t,e,null==i?"":i),null!=i&&!1!==i||n.J.rn(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",v(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",v(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.J.in(t,e)&&(null==i||!1===i))&&n.J.rn(t,e);else e=v(e)in t?v(e.substring(2)):v(e[2])+e.substring(3),i?i!==r&&n.J.on(t,e,i,0):n.J.un(t,e,0);else if(r!==i){var c=y(r),a=y(i),s=c.filter(function(n){return!a.includes(n)}),l=y(t.className).filter(function(n){return!s.includes(n)}),p=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,p),t.className=l.join(" ")}},y=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},w=function(n,t,e){try{n[t]=e}catch(n){}},m=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||h(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||h(n,o,i,u[i],f[i],r,e.o)},b=!1,g=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){g(n,t)}))},M=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},k=[],j={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},$=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{fn:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={cn:e[1],an:!!e[2],fn:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,sn:e[4]};return{t:r,s:i,en:Object.assign({},c),Y:u,ln:f?f.map(A):void 0}},A=function(n){return{vn:n[0],pn:n[1],dn:!!n[2],hn:!!n[3],yn:!!n[4]}},E=function(n,t){return l(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},C=function(n,t,e){n.wn.add(t),n.mn.has(t)||(n.mn.set(t,!0),n.bn?n.queue.write(function(){return S(n,t,e)}):n.queue.tick(function(){return S(n,t,e)}))},S=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:return n.mn.delete(r),n.gn.has(r)?[3,12]:(a=n.Mn.get(r))?[3,6]:(s=n.kn.get(r))&&!s["s-rn"]?((s["s-rc"]=s["s-rc"]||[]).push(function(){S(n,r,f)}),[2]):(a=W(n,r,n.jn.get(r),f),[3,5]);case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.k(),o.label=3;case 3:return[3,5];case 4:return i=o.k(),n.$n(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.k(),o.label=9;case 9:return[3,11];case 10:return u=o.k(),n.$n(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.An.host,f=r.An.encapsulation,c="shadow"===f&&n.J.Z,a=i;if(c&&(a=i.shadowRoot),!i["s-rn"]){n.En(n,n.J,r,i);var s=i["s-sc"];s&&(n.J.Cn(i,t(s,!0)),"scoped"===f&&n.J.Cn(i,t(s)))}if(o.render||o.hostData||u){n.Sn=!0;var l=o.render&&o.render();n.Sn=!1;var v=e(null,void 0,l),p=n.On.get(i)||{};p.i=a,n.On.set(i,n.render(i,p,v,c,f))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.Sn=!1,n.$n(t,8,i,!0)}})(n,n.tn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},O=function(n,t,e,r,i,o,u){(u=n._n.get(t))||n._n.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.Mn.get(t))){var c=u[T+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.Sn&&t["s-rn"]&&C(n,t,i)}},_=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},x=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},T="wc-",W=function(n,t,e,r,i,o){try{i=new(o=n.tn(t).An),function(n,t,e,r,i,o){n.xn.set(r,e),n._n.has(e)||n._n.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type){var a=n._n.get(e);!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&l(c=f[t.attr])&&(a[i]=E(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=E(t.type,e[i])),"mode"!==i&&delete e[i]),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[T+i]=t.watchCallbacks.slice()),x(r,i,function s(t){return(t=n._n.get(n.xn.get(this)))&&t[i]},function v(e,r){(r=n.xn.get(this))&&t.mutable&&O(n,r,i,e,u)})}else t.elementRef?_(r,i,e):t.method&&_(e,i,r[i].bind(r))})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r)}catch(e){i={},n.$n(e,7,t,!0)}return n.Mn.set(t,i),i},P=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.tn(r)&&!n.Wn.has(r))return!1;if(!P(n,r))return!1}}return!0},N=function(n,t,e,r,i,o){if(n.wn.delete(t),(i=n.kn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.kn.delete(t)),n.Pn.length&&!n.wn.size)for(;o=n.Pn.shift();)o()},R=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},p=r[n]=r[n]||{},h=function(n,t,e){var r=new WeakMap,i={K:e,Z:!!e.documentElement.attachShadow,Nn:!1,Rn:function(n){return n.nodeType},X:function(n){return e.createElement(n)},Ln:function(n,t){return e.createElementNS(n,t)},Dn:function(n){return e.createTextNode(n)},Fn:function(n){return e.createComment(n)},nn:function(n,t,e){return n.insertBefore(t,e)},Hn:function(n){return n.remove()},qn:function(n,t){return n.appendChild(t)},Cn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Un:function(n){return n.childNodes},Bn:function(n){return n.parentNode},In:function(n){return n.nextSibling},Gn:function(n){return n.previousSibling},Qn:function(n){return v(n.nodeName)},Yn:function(n){return n.textContent},Zn:function(n,t){return n.textContent=t},zn:function(n,t){return n.getAttribute(t)},Jn:function(n,t,e){return n.setAttribute(t,e)},rn:function(n,t){return n.removeAttribute(t)},in:function(n,t){return n.hasAttribute(t)},Kn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Vn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.Xn(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},on:function(t,e,o,u,f,c,a,s,l,v){var p=t,d=o,h=r.get(t);v=e+u,h&&h[v]&&h[v](),"object"==typeof a&&(p=a),p&&(s=i.Nn?{capture:!!f,passive:!!c}:!!f,n.ael(p,e,d,s),h||r.set(t,h={}),h[v]=function(){p&&n.rel(p,e,d,s),h[v]=null})},un:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},nt:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},Xn:function(n,t){return(t=i.Bn(n))&&11===i.Rn(t)?t.host:t},tt:function(n,t,e,r){return n.setAttributeNS(t,e,r)},et:function(n,t){return n.attachShadow(t)}};return"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)}),i}(p,r,i),y=h.K.documentElement,w=r["s-defined"]=r["s-defined"]||{},k={J:h,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.gn.delete(e),n.Wn.has(e)||(n.rt=!0,n.wn.add(e),n.Wn.set(e,!0),function(n,t,e){for(e=t;e=n.J.Xn(e);)if(n.it(e)){n.ot.has(t)||(n.kn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.jn.set(e,function(n,t,e,r,i){if(e.mode||(e.mode=n.Kn(e)),e["s-cr"]||n.zn(e,"ssrv")||n.Z&&1===t.Y||(e["s-cr"]=n.Dn(""),e["s-cr"]["s-cn"]=!0,n.nn(e,e["s-cr"],n.Un(e)[0])),!n.Z&&1===t.Y)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e)}catch(n){}return 1===t.Y&&n.Z&&!e.shadowRoot&&n.et(e,{mode:"open"}),r={Tn:{}},t.en&&Object.keys(t.en).forEach(function(o){(i=t.en[o].fn)&&(r.Tn[i]=n.zn(e,i))}),r}(n.J,t,e)),n.ut(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.ft&&function(n,t){for(;t;){if(!n.Bn(t))return 9!==n.Rn(t);t=n.Bn(t)}}(n.J,t)&&(n.gn.set(t,!0),N(n,t),g(n.On.get(t),!0),n.J.un(t),n.ct.delete(t),n.l&&n.l.removeHost(t),[n.kn,n.at,n.jn].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(P(n,t)&&(i=n.Mn.get(t))&&!n.gn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ot.set(t,!0),(u=n.st.has(t))||(n.st.set(t,!0),t["s-ld"]=void 0,n.J.Cn(t,e));try{g(n.On.get(t)),(o=n.at.get(t))&&(o.forEach(function(n){return n(t)}),n.at.delete(t)),!u&&i.componentDidLoad&&i.componentDidLoad()}catch(e){n.$n(e,4,t)}N(n,t)}})(n,this,r)},e.forceUpdate=function(){C(n,this,i)},t.en){var o=Object.entries(t.en),u={};o.forEach(function(n){var t=n[0],e=n[1].fn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[v(e)];o&&(t[o]=(null!==i||"boolean"!=typeof t[o])&&i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1],u=o.cn;3&u?x(e,i,function t(){return(n._n.get(this)||{})[i]},function t(e){O(n,this,i,E(o.sn,e),r)}):32===u&&_(e,i,d)})}(n,0,e,i)}}(k,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.en).map(function(n){return n.fn}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},tn:function(n){return a[h.Qn(n)]},lt:function(n){return t[n]},isClient:!0,it:function(n){return!(!w[h.Qn(n)]&&!k.tn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=M(p,r),ut:function(n,t){var e=!h.Z,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.An=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Y,e.style,e.styleMode)}catch(t){console.error(t),n.An=function i(){}}C(k,t,f)})},Sn:!1,bn:!1,ft:!1,En:s,kn:new WeakMap,V:new WeakMap,Wn:new WeakMap,ct:new WeakMap,st:new WeakMap,ot:new WeakMap,xn:new WeakMap,jn:new WeakMap,Mn:new WeakMap,gn:new WeakMap,mn:new WeakMap,at:new WeakMap,vt:new WeakMap,On:new WeakMap,_n:new WeakMap,wn:new Set,Pn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,p.h=e,p.Context=t,p.onReady=function(){return new Promise(function(n){return k.queue.write(function(){return k.wn.size?k.Pn.push(n):n()})})},k.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,v,p,d,h,y,w,g,M){if(g=v.vchildren[p],e||(o=!0,"slot"===g.vtag&&(r&&t.Cn(d,r+"-s"),g.vchildren?g.pt=!0:g.dt=!0)),l(g.vtext))g.i=t.Dn(g.vtext);else if(g.dt)g.i=t.Dn("");else{if(y=g.i=b||"svg"===g.vtag?t.Ln("http://www.w3.org/2000/svg",g.vtag):t.X(g.pt?"slot-fb":g.vtag),n.it(y)&&n.ot.delete(c),b="svg"===g.vtag||"foreignObject"!==g.vtag&&b,m(n,null,g,b),l(r)&&y["s-si"]!==r&&t.Cn(y,y["s-si"]=r),g.vchildren)for(h=0;h<g.vchildren.length;++h)(w=a(i,g,h,y))&&t.qn(y,w);"svg"===g.vtag&&(b=!1)}return g.i["s-hn"]=f,(g.pt||g.dt)&&(g.i["s-sr"]=!0,g.i["s-cr"]=u,g.i["s-sn"]=g.vname||"",(M=i&&i.vchildren&&i.vchildren[p])&&M.vtag===g.vtag&&i.i&&s(i.i)),g.i},s=function(e,r,i,u){n.ft=!0;var c=t.Un(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Hn(u),t.nn(y(u),u,h(u)),t.Hn(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.ft=!1},v=function(n,e,r,i,o,u,c,s){var v=n["s-cr"];for((c=v&&t.Bn(v)||n).shadowRoot&&t.Qn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=l(i[o].vtext)?t.Dn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.nn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)l(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Hn(o["s-ol"]):s(o,!0),t.Hn(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Bn(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;b=r.i&&l(t.Xn(r.i))&&void 0!==r.i.ownerSVGElement,b="svg"===r.vtag||"foreignObject"!==r.vtag&&b,l(r.vtext)?(i=o["s-cr"])?t.Zn(t.Bn(i),r.vtext):e.vtext!==r.vtext&&t.Zn(o,r.vtext):("slot"!==r.vtag&&m(n,e,r,b),l(u)&&l(f)?function(n,e,r,i,o,u,f,c){for(var m=0,b=0,g=e.length-1,M=e[0],k=e[g],j=i.length-1,$=i[0],A=i[j];m<=g&&b<=j;)if(null==M)M=e[++m];else if(null==k)k=e[--g];else if(null==$)$=i[++b];else if(null==A)A=i[--j];else if(d(M,$))w(M,$),M=e[++m],$=i[++b];else if(d(k,A))w(k,A),k=e[--g],A=i[--j];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Bn(M.i)),w(M,A),t.nn(n,M.i,t.In(k.i)),M=e[++m],A=i[--j];else if(d(k,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Bn(k.i)),w(k,$),t.nn(n,k.i,M.i),k=e[--g],$=i[++b];else{for(o=null,u=m;u<=g;++u)if(e[u]&&l(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}l(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[b],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++b]):(f=a(e&&e[b],r,b,n),$=i[++b]),f&&t.nn(y(M.i),f,h(M.i))}m>g?v(n,null==i[j+1]?null:i[j+1].i,r,i,b,j):b>j&&p(e,m,g)}(o,u,r,f):l(f)?(l(e.vtext)&&t.Zn(o,""),v(o,null,r,f,0,f.length-1)):l(u)&&p(u,0,u.length-1)),b&&"svg"===r.vtag&&(b=!1)},g=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Un(n)).length;i<o;i++)if(e=r[i],1===t.Rn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Rn(r[u]),""!==f){if(1===c&&f===t.zn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.Yn(r[u]).trim()){e.hidden=!0;break}g(e)}},M=[],k=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Un(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Un(t.Bn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Rn(o))||8===l)&&""===s||1===l&&null===t.zn(o,"slot")&&""===s||1===l&&t.zn(o,"slot")===s)&&(M.some(function(n){return n.ht===o})||(i=!0,o["s-sn"]=s,M.push({yt:r,ht:o})));1===t.Rn(r)&&k(r)}};return function(a,s,l,v,p,d,h,y,m,b,j,$){if(c=a,f=t.Qn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(k(l.i),h=0;h<M.length;h++)(y=M[h]).ht["s-ol"]||((m=t.Dn(""))["s-nr"]=y.ht,t.nn(t.Bn(y.ht),y.ht["s-ol"]=m,y.ht));for(n.ft=!0,h=0;h<M.length;h++){for(y=M[h],j=t.Bn(y.yt),$=t.In(y.yt),m=y.ht["s-ol"];m=t.Gn(m);)if((b=m["s-nr"])&&b&&b["s-sn"]===y.ht["s-sn"]&&j===t.Bn(b)&&(b=t.In(b))&&b&&!b["s-nr"]){$=b;break}(!$&&j!==t.Bn(y.ht)||t.In(y.ht)!==$)&&y.ht!==$&&(t.Hn(y.ht),t.nn(j,y.ht,$))}n.ft=!1}return i&&g(l.i),M.length=0,l}}(k,h),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=function(){k.ot.set(y,p.loaded=k.bn=!0),h.nt(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.tn(t);if(r)if(n.ot.has(t))e(t);else{var i=n.at.get(t)||[];i.push(e),n.at.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(k,p,r,r["s-apps"],r["s-cr"]),p.initialized=!0,k},L={},D=!1;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/deckdeckgo-charts/dist/esm/es5/deckdeckgo-charts.define.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/deckdeckgo-charts/dist/esm/es5/deckdeckgo-charts.define.js ***!
  \*********************************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _deckdeckgo_charts_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckdeckgo-charts.core.js */ "./node_modules/deckdeckgo-charts/dist/esm/es5/deckdeckgo-charts.core.js");
/* harmony import */ var _deckdeckgo_charts_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deckdeckgo-charts.components.js */ "./node_modules/deckdeckgo-charts/dist/esm/es5/deckdeckgo-charts.components.js");

// DeckdeckgoCharts: Custom Elements Define Library, ES Module/es5 Target




function defineCustomElements(win, opts) {
  return Object(_deckdeckgo_charts_core_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElement"])(win, _deckdeckgo_charts_components_js__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS"], opts);
}


/***/ }),

/***/ "./node_modules/deckdeckgo-charts/dist/loader/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/deckdeckgo-charts/dist/loader/index.js ***!
  \*************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_es5_deckdeckgo_charts_define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/es5/deckdeckgo-charts.define.js */ "./node_modules/deckdeckgo-charts/dist/esm/es5/deckdeckgo-charts.define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_es5_deckdeckgo_charts_define_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"]; });



/***/ }),

/***/ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/deckdeckgo-highlight-code/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cxpfv6eg.entry.js": [
		"./node_modules/deckdeckgo-highlight-code/dist/esm/es5/build/cxpfv6eg.entry.js",
		151
	],
	"./cxpfv6eg.sc.entry.js": [
		"./node_modules/deckdeckgo-highlight-code/dist/esm/es5/build/cxpfv6eg.sc.entry.js",
		152
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/deckdeckgo-highlight-code.components.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/deckdeckgo-highlight-code/dist/esm/es5/deckdeckgo-highlight-code.components.js ***!
  \*****************************************************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
// DeckdeckgoHighlightCode: Host Data, ES Module/es5 Target
var COMPONENTS = [["deckgo-highlight-code","cxpfv6eg",1,[["anchor",1,0,1,2],["anchorZoom",1,0,"anchor-zoom",2],["el",64],["findNextAnchor",32],["hideAnchor",1,0,"hide-anchor",4],["highlightLines",1,0,"highlight-lines",2],["language",1,0,1,2],["load",32],["src",1,0,1,2],["zoomCode",32]],1,[["document:prismLanguageLoaded","languageLoaded"]]]]

/***/ }),

/***/ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/deckdeckgo-highlight-code.core.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/deckdeckgo-highlight-code/dist/esm/es5/deckdeckgo-highlight-code.core.js ***!
  \***********************************************************************************************/
/*! exports provided: defineCustomElement, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return e; });
/*!
 * DeckdeckgoHighlightCode: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)k.push(arguments[f]);for(;k.length>0;){var c=k.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)k.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&k.push(f);t.class=k.join(" "),k.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],$):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"DeckdeckgoHighlightCode";return F||(F=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),D[s].u(function i(n){var t=A(n),e=t.s,r=d(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return __webpack_require__("./node_modules/deckdeckgo-highlight-code/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$")("./"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!D[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),D[s]=L(s,u,n,i,c,o,r)}if(window.customStyleShim)return D[s].l=window.customStyleShim,D[s].l.initShim().then(t);t()})}undefined&&undefined.v;var i=undefined&&undefined.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=undefined&&undefined.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,j:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=undefined,f=function(){};function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===T?s(n,t.C):t.A===W?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===x&&(n.C=t,n.A=T,0!==n._.length&&M(p,n))}function l(n,t){n.A===x&&(n.A=W,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,m=void 0,g=void 0,M=function(n,t){S[b]=n,S[b+1]=t,2===(b+=2)&&(g?g(e):O())},j=(y=void 0!==n?n:void 0)||{},k=j.MutationObserver||j.WebKitMutationObserver;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"=="function"?function(){try{var n=Function("return this")().T("vertx");return void 0!==(m=n.W||n.P)?function(){m(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===x&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==x?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===x&&(this.L--,n===W?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(T,t,n)},function(n){return e.H(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.U=function(n){g=n},L.B=function(n){M=n},L.I=M,L.G=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.G(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(__webpack_require__.e(/*! import() */ 219).then(__webpack_require__.bind(null, /*! ./polyfills/dom.js */ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/polyfills/dom.js"))),"function"==typeof Object.assign&&Object.entries||t.push(__webpack_require__.e(/*! import() */ 221).then(__webpack_require__.bind(null, /*! ./polyfills/object.js */ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/polyfills/object.js"))),Array.prototype.find&&Array.prototype.includes||t.push(__webpack_require__.e(/*! import() */ 217).then(__webpack_require__.bind(null, /*! ./polyfills/array.js */ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/polyfills/array.js"))),String.prototype.startsWith&&String.prototype.endsWith||t.push(__webpack_require__.e(/*! import() */ 222).then(__webpack_require__.bind(null, /*! ./polyfills/string.js */ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/polyfills/string.js"))),n.fetch||t.push(__webpack_require__.e(/*! import() */ 220).then(__webpack_require__.bind(null, /*! ./polyfills/fetch.js */ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/polyfills/fetch.js"))),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(__webpack_require__.e(/*! import() */ 218).then(__webpack_require__.bind(null, /*! ./polyfills/css-shim.js */ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/polyfills/css-shim.js"))),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(__webpack_require__.e(/*! import() */ 223).then(__webpack_require__.bind(null, /*! ./polyfills/url.js */ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/polyfills/url.js"))),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.Y||1===r.Y&&!t.J.Z)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.K.head;if(e.Z)if(1===r.Y)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.V.get(f);if(s||t.V.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.X("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.nn(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},v=function(n){return null!=n},p=function(n){return n.toLowerCase()},d=function(n){return p(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},h=function(){},y=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.tn(t);f&&f.en&&f.en[e]?b(t,e,i):"ref"!==e&&(b(t,e,null==i?"":i),null!=i&&!1!==i||n.J.rn(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",p(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",p(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.J.in(t,e)&&(null==i||!1===i))&&n.J.rn(t,e);else e=p(e)in t?p(e.substring(2)):p(e[2])+e.substring(3),i?i!==r&&n.J.on(t,e,i,0):n.J.un(t,e,0);else if(r!==i){var c=w(r),a=w(i),s=c.filter(function(n){return!a.includes(n)}),l=w(t.className).filter(function(n){return!s.includes(n)}),v=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,v),t.className=l.join(" ")}},w=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},b=function(n,t,e){try{n[t]=e}catch(n){}},m=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||y(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||y(n,o,i,u[i],f[i],r,e.o)},g=!1,M=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){M(n,t)}))},j=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},k=[],$={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},A=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{fn:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={cn:e[1],an:!!e[2],fn:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,sn:e[4]};return{t:r,s:i,en:Object.assign({},c),Y:u,ln:f?f.map(E):void 0}},E=function(n){return{vn:n[0],pn:n[1],dn:!!n[2],hn:!!n[3],yn:!!n[4]}},C=function(n,t){return v(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},S=function(n,t,e){n.wn.add(t),n.bn.has(t)||(n.bn.set(t,!0),n.mn?n.queue.write(function(){return O(n,t,e)}):n.queue.tick(function(){return O(n,t,e)}))},O=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:return n.bn.delete(r),n.gn.has(r)?[3,12]:(a=n.Mn.get(r))?[3,6]:(s=n.jn.get(r))&&!s["s-rn"]?((s["s-rc"]=s["s-rc"]||[]).push(function(){O(n,r,f)}),[2]):(a=P(n,r,n.kn.get(r),f),[3,5]);case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.j(),o.label=3;case 3:return[3,5];case 4:return i=o.j(),n.$n(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.j(),o.label=9;case 9:return[3,11];case 10:return u=o.j(),n.$n(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.An.host,f=r.An.encapsulation,c="shadow"===f&&n.J.Z,a=i;if(c&&(a=i.shadowRoot),!i["s-rn"]){n.En(n,n.J,r,i);var s=i["s-sc"];s&&(n.J.Cn(i,t(s,!0)),"scoped"===f&&n.J.Cn(i,t(s)))}if(o.render||o.hostData||u){n.Sn=!0;var l=o.render&&o.render();n.Sn=!1;var v=e(null,void 0,l),p=n.On.get(i)||{};p.i=a,n.On.set(i,n.render(i,p,v,c,f))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.Sn=!1,n.$n(t,8,i,!0)}})(n,n.tn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},_=function(n,t,e,r,i,o,u){(u=n._n.get(t))||n._n.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.Mn.get(t))){var c=u[W+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.Sn&&t["s-rn"]&&S(n,t,i)}},x=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},T=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},W="wc-",P=function(n,t,e,r,i,o,u,f){try{i=new(o=n.tn(t).An),function(n,t,e,r,i,o){n.xn.set(r,e),n._n.has(e)||n._n.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type){var a=n._n.get(e);!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&v(c=f[t.attr])&&(a[i]=C(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=C(t.type,e[i])),"mode"!==i&&delete e[i]),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[W+i]=t.watchCallbacks.slice()),T(r,i,function s(t){return(t=n._n.get(n.xn.get(this)))&&t[i]},function l(e,r){(r=n.xn.get(this))&&t.mutable&&_(n,r,i,e,u)})}else t.elementRef?x(r,i,e):t.method&&x(e,i,r[i].bind(r))})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function c(n,t,e){if(t){var r=n.xn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.Wn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i);try{if(u=n.Pn.get(t)){for(f=0;f<u.length;f+=2)i[u[f]](u[f+1]);n.Pn.delete(t)}}catch(e){n.$n(e,2,t)}}catch(e){i={},n.$n(e,7,t,!0)}return n.Mn.set(t,i),i},N=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.tn(r)&&!n.Nn.has(r))return!1;if(!N(n,r))return!1}}return!0},R=function(n,t,e,r,i,o){if(n.wn.delete(t),(i=n.jn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.jn.delete(t)),n.Rn.length&&!n.wn.size)for(;o=n.Rn.shift();)o()},L=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},d=r[n]=r[n]||{},y=function(n,t,e){var r=new WeakMap,i={K:e,Z:!!e.documentElement.attachShadow,Ln:!1,Dn:function(n){return n.nodeType},X:function(n){return e.createElement(n)},Fn:function(n,t){return e.createElementNS(n,t)},Hn:function(n){return e.createTextNode(n)},qn:function(n){return e.createComment(n)},nn:function(n,t,e){return n.insertBefore(t,e)},Un:function(n){return n.remove()},Bn:function(n,t){return n.appendChild(t)},Cn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},In:function(n){return n.childNodes},Gn:function(n){return n.parentNode},Qn:function(n){return n.nextSibling},Yn:function(n){return n.previousSibling},Zn:function(n){return p(n.nodeName)},zn:function(n){return n.textContent},Jn:function(n,t){return n.textContent=t},Kn:function(n,t){return n.getAttribute(t)},Vn:function(n,t,e){return n.setAttribute(t,e)},rn:function(n,t){return n.removeAttribute(t)},in:function(n,t){return n.hasAttribute(t)},Xn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},nt:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.tt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},on:function(t,e,o,u,f,c,a,l,v,p){var d=t,h=o,y=r.get(t);p=e+u,y&&y[p]&&y[p](),"string"==typeof a?d=i.nt(t,a):"object"==typeof a?d=a:(v=e.split(":")).length>1&&(d=i.nt(t,v[0]),e=v[1]),d&&((v=e.split(".")).length>1&&(e=v[0],h=function(n){n.keyCode===s[v[1]]&&o(n)}),l=i.Ln?{capture:!!f,passive:!!c}:!!f,n.ael(d,e,h,l),y||r.set(t,y={}),y[p]=function(){d&&n.rel(d,e,h,l),y[p]=null})},un:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},et:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},tt:function(n,t){return(t=i.Gn(n))&&11===i.Dn(t)?t.host:t},rt:function(n,t,e,r){return n.setAttributeNS(t,e,r)},it:function(n,t){return n.attachShadow(t)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Ln=!0}}))}catch(n){}return i}(d,r,i),w=y.K.documentElement,b=r["s-defined"]=r["s-defined"]||{},k={J:y,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.ot.has(e)||(n.ot.set(e,!0),function r(n,t){var e=n.tn(t);e.ln&&e.ln.forEach(function(e){e.dn||n.J.on(t,e.vn,function r(n,t,e,i){return function(r){(i=n.Mn.get(t))?i[e](r):((i=n.Pn.get(t)||[]).push(e,r),n.Pn.set(t,i))}}(n,t,e.pn),1,e.yn,e.hn)})}(n,e)),n.gn.delete(e),n.Nn.has(e)||(n.ut=!0,n.wn.add(e),n.Nn.set(e,!0),function(n,t,e){for(e=t;e=n.J.tt(e);)if(n.ft(e)){n.ct.has(t)||(n.jn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.kn.set(e,function(n,t,e,r,i){if(e.mode||(e.mode=n.Xn(e)),e["s-cr"]||n.Kn(e,"ssrv")||n.Z&&1===t.Y||(e["s-cr"]=n.Hn(""),e["s-cr"]["s-cn"]=!0,n.nn(e,e["s-cr"],n.In(e)[0])),!n.Z&&1===t.Y)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e)}catch(n){}return 1===t.Y&&n.Z&&!e.shadowRoot&&n.it(e,{mode:"open"}),r={Tn:{}},t.en&&Object.keys(t.en).forEach(function(o){(i=t.en[o].fn)&&(r.Tn[i]=n.Kn(e,i))}),r}(n.J,t,e)),n.at(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.st&&function(n,t){for(;t;){if(!n.Gn(t))return 9!==n.Dn(t);t=n.Gn(t)}}(n.J,t)&&(n.gn.set(t,!0),R(n,t),M(n.On.get(t),!0),n.J.un(t),n.ot.delete(t),n.l&&n.l.removeHost(t),[n.jn,n.lt,n.kn].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(N(n,t)&&(i=n.Mn.get(t))&&!n.gn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ct.set(t,!0),(u=n.vt.has(t))||(n.vt.set(t,!0),t["s-ld"]=void 0,n.J.Cn(t,e));try{M(n.On.get(t)),(o=n.lt.get(t))&&(o.forEach(function(n){return n(t)}),n.lt.delete(t)),!u&&i.componentDidLoad&&i.componentDidLoad()}catch(e){n.$n(e,4,t)}R(n,t)}})(n,this,r)},e.forceUpdate=function(){S(n,this,i)},t.en){var o=Object.entries(t.en),u={};o.forEach(function(n){var t=n[0],e=n[1].fn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[p(e)];o&&(t[o]=(null!==i||"boolean"!=typeof t[o])&&i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1],u=o.cn;3&u?T(e,i,function t(){return(n._n.get(this)||{})[i]},function t(e){_(n,this,i,C(o.sn,e),r)}):32===u&&x(e,i,h)})}(n,0,e,i)}}(k,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.en).map(function(n){return n.fn}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},tn:function(n){return a[y.Zn(n)]},pt:function(n){return t[n]},isClient:!0,ft:function(n){return!(!b[y.Zn(n)]&&!k.tn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=j(d,r),at:function(n,t){var e=!y.Z,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.An=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Y,e.style,e.styleMode)}catch(t){console.error(t),n.An=function i(){}}S(k,t,f)})},Sn:!1,mn:!1,st:!1,En:l,jn:new WeakMap,V:new WeakMap,Nn:new WeakMap,ot:new WeakMap,vt:new WeakMap,ct:new WeakMap,xn:new WeakMap,kn:new WeakMap,Mn:new WeakMap,gn:new WeakMap,bn:new WeakMap,lt:new WeakMap,Pn:new WeakMap,On:new WeakMap,_n:new WeakMap,wn:new Set,Rn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.enableListener=function(n,t,e,r,i){return function o(n,t,e,r,i,u){if(t){var f=n.xn.get(t),c=n.tn(f);if(c&&c.ln)if(r){var a=c.ln.find(function(n){return n.vn===e});a&&n.J.on(f,e,function(n){return t[a.pn](n)},1,a.yn,void 0===u?a.hn:!!u,i)}else n.J.un(f,e,1)}}(k,n,t,e,r,i)},k.Wn=t.emit=function(n,e,r){return y.et(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=e,d.Context=t,d.onReady=function(){return new Promise(function(n){return k.queue.write(function(){return k.wn.size?k.Rn.push(n):n()})})},k.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,l,p,d,h,y,w,b,M){if(b=l.vchildren[p],e||(o=!0,"slot"===b.vtag&&(r&&t.Cn(d,r+"-s"),b.vchildren?b.dt=!0:b.ht=!0)),v(b.vtext))b.i=t.Hn(b.vtext);else if(b.ht)b.i=t.Hn("");else{if(y=b.i=g||"svg"===b.vtag?t.Fn("http://www.w3.org/2000/svg",b.vtag):t.X(b.dt?"slot-fb":b.vtag),n.ft(y)&&n.ct.delete(c),g="svg"===b.vtag||"foreignObject"!==b.vtag&&g,m(n,null,b,g),v(r)&&y["s-si"]!==r&&t.Cn(y,y["s-si"]=r),b.vchildren)for(h=0;h<b.vchildren.length;++h)(w=a(i,b,h,y))&&t.Bn(y,w);"svg"===b.vtag&&(g=!1)}return b.i["s-hn"]=f,(b.dt||b.ht)&&(b.i["s-sr"]=!0,b.i["s-cr"]=u,b.i["s-sn"]=b.vname||"",(M=i&&i.vchildren&&i.vchildren[p])&&M.vtag===b.vtag&&i.i&&s(i.i)),b.i},s=function(e,r,i,u){n.st=!0;var c=t.In(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Un(u),t.nn(y(u),u,h(u)),t.Un(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.st=!1},l=function(n,e,r,i,o,u,c,s){var l=n["s-cr"];for((c=l&&t.Gn(l)||n).shadowRoot&&t.Zn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=v(i[o].vtext)?t.Hn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.nn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)v(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Un(o["s-ol"]):s(o,!0),t.Un(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Gn(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;g=r.i&&v(t.tt(r.i))&&void 0!==r.i.ownerSVGElement,g="svg"===r.vtag||"foreignObject"!==r.vtag&&g,v(r.vtext)?(i=o["s-cr"])?t.Jn(t.Gn(i),r.vtext):e.vtext!==r.vtext&&t.Jn(o,r.vtext):("slot"!==r.vtag&&m(n,e,r,g),v(u)&&v(f)?function(n,e,r,i,o,u,f,c){for(var b=0,m=0,g=e.length-1,M=e[0],j=e[g],k=i.length-1,$=i[0],A=i[k];b<=g&&m<=k;)if(null==M)M=e[++b];else if(null==j)j=e[--g];else if(null==$)$=i[++m];else if(null==A)A=i[--k];else if(d(M,$))w(M,$),M=e[++b],$=i[++m];else if(d(j,A))w(j,A),j=e[--g],A=i[--k];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(M.i)),w(M,A),t.nn(n,M.i,t.Qn(j.i)),M=e[++b],A=i[--k];else if(d(j,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(j.i)),w(j,$),t.nn(n,j.i,M.i),j=e[--g],$=i[++m];else{for(o=null,u=b;u<=g;++u)if(e[u]&&v(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}v(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.nn(y(M.i),f,h(M.i))}b>g?l(n,null==i[k+1]?null:i[k+1].i,r,i,m,k):m>k&&p(e,b,g)}(o,u,r,f):v(f)?(v(e.vtext)&&t.Jn(o,""),l(o,null,r,f,0,f.length-1)):v(u)&&p(u,0,u.length-1)),g&&"svg"===r.vtag&&(g=!1)},b=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.In(n)).length;i<o;i++)if(e=r[i],1===t.Dn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Dn(r[u]),""!==f){if(1===c&&f===t.Kn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.zn(r[u]).trim()){e.hidden=!0;break}b(e)}},M=[],j=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.In(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.In(t.Gn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Dn(o))||8===l)&&""===s||1===l&&null===t.Kn(o,"slot")&&""===s||1===l&&t.Kn(o,"slot")===s)&&(M.some(function(n){return n.yt===o})||(i=!0,o["s-sn"]=s,M.push({wt:r,yt:o})));1===t.Dn(r)&&j(r)}};return function(a,s,l,v,p,d,h,y,m,g,k,$){if(c=a,f=t.Zn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(j(l.i),h=0;h<M.length;h++)(y=M[h]).yt["s-ol"]||((m=t.Hn(""))["s-nr"]=y.yt,t.nn(t.Gn(y.yt),y.yt["s-ol"]=m,y.yt));for(n.st=!0,h=0;h<M.length;h++){for(y=M[h],k=t.Gn(y.wt),$=t.Qn(y.wt),m=y.yt["s-ol"];m=t.Yn(m);)if((g=m["s-nr"])&&g&&g["s-sn"]===y.yt["s-sn"]&&k===t.Gn(g)&&(g=t.Qn(g))&&g&&!g["s-nr"]){$=g;break}(!$&&k!==t.Gn(y.yt)||t.Qn(y.yt)!==$)&&y.yt!==$&&(t.Un(y.yt),t.nn(k,y.yt,$))}n.st=!1}return i&&b(l.i),M.length=0,l}}(k,y),w["s-ld"]=[],w["s-rn"]=!0,w["s-init"]=function(){k.ct.set(w,d.loaded=k.mn=!0),y.et(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.tn(t);if(r)if(n.ct.has(t))e(t);else{var i=n.lt.get(t)||[];i.push(e),n.lt.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(k,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,k},D={},F=!1;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/deckdeckgo-highlight-code.define.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/deckdeckgo-highlight-code/dist/esm/es5/deckdeckgo-highlight-code.define.js ***!
  \*************************************************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _deckdeckgo_highlight_code_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckdeckgo-highlight-code.core.js */ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/deckdeckgo-highlight-code.core.js");
/* harmony import */ var _deckdeckgo_highlight_code_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deckdeckgo-highlight-code.components.js */ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/deckdeckgo-highlight-code.components.js");

// DeckdeckgoHighlightCode: Custom Elements Define Library, ES Module/es5 Target




function defineCustomElements(win, opts) {
  return Object(_deckdeckgo_highlight_code_core_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElement"])(win, _deckdeckgo_highlight_code_components_js__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS"], opts);
}


/***/ }),

/***/ "./node_modules/deckdeckgo-highlight-code/dist/loader/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/deckdeckgo-highlight-code/dist/loader/index.js ***!
  \*********************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_es5_deckdeckgo_highlight_code_define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/es5/deckdeckgo-highlight-code.define.js */ "./node_modules/deckdeckgo-highlight-code/dist/esm/es5/deckdeckgo-highlight-code.define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_es5_deckdeckgo_highlight_code_define_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"]; });



/***/ }),

/***/ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/deckdeckgo-qrcode/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./8bggen5k.entry.js": [
		"./node_modules/deckdeckgo-qrcode/dist/esm/es5/build/8bggen5k.entry.js",
		79
	],
	"./8bggen5k.sc.entry.js": [
		"./node_modules/deckdeckgo-qrcode/dist/esm/es5/build/8bggen5k.sc.entry.js",
		80
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/deckdeckgo-qrcode/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/deckdeckgo-qrcode.components.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/deckdeckgo-qrcode/dist/esm/es5/deckdeckgo-qrcode.components.js ***!
  \*************************************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
// DeckdeckgoQrcode: Host Data, ES Module/es5 Target
var COMPONENTS = [["deckgo-qrcode","8bggen5k",1,[["content",1,0,1,2],["el",64],["generate",32],["qrAlt",1,0,"qr-alt",2],["qrBackgroundColor",1,0,"qr-background-color",2],["qrCellSize",1,0,"qr-cell-size",8],["qrFillColor",1,0,"qr-fill-color",2],["qrMargin",1,0,"qr-margin",8],["type",1,0,1,2]],1]]

/***/ }),

/***/ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/deckdeckgo-qrcode.core.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/deckdeckgo-qrcode/dist/esm/es5/deckdeckgo-qrcode.core.js ***!
  \*******************************************************************************/
/*! exports provided: defineCustomElement, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return e; });
/*!
 * DeckdeckgoQrcode: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)k.push(arguments[f]);for(;k.length>0;){var c=k.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)k.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&k.push(f);t.class=k.join(" "),k.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],j):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"DeckdeckgoQrcode";return L||(L=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),R[s].u(function i(n){var t=$(n),e=t.s,r=p(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return __webpack_require__("./node_modules/deckdeckgo-qrcode/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$")("./"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!R[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),R[s]=N(s,u,n,i,c,o,r)}if(window.customStyleShim)return R[s].l=window.customStyleShim,R[s].l.initShim().then(t);t()})}undefined&&undefined.v;var i=undefined&&undefined.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=undefined&&undefined.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,k:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=undefined,f=function(){};function applyPolyfills(n){n.j=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===T?s(n,t.C):t.A===W?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===x&&(n.C=t,n.A=T,0!==n._.length&&M(p,n))}function l(n,t){n.A===x&&(n.A=W,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,b=void 0,g=void 0,M=function(n,t){S[m]=n,S[m+1]=t,2===(m+=2)&&(g?g(e):O())},k=(y=void 0!==n?n:void 0)||{},j=k.MutationObserver||k.WebKitMutationObserver;k="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=j?($=0,A=new j(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"=="function"?function(){try{var n=Function("return this")().T("vertx");return void 0!==(b=n.W||n.P)?function(){b(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===x&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==x?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===x&&(this.L--,n===W?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(T,t,n)},function(n){return e.H(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.U=function(n){g=n},L.B=function(n){M=n},L.I=M,L.G=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.G(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(__webpack_require__.e(/*! import() */ 226).then(__webpack_require__.bind(null, /*! ./polyfills/dom.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/polyfills/dom.js"))),"function"==typeof Object.assign&&Object.entries||t.push(__webpack_require__.e(/*! import() */ 228).then(__webpack_require__.bind(null, /*! ./polyfills/object.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/polyfills/object.js"))),Array.prototype.find&&Array.prototype.includes||t.push(__webpack_require__.e(/*! import() */ 224).then(__webpack_require__.bind(null, /*! ./polyfills/array.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/polyfills/array.js"))),String.prototype.startsWith&&String.prototype.endsWith||t.push(__webpack_require__.e(/*! import() */ 229).then(__webpack_require__.bind(null, /*! ./polyfills/string.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/polyfills/string.js"))),n.fetch||t.push(__webpack_require__.e(/*! import() */ 227).then(__webpack_require__.bind(null, /*! ./polyfills/fetch.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/polyfills/fetch.js"))),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(__webpack_require__.e(/*! import() */ 225).then(__webpack_require__.bind(null, /*! ./polyfills/css-shim.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/polyfills/css-shim.js"))),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(__webpack_require__.e(/*! import() */ 230).then(__webpack_require__.bind(null, /*! ./polyfills/url.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/polyfills/url.js"))),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.Y||1===r.Y&&!t.J.Z)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.K.head;if(e.Z)if(1===r.Y)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.V.get(f);if(s||t.V.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.X("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.nn(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},l=function(n){return null!=n},v=function(n){return n.toLowerCase()},p=function(n){return v(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},d=function(){},h=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.tn(t);f&&f.en&&f.en[e]?w(t,e,i):"ref"!==e&&(w(t,e,null==i?"":i),null!=i&&!1!==i||n.J.rn(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",v(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",v(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.J.in(t,e)&&(null==i||!1===i))&&n.J.rn(t,e);else e=v(e)in t?v(e.substring(2)):v(e[2])+e.substring(3),i?i!==r&&n.J.on(t,e,i,0):n.J.un(t,e,0);else if(r!==i){var c=y(r),a=y(i),s=c.filter(function(n){return!a.includes(n)}),l=y(t.className).filter(function(n){return!s.includes(n)}),p=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,p),t.className=l.join(" ")}},y=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},w=function(n,t,e){try{n[t]=e}catch(n){}},m=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||h(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||h(n,o,i,u[i],f[i],r,e.o)},b=!1,g=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){g(n,t)}))},M=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},k=[],j={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},$=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{fn:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={cn:e[1],an:!!e[2],fn:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,sn:e[4]};return{t:r,s:i,en:Object.assign({},c),Y:u,ln:f?f.map(A):void 0}},A=function(n){return{vn:n[0],pn:n[1],dn:!!n[2],hn:!!n[3],yn:!!n[4]}},E=function(n,t){return l(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},C=function(n,t,e){n.wn.add(t),n.mn.has(t)||(n.mn.set(t,!0),n.bn?n.queue.write(function(){return S(n,t,e)}):n.queue.tick(function(){return S(n,t,e)}))},S=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:return n.mn.delete(r),n.gn.has(r)?[3,12]:(a=n.Mn.get(r))?[3,6]:(s=n.kn.get(r))&&!s["s-rn"]?((s["s-rc"]=s["s-rc"]||[]).push(function(){S(n,r,f)}),[2]):(a=T(n,r,n.jn.get(r),f),[3,5]);case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.k(),o.label=3;case 3:return[3,5];case 4:return i=o.k(),n.$n(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.k(),o.label=9;case 9:return[3,11];case 10:return u=o.k(),n.$n(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.An.host,f=r.An.encapsulation,c="shadow"===f&&n.J.Z,a=i;if(c&&(a=i.shadowRoot),!i["s-rn"]){n.En(n,n.J,r,i);var s=i["s-sc"];s&&(n.J.Cn(i,t(s,!0)),"scoped"===f&&n.J.Cn(i,t(s)))}if(o.render||o.hostData||u){n.Sn=!0;var l=o.render&&o.render();n.Sn=!1;var v=e(null,void 0,l),p=n.On.get(i)||{};p.i=a,n.On.set(i,n.render(i,p,v,c,f))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.Sn=!1,n.$n(t,8,i,!0)}})(n,n.tn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},O=function(n,t,e,r,i,o,u){(u=n._n.get(t))||n._n.set(t,u={}),r!==u[e]&&(u[e]=r,n.Mn.get(t)&&!n.Sn&&t["s-rn"]&&C(n,t,i))},_=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},x=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},T=function(n,t,e,r,i,o){try{i=new(o=n.tn(t).An),function(n,t,e,r,i,o){n.xn.set(r,e),n._n.has(e)||n._n.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type){var a=n._n.get(e);!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&l(c=f[t.attr])&&(a[i]=E(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=E(t.type,e[i])),"mode"!==i&&delete e[i]),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),x(r,i,function s(t){return(t=n._n.get(n.xn.get(this)))&&t[i]},function v(e,r){(r=n.xn.get(this))&&t.mutable&&O(n,r,i,e,u)})}else t.elementRef?_(r,i,e):t.method&&_(e,i,r[i].bind(r))})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r)}catch(e){i={},n.$n(e,7,t,!0)}return n.Mn.set(t,i),i},W=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.tn(r)&&!n.Wn.has(r))return!1;if(!W(n,r))return!1}}return!0},P=function(n,t,e,r,i,o){if(n.wn.delete(t),(i=n.kn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.kn.delete(t)),n.Pn.length&&!n.wn.size)for(;o=n.Pn.shift();)o()},N=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},p=r[n]=r[n]||{},h=function(n,t,e){var r=new WeakMap,i={K:e,Z:!!e.documentElement.attachShadow,Nn:!1,Rn:function(n){return n.nodeType},X:function(n){return e.createElement(n)},Ln:function(n,t){return e.createElementNS(n,t)},Dn:function(n){return e.createTextNode(n)},Fn:function(n){return e.createComment(n)},nn:function(n,t,e){return n.insertBefore(t,e)},Hn:function(n){return n.remove()},qn:function(n,t){return n.appendChild(t)},Cn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Un:function(n){return n.childNodes},Bn:function(n){return n.parentNode},In:function(n){return n.nextSibling},Gn:function(n){return n.previousSibling},Qn:function(n){return v(n.nodeName)},Yn:function(n){return n.textContent},Zn:function(n,t){return n.textContent=t},zn:function(n,t){return n.getAttribute(t)},Jn:function(n,t,e){return n.setAttribute(t,e)},rn:function(n,t){return n.removeAttribute(t)},in:function(n,t){return n.hasAttribute(t)},Kn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Vn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.Xn(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},on:function(t,e,o,u,f,c,a,s,l,v){var p=t,d=o,h=r.get(t);v=e+u,h&&h[v]&&h[v](),"object"==typeof a&&(p=a),p&&(s=i.Nn?{capture:!!f,passive:!!c}:!!f,n.ael(p,e,d,s),h||r.set(t,h={}),h[v]=function(){p&&n.rel(p,e,d,s),h[v]=null})},un:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},nt:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},Xn:function(n,t){return(t=i.Bn(n))&&11===i.Rn(t)?t.host:t},tt:function(n,t,e,r){return n.setAttributeNS(t,e,r)},et:function(n,t){return n.attachShadow(t)}};return"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)}),i}(p,r,i),y=h.K.documentElement,w=r["s-defined"]=r["s-defined"]||{},k={J:h,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.gn.delete(e),n.Wn.has(e)||(n.rt=!0,n.wn.add(e),n.Wn.set(e,!0),function(n,t,e){for(e=t;e=n.J.Xn(e);)if(n.it(e)){n.ot.has(t)||(n.kn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.jn.set(e,function(n,t,e,r,i){if(e.mode||(e.mode=n.Kn(e)),e["s-cr"]||n.zn(e,"ssrv")||n.Z&&1===t.Y||(e["s-cr"]=n.Dn(""),e["s-cr"]["s-cn"]=!0,n.nn(e,e["s-cr"],n.Un(e)[0])),!n.Z&&1===t.Y)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e)}catch(n){}return 1===t.Y&&n.Z&&!e.shadowRoot&&n.et(e,{mode:"open"}),r={Tn:{}},t.en&&Object.keys(t.en).forEach(function(o){(i=t.en[o].fn)&&(r.Tn[i]=n.zn(e,i))}),r}(n.J,t,e)),n.ut(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.ft&&function(n,t){for(;t;){if(!n.Bn(t))return 9!==n.Rn(t);t=n.Bn(t)}}(n.J,t)&&(n.gn.set(t,!0),P(n,t),g(n.On.get(t),!0),n.J.un(t),n.ct.delete(t),n.l&&n.l.removeHost(t),[n.kn,n.at,n.jn].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(W(n,t)&&(i=n.Mn.get(t))&&!n.gn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ot.set(t,!0),(u=n.st.has(t))||(n.st.set(t,!0),t["s-ld"]=void 0,n.J.Cn(t,e));try{g(n.On.get(t)),(o=n.at.get(t))&&(o.forEach(function(n){return n(t)}),n.at.delete(t)),!u&&i.componentDidLoad&&i.componentDidLoad()}catch(e){n.$n(e,4,t)}P(n,t)}})(n,this,r)},e.forceUpdate=function(){C(n,this,i)},t.en){var o=Object.entries(t.en),u={};o.forEach(function(n){var t=n[0],e=n[1].fn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[v(e)];o&&(t[o]=(null!==i||"boolean"!=typeof t[o])&&i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1],u=o.cn;3&u?x(e,i,function t(){return(n._n.get(this)||{})[i]},function t(e){O(n,this,i,E(o.sn,e),r)}):32===u&&_(e,i,d)})}(n,0,e,i)}}(k,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.en).map(function(n){return n.fn}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},tn:function(n){return a[h.Qn(n)]},lt:function(n){return t[n]},isClient:!0,it:function(n){return!(!w[h.Qn(n)]&&!k.tn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=M(p,r),ut:function(n,t){var e=!h.Z,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.An=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Y,e.style,e.styleMode)}catch(t){console.error(t),n.An=function i(){}}C(k,t,f)})},Sn:!1,bn:!1,ft:!1,En:s,kn:new WeakMap,V:new WeakMap,Wn:new WeakMap,ct:new WeakMap,st:new WeakMap,ot:new WeakMap,xn:new WeakMap,jn:new WeakMap,Mn:new WeakMap,gn:new WeakMap,mn:new WeakMap,at:new WeakMap,vt:new WeakMap,On:new WeakMap,_n:new WeakMap,wn:new Set,Pn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,p.h=e,p.Context=t,p.onReady=function(){return new Promise(function(n){return k.queue.write(function(){return k.wn.size?k.Pn.push(n):n()})})},k.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,v,p,d,h,y,w,g,M){if(g=v.vchildren[p],e||(o=!0,"slot"===g.vtag&&(r&&t.Cn(d,r+"-s"),g.vchildren?g.pt=!0:g.dt=!0)),l(g.vtext))g.i=t.Dn(g.vtext);else if(g.dt)g.i=t.Dn("");else{if(y=g.i=b||"svg"===g.vtag?t.Ln("http://www.w3.org/2000/svg",g.vtag):t.X(g.pt?"slot-fb":g.vtag),n.it(y)&&n.ot.delete(c),b="svg"===g.vtag||"foreignObject"!==g.vtag&&b,m(n,null,g,b),l(r)&&y["s-si"]!==r&&t.Cn(y,y["s-si"]=r),g.vchildren)for(h=0;h<g.vchildren.length;++h)(w=a(i,g,h,y))&&t.qn(y,w);"svg"===g.vtag&&(b=!1)}return g.i["s-hn"]=f,(g.pt||g.dt)&&(g.i["s-sr"]=!0,g.i["s-cr"]=u,g.i["s-sn"]=g.vname||"",(M=i&&i.vchildren&&i.vchildren[p])&&M.vtag===g.vtag&&i.i&&s(i.i)),g.i},s=function(e,r,i,u){n.ft=!0;var c=t.Un(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Hn(u),t.nn(y(u),u,h(u)),t.Hn(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.ft=!1},v=function(n,e,r,i,o,u,c,s){var v=n["s-cr"];for((c=v&&t.Bn(v)||n).shadowRoot&&t.Qn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=l(i[o].vtext)?t.Dn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.nn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)l(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Hn(o["s-ol"]):s(o,!0),t.Hn(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Bn(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;b=r.i&&l(t.Xn(r.i))&&void 0!==r.i.ownerSVGElement,b="svg"===r.vtag||"foreignObject"!==r.vtag&&b,l(r.vtext)?(i=o["s-cr"])?t.Zn(t.Bn(i),r.vtext):e.vtext!==r.vtext&&t.Zn(o,r.vtext):("slot"!==r.vtag&&m(n,e,r,b),l(u)&&l(f)?function(n,e,r,i,o,u,f,c){for(var m=0,b=0,g=e.length-1,M=e[0],k=e[g],j=i.length-1,$=i[0],A=i[j];m<=g&&b<=j;)if(null==M)M=e[++m];else if(null==k)k=e[--g];else if(null==$)$=i[++b];else if(null==A)A=i[--j];else if(d(M,$))w(M,$),M=e[++m],$=i[++b];else if(d(k,A))w(k,A),k=e[--g],A=i[--j];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Bn(M.i)),w(M,A),t.nn(n,M.i,t.In(k.i)),M=e[++m],A=i[--j];else if(d(k,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Bn(k.i)),w(k,$),t.nn(n,k.i,M.i),k=e[--g],$=i[++b];else{for(o=null,u=m;u<=g;++u)if(e[u]&&l(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}l(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[b],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++b]):(f=a(e&&e[b],r,b,n),$=i[++b]),f&&t.nn(y(M.i),f,h(M.i))}m>g?v(n,null==i[j+1]?null:i[j+1].i,r,i,b,j):b>j&&p(e,m,g)}(o,u,r,f):l(f)?(l(e.vtext)&&t.Zn(o,""),v(o,null,r,f,0,f.length-1)):l(u)&&p(u,0,u.length-1)),b&&"svg"===r.vtag&&(b=!1)},g=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Un(n)).length;i<o;i++)if(e=r[i],1===t.Rn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Rn(r[u]),""!==f){if(1===c&&f===t.zn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.Yn(r[u]).trim()){e.hidden=!0;break}g(e)}},M=[],k=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Un(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Un(t.Bn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Rn(o))||8===l)&&""===s||1===l&&null===t.zn(o,"slot")&&""===s||1===l&&t.zn(o,"slot")===s)&&(M.some(function(n){return n.ht===o})||(i=!0,o["s-sn"]=s,M.push({yt:r,ht:o})));1===t.Rn(r)&&k(r)}};return function(a,s,l,v,p,d,h,y,m,b,j,$){if(c=a,f=t.Qn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(k(l.i),h=0;h<M.length;h++)(y=M[h]).ht["s-ol"]||((m=t.Dn(""))["s-nr"]=y.ht,t.nn(t.Bn(y.ht),y.ht["s-ol"]=m,y.ht));for(n.ft=!0,h=0;h<M.length;h++){for(y=M[h],j=t.Bn(y.yt),$=t.In(y.yt),m=y.ht["s-ol"];m=t.Gn(m);)if((b=m["s-nr"])&&b&&b["s-sn"]===y.ht["s-sn"]&&j===t.Bn(b)&&(b=t.In(b))&&b&&!b["s-nr"]){$=b;break}(!$&&j!==t.Bn(y.ht)||t.In(y.ht)!==$)&&y.ht!==$&&(t.Hn(y.ht),t.nn(j,y.ht,$))}n.ft=!1}return i&&g(l.i),M.length=0,l}}(k,h),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=function(){k.ot.set(y,p.loaded=k.bn=!0),h.nt(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.tn(t);if(r)if(n.ot.has(t))e(t);else{var i=n.at.get(t)||[];i.push(e),n.at.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(k,p,r,r["s-apps"],r["s-cr"]),p.initialized=!0,k},R={},L=!1;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/deckdeckgo-qrcode.define.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/deckdeckgo-qrcode/dist/esm/es5/deckdeckgo-qrcode.define.js ***!
  \*********************************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _deckdeckgo_qrcode_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckdeckgo-qrcode.core.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/deckdeckgo-qrcode.core.js");
/* harmony import */ var _deckdeckgo_qrcode_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deckdeckgo-qrcode.components.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/deckdeckgo-qrcode.components.js");

// DeckdeckgoQrcode: Custom Elements Define Library, ES Module/es5 Target




function defineCustomElements(win, opts) {
  return Object(_deckdeckgo_qrcode_core_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElement"])(win, _deckdeckgo_qrcode_components_js__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS"], opts);
}


/***/ }),

/***/ "./node_modules/deckdeckgo-qrcode/dist/loader/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/deckdeckgo-qrcode/dist/loader/index.js ***!
  \*************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_es5_deckdeckgo_qrcode_define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/es5/deckdeckgo-qrcode.define.js */ "./node_modules/deckdeckgo-qrcode/dist/esm/es5/deckdeckgo-qrcode.define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_es5_deckdeckgo_qrcode_define_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"]; });



/***/ }),

/***/ "./node_modules/deckdeckgo-remote/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/deckdeckgo-remote/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./brvl2zsq.entry.js": [
		"./node_modules/deckdeckgo-remote/dist/esm/es5/build/brvl2zsq.entry.js",
		14,
		231
	],
	"./brvl2zsq.sc.entry.js": [
		"./node_modules/deckdeckgo-remote/dist/esm/es5/build/brvl2zsq.sc.entry.js",
		14,
		232
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/deckdeckgo-remote/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/deckdeckgo-remote/dist/esm/es5/deckdeckgo-remote.components.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/deckdeckgo-remote/dist/esm/es5/deckdeckgo-remote.components.js ***!
  \*************************************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
// DeckdeckgoRemote: Host Data, ES Module/es5 Target
var COMPONENTS = [["deckgo-remote","brvl2zsq",1,[["canvasWidth",16],["connect",32],["el",64],["height",1,0,1,8],["length",1,0,1,8],["moveDraw",32],["nextSlide",32],["prevSlide",32],["room",1,0,1,2],["server",1,0,1,2],["slideTo",32],["slides",1],["width",1,0,1,8]],1]]

/***/ }),

/***/ "./node_modules/deckdeckgo-remote/dist/esm/es5/deckdeckgo-remote.core.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/deckdeckgo-remote/dist/esm/es5/deckdeckgo-remote.core.js ***!
  \*******************************************************************************/
/*! exports provided: defineCustomElement, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return e; });
/*!
 * DeckdeckgoRemote: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)k.push(arguments[f]);for(;k.length>0;){var c=k.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)k.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&k.push(f);t.class=k.join(" "),k.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],$):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"DeckdeckgoRemote";return F||(F=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),D[s].u(function i(n){var t=A(n),e=t.s,r=d(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return __webpack_require__("./node_modules/deckdeckgo-remote/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$")("./"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!D[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),D[s]=L(s,u,n,i,c,o,r)}if(window.customStyleShim)return D[s].l=window.customStyleShim,D[s].l.initShim().then(t);t()})}undefined&&undefined.v;var i=undefined&&undefined.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=undefined&&undefined.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,j:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=undefined,f=function(){};function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===T?s(n,t.C):t.A===W?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===x&&(n.C=t,n.A=T,0!==n._.length&&M(p,n))}function l(n,t){n.A===x&&(n.A=W,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,m=void 0,g=void 0,M=function(n,t){S[b]=n,S[b+1]=t,2===(b+=2)&&(g?g(e):O())},j=(y=void 0!==n?n:void 0)||{},k=j.MutationObserver||j.WebKitMutationObserver;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"=="function"?function(){try{var n=Function("return this")().T("vertx");return void 0!==(m=n.W||n.P)?function(){m(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===x&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==x?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===x&&(this.L--,n===W?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(T,t,n)},function(n){return e.H(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.U=function(n){g=n},L.B=function(n){M=n},L.I=M,L.G=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.G(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(__webpack_require__.e(/*! import() */ 235).then(__webpack_require__.bind(null, /*! ./polyfills/dom.js */ "./node_modules/deckdeckgo-remote/dist/esm/es5/polyfills/dom.js"))),"function"==typeof Object.assign&&Object.entries||t.push(__webpack_require__.e(/*! import() */ 237).then(__webpack_require__.bind(null, /*! ./polyfills/object.js */ "./node_modules/deckdeckgo-remote/dist/esm/es5/polyfills/object.js"))),Array.prototype.find&&Array.prototype.includes||t.push(__webpack_require__.e(/*! import() */ 233).then(__webpack_require__.bind(null, /*! ./polyfills/array.js */ "./node_modules/deckdeckgo-remote/dist/esm/es5/polyfills/array.js"))),String.prototype.startsWith&&String.prototype.endsWith||t.push(__webpack_require__.e(/*! import() */ 238).then(__webpack_require__.bind(null, /*! ./polyfills/string.js */ "./node_modules/deckdeckgo-remote/dist/esm/es5/polyfills/string.js"))),n.fetch||t.push(__webpack_require__.e(/*! import() */ 236).then(__webpack_require__.bind(null, /*! ./polyfills/fetch.js */ "./node_modules/deckdeckgo-remote/dist/esm/es5/polyfills/fetch.js"))),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(__webpack_require__.e(/*! import() */ 234).then(__webpack_require__.bind(null, /*! ./polyfills/css-shim.js */ "./node_modules/deckdeckgo-remote/dist/esm/es5/polyfills/css-shim.js"))),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(__webpack_require__.e(/*! import() */ 239).then(__webpack_require__.bind(null, /*! ./polyfills/url.js */ "./node_modules/deckdeckgo-remote/dist/esm/es5/polyfills/url.js"))),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.Y||1===r.Y&&!t.J.Z)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.K.head;if(e.Z)if(1===r.Y)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.V.get(f);if(s||t.V.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.X("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.nn(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},v=function(n){return null!=n},p=function(n){return n.toLowerCase()},d=function(n){return p(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},h=function(){},y=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.tn(t);f&&f.en&&f.en[e]?b(t,e,i):"ref"!==e&&(b(t,e,null==i?"":i),null!=i&&!1!==i||n.J.rn(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",p(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",p(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.J.in(t,e)&&(null==i||!1===i))&&n.J.rn(t,e);else e=p(e)in t?p(e.substring(2)):p(e[2])+e.substring(3),i?i!==r&&n.J.on(t,e,i,0):n.J.un(t,e,0);else if(r!==i){var c=w(r),a=w(i),s=c.filter(function(n){return!a.includes(n)}),l=w(t.className).filter(function(n){return!s.includes(n)}),v=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,v),t.className=l.join(" ")}},w=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},b=function(n,t,e){try{n[t]=e}catch(n){}},m=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||y(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||y(n,o,i,u[i],f[i],r,e.o)},g=!1,M=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){M(n,t)}))},j=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},k=[],$={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},A=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{fn:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={cn:e[1],an:!!e[2],fn:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,sn:e[4]};return{t:r,s:i,en:Object.assign({},c),Y:u,ln:f?f.map(E):void 0}},E=function(n){return{vn:n[0],pn:n[1],dn:!!n[2],hn:!!n[3],yn:!!n[4]}},C=function(n,t){return v(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},S=function(n,t,e){n.wn.add(t),n.bn.has(t)||(n.bn.set(t,!0),n.mn?n.queue.write(function(){return O(n,t,e)}):n.queue.tick(function(){return O(n,t,e)}))},O=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:return n.bn.delete(r),n.gn.has(r)?[3,12]:(a=n.Mn.get(r))?[3,6]:(s=n.jn.get(r))&&!s["s-rn"]?((s["s-rc"]=s["s-rc"]||[]).push(function(){O(n,r,f)}),[2]):(a=P(n,r,n.kn.get(r),f),[3,5]);case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.j(),o.label=3;case 3:return[3,5];case 4:return i=o.j(),n.$n(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.j(),o.label=9;case 9:return[3,11];case 10:return u=o.j(),n.$n(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.An.host,f=r.An.encapsulation,c="shadow"===f&&n.J.Z,a=i;if(c&&(a=i.shadowRoot),!i["s-rn"]){n.En(n,n.J,r,i);var s=i["s-sc"];s&&(n.J.Cn(i,t(s,!0)),"scoped"===f&&n.J.Cn(i,t(s)))}if(o.render||o.hostData||u){n.Sn=!0;var l=o.render&&o.render();n.Sn=!1;var v=e(null,void 0,l),p=n.On.get(i)||{};p.i=a,n.On.set(i,n.render(i,p,v,c,f))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.Sn=!1,n.$n(t,8,i,!0)}})(n,n.tn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},_=function(n,t,e,r,i,o,u){(u=n._n.get(t))||n._n.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.Mn.get(t))){var c=u[W+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.Sn&&t["s-rn"]&&S(n,t,i)}},x=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},T=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},W="wc-",P=function(n,t,e,r,i,o){try{i=new(o=n.tn(t).An),function(n,t,e,r,i,o){n.xn.set(r,e),n._n.has(e)||n._n.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type||t.state){var a=n._n.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&v(c=f[t.attr])&&(a[i]=C(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=C(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[W+i]=t.watchCallbacks.slice()),T(r,i,function s(t){return(t=n._n.get(n.xn.get(this)))&&t[i]},function l(e,r){(r=n.xn.get(this))&&(t.state||t.mutable)&&_(n,r,i,e,u)})}else t.elementRef?x(r,i,e):t.method&&x(e,i,r[i].bind(r))})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function u(n,t,e){if(t){var r=n.xn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.Wn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i)}catch(e){i={},n.$n(e,7,t,!0)}return n.Mn.set(t,i),i},N=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.tn(r)&&!n.Pn.has(r))return!1;if(!N(n,r))return!1}}return!0},R=function(n,t,e,r,i,o){if(n.wn.delete(t),(i=n.jn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.jn.delete(t)),n.Nn.length&&!n.wn.size)for(;o=n.Nn.shift();)o()},L=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},d=r[n]=r[n]||{},y=function(n,t,e){var r=new WeakMap,i={K:e,Z:!!e.documentElement.attachShadow,Rn:!1,Ln:function(n){return n.nodeType},X:function(n){return e.createElement(n)},Dn:function(n,t){return e.createElementNS(n,t)},Fn:function(n){return e.createTextNode(n)},Hn:function(n){return e.createComment(n)},nn:function(n,t,e){return n.insertBefore(t,e)},qn:function(n){return n.remove()},Un:function(n,t){return n.appendChild(t)},Cn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Bn:function(n){return n.childNodes},In:function(n){return n.parentNode},Gn:function(n){return n.nextSibling},Qn:function(n){return n.previousSibling},Yn:function(n){return p(n.nodeName)},Zn:function(n){return n.textContent},zn:function(n,t){return n.textContent=t},Jn:function(n,t){return n.getAttribute(t)},Kn:function(n,t,e){return n.setAttribute(t,e)},rn:function(n,t){return n.removeAttribute(t)},in:function(n,t){return n.hasAttribute(t)},Vn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Xn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.nt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},on:function(t,e,o,u,f,c,a,l,v,p){var d=t,h=o,y=r.get(t);p=e+u,y&&y[p]&&y[p](),"string"==typeof a?d=i.Xn(t,a):"object"==typeof a?d=a:(v=e.split(":")).length>1&&(d=i.Xn(t,v[0]),e=v[1]),d&&((v=e.split(".")).length>1&&(e=v[0],h=function(n){n.keyCode===s[v[1]]&&o(n)}),l=i.Rn?{capture:!!f,passive:!!c}:!!f,n.ael(d,e,h,l),y||r.set(t,y={}),y[p]=function(){d&&n.rel(d,e,h,l),y[p]=null})},un:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},tt:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},nt:function(n,t){return(t=i.In(n))&&11===i.Ln(t)?t.host:t},et:function(n,t,e,r){return n.setAttributeNS(t,e,r)},rt:function(n,t){return n.attachShadow(t)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Rn=!0}}))}catch(n){}return i}(d,r,i),w=y.K.documentElement,b=r["s-defined"]=r["s-defined"]||{},k={J:y,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.gn.delete(e),n.Pn.has(e)||(n.it=!0,n.wn.add(e),n.Pn.set(e,!0),function(n,t,e){for(e=t;e=n.J.nt(e);)if(n.ot(e)){n.ut.has(t)||(n.jn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.kn.set(e,function(n,t,e,r,i){if(e.mode||(e.mode=n.Vn(e)),e["s-cr"]||n.Jn(e,"ssrv")||n.Z&&1===t.Y||(e["s-cr"]=n.Fn(""),e["s-cr"]["s-cn"]=!0,n.nn(e,e["s-cr"],n.Bn(e)[0])),!n.Z&&1===t.Y)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e)}catch(n){}return 1===t.Y&&n.Z&&!e.shadowRoot&&n.rt(e,{mode:"open"}),r={Tn:{}},t.en&&Object.keys(t.en).forEach(function(o){(i=t.en[o].fn)&&(r.Tn[i]=n.Jn(e,i))}),r}(n.J,t,e)),n.ft(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){if(!n.ct&&function(n,t){for(;t;){if(!n.In(t))return 9!==n.Ln(t);t=n.In(t)}}(n.J,t)){n.gn.set(t,!0),R(n,t),M(n.On.get(t),!0);var e=n.Mn.get(t);e&&e.componentDidUnload&&e.componentDidUnload(),n.J.un(t),n.at.delete(t),n.l&&n.l.removeHost(t),[n.jn,n.st,n.kn].forEach(function(n){return n.delete(t)})}})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(N(n,t)&&(i=n.Mn.get(t))&&!n.gn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ut.set(t,!0),(u=n.lt.has(t))||(n.lt.set(t,!0),t["s-ld"]=void 0,n.J.Cn(t,e));try{M(n.On.get(t)),(o=n.st.get(t))&&(o.forEach(function(n){return n(t)}),n.st.delete(t)),!u&&i.componentDidLoad&&i.componentDidLoad()}catch(e){n.$n(e,4,t)}R(n,t)}})(n,this,r)},e.forceUpdate=function(){S(n,this,i)},t.en){var o=Object.entries(t.en),u={};o.forEach(function(n){var t=n[0],e=n[1].fn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[p(e)];o&&(t[o]=(null!==i||"boolean"!=typeof t[o])&&i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1],u=o.cn;3&u?T(e,i,function t(){return(n._n.get(this)||{})[i]},function t(e){_(n,this,i,C(o.sn,e),r)}):32===u&&x(e,i,h)})}(n,0,e,i)}}(k,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.en).map(function(n){return n.fn}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},tn:function(n){return a[y.Yn(n)]},vt:function(n){return t[n]},isClient:!0,ot:function(n){return!(!b[y.Yn(n)]&&!k.tn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=j(d,r),ft:function(n,t){var e=!y.Z,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.An=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Y,e.style,e.styleMode)}catch(t){console.error(t),n.An=function i(){}}S(k,t,f)})},Sn:!1,mn:!1,ct:!1,En:l,jn:new WeakMap,V:new WeakMap,Pn:new WeakMap,at:new WeakMap,lt:new WeakMap,ut:new WeakMap,xn:new WeakMap,kn:new WeakMap,Mn:new WeakMap,gn:new WeakMap,bn:new WeakMap,st:new WeakMap,pt:new WeakMap,On:new WeakMap,_n:new WeakMap,wn:new Set,Nn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,k.Wn=t.emit=function(n,e,r){return y.tt(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=e,d.Context=t,d.onReady=function(){return new Promise(function(n){return k.queue.write(function(){return k.wn.size?k.Nn.push(n):n()})})},k.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,l,p,d,h,y,w,b,M){if(b=l.vchildren[p],e||(o=!0,"slot"===b.vtag&&(r&&t.Cn(d,r+"-s"),b.vchildren?b.dt=!0:b.ht=!0)),v(b.vtext))b.i=t.Fn(b.vtext);else if(b.ht)b.i=t.Fn("");else{if(y=b.i=g||"svg"===b.vtag?t.Dn("http://www.w3.org/2000/svg",b.vtag):t.X(b.dt?"slot-fb":b.vtag),n.ot(y)&&n.ut.delete(c),g="svg"===b.vtag||"foreignObject"!==b.vtag&&g,m(n,null,b,g),v(r)&&y["s-si"]!==r&&t.Cn(y,y["s-si"]=r),b.vchildren)for(h=0;h<b.vchildren.length;++h)(w=a(i,b,h,y))&&t.Un(y,w);"svg"===b.vtag&&(g=!1)}return b.i["s-hn"]=f,(b.dt||b.ht)&&(b.i["s-sr"]=!0,b.i["s-cr"]=u,b.i["s-sn"]=b.vname||"",(M=i&&i.vchildren&&i.vchildren[p])&&M.vtag===b.vtag&&i.i&&s(i.i)),b.i},s=function(e,r,i,u){n.ct=!0;var c=t.Bn(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.qn(u),t.nn(y(u),u,h(u)),t.qn(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.ct=!1},l=function(n,e,r,i,o,u,c,s){var l=n["s-cr"];for((c=l&&t.In(l)||n).shadowRoot&&t.Yn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=v(i[o].vtext)?t.Fn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.nn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)v(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.qn(o["s-ol"]):s(o,!0),t.qn(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.In(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;g=r.i&&v(t.nt(r.i))&&void 0!==r.i.ownerSVGElement,g="svg"===r.vtag||"foreignObject"!==r.vtag&&g,v(r.vtext)?(i=o["s-cr"])?t.zn(t.In(i),r.vtext):e.vtext!==r.vtext&&t.zn(o,r.vtext):("slot"!==r.vtag&&m(n,e,r,g),v(u)&&v(f)?function(n,e,r,i,o,u,f,c){for(var b=0,m=0,g=e.length-1,M=e[0],j=e[g],k=i.length-1,$=i[0],A=i[k];b<=g&&m<=k;)if(null==M)M=e[++b];else if(null==j)j=e[--g];else if(null==$)$=i[++m];else if(null==A)A=i[--k];else if(d(M,$))w(M,$),M=e[++b],$=i[++m];else if(d(j,A))w(j,A),j=e[--g],A=i[--k];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.In(M.i)),w(M,A),t.nn(n,M.i,t.Gn(j.i)),M=e[++b],A=i[--k];else if(d(j,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.In(j.i)),w(j,$),t.nn(n,j.i,M.i),j=e[--g],$=i[++m];else{for(o=null,u=b;u<=g;++u)if(e[u]&&v(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}v(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.nn(y(M.i),f,h(M.i))}b>g?l(n,null==i[k+1]?null:i[k+1].i,r,i,m,k):m>k&&p(e,b,g)}(o,u,r,f):v(f)?(v(e.vtext)&&t.zn(o,""),l(o,null,r,f,0,f.length-1)):v(u)&&p(u,0,u.length-1)),g&&"svg"===r.vtag&&(g=!1)},b=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Bn(n)).length;i<o;i++)if(e=r[i],1===t.Ln(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Ln(r[u]),""!==f){if(1===c&&f===t.Jn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.Zn(r[u]).trim()){e.hidden=!0;break}b(e)}},M=[],j=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Bn(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Bn(t.In(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Ln(o))||8===l)&&""===s||1===l&&null===t.Jn(o,"slot")&&""===s||1===l&&t.Jn(o,"slot")===s)&&(M.some(function(n){return n.yt===o})||(i=!0,o["s-sn"]=s,M.push({wt:r,yt:o})));1===t.Ln(r)&&j(r)}};return function(a,s,l,v,p,d,h,y,m,g,k,$){if(c=a,f=t.Yn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(j(l.i),h=0;h<M.length;h++)(y=M[h]).yt["s-ol"]||((m=t.Fn(""))["s-nr"]=y.yt,t.nn(t.In(y.yt),y.yt["s-ol"]=m,y.yt));for(n.ct=!0,h=0;h<M.length;h++){for(y=M[h],k=t.In(y.wt),$=t.Gn(y.wt),m=y.yt["s-ol"];m=t.Qn(m);)if((g=m["s-nr"])&&g&&g["s-sn"]===y.yt["s-sn"]&&k===t.In(g)&&(g=t.Gn(g))&&g&&!g["s-nr"]){$=g;break}(!$&&k!==t.In(y.yt)||t.Gn(y.yt)!==$)&&y.yt!==$&&(t.qn(y.yt),t.nn(k,y.yt,$))}n.ct=!1}return i&&b(l.i),M.length=0,l}}(k,y),w["s-ld"]=[],w["s-rn"]=!0,w["s-init"]=function(){k.ut.set(w,d.loaded=k.mn=!0),y.tt(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.tn(t);if(r)if(n.ut.has(t))e(t);else{var i=n.st.get(t)||[];i.push(e),n.st.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(k,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,k},D={},F=!1;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/deckdeckgo-remote/dist/esm/es5/deckdeckgo-remote.define.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/deckdeckgo-remote/dist/esm/es5/deckdeckgo-remote.define.js ***!
  \*********************************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _deckdeckgo_remote_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckdeckgo-remote.core.js */ "./node_modules/deckdeckgo-remote/dist/esm/es5/deckdeckgo-remote.core.js");
/* harmony import */ var _deckdeckgo_remote_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deckdeckgo-remote.components.js */ "./node_modules/deckdeckgo-remote/dist/esm/es5/deckdeckgo-remote.components.js");

// DeckdeckgoRemote: Custom Elements Define Library, ES Module/es5 Target




function defineCustomElements(win, opts) {
  return Object(_deckdeckgo_remote_core_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElement"])(win, _deckdeckgo_remote_components_js__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS"], opts);
}


/***/ }),

/***/ "./node_modules/deckdeckgo-remote/dist/loader/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/deckdeckgo-remote/dist/loader/index.js ***!
  \*************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_es5_deckdeckgo_remote_define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/es5/deckdeckgo-remote.define.js */ "./node_modules/deckdeckgo-remote/dist/esm/es5/deckdeckgo-remote.define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_es5_deckdeckgo_remote_define_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"]; });



/***/ }),

/***/ "./node_modules/deckdeckgo/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/deckdeckgo/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./4nnegc1i.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/4nnegc1i.entry.js",
		2,
		153
	],
	"./4nnegc1i.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/4nnegc1i.sc.entry.js",
		2,
		154
	],
	"./akq6ak6c.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/akq6ak6c.entry.js",
		2,
		155
	],
	"./akq6ak6c.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/akq6ak6c.sc.entry.js",
		2,
		156
	],
	"./bykmnv8y.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/bykmnv8y.entry.js",
		2,
		240
	],
	"./bykmnv8y.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/bykmnv8y.sc.entry.js",
		2,
		241
	],
	"./lg3nnnic.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/lg3nnnic.entry.js",
		2,
		157
	],
	"./lg3nnnic.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/lg3nnnic.sc.entry.js",
		2,
		158
	],
	"./nmqi2fr9.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/nmqi2fr9.entry.js",
		2,
		159
	],
	"./nmqi2fr9.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/nmqi2fr9.sc.entry.js",
		2,
		160
	],
	"./pcqtfpo0.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/pcqtfpo0.entry.js",
		2,
		161
	],
	"./pcqtfpo0.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/pcqtfpo0.sc.entry.js",
		2,
		162
	],
	"./ufprnvke.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/ufprnvke.entry.js",
		2,
		163
	],
	"./ufprnvke.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/ufprnvke.sc.entry.js",
		2,
		164
	],
	"./uhjq7cuw.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/uhjq7cuw.entry.js",
		2,
		165
	],
	"./uhjq7cuw.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/uhjq7cuw.sc.entry.js",
		2,
		166
	],
	"./x6d6yges.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/x6d6yges.entry.js",
		2,
		167
	],
	"./x6d6yges.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/x6d6yges.sc.entry.js",
		2,
		168
	],
	"./xnwwtqbw.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/xnwwtqbw.entry.js",
		242
	],
	"./xnwwtqbw.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/xnwwtqbw.sc.entry.js",
		243
	],
	"./z8tbaruf.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/z8tbaruf.entry.js",
		2,
		169
	],
	"./z8tbaruf.sc.entry.js": [
		"./node_modules/deckdeckgo/dist/esm/es5/build/z8tbaruf.sc.entry.js",
		2,
		170
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/deckdeckgo/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/deckdeckgo/dist/esm/es5/deckdeckgo.components.js":
/*!***********************************************************************!*\
  !*** ./node_modules/deckdeckgo/dist/esm/es5/deckdeckgo.components.js ***!
  \***********************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
// deckdeckgo: Host Data, ES Module/es5 Target
var COMPONENTS = [["deckgo-deck","bykmnv8y",1,[["activeIndex",16],["cloneBackground",1,0,"clone-background",4],["doPrint",32],["el",64],["embedded",1,0,1,4],["getActiveIndex",32],["getLength",32],["isBeginning",32],["isEnd",32],["isMobile",32],["keyboard",1,0,1,4],["length",16],["pager",1,0,1,4],["pagerPercentage",1,0,"pager-percentage",4],["rtl",16],["slideNext",32],["slidePrev",32],["slideTo",32],["toggleFullScreen",32]],1,[["mousedown","mousedown",0,1],["touchstart","touchstart",0,1],["mouseup","mouseup",0,1],["touchend","touchend",0,1],["mousemove","mousemove",0,1],["touchmove","touchmove",0,1],["dblclick","dblclick",0,1],["scrolling","scrolling"],["slideDidLoad","slideDidLoad"]]],["deckgo-gif","4nnegc1i",1,[["alt",1,0,1,2],["el",64],["fullscreen",1,0,1,4],["lazyLoadContent",32],["loaded",16],["src",1,0,1,2]],1],["deckgo-pager","bykmnv8y",1,[["activeIndex",1,0,"active-index",8],["length",1,0,1,8],["percentage",1,0,1,4],["progression",16]],1],["deckgo-slide-author","ufprnvke",1,[["afterSwipe",32],["beforeSwipe",32],["el",64],["imgAlt",1,0,"img-alt",2],["imgSrc",1,0,"img-src",2],["lazyLoadContent",32]],1],["deckgo-slide-chart","akq6ak6c",1,[["afterSwipe",32],["area",1,0,1,4],["beforeSwipe",32],["chartHeight",16],["chartWidth",16],["datePattern",1,0,"date-pattern",2],["el",64],["grid",1,0,1,4],["height",1,0,1,8],["innerRadius",1,0,"inner-radius",8],["lazyLoadContent",32],["marginBottom",1,0,"margin-bottom",8],["marginLeft",1,0,"margin-left",8],["marginRight",1,0,"margin-right",8],["marginTop",1,0,"margin-top",8],["range",1],["separator",1,0,1,2],["smooth",1,0,1,4],["src",1,0,1,2],["ticks",1,0,1,8],["type",1,0,1,2],["width",1,0,1,8],["yAxisDomain",1,0,"y-axis-domain",2]],1],["deckgo-slide-code","pcqtfpo0",1,[["afterSwipe",32],["anchor",1,0,1,2],["anchorZoom",1,0,"anchor-zoom",2],["beforeSwipe",32],["el",64],["hideAnchor",1,0,"hide-anchor",4],["language",1,0,1,2],["lazyLoadContent",32],["mobile",16],["src",1,0,1,2]],1],["deckgo-slide-content","lg3nnnic",1,[["afterSwipe",32],["beforeSwipe",32],["el",64],["lazyLoadContent",32],["reveal",1,0,1,4],["revealShowFirst",1,0,"reveal-show-first",4]],1],["deckgo-slide-gif","4nnegc1i",1,[["afterSwipe",32],["alt",1,0,1,2],["beforeSwipe",32],["el",64],["fullscreen",1,0,1,4],["lazyLoadContent",32],["src",1,0,1,2]],1],["deckgo-slide-qrcode","uhjq7cuw",1,[["afterSwipe",32],["beforeSwipe",32],["content",1,0,1,2],["el",64],["lazyLoadContent",32]],1],["deckgo-slide-split","nmqi2fr9",1,[["afterSwipe",32],["beforeSwipe",32],["el",64],["lazyLoadContent",32],["reveal",1,0,1,4],["revealShowFirst",1,0,"reveal-show-first",4]],1],["deckgo-slide-title","x6d6yges",1,[["afterSwipe",32],["beforeSwipe",32],["el",64],["lazyLoadContent",32],["reveal",1,0,1,4],["revealShowFirst",1,0,"reveal-show-first",4]],1],["deckgo-slide-youtube","z8tbaruf",1,[["afterSwipe",32],["beforeSwipe",32],["el",64],["frameTitle",16],["height",1,0,1,8],["lazyLoadContent",32],["pause",32],["play",32],["src",1,0,1,2],["toggle",32],["videoHeight",16],["videoWidth",16],["width",1,0,1,8]],1],["deckgo-social","xnwwtqbw",1,[["fullUrl",1,0,"full-url",2],["github",1,0,1,2],["lazyLoadContent",32],["linkedin",1,0,1,2],["medium",1,0,1,2],["twitter",1,0,1,2],["url",16]],1],["deckgo-youtube","z8tbaruf",1,[["el",64],["frameTitle",1,0,"frame-title",2],["height",1,0,1,8],["lazyLoadContent",32],["pause",32],["play",32],["src",1,0,1,2],["updateIFrame",32],["width",1,0,1,8]],1]]

/***/ }),

/***/ "./node_modules/deckdeckgo/dist/esm/es5/deckdeckgo.core.js":
/*!*****************************************************************!*\
  !*** ./node_modules/deckdeckgo/dist/esm/es5/deckdeckgo.core.js ***!
  \*****************************************************************/
/*! exports provided: defineCustomElement, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return e; });
/*!
 * deckdeckgo: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)k.push(arguments[f]);for(;k.length>0;){var c=k.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)k.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&k.push(f);t.class=k.join(" "),k.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],$):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"deckdeckgo";return F||(F=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),D[s].u(function i(n){var t=A(n),e=t.s,r=d(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return __webpack_require__("./node_modules/deckdeckgo/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$")("./"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!D[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),D[s]=L(s,u,n,i,c,o,r)}if(window.customStyleShim)return D[s].l=window.customStyleShim,D[s].l.initShim().then(t);t()})}undefined&&undefined.v;var i=undefined&&undefined.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=undefined&&undefined.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,j:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=undefined,f=function(){};function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===T?s(n,t.C):t.A===W?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===x&&(n.C=t,n.A=T,0!==n._.length&&M(p,n))}function l(n,t){n.A===x&&(n.A=W,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,m=void 0,g=void 0,M=function(n,t){S[b]=n,S[b+1]=t,2===(b+=2)&&(g?g(e):O())},j=(y=void 0!==n?n:void 0)||{},k=j.MutationObserver||j.WebKitMutationObserver;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"=="function"?function(){try{var n=Function("return this")().T("vertx");return void 0!==(m=n.W||n.P)?function(){m(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===x&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==x?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===x&&(this.L--,n===W?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(T,t,n)},function(n){return e.H(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.U=function(n){g=n},L.B=function(n){M=n},L.I=M,L.G=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.G(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(__webpack_require__.e(/*! import() */ 246).then(__webpack_require__.bind(null, /*! ./polyfills/dom.js */ "./node_modules/deckdeckgo/dist/esm/es5/polyfills/dom.js"))),"function"==typeof Object.assign&&Object.entries||t.push(__webpack_require__.e(/*! import() */ 248).then(__webpack_require__.bind(null, /*! ./polyfills/object.js */ "./node_modules/deckdeckgo/dist/esm/es5/polyfills/object.js"))),Array.prototype.find&&Array.prototype.includes||t.push(__webpack_require__.e(/*! import() */ 244).then(__webpack_require__.bind(null, /*! ./polyfills/array.js */ "./node_modules/deckdeckgo/dist/esm/es5/polyfills/array.js"))),String.prototype.startsWith&&String.prototype.endsWith||t.push(__webpack_require__.e(/*! import() */ 249).then(__webpack_require__.bind(null, /*! ./polyfills/string.js */ "./node_modules/deckdeckgo/dist/esm/es5/polyfills/string.js"))),n.fetch||t.push(__webpack_require__.e(/*! import() */ 247).then(__webpack_require__.bind(null, /*! ./polyfills/fetch.js */ "./node_modules/deckdeckgo/dist/esm/es5/polyfills/fetch.js"))),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(__webpack_require__.e(/*! import() */ 245).then(__webpack_require__.bind(null, /*! ./polyfills/css-shim.js */ "./node_modules/deckdeckgo/dist/esm/es5/polyfills/css-shim.js"))),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(__webpack_require__.e(/*! import() */ 250).then(__webpack_require__.bind(null, /*! ./polyfills/url.js */ "./node_modules/deckdeckgo/dist/esm/es5/polyfills/url.js"))),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.Y||1===r.Y&&!t.J.Z)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.K.head;if(e.Z)if(1===r.Y)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.V.get(f);if(s||t.V.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.X("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.nn(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},v=function(n){return null!=n},p=function(n){return n.toLowerCase()},d=function(n){return p(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},h=function(){},y=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.tn(t);f&&f.en&&f.en[e]?b(t,e,i):"ref"!==e&&(b(t,e,null==i?"":i),null!=i&&!1!==i||n.J.rn(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",p(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",p(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.J.in(t,e)&&(null==i||!1===i))&&n.J.rn(t,e);else e=p(e)in t?p(e.substring(2)):p(e[2])+e.substring(3),i?i!==r&&n.J.on(t,e,i,0):n.J.un(t,e,0);else if(r!==i){var c=w(r),a=w(i),s=c.filter(function(n){return!a.includes(n)}),l=w(t.className).filter(function(n){return!s.includes(n)}),v=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,v),t.className=l.join(" ")}},w=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},b=function(n,t,e){try{n[t]=e}catch(n){}},m=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||y(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||y(n,o,i,u[i],f[i],r,e.o)},g=!1,M=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){M(n,t)}))},j=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},k=[],$={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},A=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{fn:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={cn:e[1],an:!!e[2],fn:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,sn:e[4]};return{t:r,s:i,en:Object.assign({},c),Y:u,ln:f?f.map(E):void 0}},E=function(n){return{vn:n[0],pn:n[1],dn:!!n[2],hn:!!n[3],yn:!!n[4]}},C=function(n,t){return v(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},S=function(n,t,e){n.wn.add(t),n.bn.has(t)||(n.bn.set(t,!0),n.mn?n.queue.write(function(){return O(n,t,e)}):n.queue.tick(function(){return O(n,t,e)}))},O=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:if(n.bn.delete(r),n.gn.has(r))return[3,12];if(a=n.Mn.get(r))return[3,6];if((s=n.jn.get(r))&&!s["s-rn"])return(s["s-rc"]=s["s-rc"]||[]).push(function(){O(n,r,f)}),[2];if(!(a=P(n,r,n.kn.get(r),f)))return[3,5];o.label=1;case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.j(),o.label=3;case 3:return[3,5];case 4:return i=o.j(),n.$n(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.j(),o.label=9;case 9:return[3,11];case 10:return u=o.j(),n.$n(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.An.host,f=r.An.encapsulation,c="shadow"===f&&n.J.Z,a=i;if(c&&(a=i.shadowRoot),!i["s-rn"]){n.En(n,n.J,r,i);var s=i["s-sc"];s&&(n.J.Cn(i,t(s,!0)),"scoped"===f&&n.J.Cn(i,t(s)))}if(o.render||o.hostData||u){n.Sn=!0;var l,v=o.render&&o.render();l=o.hostData&&o.hostData(),n.Sn=!1;var p=e(null,l,v),d=n.On.get(i)||{};d.i=a,n.On.set(i,n.render(i,d,p,c,f))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.Sn=!1,n.$n(t,8,i,!0)}})(n,n.tn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},_=function(n,t,e,r,i,o,u){(u=n._n.get(t))||n._n.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.Mn.get(t))){var c=u[W+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.Sn&&t["s-rn"]&&S(n,t,i)}},x=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},T=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},W="wc-",P=function(n,t,e,r,i,o,u,f){try{i=new(o=n.tn(t).An),function(n,t,e,r,i,o){n.xn.set(r,e),n._n.has(e)||n._n.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type||t.state){var a=n._n.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&v(c=f[t.attr])&&(a[i]=C(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=C(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[W+i]=t.watchCallbacks.slice()),T(r,i,function s(t){return(t=n._n.get(n.xn.get(this)))&&t[i]},function l(e,r){(r=n.xn.get(this))&&(t.state||t.mutable)&&_(n,r,i,e,u)})}else t.elementRef?x(r,i,e):t.method&&x(e,i,r[i].bind(r))})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function c(n,t,e){if(t){var r=n.xn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.Wn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i);try{if(u=n.Pn.get(t)){for(f=0;f<u.length;f+=2)i[u[f]](u[f+1]);n.Pn.delete(t)}}catch(e){n.$n(e,2,t)}}catch(e){i={},n.$n(e,7,t,!0)}return n.Mn.set(t,i),i},N=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.tn(r)&&!n.Nn.has(r))return!1;if(!N(n,r))return!1}}return!0},R=function(n,t,e,r,i,o){if(n.wn.delete(t),(i=n.jn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.jn.delete(t)),n.Rn.length&&!n.wn.size)for(;o=n.Rn.shift();)o()},L=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},d=r[n]=r[n]||{},y=function(n,t,e){var r=new WeakMap,i={K:e,Z:!!e.documentElement.attachShadow,Ln:!1,Dn:function(n){return n.nodeType},X:function(n){return e.createElement(n)},Fn:function(n,t){return e.createElementNS(n,t)},Hn:function(n){return e.createTextNode(n)},qn:function(n){return e.createComment(n)},nn:function(n,t,e){return n.insertBefore(t,e)},Un:function(n){return n.remove()},Bn:function(n,t){return n.appendChild(t)},Cn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},In:function(n){return n.childNodes},Gn:function(n){return n.parentNode},Qn:function(n){return n.nextSibling},Yn:function(n){return n.previousSibling},Zn:function(n){return p(n.nodeName)},zn:function(n){return n.textContent},Jn:function(n,t){return n.textContent=t},Kn:function(n,t){return n.getAttribute(t)},Vn:function(n,t,e){return n.setAttribute(t,e)},rn:function(n,t){return n.removeAttribute(t)},in:function(n,t){return n.hasAttribute(t)},Xn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},nt:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.tt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},on:function(t,e,o,u,f,c,a,l,v,p){var d=t,h=o,y=r.get(t);p=e+u,y&&y[p]&&y[p](),"string"==typeof a?d=i.nt(t,a):"object"==typeof a?d=a:(v=e.split(":")).length>1&&(d=i.nt(t,v[0]),e=v[1]),d&&((v=e.split(".")).length>1&&(e=v[0],h=function(n){n.keyCode===s[v[1]]&&o(n)}),l=i.Ln?{capture:!!f,passive:!!c}:!!f,n.ael(d,e,h,l),y||r.set(t,y={}),y[p]=function(){d&&n.rel(d,e,h,l),y[p]=null})},un:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},et:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},tt:function(n,t){return(t=i.Gn(n))&&11===i.Dn(t)?t.host:t},rt:function(n,t,e,r){return n.setAttributeNS(t,e,r)},it:function(n,t){return n.attachShadow(t)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Ln=!0}}))}catch(n){}return i}(d,r,i),w=y.K.documentElement,b=r["s-defined"]=r["s-defined"]||{},k={J:y,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.ot.has(e)||(n.ot.set(e,!0),function r(n,t){var e=n.tn(t);e.ln&&e.ln.forEach(function(e){e.dn||n.J.on(t,e.vn,function r(n,t,e,i){return function(r){(i=n.Mn.get(t))?i[e](r):((i=n.Pn.get(t)||[]).push(e,r),n.Pn.set(t,i))}}(n,t,e.pn),1,e.yn,e.hn)})}(n,e)),n.gn.delete(e),n.Nn.has(e)||(n.ut=!0,n.wn.add(e),n.Nn.set(e,!0),function(n,t,e){for(e=t;e=n.J.tt(e);)if(n.ft(e)){n.ct.has(t)||(n.jn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.kn.set(e,function(n,t,e,r,i){if(e.mode||(e.mode=n.Xn(e)),e["s-cr"]||n.Kn(e,"ssrv")||n.Z&&1===t.Y||(e["s-cr"]=n.Hn(""),e["s-cr"]["s-cn"]=!0,n.nn(e,e["s-cr"],n.In(e)[0])),!n.Z&&1===t.Y)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e)}catch(n){}return 1===t.Y&&n.Z&&!e.shadowRoot&&n.it(e,{mode:"open"}),r={Tn:{}},t.en&&Object.keys(t.en).forEach(function(o){(i=t.en[o].fn)&&(r.Tn[i]=n.Kn(e,i))}),r}(n.J,t,e)),n.at(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.st&&function(n,t){for(;t;){if(!n.Gn(t))return 9!==n.Dn(t);t=n.Gn(t)}}(n.J,t)&&(n.gn.set(t,!0),R(n,t),M(n.On.get(t),!0),n.J.un(t),n.ot.delete(t),n.l&&n.l.removeHost(t),[n.jn,n.lt,n.kn].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(N(n,t)&&(i=n.Mn.get(t))&&!n.gn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ct.set(t,!0),(u=n.vt.has(t))||(n.vt.set(t,!0),t["s-ld"]=void 0,n.J.Cn(t,e));try{M(n.On.get(t)),(o=n.lt.get(t))&&(o.forEach(function(n){return n(t)}),n.lt.delete(t)),!u&&i.componentDidLoad&&i.componentDidLoad()}catch(e){n.$n(e,4,t)}R(n,t)}})(n,this,r)},e.forceUpdate=function(){S(n,this,i)},t.en){var o=Object.entries(t.en),u={};o.forEach(function(n){var t=n[0],e=n[1].fn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[p(e)];o&&(t[o]=(null!==i||"boolean"!=typeof t[o])&&i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1],u=o.cn;3&u?T(e,i,function t(){return(n._n.get(this)||{})[i]},function t(e){_(n,this,i,C(o.sn,e),r)}):32===u&&x(e,i,h)})}(n,0,e,i)}}(k,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.en).map(function(n){return n.fn}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},tn:function(n){return a[y.Zn(n)]},pt:function(n){return t[n]},isClient:!0,ft:function(n){return!(!b[y.Zn(n)]&&!k.tn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=j(d,r),at:function(n,t){var e=!y.Z,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.An=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Y,e.style,e.styleMode)}catch(t){console.error(t),n.An=function i(){}}S(k,t,f)})},Sn:!1,mn:!1,st:!1,En:l,jn:new WeakMap,V:new WeakMap,Nn:new WeakMap,ot:new WeakMap,vt:new WeakMap,ct:new WeakMap,xn:new WeakMap,kn:new WeakMap,Mn:new WeakMap,gn:new WeakMap,bn:new WeakMap,lt:new WeakMap,Pn:new WeakMap,On:new WeakMap,_n:new WeakMap,wn:new Set,Rn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.enableListener=function(n,t,e,r,i){return function o(n,t,e,r,i,u){if(t){var f=n.xn.get(t),c=n.tn(f);if(c&&c.ln)if(r){var a=c.ln.find(function(n){return n.vn===e});a&&n.J.on(f,e,function(n){return t[a.pn](n)},1,a.yn,void 0===u?a.hn:!!u,i)}else n.J.un(f,e,1)}}(k,n,t,e,r,i)},k.Wn=t.emit=function(n,e,r){return y.et(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=e,d.Context=t,d.onReady=function(){return new Promise(function(n){return k.queue.write(function(){return k.wn.size?k.Rn.push(n):n()})})},k.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,l,p,d,h,y,w,b,M){if(b=l.vchildren[p],e||(o=!0,"slot"===b.vtag&&(r&&t.Cn(d,r+"-s"),b.vchildren?b.dt=!0:b.ht=!0)),v(b.vtext))b.i=t.Hn(b.vtext);else if(b.ht)b.i=t.Hn("");else{if(y=b.i=g||"svg"===b.vtag?t.Fn("http://www.w3.org/2000/svg",b.vtag):t.X(b.dt?"slot-fb":b.vtag),n.ft(y)&&n.ct.delete(c),g="svg"===b.vtag||"foreignObject"!==b.vtag&&g,m(n,null,b,g),v(r)&&y["s-si"]!==r&&t.Cn(y,y["s-si"]=r),b.vchildren)for(h=0;h<b.vchildren.length;++h)(w=a(i,b,h,y))&&t.Bn(y,w);"svg"===b.vtag&&(g=!1)}return b.i["s-hn"]=f,(b.dt||b.ht)&&(b.i["s-sr"]=!0,b.i["s-cr"]=u,b.i["s-sn"]=b.vname||"",(M=i&&i.vchildren&&i.vchildren[p])&&M.vtag===b.vtag&&i.i&&s(i.i)),b.i},s=function(e,r,i,u){n.st=!0;var c=t.In(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Un(u),t.nn(y(u),u,h(u)),t.Un(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.st=!1},l=function(n,e,r,i,o,u,c,s){var l=n["s-cr"];for((c=l&&t.Gn(l)||n).shadowRoot&&t.Zn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=v(i[o].vtext)?t.Hn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.nn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)v(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Un(o["s-ol"]):s(o,!0),t.Un(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Gn(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;g=r.i&&v(t.tt(r.i))&&void 0!==r.i.ownerSVGElement,g="svg"===r.vtag||"foreignObject"!==r.vtag&&g,v(r.vtext)?(i=o["s-cr"])?t.Jn(t.Gn(i),r.vtext):e.vtext!==r.vtext&&t.Jn(o,r.vtext):("slot"!==r.vtag&&m(n,e,r,g),v(u)&&v(f)?function(n,e,r,i,o,u,f,c){for(var b=0,m=0,g=e.length-1,M=e[0],j=e[g],k=i.length-1,$=i[0],A=i[k];b<=g&&m<=k;)if(null==M)M=e[++b];else if(null==j)j=e[--g];else if(null==$)$=i[++m];else if(null==A)A=i[--k];else if(d(M,$))w(M,$),M=e[++b],$=i[++m];else if(d(j,A))w(j,A),j=e[--g],A=i[--k];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(M.i)),w(M,A),t.nn(n,M.i,t.Qn(j.i)),M=e[++b],A=i[--k];else if(d(j,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(j.i)),w(j,$),t.nn(n,j.i,M.i),j=e[--g],$=i[++m];else{for(o=null,u=b;u<=g;++u)if(e[u]&&v(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}v(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.nn(y(M.i),f,h(M.i))}b>g?l(n,null==i[k+1]?null:i[k+1].i,r,i,m,k):m>k&&p(e,b,g)}(o,u,r,f):v(f)?(v(e.vtext)&&t.Jn(o,""),l(o,null,r,f,0,f.length-1)):v(u)&&p(u,0,u.length-1)),g&&"svg"===r.vtag&&(g=!1)},b=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.In(n)).length;i<o;i++)if(e=r[i],1===t.Dn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Dn(r[u]),""!==f){if(1===c&&f===t.Kn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.zn(r[u]).trim()){e.hidden=!0;break}b(e)}},M=[],j=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.In(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.In(t.Gn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Dn(o))||8===l)&&""===s||1===l&&null===t.Kn(o,"slot")&&""===s||1===l&&t.Kn(o,"slot")===s)&&(M.some(function(n){return n.yt===o})||(i=!0,o["s-sn"]=s,M.push({wt:r,yt:o})));1===t.Dn(r)&&j(r)}};return function(a,s,l,v,p,d,h,y,m,g,k,$){if(c=a,f=t.Zn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(j(l.i),h=0;h<M.length;h++)(y=M[h]).yt["s-ol"]||((m=t.Hn(""))["s-nr"]=y.yt,t.nn(t.Gn(y.yt),y.yt["s-ol"]=m,y.yt));for(n.st=!0,h=0;h<M.length;h++){for(y=M[h],k=t.Gn(y.wt),$=t.Qn(y.wt),m=y.yt["s-ol"];m=t.Yn(m);)if((g=m["s-nr"])&&g&&g["s-sn"]===y.yt["s-sn"]&&k===t.Gn(g)&&(g=t.Qn(g))&&g&&!g["s-nr"]){$=g;break}(!$&&k!==t.Gn(y.yt)||t.Qn(y.yt)!==$)&&y.yt!==$&&(t.Un(y.yt),t.nn(k,y.yt,$))}n.st=!1}return i&&b(l.i),M.length=0,l}}(k,y),w["s-ld"]=[],w["s-rn"]=!0,w["s-init"]=function(){k.ct.set(w,d.loaded=k.mn=!0),y.et(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.tn(t);if(r)if(n.ct.has(t))e(t);else{var i=n.lt.get(t)||[];i.push(e),n.lt.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(k,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,k},D={},F=!1;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/deckdeckgo/dist/esm/es5/deckdeckgo.define.js":
/*!*******************************************************************!*\
  !*** ./node_modules/deckdeckgo/dist/esm/es5/deckdeckgo.define.js ***!
  \*******************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _deckdeckgo_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckdeckgo.core.js */ "./node_modules/deckdeckgo/dist/esm/es5/deckdeckgo.core.js");
/* harmony import */ var _deckdeckgo_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deckdeckgo.components.js */ "./node_modules/deckdeckgo/dist/esm/es5/deckdeckgo.components.js");

// deckdeckgo: Custom Elements Define Library, ES Module/es5 Target




function defineCustomElements(win, opts) {
  return Object(_deckdeckgo_core_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElement"])(win, _deckdeckgo_components_js__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS"], opts);
}


/***/ }),

/***/ "./node_modules/deckdeckgo/dist/loader/index.js":
/*!******************************************************!*\
  !*** ./node_modules/deckdeckgo/dist/loader/index.js ***!
  \******************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_es5_deckdeckgo_define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/es5/deckdeckgo.define.js */ "./node_modules/deckdeckgo/dist/esm/es5/deckdeckgo.define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_es5_deckdeckgo_define_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"]; });



/***/ }),

/***/ "./node_modules/ionicons/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./uqr5vpdq.entry.js": [
		"./node_modules/ionicons/dist/esm/es5/build/uqr5vpdq.entry.js",
		171
	],
	"./uqr5vpdq.sc.entry.js": [
		"./node_modules/ionicons/dist/esm/es5/build/uqr5vpdq.sc.entry.js",
		172
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/ionicons/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/ionicons/dist/esm/es5/ionicons.components.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/es5/ionicons.components.js ***!
  \*******************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
// ionicons: Host Data, ES Module/es5 Target
var COMPONENTS = [["ion-icon","uqr5vpdq",1,[["ariaLabel",2,1,"aria-label",2],["color",1,0,1,2],["doc",4,0,0,0,"document"],["el",64],["flipRtl",1,0,"flip-rtl",4],["icon",1,0,1,2],["ios",1,0,1,2],["isServer",4,0,0,0,"isServer"],["isVisible",16],["lazy",1,0,1,4],["md",1,0,1,2],["mode",1,0,1,2],["name",1,0,1,2],["resourcesUrl",4,0,0,0,"resourcesUrl"],["size",1,0,1,2],["src",1,0,1,2],["svgContent",16],["win",4,0,0,0,"window"]],1]]

/***/ }),

/***/ "./node_modules/ionicons/dist/esm/es5/ionicons.core.js":
/*!*************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/es5/ionicons.core.js ***!
  \*************************************************************/
/*! exports provided: defineCustomElement, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return e; });
/*!
 * ionicons: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)k.push(arguments[f]);for(;k.length>0;){var c=k.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)k.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&k.push(f);t.class=k.join(" "),k.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],$):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"ionicons";return F||(F=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),D[s].u(function i(n){var t=A(n),e=t.s,r=p(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return __webpack_require__("./node_modules/ionicons/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$")("./"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!D[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),D[s]=L(s,u,n,i,c,o,r)}if(window.customStyleShim)return D[s].l=window.customStyleShim,D[s].l.initShim().then(t);t()})}undefined&&undefined.v;var i=undefined&&undefined.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=undefined&&undefined.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.M.pop(),f.g.pop();continue;default:if(!(o=(o=f.g).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.M.push(e);break}o[2]&&f.M.pop(),f.g.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,j:function(){if(1&o[0])throw o[1];return o[1]},g:[],M:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=undefined,f=function(){};function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];g(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===W?s(n,t.C):t.A===x?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){g(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.O);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.S&&n.S(n.C),p(n)}function s(n,t){n.A===T&&(n.C=t,n.A=W,0!==n._.length&&g(p,n))}function l(n,t){n.A===T&&(n.A=x,n.C=t,g(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.S=null,i[o]=t,i[o+W]=e,i[o+x]=r,0===o&&n.A&&g(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===T&&(i&&f?c(t,o):a?l(t,u):n===W?s(t,o):n===x&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,m=void 0,M=void 0,g=function(n,t){O[b]=n,O[b+1]=t,2===(b+=2)&&(M?M(e):S())},j=(y=void 0!==n?n:void 0)||{},k=j.MutationObserver||j.WebKitMutationObserver;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"=="function"?function(){try{var n=Function("return this")().T("vertx");return void 0!==(m=n.W||n.P)?function(){m(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),T=void 0,W=1,x=2,P={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===T&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==T?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===T&&(this.L--,n===x?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(W,t,n)},function(n){return e.H(x,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.U=function(n){M=n},L.B=function(n){g=n},L.I=g,L.G=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.G(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(__webpack_require__.e(/*! import() */ 253).then(__webpack_require__.bind(null, /*! ./polyfills/dom.js */ "./node_modules/ionicons/dist/esm/es5/polyfills/dom.js"))),"function"==typeof Object.assign&&Object.entries||t.push(__webpack_require__.e(/*! import() */ 255).then(__webpack_require__.bind(null, /*! ./polyfills/object.js */ "./node_modules/ionicons/dist/esm/es5/polyfills/object.js"))),Array.prototype.find&&Array.prototype.includes||t.push(__webpack_require__.e(/*! import() */ 251).then(__webpack_require__.bind(null, /*! ./polyfills/array.js */ "./node_modules/ionicons/dist/esm/es5/polyfills/array.js"))),String.prototype.startsWith&&String.prototype.endsWith||t.push(__webpack_require__.e(/*! import() */ 256).then(__webpack_require__.bind(null, /*! ./polyfills/string.js */ "./node_modules/ionicons/dist/esm/es5/polyfills/string.js"))),n.fetch||t.push(__webpack_require__.e(/*! import() */ 254).then(__webpack_require__.bind(null, /*! ./polyfills/fetch.js */ "./node_modules/ionicons/dist/esm/es5/polyfills/fetch.js"))),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(__webpack_require__.e(/*! import() */ 252).then(__webpack_require__.bind(null, /*! ./polyfills/css-shim.js */ "./node_modules/ionicons/dist/esm/es5/polyfills/css-shim.js"))),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(__webpack_require__.e(/*! import() */ 257).then(__webpack_require__.bind(null, /*! ./polyfills/url.js */ "./node_modules/ionicons/dist/esm/es5/polyfills/url.js"))),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.Y||1===r.Y&&!t.J.Z)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.K.head;if(e.Z)if(1===r.Y)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.V.get(f);if(s||t.V.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.X("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.nn(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},l=function(n){return null!=n},v=function(n){return n.toLowerCase()},p=function(n){return v(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},d=function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(h,v(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(h,v(t),e):n.setAttribute(t,e))},h="http://www.w3.org/1999/xlink",y=function(n,t,e,r,i,o,u){if("class"!==e||o)if("style"===e){for(var f in r)i&&null!=i[f]||(/-/.test(f)?t.style.removeProperty(f):t.style[f]="");for(var f in i)r&&i[f]===r[f]||(/-/.test(f)?t.style.setProperty(f,i[f]):t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var c=n.tn(t);c&&c.en&&c.en[e]?(b(t,e,i),u&&c.en[e].rn&&d(t,c.en[e].in,i,4===c.en[e].on)):"ref"!==e&&(b(t,e,null==i?"":i),null!=i&&!1!==i||n.J.un(t,e))}else null!=i&&"key"!==e?d(t,e,i):(o||n.J.fn(t,e)&&(null==i||!1===i))&&n.J.un(t,e);else e=v(e)in t?v(e.substring(2)):v(e[2])+e.substring(3),i?i!==r&&n.J.cn(t,e,i,0):n.J.an(t,e,0);else if(r!==i){var a=w(r),s=w(i),l=a.filter(function(n){return!s.includes(n)}),p=w(t.className).filter(function(n){return!l.includes(n)}),h=s.filter(function(n){return!a.includes(n)&&!p.includes(n)});p.push.apply(p,h),t.className=p.join(" ")}},w=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},b=function(n,t,e){try{n[t]=e}catch(n){}},m=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||y(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||y(n,o,i,u[i],f[i],r,e.o)},M=!1,g=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){g(n,t)}))},j=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},k=[],$={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},A=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{in:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={sn:e[1],rn:!!e[2],in:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,on:e[4]};return{t:r,s:i,en:Object.assign({},c),Y:u,ln:f?f.map(E):void 0}},E=function(n){return{vn:n[0],pn:n[1],dn:!!n[2],hn:!!n[3],yn:!!n[4]}},C=function(n,t){return l(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},O=function(n,t,e){n.wn.add(t),n.bn.has(t)||(n.bn.set(t,!0),n.mn?n.queue.write(function(){return S(n,t,e)}):n.queue.tick(function(){return S(n,t,e)}))},S=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:if(n.bn.delete(r),n.Mn.has(r))return[3,12];if(a=n.gn.get(r))return[3,6];if((s=n.jn.get(r))&&!s["s-rn"])return(s["s-rc"]=s["s-rc"]||[]).push(function(){S(n,r,f)}),[2];if(!(a=P(n,r,n.kn.get(r),f)))return[3,5];o.label=1;case 1:return o.g.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.j(),o.label=3;case 3:return[3,5];case 4:return i=o.j(),n.$n(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.g.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.j(),o.label=9;case 9:return[3,11];case 10:return u=o.j(),n.$n(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u,f=r.An.host,c=r.An.encapsulation,a="shadow"===c&&n.J.Z,s=i;if(u=function(n,t,e){return n&&Object.keys(n).forEach(function(r){n[r].reflectToAttr&&((e=e||{})[r]=t[r])}),e}(r.An.properties,o),a&&(s=i.shadowRoot),!i["s-rn"]){n.En(n,n.J,r,i);var l=i["s-sc"];l&&(n.J.Cn(i,t(l,!0)),"scoped"===c&&n.J.Cn(i,t(l)))}if(o.render||o.hostData||f||u){n.On=!0;var v=o.render&&o.render(),p=void 0;p=o.hostData&&o.hostData(),u&&(p=p?Object.assign(p,u):u),n.On=!1;var d=e(null,p,v),h=n.Sn.get(i)||{};h.i=s,d.o=!0,n.Sn.set(i,n.render(i,h,d,a,c))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.On=!1,n.$n(t,8,i,!0)}})(n,n.tn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},_=function(n,t,e,r,i,o,u){(u=n._n.get(t))||n._n.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.gn.get(t))){var c=u[x+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.On&&t["s-rn"]&&O(n,t,i)}},T=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},W=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},x="wc-",P=function(n,t,e,r,i,o){try{i=new(o=n.tn(t).An),function(n,t,e,r,i,o){n.Tn.set(r,e),n._n.has(e)||n._n.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type||t.state){var a=n._n.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Wn)&&l(c=f[t.attr])&&(a[i]=C(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=C(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[x+i]=t.watchCallbacks.slice()),W(r,i,function s(t){return(t=n._n.get(n.Tn.get(this)))&&t[i]},function v(e,r){(r=n.Tn.get(this))&&(t.state||t.mutable)&&_(n,r,i,e,u)})}else if(t.elementRef)T(r,i,e);else if(t.context){var p=n.xn(t.context);void 0!==p&&T(r,i,p.getContext&&p.getContext(e)||p)}})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r)}catch(e){i={},n.$n(e,7,t,!0)}return n.gn.set(t,i),i},N=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.tn(r)&&!n.Pn.has(r))return!1;if(!N(n,r))return!1}}return!0},R=function(n,t,e,r,i,o){if(n.wn.delete(t),(i=n.jn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.jn.delete(t)),n.Nn.length&&!n.wn.size)for(;o=n.Nn.shift();)o()},L=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},p=r[n]=r[n]||{},d=function(n,t,e){var r=new WeakMap,i={K:e,Z:!!e.documentElement.attachShadow,Rn:!1,Ln:function(n){return n.nodeType},X:function(n){return e.createElement(n)},Dn:function(n,t){return e.createElementNS(n,t)},Fn:function(n){return e.createTextNode(n)},Hn:function(n){return e.createComment(n)},nn:function(n,t,e){return n.insertBefore(t,e)},qn:function(n){return n.remove()},Un:function(n,t){return n.appendChild(t)},Cn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Bn:function(n){return n.childNodes},In:function(n){return n.parentNode},Gn:function(n){return n.nextSibling},Qn:function(n){return n.previousSibling},Yn:function(n){return v(n.nodeName)},Zn:function(n){return n.textContent},zn:function(n,t){return n.textContent=t},Jn:function(n,t){return n.getAttribute(t)},Kn:function(n,t,e){return n.setAttribute(t,e)},un:function(n,t){return n.removeAttribute(t)},fn:function(n,t){return n.hasAttribute(t)},Vn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Xn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.nt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},cn:function(t,e,o,u,f,c,a,s,l,v){var p=t,d=o,h=r.get(t);v=e+u,h&&h[v]&&h[v](),"object"==typeof a&&(p=a),p&&(s=i.Rn?{capture:!!f,passive:!!c}:!!f,n.ael(p,e,d,s),h||r.set(t,h={}),h[v]=function(){p&&n.rel(p,e,d,s),h[v]=null})},an:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},tt:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},nt:function(n,t){return(t=i.In(n))&&11===i.Ln(t)?t.host:t},et:function(n,t,e,r){return n.setAttributeNS(t,e,r)},rt:function(n,t){return n.attachShadow(t)}};return"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)}),i}(p,r,i),h=d.K.documentElement,y=r["s-defined"]=r["s-defined"]||{},w={J:d,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.Mn.delete(e),n.Pn.has(e)||(n.it=!0,n.wn.add(e),n.Pn.set(e,!0),function(n,t,e){for(e=t;e=n.J.nt(e);)if(n.ot(e)){n.ut.has(t)||(n.jn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.kn.set(e,function(n,t,e,r,i){return e.mode||(e.mode=n.Vn(e)),e["s-cr"]||n.Jn(e,"ssrv")||n.Z&&1===t.Y||(e["s-cr"]=n.Fn(""),e["s-cr"]["s-cn"]=!0,n.nn(e,e["s-cr"],n.Bn(e)[0])),n.Z||1!==t.Y||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e),1===t.Y&&n.Z&&!e.shadowRoot&&n.rt(e,{mode:"open"}),r={Wn:{}},t.en&&Object.keys(t.en).forEach(function(o){(i=t.en[o].in)&&(r.Wn[i]=n.Jn(e,i))}),r}(n.J,t,e)),n.ft(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){if(!n.ct&&function(n,t){for(;t;){if(!n.In(t))return 9!==n.Ln(t);t=n.In(t)}}(n.J,t)){n.Mn.set(t,!0),R(n,t),g(n.Sn.get(t),!0);var e=n.gn.get(t);e&&e.componentDidUnload&&e.componentDidUnload(),n.J.an(t),n.at.delete(t),n.l&&n.l.removeHost(t),[n.jn,n.st,n.kn].forEach(function(n){return n.delete(t)})}})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o){if(N(n,t)&&n.gn.get(t)&&!n.Mn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ut.set(t,!0),n.lt.has(t)||(n.lt.set(t,!0),t["s-ld"]=void 0,n.J.Cn(t,e));try{g(n.Sn.get(t)),(o=n.st.get(t))&&(o.forEach(function(n){return n(t)}),n.st.delete(t))}catch(e){n.$n(e,4,t)}R(n,t)}})(n,this,r)},e.forceUpdate=function(){O(n,this,i)},t.en){var o=Object.entries(t.en),u={};o.forEach(function(n){var t=n[0],e=n[1].in;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[v(e)];o&&(t[o]=i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1];3&o.sn&&W(e,i,function t(){return(n._n.get(this)||{})[i]},function t(e){_(n,this,i,C(o.on,e),r)})})}(n,0,e,i)}}(w,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.en).map(function(n){return n.in}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},tn:function(n){return a[d.Yn(n)]},xn:function(n){return t[n]},isClient:!0,ot:function(n){return!(!y[d.Yn(n)]&&!w.tn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=j(p,r),ft:function(n,t){var e=!d.Z,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.An=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Y,e.style,e.styleMode)}catch(t){console.error(t),n.An=function i(){}}O(w,t,f)})},On:!1,mn:!1,ct:!1,En:s,jn:new WeakMap,V:new WeakMap,Pn:new WeakMap,at:new WeakMap,lt:new WeakMap,ut:new WeakMap,Tn:new WeakMap,kn:new WeakMap,gn:new WeakMap,Mn:new WeakMap,bn:new WeakMap,st:new WeakMap,vt:new WeakMap,Sn:new WeakMap,_n:new WeakMap,wn:new Set,Nn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,p.h=e,p.Context=t,p.onReady=function(){return new Promise(function(n){return w.queue.write(function(){return w.wn.size?w.Nn.push(n):n()})})},w.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,v,p,d,h,y,w,b,g){if(b=v.vchildren[p],e||(o=!0,"slot"===b.vtag&&(r&&t.Cn(d,r+"-s"),b.vchildren?b.pt=!0:b.dt=!0)),l(b.vtext))b.i=t.Fn(b.vtext);else if(b.dt)b.i=t.Fn("");else{if(y=b.i=M||"svg"===b.vtag?t.Dn("http://www.w3.org/2000/svg",b.vtag):t.X(b.pt?"slot-fb":b.vtag),n.ot(y)&&n.ut.delete(c),M="svg"===b.vtag||"foreignObject"!==b.vtag&&M,m(n,null,b,M),l(r)&&y["s-si"]!==r&&t.Cn(y,y["s-si"]=r),b.vchildren)for(h=0;h<b.vchildren.length;++h)(w=a(i,b,h,y))&&t.Un(y,w);"svg"===b.vtag&&(M=!1)}return b.i["s-hn"]=f,(b.pt||b.dt)&&(b.i["s-sr"]=!0,b.i["s-cr"]=u,b.i["s-sn"]=b.vname||"",(g=i&&i.vchildren&&i.vchildren[p])&&g.vtag===b.vtag&&i.i&&s(i.i)),b.i},s=function(e,r,i,u){n.ct=!0;var c=t.Bn(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.qn(u),t.nn(y(u),u,h(u)),t.qn(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.ct=!1},v=function(n,e,r,i,o,u,c,s){var v=n["s-cr"];for((c=v&&t.In(v)||n).shadowRoot&&t.Yn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=l(i[o].vtext)?t.Fn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.nn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)l(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.qn(o["s-ol"]):s(o,!0),t.qn(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.In(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;M=r.i&&l(t.nt(r.i))&&void 0!==r.i.ownerSVGElement,M="svg"===r.vtag||"foreignObject"!==r.vtag&&M,l(r.vtext)?(i=o["s-cr"])?t.zn(t.In(i),r.vtext):e.vtext!==r.vtext&&t.zn(o,r.vtext):("slot"!==r.vtag&&m(n,e,r,M),l(u)&&l(f)?function(n,e,r,i,o,u,f,c){for(var b=0,m=0,M=e.length-1,g=e[0],j=e[M],k=i.length-1,$=i[0],A=i[k];b<=M&&m<=k;)if(null==g)g=e[++b];else if(null==j)j=e[--M];else if(null==$)$=i[++m];else if(null==A)A=i[--k];else if(d(g,$))w(g,$),g=e[++b],$=i[++m];else if(d(j,A))w(j,A),j=e[--M],A=i[--k];else if(d(g,A))"slot"!==g.vtag&&"slot"!==A.vtag||s(t.In(g.i)),w(g,A),t.nn(n,g.i,t.Gn(j.i)),g=e[++b],A=i[--k];else if(d(j,$))"slot"!==g.vtag&&"slot"!==A.vtag||s(t.In(j.i)),w(j,$),t.nn(n,j.i,g.i),j=e[--M],$=i[++m];else{for(o=null,u=b;u<=M;++u)if(e[u]&&l(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}l(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.nn(y(g.i),f,h(g.i))}b>M?v(n,null==i[k+1]?null:i[k+1].i,r,i,m,k):m>k&&p(e,b,M)}(o,u,r,f):l(f)?(l(e.vtext)&&t.zn(o,""),v(o,null,r,f,0,f.length-1)):l(u)&&p(u,0,u.length-1)),M&&"svg"===r.vtag&&(M=!1)},b=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Bn(n)).length;i<o;i++)if(e=r[i],1===t.Ln(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Ln(r[u]),""!==f){if(1===c&&f===t.Jn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.Zn(r[u]).trim()){e.hidden=!0;break}b(e)}},g=[],j=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Bn(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Bn(t.In(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Ln(o))||8===l)&&""===s||1===l&&null===t.Jn(o,"slot")&&""===s||1===l&&t.Jn(o,"slot")===s)&&(g.some(function(n){return n.ht===o})||(i=!0,o["s-sn"]=s,g.push({yt:r,ht:o})));1===t.Ln(r)&&j(r)}};return function(a,s,l,v,p,d,h,y,m,M,k,$){if(c=a,f=t.Yn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(j(l.i),h=0;h<g.length;h++)(y=g[h]).ht["s-ol"]||((m=t.Fn(""))["s-nr"]=y.ht,t.nn(t.In(y.ht),y.ht["s-ol"]=m,y.ht));for(n.ct=!0,h=0;h<g.length;h++){for(y=g[h],k=t.In(y.yt),$=t.Gn(y.yt),m=y.ht["s-ol"];m=t.Qn(m);)if((M=m["s-nr"])&&M&&M["s-sn"]===y.ht["s-sn"]&&k===t.In(M)&&(M=t.Gn(M))&&M&&!M["s-nr"]){$=M;break}(!$&&k!==t.In(y.ht)||t.Gn(y.ht)!==$)&&y.ht!==$&&(t.qn(y.ht),t.nn(k,y.ht,$))}n.ct=!1}return i&&b(l.i),g.length=0,l}}(w,d),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=function(){w.ut.set(h,p.loaded=w.mn=!0),d.tt(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.tn(t);if(r)if(n.ut.has(t))e(t);else{var i=n.st.get(t)||[];i.push(e),n.st.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(w,p,r,r["s-apps"],r["s-cr"]),p.initialized=!0,w},D={},F=!1;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ionicons/dist/esm/es5/ionicons.define.js":
/*!***************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/es5/ionicons.define.js ***!
  \***************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _ionicons_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionicons.core.js */ "./node_modules/ionicons/dist/esm/es5/ionicons.core.js");
/* harmony import */ var _ionicons_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionicons.components.js */ "./node_modules/ionicons/dist/esm/es5/ionicons.components.js");

// ionicons: Custom Elements Define Library, ES Module/es5 Target




function defineCustomElements(win, opts) {
  return Object(_ionicons_core_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElement"])(win, _ionicons_components_js__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS"], opts);
}


/***/ }),

/***/ "./node_modules/ionicons/dist/loader/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ionicons/dist/loader/index.js ***!
  \****************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_es5_ionicons_define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/es5/ionicons.define.js */ "./node_modules/ionicons/dist/esm/es5/ionicons.define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_es5_ionicons_define_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"]; });



/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/web-social-share/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./6xmdnp1u.entry.js": [
		"./node_modules/web-social-share/dist/esm/es5/build/6xmdnp1u.entry.js",
		173
	],
	"./6xmdnp1u.sc.entry.js": [
		"./node_modules/web-social-share/dist/esm/es5/build/6xmdnp1u.sc.entry.js",
		174
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/web-social-share/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/web-social-share/dist/esm/es5/websocialshare.components.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm/es5/websocialshare.components.js ***!
  \*********************************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
// websocialshare: Host Data, ES Module/es5 Target
var COMPONENTS = [["web-social-share","6xmdnp1u",1,[["el",64],["share",1],["show",2,0,1,4]],1,[["socialShareLoaded","moveSlotOnLoad"],["selected","hide"]]],["web-social-share-target","6xmdnp1u",1,[["displayNames",1,0,"display-names",4],["share",1]],1]]

/***/ }),

/***/ "./node_modules/web-social-share/dist/esm/es5/websocialshare.core.js":
/*!***************************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm/es5/websocialshare.core.js ***!
  \***************************************************************************/
/*! exports provided: defineCustomElement, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return e; });
/*!
 * websocialshare: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)j.push(arguments[f]);for(;j.length>0;){var c=j.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)j.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&j.push(f);t.class=j.join(" "),j.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],k):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"websocialshare";return R||(R=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),N[s].u(function i(n){var t=$(n),e=t.s,r=d(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return __webpack_require__("./node_modules/web-social-share/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$")("./"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!N[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),N[s]=P(s,u,n,i,c,o,r)}if(window.customStyleShim)return N[s].l=window.customStyleShim,N[s].l.initShim().then(t);t()})}undefined&&undefined.v;var i=undefined&&undefined.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=undefined&&undefined.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,j:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=undefined,f=function(){};function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===T?s(n,t.C):t.A===W?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===x&&(n.C=t,n.A=T,0!==n._.length&&M(p,n))}function l(n,t){n.A===x&&(n.A=W,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,m=void 0,g=void 0,M=function(n,t){S[b]=n,S[b+1]=t,2===(b+=2)&&(g?g(e):O())},j=(y=void 0!==n?n:void 0)||{},k=j.MutationObserver||j.WebKitMutationObserver;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"=="function"?function(){try{var n=Function("return this")().T("vertx");return void 0!==(m=n.W||n.P)?function(){m(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===x&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==x?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===x&&(this.L--,n===W?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(T,t,n)},function(n){return e.H(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.U=function(n){g=n},L.B=function(n){M=n},L.I=M,L.G=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.G(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(__webpack_require__.e(/*! import() */ 260).then(__webpack_require__.bind(null, /*! ./polyfills/dom.js */ "./node_modules/web-social-share/dist/esm/es5/polyfills/dom.js"))),"function"==typeof Object.assign&&Object.entries||t.push(__webpack_require__.e(/*! import() */ 262).then(__webpack_require__.bind(null, /*! ./polyfills/object.js */ "./node_modules/web-social-share/dist/esm/es5/polyfills/object.js"))),Array.prototype.find&&Array.prototype.includes||t.push(__webpack_require__.e(/*! import() */ 258).then(__webpack_require__.bind(null, /*! ./polyfills/array.js */ "./node_modules/web-social-share/dist/esm/es5/polyfills/array.js"))),String.prototype.startsWith&&String.prototype.endsWith||t.push(__webpack_require__.e(/*! import() */ 263).then(__webpack_require__.bind(null, /*! ./polyfills/string.js */ "./node_modules/web-social-share/dist/esm/es5/polyfills/string.js"))),n.fetch||t.push(__webpack_require__.e(/*! import() */ 261).then(__webpack_require__.bind(null, /*! ./polyfills/fetch.js */ "./node_modules/web-social-share/dist/esm/es5/polyfills/fetch.js"))),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(__webpack_require__.e(/*! import() */ 259).then(__webpack_require__.bind(null, /*! ./polyfills/css-shim.js */ "./node_modules/web-social-share/dist/esm/es5/polyfills/css-shim.js"))),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(__webpack_require__.e(/*! import() */ 264).then(__webpack_require__.bind(null, /*! ./polyfills/url.js */ "./node_modules/web-social-share/dist/esm/es5/polyfills/url.js"))),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.Y||1===r.Y&&!t.J.Z)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.K.head;if(e.Z)if(1===r.Y)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.V.get(f);if(s||t.V.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.X("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.nn(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},v=function(n){return null!=n},p=function(n){return n.toLowerCase()},d=function(n){return p(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},h=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.tn(t);f&&f.en&&f.en[e]?w(t,e,i):"ref"!==e&&(w(t,e,null==i?"":i),null!=i&&!1!==i||n.J.rn(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",p(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",p(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.J.in(t,e)&&(null==i||!1===i))&&n.J.rn(t,e);else e=p(e)in t?p(e.substring(2)):p(e[2])+e.substring(3),i?i!==r&&n.J.on(t,e,i,0):n.J.un(t,e,0);else if(r!==i){var c=y(r),a=y(i),s=c.filter(function(n){return!a.includes(n)}),l=y(t.className).filter(function(n){return!s.includes(n)}),v=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,v),t.className=l.join(" ")}},y=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},w=function(n,t,e){try{n[t]=e}catch(n){}},b=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||h(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||h(n,o,i,u[i],f[i],r,e.o)},m=!1,g=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){g(n,t)}))},M=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},j=[],k={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},$=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{fn:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={cn:e[1],an:!!e[2],fn:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,sn:e[4]};return{t:r,s:i,en:Object.assign({},c),Y:u,ln:f?f.map(A):void 0}},A=function(n){return{vn:n[0],pn:n[1],dn:!!n[2],hn:!!n[3],yn:!!n[4]}},E=function(n,t){return v(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},C=function(n,t,e){n.wn.add(t),n.bn.has(t)||(n.bn.set(t,!0),n.mn?n.queue.write(function(){return S(n,t,e)}):n.queue.tick(function(){return S(n,t,e)}))},S=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:return n.bn.delete(r),n.gn.has(r)?[3,12]:(a=n.Mn.get(r))?[3,6]:(s=n.jn.get(r))&&!s["s-rn"]?((s["s-rc"]=s["s-rc"]||[]).push(function(){S(n,r,f)}),[2]):(a=x(n,r,n.kn.get(r),f),[3,5]);case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.j(),o.label=3;case 3:return[3,5];case 4:return i=o.j(),n.$n(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.j(),o.label=9;case 9:return[3,11];case 10:return u=o.j(),n.$n(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.An.host,f=r.An.encapsulation,c="shadow"===f&&n.J.Z,a=i;if(c&&(a=i.shadowRoot),!i["s-rn"]){n.En(n,n.J,r,i);var s=i["s-sc"];s&&(n.J.Cn(i,t(s,!0)),"scoped"===f&&n.J.Cn(i,t(s)))}if(o.render||o.hostData||u){n.Sn=!0;var l,v=o.render&&o.render();l=o.hostData&&o.hostData(),n.Sn=!1;var p=e(null,l,v),d=n.On.get(i)||{};d.i=a,n.On.set(i,n.render(i,d,p,c,f))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.Sn=!1,n.$n(t,8,i,!0)}})(n,n.tn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},O=function(n,t,e,r,i,o,u){(u=n._n.get(t))||n._n.set(t,u={}),r!==u[e]&&(u[e]=r,n.Mn.get(t)&&!n.Sn&&t["s-rn"]&&C(n,t,i))},_=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},x=function(n,t,e,r,i,o,u,f){try{i=new(o=n.tn(t).An),function(n,t,e,r,i,o){n.xn.set(r,e),n._n.has(e)||n._n.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type){var a=n._n.get(e);!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&v(c=f[t.attr])&&(a[i]=E(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=E(t.type,e[i])),"mode"!==i&&delete e[i]),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),_(r,i,function s(t){return(t=n._n.get(n.xn.get(this)))&&t[i]},function l(e,r){(r=n.xn.get(this))&&t.mutable&&O(n,r,i,e,u)})}else t.elementRef&&(p=r,d=i,h=e,Object.defineProperty(p,d,{configurable:!0,value:h}));var p,d,h})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function c(n,t,e){if(t){var r=n.xn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.Wn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i);try{if(u=n.Pn.get(t)){for(f=0;f<u.length;f+=2)i[u[f]](u[f+1]);n.Pn.delete(t)}}catch(e){n.$n(e,2,t)}}catch(e){i={},n.$n(e,7,t,!0)}return n.Mn.set(t,i),i},T=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.tn(r)&&!n.Nn.has(r))return!1;if(!T(n,r))return!1}}return!0},W=function(n,t,e,r,i,o){if(n.wn.delete(t),(i=n.jn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.jn.delete(t)),n.Rn.length&&!n.wn.size)for(;o=n.Rn.shift();)o()},P=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},d=r[n]=r[n]||{},h=function(n,t,e){var r=new WeakMap,i={K:e,Z:!!e.documentElement.attachShadow,Ln:!1,Dn:function(n){return n.nodeType},X:function(n){return e.createElement(n)},Fn:function(n,t){return e.createElementNS(n,t)},Hn:function(n){return e.createTextNode(n)},qn:function(n){return e.createComment(n)},nn:function(n,t,e){return n.insertBefore(t,e)},Un:function(n){return n.remove()},Bn:function(n,t){return n.appendChild(t)},Cn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},In:function(n){return n.childNodes},Gn:function(n){return n.parentNode},Qn:function(n){return n.nextSibling},Yn:function(n){return n.previousSibling},Zn:function(n){return p(n.nodeName)},zn:function(n){return n.textContent},Jn:function(n,t){return n.textContent=t},Kn:function(n,t){return n.getAttribute(t)},Vn:function(n,t,e){return n.setAttribute(t,e)},rn:function(n,t){return n.removeAttribute(t)},in:function(n,t){return n.hasAttribute(t)},Xn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},nt:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.tt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},on:function(t,e,o,u,f,c,a,l,v,p){var d=t,h=o,y=r.get(t);p=e+u,y&&y[p]&&y[p](),"string"==typeof a?d=i.nt(t,a):"object"==typeof a?d=a:(v=e.split(":")).length>1&&(d=i.nt(t,v[0]),e=v[1]),d&&((v=e.split(".")).length>1&&(e=v[0],h=function(n){n.keyCode===s[v[1]]&&o(n)}),l=i.Ln?{capture:!!f,passive:!!c}:!!f,n.ael(d,e,h,l),y||r.set(t,y={}),y[p]=function(){d&&n.rel(d,e,h,l),y[p]=null})},un:function(n,t,e,i){(i=r.get(n))&&(t?i[t+e]&&i[t+e]():Object.keys(i).forEach(function(n){i[n]&&i[n]()}))},et:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},tt:function(n,t){return(t=i.Gn(n))&&11===i.Dn(t)?t.host:t},rt:function(n,t,e,r){return n.setAttributeNS(t,e,r)},it:function(n,t){return n.attachShadow(t)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Ln=!0}}))}catch(n){}return i}(d,r,i),y=h.K.documentElement,w=r["s-defined"]=r["s-defined"]||{},j={J:h,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.ot.has(e)||(n.ot.set(e,!0),function r(n,t){var e=n.tn(t);e.ln&&e.ln.forEach(function(e){e.dn||n.J.on(t,e.vn,function r(n,t,e,i){return function(r){(i=n.Mn.get(t))?i[e](r):((i=n.Pn.get(t)||[]).push(e,r),n.Pn.set(t,i))}}(n,t,e.pn),1,e.yn,e.hn)})}(n,e)),n.gn.delete(e),n.Nn.has(e)||(n.ut=!0,n.wn.add(e),n.Nn.set(e,!0),function(n,t,e){for(e=t;e=n.J.tt(e);)if(n.ft(e)){n.ct.has(t)||(n.jn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.kn.set(e,function(n,t,e,r,i){if(e.mode||(e.mode=n.Xn(e)),e["s-cr"]||n.Kn(e,"ssrv")||n.Z&&1===t.Y||(e["s-cr"]=n.Hn(""),e["s-cr"]["s-cn"]=!0,n.nn(e,e["s-cr"],n.In(e)[0])),!n.Z&&1===t.Y)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e)}catch(n){}return 1===t.Y&&n.Z&&!e.shadowRoot&&n.it(e,{mode:"open"}),r={Tn:{}},t.en&&Object.keys(t.en).forEach(function(o){(i=t.en[o].fn)&&(r.Tn[i]=n.Kn(e,i))}),r}(n.J,t,e)),n.at(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.st&&function(n,t){for(;t;){if(!n.Gn(t))return 9!==n.Dn(t);t=n.Gn(t)}}(n.J,t)&&(n.gn.set(t,!0),W(n,t),g(n.On.get(t),!0),n.J.un(t),n.ot.delete(t),n.l&&n.l.removeHost(t),[n.jn,n.lt,n.kn].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(T(n,t)&&(i=n.Mn.get(t))&&!n.gn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ct.set(t,!0),(u=n.vt.has(t))||(n.vt.set(t,!0),t["s-ld"]=void 0,n.J.Cn(t,e));try{g(n.On.get(t)),(o=n.lt.get(t))&&(o.forEach(function(n){return n(t)}),n.lt.delete(t)),!u&&i.componentDidLoad&&i.componentDidLoad()}catch(e){n.$n(e,4,t)}W(n,t)}})(n,this,r)},e.forceUpdate=function(){C(n,this,i)},t.en){var o=Object.entries(t.en),u={};o.forEach(function(n){var t=n[0],e=n[1].fn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[p(e)];o&&(t[o]=(null!==i||"boolean"!=typeof t[o])&&i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1];3&o.cn&&_(e,i,function t(){return(n._n.get(this)||{})[i]},function t(e){O(n,this,i,E(o.sn,e),r)})})}(n,0,e,i)}}(j,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.en).map(function(n){return n.fn}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},tn:function(n){return a[h.Zn(n)]},pt:function(n){return t[n]},isClient:!0,ft:function(n){return!(!w[h.Zn(n)]&&!j.tn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=M(d,r),at:function(n,t){var e=!h.Z,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.An=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Y,e.style,e.styleMode)}catch(t){console.error(t),n.An=function i(){}}C(j,t,f)})},Sn:!1,mn:!1,st:!1,En:l,jn:new WeakMap,V:new WeakMap,Nn:new WeakMap,ot:new WeakMap,vt:new WeakMap,ct:new WeakMap,xn:new WeakMap,kn:new WeakMap,Mn:new WeakMap,gn:new WeakMap,bn:new WeakMap,lt:new WeakMap,Pn:new WeakMap,On:new WeakMap,_n:new WeakMap,wn:new Set,Rn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,t.enableListener=function(n,t,e,r,i){return function o(n,t,e,r,i,u){if(t){var f=n.xn.get(t),c=n.tn(f);if(c&&c.ln)if(r){var a=c.ln.find(function(n){return n.vn===e});a&&n.J.on(f,e,function(n){return t[a.pn](n)},1,a.yn,void 0===u?a.hn:!!u,i)}else n.J.un(f,e,1)}}(j,n,t,e,r,i)},j.Wn=t.emit=function(n,e,r){return h.et(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=e,d.Context=t,d.onReady=function(){return new Promise(function(n){return j.queue.write(function(){return j.wn.size?j.Rn.push(n):n()})})},j.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,l,p,d,h,y,w,g,M){if(g=l.vchildren[p],e||(o=!0,"slot"===g.vtag&&(r&&t.Cn(d,r+"-s"),g.vchildren?g.dt=!0:g.ht=!0)),v(g.vtext))g.i=t.Hn(g.vtext);else if(g.ht)g.i=t.Hn("");else{if(y=g.i=m||"svg"===g.vtag?t.Fn("http://www.w3.org/2000/svg",g.vtag):t.X(g.dt?"slot-fb":g.vtag),n.ft(y)&&n.ct.delete(c),m="svg"===g.vtag||"foreignObject"!==g.vtag&&m,b(n,null,g,m),v(r)&&y["s-si"]!==r&&t.Cn(y,y["s-si"]=r),g.vchildren)for(h=0;h<g.vchildren.length;++h)(w=a(i,g,h,y))&&t.Bn(y,w);"svg"===g.vtag&&(m=!1)}return g.i["s-hn"]=f,(g.dt||g.ht)&&(g.i["s-sr"]=!0,g.i["s-cr"]=u,g.i["s-sn"]=g.vname||"",(M=i&&i.vchildren&&i.vchildren[p])&&M.vtag===g.vtag&&i.i&&s(i.i)),g.i},s=function(e,r,i,u){n.st=!0;var c=t.In(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Un(u),t.nn(y(u),u,h(u)),t.Un(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.st=!1},l=function(n,e,r,i,o,u,c,s){var l=n["s-cr"];for((c=l&&t.Gn(l)||n).shadowRoot&&t.Zn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=v(i[o].vtext)?t.Hn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.nn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)v(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Un(o["s-ol"]):s(o,!0),t.Un(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Gn(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;m=r.i&&v(t.tt(r.i))&&void 0!==r.i.ownerSVGElement,m="svg"===r.vtag||"foreignObject"!==r.vtag&&m,v(r.vtext)?(i=o["s-cr"])?t.Jn(t.Gn(i),r.vtext):e.vtext!==r.vtext&&t.Jn(o,r.vtext):("slot"!==r.vtag&&b(n,e,r,m),v(u)&&v(f)?function(n,e,r,i,o,u,f,c){for(var b=0,m=0,g=e.length-1,M=e[0],j=e[g],k=i.length-1,$=i[0],A=i[k];b<=g&&m<=k;)if(null==M)M=e[++b];else if(null==j)j=e[--g];else if(null==$)$=i[++m];else if(null==A)A=i[--k];else if(d(M,$))w(M,$),M=e[++b],$=i[++m];else if(d(j,A))w(j,A),j=e[--g],A=i[--k];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(M.i)),w(M,A),t.nn(n,M.i,t.Qn(j.i)),M=e[++b],A=i[--k];else if(d(j,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(j.i)),w(j,$),t.nn(n,j.i,M.i),j=e[--g],$=i[++m];else{for(o=null,u=b;u<=g;++u)if(e[u]&&v(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}v(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.nn(y(M.i),f,h(M.i))}b>g?l(n,null==i[k+1]?null:i[k+1].i,r,i,m,k):m>k&&p(e,b,g)}(o,u,r,f):v(f)?(v(e.vtext)&&t.Jn(o,""),l(o,null,r,f,0,f.length-1)):v(u)&&p(u,0,u.length-1)),m&&"svg"===r.vtag&&(m=!1)},g=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.In(n)).length;i<o;i++)if(e=r[i],1===t.Dn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Dn(r[u]),""!==f){if(1===c&&f===t.Kn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.zn(r[u]).trim()){e.hidden=!0;break}g(e)}},M=[],j=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.In(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.In(t.Gn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Dn(o))||8===l)&&""===s||1===l&&null===t.Kn(o,"slot")&&""===s||1===l&&t.Kn(o,"slot")===s)&&(M.some(function(n){return n.yt===o})||(i=!0,o["s-sn"]=s,M.push({wt:r,yt:o})));1===t.Dn(r)&&j(r)}};return function(a,s,l,v,p,d,h,y,b,m,k,$){if(c=a,f=t.Zn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(j(l.i),h=0;h<M.length;h++)(y=M[h]).yt["s-ol"]||((b=t.Hn(""))["s-nr"]=y.yt,t.nn(t.Gn(y.yt),y.yt["s-ol"]=b,y.yt));for(n.st=!0,h=0;h<M.length;h++){for(y=M[h],k=t.Gn(y.wt),$=t.Qn(y.wt),b=y.yt["s-ol"];b=t.Yn(b);)if((m=b["s-nr"])&&m&&m["s-sn"]===y.yt["s-sn"]&&k===t.Gn(m)&&(m=t.Qn(m))&&m&&!m["s-nr"]){$=m;break}(!$&&k!==t.Gn(y.yt)||t.Qn(y.yt)!==$)&&y.yt!==$&&(t.Un(y.yt),t.nn(k,y.yt,$))}n.st=!1}return i&&g(l.i),M.length=0,l}}(j,h),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=function(){j.ct.set(y,d.loaded=j.mn=!0),h.et(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.tn(t);if(r)if(n.ct.has(t))e(t);else{var i=n.lt.get(t)||[];i.push(e),n.lt.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(j,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,j},N={},R=!1;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/web-social-share/dist/esm/es5/websocialshare.define.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm/es5/websocialshare.define.js ***!
  \*****************************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _websocialshare_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocialshare.core.js */ "./node_modules/web-social-share/dist/esm/es5/websocialshare.core.js");
/* harmony import */ var _websocialshare_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocialshare.components.js */ "./node_modules/web-social-share/dist/esm/es5/websocialshare.components.js");

// websocialshare: Custom Elements Define Library, ES Module/es5 Target




function defineCustomElements(win, opts) {
  return Object(_websocialshare_core_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElement"])(win, _websocialshare_components_js__WEBPACK_IMPORTED_MODULE_1__["COMPONENTS"], opts);
}


/***/ }),

/***/ "./node_modules/web-social-share/dist/loader/index.js":
/*!************************************************************!*\
  !*** ./node_modules/web-social-share/dist/loader/index.js ***!
  \************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_es5_websocialshare_define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/es5/websocialshare.define.js */ "./node_modules/web-social-share/dist/esm/es5/websocialshare.define.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_es5_websocialshare_define_js__WEBPACK_IMPORTED_MODULE_0__["defineCustomElements"]; });



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/css/alert.css":
/*!***************************!*\
  !*** ./src/css/alert.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./alert.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/alert.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/deck.css":
/*!**************************!*\
  !*** ./src/css/deck.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./deck.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/deck.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/font.css":
/*!**************************!*\
  !*** ./src/css/font.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./font.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/font.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/google-fonts.css":
/*!**********************************!*\
  !*** ./src/css/google-fonts.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./google-fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/google-fonts.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/popover.css":
/*!*****************************!*\
  !*** ./src/css/popover.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./popover.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/popover.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/print.css":
/*!***************************!*\
  !*** ./src/css/print.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./print.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/print.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/theme.css":
/*!***************************!*\
  !*** ./src/css/theme.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/theme.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/variables.css":
/*!*******************************!*\
  !*** ./src/css/variables.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/variables.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic_core_css_ionic_bundle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/core/css/ionic.bundle.css */ "./node_modules/@ionic/core/css/ionic.bundle.css");
/* harmony import */ var _ionic_core_css_ionic_bundle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_ionic_bundle_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_variables_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/variables.css */ "./src/css/variables.css");
/* harmony import */ var _css_variables_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_variables_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/theme.css */ "./src/css/theme.css");
/* harmony import */ var _css_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_theme_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_deck_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/deck.css */ "./src/css/deck.css");
/* harmony import */ var _css_deck_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_deck_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_font_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/font.css */ "./src/css/font.css");
/* harmony import */ var _css_font_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_font_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_popover_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/popover.css */ "./src/css/popover.css");
/* harmony import */ var _css_popover_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_popover_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_print_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/print.css */ "./src/css/print.css");
/* harmony import */ var _css_print_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_print_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_alert_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/alert.css */ "./src/css/alert.css");
/* harmony import */ var _css_alert_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_alert_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @webcomponents/custom-elements */ "./node_modules/@webcomponents/custom-elements/custom-elements.min.js");
/* harmony import */ var _webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scripts_loading_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/loading.js */ "./src/scripts/loading.js");
/* harmony import */ var _scripts_loading_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scripts_loading_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/slider.js */ "./src/scripts/slider.js");
/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scripts_slider_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scripts_sliderJumpTo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/sliderJumpTo.js */ "./src/scripts/sliderJumpTo.js");
/* harmony import */ var _scripts_sliderJumpTo_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scripts_sliderJumpTo_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _scripts_modal_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/modal.js */ "./src/scripts/modal.js");
/* harmony import */ var _scripts_modal_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scripts_modal_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scripts_remoteControl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/remoteControl.js */ "./src/scripts/remoteControl.js");
/* harmony import */ var _scripts_remoteControl_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scripts_remoteControl_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scripts_actions_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scripts/actions.js */ "./src/scripts/actions.js");
/* harmony import */ var _scripts_actions_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scripts_actions_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scripts_menu_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scripts/menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _scripts_menu_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scripts_menu_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ionic_core_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/core/loader */ "./node_modules/@ionic/core/loader/index.js");
/* harmony import */ var ionicons_dist_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ionicons/dist/loader */ "./node_modules/ionicons/dist/loader/index.js");
/* harmony import */ var deckdeckgo_dist_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! deckdeckgo/dist/loader */ "./node_modules/deckdeckgo/dist/loader/index.js");
/* harmony import */ var deckdeckgo_remote_dist_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! deckdeckgo-remote/dist/loader */ "./node_modules/deckdeckgo-remote/dist/loader/index.js");
/* harmony import */ var deckdeckgo_charts_dist_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! deckdeckgo-charts/dist/loader */ "./node_modules/deckdeckgo-charts/dist/loader/index.js");
/* harmony import */ var deckdeckgo_qrcode_dist_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! deckdeckgo-qrcode/dist/loader */ "./node_modules/deckdeckgo-qrcode/dist/loader/index.js");
/* harmony import */ var deckdeckgo_highlight_code_dist_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! deckdeckgo-highlight-code/dist/loader */ "./node_modules/deckdeckgo-highlight-code/dist/loader/index.js");
/* harmony import */ var web_social_share_dist_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! web-social-share/dist/loader */ "./node_modules/web-social-share/dist/loader/index.js");
/* harmony import */ var _css_google_fonts_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./css/google-fonts.css */ "./src/css/google-fonts.css");
/* harmony import */ var _css_google_fonts_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_css_google_fonts_css__WEBPACK_IMPORTED_MODULE_24__);





















Object(_ionic_core_loader__WEBPACK_IMPORTED_MODULE_16__["defineCustomElements"])(window);


Object(ionicons_dist_loader__WEBPACK_IMPORTED_MODULE_17__["defineCustomElements"])(window);

// Init DeckDeckGo elements






// Init web-social-share


Object(deckdeckgo_dist_loader__WEBPACK_IMPORTED_MODULE_18__["defineCustomElements"])(window).then(async () => {
    await Object(deckdeckgo_charts_dist_loader__WEBPACK_IMPORTED_MODULE_20__["defineCustomElements"])(window);
    await Object(deckdeckgo_qrcode_dist_loader__WEBPACK_IMPORTED_MODULE_21__["defineCustomElements"])(window);
    await Object(deckdeckgo_highlight_code_dist_loader__WEBPACK_IMPORTED_MODULE_22__["defineCustomElements"])(window);

    await postLoading();
    await initActions();

    await Object(web_social_share_dist_loader__WEBPACK_IMPORTED_MODULE_23__["defineCustomElements"])(window);

    Object(deckdeckgo_remote_dist_loader__WEBPACK_IMPORTED_MODULE_19__["defineCustomElements"])(window).then(async () => {
        await initRemote();
    });
});




/***/ }),

/***/ "./src/scripts/actions.js":
/*!********************************!*\
  !*** ./src/scripts/actions.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

initActions = () => {
    return new Promise(async (resolve) => {
        const slider = document.getElementById('slider');

        if (slider) {
            slider.addEventListener('slidesDidLoad', async (_slides) => {
                await initActionButtons(slider)
            });
        }

        resolve();
    });
};

function initActionButtons(slider) {
    return new Promise(async (resolve) => {
        const ionFab = document.querySelector('ion-fab');

        if (ionFab) {
            const mobile = await slider.isMobile();

            if (mobile) {
                ionFab.style.setProperty('--deckgo-hide-on-mobile', 'none');
            }

            // Workaround: https://github.com/deckgo/deckdeckgo-starter/issues/31
            if (document.dir === 'rtl') {
                const ionFabList = ionFab.querySelector('ion-fab-list[side="start"]');
                if (ionFabList) {
                    ionFabList.setAttribute('side', 'end');
                }

                ionFab.setAttribute('horizontal', 'start');
            }
        }

        resolve();
    });
}


/***/ }),

/***/ "./src/scripts/loading.js":
/*!********************************!*\
  !*** ./src/scripts/loading.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

postLoading = () => {
    return new Promise((resolve) => {
        const app = document.querySelector('ion-app');
        if (app) {
            app.classList.remove('loading');
        }

        resolve();
    });
};


/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class MenuList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {

        const menuListActions = await buildMenuListActions();

        this.innerHTML = '<ion-content><ion-list no-margin>' + menuListActions + '</ion-list></ion-content>';
    }
}

buildMenuListActions = () => {
    return new Promise(async (resolve) => {
        let result = '';

        result += '<ion-item ion-item button onclick="howItWorks()" style="--border-style: none;"><ion-icon name="help" slot="end"></ion-icon><ion-label>How it works</ion-label></ion-item>';
        result += '<ion-item ion-item button onclick="openShare()" style="--border-style: none;"><ion-icon name="share" slot="end"></ion-icon><ion-label>Share</ion-label></ion-item>';

        resolve(result);
    });
};

customElements.define('menu-list', MenuList);

openMenu = async (ev) => {
    const popoverController = document.querySelector('ion-popover-controller');

    if (!popoverController) {
        return;
    }

    await popoverController.componentOnReady();

    const popover = await popoverController.create({
        component: 'menu-list',
        translucent: true,
        event: ev
    });

    await popover.present();
};

howItWorks = async () => {
    await presentHowItWorks();
    await document.querySelector('ion-popover-controller').dismiss();
};

presentHowItWorks = async () => {
    const alertController = document.querySelector('ion-alert-controller');

    if (!alertController) {
        return;
    }

    await alertController.componentOnReady();

    const alert = await alertController.create({
        header: 'How does it work?',
        message: 'To navigate, just swipe the slides, use the left and right arrows keys of your keyboard or use the actions available at the bottom right',
        buttons: ['OK']
    });

    await alert.present();
};

openShare = async () => {
    const webSocialShare = document.querySelector('web-social-share');

    if (!webSocialShare || !window) {
        return;
    }

    const share = {
        displayNames: true,
        config: [{
            twitter: {
                socialShareUrl: window.location.href,
                socialSharePopupWidth: 300,
                socialSharePopupHeight: 400
            }
        },{
            reddit: {
                socialShareUrl: window.location.href,
                socialSharePopupWidth: 300,
                socialSharePopupHeight: 500
            }
        },{
            linkedin: {
                socialShareUrl: window.location.href
            }
        },,{
            email: {
                socialShareBody: window.location.href
            }
        }, {
            whatsapp: {
                socialShareUrl: window.location.href
            }
        }]
    };

    webSocialShare.share = share;

    webSocialShare.show = true;

    await document.querySelector('ion-popover-controller').dismiss();
};


/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Src: https://beta.ionicframework.com/docs/api/modal
displaySlideNotes = async () => {
    const deck = document.getElementById('slider');

    if (!deck) {
        return;
    }

    const index = await deck.getActiveIndex();

    const slide = document.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

    if (!slide) {
        return;
    }

    const title = slide.querySelector('[slot="title"]');
    const notes = slide.querySelector('[slot="notes"][show]');

    const titleText = title ? title.innerHTML : 'Slide ' + index;
    const notesText = notes ? notes.innerHTML : 'No particular notes';

    // initialize controller
    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();

    // create component to open
    const element = document.createElement('div');
    element.innerHTML = `
  <ion-header>
    <ion-toolbar color="tertiary">
      <ion-buttons slot="start">
          <ion-button>
              <ion-icon name="close"></ion-icon>
          </ion-button>
      </ion-buttons>
      <ion-title>${titleText}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content padding color="primary">
    <p style="white-space: pre-wrap;">${notesText}</p>
  </ion-content>
  `;

    // listen for close event
    const button = element.querySelector('ion-button');
    button.addEventListener('click', async () => {
        await modalController.dismiss();
    });

    // create the modal
    const modalElement = await modalController.create({
        component: element
    });

    // present the modal
    await modalElement.present();
}
// Src: https://beta.ionicframework.com/docs/api/modal
presentModal = async () => {
  // initialize controller
  const modalController = document.querySelector('ion-modal-controller');
  await modalController.componentOnReady();

  // create component to open
  const element = document.createElement('div');
  element.innerHTML = `
<ion-header>
  <ion-toolbar color="tertiary">
    <ion-buttons slot="start">
        <ion-button id="close">
            <ion-icon name="close"></ion-icon>
        </ion-button>
    </ion-buttons>
    <ion-title>unihockey.club</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content padding color="primary">
  <iframe src="https://app.unihockey.club" width="100%" height="100%"></iframe>
</ion-content>
`;

  // listen for close event
  /*const buttonDismiss = element.querySelector('ion-button#dismiss');
  buttonDismiss.addEventListener('click', async () => {
      await modalController.dismiss();
  });*/

  const buttonClose = element.querySelector('ion-button#close');
  buttonClose.addEventListener('click', async () => {
      await modalController.dismiss();
  });

  // create the modal
  const modalElement = await modalController.create({
      component: element
  });

  // present the modal
  await modalElement.present();
}

/***/ }),

/***/ "./src/scripts/remoteControl.js":
/*!**************************************!*\
  !*** ./src/scripts/remoteControl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

remoteEvent = async (event) => {
    return new Promise(async (resolve) => {
        if (!event || !event.detail) {
            resolve();
            return;
        }

        const slider = document.getElementById('slider');

        if (!slider) {
            resolve();
            return;
        }

        const type = event.detail.type;

        if (type === 'next_slide') {
            const slideAnimation = event.detail.slideAnimation;
            await slider.slideNext(slideAnimation, slideAnimation);
        } else if (type === 'prev_slide') {
            const slideAnimation = event.detail.slideAnimation;
            await slider.slidePrev(slideAnimation, slideAnimation);
        } else if (type === 'slide_action') {
            await youtubePlayPause(event);
        } else if (type === 'slide_to') {
            const index = event.detail.index;
            if (index >= 0) {
                await slider.slideTo(index, 0);
            }
        }

        resolve();
    });
};

reconnectRemoteControl = () => {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.connect();

        if (!document.getElementById('slider')) {
            resolve();
            return;
        }

        await document.getElementById('slider').slideTo(0, 300, false);

        resolve();
    });
};

initRemote = async () => {
    return new Promise(async (resolve) => {
        if (true) {
            resolve();
            return;
        }

        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement || !window) {
            resolve();
            return;
        }

        deckgoRemoteElement.addEventListener('event', async event => {
            await remoteEvent(event)
        });

        window.addEventListener('resize', async () => {
            await initRemoteSize();
        });

        await initDeck();

        await initRemoteSize();

        await initDeckMove();

        resolve();
    });
};

function initDeck() {
    return new Promise(async (resolve) => {
        const deck = document.getElementById('slider');

        if (!deck) {
            resolve();
            return;
        }

        deck.addEventListener('slidesDidLoad', async (slides) => {
            await initRemoteRoomServer(slides)
        });

        resolve();
    });
}

function initRemoteRoomServer(slides) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement || !document) {
            resolve();
            return;
        }

        deckgoRemoteElement.slides = slides.detail;

        if (!deckgoRemoteElement.room) {
            deckgoRemoteElement.room =  true ? "from firebase to firestore" : undefined;
        }

        // SIGNALING_SERVER is declared by Webpack, see webpack.config.js
        deckgoRemoteElement.server = "https://api.deckdeckgo.com";

        resolve();
    });
}

function initDeckMove() {
    return new Promise(async (resolve) => {
        const deck = document.getElementById('slider');

        if (!deck) {
            resolve();
            return;
        }

        deck.addEventListener('slideNextDidChange', async () => {
            await slidePrevNext(true)
        });

        deck.addEventListener('slidePrevDidChange', async () => {
            await slidePrevNext(false)
        });

        deck.addEventListener('slideWillChange', async (event) => {
            await moveRemote(event)
        });

        deck.addEventListener('slideDrag', async (event) => {
            await scrollRemote(event)
        });

        deck.addEventListener('slideToChange', async (event) => {
            await slideToChange(event)
        });

        resolve();
    });
}

function initRemoteSize() {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        deckgoRemoteElement.width = window.innerWidth;
        deckgoRemoteElement.height = window.innerHeight;

        const deck = document.getElementById('slider');

        if (!deckgoRemoteElement || !deck) {
            resolve();
            return;
        }

        deckgoRemoteElement.length = deck.childElementCount;

        resolve();
    });
}

function slideToChange(event) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement || !event) {
            resolve();
            return;
        }

        const slideIndex = event.detail;

        await deckgoRemoteElement.slideTo(slideIndex, 0);

        resolve();
    });
}

function slidePrevNext(next) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        if (next) {
            await deckgoRemoteElement.nextSlide();
        } else {
            await deckgoRemoteElement.prevSlide();
        }

        resolve();
    });
}

function moveRemote(event) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.moveDraw(event.detail, '300ms');

        resolve();
    });
}

function scrollRemote(event) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.moveDraw(event.detail, '0ms');

        resolve();
    });
}

function youtubePlayPause(event) {
    return new Promise(async (resolve) => {
        const deck = document.getElementById('slider');

        if (!deck) {
            resolve();
            return;
        }

        const index = await deck.getActiveIndex();

        const youtubeSlideElement = document.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

        if (!youtubeSlideElement || youtubeSlideElement.tagName !== 'deckgo-slide-youtube'.toUpperCase()) {
            resolve();
            return;
        }

        if (event.detail.action === 'youtube_pause') {
            await youtubeSlideElement.pause();
        } else {
            await youtubeSlideElement.play();
        }

        resolve();
    });
}


/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

previousSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    if (window.event) {
        window.event.stopPropagation();
    }

    await document.getElementById('slider').slidePrev();
};

nextSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    if (window.event) {
        window.event.stopPropagation();
    }

    await document.getElementById('slider').slideNext();
};

firstSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    await document.getElementById('slider').slideTo(0, 2000);
};

toggleFullScreen = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    await document.getElementById('slider').toggleFullScreen();
};

doPrint = async () => {
    const slider = document.getElementById('slider');

    if (!slider) {
        return;
    }

    const content = document.querySelector('ion-content');

    if (!content) {
        return;
    }

    const innerScroll = content.shadowRoot.querySelector('div.inner-scroll');

    if (!innerScroll) {
        return;
    }

    innerScroll.style.position = 'initial';

    await slider.doPrint();
};


/***/ }),

/***/ "./src/scripts/sliderJumpTo.js":
/*!*************************************!*\
  !*** ./src/scripts/sliderJumpTo.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class SlidesList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {

        const slidesListActions = await buildSlidesListActions();

        this.innerHTML = '<ion-content><ion-list><ion-list-header>Jump to slide</ion-list-header>' + slidesListActions + '</ion-list></ion-content>';
    }
}

buildSlidesListActions = () => {
    return new Promise(async (resolve) => {
        let result = '';

        const slides = document.querySelectorAll('#slider > *');

        if (slides) {
            let i = 0;

            for (const slide of slides) {
                if (slide.tagName && slide.tagName.toLowerCase().indexOf('deckgo-slide') > -1) {
                    const title = slide.querySelector('[slot="title"]');

                    const text = 'Slide ' + (i + 1) + (title ? ': ' + title.innerHTML : '');

                    result += '<ion-item ion-item button onclick="jumpToSlide(' + i + ')" color="primary"><ion-label>' + text + '</ion-label></ion-item>';

                    i++;
                }
            }
        }

        resolve(result);
    });
};

jumpToSlide = async (index) => {
    await document.getElementById('slider').slideTo(index, 0);
    await document.querySelector('ion-popover-controller').dismiss();
};

customElements.define('slides-list', SlidesList);

presentSlidePicker = async () => {
    const popoverController = document.querySelector('ion-popover-controller');

    if (!popoverController) {
        return;
    }

    await popoverController.componentOnReady();

    const popover = await popoverController.create({
        component: 'slides-list',
        translucent: true
    });

    return await popover.present();
};


/***/ })

/******/ });
//# sourceMappingURL=main.54240a6dde55cdf0651f.js.map