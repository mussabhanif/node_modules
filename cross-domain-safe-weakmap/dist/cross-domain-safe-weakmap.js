!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("xdsweakmap",[],t):"object"==typeof exports?exports.xdsweakmap=t():e.xdsweakmap=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return{}.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"WeakMap",(function(){return l}));var n="Call was rejected by callee.\r\n";function i(e){return void 0===e&&(e=window),"about:"===e.location.protocol}function a(e){try{return!0}catch(e){}return!1}function o(e){void 0===e&&(e=window);var t=e.location;if(!t)throw new Error("Can not read window location");var r=t.protocol;if(!r)throw new Error("Can not read window protocol");if("file:"===r)return"file://";if("about:"===r){var n=function(e){if(void 0===e&&(e=window),e)try{if(e.parent&&e.parent!==e)return e.parent}catch(e){}}(e);return n&&a()?o(n):"about://"}var i=t.host;if(!i)throw new Error("Can not read window host");return r+"//"+i}function c(e){void 0===e&&(e=window);var t=o(e);return t&&e.mockDomain&&0===e.mockDomain.indexOf("mock:")?e.mockDomain:t}var u=[],f=[];function s(e,t){void 0===t&&(t=!0);try{if(e===window)return!1}catch(e){return!0}try{if(!e)return!0}catch(e){return!0}try{if(e.closed)return!0}catch(e){return!e||e.message!==n}if(t&&function(e){if(!function(e){try{if(e===window)return!0}catch(e){}try{var t=Object.getOwnPropertyDescriptor(e,"location");if(t&&!1===t.enumerable)return!1}catch(e){}try{if(i(e)&&a())return!0}catch(e){}try{if(o(e)===o(window))return!0}catch(e){}return!1}(e))return!1;try{if(e===window)return!0;if(i(e)&&a())return!0;if(c(window)===c(e))return!0}catch(e){}return!1}(e))try{if(e.mockclosed)return!0}catch(e){}try{if(!e.parent||!e.top)return!0}catch(e){}var r=function(e,t){for(var r=0;r<e.length;r++)try{if(e[r]===t)return r}catch(e){}return-1}(u,e);if(-1!==r){var s=f[r];if(s&&function(e){if(!e.contentWindow)return!0;if(!e.parentNode)return!0;var t=e.ownerDocument;if(t&&t.documentElement&&!t.documentElement.contains(e)){for(var r=e;r.parentNode&&r.parentNode!==r;)r=r.parentNode;if(!r.host||!t.documentElement.contains(r.host))return!0}return!1}(s))return!0}return!1}function d(e){try{if(e===window)return!0}catch(e){if(e&&e.message===n)return!0}try{if("[object Window]"==={}.toString.call(e))return!0}catch(e){if(e&&e.message===n)return!0}try{if(window.Window&&e instanceof window.Window)return!0}catch(e){if(e&&e.message===n)return!0}try{if(e&&e.self===e)return!0}catch(e){if(e&&e.message===n)return!0}try{if(e&&e.parent===e)return!0}catch(e){if(e&&e.message===n)return!0}try{if(e&&e.top===e)return!0}catch(e){if(e&&e.message===n)return!0}try{if(e&&"__unlikely_value__"===e.__cross_domain_utils_window_check__)return!1}catch(e){return!0}try{if("postMessage"in e&&"self"in e&&"location"in e)return!0}catch(e){}return!1}function h(e,t){for(var r=0;r<e.length;r++)try{if(e[r]===t)return r}catch(e){}return-1}var l=function(){function e(){if(this.name=void 0,this.weakmap=void 0,this.keys=void 0,this.values=void 0,this.name="__weakmap_"+(1e9*Math.random()>>>0)+"__",function(){if("undefined"==typeof WeakMap)return!1;if(void 0===Object.freeze)return!1;try{var e=new WeakMap,t={};return Object.freeze(t),e.set(t,"__testvalue__"),"__testvalue__"===e.get(t)}catch(e){return!1}}())try{this.weakmap=new WeakMap}catch(e){}this.keys=[],this.values=[]}var t=e.prototype;return t._cleanupClosedWindows=function(){for(var e=this.weakmap,t=this.keys,r=0;r<t.length;r++){var n=t[r];if(d(n)&&s(n)){if(e)try{e.delete(n)}catch(e){}t.splice(r,1),this.values.splice(r,1),r-=1}}},t.isSafeToReadWrite=function(e){return!d(e)},t.set=function(e,t){if(!e)throw new Error("WeakMap expected key");var r=this.weakmap;if(r)try{r.set(e,t)}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e))try{var n=this.name,i=e[n];return void(i&&i[0]===e?i[1]=t:Object.defineProperty(e,n,{value:[e,t],writable:!0}))}catch(e){}this._cleanupClosedWindows();var a=this.keys,o=this.values,c=h(a,e);-1===c?(a.push(e),o.push(t)):o[c]=t},t.get=function(e){if(!e)throw new Error("WeakMap expected key");var t=this.weakmap;if(t)try{if(t.has(e))return t.get(e)}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e))try{var r=e[this.name];return r&&r[0]===e?r[1]:void 0}catch(e){}this._cleanupClosedWindows();var n=h(this.keys,e);if(-1!==n)return this.values[n]},t.delete=function(e){if(!e)throw new Error("WeakMap expected key");var t=this.weakmap;if(t)try{t.delete(e)}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e))try{var r=e[this.name];r&&r[0]===e&&(r[0]=r[1]=void 0)}catch(e){}this._cleanupClosedWindows();var n=this.keys,i=h(n,e);-1!==i&&(n.splice(i,1),this.values.splice(i,1))},t.has=function(e){if(!e)throw new Error("WeakMap expected key");var t=this.weakmap;if(t)try{if(t.has(e))return!0}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e))try{var r=e[this.name];return!(!r||r[0]!==e)}catch(e){}return this._cleanupClosedWindows(),-1!==h(this.keys,e)},t.getOrSet=function(e,t){if(this.has(e))return this.get(e);var r=t();return this.set(e,r),r},e}()}])}));
//# sourceMappingURL=cross-domain-safe-weakmap.js.map