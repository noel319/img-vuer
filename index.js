!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=6)}([function(t,e){function i(t,e){var i=t[1]||"",s=t[3];if(!s)return i;if(e&&"function"==typeof btoa){var a=n(s);return[i].concat(s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"})).concat([a]).join("\n")}return[i].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var a=this[s][0];"number"==typeof a&&(n[a]=!0)}for(s=0;s<t.length;s++){var r=t[s];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),e.push(r))}},e}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(a(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var r=[],s=0;s<i.parts.length;s++)r.push(a(i.parts[s]));c[i.id]={id:i.id,refs:1,parts:r}}}}function s(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function a(t){var e,i,n=document.querySelector("style["+g+'~="'+t.id+'"]');if(n){if(f)return m;n.parentNode.removeChild(n)}if(w){var a=p++;n=d||(d=s()),e=r.bind(null,n,a,!1),i=r.bind(null,n,a,!0)}else n=s(),e=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function r(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var a=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function o(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),v.ssrId&&t.setAttribute(g,e.id),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var h="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!h)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=i(10),c={},u=h&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,f=!1,m=function(){},v=null,g="data-vue-ssr-id",w="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i,s){f=i,v=s||{};var a=l(t,e);return n(a),function(e){for(var i=[],s=0;s<a.length;s++){var r=a[s],o=c[r.id];o.refs--,i.push(o)}e?(a=l(t,e),n(a)):a=[];for(var s=0;s<i.length;s++){var o=i[s];if(0===o.refs){for(var h=0;h<o.parts.length;h++)o.parts[h]();delete c[o.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,i,n,s,a){var r,o=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(r=t,o=t.default);var l="function"==typeof o?o.options:o;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId=s);var c;if(a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?(l._injectStyles=c,l.render=function(t,e){return c.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:o,options:l}}},function(t,e,i){"use strict";var n=i(11),s=i(5);e.a={components:{VuerSingle:n.a},data:function(){return{isShow:!1,allowSwipe:!1,currentIndex:0,imgList:[],swipeDelta:0}},computed:{maxIndex:function(){return this.imgList.length-1}},watch:{isShow:function(t){document.querySelector(".slider").className=t?"slider open":"slider close"},currentIndex:function(){var t=document.querySelector(".item-wrapper");t.translateX=-this.currentIndex*t.getBoundingClientRect().width},imgList:function(){var t=document.querySelector(".item-wrapper");t.translateX=-this.currentIndex*t.getBoundingClientRect().width}},methods:{closeGallery:function(){this.isShow=!1,this.$refs.img[this.currentIndex].resetSize()},handlePressMove:function(t,e){!1!==this.allowSwipe&&(e.translateX+=t.deltaX,this.swipeDelta+=t.deltaX,t.preventDefault())},handleTouchStart:function(){s.a.stopAll()},handleTouchEnd:function(t,e){if(!1!==this.allowSwipe){Math.abs(this.swipeDelta)<130&&(this.swipeDelta=0);var i=e.getBoundingClientRect().width;new s.a(e,"translateX",-this.currentIndex*i,200,this.ease)}},handleSwipe:function(t,e){if(!(Math.abs(this.swipeDelta)<130)){var i=e.getBoundingClientRect().width;"Left"===t.direction&&this.currentIndex<this.maxIndex?(this.$refs.img[this.currentIndex].resetSize(),this.currentIndex+=1):"Right"===t.direction&&this.currentIndex>0&&(this.$refs.img[this.currentIndex].resetSize(),this.currentIndex-=1),new s.a(e,"translateX",-this.currentIndex*i,200,this.ease),this.swipeDelta=0}}}}},function(t,e,i){"use strict";var n=i(5);e.a={props:["src","index"],data:function(){return{currentScale:1,topPx:0,overflowX:"",overflowY:""}},mounted:function(){if(!this.src)return!1;var t=this;this.imageLoaded('[src="'+this.src+'"]',function(e,i){window.innerWidth/window.innerHeight<e/i?(this.parentNode.style.display="block",this.style.width="100%",t.topPx=(window.innerHeight-i/e*window.innerWidth)/2,this.style.top=t.topPx+"px"):(this.parentNode.style.display="block",this.style.height="100%",t.leftPx=(window.innerWidth-e/i*window.innerHeight)/2,this.style.left=t.leftPx+"px")})},methods:{imageLoaded:function(t,e){var i=new Image,n=document.querySelector(".img"+this.index+" > "+t);i.onload=function(){e.call(n,this.width,this.height),i.onload=null,i=null},i.src=n.getAttribute("src")},handleMultipointStart:function(t,e){this.currentScale=e.scaleX},handlePressMove:function(t,e){this.$emit("disableSwipe");var i=!1,n=!1,s=e.getBoundingClientRect();s.right<window.innerWidth?(this.overflowX="right",i=!0):s.left>0?(this.overflowX="left",i=!0):(this.overflowX="",i=!1),s.bottom>this.topPx+s.height?(this.overflowY="top",n=!0):s.bottom<window.innerHeight-this.topPx?(this.overflowY="bottom",n=!0):(this.overflowY="",n=!1),i&&!n?(this.$emit("enableSwipe"),e.translateY+=t.deltaY):n&&!i?(e.translateX+=t.deltaX,e.translateY+=t.deltaY/3,t.preventDefault()):n||i?(this.$emit("enableSwipe"),e.translateY+=t.deltaY/3):(e.translateX+=t.deltaX,e.translateY+=t.deltaY,t.preventDefault())},handlePinch:function(t,e){this.$emit("disableSwipe"),e.scaleX=e.scaleY=this.currentScale*t.zoom},handleTouchEnd:function(t,e){if(this.el=e,e.scaleX<1)new n.a(e,"scaleX",1,500,this.ease),new n.a(e,"scaleY",1,500,this.ease),new n.a(e,"translateX",0,500,this.ease),new n.a(e,"translateY",0,500,this.ease);else{var i=e.getBoundingClientRect(),s=(e.scaleX-1)*i.width/e.scaleX/2,a=(e.scaleY-1)*i.height/e.scaleY/2;"left"==this.overflowX?new n.a(e,"translateX",s,500,this.ease):"right"==this.overflowX&&new n.a(e,"translateX",-s,500,this.ease),"top"==this.overflowY?new n.a(e,"translateY",a,500,this.ease):"bottom"==this.overflowY&&new n.a(e,"translateY",-a,500,this.ease),this.overflowX=this.overflowY=""}},handleDoubleTap:function(t,e){if(this.$emit("disableSwipe"),1!=e.scaleX)new n.a(e,"scaleX",1,500,this.ease),new n.a(e,"scaleY",1,500,this.ease),new n.a(e,"translateX",0,500,this.ease),new n.a(e,"translateY",0,500,this.ease);else{var i=e.getBoundingClientRect(),s=i.height-2*(t.changedTouches[0].pageY-this.topPx)-(i.height/2-(t.changedTouches[0].pageY-this.topPx)),a=i.width-2*t.changedTouches[0].pageX-(i.width/2-t.changedTouches[0].pageX);new n.a(e,"scaleX",2,500,this.ease),new n.a(e,"scaleY",2,500,this.ease),new n.a(e,"translateX",a,500,this.ease),new n.a(e,"translateY",s,500,this.ease)}},resetSize:function(){this.el&&(new n.a(this.el,"scaleX",1,500,this.ease),new n.a(this.el,"scaleY",1,500,this.ease),new n.a(this.el,"translateX",0,500,this.ease),new n.a(this.el,"translateY",0,500,this.ease))},ease:function(t){return Math.sqrt(1-Math.pow(t-1,2))}}}},function(t,e,i){"use strict";!function(){for(var t=0,e=["webkit","moz"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var i=(new Date).getTime(),n=Math.max(0,16-(i-t)),s=window.setTimeout(function(){e(i+n)},n);return t=i+n,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var n=function t(e,i,n,s,a,r,o){var h=e[i],l=n-h,c=new Date,u=this,d=a||function(t){return t};this.tickID=null;!function t(){var a=new Date-c;if(a>=s)return e[i]=n,o&&o(n),r&&r(n),cancelAnimationFrame(u.tickID),void(u.toTick=null);e[i]=l*d(a/s)+h,u.tickID=requestAnimationFrame(t),o&&o(e[i])}(),t.List.push(this)};n.List=[],n.stopAll=function(){for(var t=0,e=n.List.length;t<e;t++)cancelAnimationFrame(n.List[t].tickID);n.List.length=0},n.stop=function(t){cancelAnimationFrame(t.tickID)},e.a=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),s=i(16),a=i.n(s),r={install:function(t,e){t.use(a.a);var i={},s=t.extend(n.a),r=document.createElement("div");r.setAttribute("id","gallery-box"),document.querySelector("body").appendChild(r);var o=(new s).$mount("#gallery-box"),h=function(t,e){return function(n){if(e){o.imgList=i[e];var s=Number(n.currentTarget.dataset.index)||o.imgList.indexOf(t.src);o.isShow=!0,o.currentIndex=s}else o.imgList=[t.src],o.isShow=!0,o.currentIndex=0}};t.directive("gallery",{inserted:function(t,e){var n=e.arg;if(t.addEventListener("click",h(t,n)),n){var s=i[n];s?s.push(t.src):i[n]=[t.src]}},unbind:function(t,e){console.log("unbind");var n=e.arg;if(t.removeEventListener("click",h(t,n)),n){var s=i[n],a=s.indexOf(t.src);s.splice(a,1)}}})}};e.default=r},function(t,e,i){"use strict";function n(t){i(8)}var s=i(3),a=i(15),r=i(2),o=n,h=r(s.a,a.a,!1,o,"data-v-3f66961d",null);e.a=h.exports},function(t,e,i){var n=i(9);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1)("63d0e2e4",n,!0,{})},function(t,e,i){e=t.exports=i(0)(!1),e.push([t.i,".slider[data-v-3f66961d]{position:fixed;top:100vh;left:0;height:100vh;width:100vw;background:#000;overflow:hidden;z-index:1000;opacity:0;visibility:hidden;-webkit-touch-callout:none;user-select:none}.open[data-v-3f66961d]{visibility:visible;animation:open-data-v-3f66961d .3s;animation-fill-mode:forwards}@keyframes open-data-v-3f66961d{0%{opacity:0;transform:translateY(0)}to{opacity:1;transform:translateY(-100vh)}}.close[data-v-3f66961d]{visibility:visible;animation:close-data-v-3f66961d .3s;animation-fill-mode:forwards}@keyframes close-data-v-3f66961d{0%{opacity:1;transform:translateY(-100vh)}to{opacity:0;transform:translateY(0)}}.item-wrapper[data-v-3f66961d]{width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center}.item[data-v-3f66961d]{flex-shrink:0;width:100%;height:100%}",""])},function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var a=e[s],r=a[0],o=a[1],h=a[2],l=a[3],c={id:t+":"+s,css:o,media:h,sourceMap:l};n[r]?n[r].parts.push(c):i.push(n[r]={id:r,parts:[c]})}return i}},function(t,e,i){"use strict";function n(t){i(12)}var s=i(4),a=i(14),r=i(2),o=n,h=r(s.a,a.a,!1,o,"data-v-0dfe7dfb",null);e.a=h.exports},function(t,e,i){var n=i(13);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1)("0d92fd75",n,!0,{})},function(t,e,i){e=t.exports=i(0)(!1),e.push([t.i,".img-vuer[data-v-0dfe7dfb]{position:relative;width:100%;height:100%;display:none}",""])},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"img-vuer",class:"img"+t.index},[i("img",{directives:[{name:"transform",rawName:"v-transform"},{name:"finger",rawName:"v-finger:pinch",value:t.handlePinch,expression:"handlePinch",arg:"pinch"},{name:"finger",rawName:"v-finger:doubleTap",value:t.handleDoubleTap,expression:"handleDoubleTap",arg:"doubleTap"},{name:"finger",rawName:"v-finger:multipointStart",value:t.handleMultipointStart,expression:"handleMultipointStart",arg:"multipointStart"},{name:"finger",rawName:"v-finger:pressMove",value:t.handlePressMove,expression:"handlePressMove",arg:"pressMove"},{name:"finger",rawName:"v-finger:touchEnd",value:t.handleTouchEnd,expression:"handleTouchEnd",arg:"touchEnd"}],staticStyle:{position:"absolute"},attrs:{src:t.src}})])},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider"},[i("div",{directives:[{name:"transform",rawName:"v-transform"},{name:"finger",rawName:"v-finger:singleTap",value:t.closeGallery,expression:"closeGallery",arg:"singleTap"},{name:"finger",rawName:"v-finger:pressMove",value:t.handlePressMove,expression:"handlePressMove",arg:"pressMove"},{name:"finger",rawName:"v-finger:touchStart",value:t.handleTouchStart,expression:"handleTouchStart",arg:"touchStart"},{name:"finger",rawName:"v-finger:touchEnd",value:t.handleTouchEnd,expression:"handleTouchEnd",arg:"touchEnd"},{name:"finger",rawName:"v-finger:swipe",value:t.handleSwipe,expression:"handleSwipe",arg:"swipe"}],staticClass:"item-wrapper"},t._l(t.imgList,function(e,n){return i("VuerSingle",{key:e+n,ref:"img",refInFor:!0,staticClass:"item",attrs:{src:e,index:n},on:{disableSwipe:function(e){t.allowSwipe=!1},enableSwipe:function(e){t.allowSwipe=!0}}})}))])},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){!function(e,i){t.exports=i()}(0,function(){"use strict";function t(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function e(e,i){var n=function(e,i){var n=t(e)*t(i);if(0===n)return 0;var s=function(t,e){return t.x*e.x+t.y*e.y}(e,i)/n;return s>1&&(s=1),Math.acos(s)}(e,i);return function(t,e){return t.x*e.y-e.x*t.y}(e,i)>0&&(n*=-1),180*n/Math.PI}function i(t,e){var i=new a(t);return i.add(e),i}function n(t,e,i){Object.defineProperty(t,e,{get:function(){return this["_"+e]},set:function(t){this["_"+e]=t,i()}})}function s(t,e){if(!t.___mixCSS3Transform){var i,s=["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],a=(i=t,"object"===("undefined"==typeof HTMLElement?"undefined":o(HTMLElement))?i instanceof HTMLElement:i&&"object"===(void 0===i?"undefined":o(i))&&null!==i&&1===i.nodeType&&"string"==typeof i.nodeName);e||s.push("perspective"),t.___mixCSS3Transform=!0,function(t,e,i){for(var s=0,a=e.length;s<a;s++)n(t,e[s],i)}(t,s,function(){var i=t.matrix3d.identity().appendTransform(t.translateX,t.translateY,t.translateZ,t.scaleX,t.scaleY,t.scaleZ,t.rotateX,t.rotateY,t.rotateZ,t.skewX,t.skewY,t.originX,t.originY,t.originZ),n=(e?"":"perspective("+t.perspective+"px) ")+"matrix3d("+Array.prototype.slice.call(i.elements).join(",")+")";a?t.style.transform=t.style.msTransform=t.style.OTransform=t.style.MozTransform=t.style.webkitTransform=n:t.transform=n}),t.matrix3d=new l,e||(t.perspective=500),t.scaleX=t.scaleY=t.scaleZ=1,t.translateX=t.translateY=t.translateZ=t.rotateX=t.rotateY=t.rotateZ=t.skewX=t.skewY=t.originX=t.originY=t.originZ=0}}var a=function(t){this.handlers=[],this.el=t};a.prototype.add=function(t){this.handlers.push(t)},a.prototype.del=function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)},a.prototype.dispatch=function(){for(var t=0,e=this.handlers.length;t<e;t++){var i=this.handlers[t];"function"==typeof i&&i.apply(this.el,arguments)}};var r=function(t,e){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var n=function(){};this.rotate=i(this.element,e.rotate||n),this.touchStart=i(this.element,e.touchStart||n),this.multipointStart=i(this.element,e.multipointStart||n),this.multipointEnd=i(this.element,e.multipointEnd||n),this.pinch=i(this.element,e.pinch||n),this.swipe=i(this.element,e.swipe||n),this.tap=i(this.element,e.tap||n),this.doubleTap=i(this.element,e.doubleTap||n),this.longTap=i(this.element,e.longTap||n),this.singleTap=i(this.element,e.singleTap||n),this.pressMove=i(this.element,e.pressMove||n),this.twoFingerPressMove=i(this.element,e.twoFingerPressMove||n),this.touchMove=i(this.element,e.touchMove||n),this.touchEnd=i(this.element,e.touchEnd||n),this.touchCancel=i(this.element,e.touchCancel||n),this._cancelAllHandler=this.cancelAll.bind(this),window.removeEventListener("scroll",this._cancelAllHandler),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};r.prototype={start:function(e){if(e.touches){this.now=Date.now(),this.x1=e.touches[0].pageX,this.y1=e.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(e,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var i=this.preV;if(e.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var n={x:e.touches[1].pageX-this.x1,y:e.touches[1].pageY-this.y1};i.x=n.x,i.y=n.y,this.pinchStartLen=t(i),this.multipointStart.dispatch(e,this.element)}this._preventTap=!1,this.notSingleTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(e,this.element),this._preventTap=!0,this.notSingleTap=!0}.bind(this),750)}},move:function(i){if(i.touches){var n=this.preV,s=i.touches.length,a=i.touches[0].pageX,r=i.touches[0].pageY;if(this.isDoubleTap=!1,s>1){var o=i.touches[1].pageX,h=i.touches[1].pageY,l={x:i.touches[1].pageX-a,y:i.touches[1].pageY-r};null!==n.x&&(this.pinchStartLen>0&&(i.zoom=t(l)/this.pinchStartLen,this.pinch.dispatch(i,this.element)),i.angle=e(l,n),this.rotate.dispatch(i,this.element)),n.x=l.x,n.y=l.y,null!==this.x2&&null!==this.sx2?(i.deltaX=(a-this.x2+o-this.sx2)/2,i.deltaY=(r-this.y2+h-this.sy2)/2):(i.deltaX=0,i.deltaY=0),this.twoFingerPressMove.dispatch(i,this.element),this.sx2=o,this.sy2=h}else null!==this.x2?(i.deltaX=a-this.x2,i.deltaY=r-this.y2):(i.deltaX=0,i.deltaY=0),this.pressMove.dispatch(i,this.element);this.touchMove.dispatch(i,this.element),this.notSingleTap=!0,this._cancelLongTap(),this.x2=a,this.y2=r,s>1&&i.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>120||this.y2&&Math.abs(this.y1-this.y2)>120?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){e.swipe.dispatch(t,e.element)},0)):(!this.x2||Math.abs(this.x1-this.x2)<5&&Math.abs(this.y1-this.y2)<5)&&(this.tapTimeout=setTimeout(function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),clearTimeout(e.singleTapTimeout),e.isDoubleTap=!1)},0),e.isDoubleTap||e.notSingleTap||(e.singleTapTimeout=setTimeout(function(){e.singleTap.dispatch(t,e.element)},250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,i,n){return Math.abs(t-e)>=Math.abs(i-n)?t-e>0?"Left":"Right":i-n>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,null}};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=.017453292519943295,l=function(t,e,i,n,s,a,r,o,h,l,c,u,d,p,f,m){this.elements=window.Float32Array?new Float32Array(16):[];var v=this.elements;v[0]=void 0!==t?t:1,v[4]=e||0,v[8]=i||0,v[12]=n||0,v[1]=s||0,v[5]=void 0!==a?a:1,v[9]=r||0,v[13]=o||0,v[2]=h||0,v[6]=l||0,v[10]=void 0!==c?c:1,v[14]=u||0,v[3]=d||0,v[7]=p||0,v[11]=f||0,v[15]=void 0!==m?m:1};l.prototype={set:function(t,e,i,n,s,a,r,o,h,l,c,u,d,p,f,m){var v=this.elements;return v[0]=t,v[4]=e,v[8]=i,v[12]=n,v[1]=s,v[5]=a,v[9]=r,v[13]=o,v[2]=h,v[6]=l,v[10]=c,v[14]=u,v[3]=d,v[7]=p,v[11]=f,v[15]=m,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(t,e){var i=t.elements,n=this.elements,s=i[0],a=i[4],r=i[8],o=i[12],h=i[1],l=i[5],c=i[9],u=i[13],d=i[2],p=i[6],f=i[10],m=i[14],v=i[3],g=i[7],w=i[11],y=i[15],T=e[0],x=e[1],b=e[2],S=e[3],M=e[4],X=e[5],Y=e[6],_=e[7],E=e[8],L=e[9],C=e[10],P=e[11],D=e[12],k=e[13],A=e[14],F=e[15];return n[0]=s*T+a*M+r*E+o*D,n[4]=s*x+a*X+r*L+o*k,n[8]=s*b+a*Y+r*C+o*A,n[12]=s*S+a*_+r*P+o*F,n[1]=h*T+l*M+c*E+u*D,n[5]=h*x+l*X+c*L+u*k,n[9]=h*b+l*Y+c*C+u*A,n[13]=h*S+l*_+c*P+u*F,n[2]=d*T+p*M+f*E+m*D,n[6]=d*x+p*X+f*L+m*k,n[10]=d*b+p*Y+f*C+m*A,n[14]=d*S+p*_+f*P+m*F,n[3]=v*T+g*M+w*E+y*D,n[7]=v*x+g*X+w*L+y*k,n[11]=v*b+g*Y+w*C+y*A,n[15]=v*S+g*_+w*P+y*F,this},_rounded:function(t,e){return e=Math.pow(10,e||15),Math.round(t*e)/e},_arrayWrap:function(t){return window.Float32Array?new Float32Array(t):t},appendTransform:function(t,e,i,n,s,a,r,o,l,c,u,d,p,f){var m=r*h,v=this._rounded(Math.cos(m)),g=this._rounded(Math.sin(m)),w=o*h,y=this._rounded(Math.cos(w)),T=this._rounded(Math.sin(w)),x=l*h,b=this._rounded(Math.cos(-1*x)),S=this._rounded(Math.sin(-1*x));return this.multiplyMatrices(this,this._arrayWrap([1,0,0,t,0,v,g,e,0,-g,v,i,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([y,0,T,0,0,1,0,0,-T,0,y,0,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([b*n,S*s,0,0,-S*n,b*s,0,0,0,0,1*a,0,0,0,0,1])),(c||u)&&this.multiplyMatrices(this,this._arrayWrap([this._rounded(Math.cos(c*h)),this._rounded(Math.sin(c*h)),0,0,-1*this._rounded(Math.sin(u*h)),this._rounded(Math.cos(u*h)),0,0,0,0,1,0,0,0,0,1])),(d||p||f)&&(this.elements[12]-=d*this.elements[0]+p*this.elements[4]+f*this.elements[8],this.elements[13]-=d*this.elements[1]+p*this.elements[5]+f*this.elements[9],this.elements[14]-=d*this.elements[2]+p*this.elements[6]+f*this.elements[10]),this}};var c=function(t,e,i,n,s,a){return this.a=null==t?1:t,this.b=e||0,this.c=i||0,this.d=null==n?1:n,this.tx=s||0,this.ty=a||0,this};return c.prototype={identity:function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},appendTransform:function(t,e,i,n,s,a,r,o,l){if(s%360)var c=s*h,u=Math.cos(c),d=Math.sin(c);else u=1,d=0;return a||r?(a*=h,r*=h,this.append(Math.cos(r),Math.sin(r),-Math.sin(a),Math.cos(a),t,e),this.append(u*i,d*i,-d*n,u*n,0,0)):this.append(u*i,d*i,-d*n,u*n,t,e),(o||l)&&(this.tx-=o*this.a+l*this.c,this.ty-=o*this.b+l*this.d),this},append:function(t,e,i,n,s,a){var r=this.a,o=this.b,h=this.c,l=this.d;return this.a=t*r+e*h,this.b=t*o+e*l,this.c=i*r+n*h,this.d=i*o+n*l,this.tx=s*r+a*h+this.tx,this.ty=s*o+a*l+this.ty,this},initialize:function(t,e,i,n,s,a){return this.a=t,this.b=e,this.c=i,this.d=n,this.tx=s,this.ty=a,this},setValues:function(t,e,i,n,s,a){return this.a=null==t?1:t,this.b=e||0,this.c=i||0,this.d=null==n?1:n,this.tx=s||0,this.ty=a||0,this},copy:function(t){return this.setValues(t.a,t.b,t.c,t.d,t.tx,t.ty)}},s.getMatrix3D=function(t){var e={translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0,skewX:0,skewY:0,originX:0,originY:0,originZ:0,scaleX:1,scaleY:1,scaleZ:1};for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return(new l).identity().appendTransform(e.translateX,e.translateY,e.translateZ,e.scaleX,e.scaleY,e.scaleZ,e.rotateX,e.rotateY,e.rotateZ,e.skewX,e.skewY,e.originX,e.originY,e.originZ).elements},s.getMatrix2D=function(t){var e={translateX:0,translateY:0,rotation:0,skewX:0,skewY:0,originX:0,originY:0,scaleX:1,scaleY:1};for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return(new c).identity().appendTransform(e.translateX,e.translateY,e.scaleX,e.scaleY,e.rotation,e.skewX,e.skewY,e.originX,e.originY)},{install:function(t,e){t.prototype.toJSON=function(){},t.directive("finger-test",{inserted:function(t){console.log("vFingerMK42 added")}}),t.directive("transform",{inserted:function(t){s(t)}});var i=new Map;t.directive("finger",{inserted:function(t,e){var n,s,a,o=i.get(t);void 0===o?i.set(t,new r(t,(n={},s=e.arg,a=function(t,i){return e.value(t,i)},s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n))):o.on(e.arg,function(t,i){return e.value(t,i)})}})}}})}])});
//# sourceMappingURL=index.js.map