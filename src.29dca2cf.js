parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FRpO":[function(require,module,exports) {
"use strict";var e,t="object"==typeof Reflect?Reflect:null,n=t&&"function"==typeof t.apply?t.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};function r(e){console&&console.warn&&console.warn(e)}e=t&&"function"==typeof t.ownKeys?t.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}module.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function v(e,t,n,i){var o,s,v;if(u(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),v=s[t]),void 0===v)v=s[t]=n,++e._eventsCount;else if("function"==typeof v?v=s[t]=i?[n,v]:[v,n]:i?v.unshift(n):v.push(n),(o=f(e))>0&&v.length>o&&!v.warned){v.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+v.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=v.length,r(l)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function a(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=l.bind(r);return i.listener=n,r.wrapFn=i,i}function h(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?d(i):c(i,i.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function c(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function y(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function d(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return f(this)},o.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var f=o[e];if(void 0===f)return!1;if("function"==typeof f)n(f,this,t);else{var v=f.length,l=c(f,v);for(r=0;r<v;++r)n(l[r],this,t)}return!0},o.prototype.addListener=function(e,t){return v(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return v(this,e,t,!0)},o.prototype.once=function(e,t){return u(t),this.on(e,a(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,a(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,s;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():y(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return h(this,e,!0)},o.prototype.rawListeners=function(e){return h(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]};
},{}],"k0my":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};function t(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}function n(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function o(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(c){r={error:c}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return s}function r(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e}var i=function(){return function(e,t){this.target=t,this.type=e}}(),s=function(e){function n(t,n){var o=e.call(this,"error",n)||this;return o.message=t.message,o.error=t,o}return t(n,e),n}(i),c=function(e){function n(t,n,o){void 0===t&&(t=1e3),void 0===n&&(n="");var r=e.call(this,"close",o)||this;return r.wasClean=!0,r.code=t,r.reason=n,r}return t(n,e),n}(i),u=function(){if("undefined"!=typeof WebSocket)return WebSocket},a=function(e){return void 0!==e&&!!e&&2===e.CLOSING},l={maxReconnectionDelay:1e4,minReconnectionDelay:1e3+4e3*Math.random(),minUptime:5e3,reconnectionDelayGrowFactor:1.3,connectionTimeout:4e3,maxRetries:1/0,maxEnqueuedMessages:1/0,startClosed:!1,debug:!1},h=function(){function e(e,t,n){var o=this;void 0===n&&(n={}),this._listeners={error:[],message:[],open:[],close:[]},this._retryCount=-1,this._shouldReconnect=!0,this._connectLock=!1,this._binaryType="blob",this._closeCalled=!1,this._messageQueue=[],this.onclose=null,this.onerror=null,this.onmessage=null,this.onopen=null,this._handleOpen=function(e){o._debug("open event");var t=o._options.minUptime,n=void 0===t?l.minUptime:t;clearTimeout(o._connectTimeout),o._uptimeTimeout=setTimeout(function(){return o._acceptOpen()},n),o._ws.binaryType=o._binaryType,o._messageQueue.forEach(function(e){return o._ws.send(e)}),o._messageQueue=[],o.onopen&&o.onopen(e),o._listeners.open.forEach(function(t){return o._callEventListener(e,t)})},this._handleMessage=function(e){o._debug("message event"),o.onmessage&&o.onmessage(e),o._listeners.message.forEach(function(t){return o._callEventListener(e,t)})},this._handleError=function(e){o._debug("error event",e.message),o._disconnect(void 0,"TIMEOUT"===e.message?"timeout":void 0),o.onerror&&o.onerror(e),o._debug("exec error listeners"),o._listeners.error.forEach(function(t){return o._callEventListener(e,t)}),o._connect()},this._handleClose=function(e){o._debug("close event"),o._clearTimeouts(),o._shouldReconnect&&o._connect(),o.onclose&&o.onclose(e),o._listeners.close.forEach(function(t){return o._callEventListener(e,t)})},this._url=e,this._protocols=t,this._options=n,this._options.startClosed&&(this._shouldReconnect=!1),this._connect()}return Object.defineProperty(e,"CONNECTING",{get:function(){return 0},enumerable:!0,configurable:!0}),Object.defineProperty(e,"OPEN",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(e,"CLOSING",{get:function(){return 2},enumerable:!0,configurable:!0}),Object.defineProperty(e,"CLOSED",{get:function(){return 3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CONNECTING",{get:function(){return e.CONNECTING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"OPEN",{get:function(){return e.OPEN},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CLOSING",{get:function(){return e.CLOSING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CLOSED",{get:function(){return e.CLOSED},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"binaryType",{get:function(){return this._ws?this._ws.binaryType:this._binaryType},set:function(e){this._binaryType=e,this._ws&&(this._ws.binaryType=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"retryCount",{get:function(){return Math.max(this._retryCount,0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferedAmount",{get:function(){return this._messageQueue.reduce(function(e,t){return"string"==typeof t?e+=t.length:t instanceof Blob?e+=t.size:e+=t.byteLength,e},0)+(this._ws?this._ws.bufferedAmount:0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extensions",{get:function(){return this._ws?this._ws.extensions:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"protocol",{get:function(){return this._ws?this._ws.protocol:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"readyState",{get:function(){return this._ws?this._ws.readyState:this._options.startClosed?e.CLOSED:e.CONNECTING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._ws?this._ws.url:""},enumerable:!0,configurable:!0}),e.prototype.close=function(e,t){void 0===e&&(e=1e3),this._closeCalled=!0,this._shouldReconnect=!1,this._clearTimeouts(),this._ws?this._ws.readyState!==this.CLOSED?this._ws.close(e,t):this._debug("close: already closed"):this._debug("close enqueued: no ws instance")},e.prototype.reconnect=function(e,t){this._shouldReconnect=!0,this._closeCalled=!1,this._retryCount=-1,this._ws&&this._ws.readyState!==this.CLOSED?(this._disconnect(e,t),this._connect()):this._connect()},e.prototype.send=function(e){if(this._ws&&this._ws.readyState===this.OPEN)this._debug("send",e),this._ws.send(e);else{var t=this._options.maxEnqueuedMessages,n=void 0===t?l.maxEnqueuedMessages:t;this._messageQueue.length<n&&(this._debug("enqueue",e),this._messageQueue.push(e))}},e.prototype.addEventListener=function(e,t){this._listeners[e]&&this._listeners[e].push(t)},e.prototype.dispatchEvent=function(e){var t,o,r=this._listeners[e.type];if(r)try{for(var i=n(r),s=i.next();!s.done;s=i.next()){var c=s.value;this._callEventListener(e,c)}}catch(u){t={error:u}}finally{try{s&&!s.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}return!0},e.prototype.removeEventListener=function(e,t){this._listeners[e]&&(this._listeners[e]=this._listeners[e].filter(function(e){return e!==t}))},e.prototype._debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._options.debug&&console.log.apply(console,r(["RWS>"],e))},e.prototype._getNextDelay=function(){var e=this._options,t=e.reconnectionDelayGrowFactor,n=void 0===t?l.reconnectionDelayGrowFactor:t,o=e.minReconnectionDelay,r=void 0===o?l.minReconnectionDelay:o,i=e.maxReconnectionDelay,s=void 0===i?l.maxReconnectionDelay:i,c=0;return this._retryCount>0&&(c=r*Math.pow(n,this._retryCount-1))>s&&(c=s),this._debug("next delay",c),c},e.prototype._wait=function(){var e=this;return new Promise(function(t){setTimeout(t,e._getNextDelay())})},e.prototype._getNextUrl=function(e){if("string"==typeof e)return Promise.resolve(e);if("function"==typeof e){var t=e();if("string"==typeof t)return Promise.resolve(t);if(t.then)return t}throw Error("Invalid URL")},e.prototype._connect=function(){var e=this;if(!this._connectLock&&this._shouldReconnect){this._connectLock=!0;var t=this._options,n=t.maxRetries,o=void 0===n?l.maxRetries:n,r=t.connectionTimeout,i=void 0===r?l.connectionTimeout:r,s=t.WebSocket,c=void 0===s?u():s;if(this._retryCount>=o)this._debug("max retries reached",this._retryCount,">=",o);else{if(this._retryCount++,this._debug("connect",this._retryCount),this._removeListeners(),!a(c))throw Error("No valid WebSocket class provided");this._wait().then(function(){return e._getNextUrl(e._url)}).then(function(t){e._closeCalled||(e._debug("connect",{url:t,protocols:e._protocols}),e._ws=e._protocols?new c(t,e._protocols):new c(t),e._ws.binaryType=e._binaryType,e._connectLock=!1,e._addListeners(),e._connectTimeout=setTimeout(function(){return e._handleTimeout()},i))})}}},e.prototype._handleTimeout=function(){this._debug("timeout event"),this._handleError(new s(Error("TIMEOUT"),this))},e.prototype._disconnect=function(e,t){if(void 0===e&&(e=1e3),this._clearTimeouts(),this._ws){this._removeListeners();try{this._ws.close(e,t),this._handleClose(new c(e,t,this))}catch(n){}}},e.prototype._acceptOpen=function(){this._debug("accept open"),this._retryCount=0},e.prototype._callEventListener=function(e,t){"handleEvent"in t?t.handleEvent(e):t(e)},e.prototype._removeListeners=function(){this._ws&&(this._debug("removeListeners"),this._ws.removeEventListener("open",this._handleOpen),this._ws.removeEventListener("close",this._handleClose),this._ws.removeEventListener("message",this._handleMessage),this._ws.removeEventListener("error",this._handleError))},e.prototype._addListeners=function(){this._ws&&(this._debug("addListeners"),this._ws.addEventListener("open",this._handleOpen),this._ws.addEventListener("close",this._handleClose),this._ws.addEventListener("message",this._handleMessage),this._ws.addEventListener("error",this._handleError))},e.prototype._clearTimeouts=function(){clearTimeout(this._connectTimeout),clearTimeout(this._uptimeTimeout)},e}(),_=h;exports.default=_;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("events")),t=n(require("reconnecting-websocket"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,o){var r=new RTCPeerConnection,c={video:!0};return n.subscribe(function(e){var t=e.toId,s=e.fromId,i=e.desc;i&&("offer"===i.type&&t===o?(console.log("offer:setRemoteDescription"),r.setRemoteDescription(i).then(function(){return console.log("offer:getUserMedia"),navigator.mediaDevices.getUserMedia(c)}).then(function(e){return console.log("offer:addTrack"),e.getTracks().forEach(function(t){return r.addTrack(t,e)}),console.log("offer:createAnswer"),r.createAnswer()}).then(function(e){return console.log("offer:setLocalDescription"),r.setLocalDescription(e)}).then(function(){console.log("offer:sendAnswer"),setTimeout(function(){n.emit({toId:s,fromId:t,desc:r.localDescription})},0)})):"answer"===i.type&&t===o&&(console.log("answer:setRemoteDescription"),r.setRemoteDescription(i)))}),r.ontrack=function(e){t.srcObject||(t.srcObject=e.streams[0])},function(t){console.log("call:getUserMedia"),navigator.mediaDevices.getUserMedia(c).then(function(t){console.log("call:addTrack"),t.getTracks().forEach(function(e){return r.addTrack(e,t)}),e.srcObject=t}).then(function(){return console.log("call:createOffer"),r.createOffer()}).then(function(e){return console.log("call:setLocalDescription"),r.setLocalDescription(e)}).then(function(){console.log("call:sendOffer"),setTimeout(function(){return n.emit({toId:t,fromId:o,desc:r.localDescription})},0)})}}function r(){var n=new t.default("wss://wss.homefs.biz"),o=new e.default;return n.addEventListener("message",function(e){try{var t=JSON.parse(e.data);o.emit("message",t)}catch(n){}}),{subscribe:function(e){o.on("message",function(t){return e(t)})},emit:function(e){n.send(JSON.stringify(e))}}}!function(){var e=window.location.search,t=document.getElementById("video1"),n=document.getElementById("video2"),c=document.getElementById("form"),s=r(),i=o(t,n,s,e);c.addEventListener("submit",function(e){e.preventDefault();var t=c.elements[0].value;i(t)}),navigator.mediaDevices.getUserMedia({video:!0}).then(function(e){t.srcObject=e})}();
},{"events":"FRpO","reconnecting-websocket":"k0my"}]},{},["Focm"], null)
//# sourceMappingURL=/src.29dca2cf.js.map