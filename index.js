!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=6)}([function(t,e){function i(t,e){var i=t[1]||"",s=t[3];if(!s)return i;if(e&&"function"==typeof btoa){var a=n(s);return[i].concat(s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"})).concat([a]).join("\n")}return[i].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var a=this[s][0];"number"==typeof a&&(n[a]=!0)}for(s=0;s<t.length;s++){var r=t[s];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),e.push(r))}},e}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(a(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var r=[],s=0;s<i.parts.length;s++)r.push(a(i.parts[s]));c[i.id]={id:i.id,refs:1,parts:r}}}}function s(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function a(t){var e,i,n=document.querySelector("style["+g+'~="'+t.id+'"]');if(n){if(f)return m;n.parentNode.removeChild(n)}if(w){var a=p++;n=d||(d=s()),e=r.bind(null,n,a,!1),i=r.bind(null,n,a,!0)}else n=s(),e=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function r(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var a=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function o(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),v.ssrId&&t.setAttribute(g,e.id),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var h=i(10),c={},u=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,f=!1,m=function(){},v=null,g="data-vue-ssr-id",w="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i,s){f=i,v=s||{};var a=h(t,e);return n(a),function(e){for(var i=[],s=0;s<a.length;s++){var r=a[s],o=c[r.id];o.refs--,i.push(o)}e?(a=h(t,e),n(a)):a=[];for(var s=0;s<i.length;s++){var o=i[s];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete c[o.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,i,n,s,a){var r,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,o=t.default);var h="function"==typeof o?o.options:o;e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns,h._compiled=!0),i&&(h.functional=!0),s&&(h._scopeId=s);var c;if(a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},h._ssrRegister=c):n&&(c=n),c){var u=h.functional,d=u?h.render:h.beforeCreate;u?(h._injectStyles=c,h.render=function(t,e){return c.call(e),d(t,e)}):h.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:o,options:h}}},function(t,e,i){"use strict";var n=i(11),s=i(5);e.a={components:{VuerSingle:n.a},data:function(){return{isShow:!1,allowSwipe:!1,initIndex:0,currentIndex:0,imgList:[]}},computed:{maxIndex:function(){return this.imgList.length-1}},watch:{isShow:function(t){document.querySelector(".slider").className=t?"slider open":"slider close"},initIndex:function(t){this.currentIndex=t;var e=document.querySelector(".item-wrapper");e.translateX=-this.currentIndex*e.getBoundingClientRect().width},imgList:function(t){var e=document.querySelector(".item-wrapper");e.translateX=-this.currentIndex*e.getBoundingClientRect().width}},methods:{closeGallery:function(){this.isShow=!1,this.$refs.img[this.currentIndex].resetSize()},handlePressMove:function(t,e){!1!==this.allowSwipe&&(e.translateX+=t.deltaX,t.preventDefault())},handleTouchEnd:function(t,e){if(!1!==this.allowSwipe){var i=e.getBoundingClientRect().width;new s.a(e,"translateX",-this.currentIndex*i,200,this.ease)}},handleSwipe:function(t,e){if(!1!==this.allowSwipe){var i=e.getBoundingClientRect().width;"Left"===t.direction&&this.currentIndex<this.maxIndex?(this.$refs.img[this.currentIndex].resetSize(),this.currentIndex+=1):"Right"===t.direction&&this.currentIndex>0&&(this.$refs.img[this.currentIndex].resetSize(),this.currentIndex-=1),new s.a(e,"translateX",-this.currentIndex*i,200,this.ease)}}}}},function(t,e,i){"use strict";var n=i(5);e.a={props:["src"],data:function(){return{currentScale:1,topPx:0,overflowX:"",overflowY:""}},mounted:function(){if(!this.src)return!1;var t=this;this.imageLoaded('[src="'+this.src+'"]',function(e,i){this.parentNode.style.display="block",t.topPx=(window.innerHeight-i/e*window.innerWidth)/2,this.style.top=t.topPx+"px"})},methods:{imageLoaded:function(t,e){var i=new Image,n=document.querySelector(".img-vuer > "+t);i.onload=function(){e.call(n,this.width,this.height),i.onload=null,i=null},i.src=n.getAttribute("src")},handleMultipointStart:function(t,e){this.currentScale=e.scaleX},handlePressMove:function(t,e){this.$emit("disableSwipe");var i=!1,n=!1,s=e.getBoundingClientRect();s.right<window.innerWidth?(this.overflowX="right",i=!0):s.left>0?(this.overflowX="left",i=!0):(this.overflowX="",i=!1),s.bottom>this.topPx+s.height?(this.overflowY="top",n=!0):s.bottom<window.innerHeight-this.topPx?(this.overflowY="bottom",n=!0):(this.overflowY="",n=!1),i&&!n?(this.$emit("enableSwipe"),e.translateY+=t.deltaY):n&&!i?(e.translateX+=t.deltaX,e.translateY+=t.deltaY/3,t.preventDefault()):n||i?(this.$emit("enableSwipe"),e.translateY+=t.deltaY/3):(e.translateX+=t.deltaX,e.translateY+=t.deltaY,t.preventDefault())},handlePinch:function(t,e){this.$emit("disableSwipe"),e.scaleX=e.scaleY=this.currentScale*t.zoom},handleTouchEnd:function(t,e){if(this.el=e,e.scaleX<1)new n.a(e,"scaleX",1,500,this.ease),new n.a(e,"scaleY",1,500,this.ease);else{var i=e.getBoundingClientRect(),s=(e.scaleX-1)*i.width/e.scaleX/2,a=(e.scaleY-1)*i.height/e.scaleY/2;"left"==this.overflowX?new n.a(e,"translateX",s,500,this.ease):"right"==this.overflowX&&new n.a(e,"translateX",-s,500,this.ease),"top"==this.overflowY?new n.a(e,"translateY",a,500,this.ease):"bottom"==this.overflowY&&new n.a(e,"translateY",-a,500,this.ease),this.overflowX=this.overflowY=""}},handleDoubleTap:function(t,e){if(this.$emit("disableSwipe"),1!=e.scaleX)new n.a(e,"scaleX",1,500,this.ease),new n.a(e,"scaleY",1,500,this.ease),new n.a(e,"translateX",0,500,this.ease),new n.a(e,"translateY",0,500,this.ease);else{var i=e.getBoundingClientRect(),s=i.height-2*(t.changedTouches[0].pageY-this.topPx)-(i.height/2-(t.changedTouches[0].pageY-this.topPx)),a=i.width-2*t.changedTouches[0].pageX-(i.width/2-t.changedTouches[0].pageX);new n.a(e,"scaleX",2,500,this.ease),new n.a(e,"scaleY",2,500,this.ease),new n.a(e,"translateX",a,500,this.ease),new n.a(e,"translateY",s,500,this.ease)}},resetSize:function(){this.el&&(new n.a(this.el,"scaleX",1,500,this.ease),new n.a(this.el,"scaleY",1,500,this.ease),new n.a(this.el,"translateX",0,500,this.ease),new n.a(this.el,"translateY",0,500,this.ease))},ease:function(t){return Math.sqrt(1-Math.pow(t-1,2))}}}},function(t,e,i){"use strict";!function(){for(var t=0,e=["webkit","moz"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var i=(new Date).getTime(),n=Math.max(0,16-(i-t)),s=window.setTimeout(function(){e(i+n)},n);return t=i+n,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var n=function t(e,i,n,s,a,r,o){var l=e[i],h=n-l,c=new Date,u=this,d=a||function(t){return t};this.tickID=null;!function t(){var a=new Date-c;if(a>=s)return e[i]=n,o&&o(n),r&&r(n),cancelAnimationFrame(u.tickID),void(u.toTick=null);e[i]=h*d(a/s)+l,u.tickID=requestAnimationFrame(t),o&&o(e[i])}(),t.List.push(this)};n.List=[],n.stopAll=function(){for(var t=0,e=n.List.length;t<e;t++)cancelAnimationFrame(n.List[t].tickID);n.List.length=0},n.stop=function(t){cancelAnimationFrame(t.tickID)},e.a=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),s=i(16),a=i.n(s),r={install:function(t,e){t.use(a.a);var i={},s=t.extend(n.a),r=document.createElement("div");r.setAttribute("id","gallery-box"),document.querySelector("body").appendChild(r);var o=(new s).$mount("#gallery-box");t.directive("gallery",{inserted:function(t,e){var n=e.arg;if(t.addEventListener("click",function(e){if(n){o.imgList=i[n];var s=o.imgList.indexOf(t.src);o.isShow=!0,o.initIndex=s}else o.imgList=[t.src],o.isShow=!0,o.initIndex=0}),n){var s=i[n];s?s.push(t.src):i[n]=[t.src]}}})}};e.default=r},function(t,e,i){"use strict";function n(t){i(8)}var s=i(3),a=i(15),r=i(2),o=n,l=r(s.a,a.a,!1,o,"data-v-d0568348",null);e.a=l.exports},function(t,e,i){var n=i(9);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1)("964b5776",n,!0,{})},function(t,e,i){e=t.exports=i(0)(!1),e.push([t.i,".slider[data-v-d0568348]{position:fixed;top:100vh;left:0;height:100vh;width:100vw;background:#000;overflow:hidden;z-index:1000;opacity:0;visibility:hidden}.open[data-v-d0568348]{visibility:visible;animation:open-data-v-d0568348 .3s;animation-fill-mode:forwards}@keyframes open-data-v-d0568348{0%{opacity:0;transform:translateY(0)}to{opacity:1;transform:translateY(-100vh)}}.close[data-v-d0568348]{visibility:visible;animation:close-data-v-d0568348 .3s;animation-fill-mode:forwards}@keyframes close-data-v-d0568348{0%{opacity:1;transform:translateY(-100vh)}to{opacity:0;transform:translateY(0)}}.item-wrapper[data-v-d0568348]{width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center}.item[data-v-d0568348]{flex-shrink:0;width:100%;height:100%}",""])},function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var a=e[s],r=a[0],o=a[1],l=a[2],h=a[3],c={id:t+":"+s,css:o,media:l,sourceMap:h};n[r]?n[r].parts.push(c):i.push(n[r]={id:r,parts:[c]})}return i}},function(t,e,i){"use strict";function n(t){i(12)}var s=i(4),a=i(14),r=i(2),o=n,l=r(s.a,a.a,!1,o,"data-v-868bf1ce",null);e.a=l.exports},function(t,e,i){var n=i(13);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1)("3e27c9bc",n,!0,{})},function(t,e,i){e=t.exports=i(0)(!1),e.push([t.i,".img-vuer[data-v-868bf1ce]{position:relative;width:100%;height:100%;display:none}",""])},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"img-vuer"},[i("img",{directives:[{name:"transform",rawName:"v-transform"},{name:"finger",rawName:"v-finger:pinch",value:t.handlePinch,expression:"handlePinch",arg:"pinch"},{name:"finger",rawName:"v-finger:doubleTap",value:t.handleDoubleTap,expression:"handleDoubleTap",arg:"doubleTap"},{name:"finger",rawName:"v-finger:multipointStart",value:t.handleMultipointStart,expression:"handleMultipointStart",arg:"multipointStart"},{name:"finger",rawName:"v-finger:pressMove",value:t.handlePressMove,expression:"handlePressMove",arg:"pressMove"},{name:"finger",rawName:"v-finger:touchEnd",value:t.handleTouchEnd,expression:"handleTouchEnd",arg:"touchEnd"}],staticStyle:{position:"absolute",width:"100%"},attrs:{src:t.src}})])},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider"},[i("div",{directives:[{name:"transform",rawName:"v-transform"},{name:"finger",rawName:"v-finger:singleTap",value:t.closeGallery,expression:"closeGallery",arg:"singleTap"},{name:"finger",rawName:"v-finger:pressMove",value:t.handlePressMove,expression:"handlePressMove",arg:"pressMove"},{name:"finger",rawName:"v-finger:touchEnd",value:t.handleTouchEnd,expression:"handleTouchEnd",arg:"touchEnd"},{name:"finger",rawName:"v-finger:swipe",value:t.handleSwipe,expression:"handleSwipe",arg:"swipe"}],staticClass:"item-wrapper"},t._l(t.imgList,function(e){return i("VuerSingle",{key:e,ref:"img",refInFor:!0,staticClass:"item",attrs:{src:e},on:{disableSwipe:function(e){t.allowSwipe=!1},enableSwipe:function(e){t.allowSwipe=!0}}})}))])},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0});var a=i(17),r=n(a),o=i(18),l=n(o),h={install:function(t,e){t.prototype.toJSON=function(){},t.directive("finger-test",{inserted:function(t){console.log("vFingerMK42 added")}}),t.directive("transform",{inserted:function(t){(0,l.default)(t)}});var i=new Map;t.directive("finger",{inserted:function(t,e){var n=i.get(t);void 0===n?i.set(t,new r.default(t,s({},e.arg,function(t,i){return e.value(t,i)}))):n.on(e.arg,function(t,i){return e.value(t,i)})}})}};e.default=h},function(t,e,i){!function(){function e(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function i(t,e){return t.x*e.x+t.y*e.y}function n(t,n){var s=e(t)*e(n);if(0===s)return 0;var a=i(t,n)/s;return a>1&&(a=1),Math.acos(a)}function s(t,e){return t.x*e.y-e.x*t.y}function a(t,e){var i=n(t,e);return s(t,e)>0&&(i*=-1),180*i/Math.PI}function r(t,e){var i=new o(t);return i.add(e),i}var o=function(t){this.handlers=[],this.el=t};o.prototype.add=function(t){this.handlers.push(t)},o.prototype.del=function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)},o.prototype.dispatch=function(){for(var t=0,e=this.handlers.length;t<e;t++){var i=this.handlers[t];"function"==typeof i&&i.apply(this.el,arguments)}};var l=function(t,e){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var i=function(){};this.rotate=r(this.element,e.rotate||i),this.touchStart=r(this.element,e.touchStart||i),this.multipointStart=r(this.element,e.multipointStart||i),this.multipointEnd=r(this.element,e.multipointEnd||i),this.pinch=r(this.element,e.pinch||i),this.swipe=r(this.element,e.swipe||i),this.tap=r(this.element,e.tap||i),this.doubleTap=r(this.element,e.doubleTap||i),this.longTap=r(this.element,e.longTap||i),this.singleTap=r(this.element,e.singleTap||i),this.pressMove=r(this.element,e.pressMove||i),this.twoFingerPressMove=r(this.element,e.twoFingerPressMove||i),this.touchMove=r(this.element,e.touchMove||i),this.touchEnd=r(this.element,e.touchEnd||i),this.touchCancel=r(this.element,e.touchCancel||i),this._cancelAllHandler=this.cancelAll.bind(this),window.removeEventListener("scroll",this._cancelAllHandler),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};l.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var i=this.preV;if(t.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var n={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};i.x=n.x,i.y=n.y,this.pinchStartLen=e(i),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}},move:function(t){if(t.touches){var i=this.preV,n=t.touches.length,s=t.touches[0].pageX,r=t.touches[0].pageY;if(this.isDoubleTap=!1,n>1){var o=t.touches[1].pageX,l=t.touches[1].pageY,h={x:t.touches[1].pageX-s,y:t.touches[1].pageY-r};null!==i.x&&(this.pinchStartLen>0&&(t.zoom=e(h)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=a(h,i),this.rotate.dispatch(t,this.element)),i.x=h.x,i.y=h.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(s-this.x2+o-this.sx2)/2,t.deltaY=(r-this.y2+l-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=o,this.sy2=l}else null!==this.x2?(t.deltaX=s-this.x2,t.deltaY=r-this.y2):(t.deltaX=0,t.deltaY=0),this.pressMove.dispatch(t,this.element);this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=s,this.y2=r,n>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){e.swipe.dispatch(t,e.element)},0)):(this.tapTimeout=setTimeout(function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),clearTimeout(e.singleTapTimeout),e.isDoubleTap=!1)},0),e.isDoubleTap||(e.singleTapTimeout=setTimeout(function(){e.singleTap.dispatch(t,e.element)},250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,i,n){return Math.abs(t-e)>=Math.abs(i-n)?t-e>0?"Left":"Right":i-n>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,null}},t.exports=l}()},function(t,e,i){"use strict";function n(t,e,i){for(var n=0,a=e.length;n<a;n++){s(t,e[n],i)}}function s(t,e,i){Object.defineProperty(t,e,{get:function(){return this["_"+e]},set:function(t){this["_"+e]=t,i()}})}function a(t){return"object"===("undefined"==typeof HTMLElement?"undefined":o(HTMLElement))?t instanceof HTMLElement:t&&"object"===(void 0===t?"undefined":o(t))&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function r(t,e){if(!t.___mixCSS3Transform){var i=["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],s=a(t);e||i.push("perspective"),t.___mixCSS3Transform=!0,n(t,i,function(){var i=t.matrix3d.identity().appendTransform(t.translateX,t.translateY,t.translateZ,t.scaleX,t.scaleY,t.scaleZ,t.rotateX,t.rotateY,t.rotateZ,t.skewX,t.skewY,t.originX,t.originY,t.originZ),n=(e?"":"perspective("+t.perspective+"px) ")+"matrix3d("+Array.prototype.slice.call(i.elements).join(",")+")";s?t.style.transform=t.style.msTransform=t.style.OTransform=t.style.MozTransform=t.style.webkitTransform=n:t.transform=n}),t.matrix3d=new h,e||(t.perspective=500),t.scaleX=t.scaleY=t.scaleZ=1,t.translateX=t.translateY=t.translateZ=t.rotateX=t.rotateY=t.rotateZ=t.skewX=t.skewY=t.originX=t.originY=t.originZ=0}}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=.017453292519943295,h=function(t,e,i,n,s,a,r,o,l,h,c,u,d,p,f,m){this.elements=window.Float32Array?new Float32Array(16):[];var v=this.elements;v[0]=void 0!==t?t:1,v[4]=e||0,v[8]=i||0,v[12]=n||0,v[1]=s||0,v[5]=void 0!==a?a:1,v[9]=r||0,v[13]=o||0,v[2]=l||0,v[6]=h||0,v[10]=void 0!==c?c:1,v[14]=u||0,v[3]=d||0,v[7]=p||0,v[11]=f||0,v[15]=void 0!==m?m:1};h.prototype={set:function(t,e,i,n,s,a,r,o,l,h,c,u,d,p,f,m){var v=this.elements;return v[0]=t,v[4]=e,v[8]=i,v[12]=n,v[1]=s,v[5]=a,v[9]=r,v[13]=o,v[2]=l,v[6]=h,v[10]=c,v[14]=u,v[3]=d,v[7]=p,v[11]=f,v[15]=m,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(t,e){var i=t.elements,n=this.elements,s=i[0],a=i[4],r=i[8],o=i[12],l=i[1],h=i[5],c=i[9],u=i[13],d=i[2],p=i[6],f=i[10],m=i[14],v=i[3],g=i[7],w=i[11],y=i[15],T=e[0],x=e[1],b=e[2],M=e[3],S=e[4],X=e[5],Y=e[6],_=e[7],E=e[8],L=e[9],C=e[10],P=e[11],A=e[12],I=e[13],k=e[14],D=e[15];return n[0]=s*T+a*S+r*E+o*A,n[4]=s*x+a*X+r*L+o*I,n[8]=s*b+a*Y+r*C+o*k,n[12]=s*M+a*_+r*P+o*D,n[1]=l*T+h*S+c*E+u*A,n[5]=l*x+h*X+c*L+u*I,n[9]=l*b+h*Y+c*C+u*k,n[13]=l*M+h*_+c*P+u*D,n[2]=d*T+p*S+f*E+m*A,n[6]=d*x+p*X+f*L+m*I,n[10]=d*b+p*Y+f*C+m*k,n[14]=d*M+p*_+f*P+m*D,n[3]=v*T+g*S+w*E+y*A,n[7]=v*x+g*X+w*L+y*I,n[11]=v*b+g*Y+w*C+y*k,n[15]=v*M+g*_+w*P+y*D,this},_rounded:function(t,e){return e=Math.pow(10,e||15),Math.round(t*e)/e},_arrayWrap:function(t){return window.Float32Array?new Float32Array(t):t},appendTransform:function(t,e,i,n,s,a,r,o,h,c,u,d,p,f){var m=r*l,v=this._rounded(Math.cos(m)),g=this._rounded(Math.sin(m)),w=o*l,y=this._rounded(Math.cos(w)),T=this._rounded(Math.sin(w)),x=h*l,b=this._rounded(Math.cos(-1*x)),M=this._rounded(Math.sin(-1*x));return this.multiplyMatrices(this,this._arrayWrap([1,0,0,t,0,v,g,e,0,-g,v,i,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([y,0,T,0,0,1,0,0,-T,0,y,0,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([b*n,M*s,0,0,-M*n,b*s,0,0,0,0,1*a,0,0,0,0,1])),(c||u)&&this.multiplyMatrices(this,this._arrayWrap([this._rounded(Math.cos(c*l)),this._rounded(Math.sin(c*l)),0,0,-1*this._rounded(Math.sin(u*l)),this._rounded(Math.cos(u*l)),0,0,0,0,1,0,0,0,0,1])),(d||p||f)&&(this.elements[12]-=d*this.elements[0]+p*this.elements[4]+f*this.elements[8],this.elements[13]-=d*this.elements[1]+p*this.elements[5]+f*this.elements[9],this.elements[14]-=d*this.elements[2]+p*this.elements[6]+f*this.elements[10]),this}};var c=function(t,e,i,n,s,a){return this.a=null==t?1:t,this.b=e||0,this.c=i||0,this.d=null==n?1:n,this.tx=s||0,this.ty=a||0,this};c.prototype={identity:function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},appendTransform:function(t,e,i,n,s,a,r,o,h){if(s%360)var c=s*l,u=Math.cos(c),d=Math.sin(c);else u=1,d=0;return a||r?(a*=l,r*=l,this.append(Math.cos(r),Math.sin(r),-Math.sin(a),Math.cos(a),t,e),this.append(u*i,d*i,-d*n,u*n,0,0)):this.append(u*i,d*i,-d*n,u*n,t,e),(o||h)&&(this.tx-=o*this.a+h*this.c,this.ty-=o*this.b+h*this.d),this},append:function(t,e,i,n,s,a){var r=this.a,o=this.b,l=this.c,h=this.d;return this.a=t*r+e*l,this.b=t*o+e*h,this.c=i*r+n*l,this.d=i*o+n*h,this.tx=s*r+a*l+this.tx,this.ty=s*o+a*h+this.ty,this},initialize:function(t,e,i,n,s,a){return this.a=t,this.b=e,this.c=i,this.d=n,this.tx=s,this.ty=a,this},setValues:function(t,e,i,n,s,a){return this.a=null==t?1:t,this.b=e||0,this.c=i||0,this.d=null==n?1:n,this.tx=s||0,this.ty=a||0,this},copy:function(t){return this.setValues(t.a,t.b,t.c,t.d,t.tx,t.ty)}},r.getMatrix3D=function(t){var e={translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0,skewX:0,skewY:0,originX:0,originY:0,originZ:0,scaleX:1,scaleY:1,scaleZ:1};for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return(new h).identity().appendTransform(e.translateX,e.translateY,e.translateZ,e.scaleX,e.scaleY,e.scaleZ,e.rotateX,e.rotateY,e.rotateZ,e.skewX,e.skewY,e.originX,e.originY,e.originZ).elements},r.getMatrix2D=function(t){var e={translateX:0,translateY:0,rotation:0,skewX:0,skewY:0,originX:0,originY:0,scaleX:1,scaleY:1};for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return(new c).identity().appendTransform(e.translateX,e.translateY,e.scaleX,e.scaleY,e.rotation,e.skewX,e.skewY,e.originX,e.originY)},e.default=r}])});
//# sourceMappingURL=index.js.map