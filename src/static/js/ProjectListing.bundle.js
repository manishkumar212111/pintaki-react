webpackJsonp([2],[,function(e,t,n){"use strict";function r(e){return"[object Array]"===O.call(e)}function o(e){return"[object ArrayBuffer]"===O.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function s(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===O.call(e)}function p(e){return"[object File]"===O.call(e)}function d(e){return"[object Blob]"===O.call(e)}function h(e){return"[object Function]"===O.call(e)}function m(e){return f(e)&&h(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document}function b(e,t){if(null!==e&&"undefined"!=typeof e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)b(arguments[n],e);return t}function E(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=E(t[n],e):"object"==typeof e?t[n]=E({},e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)b(arguments[n],e);return t}function j(e,t,n){return b(t,function(t,r){n&&"function"==typeof t?e[r]=x(t,n):e[r]=t}),e}var x=n(12),P=n(37),O=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:P,isFormData:i,isArrayBufferView:a,isString:u,isNumber:s,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:v,forEach:b,merge:w,deepMerge:E,extend:j,trim:y}},,,,,function(e,t,n){"use strict";var r=n(1),o=n(28),i=n(13),a=n(35),u=n(33),s=n(9);e.exports=function(e){return new Promise(function(t,c){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:r,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,c,i),p=null}},p.onabort=function(){p&&(c(s("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){c(s("Network Error",e,null,p)),p=null},p.ontimeout=function(){c(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var m=n(31),g=(e.withCredentials||u(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(l,function(e,t){"undefined"==typeof f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),c(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";var r=n(27);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){"undefined"!=typeof t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!=typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!=typeof e[o]&&(n[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){"undefined"!=typeof t[r]?n[r]=t[r]:"undefined"!=typeof e[r]&&(n[r]=e[r])}),n}},function(e,t,n){(function(t){"use strict";function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof t&&"[object process]"===Object.prototype.toString.call(t)?e=n(6):"undefined"!=typeof XMLHttpRequest&&(e=n(6)),e}var i=n(1),a=n(34),u={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:o(),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){s.headers[e]={}}),i.forEach(["post","put","patch"],function(e){s.headers[e]=i.merge(u)}),e.exports=s}).call(t,n(44))},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(1);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))}))}),i=a.join("&")}if(i){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}},,,,,,,,function(e,t,n){e.exports=n(22)},function(e,t,n){"use strict";function r(e){var t=new a(e),n=i(a.prototype.request,t);return o.extend(n,a.prototype,t),o.extend(n,t),n}var o=n(1),i=n(12),a=n(24),u=n(10),s=n(11),c=r(s);c.Axios=a,c.create=function(e){return r(u(c.defaults,e))},c.Cancel=n(7),c.CancelToken=n(23),c.isCancel=n(8),c.all=function(e){return Promise.all(e)},c.spread=n(36),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(7);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=n(1),i=n(13),a=n(25),u=n(26),s=n(10);r.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=s(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=s(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(1);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(1),i=n(29),a=n(8),u=n(11),s=n(32),c=n(30);e.exports=function(e){r(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||u.adapter;return t(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(9);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(1),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;"set-cookie"===t?a[t]=(a[t]?a[t]:[]).concat([n]):a[t]=a[t]?a[t]+", "+n:n}}),a):a}},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t){/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement("img",e)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=r(i),u=n(3);r(u),t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement("div",{className:"loader spin"})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(2),a=r(i)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),c=r(s),f=n(38),l=r(f),p=n(17),d=r(p),h={viewALlTitle:"View All",description:"This is test desc",headerTitle:"New projects"},m=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.items;return c.default.createElement(s.Fragment,null,c.default.createElement("div",{class:"row"},c.default.createElement("div",{class:"col-md-6"},c.default.createElement("div",{class:"project-box"},c.default.createElement("div",{class:"inner-img"},c.default.createElement(l.default,{src:t.coverImage,alt:t.title})),c.default.createElement(d.default,{href:t.url,default:!0},c.default.createElement("h5",null,t.short_description)),t.price&&c.default.createElement("span",{class:"price-box"},c.default.createElement("i",{class:"fa fa-inr","aria-hidden":"true"})," ",t.price)))))}}]),t}(c.default.Component);t.default=m,m.defaultProps=h},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={HomeAPI:{url:"api/v1/home?",options:{}},ProjectListing:{url:"api/v1/project/list?",options:{}},BlogListing:{url:"api/v1/blog/list?",options:{}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={apiBaseUrl:"http://localhost:9000/"}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(21),i=r(o),a=n(41),u=r(a),s=n(42),c=r(s),f=n(47),l=r(f),p={getUrl:function(e,t,n){var r=void 0;if(n)r=u.default[e].url;else{var o=c.default.apiBaseUrl;r=o+u.default[e].url}return{url:r,qs:l.default.stringify(t)}},getApi:function(e,t,n){var r=this.getUrl(e,t,n);return i.default.get(r.url+"&"+r.qs).then(function(e){if(200==e.status)return e.data}).catch(function(e){return console.error("API ERR: ",(new Date).toString(),e.code,e.toString(),url+"&"+qs),{error:!0,errMsg:e.toString(),errorResp:e}})},POSTAPI:function(e,t,n){var r=this.getUrl(e,t,n),o={headers:{"Content-Type":"application/json"}};return i.default.post(r.url,JSON.stringify(t),o).then(function(e){if(200==e.status)return e.data}).catch(function(e){return console.error(e),{error:!0,errMsg:e.toString(),errorResp:e}})}};t.default=p},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&u())}function u(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(d=h,h=[];++g<t;)d&&d[g].run();g=-1,t=h.length}d=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,h=[],m=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||m||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,o){t=t||"&",r=r||"=";var i={};if("string"!=typeof e||0===e.length)return i;var a=/\+/g;e=e.split(t);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var s=e.length;u>0&&s>u&&(s=u);for(var c=0;c<s;++c){var f,l,p,d,h=e[c].replace(a,"%20"),m=h.indexOf(r);m>=0?(f=h.substr(0,m),l=h.substr(m+1)):(f=h,l=""),p=decodeURIComponent(f),d=decodeURIComponent(l),n(i,p)?Array.isArray(i[p])?i[p].push(d):i[p]=[i[p],d]:i[p]=d}return i}},function(e,t){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,o){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(o){var i=encodeURIComponent(n(o))+r;return Array.isArray(e[o])?e[o].map(function(e){return i+encodeURIComponent(n(e))}).join(t):i+encodeURIComponent(n(e[o]))}).join(t):o?encodeURIComponent(n(o))+r+encodeURIComponent(n(e)):""}},function(e,t,n){"use strict";t.decode=t.parse=n(45),t.encode=t.stringify=n(46)},,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c),l=n(17),p=r(l),d=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"render",value:function(){var e,t=this,n=this.props,r=n.queryParam?n.queryParam:"";if(void 0==n.items||n.items.length<=0)return null;var i=parseInt(n.items.currentPage),a=function(){var e=[],r=1,o=0;o=n.items.pageCount>10?10:n.items.pageCount,t.currentPage>5&&(r=t.currentPage-4,o=t.currentPage+5<=t.props.items.pageCount?t.currentPage+5:t.props.items.pageCount),t.currentPage>5&&t.props.items.pageCount<10&&(r=1,o=t.props.items.pageCount),o=t.props.items.pageCount==o?t.props.items.pageCount:o;for(var i=r;i<=o;i++)e.push(i);return 1==e?"":e},u=a(),s=this.props.link;return f.default.createElement("div",{className:"pagination"},n.items.pageCount<2?1==n.items.pageCount?f.default.createElement("p",{className:"gsc_col-xs-12"},"No More Page"):"":f.default.createElement("div",{className:"gsc_col-md-12"},f.default.createElement("div",{className:"pagination"},f.default.createElement("ul",{className:"clearfix"},f.default.createElement("li",{className:parseInt(i)>1?"":"disable"},i-1>=1?f.default.createElement(p.default,(e={default:!1,href:""+s+r+(parseInt(i)-1)},o(e,"default",!1),o(e,"title","Previous Page"),e),"prev"):""),u&&u.map(function(e,t){return f.default.createElement("li",{key:t,className:e==parseInt(i)?"active":""},f.default.createElement(p.default,{default:!1,href:""+s+r+e,title:"Page "+e+" of "+n.items.pageCount},e))}),f.default.createElement("li",{className:n.items.pageCount==i?"disable":""},n.items.pageCount!=i?f.default.createElement(p.default,{default:!1,href:""+s+r+(i+1),title:"next page"},"next"):"")))))}}]),t}(f.default.Component);t.default=d},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),c=r(s),f=(n(49),n(40)),l=r(f),p=n(43),d=r(p),h=n(3),m=(r(h),n(39)),g=r(m),y=n(53),v=r(y),b={shimmer:!0,seo:{title:"Project Listing",pageDescription:"This is page Description"},projects:{},chunkJs:"ProjectListing",pagination:{}},w=function(e){var t={seo:e.data.seo?e.data.seo:b.seo,projects:e.data.projects?e.data.projects:b.projects,chunkJs:"ProjectListing",pagination:e.data.pagination?e.data.pagination:b.pagination,shimmer:!1};return t.link="/projects/list",t.queryParam="/",t},E=function(e,t){console.log(e);var n={};e.location&&e.location.pathname&&(n.page=e.location.pathname.split("/")[3]),d.default.getApi("ProjectListing",n,!1).then(function(e){200===e.status&&e.data?t(w(e)):(console.log("API ERROR AT ProjectListingpage"),t({error:!0}))})},j=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=e,n.fetchData=n.fetchData.bind(n),n}return a(t,e),u(t,null,[{key:"fetchData",value:function(e,t){var n={};e.location&&e.location.pathname&&(n.page=e.location.pathname.split("/")[3]),d.default.getApi("ProjectListing",n,!1).then(function(e){200===e.status&&e.data?(console.log("in Server side call"),t(w(e))):(console.log("API ERROR AT HOMEPAGE"),t({error:!0}))})}}]),u(t,[{key:"componentDidMount",value:function(){this.fetchData(this.props)}},{key:"fetchData",value:function(e){var t=this;this.setState({shimmer:!0}),E(e,function(e){t.setState(e)})}},{key:"render",value:function(){if(this.state.shimmer)return c.default.createElement(g.default,null);var e=function(e){var t=[];return e&&e.map(function(e){t.push(c.default.createElement(l.default,{items:e}))}),t};return c.default.createElement("div",null,c.default.createElement("h2",null,"Our Projects"),e(this.state.projects),c.default.createElement(v.default,{items:this.state.pagination,link:this.state.link,queryParam:this.state.queryParam}))}}]),t}(c.default.Component);t.default=j}]);