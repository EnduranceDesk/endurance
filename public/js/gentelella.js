/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@pnotify/core/dist/PNotify.js":
/*!****************************************************!*\
  !*** ./node_modules/@pnotify/core/dist/PNotify.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(t,e){ true?e(exports):undefined}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,n){return(f=l()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var o=new(Function.bind.apply(t,i));return n&&u(o,n.prototype),o}).apply(null,arguments)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?d(t):e}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(t,e)||v(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function g(){}function $(t,e){for(var n in e)t[n]=e[n];return t}function _(t){return t()}function k(){return Object.create(null)}function x(t){t.forEach(_)}function b(t){return"function"==typeof t}function w(t,n){return t!=t?n==n:t!==n||t&&"object"===e(t)||"function"==typeof t}function O(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function T(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function E(){return H(" ")}function S(){return H("")}function N(t,e,n,i){return t.addEventListener(e,n,i),function(){return t.removeEventListener(e,n,i)}}function L(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t){return Array.from(t.childNodes)}function j(t,e){e=""+e,t.data!==e&&(t.data=e)}var P,W=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(this,t),this.e=T("div"),this.a=i,this.u(e)}return o(t,[{key:"m",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;n<this.n.length;n+=1)C(t,this.n[n],e);this.t=t}},{key:"u",value:function(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}},{key:"p",value:function(t){this.d(),this.u(t),this.m(this.t,this.a)}},{key:"d",value:function(){this.n.forEach(M)}}]),t}();function R(t){P=t}function I(){if(!P)throw new Error("Function called outside component initialization");return P}function D(){var t=I();return function(e,n){var i=t.$$.callbacks[e];if(i){var o=function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);i.slice().forEach((function(e){e.call(t,o)}))}}}function F(t,e){var n=t.$$.callbacks[e.type];n&&n.slice().forEach((function(t){return t(e)}))}var q=[],B=[],z=[],U=[],G=Promise.resolve(),J=!1;function K(){J||(J=!0,G.then(Z))}function Q(){return K(),G}function V(t){z.push(t)}var X=!1,Y=new Set;function Z(){if(!X){X=!0;do{for(var t=0;t<q.length;t+=1){var e=q[t];R(e),tt(e.$$)}for(q.length=0;B.length;)B.pop()();for(var n=0;n<z.length;n+=1){var i=z[n];Y.has(i)||(Y.add(i),i())}z.length=0}while(q.length);for(;U.length;)U.pop()();J=!1,X=!1,Y.clear()}}function tt(t){if(null!==t.fragment){t.update(),x(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}var et,nt=new Set;function it(){et={r:0,c:[],p:et}}function ot(){et.r||x(et.c),et=et.p}function rt(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function st(t,e,n,i){if(t&&t.o){if(nt.has(t))return;nt.add(t),et.c.push((function(){nt.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}var at="undefined"!=typeof window?window:global;function ct(t,e){st(t,1,1,(function(){e.delete(t.key)}))}function ut(t,e,n,i,o,r,s,a,c,u,l,f){for(var d=t.length,h=r.length,p=d,m={};p--;)m[t[p].key]=p;var v=[],y=new Map,g=new Map;for(p=h;p--;){var $=f(o,r,p),_=n($),k=s.get(_);k?i&&k.p($,e):(k=u(_,$)).c(),y.set(_,v[p]=k),_ in m&&g.set(_,Math.abs(p-m[_]))}var x=new Set,b=new Set;function w(t){rt(t,1),t.m(a,l,s.has(t.key)),s.set(t.key,t),l=t.first,h--}for(;d&&h;){var O=v[h-1],C=t[d-1],M=O.key,T=C.key;O===C?(l=O.first,d--,h--):y.has(T)?!s.has(M)||x.has(M)?w(O):b.has(T)?d--:g.get(M)>g.get(T)?(b.add(M),w(O)):(x.add(T),d--):(c(C,s),d--)}for(;d--;){var H=t[d];y.has(H.key)||c(H,s)}for(;h;)w(v[h-1]);return v}function lt(t,e){for(var n={},i={},o={$$scope:1},r=t.length;r--;){var s=t[r],a=e[r];if(a){for(var c in s)c in a||(i[c]=1);for(var u in a)o[u]||(n[u]=a[u],o[u]=1);t[r]=a}else for(var l in s)o[l]=1}for(var f in i)f in n||(n[f]=void 0);return n}function ft(t){return"object"===e(t)&&null!==t?t:{}}function dt(t){t&&t.c()}function ht(t,e,n){var i=t.$$,o=i.fragment,r=i.on_mount,s=i.on_destroy,a=i.after_update;o&&o.m(e,n),V((function(){var e=r.map(_).filter(b);s?s.push.apply(s,m(e)):x(e),t.$$.on_mount=[]})),a.forEach(V)}function pt(t,e){var n=t.$$;null!==n.fragment&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(q.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}var vt=function(){function t(){n(this,t)}return o(t,[{key:"$destroy",value:function(){pt(this,1),this.$destroy=g}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(){}}]),t}(),yt=function(){function t(e){if(n(this,t),Object.assign(this,{dir1:null,dir2:null,firstpos1:null,firstpos2:null,spacing1:25,spacing2:25,push:"bottom",maxOpen:1,maxStrategy:"wait",maxClosureCausesWait:!0,modal:"ish",modalishFlash:!0,overlayClose:!0,overlayClosesPinned:!1,context:window&&document.body||null},e),"ish"===this.modal&&1!==this.maxOpen)throw new Error("A modalish stack must have a maxOpen value of 1.");if("ish"===this.modal&&!this.dir1)throw new Error("A modalish stack must have a direction.");if("top"===this.push&&"ish"===this.modal&&"close"!==this.maxStrategy)throw new Error("A modalish stack that pushes to the top must use the close maxStrategy.");this._noticeHead={notice:null,prev:null,next:null},this._noticeTail={notice:null,prev:this._noticeHead,next:null},this._noticeHead.next=this._noticeTail,this._noticeMap=new WeakMap,this._length=0,this._addpos2=0,this._animation=!0,this._posTimer=null,this._openNotices=0,this._listener=null,this._overlayOpen=!1,this._overlayInserted=!1,this._collapsingModalState=!1,this._leader=null,this._leaderOff=null,this._masking=null,this._maskingOff=null}return o(t,[{key:"forEach",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.start,o=void 0===i?"oldest":i,r=n.dir,s=void 0===r?"newer":r,a=n.skipModuleHandled,c=void 0!==a&&a;if("head"===o||"newest"===o&&"top"===this.push||"oldest"===o&&"bottom"===this.push)e=this._noticeHead.next;else if("tail"===o||"newest"===o&&"bottom"===this.push||"oldest"===o&&"top"===this.push)e=this._noticeTail.prev;else{if(!this._noticeMap.has(o))throw new Error("Invalid start param.");e=this._noticeMap.get(o)}for(;e.notice;){var u=e.notice;if("prev"===s||"top"===this.push&&"newer"===s||"bottom"===this.push&&"older"===s)e=e.prev;else{if(!("next"===s||"top"===this.push&&"older"===s||"bottom"===this.push&&"newer"===s))throw new Error("Invalid dir param.");e=e.next}if(!(c&&u.getModuleHandled()||!1!==t(u)))break}}},{key:"close",value:function(t){this.forEach((function(e){return e.close(t,!1,!1)}))}},{key:"open",value:function(t){this.forEach((function(e){return e.open(t)}))}},{key:"openLast",value:function(){this.forEach((function(t){if(-1===["opening","open","waiting"].indexOf(t.getState()))return t.open(),!1}),{start:"newest",dir:"older"})}},{key:"position",value:function(){var t=this;this._length>0?(this._resetPositionData(),this.forEach((function(e){t._positionNotice(e)}),{start:"head",dir:"next",skipModuleHandled:!0})):(delete this._nextpos1,delete this._nextpos2)}},{key:"queuePosition",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;this._posTimer&&clearTimeout(this._posTimer),this._posTimer=setTimeout((function(){return t.position()}),e)}},{key:"_resetPositionData",value:function(){this._nextpos1=this.firstpos1,this._nextpos2=this.firstpos2,this._addpos2=0}},{key:"_positionNotice",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t===this._masking,n=t.refs.elem;if(n&&(n.classList.contains("pnotify-in")||n.classList.contains("pnotify-initial")||e)){var i=[this.firstpos1,this.firstpos2,this._nextpos1,this._nextpos2,this._addpos2],o=i[0],r=i[1],s=i[2],a=i[3],c=i[4];n.getBoundingClientRect(),!this._animation||e||this._collapsingModalState?t._setMoveClass(""):t._setMoveClass("pnotify-move");var u,l=this.context===document.body?window.innerHeight:this.context.scrollHeight,f=this.context===document.body?window.innerWidth:this.context.scrollWidth;if(this.dir1){var d;switch(u={down:"top",up:"bottom",left:"right",right:"left"}[this.dir1],this.dir1){case"down":d=n.offsetTop;break;case"up":d=l-n.scrollHeight-n.offsetTop;break;case"left":d=f-n.scrollWidth-n.offsetLeft;break;case"right":d=n.offsetLeft}null==o&&(s=o=d)}if(this.dir1&&this.dir2){var h,p={down:"top",up:"bottom",left:"right",right:"left"}[this.dir2];switch(this.dir2){case"down":h=n.offsetTop;break;case"up":h=l-n.scrollHeight-n.offsetTop;break;case"left":h=f-n.scrollWidth-n.offsetLeft;break;case"right":h=n.offsetLeft}if(null==r&&(a=r=h),!e){var m=s+n.offsetHeight+this.spacing1,v=s+n.offsetWidth+this.spacing1;(("down"===this.dir1||"up"===this.dir1)&&m>l||("left"===this.dir1||"right"===this.dir1)&&v>f)&&(s=o,a+=c+this.spacing2,c=0)}switch(null!=a&&(n.style[p]="".concat(a,"px"),this._animation||n.style[p]),this.dir2){case"down":case"up":n.offsetHeight+(parseFloat(n.style.marginTop,10)||0)+(parseFloat(n.style.marginBottom,10)||0)>c&&(c=n.offsetHeight);break;case"left":case"right":n.offsetWidth+(parseFloat(n.style.marginLeft,10)||0)+(parseFloat(n.style.marginRight,10)||0)>c&&(c=n.offsetWidth)}}else if(this.dir1){var y,g;switch(this.dir1){case"down":case"up":g=["left","right"],y=this.context.scrollWidth/2-n.offsetWidth/2;break;case"left":case"right":g=["top","bottom"],y=l/2-n.offsetHeight/2}n.style[g[0]]="".concat(y,"px"),n.style[g[1]]="auto",this._animation||n.style[g[0]]}if(this.dir1)switch(null!=s&&(n.style[u]="".concat(s,"px"),this._animation||n.style[u]),this.dir1){case"down":case"up":s+=n.offsetHeight+this.spacing1;break;case"left":case"right":s+=n.offsetWidth+this.spacing1}else{var $=f/2-n.offsetWidth/2,_=l/2-n.offsetHeight/2;n.style.left="".concat($,"px"),n.style.top="".concat(_,"px"),this._animation||n.style.left}e||(this.firstpos1=o,this.firstpos2=r,this._nextpos1=s,this._nextpos2=a,this._addpos2=c)}}},{key:"_addNotice",value:function(t){var e=this,n={notice:t,prev:null,next:null};if("top"===this.push?(n.next=this._noticeHead.next,n.prev=this._noticeHead,n.next.prev=n,n.prev.next=n):(n.prev=this._noticeTail.prev,n.next=this._noticeTail,n.prev.next=n,n.next.prev=n),this._noticeMap.set(t,n),this._length++,this._listener||(this._listener=function(){return e.position()},this.context.addEventListener("pnotify:position",this._listener)),-1!==["open","opening","closing"].indexOf(t.getState()))this._handleNoticeOpened(t);else if("ish"===this.modal&&this.modalishFlash&&this._shouldNoticeWait())var i=t.on("pnotify:mount",(function(){i(),t._setMasking(!0,!1,(function(){t._setMasking(!1)})),e._resetPositionData(),e._positionNotice(e._leader),window.requestAnimationFrame((function(){e._positionNotice(t,!0)}))}))}},{key:"_removeNotice",value:function(t){if(this._noticeMap.has(t)){var e=this._noticeMap.get(t);this._leader===t&&this._setLeader(null),this._masking===t&&this._setMasking(null),e.prev.next=e.next,e.next.prev=e.prev,e.prev=null,e.next=null,this._noticeMap.delete(t),this._length--,!this._length&&this._listener&&(this.context.removeEventListener("pnotify:position",this._listener),this._listener=null),!this._length&&this._overlayOpen&&this._removeOverlay(),-1!==["open","opening","closing"].indexOf(t.getState())&&this._handleNoticeClosed(t)}}},{key:"_setLeader",value:function(t){var e=this;if(this._leaderOff&&(this._leaderOff(),this._leaderOff=null),this._leader=t,this._leader){var n,i=function(){var t=null;e._overlayOpen&&(e._collapsingModalState=!0,e.forEach((function(n){n._preventTimerClose(!1),n!==e._leader&&-1!==["opening","open"].indexOf(n.getState())&&(t||(t=n),n.close(n===t,!1,!0))}),{start:e._leader,dir:"next",skipModuleHandled:!0}),e._removeOverlay()),o&&(clearTimeout(o),o=null),e.forEach((function(n){if(n!==e._leader)return"waiting"===n.getState()||n===t?(e._setMasking(n,!!t),!1):void 0}),{start:e._leader,dir:"next",skipModuleHandled:!0})},o=null,r=function(){o&&(clearTimeout(o),o=null),o=setTimeout((function(){o=null,e._setMasking(null)}),750)};this._leaderOff=(n=[this._leader.on("mouseenter",i),this._leader.on("focusin",i),this._leader.on("mouseleave",r),this._leader.on("focusout",r)],function(){return n.map((function(t){return t()}))})}}},{key:"_setMasking",value:function(t,e){var n=this;if(this._masking){if(this._masking===t)return;this._masking._setMasking(!1,e)}if(this._maskingOff&&(this._maskingOff(),this._maskingOff=null),this._masking=t,this._masking){this._resetPositionData(),this._leader&&this._positionNotice(this._leader),this._masking._setMasking(!0,e),window.requestAnimationFrame((function(){n._masking&&n._positionNotice(n._masking)}));var i,o=function(){"ish"===n.modal&&(n._insertOverlay(),n._setMasking(null,!0),n.forEach((function(t){t._preventTimerClose(!0),"waiting"===t.getState()&&t.open()}),{start:n._leader,dir:"next",skipModuleHandled:!0}))};this._maskingOff=(i=[this._masking.on("mouseenter",o),this._masking.on("focusin",o)],function(){return i.map((function(t){return t()}))})}}},{key:"_handleNoticeClosed",value:function(t){var e=this;if(!t.getModuleHandled()){if(this._openNotices--,"ish"===this.modal&&t===this._leader&&(this._setLeader(null),this._masking&&this._setMasking(null)),this.maxOpen!==1/0&&this._openNotices<this.maxOpen){var n=function(t){if("waiting"===t.getState()&&(t.open(),e._openNotices>=e.maxOpen))return!1};"wait"===this.maxStrategy?this.forEach(n,{start:t,dir:"next"}):"close"===this.maxStrategy&&this.maxClosureCausesWait&&this.forEach(n,{start:t,dir:"older"})}this._openNotices<=0?(this._openNotices=0,this._overlayOpen&&this._removeOverlay()):this._collapsingModalState||this.queuePosition(0)}}},{key:"_handleNoticeOpened",value:function(t){var e=this;if(!t.getModuleHandled()){if(this._openNotices++,("ish"!==this.modal||!this._overlayOpen)&&this.maxOpen!==1/0&&this._openNotices>this.maxOpen&&"close"===this.maxStrategy){var n=this._openNotices-this.maxOpen;this.forEach((function(t){if(-1!==["opening","open"].indexOf(t.getState()))return t.close(!1,!1,e.maxClosureCausesWait),t===e._leader&&e._setLeader(null),!!--n}))}!0===this.modal&&this._insertOverlay(),"ish"!==this.modal||this._leader&&-1!==["opening","open","closing"].indexOf(this._leader.getState())||this._setLeader(t),"ish"===this.modal&&this._overlayOpen&&t._preventTimerClose(!0)}}},{key:"_shouldNoticeWait",value:function(){return!("ish"===this.modal&&this._overlayOpen)&&this.maxOpen!==1/0&&this._openNotices>=this.maxOpen&&"wait"===this.maxStrategy}},{key:"_insertOverlay",value:function(){var t=this;this._overlay||(this._overlay=document.createElement("div"),this._overlay.classList.add("pnotify-modal-overlay"),this.dir1&&this._overlay.classList.add("pnotify-modal-overlay-".concat(this.dir1)),this.overlayClose&&this._overlay.classList.add("pnotify-modal-overlay-closes"),this.context!==document.body&&(this._overlay.style.height="".concat(this.context.scrollHeight,"px"),this._overlay.style.width="".concat(this.context.scrollWidth,"px")),this._overlay.addEventListener("click",(function(){t.overlayClose&&(t._leader&&t._setLeader(null),t.forEach((function(e){-1===["closed","closing","waiting"].indexOf(e.getState())&&(e.hide||t.overlayClosesPinned?e.close():e.hide||"ish"!==t.modal||(t._leader?e.close(!1,!1,!0):t._setLeader(e)))}),{skipModuleHandled:!0}),t._overlayOpen&&t._removeOverlay())}))),this._overlay.parentNode!==this.context&&(this._overlay.classList.remove("pnotify-modal-overlay-in"),this._overlay=this.context.insertBefore(this._overlay,this.context.firstChild),this._overlayOpen=!0,this._overlayInserted=!0,window.requestAnimationFrame((function(){t._overlay.classList.add("pnotify-modal-overlay-in")}))),this._collapsingModalState=!1}},{key:"_removeOverlay",value:function(){var t=this;this._overlay.parentNode&&(this._overlay.classList.remove("pnotify-modal-overlay-in"),this._overlayOpen=!1,setTimeout((function(){t._overlayInserted=!1,t._overlay.parentNode&&t._overlay.parentNode.removeChild(t._overlay)}),250),setTimeout((function(){t._collapsingModalState=!1}),400))}},{key:"notices",get:function(){var t=[];return this.forEach((function(e){return t.push(e)})),t}},{key:"length",get:function(){return this._length}},{key:"leader",get:function(){return this._leader}}]),t}(),gt=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return f(Jt,e)};var $t=at.Map;function _t(t,e,n){var i=t.slice();return i[106]=e[n][0],i[107]=e[n][1],i}function kt(t,e,n){var i=t.slice();return i[106]=e[n][0],i[107]=e[n][1],i}function xt(t,e,n){var i=t.slice();return i[106]=e[n][0],i[107]=e[n][1],i}function bt(t,e,n){var i=t.slice();return i[106]=e[n][0],i[107]=e[n][1],i}function wt(t,e){var n,i,o,r=[{self:e[41]},e[107]],s=e[106].default;function a(t){for(var e={},n=0;n<r.length;n+=1)e=$(e,r[n]);return{props:e}}if(s)var c=new s(a());return{key:t,first:null,c:function(){n=S(),c&&dt(c.$$.fragment),i=S(),this.first=n},m:function(t,e){C(t,n,e),c&&ht(c,t,e),C(t,i,e),o=!0},p:function(t,e){var n=1088&e[1]?lt(r,[1024&e[1]&&{self:t[41]},64&e[1]&&ft(t[107])]):{};if(s!==(s=t[106].default)){if(c){it();var o=c;st(o.$$.fragment,1,0,(function(){pt(o,1)})),ot()}s?(dt((c=new s(a())).$$.fragment),rt(c.$$.fragment,1),ht(c,i.parentNode,i)):c=null}else s&&c.$set(n)},i:function(t){o||(c&&rt(c.$$.fragment,t),o=!0)},o:function(t){c&&st(c.$$.fragment,t),o=!1},d:function(t){t&&M(n),t&&M(i),c&&pt(c,t)}}}function Ot(t){var e,n,i,o,r;return{c:function(){e=T("div"),L(n=T("span"),"class",t[21]("closer")),L(e,"class",i="pnotify-closer ".concat(t[20]("closer")," ").concat(!t[16]||t[25]?"":"pnotify-hidden")),L(e,"role","button"),L(e,"tabindex","0"),L(e,"title",o=t[19].close)},m:function(i,o,s){C(i,e,o),O(e,n),s&&r(),r=N(e,"click",t[98])},p:function(t,n){33619968&n[0]&&i!==(i="pnotify-closer ".concat(t[20]("closer")," ").concat(!t[16]||t[25]?"":"pnotify-hidden"))&&L(e,"class",i),524288&n[0]&&o!==(o=t[19].close)&&L(e,"title",o)},d:function(t){t&&M(e),r()}}}function Ct(t){var e,n,i,o,r,s,a;return{c:function(){e=T("div"),L(n=T("span"),"class",i="".concat(t[21]("sticker")," ").concat(t[1]?t[21]("unstuck"):t[21]("stuck"))),L(e,"class",o="pnotify-sticker ".concat(t[20]("sticker")," ").concat(!t[18]||t[25]?"":"pnotify-hidden")),L(e,"role","button"),L(e,"aria-pressed",r=!t[1]),L(e,"tabindex","0"),L(e,"title",s=t[1]?t[19].stick:t[19].unstick)},m:function(i,o,r){C(i,e,o),O(e,n),r&&a(),a=N(e,"click",t[99])},p:function(t,a){2&a[0]&&i!==(i="".concat(t[21]("sticker")," ").concat(t[1]?t[21]("unstuck"):t[21]("stuck")))&&L(n,"class",i),33816576&a[0]&&o!==(o="pnotify-sticker ".concat(t[20]("sticker")," ").concat(!t[18]||t[25]?"":"pnotify-hidden"))&&L(e,"class",o),2&a[0]&&r!==(r=!t[1])&&L(e,"aria-pressed",r),524290&a[0]&&s!==(s=t[1]?t[19].stick:t[19].unstick)&&L(e,"title",s)},d:function(t){t&&M(e),a()}}}function Mt(t){var e,n,i;return{c:function(){e=T("div"),L(n=T("span"),"class",i=!0===t[11]?t[21](t[2]):t[11]),L(e,"class","pnotify-icon ".concat(t[20]("icon")))},m:function(i,o){C(i,e,o),O(e,n),t[100](e)},p:function(t,e){2052&e[0]&&i!==(i=!0===t[11]?t[21](t[2]):t[11])&&L(n,"class",i)},d:function(n){n&&M(e),t[100](null)}}}function Tt(t,e){var n,i,o,r=[{self:e[41]},e[107]],s=e[106].default;function a(t){for(var e={},n=0;n<r.length;n+=1)e=$(e,r[n]);return{props:e}}if(s)var c=new s(a());return{key:t,first:null,c:function(){n=S(),c&&dt(c.$$.fragment),i=S(),this.first=n},m:function(t,e){C(t,n,e),c&&ht(c,t,e),C(t,i,e),o=!0},p:function(t,e){var n=1152&e[1]?lt(r,[1024&e[1]&&{self:t[41]},128&e[1]&&ft(t[107])]):{};if(s!==(s=t[106].default)){if(c){it();var o=c;st(o.$$.fragment,1,0,(function(){pt(o,1)})),ot()}s?(dt((c=new s(a())).$$.fragment),rt(c.$$.fragment,1),ht(c,i.parentNode,i)):c=null}else s&&c.$set(n)},i:function(t){o||(c&&rt(c.$$.fragment,t),o=!0)},o:function(t){c&&st(c.$$.fragment,t),o=!1},d:function(t){t&&M(n),t&&M(i),c&&pt(c,t)}}}function Ht(t){var e,n=!t[32]&&Et(t);return{c:function(){e=T("div"),n&&n.c(),L(e,"class","pnotify-title ".concat(t[20]("title")))},m:function(i,o){C(i,e,o),n&&n.m(e,null),t[101](e)},p:function(t,i){t[32]?n&&(n.d(1),n=null):n?n.p(t,i):((n=Et(t)).c(),n.m(e,null))},d:function(i){i&&M(e),n&&n.d(),t[101](null)}}}function Et(t){var e;function n(t,e){return t[4]?Nt:St}var i=n(t),o=i(t);return{c:function(){o.c(),e=S()},m:function(t,n){o.m(t,n),C(t,e,n)},p:function(t,r){i===(i=n(t))&&o?o.p(t,r):(o.d(1),(o=i(t))&&(o.c(),o.m(e.parentNode,e)))},d:function(t){o.d(t),t&&M(e)}}}function St(t){var e,n;return{c:function(){e=T("span"),n=H(t[3]),L(e,"class","pnotify-pre-line")},m:function(t,i){C(t,e,i),O(e,n)},p:function(t,e){8&e[0]&&j(n,t[3])},d:function(t){t&&M(e)}}}function Nt(t){var e;return{c:function(){e=new W(t[3],null)},m:function(t,n){e.m(t,n)},p:function(t,n){8&n[0]&&e.p(t[3])},d:function(t){t&&e.d()}}}function Lt(t){var e,n=!t[33]&&At(t);return{c:function(){e=T("div"),n&&n.c(),L(e,"class","pnotify-text ".concat(t[20]("text"))),L(e,"style",t[31]),L(e,"role","alert")},m:function(i,o){C(i,e,o),n&&n.m(e,null),t[102](e)},p:function(t,i){t[33]?n&&(n.d(1),n=null):n?n.p(t,i):((n=At(t)).c(),n.m(e,null)),1&i[1]&&L(e,"style",t[31])},d:function(i){i&&M(e),n&&n.d(),t[102](null)}}}function At(t){var e;function n(t,e){return t[6]?Pt:jt}var i=n(t),o=i(t);return{c:function(){o.c(),e=S()},m:function(t,n){o.m(t,n),C(t,e,n)},p:function(t,r){i===(i=n(t))&&o?o.p(t,r):(o.d(1),(o=i(t))&&(o.c(),o.m(e.parentNode,e)))},d:function(t){o.d(t),t&&M(e)}}}function jt(t){var e,n;return{c:function(){e=T("span"),n=H(t[5]),L(e,"class","pnotify-pre-line")},m:function(t,i){C(t,e,i),O(e,n)},p:function(t,e){32&e[0]&&j(n,t[5])},d:function(t){t&&M(e)}}}function Pt(t){var e;return{c:function(){e=new W(t[5],null)},m:function(t,n){e.m(t,n)},p:function(t,n){32&n[0]&&e.p(t[5])},d:function(t){t&&e.d()}}}function Wt(t,e){var n,i,o,r=[{self:e[41]},e[107]],s=e[106].default;function a(t){for(var e={},n=0;n<r.length;n+=1)e=$(e,r[n]);return{props:e}}if(s)var c=new s(a());return{key:t,first:null,c:function(){n=S(),c&&dt(c.$$.fragment),i=S(),this.first=n},m:function(t,e){C(t,n,e),c&&ht(c,t,e),C(t,i,e),o=!0},p:function(t,e){var n=1280&e[1]?lt(r,[1024&e[1]&&{self:t[41]},256&e[1]&&ft(t[107])]):{};if(s!==(s=t[106].default)){if(c){it();var o=c;st(o.$$.fragment,1,0,(function(){pt(o,1)})),ot()}s?(dt((c=new s(a())).$$.fragment),rt(c.$$.fragment,1),ht(c,i.parentNode,i)):c=null}else s&&c.$set(n)},i:function(t){o||(c&&rt(c.$$.fragment,t),o=!0)},o:function(t){c&&st(c.$$.fragment,t),o=!1},d:function(t){t&&M(n),t&&M(i),c&&pt(c,t)}}}function Rt(t,e){var n,i,o,r=[{self:e[41]},e[107]],s=e[106].default;function a(t){for(var e={},n=0;n<r.length;n+=1)e=$(e,r[n]);return{props:e}}if(s)var c=new s(a());return{key:t,first:null,c:function(){n=S(),c&&dt(c.$$.fragment),i=S(),this.first=n},m:function(t,e){C(t,n,e),c&&ht(c,t,e),C(t,i,e),o=!0},p:function(t,e){var n=1536&e[1]?lt(r,[1024&e[1]&&{self:t[41]},512&e[1]&&ft(t[107])]):{};if(s!==(s=t[106].default)){if(c){it();var o=c;st(o.$$.fragment,1,0,(function(){pt(o,1)})),ot()}s?(dt((c=new s(a())).$$.fragment),rt(c.$$.fragment,1),ht(c,i.parentNode,i)):c=null}else s&&c.$set(n)},i:function(t){o||(c&&rt(c.$$.fragment,t),o=!0)},o:function(t){c&&st(c.$$.fragment,t),o=!1},d:function(t){t&&M(n),t&&M(i),c&&pt(c,t)}}}function It(t){for(var e,n,i,o,r,s,a,c,u,l,f,d,h,p,m,v,y=[],$=new $t,_=[],k=new $t,w=[],H=new $t,S=[],A=new $t,j=t[37],P=function(t){return t[106]},W=0;W<j.length;W+=1){var R=bt(t,j,W),I=P(R);$.set(I,y[W]=wt(I,R))}for(var D=t[15]&&!t[35]&&Ot(t),F=t[17]&&!t[35]&&Ct(t),q=!1!==t[11]&&Mt(t),B=t[38],z=function(t){return t[106]},U=0;U<B.length;U+=1){var G=xt(t,B,U),J=z(G);k.set(J,_[U]=Tt(J,G))}for(var K=!1!==t[3]&&Ht(t),Q=!1!==t[5]&&Lt(t),V=t[39],X=function(t){return t[106]},Y=0;Y<V.length;Y+=1){var Z=kt(t,V,Y),tt=X(Z);H.set(tt,w[Y]=Wt(tt,Z))}for(var et=t[40],nt=function(t){return t[106]},at=0;at<et.length;at+=1){var lt=_t(t,et,at),ft=nt(lt);A.set(ft,S[at]=Rt(ft,lt))}return{c:function(){e=T("div"),n=T("div");for(var m=0;m<y.length;m+=1)y[m].c();i=E(),D&&D.c(),o=E(),F&&F.c(),r=E(),q&&q.c(),s=E(),a=T("div");for(var v=0;v<_.length;v+=1)_[v].c();c=E(),K&&K.c(),u=E(),Q&&Q.c(),l=E();for(var g=0;g<w.length;g+=1)w[g].c();f=E();for(var $=0;$<S.length;$+=1)S[$].c();L(a,"class","pnotify-content ".concat(t[20]("content"))),L(n,"class",d="pnotify-container ".concat(t[20]("container")," ").concat(t[20](t[2])," ").concat(t[14]?"pnotify-shadow":""," ").concat(t[26].container.join(" "))),L(n,"style",h="".concat(t[29]," ").concat(t[30])),L(n,"role","alert"),L(e,"data-pnotify",""),L(e,"class",p="pnotify ".concat(!1!==t[11]?"pnotify-with-icon":""," ").concat(t[20]("elem")," pnotify-mode-").concat(t[7]," ").concat(t[8]," ").concat(t[23]," ").concat(t[24]," ").concat(t[36]," ").concat("fade"===t[12]?"pnotify-fade-".concat(t[13]):""," ").concat(t[34]?"pnotify-modal ".concat(t[9]):t[10]," ").concat(t[27]?"pnotify-masking":""," ").concat(t[28]?"pnotify-masking-in":""," ").concat(t[26].elem.join(" "))),L(e,"aria-live","assertive"),L(e,"role","alertdialog")},m:function(d,h,p){C(d,e,h),O(e,n);for(var $=0;$<y.length;$+=1)y[$].m(n,null);O(n,i),D&&D.m(n,null),O(n,o),F&&F.m(n,null),O(n,r),q&&q.m(n,null),O(n,s),O(n,a);for(var k=0;k<_.length;k+=1)_[k].m(a,null);O(a,c),K&&K.m(a,null),O(a,u),Q&&Q.m(a,null),O(a,l);for(var M=0;M<w.length;M+=1)w[M].m(a,null);t[103](a),O(n,f);for(var T=0;T<S.length;T+=1)S[T].m(n,null);var H;t[104](n),t[105](e),m=!0,p&&x(v),v=[(H=t[42].call(null,e),H&&b(H.destroy)?H.destroy:g),N(e,"mouseenter",t[43]),N(e,"mouseleave",t[44]),N(e,"focusin",t[43]),N(e,"focusout",t[44])]},p:function(t,f){if(1088&f[1]){var v=t[37];it(),y=ut(y,f,P,1,t,v,$,n,ct,wt,i,bt),ot()}if(t[15]&&!t[35]?D?D.p(t,f):((D=Ot(t)).c(),D.m(n,o)):D&&(D.d(1),D=null),t[17]&&!t[35]?F?F.p(t,f):((F=Ct(t)).c(),F.m(n,r)):F&&(F.d(1),F=null),!1!==t[11]?q?q.p(t,f):((q=Mt(t)).c(),q.m(n,s)):q&&(q.d(1),q=null),1152&f[1]){var g=t[38];it(),_=ut(_,f,z,1,t,g,k,a,ct,Tt,c,xt),ot()}if(!1!==t[3]?K?K.p(t,f):((K=Ht(t)).c(),K.m(a,u)):K&&(K.d(1),K=null),!1!==t[5]?Q?Q.p(t,f):((Q=Lt(t)).c(),Q.m(a,l)):Q&&(Q.d(1),Q=null),1280&f[1]){var x=t[39];it(),w=ut(w,f,X,1,t,x,H,a,ct,Wt,null,kt),ot()}if(1536&f[1]){var b=t[40];it(),S=ut(S,f,nt,1,t,b,A,n,ct,Rt,null,_t),ot()}(!m||67125252&f[0]&&d!==(d="pnotify-container ".concat(t[20]("container")," ").concat(t[20](t[2])," ").concat(t[14]?"pnotify-shadow":""," ").concat(t[26].container.join(" "))))&&L(n,"class",d),(!m||1610612736&f[0]&&h!==(h="".concat(t[29]," ").concat(t[30])))&&L(n,"style",h),(!m||494944128&f[0]|40&f[1]&&p!==(p="pnotify ".concat(!1!==t[11]?"pnotify-with-icon":""," ").concat(t[20]("elem")," pnotify-mode-").concat(t[7]," ").concat(t[8]," ").concat(t[23]," ").concat(t[24]," ").concat(t[36]," ").concat("fade"===t[12]?"pnotify-fade-".concat(t[13]):""," ").concat(t[34]?"pnotify-modal ".concat(t[9]):t[10]," ").concat(t[27]?"pnotify-masking":""," ").concat(t[28]?"pnotify-masking-in":""," ").concat(t[26].elem.join(" "))))&&L(e,"class",p)},i:function(t){if(!m){for(var e=0;e<j.length;e+=1)rt(y[e]);for(var n=0;n<B.length;n+=1)rt(_[n]);for(var i=0;i<V.length;i+=1)rt(w[i]);for(var o=0;o<et.length;o+=1)rt(S[o]);m=!0}},o:function(t){for(var e=0;e<y.length;e+=1)st(y[e]);for(var n=0;n<_.length;n+=1)st(_[n]);for(var i=0;i<w.length;i+=1)st(w[i]);for(var o=0;o<S.length;o+=1)st(S[o]);m=!1},d:function(n){n&&M(e);for(var i=0;i<y.length;i+=1)y[i].d();D&&D.d(),F&&F.d(),q&&q.d();for(var o=0;o<_.length;o+=1)_[o].d();K&&K.d(),Q&&Q.d();for(var r=0;r<w.length;r+=1)w[r].d();t[103](null);for(var s=0;s<S.length;s+=1)S[s].d();t[104](null),t[105](null),x(v)}}}function Dt(t,n){"object"!==e(t)&&(t={text:t}),n&&(t.type=n);var i=document.body;return"stack"in t&&t.stack&&t.stack.context&&(i=t.stack.context),{target:i,props:t}}var Ft,qt=new yt({dir1:"down",dir2:"left",firstpos1:25,firstpos2:25,spacing1:36,spacing2:36,push:"bottom"}),Bt=new Map,zt={type:"notice",title:!1,titleTrusted:!1,text:!1,textTrusted:!1,styling:"brighttheme",icons:"brighttheme",mode:"no-preference",addClass:"",addModalClass:"",addModelessClass:"",autoOpen:!0,width:"360px",minHeight:"16px",maxTextHeight:"200px",icon:!0,animation:"fade",animateSpeed:"normal",shadow:!0,hide:!0,delay:8e3,mouseReset:!0,closer:!0,closerHover:!0,sticker:!0,stickerHover:!0,labels:{close:"Close",stick:"Pin",unstick:"Unpin"},remove:!0,destroy:!0,stack:qt,modules:Bt};function Ut(){qt.context||(qt.context=document.body),window.addEventListener("resize",(function(){Ft&&clearTimeout(Ft),Ft=setTimeout((function(){var t=new Event("pnotify:position");document.body.dispatchEvent(t),Ft=null}),10)}))}function Gt(t,e,n){var i=I(),o=D(),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture"].concat(m(e));function i(e){F(t,e)}return function(t){for(var e=[],o=0;o<n.length;o++)e.push(N(t,n[o],i));return{destroy:function(){for(var t=0;t<e.length;t++)e[t]()}}}}(i,["pnotify:init","pnotify:mount","pnotify:update","pnotify:beforeOpen","pnotify:afterOpen","pnotify:enterModal","pnotify:leaveModal","pnotify:beforeClose","pnotify:afterClose","pnotify:beforeDestroy","pnotify:afterDestroy","focusin","focusout","animationend","transitionend"]),s=e.modules,c=void 0===s?new Map(zt.modules):s,u=e.stack,l=void 0===u?zt.stack:u,f={elem:null,container:null,content:null,iconContainer:null,titleContainer:null,textContainer:null},d=a({},zt);Ut("init",{notice:i,defaults:d});var h,v=e.type,y=void 0===v?d.type:v,g=e.title,$=void 0===g?d.title:g,_=e.titleTrusted,k=void 0===_?d.titleTrusted:_,x=e.text,b=void 0===x?d.text:x,w=e.textTrusted,O=void 0===w?d.textTrusted:w,C=e.styling,M=void 0===C?d.styling:C,T=e.icons,H=void 0===T?d.icons:T,E=e.mode,S=void 0===E?d.mode:E,L=e.addClass,A=void 0===L?d.addClass:L,j=e.addModalClass,P=void 0===j?d.addModalClass:j,W=e.addModelessClass,R=void 0===W?d.addModelessClass:W,q=e.autoOpen,z=void 0===q?d.autoOpen:q,U=e.width,G=void 0===U?d.width:U,J=e.minHeight,K=void 0===J?d.minHeight:J,V=e.maxTextHeight,X=void 0===V?d.maxTextHeight:V,Y=e.icon,Z=void 0===Y?d.icon:Y,tt=e.animation,et=void 0===tt?d.animation:tt,nt=e.animateSpeed,it=void 0===nt?d.animateSpeed:nt,ot=e.shadow,rt=void 0===ot?d.shadow:ot,st=e.hide,at=void 0===st?d.hide:st,ct=e.delay,ut=void 0===ct?d.delay:ct,lt=e.mouseReset,ft=void 0===lt?d.mouseReset:lt,dt=e.closer,ht=void 0===dt?d.closer:dt,pt=e.closerHover,mt=void 0===pt?d.closerHover:pt,vt=e.sticker,yt=void 0===vt?d.sticker:vt,gt=e.stickerHover,$t=void 0===gt?d.stickerHover:gt,_t=e.labels,kt=void 0===_t?d.labels:_t,xt=e.remove,bt=void 0===xt?d.remove:xt,wt=e.destroy,Ot=void 0===wt?d.destroy:wt,Ct="closed",Mt=null,Tt=null,Ht=null,Et=!1,St="",Nt="",Lt=!1,At=!1,jt={elem:[],container:[]},Pt=!1,Wt=!1,Rt=!1,It=!1,Dt=null,Ft=at,qt=NaN,Bt=!1;function Ut(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a({notice:i},e);"init"===t&&Array.from(c).forEach((function(t){var e=p(t,2),i=e[0];e[1];return"init"in i&&i.init(n)}));var r=f.elem||l&&l.context||document.body;if(!r)return o("pnotify:".concat(t),n),!0;var s=new Event("pnotify:".concat(t),{bubbles:"init"===t||"mount"===t,cancelable:t.startsWith("before")});return s.detail=n,r.dispatchEvent(s),!s.defaultPrevented}function Gt(){var t=l&&l.context||document.body;if(!t)throw new Error("No context to insert this notice into.");if(!f.elem)throw new Error("Trying to insert notice before element is available.");f.elem.parentNode!==t&&t.appendChild(f.elem)}function Jt(){f.elem&&f.elem.parentNode.removeChild(f.elem)}h=function(){Ut("mount"),z&&Qt()},I().$$.on_mount.push(h),function(t){I().$$.before_update.push(t)}((function(){Ut("update"),"closed"!==Ct&&"waiting"!==Ct&&at!==Ft&&(at?Ft||ie():ne()),"closed"!==Ct&&"closing"!==Ct&&l&&!l._collapsingModalState&&l.queuePosition(),Ft=at}));var Kt=e.open,Qt=void 0===Kt?function(t){if("opening"!==Ct)if("open"!==Ct){if(!Pt&&l&&l._shouldNoticeWait())n(81,Ct="waiting");else if(Ut("beforeOpen",{immediate:t})){n(81,Ct="opening"),n(27,Rt=!1),n(23,St="pnotify-initial pnotify-hidden");var e=function(){at&&ie(),n(81,Ct="open"),Ut("afterOpen",{immediate:t})};l&&l._handleNoticeOpened(i),Wt?e():(Gt(),window.requestAnimationFrame((function(){"opening"===Ct&&(l&&(n(45,l._animation=!1,l),"top"===l.push&&l._resetPositionData(),l._positionNotice(i),l.queuePosition(0),n(45,l._animation=!0,l)),Zt(e,t))})))}}else at&&ie()}:Kt,Vt=e.close,Xt=void 0===Vt?function(t,e,o){if("closing"!==Ct&&"closed"!==Ct){var r=function(){Ut("beforeDestroy")&&(l&&l._removeNotice(i),i.$destroy(),Ut("afterDestroy"))};if("waiting"===Ct){if(o)return;return n(81,Ct="closed"),void(Ot&&!o&&r())}Ut("beforeClose",{immediate:t,timerHide:e,waitAfterward:o})&&(n(81,Ct="closing"),Lt=!!e,Mt&&"prevented"!==Mt&&clearTimeout&&clearTimeout(Mt),n(82,Mt=null),ee((function(){n(25,At=!1),Lt=!1,n(81,Ct=o?"waiting":"closed"),Ut("afterClose",{immediate:t,timerHide:e,waitAfterward:o}),l&&l._handleNoticeClosed(i),Ot&&!o?r():bt&&!o&&Jt()}),t))}}:Vt,Yt=e.animateIn,Zt=void 0===Yt?function(t,e){Et="in";var i=function e(n){if(!(n&&f.elem&&n.target!==f.elem||(f.elem&&f.elem.removeEventListener("transitionend",e),Tt&&clearTimeout(Tt),"in"!==Et))){var i=Wt;if(!i&&f.elem){var o=f.elem.getBoundingClientRect();for(var r in o)if(o[r]>0){i=!0;break}}i?(t&&t.call(),Et=!1):Tt=setTimeout(e,40)}};"fade"!==et||e?(n(23,St="pnotify-in"),Q().then((function(){i()}))):(f.elem&&f.elem.addEventListener("transitionend",i),n(23,St="pnotify-in"),Q().then((function(){n(23,St="pnotify-in pnotify-fade-in"),Tt=setTimeout(i,650)})))}:Yt,te=e.animateOut,ee=void 0===te?function(t,e){Et="out";var i=function e(i){if(!(i&&f.elem&&i.target!==f.elem||(f.elem&&f.elem.removeEventListener("transitionend",e),Ht&&clearTimeout(Ht),"out"!==Et))){var o=Wt;if(!o&&f.elem){var r=f.elem.getBoundingClientRect();for(var s in r)if(r[s]>0){o=!0;break}}f.elem&&f.elem.style.opacity&&"0"!==f.elem.style.opacity&&o?Ht=setTimeout(e,40):(n(23,St=""),t&&t.call(),Et=!1)}};"fade"!==et||e?(n(23,St=""),Q().then((function(){i()}))):(f.elem&&f.elem.addEventListener("transitionend",i),n(23,St="pnotify-in"),Ht=setTimeout(i,650))}:te;function ne(){Mt&&"prevented"!==Mt&&(clearTimeout(Mt),n(82,Mt=null)),Ht&&clearTimeout(Ht),"closing"===Ct&&(n(81,Ct="open"),Et=!1,n(23,St="fade"===et?"pnotify-in pnotify-fade-in":"pnotify-in"))}function ie(){"prevented"!==Mt&&(ne(),ut!==1/0&&n(82,Mt=setTimeout((function(){return Xt(!1,!0)}),isNaN(ut)?0:ut)))}var oe,re,se,ae,ce,ue,le,fe,de,he,pe,me;return t.$set=function(t){"modules"in t&&n(46,c=t.modules),"stack"in t&&n(45,l=t.stack),"type"in t&&n(2,y=t.type),"title"in t&&n(3,$=t.title),"titleTrusted"in t&&n(4,k=t.titleTrusted),"text"in t&&n(5,b=t.text),"textTrusted"in t&&n(6,O=t.textTrusted),"styling"in t&&n(47,M=t.styling),"icons"in t&&n(48,H=t.icons),"mode"in t&&n(7,S=t.mode),"addClass"in t&&n(8,A=t.addClass),"addModalClass"in t&&n(9,P=t.addModalClass),"addModelessClass"in t&&n(10,R=t.addModelessClass),"autoOpen"in t&&n(49,z=t.autoOpen),"width"in t&&n(50,G=t.width),"minHeight"in t&&n(51,K=t.minHeight),"maxTextHeight"in t&&n(52,X=t.maxTextHeight),"icon"in t&&n(11,Z=t.icon),"animation"in t&&n(12,et=t.animation),"animateSpeed"in t&&n(13,it=t.animateSpeed),"shadow"in t&&n(14,rt=t.shadow),"hide"in t&&n(1,at=t.hide),"delay"in t&&n(53,ut=t.delay),"mouseReset"in t&&n(54,ft=t.mouseReset),"closer"in t&&n(15,ht=t.closer),"closerHover"in t&&n(16,mt=t.closerHover),"sticker"in t&&n(17,yt=t.sticker),"stickerHover"in t&&n(18,$t=t.stickerHover),"labels"in t&&n(19,kt=t.labels),"remove"in t&&n(55,bt=t.remove),"destroy"in t&&n(56,Ot=t.destroy),"open"in t&&n(59,Qt=t.open),"close"in t&&n(22,Xt=t.close),"animateIn"in t&&n(60,Zt=t.animateIn),"animateOut"in t&&n(61,ee=t.animateOut)},t.$$.update=function(){524288&t.$$.dirty[1]&&n(29,oe="string"==typeof G?"width: ".concat(G,";"):""),1048576&t.$$.dirty[1]&&n(30,re="string"==typeof K?"min-height: ".concat(K,";"):""),2097152&t.$$.dirty[1]&&n(31,se="string"==typeof X?"max-height: ".concat(X,"; overflow-y: auto; overscroll-behavior: contain; padding-bottom:.03em;"):""),8&t.$$.dirty[0]&&n(32,ae=$ instanceof HTMLElement),32&t.$$.dirty[0]&&n(33,ce=b instanceof HTMLElement),16384&t.$$.dirty[1]|1572864&t.$$.dirty[2]&&n(34,ue=l&&(!0===l.modal||"ish"===l.modal&&"prevented"===Mt)&&-1!==["open","opening","closing"].indexOf(Ct)),1792&t.$$.dirty[0]|8&t.$$.dirty[1]&&n(35,le=A.match(/\bnonblock\b/)||P.match(/\bnonblock\b/)&&ue||R.match(/\bnonblock\b/)&&!ue),16384&t.$$.dirty[1]&&n(36,fe=l&&l.dir1?"pnotify-stack-".concat(l.dir1):""),32768&t.$$.dirty[1]&&n(37,de=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"PrependContainer"===n.position}))),32768&t.$$.dirty[1]&&n(38,he=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"PrependContent"===n.position}))),32768&t.$$.dirty[1]&&n(39,pe=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"AppendContent"===n.position}))),32768&t.$$.dirty[1]&&n(40,me=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"AppendContainer"===n.position}))),9&t.$$.dirty[0]|2&t.$$.dirty[1]&&ae&&f.titleContainer&&f.titleContainer.appendChild($),33&t.$$.dirty[0]|4&t.$$.dirty[1]&&ce&&f.textContainer&&f.textContainer.appendChild(b),16384&t.$$.dirty[1]|536870912&t.$$.dirty[2]&&qt!==l&&(qt&&qt._removeNotice(i),l&&l._addNotice(i),n(91,qt=l)),8&t.$$.dirty[1]|1073741824&t.$$.dirty[2]&&Bt!==ue&&(Ut(ue?"enterModal":"leaveModal"),n(92,Bt=ue))},[f,at,y,$,k,b,O,S,A,P,R,Z,et,it,rt,ht,mt,yt,$t,kt,function(t){return"string"==typeof M?"".concat(M,"-").concat(t):t in M?M[t]:"".concat(M.prefix,"-").concat(t)},function(t){return"string"==typeof H?"".concat(H,"-icon-").concat(t):t in H?H[t]:"".concat(H.prefix,"-icon-").concat(t)},Xt,St,Nt,At,jt,Rt,It,oe,re,se,ae,ce,ue,le,fe,de,he,pe,me,i,r,function(t){if(n(25,At=!0),ft&&"closing"===Ct){if(!Lt)return;ne()}at&&ft&&ne()},function(t){n(25,At=!1),at&&ft&&"out"!==Et&&ie()},l,c,M,H,z,G,K,X,ut,ft,bt,Ot,function(){return Ct},function(){return Mt},Qt,Zt,ee,ne,ie,function(t){t?(ne(),n(82,Mt="prevented")):"prevented"===Mt&&(n(82,Mt=null),"open"===Ct&&at&&ie())},function(){return i.$on.apply(i,arguments)},function(){return i.$set.apply(i,arguments)},function(t,e){o(t,e)},function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){var i=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];-1===jt[t].indexOf(i)&&jt[t].push(i)}n(26,jt)},function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){var i=e+1<1||arguments.length<=e+1?void 0:arguments[e+1],o=jt[t].indexOf(i);-1!==o&&jt[t].splice(o,1)}n(26,jt)},function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){var n=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];if(-1===jt[t].indexOf(n))return!1}return!0},function(){return Pt},function(t){return Pt=t},function(){return Wt},function(t){return Wt=t},function(t){return Et=t},function(){return St},function(t){return n(23,St=t)},function(){return Nt},function(t){return n(24,Nt=t)},function(t,e,i){if(Dt&&clearTimeout(Dt),Rt!==t)if(t)n(27,Rt=!0),n(28,It=!!e),Gt(),Q().then((function(){window.requestAnimationFrame((function(){if(Rt)if(e&&i)i();else{n(28,It=!0);var t=function t(){f.elem&&f.elem.removeEventListener("transitionend",t),Dt&&clearTimeout(Dt),It&&i&&i()};f.elem&&f.elem.addEventListener("transitionend",t),Dt=setTimeout(t,650)}}))}));else if(e)n(27,Rt=!1),n(28,It=!1),bt&&-1===["open","opening","closing"].indexOf(Ct)&&Jt(),i&&i();else{var o=function t(){f.elem&&f.elem.removeEventListener("transitionend",t),Dt&&clearTimeout(Dt),It||(n(27,Rt=!1),bt&&-1===["open","opening","closing"].indexOf(Ct)&&Jt(),i&&i())};n(28,It=!1),f.elem&&f.elem.addEventListener("transitionend",o),f.elem&&f.elem.style.opacity,Dt=setTimeout(o,650)}},Ct,Mt,Tt,Ht,Et,Lt,Pt,Wt,Dt,Ft,qt,Bt,o,d,Ut,Gt,Jt,function(){return Xt(!1)},function(){return n(1,at=!at)},function(t){B[t?"unshift":"push"]((function(){f.iconContainer=t,n(0,f)}))},function(t){B[t?"unshift":"push"]((function(){f.titleContainer=t,n(0,f)}))},function(t){B[t?"unshift":"push"]((function(){f.textContainer=t,n(0,f)}))},function(t){B[t?"unshift":"push"]((function(){f.content=t,n(0,f)}))},function(t){B[t?"unshift":"push"]((function(){f.container=t,n(0,f)}))},function(t){B[t?"unshift":"push"]((function(){f.elem=t,n(0,f)}))}]}window&&document.body?Ut():document.addEventListener("DOMContentLoaded",Ut);var Jt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(r,t);var e,i=(e=r,function(){var t,n=c(e);if(l()){var i=c(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return h(this,t)});function r(t){var e;return n(this,r),function(t,e,n,i,o,r){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],a=P;R(t);var c=e.props||{},u=t.$$={fragment:null,ctx:null,props:r,update:g,not_equal:o,bound:k(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:k(),dirty:s},l=!1;if(u.ctx=n?n(t,c,(function(e,n){var i=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return u.ctx&&o(u.ctx[e],u.ctx[e]=i)&&(u.bound[e]&&u.bound[e](i),l&&mt(t,e)),n})):[],u.update(),l=!0,x(u.before_update),u.fragment=!!i&&i(u.ctx),e.target){if(e.hydrate){var f=A(e.target);u.fragment&&u.fragment.l(f),f.forEach(M)}else u.fragment&&u.fragment.c();e.intro&&rt(t.$$.fragment),ht(t,e.target,e.anchor),Z()}R(a)}(d(e=i.call(this)),t,Gt,It,w,{modules:46,stack:45,refs:0,type:2,title:3,titleTrusted:4,text:5,textTrusted:6,styling:47,icons:48,mode:7,addClass:8,addModalClass:9,addModelessClass:10,autoOpen:49,width:50,minHeight:51,maxTextHeight:52,icon:11,animation:12,animateSpeed:13,shadow:14,hide:1,delay:53,mouseReset:54,closer:15,closerHover:16,sticker:17,stickerHover:18,labels:19,remove:55,destroy:56,getState:57,getTimer:58,getStyle:20,getIcon:21,open:59,close:22,animateIn:60,animateOut:61,cancelClose:62,queueClose:63,_preventTimerClose:64,on:65,update:66,fire:67,addModuleClass:68,removeModuleClass:69,hasModuleClass:70,getModuleHandled:71,setModuleHandled:72,getModuleOpen:73,setModuleOpen:74,setAnimating:75,getAnimatingClass:76,setAnimatingClass:77,_getMoveClass:78,_setMoveClass:79,_setMasking:80},[-1,-1,-1,-1]),e}return o(r,[{key:"modules",get:function(){return this.$$.ctx[46]},set:function(t){this.$set({modules:t}),Z()}},{key:"stack",get:function(){return this.$$.ctx[45]},set:function(t){this.$set({stack:t}),Z()}},{key:"refs",get:function(){return this.$$.ctx[0]}},{key:"type",get:function(){return this.$$.ctx[2]},set:function(t){this.$set({type:t}),Z()}},{key:"title",get:function(){return this.$$.ctx[3]},set:function(t){this.$set({title:t}),Z()}},{key:"titleTrusted",get:function(){return this.$$.ctx[4]},set:function(t){this.$set({titleTrusted:t}),Z()}},{key:"text",get:function(){return this.$$.ctx[5]},set:function(t){this.$set({text:t}),Z()}},{key:"textTrusted",get:function(){return this.$$.ctx[6]},set:function(t){this.$set({textTrusted:t}),Z()}},{key:"styling",get:function(){return this.$$.ctx[47]},set:function(t){this.$set({styling:t}),Z()}},{key:"icons",get:function(){return this.$$.ctx[48]},set:function(t){this.$set({icons:t}),Z()}},{key:"mode",get:function(){return this.$$.ctx[7]},set:function(t){this.$set({mode:t}),Z()}},{key:"addClass",get:function(){return this.$$.ctx[8]},set:function(t){this.$set({addClass:t}),Z()}},{key:"addModalClass",get:function(){return this.$$.ctx[9]},set:function(t){this.$set({addModalClass:t}),Z()}},{key:"addModelessClass",get:function(){return this.$$.ctx[10]},set:function(t){this.$set({addModelessClass:t}),Z()}},{key:"autoOpen",get:function(){return this.$$.ctx[49]},set:function(t){this.$set({autoOpen:t}),Z()}},{key:"width",get:function(){return this.$$.ctx[50]},set:function(t){this.$set({width:t}),Z()}},{key:"minHeight",get:function(){return this.$$.ctx[51]},set:function(t){this.$set({minHeight:t}),Z()}},{key:"maxTextHeight",get:function(){return this.$$.ctx[52]},set:function(t){this.$set({maxTextHeight:t}),Z()}},{key:"icon",get:function(){return this.$$.ctx[11]},set:function(t){this.$set({icon:t}),Z()}},{key:"animation",get:function(){return this.$$.ctx[12]},set:function(t){this.$set({animation:t}),Z()}},{key:"animateSpeed",get:function(){return this.$$.ctx[13]},set:function(t){this.$set({animateSpeed:t}),Z()}},{key:"shadow",get:function(){return this.$$.ctx[14]},set:function(t){this.$set({shadow:t}),Z()}},{key:"hide",get:function(){return this.$$.ctx[1]},set:function(t){this.$set({hide:t}),Z()}},{key:"delay",get:function(){return this.$$.ctx[53]},set:function(t){this.$set({delay:t}),Z()}},{key:"mouseReset",get:function(){return this.$$.ctx[54]},set:function(t){this.$set({mouseReset:t}),Z()}},{key:"closer",get:function(){return this.$$.ctx[15]},set:function(t){this.$set({closer:t}),Z()}},{key:"closerHover",get:function(){return this.$$.ctx[16]},set:function(t){this.$set({closerHover:t}),Z()}},{key:"sticker",get:function(){return this.$$.ctx[17]},set:function(t){this.$set({sticker:t}),Z()}},{key:"stickerHover",get:function(){return this.$$.ctx[18]},set:function(t){this.$set({stickerHover:t}),Z()}},{key:"labels",get:function(){return this.$$.ctx[19]},set:function(t){this.$set({labels:t}),Z()}},{key:"remove",get:function(){return this.$$.ctx[55]},set:function(t){this.$set({remove:t}),Z()}},{key:"destroy",get:function(){return this.$$.ctx[56]},set:function(t){this.$set({destroy:t}),Z()}},{key:"getState",get:function(){return this.$$.ctx[57]}},{key:"getTimer",get:function(){return this.$$.ctx[58]}},{key:"getStyle",get:function(){return this.$$.ctx[20]}},{key:"getIcon",get:function(){return this.$$.ctx[21]}},{key:"open",get:function(){return this.$$.ctx[59]},set:function(t){this.$set({open:t}),Z()}},{key:"close",get:function(){return this.$$.ctx[22]},set:function(t){this.$set({close:t}),Z()}},{key:"animateIn",get:function(){return this.$$.ctx[60]},set:function(t){this.$set({animateIn:t}),Z()}},{key:"animateOut",get:function(){return this.$$.ctx[61]},set:function(t){this.$set({animateOut:t}),Z()}},{key:"cancelClose",get:function(){return this.$$.ctx[62]}},{key:"queueClose",get:function(){return this.$$.ctx[63]}},{key:"_preventTimerClose",get:function(){return this.$$.ctx[64]}},{key:"on",get:function(){return this.$$.ctx[65]}},{key:"update",get:function(){return this.$$.ctx[66]}},{key:"fire",get:function(){return this.$$.ctx[67]}},{key:"addModuleClass",get:function(){return this.$$.ctx[68]}},{key:"removeModuleClass",get:function(){return this.$$.ctx[69]}},{key:"hasModuleClass",get:function(){return this.$$.ctx[70]}},{key:"getModuleHandled",get:function(){return this.$$.ctx[71]}},{key:"setModuleHandled",get:function(){return this.$$.ctx[72]}},{key:"getModuleOpen",get:function(){return this.$$.ctx[73]}},{key:"setModuleOpen",get:function(){return this.$$.ctx[74]}},{key:"setAnimating",get:function(){return this.$$.ctx[75]}},{key:"getAnimatingClass",get:function(){return this.$$.ctx[76]}},{key:"setAnimatingClass",get:function(){return this.$$.ctx[77]}},{key:"_getMoveClass",get:function(){return this.$$.ctx[78]}},{key:"_setMoveClass",get:function(){return this.$$.ctx[79]}},{key:"_setMasking",get:function(){return this.$$.ctx[80]}}]),r}(vt);t.Stack=yt,t.alert=function(t){return gt(Dt(t))},t.default=Jt,t.defaultModules=Bt,t.defaultStack=qt,t.defaults=zt,t.error=function(t){return gt(Dt(t,"error"))},t.info=function(t){return gt(Dt(t,"info"))},t.notice=function(t){return gt(Dt(t,"notice"))},t.success=function(t){return gt(Dt(t,"success"))},Object.defineProperty(t,"__esModule",{value:!0})}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/domain-browser/source/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/domain-browser/source/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file should be ES5 compatible
/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */


module.exports = (function () {
	// Import Events
	var events = __webpack_require__(/*! events */ "./node_modules/events/events.js")

	// Export Domain
	var domain = {}
	domain.createDomain = domain.create = function () {
		var d = new events.EventEmitter()

		function emitError (e) {
			d.emit('error', e)
		}

		d.add = function (emitter) {
			emitter.on('error', emitError)
		}
		d.remove = function (emitter) {
			emitter.removeListener('error', emitError)
		}
		d.bind = function (fn) {
			return function () {
				var args = Array.prototype.slice.call(arguments)
				try {
					fn.apply(null, args)
				}
				catch (err) {
					emitError(err)
				}
			}
		}
		d.intercept = function (fn) {
			return function (err) {
				if ( err ) {
					emitError(err)
				}
				else {
					var args = Array.prototype.slice.call(arguments, 1)
					try {
						fn.apply(null, args)
					}
					catch (err) {
						emitError(err)
					}
				}
			}
		}
		d.run = function (fn) {
			try {
				fn()
			}
			catch (err) {
				emitError(err)
			}
			return this
		}
		d.dispose = function () {
			this.removeAllListeners()
			return this
		}
		d.enter = d.exit = function () {
			return this
		}
		return d
	}
	return domain
}).call(this)


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/gentelella/build/js/custom.min.js":
/*!********************************************************!*\
  !*** ./node_modules/gentelella/build/js/custom.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function init_sidebar(){var a=function(){$RIGHT_COL.css("min-height",$(window).height());var a=$BODY.outerHeight(),b=$BODY.hasClass("footer_fixed")?-10:$FOOTER.height(),c=$LEFT_COL.eq(1).height()+$SIDEBAR_FOOTER.height(),d=a<c?c:a;d-=$NAV_MENU.height()+b,$RIGHT_COL.css("min-height",d)};$SIDEBAR_MENU.find("a").on("click",function(b){var c=$(this).parent();c.is(".active")?(c.removeClass("active active-sm"),$("ul:first",c).slideUp(function(){a()})):(c.parent().is(".child_menu")?$BODY.is(".nav-sm")&&($SIDEBAR_MENU.find("li").removeClass("active active-sm"),$SIDEBAR_MENU.find("li ul").slideUp()):($SIDEBAR_MENU.find("li").removeClass("active active-sm"),$SIDEBAR_MENU.find("li ul").slideUp()),c.addClass("active"),$("ul:first",c).slideDown(function(){a()}))}),$MENU_TOGGLE.on("click",function(){$BODY.hasClass("nav-md")?($SIDEBAR_MENU.find("li.active ul").hide(),$SIDEBAR_MENU.find("li.active").addClass("active-sm").removeClass("active")):($SIDEBAR_MENU.find("li.active-sm ul").show(),$SIDEBAR_MENU.find("li.active-sm").addClass("active").removeClass("active-sm")),$BODY.toggleClass("nav-md nav-sm"),a()}),$SIDEBAR_MENU.find('a[href="'+CURRENT_URL+'"]').parent("li").addClass("current-page"),$SIDEBAR_MENU.find("a").filter(function(){return this.href==CURRENT_URL}).parent("li").addClass("current-page").parents("ul").slideDown(function(){a()}).parent().addClass("active"),$(window).smartresize(function(){a()}),a(),$.fn.mCustomScrollbar&&$(".menu_fixed").mCustomScrollbar({autoHideScrollbar:!0,theme:"minimal",mouseWheel:{preventDefault:!0}})}function countChecked(){"all"===checkState&&$(".bulk_action input[name='table_records']").iCheck("check"),"none"===checkState&&$(".bulk_action input[name='table_records']").iCheck("uncheck");var a=$(".bulk_action input[name='table_records']:checked").length;a?($(".column-title").hide(),$(".bulk-actions").show(),$(".action-cnt").html(a+" Records Selected")):($(".column-title").show(),$(".bulk-actions").hide())}function gd(a,b,c){return new Date(a,b-1,c).getTime()}function init_flot_chart(){if("undefined"!=typeof $.plot){console.log("init_flot_chart");for(var a=[[gd(2012,1,1),17],[gd(2012,1,2),74],[gd(2012,1,3),6],[gd(2012,1,4),39],[gd(2012,1,5),20],[gd(2012,1,6),85],[gd(2012,1,7),7]],b=[[gd(2012,1,1),82],[gd(2012,1,2),23],[gd(2012,1,3),66],[gd(2012,1,4),9],[gd(2012,1,5),119],[gd(2012,1,6),6],[gd(2012,1,7),9]],d=[],e=[[0,1],[1,9],[2,6],[3,10],[4,5],[5,17],[6,6],[7,10],[8,7],[9,11],[10,35],[11,9],[12,12],[13,5],[14,3],[15,4],[16,9]],f=0;f<30;f++)d.push([new Date(Date.today().add(f).days()).getTime(),randNum()+f+f+10]);var g={series:{lines:{show:!1,fill:!0},splines:{show:!0,tension:.4,lineWidth:1,fill:.4},points:{radius:0,show:!0},shadowSize:2},grid:{verticalLines:!0,hoverable:!0,clickable:!0,tickColor:"#d5d5d5",borderWidth:1,color:"#fff"},colors:["rgba(38, 185, 154, 0.38)","rgba(3, 88, 106, 0.38)"],xaxis:{tickColor:"rgba(51, 51, 51, 0.06)",mode:"time",tickSize:[1,"day"],axisLabel:"Date",axisLabelUseCanvas:!0,axisLabelFontSizePixels:12,axisLabelFontFamily:"Verdana, Arial",axisLabelPadding:10},yaxis:{ticks:8,tickColor:"rgba(51, 51, 51, 0.06)"},tooltip:!1},h={grid:{show:!0,aboveData:!0,color:"#3f3f3f",labelMargin:10,axisMargin:0,borderWidth:0,borderColor:null,minBorderMargin:5,clickable:!0,hoverable:!0,autoHighlight:!0,mouseActiveRadius:100},series:{lines:{show:!0,fill:!0,lineWidth:2,steps:!1},points:{show:!0,radius:4.5,symbol:"circle",lineWidth:3}},legend:{position:"ne",margin:[0,-25],noColumns:0,labelBoxBorderColor:null,labelFormatter:function(a,b){return a+"&nbsp;&nbsp;"},width:40,height:1},colors:["#96CA59","#3F97EB","#72c380","#6f7a8a","#f7cb38","#5a8022","#2c7282"],shadowSize:0,tooltip:!0,tooltipOpts:{content:"%s: %y.0",xDateFormat:"%d/%m",shifts:{x:-30,y:-50},defaultTheme:!1},yaxis:{min:0},xaxis:{mode:"time",minTickSize:[1,"day"],timeformat:"%d/%m/%y",min:d[0][0],max:d[20][0]}},i={series:{curvedLines:{apply:!0,active:!0,monotonicFit:!0}},colors:["#26B99A"],grid:{borderWidth:{top:0,right:0,bottom:1,left:1},borderColor:{bottom:"#7F8790",left:"#7F8790"}}};$("#chart_plot_01").length&&(console.log("Plot1"),$.plot($("#chart_plot_01"),[a,b],g)),$("#chart_plot_02").length&&(console.log("Plot2"),$.plot($("#chart_plot_02"),[{label:"Email Sent",data:d,lines:{fillColor:"rgba(150, 202, 89, 0.12)"},points:{fillColor:"#fff"}}],h)),$("#chart_plot_03").length&&(console.log("Plot3"),$.plot($("#chart_plot_03"),[{label:"Registrations",data:e,lines:{fillColor:"rgba(150, 202, 89, 0.12)"},points:{fillColor:"#fff"}}],i))}}function init_starrr(){"undefined"!=typeof starrr&&(console.log("init_starrr"),$(".stars").starrr(),$(".stars-existing").starrr({rating:4}),$(".stars").on("starrr:change",function(a,b){$(".stars-count").html(b)}),$(".stars-existing").on("starrr:change",function(a,b){$(".stars-count-existing").html(b)}))}function init_JQVmap(){"undefined"!=typeof jQuery.fn.vectorMap&&(console.log("init_JQVmap"),$("#world-map-gdp").length&&$("#world-map-gdp").vectorMap({map:"world_en",backgroundColor:null,color:"#ffffff",hoverOpacity:.7,selectedColor:"#666666",enableZoom:!0,showTooltip:!0,values:sample_data,scaleColors:["#E6F2F0","#149B7E"],normalizeFunction:"polynomial"}),$("#usa_map").length&&$("#usa_map").vectorMap({map:"usa_en",backgroundColor:null,color:"#ffffff",hoverOpacity:.7,selectedColor:"#666666",enableZoom:!0,showTooltip:!0,values:sample_data,scaleColors:["#E6F2F0","#149B7E"],normalizeFunction:"polynomial"}))}function init_skycons(){if("undefined"!=typeof Skycons){console.log("init_skycons");var c,a=new Skycons({color:"#73879C"}),b=["clear-day","clear-night","partly-cloudy-day","partly-cloudy-night","cloudy","rain","sleet","snow","wind","fog"];for(c=b.length;c--;)a.set(b[c],b[c]);a.play()}}function init_chart_doughnut(){if("undefined"!=typeof Chart&&(console.log("init_chart_doughnut"),$(".canvasDoughnut").length)){var a={type:"doughnut",tooltipFillColor:"rgba(51, 51, 51, 0.55)",data:{labels:["Symbian","Blackberry","Other","Android","IOS"],datasets:[{data:[15,20,30,10,30],backgroundColor:["#BDC3C7","#9B59B6","#E74C3C","#26B99A","#3498DB"],hoverBackgroundColor:["#CFD4D8","#B370CF","#E95E4F","#36CAAB","#49A9EA"]}]},options:{legend:!1,responsive:!1}};$(".canvasDoughnut").each(function(){var b=$(this);new Chart(b,a)})}}function init_gauge(){if("undefined"!=typeof Gauge){console.log("init_gauge ["+$(".gauge-chart").length+"]"),console.log("init_gauge");var a={lines:12,angle:0,lineWidth:.4,pointer:{length:.75,strokeWidth:.042,color:"#1D212A"},limitMax:"false",colorStart:"#1ABC9C",colorStop:"#1ABC9C",strokeColor:"#F0F3F3",generateGradient:!0};if($("#chart_gauge_01").length)var b=document.getElementById("chart_gauge_01"),c=new Gauge(b).setOptions(a);if($("#gauge-text").length&&(c.maxValue=6e3,c.animationSpeed=32,c.set(3200),c.setTextField(document.getElementById("gauge-text"))),$("#chart_gauge_02").length)var d=document.getElementById("chart_gauge_02"),e=new Gauge(d).setOptions(a);$("#gauge-text2").length&&(e.maxValue=9e3,e.animationSpeed=32,e.set(2400),e.setTextField(document.getElementById("gauge-text2")))}}function init_sparklines(){"undefined"!=typeof jQuery.fn.sparkline&&(console.log("init_sparklines"),$(".sparkline_one").sparkline([2,4,3,4,5,4,5,4,3,4,5,6,4,5,6,3,5,4,5,4,5,4,3,4,5,6,7,5,4,3,5,6],{type:"bar",height:"125",barWidth:13,colorMap:{7:"#a1a1a1"},barSpacing:2,barColor:"#26B99A"}),$(".sparkline_two").sparkline([2,4,3,4,5,4,5,4,3,4,5,6,7,5,4,3,5,6],{type:"bar",height:"40",barWidth:9,colorMap:{7:"#a1a1a1"},barSpacing:2,barColor:"#26B99A"}),$(".sparkline_three").sparkline([2,4,3,4,5,4,5,4,3,4,5,6,7,5,4,3,5,6],{type:"line",width:"200",height:"40",lineColor:"#26B99A",fillColor:"rgba(223, 223, 223, 0.57)",lineWidth:2,spotColor:"#26B99A",minSpotColor:"#26B99A"}),$(".sparkline11").sparkline([2,4,3,4,5,4,5,4,3,4,6,2,4,3,4,5,4,5,4,3],{type:"bar",height:"40",barWidth:8,colorMap:{7:"#a1a1a1"},barSpacing:2,barColor:"#26B99A"}),$(".sparkline22").sparkline([2,4,3,4,7,5,4,3,5,6,2,4,3,4,5,4,5,4,3,4,6],{type:"line",height:"40",width:"200",lineColor:"#26B99A",fillColor:"#ffffff",lineWidth:3,spotColor:"#34495E",minSpotColor:"#34495E"}),$(".sparkline_bar").sparkline([2,4,3,4,5,4,5,4,3,4,5,6,4,5,6,3,5],{type:"bar",colorMap:{7:"#a1a1a1"},barColor:"#26B99A"}),$(".sparkline_area").sparkline([5,6,7,9,9,5,3,2,2,4,6,7],{type:"line",lineColor:"#26B99A",fillColor:"#26B99A",spotColor:"#4578a0",minSpotColor:"#728fb2",maxSpotColor:"#6d93c4",highlightSpotColor:"#ef5179",highlightLineColor:"#8ba8bf",spotRadius:2.5,width:85}),$(".sparkline_line").sparkline([2,4,3,4,5,4,5,4,3,4,5,6,4,5,6,3,5],{type:"line",lineColor:"#26B99A",fillColor:"#ffffff",width:85,spotColor:"#34495E",minSpotColor:"#34495E"}),$(".sparkline_pie").sparkline([1,1,2,1],{type:"pie",sliceColors:["#26B99A","#ccc","#75BCDD","#D66DE2"]}),$(".sparkline_discreet").sparkline([4,6,7,7,4,3,2,1,4,4,2,4,3,7,8,9,7,6,4,3],{type:"discrete",barWidth:3,lineColor:"#26B99A",width:"85"}))}function init_autocomplete(){if("undefined"!=typeof autocomplete){console.log("init_autocomplete");var a={AD:"Andorra",A2:"Andorra Test",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AN:"Netherlands Antilles",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BQ:"British Antarctic Territory",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos [Keeling] Islands",CD:"Congo - Kinshasa",CF:"Central African Republic",CG:"Congo - Brazzaville",CH:"Switzerland",CI:"Côte d’Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CS:"Serbia and Montenegro",CT:"Canton and Enderbury Islands",CU:"Cuba",CV:"Cape Verde",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DD:"East Germany",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",FQ:"French Southern and Antarctic Territories",FR:"France",FX:"Metropolitan France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong SAR China",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",JT:"Johnston Island",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin",MG:"Madagascar",MH:"Marshall Islands",MI:"Midway Islands",MK:"Macedonia",ML:"Mali",MM:"Myanmar [Burma]",MN:"Mongolia",MO:"Macau SAR China",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NQ:"Dronning Maud Land",NR:"Nauru",NT:"Neutral Zone",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PC:"Pacific Islands Trust Territory",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn Islands",PR:"Puerto Rico",PS:"Palestinian Territories",PT:"Portugal",PU:"U.S. Miscellaneous Pacific Islands",PW:"Palau",PY:"Paraguay",PZ:"Panama Canal Zone",QA:"Qatar",RE:"Réunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"São Tomé and Príncipe",SU:"Union of Soviet Socialist Republics",SV:"El Salvador",SY:"Syria",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"U.S. Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Vatican City",VC:"Saint Vincent and the Grenadines",VD:"North Vietnam",VE:"Venezuela",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WK:"Wake Island",WS:"Samoa",YD:"People's Democratic Republic of Yemen",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"Unknown or Invalid Region"},b=$.map(a,function(a,b){return{value:a,data:b}});$("#autocomplete-custom-append").autocomplete({lookup:b})}}function init_autosize(){"undefined"!=typeof $.fn.autosize&&autosize($(".resizable_textarea"))}function init_parsley(){if("undefined"!=typeof parsley){console.log("init_parsley"),$("parsley:field:validate",function(){a()}),$("#demo-form .btn").on("click",function(){$("#demo-form").parsley().validate(),a()});var a=function(){!0===$("#demo-form").parsley().isValid()?($(".bs-callout-info").removeClass("hidden"),$(".bs-callout-warning").addClass("hidden")):($(".bs-callout-info").addClass("hidden"),$(".bs-callout-warning").removeClass("hidden"))};$("parsley:field:validate",function(){a()}),$("#demo-form2 .btn").on("click",function(){$("#demo-form2").parsley().validate(),a()});var a=function(){!0===$("#demo-form2").parsley().isValid()?($(".bs-callout-info").removeClass("hidden"),$(".bs-callout-warning").addClass("hidden")):($(".bs-callout-info").addClass("hidden"),$(".bs-callout-warning").removeClass("hidden"))};try{hljs.initHighlightingOnLoad()}catch(a){}}}function onAddTag(a){alert("Added a tag: "+a)}function onRemoveTag(a){alert("Removed a tag: "+a)}function onChangeTag(a,b){alert("Changed a tag: "+b)}function init_TagsInput(){"undefined"!=typeof $.fn.tagsInput&&$("#tags_1").tagsInput({width:"auto"})}function init_select2(){"undefined"!=typeof select2&&(console.log("init_toolbox"),$(".select2_single").select2({placeholder:"Select a state",allowClear:!0}),$(".select2_group").select2({}),$(".select2_multiple").select2({maximumSelectionLength:4,placeholder:"With Max Selection limit 4",allowClear:!0}))}function init_wysiwyg(){function b(a,b){var c="";"unsupported-file-type"===a?c="Unsupported format "+b:console.log("error uploading file",a,b),$('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button><strong>File upload error</strong> '+c+" </div>").prependTo("#alerts")}"undefined"!=typeof $.fn.wysiwyg&&(console.log("init_wysiwyg"),$(".editor-wrapper").each(function(){var a=$(this).attr("id");$(this).wysiwyg({toolbarSelector:'[data-target="#'+a+'"]',fileUploadError:b})}),window.prettyPrint,prettyPrint())}function init_cropper(){if("undefined"!=typeof $.fn.cropper){console.log("init_cropper");var a=$("#image"),b=$("#download"),c=$("#dataX"),d=$("#dataY"),e=$("#dataHeight"),f=$("#dataWidth"),g=$("#dataRotate"),h=$("#dataScaleX"),i=$("#dataScaleY"),j={aspectRatio:16/9,preview:".img-preview",crop:function(a){c.val(Math.round(a.x)),d.val(Math.round(a.y)),e.val(Math.round(a.height)),f.val(Math.round(a.width)),g.val(a.rotate),h.val(a.scaleX),i.val(a.scaleY)}};$('[data-toggle="tooltip"]').tooltip(),a.on({"build.cropper":function(a){console.log(a.type)},"built.cropper":function(a){console.log(a.type)},"cropstart.cropper":function(a){console.log(a.type,a.action)},"cropmove.cropper":function(a){console.log(a.type,a.action)},"cropend.cropper":function(a){console.log(a.type,a.action)},"crop.cropper":function(a){console.log(a.type,a.x,a.y,a.width,a.height,a.rotate,a.scaleX,a.scaleY)},"zoom.cropper":function(a){console.log(a.type,a.ratio)}}).cropper(j),$.isFunction(document.createElement("canvas").getContext)||$('button[data-method="getCroppedCanvas"]').prop("disabled",!0),"undefined"==typeof document.createElement("cropper").style.transition&&($('button[data-method="rotate"]').prop("disabled",!0),$('button[data-method="scale"]').prop("disabled",!0)),"undefined"==typeof b[0].download&&b.addClass("disabled"),$(".docs-toggles").on("change","input",function(){var e,f,b=$(this),c=b.attr("name"),d=b.prop("type");a.data("cropper")&&("checkbox"===d?(j[c]=b.prop("checked"),e=a.cropper("getCropBoxData"),f=a.cropper("getCanvasData"),j.built=function(){a.cropper("setCropBoxData",e),a.cropper("setCanvasData",f)}):"radio"===d&&(j[c]=b.val()),a.cropper("destroy").cropper(j))}),$(".docs-buttons").on("click","[data-method]",function(){var e,f,c=$(this),d=c.data();if(!c.prop("disabled")&&!c.hasClass("disabled")&&a.data("cropper")&&d.method){if(d=$.extend({},d),"undefined"!=typeof d.target&&(e=$(d.target),"undefined"==typeof d.option))try{d.option=JSON.parse(e.val())}catch(a){console.log(a.message)}switch(f=a.cropper(d.method,d.option,d.secondOption),d.method){case"scaleX":case"scaleY":$(this).data("option",-d.option);break;case"getCroppedCanvas":f&&($("#getCroppedCanvasModal").modal().find(".modal-body").html(f),b.hasClass("disabled")||b.attr("href",f.toDataURL()))}if($.isPlainObject(f)&&e)try{e.val(JSON.stringify(f))}catch(a){console.log(a.message)}}}),$(document.body).on("keydown",function(b){if(a.data("cropper")&&!(this.scrollTop>300))switch(b.which){case 37:b.preventDefault(),a.cropper("move",-1,0);break;case 38:b.preventDefault(),a.cropper("move",0,-1);break;case 39:b.preventDefault(),a.cropper("move",1,0);break;case 40:b.preventDefault(),a.cropper("move",0,1)}});var m,k=$("#inputImage"),l=window.URL||window.webkitURL;l?k.change(function(){var c,b=this.files;a.data("cropper")&&b&&b.length&&(c=b[0],/^image\/\w+$/.test(c.type)?(m=l.createObjectURL(c),a.one("built.cropper",function(){l.revokeObjectURL(m)}).cropper("reset").cropper("replace",m),k.val("")):window.alert("Please choose an image file."))}):k.prop("disabled",!0).parent().addClass("disabled")}}function init_knob(){if("undefined"!=typeof $.fn.knob){console.log("init_knob"),$(".knob").knob({change:function(a){},release:function(a){console.log("release : "+a)},cancel:function(){console.log("cancel : ",this)},draw:function(){if("tron"==this.$.data("skin")){this.cursorExt=.3;var b,a=this.arc(this.cv),c=1;return this.g.lineWidth=this.lineWidth,this.o.displayPrevious&&(b=this.arc(this.v),this.g.beginPath(),this.g.strokeStyle=this.pColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth,b.s,b.e,b.d),this.g.stroke()),this.g.beginPath(),this.g.strokeStyle=c?this.o.fgColor:this.fgColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth,a.s,a.e,a.d),this.g.stroke(),this.g.lineWidth=2,this.g.beginPath(),this.g.strokeStyle=this.o.fgColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth+1+2*this.lineWidth/3,0,2*Math.PI,!1),this.g.stroke(),!1}}});var a,b=0,c=0,d=0,e=$("div.idir"),f=$("div.ival"),g=function(){d++,e.show().html("+").fadeOut(),f.html(d)},h=function(){d--,e.show().html("-").fadeOut(),f.html(d)};$("input.infinite").knob({min:0,max:20,stopper:!1,change:function(){a>this.cv?b?(h(),b=0):(b=1,c=0):a<this.cv&&(c?(g(),c=0):(c=1,b=0)),a=this.cv}})}}function init_InputMask(){"undefined"!=typeof $.fn.inputmask&&(console.log("init_InputMask"),$(":input").inputmask())}function init_ColorPicker(){"undefined"!=typeof $.fn.colorpicker&&(console.log("init_ColorPicker"),$(".demo1").colorpicker(),$(".demo2").colorpicker(),$("#demo_forceformat").colorpicker({format:"rgba",horizontal:!0}),$("#demo_forceformat3").colorpicker({format:"rgba"}),$(".demo-auto").colorpicker())}function init_IonRangeSlider(){"undefined"!=typeof $.fn.ionRangeSlider&&(console.log("init_IonRangeSlider"),$("#range_27").ionRangeSlider({type:"double",min:1e6,max:2e6,grid:!0,force_edges:!0}),$("#range").ionRangeSlider({hide_min_max:!0,keyboard:!0,min:0,max:5e3,from:1e3,to:4e3,type:"double",step:1,prefix:"$",grid:!0}),$("#range_25").ionRangeSlider({type:"double",min:1e6,max:2e6,grid:!0}),$("#range_26").ionRangeSlider({type:"double",min:0,max:1e4,step:500,grid:!0,grid_snap:!0}),$("#range_31").ionRangeSlider({type:"double",min:0,max:100,from:30,to:70,from_fixed:!0}),$(".range_min_max").ionRangeSlider({type:"double",min:0,max:100,from:30,to:70,max_interval:50}),$(".range_time24").ionRangeSlider({min:+moment().subtract(12,"hours").format("X"),max:+moment().format("X"),from:+moment().subtract(6,"hours").format("X"),grid:!0,force_edges:!0,prettify:function(a){var b=moment(a,"X");return b.format("Do MMMM, HH:mm")}}))}function init_daterangepicker(){if("undefined"!=typeof $.fn.daterangepicker){console.log("init_daterangepicker");var a=function(a,b,c){console.log(a.toISOString(),b.toISOString(),c),$("#reportrange span").html(a.format("MMMM D, YYYY")+" - "+b.format("MMMM D, YYYY"))},b={startDate:moment().subtract(29,"days"),endDate:moment(),minDate:"01/01/2012",maxDate:"12/31/2015",dateLimit:{days:60},showDropdowns:!0,showWeekNumbers:!0,timePicker:!1,timePickerIncrement:1,timePicker12Hour:!0,ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]},opens:"left",buttonClasses:["btn btn-default"],applyClass:"btn-small btn-primary",cancelClass:"btn-small",format:"MM/DD/YYYY",separator:" to ",locale:{applyLabel:"Submit",cancelLabel:"Clear",fromLabel:"From",toLabel:"To",customRangeLabel:"Custom",daysOfWeek:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],firstDay:1}};$("#reportrange span").html(moment().subtract(29,"days").format("MMMM D, YYYY")+" - "+moment().format("MMMM D, YYYY")),$("#reportrange").daterangepicker(b,a),$("#reportrange").on("show.daterangepicker",function(){console.log("show event fired")}),$("#reportrange").on("hide.daterangepicker",function(){console.log("hide event fired")}),$("#reportrange").on("apply.daterangepicker",function(a,b){console.log("apply event fired, start/end dates are "+b.startDate.format("MMMM D, YYYY")+" to "+b.endDate.format("MMMM D, YYYY"))}),$("#reportrange").on("cancel.daterangepicker",function(a,b){console.log("cancel event fired")}),$("#options1").click(function(){$("#reportrange").data("daterangepicker").setOptions(b,a)}),$("#options2").click(function(){$("#reportrange").data("daterangepicker").setOptions(optionSet2,a)}),$("#destroy").click(function(){$("#reportrange").data("daterangepicker").remove()})}}function init_daterangepicker_right(){if("undefined"!=typeof $.fn.daterangepicker){console.log("init_daterangepicker_right");var a=function(a,b,c){console.log(a.toISOString(),b.toISOString(),c),$("#reportrange_right span").html(a.format("MMMM D, YYYY")+" - "+b.format("MMMM D, YYYY"))},b={startDate:moment().subtract(29,"days"),endDate:moment(),minDate:"01/01/2012",maxDate:"12/31/2020",dateLimit:{days:60},showDropdowns:!0,showWeekNumbers:!0,timePicker:!1,timePickerIncrement:1,timePicker12Hour:!0,ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]},opens:"right",buttonClasses:["btn btn-default"],applyClass:"btn-small btn-primary",cancelClass:"btn-small",format:"MM/DD/YYYY",separator:" to ",locale:{applyLabel:"Submit",cancelLabel:"Clear",fromLabel:"From",toLabel:"To",customRangeLabel:"Custom",daysOfWeek:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],firstDay:1}};$("#reportrange_right span").html(moment().subtract(29,"days").format("MMMM D, YYYY")+" - "+moment().format("MMMM D, YYYY")),$("#reportrange_right").daterangepicker(b,a),$("#reportrange_right").on("show.daterangepicker",function(){console.log("show event fired")}),$("#reportrange_right").on("hide.daterangepicker",function(){console.log("hide event fired")}),$("#reportrange_right").on("apply.daterangepicker",function(a,b){console.log("apply event fired, start/end dates are "+b.startDate.format("MMMM D, YYYY")+" to "+b.endDate.format("MMMM D, YYYY"))}),$("#reportrange_right").on("cancel.daterangepicker",function(a,b){console.log("cancel event fired")}),$("#options1").click(function(){$("#reportrange_right").data("daterangepicker").setOptions(b,a)}),$("#options2").click(function(){$("#reportrange_right").data("daterangepicker").setOptions(optionSet2,a)}),$("#destroy").click(function(){$("#reportrange_right").data("daterangepicker").remove()})}}function init_daterangepicker_single_call(){"undefined"!=typeof $.fn.daterangepicker&&(console.log("init_daterangepicker_single_call"),$("#single_cal1").daterangepicker({singleDatePicker:!0,singleClasses:"picker_1"},function(a,b,c){console.log(a.toISOString(),b.toISOString(),c)}),$("#single_cal2").daterangepicker({singleDatePicker:!0,singleClasses:"picker_2"},function(a,b,c){console.log(a.toISOString(),b.toISOString(),c)}),$("#single_cal3").daterangepicker({singleDatePicker:!0,singleClasses:"picker_3"},function(a,b,c){console.log(a.toISOString(),b.toISOString(),c)}),$("#single_cal4").daterangepicker({singleDatePicker:!0,singleClasses:"picker_4"},function(a,b,c){console.log(a.toISOString(),b.toISOString(),c)}))}function init_daterangepicker_reservation(){"undefined"!=typeof $.fn.daterangepicker&&(console.log("init_daterangepicker_reservation"),$("#reservation").daterangepicker(null,function(a,b,c){console.log(a.toISOString(),b.toISOString(),c)}),$("#reservation-time").daterangepicker({timePicker:!0,timePickerIncrement:30,locale:{format:"MM/DD/YYYY h:mm A"}}))}function init_SmartWizard(){"undefined"!=typeof $.fn.smartWizard&&(console.log("init_SmartWizard"),$("#wizard").smartWizard(),$("#wizard_verticle").smartWizard({transitionEffect:"slide"}),$(".buttonNext").addClass("btn btn-success"),$(".buttonPrevious").addClass("btn btn-primary"),$(".buttonFinish").addClass("btn btn-default"))}function init_validator(){"undefined"!=typeof validator&&(console.log("init_validator"),validator.message.date="not a real date",$("form").on("blur","input[required], input.optional, select.required",validator.checkField).on("change","select.required",validator.checkField).on("keypress","input[required][pattern]",validator.keypress),$(".multi.required").on("keyup blur","input",function(){validator.checkField.apply($(this).siblings().last()[0])}),$("form").submit(function(a){a.preventDefault();var b=!0;return validator.checkAll($(this))||(b=!1),b&&this.submit(),!1}))}function init_PNotify(){"undefined"!=typeof PNotify&&(console.log("init_PNotify"),new PNotify({title:"PNotify",type:"info",text:"Welcome. Try hovering over me. You can click things behind me, because I'm non-blocking.",nonblock:{nonblock:!0},addclass:"dark",styling:"bootstrap3",hide:!1,before_close:function(a){return a.update({title:a.options.title+" - Enjoy your Stay",before_close:null}),a.queueRemove(),!1}}))}function init_CustomNotification(){if(console.log("run_customtabs"),"undefined"!=typeof CustomTabs){console.log("init_CustomTabs");var a=10;TabbedNotification=function(b){var c="<div id='ntf"+a+"' class='text alert-"+b.type+"' style='display:none'><h2><i class='fa fa-bell'></i> "+b.title+"</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>"+b.text+"</p></div>";document.getElementById("custom_notifications")?($("#custom_notifications ul.notifications").append("<li><a id='ntlink"+a+"' class='alert-"+b.type+"' href='#ntf"+a+"'><i class='fa fa-bell animated shake'></i></a></li>"),$("#custom_notifications #notif-group").append(c),a++,CustomTabs(b)):alert("doesnt exists")},CustomTabs=function(a){$(".tabbed_notifications > div").hide(),$(".tabbed_notifications > div:first-of-type").show(),$("#custom_notifications").removeClass("dsp_none"),$(".notifications a").click(function(a){a.preventDefault();var b=$(this),c="#"+b.parents(".notifications").data("tabbed_notifications"),d=b.closest("li").siblings().children("a"),e=b.attr("href");d.removeClass("active"),b.addClass("active"),$(c).children("div").hide(),$(e).show()})},CustomTabs();var b=idname="";$(document).on("click",".notification_close",function(a){idname=$(this).parent().parent().attr("id"),b=idname.substr(-2),$("#ntf"+b).remove(),$("#ntlink"+b).parent().remove(),$(".notifications a").first().addClass("active"),$("#notif-group div").first().css("display","block")})}}function init_EasyPieChart(){if("undefined"!=typeof $.fn.easyPieChart){console.log("init_EasyPieChart"),$(".chart").easyPieChart({easing:"easeOutElastic",delay:3e3,barColor:"#26B99A",trackColor:"#fff",scaleColor:!1,lineWidth:20,trackWidth:16,lineCap:"butt",onStep:function(a,b,c){$(this.el).find(".percent").text(Math.round(c))}});var a=window.chart=$(".chart").data("easyPieChart");$(".js_update").on("click",function(){a.update(200*Math.random()-100)});var b=$.fn.popover.Constructor.prototype.leave;$.fn.popover.Constructor.prototype.leave=function(a){var d,e,c=a instanceof this.constructor?a:$(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);b.call(this,a),a.currentTarget&&(d=$(a.currentTarget).siblings(".popover"),e=c.timeout,d.one("mouseenter",function(){clearTimeout(e),d.one("mouseleave",function(){$.fn.popover.Constructor.prototype.leave.call(c,c)})}))},$("body").popover({selector:"[data-popover]",trigger:"click hover",delay:{show:50,hide:400}})}}function init_charts(){if(console.log("run_charts  typeof ["+typeof Chart+"]"),"undefined"!=typeof Chart){if(console.log("init_charts"),Chart.defaults.global.legend={enabled:!1},$("#canvas_line").length){new Chart(document.getElementById("canvas_line"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}})}if($("#canvas_line1").length){new Chart(document.getElementById("canvas_line1"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",
pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}})}if($("#canvas_line2").length){new Chart(document.getElementById("canvas_line2"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}})}if($("#canvas_line3").length){new Chart(document.getElementById("canvas_line3"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}})}if($("#canvas_line4").length){new Chart(document.getElementById("canvas_line4"),{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}})}if($("#lineChart").length){var f=document.getElementById("lineChart");new Chart(f,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(38, 185, 154, 0.31)",borderColor:"rgba(38, 185, 154, 0.7)",pointBorderColor:"rgba(38, 185, 154, 0.7)",pointBackgroundColor:"rgba(38, 185, 154, 0.7)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointBorderWidth:1,data:[31,74,6,39,20,85,7]},{label:"My Second dataset",backgroundColor:"rgba(3, 88, 106, 0.3)",borderColor:"rgba(3, 88, 106, 0.70)",pointBorderColor:"rgba(3, 88, 106, 0.70)",pointBackgroundColor:"rgba(3, 88, 106, 0.70)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",pointBorderWidth:1,data:[82,23,66,9,99,4,2]}]}})}if($("#mybarChart").length){var f=document.getElementById("mybarChart");new Chart(f,{type:"bar",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"# of Votes",backgroundColor:"#26B99A",data:[51,30,40,28,92,50,45]},{label:"# of Votes",backgroundColor:"#03586A",data:[41,56,25,48,72,34,12]}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}if($("#canvasDoughnut").length){var f=document.getElementById("canvasDoughnut"),i={labels:["Dark Grey","Purple Color","Gray Color","Green Color","Blue Color"],datasets:[{data:[120,50,140,180,100],backgroundColor:["#455C73","#9B59B6","#BDC3C7","#26B99A","#3498DB"],hoverBackgroundColor:["#34495E","#B370CF","#CFD4D8","#36CAAB","#49A9EA"]}]};new Chart(f,{type:"doughnut",tooltipFillColor:"rgba(51, 51, 51, 0.55)",data:i})}if($("#canvasRadar").length){var f=document.getElementById("canvasRadar"),i={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(3, 88, 106, 0.2)",borderColor:"rgba(3, 88, 106, 0.80)",pointBorderColor:"rgba(3, 88, 106, 0.80)",pointBackgroundColor:"rgba(3, 88, 106, 0.80)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(38, 185, 154, 0.2)",borderColor:"rgba(38, 185, 154, 0.85)",pointColor:"rgba(38, 185, 154, 0.85)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[28,48,40,19,96,27,100]}]};new Chart(f,{type:"radar",data:i})}if($("#pieChart").length){var f=document.getElementById("pieChart"),i={datasets:[{data:[120,50,140,180,100],backgroundColor:["#455C73","#9B59B6","#BDC3C7","#26B99A","#3498DB"],label:"My dataset"}],labels:["Dark Gray","Purple","Gray","Green","Blue"]};new Chart(f,{data:i,type:"pie",otpions:{legend:!1}})}if($("#polarArea").length){var f=document.getElementById("polarArea"),i={datasets:[{data:[120,50,140,180,100],backgroundColor:["#455C73","#9B59B6","#BDC3C7","#26B99A","#3498DB"],label:"My dataset"}],labels:["Dark Gray","Purple","Gray","Green","Blue"]};new Chart(f,{data:i,type:"polarArea",options:{scale:{ticks:{beginAtZero:!0}}}})}}}function init_compose(){"undefined"!=typeof $.fn.slideToggle&&(console.log("init_compose"),$("#compose, .compose-close").click(function(){$(".compose").slideToggle()}))}function init_calendar(){if("undefined"!=typeof $.fn.fullCalendar){console.log("init_calendar");var e,f,a=new Date,b=a.getDate(),c=a.getMonth(),d=a.getFullYear(),g=$("#calendar").fullCalendar({header:{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay,listMonth"},selectable:!0,selectHelper:!0,select:function(a,b,c){$("#fc_create").click(),e=a,ended=b,$(".antosubmit").on("click",function(){var a=$("#title").val();return b&&(ended=b),f=$("#event_type").val(),a&&g.fullCalendar("renderEvent",{title:a,start:e,end:b,allDay:c},!0),$("#title").val(""),g.fullCalendar("unselect"),$(".antoclose").click(),!1})},eventClick:function(a,b,c){$("#fc_edit").click(),$("#title2").val(a.title),f=$("#event_type").val(),$(".antosubmit2").on("click",function(){a.title=$("#title2").val(),g.fullCalendar("updateEvent",a),$(".antoclose2").click()}),g.fullCalendar("unselect")},editable:!0,events:[{title:"All Day Event",start:new Date(d,c,1)},{title:"Long Event",start:new Date(d,c,b-5),end:new Date(d,c,b-2)},{title:"Meeting",start:new Date(d,c,b,10,30),allDay:!1},{title:"Lunch",start:new Date(d,c,b+14,12,0),end:new Date(d,c,b,14,0),allDay:!1},{title:"Birthday Party",start:new Date(d,c,b+1,19,0),end:new Date(d,c,b+1,22,30),allDay:!1},{title:"Click for Google",start:new Date(d,c,28),end:new Date(d,c,29),url:"http://google.com/"}]})}}function init_DataTables(){if(console.log("run_datatables"),"undefined"!=typeof $.fn.DataTable){console.log("init_DataTables");var a=function(){$("#datatable-buttons").length&&$("#datatable-buttons").DataTable({dom:"Bfrtip",buttons:[{extend:"copy",className:"btn-sm"},{extend:"csv",className:"btn-sm"},{extend:"excel",className:"btn-sm"},{extend:"pdfHtml5",className:"btn-sm"},{extend:"print",className:"btn-sm"}],responsive:!0})};TableManageButtons=function(){"use strict";return{init:function(){a()}}}(),$("#datatable").dataTable(),$("#datatable-keytable").DataTable({keys:!0}),$("#datatable-responsive").DataTable(),$("#datatable-scroller").DataTable({ajax:"js/datatables/json/scroller-demo.json",deferRender:!0,scrollY:380,scrollCollapse:!0,scroller:!0}),$("#datatable-fixed-header").DataTable({fixedHeader:!0});var b=$("#datatable-checkbox");b.dataTable({order:[[1,"asc"]],columnDefs:[{orderable:!1,targets:[0]}]}),b.on("draw.dt",function(){$("checkbox input").iCheck({checkboxClass:"icheckbox_flat-green"})}),TableManageButtons.init()}}function init_morris_charts(){"undefined"!=typeof Morris&&(console.log("init_morris_charts"),$("#graph_bar").length&&Morris.Bar({element:"graph_bar",data:[{device:"iPhone 4",geekbench:380},{device:"iPhone 4S",geekbench:655},{device:"iPhone 3GS",geekbench:275},{device:"iPhone 5",geekbench:1571},{device:"iPhone 5S",geekbench:655},{device:"iPhone 6",geekbench:2154},{device:"iPhone 6 Plus",geekbench:1144},{device:"iPhone 6S",geekbench:2371},{device:"iPhone 6S Plus",geekbench:1471},{device:"Other",geekbench:1371}],xkey:"device",ykeys:["geekbench"],labels:["Geekbench"],barRatio:.4,barColors:["#26B99A","#34495E","#ACADAC","#3498DB"],xLabelAngle:35,hideHover:"auto",resize:!0}),$("#graph_bar_group").length&&Morris.Bar({element:"graph_bar_group",data:[{period:"2016-10-01",licensed:807,sorned:660},{period:"2016-09-30",licensed:1251,sorned:729},{period:"2016-09-29",licensed:1769,sorned:1018},{period:"2016-09-20",licensed:2246,sorned:1461},{period:"2016-09-19",licensed:2657,sorned:1967},{period:"2016-09-18",licensed:3148,sorned:2627},{period:"2016-09-17",licensed:3471,sorned:3740},{period:"2016-09-16",licensed:2871,sorned:2216},{period:"2016-09-15",licensed:2401,sorned:1656},{period:"2016-09-10",licensed:2115,sorned:1022}],xkey:"period",barColors:["#26B99A","#34495E","#ACADAC","#3498DB"],ykeys:["licensed","sorned"],labels:["Licensed","SORN"],hideHover:"auto",xLabelAngle:60,resize:!0}),$("#graphx").length&&Morris.Bar({element:"graphx",data:[{x:"2015 Q1",y:2,z:3,a:4},{x:"2015 Q2",y:3,z:5,a:6},{x:"2015 Q3",y:4,z:3,a:2},{x:"2015 Q4",y:2,z:4,a:5}],xkey:"x",ykeys:["y","z","a"],barColors:["#26B99A","#34495E","#ACADAC","#3498DB"],hideHover:"auto",labels:["Y","Z","A"],resize:!0}).on("click",function(a,b){console.log(a,b)}),$("#graph_area").length&&Morris.Area({element:"graph_area",data:[{period:"2014 Q1",iphone:2666,ipad:null,itouch:2647},{period:"2014 Q2",iphone:2778,ipad:2294,itouch:2441},{period:"2014 Q3",iphone:4912,ipad:1969,itouch:2501},{period:"2014 Q4",iphone:3767,ipad:3597,itouch:5689},{period:"2015 Q1",iphone:6810,ipad:1914,itouch:2293},{period:"2015 Q2",iphone:5670,ipad:4293,itouch:1881},{period:"2015 Q3",iphone:4820,ipad:3795,itouch:1588},{period:"2015 Q4",iphone:15073,ipad:5967,itouch:5175},{period:"2016 Q1",iphone:10687,ipad:4460,itouch:2028},{period:"2016 Q2",iphone:8432,ipad:5713,itouch:1791}],xkey:"period",ykeys:["iphone","ipad","itouch"],lineColors:["#26B99A","#34495E","#ACADAC","#3498DB"],labels:["iPhone","iPad","iPod Touch"],pointSize:2,hideHover:"auto",resize:!0}),$("#graph_donut").length&&Morris.Donut({element:"graph_donut",data:[{label:"Jam",value:25},{label:"Frosted",value:40},{label:"Custard",value:25},{label:"Sugar",value:10}],colors:["#26B99A","#34495E","#ACADAC","#3498DB"],formatter:function(a){return a+"%"},resize:!0}),$("#graph_line").length&&(Morris.Line({element:"graph_line",xkey:"year",ykeys:["value"],labels:["Value"],hideHover:"auto",lineColors:["#26B99A","#34495E","#ACADAC","#3498DB"],data:[{year:"2012",value:20},{year:"2013",value:10},{year:"2014",value:5},{year:"2015",value:5},{year:"2016",value:20}],resize:!0}),$MENU_TOGGLE.on("click",function(){$(window).resize()})))}function init_echarts(){if("undefined"!=typeof echarts){console.log("init_echarts");var a={color:["#26B99A","#34495E","#BDC3C7","#3498DB","#9B59B6","#8abb6f","#759c6a","#bfd3b7"],title:{itemGap:8,textStyle:{fontWeight:"normal",color:"#408829"}},dataRange:{color:["#1f610a","#97b58d"]},toolbox:{color:["#408829","#408829","#408829","#408829"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#408829",type:"dashed"},crossStyle:{color:"#408829"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(64,136,41,0.2)",handleColor:"#408829"},grid:{borderWidth:0},categoryAxis:{axisLine:{lineStyle:{color:"#408829"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#408829"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#408829"},controlStyle:{normal:{color:"#408829"},emphasis:{color:"#408829"}}},k:{itemStyle:{normal:{color:"#68a54a",color0:"#a9cba2",lineStyle:{width:1,color:"#408829",color0:"#86b379"}}}},map:{itemStyle:{normal:{areaStyle:{color:"#ddd"},label:{textStyle:{color:"#c12e34"}}},emphasis:{areaStyle:{color:"#99d2dd"},label:{textStyle:{color:"#c12e34"}}}}},force:{itemStyle:{normal:{linkStyle:{strokeColor:"#408829"}}}},chord:{padding:4,itemStyle:{normal:{lineStyle:{width:1,color:"rgba(128, 128, 128, 0.5)"},chordStyle:{lineStyle:{width:1,color:"rgba(128, 128, 128, 0.5)"}}},emphasis:{lineStyle:{width:1,color:"rgba(128, 128, 128, 0.5)"},chordStyle:{lineStyle:{width:1,color:"rgba(128, 128, 128, 0.5)"}}}}},gauge:{startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{color:[[.2,"#86b379"],[.8,"#68a54a"],[1,"#408829"]],width:8}},axisTick:{splitNumber:10,length:12,lineStyle:{color:"auto"}},axisLabel:{textStyle:{color:"auto"}},splitLine:{length:18,lineStyle:{color:"auto"}},pointer:{length:"90%",color:"auto"},title:{textStyle:{color:"#333"}},detail:{textStyle:{color:"auto"}}},textStyle:{fontFamily:"Arial, Verdana, sans-serif"}};if($("#mainb").length){var b=echarts.init(document.getElementById("mainb"),a);b.setOption({title:{text:"Graph title",subtext:"Graph Sub-text"},tooltip:{trigger:"axis"},legend:{data:["sales","purchases"]},toolbox:{show:!1},calculable:!1,xAxis:[{type:"category",data:["1?","2?","3?","4?","5?","6?","7?","8?","9?","10?","11?","12?"]}],yAxis:[{type:"value"}],series:[{name:"sales",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3],markPoint:{data:[{type:"max",name:"???"},{type:"min",name:"???"}]},markLine:{data:[{type:"average",name:"???"}]}},{name:"purchases",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3],markPoint:{data:[{name:"sales",value:182.2,xAxis:7,yAxis:183},{name:"purchases",value:2.3,xAxis:11,yAxis:3}]},markLine:{data:[{type:"average",name:"???"}]}}]})}if($("#echart_sonar").length){var c=echarts.init(document.getElementById("echart_sonar"),a);c.setOption({title:{text:"Budget vs spending",subtext:"Subtitle"},tooltip:{trigger:"item"},legend:{orient:"vertical",x:"right",y:"bottom",data:["Allocated Budget","Actual Spending"]},toolbox:{show:!0,feature:{restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},polar:[{indicator:[{text:"Sales",max:6e3},{text:"Administration",max:16e3},{text:"Information Techology",max:3e4},{text:"Customer Support",max:38e3},{text:"Development",max:52e3},{text:"Marketing",max:25e3}]}],calculable:!0,series:[{name:"Budget vs spending",type:"radar",data:[{value:[4300,1e4,28e3,35e3,5e4,19e3],name:"Allocated Budget"},{value:[5e3,14e3,28e3,31e3,42e3,21e3],name:"Actual Spending"}]}]})}if($("#echart_pyramid").length){var d=echarts.init(document.getElementById("echart_pyramid"),a);d.setOption({title:{text:"Echart Pyramid Graph",subtext:"Subtitle"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},toolbox:{show:!0,feature:{restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},legend:{data:["Something #1","Something #2","Something #3","Something #4","Something #5"],orient:"vertical",x:"left",y:"bottom"},calculable:!0,series:[{name:"漏斗图",type:"funnel",width:"40%",data:[{value:60,name:"Something #1"},{value:40,name:"Something #2"},{value:20,name:"Something #3"},{value:80,name:"Something #4"},{value:100,name:"Something #5"}]}]})}if($("#echart_gauge").length){var e=echarts.init(document.getElementById("echart_gauge"),a);e.setOption({tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{show:!0,feature:{restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},series:[{name:"Performance",type:"gauge",center:["50%","50%"],startAngle:140,endAngle:-140,min:0,max:100,precision:0,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"lightgreen"],[.4,"orange"],[.8,"skyblue"],[1,"#ff4500"]],width:30}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,formatter:function(a){switch(a+""){case"10":return"a";case"30":return"b";case"60":return"c";case"90":return"d";default:return""}},textStyle:{color:"#333"}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},pointer:{length:"80%",width:8,color:"auto"},title:{show:!0,offsetCenter:["-65%",-10],textStyle:{color:"#333",fontSize:15}},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:40,offsetCenter:["-60%",10],formatter:"{value}%",textStyle:{color:"auto",fontSize:30}},data:[{value:50,name:"Performance"}]}]})}if($("#echart_line").length){var f=echarts.init(document.getElementById("echart_line"),a);f.setOption({title:{text:"Line Graph",subtext:"Subtitle"},tooltip:{trigger:"axis"},legend:{x:220,y:40,data:["Intent","Pre-order","Deal"]},toolbox:{show:!0,feature:{magicType:{show:!0,title:{line:"Line",bar:"Bar",stack:"Stack",tiled:"Tiled"},type:["line","bar","stack","tiled"]},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Deal",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[10,12,21,54,260,830,710]},{name:"Pre-order",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[30,182,434,791,390,30,10]},{name:"Intent",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[1320,1132,601,234,120,90,20]}]})}if($("#echart_scatter").length){var g=echarts.init(document.getElementById("echart_scatter"),a);g.setOption({title:{text:"Scatter Graph",subtext:"Heinz  2003"},tooltip:{trigger:"axis",showDelay:0,axisPointer:{type:"cross",lineStyle:{type:"dashed",width:1}}},legend:{data:["Data2","Data1"]},toolbox:{show:!0,feature:{saveAsImage:{show:!0,title:"Save Image"}}},xAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value} cm"}}],yAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value} kg"}}],series:[{name:"Data1",type:"scatter",tooltip:{trigger:"item",formatter:function(a){return a.value.length>1?a.seriesName+" :<br/>"+a.value[0]+"cm "+a.value[1]+"kg ":a.seriesName+" :<br/>"+a.name+" : "+a.value+"kg "}},data:[[161.2,51.6],[167.5,59],[159.5,49.2],[157,63],[155.8,53.6],[170,59],[159.1,47.6],[166,69.8],[176.2,66.8],[160.2,75.2],[172.5,55.2],[170.9,54.2],[172.9,62.5],[153.4,42],[160,50],[147.2,49.8],[168.2,49.2],[175,73.2],[157,47.8],[167.6,68.8],[159.5,50.6],[175,82.5],[166.8,57.2],[176.5,87.8],[170.2,72.8],[174,54.5],[173,59.8],[179.9,67.3],[170.5,67.8],[160,47],[154.4,46.2],[162,55],[176.5,83],[160,54.4],[152,45.8],[162.1,53.6],[170,73.2],[160.2,52.1],[161.3,67.9],[166.4,56.6],[168.9,62.3],[163.8,58.5],[167.6,54.5],[160,50.2],[161.3,60.3],[167.6,58.3],[165.1,56.2],[160,50.2],[170,72.9],[157.5,59.8],[167.6,61],[160.7,69.1],[163.2,55.9],[152.4,46.5],[157.5,54.3],[168.3,54.8],[180.3,60.7],[165.5,60],[165,62],[164.5,60.3],[156,52.7],[160,74.3],[163,62],[165.7,73.1],[161,80],[162,54.7],[166,53.2],[174,75.7],[172.7,61.1],[167.6,55.7],[151.1,48.7],[164.5,52.3],[163.5,50],[152,59.3],[169,62.5],[164,55.7],[161.2,54.8],[155,45.9],[170,70.6],[176.2,67.2],[170,69.4],[162.5,58.2],[170.3,64.8],[164.1,71.6],[169.5,52.8],[163.2,59.8],[154.5,49],[159.8,50],[173.2,69.2],[170,55.9],[161.4,63.4],[169,58.2],[166.2,58.6],[159.4,45.7],[162.5,52.2],[159,48.6],[162.8,57.8],[159,55.6],[179.8,66.8],[162.9,59.4],[161,53.6],[151.1,73.2],[168.2,53.4],[168.9,69],[173.2,58.4],[171.8,56.2],[178,70.6],[164.3,59.8],[163,72],[168.5,65.2],[166.8,56.6],[172.7,105.2],[163.5,51.8],[169.4,63.4],[167.8,59],[159.5,47.6],[167.6,63],[161.2,55.2],[160,45],[163.2,54],[162.2,50.2],[161.3,60.2],[149.5,44.8],[157.5,58.8],[163.2,56.4],[172.7,62],[155,49.2],[156.5,67.2],[164,53.8],[160.9,54.4],[162.8,58],[167,59.8],[160,54.8],[160,43.2],[168.9,60.5],[158.2,46.4],[156,64.4],[160,48.8],[167.1,62.2],[158,55.5],[167.6,57.8],[156,54.6],[162.1,59.2],[173.4,52.7],[159.8,53.2],[170.5,64.5],[159.2,51.8],[157.5,56],[161.3,63.6],[162.6,63.2],[160,59.5],[168.9,56.8],[165.1,64.1],[162.6,50],[165.1,72.3],[166.4,55],[160,55.9],[152.4,60.4],[170.2,69.1],[162.6,84.5],[170.2,55.9],[158.8,55.5],[172.7,69.5],[167.6,76.4],[162.6,61.4],[167.6,65.9],[156.2,58.6],[175.2,66.8],[172.1,56.6],[162.6,58.6],[160,55.9],[165.1,59.1],[182.9,81.8],[166.4,70.7],[165.1,56.8],[177.8,60],[165.1,58.2],[175.3,72.7],[154.9,54.1],[158.8,49.1],[172.7,75.9],[168.9,55],[161.3,57.3],[167.6,55],[165.1,65.5],[175.3,65.5],[157.5,48.6],[163.8,58.6],[167.6,63.6],[165.1,55.2],[165.1,62.7],[168.9,56.6],[162.6,53.9],[164.5,63.2],[176.5,73.6],[168.9,62],[175.3,63.6],[159.4,53.2],[160,53.4],[170.2,55],[162.6,70.5],[167.6,54.5],[162.6,54.5],[160.7,55.9],[160,59],[157.5,63.6],[162.6,54.5],[152.4,47.3],[170.2,67.7],[165.1,80.9],[172.7,70.5],[165.1,60.9],[170.2,63.6],[170.2,54.5],[170.2,59.1],[161.3,70.5],[167.6,52.7],[167.6,62.7],[165.1,86.3],[162.6,66.4],[152.4,67.3],[168.9,63],[170.2,73.6],[175.2,62.3],[175.2,57.7],[160,55.4],[165.1,104.1],[174,55.5],[170.2,77.3],[160,80.5],[167.6,64.5],[167.6,72.3],[167.6,61.4],[154.9,58.2],[162.6,81.8],[175.3,63.6],[171.4,53.4],[157.5,54.5],[165.1,53.6],[160,60],[174,73.6],[162.6,61.4],[174,55.5],[162.6,63.6],[161.3,60.9],[156.2,60],[149.9,46.8],[169.5,57.3],[160,64.1],[175.3,63.6],[169.5,67.3],[160,75.5],[172.7,68.2],[162.6,61.4],[157.5,76.8],[176.5,71.8],[164.4,55.5],[160.7,48.6],[174,66.4],[163.8,67.3]],markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Mean"}]}},{name:"Data2",type:"scatter",tooltip:{trigger:"item",formatter:function(a){return a.value.length>1?a.seriesName+" :<br/>"+a.value[0]+"cm "+a.value[1]+"kg ":a.seriesName+" :<br/>"+a.name+" : "+a.value+"kg "}},data:[[174,65.6],[175.3,71.8],[193.5,80.7],[186.5,72.6],[187.2,78.8],[181.5,74.8],[184,86.4],[184.5,78.4],[175,62],[184,81.6],[180,76.6],[177.8,83.6],[192,90],[176,74.6],[174,71],[184,79.6],[192.7,93.8],[171.5,70],[173,72.4],[176,85.9],[176,78.8],[180.5,77.8],[172.7,66.2],[176,86.4],[173.5,81.8],[178,89.6],[180.3,82.8],[180.3,76.4],[164.5,63.2],[173,60.9],[183.5,74.8],[175.5,70],[188,72.4],[189.2,84.1],[172.8,69.1],[170,59.5],[182,67.2],[170,61.3],[177.8,68.6],[184.2,80.1],[186.7,87.8],[171.4,84.7],[172.7,73.4],[175.3,72.1],[180.3,82.6],[182.9,88.7],[188,84.1],[177.2,94.1],[172.1,74.9],[167,59.1],[169.5,75.6],[174,86.2],[172.7,75.3],[182.2,87.1],[164.1,55.2],[163,57],[171.5,61.4],[184.2,76.8],[174,86.8],[174,72.2],[177,71.6],[186,84.8],[167,68.2],[171.8,66.1],[182,72],[167,64.6],[177.8,74.8],[164.5,70],[192,101.6],[175.5,63.2],[171.2,79.1],[181.6,78.9],[167.4,67.7],[181.1,66],[177,68.2],[174.5,63.9],[177.5,72],[170.5,56.8],[182.4,74.5],[197.1,90.9],[180.1,93],[175.5,80.9],[180.6,72.7],[184.4,68],[175.5,70.9],[180.6,72.5],[177,72.5],[177.1,83.4],[181.6,75.5],[176.5,73],[175,70.2],[174,73.4],[165.1,70.5],[177,68.9],[192,102.3],[176.5,68.4],[169.4,65.9],[182.1,75.7],[179.8,84.5],[175.3,87.7],[184.9,86.4],[177.3,73.2],[167.4,53.9],[178.1,72],[168.9,55.5],[157.2,58.4],[180.3,83.2],[170.2,72.7],[177.8,64.1],[172.7,72.3],[165.1,65],[186.7,86.4],[165.1,65],[174,88.6],[175.3,84.1],[185.4,66.8],[177.8,75.5],[180.3,93.2],[180.3,82.7],[177.8,58],[177.8,79.5],[177.8,78.6],[177.8,71.8],[177.8,116.4],[163.8,72.2],[188,83.6],[198.1,85.5],[175.3,90.9],[166.4,85.9],[190.5,89.1],[166.4,75],[177.8,77.7],[179.7,86.4],[172.7,90.9],[190.5,73.6],[185.4,76.4],[168.9,69.1],[167.6,84.5],[175.3,64.5],[170.2,69.1],[190.5,108.6],[177.8,86.4],[190.5,80.9],[177.8,87.7],[184.2,94.5],[176.5,80.2],[177.8,72],[180.3,71.4],[171.4,72.7],[172.7,84.1],[172.7,76.8],[177.8,63.6],[177.8,80.9],[182.9,80.9],[170.2,85.5],[167.6,68.6],[175.3,67.7],[165.1,66.4],[185.4,102.3],[181.6,70.5],[172.7,95.9],[190.5,84.1],[179.1,87.3],[175.3,71.8],[170.2,65.9],[193,95.9],[171.4,91.4],[177.8,81.8],[177.8,96.8],[167.6,69.1],[167.6,82.7],[180.3,75.5],[182.9,79.5],[176.5,73.6],[186.7,91.8],[188,84.1],[188,85.9],[177.8,81.8],[174,82.5],[177.8,80.5],[171.4,70],[185.4,81.8],[185.4,84.1],[188,90.5],[188,91.4],[182.9,89.1],[176.5,85],[175.3,69.1],[175.3,73.6],[188,80.5],[188,82.7],[175.3,86.4],[170.5,67.7],[179.1,92.7],[177.8,93.6],[175.3,70.9],[182.9,75],[170.8,93.2],[188,93.2],[180.3,77.7],[177.8,61.4],[185.4,94.1],[168.9,75],[185.4,83.6],[180.3,85.5],[174,73.9],[167.6,66.8],[182.9,87.3],[160,72.3],[180.3,88.6],[167.6,75.5],[186.7,101.4],[175.3,91.1],[175.3,67.3],[175.9,77.7],[175.3,81.8],[179.1,75.5],[181.6,84.5],[177.8,76.6],[182.9,85],[177.8,102.5],[184.2,77.3],[179.1,71.8],[176.5,87.9],[188,94.3],[174,70.9],[167.6,64.5],[170.2,77.3],[167.6,72.3],[188,87.3],[174,80],[176.5,82.3],[180.3,73.6],[167.6,74.1],[188,85.9],[180.3,73.2],[167.6,76.3],[183,65.9],[183,90.9],[179.1,89.1],[170.2,62.3],[177.8,82.7],[179.1,79.1],[190.5,98.2],[177.8,84.1],[180.3,83.2],[180.3,83.2]],markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Mean"}]}}]})}if($("#echart_bar_horizontal").length){var b=echarts.init(document.getElementById("echart_bar_horizontal"),a);b.setOption({title:{text:"Bar Graph",subtext:"Graph subtitle"},tooltip:{trigger:"axis"},legend:{x:100,data:["2015","2016"]},toolbox:{show:!0,feature:{saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,xAxis:[{type:"value",boundaryGap:[0,.01]}],yAxis:[{type:"category",data:["Jan","Feb","Mar","Apr","May","Jun"]}],series:[{name:"2015",type:"bar",data:[18203,23489,29034,104970,131744,630230]},{name:"2016",type:"bar",data:[19325,23438,31e3,121594,134141,681807]}]})}if($("#echart_pie2").length){var h=echarts.init(document.getElementById("echart_pie2"),a);h.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{x:"center",y:"bottom",data:["rose1","rose2","rose3","rose4","rose5","rose6"]},toolbox:{show:!0,feature:{magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,series:[{name:"Area Mode",type:"pie",radius:[25,90],center:["50%",170],roseType:"area",x:"50%",max:40,sort:"ascending",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"}]}]})}if($("#echart_donut").length){var i=echarts.init(document.getElementById("echart_donut"),a);i.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},calculable:!0,legend:{x:"center",y:"bottom",data:["Direct Access","E-mail Marketing","Union Ad","Video Ads","Search Engine"]},toolbox:{show:!0,feature:{magicType:{show:!0,type:["pie","funnel"],option:{funnel:{x:"25%",width:"50%",funnelAlign:"center",max:1548}}},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},series:[{name:"Access to the resource",type:"pie",radius:["35%","55%"],itemStyle:{normal:{label:{show:!0},labelLine:{show:!0}},emphasis:{label:{show:!0,position:"center",textStyle:{fontSize:"14",fontWeight:"normal"}}}},data:[{value:335,name:"Direct Access"},{value:310,name:"E-mail Marketing"},{value:234,name:"Union Ad"},{value:135,name:"Video Ads"},{value:1548,name:"Search Engine"}]}]})}if($("#echart_pie").length){var j=echarts.init(document.getElementById("echart_pie"),a);j.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{x:"center",y:"bottom",data:["Direct Access","E-mail Marketing","Union Ad","Video Ads","Search Engine"]},toolbox:{show:!0,feature:{magicType:{show:!0,type:["pie","funnel"],option:{funnel:{x:"25%",width:"50%",funnelAlign:"left",max:1548}}},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","48%"],data:[{value:335,name:"Direct Access"},{value:310,name:"E-mail Marketing"},{value:234,name:"Union Ad"},{value:135,name:"Video Ads"},{value:1548,name:"Search Engine"}]}]});var k={normal:{label:{show:!1},labelLine:{show:!1}}},l={normal:{color:"rgba(0,0,0,0)",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"rgba(0,0,0,0)"}}}if($("#echart_mini_pie").length){var m=echarts.init(document.getElementById("echart_mini_pie"),a);m.setOption({title:{text:"Chart #2",subtext:"From ExcelHome",sublink:"http://e.weibo.com/1341556070/AhQXtjbqh",x:"center",y:"center",itemGap:20,textStyle:{color:"rgba(30,144,255,0.8)",fontFamily:"微软雅黑",fontSize:35,fontWeight:"bolder"}},tooltip:{show:!0,formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",x:170,y:45,itemGap:12,data:["68%Something #1","29%Something #2","3%Something #3"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,title:"Text View",lang:["Text View","Close","Refresh"],readOnly:!1},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},series:[{name:"1",type:"pie",clockWise:!1,radius:[105,130],itemStyle:k,data:[{value:68,name:"68%Something #1"},{value:32,name:"invisible",itemStyle:l}]},{name:"2",type:"pie",clockWise:!1,radius:[80,105],itemStyle:k,data:[{value:29,name:"29%Something #2"},{value:71,name:"invisible",itemStyle:l}]},{name:"3",type:"pie",clockWise:!1,radius:[25,80],itemStyle:k,data:[{value:3,name:"3%Something #3"},{value:97,name:"invisible",itemStyle:l}]}]})}if($("#echart_world_map").length){var n=echarts.init(document.getElementById("echart_world_map"),a);n.setOption({title:{text:"World Population (2010)",subtext:"from United Nations, Total population, both sexes combined, as of 1 July (thousands)",x:"center",y:"top"},tooltip:{trigger:"item",formatter:function(a){var b=(a.value+"").split(".");return b=b[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+"."+b[1],a.seriesName+"<br/>"+a.name+" : "+b}},toolbox:{show:!0,orient:"vertical",x:"right",y:"center",feature:{mark:{show:!0},dataView:{show:!0,title:"Text View",lang:["Text View","Close","Refresh"],readOnly:!1},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},dataRange:{min:0,max:1e6,text:["High","Low"],realtime:!1,calculable:!0,color:["#087E65","#26B99A","#CBEAE3"]},series:[{name:"World Population (2010)",type:"map",mapType:"world",roam:!1,mapLocation:{y:60},itemStyle:{emphasis:{label:{show:!0}}},data:[{name:"Afghanistan",value:28397.812},{name:"Angola",value:19549.124},{name:"Albania",value:3150.143},{name:"United Arab Emirates",value:8441.537},{name:"Argentina",value:40374.224},{name:"Armenia",value:2963.496},{name:"French Southern and Antarctic Lands",value:268.065},{name:"Australia",value:22404.488},{name:"Austria",value:8401.924},{name:"Azerbaijan",value:9094.718},{name:"Burundi",value:9232.753},{name:"Belgium",value:10941.288},{name:"Benin",value:9509.798},{name:"Burkina Faso",value:15540.284},{name:"Bangladesh",value:151125.475},{name:"Bulgaria",value:7389.175},{name:"The Bahamas",value:66402.316},{name:"Bosnia and Herzegovina",value:3845.929},{name:"Belarus",value:9491.07},{name:"Belize",value:308.595},{name:"Bermuda",value:64.951},{name:"Bolivia",value:716.939},{name:"Brazil",value:195210.154},{name:"Brunei",value:27.223},{name:"Bhutan",value:716.939},{name:"Botswana",value:1969.341},{name:"Central African Republic",value:4349.921},{name:"Canada",value:34126.24},{name:"Switzerland",value:7830.534},{name:"Chile",value:17150.76},{name:"China",value:1359821.465},{name:"Ivory Coast",value:60508.978},{name:"Cameroon",value:20624.343},{name:"Democratic Republic of the Congo",value:62191.161},{name:"Republic of the Congo",value:3573.024},{name:"Colombia",value:46444.798},{name:"Costa Rica",value:4669.685},{name:"Cuba",value:11281.768},{name:"Northern Cyprus",value:1.468},{name:"Cyprus",value:1103.685},{name:"Czech Republic",value:10553.701
},{name:"Germany",value:83017.404},{name:"Djibouti",value:834.036},{name:"Denmark",value:5550.959},{name:"Dominican Republic",value:10016.797},{name:"Algeria",value:37062.82},{name:"Ecuador",value:15001.072},{name:"Egypt",value:78075.705},{name:"Eritrea",value:5741.159},{name:"Spain",value:46182.038},{name:"Estonia",value:1298.533},{name:"Ethiopia",value:87095.281},{name:"Finland",value:5367.693},{name:"Fiji",value:860.559},{name:"Falkland Islands",value:49.581},{name:"France",value:63230.866},{name:"Gabon",value:1556.222},{name:"United Kingdom",value:62066.35},{name:"Georgia",value:4388.674},{name:"Ghana",value:24262.901},{name:"Guinea",value:10876.033},{name:"Gambia",value:1680.64},{name:"Guinea Bissau",value:10876.033},{name:"Equatorial Guinea",value:696.167},{name:"Greece",value:11109.999},{name:"Greenland",value:56.546},{name:"Guatemala",value:14341.576},{name:"French Guiana",value:231.169},{name:"Guyana",value:786.126},{name:"Honduras",value:7621.204},{name:"Croatia",value:4338.027},{name:"Haiti",value:9896.4},{name:"Hungary",value:10014.633},{name:"Indonesia",value:240676.485},{name:"India",value:1205624.648},{name:"Ireland",value:4467.561},{name:"Iran",value:240676.485},{name:"Iraq",value:30962.38},{name:"Iceland",value:318.042},{name:"Israel",value:7420.368},{name:"Italy",value:60508.978},{name:"Jamaica",value:2741.485},{name:"Jordan",value:6454.554},{name:"Japan",value:127352.833},{name:"Kazakhstan",value:15921.127},{name:"Kenya",value:40909.194},{name:"Kyrgyzstan",value:5334.223},{name:"Cambodia",value:14364.931},{name:"South Korea",value:51452.352},{name:"Kosovo",value:97.743},{name:"Kuwait",value:2991.58},{name:"Laos",value:6395.713},{name:"Lebanon",value:4341.092},{name:"Liberia",value:3957.99},{name:"Libya",value:6040.612},{name:"Sri Lanka",value:20758.779},{name:"Lesotho",value:2008.921},{name:"Lithuania",value:3068.457},{name:"Luxembourg",value:507.885},{name:"Latvia",value:2090.519},{name:"Morocco",value:31642.36},{name:"Moldova",value:103.619},{name:"Madagascar",value:21079.532},{name:"Mexico",value:117886.404},{name:"Macedonia",value:507.885},{name:"Mali",value:13985.961},{name:"Myanmar",value:51931.231},{name:"Montenegro",value:620.078},{name:"Mongolia",value:2712.738},{name:"Mozambique",value:23967.265},{name:"Mauritania",value:3609.42},{name:"Malawi",value:15013.694},{name:"Malaysia",value:28275.835},{name:"Namibia",value:2178.967},{name:"New Caledonia",value:246.379},{name:"Niger",value:15893.746},{name:"Nigeria",value:159707.78},{name:"Nicaragua",value:5822.209},{name:"Netherlands",value:16615.243},{name:"Norway",value:4891.251},{name:"Nepal",value:26846.016},{name:"New Zealand",value:4368.136},{name:"Oman",value:2802.768},{name:"Pakistan",value:173149.306},{name:"Panama",value:3678.128},{name:"Peru",value:29262.83},{name:"Philippines",value:93444.322},{name:"Papua New Guinea",value:6858.945},{name:"Poland",value:38198.754},{name:"Puerto Rico",value:3709.671},{name:"North Korea",value:1.468},{name:"Portugal",value:10589.792},{name:"Paraguay",value:6459.721},{name:"Qatar",value:1749.713},{name:"Romania",value:21861.476},{name:"Russia",value:21861.476},{name:"Rwanda",value:10836.732},{name:"Western Sahara",value:514.648},{name:"Saudi Arabia",value:27258.387},{name:"Sudan",value:35652.002},{name:"South Sudan",value:9940.929},{name:"Senegal",value:12950.564},{name:"Solomon Islands",value:526.447},{name:"Sierra Leone",value:5751.976},{name:"El Salvador",value:6218.195},{name:"Somaliland",value:9636.173},{name:"Somalia",value:9636.173},{name:"Republic of Serbia",value:3573.024},{name:"Suriname",value:524.96},{name:"Slovakia",value:5433.437},{name:"Slovenia",value:2054.232},{name:"Sweden",value:9382.297},{name:"Swaziland",value:1193.148},{name:"Syria",value:7830.534},{name:"Chad",value:11720.781},{name:"Togo",value:6306.014},{name:"Thailand",value:66402.316},{name:"Tajikistan",value:7627.326},{name:"Turkmenistan",value:5041.995},{name:"East Timor",value:10016.797},{name:"Trinidad and Tobago",value:1328.095},{name:"Tunisia",value:10631.83},{name:"Turkey",value:72137.546},{name:"United Republic of Tanzania",value:44973.33},{name:"Uganda",value:33987.213},{name:"Ukraine",value:46050.22},{name:"Uruguay",value:3371.982},{name:"United States of America",value:312247.116},{name:"Uzbekistan",value:27769.27},{name:"Venezuela",value:236.299},{name:"Vietnam",value:89047.397},{name:"Vanuatu",value:236.299},{name:"West Bank",value:13.565},{name:"Yemen",value:22763.008},{name:"South Africa",value:51452.352},{name:"Zambia",value:13216.985},{name:"Zimbabwe",value:13076.978}]}]})}}}!function(a,b){var c=function(a,b,c){var d;return function(){function h(){c||a.apply(f,g),d=null}var f=this,g=arguments;d?clearTimeout(d):c&&a.apply(f,g),d=setTimeout(h,b||100)}};jQuery.fn[b]=function(a){return a?this.bind("resize",c(a)):this.trigger(b)}}(jQuery,"smartresize");var CURRENT_URL=window.location.href.split("#")[0].split("?")[0],$BODY=$("body"),$MENU_TOGGLE=$("#menu_toggle"),$SIDEBAR_MENU=$("#sidebar-menu"),$SIDEBAR_FOOTER=$(".sidebar-footer"),$LEFT_COL=$(".left_col"),$RIGHT_COL=$(".right_col"),$NAV_MENU=$(".nav_menu"),$FOOTER=$("footer"),randNum=function(){return Math.floor(21*Math.random())+20};$(document).ready(function(){$(".collapse-link").on("click",function(){var a=$(this).closest(".x_panel"),b=$(this).find("i"),c=a.find(".x_content");a.attr("style")?c.slideToggle(200,function(){a.removeAttr("style")}):(c.slideToggle(200),a.css("height","auto")),b.toggleClass("fa-chevron-up fa-chevron-down")}),$(".close-link").click(function(){var a=$(this).closest(".x_panel");a.remove()})}),$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip({container:"body"})}),$(".progress .progress-bar")[0]&&$(".progress .progress-bar").progressbar(),$(document).ready(function(){if($(".js-switch")[0]){var a=Array.prototype.slice.call(document.querySelectorAll(".js-switch"));a.forEach(function(a){new Switchery(a,{color:"#26B99A"})})}}),$(document).ready(function(){$("input.flat")[0]&&$(document).ready(function(){$("input.flat").iCheck({checkboxClass:"icheckbox_flat-green",radioClass:"iradio_flat-green"})})}),$("table input").on("ifChecked",function(){checkState="",$(this).parent().parent().parent().addClass("selected"),countChecked()}),$("table input").on("ifUnchecked",function(){checkState="",$(this).parent().parent().parent().removeClass("selected"),countChecked()});var checkState="";$(".bulk_action input").on("ifChecked",function(){checkState="",$(this).parent().parent().parent().addClass("selected"),countChecked()}),$(".bulk_action input").on("ifUnchecked",function(){checkState="",$(this).parent().parent().parent().removeClass("selected"),countChecked()}),$(".bulk_action input#check-all").on("ifChecked",function(){checkState="all",countChecked()}),$(".bulk_action input#check-all").on("ifUnchecked",function(){checkState="none",countChecked()}),$(document).ready(function(){$(".expand").on("click",function(){$(this).next().slideToggle(200),$expand=$(this).find(">:first-child"),"+"==$expand.text()?$expand.text("-"):$expand.text("+")})}),"undefined"!=typeof NProgress&&($(document).ready(function(){NProgress.start()}),$(window).load(function(){NProgress.done()}));var originalLeave=$.fn.popover.Constructor.prototype.leave;$.fn.popover.Constructor.prototype.leave=function(a){var c,d,b=a instanceof this.constructor?a:$(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);originalLeave.call(this,a),a.currentTarget&&(c=$(a.currentTarget).siblings(".popover"),d=b.timeout,c.one("mouseenter",function(){clearTimeout(d),c.one("mouseleave",function(){$.fn.popover.Constructor.prototype.leave.call(b,b)})}))},$("body").popover({selector:"[data-popover]",trigger:"click hover",delay:{show:50,hide:400}}),$(document).ready(function(){init_sparklines(),init_flot_chart(),init_sidebar(),init_wysiwyg(),init_InputMask(),init_JQVmap(),init_cropper(),init_knob(),init_IonRangeSlider(),init_ColorPicker(),init_TagsInput(),init_parsley(),init_daterangepicker(),init_daterangepicker_right(),init_daterangepicker_single_call(),init_daterangepicker_reservation(),init_SmartWizard(),init_EasyPieChart(),init_charts(),init_echarts(),init_morris_charts(),init_skycons(),init_select2(),init_validator(),init_DataTables(),init_chart_doughnut(),init_gauge(),init_PNotify(),init_starrr(),init_calendar(),init_compose(),init_CustomNotification(),init_autosize(),init_autocomplete()});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/progress/index.js":
/*!****************************************!*\
  !*** ./node_modules/progress/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/node-progress */ "./node_modules/progress/lib/node-progress.js");


/***/ }),

/***/ "./node_modules/progress/lib/node-progress.js":
/*!****************************************************!*\
  !*** ./node_modules/progress/lib/node-progress.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*!
 * node-progress
 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Expose `ProgressBar`.
 */

exports = module.exports = ProgressBar;

/**
 * Initialize a `ProgressBar` with the given `fmt` string and `options` or
 * `total`.
 *
 * Options:
 *
 *   - `curr` current completed index
 *   - `total` total number of ticks to complete
 *   - `width` the displayed width of the progress bar defaulting to total
 *   - `stream` the output stream defaulting to stderr
 *   - `head` head character defaulting to complete character
 *   - `complete` completion character defaulting to "="
 *   - `incomplete` incomplete character defaulting to "-"
 *   - `renderThrottle` minimum time between updates in milliseconds defaulting to 16
 *   - `callback` optional function to call when the progress bar completes
 *   - `clear` will clear the progress bar upon termination
 *
 * Tokens:
 *
 *   - `:bar` the progress bar itself
 *   - `:current` current tick number
 *   - `:total` total ticks
 *   - `:elapsed` time elapsed in seconds
 *   - `:percent` completion percentage
 *   - `:eta` eta in seconds
 *   - `:rate` rate of ticks per second
 *
 * @param {string} fmt
 * @param {object|number} options or total
 * @api public
 */

function ProgressBar(fmt, options) {
  this.stream = options.stream || process.stderr;

  if (typeof(options) == 'number') {
    var total = options;
    options = {};
    options.total = total;
  } else {
    options = options || {};
    if ('string' != typeof fmt) throw new Error('format required');
    if ('number' != typeof options.total) throw new Error('total required');
  }

  this.fmt = fmt;
  this.curr = options.curr || 0;
  this.total = options.total;
  this.width = options.width || this.total;
  this.clear = options.clear
  this.chars = {
    complete   : options.complete || '=',
    incomplete : options.incomplete || '-',
    head       : options.head || (options.complete || '=')
  };
  this.renderThrottle = options.renderThrottle !== 0 ? (options.renderThrottle || 16) : 0;
  this.callback = options.callback || function () {};
  this.tokens = {};
  this.lastDraw = '';
}

/**
 * "tick" the progress bar with optional `len` and optional `tokens`.
 *
 * @param {number|object} len or tokens
 * @param {object} tokens
 * @api public
 */

ProgressBar.prototype.tick = function(len, tokens){
  if (len !== 0)
    len = len || 1;

  // swap tokens
  if ('object' == typeof len) tokens = len, len = 1;
  if (tokens) this.tokens = tokens;

  // start time for eta
  if (0 == this.curr) this.start = new Date;

  this.curr += len

  // schedule render
  if (!this.renderThrottleTimeout) {
    this.renderThrottleTimeout = setTimeout(this.render.bind(this), this.renderThrottle);
  }

  // progress complete
  if (this.curr >= this.total) {
    if (this.renderThrottleTimeout) this.render();
    this.complete = true;
    this.terminate();
    this.callback(this);
    return;
  }
};

/**
 * Method to render the progress bar with optional `tokens` to place in the
 * progress bar's `fmt` field.
 *
 * @param {object} tokens
 * @api public
 */

ProgressBar.prototype.render = function (tokens) {
  clearTimeout(this.renderThrottleTimeout);
  this.renderThrottleTimeout = null;

  if (tokens) this.tokens = tokens;

  if (!this.stream.isTTY) return;

  var ratio = this.curr / this.total;
  ratio = Math.min(Math.max(ratio, 0), 1);

  var percent = ratio * 100;
  var incomplete, complete, completeLength;
  var elapsed = new Date - this.start;
  var eta = (percent == 100) ? 0 : elapsed * (this.total / this.curr - 1);
  var rate = this.curr / (elapsed / 1000);

  /* populate the bar template with percentages and timestamps */
  var str = this.fmt
    .replace(':current', this.curr)
    .replace(':total', this.total)
    .replace(':elapsed', isNaN(elapsed) ? '0.0' : (elapsed / 1000).toFixed(1))
    .replace(':eta', (isNaN(eta) || !isFinite(eta)) ? '0.0' : (eta / 1000)
      .toFixed(1))
    .replace(':percent', percent.toFixed(0) + '%')
    .replace(':rate', Math.round(rate));

  /* compute the available space (non-zero) for the bar */
  var availableSpace = Math.max(0, this.stream.columns - str.replace(':bar', '').length);
  if(availableSpace && process.platform === 'win32'){
    availableSpace = availableSpace - 1;
  }

  var width = Math.min(this.width, availableSpace);

  /* TODO: the following assumes the user has one ':bar' token */
  completeLength = Math.round(width * ratio);
  complete = Array(Math.max(0, completeLength + 1)).join(this.chars.complete);
  incomplete = Array(Math.max(0, width - completeLength + 1)).join(this.chars.incomplete);

  /* add head to the complete string */
  if(completeLength > 0)
    complete = complete.slice(0, -1) + this.chars.head;

  /* fill in the actual progress bar */
  str = str.replace(':bar', complete + incomplete);

  /* replace the extra tokens */
  if (this.tokens) for (var key in this.tokens) str = str.replace(':' + key, this.tokens[key]);

  if (this.lastDraw !== str) {
    this.stream.cursorTo(0);
    this.stream.write(str);
    this.stream.clearLine(1);
    this.lastDraw = str;
  }
};

/**
 * "update" the progress bar to represent an exact percentage.
 * The ratio (between 0 and 1) specified will be multiplied by `total` and
 * floored, representing the closest available "tick." For example, if a
 * progress bar has a length of 3 and `update(0.5)` is called, the progress
 * will be set to 1.
 *
 * A ratio of 0.5 will attempt to set the progress to halfway.
 *
 * @param {number} ratio The ratio (between 0 and 1 inclusive) to set the
 *   overall completion to.
 * @api public
 */

ProgressBar.prototype.update = function (ratio, tokens) {
  var goal = Math.floor(ratio * this.total);
  var delta = goal - this.curr;

  this.tick(delta, tokens);
};

/**
 * "interrupt" the progress bar and write a message above it.
 * @param {string} message The message to write.
 * @api public
 */

ProgressBar.prototype.interrupt = function (message) {
  // clear the current line
  this.stream.clearLine();
  // move the cursor to the start of the line
  this.stream.cursorTo(0);
  // write the message text
  this.stream.write(message);
  // terminate the line after writing the message
  this.stream.write('\n');
  // re-display the progress bar with its lastDraw
  this.stream.write(this.lastDraw);
};

/**
 * Terminates a progress bar.
 *
 * @api public
 */

ProgressBar.prototype.terminate = function () {
  if (this.clear) {
    if (this.stream.clearLine) {
      this.stream.clearLine();
      this.stream.cursorTo(0);
    }
  } else {
    this.stream.write('\n');
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/progressbar/source/index.js":
/*!**************************************************!*\
  !*** ./node_modules/progressbar/source/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Progress = __webpack_require__(/*! progress */ "./node_modules/progress/index.js")

class ProgressBar extends __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter {

	static create (...args) {
		return new this(...args)
	}

	constructor (...args) {
		super(...args)

		this._tick = null
		this._total = null
		this._bar = null
		this._step = null
		this._domain = null

		this.start()
	}

	start () {
		const me = this
		this._tick = 0
		this._total = 1
		try {
			this._domain = __webpack_require__(/*! domain */ "./node_modules/domain-browser/source/index.js").create()
		}
		catch (err) { }

		// bubble domain errors
		if (this._domain) {
			this._domain.on('error', function (err) {
				me.emit('error', err)
			})
		}

		// destroy the old progressbar and create our new one
		this.on('step', function () {
			me.destroy()
			const message = `Performing ${me._step} at :current/:total :percent :bar`
			if (me._domain) {
				me._domain.run(me.onStep.bind(me, message))
			}
			else {
				me.onStep()
			}
		})

		// update our bar's total
		this.on('total', function () {
			if (me._bar) me._bar.total = me._total
		})

		// update our bar's progress
		this.on('tick', function () {
			if (me._bar) me._bar.tick(me._tick - me._bar.curr)
		})

		// chain
		return this
	}

	onStep (message) {
		try {
			this._bar = new Progress(message, {
				width: 50,
				total: this._total,
				clear: true
			})
		}
		catch (err) {
			if (this._domain) {
				this._domain.emit('error', err)
			}
			else {
				this.emit('error', err)
			}
		}
	}

	step (s) {
		if (s != null) {
			this.setStep(s)
		}
		else {
			throw new Error('step is now just an alias for setStep to ensure consistent return value')
		}
		return this
	}
	getStep () {
		return this._step
	}
	setStep (s) {
		if (!s) throw new Error('no step param defined')
		this._step = s
		this.emit('step', this._step)
		this.setTick(0)
		this.setTotal(1)
		return this
	}

	total (t) {
		if (t != null) {
			this.setTotal(t)
		}
		else {
			this.addTotal()
		}
		return this
	}
	getTotal () {
		return this._total
	}
	addTotal (t = 1) {
		this._total += t
		this.emit('total', this._total)
		return this
	}
	setTotal (t) {
		this._total = t || 1  // must be truthy rather than null, otherwise: RangeError: Invalid array length
		this.emit('total', this._total)
		return this
	}

	tick (t) {
		if (t != null) {
			this.setTick(t)
		}
		else {
			this.addTick()
		}
		return this
	}
	getTick () {
		return this._tick
	}
	addTick (t = 1) {
		this._tick += t
		this.emit('tick', this._tick)
		return this
	}
	setTick (t) {
		this._tick = t
		this.emit('tick', this._tick)
		return this
	}

	destroy (next) {
		if (this._bar != null) {
			const me = this
			if (this._domain) {
				this._domain.run(function () {
					me._bar.terminate()
				})
				this._domain.run(function () {
					me._bar = null
				})
			}
			else {
				me._bar.terminate()
				me._bar = null
			}
		}
		if (next) next()
		return this
	}
	finish (next) {
		const me = this
		this.destroy(function () {
			me.emit('finish')
			if (me._domain) me._domain.exit()
			me.removeAllListeners()
			if (next) next()
		})
		return this
	}
}

// Export
module.exports = ProgressBar

// Backwards API Compat
module.exports.ProgressBar = ProgressBar


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

/***/ "./resources/js/gentelella.js":
/*!************************************!*\
  !*** ./resources/js/gentelella.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
* @Author: Adnan
* @Date:   2020-06-03 13:05:06
* @Last Modified by:   Adnan
* @Last Modified time: 2020-06-03 15:49:43
*/
__webpack_require__(/*! gentelella */ "./node_modules/gentelella/build/js/custom.min.js");

__webpack_require__(/*! @pnotify/core/dist/PNotify.js */ "./node_modules/@pnotify/core/dist/PNotify.js");

__webpack_require__(/*! progressbar/source/index.js */ "./node_modules/progressbar/source/index.js");

/***/ }),

/***/ 2:
/*!******************************************!*\
  !*** multi ./resources/js/gentelella.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Projects\live\endurance\endurance\resources\js\gentelella.js */"./resources/js/gentelella.js");


/***/ })

/******/ });