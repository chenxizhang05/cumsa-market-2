(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function S1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nE={exports:{}},Bc={},rE={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=Symbol.for("react.element"),C1=Symbol.for("react.portal"),R1=Symbol.for("react.fragment"),k1=Symbol.for("react.strict_mode"),A1=Symbol.for("react.profiler"),x1=Symbol.for("react.provider"),P1=Symbol.for("react.context"),N1=Symbol.for("react.forward_ref"),b1=Symbol.for("react.suspense"),D1=Symbol.for("react.memo"),O1=Symbol.for("react.lazy"),B_=Symbol.iterator;function M1(t){return t===null||typeof t!="object"?null:(t=B_&&t[B_]||t["@@iterator"],typeof t=="function"?t:null)}var iE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sE=Object.assign,oE={};function uo(t,e,n){this.props=t,this.context=e,this.refs=oE,this.updater=n||iE}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function aE(){}aE.prototype=uo.prototype;function Ip(t,e,n){this.props=t,this.context=e,this.refs=oE,this.updater=n||iE}var Sp=Ip.prototype=new aE;Sp.constructor=Ip;sE(Sp,uo.prototype);Sp.isPureReactComponent=!0;var W_=Array.isArray,lE=Object.prototype.hasOwnProperty,Cp={current:null},uE={key:!0,ref:!0,__self:!0,__source:!0};function cE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lE.call(e,r)&&!uE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:rl,type:t,key:s,ref:o,props:i,_owner:Cp.current}}function L1(t,e){return{$$typeof:rl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rp(t){return typeof t=="object"&&t!==null&&t.$$typeof===rl}function V1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $_=/\/+/g;function Xh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?V1(""+t.key):e.toString(36)}function pu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rl:case C1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xh(o,0):r,W_(i)?(n="",t!=null&&(n=t.replace($_,"$&/")+"/"),pu(i,e,n,"",function(c){return c})):i!=null&&(Rp(i)&&(i=L1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",W_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Xh(s,a);o+=pu(s,e,n,u,i)}else if(u=M1(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Xh(s,a++),o+=pu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $l(t,e,n){if(t==null)return t;var r=[],i=0;return pu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function F1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},mu={transition:null},j1={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:mu,ReactCurrentOwner:Cp};function hE(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:$l,forEach:function(t,e,n){$l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $l(t,function(){e++}),e},toArray:function(t){return $l(t,function(e){return e})||[]},only:function(t){if(!Rp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=uo;fe.Fragment=R1;fe.Profiler=A1;fe.PureComponent=Ip;fe.StrictMode=k1;fe.Suspense=b1;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;fe.act=hE;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)lE.call(e,u)&&!uE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:rl,type:t.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(t){return t={$$typeof:P1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x1,_context:t},t.Consumer=t};fe.createElement=cE;fe.createFactory=function(t){var e=cE.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:N1,render:t}};fe.isValidElement=Rp;fe.lazy=function(t){return{$$typeof:O1,_payload:{_status:-1,_result:t},_init:F1}};fe.memo=function(t,e){return{$$typeof:D1,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=mu.transition;mu.transition={};try{t()}finally{mu.transition=e}};fe.unstable_act=hE;fe.useCallback=function(t,e){return Ft.current.useCallback(t,e)};fe.useContext=function(t){return Ft.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};fe.useEffect=function(t,e){return Ft.current.useEffect(t,e)};fe.useId=function(){return Ft.current.useId()};fe.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return Ft.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};fe.useRef=function(t){return Ft.current.useRef(t)};fe.useState=function(t){return Ft.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return Ft.current.useTransition()};fe.version="18.3.1";rE.exports=fe;var Y=rE.exports;const U1=S1(Y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=Y,B1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),$1=Object.prototype.hasOwnProperty,H1=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q1={key:!0,ref:!0,__self:!0,__source:!0};function dE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$1.call(e,r)&&!q1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:B1,type:t,key:s,ref:o,props:i,_owner:H1.current}}Bc.Fragment=W1;Bc.jsx=dE;Bc.jsxs=dE;nE.exports=Bc;var g=nE.exports,Wd={},fE={exports:{}},on={},pE={exports:{}},mE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Z){var ie=$.length;$.push(Z);e:for(;0<ie;){var ve=ie-1>>>1,Ie=$[ve];if(0<i(Ie,Z))$[ve]=Z,$[ie]=Ie,ie=ve;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Z=$[0],ie=$.pop();if(ie!==Z){$[0]=ie;e:for(var ve=0,Ie=$.length,Fe=Ie>>>1;ve<Fe;){var yn=2*(ve+1)-1,vn=$[yn],ln=yn+1,bt=$[ln];if(0>i(vn,ie))ln<Ie&&0>i(bt,vn)?($[ve]=bt,$[ln]=ie,ve=ln):($[ve]=vn,$[yn]=ie,ve=yn);else if(ln<Ie&&0>i(bt,ie))$[ve]=bt,$[ln]=ie,ve=ln;else break e}}return Z}function i($,Z){var ie=$.sortIndex-Z.sortIndex;return ie!==0?ie:$.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,E=!1,T=!1,x=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=$)r(c),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(c)}}function M($){if(x=!1,A($),!T)if(n(u)!==null)T=!0,fi(j);else{var Z=n(c);Z!==null&&_n(M,Z.startTime-$)}}function j($,Z){T=!1,x&&(x=!1,S(v),v=-1),E=!0;var ie=m;try{for(A(Z),f=n(u);f!==null&&(!(f.expirationTime>Z)||$&&!P());){var ve=f.callback;if(typeof ve=="function"){f.callback=null,m=f.priorityLevel;var Ie=ve(f.expirationTime<=Z);Z=t.unstable_now(),typeof Ie=="function"?f.callback=Ie:f===n(u)&&r(u),A(Z)}else r(u);f=n(u)}if(f!==null)var Fe=!0;else{var yn=n(c);yn!==null&&_n(M,yn.startTime-Z),Fe=!1}return Fe}finally{f=null,m=ie,E=!1}}var z=!1,I=null,v=-1,C=5,k=-1;function P(){return!(t.unstable_now()-k<C)}function N(){if(I!==null){var $=t.unstable_now();k=$;var Z=!0;try{Z=I(!0,$)}finally{Z?R():(z=!1,I=null)}}else z=!1}var R;if(typeof w=="function")R=function(){w(N)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,gn=Nt.port2;Nt.port1.onmessage=N,R=function(){gn.postMessage(null)}}else R=function(){D(N,0)};function fi($){I=$,z||(z=!0,R())}function _n($,Z){v=D(function(){$(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||E||(T=!0,fi(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var ie=m;m=Z;try{return $()}finally{m=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ie=m;m=$;try{return Z()}finally{m=ie}},t.unstable_scheduleCallback=function($,Z,ie){var ve=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ve+ie:ve):ie=ve,$){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=ie+Ie,$={id:d++,callback:Z,priorityLevel:$,startTime:ie,expirationTime:Ie,sortIndex:-1},ie>ve?($.sortIndex=ie,e(c,$),n(u)===null&&$===n(c)&&(x?(S(v),v=-1):x=!0,_n(M,ie-ve))):($.sortIndex=Ie,e(u,$),T||E||(T=!0,fi(j))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var Z=m;return function(){var ie=m;m=Z;try{return $.apply(this,arguments)}finally{m=ie}}}})(mE);pE.exports=mE;var K1=pE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=Y,sn=K1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gE=new Set,Sa={};function Gi(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(Sa[t]=e,t=0;t<e.length;t++)gE.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$d=Object.prototype.hasOwnProperty,Q1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H_={},q_={};function Y1(t){return $d.call(q_,t)?!0:$d.call(H_,t)?!1:Q1.test(t)?q_[t]=!0:(H_[t]=!0,!1)}function X1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function J1(t,e,n,r){if(e===null||typeof e>"u"||X1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var kp=/[\-:]([a-z])/g;function Ap(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kp,Ap);gt[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kp,Ap);gt[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kp,Ap);gt[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xp(t,e,n,r){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J1(e,n,i,r)&&(n=null),r||i===null?Y1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _r=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hl=Symbol.for("react.element"),gs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),Pp=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),_E=Symbol.for("react.provider"),yE=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),qd=Symbol.for("react.suspense"),Kd=Symbol.for("react.suspense_list"),bp=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),vE=Symbol.for("react.offscreen"),K_=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=K_&&t[K_]||t["@@iterator"],typeof t=="function"?t:null)}var We=Object.assign,Jh;function Qo(t){if(Jh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jh=e&&e[1]||""}return`
`+Jh+t}var Zh=!1;function ed(t,e){if(!t||Zh)return"";Zh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Zh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function Z1(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=ed(t.type,!1),t;case 11:return t=ed(t.type.render,!1),t;case 1:return t=ed(t.type,!0),t;default:return""}}function Gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case gs:return"Portal";case Hd:return"Profiler";case Pp:return"StrictMode";case qd:return"Suspense";case Kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yE:return(t.displayName||"Context")+".Consumer";case _E:return(t._context.displayName||"Context")+".Provider";case Np:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bp:return e=t.displayName||null,e!==null?e:Gd(t.type)||"Memo";case kr:e=t._payload,t=t._init;try{return Gd(t(e))}catch{}}return null}function eR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gd(e);case 8:return e===Pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function EE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tR(t){var e=EE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ql(t){t._valueTracker||(t._valueTracker=tR(t))}function wE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=EE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qd(t,e){var n=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function G_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function TE(t,e){e=e.checked,e!=null&&xp(t,"checked",e,!1)}function Yd(t,e){TE(t,e);var n=Jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xd(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Q_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xd(t,e,n){(e!=="number"||Fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function Ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Y_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Yo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function IE(t,e){var n=Jr(e.value),r=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function X_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function SE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?SE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kl,CE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nR=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){nR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function RE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function kE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=RE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rR=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ef(t,e){if(e){if(rR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function tf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=null;function Dp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rf=null,bs=null,Ds=null;function J_(t){if(t=ol(t)){if(typeof rf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Kc(e),rf(t.stateNode,t.type,e))}}function AE(t){bs?Ds?Ds.push(t):Ds=[t]:bs=t}function xE(){if(bs){var t=bs,e=Ds;if(Ds=bs=null,J_(t),e)for(t=0;t<e.length;t++)J_(e[t])}}function PE(t,e){return t(e)}function NE(){}var td=!1;function bE(t,e,n){if(td)return t(e,n);td=!0;try{return PE(t,e,n)}finally{td=!1,(bs!==null||Ds!==null)&&(NE(),xE())}}function Ra(t,e){var n=t.stateNode;if(n===null)return null;var r=Kc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var sf=!1;if(ar)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){sf=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{sf=!1}function iR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var oa=!1,ju=null,Uu=!1,of=null,sR={onError:function(t){oa=!0,ju=t}};function oR(t,e,n,r,i,s,o,a,u){oa=!1,ju=null,iR.apply(sR,arguments)}function aR(t,e,n,r,i,s,o,a,u){if(oR.apply(this,arguments),oa){if(oa){var c=ju;oa=!1,ju=null}else throw Error(U(198));Uu||(Uu=!0,of=c)}}function Qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function DE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Z_(t){if(Qi(t)!==t)throw Error(U(188))}function lR(t){var e=t.alternate;if(!e){if(e=Qi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Z_(i),t;if(s===r)return Z_(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function OE(t){return t=lR(t),t!==null?ME(t):null}function ME(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ME(t);if(e!==null)return e;t=t.sibling}return null}var LE=sn.unstable_scheduleCallback,ey=sn.unstable_cancelCallback,uR=sn.unstable_shouldYield,cR=sn.unstable_requestPaint,Qe=sn.unstable_now,hR=sn.unstable_getCurrentPriorityLevel,Op=sn.unstable_ImmediatePriority,VE=sn.unstable_UserBlockingPriority,zu=sn.unstable_NormalPriority,dR=sn.unstable_LowPriority,FE=sn.unstable_IdlePriority,Wc=null,Vn=null;function fR(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(Wc,t,void 0,(t.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:gR,pR=Math.log,mR=Math.LN2;function gR(t){return t>>>=0,t===0?32:31-(pR(t)/mR|0)|0}var Gl=64,Ql=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xo(a):(s&=o,s!==0&&(r=Xo(s)))}else o=n&~i,o!==0?r=Xo(o):s!==0&&(r=Xo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-An(e),i=1<<n,r|=t[n],e&=~i;return r}function _R(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-An(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=_R(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function af(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jE(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function nd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-An(e),t[e]=n}function vR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-An(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Mp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-An(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Se=0;function UE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zE,Lp,BE,WE,$E,lf=!1,Yl=[],jr=null,Ur=null,zr=null,ka=new Map,Aa=new Map,xr=[],ER="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ty(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Vo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ol(e),e!==null&&Lp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wR(t,e,n,r,i){switch(e){case"focusin":return jr=Vo(jr,t,e,n,r,i),!0;case"dragenter":return Ur=Vo(Ur,t,e,n,r,i),!0;case"mouseover":return zr=Vo(zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ka.set(s,Vo(ka.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Aa.set(s,Vo(Aa.get(s)||null,t,e,n,r,i)),!0}return!1}function HE(t){var e=Si(t.target);if(e!==null){var n=Qi(e);if(n!==null){if(e=n.tag,e===13){if(e=DE(n),e!==null){t.blockedOn=e,$E(t.priority,function(){BE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nf=r,n.target.dispatchEvent(r),nf=null}else return e=ol(n),e!==null&&Lp(e),t.blockedOn=n,!1;e.shift()}return!0}function ny(t,e,n){gu(t)&&n.delete(e)}function TR(){lf=!1,jr!==null&&gu(jr)&&(jr=null),Ur!==null&&gu(Ur)&&(Ur=null),zr!==null&&gu(zr)&&(zr=null),ka.forEach(ny),Aa.forEach(ny)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,lf||(lf=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,TR)))}function xa(t){function e(i){return Fo(i,t)}if(0<Yl.length){Fo(Yl[0],t);for(var n=1;n<Yl.length;n++){var r=Yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&Fo(jr,t),Ur!==null&&Fo(Ur,t),zr!==null&&Fo(zr,t),ka.forEach(e),Aa.forEach(e),n=0;n<xr.length;n++)r=xr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)HE(n),n.blockedOn===null&&xr.shift()}var Os=_r.ReactCurrentBatchConfig,Wu=!0;function IR(t,e,n,r){var i=Se,s=Os.transition;Os.transition=null;try{Se=1,Vp(t,e,n,r)}finally{Se=i,Os.transition=s}}function SR(t,e,n,r){var i=Se,s=Os.transition;Os.transition=null;try{Se=4,Vp(t,e,n,r)}finally{Se=i,Os.transition=s}}function Vp(t,e,n,r){if(Wu){var i=uf(t,e,n,r);if(i===null)dd(t,e,r,$u,n),ty(t,r);else if(wR(i,t,e,n,r))r.stopPropagation();else if(ty(t,r),e&4&&-1<ER.indexOf(t)){for(;i!==null;){var s=ol(i);if(s!==null&&zE(s),s=uf(t,e,n,r),s===null&&dd(t,e,r,$u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else dd(t,e,r,null,n)}}var $u=null;function uf(t,e,n,r){if($u=null,t=Dp(r),t=Si(t),t!==null)if(e=Qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=DE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $u=t,null}function qE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hR()){case Op:return 1;case VE:return 4;case zu:case dR:return 16;case FE:return 536870912;default:return 16}default:return 16}}var Mr=null,Fp=null,_u=null;function KE(){if(_u)return _u;var t,e=Fp,n=e.length,r,i="value"in Mr?Mr.value:Mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _u=i.slice(t,1<r?1-r:void 0)}function yu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function ry(){return!1}function an(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xl:ry,this.isPropagationStopped=ry,this}return We(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jp=an(co),sl=We({},co,{view:0,detail:0}),CR=an(sl),rd,id,jo,$c=We({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(rd=t.screenX-jo.screenX,id=t.screenY-jo.screenY):id=rd=0,jo=t),rd)},movementY:function(t){return"movementY"in t?t.movementY:id}}),iy=an($c),RR=We({},$c,{dataTransfer:0}),kR=an(RR),AR=We({},sl,{relatedTarget:0}),sd=an(AR),xR=We({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),PR=an(xR),NR=We({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bR=an(NR),DR=We({},co,{data:0}),sy=an(DR),OR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LR[t])?!!e[t]:!1}function Up(){return VR}var FR=We({},sl,{key:function(t){if(t.key){var e=OR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Up,charCode:function(t){return t.type==="keypress"?yu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jR=an(FR),UR=We({},$c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oy=an(UR),zR=We({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Up}),BR=an(zR),WR=We({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),$R=an(WR),HR=We({},$c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qR=an(HR),KR=[9,13,27,32],zp=ar&&"CompositionEvent"in window,aa=null;ar&&"documentMode"in document&&(aa=document.documentMode);var GR=ar&&"TextEvent"in window&&!aa,GE=ar&&(!zp||aa&&8<aa&&11>=aa),ay=" ",ly=!1;function QE(t,e){switch(t){case"keyup":return KR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function YE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function QR(t,e){switch(t){case"compositionend":return YE(e);case"keypress":return e.which!==32?null:(ly=!0,ay);case"textInput":return t=e.data,t===ay&&ly?null:t;default:return null}}function YR(t,e){if(ys)return t==="compositionend"||!zp&&QE(t,e)?(t=KE(),_u=Fp=Mr=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return GE&&e.locale!=="ko"?null:e.data;default:return null}}var XR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XR[t.type]:e==="textarea"}function XE(t,e,n,r){AE(r),e=Hu(e,"onChange"),0<e.length&&(n=new jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var la=null,Pa=null;function JR(t){lw(t,0)}function Hc(t){var e=ws(t);if(wE(e))return t}function ZR(t,e){if(t==="change")return e}var JE=!1;if(ar){var od;if(ar){var ad="oninput"in document;if(!ad){var cy=document.createElement("div");cy.setAttribute("oninput","return;"),ad=typeof cy.oninput=="function"}od=ad}else od=!1;JE=od&&(!document.documentMode||9<document.documentMode)}function hy(){la&&(la.detachEvent("onpropertychange",ZE),Pa=la=null)}function ZE(t){if(t.propertyName==="value"&&Hc(Pa)){var e=[];XE(e,Pa,t,Dp(t)),bE(JR,e)}}function ek(t,e,n){t==="focusin"?(hy(),la=e,Pa=n,la.attachEvent("onpropertychange",ZE)):t==="focusout"&&hy()}function tk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hc(Pa)}function nk(t,e){if(t==="click")return Hc(e)}function rk(t,e){if(t==="input"||t==="change")return Hc(e)}function ik(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:ik;function Na(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$d.call(e,i)||!Nn(t[i],e[i]))return!1}return!0}function dy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fy(t,e){var n=dy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dy(n)}}function ew(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ew(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tw(){for(var t=window,e=Fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fu(t.document)}return e}function Bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sk(t){var e=tw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ew(n.ownerDocument.documentElement,n)){if(r!==null&&Bp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fy(n,s);var o=fy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ok=ar&&"documentMode"in document&&11>=document.documentMode,vs=null,cf=null,ua=null,hf=!1;function py(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hf||vs==null||vs!==Fu(r)||(r=vs,"selectionStart"in r&&Bp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ua&&Na(ua,r)||(ua=r,r=Hu(cf,"onSelect"),0<r.length&&(e=new jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function Jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Jl("Animation","AnimationEnd"),animationiteration:Jl("Animation","AnimationIteration"),animationstart:Jl("Animation","AnimationStart"),transitionend:Jl("Transition","TransitionEnd")},ld={},nw={};ar&&(nw=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function qc(t){if(ld[t])return ld[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nw)return ld[t]=e[n];return t}var rw=qc("animationend"),iw=qc("animationiteration"),sw=qc("animationstart"),ow=qc("transitionend"),aw=new Map,my="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ai(t,e){aw.set(t,e),Gi(e,[t])}for(var ud=0;ud<my.length;ud++){var cd=my[ud],ak=cd.toLowerCase(),lk=cd[0].toUpperCase()+cd.slice(1);ai(ak,"on"+lk)}ai(rw,"onAnimationEnd");ai(iw,"onAnimationIteration");ai(sw,"onAnimationStart");ai("dblclick","onDoubleClick");ai("focusin","onFocus");ai("focusout","onBlur");ai(ow,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function gy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aR(r,e,void 0,t),t.currentTarget=null}function lw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;gy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;gy(i,a,c),s=u}}}if(Uu)throw t=of,Uu=!1,of=null,t}function Me(t,e){var n=e[gf];n===void 0&&(n=e[gf]=new Set);var r=t+"__bubble";n.has(r)||(uw(e,t,2,!1),n.add(r))}function hd(t,e,n){var r=0;e&&(r|=4),uw(n,t,r,e)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[Zl]){t[Zl]=!0,gE.forEach(function(n){n!=="selectionchange"&&(uk.has(n)||hd(n,!1,t),hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zl]||(e[Zl]=!0,hd("selectionchange",!1,e))}}function uw(t,e,n,r){switch(qE(e)){case 1:var i=IR;break;case 4:i=SR;break;default:i=Vp}n=i.bind(null,e,n,t),i=void 0,!sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function dd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Si(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}bE(function(){var c=s,d=Dp(n),f=[];e:{var m=aw.get(t);if(m!==void 0){var E=jp,T=t;switch(t){case"keypress":if(yu(n)===0)break e;case"keydown":case"keyup":E=jR;break;case"focusin":T="focus",E=sd;break;case"focusout":T="blur",E=sd;break;case"beforeblur":case"afterblur":E=sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=iy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=kR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=BR;break;case rw:case iw:case sw:E=PR;break;case ow:E=$R;break;case"scroll":E=CR;break;case"wheel":E=qR;break;case"copy":case"cut":case"paste":E=bR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=oy}var x=(e&4)!==0,D=!x&&t==="scroll",S=x?m!==null?m+"Capture":null:m;x=[];for(var w=c,A;w!==null;){A=w;var M=A.stateNode;if(A.tag===5&&M!==null&&(A=M,S!==null&&(M=Ra(w,S),M!=null&&x.push(Da(w,M,A)))),D)break;w=w.return}0<x.length&&(m=new E(m,T,null,n,d),f.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==nf&&(T=n.relatedTarget||n.fromElement)&&(Si(T)||T[lr]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(T=n.relatedTarget||n.toElement,E=c,T=T?Si(T):null,T!==null&&(D=Qi(T),T!==D||T.tag!==5&&T.tag!==6)&&(T=null)):(E=null,T=c),E!==T)){if(x=iy,M="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(x=oy,M="onPointerLeave",S="onPointerEnter",w="pointer"),D=E==null?m:ws(E),A=T==null?m:ws(T),m=new x(M,w+"leave",E,n,d),m.target=D,m.relatedTarget=A,M=null,Si(d)===c&&(x=new x(S,w+"enter",T,n,d),x.target=A,x.relatedTarget=D,M=x),D=M,E&&T)t:{for(x=E,S=T,w=0,A=x;A;A=ls(A))w++;for(A=0,M=S;M;M=ls(M))A++;for(;0<w-A;)x=ls(x),w--;for(;0<A-w;)S=ls(S),A--;for(;w--;){if(x===S||S!==null&&x===S.alternate)break t;x=ls(x),S=ls(S)}x=null}else x=null;E!==null&&_y(f,m,E,x,!1),T!==null&&D!==null&&_y(f,D,T,x,!0)}}e:{if(m=c?ws(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var j=ZR;else if(uy(m))if(JE)j=rk;else{j=tk;var z=ek}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=nk);if(j&&(j=j(t,c))){XE(f,j,n,d);break e}z&&z(t,m,c),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&Xd(m,"number",m.value)}switch(z=c?ws(c):window,t){case"focusin":(uy(z)||z.contentEditable==="true")&&(vs=z,cf=c,ua=null);break;case"focusout":ua=cf=vs=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,py(f,n,d);break;case"selectionchange":if(ok)break;case"keydown":case"keyup":py(f,n,d)}var I;if(zp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ys?QE(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(GE&&n.locale!=="ko"&&(ys||v!=="onCompositionStart"?v==="onCompositionEnd"&&ys&&(I=KE()):(Mr=d,Fp="value"in Mr?Mr.value:Mr.textContent,ys=!0)),z=Hu(c,v),0<z.length&&(v=new sy(v,t,null,n,d),f.push({event:v,listeners:z}),I?v.data=I:(I=YE(n),I!==null&&(v.data=I)))),(I=GR?QR(t,n):YR(t,n))&&(c=Hu(c,"onBeforeInput"),0<c.length&&(d=new sy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}lw(f,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ra(t,n),s!=null&&r.unshift(Da(t,s,i)),s=Ra(t,e),s!=null&&r.push(Da(t,s,i))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _y(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ra(n,s),u!=null&&o.unshift(Da(n,u,a))):i||(u=Ra(n,s),u!=null&&o.push(Da(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ck=/\r\n?/g,hk=/\u0000|\uFFFD/g;function yy(t){return(typeof t=="string"?t:""+t).replace(ck,`
`).replace(hk,"")}function eu(t,e,n){if(e=yy(e),yy(t)!==e&&n)throw Error(U(425))}function qu(){}var df=null,ff=null;function pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mf=typeof setTimeout=="function"?setTimeout:void 0,dk=typeof clearTimeout=="function"?clearTimeout:void 0,vy=typeof Promise=="function"?Promise:void 0,fk=typeof queueMicrotask=="function"?queueMicrotask:typeof vy<"u"?function(t){return vy.resolve(null).then(t).catch(pk)}:mf;function pk(t){setTimeout(function(){throw t})}function fd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xa(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ey(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),Mn="__reactFiber$"+ho,Oa="__reactProps$"+ho,lr="__reactContainer$"+ho,gf="__reactEvents$"+ho,mk="__reactListeners$"+ho,gk="__reactHandles$"+ho;function Si(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ey(t);t!==null;){if(n=t[Mn])return n;t=Ey(t)}return e}t=n,n=t.parentNode}return null}function ol(t){return t=t[Mn]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Kc(t){return t[Oa]||null}var _f=[],Ts=-1;function li(t){return{current:t}}function Ve(t){0>Ts||(t.current=_f[Ts],_f[Ts]=null,Ts--)}function De(t,e){Ts++,_f[Ts]=t.current,t.current=e}var Zr={},xt=li(Zr),Ht=li(!1),Di=Zr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return Zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function Ku(){Ve(Ht),Ve(xt)}function wy(t,e,n){if(xt.current!==Zr)throw Error(U(168));De(xt,e),De(Ht,n)}function cw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,eR(t)||"Unknown",i));return We({},n,r)}function Gu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Di=xt.current,De(xt,t),De(Ht,Ht.current),!0}function Ty(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=cw(t,e,Di),r.__reactInternalMemoizedMergedChildContext=t,Ve(Ht),Ve(xt),De(xt,t)):Ve(Ht),De(Ht,n)}var Yn=null,Gc=!1,pd=!1;function hw(t){Yn===null?Yn=[t]:Yn.push(t)}function _k(t){Gc=!0,hw(t)}function ui(){if(!pd&&Yn!==null){pd=!0;var t=0,e=Se;try{var n=Yn;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,Gc=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(t+1)),LE(Op,ui),i}finally{Se=e,pd=!1}}return null}var Is=[],Ss=0,Qu=null,Yu=0,cn=[],hn=0,Oi=null,Xn=1,Jn="";function Ei(t,e){Is[Ss++]=Yu,Is[Ss++]=Qu,Qu=t,Yu=e}function dw(t,e,n){cn[hn++]=Xn,cn[hn++]=Jn,cn[hn++]=Oi,Oi=t;var r=Xn;t=Jn;var i=32-An(r)-1;r&=~(1<<i),n+=1;var s=32-An(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xn=1<<32-An(e)+i|n<<i|r,Jn=s+t}else Xn=1<<s|n<<i|r,Jn=t}function Wp(t){t.return!==null&&(Ei(t,1),dw(t,1,0))}function $p(t){for(;t===Qu;)Qu=Is[--Ss],Is[Ss]=null,Yu=Is[--Ss],Is[Ss]=null;for(;t===Oi;)Oi=cn[--hn],cn[hn]=null,Jn=cn[--hn],cn[hn]=null,Xn=cn[--hn],cn[hn]=null}var tn=null,Zt=null,je=!1,Sn=null;function fw(t,e){var n=dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Zt=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Oi!==null?{id:Xn,overflow:Jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Zt=null,!0):!1;default:return!1}}function yf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vf(t){if(je){var e=Zt;if(e){var n=e;if(!Iy(t,e)){if(yf(t))throw Error(U(418));e=Br(n.nextSibling);var r=tn;e&&Iy(t,e)?fw(r,n):(t.flags=t.flags&-4097|2,je=!1,tn=t)}}else{if(yf(t))throw Error(U(418));t.flags=t.flags&-4097|2,je=!1,tn=t}}}function Sy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function tu(t){if(t!==tn)return!1;if(!je)return Sy(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pf(t.type,t.memoizedProps)),e&&(e=Zt)){if(yf(t))throw pw(),Error(U(418));for(;e;)fw(t,e),e=Br(e.nextSibling)}if(Sy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zt=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zt=null}}else Zt=tn?Br(t.stateNode.nextSibling):null;return!0}function pw(){for(var t=Zt;t;)t=Br(t.nextSibling)}function qs(){Zt=tn=null,je=!1}function Hp(t){Sn===null?Sn=[t]:Sn.push(t)}var yk=_r.ReactCurrentBatchConfig;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function nu(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cy(t){var e=t._init;return e(t._payload)}function mw(t){function e(S,w){if(t){var A=S.deletions;A===null?(S.deletions=[w],S.flags|=16):A.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=qr(S,w),S.index=0,S.sibling=null,S}function s(S,w,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<w?(S.flags|=2,w):A):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,w,A,M){return w===null||w.tag!==6?(w=wd(A,S.mode,M),w.return=S,w):(w=i(w,A),w.return=S,w)}function u(S,w,A,M){var j=A.type;return j===_s?d(S,w,A.props.children,M,A.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===kr&&Cy(j)===w.type)?(M=i(w,A.props),M.ref=Uo(S,w,A),M.return=S,M):(M=Cu(A.type,A.key,A.props,null,S.mode,M),M.ref=Uo(S,w,A),M.return=S,M)}function c(S,w,A,M){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Td(A,S.mode,M),w.return=S,w):(w=i(w,A.children||[]),w.return=S,w)}function d(S,w,A,M,j){return w===null||w.tag!==7?(w=Ni(A,S.mode,M,j),w.return=S,w):(w=i(w,A),w.return=S,w)}function f(S,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=wd(""+w,S.mode,A),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Hl:return A=Cu(w.type,w.key,w.props,null,S.mode,A),A.ref=Uo(S,null,w),A.return=S,A;case gs:return w=Td(w,S.mode,A),w.return=S,w;case kr:var M=w._init;return f(S,M(w._payload),A)}if(Yo(w)||Mo(w))return w=Ni(w,S.mode,A,null),w.return=S,w;nu(S,w)}return null}function m(S,w,A,M){var j=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:a(S,w,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Hl:return A.key===j?u(S,w,A,M):null;case gs:return A.key===j?c(S,w,A,M):null;case kr:return j=A._init,m(S,w,j(A._payload),M)}if(Yo(A)||Mo(A))return j!==null?null:d(S,w,A,M,null);nu(S,A)}return null}function E(S,w,A,M,j){if(typeof M=="string"&&M!==""||typeof M=="number")return S=S.get(A)||null,a(w,S,""+M,j);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Hl:return S=S.get(M.key===null?A:M.key)||null,u(w,S,M,j);case gs:return S=S.get(M.key===null?A:M.key)||null,c(w,S,M,j);case kr:var z=M._init;return E(S,w,A,z(M._payload),j)}if(Yo(M)||Mo(M))return S=S.get(A)||null,d(w,S,M,j,null);nu(w,M)}return null}function T(S,w,A,M){for(var j=null,z=null,I=w,v=w=0,C=null;I!==null&&v<A.length;v++){I.index>v?(C=I,I=null):C=I.sibling;var k=m(S,I,A[v],M);if(k===null){I===null&&(I=C);break}t&&I&&k.alternate===null&&e(S,I),w=s(k,w,v),z===null?j=k:z.sibling=k,z=k,I=C}if(v===A.length)return n(S,I),je&&Ei(S,v),j;if(I===null){for(;v<A.length;v++)I=f(S,A[v],M),I!==null&&(w=s(I,w,v),z===null?j=I:z.sibling=I,z=I);return je&&Ei(S,v),j}for(I=r(S,I);v<A.length;v++)C=E(I,S,v,A[v],M),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?v:C.key),w=s(C,w,v),z===null?j=C:z.sibling=C,z=C);return t&&I.forEach(function(P){return e(S,P)}),je&&Ei(S,v),j}function x(S,w,A,M){var j=Mo(A);if(typeof j!="function")throw Error(U(150));if(A=j.call(A),A==null)throw Error(U(151));for(var z=j=null,I=w,v=w=0,C=null,k=A.next();I!==null&&!k.done;v++,k=A.next()){I.index>v?(C=I,I=null):C=I.sibling;var P=m(S,I,k.value,M);if(P===null){I===null&&(I=C);break}t&&I&&P.alternate===null&&e(S,I),w=s(P,w,v),z===null?j=P:z.sibling=P,z=P,I=C}if(k.done)return n(S,I),je&&Ei(S,v),j;if(I===null){for(;!k.done;v++,k=A.next())k=f(S,k.value,M),k!==null&&(w=s(k,w,v),z===null?j=k:z.sibling=k,z=k);return je&&Ei(S,v),j}for(I=r(S,I);!k.done;v++,k=A.next())k=E(I,S,v,k.value,M),k!==null&&(t&&k.alternate!==null&&I.delete(k.key===null?v:k.key),w=s(k,w,v),z===null?j=k:z.sibling=k,z=k);return t&&I.forEach(function(N){return e(S,N)}),je&&Ei(S,v),j}function D(S,w,A,M){if(typeof A=="object"&&A!==null&&A.type===_s&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Hl:e:{for(var j=A.key,z=w;z!==null;){if(z.key===j){if(j=A.type,j===_s){if(z.tag===7){n(S,z.sibling),w=i(z,A.props.children),w.return=S,S=w;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===kr&&Cy(j)===z.type){n(S,z.sibling),w=i(z,A.props),w.ref=Uo(S,z,A),w.return=S,S=w;break e}n(S,z);break}else e(S,z);z=z.sibling}A.type===_s?(w=Ni(A.props.children,S.mode,M,A.key),w.return=S,S=w):(M=Cu(A.type,A.key,A.props,null,S.mode,M),M.ref=Uo(S,w,A),M.return=S,S=M)}return o(S);case gs:e:{for(z=A.key;w!==null;){if(w.key===z)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(S,w.sibling),w=i(w,A.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Td(A,S.mode,M),w.return=S,S=w}return o(S);case kr:return z=A._init,D(S,w,z(A._payload),M)}if(Yo(A))return T(S,w,A,M);if(Mo(A))return x(S,w,A,M);nu(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,A),w.return=S,S=w):(n(S,w),w=wd(A,S.mode,M),w.return=S,S=w),o(S)):n(S,w)}return D}var Ks=mw(!0),gw=mw(!1),Xu=li(null),Ju=null,Cs=null,qp=null;function Kp(){qp=Cs=Ju=null}function Gp(t){var e=Xu.current;Ve(Xu),t._currentValue=e}function Ef(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){Ju=t,qp=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function pn(t){var e=t._currentValue;if(qp!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(Ju===null)throw Error(U(308));Cs=t,Ju.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var Ci=null;function Qp(t){Ci===null?Ci=[t]:Ci.push(t)}function _w(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qp(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function Yp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,Qp(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function vu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mp(t,n)}}function Ry(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zu(t,e,n,r){var i=t.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,E=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,x=a;switch(m=e,E=n,x.tag){case 1:if(T=x.payload,typeof T=="function"){f=T.call(E,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=x.payload,m=typeof T=="function"?T.call(E,f,m):T,m==null)break e;f=We({},f,m);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else E={eventTime:E,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Li|=o,t.lanes=o,t.memoizedState=f}}function ky(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var al={},Fn=li(al),Ma=li(al),La=li(al);function Ri(t){if(t===al)throw Error(U(174));return t}function Xp(t,e){switch(De(La,e),De(Ma,t),De(Fn,al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zd(e,t)}Ve(Fn),De(Fn,e)}function Gs(){Ve(Fn),Ve(Ma),Ve(La)}function vw(t){Ri(La.current);var e=Ri(Fn.current),n=Zd(e,t.type);e!==n&&(De(Ma,t),De(Fn,n))}function Jp(t){Ma.current===t&&(Ve(Fn),Ve(Ma))}var ze=li(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var md=[];function Zp(){for(var t=0;t<md.length;t++)md[t]._workInProgressVersionPrimary=null;md.length=0}var Eu=_r.ReactCurrentDispatcher,gd=_r.ReactCurrentBatchConfig,Mi=0,Be=null,Ze=null,ot=null,tc=!1,ca=!1,Va=0,vk=0;function wt(){throw Error(U(321))}function em(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function tm(t,e,n,r,i,s){if(Mi=s,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Eu.current=t===null||t.memoizedState===null?Ik:Sk,t=n(r,i),ca){s=0;do{if(ca=!1,Va=0,25<=s)throw Error(U(301));s+=1,ot=Ze=null,e.updateQueue=null,Eu.current=Ck,t=n(r,i)}while(ca)}if(Eu.current=nc,e=Ze!==null&&Ze.next!==null,Mi=0,ot=Ze=Be=null,tc=!1,e)throw Error(U(300));return t}function nm(){var t=Va!==0;return Va=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Be.memoizedState=ot=t:ot=ot.next=t,ot}function mn(){if(Ze===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=ot===null?Be.memoizedState:ot.next;if(e!==null)ot=e,Ze=t;else{if(t===null)throw Error(U(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},ot===null?Be.memoizedState=ot=t:ot=ot.next=t}return ot}function Fa(t,e){return typeof e=="function"?e(t):e}function _d(t){var e=mn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Mi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Be.lanes|=d,Li|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Nn(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Be.lanes|=s,Li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yd(t){var e=mn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nn(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ew(){}function ww(t,e){var n=Be,r=mn(),i=e(),s=!Nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Bt=!0),r=r.queue,rm(Sw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,ja(9,Iw.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(U(349));Mi&30||Tw(n,e,i)}return i}function Tw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iw(t,e,n,r){e.value=n,e.getSnapshot=r,Cw(e)&&Rw(t)}function Sw(t,e,n){return n(function(){Cw(e)&&Rw(t)})}function Cw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function Rw(t){var e=ur(t,1);e!==null&&xn(e,t,1,-1)}function Ay(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=Tk.bind(null,Be,t),[e.memoizedState,t]}function ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kw(){return mn().memoizedState}function wu(t,e,n,r){var i=On();Be.flags|=t,i.memoizedState=ja(1|e,n,void 0,r===void 0?null:r)}function Qc(t,e,n,r){var i=mn();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&em(r,o.deps)){i.memoizedState=ja(e,n,s,r);return}}Be.flags|=t,i.memoizedState=ja(1|e,n,s,r)}function xy(t,e){return wu(8390656,8,t,e)}function rm(t,e){return Qc(2048,8,t,e)}function Aw(t,e){return Qc(4,2,t,e)}function xw(t,e){return Qc(4,4,t,e)}function Pw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nw(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4,4,Pw.bind(null,e,t),n)}function im(){}function bw(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&em(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dw(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&em(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ow(t,e,n){return Mi&21?(Nn(n,e)||(n=jE(),Be.lanes|=n,Li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function Ek(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=gd.transition;gd.transition={};try{t(!1),e()}finally{Se=n,gd.transition=r}}function Mw(){return mn().memoizedState}function wk(t,e,n){var r=Hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lw(t))Vw(e,n);else if(n=_w(t,e,n,r),n!==null){var i=Lt();xn(n,t,r,i),Fw(n,e,r)}}function Tk(t,e,n){var r=Hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lw(t))Vw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nn(a,o)){var u=e.interleaved;u===null?(i.next=i,Qp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=_w(t,e,i,r),n!==null&&(i=Lt(),xn(n,t,r,i),Fw(n,e,r))}}function Lw(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function Vw(t,e){ca=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mp(t,n)}}var nc={readContext:pn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},Ik={readContext:pn,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:pn,useEffect:xy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wu(4194308,4,Pw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return wu(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=On();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wk.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:Ay,useDebugValue:im,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=Ay(!1),e=t[0];return t=Ek.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,i=On();if(je){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ut===null)throw Error(U(349));Mi&30||Tw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xy(Sw.bind(null,r,s,t),[t]),r.flags|=2048,ja(9,Iw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=On(),e=ut.identifierPrefix;if(je){var n=Jn,r=Xn;n=(r&~(1<<32-An(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sk={readContext:pn,useCallback:bw,useContext:pn,useEffect:rm,useImperativeHandle:Nw,useInsertionEffect:Aw,useLayoutEffect:xw,useMemo:Dw,useReducer:_d,useRef:kw,useState:function(){return _d(Fa)},useDebugValue:im,useDeferredValue:function(t){var e=mn();return Ow(e,Ze.memoizedState,t)},useTransition:function(){var t=_d(Fa)[0],e=mn().memoizedState;return[t,e]},useMutableSource:Ew,useSyncExternalStore:ww,useId:Mw,unstable_isNewReconciler:!1},Ck={readContext:pn,useCallback:bw,useContext:pn,useEffect:rm,useImperativeHandle:Nw,useInsertionEffect:Aw,useLayoutEffect:xw,useMemo:Dw,useReducer:yd,useRef:kw,useState:function(){return yd(Fa)},useDebugValue:im,useDeferredValue:function(t){var e=mn();return Ze===null?e.memoizedState=t:Ow(e,Ze.memoizedState,t)},useTransition:function(){var t=yd(Fa)[0],e=mn().memoizedState;return[t,e]},useMutableSource:Ew,useSyncExternalStore:ww,useId:Mw,unstable_isNewReconciler:!1};function Tn(t,e){if(t&&t.defaultProps){e=We({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:We({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yc={isMounted:function(t){return(t=t._reactInternals)?Qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=Hr(t),s=rr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(xn(e,t,i,r),vu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=Hr(t),s=rr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(xn(e,t,i,r),vu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=Hr(t),i=rr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wr(t,i,r),e!==null&&(xn(e,t,r,n),vu(e,t,r))}};function Py(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Na(n,r)||!Na(i,s):!0}function jw(t,e,n){var r=!1,i=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=pn(s):(i=qt(e)?Di:xt.current,r=e.contextTypes,s=(r=r!=null)?Hs(t,i):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ny(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yc.enqueueReplaceState(e,e.state,null)}function Tf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pn(s):(s=qt(e)?Di:xt.current,i.context=Hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yc.enqueueReplaceState(i,i.state,null),Zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",r=e;do n+=Z1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function vd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function If(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rk=typeof WeakMap=="function"?WeakMap:Map;function Uw(t,e,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ic||(ic=!0,Df=r),If(t,e)},n}function zw(t,e,n){n=rr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){If(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){If(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function by(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Uk.bind(null,t,e,n),e.then(t,t))}function Dy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Oy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rr(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t)}var kk=_r.ReactCurrentOwner,Bt=!1;function Mt(t,e,n,r){e.child=t===null?gw(e,null,n,r):Ks(e,t.child,n,r)}function My(t,e,n,r,i){n=n.render;var s=e.ref;return Ms(e,i),r=tm(t,e,n,r,s,i),n=nm(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(je&&n&&Wp(e),e.flags|=1,Mt(t,e,r,i),e.child)}function Ly(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Bw(t,e,s,r,i)):(t=Cu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Bw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Na(s,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,cr(t,e,i)}return Sf(t,e,n,r,i)}function Ww(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(ks,Jt),Jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,De(ks,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,De(ks,Jt),Jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,De(ks,Jt),Jt|=r;return Mt(t,e,i,n),e.child}function $w(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sf(t,e,n,r,i){var s=qt(n)?Di:xt.current;return s=Hs(e,s),Ms(e,i),n=tm(t,e,n,r,s,i),r=nm(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(je&&r&&Wp(e),e.flags|=1,Mt(t,e,n,i),e.child)}function Vy(t,e,n,r,i){if(qt(n)){var s=!0;Gu(e)}else s=!1;if(Ms(e,i),e.stateNode===null)Tu(t,e),jw(e,n,r),Tf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pn(c):(c=qt(n)?Di:xt.current,c=Hs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ny(e,o,r,c),Ar=!1;var m=e.memoizedState;o.state=m,Zu(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Ht.current||Ar?(typeof d=="function"&&(wf(e,n,d,r),u=e.memoizedState),(a=Ar||Py(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Tn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=pn(u):(u=qt(n)?Di:xt.current,u=Hs(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Ny(e,o,r,u),Ar=!1,m=e.memoizedState,o.state=m,Zu(e,r,o,i);var T=e.memoizedState;a!==f||m!==T||Ht.current||Ar?(typeof E=="function"&&(wf(e,n,E,r),T=e.memoizedState),(c=Ar||Py(e,n,c,r,m,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Cf(t,e,n,r,s,i)}function Cf(t,e,n,r,i,s){$w(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ty(e,n,!1),cr(t,e,s);r=e.stateNode,kk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):Mt(t,e,a,s),e.memoizedState=r.state,i&&Ty(e,n,!0),e.child}function Hw(t){var e=t.stateNode;e.pendingContext?wy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wy(t,e.context,!1),Xp(t,e.containerInfo)}function Fy(t,e,n,r,i){return qs(),Hp(i),e.flags|=256,Mt(t,e,n,r),e.child}var Rf={dehydrated:null,treeContext:null,retryLane:0};function kf(t){return{baseLanes:t,cachePool:null,transitions:null}}function qw(t,e,n){var r=e.pendingProps,i=ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),De(ze,i&1),t===null)return vf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zc(o,r,0,null),t=Ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kf(n),e.memoizedState=Rf,t):sm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ak(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=qr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=qr(a,s):(s=Ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rf,r}return s=t.child,t=s.sibling,r=qr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sm(t,e){return e=Zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ru(t,e,n,r){return r!==null&&Hp(r),Ks(e,t.child,null,n),t=sm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ak(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=vd(Error(U(422))),ru(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zc({mode:"visible",children:r.children},i,0,null),s=Ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=kf(o),e.memoizedState=Rf,s);if(!(e.mode&1))return ru(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=vd(s,r,void 0),ru(t,e,o,r)}if(a=(o&t.childLanes)!==0,Bt||a){if(r=ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(t,i),xn(r,t,i,-1))}return hm(),r=vd(Error(U(421))),ru(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Zt=Br(i.nextSibling),tn=e,je=!0,Sn=null,t!==null&&(cn[hn++]=Xn,cn[hn++]=Jn,cn[hn++]=Oi,Xn=t.id,Jn=t.overflow,Oi=e),e=sm(e,r.children),e.flags|=4096,e)}function jy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ef(t.return,e,n)}function Ed(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Kw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Mt(t,e,r.children,n),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jy(t,n,e);else if(t.tag===19)jy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(De(ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ed(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ed(e,!0,n,null,s);break;case"together":Ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xk(t,e,n){switch(e.tag){case 3:Hw(e),qs();break;case 5:vw(e);break;case 1:qt(e.type)&&Gu(e);break;case 4:Xp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;De(Xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(De(ze,ze.current&1),e.flags|=128,null):n&e.child.childLanes?qw(t,e,n):(De(ze,ze.current&1),t=cr(t,e,n),t!==null?t.sibling:null);De(ze,ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Kw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,Ww(t,e,n)}return cr(t,e,n)}var Gw,Af,Qw,Yw;Gw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Af=function(){};Qw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ri(Fn.current);var s=null;switch(n){case"input":i=Qd(t,i),r=Qd(t,r),s=[];break;case"select":i=We({},i,{value:void 0}),r=We({},r,{value:void 0}),s=[];break;case"textarea":i=Jd(t,i),r=Jd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qu)}ef(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Me("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Yw=function(t,e,n,r){n!==r&&(e.flags|=4)};function zo(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Pk(t,e,n){var r=e.pendingProps;switch($p(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return qt(e.type)&&Ku(),Tt(e),null;case 3:return r=e.stateNode,Gs(),Ve(Ht),Ve(xt),Zp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Sn!==null&&(Lf(Sn),Sn=null))),Af(t,e),Tt(e),null;case 5:Jp(e);var i=Ri(La.current);if(n=e.type,t!==null&&e.stateNode!=null)Qw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Tt(e),null}if(t=Ri(Fn.current),tu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mn]=e,r[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<Jo.length;i++)Me(Jo[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":G_(r,s),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Me("invalid",r);break;case"textarea":Y_(r,s),Me("invalid",r)}ef(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&eu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&eu(r.textContent,a,t),i=["children",""+a]):Sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Me("scroll",r)}switch(n){case"input":ql(r),Q_(r,s,!0);break;case"textarea":ql(r),X_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=SE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mn]=e,t[Oa]=r,Gw(t,e,!1,!1),e.stateNode=t;e:{switch(o=tf(n,r),n){case"dialog":Me("cancel",t),Me("close",t),i=r;break;case"iframe":case"object":case"embed":Me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Jo.length;i++)Me(Jo[i],t);i=r;break;case"source":Me("error",t),i=r;break;case"img":case"image":case"link":Me("error",t),Me("load",t),i=r;break;case"details":Me("toggle",t),i=r;break;case"input":G_(t,r),i=Qd(t,r),Me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=We({},r,{value:void 0}),Me("invalid",t);break;case"textarea":Y_(t,r),i=Jd(t,r),Me("invalid",t);break;default:i=r}ef(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?kE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&CE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ca(t,u):typeof u=="number"&&Ca(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Me("scroll",t):u!=null&&xp(t,s,u,o))}switch(n){case"input":ql(t),Q_(t,r,!1);break;case"textarea":ql(t),X_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tt(e),null;case 6:if(t&&e.stateNode!=null)Yw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Ri(La.current),Ri(Fn.current),tu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(s=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:eu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return Tt(e),null;case 13:if(Ve(ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&Zt!==null&&e.mode&1&&!(e.flags&128))pw(),qs(),e.flags|=98560,s=!1;else if(s=tu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Mn]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tt(e),s=!1}else Sn!==null&&(Lf(Sn),Sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ze.current&1?nt===0&&(nt=3):hm())),e.updateQueue!==null&&(e.flags|=4),Tt(e),null);case 4:return Gs(),Af(t,e),t===null&&ba(e.stateNode.containerInfo),Tt(e),null;case 10:return Gp(e.type._context),Tt(e),null;case 17:return qt(e.type)&&Ku(),Tt(e),null;case 19:if(Ve(ze),s=e.memoizedState,s===null)return Tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zo(s,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,zo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return De(ze,ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&Qe()>Ys&&(e.flags|=128,r=!0,zo(s,!1),e.lanes=4194304)}else{if(!r)if(t=ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return Tt(e),null}else 2*Qe()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,r=!0,zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,n=ze.current,De(ze,r?n&1|2:n&1),e):(Tt(e),null);case 22:case 23:return cm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Jt&1073741824&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Nk(t,e){switch($p(e),e.tag){case 1:return qt(e.type)&&Ku(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),Ve(Ht),Ve(xt),Zp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jp(e),null;case 13:if(Ve(ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ve(ze),null;case 4:return Gs(),null;case 10:return Gp(e.type._context),null;case 22:case 23:return cm(),null;case 24:return null;default:return null}}var iu=!1,Rt=!1,bk=typeof WeakSet=="function"?WeakSet:Set,q=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function xf(t,e,n){try{n()}catch(r){He(t,e,r)}}var Uy=!1;function Dk(t,e){if(df=Wu,t=tw(),Bp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ff={focusedElem:t,selectionRange:n},Wu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var x=T.memoizedProps,D=T.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?x:Tn(e.type,x),D);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(M){He(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return T=Uy,Uy=!1,T}function ha(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xf(e,n,s)}i=i.next}while(i!==r)}}function Xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xw(t){var e=t.alternate;e!==null&&(t.alternate=null,Xw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[Oa],delete e[gf],delete e[mk],delete e[gk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jw(t){return t.tag===5||t.tag===3||t.tag===4}function zy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qu));else if(r!==4&&(t=t.child,t!==null))for(Nf(t,e,n),t=t.sibling;t!==null;)Nf(t,e,n),t=t.sibling}function bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}var ht=null,In=!1;function Cr(t,e,n){for(n=n.child;n!==null;)Zw(t,e,n),n=n.sibling}function Zw(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(Wc,n)}catch{}switch(n.tag){case 5:Rt||Rs(n,e);case 6:var r=ht,i=In;ht=null,Cr(t,e,n),ht=r,In=i,ht!==null&&(In?(t=ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(In?(t=ht,n=n.stateNode,t.nodeType===8?fd(t.parentNode,n):t.nodeType===1&&fd(t,n),xa(t)):fd(ht,n.stateNode));break;case 4:r=ht,i=In,ht=n.stateNode.containerInfo,In=!0,Cr(t,e,n),ht=r,In=i;break;case 0:case 11:case 14:case 15:if(!Rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xf(n,e,o),i=i.next}while(i!==r)}Cr(t,e,n);break;case 1:if(!Rt&&(Rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){He(n,e,a)}Cr(t,e,n);break;case 21:Cr(t,e,n);break;case 22:n.mode&1?(Rt=(r=Rt)||n.memoizedState!==null,Cr(t,e,n),Rt=r):Cr(t,e,n);break;default:Cr(t,e,n)}}function By(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bk),e.forEach(function(r){var i=Bk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ht=a.stateNode,In=!1;break e;case 3:ht=a.stateNode.containerInfo,In=!0;break e;case 4:ht=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(ht===null)throw Error(U(160));Zw(s,o,i),ht=null,In=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){He(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)eT(e,t),e=e.sibling}function eT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Dn(t),r&4){try{ha(3,t,t.return),Xc(3,t)}catch(x){He(t,t.return,x)}try{ha(5,t,t.return)}catch(x){He(t,t.return,x)}}break;case 1:wn(e,t),Dn(t),r&512&&n!==null&&Rs(n,n.return);break;case 5:if(wn(e,t),Dn(t),r&512&&n!==null&&Rs(n,n.return),t.flags&32){var i=t.stateNode;try{Ca(i,"")}catch(x){He(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&TE(i,s),tf(a,o);var c=tf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?kE(i,f):d==="dangerouslySetInnerHTML"?CE(i,f):d==="children"?Ca(i,f):xp(i,d,f,c)}switch(a){case"input":Yd(i,s);break;case"textarea":IE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Ns(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ns(i,!!s.multiple,s.defaultValue,!0):Ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oa]=s}catch(x){He(t,t.return,x)}}break;case 6:if(wn(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){He(t,t.return,x)}}break;case 3:if(wn(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(x){He(t,t.return,x)}break;case 4:wn(e,t),Dn(t);break;case 13:wn(e,t),Dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lm=Qe())),r&4&&By(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Rt=(c=Rt)||d,wn(e,t),Rt=c):wn(e,t),Dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,E=m.child,m.tag){case 0:case 11:case 14:case 15:ha(4,m,m.return);break;case 1:Rs(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(x){He(r,n,x)}}break;case 5:Rs(m,m.return);break;case 22:if(m.memoizedState!==null){$y(f);continue}}E!==null?(E.return=m,q=E):$y(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=RE("display",o))}catch(x){He(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){He(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:wn(e,t),Dn(t),r&4&&By(t);break;case 21:break;default:wn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jw(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ca(i,""),r.flags&=-33);var s=zy(t);bf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zy(t);Nf(t,a,o);break;default:throw Error(U(161))}}catch(u){He(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ok(t,e,n){q=t,tT(t)}function tT(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||iu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Rt;a=iu;var c=Rt;if(iu=o,(Rt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Hy(i):u!==null?(u.return=o,q=u):Hy(i);for(;s!==null;)q=s,tT(s),s=s.sibling;q=i,iu=a,Rt=c}Wy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Wy(t)}}function Wy(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||Xc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ky(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ky(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&xa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Rt||e.flags&512&&Pf(e)}catch(m){He(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function $y(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Hy(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xc(4,e)}catch(u){He(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){He(e,i,u)}}var s=e.return;try{Pf(e)}catch(u){He(e,s,u)}break;case 5:var o=e.return;try{Pf(e)}catch(u){He(e,o,u)}}}catch(u){He(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var Mk=Math.ceil,rc=_r.ReactCurrentDispatcher,om=_r.ReactCurrentOwner,fn=_r.ReactCurrentBatchConfig,ye=0,ut=null,Xe=null,pt=0,Jt=0,ks=li(0),nt=0,Ua=null,Li=0,Jc=0,am=0,da=null,Ut=null,lm=0,Ys=1/0,Qn=null,ic=!1,Df=null,$r=null,su=!1,Lr=null,sc=0,fa=0,Of=null,Iu=-1,Su=0;function Lt(){return ye&6?Qe():Iu!==-1?Iu:Iu=Qe()}function Hr(t){return t.mode&1?ye&2&&pt!==0?pt&-pt:yk.transition!==null?(Su===0&&(Su=jE()),Su):(t=Se,t!==0||(t=window.event,t=t===void 0?16:qE(t.type)),t):1}function xn(t,e,n,r){if(50<fa)throw fa=0,Of=null,Error(U(185));il(t,n,r),(!(ye&2)||t!==ut)&&(t===ut&&(!(ye&2)&&(Jc|=n),nt===4&&Pr(t,pt)),Kt(t,r),n===1&&ye===0&&!(e.mode&1)&&(Ys=Qe()+500,Gc&&ui()))}function Kt(t,e){var n=t.callbackNode;yR(t,e);var r=Bu(t,t===ut?pt:0);if(r===0)n!==null&&ey(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ey(n),e===1)t.tag===0?_k(qy.bind(null,t)):hw(qy.bind(null,t)),fk(function(){!(ye&6)&&ui()}),n=null;else{switch(UE(r)){case 1:n=Op;break;case 4:n=VE;break;case 16:n=zu;break;case 536870912:n=FE;break;default:n=zu}n=uT(n,nT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nT(t,e){if(Iu=-1,Su=0,ye&6)throw Error(U(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var r=Bu(t,t===ut?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oc(t,r);else{e=r;var i=ye;ye|=2;var s=iT();(ut!==t||pt!==e)&&(Qn=null,Ys=Qe()+500,Pi(t,e));do try{Fk();break}catch(a){rT(t,a)}while(!0);Kp(),rc.current=s,ye=i,Xe!==null?e=0:(ut=null,pt=0,e=nt)}if(e!==0){if(e===2&&(i=af(t),i!==0&&(r=i,e=Mf(t,i))),e===1)throw n=Ua,Pi(t,0),Pr(t,r),Kt(t,Qe()),n;if(e===6)Pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Lk(i)&&(e=oc(t,r),e===2&&(s=af(t),s!==0&&(r=s,e=Mf(t,s))),e===1))throw n=Ua,Pi(t,0),Pr(t,r),Kt(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:wi(t,Ut,Qn);break;case 3:if(Pr(t,r),(r&130023424)===r&&(e=lm+500-Qe(),10<e)){if(Bu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mf(wi.bind(null,t,Ut,Qn),e);break}wi(t,Ut,Qn);break;case 4:if(Pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-An(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mk(r/1960))-r,10<r){t.timeoutHandle=mf(wi.bind(null,t,Ut,Qn),r);break}wi(t,Ut,Qn);break;case 5:wi(t,Ut,Qn);break;default:throw Error(U(329))}}}return Kt(t,Qe()),t.callbackNode===n?nT.bind(null,t):null}function Mf(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(Pi(t,e).flags|=256),t=oc(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&Lf(e)),t}function Lf(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function Lk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~am,e&=~Jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-An(e),r=1<<n;t[n]=-1,e&=~r}}function qy(t){if(ye&6)throw Error(U(327));Ls();var e=Bu(t,0);if(!(e&1))return Kt(t,Qe()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var r=af(t);r!==0&&(e=r,n=Mf(t,r))}if(n===1)throw n=Ua,Pi(t,0),Pr(t,e),Kt(t,Qe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wi(t,Ut,Qn),Kt(t,Qe()),null}function um(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(Ys=Qe()+500,Gc&&ui())}}function Vi(t){Lr!==null&&Lr.tag===0&&!(ye&6)&&Ls();var e=ye;ye|=1;var n=fn.transition,r=Se;try{if(fn.transition=null,Se=1,t)return t()}finally{Se=r,fn.transition=n,ye=e,!(ye&6)&&ui()}}function cm(){Jt=ks.current,Ve(ks)}function Pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dk(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch($p(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ku();break;case 3:Gs(),Ve(Ht),Ve(xt),Zp();break;case 5:Jp(r);break;case 4:Gs();break;case 13:Ve(ze);break;case 19:Ve(ze);break;case 10:Gp(r.type._context);break;case 22:case 23:cm()}n=n.return}if(ut=t,Xe=t=qr(t.current,null),pt=Jt=e,nt=0,Ua=null,am=Jc=Li=0,Ut=da=null,Ci!==null){for(e=0;e<Ci.length;e++)if(n=Ci[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ci=null}return t}function rT(t,e){do{var n=Xe;try{if(Kp(),Eu.current=nc,tc){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tc=!1}if(Mi=0,ot=Ze=Be=null,ca=!1,Va=0,om.current=null,n===null||n.return===null){nt=1,Ua=e,Xe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=pt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=Dy(o);if(E!==null){E.flags&=-257,Oy(E,o,a,s,e),E.mode&1&&by(s,c,e),e=E,u=c;var T=e.updateQueue;if(T===null){var x=new Set;x.add(u),e.updateQueue=x}else T.add(u);break e}else{if(!(e&1)){by(s,c,e),hm();break e}u=Error(U(426))}}else if(je&&a.mode&1){var D=Dy(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Oy(D,o,a,s,e),Hp(Qs(u,a));break e}}s=u=Qs(u,a),nt!==4&&(nt=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=Uw(s,u,e);Ry(s,S);break e;case 1:a=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&($r===null||!$r.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=zw(s,a,e);Ry(s,M);break e}}s=s.return}while(s!==null)}oT(n)}catch(j){e=j,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function iT(){var t=rc.current;return rc.current=nc,t===null?nc:t}function hm(){(nt===0||nt===3||nt===2)&&(nt=4),ut===null||!(Li&268435455)&&!(Jc&268435455)||Pr(ut,pt)}function oc(t,e){var n=ye;ye|=2;var r=iT();(ut!==t||pt!==e)&&(Qn=null,Pi(t,e));do try{Vk();break}catch(i){rT(t,i)}while(!0);if(Kp(),ye=n,rc.current=r,Xe!==null)throw Error(U(261));return ut=null,pt=0,nt}function Vk(){for(;Xe!==null;)sT(Xe)}function Fk(){for(;Xe!==null&&!uR();)sT(Xe)}function sT(t){var e=lT(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?oT(t):Xe=e,om.current=null}function oT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nk(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Xe=null;return}}else if(n=Pk(n,e,Jt),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);nt===0&&(nt=5)}function wi(t,e,n){var r=Se,i=fn.transition;try{fn.transition=null,Se=1,jk(t,e,n,r)}finally{fn.transition=i,Se=r}return null}function jk(t,e,n,r){do Ls();while(Lr!==null);if(ye&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vR(t,s),t===ut&&(Xe=ut=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||su||(su=!0,uT(zu,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=fn.transition,fn.transition=null;var o=Se;Se=1;var a=ye;ye|=4,om.current=null,Dk(t,n),eT(n,t),sk(ff),Wu=!!df,ff=df=null,t.current=n,Ok(n),cR(),ye=a,Se=o,fn.transition=s}else t.current=n;if(su&&(su=!1,Lr=t,sc=i),s=t.pendingLanes,s===0&&($r=null),fR(n.stateNode),Kt(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,t=Df,Df=null,t;return sc&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===Of?fa++:(fa=0,Of=t):fa=0,ui(),null}function Ls(){if(Lr!==null){var t=UE(sc),e=fn.transition,n=Se;try{if(fn.transition=null,Se=16>t?16:t,Lr===null)var r=!1;else{if(t=Lr,Lr=null,sc=0,ye&6)throw Error(U(331));var i=ye;for(ye|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:ha(8,d,s)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,E=d.return;if(Xw(d),d===c){q=null;break}if(m!==null){m.return=E,q=m;break}q=E}}}var T=s.alternate;if(T!==null){var x=T.child;if(x!==null){T.child=null;do{var D=x.sibling;x.sibling=null,x=D}while(x!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}var w=t.current;for(q=w;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=w;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xc(9,a)}}catch(j){He(a,a.return,j)}if(a===o){q=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,q=M;break e}q=a.return}}if(ye=i,ui(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(Wc,t)}catch{}r=!0}return r}finally{Se=n,fn.transition=e}}return!1}function Ky(t,e,n){e=Qs(n,e),e=Uw(t,e,1),t=Wr(t,e,1),e=Lt(),t!==null&&(il(t,1,e),Kt(t,e))}function He(t,e,n){if(t.tag===3)Ky(t,t,n);else for(;e!==null;){if(e.tag===3){Ky(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=Qs(n,t),t=zw(e,t,1),e=Wr(e,t,1),t=Lt(),e!==null&&(il(e,1,t),Kt(e,t));break}}e=e.return}}function Uk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(pt&n)===n&&(nt===4||nt===3&&(pt&130023424)===pt&&500>Qe()-lm?Pi(t,0):am|=n),Kt(t,e)}function aT(t,e){e===0&&(t.mode&1?(e=Ql,Ql<<=1,!(Ql&130023424)&&(Ql=4194304)):e=1);var n=Lt();t=ur(t,e),t!==null&&(il(t,e,n),Kt(t,n))}function zk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aT(t,n)}function Bk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),aT(t,n)}var lT;lT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ht.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,xk(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,je&&e.flags&1048576&&dw(e,Yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tu(t,e),t=e.pendingProps;var i=Hs(e,xt.current);Ms(e,n),i=tm(null,e,r,t,i,n);var s=nm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,Gu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yp(e),i.updater=Yc,e.stateNode=i,i._reactInternals=e,Tf(e,r,t,n),e=Cf(null,e,r,!0,s,n)):(e.tag=0,je&&s&&Wp(e),Mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$k(r),t=Tn(r,t),i){case 0:e=Sf(null,e,r,t,n);break e;case 1:e=Vy(null,e,r,t,n);break e;case 11:e=My(null,e,r,t,n);break e;case 14:e=Ly(null,e,r,Tn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Sf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Vy(t,e,r,i,n);case 3:e:{if(Hw(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yw(t,e),Zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qs(Error(U(423)),e),e=Fy(t,e,r,n,i);break e}else if(r!==i){i=Qs(Error(U(424)),e),e=Fy(t,e,r,n,i);break e}else for(Zt=Br(e.stateNode.containerInfo.firstChild),tn=e,je=!0,Sn=null,n=gw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),r===i){e=cr(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return vw(e),t===null&&vf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pf(r,i)?o=null:s!==null&&pf(r,s)&&(e.flags|=32),$w(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&vf(e),null;case 13:return qw(t,e,n);case 4:return Xp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ks(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),My(t,e,r,i,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,De(Xu,r._currentValue),r._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===i.children&&!Ht.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=rr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ef(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ms(e,n),i=pn(i),r=r(i),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,i=Tn(r,e.pendingProps),i=Tn(r.type,i),Ly(t,e,r,i,n);case 15:return Bw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Tu(t,e),e.tag=1,qt(r)?(t=!0,Gu(e)):t=!1,Ms(e,n),jw(e,r,i),Tf(e,r,i,n),Cf(null,e,r,!0,t,n);case 19:return Kw(t,e,n);case 22:return Ww(t,e,n)}throw Error(U(156,e.tag))};function uT(t,e){return LE(t,e)}function Wk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,e,n,r){return new Wk(t,e,n,r)}function dm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $k(t){if(typeof t=="function")return dm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Np)return 11;if(t===bp)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Ni(n.children,i,s,e);case Pp:o=8,i|=8;break;case Hd:return t=dn(12,n,e,i|2),t.elementType=Hd,t.lanes=s,t;case qd:return t=dn(13,n,e,i),t.elementType=qd,t.lanes=s,t;case Kd:return t=dn(19,n,e,i),t.elementType=Kd,t.lanes=s,t;case vE:return Zc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _E:o=10;break e;case yE:o=9;break e;case Np:o=11;break e;case bp:o=14;break e;case kr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=dn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ni(t,e,n,r){return t=dn(7,t,r,e),t.lanes=n,t}function Zc(t,e,n,r){return t=dn(22,t,r,e),t.elementType=vE,t.lanes=n,t.stateNode={isHidden:!1},t}function wd(t,e,n){return t=dn(6,t,null,e),t.lanes=n,t}function Td(t,e,n){return e=dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nd(0),this.expirationTimes=nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fm(t,e,n,r,i,s,o,a,u){return t=new Hk(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yp(s),t}function qk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cT(t){if(!t)return Zr;t=t._reactInternals;e:{if(Qi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(qt(n))return cw(t,n,e)}return e}function hT(t,e,n,r,i,s,o,a,u){return t=fm(n,r,!0,t,i,s,o,a,u),t.context=cT(null),n=t.current,r=Lt(),i=Hr(n),s=rr(r,i),s.callback=e??null,Wr(n,s,i),t.current.lanes=i,il(t,i,r),Kt(t,r),t}function eh(t,e,n,r){var i=e.current,s=Lt(),o=Hr(i);return n=cT(n),e.context===null?e.context=n:e.pendingContext=n,e=rr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wr(i,e,o),t!==null&&(xn(t,i,o,s),vu(t,i,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pm(t,e){Gy(t,e),(t=t.alternate)&&Gy(t,e)}function Kk(){return null}var dT=typeof reportError=="function"?reportError:function(t){console.error(t)};function mm(t){this._internalRoot=t}th.prototype.render=mm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));eh(t,e,null,null)};th.prototype.unmount=mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){eh(null,t,null,null)}),e[lr]=null}};function th(t){this._internalRoot=t}th.prototype.unstable_scheduleHydration=function(t){if(t){var e=WE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&HE(t)}};function gm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qy(){}function Gk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ac(o);s.call(c)}}var o=hT(e,r,t,0,null,!1,!1,"",Qy);return t._reactRootContainer=o,t[lr]=o.current,ba(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ac(u);a.call(c)}}var u=fm(t,0,!1,null,null,!1,!1,"",Qy);return t._reactRootContainer=u,t[lr]=u.current,ba(t.nodeType===8?t.parentNode:t),Vi(function(){eh(e,u,n,r)}),u}function rh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ac(o);a.call(u)}}eh(e,o,t,i)}else o=Gk(n,e,t,i,r);return ac(o)}zE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(Mp(e,n|1),Kt(e,Qe()),!(ye&6)&&(Ys=Qe()+500,ui()))}break;case 13:Vi(function(){var r=ur(t,1);if(r!==null){var i=Lt();xn(r,t,1,i)}}),pm(t,1)}};Lp=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Lt();xn(e,t,134217728,n)}pm(t,134217728)}};BE=function(t){if(t.tag===13){var e=Hr(t),n=ur(t,e);if(n!==null){var r=Lt();xn(n,t,e,r)}pm(t,e)}};WE=function(){return Se};$E=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};rf=function(t,e,n){switch(e){case"input":if(Yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kc(r);if(!i)throw Error(U(90));wE(r),Yd(r,i)}}}break;case"textarea":IE(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};PE=um;NE=Vi;var Qk={usingClientEntryPoint:!1,Events:[ol,ws,Kc,AE,xE,um]},Bo={findFiberByHostInstance:Si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yk={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=OE(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||Kk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Wc=ou.inject(Yk),Vn=ou}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qk;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gm(e))throw Error(U(200));return qk(t,e,null,n)};on.createRoot=function(t,e){if(!gm(t))throw Error(U(299));var n=!1,r="",i=dT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fm(t,1,!1,null,null,n,!1,r,i),t[lr]=e.current,ba(t.nodeType===8?t.parentNode:t),new mm(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=OE(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return Vi(t)};on.hydrate=function(t,e,n){if(!nh(e))throw Error(U(200));return rh(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!gm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hT(e,null,t,1,n??null,i,!1,s,o),t[lr]=e.current,ba(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new th(e)};on.render=function(t,e,n){if(!nh(e))throw Error(U(200));return rh(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!nh(t))throw Error(U(40));return t._reactRootContainer?(Vi(function(){rh(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};on.unstable_batchedUpdates=um;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return rh(t,e,n,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function fT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fT)}catch(t){console.error(t)}}fT(),fE.exports=on;var Xk=fE.exports,Yy=Xk;Wd.createRoot=Yy.createRoot,Wd.hydrateRoot=Yy.hydrateRoot;var Xy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw fo(e)},fo=function(t){return new Error("Firebase Database ("+pT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Zk;const m=s<<2|a>>4;if(r.push(m),c!==64){const E=a<<4&240|c>>2;if(r.push(E),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gT=function(t){const e=mT(t);return _m.encodeByteArray(e,!0)},lc=function(t){return gT(t).replace(/\./g,"")},uc=function(t){try{return _m.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t){return _T(void 0,t)}function _T(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tA(n)||(t[n]=_T(t[n],e[n]));return t}function tA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=()=>nA().__FIREBASE_DEFAULTS__,iA=()=>{if(typeof process>"u"||typeof Xy>"u")return;const t=Xy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uc(t[1]);return e&&JSON.parse(e)},ih=()=>{try{return rA()||iA()||sA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yT=t=>{var e,n;return(n=(e=ih())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vT=t=>{const e=yT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ET=()=>{var t;return(t=ih())===null||t===void 0?void 0:t.config},wT=t=>{var e;return(e=ih())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[lc(JSON.stringify(n)),lc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ym(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function oA(){var t;const e=(t=ih())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uA(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cA(){return pT.NODE_ADMIN===!0}function hA(){return!oA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dA(){try{return typeof indexedDB=="object"}catch{return!1}}function fA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="FirebaseError";class yr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pA,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ll.prototype.create)}}class ll{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yr(i,a,r)}}function mA(t,e){return t.replace(gA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return JSON.parse(t)}function lt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=za(uc(s[0])||""),n=za(uc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},_A=function(t){const e=ST(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yA=function(t){const e=ST(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function hc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jy(s)&&Jy(o)){if(!hc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function EA(t,e){const n=new wA(t,e);return n.subscribe.bind(n)}class wA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Id),i.error===void 0&&(i.error=Id),i.complete===void 0&&(i.complete=Id);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Id(){}function vm(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}class ei{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RA(e))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ti){return this.instances.has(e)}getOptions(e=Ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ti){return this.component?this.component.multipleInstances?e:Ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CA(t){return t===Ti?void 0:t}function RA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const AA={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},xA=pe.INFO,PA={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},NA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ah{constructor(e){this.name=e,this._logLevel=xA,this._logHandler=NA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const bA=(t,e)=>e.some(n=>t instanceof n);let Zy,ev;function DA(){return Zy||(Zy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OA(){return ev||(ev=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CT=new WeakMap,Ff=new WeakMap,RT=new WeakMap,Sd=new WeakMap,Em=new WeakMap;function MA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CT.set(n,t)}).catch(()=>{}),Em.set(e,t),e}function LA(t){if(Ff.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ff.set(t,e)}let jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ff.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VA(t){jf=t(jf)}function FA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cd(this),e,...n);return RT.set(r,e.sort?e.sort():[e]),Kr(r)}:OA().includes(t)?function(...e){return t.apply(Cd(this),e),Kr(CT.get(this))}:function(...e){return Kr(t.apply(Cd(this),e))}}function jA(t){return typeof t=="function"?FA(t):(t instanceof IDBTransaction&&LA(t),bA(t,DA())?new Proxy(t,jf):t)}function Kr(t){if(t instanceof IDBRequest)return MA(t);if(Sd.has(t))return Sd.get(t);const e=jA(t);return e!==t&&(Sd.set(t,e),Em.set(e,t)),e}const Cd=t=>Em.get(t);function UA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Kr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Kr(o.result),u.oldVersion,u.newVersion,Kr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const zA=["get","getKey","getAll","getAllKeys","count"],BA=["put","add","delete","clear"],Rd=new Map;function tv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rd.get(e))return Rd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zA.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Rd.set(e,s),s}VA(t=>({...t,get:(e,n,r)=>tv(e,n)||t.get(e,n,r),has:(e,n)=>!!tv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($A(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $A(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uf="@firebase/app",nv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new ah("@firebase/app"),HA="@firebase/app-compat",qA="@firebase/analytics-compat",KA="@firebase/analytics",GA="@firebase/app-check-compat",QA="@firebase/app-check",YA="@firebase/auth",XA="@firebase/auth-compat",JA="@firebase/database",ZA="@firebase/data-connect",ex="@firebase/database-compat",tx="@firebase/functions",nx="@firebase/functions-compat",rx="@firebase/installations",ix="@firebase/installations-compat",sx="@firebase/messaging",ox="@firebase/messaging-compat",ax="@firebase/performance",lx="@firebase/performance-compat",ux="@firebase/remote-config",cx="@firebase/remote-config-compat",hx="@firebase/storage",dx="@firebase/storage-compat",fx="@firebase/firestore",px="@firebase/vertexai-preview",mx="@firebase/firestore-compat",gx="firebase",_x="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="[DEFAULT]",yx={[Uf]:"fire-core",[HA]:"fire-core-compat",[KA]:"fire-analytics",[qA]:"fire-analytics-compat",[QA]:"fire-app-check",[GA]:"fire-app-check-compat",[YA]:"fire-auth",[XA]:"fire-auth-compat",[JA]:"fire-rtdb",[ZA]:"fire-data-connect",[ex]:"fire-rtdb-compat",[tx]:"fire-fn",[nx]:"fire-fn-compat",[rx]:"fire-iid",[ix]:"fire-iid-compat",[sx]:"fire-fcm",[ox]:"fire-fcm-compat",[ax]:"fire-perf",[lx]:"fire-perf-compat",[ux]:"fire-rc",[cx]:"fire-rc-compat",[hx]:"fire-gcs",[dx]:"fire-gcs-compat",[fx]:"fire-fst",[mx]:"fire-fst-compat",[px]:"fire-vertex","fire-js":"fire-js",[gx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Map,vx=new Map,Bf=new Map;function rv(t,e){try{t.container.addComponent(e)}catch(n){hr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fi(t){const e=t.name;if(Bf.has(e))return hr.debug(`There were multiple attempts to register component ${e}.`),!1;Bf.set(e,t);for(const n of dc.values())rv(n,t);for(const n of vx.values())rv(n,t);return!0}function lh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new ll("app","Firebase",Ex);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=_x;function kT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gr.create("bad-app-name",{appName:String(i)});if(n||(n=ET()),!n)throw Gr.create("no-options");const s=dc.get(i);if(s){if(hc(n,s.options)&&hc(r,s.config))return s;throw Gr.create("duplicate-app",{appName:i})}const o=new kA(i);for(const u of Bf.values())o.addComponent(u);const a=new wx(n,r,o);return dc.set(i,a),a}function wm(t=zf){const e=dc.get(t);if(!e&&t===zf&&ET())return kT();if(!e)throw Gr.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let i=(r=yx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hr.warn(a.join(" "));return}Fi(new ei(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="firebase-heartbeat-database",Ix=1,Ba="firebase-heartbeat-store";let kd=null;function AT(){return kd||(kd=UA(Tx,Ix,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ba)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),kd}async function Sx(t){try{const n=(await AT()).transaction(Ba),r=await n.objectStore(Ba).get(xT(t));return await n.done,r}catch(e){if(e instanceof yr)hr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hr.warn(n.message)}}}async function iv(t,e){try{const r=(await AT()).transaction(Ba,"readwrite");await r.objectStore(Ba).put(e,xT(t)),await r.done}catch(n){if(n instanceof yr)hr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hr.warn(r.message)}}}function xT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=1024,Rx=30*24*60*60*1e3;class kx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Rx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){hr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sv(),{heartbeatsToSend:r,unsentEntries:i}=Ax(this._heartbeatsCache.heartbeats),s=lc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return hr.warn(n),""}}}function sv(){return new Date().toISOString().substring(0,10)}function Ax(t,e=Cx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ov(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ov(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dA()?fA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ov(t){return lc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t){Fi(new ei("platform-logger",e=>new WA(e),"PRIVATE")),Fi(new ei("heartbeat",e=>new kx(e),"PRIVATE")),jn(Uf,nv,t),jn(Uf,nv,"esm2017"),jn("fire-js","")}Px("");function Tm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function PT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nx=PT,NT=new ll("auth","Firebase",PT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new ah("@firebase/auth");function bx(t,...e){fc.logLevel<=pe.WARN&&fc.warn(`Auth (${Yi}): ${t}`,...e)}function Ru(t,...e){fc.logLevel<=pe.ERROR&&fc.error(`Auth (${Yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw Im(t,...e)}function Un(t,...e){return Im(t,...e)}function bT(t,e,n){const r=Object.assign(Object.assign({},Nx()),{[e]:n});return new ll("auth","Firebase",r).create(e,{appName:t.name})}function ir(t){return bT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Im(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NT.create(t,...e)}function ee(t,e,...n){if(!t)throw Im(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ru(e),new Error(e)}function dr(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dx(){return av()==="http:"||av()==="https:"}function av(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dx()||lA()||"connection"in navigator)?navigator.onLine:!0}function Mx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=ym()||IT()}get(){return Ox()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t,e){dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=new ul(3e4,6e4);function ci(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Er(t,e,n,r,i={}){return OT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=po(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return aA()||(c.referrerPolicy="no-referrer"),DT.fetch()(MT(t,t.config.apiHost,n,a),c)})}async function OT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lx),e);try{const i=new jx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw au(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw au(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw au(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bT(t,d,c);bn(t,d)}}catch(i){if(i instanceof yr)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function cl(t,e,n,r,i={}){const s=await Er(t,e,n,r,i);return"mfaPendingCredential"in s&&bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function MT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sm(t.config,i):`${t.config.apiScheme}://${i}`}function Fx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Un(this.auth,"network-request-failed")),Vx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Un(t,e,r);return i.customData._tokenResponse=n,i}function lv(t){return t!==void 0&&t.enterprise!==void 0}class Ux{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zx(t,e){return Er(t,"GET","/v2/recaptchaConfig",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bx(t,e){return Er(t,"POST","/v1/accounts:delete",e)}async function LT(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wx(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=Cm(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pa(Ad(i.auth_time)),issuedAtTime:pa(Ad(i.iat)),expirationTime:pa(Ad(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ad(t){return Number(t)*1e3}function Cm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const i=uc(n);return i?JSON.parse(i):(Ru("Failed to decode base64 JWT payload"),null)}catch(i){return Ru("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uv(t){const e=Cm(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yr&&$x(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $x({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pa(this.lastLoginAt),this.creationTime=pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Js(t,LT(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?VT(s.providerUserInfo):[],a=Kx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $f(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function qx(t){const e=xe(t);await pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function VT(t){return t.map(e=>{var{providerId:n}=e,r=Tm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(t,e){const n=await OT(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=MT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",DT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Qx(t,e){return Er(t,"POST","/v2/accounts:revokeToken",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=uv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Gx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vs;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Tm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $f(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wx(this,e)}reload(){return qx(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await Js(this,Bx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:A,emailVerified:M,isAnonymous:j,providerData:z,stsTokenManager:I}=n;ee(A&&I,e,"internal-error");const v=Vs.fromJSON(this.name,I);ee(typeof A=="string",e,"internal-error"),Rr(f,e.name),Rr(m,e.name),ee(typeof M=="boolean",e,"internal-error"),ee(typeof j=="boolean",e,"internal-error"),Rr(E,e.name),Rr(T,e.name),Rr(x,e.name),Rr(D,e.name),Rr(S,e.name),Rr(w,e.name);const C=new er({uid:A,auth:e,email:m,emailVerified:M,displayName:f,isAnonymous:j,photoURL:T,phoneNumber:E,tenantId:x,stsTokenManager:v,createdAt:S,lastLoginAt:w});return z&&Array.isArray(z)&&(C.providerData=z.map(k=>Object.assign({},k))),D&&(C._redirectEventId=D),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vs;i.updateFromServerResponse(n);const s=new er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?VT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Vs;a.updateFromIdToken(r);const u=new er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $f(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Map;function tr(t){dr(t instanceof Function,"Expected a class definition");let e=cv.get(t);return e?(dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FT.type="NONE";const hv=FT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ku(this.userKey,i.apiKey,s),this.fullPersistenceKey=ku("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(tr(hv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||tr(hv);const o=ku(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=er._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Fs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Fs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($T(e))return"Blackberry";if(HT(e))return"Webos";if(UT(e))return"Safari";if((e.includes("chrome/")||zT(e))&&!e.includes("edge/"))return"Chrome";if(WT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jT(t=Pt()){return/firefox\//i.test(t)}function UT(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zT(t=Pt()){return/crios\//i.test(t)}function BT(t=Pt()){return/iemobile/i.test(t)}function WT(t=Pt()){return/android/i.test(t)}function $T(t=Pt()){return/blackberry/i.test(t)}function HT(t=Pt()){return/webos/i.test(t)}function Rm(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yx(t=Pt()){var e;return Rm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xx(){return uA()&&document.documentMode===10}function qT(t=Pt()){return Rm(t)||WT(t)||HT(t)||$T(t)||/windows phone/i.test(t)||BT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t,e=[]){let n;switch(t){case"Browser":n=dv(Pt());break;case"Worker":n=`${dv(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(t,e={}){return Er(t,"GET","/v2/passwordPolicy",ci(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=6;class tP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fv(this),this.idTokenSubscription=new fv(this),this.beforeStateQueue=new Jx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await LT(this,{idToken:e}),r=await er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(ir(this));const n=e?xe(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zx(this),n=new tP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ll("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xi(t){return xe(t)}class fv{constructor(e){this.auth=e,this.observer=null,this.addObserver=EA(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rP(t){uh=t}function GT(t){return uh.loadJS(t)}function iP(){return uh.recaptchaEnterpriseScript}function sP(){return uh.gapiScript}function oP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const aP="recaptcha-enterprise",lP="NO_RECAPTCHA";class uP{constructor(e){this.type=aP,this.auth=Xi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ux(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;lv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(lP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&lv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=iP();u.length!==0&&(u+=a),GT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function pv(t,e,n,r=!1){const i=new uP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await pv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await pv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t,e){const n=lh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hc(s,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function hP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dP(t,e,n){const r=Xi(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=QT(e),{host:o,port:a}=fP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),pP()}function QT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fP(t){const e=QT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mv(o)}}}function mv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function mP(t,e){return Er(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e){return cl(t,"POST","/v1/accounts:signInWithPassword",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",ci(t,e))}async function yP(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends km{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hf(e,n,"signInWithPassword",gP);case"emailLink":return _P(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hf(e,r,"signUpPassword",mP);case"emailLink":return yP(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return cl(t,"POST","/v1/accounts:signInWithIdp",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="http://localhost";class ji extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Tm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ji(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:vP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wP(t){const e=Zo(ea(t)).link,n=e?Zo(ea(e)).deep_link_id:null,r=Zo(ea(t)).deep_link_id;return(r?Zo(ea(r)).link:null)||r||n||e||t}class Am{constructor(e){var n,r,i,s,o,a;const u=Zo(ea(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=EP((i=u.mode)!==null&&i!==void 0?i:null);ee(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=wP(e);try{return new Am(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.providerId=mo.PROVIDER_ID}static credential(e,n){return Wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Am.parseLink(n);return ee(r,"argument-error"),Wa._fromEmailAndCode(e,r.code,r.tenantId)}}mo.PROVIDER_ID="password";mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends YT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends hl{constructor(){super("facebook.com")}static credential(e){return ji._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ji._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends hl{constructor(){super("github.com")}static credential(e){return ji._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.GITHUB_SIGN_IN_METHOD="github.com";Dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends hl{constructor(){super("twitter.com")}static credential(e,n){return ji._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e){return cl(t,"POST","/v1/accounts:signUp",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await er._fromIdTokenResponse(e,r,i),o=gv(r);return new Ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gv(r);return new Ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends yr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new mc(e,n,r,i)}}function XT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(t,s,e,r):s})}async function IP(t,e,n=!1){const r=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(ir(r));const i="reauthenticate";try{const s=await Js(t,XT(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=Cm(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(t,e,n=!1){if(Ln(t.app))return Promise.reject(ir(t));const r="signIn",i=await XT(t,r,e),s=await Ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function CP(t,e){return JT(Xi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t){const e=Xi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RP(t,e,n){if(Ln(t.app))return Promise.reject(ir(t));const r=Xi(t),o=await Hf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ZT(t),u}),a=await Ui._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function kP(t,e,n){return Ln(t.app)?Promise.reject(ir(t)):CP(xe(t),mo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ZT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e){return Er(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=xe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Js(r,AP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function PP(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function NP(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function bP(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function DP(t){return xe(t).signOut()}const gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=1e3,MP=10;class tI extends eI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Xx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tI.type="LOCAL";const LP=tI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI extends eI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nI.type="SESSION";const rI=nI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ch(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await VP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ch.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=xm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return window}function jP(t){zn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(){return typeof zn().WorkerGlobalScope<"u"&&typeof zn().importScripts=="function"}async function UP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BP(){return iI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="firebaseLocalStorageDb",WP=1,_c="firebaseLocalStorage",oI="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hh(t,e){return t.transaction([_c],e?"readwrite":"readonly").objectStore(_c)}function $P(){const t=indexedDB.deleteDatabase(sI);return new dl(t).toPromise()}function qf(){const t=indexedDB.open(sI,WP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_c,{keyPath:oI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_c)?e(r):(r.close(),await $P(),e(await qf()))})})}async function _v(t,e,n){const r=hh(t,!0).put({[oI]:e,value:n});return new dl(r).toPromise()}async function HP(t,e){const n=hh(t,!1).get(e),r=await new dl(n).toPromise();return r===void 0?null:r.value}function yv(t,e){const n=hh(t,!0).delete(e);return new dl(n).toPromise()}const qP=800,KP=3;class aI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ch._getInstance(BP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UP(),!this.activeServiceWorker)return;this.sender=new FP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qf();return await _v(e,gc,"1"),await yv(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_v(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hh(i,!1).getAll();return new dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aI.type="LOCAL";const GP=aI;new ul(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t,e){return e?tr(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YP(t){return JT(t.auth,new Pm(t),t.bypassAuthState)}function XP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),SP(n,new Pm(t),t.bypassAuthState)}async function JP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),IP(n,new Pm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YP;case"linkViaPopup":case"linkViaRedirect":return JP;case"reauthViaPopup":case"reauthViaRedirect":return XP;default:bn(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=new ul(2e3,1e4);class As extends lI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=xm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZP.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN="pendingRedirect",Au=new Map;class tN extends lI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const r=await nN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nN(t,e){const n=sN(e),r=iN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rN(t,e){Au.set(t._key(),e)}function iN(t){return tr(t._redirectPersistence)}function sN(t){return ku(eN,t.config.apiKey,t.name)}async function oN(t,e,n=!1){if(Ln(t.app))return Promise.reject(ir(t));const r=Xi(t),i=QP(r,e),o=await new tN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=10*60*1e3;class lN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aN&&this.cachedEventUids.clear(),this.cachedEventUids.has(vv(e))}saveEventToCache(e){this.cachedEventUids.add(vv(e)),this.lastProcessedEventTime=Date.now()}}function vv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(t,e={}){return Er(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dN=/^https?/;async function fN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cN(t);for(const n of e)try{if(pN(n))return}catch{}bn(t,"unauthorized-domain")}function pN(t){const e=Wf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dN.test(n))return!1;if(hN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=new ul(3e4,6e4);function Ev(){const t=zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gN(t){return new Promise((e,n)=>{var r,i,s;function o(){Ev(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ev(),n(Un(t,"network-request-failed"))},timeout:mN.get()})}if(!((i=(r=zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zn().gapi)===null||s===void 0)&&s.load)o();else{const a=oP("iframefcb");return zn()[a]=()=>{gapi.load?o():n(Un(t,"network-request-failed"))},GT(`${sP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw xu=null,e})}let xu=null;function _N(t){return xu=xu||gN(t),xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=new ul(5e3,15e3),vN="__/auth/iframe",EN="emulator/auth/iframe",wN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IN(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sm(e,EN):`https://${t.config.authDomain}/${vN}`,r={apiKey:e.apiKey,appName:t.name,v:Yi},i=TN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${po(r).slice(1)}`}async function SN(t){const e=await _N(t),n=zn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:IN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Un(t,"network-request-failed"),a=zn().setTimeout(()=>{s(o)},yN.get());function u(){zn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RN=500,kN=600,AN="_blank",xN="http://localhost";class wv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PN(t,e,n,r=RN,i=kN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},CN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Pt().toLowerCase();n&&(a=zT(c)?AN:n),jT(c)&&(e=e||xN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,T])=>`${m}${E}=${T},`,"");if(Yx(c)&&a!=="_self")return NN(e||"",a),new wv(null);const f=window.open(e||"",a,d);ee(f,t,"popup-blocked");try{f.focus()}catch{}return new wv(f)}function NN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="__/auth/handler",DN="emulator/auth/handler",ON=encodeURIComponent("fac");async function Tv(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yi,eventId:i};if(e instanceof YT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof hl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${ON}=${encodeURIComponent(u)}`:"";return`${MN(t)}?${po(a).slice(1)}${c}`}function MN({config:t}){return t.emulator?Sm(t,DN):`https://${t.authDomain}/${bN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="webStorageSupport";class LN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rI,this._completeRedirectFn=oN,this._overrideRedirectResult=rN}async _openPopup(e,n,r,i){var s;dr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Tv(e,n,r,Wf(),i);return PN(e,o,xm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Tv(e,n,r,Wf(),i);return jP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SN(e),r=new lN(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xd,{type:xd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xd];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qT()||UT()||Rm()}}const VN=LN;var Iv="@firebase/auth",Sv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UN(t){Fi(new ei("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KT(t)},c=new nP(r,i,s,u);return hP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fi(new ei("auth-internal",e=>{const n=Xi(e.getProvider("auth").getImmediate());return(r=>new FN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Iv,Sv,jN(t)),jn(Iv,Sv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=5*60,BN=wT("authIdTokenMaxAge")||zN;let Cv=null;const WN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BN)return;const i=n==null?void 0:n.token;Cv!==i&&(Cv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $N(t=wm()){const e=lh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cP(t,{popupRedirectResolver:VN,persistence:[GP,LP,rI]}),r=wT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=WN(s.toString());NP(n,o,()=>o(n.currentUser)),PP(n,a=>o(a))}}const i=yT("auth");return i&&dP(n,`http://${i}`),n}function HN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UN("Browser");var Rv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bi,cI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function C(){}C.prototype=v.prototype,I.D=v.prototype,I.prototype=new C,I.prototype.constructor=I,I.C=function(k,P,N){for(var R=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)R[Nt-2]=arguments[Nt];return v.prototype[P].apply(k,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,C){C||(C=0);var k=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)k[P]=v.charCodeAt(C++)|v.charCodeAt(C++)<<8|v.charCodeAt(C++)<<16|v.charCodeAt(C++)<<24;else for(P=0;16>P;++P)k[P]=v[C++]|v[C++]<<8|v[C++]<<16|v[C++]<<24;v=I.g[0],C=I.g[1],P=I.g[2];var N=I.g[3],R=v+(N^C&(P^N))+k[0]+3614090360&4294967295;v=C+(R<<7&4294967295|R>>>25),R=N+(P^v&(C^P))+k[1]+3905402710&4294967295,N=v+(R<<12&4294967295|R>>>20),R=P+(C^N&(v^C))+k[2]+606105819&4294967295,P=N+(R<<17&4294967295|R>>>15),R=C+(v^P&(N^v))+k[3]+3250441966&4294967295,C=P+(R<<22&4294967295|R>>>10),R=v+(N^C&(P^N))+k[4]+4118548399&4294967295,v=C+(R<<7&4294967295|R>>>25),R=N+(P^v&(C^P))+k[5]+1200080426&4294967295,N=v+(R<<12&4294967295|R>>>20),R=P+(C^N&(v^C))+k[6]+2821735955&4294967295,P=N+(R<<17&4294967295|R>>>15),R=C+(v^P&(N^v))+k[7]+4249261313&4294967295,C=P+(R<<22&4294967295|R>>>10),R=v+(N^C&(P^N))+k[8]+1770035416&4294967295,v=C+(R<<7&4294967295|R>>>25),R=N+(P^v&(C^P))+k[9]+2336552879&4294967295,N=v+(R<<12&4294967295|R>>>20),R=P+(C^N&(v^C))+k[10]+4294925233&4294967295,P=N+(R<<17&4294967295|R>>>15),R=C+(v^P&(N^v))+k[11]+2304563134&4294967295,C=P+(R<<22&4294967295|R>>>10),R=v+(N^C&(P^N))+k[12]+1804603682&4294967295,v=C+(R<<7&4294967295|R>>>25),R=N+(P^v&(C^P))+k[13]+4254626195&4294967295,N=v+(R<<12&4294967295|R>>>20),R=P+(C^N&(v^C))+k[14]+2792965006&4294967295,P=N+(R<<17&4294967295|R>>>15),R=C+(v^P&(N^v))+k[15]+1236535329&4294967295,C=P+(R<<22&4294967295|R>>>10),R=v+(P^N&(C^P))+k[1]+4129170786&4294967295,v=C+(R<<5&4294967295|R>>>27),R=N+(C^P&(v^C))+k[6]+3225465664&4294967295,N=v+(R<<9&4294967295|R>>>23),R=P+(v^C&(N^v))+k[11]+643717713&4294967295,P=N+(R<<14&4294967295|R>>>18),R=C+(N^v&(P^N))+k[0]+3921069994&4294967295,C=P+(R<<20&4294967295|R>>>12),R=v+(P^N&(C^P))+k[5]+3593408605&4294967295,v=C+(R<<5&4294967295|R>>>27),R=N+(C^P&(v^C))+k[10]+38016083&4294967295,N=v+(R<<9&4294967295|R>>>23),R=P+(v^C&(N^v))+k[15]+3634488961&4294967295,P=N+(R<<14&4294967295|R>>>18),R=C+(N^v&(P^N))+k[4]+3889429448&4294967295,C=P+(R<<20&4294967295|R>>>12),R=v+(P^N&(C^P))+k[9]+568446438&4294967295,v=C+(R<<5&4294967295|R>>>27),R=N+(C^P&(v^C))+k[14]+3275163606&4294967295,N=v+(R<<9&4294967295|R>>>23),R=P+(v^C&(N^v))+k[3]+4107603335&4294967295,P=N+(R<<14&4294967295|R>>>18),R=C+(N^v&(P^N))+k[8]+1163531501&4294967295,C=P+(R<<20&4294967295|R>>>12),R=v+(P^N&(C^P))+k[13]+2850285829&4294967295,v=C+(R<<5&4294967295|R>>>27),R=N+(C^P&(v^C))+k[2]+4243563512&4294967295,N=v+(R<<9&4294967295|R>>>23),R=P+(v^C&(N^v))+k[7]+1735328473&4294967295,P=N+(R<<14&4294967295|R>>>18),R=C+(N^v&(P^N))+k[12]+2368359562&4294967295,C=P+(R<<20&4294967295|R>>>12),R=v+(C^P^N)+k[5]+4294588738&4294967295,v=C+(R<<4&4294967295|R>>>28),R=N+(v^C^P)+k[8]+2272392833&4294967295,N=v+(R<<11&4294967295|R>>>21),R=P+(N^v^C)+k[11]+1839030562&4294967295,P=N+(R<<16&4294967295|R>>>16),R=C+(P^N^v)+k[14]+4259657740&4294967295,C=P+(R<<23&4294967295|R>>>9),R=v+(C^P^N)+k[1]+2763975236&4294967295,v=C+(R<<4&4294967295|R>>>28),R=N+(v^C^P)+k[4]+1272893353&4294967295,N=v+(R<<11&4294967295|R>>>21),R=P+(N^v^C)+k[7]+4139469664&4294967295,P=N+(R<<16&4294967295|R>>>16),R=C+(P^N^v)+k[10]+3200236656&4294967295,C=P+(R<<23&4294967295|R>>>9),R=v+(C^P^N)+k[13]+681279174&4294967295,v=C+(R<<4&4294967295|R>>>28),R=N+(v^C^P)+k[0]+3936430074&4294967295,N=v+(R<<11&4294967295|R>>>21),R=P+(N^v^C)+k[3]+3572445317&4294967295,P=N+(R<<16&4294967295|R>>>16),R=C+(P^N^v)+k[6]+76029189&4294967295,C=P+(R<<23&4294967295|R>>>9),R=v+(C^P^N)+k[9]+3654602809&4294967295,v=C+(R<<4&4294967295|R>>>28),R=N+(v^C^P)+k[12]+3873151461&4294967295,N=v+(R<<11&4294967295|R>>>21),R=P+(N^v^C)+k[15]+530742520&4294967295,P=N+(R<<16&4294967295|R>>>16),R=C+(P^N^v)+k[2]+3299628645&4294967295,C=P+(R<<23&4294967295|R>>>9),R=v+(P^(C|~N))+k[0]+4096336452&4294967295,v=C+(R<<6&4294967295|R>>>26),R=N+(C^(v|~P))+k[7]+1126891415&4294967295,N=v+(R<<10&4294967295|R>>>22),R=P+(v^(N|~C))+k[14]+2878612391&4294967295,P=N+(R<<15&4294967295|R>>>17),R=C+(N^(P|~v))+k[5]+4237533241&4294967295,C=P+(R<<21&4294967295|R>>>11),R=v+(P^(C|~N))+k[12]+1700485571&4294967295,v=C+(R<<6&4294967295|R>>>26),R=N+(C^(v|~P))+k[3]+2399980690&4294967295,N=v+(R<<10&4294967295|R>>>22),R=P+(v^(N|~C))+k[10]+4293915773&4294967295,P=N+(R<<15&4294967295|R>>>17),R=C+(N^(P|~v))+k[1]+2240044497&4294967295,C=P+(R<<21&4294967295|R>>>11),R=v+(P^(C|~N))+k[8]+1873313359&4294967295,v=C+(R<<6&4294967295|R>>>26),R=N+(C^(v|~P))+k[15]+4264355552&4294967295,N=v+(R<<10&4294967295|R>>>22),R=P+(v^(N|~C))+k[6]+2734768916&4294967295,P=N+(R<<15&4294967295|R>>>17),R=C+(N^(P|~v))+k[13]+1309151649&4294967295,C=P+(R<<21&4294967295|R>>>11),R=v+(P^(C|~N))+k[4]+4149444226&4294967295,v=C+(R<<6&4294967295|R>>>26),R=N+(C^(v|~P))+k[11]+3174756917&4294967295,N=v+(R<<10&4294967295|R>>>22),R=P+(v^(N|~C))+k[2]+718787259&4294967295,P=N+(R<<15&4294967295|R>>>17),R=C+(N^(P|~v))+k[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var C=v-this.blockSize,k=this.B,P=this.h,N=0;N<v;){if(P==0)for(;N<=C;)i(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<v;)if(k[P++]=I.charCodeAt(N++),P==this.blockSize){i(this,k),P=0;break}}else for(;N<v;)if(k[P++]=I[N++],P==this.blockSize){i(this,k),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var C=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=C&255,C/=256;for(this.u(I),I=Array(16),v=C=0;4>v;++v)for(var k=0;32>k;k+=8)I[C++]=this.g[v]>>>k&255;return I};function s(I,v){var C=a;return Object.prototype.hasOwnProperty.call(C,I)?C[I]:C[I]=v(I)}function o(I,v){this.h=v;for(var C=[],k=!0,P=I.length-1;0<=P;P--){var N=I[P]|0;k&&N==v||(C[P]=N,k=!1)}this.g=C}var a={};function u(I){return-128<=I&&128>I?s(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return D(c(-I));for(var v=[],C=1,k=0;I>=C;k++)v[k]=I/C|0,C*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return D(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(v,8)),k=f,P=0;P<I.length;P+=8){var N=Math.min(8,I.length-P),R=parseInt(I.substring(P,P+N),v);8>N?(N=c(Math.pow(v,N)),k=k.j(N).add(c(R))):(k=k.j(C),k=k.add(c(R)))}return k}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-D(this).m();for(var I=0,v=1,C=0;C<this.g.length;C++){var k=this.i(C);I+=(0<=k?k:4294967296+k)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T(this))return"0";if(x(this))return"-"+D(this).toString(I);for(var v=c(Math.pow(I,6)),C=this,k="";;){var P=M(C,v).g;C=S(C,P.j(v));var N=((0<C.g.length?C.g[0]:C.h)>>>0).toString(I);if(C=P,T(C))return N+k;for(;6>N.length;)N="0"+N;k=N+k}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function T(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=S(this,I),x(I)?-1:T(I)?0:1};function D(I){for(var v=I.g.length,C=[],k=0;k<v;k++)C[k]=~I.g[k];return new o(C,~I.h).add(m)}t.abs=function(){return x(this)?D(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),C=[],k=0,P=0;P<=v;P++){var N=k+(this.i(P)&65535)+(I.i(P)&65535),R=(N>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);k=R>>>16,N&=65535,R&=65535,C[P]=R<<16|N}return new o(C,C[C.length-1]&-2147483648?-1:0)};function S(I,v){return I.add(D(v))}t.j=function(I){if(T(this)||T(I))return f;if(x(this))return x(I)?D(this).j(D(I)):D(D(this).j(I));if(x(I))return D(this.j(D(I)));if(0>this.l(E)&&0>I.l(E))return c(this.m()*I.m());for(var v=this.g.length+I.g.length,C=[],k=0;k<2*v;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var P=0;P<I.g.length;P++){var N=this.i(k)>>>16,R=this.i(k)&65535,Nt=I.i(P)>>>16,gn=I.i(P)&65535;C[2*k+2*P]+=R*gn,w(C,2*k+2*P),C[2*k+2*P+1]+=N*gn,w(C,2*k+2*P+1),C[2*k+2*P+1]+=R*Nt,w(C,2*k+2*P+1),C[2*k+2*P+2]+=N*Nt,w(C,2*k+2*P+2)}for(k=0;k<v;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=v;k<2*v;k++)C[k]=0;return new o(C,0)};function w(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function A(I,v){this.g=I,this.h=v}function M(I,v){if(T(v))throw Error("division by zero");if(T(I))return new A(f,f);if(x(I))return v=M(D(I),v),new A(D(v.g),D(v.h));if(x(v))return v=M(I,D(v)),new A(D(v.g),v.h);if(30<I.g.length){if(x(I)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var C=m,k=v;0>=k.l(I);)C=j(C),k=j(k);var P=z(C,1),N=z(k,1);for(k=z(k,2),C=z(C,2);!T(k);){var R=N.add(k);0>=R.l(I)&&(P=P.add(C),N=R),k=z(k,1),C=z(C,1)}return v=S(I,P.j(v)),new A(P,v)}for(P=f;0<=I.l(v);){for(C=Math.max(1,Math.floor(I.m()/v.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),N=c(C),R=N.j(v);x(R)||0<R.l(I);)C-=k,N=c(C),R=N.j(v);T(N)&&(N=m),P=P.add(N),I=S(I,R)}return new A(P,I)}t.A=function(I){return M(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),C=[],k=0;k<v;k++)C[k]=this.i(k)&I.i(k);return new o(C,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),C=[],k=0;k<v;k++)C[k]=this.i(k)|I.i(k);return new o(C,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),C=[],k=0;k<v;k++)C[k]=this.i(k)^I.i(k);return new o(C,this.h^I.h)};function j(I){for(var v=I.g.length+1,C=[],k=0;k<v;k++)C[k]=I.i(k)<<1|I.i(k-1)>>>31;return new o(C,I.h)}function z(I,v){var C=v>>5;v%=32;for(var k=I.g.length-C,P=[],N=0;N<k;N++)P[N]=0<v?I.i(N+C)>>>v|I.i(N+C+1)<<32-v:I.i(N+C);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,bi=o}).apply(typeof Rv<"u"?Rv:typeof self<"u"?self:typeof window<"u"?window:{});var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hI,ta,dI,Pu,Kf,fI,pI,mI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof lu=="object"&&lu];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var b=l[_];if(!(b in p))break e;p=p[b]}l=l[l.length-1],_=p[l],h=h(_),h!=_&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,_=!1,b={next:function(){if(!_&&p<l.length){var O=p++;return{value:h(O,l[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,_),l.apply(h,b)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function E(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function T(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,b,O){for(var W=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)W[Ae-2]=arguments[Ae];return h.prototype[b].apply(_,W)}}function x(l){const h=l.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=l[_];return p}return[]}function D(l,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const b=l.length||0,O=_.length||0;l.length=b+O;for(let W=0;W<O;W++)l[b+W]=_[W]}else l.push(_)}}class S{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function M(l){return M[" "](l),l}M[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function z(l,h,p){for(const _ in l)h.call(p,l[_],_,l)}function I(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function v(l){const h={};for(const p in l)h[p]=l[p];return h}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,h){let p,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(p in _)l[p]=_[p];for(let O=0;O<C.length;O++)p=C[O],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function P(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function R(){var l=Z;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Nt{constructor(){this.h=this.g=null}add(h,p){const _=gn.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var gn=new S(()=>new fi,l=>l.reset());class fi{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let _n,$=!1,Z=new Nt,ie=()=>{const l=a.Promise.resolve(void 0);_n=()=>{l.then(ve)}};var ve=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(p){N(p)}var h=gn;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}$=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var yn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function vn(l,h){if(Fe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{M(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ln[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&vn.aa.h.call(this)}}T(vn,Fe);var ln={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var bt="closure_listenable_"+(1e6*Math.random()|0),Oh=0;function kl(l,h,p,_,b){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=b,this.key=++Oh,this.da=this.fa=!1}function pi(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ts(l){this.src=l,this.g={},this.h=0}ts.prototype.add=function(l,h,p,_,b){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var W=Al(l,h,_,b);return-1<W?(h=l[W],p||(h.fa=!1)):(h=new kl(h,this.src,O,!!_,b),h.fa=p,l.push(h)),h};function ns(l,h){var p=h.type;if(p in l.g){var _=l.g[p],b=Array.prototype.indexOf.call(_,h,void 0),O;(O=0<=b)&&Array.prototype.splice.call(_,b,1),O&&(pi(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Al(l,h,p,_){for(var b=0;b<l.length;++b){var O=l[b];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==_)return b}return-1}var wr="closure_lm_"+(1e6*Math.random()|0),L={};function H(l,h,p,_,b){if(Array.isArray(h)){for(var O=0;O<h.length;O++)H(l,h[O],p,_,b);return null}return p=yt(p),l&&l[bt]?l.K(h,p,c(_)?!!_.capture:!1,b):ne(l,h,p,!1,_,b)}function ne(l,h,p,_,b,O){if(!h)throw Error("Invalid event type");var W=c(b)?!!b.capture:!!b,Ae=Ne(l);if(Ae||(l[wr]=Ae=new ts(l)),p=Ae.add(h,p,_,W,O),p.proxy)return p;if(_=Q(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)yn||(b=W),b===void 0&&(b=!1),l.addEventListener(h.toString(),_,b);else if(l.attachEvent)l.attachEvent(ge(h.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Q(){function l(p){return h.call(l.src,l.listener,p)}const h=Re;return l}function K(l,h,p,_,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)K(l,h[O],p,_,b);else _=c(_)?!!_.capture:!!_,p=yt(p),l&&l[bt]?(l=l.i,h=String(h).toString(),h in l.g&&(O=l.g[h],p=Al(O,p,_,b),-1<p&&(pi(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[h],l.h--)))):l&&(l=Ne(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Al(h,p,_,b)),(p=-1<l?h[l]:null)&&ae(p))}function ae(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[bt])ns(h.i,l);else{var p=l.type,_=l.proxy;h.removeEventListener?h.removeEventListener(p,_,l.capture):h.detachEvent?h.detachEvent(ge(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Ne(h))?(ns(p,l),p.h==0&&(p.src=null,h[wr]=null)):pi(l)}}}function ge(l){return l in L?L[l]:L[l]="on"+l}function Re(l,h){if(l.da)l=!0;else{h=new vn(h,this);var p=l.listener,_=l.ha||l.src;l.fa&&ae(l),l=p.call(_,h)}return l}function Ne(l){return l=l[wr],l instanceof ts?l:null}var he="__closure_events_fn_"+(1e9*Math.random()>>>0);function yt(l){return typeof l=="function"?l:(l[he]||(l[he]=function(h){return l.handleEvent(h)}),l[he])}function le(){Ie.call(this),this.i=new ts(this),this.M=this,this.F=null}T(le,Ie),le.prototype[bt]=!0,le.prototype.removeEventListener=function(l,h,p,_){K(this,l,h,p,_)};function ke(l,h){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=h.type||h,typeof h=="string")h=new Fe(h,l);else if(h instanceof Fe)h.target=h.target||l;else{var b=h;h=new Fe(_,l),k(h,b)}if(b=!0,p)for(var O=p.length-1;0<=O;O--){var W=h.g=p[O];b=Dt(W,_,!0,h)&&b}if(W=h.g=l,b=Dt(W,_,!0,h)&&b,b=Dt(W,_,!1,h)&&b,p)for(O=0;O<p.length;O++)W=h.g=p[O],b=Dt(W,_,!1,h)&&b}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],_=0;_<p.length;_++)pi(p[_]);delete l.g[h],l.h--}}this.F=null},le.prototype.K=function(l,h,p,_){return this.i.add(String(l),h,!1,p,_)},le.prototype.L=function(l,h,p,_){return this.i.add(String(l),h,!0,p,_)};function Dt(l,h,p,_){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,O=0;O<h.length;++O){var W=h[O];if(W&&!W.da&&W.capture==p){var Ae=W.listener,ct=W.ha||W.src;W.fa&&ns(l.i,W),b=Ae.call(ct,_)!==!1&&b}}return b&&!_.defaultPrevented}function rs(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function To(l){l.g=rs(()=>{l.g=null,l.i&&(l.i=!1,To(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Yt extends Ie{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:To(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(l){Ie.call(this),this.h=l,this.g={}}T(mi,Ie);var Qg=[];function Yg(l){z(l.g,function(h,p){this.g.hasOwnProperty(p)&&ae(h)},l),l.g={}}mi.prototype.N=function(){mi.aa.N.call(this),Yg(this)},mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mh=a.JSON.stringify,ZC=a.JSON.parse,e1=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Lh(){}Lh.prototype.h=null;function Xg(l){return l.h||(l.h=l.i())}function Jg(){}var Io={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vh(){Fe.call(this,"d")}T(Vh,Fe);function Fh(){Fe.call(this,"c")}T(Fh,Fe);var gi={},Zg=null;function xl(){return Zg=Zg||new le}gi.La="serverreachability";function e_(l){Fe.call(this,gi.La,l)}T(e_,Fe);function So(l){const h=xl();ke(h,new e_(h))}gi.STAT_EVENT="statevent";function t_(l,h){Fe.call(this,gi.STAT_EVENT,l),this.stat=h}T(t_,Fe);function Ot(l){const h=xl();ke(h,new t_(h,l))}gi.Ma="timingevent";function n_(l,h){Fe.call(this,gi.Ma,l),this.size=h}T(n_,Fe);function Co(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Ro(){this.g=!0}Ro.prototype.xa=function(){this.g=!1};function t1(l,h,p,_,b,O){l.info(function(){if(l.g)if(O)for(var W="",Ae=O.split("&"),ct=0;ct<Ae.length;ct++){var Ee=Ae[ct].split("=");if(1<Ee.length){var vt=Ee[0];Ee=Ee[1];var Et=vt.split("_");W=2<=Et.length&&Et[1]=="type"?W+(vt+"="+Ee+"&"):W+(vt+"=redacted&")}}else W=null;else W=O;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+p+`
`+W})}function n1(l,h,p,_,b,O,W){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+p+`
`+O+" "+W})}function is(l,h,p,_){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+i1(l,p)+(_?" "+_:"")})}function r1(l,h){l.info(function(){return"TIMEOUT: "+h})}Ro.prototype.info=function(){};function i1(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var b=_[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var W=1;W<b.length;W++)b[W]=""}}}}return Mh(p)}catch{return h}}var Pl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},r_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jh;function Nl(){}T(Nl,Lh),Nl.prototype.g=function(){return new XMLHttpRequest},Nl.prototype.i=function(){return{}},jh=new Nl;function Tr(l,h,p,_){this.j=l,this.i=h,this.l=p,this.R=_||1,this.U=new mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new i_}function i_(){this.i=null,this.g="",this.h=!1}var s_={},Uh={};function zh(l,h,p){l.L=1,l.v=Ml(qn(h)),l.m=p,l.P=!0,o_(l,null)}function o_(l,h){l.F=Date.now(),bl(l),l.A=qn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),E_(p.i,"t",_),l.C=0,p=l.j.J,l.h=new i_,l.g=F_(l.j,p?h:null,!l.m),0<l.O&&(l.M=new Yt(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,_=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(Qg[0]=b.toString()),b=Qg);for(var O=0;O<b.length;O++){var W=H(p,b[O],_||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),So(),t1(l.i,l.u,l.A,l.l,l.R,l.m)}Tr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Kn(l)==3?h.j():this.Y(l)},Tr.prototype.Y=function(l){try{if(l==this.g)e:{const Et=Kn(this.g);var h=this.g.Ba();const as=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||k_(this.g)))){this.J||Et!=4||h==7||(h==8||0>=as?So(3):So(2)),Bh(this);var p=this.g.Z();this.X=p;t:if(a_(this)){var _=k_(this.g);l="";var b=_.length,O=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_i(this),ko(this);var W="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,l+=this.h.i.decode(_[h],{stream:!(O&&h==b-1)});_.length=0,this.h.g+=l,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,n1(this.i,this.u,this.A,this.l,this.R,Et,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,ct=this.g;if((Ae=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ae)){var Ee=Ae;break t}}Ee=null}if(p=Ee)is(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wh(this,p);else{this.o=!1,this.s=3,Ot(12),_i(this),ko(this);break e}}if(this.P){p=!0;let En;for(;!this.J&&this.C<W.length;)if(En=s1(this,W),En==Uh){Et==4&&(this.s=4,Ot(14),p=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(En==s_){this.s=4,Ot(15),is(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else is(this.i,this.l,En,null),Wh(this,En);if(a_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||W.length!=0||this.h.h||(this.s=1,Ot(16),p=!1),this.o=this.o&&p,!p)is(this.i,this.l,W,"[Invalid Chunked Response]"),_i(this),ko(this);else if(0<W.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Qh(vt),vt.M=!0,Ot(11))}}else is(this.i,this.l,W,null),Wh(this,W);Et==4&&_i(this),this.o&&!this.J&&(Et==4?O_(this.j,this):(this.o=!1,bl(this)))}else T1(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),_i(this),ko(this)}}}catch{}finally{}};function a_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function s1(l,h){var p=l.C,_=h.indexOf(`
`,p);return _==-1?Uh:(p=Number(h.substring(p,_)),isNaN(p)?s_:(_+=1,_+p>h.length?Uh:(h=h.slice(_,_+p),l.C=_+p,h)))}Tr.prototype.cancel=function(){this.J=!0,_i(this)};function bl(l){l.S=Date.now()+l.I,l_(l,l.I)}function l_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Co(m(l.ba,l),h)}function Bh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Tr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(r1(this.i,this.A),this.L!=2&&(So(),Ot(17)),_i(this),this.s=2,ko(this)):l_(this,this.S-l)};function ko(l){l.j.G==0||l.J||O_(l.j,l)}function _i(l){Bh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Yg(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Wh(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||$h(p.h,l))){if(!l.K&&$h(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)zl(p),jl(p);else break e;Gh(p),Ot(18)}}else p.za=b[1],0<p.za-p.T&&37500>b[2]&&p.F&&p.v==0&&!p.C&&(p.C=Co(m(p.Za,p),6e3));if(1>=h_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else vi(p,11)}else if((l.K||p.g==l)&&zl(p),!w(h))for(b=p.Da.g.parse(h),h=0;h<b.length;h++){let Ee=b[h];if(p.T=Ee[0],Ee=Ee[1],p.G==2)if(Ee[0]=="c"){p.K=Ee[1],p.ia=Ee[2];const vt=Ee[3];vt!=null&&(p.la=vt,p.j.info("VER="+p.la));const Et=Ee[4];Et!=null&&(p.Aa=Et,p.j.info("SVER="+p.Aa));const as=Ee[5];as!=null&&typeof as=="number"&&0<as&&(_=1.5*as,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const En=l.g;if(En){const Wl=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wl){var O=_.h;O.g||Wl.indexOf("spdy")==-1&&Wl.indexOf("quic")==-1&&Wl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Hh(O,O.h),O.h=null))}if(_.D){const Yh=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;Yh&&(_.ya=Yh,Oe(_.I,_.D,Yh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var W=l;if(_.qa=V_(_,_.J?_.ia:null,_.W),W.K){d_(_.h,W);var Ae=W,ct=_.L;ct&&(Ae.I=ct),Ae.B&&(Bh(Ae),bl(Ae)),_.g=W}else b_(_);0<p.i.length&&Ul(p)}else Ee[0]!="stop"&&Ee[0]!="close"||vi(p,7);else p.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?vi(p,7):Kh(p):Ee[0]!="noop"&&p.l&&p.l.ta(Ee),p.v=0)}}So(4)}catch{}}var o1=class{constructor(l,h){this.g=l,this.map=h}};function u_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function c_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function h_(l){return l.h?1:l.g?l.g.size:0}function $h(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Hh(l,h){l.g?l.g.add(h):l.h=h}function d_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}u_.prototype.cancel=function(){if(this.i=f_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function f_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return x(l.i)}function a1(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,_=0;_<p;_++)h.push(l[_]);return h}h=[],p=0;for(_ in l)h[p++]=l[_];return h}function l1(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const _ in l)h[p++]=_;return h}}}function p_(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=l1(l),_=a1(l),b=_.length,O=0;O<b;O++)h.call(void 0,_[O],p&&p[O],l)}var m_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u1(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),b=null;if(0<=_){var O=l[p].substring(0,_);b=l[p].substring(_+1)}else O=l[p];h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function yi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof yi){this.h=l.h,Dl(this,l.j),this.o=l.o,this.g=l.g,Ol(this,l.s),this.l=l.l;var h=l.i,p=new Po;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),g_(this,p),this.m=l.m}else l&&(h=String(l).match(m_))?(this.h=!1,Dl(this,h[1]||"",!0),this.o=Ao(h[2]||""),this.g=Ao(h[3]||"",!0),Ol(this,h[4]),this.l=Ao(h[5]||"",!0),g_(this,h[6]||"",!0),this.m=Ao(h[7]||"")):(this.h=!1,this.i=new Po(null,this.h))}yi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(xo(h,__,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(xo(h,__,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(xo(p,p.charAt(0)=="/"?d1:h1,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",xo(p,p1)),l.join("")};function qn(l){return new yi(l)}function Dl(l,h,p){l.j=p?Ao(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ol(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function g_(l,h,p){h instanceof Po?(l.i=h,m1(l.i,l.h)):(p||(h=xo(h,f1)),l.i=new Po(h,l.h))}function Oe(l,h,p){l.i.set(h,p)}function Ml(l){return Oe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ao(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xo(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,c1),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function c1(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var __=/[#\/\?@]/g,h1=/[#\?:]/g,d1=/[#\?]/g,f1=/[#\?@]/g,p1=/#/g;function Po(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Ir(l){l.g||(l.g=new Map,l.h=0,l.i&&u1(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Po.prototype,t.add=function(l,h){Ir(this),this.i=null,l=ss(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function y_(l,h){Ir(l),h=ss(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function v_(l,h){return Ir(l),h=ss(l,h),l.g.has(h)}t.forEach=function(l,h){Ir(this),this.g.forEach(function(p,_){p.forEach(function(b){l.call(h,b,_,this)},this)},this)},t.na=function(){Ir(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const b=l[_];for(let O=0;O<b.length;O++)p.push(h[_])}return p},t.V=function(l){Ir(this);let h=[];if(typeof l=="string")v_(this,l)&&(h=h.concat(this.g.get(ss(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return Ir(this),this.i=null,l=ss(this,l),v_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function E_(l,h,p){y_(l,h),0<p.length&&(l.i=null,l.g.set(ss(l,h),x(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const O=encodeURIComponent(String(_)),W=this.V(_);for(_=0;_<W.length;_++){var b=O;W[_]!==""&&(b+="="+encodeURIComponent(String(W[_]))),l.push(b)}}return this.i=l.join("&")};function ss(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function m1(l,h){h&&!l.j&&(Ir(l),l.i=null,l.g.forEach(function(p,_){var b=_.toLowerCase();_!=b&&(y_(this,_),E_(this,b,p))},l)),l.j=h}function g1(l,h){const p=new Ro;if(a.Image){const _=new Image;_.onload=E(Sr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=E(Sr,p,"TestLoadImage: error",!1,h,_),_.onabort=E(Sr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=E(Sr,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else h(!1)}function _1(l,h){const p=new Ro,_=new AbortController,b=setTimeout(()=>{_.abort(),Sr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:_.signal}).then(O=>{clearTimeout(b),O.ok?Sr(p,"TestPingServer: ok",!0,h):Sr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Sr(p,"TestPingServer: error",!1,h)})}function Sr(l,h,p,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(p)}catch{}}function y1(){this.g=new e1}function v1(l,h,p){const _=p||"";try{p_(l,function(b,O){let W=b;c(b)&&(W=Mh(b)),h.push(_+O+"="+encodeURIComponent(W))})}catch(b){throw h.push(_+"type="+encodeURIComponent("_badmap")),b}}function Ll(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Ll,Lh),Ll.prototype.g=function(){return new Vl(this.l,this.j)},Ll.prototype.i=function(l){return function(){return l}}({});function Vl(l,h){le.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Vl,le),t=Vl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,bo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,No(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,bo(this)),this.g&&(this.readyState=3,bo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;w_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function w_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?No(this):bo(this),this.readyState==3&&w_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,No(this))},t.Qa=function(l){this.g&&(this.response=l,No(this))},t.ga=function(){this.g&&No(this)};function No(l){l.readyState=4,l.l=null,l.j=null,l.v=null,bo(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function bo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Vl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function T_(l){let h="";return z(l,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function qh(l,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=T_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Oe(l,h,p))}function $e(l){le.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T($e,le);var E1=/^https?$/i,w1=["POST","PUT"];t=$e.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jh.g(),this.v=this.o?Xg(this.o):Xg(jh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(O){I_(this,O);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)p.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(w1,h,void 0))||_||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,W]of p)this.g.setRequestHeader(O,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{R_(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){I_(this,O)}};function I_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,S_(l),Fl(l)}function S_(l){l.A||(l.A=!0,ke(l,"complete"),ke(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ke(this,"complete"),ke(this,"abort"),Fl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fl(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?C_(this):this.bb())},t.bb=function(){C_(this)};function C_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Kn(l)!=4||l.Z()!=2)){if(l.u&&Kn(l)==4)rs(l.Ea,0,l);else if(ke(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const W=l.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=W===0){var b=String(l.D).match(m_)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),_=!E1.test(b?b.toLowerCase():"")}p=_}if(p)ke(l,"complete"),ke(l,"success");else{l.m=6;try{var O=2<Kn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",S_(l)}}finally{Fl(l)}}}}function Fl(l,h){if(l.g){R_(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||ke(l,"ready");try{p.onreadystatechange=_}catch{}}}function R_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),ZC(h)}};function k_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function T1(l){const h={};l=(l.g&&2<=Kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(w(l[_]))continue;var p=P(l[_]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[b]||[];h[b]=O,O.push(p)}I(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Do(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function A_(l){this.Aa=0,this.i=[],this.j=new Ro,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Do("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Do("baseRetryDelayMs",5e3,l),this.cb=Do("retryDelaySeedMs",1e4,l),this.Wa=Do("forwardChannelMaxRetries",2,l),this.wa=Do("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new u_(l&&l.concurrentRequestLimit),this.Da=new y1,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=A_.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,_){Ot(0),this.W=l,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=V_(this,null,this.W),Ul(this)};function Kh(l){if(x_(l),l.G==3){var h=l.U++,p=qn(l.I);if(Oe(p,"SID",l.K),Oe(p,"RID",h),Oe(p,"TYPE","terminate"),Oo(l,p),h=new Tr(l,l.j,h),h.L=2,h.v=Ml(qn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=F_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),bl(h)}L_(l)}function jl(l){l.g&&(Qh(l),l.g.cancel(),l.g=null)}function x_(l){jl(l),l.u&&(a.clearTimeout(l.u),l.u=null),zl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ul(l){if(!c_(l.h)&&!l.s){l.s=!0;var h=l.Ga;_n||ie(),$||(_n(),$=!0),Z.add(h,l),l.B=0}}function I1(l,h){return h_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Co(m(l.Ga,l,h),M_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new Tr(this,this.j,l);let O=this.o;if(this.S&&(O?(O=v(O),k(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=N_(this,b,h),p=qn(this.I),Oe(p,"RID",l),Oe(p,"CVER",22),this.D&&Oe(p,"X-HTTP-Session-Id",this.D),Oo(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(T_(O)))+"&"+h:this.m&&qh(p,this.m,O)),Hh(this.h,b),this.Ua&&Oe(p,"TYPE","init"),this.P?(Oe(p,"$req",h),Oe(p,"SID","null"),b.T=!0,zh(b,p,null)):zh(b,p,h),this.G=2}}else this.G==3&&(l?P_(this,l):this.i.length==0||c_(this.h)||P_(this))};function P_(l,h){var p;h?p=h.l:p=l.U++;const _=qn(l.I);Oe(_,"SID",l.K),Oe(_,"RID",p),Oe(_,"AID",l.T),Oo(l,_),l.m&&l.o&&qh(_,l.m,l.o),p=new Tr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=N_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Hh(l.h,p),zh(p,_,h)}function Oo(l,h){l.H&&z(l.H,function(p,_){Oe(h,_,p)}),l.l&&p_({},function(p,_){Oe(h,_,p)})}function N_(l,h,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let O=-1;for(;;){const W=["count="+p];O==-1?0<p?(O=b[0].g,W.push("ofs="+O)):O=0:W.push("ofs="+O);let Ae=!0;for(let ct=0;ct<p;ct++){let Ee=b[ct].g;const vt=b[ct].map;if(Ee-=O,0>Ee)O=Math.max(0,b[ct].g-100),Ae=!1;else try{v1(vt,W,"req"+Ee+"_")}catch{_&&_(vt)}}if(Ae){_=W.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,_}function b_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;_n||ie(),$||(_n(),$=!0),Z.add(h,l),l.v=0}}function Gh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Co(m(l.Fa,l),M_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,D_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Co(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),jl(this),D_(this))};function Qh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function D_(l){l.g=new Tr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=qn(l.qa);Oe(h,"RID","rpc"),Oe(h,"SID",l.K),Oe(h,"AID",l.T),Oe(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Oe(h,"TO",l.ja),Oe(h,"TYPE","xmlhttp"),Oo(l,h),l.m&&l.o&&qh(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Ml(qn(h)),p.m=null,p.P=!0,o_(p,l)}t.Za=function(){this.C!=null&&(this.C=null,jl(this),Gh(this),Ot(19))};function zl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function O_(l,h){var p=null;if(l.g==h){zl(l),Qh(l),l.g=null;var _=2}else if($h(l.h,h))p=h.D,d_(l.h,h),_=1;else return;if(l.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var b=l.B;_=xl(),ke(_,new n_(_,p)),Ul(l)}else b_(l);else if(b=h.s,b==3||b==0&&0<h.X||!(_==1&&I1(l,h)||_==2&&Gh(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),b){case 1:vi(l,5);break;case 4:vi(l,10);break;case 3:vi(l,6);break;default:vi(l,2)}}}function M_(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function vi(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),_=l.Xa;const b=!_;_=new yi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Dl(_,"https"),Ml(_),b?g1(_.toString(),p):_1(_.toString(),p)}else Ot(2);l.G=0,l.l&&l.l.sa(h),L_(l),x_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function L_(l){if(l.G=0,l.ka=[],l.l){const h=f_(l.h);(h.length!=0||l.i.length!=0)&&(D(l.ka,h),D(l.ka,l.i),l.h.i.length=0,x(l.i),l.i.length=0),l.l.ra()}}function V_(l,h,p){var _=p instanceof yi?qn(p):new yi(p);if(_.g!="")h&&(_.g=h+"."+_.g),Ol(_,_.s);else{var b=a.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var O=new yi(null);_&&Dl(O,_),h&&(O.g=h),b&&Ol(O,b),p&&(O.l=p),_=O}return p=l.D,h=l.ya,p&&h&&Oe(_,p,h),Oe(_,"VER",l.la),Oo(l,_),_}function F_(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new $e(new Ll({eb:p})):new $e(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function j_(){}t=j_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Bl(){}Bl.prototype.g=function(l,h){return new Xt(l,h)};function Xt(l,h){le.call(this),this.g=new A_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!w(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new os(this)}T(Xt,le),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Kh(this.g)},Xt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Mh(l),l=p);h.i.push(new o1(h.Ya++,l)),h.G==3&&Ul(h)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Kh(this.g),delete this.g,Xt.aa.N.call(this)};function U_(l){Vh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}T(U_,Vh);function z_(){Fh.call(this),this.status=1}T(z_,Fh);function os(l){this.g=l}T(os,j_),os.prototype.ua=function(){ke(this.g,"a")},os.prototype.ta=function(l){ke(this.g,new U_(l))},os.prototype.sa=function(l){ke(this.g,new z_)},os.prototype.ra=function(){ke(this.g,"b")},Bl.prototype.createWebChannel=Bl.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,mI=function(){return new Bl},pI=function(){return xl()},fI=gi,Kf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pl.NO_ERROR=0,Pl.TIMEOUT=8,Pl.HTTP_ERROR=6,Pu=Pl,r_.COMPLETE="complete",dI=r_,Jg.EventType=Io,Io.OPEN="a",Io.CLOSE="b",Io.ERROR="c",Io.MESSAGE="d",le.prototype.listen=le.prototype.K,ta=Jg,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,hI=$e}).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{});const kv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new ah("@firebase/firestore");function Wo(){return zi.logLevel}function G(t,...e){if(zi.logLevel<=pe.DEBUG){const n=e.map(Nm);zi.debug(`Firestore (${go}): ${t}`,...n)}}function fr(t,...e){if(zi.logLevel<=pe.ERROR){const n=e.map(Nm);zi.error(`Firestore (${go}): ${t}`,...n)}}function Zs(t,...e){if(zi.logLevel<=pe.WARN){const n=e.map(Nm);zi.warn(`Firestore (${go}): ${t}`,...n)}}function Nm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function Ce(t,e){t||re()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends yr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class KN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GN{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new sr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new gI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new Ct(e)}}class QN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class YN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new QN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new XN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new rt(0,0))}static max(){return new se(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $a.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $a?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends $a{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const eb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends $a{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return eb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new X(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new X(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new X(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new X(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ue.fromString(e))}static fromName(e){return new J(Ue.fromString(e).popFirst(5))}static empty(){return new J(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ue(e.slice()))}}function tb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new ti(i,J.empty(),e)}function nb(t){return new ti(t.readTime,t.key,-1)}class ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ti(se.min(),J.empty(),-1)}static max(){return new ti(se.max(),J.empty(),-1)}}function rb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==ib)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ob(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bm.oe=-1;function dh(t){return t==null}function yc(t){return t===0&&1/t==-1/0}function ab(t){return typeof t=="number"&&Number.isInteger(t)&&!yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Je=class Gf{constructor(e,n){this.comparator=e,this.root=n||Qr.EMPTY}insert(e,n){return new Gf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qr.BLACK,null,null))}remove(e){return new Gf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uu(this.root,e,this.comparator,!0)}},uu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Qr=class Gn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Gn.RED,this.left=i??Gn.EMPTY,this.right=s??Gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Gn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Gn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}};Qr.EMPTY=null,Qr.RED=!0,Qr.BLACK=!1;Qr.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xv(this.data.getIterator())}getIteratorFrom(e){return new xv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class xv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new en([])}unionWith(e){let n=new mt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vI("Invalid base64 string: "+s):s}}(e);return new _t(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const lb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=lb.exec(t);if(Ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Om(t){const e=t.mapValue.fields.__previous_value__;return Dm(e)?Om(e):e}function Ha(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class qa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu={mapValue:{}};function Wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dm(t)?4:hb(t)?9007199254740991:cb(t)?10:11:re()}function $n(t,e){if(t===e)return!0;const n=Wi(t);if(n!==Wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ha(t).isEqual(Ha(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ni(i.timestampValue),a=ni(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bi(i.bytesValue).isEqual(Bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ge(i.geoPointValue.latitude)===Ge(s.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ge(i.integerValue)===Ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ge(i.doubleValue),a=Ge(s.doubleValue);return o===a?yc(o)===yc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return eo(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Av(o)!==Av(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!$n(o[u],a[u])))return!1;return!0}(t,e);default:return re()}}function Ka(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function to(t,e){if(t===e)return 0;const n=Wi(t),r=Wi(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ge(s.integerValue||s.doubleValue),u=Ge(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Pv(t.timestampValue,e.timestampValue);case 4:return Pv(Ha(t),Ha(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Bi(s),u=Bi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=we(a[c],u[c]);if(d!==0)return d}return we(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=we(Ge(s.latitude),Ge(o.latitude));return a!==0?a:we(Ge(s.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Nv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},m=o.fields||{},E=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=m.value)===null||u===void 0?void 0:u.arrayValue,x=we(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Nv(E,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===cu.mapValue&&o===cu.mapValue)return 0;if(s===cu.mapValue)return 1;if(o===cu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=we(u[f],d[f]);if(m!==0)return m;const E=to(a[u[f]],c[d[f]]);if(E!==0)return E}return we(u.length,d.length)}(t.mapValue,e.mapValue);default:throw re()}}function Pv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=ni(t),r=ni(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function Nv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=to(n[i],r[i]);if(s)return s}return we(n.length,r.length)}function no(t){return Qf(t)}function Qf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ni(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Qf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Qf(n.fields[o])}`;return i+"}"}(t.mapValue):re()}function Yf(t){return!!t&&"integerValue"in t}function Mm(t){return!!t&&"arrayValue"in t}function bv(t){return!!t&&"nullValue"in t}function Dv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nu(t){return!!t&&"mapValue"in t}function cb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ma(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ji(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ma(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Nu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Nu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ji(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zt(ma(this.value))}}function EI(t){const e=[];return Ji(t.fields,(n,r)=>{const i=new ft([n]);if(Nu(r)){const s=EI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,se.min(),se.min(),se.min(),zt.empty(),0)}static newFoundDocument(e,n,r,i){return new kt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new kt(e,2,n,se.min(),se.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,se.min(),se.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.position=e,this.inclusive=n}}function Ov(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=to(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n="asc"){this.field=e,this.dir=n}}function db(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{}class et extends wI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pb(e,n,r):n==="array-contains"?new _b(e,r):n==="in"?new yb(e,r):n==="not-in"?new vb(e,r):n==="array-contains-any"?new Eb(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mb(e,r):new gb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(to(n,this.value)):n!==null&&Wi(this.value)===Wi(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends wI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Hn(e,n)}matches(e){return TI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function TI(t){return t.op==="and"}function II(t){return fb(t)&&TI(t)}function fb(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function Xf(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+no(t.value);if(II(t))return t.filters.map(e=>Xf(e)).join(",");{const e=t.filters.map(n=>Xf(n)).join(",");return`${t.op}(${e})`}}function SI(t,e){return t instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(t,e):t instanceof Hn?function(r,i){return i instanceof Hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&SI(o,i.filters[a]),!0):!1}(t,e):void re()}function CI(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${no(n.value)}`}(t):t instanceof Hn?function(n){return n.op.toString()+" {"+n.getFilters().map(CI).join(" ,")+"}"}(t):"Filter"}class pb extends et{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class mb extends et{constructor(e,n){super(e,"in",n),this.keys=RI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gb extends et{constructor(e,n){super(e,"not-in",n),this.keys=RI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class _b extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mm(n)&&Ka(n.arrayValue,this.value)}}class yb extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class vb extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ka(this.value.arrayValue,n)}}class Eb extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Lv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wb(t,e,n,r,i,s,o)}function Lm(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),dh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>no(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>no(r)).join(",")),e.ue=n}return e.ue}function Vm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!db(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!SI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mv(t.startAt,e.startAt)&&Mv(t.endAt,e.endAt)}function Jf(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Tb(t,e,n,r,i,s,o,a){return new fh(t,e,n,r,i,s,o,a)}function ph(t){return new fh(t)}function Vv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ib(t){return t.collectionGroup!==null}function ga(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new mt(ft.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ec(s,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new Ec(ft.keyField(),r))}return e.ce}function Bn(t){const e=oe(t);return e.le||(e.le=Sb(e,ga(t))),e.le}function Sb(t,e){if(t.limitType==="F")return Lv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ec(i.field,s)});const n=t.endAt?new vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vc(t.startAt.position,t.startAt.inclusive):null;return Lv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zf(t,e,n){return new fh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mh(t,e){return Vm(Bn(t),Bn(e))&&t.limitType===e.limitType}function kI(t){return`${Lm(Bn(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>CI(i)).join(", ")}]`),dh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>no(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>no(i)).join(",")),`Target(${r})`}(Bn(t))}; limitType=${t.limitType})`}function gh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ga(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Ov(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ga(r),i)||r.endAt&&!function(o,a,u){const c=Ov(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ga(r),i))}(t,e)}function Cb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AI(t){return(e,n)=>{let r=!1;for(const i of ga(t)){const s=Rb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Rb(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?to(u,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ji(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return yI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new Je(J.comparator);function pr(){return kb}const xI=new Je(J.comparator);function na(...t){let e=xI;for(const n of t)e=e.insert(n.key,n);return e}function PI(t){let e=xI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ki(){return _a()}function NI(){return _a()}function _a(){return new _o(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ab=new Je(J.comparator),xb=new mt(J.comparator);function me(...t){let e=xb;for(const n of t)e=e.add(n);return e}const Pb=new mt(we);function Nb(){return Pb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function bI(t){return{integerValue:""+t}}function bb(t,e){return ab(e)?bI(e):Fm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this._=void 0}}function Db(t,e,n){return t instanceof wc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Dm(s)&&(s=Om(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ga?OI(t,e):t instanceof Qa?MI(t,e):function(i,s){const o=DI(i,s),a=Fv(o)+Fv(i.Pe);return Yf(o)&&Yf(i.Pe)?bI(a):Fm(i.serializer,a)}(t,e)}function Ob(t,e,n){return t instanceof Ga?OI(t,e):t instanceof Qa?MI(t,e):n}function DI(t,e){return t instanceof Tc?function(r){return Yf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class wc extends _h{}class Ga extends _h{constructor(e){super(),this.elements=e}}function OI(t,e){const n=LI(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qa extends _h{constructor(e){super(),this.elements=e}}function MI(t,e){let n=LI(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class Tc extends _h{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fv(t){return Ge(t.integerValue||t.doubleValue)}function LI(t){return Mm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Mb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ga&&i instanceof Ga||r instanceof Qa&&i instanceof Qa?eo(r.elements,i.elements,$n):r instanceof Tc&&i instanceof Tc?$n(r.Pe,i.Pe):r instanceof wc&&i instanceof wc}(t.transform,e.transform)}class Lb{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yh{}function VI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jm(t.key,nn.none()):new ml(t.key,t.data,nn.none());{const n=t.data,r=zt.empty();let i=new mt(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hi(t.key,r,new en(i.toArray()),nn.none())}}function Vb(t,e,n){t instanceof ml?function(i,s,o){const a=i.value.clone(),u=Uv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hi?function(i,s,o){if(!bu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Uv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(FI(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ya(t,e,n,r){return t instanceof ml?function(s,o,a,u){if(!bu(s.precondition,o))return a;const c=s.value.clone(),d=zv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof hi?function(s,o,a,u){if(!bu(s.precondition,o))return a;const c=zv(s.fieldTransforms,u,o),d=o.data;return d.setAll(FI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return bu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Fb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DI(r.transform,i||null);s!=null&&(n===null&&(n=zt.empty()),n.set(r.field,s))}return n||null}function jv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&eo(r,i,(s,o)=>Mb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ml extends yh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hi extends yh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function FI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uv(t,e,n){const r=new Map;Ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ob(o,a,n[i]))}return r}function zv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Db(s,o,e))}return r}class jm extends yh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jb extends yh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Vb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ya(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ya(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=NI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=VI(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,(n,r)=>jv(n,r))&&eo(this.baseMutations,e.baseMutations,(n,r)=>jv(n,r))}}class Um{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ce(e.mutations.length===r.length);let i=function(){return Ab}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Um(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,_e;function Wb(t){switch(t){default:return re();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function jI(t){if(t===void 0)return fr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ye.OK:return V.OK;case Ye.CANCELLED:return V.CANCELLED;case Ye.UNKNOWN:return V.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return V.INTERNAL;case Ye.UNAVAILABLE:return V.UNAVAILABLE;case Ye.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ye.NOT_FOUND:return V.NOT_FOUND;case Ye.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ye.ABORTED:return V.ABORTED;case Ye.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ye.DATA_LOSS:return V.DATA_LOSS;default:return re()}}(_e=Ye||(Ye={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new bi([4294967295,4294967295],0);function Bv(t){const e=$b().encode(t),n=new cI;return n.update(e),new Uint8Array(n.digest())}function Wv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new bi([n,r],0),new bi([i,s],0)]}class zm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ra(`Invalid padding: ${n}`);if(r<0)throw new ra(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ra(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ra(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=bi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(bi.fromNumber(r)));return i.compare(Hb)===1&&(i=new bi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Bv(e),[r,i]=Wv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new zm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Bv(e),[r,i]=Wv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,gl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vh(se.min(),i,new Je(we),pr(),me())}}class gl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gl(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class UI{constructor(e,n){this.targetId=e,this.me=n}}class zI{constructor(e,n,r=_t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $v{constructor(){this.fe=0,this.ge=qv(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new gl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=qv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qb{constructor(e){this.Le=e,this.Be=new Map,this.ke=pr(),this.qe=Hv(),this.Qe=new Je(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Jf(s))if(r===0){const o=new J(s.path);this.Ue(n,o,kt.newNoDocument(o,se.min()))}else Ce(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Bi(r).toUint8Array()}catch(u){if(u instanceof vI)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new zm(o,i,s)}catch(u){return Zs(u instanceof ra?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Jf(a.target)){const u=new J(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,kt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=me();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new vh(e,n,this.Qe,this.ke,r);return this.ke=pr(),this.qe=Hv(),this.Qe=new Je(we),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $v,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new mt(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $v),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Hv(){return new Je(J.comparator)}function qv(){return new Je(J.comparator)}const Kb={asc:"ASCENDING",desc:"DESCENDING"},Gb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qb={and:"AND",or:"OR"};class Yb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ep(t,e){return t.useProto3Json||dh(e)?e:{value:e}}function Ic(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Xb(t,e){return Ic(t,e.toTimestamp())}function Wn(t){return Ce(!!t),se.fromTimestamp(function(n){const r=ni(n);return new rt(r.seconds,r.nanos)}(t))}function Bm(t,e){return tp(t,e).canonicalString()}function tp(t,e){const n=function(i){return new Ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function WI(t){const e=Ue.fromString(t);return Ce(GI(e)),e}function np(t,e){return Bm(t.databaseId,e.path)}function Pd(t,e){const n=WI(e);if(n.get(1)!==t.databaseId.projectId)throw new X(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(HI(n))}function $I(t,e){return Bm(t.databaseId,e)}function Jb(t){const e=WI(t);return e.length===4?Ue.emptyPath():HI(e)}function rp(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HI(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kv(t,e,n){return{name:np(t,e),fields:n.value.mapValue.fields}}function Zb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Ce(d===void 0||typeof d=="string"),_t.fromBase64String(d||"")):(Ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),_t.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:jI(c.code);return new X(d,c.message||"")}(o);n=new zI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pd(t,r.document.name),s=Wn(r.document.updateTime),o=r.document.createTime?Wn(r.document.createTime):se.min(),a=new zt({mapValue:{fields:r.document.fields}}),u=kt.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Du(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pd(t,r.document),s=r.readTime?Wn(r.readTime):se.min(),o=kt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Du([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pd(t,r.document),s=r.removedTargetIds||[];n=new Du([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Bb(i,s),a=r.targetId;n=new UI(a,o)}}return n}function e2(t,e){let n;if(e instanceof ml)n={update:Kv(t,e.key,e.value)};else if(e instanceof jm)n={delete:np(t,e.key)};else if(e instanceof hi)n={update:Kv(t,e.key,e.data),updateMask:u2(e.fieldMask)};else{if(!(e instanceof jb))return re();n={verify:np(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof wc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Tc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Xb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function t2(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Wn(i.updateTime):Wn(s);return o.isEqual(se.min())&&(o=Wn(s)),new Lb(o,i.transformResults||[])}(n,e))):[]}function n2(t,e){return{documents:[$I(t,e.path)]}}function r2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$I(t,i);const s=function(c){if(c.length!==0)return KI(Hn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:fs(m.field),direction:o2(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ep(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function i2(t){let e=Jb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ce(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=qI(f);return m instanceof Hn&&II(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Ec(ps(T.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,dh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new vc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new vc(E,m)}(n.endAt)),Tb(e,i,o,s,a,"F",u,c)}function s2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ps(n.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ps(n.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return et.create(ps(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hn.create(n.compositeFilter.filters.map(r=>qI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function o2(t){return Kb[t]}function a2(t){return Gb[t]}function l2(t){return Qb[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return ft.fromServerFormat(t.fieldPath)}function KI(t){return t instanceof et?function(n){if(n.op==="=="){if(Dv(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(bv(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dv(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(bv(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:a2(n.op),value:n.value}}}(t):t instanceof Hn?function(n){const r=n.getFilters().map(i=>KI(i));return r.length===1?r[0]:{compositeFilter:{op:l2(n.op),filters:r}}}(t):re()}function u2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function GI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,i,s=se.min(),o=se.min(),a=_t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.ct=e}}function h2(t){const e=i2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(){this.un=new f2}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ti.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class f2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new mt(Ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new mt(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ro(0)}static kn(){return new ro(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(){this.changes=new _o(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ya(r.mutation,i,en.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=ki();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=na();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ki();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=pr();const o=_a(),a=function(){return _a()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof hi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ya(d.mutation,c,d.mutation.getFieldMask(),rt.now())):o.set(c.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new m2(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=_a();let i=new Je((o,a)=>o-a),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||en.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||me()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=NI();d.forEach(m=>{if(!s.has(m)){const E=VI(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ib(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ki());let a=-1,u=s;return o.next(c=>F.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,me())).next(d=>({batchId:a,changes:PI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=na();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=na();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,m){return new fh(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,kt.newInvalidDocument(d)))});let a=na();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ya(d.mutation,c,en.empty(),rt.now()),gh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Wn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:h2(i.bundledQuery),readTime:Wn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(){this.overlays=new Je(J.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ki();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ki(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ki(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=ki(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zb(n,r));let s=this.Ir.get(n);s===void 0&&(s=me(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.Tr=new mt(st.Er),this.dr=new mt(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new st(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Ue([])),r=new st(n,e),i=new st(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Ue([])),r=new st(n,e),i=new st(n,e+1);let s=me();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new st(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new mt(st.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ub(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(we);return n.forEach(i=>{const s=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new st(new J(s),0);let a=new mt(we);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new st(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new st(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.Mr=e,this.docs=function(){return new Je(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=pr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():kt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=pr();const o=n.path,a=new J(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||rb(nb(d),r)<=0||(i.has(d.key)||gh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new T2(this)}getSize(e){return F.resolve(this.size)}}class T2 extends p2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.persistence=e,this.Nr=new _o(n=>Lm(n),Vm),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wm,this.targetCount=0,this.kr=ro.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ro(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new bm(0),this.Kr=!1,this.Kr=!0,this.$r=new v2,this.referenceDelegate=e(this),this.Ur=new I2(this),this.indexManager=new d2,this.remoteDocumentCache=function(i){return new w2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new c2(n),this.Gr=new _2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new y2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new E2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new C2(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class C2 extends sb{constructor(e){super(),this.currentSequenceNumber=e}}class $m{constructor(e){this.persistence=e,this.Jr=new Wm,this.Yr=null}static Zr(e){return new $m(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=me(),i=me();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hA()?8:ob(Pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new R2;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Wo()<=pe.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Wo()<=pe.DEBUG&&G("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Wo()<=pe.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bn(n))):F.resolve())}Yi(e,n){if(Vv(n))return F.resolve(null);let r=Bn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zf(n,null,"F"),r=Bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=me(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Zf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Vv(n)||i.isEqual(se.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Wo()<=pe.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ds(n)),this.rs(e,o,n,tb(i,-1)).next(a=>a))})}ts(e,n){let r=new mt(AI(e));return n.forEach((i,s)=>{gh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Wo()<=pe.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",ds(n)),this.Ji.getDocumentsMatchingQuery(e,n,ti.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Je(we),this._s=new _o(s=>Lm(s),Vm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new g2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function x2(t,e,n,r){return new A2(t,e,n,r)}async function QI(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=me();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function P2(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let E=F.resolve();return m.forEach(T=>{E=E.next(()=>d.getEntry(u,T)).next(x=>{const D=c.docVersions.get(T);Ce(D!==null),x.version.compareTo(D)<0&&(f.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),d.addEntry(x)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=me();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YI(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function N2(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(_t.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(x,D,S){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,E,d)&&a.push(n.Ur.updateTargetData(s,E))});let u=pr(),c=me();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(b2(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(se.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function b2(t,e,n){let r=me(),i=me();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=pr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function D2(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function O2(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ip(t,e,n){const r=oe(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pl(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Gv(t,e,n){const r=oe(t);let i=se.min(),s=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=oe(u),m=f._s.get(d);return m!==void 0?F.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,Bn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:me())).next(a=>(M2(r,Cb(e),a),{documents:a,Ts:s})))}function M2(t,e,n){let r=t.us.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Qv{constructor(){this.activeTargetIds=Nb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class L2{constructor(){this.so=new Qv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Qv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hu=null;function Nd(){return hu===null?hu=function(){return 268435456+Math.round(2147483648*Math.random())}():hu++,"0x"+hu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class U2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Nd(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(G("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Zs("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=F2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Nd();return new Promise((o,a)=>{const u=new hI;u.setWithCredentials(!0),u.listenOnce(dI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pu.NO_ERROR:const d=u.getResponseJson();G(It,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Pu.TIMEOUT:G(It,`RPC '${e}' ${s} timed out`),a(new X(V.DEADLINE_EXCEEDED,"Request time out"));break;case Pu.HTTP_ERROR:const f=u.getStatus();if(G(It,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const T=function(D){const S=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(S)>=0?S:V.UNKNOWN}(E.status);a(new X(T,E.message))}else a(new X(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new X(V.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{G(It,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(It,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Nd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mI(),a=pI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");G(It,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,E=!1;const T=new j2({Io:D=>{E?G(It,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(m||(G(It,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),G(It,`RPC '${e}' stream ${i} sending:`,D),f.send(D))},To:()=>f.close()}),x=(D,S,w)=>{D.listen(S,A=>{try{w(A)}catch(M){setTimeout(()=>{throw M},0)}})};return x(f,ta.EventType.OPEN,()=>{E||(G(It,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),x(f,ta.EventType.CLOSE,()=>{E||(E=!0,G(It,`RPC '${e}' stream ${i} transport closed`),T.So())}),x(f,ta.EventType.ERROR,D=>{E||(E=!0,Zs(It,`RPC '${e}' stream ${i} transport errored:`,D),T.So(new X(V.UNAVAILABLE,"The operation could not be completed")))}),x(f,ta.EventType.MESSAGE,D=>{var S;if(!E){const w=D.data[0];Ce(!!w);const A=w,M=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(M){G(It,`RPC '${e}' stream ${i} received error:`,M);const j=M.status;let z=function(C){const k=Ye[C];if(k!==void 0)return jI(k)}(j),I=M.message;z===void 0&&(z=V.INTERNAL,I="Unknown error status: "+j+" with message "+M.message),E=!0,T.So(new X(z,I)),f.close()}else G(It,`RPC '${e}' stream ${i} received:`,w),T.bo(w)}}),x(a,fI.STAT_EVENT,D=>{D.stat===Kf.PROXY?G(It,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Kf.NOPROXY&&G(It,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function bd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){return new Yb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new XI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new X(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class z2 extends JI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Zb(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?Wn(o.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=rp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Jf(u)?{documents:n2(s,u)}:{query:r2(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=BI(s,o.resumeToken);const c=ep(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=Ic(s,o.snapshotVersion.toTimestamp());const c=ep(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=s2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=rp(this.serializer),n.removeTarget=e,this.a_(n)}}class B2 extends JI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=t2(e.writeResults,e.commitTime),r=Wn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=rp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>e2(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new X(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,tp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,tp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class $2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fr(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Zi(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=oe(u);c.L_.add(4),await _l(c),c.q_.set("Unknown"),c.L_.delete(4),await wh(c)}(this))})}),this.q_=new $2(r,i)}}async function wh(t){if(Zi(t))for(const e of t.B_)await e(!0)}async function _l(t){for(const e of t.B_)await e(!1)}function ZI(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Qm(n)?Gm(n):yo(n).r_()&&Km(n,e))}function qm(t,e){const n=oe(t),r=yo(n);n.N_.delete(e),r.r_()&&eS(n,e),n.N_.size===0&&(r.r_()?r.o_():Zi(n)&&n.q_.set("Unknown"))}function Km(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yo(t).A_(e)}function eS(t,e){t.Q_.xe(e),yo(t).R_(e)}function Gm(t){t.Q_=new qb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),yo(t).start(),t.q_.v_()}function Qm(t){return Zi(t)&&!yo(t).n_()&&t.N_.size>0}function Zi(t){return oe(t).L_.size===0}function tS(t){t.Q_=void 0}async function q2(t){t.q_.set("Online")}async function K2(t){t.N_.forEach((e,n)=>{Km(t,e)})}async function G2(t,e){tS(t),Qm(t)?(t.q_.M_(e),Gm(t)):t.q_.set("Unknown")}async function Q2(t,e,n){if(t.q_.set("Online"),e instanceof zI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sc(t,r)}else if(e instanceof Du?t.Q_.Ke(e):e instanceof UI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await YI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(_t.EMPTY_BYTE_STRING,d.snapshotVersion)),eS(s,u);const f=new Vr(d.target,u,c,d.sequenceNumber);Km(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Sc(t,r)}}async function Sc(t,e,n){if(!pl(e))throw e;t.L_.add(1),await _l(t),t.q_.set("Offline"),n||(n=()=>YI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await wh(t)})}function nS(t,e){return e().catch(n=>Sc(t,n,e))}async function Th(t){const e=oe(t),n=ri(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Y2(e);)try{const i=await D2(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,X2(e,i)}catch(i){await Sc(e,i)}rS(e)&&iS(e)}function Y2(t){return Zi(t)&&t.O_.length<10}function X2(t,e){t.O_.push(e);const n=ri(t);n.r_()&&n.V_&&n.m_(e.mutations)}function rS(t){return Zi(t)&&!ri(t).n_()&&t.O_.length>0}function iS(t){ri(t).start()}async function J2(t){ri(t).p_()}async function Z2(t){const e=ri(t);for(const n of t.O_)e.m_(n.mutations)}async function eD(t,e,n){const r=t.O_.shift(),i=Um.from(r,e,n);await nS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Th(t)}async function tD(t,e){e&&ri(t).V_&&await async function(r,i){if(function(o){return Wb(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();ri(r).s_(),await nS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Th(r)}}(t,e),rS(t)&&iS(t)}async function Xv(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Zi(n);n.L_.add(3),await _l(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await wh(n)}async function nD(t,e){const n=oe(t);e?(n.L_.delete(2),await wh(n)):e||(n.L_.add(2),await _l(n),n.q_.set("Unknown"))}function yo(t){return t.K_||(t.K_=function(n,r,i){const s=oe(n);return s.w_(),new z2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:q2.bind(null,t),Ro:K2.bind(null,t),mo:G2.bind(null,t),d_:Q2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Qm(t)?Gm(t):t.q_.set("Unknown")):(await t.K_.stop(),tS(t))})),t.K_}function ri(t){return t.U_||(t.U_=function(n,r,i){const s=oe(n);return s.w_(),new B2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:J2.bind(null,t),mo:tD.bind(null,t),f_:Z2.bind(null,t),g_:eD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Th(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ym(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xm(t,e){if(fr("AsyncQueue",`${e}: ${t}`),pl(t))return new X(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=na(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.W_=new Je(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new io(e,n,Us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class iD{constructor(){this.queries=Zv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=Zv(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new X(V.ABORTED,"Firestore shutting down"))}}function Zv(){return new _o(t=>kI(t),mh)}async function Jm(t,e){const n=oe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new rD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Xm(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&eg(n)}async function Zm(t,e){const n=oe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sD(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&eg(n)}function oD(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function eg(t){t.Y_.forEach(e=>{e.next()})}var sp,e0;(e0=sp||(sp={})).ea="default",e0.Cache="cache";class tg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==sp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.key=e}}class oS{constructor(e){this.key=e}}class aD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=AI(e),this.Ra=new Us(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Jv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=gh(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),x=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;m&&E?m.data.isEqual(E.data)?T!==x&&(r.track({type:3,doc:E}),D=!0):this.ga(m,E)||(r.track({type:2,doc:E}),D=!0,(u&&this.Aa(E,u)>0||c&&this.Aa(E,c)<0)&&(a=!0)):!m&&E?(r.track({type:0,doc:E}),D=!0):m&&!E&&(r.track({type:1,doc:m}),D=!0,(u||c)&&(a=!0)),D&&(E?(o=o.add(E),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(E,T){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return x(E)-x(T)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new io(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Jv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new oS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new sS(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return io.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class lD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uD{constructor(e){this.key=e,this.va=!1}}class cD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new _o(a=>kI(a),mh),this.Ma=new Map,this.xa=new Set,this.Oa=new Je(J.comparator),this.Na=new Map,this.La=new Wm,this.Ba={},this.ka=new Map,this.qa=ro.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function hD(t,e,n=!0){const r=dS(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await aS(r,e,n,!0),i}async function dD(t,e){const n=dS(t);await aS(n,e,!0,!1)}async function aS(t,e,n,r){const i=await O2(t.localStore,Bn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await fD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ZI(t.remoteStore,i),a}async function fD(t,e,n,r,i){t.Ka=(f,m,E)=>async function(x,D,S,w){let A=D.view.ma(S);A.ns&&(A=await Gv(x.localStore,D.query,!1).then(({documents:I})=>D.view.ma(I,A)));const M=w&&w.targetChanges.get(D.targetId),j=w&&w.targetMismatches.get(D.targetId)!=null,z=D.view.applyChanges(A,x.isPrimaryClient,M,j);return n0(x,D.targetId,z.wa),z.snapshot}(t,f,m,E);const s=await Gv(t.localStore,e,!0),o=new aD(e,s.Ts),a=o.ma(s.documents),u=gl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);n0(t,n,c.wa);const d=new lD(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function pD(t,e,n){const r=oe(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!mh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ip(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&qm(r.remoteStore,i.targetId),op(r,i.targetId)}).catch(fl)):(op(r,i.targetId),await ip(r.localStore,i.targetId,!0))}async function mD(t,e){const n=oe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qm(n.remoteStore,r.targetId))}async function gD(t,e,n){const r=ID(t);try{const i=await function(o,a){const u=oe(o),c=rt.now(),d=a.reduce((E,T)=>E.add(T.key),me());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let T=pr(),x=me();return u.cs.getEntries(E,d).next(D=>{T=D,T.forEach((S,w)=>{w.isValidDocument()||(x=x.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,T)).next(D=>{f=D;const S=[];for(const w of a){const A=Fb(w,f.get(w.key).overlayedDocument);A!=null&&S.push(new hi(w.key,A,EI(A.value.mapValue),nn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,S,a)}).next(D=>{m=D;const S=D.applyToLocalDocumentSet(f,x);return u.documentOverlayCache.saveOverlays(E,D.batchId,S)})}).then(()=>({batchId:m.batchId,changes:PI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Je(we)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await yl(r,i.changes),await Th(r.remoteStore)}catch(i){const s=Xm(i,"Failed to persist write");n.reject(s)}}async function lS(t,e){const n=oe(t);try{const r=await N2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Ce(o.va):i.removedDocuments.size>0&&(Ce(o.va),o.va=!1))}),await yl(n,r,e)}catch(r){await fl(r)}}function t0(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=oe(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&eg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _D(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Je(J.comparator);o=o.insert(s,kt.newNoDocument(s,se.min()));const a=me().add(s),u=new vh(se.min(),new Map,new Je(we),o,a);await lS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ng(r)}else await ip(r.localStore,e,!1).then(()=>op(r,e,n)).catch(fl)}async function yD(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await P2(n.localStore,e);cS(n,r,null),uS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yl(n,i)}catch(i){await fl(i)}}async function vD(t,e,n){const r=oe(t);try{const i=await function(o,a){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Ce(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);cS(r,e,n),uS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yl(r,i)}catch(i){await fl(i)}}function uS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function cS(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function op(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||hS(t,r)})}function hS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(qm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ng(t))}function n0(t,e,n){for(const r of n)r instanceof sS?(t.La.addReference(r.key,e),ED(t,r)):r instanceof oS?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||hS(t,r.key)):re()}function ED(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),ng(t))}function ng(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(Ue.fromString(e)),r=t.qa.next();t.Na.set(r,new uD(n)),t.Oa=t.Oa.insert(n,r),ZI(t.remoteStore,new Vr(Bn(ph(n.path)),r,"TargetPurposeLimboResolution",bm.oe))}}async function yl(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Hm.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=oe(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,m=>F.forEach(m.$i,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>F.forEach(m.Ui,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!pl(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.os.get(m),T=E.snapshotVersion,x=E.withLastLimboFreeSnapshotVersion(T);d.os=d.os.insert(m,x)}}}(r.localStore,s))}async function wD(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await QI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new X(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yl(n,r.hs)}}function TD(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let i=me();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function dS(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_D.bind(null,e),e.Ca.d_=sD.bind(null,e.eventManager),e.Ca.$a=oD.bind(null,e.eventManager),e}function ID(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vD.bind(null,e),e}class Cc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return x2(this.persistence,new k2,e.initialUser,this.serializer)}Ga(e){return new S2($m.Zr,this.serializer)}Wa(e){return new L2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cc.provider={build:()=>new Cc};class ap{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>t0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wD.bind(null,this.syncEngine),await nD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iD}()}createDatastore(e){const n=Eh(e.databaseInfo.databaseId),r=function(s){return new U2(s)}(e.databaseInfo);return function(s,o,a,u){return new W2(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new H2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>t0(this.syncEngine,n,0),function(){return Yv.D()?new Yv:new V2}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new cD(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await _l(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ap.provider={build:()=>new ap};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=_I.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dd(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function r0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CD(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Xv(e.remoteStore,i)),t._onlineComponents=e}async function CD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await Dd(t,new Cc)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Dd(t,new Cc);return t._offlineComponents}async function fS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await r0(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await r0(t,new ap))),t._onlineComponents}function RD(t){return fS(t).then(e=>e.syncEngine)}async function Rc(t){const e=await fS(t),n=e.eventManager;return n.onListen=hD.bind(null,e.syncEngine),n.onUnlisten=pD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mD.bind(null,e.syncEngine),n}function kD(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new rg({next:m=>{d.Za(),o.enqueueAndForget(()=>Zm(s,f));const E=m.docs.has(a);!E&&m.fromCache?c.reject(new X(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new X(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new tg(ph(a.path),d,{includeMetadataChanges:!0,_a:!0});return Jm(s,f)}(await Rc(t),t.asyncQueue,e,n,r)),r.promise}function AD(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new rg({next:m=>{d.Za(),o.enqueueAndForget(()=>Zm(s,f)),m.fromCache&&u.source==="server"?c.reject(new X(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new tg(a,d,{includeMetadataChanges:!0,_a:!0});return Jm(s,f)}(await Rc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(t,e,n){if(!n)throw new X(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xD(t,e,n,r){if(e===!0&&r===!0)throw new X(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function s0(t){if(!J.isDocumentKey(t))throw new X(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function o0(t){if(J.isDocumentKey(t))throw new X(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ig(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ig(t);throw new X(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new X(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new X(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new X(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ih{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qN;switch(r.type){case"firstParty":return new YN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=i0.get(n);r&&(G("ComponentProvider","Removing Datastore"),i0.delete(n),r.terminate())}(this),Promise.resolve()}}function PD(t,e,n,r={}){var i;const s=(t=rn(t,Ih))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Ct.MOCK_USER;else{a=TT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new X(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ct(c)}t._authCredentials=new KN(new gI(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vl(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Yr extends vl{constructor(e,n,r){super(e,n,ph(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new J(e))}withConverter(e){return new Yr(this.firestore,e,this._path)}}function lp(t,e,...n){if(t=xe(t),mS("collection","path",e),t instanceof Ih){const r=Ue.fromString(e,...n);return o0(r),new Yr(t,null,r)}{if(!(t instanceof Vt||t instanceof Yr))throw new X(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return o0(r),new Yr(t.firestore,null,r)}}function Fr(t,e,...n){if(t=xe(t),arguments.length===1&&(e=_I.newId()),mS("doc","path",e),t instanceof Ih){const r=Ue.fromString(e,...n);return s0(r),new Vt(t,null,new J(r))}{if(!(t instanceof Vt||t instanceof Yr))throw new X(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return s0(r),new Vt(t.firestore,t instanceof Yr?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new XI(this,"async_queue_retry"),this.Vu=()=>{const r=bd();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=bd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=bd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!pl(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Ym.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function u0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ii extends Ih{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new l0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new l0(e),this._firestoreClient=void 0,await e}}}function ND(t,e){const n=typeof t=="object"?t:wm(),r=typeof t=="string"?t:"(default)",i=lh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vT("firestore");s&&PD(i,...s)}return i}function El(t){if(t._terminated)throw new X(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bD(t),t._firestoreClient}function bD(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new ub(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,pS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new SD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this._byteString=e}static fromBase64String(e){try{return new so(_t.fromBase64String(e))}catch(n){throw new X(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new so(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=/^__.*__$/;class OD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ml(e,this.data,n,this.fieldTransforms)}}class gS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _S(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class lg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new lg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return kc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_S(this.Cu)&&DD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class MD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Eh(e)}Qu(e,n,r,i=!1){return new lg({Cu:e,methodName:n,qu:r,path:ft.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ug(t){const e=t._freezeSettings(),n=Eh(t._databaseId);return new MD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yS(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);cg("Data must be an object, but it was:",o,r);const a=wS(r,o);let u,c;if(s.merge)u=new en(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=up(e,f,n);if(!o.contains(m))throw new X(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);IS(d,m)||d.push(m)}u=new en(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new OD(new zt(a),u,c)}class Sh extends sg{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Sh}}function vS(t,e,n,r){const i=t.Qu(1,e,n);cg("Data must be an object, but it was:",i,r);const s=[],o=zt.empty();Ji(r,(u,c)=>{const d=hg(e,u,n);c=xe(c);const f=i.Nu(d);if(c instanceof Sh)s.push(d);else{const m=Ch(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new en(s);return new gS(o,a,i.fieldTransforms)}function ES(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[up(e,r,n)],u=[i];if(s.length%2!=0)throw new X(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(up(e,s[m])),u.push(s[m+1]);const c=[],d=zt.empty();for(let m=a.length-1;m>=0;--m)if(!IS(c,a[m])){const E=a[m];let T=u[m];T=xe(T);const x=o.Nu(E);if(T instanceof Sh)c.push(E);else{const D=Ch(T,x);D!=null&&(c.push(E),d.set(E,D))}}const f=new en(c);return new gS(d,f,o.fieldTransforms)}function Ch(t,e){if(TS(t=xe(t)))return cg("Unsupported field value:",e,t),wS(t,e);if(t instanceof sg)return function(r,i){if(!_S(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ch(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=rt.fromDate(r);return{timestampValue:Ic(i.serializer,s)}}if(r instanceof rt){const s=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ic(i.serializer,s)}}if(r instanceof og)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof so)return{bytesValue:BI(i.serializer,r._byteString)};if(r instanceof Vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ag)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Fm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ig(r)}`)}(t,e)}function wS(t,e){const n={};return yI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ji(t,(r,i)=>{const s=Ch(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function TS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof og||t instanceof so||t instanceof Vt||t instanceof sg||t instanceof ag)}function cg(t,e,n){if(!TS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ig(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function up(t,e,n){if((e=xe(e))instanceof wl)return e._internalPath;if(typeof e=="string")return hg(t,e);throw kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const LD=new RegExp("[~\\*/\\[\\]]");function hg(t,e,n){if(e.search(LD)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wl(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new X(V.INVALID_ARGUMENT,a+t+u)}function IS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(CS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VD extends SS{data(){return super.data()}}function CS(t,e){return typeof e=="string"?hg(t,e):e instanceof wl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FD{convertValue(e,n="none"){switch(Wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ji(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ge(o.doubleValue));return new ag(s)}convertGeoPoint(e){return new og(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Om(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const n=ni(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Ce(GI(r));const i=new qa(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AS extends SS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(CS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ou extends AS{data(e={}){return super.data(e)}}class xS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ia(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ou(this._firestore,this._userDataWriter,r.key,r,new ia(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ou(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ia(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ou(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ia(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:jD(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t){t=rn(t,Vt);const e=rn(t.firestore,ii);return kD(El(e),t._key).then(n=>PS(e,t,n))}class dg extends FD{constructor(e){super(),this.firestore=e}convertBytes(e){return new so(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function cp(t){t=rn(t,vl);const e=rn(t.firestore,ii),n=El(e),r=new dg(e);return RS(t._query),AD(n,t._query).then(i=>new xS(e,r,t,i))}function h0(t,e,n){t=rn(t,Vt);const r=rn(t.firestore,ii),i=kS(t.converter,e,n);return fg(r,[yS(ug(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,nn.none())])}function d0(t,e,n,...r){t=rn(t,Vt);const i=rn(t.firestore,ii),s=ug(i);let o;return o=typeof(e=xe(e))=="string"||e instanceof wl?ES(s,"updateDoc",t._key,e,n,r):vS(s,"updateDoc",t._key,e),fg(i,[o.toMutation(t._key,nn.exists(!0))])}function UD(t,...e){var n,r,i;t=xe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||u0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(u0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Vt)c=rn(t.firestore,ii),d=ph(t._key.path),u={next:f=>{e[o]&&e[o](PS(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=rn(t,vl);c=rn(f.firestore,ii),d=f._query;const m=new dg(c);u={next:E=>{e[o]&&e[o](new xS(c,m,f,E))},error:e[o+1],complete:e[o+2]},RS(t._query)}return function(m,E,T,x){const D=new rg(x),S=new tg(E,D,T);return m.asyncQueue.enqueueAndForget(async()=>Jm(await Rc(m),S)),()=>{D.Za(),m.asyncQueue.enqueueAndForget(async()=>Zm(await Rc(m),S))}}(El(c),d,a,u)}function fg(t,e){return function(r,i){const s=new sr;return r.asyncQueue.enqueueAndForget(async()=>gD(await RD(r),i,s)),s.promise}(El(t),e)}function PS(t,e,n){const r=n.docs.get(e._key),i=new dg(t);return new AS(t,i,e._key,r,new ia(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ug(e)}set(e,n,r){this._verifyNotCommitted();const i=Od(e,this._firestore),s=kS(i.converter,n,r),o=yS(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,nn.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Od(e,this._firestore);let o;return o=typeof(n=xe(n))=="string"||n instanceof wl?ES(this._dataReader,"WriteBatch.update",s._key,n,r,i):vS(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,nn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Od(e,this._firestore);return this._mutations=this._mutations.concat(new jm(n._key,nn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new X(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Od(t,e){if((t=xe(t)).firestore!==e)throw new X(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){return El(t=rn(t,ii)),new zD(t,e=>fg(t,e))}(function(e,n=!0){(function(i){go=i})(Yi),Fi(new ei("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ii(new GN(r.getProvider("auth-internal")),new JN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new X(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qa(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),jn(kv,"4.7.3",e),jn(kv,"4.7.3","esm2017")})();var f0={};const p0="@firebase/database",m0="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NS="";function WD(t){NS=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),lt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:za(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $D(e)}}catch{}return new HD},Ai=bS("localStorage"),qD=bS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new ah("@firebase/database"),KD=function(){let t=1;return function(){return t++}}(),DS=function(t){const e=IA(t),n=new vA;n.update(e);const r=n.digest();return _m.encodeByteArray(r)},Tl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Tl.apply(null,r):typeof r=="object"?e+=lt(r):e+=r,e+=" "}return e};let va=null,g0=!0;const GD=function(t,e){B(!0,"Can't turn on custom loggers persistently."),zs.logLevel=pe.VERBOSE,va=zs.log.bind(zs)},At=function(...t){if(g0===!0&&(g0=!1,va===null&&qD.get("logging_enabled")===!0&&GD()),va){const e=Tl.apply(null,t);va(e)}},Il=function(t){return function(...e){At(t,...e)}},hp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Tl(...t);zs.error(e)},mr=function(...t){const e=`FIREBASE FATAL ERROR: ${Tl(...t)}`;throw zs.error(e),new Error(e)},Gt=function(...t){const e="FIREBASE WARNING: "+Tl(...t);zs.warn(e)},QD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},OS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},YD=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oo="[MIN_NAME]",$i="[MAX_NAME]",vo=function(t,e){if(t===e)return 0;if(t===oo||e===$i)return-1;if(e===oo||t===$i)return 1;{const n=_0(t),r=_0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},XD=function(t,e){return t===e?0:t<e?-1:1},$o=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+lt(e))},pg=function(t){if(typeof t!="object"||t===null)return lt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=lt(e[r]),n+=":",n+=pg(t[e[r]]);return n+="}",n},MS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Qt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const LS=function(t){B(!OS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},JD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function eO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const tO=new RegExp("^-?(0*)\\d{1,10}$"),nO=-2147483648,rO=2147483647,_0=function(t){if(tO.test(t)){const e=Number(t);if(e>=nO&&e<=rO)return e}return null},Eo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},iO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ea=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Gt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(At("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Gt(e)}}class Mu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="5",VS="v",FS="s",jS="r",US="f",zS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,BS="ls",WS="p",dp="ac",$S="websocket",HS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ai.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ai.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function KS(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===$S)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===HS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aO(t)&&(n.ns=t.namespace);const i=[];return Qt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(){this.counters_={}}incrementCounter(e,n=1){vr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return eA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md={},Ld={};function gg(t){const e=t.toString();return Md[e]||(Md[e]=new lO),Md[e]}function uO(t,e){const n=t.toString();return Ld[n]||(Ld[n]=e()),Ld[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Eo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="start",hO="close",dO="pLPCommand",fO="pRTLPCB",GS="id",QS="pw",YS="ser",pO="cb",mO="seg",gO="ts",_O="d",yO="dframe",XS=1870,JS=30,vO=XS-JS,EO=25e3,wO=3e4;class xs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Il(e),this.stats_=gg(n),this.urlFn=u=>(this.appCheckToken&&(u[dp]=this.appCheckToken),KS(n,HS,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wO)),YD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _g((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===y0)this.id=a,this.password=u;else if(o===hO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[y0]="t",r[YS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[VS]=mg,this.transportSessionId&&(r[FS]=this.transportSessionId),this.lastSessionId&&(r[BS]=this.lastSessionId),this.applicationId&&(r[WS]=this.applicationId),this.appCheckToken&&(r[dp]=this.appCheckToken),typeof location<"u"&&location.hostname&&zS.test(location.hostname)&&(r[jS]=US);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xs.forceAllow_=!0}static forceDisallow(){xs.forceDisallow_=!0}static isAvailable(){return xs.forceAllow_?!0:!xs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!JD()&&!ZD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gT(n),i=MS(r,vO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[yO]="t",r[GS]=e,r[QS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=lt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _g{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KD(),window[dO+this.uniqueCallbackIdentifier]=e,window[fO+this.uniqueCallbackIdentifier]=n,this.myIFrame=_g.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){At("frame writing exception"),a.stack&&At(a.stack),At(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||At("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[GS]=this.myID,e[QS]=this.myPW,e[YS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+JS+r.length<=XS;){const o=this.pendingSegs.shift();r=r+"&"+mO+i+"="+o.seg+"&"+gO+i+"="+o.ts+"&"+_O+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(EO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{At("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=16384,IO=45e3;let Ac=null;typeof MozWebSocket<"u"?Ac=MozWebSocket:typeof WebSocket<"u"&&(Ac=WebSocket);class Cn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Il(this.connId),this.stats_=gg(n),this.connURL=Cn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[VS]=mg,typeof location<"u"&&location.hostname&&zS.test(location.hostname)&&(o[jS]=US),n&&(o[FS]=n),r&&(o[BS]=r),i&&(o[dp]=i),s&&(o[WS]=s),KS(e,$S,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ai.set("previous_websocket_failure",!0);try{let r;cA(),this.mySock=new Ac(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ac!==null&&!Cn.forceDisallow_}static previouslyFailed(){return Ai.isInMemoryStorage||Ai.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ai.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=za(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=MS(n,TO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Cn.responsesRequiredToBeHealthy=2;Cn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xs,Cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Cn&&Cn.isAvailable();let r=n&&!Cn.previouslyFailed();if(e.webSocketOnly&&(n||Gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Cn];else{const i=this.transports_=[];for(const s of Ya.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ya.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ya.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=6e4,CO=5e3,RO=10*1024,kO=100*1024,Vd="t",v0="d",AO="s",E0="r",xO="e",w0="o",T0="a",I0="n",S0="p",PO="h";class NO{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Il("c:"+this.id+":"),this.transportManager_=new Ya(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ea(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vd in e){const n=e[Vd];n===T0?this.upgradeIfSecondaryHealthy_():n===E0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===w0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$o("t",e),r=$o("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:S0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:T0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:I0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$o("t",e),r=$o("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$o(Vd,e);if(v0 in e){const r=e[v0];if(n===PO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===I0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===AO?this.onConnectionShutdown_(r):n===E0?this.onReset_(r):n===xO?hp("Server Error: "+r):n===w0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mg!==r&&Gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ea(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ea(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(CO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:S0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ai.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends eC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ym()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xc}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=32,R0=768;class Pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Te(){return new Pe("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function si(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Pe(t.pieces_,e)}function tC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function nC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Pe(e,0)}function tt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Pe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Pe(n,0)}function de(t){return t.pieceNum_>=t.pieces_.length}function Wt(t,e){const n=ue(t),r=ue(e);if(n===null)return e;if(n===r)return Wt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yg(t,e){if(si(t)!==si(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Rn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(si(t)>si(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class DO{constructor(e,n){this.errorPrefix_=n,this.parts_=nC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=oh(this.parts_[r]);iC(this)}}function OO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=oh(e),iC(t)}function MO(t){const e=t.parts_.pop();t.byteLength_-=oh(e),t.parts_.length>0&&(t.byteLength_-=1)}function iC(t){if(t.byteLength_>R0)throw new Error(t.errorPrefix_+"has a key path longer than "+R0+" bytes ("+t.byteLength_+").");if(t.parts_.length>C0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+C0+") or object contains a cycle "+Ii(t))}function Ii(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg extends eC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new vg}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=1e3,LO=60*5*1e3,k0=30*1e3,VO=1.3,FO=3e4,jO="server_kill",A0=3;class or extends ZS{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=or.nextPersistentConnectionId_++,this.log_=Il("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ho,this.maxReconnectDelay_=LO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(lt(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new sh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;or.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vr(e,"w")){const r=Xs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=k0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_A(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+lt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hp("Unrecognized action received from server: "+lt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FO&&(this.reconnectDelay_=Ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+or.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?At("getToken() completed but was canceled"):(At("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new NO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,E=>{Gt(E+" ("+this.repoInfo_.toString()+")"),this.interrupt(jO)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Gt(f),u())}}}interrupt(e){At("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){At("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vf(this.interruptReasons_)&&(this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>pg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Pe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){At("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=A0&&(this.reconnectDelay_=k0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){At("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=A0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+NS.replace(/\./g,"-")]=1,ym()?e["framework.cordova"]=1:IT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xc.getInstance().currentlyOnline();return Vf(this.interruptReasons_)&&e}}or.nextPersistentConnectionId_=0;or.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ce(oo,e),i=new ce(oo,n);return this.compare(r,i)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;class sC extends Rh{static get __EMPTY_NODE(){return du}static set __EMPTY_NODE(e){du=e}compare(e,n){return vo(e.name,n.name)}isDefinedOn(e){throw fo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce($i,du)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,du)}toString(){return".key"}}const Bs=new sC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??$t.EMPTY_NODE,this.right=s??$t.EMPTY_NODE}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $t.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}at.RED=!0;at.BLACK=!1;class UO{copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,n=$t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,at.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,at.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fu(this.root_,null,this.comparator_,!0,e)}}$t.EMPTY_NODE=new UO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(t,e){return vo(t.name,e.name)}function Eg(t,e){return vo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fp;function BO(t){fp=t}const oC=function(t){return typeof t=="number"?"number:"+LS(t):"string:"+t},aC=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vr(e,".sv"),"Priority must be a string or number.")}else B(t===fp||t.isEmpty(),"priority of unexpected type.");B(t===fp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x0;class it{constructor(e,n=it.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),aC(this.priorityNode_)}static set __childrenNodeConstructor(e){x0=e}static get __childrenNodeConstructor(){return x0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new it(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:ue(e)===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:it.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ue(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||si(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,it.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+oC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=LS(this.value_):e+=this.value_,this.lazyHash_=DS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===it.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof it.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=it.VALUE_TYPE_ORDER.indexOf(n),s=it.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}it.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lC,uC;function WO(t){lC=t}function $O(t){uC=t}class HO extends Rh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?vo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce($i,new it("[PRIORITY-POST]",uC))}makePost(e,n){const r=lC(e);return new ce(n,new it("[PRIORITY-POST]",r))}toString(){return".priority"}}const qe=new HO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=Math.log(2);class KO{constructor(e){const n=s=>parseInt(Math.log(s)/qO,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pc=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new at(m,f.node,at.BLACK,null,null);{const E=parseInt(d/2,10)+u,T=i(u,E),x=i(E+1,c);return f=t[E],m=n?n(f):f,new at(m,f.node,at.BLACK,T,x)}},s=function(u){let c=null,d=null,f=t.length;const m=function(T,x){const D=f-T,S=f;f-=T;const w=i(D+1,S),A=t[D],M=n?n(A):A;E(new at(M,A.node,x,null,w))},E=function(T){c?(c.left=T,c=T):(d=T,c=T)};for(let T=0;T<u.count;++T){const x=u.nextBitIsOne(),D=Math.pow(2,u.count-(T+1));x?m(D,at.BLACK):(m(D,at.BLACK),m(D,at.RED))}return d},o=new KO(t.length),a=s(o);return new $t(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd;const us={};class nr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(us&&qe,"ChildrenNode.ts has not been loaded"),Fd=Fd||new nr({".priority":us},{".priority":qe}),Fd}get(e){const n=Xs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $t?n:null}hasIndex(e){return vr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Bs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ce.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Pc(r,e.getCompare()):a=us;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new nr(d,c)}addToIndexes(e,n){const r=cc(this.indexes_,(i,s)=>{const o=Xs(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===us)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ce.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Pc(a,o.getCompare())}else return us;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ce(e.name,a))),u.insert(e,e.node)}});return new nr(r,this.indexSet_)}removeFromIndexes(e,n){const r=cc(this.indexes_,i=>{if(i===us)return i;{const s=n.get(e.name);return s?i.remove(new ce(e.name,s)):i}});return new nr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo;class te{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&aC(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qo||(qo=new te(new $t(Eg),null,nr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qo}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qo:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ce(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?qo:this.priorityNode_;return new te(i,o,s)}}updateChild(e,n){const r=ue(e);if(r===null)return n;{B(ue(e)!==".priority"||si(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(be(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(qe,(o,a)=>{n[o]=a.val(e),r++,s&&te.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+oC(this.getPriority().val())+":"),this.forEachChild(qe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":DS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ce(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Sl?-1:0}withIndex(e){if(e===Bs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(qe),i=n.getIterator(qe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Bs?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GO extends te{constructor(){super(new $t(Eg),te.EMPTY_NODE,nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const Sl=new GO;Object.defineProperties(ce,{MIN:{value:new ce(oo,te.EMPTY_NODE)},MAX:{value:new ce($i,Sl)}});sC.__EMPTY_NODE=te.EMPTY_NODE;it.__childrenNodeConstructor=te;BO(Sl);$O(Sl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=!0;function dt(t,e=null){if(t===null)return te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new it(n,dt(e))}if(!(t instanceof Array)&&QO){const n=[];let r=!1;if(Qt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=dt(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ce(o,u)))}}),n.length===0)return te.EMPTY_NODE;const s=Pc(n,zO,o=>o.name,Eg);if(r){const o=Pc(n,qe.getCompare());return new te(s,dt(e),new nr({".priority":o},{".priority":qe}))}else return new te(s,dt(e),nr.Default)}else{let n=te.EMPTY_NODE;return Qt(t,(r,i)=>{if(vr(t,r)&&r.substring(0,1)!=="."){const s=dt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(dt(e))}}WO(dt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO extends Rh{constructor(e){super(),this.indexPath_=e,B(!de(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?vo(e.name,n.name):s}makePost(e,n){const r=dt(e),i=te.EMPTY_NODE.updateChild(this.indexPath_,r);return new ce(n,i)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,Sl);return new ce($i,e)}toString(){return nC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO extends Rh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const r=dt(e);return new ce(n,r)}toString(){return".value"}}const JO=new XO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){return{type:"value",snapshotNode:t}}function ao(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Xa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ja(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ZO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Xa(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ao(n,r)):o.trackChildChange(Ja(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(qe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Xa(i,s))}),n.isLeafNode()||n.forEachChild(qe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ja(i,s,o))}else r.trackChildChange(ao(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.indexedFilter_=new wg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Za.getStartPost_(e),this.endPost_=Za.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ce(n,r))||(r=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=te.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(te.EMPTY_NODE);const s=this;return n.forEachChild(qe,(o,a)=>{s.matches(new ce(o,a))||(i=i.updateImmediateChild(o,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Za(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ce(n,r))||(r=te.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=te.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(te.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,E)=>f(E,m)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new ce(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const E=m==null?1:o(m,u);if(d&&!r.isEmpty()&&E>=0)return s!=null&&s.trackChildChange(Ja(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Xa(n,f));const x=a.updateImmediateChild(n,te.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(ao(m.name,m.node)),x.updateImmediateChild(m.name,m.node)):x}}else return r.isEmpty()?e:d&&o(c,u)>=0?(s!=null&&(s.trackChildChange(Xa(c.name,c.node)),s.trackChildChange(ao(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oo}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$i}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qe}copy(){const e=new Tg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tM(t){return t.loadsAllData()?new wg(t.getIndex()):t.hasLimit()?new eM(t):new Za(t)}function P0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===qe?n="$priority":t.index_===JO?n="$value":t.index_===Bs?n="$key":(B(t.index_ instanceof YO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=lt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=lt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+lt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=lt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+lt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function N0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==qe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends ZS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Il("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Nc.getListenId_(e,r),a={};this.listens_[o]=a;const u=P0(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Xs(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Nc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=P0(e._queryParams),r=e._path.toString(),i=new sh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+po(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=za(a.responseText)}catch{Gt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Gt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){return{value:null,children:new Map}}function hC(t,e,n){if(de(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ue(e);t.children.has(r)||t.children.set(r,bc());const i=t.children.get(r);e=be(e),hC(i,e,n)}}function pp(t,e,n){t.value!==null?n(e,t.value):rM(t,(r,i)=>{const s=new Pe(e.toString()+"/"+r);pp(i,s,n)})}function rM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=10*1e3,sM=30*1e3,oM=5*60*1e3;class aM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iM(e);const r=b0+(sM-b0)*Math.random();Ea(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Qt(e,(i,s)=>{s>0&&vr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ea(this.reportStats_.bind(this),Math.floor(Math.random()*2*oM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(kn||(kn={}));function dC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ig(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=kn.ACK_USER_WRITE,this.source=dC()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Pe(e));return new Dc(Te(),n,this.revert)}}else return B(ue(this.path)===e,"operationForChild called for unrelated child."),new Dc(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.source=e,this.path=n,this.type=kn.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new el(this.source,Te()):new el(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=kn.OVERWRITE}operationForChild(e){return de(this.path)?new Hi(this.source,Te(),this.snap.getImmediateChild(e)):new Hi(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=kn.MERGE}operationForChild(e){if(de(this.path)){const n=this.children.subtree(new Pe(e));return n.isEmpty()?null:n.value?new Hi(this.source,Te(),n.value):new tl(this.source,Te(),n)}else return B(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tl(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(de(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uM(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ZO(o.childName,o.snapshotNode))}),Ko(t,i,"child_removed",e,r,n),Ko(t,i,"child_added",e,r,n),Ko(t,i,"child_moved",s,r,n),Ko(t,i,"child_changed",e,r,n),Ko(t,i,"value",e,r,n),i}function Ko(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>hM(t,a,u)),o.forEach(a=>{const u=cM(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function cM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hM(t,e,n){if(e.childName==null||n.childName==null)throw fo("Should only compare child_ events.");const r=new ce(e.childName,e.snapshotNode),i=new ce(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t,e){return{eventCache:t,serverCache:e}}function wa(t,e,n,r){return kh(new qi(e,n,r),t.serverCache)}function fC(t,e,n,r){return kh(t.eventCache,new qi(e,n,r))}function mp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ki(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jd;const dM=()=>(jd||(jd=new $t(XD)),jd);class Le{constructor(e,n=dM()){this.value=e,this.children=n}static fromObject(e){let n=new Le(null);return Qt(e,(r,i)=>{n=n.set(new Pe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Te(),value:this.value};if(de(e))return null;{const r=ue(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(be(e),n);return s!=null?{path:tt(new Pe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const n=ue(e),r=this.children.get(n);return r!==null?r.subtree(be(e)):new Le(null)}}set(e,n){if(de(e))return new Le(n,this.children);{const r=ue(e),s=(this.children.get(r)||new Le(null)).set(be(e),n),o=this.children.insert(r,s);return new Le(this.value,o)}}remove(e){if(de(e))return this.children.isEmpty()?new Le(null):new Le(null,this.children);{const n=ue(e),r=this.children.get(n);if(r){const i=r.remove(be(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Le(null):new Le(this.value,s)}else return this}}get(e){if(de(e))return this.value;{const n=ue(e),r=this.children.get(n);return r?r.get(be(e)):null}}setTree(e,n){if(de(e))return n;{const r=ue(e),s=(this.children.get(r)||new Le(null)).setTree(be(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Le(this.value,o)}}fold(e){return this.fold_(Te(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(tt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Te(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(de(e))return null;{const s=ue(e),o=this.children.get(s);return o?o.findOnPath_(be(e),tt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Te(),n)}foreachOnPath_(e,n,r){if(de(e))return this;{this.value&&r(n,this.value);const i=ue(e),s=this.children.get(i);return s?s.foreachOnPath_(be(e),tt(n,i),r):new Le(null)}}foreach(e){this.foreach_(Te(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(tt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new Le(null))}}function Ta(t,e,n){if(de(e))return new Pn(new Le(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Wt(i,e);return s=s.updateChild(o,n),new Pn(t.writeTree_.set(i,s))}else{const i=new Le(n),s=t.writeTree_.setTree(e,i);return new Pn(s)}}}function D0(t,e,n){let r=t;return Qt(n,(i,s)=>{r=Ta(r,tt(e,i),s)}),r}function O0(t,e){if(de(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new Le(null));return new Pn(n)}}function gp(t,e){return es(t,e)!=null}function es(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Wt(n.path,e)):null}function M0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(qe,(r,i)=>{e.push(new ce(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ce(r,i.value))}),e}function Xr(t,e){if(de(e))return t;{const n=es(t,e);return n!=null?new Pn(new Le(n)):new Pn(t.writeTree_.subtree(e))}}function _p(t){return t.writeTree_.isEmpty()}function lo(t,e){return pC(Te(),t.writeTree_,e)}function pC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=pC(tt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(tt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t,e){return yC(e,t)}function fM(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ta(t.visibleWrites,e,n)),t.lastWriteId=r}function pM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&gM(a,r.path)?i=!1:Rn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return _M(t),!0;if(r.snap)t.visibleWrites=O0(t.visibleWrites,r.path);else{const a=r.children;Qt(a,u=>{t.visibleWrites=O0(t.visibleWrites,tt(r.path,u))})}return!0}else return!1}function gM(t,e){if(t.snap)return Rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rn(tt(t.path,n),e))return!0;return!1}function _M(t){t.visibleWrites=mC(t.allWrites,yM,Te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yM(t){return t.visible}function mC(t,e,n){let r=Pn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Rn(n,o)?(a=Wt(n,o),r=Ta(r,a,s.snap)):Rn(o,n)&&(a=Wt(o,n),r=Ta(r,Te(),s.snap.getChild(a)));else if(s.children){if(Rn(n,o))a=Wt(n,o),r=D0(r,a,s.children);else if(Rn(o,n))if(a=Wt(o,n),de(a))r=D0(r,Te(),s.children);else{const u=Xs(s.children,ue(a));if(u){const c=u.getChild(be(a));r=Ta(r,Te(),c)}}}else throw fo("WriteRecord should have .snap or .children")}}return r}function gC(t,e,n,r,i){if(!r&&!i){const s=es(t.visibleWrites,e);if(s!=null)return s;{const o=Xr(t.visibleWrites,e);if(_p(o))return n;if(n==null&&!gp(o,Te()))return null;{const a=n||te.EMPTY_NODE;return lo(o,a)}}}else{const s=Xr(t.visibleWrites,e);if(!i&&_p(s))return n;if(!i&&n==null&&!gp(s,Te()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Rn(c.path,e)||Rn(e,c.path))},a=mC(t.allWrites,o,e),u=n||te.EMPTY_NODE;return lo(a,u)}}}function vM(t,e,n){let r=te.EMPTY_NODE;const i=es(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(qe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Xr(t.visibleWrites,e);return n.forEachChild(qe,(o,a)=>{const u=lo(Xr(s,new Pe(o)),a);r=r.updateImmediateChild(o,u)}),M0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Xr(t.visibleWrites,e);return M0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function EM(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=tt(e,n);if(gp(t.visibleWrites,s))return null;{const o=Xr(t.visibleWrites,s);return _p(o)?i.getChild(n):lo(o,i.getChild(n))}}function wM(t,e,n,r){const i=tt(e,n),s=es(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Xr(t.visibleWrites,i);return lo(o,r.getNode().getImmediateChild(n))}else return null}function TM(t,e){return es(t.visibleWrites,e)}function IM(t,e,n,r,i,s,o){let a;const u=Xr(t.visibleWrites,e),c=es(u,Te());if(c!=null)a=c;else if(n!=null)a=lo(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let E=m.getNext();for(;E&&d.length<i;)f(E,r)!==0&&d.push(E),E=m.getNext();return d}else return[]}function SM(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function Oc(t,e,n,r){return gC(t.writeTree,t.treePath,e,n,r)}function Rg(t,e){return vM(t.writeTree,t.treePath,e)}function L0(t,e,n,r){return EM(t.writeTree,t.treePath,e,n,r)}function Mc(t,e){return TM(t.writeTree,tt(t.treePath,e))}function CM(t,e,n,r,i,s){return IM(t.writeTree,t.treePath,e,n,r,i,s)}function kg(t,e,n){return wM(t.writeTree,t.treePath,e,n)}function _C(t,e){return yC(tt(t.treePath,e),t.writeTree)}function yC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ja(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Xa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ao(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ja(r,e.snapshotNode,i.oldSnap));else throw fo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const vC=new kM;class Ag{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new qi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ki(this.viewCache_),s=CM(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(t){return{filter:t}}function xM(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function PM(t,e,n,r,i){const s=new RM;let o,a;if(n.type===kn.OVERWRITE){const c=n;c.source.fromUser?o=yp(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!de(c.path),o=Lc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===kn.MERGE){const c=n;c.source.fromUser?o=bM(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===kn.ACK_USER_WRITE){const c=n;c.revert?o=MM(t,e,c.path,r,i,s):o=DM(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===kn.LISTEN_COMPLETE)o=OM(t,e,n.path,r,s);else throw fo("Unknown operation type: "+n.type);const u=s.getChanges();return NM(e,o,u),{viewCache:o,changes:u}}function NM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=mp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(cC(mp(e)))}}function EC(t,e,n,r,i,s){const o=e.eventCache;if(Mc(r,n)!=null)return e;{let a,u;if(de(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ki(e),d=c instanceof te?c:te.EMPTY_NODE,f=Rg(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Oc(r,Ki(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ue(n);if(c===".priority"){B(si(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=L0(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=be(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=L0(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=kg(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return wa(e,a,o.isFullyInitialized()||de(n),t.filter.filtersNodes())}}function Lc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(de(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const E=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),E,null)}else{const E=ue(n);if(!u.isCompleteForPath(n)&&si(n)>1)return e;const T=be(n),D=u.getNode().getImmediateChild(E).updateChild(T,r);E===".priority"?c=d.updatePriority(u.getNode(),D):c=d.updateChild(u.getNode(),E,D,T,vC,null)}const f=fC(e,c,u.isFullyInitialized()||de(n),d.filtersNodes()),m=new Ag(i,f,s);return EC(t,f,n,i,m,a)}function yp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new Ag(i,e,s);if(de(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=wa(e,c,!0,t.filter.filtersNodes());else{const f=ue(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=wa(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=be(n),E=a.getNode().getImmediateChild(f);let T;if(de(m))T=r;else{const x=d.getCompleteChild(f);x!=null?tC(m)===".priority"&&x.getChild(rC(m)).isEmpty()?T=x:T=x.updateChild(m,r):T=te.EMPTY_NODE}if(E.equals(T))u=e;else{const x=t.filter.updateChild(a.getNode(),f,T,m,d,o);u=wa(e,x,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function V0(t,e){return t.eventCache.isCompleteForChild(e)}function bM(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=tt(n,u);V0(e,ue(d))&&(a=yp(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=tt(n,u);V0(e,ue(d))||(a=yp(t,a,d,c,i,s,o))}),a}function F0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function vp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;de(n)?c=r:c=new Le(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const E=e.serverCache.getNode().getImmediateChild(f),T=F0(t,E,m);u=Lc(t,u,new Pe(f),T,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const E=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!E){const T=e.serverCache.getNode().getImmediateChild(f),x=F0(t,T,m);u=Lc(t,u,new Pe(f),x,i,s,o,a)}}),u}function DM(t,e,n,r,i,s,o){if(Mc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(de(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Lc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(de(n)){let c=new Le(null);return u.getNode().forEachChild(Bs,(d,f)=>{c=c.set(new Pe(d),f)}),vp(t,e,n,c,i,s,a,o)}else return e}else{let c=new Le(null);return r.foreach((d,f)=>{const m=tt(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),vp(t,e,n,c,i,s,a,o)}}function OM(t,e,n,r,i){const s=e.serverCache,o=fC(e,s.getNode(),s.isFullyInitialized()||de(n),s.isFiltered());return EC(t,o,n,r,vC,i)}function MM(t,e,n,r,i,s){let o;if(Mc(r,n)!=null)return e;{const a=new Ag(r,e,i),u=e.eventCache.getNode();let c;if(de(n)||ue(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Oc(r,Ki(e));else{const f=e.serverCache.getNode();B(f instanceof te,"serverChildren would be complete if leaf node"),d=Rg(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=ue(n);let f=kg(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,be(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,te.EMPTY_NODE,be(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Oc(r,Ki(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Mc(r,Te())!=null,wa(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new wg(r.getIndex()),s=tM(r);this.processor_=AM(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(te.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(te.EMPTY_NODE,a.getNode(),null),d=new qi(u,o.isFullyInitialized(),i.filtersNodes()),f=new qi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=kh(f,d),this.eventGenerator_=new lM(this.query_)}get query(){return this.query_}}function VM(t){return t.viewCache_.serverCache.getNode()}function FM(t,e){const n=Ki(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!de(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function j0(t){return t.eventRegistrations_.length===0}function jM(t,e){t.eventRegistrations_.push(e)}function U0(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function z0(t,e,n,r){e.type===kn.MERGE&&e.source.queryId!==null&&(B(Ki(t.viewCache_),"We should always have a full cache before handling merges"),B(mp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=PM(t.processor_,i,e,n,r);return xM(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,wC(t,s.changes,s.viewCache.eventCache.getNode(),null)}function UM(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(qe,(s,o)=>{r.push(ao(s,o))}),n.isFullyInitialized()&&r.push(cC(n.getNode())),wC(t,r,n.getNode(),e)}function wC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return uM(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc;class zM{constructor(){this.views=new Map}}function BM(t){B(!Vc,"__referenceConstructor has already been defined"),Vc=t}function WM(){return B(Vc,"Reference.ts has not been loaded"),Vc}function $M(t){return t.views.size===0}function xg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),z0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(z0(o,e,n,r));return s}}function HM(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Oc(n,i?r:null),u=!1;a?u=!0:r instanceof te?(a=Rg(n,r),u=!1):(a=te.EMPTY_NODE,u=!1);const c=kh(new qi(a,u,!1),new qi(r,i,!1));return new LM(e,c)}return o}function qM(t,e,n,r,i,s){const o=HM(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),jM(o,n),UM(o,n)}function KM(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=oi(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(U0(c,n,r)),j0(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(U0(u,n,r)),j0(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!oi(t)&&s.push(new(WM())(e._repo,e._path)),{removed:s,events:o}}function TC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ws(t,e){let n=null;for(const r of t.views.values())n=n||FM(r,e);return n}function IC(t,e){if(e._queryParams.loadsAllData())return Ah(t);{const r=e._queryIdentifier;return t.views.get(r)}}function SC(t,e){return IC(t,e)!=null}function oi(t){return Ah(t)!=null}function Ah(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc;function GM(t){B(!Fc,"__referenceConstructor has already been defined"),Fc=t}function QM(){return B(Fc,"Reference.ts has not been loaded"),Fc}let YM=1;class B0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Le(null),this.pendingWriteTree_=SM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function CC(t,e,n,r,i){return fM(t.pendingWriteTree_,e,n,r,i),i?Cl(t,new Hi(dC(),e,n)):[]}function xi(t,e,n=!1){const r=pM(t.pendingWriteTree_,e);if(mM(t.pendingWriteTree_,e)){let s=new Le(null);return r.snap!=null?s=s.set(Te(),!0):Qt(r.children,o=>{s=s.set(new Pe(o),!0)}),Cl(t,new Dc(r.path,s,n))}else return[]}function xh(t,e,n){return Cl(t,new Hi(Ig(),e,n))}function XM(t,e,n){const r=Le.fromObject(n);return Cl(t,new tl(Ig(),e,r))}function JM(t,e){return Cl(t,new el(Ig(),e))}function ZM(t,e,n){const r=Ng(t,n);if(r){const i=bg(r),s=i.path,o=i.queryId,a=Wt(s,e),u=new el(Sg(o),a);return Dg(t,s,u)}else return[]}function Ep(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||SC(o,e))){const u=KM(o,e,n,r);$M(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const d=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,E)=>oi(E));if(d&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const E=nL(m);for(let T=0;T<E.length;++T){const x=E[T],D=x.query,S=AC(t,x);t.listenProvider_.startListening(Ia(D),jc(t,D),S.hashFn,S.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Ia(e),null):c.forEach(m=>{const E=t.queryToTagMap.get(Ph(m));t.listenProvider_.stopListening(Ia(m),E)}))}rL(t,c)}return a}function eL(t,e,n,r){const i=Ng(t,r);if(i!=null){const s=bg(i),o=s.path,a=s.queryId,u=Wt(o,e),c=new Hi(Sg(a),u,n);return Dg(t,o,c)}else return[]}function tL(t,e,n,r){const i=Ng(t,r);if(i){const s=bg(i),o=s.path,a=s.queryId,u=Wt(o,e),c=Le.fromObject(n),d=new tl(Sg(a),u,c);return Dg(t,o,d)}else return[]}function W0(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,E)=>{const T=Wt(m,i);s=s||Ws(E,T),o=o||oi(E)});let a=t.syncPointTree_.get(i);a?(o=o||oi(a),s=s||Ws(a,Te())):(a=new zM,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=te.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((E,T)=>{const x=Ws(T,Te());x&&(s=s.updateImmediateChild(E,x))}));const c=SC(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=Ph(e);B(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const E=iL();t.queryToTagMap.set(m,E),t.tagToQueryMap.set(E,m)}const d=Cg(t.pendingWriteTree_,i);let f=qM(a,e,n,d,s,u);if(!c&&!o&&!r){const m=IC(a,e);f=f.concat(sL(t,e,m))}return f}function Pg(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Wt(o,e),c=Ws(a,u);if(c)return c});return gC(i,e,s,n,!0)}function Cl(t,e){return RC(e,t.syncPointTree_,null,Cg(t.pendingWriteTree_,Te()))}function RC(t,e,n,r){if(de(t.path))return kC(t,e,n,r);{const i=e.get(Te());n==null&&i!=null&&(n=Ws(i,Te()));let s=[];const o=ue(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=_C(r,o);s=s.concat(RC(a,u,c,d))}return i&&(s=s.concat(xg(i,t,r,n))),s}}function kC(t,e,n,r){const i=e.get(Te());n==null&&i!=null&&(n=Ws(i,Te()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=_C(r,o),d=t.operationForChild(o);d&&(s=s.concat(kC(d,a,u,c)))}),i&&(s=s.concat(xg(i,t,r,n))),s}function AC(t,e){const n=e.query,r=jc(t,n);return{hashFn:()=>(VM(e)||te.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ZM(t,n._path,r):JM(t,n._path);{const s=eO(i,n);return Ep(t,n,null,s)}}}}function jc(t,e){const n=Ph(e);return t.queryToTagMap.get(n)}function Ph(t){return t._path.toString()+"$"+t._queryIdentifier}function Ng(t,e){return t.tagToQueryMap.get(e)}function bg(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Pe(t.substr(0,e))}}function Dg(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=Cg(t.pendingWriteTree_,e);return xg(r,n,i,null)}function nL(t){return t.fold((e,n,r)=>{if(n&&oi(n))return[Ah(n)];{let i=[];return n&&(i=TC(n)),Qt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ia(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(QM())(t._repo,t._path):t}function rL(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ph(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function iL(){return YM++}function sL(t,e,n){const r=e._path,i=jc(t,e),s=AC(t,n),o=t.listenProvider_.startListening(Ia(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!oi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,d,f)=>{if(!de(c)&&d&&oi(d))return[Ah(d).query];{let m=[];return d&&(m=m.concat(TC(d).map(E=>E.query))),Qt(f,(E,T)=>{m=m.concat(T)}),m}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(Ia(d),jc(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Og(n)}node(){return this.node_}}class Mg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=tt(this.path_,e);return new Mg(this.syncTree_,n)}node(){return Pg(this.syncTree_,this.path_)}}const oL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$0=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return aL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return lL(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},aL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},lL=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},uL=function(t,e,n,r){return Lg(e,new Mg(n,t),r)},xC=function(t,e,n){return Lg(t,new Og(e),n)};function Lg(t,e,n){const r=t.getPriority().val(),i=$0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=$0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new it(a,dt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new it(i))),o.forEachChild(qe,(a,u)=>{const c=Lg(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Fg(t,e){let n=e instanceof Pe?e:new Pe(e),r=t,i=ue(n);for(;i!==null;){const s=Xs(r.node.children,i)||{children:{},childCount:0};r=new Vg(i,r,s),n=be(n),i=ue(n)}return r}function wo(t){return t.node.value}function PC(t,e){t.node.value=e,wp(t)}function NC(t){return t.node.childCount>0}function cL(t){return wo(t)===void 0&&!NC(t)}function Nh(t,e){Qt(t.node.children,(n,r)=>{e(new Vg(n,t,r))})}function bC(t,e,n,r){n&&e(t),Nh(t,i=>{bC(i,e,!0)})}function hL(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Rl(t){return new Pe(t.parent===null?t.name:Rl(t.parent)+"/"+t.name)}function wp(t){t.parent!==null&&dL(t.parent,t.name,t)}function dL(t,e,n){const r=cL(n),i=vr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,wp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,wp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL=/[\[\].#$\/\u0000-\u001F\u007F]/,pL=/[\[\].#$\u0000-\u001F\u007F]/,Ud=10*1024*1024,DC=function(t){return typeof t=="string"&&t.length!==0&&!fL.test(t)},OC=function(t){return typeof t=="string"&&t.length!==0&&!pL.test(t)},mL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),OC(t)},MC=function(t,e,n,r){r&&e===void 0||jg(vm(t,"value"),e,n)},jg=function(t,e,n){const r=n instanceof Pe?new DO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ii(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ii(r)+" with contents = "+e.toString());if(OS(e))throw new Error(t+"contains "+e.toString()+" "+Ii(r));if(typeof e=="string"&&e.length>Ud/3&&oh(e)>Ud)throw new Error(t+"contains a string greater than "+Ud+" utf8 bytes "+Ii(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Qt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!DC(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ii(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OO(r,o),jg(t,a,r),MO(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ii(r)+" in addition to actual children.")}},LC=function(t,e,n,r){if(!OC(n))throw new Error(vm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),LC(t,e,n)},VC=function(t,e){if(ue(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_L=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!DC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mL(n))throw new Error(vm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ug(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!yg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function FC(t,e,n){Ug(t,n),jC(t,r=>yg(r,e))}function gr(t,e,n){Ug(t,n),jC(t,r=>Rn(r,e)||Rn(e,r))}function jC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(vL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function vL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();va&&At("event: "+n.toString()),Eo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL="repo_interrupt",wL=25;class TL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bc(),this.transactionQueueTree_=new Vg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function IL(t,e,n){if(t.stats_=gg(t.repoInfo_),t.forceRestClient_||iO())t.server_=new Nc(t.repoInfo_,(r,i,s,o)=>{H0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>q0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{lt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new or(t.repoInfo_,e,(r,i,s,o)=>{H0(t,r,i,s,o)},r=>{q0(t,r)},r=>{SL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=uO(t.repoInfo_,()=>new aM(t.stats_,t.server_)),t.infoData_=new nM,t.infoSyncTree_=new B0({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=xh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bg(t,"connected",!1),t.serverSyncTree_=new B0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);gr(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function UC(t){const n=t.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zg(t){return oL({timestamp:UC(t)})}function H0(t,e,n,r,i){t.dataUpdateCount++;const s=new Pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=cc(n,c=>dt(c));o=tL(t.serverSyncTree_,s,u,i)}else{const u=dt(n);o=eL(t.serverSyncTree_,s,u,i)}else if(r){const u=cc(n,c=>dt(c));o=XM(t.serverSyncTree_,s,u)}else{const u=dt(n);o=xh(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=bh(t,s)),gr(t.eventQueue_,a,o)}function q0(t,e){Bg(t,"connected",e),e===!1&&RL(t)}function SL(t,e){Qt(e,(n,r)=>{Bg(t,n,r)})}function Bg(t,e,n){const r=new Pe("/.info/"+e),i=dt(n);t.infoData_.updateSnapshot(r,i);const s=xh(t.infoSyncTree_,r,i);gr(t.eventQueue_,r,s)}function zC(t){return t.nextWriteId_++}function CL(t,e,n,r,i){Wg(t,"set",{path:e.toString(),value:n,priority:r});const s=zg(t),o=dt(n,r),a=Pg(t.serverSyncTree_,e),u=xC(o,a,s),c=zC(t),d=CC(t.serverSyncTree_,e,u,c,!0);Ug(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(m,E)=>{const T=m==="ok";T||Gt("set at "+e+" failed: "+m);const x=xi(t.serverSyncTree_,c,!T);gr(t.eventQueue_,e,x),PL(t,i,m,E)});const f=qC(t,e);bh(t,f),gr(t.eventQueue_,f,[])}function RL(t){Wg(t,"onDisconnectEvents");const e=zg(t),n=bc();pp(t.onDisconnect_,Te(),(i,s)=>{const o=uL(i,s,t.serverSyncTree_,e);hC(n,i,o)});let r=[];pp(n,Te(),(i,s)=>{r=r.concat(xh(t.serverSyncTree_,i,s));const o=qC(t,i);bh(t,o)}),t.onDisconnect_=bc(),gr(t.eventQueue_,Te(),r)}function kL(t,e,n){let r;ue(e._path)===".info"?r=W0(t.infoSyncTree_,e,n):r=W0(t.serverSyncTree_,e,n),FC(t.eventQueue_,e._path,r)}function AL(t,e,n){let r;ue(e._path)===".info"?r=Ep(t.infoSyncTree_,e,n):r=Ep(t.serverSyncTree_,e,n),FC(t.eventQueue_,e._path,r)}function xL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(EL)}function Wg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),At(n,...e)}function PL(t,e,n,r){e&&Eo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function BC(t,e,n){return Pg(t.serverSyncTree_,e,n)||te.EMPTY_NODE}function $g(t,e=t.transactionQueueTree_){if(e||Dh(t,e),wo(e)){const n=$C(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&NL(t,Rl(e),n)}else NC(e)&&Nh(e,n=>{$g(t,n)})}function NL(t,e,n){const r=n.map(c=>c.currentWriteId),i=BC(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];B(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Wt(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Wg(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(xi(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Dh(t,Fg(t.transactionQueueTree_,e)),$g(t,t.transactionQueueTree_),gr(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)Eo(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Gt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}bh(t,e)}},o)}function bh(t,e){const n=WC(t,e),r=Rl(n),i=$C(t,n);return bL(t,i,r),r}function bL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Wt(n,u.path);let d=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(xi(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=wL)d=!0,f="maxretry",i=i.concat(xi(t.serverSyncTree_,u.currentWriteId,!0));else{const m=BC(t,u.path,o);u.currentInputSnapshot=m;const E=e[a].update(m.val());if(E!==void 0){jg("transaction failed: Data returned ",E,u.path);let T=dt(E);typeof E=="object"&&E!=null&&vr(E,".priority")||(T=T.updatePriority(m.getPriority()));const D=u.currentWriteId,S=zg(t),w=xC(T,m,S);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=w,u.currentWriteId=zC(t),o.splice(o.indexOf(D),1),i=i.concat(CC(t.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),i=i.concat(xi(t.serverSyncTree_,D,!0))}else d=!0,f="nodata",i=i.concat(xi(t.serverSyncTree_,u.currentWriteId,!0))}gr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Dh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Eo(r[a]);$g(t,t.transactionQueueTree_)}function WC(t,e){let n,r=t.transactionQueueTree_;for(n=ue(e);n!==null&&wo(r)===void 0;)r=Fg(r,n),e=be(e),n=ue(e);return r}function $C(t,e){const n=[];return HC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function HC(t,e,n){const r=wo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Nh(e,i=>{HC(t,i,n)})}function Dh(t,e){const n=wo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,PC(e,n.length>0?n:void 0)}Nh(e,r=>{Dh(t,r)})}function qC(t,e){const n=Rl(WC(t,e)),r=Fg(t.transactionQueueTree_,e);return hL(r,i=>{zd(t,i)}),zd(t,r),bC(r,i=>{zd(t,i)}),n}function zd(t,e){const n=wo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?PC(e,void 0):n.length=s+1,gr(t.eventQueue_,Rl(e),i);for(let o=0;o<r.length;o++)Eo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function OL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Gt(`Invalid query segment '${n}' in query '${t}'`)}return e}const K0=function(t,e){const n=ML(t),r=n.namespace;n.domain==="firebase.com"&&mr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&mr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QD();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Pe(n.pathString)}},ML=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=DL(t.substring(d,f)));const m=OL(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const E=e.slice(0,c);if(E.toLowerCase()==="localhost")n="localhost";else if(E.split(".").length<=2)n=E;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",LL=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=G0.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=G0.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+lt(this.snapshot.exportVal())}}class FL{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return de(this._path)?null:tC(this._path)}get ref(){return new di(this._repo,this._path)}get _queryIdentifier(){const e=N0(this._queryParams),n=pg(e);return n==="{}"?"default":n}get _queryObject(){return N0(this._queryParams)}isEqual(e){if(e=xe(e),!(e instanceof Hg))return!1;const n=this._repo===e._repo,r=yg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bO(this._path)}}class di extends Hg{constructor(e,n){super(e,n,new Tg,!1)}get parent(){const e=rC(this._path);return e===null?null:new di(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Uc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Pe(e),r=nl(this.ref,e);return new Uc(this._node.getChild(n),r,qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Uc(i,nl(this.ref,r),qe)))}hasChild(e){const n=new Pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cs(t,e){return t=xe(t),t._checkNotDeleted("ref"),e!==void 0?nl(t._root,e):t._root}function nl(t,e){return t=xe(t),ue(t._path)===null?gL("child","path",e):LC("child","path",e),new di(t._repo,tt(t._path,e))}function UL(t,e){t=xe(t),VC("push",t._path),MC("push",e,t._path,!0);const n=UC(t._repo),r=LL(n),i=nl(t,r),s=nl(t,r);let o;return e!=null?o=ms(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ms(t,e){t=xe(t),VC("set",t._path),MC("set",e,t._path,!1);const n=new sh;return CL(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class qg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new VL("value",this,new Uc(e.snapshotNode,new di(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new FL(this,e,n):null}matches(e){return e instanceof qg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function zL(t,e,n,r,i){const s=new jL(n,void 0),o=new qg(s);return kL(t._repo,t,o),()=>AL(t._repo,t,o)}function Q0(t,e,n,r){return zL(t,"value",e)}BM(di);GM(di);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL="FIREBASE_DATABASE_EMULATOR_HOST",Tp={};let WL=!1;function $L(t,e,n,r){t.repoInfo_=new qS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function HL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||mr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),At("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=K0(s,i),a=o.repoInfo,u;typeof process<"u"&&f0&&(u=f0[BL]),u?(s=`http://${u}?ns=${a.namespace}`,o=K0(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new oO(t.name,t.options,e);_L("Invalid Firebase Database URL",o),de(o.path)||mr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=KL(a,t,c,new sO(t.name,n));return new GL(d,t)}function qL(t,e){const n=Tp[e];(!n||n[t.key]!==t)&&mr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),xL(t),delete n[t.key]}function KL(t,e,n,r){let i=Tp[e.name];i||(i={},Tp[e.name]=i);let s=i[t.toURLString()];return s&&mr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new TL(t,WL,n,r),i[t.toURLString()]=s,s}class GL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(IL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new di(this._repo,Te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mr("Cannot call "+e+" on a deleted database.")}}function QL(t=wm(),e){const n=lh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=vT("database");r&&YL(n,...r)}return n}function YL(t,e,n,r={}){t=xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&mr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&mr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Mu(Mu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:TT(r.mockUserToken,t.app.options.projectId);s=new Mu(o)}$L(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(t){WD(Yi),Fi(new ei("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return HL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),jn(p0,m0,t),jn(p0,m0,"esm2017")}or.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};or.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};XL();var JL="firebase",ZL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(JL,ZL,"app");const eV={apiKey:"AIzaSyAEm1IYop7C83WEyX4hqZ7qyTkFTrRtRUQ",authDomain:"cumsa-market-675fb.firebaseapp.com",databaseURL:"https://cumsa-market-675fb-default-rtdb.firebaseio.com",projectId:"cumsa-market-675fb",storageBucket:"cumsa-market-675fb.firebasestorage.app",messagingSenderId:"311185515501",appId:"1:311185515501:web:17bdd879ad871b3000bde4"},Kg=kT(eV),zc=$N(Kg),un=ND(Kg),hs=QL(Kg),Lu=300,Y0=t=>{const e=Math.max(...t),n=t.reduce((r,i)=>r+Math.exp((i-e)/Lu),0);return Lu*(Math.log(n)+e/Lu)},St=t=>{const e=Math.max(...t),n=t.map(i=>Math.exp((i-e)/Lu)),r=n.reduce((i,s)=>i+s,0);return n.map(i=>i/r)},tV=(t,e,n)=>{const r=[...t];return r[e]+=n,Y0(r)-Y0(t)},Vu=(t,e,n)=>{let r=0,i=n*12;for(let s=0;s<64;s++){const o=(r+i)/2;tV(t,e,o)<n?r=o:i=o}return(r+i)/2},KC="28 Feb 2026",nV=new Date("2026-03-07T23:59:59"),rV=new Date("2026-02-28T10:00:00"),Ps=()=>new Date>=nV,X0=()=>new Date<rV,GC=5e3,Ke=["#39d353","#58a6ff","#e3b341","#bc8cff","#f78166"],y={green:"#39d353",green2:"#2ea043",red:"#f85149",blue:"#58a6ff",amber:"#e3b341",bg:"#060a0f",surface:"#0d1117",s2:"#161b22",s3:"#1c2128",border:"#21262d",border2:"#30363d",text:"#e6edf3",muted:"#7d8590",muted2:"#484f58"},Go=[{id:"president",role:"President",icon:"🎓",title:"Who will be elected President?",unc:!0,cands:[{name:"Abdul Mateen Kamal"},{name:"Ron"}],q:[200,200],vol:2e3,hist:[[50,50]]},{id:"vp",role:"Vice President",icon:"🤝",title:"Who will be elected Vice President?",unc:!0,cands:[{name:"Chloe Young"},{name:"Ron"}],q:[200,200],vol:1500,hist:[[50,50]]},{id:"treasurer",role:"Honorary Treasurer",icon:"💰",title:"Who will be elected Treasurer?",unc:!0,cands:[{name:"Yu Tang Koo"},{name:"Ron"}],q:[200,200],vol:1200,hist:[[50,50]]},{id:"secretary",role:"Honorary Secretary",icon:"📋",title:"Who will be elected Secretary?",unc:!0,cands:[{name:"Tan Jia Xuan"},{name:"Ron"}],q:[200,200],vol:1e3,hist:[[50,50]]},{id:"database",role:"Database Officer",icon:"🗄️",title:"Who will be elected Database Officer?",unc:!0,cands:[{name:"Ethan Kuai"},{name:"Ron"}],q:[200,200],vol:800,hist:[[50,50]]},{id:"access",role:"Access Officer",icon:"🚪",title:"Who will be elected Access Officer?",cands:[{name:"Brandon Loy"},{name:"Urian Qian"},{name:"Samuel Benedict"}],q:[150,106.3,150],vol:1500,hist:[[35,30,35]]},{id:"gencom",role:"General Committee",icon:"👥",title:"Who will be elected General Committee?",multi:!0,cands:[{name:"Joel Chik"},{name:"Brian"},{name:"Mohanty Puja"},{name:"Zackaria Too"},{name:"Matthew Lee"}],q:[150,150,150,150,150],vol:2e3,hist:[[20,20,20,20,20]]},{id:"publicity",role:"Publicity Secretary",icon:"📣",title:"Who will be elected Publicity Secretary?",cands:[{name:"Sophie Khoo"},{name:"Zhao Yuxuan"}],q:[200,12],vol:1500,hist:[[65,35]]},{id:"sponsorship",role:"Sponsorship Officer",icon:"🤑",title:"Who will be elected Sponsorship Officer?",cands:[{name:"Jessie Chen"},{name:"Kartik"},{name:"Enzo Hu"},{name:"Claire Sim"}],q:[200,200,200,200],vol:1500,hist:[[25,25,25,25]]}],J0=["albert","alldon","daniel","chenxi","shih_ee","jinghao","mateen","chloe","isabel","cedric","xavier"],Gg=`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
body,#root{background:#060a0f;color:#e6edf3;font-family:'IBM Plex Mono',monospace;min-height:100vh}
input,button,textarea,select{font-family:'IBM Plex Mono',monospace}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#060a0f}::-webkit-scrollbar-thumb{background:#30363d;border-radius:2px}
@keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(57,211,83,.4)}50%{opacity:.7;box-shadow:0 0 0 4px rgba(57,211,83,0)}}
@keyframes fadein{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
@keyframes slideup{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{to{transform:rotate(360deg)}}
.fadein{animation:fadein .3s ease}
.slideup{animation:slideup .4s cubic-bezier(.4,0,.2,1)}
.spin{display:inline-block;animation:spin 1s linear infinite;width:14px;height:14px;border:2px solid #333;border-top-color:#7d8590;border-radius:50%}
`;function iV(){const[t,e]=Y.useState("login"),[n,r]=Y.useState(""),[i,s]=Y.useState(""),[o,a]=Y.useState(""),[u,c]=Y.useState(""),[d,f]=Y.useState(!1),m=async()=>{c(""),f(!0);const E=n.trim().toLowerCase();if(!E||E.length<3){c("Username must be at least 3 characters"),f(!1);return}if(!/^[a-z0-9_]+$/.test(E)){c("Username: only letters, numbers, underscores"),f(!1);return}if(!i.includes("@")){c("Enter a valid email address"),f(!1);return}if(o.length<6){c("Password must be at least 6 characters"),f(!1);return}try{if(t==="register"){if((await c0(Fr(un,"usernames",E))).exists()){c("Username already taken — try another"),f(!1);return}const x=await RP(zc,i,o);await xP(x.user,{displayName:E}),await h0(Fr(un,"users",x.user.uid),{username:E,email:i,balance:GC,portfolio:{},trades:[],joined:new Date().toISOString()}),await h0(Fr(un,"usernames",E),{uid:x.user.uid})}else{if(!(await c0(Fr(un,"usernames",E))).exists()){c("Username not found — register first"),f(!1);return}await kP(zc,i,o)}}catch(T){const x=T.code==="auth/email-already-in-use"?"Email already registered — sign in instead":T.code==="auth/wrong-password"?"Wrong password":T.code==="auth/user-not-found"?"No account with that email":T.code==="auth/too-many-requests"?"Too many attempts — try again later":T.message;c(x),f(!1)}};return g.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:y.bg,padding:"2rem"},children:[g.jsx("style",{children:Gg}),g.jsxs("div",{className:"slideup",style:{width:"100%",maxWidth:420},children:[g.jsxs("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[g.jsx("div",{style:{width:60,height:60,borderRadius:14,background:`linear-gradient(135deg, ${y.green2}, #1a7a3c)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,fontWeight:700,color:"#fff",margin:"0 auto 1rem",boxShadow:"0 8px 32px rgba(46,160,67,.3)"},children:"C"}),g.jsx("div",{style:{fontSize:22,fontWeight:600,letterSpacing:"-.04em",marginBottom:6},children:"CUMSA Markets"}),g.jsx("div",{style:{fontSize:11,color:y.muted,letterSpacing:".06em"},children:"MALAYSIA & SINGAPORE · CAMBRIDGE · 2026–27"})]}),g.jsxs("div",{style:{background:y.surface,border:`1px solid ${y.border}`,borderRadius:12,padding:"1.75rem",boxShadow:"0 24px 64px rgba(0,0,0,.6)"},children:[g.jsx("div",{style:{display:"flex",border:`1px solid ${y.border}`,borderRadius:8,overflow:"hidden",marginBottom:"1.5rem"},children:[["login","SIGN IN"],["register","REGISTER"]].map(([E,T])=>g.jsx("button",{onClick:()=>{e(E),c("")},style:{flex:1,padding:"9px",background:t===E?y.green2:"transparent",color:t===E?"#fff":y.muted,border:"none",cursor:"pointer",fontSize:12,fontWeight:600,letterSpacing:".06em",transition:"all .15s"},children:T},E))}),g.jsx(Bd,{label:"Username",value:n,onChange:r,placeholder:"e.g. nasi_lemak99",onEnter:m}),g.jsx(Bd,{label:"Email address",value:i,onChange:s,placeholder:"you@cam.ac.uk",onEnter:m,type:"email"}),g.jsx(Bd,{label:"Password",value:o,onChange:a,placeholder:"min. 6 characters",onEnter:m,type:"password"}),t==="register"&&g.jsxs("div",{style:{background:"rgba(57,211,83,.07)",border:"1px solid rgba(57,211,83,.2)",borderRadius:6,padding:".6rem .75rem",marginBottom:"1rem",fontSize:11,color:y.green},children:["🎉 Every new account starts with exactly ",g.jsx("strong",{children:"1,000 pts"})," — no exceptions"]}),u&&g.jsx("div",{style:{background:"rgba(248,81,73,.1)",border:"1px solid rgba(248,81,73,.2)",borderRadius:6,padding:".6rem .75rem",marginBottom:"1rem",fontSize:11,color:y.red},children:u}),g.jsx("button",{onClick:m,disabled:d,style:{width:"100%",padding:"11px",background:d?y.s3:y.green2,color:d?y.muted:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:600,cursor:d?"not-allowed":"pointer",letterSpacing:".04em",transition:"all .15s",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:d?g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"spin"}),"Loading…"]}):t==="login"?"Sign In →":"Create Account →"}),g.jsxs("div",{style:{marginTop:"1rem",fontSize:10,color:y.muted2,textAlign:"center",lineHeight:1.7},children:["Election: ",g.jsx("strong",{style:{color:y.amber},children:KC})," · ","Market closes: ",g.jsx("strong",{style:{color:y.amber},children:"7 Mar 2026"})]})]})]})]})}function Bd({label:t,value:e,onChange:n,type:r="text",placeholder:i,onEnter:s}){return g.jsxs("div",{style:{marginBottom:"1rem"},children:[g.jsx("div",{style:{fontSize:9,letterSpacing:".14em",textTransform:"uppercase",color:y.muted,marginBottom:5},children:t}),g.jsx("input",{type:r,value:e,placeholder:i,onChange:o=>n(o.target.value),onKeyDown:o=>o.key==="Enter"&&s(),style:{width:"100%",background:y.s2,border:`1px solid ${y.border}`,borderRadius:6,padding:".65rem .85rem",color:y.text,fontSize:14,fontWeight:500,outline:"none",transition:"border-color .15s"}})]})}function sV({portKey:t,pos:e,market:n,curP:r,curVal:i,onConfirm:s,onClose:o}){const a=e.shares,[u,c]=Y.useState(a),d=Math.floor(u*r);return g.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.7)",zIndex:600,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"},onClick:o,children:g.jsxs("div",{style:{background:y.surface,border:`1px solid ${y.border}`,borderRadius:12,width:"100%",maxWidth:360,padding:"1.5rem"},onClick:f=>f.stopPropagation(),children:[g.jsx("div",{style:{fontSize:14,fontWeight:600,marginBottom:4},children:"Sell Position"}),g.jsxs("div",{style:{fontSize:11,color:y.muted,marginBottom:"1.25rem"},children:[e.name," · ",e.role," · ",e.side]}),g.jsx("div",{style:{background:y.s2,border:`1px solid ${y.border}`,borderRadius:7,padding:".75rem",marginBottom:"1rem"},children:[["Total shares",a.toFixed(2)],["Current price",(r*100).toFixed(1)+"¢"],["Full value",i.toFixed(0)+" pts"]].map(([f,m])=>g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:4},children:[g.jsx("span",{style:{color:y.muted},children:f}),g.jsx("span",{style:{fontWeight:600},children:m})]},f))}),g.jsx("div",{style:{fontSize:9,letterSpacing:".12em",textTransform:"uppercase",color:y.muted,marginBottom:6},children:"Shares to sell"}),g.jsx("input",{type:"number",value:u,min:.01,max:a,step:.01,onChange:f=>c(Math.min(a,Math.max(.01,parseFloat(f.target.value)||0))),style:{width:"100%",background:y.s2,border:`1px solid ${y.border}`,borderRadius:6,padding:".6rem .75rem",color:y.text,fontSize:15,fontWeight:600,outline:"none",marginBottom:".5rem"}}),g.jsx("div",{style:{display:"flex",gap:4,marginBottom:"1.25rem"},children:[.25,.5,.75,1].map(f=>g.jsx("button",{onClick:()=>c(parseFloat((a*f).toFixed(4))),style:{flex:1,padding:"4px",background:y.s3,border:`1px solid ${y.border}`,borderRadius:4,color:y.muted,fontSize:9,cursor:"pointer"},children:f===1?"All":`${f*100}%`},f))}),g.jsxs("div",{style:{background:"rgba(57,211,83,.07)",border:"1px solid rgba(57,211,83,.2)",borderRadius:7,padding:".75rem",marginBottom:"1.25rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsx("span",{style:{fontSize:11,color:y.muted},children:"You receive"}),g.jsxs("span",{style:{fontSize:18,fontWeight:600,color:y.green},children:["+",d," pts"]})]}),g.jsxs("div",{style:{display:"flex",gap:8},children:[g.jsx("button",{onClick:o,style:{flex:1,padding:"9px",background:"none",border:`1px solid ${y.border}`,borderRadius:7,color:y.muted,fontSize:12,cursor:"pointer"},children:"Cancel"}),g.jsxs("button",{onClick:()=>{s(t,e,n,r,u),o()},style:{flex:2,padding:"9px",background:"#c0392b",color:"#fff",border:"none",borderRadius:7,fontSize:12,fontWeight:600,cursor:"pointer"},children:["Sell ",u.toFixed(2)," shares → +",d," pts"]})]})]})})}function oV({userData:t,markets:e,onSell:n}){var m,E;const[r,i]=Y.useState(null),s=t.portfolio||{},o=Object.keys(s),a=o.reduce((T,x)=>T+s[x].cost,0),u=o.reduce((T,x)=>{const D=s[x],S=e.find(A=>A.id===D.marketId);if(!S)return T;const w=St(S.q);return T+D.shares*(D.side==="YES"?w[D.ci]:1-w[D.ci])},0),c=u-a,d=a>0?(c/a*100).toFixed(1):"0",f=[["Balance",t.balance.toLocaleString(),t.balance<500?y.red:y.amber,"pts remaining"],["Invested",a.toFixed(0),y.blue,"pts deployed"],["Portfolio Value",u.toFixed(0),c>=0?y.green:y.red,"mark-to-market"],["Unrealised P&L",(c>=0?"+":"")+c.toFixed(0),c>=0?y.green:y.red,(c>=0?"+":"")+d+"%"],["Open Positions",o.length,y.blue,"trades"]];return g.jsxs("div",{style:{padding:"2rem",maxWidth:1100,margin:"0 auto"},children:[g.jsxs("div",{style:{marginBottom:"2rem"},children:[g.jsxs("h1",{style:{fontSize:24,fontWeight:600,letterSpacing:"-.04em",marginBottom:6},children:["Portfolio · ",t.username]}),g.jsxs("div",{style:{fontSize:12,color:y.muted},children:["CUMSA Election Market 2026–27 · Election: ",KC]})]}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:1,background:y.border,border:`1px solid ${y.border}`,borderRadius:8,overflow:"hidden",marginBottom:"2rem"},children:f.map(([T,x,D,S])=>g.jsxs("div",{style:{background:y.surface,padding:"1.25rem 1.5rem"},children:[g.jsx("div",{style:{fontSize:9,letterSpacing:".14em",textTransform:"uppercase",color:y.muted,marginBottom:6},children:T}),g.jsx("div",{style:{fontSize:22,fontWeight:600,letterSpacing:"-.04em",lineHeight:1,color:D},children:x}),g.jsx("div",{style:{fontSize:10,color:y.muted,marginTop:3},children:S})]},T))}),g.jsx(Z0,{children:"Open Positions"}),o.length===0?g.jsx(eE,{children:"No positions yet — click any market to start trading"}):g.jsx("div",{style:{background:y.surface,border:`1px solid ${y.border}`,borderRadius:8,overflow:"hidden",marginBottom:"2rem"},children:g.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[g.jsx("thead",{children:g.jsx("tr",{style:{background:y.s2},children:["Candidate","Role","Side","Shares","Avg Cost","Cur Price","Mkt Value","P&L","P&L %",""].map(T=>g.jsx("th",{style:{fontSize:9,letterSpacing:".12em",textTransform:"uppercase",color:y.muted,textAlign:"left",padding:".6rem 1rem",borderBottom:`1px solid ${y.border}`,fontWeight:600},children:T},T))})}),g.jsx("tbody",{children:o.map(T=>{const x=s[T],D=e.find(I=>I.id===x.marketId),S=D?St(D.q):null,w=S?x.side==="YES"?S[x.ci]:1-S[x.ci]:.5,A=x.shares*w,M=x.shares>0?x.cost/x.shares:0,j=A-x.cost,z=x.cost>0?(j/x.cost*100).toFixed(1):"0";return g.jsxs("tr",{style:{borderBottom:`1px solid ${y.border}`},children:[g.jsx("td",{style:{padding:".75rem 1rem",fontWeight:600,fontSize:13},children:x.name}),g.jsx("td",{style:{padding:".75rem 1rem",color:y.muted,fontSize:11},children:x.role}),g.jsx("td",{style:{padding:".75rem 1rem"},children:g.jsx("span",{style:{background:x.side==="YES"?"rgba(57,211,83,.12)":"rgba(248,81,73,.12)",color:x.side==="YES"?y.green:y.red,border:`1px solid ${x.side==="YES"?"rgba(57,211,83,.2)":"rgba(248,81,73,.2)"}`,fontSize:9,fontWeight:700,padding:"2px 7px",borderRadius:100},children:x.side})}),g.jsx("td",{style:{padding:".75rem 1rem"},children:x.shares.toFixed(2)}),g.jsxs("td",{style:{padding:".75rem 1rem"},children:[(M*100).toFixed(1),"¢"]}),g.jsxs("td",{style:{padding:".75rem 1rem"},children:[(w*100).toFixed(1),"¢"]}),g.jsxs("td",{style:{padding:".75rem 1rem",fontWeight:600},children:[A.toFixed(0)," pts"]}),g.jsxs("td",{style:{padding:".75rem 1rem",fontWeight:600,color:j>=0?y.green:y.red},children:[j>=0?"+":"",j.toFixed(0)]}),g.jsxs("td",{style:{padding:".75rem 1rem",fontWeight:600,color:j>=0?y.green:y.red},children:[j>=0?"+":"",z,"%"]}),g.jsx("td",{style:{padding:".75rem 1rem"},children:g.jsx("button",{onClick:()=>i({portKey:T,pos:x,market:D,curP:w,curVal:A}),style:{padding:"4px 12px",borderRadius:5,fontSize:10,fontWeight:600,cursor:"pointer",background:"rgba(248,81,73,.1)",color:y.red,border:"1px solid rgba(248,81,73,.3)",transition:"all .12s",whiteSpace:"nowrap"},children:"Sell"})})]},T)})})]})}),g.jsxs(Z0,{children:["Trade History (",((m=t.trades)==null?void 0:m.length)||0,")"]}),g.jsx("div",{style:{background:y.surface,border:`1px solid ${y.border}`,borderRadius:8,overflow:"hidden"},children:(E=t.trades)!=null&&E.length?t.trades.slice(0,50).map((T,x)=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:".7rem 1.25rem",borderBottom:`1px solid ${y.border}`,fontSize:11},children:[g.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:T.side==="SELL"?y.amber:T.side==="YES"?y.green:y.red,flexShrink:0}}),g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{fontWeight:600,color:y.text},children:[T.name," — ",T.side]}),g.jsxs("div",{style:{fontSize:10,color:y.muted,marginTop:2},children:[T.role,T.shares?` · ${T.shares.toFixed(2)} shares @ ${(T.price*100).toFixed(1)}¢`:""]})]}),g.jsxs("div",{style:{fontWeight:600,color:T.side==="SELL"||T.side==="YES"?y.green:y.red},children:[T.side==="NO"?"−":"+",T.amt," pts"]}),g.jsx("div",{style:{fontSize:9,color:y.muted2,flexShrink:0},children:new Date(T.time).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})]},x)):g.jsx(eE,{children:"No trades yet"})}),r&&g.jsx(sV,{portKey:r.portKey,pos:r.pos,market:r.market,curP:r.curP,curVal:r.curVal,onConfirm:n,onClose:()=>i(null)})]})}const Z0=({children:t})=>g.jsx("div",{style:{fontSize:11,fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:y.muted,marginBottom:"1rem",paddingBottom:".5rem",borderBottom:`1px solid ${y.border}`},children:t}),eE=({children:t})=>g.jsx("div",{style:{padding:"2rem",textAlign:"center",fontSize:12,color:y.muted2,fontStyle:"italic"},children:t}),aV="REPLACE_WITH_YOUR_UID";function lV(){const t=new Date("2026-03-07T23:59:59"),e=()=>{const i=t-new Date;if(i<=0)return{h:"00",m:"00",s:"00",closed:!0,label:""};const s=Math.floor(i/864e5),o=Math.floor(i%864e5/36e5),a=Math.floor(i%36e5/6e4),u=Math.floor(i%6e4/1e3);return s>0?{h:String(s).padStart(2,"0"),m:String(o).padStart(2,"0"),s:String(a).padStart(2,"0"),closed:!1,label:"days:hrs:min"}:{h:String(o).padStart(2,"0"),m:String(a).padStart(2,"0"),s:String(u).padStart(2,"0"),closed:!1,label:"hrs:min:sec"}},[n,r]=Y.useState(e);return Y.useEffect(()=>{const i=setInterval(()=>r(e()),1e3);return()=>clearInterval(i)},[]),n}function QC({active:t}){const e=Y.useRef(null);return Y.useEffect(()=>{if(!t||!e.current)return;const n=e.current,r=n.getContext("2d");n.width=window.innerWidth,n.height=window.innerHeight;const i=Array.from({length:120},()=>({x:Math.random()*n.width,y:Math.random()*n.height-n.height,r:Math.random()*6+3,c:`hsl(${Math.random()*360},90%,60%)`,vx:(Math.random()-.5)*3,vy:Math.random()*4+2,rot:Math.random()*360,vr:(Math.random()-.5)*8}));let s;const o=()=>{r.clearRect(0,0,n.width,n.height),i.forEach(u=>{u.x+=u.vx,u.y+=u.vy,u.rot+=u.vr,u.y>n.height&&(u.y=-10,u.x=Math.random()*n.width),r.save(),r.translate(u.x,u.y),r.rotate(u.rot*Math.PI/180),r.fillStyle=u.c,r.fillRect(-u.r,-u.r/2,u.r*2,u.r),r.restore()}),s=requestAnimationFrame(o)};o();const a=setTimeout(()=>cancelAnimationFrame(s),6e3);return()=>{cancelAnimationFrame(s),clearTimeout(a)}},[t]),t?g.jsx("canvas",{ref:e,style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:9999}}):null}function YC({data:t,color:e,height:n=32,width:r=60}){if(!t||t.length<2)return null;const i=Math.min(...t),s=Math.max(...t),o=s-i||1,a=t.map((u,c)=>`${c/(t.length-1)*r},${n-(u-i)/o*(n-4)-2}`).join(" ");return g.jsx("svg",{width:r,height:n,style:{display:"block"},children:g.jsx("polyline",{points:a,fill:"none",stroke:e,strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"})})}function uV({hist:t,cands:e,colors:n,height:r=160}){if(!t||t.length<2)return g.jsx("div",{style:{height:r,display:"flex",alignItems:"center",justifyContent:"center",color:y.muted,fontSize:11},children:"Not enough data yet"});const i=540,s={t:10,r:10,b:24,l:32},o=i-s.l-s.r,a=r-s.t-s.b;return g.jsxs("svg",{width:"100%",viewBox:`0 0 ${i} ${r}`,style:{display:"block"},children:[[0,25,50,75,100].map(u=>{const c=s.t+a-u/100*a;return g.jsxs("g",{children:[g.jsx("line",{x1:s.l,y1:c,x2:s.l+o,y2:c,stroke:y.border,strokeWidth:"1",strokeDasharray:"3,3"}),g.jsxs("text",{x:s.l-4,y:c+4,fontSize:"9",fill:y.muted,textAnchor:"end",children:[u,"%"]})]},u)}),e.map((u,c)=>{const d=t.map((f,m)=>`${s.l+m/(t.length-1)*o},${s.t+a-(f[c]||0)/100*a}`).join(" ");return g.jsx("polyline",{points:d,fill:"none",stroke:n[c%n.length],strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round"},c)}),[0,Math.floor(t.length/2),t.length-1].map((u,c)=>g.jsx("text",{x:s.l+u/(t.length-1)*o,y:r-6,fontSize:"8",fill:y.muted,textAnchor:"middle",children:c===0?"start":c===1?"mid":"now"},c))]})}function cV({market:t,mi:e,userData:n,onClose:r,onTrade:i}){var x;const[s,o]=Y.useState("buy"),[a,u]=Y.useState(0),[c,d]=Y.useState(100),f=St(t.q),m=t.cands.map((D,S)=>(t.hist||[]).map(w=>w[S]||0)),T=(()=>{const D=f[a];if(s==="buy"){const A=Vu(t.q,a,c);return{avg:((A>0?c/A:0)*100).toFixed(1),shares:A.toFixed(2),ret:(A-c).toFixed(0)}}const S=1-D,w=c/S;return{avg:(S*100).toFixed(1),shares:w.toFixed(2),ret:(w-c).toFixed(0)}})();return g.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"},onClick:r,children:g.jsxs("div",{style:{background:y.surface,border:`1px solid ${y.border}`,borderRadius:12,width:"100%",maxWidth:700,maxHeight:"92vh",overflowY:"auto"},onClick:D=>D.stopPropagation(),children:[g.jsxs("div",{style:{padding:"1.25rem 1.5rem",borderBottom:`1px solid ${y.border}`,display:"flex",alignItems:"center",gap:"1rem"},children:[g.jsx("div",{style:{fontSize:22},children:t.icon}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontSize:9,fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:y.muted,marginBottom:2},children:t.role}),g.jsx("div",{style:{fontSize:16,fontWeight:600},children:t.title})]}),g.jsxs("span",{style:{fontSize:11,color:y.muted},children:["Vol: ",g.jsx("strong",{style:{color:y.text},children:t.vol.toLocaleString()})," pts"]}),g.jsx("button",{onClick:r,style:{background:"none",border:`1px solid ${y.border}`,color:y.muted,fontSize:18,cursor:"pointer",borderRadius:6,width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 270px"},children:[g.jsxs("div",{style:{padding:"1.25rem",borderRight:`1px solid ${y.border}`},children:[g.jsx("div",{style:{fontSize:9,letterSpacing:".1em",textTransform:"uppercase",color:y.muted,marginBottom:8},children:"Price History"}),g.jsx("div",{style:{background:y.s2,borderRadius:8,padding:".75rem",border:`1px solid ${y.border}`,marginBottom:"1rem"},children:g.jsx(uV,{hist:t.hist,cands:t.cands,colors:Ke,height:150})}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:".5rem",marginBottom:"1rem"},children:t.cands.map((D,S)=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:10,color:y.muted},children:[g.jsx("div",{style:{width:10,height:2,background:Ke[S%Ke.length],borderRadius:1}}),D.name]},S))}),g.jsx("div",{style:{fontSize:9,letterSpacing:".1em",textTransform:"uppercase",color:y.muted,marginBottom:8},children:"Current Odds"}),t.cands.map((D,S)=>{const w=Math.round(f[S]*100),A=D.name==="Ron",M=(t.hist[t.hist.length-2]||t.hist[0]||[])[S]??w,j=w-M;return g.jsxs("div",{onClick:()=>!Ps()&&u(S),style:{display:"flex",alignItems:"center",gap:"1rem",padding:".65rem .85rem",borderRadius:7,marginBottom:4,cursor:"pointer",border:`1px solid ${a===S?Ke[S%Ke.length]:y.border}`,background:a===S?"rgba(255,255,255,.04)":y.s2,transition:"all .15s"},children:[g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{fontSize:13,fontWeight:600,display:"flex",alignItems:"center",gap:6,color:A?y.red:y.text},children:[D.name,A&&g.jsx("span",{style:{fontSize:8,color:y.red,background:"rgba(248,81,73,.1)",border:"1px solid rgba(248,81,73,.2)",padding:"1px 5px",borderRadius:3},children:"RON"}),j!==0&&g.jsx(XC,{delta:j})]}),g.jsx("div",{style:{marginTop:5,height:3,background:y.s3,borderRadius:2,overflow:"hidden"},children:g.jsx("div",{style:{height:"100%",width:w+"%",background:Ke[S%Ke.length],borderRadius:2,transition:"width .6s"}})})]}),g.jsxs("div",{style:{fontSize:20,fontWeight:600,color:Ke[S%Ke.length],minWidth:44,textAlign:"right"},children:[w,"%"]}),g.jsx(YC,{data:m[S],color:Ke[S%Ke.length],width:50,height:24})]},S)})]}),g.jsxs("div",{style:{padding:"1.25rem"},children:[g.jsx("div",{style:{fontSize:9,letterSpacing:".1em",textTransform:"uppercase",color:y.muted,marginBottom:"1rem"},children:"Place Order"}),g.jsxs("div",{style:{padding:".6rem .85rem",background:y.s2,borderRadius:7,border:`1px solid ${Ke[a%Ke.length]}`,marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsx("div",{style:{fontSize:12,fontWeight:600},children:t.cands[a].name}),g.jsxs("div",{style:{fontSize:16,fontWeight:600,color:Ke[a%Ke.length]},children:[Math.round(f[a]*100),"%"]})]}),g.jsx("div",{style:{display:"flex",border:`1px solid ${y.border}`,borderRadius:7,overflow:"hidden",marginBottom:"1rem"},children:[["buy","YES"],["sell","NO"]].map(([D,S])=>g.jsx("button",{onClick:()=>o(D),style:{flex:1,padding:"8px",background:s===D?D==="buy"?y.green2:"#c0392b":"transparent",color:s===D?"#fff":y.muted,border:"none",cursor:"pointer",fontSize:11,fontWeight:600,transition:"all .15s"},children:S},D))}),g.jsxs("div",{style:{position:"relative",marginBottom:".5rem"},children:[g.jsx("input",{type:"number",value:c,onChange:D=>d(Math.max(1,parseInt(D.target.value)||0)),style:{width:"100%",background:y.s2,border:`1px solid ${y.border}`,borderRadius:6,padding:".6rem 2.5rem .6rem .75rem",color:y.text,fontSize:16,fontWeight:600,outline:"none"}}),g.jsx("span",{style:{position:"absolute",right:".75rem",top:"50%",transform:"translateY(-50%)",fontSize:10,color:y.muted},children:"pts"})]}),g.jsx("div",{style:{display:"flex",gap:4,marginBottom:"1rem"},children:[50,100,250,500].map(D=>g.jsx("button",{onClick:()=>d(Math.min(D,(n==null?void 0:n.balance)||0)),style:{flex:1,padding:"4px",background:y.s3,border:`1px solid ${y.border}`,borderRadius:4,color:y.muted,fontSize:9,cursor:"pointer"},children:D},D))}),g.jsx("div",{style:{background:y.s2,border:`1px solid ${y.border}`,borderRadius:7,padding:".75rem",marginBottom:"1rem"},children:[["Side",s==="buy"?"YES ✓":"NO (Ron)"],["Avg price",T.avg+"¢"],["Shares",T.shares],["Potential return","+"+T.ret+" pts"]].map(([D,S],w)=>g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:w<3?5:0},children:[g.jsx("span",{style:{color:y.muted},children:D}),g.jsx("span",{style:{fontWeight:600,color:w===3?y.green:w===0?s==="buy"?y.green:y.red:y.text},children:S})]},D))}),Ps()?g.jsx("div",{style:{textAlign:"center",padding:"1rem",fontSize:11,color:y.red},children:"🔒 Market Closed"}):g.jsxs("button",{onClick:()=>{i(e,a,s,c),r()},style:{width:"100%",padding:11,background:s==="buy"?y.green2:"#c0392b",color:"#fff",border:"none",borderRadius:7,fontSize:13,fontWeight:600,cursor:"pointer"},children:[s==="buy"?"BUY YES":"BUY NO"," — ",c," pts"]}),g.jsxs("div",{style:{marginTop:"1rem",fontSize:10,color:y.muted2,textAlign:"center"},children:["Balance: ",g.jsxs("strong",{style:{color:y.amber},children:[(x=n==null?void 0:n.balance)==null?void 0:x.toLocaleString()," pts"]})]})]})]})]})})}function hV({markets:t,onResolve:e}){const[n,r]=Y.useState({}),[i,s]=Y.useState(!1),[o,a]=Y.useState(!1),[u,c]=Y.useState(!1),d=async()=>{if(Object.keys(n).length===0){alert("Select at least one winner first");return}s(!0);try{await e(n),a(!0),c(!0),setTimeout(()=>c(!1),7e3)}catch(f){alert("Error: "+f.message)}s(!1)};return g.jsxs("div",{style:{padding:"2rem",maxWidth:700,margin:"0 auto"},children:[g.jsx(QC,{active:u}),g.jsxs("div",{style:{background:"rgba(248,81,73,.08)",border:"2px solid rgba(248,81,73,.4)",borderRadius:10,padding:"1rem 1.5rem",marginBottom:"2rem"},children:[g.jsx("div",{style:{fontSize:14,fontWeight:600,color:y.red,marginBottom:4},children:"⚙️ Admin — Market Resolution"}),g.jsx("div",{style:{fontSize:11,color:y.muted},children:"Select winners for each market. Clicking Resolve will pay out all YES holders of the winning candidate at 100¢ and zero out NO holders."})]}),o&&g.jsx("div",{style:{background:"rgba(57,211,83,.1)",border:"1px solid rgba(57,211,83,.3)",borderRadius:8,padding:"1rem 1.5rem",marginBottom:"2rem",fontSize:13,fontWeight:600,color:y.green},children:"✅ Markets resolved! Winners have been paid out."}),t.map(f=>g.jsxs("div",{style:{background:y.surface,border:`1px solid ${y.border}`,borderRadius:8,padding:"1rem 1.25rem",marginBottom:8},children:[g.jsxs("div",{style:{fontSize:11,fontWeight:600,marginBottom:".75rem",color:y.text},children:[f.icon," ",f.role]}),g.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[f.cands.filter(m=>m.name!=="Ron").map((m,E)=>{const T=n[f.id]===E;return g.jsxs("button",{onClick:()=>r(x=>T?{...x,[f.id]:void 0}:{...x,[f.id]:E}),style:{padding:"6px 14px",borderRadius:6,fontSize:11,fontWeight:600,cursor:"pointer",background:T?"rgba(57,211,83,.15)":"transparent",color:T?y.green:y.muted,border:`1px solid ${T?"rgba(57,211,83,.4)":y.border}`,transition:"all .15s"},children:[T?"✓ ":"",m.name]},E)}),g.jsxs("button",{onClick:()=>r(m=>({...m,[f.id]:"ron"})),style:{padding:"6px 14px",borderRadius:6,fontSize:11,fontWeight:600,cursor:"pointer",background:n[f.id]==="ron"?"rgba(248,81,73,.15)":"transparent",color:n[f.id]==="ron"?y.red:y.muted,border:`1px solid ${n[f.id]==="ron"?"rgba(248,81,73,.4)":y.border}`,transition:"all .15s"},children:[n[f.id]==="ron"?"✓ ":"","Ron wins"]})]})]},f.id)),g.jsx("button",{onClick:d,disabled:i||o,style:{marginTop:"1rem",width:"100%",padding:13,background:o?y.s3:y.green2,color:o?y.muted:"#fff",border:"none",borderRadius:8,fontSize:14,fontWeight:600,cursor:i||o?"not-allowed":"pointer"},children:i?"Resolving…":o?"✅ Resolved":"🏁 Resolve All Markets & Pay Out Winners"})]})}function dV({currentUid:t,markets:e,mode:n="total"}){const[r,i]=Y.useState([]),[s,o]=Y.useState(n),[a,u]=Y.useState(!0),c=Y.useCallback(async()=>{u(!0);try{const E=(await cp(lp(un,"users"))).docs.map(T=>{const x=T.data(),D=Object.values(x.portfolio||{}).reduce((w,A)=>{const M=e.find(z=>z.id===A.marketId);if(!M)return w;const j=St(M.q);return w+A.shares*(A.side==="YES"?j[A.ci]:1-j[A.ci])},0),S=Object.values(x.portfolio||{}).reduce((w,A)=>Math.max(w,A.cost),0);return{uid:T.id,username:x.username,balance:x.balance||0,portVal:D,total:(x.balance||0)+D,biggestBet:S}});i(E)}finally{u(!1)}},[e]);Y.useEffect(()=>{c()},[]);const d=[...r].sort((m,E)=>s==="biggest"?E.biggestBet-m.biggestBet:E.total-m.total),f=["🥇","🥈","🥉"];return g.jsxs("div",{style:{padding:"2rem",maxWidth:680,margin:"0 auto"},children:[g.jsxs("div",{style:{marginBottom:"2rem",display:"flex",alignItems:"flex-end",justifyContent:"space-between"},children:[g.jsxs("div",{children:[g.jsx("h1",{style:{fontSize:24,fontWeight:600,letterSpacing:"-.04em",marginBottom:6},children:"🏆 Leaderboard"}),g.jsx("div",{style:{fontSize:12,color:y.muted},children:"CUMSA Election Market 2026–27"})]}),g.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[g.jsx("div",{style:{display:"flex",border:`1px solid ${y.border}`,borderRadius:6,overflow:"hidden"},children:[["total","Total Value"],["biggest","Biggest Bet"]].map(([m,E])=>g.jsx("button",{onClick:()=>o(m),style:{padding:"6px 12px",background:s===m?y.s3:"transparent",color:s===m?y.text:y.muted,border:"none",cursor:"pointer",fontSize:10,fontWeight:600},children:E},m))}),g.jsx("button",{onClick:c,style:{padding:"6px 14px",background:y.s2,border:`1px solid ${y.border}`,borderRadius:6,color:y.muted,fontSize:11,cursor:"pointer"},children:"↻"})]})]}),a?g.jsxs("div",{style:{textAlign:"center",padding:"3rem",color:y.muted},children:[g.jsx("div",{style:{width:32,height:32,border:`3px solid ${y.border}`,borderTopColor:y.green,borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 1rem"}}),"Loading…"]}):g.jsx("div",{style:{background:y.surface,border:`1px solid ${y.border}`,borderRadius:8,overflow:"hidden"},children:d.slice(0,30).map((m,E)=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem 1.25rem",borderBottom:`1px solid ${y.border}`,background:m.uid===t?"rgba(57,211,83,.04)":"transparent"},children:[g.jsx("div",{style:{fontSize:E<3?20:14,fontWeight:600,color:E<3?y.amber:y.muted2,width:28,textAlign:"center"},children:E<3?f[E]:E+1}),g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{fontWeight:600,fontSize:14,color:m.uid===t?y.green:y.text},children:[m.username,m.uid===t&&g.jsx("span",{style:{color:y.green,fontSize:10,marginLeft:6},children:"(you)"})]}),g.jsx("div",{style:{fontSize:10,color:y.muted,marginTop:2},children:s==="biggest"?g.jsxs(g.Fragment,{children:["Biggest single bet: ",g.jsxs("span",{style:{color:y.amber,fontWeight:600},children:[m.biggestBet.toFixed(0)," pts"]})]}):g.jsxs(g.Fragment,{children:["Balance: ",g.jsx("span",{style:{color:y.text},children:m.balance.toFixed(0)})," · Portfolio: ",g.jsx("span",{style:{color:y.text},children:m.portVal.toFixed(0)})]})})]}),g.jsxs("div",{style:{fontWeight:600,fontSize:16,color:s==="biggest"?y.amber:m.total>=GC?y.green:y.red,letterSpacing:"-.02em"},children:[s==="biggest"?m.biggestBet.toFixed(0):m.total.toFixed(0)," pts"]})]},m.uid))})]})}function XC({delta:t}){const[e,n]=Y.useState(!0);if(Y.useEffect(()=>{n(!0);const i=setTimeout(()=>n(!1),2e3);return()=>clearTimeout(i)},[t]),!t)return null;const r=t>0;return g.jsxs("span",{style:{fontSize:10,fontWeight:700,color:r?y.green:y.red,background:r?"rgba(57,211,83,.15)":"rgba(248,81,73,.15)",padding:"1px 5px",borderRadius:3,animation:e?"fadein .3s ease":void 0},children:[r?"▲":"▼",Math.abs(t),"%"]})}function tE({small:t}){return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,background:"rgba(57,211,83,.1)",border:"1px solid rgba(57,211,83,.2)",borderRadius:100,padding:"2px 8px",fontSize:9,fontWeight:600,color:y.green,letterSpacing:".08em",...t?{transform:"scale(.85)"}:{}},children:[g.jsx("div",{style:{width:5,height:5,background:y.green,borderRadius:"50%",animation:"pulse 1.4s infinite"}}),"LIVE"]})}function fV(){const[t,e]=Y.useState(void 0);return Y.useEffect(()=>bP(zc,n=>e(n??null)),[]),t===void 0?g.jsx(JC,{}):t?g.jsx(pV,{firebaseUser:t}):g.jsx(iV,{})}function pV({firebaseUser:t}){const[e,n]=Y.useState("markets"),[r,i]=Y.useState(null),[s,o]=Y.useState(Go),[a,u]=Y.useState(Go.reduce((L,H)=>L+H.vol,0)),[c,d]=Y.useState(418),[f,m]=Y.useState(0),[E,T]=Y.useState([]),[x,D]=Y.useState([]),[S,w]=Y.useState(""),[A,M]=Y.useState(12),[j,z]=Y.useState(null),[I,v]=Y.useState(null),[C,k]=Y.useState(100),[P,N]=Y.useState("all"),[R,Nt]=Y.useState(null),[gn,fi]=Y.useState(null),[_n,$]=Y.useState(!1),Z=Y.useRef(null),ie=Y.useRef(null),ve=lV(),Ie=t.uid===aV;Y.useEffect(()=>UD(Fr(un,"users",t.uid),H=>{H.exists()&&i(H.data())}),[t.uid]),Y.useEffect(()=>{const L=cs(hs,"marketState"),H=Q0(L,ne=>{if(ne.exists()){const Q=ne.val(),K=Go.map(ae=>{const ge=(Q.markets||[]).find(Ne=>Ne.id===ae.id);if(!ge)return ae;const Re=ge.q&&ge.q.length===ae.cands.length;return{...ae,q:Re?ge.q:ae.q,vol:ge.vol||ae.vol,hist:ge.hist||ae.hist}});o(K),Q.totalVol&&u(Q.totalVol),Q.traders&&d(Q.traders),ms(L,{markets:K,totalVol:Q.totalVol||a,traders:Q.traders||c})}else ms(L,{markets:Go,totalVol:Go.reduce((Q,K)=>Q+K.vol,0),traders:418})});return()=>H()},[]),Y.useEffect(()=>{const L=Q0(cs(hs,"chat"),H=>{if(H.exists()){const Q=Object.values(H.val()).sort((K,ae)=>(K.ts||0)-(ae.ts||0)).filter(K=>K.type!=="bot").slice(-80);D(Q)}});return()=>L()},[]),Y.useEffect(()=>{Z.current&&(Z.current.scrollTop=Z.current.scrollHeight)},[x]),Y.useEffect(()=>{r&&cp(lp(un,"users")).then(L=>{const H=L.docs.map(Q=>{const K=Q.data(),ae=Object.values(K.portfolio||{}).reduce((ge,Re)=>{const Ne=s.find(yt=>yt.id===Re.marketId);if(!Ne)return ge;const he=St(Ne.q);return ge+Re.shares*(Re.side==="YES"?he[Re.ci]:1-he[Re.ci])},0);return{uid:Q.id,total:(K.balance||0)+ae}});H.sort((Q,K)=>K.total-Q.total);const ne=H.findIndex(Q=>Q.uid===t.uid)+1;fi({rank:ne,total:H.length})})},[r,s]),Y.useEffect(()=>{if(!r||Ps()||X0())return;let L;const H=async()=>{if(!(Ps()||X0())){if(Math.random()<.55){const ne=s[Math.floor(Math.random()*s.length)],Q=s.findIndex(he=>he.id===ne.id),K=Math.floor(Math.random()*ne.cands.length),ae=Math.random()>.4,ge=[10,15,20,25,30,35,40,50][Math.floor(Math.random()*8)],Re=J0[Math.floor(Math.random()*J0.length)],Ne=s.map((he,yt)=>{if(yt!==Q)return he;const le=[...he.q];if(ae){const ke=Vu(le,K,ge);le[K]+=ke}else{const ke=Math.max(.05,1-St(le)[K]);le[K]=Math.max(10,le[K]-ge/ke*.3)}return{...he,q:le,vol:he.vol+ge,hist:[...he.hist,St(le).map(ke=>Math.round(ke*100))].slice(-80)}});await ms(cs(hs,"marketState"),{markets:Ne,totalVol:a+ge,traders:Math.random()<.12?c+1:c}),T(he=>[{name:ne.cands[K].name,role:ne.role,type:ae?"buy":"sell",amt:ge,user:Re,id:Date.now()+Math.random()},...he].slice(0,14)),m(he=>he+ge)}Math.random()<.1&&M(ne=>Math.max(8,Math.min(40,ne+(Math.random()<.5?1:-1)))),L=setTimeout(H,4e3+Math.random()*6e3)}};return L=setTimeout(H,3e3+Math.random()*3e3),()=>clearTimeout(L)},[r,s]);const Fe=Y.useCallback(async(L,H,ne,Q)=>{var To;if(!r||Ps())return;if(Q<=0){bt("Enter a valid amount","err");return}if(Q>r.balance){bt("Insufficient balance","err");return}const K=s[L],ae=St(K.q),ge=ae[H];let Re,Ne;if(ne==="buy")Re=Vu(K.q,H,Q),Ne=[...K.q],Ne[H]+=Re;else{const Yt=Math.max(.05,1-ge);Re=Q/Yt,Ne=[...K.q],Ne[H]=Math.max(10,Ne[H]-Re*.4)}const he=[...K.hist,St(Ne).map(Yt=>Math.round(Yt*100))].slice(-80),yt=s.map((Yt,mi)=>mi===L?{...Yt,q:Ne,vol:Yt.vol+Q,hist:he}:Yt),le=ne==="buy"?"YES":"NO",ke=`${K.id}_${H}_${ne}`,Dt=((To=r.portfolio)==null?void 0:To[ke])||{name:K.cands[H].name,role:K.role,side:le,shares:0,cost:0,marketId:K.id,ci:H},rs={name:K.cands[H].name,role:K.role,side:le,amt:Q,shares:Re,price:ge,time:new Date().toISOString()};await d0(Fr(un,"users",t.uid),{balance:r.balance-Q,[`portfolio.${ke}`]:{...Dt,shares:Dt.shares+Re,cost:Dt.cost+Q},trades:[rs,...r.trades||[]].slice(0,100)}),await ms(cs(hs,"marketState"),{markets:yt,totalVol:a+Q,traders:c}),T(Yt=>[{name:K.cands[H].name,role:K.role,type:ne==="buy"?"buy":"sell",amt:Q,user:r.username,id:Date.now()},...Yt].slice(0,14)),m(Yt=>Yt+Q),bt(`✓ ${le==="YES"?"Bought YES":"Bought NO"} on ${K.cands[H].name.split(" ")[0]} — ${Q} pts`,"ok"),Q>=500&&($(!0),setTimeout(()=>$(!1),5e3))},[r,s,a,c,t.uid]),yn=Y.useCallback(async(L,H,ne,Q,K)=>{if(!r||Ps())return;const ae=Math.floor(K*Q);if(ae<=0){bt("Position has no value","err");return}const ge=s.findIndex(le=>le.id===H.marketId);let Re=s;ge>=0&&(Re=s.map((le,ke)=>{if(ke!==ge)return le;const Dt=[...le.q];return Dt[H.ci]=Math.max(10,Dt[H.ci]-K*.35),{...le,q:Dt,hist:[...le.hist,St(Dt).map(rs=>Math.round(rs*100))].slice(-80)}}),await ms(cs(hs,"marketState"),{markets:Re,totalVol:a,traders:c}));const Ne={...r.portfolio},he=H.shares-K;he<.01?delete Ne[L]:Ne[L]={...H,shares:he,cost:H.cost*(he/H.shares)};const yt={name:H.name,role:H.role,side:"SELL",amt:ae,shares:K,price:Q,time:new Date().toISOString()};await d0(Fr(un,"users",t.uid),{balance:r.balance+ae,portfolio:Ne,trades:[yt,...r.trades||[]].slice(0,100)}),bt(`✓ Sold ${K.toFixed(1)} shares of ${H.name.split(" ")[0]} — +${ae} pts`,"ok")},[r,s,a,c,t.uid]),vn=Y.useCallback(async L=>{const H=await cp(lp(un,"users")),ne=BD(un);H.docs.forEach(Q=>{const K=Q.data(),ae=K.portfolio||{};let ge=0;const Re={...ae};Object.entries(ae).forEach(([Ne,he])=>{const yt=L[he.marketId];if(yt===void 0)return;const le=s.find(Dt=>Dt.id===he.marketId);if(!le)return;St(le.q),(yt==="ron"?he.ci===1&&he.side==="YES"||he.ci===0&&he.side==="NO":he.ci===yt&&he.side==="YES")&&(ge+=he.shares*100),delete Re[Ne]}),(ge>0||Object.keys(Re).length!==Object.keys(ae).length)&&ne.update(Fr(un,"users",Q.id),{balance:(K.balance||0)+ge,portfolio:Re})}),await ne.commit()},[s]),ln=async()=>{const L=S.trim();!L||!r||(await UL(cs(hs,"chat"),{user:r.username,text:L,type:"human",ts:Date.now()}),w(""))},bt=(L,H="ok")=>{z({msg:L,type:H}),clearTimeout(ie.current),ie.current=setTimeout(()=>z(null),3500)};if(!r)return g.jsx(JC,{});const Oh=s.filter(L=>P==="contested"?!L.unc:P==="uncontested"?L.unc:!0),kl=Object.keys(r.portfolio||{}).length,pi=R!==null?s[R]:null,ts=s.reduce((L,H)=>H.vol>L.vol?H:L,s[0]),ns=s.filter(L=>L.unc).filter(L=>St(L.q)[0]<.5),wr=(()=>{if(!I)return null;const L=s[I.mi],H=St(L.q),ne=H[I.ci];if(I.tab==="buy"){const ae=Vu(L.q,I.ci,C);return{avg:((ae>0?C/ae:0)*100).toFixed(1),shares:ae.toFixed(2),ret:(ae-C).toFixed(0)}}const Q=1-ne,K=C/Q;return{avg:(Q*100).toFixed(1),shares:K.toFixed(2),ret:(K-C).toFixed(0)}})();return g.jsxs("div",{style:{background:y.bg,minHeight:"100vh",color:y.text,fontFamily:"'IBM Plex Mono',monospace"},children:[g.jsx("style",{children:Gg}),g.jsx(QC,{active:_n}),ns.length>0&&g.jsxs("div",{style:{background:"linear-gradient(90deg,rgba(248,81,73,.15),rgba(248,81,73,.08))",borderBottom:"2px solid rgba(248,81,73,.5)",padding:".6rem 1.5rem",display:"flex",alignItems:"center",gap:"1rem",animation:"fadein .4s ease"},children:[g.jsx("span",{style:{fontSize:16},children:"🚨"}),g.jsx("span",{style:{fontSize:13,fontWeight:600,color:y.red},children:"RON ALERT"}),g.jsx("span",{style:{fontSize:12,color:y.muted},children:ns.map(L=>{const H=St(L.q);return`${L.cands[0].name} is below 50% (${Math.round(H[0]*100)}%) — Ron could win!`}).join("  ·  ")})]}),g.jsxs("div",{style:{height:50,background:y.surface,borderBottom:`1px solid ${y.border}`,display:"flex",alignItems:"center",padding:"0 1.25rem",gap:"1rem",position:"sticky",top:0,zIndex:300},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[g.jsx("div",{style:{width:28,height:28,borderRadius:6,background:`linear-gradient(135deg,${y.green2},#1a7a3c)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#fff"},children:"C"}),g.jsx("span",{style:{fontSize:13,fontWeight:600,letterSpacing:"-.02em"},children:"CUMSA"}),g.jsx("span",{style:{color:y.muted2,fontSize:11},children:"·"}),g.jsx("span",{style:{fontSize:9,color:y.muted,letterSpacing:".05em"},children:"ELECTION MARKET 2026"})]}),g.jsx("nav",{style:{display:"flex",marginLeft:"auto"},children:[["markets","Markets"],["portfolio",`Portfolio${kl>0?` (${kl})`:""}`],["leaderboard","Leaderboard"],...Ie?[["admin","⚙️ Admin"]]:[]].map(([L,H])=>g.jsx("button",{onClick:()=>n(L),style:{padding:"0 .9rem",height:50,fontSize:11,fontWeight:500,color:e===L?y.text:y.muted,cursor:"pointer",borderBottom:`2px solid ${e===L?y.green:"transparent"}`,borderTop:"none",borderLeft:"none",borderRight:"none",background:"none",transition:"all .15s"},children:H},L))}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".6rem",marginLeft:"auto",flexShrink:0},children:[!ve.closed&&g.jsx(tE,{}),gn&&g.jsxs("div",{style:{background:y.s2,border:`1px solid ${y.border}`,borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:600,color:y.amber},children:["#",gn.rank," / ",gn.total]}),g.jsxs("span",{style:{fontSize:12,fontWeight:600,color:y.amber},children:[r.balance.toLocaleString()," pts"]}),g.jsx("span",{style:{fontSize:10,color:y.muted},children:r.username}),g.jsx("button",{onClick:()=>DP(zc),style:{fontSize:9,color:y.muted2,background:"none",border:`1px solid ${y.border}`,borderRadius:4,padding:"2px 7px",cursor:"pointer"},children:"out"})]})]}),g.jsxs("div",{style:{background:y.surface,borderBottom:`1px solid ${y.border}`,display:"flex",padding:"0 1.25rem",overflowX:"auto",alignItems:"center"},children:[[["Vol",a.toLocaleString(),y.green,`+${Math.floor(f)} today`],["Traders",c,y.blue,null],["Election","28 Feb 2026",y.amber,null],["Closes","7 Mar 2026",y.amber,null],["Balance",r.balance.toLocaleString()+" pts",r.balance<500?y.red:y.green,null]].map(([L,H,ne,Q])=>g.jsxs("div",{style:{padding:".7rem 1.5rem .7rem 0",borderRight:`1px solid ${y.border}`,marginRight:"1.5rem",flexShrink:0},children:[g.jsx("div",{style:{fontSize:8,letterSpacing:".14em",textTransform:"uppercase",color:y.muted,marginBottom:3},children:L}),g.jsx("div",{style:{fontSize:16,fontWeight:600,letterSpacing:"-.03em",lineHeight:1,color:ne},children:H}),Q&&g.jsx("div",{style:{fontSize:9,color:y.green,marginTop:2},children:Q})]},L)),g.jsxs("div",{style:{padding:".7rem 0",marginLeft:"auto",display:"flex",alignItems:"center",gap:3,flexShrink:0},children:[g.jsx("span",{style:{fontSize:9,color:y.muted,marginRight:6},children:ve.closed?"closed":`closes in (${ve.label})`}),[ve.h,ve.m,ve.s].map((L,H)=>g.jsxs("span",{style:{display:"flex",alignItems:"center"},children:[g.jsx("span",{style:{fontSize:15,fontWeight:600,color:ve.closed?y.red:y.amber,minWidth:22,textAlign:"center"},children:L}),H<2&&g.jsx("span",{style:{color:y.muted2,fontSize:12,margin:"0 1px"},children:":"})]},H))]})]}),ve.closed&&g.jsx("div",{style:{background:"linear-gradient(90deg,#1a0a0a,#1f0d0d)",borderBottom:"2px solid rgba(248,81,73,.5)",padding:".75rem 2rem",textAlign:"center"},children:g.jsx("span",{style:{fontSize:14,fontWeight:600,color:y.red},children:"🔒 Market Closed — Trading Has Ended"})}),e==="markets"&&g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 320px",minHeight:"calc(100vh - 110px)"},children:[g.jsxs("div",{style:{borderRight:`1px solid ${y.border}`,padding:"1.25rem",overflowY:"auto"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"},children:[g.jsx("span",{style:{fontSize:10,fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:y.muted},children:"All Markets · 2026–27"}),g.jsx("div",{style:{display:"flex",gap:2,background:y.s2,border:`1px solid ${y.border}`,borderRadius:6,padding:2},children:["all","contested","uncontested"].map(L=>g.jsx("button",{onClick:()=>N(L),style:{padding:"3px 9px",borderRadius:4,fontSize:9,fontWeight:600,cursor:"pointer",background:P===L?y.s3:"none",color:P===L?y.text:y.muted,border:"none",transition:"all .15s"},children:L},L))})]}),Oh.map(L=>{const H=s.findIndex(K=>K.id===L.id),ne=St(L.q),Q=L.id===ts.id;return g.jsxs("div",{onClick:()=>Nt(H),style:{background:y.surface,border:`1px solid ${Q?y.amber:y.border}`,borderRadius:8,marginBottom:8,overflow:"hidden",cursor:"pointer",transition:"border-color .15s"},onMouseEnter:K=>K.currentTarget.style.borderColor=Q?y.amber:y.border2,onMouseLeave:K=>K.currentTarget.style.borderColor=Q?y.amber:y.border,children:[g.jsxs("div",{style:{padding:".85rem 1.1rem",display:"flex",alignItems:"flex-start",gap:"1rem"},children:[g.jsx("div",{style:{width:32,height:32,borderRadius:7,background:y.s2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0},children:L.icon}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsx("div",{style:{fontSize:8,fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:y.muted,marginBottom:2},children:L.role}),g.jsxs("div",{style:{fontSize:13,fontWeight:600,letterSpacing:"-.02em",display:"flex",alignItems:"center",gap:6},children:[L.title,Q&&g.jsx("span",{style:{fontSize:8,fontWeight:700,color:y.amber,background:"rgba(227,179,65,.15)",border:"1px solid rgba(227,179,65,.3)",padding:"1px 6px",borderRadius:100},children:"🔥 MOST TRADED"})]}),g.jsxs("div",{style:{fontSize:9,color:y.muted,marginTop:3},children:["Vol: ",g.jsx("strong",{style:{color:y.text},children:L.vol.toLocaleString()})," pts · ",g.jsx("span",{style:{color:y.blue},children:"Click to trade ↗"})]})]}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flexShrink:0},children:[L.unc&&g.jsx("span",{style:{background:"rgba(227,179,65,.1)",color:y.amber,border:"1px solid rgba(227,179,65,.2)",fontSize:8,fontWeight:600,padding:"2px 7px",borderRadius:100},children:"Uncontested"}),L.multi&&g.jsx("span",{style:{background:"rgba(88,166,255,.1)",color:y.blue,border:"1px solid rgba(88,166,255,.2)",fontSize:8,fontWeight:600,padding:"2px 7px",borderRadius:100},children:"Multi-winner"})]})]}),g.jsx("div",{style:{padding:"0 1.1rem .85rem"},children:L.cands.map((K,ae)=>{const ge=Math.round(ne[ae]*100),Re=K.name==="Ron",Ne=(L.hist[L.hist.length-2]||L.hist[0]||[])[ae]??ge,he=ge-Ne,yt=(L.hist||[]).map(le=>le[ae]||0);return g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto auto auto",alignItems:"center",gap:".65rem",padding:".4rem 0",borderTop:`1px solid ${y.border}`},children:[g.jsxs("div",{children:[g.jsxs("div",{style:{fontSize:12,fontWeight:600,display:"flex",alignItems:"center",gap:5,color:Re?y.red:y.text},children:[K.name,Re&&g.jsx("span",{style:{fontSize:8,color:y.red,background:"rgba(248,81,73,.1)",border:"1px solid rgba(248,81,73,.2)",padding:"1px 4px",borderRadius:3},children:"RON"}),he!==0&&g.jsx(XC,{delta:he})]}),g.jsx("div",{style:{marginTop:3,height:3,background:y.s3,borderRadius:2,overflow:"hidden"},children:g.jsx("div",{style:{height:"100%",width:ge+"%",background:Ke[ae%Ke.length],borderRadius:2,transition:"width .6s"}})})]}),g.jsxs("div",{style:{fontSize:14,fontWeight:600,color:Ke[ae%Ke.length],minWidth:38,textAlign:"right"},children:[ge,"%"]}),g.jsx(YC,{data:yt,color:Ke[ae%Ke.length],width:50,height:24}),g.jsx("div",{})]},ae)})})]},L.id)})]}),g.jsxs("div",{style:{padding:"1rem",overflowY:"auto",display:"flex",flexDirection:"column",gap:".85rem"},children:[I&&(()=>{const L=s[I.mi],H=St(L.q);return g.jsxs("div",{className:"fadein",style:{background:y.surface,border:`1px solid ${y.border}`,borderRadius:8,overflow:"hidden"},children:[g.jsxs("div",{style:{padding:".75rem 1rem",borderBottom:`1px solid ${y.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsx("span",{style:{fontSize:12,fontWeight:600},children:"Quick Order"}),g.jsx("button",{onClick:()=>v(null),style:{background:"none",border:"none",color:y.muted,fontSize:18,cursor:"pointer",lineHeight:1},children:"×"})]}),g.jsxs("div",{style:{padding:".9rem"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:".9rem",padding:".55rem .75rem",background:y.s2,borderRadius:6,border:`1px solid ${y.border}`},children:[g.jsx("div",{style:{fontSize:12,fontWeight:600,flex:1},children:L.cands[I.ci].name}),g.jsxs("div",{style:{fontSize:15,fontWeight:600,color:y.green},children:[Math.round(H[I.ci]*100),"%"]})]}),g.jsx("div",{style:{display:"flex",border:`1px solid ${y.border}`,borderRadius:6,overflow:"hidden",marginBottom:".9rem"},children:[["buy","YES"],["sell","NO"]].map(([ne,Q])=>g.jsx("button",{onClick:()=>v(K=>({...K,tab:ne})),style:{flex:1,padding:6,background:I.tab===ne?ne==="buy"?y.green2:"#c0392b":"transparent",color:I.tab===ne?"#fff":y.muted,border:"none",cursor:"pointer",fontSize:10,fontWeight:600,transition:"all .15s"},children:Q},ne))}),g.jsxs("div",{style:{position:"relative",marginBottom:".4rem"},children:[g.jsx("input",{type:"number",value:C,onChange:ne=>k(Math.max(1,parseInt(ne.target.value)||0)),style:{width:"100%",background:y.s2,border:`1px solid ${y.border}`,borderRadius:6,padding:".55rem 2.2rem .55rem .7rem",color:y.text,fontSize:15,fontWeight:600,outline:"none"}}),g.jsx("span",{style:{position:"absolute",right:".7rem",top:"50%",transform:"translateY(-50%)",fontSize:10,color:y.muted},children:"pts"})]}),g.jsx("div",{style:{display:"flex",gap:3,marginBottom:".9rem"},children:[50,100,250,"Max"].map(ne=>g.jsx("button",{onClick:()=>k(Math.min(ne==="Max"?r.balance:ne,r.balance)),style:{flex:1,padding:"3px",background:y.s3,border:`1px solid ${y.border}`,borderRadius:4,color:y.muted,fontSize:9,cursor:"pointer"},children:ne},ne))}),wr&&g.jsx("div",{style:{background:y.s2,border:`1px solid ${y.border}`,borderRadius:6,padding:".65rem",marginBottom:".9rem"},children:[["Avg",wr.avg+"¢"],["Shares",wr.shares],["Return","+"+wr.ret+" pts"]].map(([ne,Q],K)=>g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:K<2?4:0},children:[g.jsx("span",{style:{color:y.muted},children:ne}),g.jsx("span",{style:{fontWeight:600,color:K===2?y.green:y.text},children:Q})]},ne))}),g.jsxs("button",{onClick:()=>{Fe(I.mi,I.ci,I.tab,C),v(null)},style:{width:"100%",padding:"10px",background:I.tab==="buy"?y.green2:"#c0392b",color:"#fff",border:"none",borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer"},children:[I.tab==="buy"?"BUY YES":"BUY NO"," — ",C," pts"]})]})]})})(),g.jsxs("div",{style:{background:y.surface,border:`1px solid ${y.border}`,borderRadius:8,overflow:"hidden"},children:[g.jsxs("div",{style:{padding:".65rem 1rem",borderBottom:`1px solid ${y.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsx("span",{style:{fontSize:9,fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:y.muted},children:"Live Trades"}),g.jsx(tE,{small:!0})]}),g.jsxs("div",{style:{maxHeight:180,overflowY:"auto"},children:[E.length===0&&g.jsx("div",{style:{padding:"1rem",fontSize:10,color:y.muted2,textAlign:"center"},children:"Waiting for trades…"}),E.map(L=>g.jsxs("div",{className:"fadein",style:{padding:".5rem 1rem",borderBottom:`1px solid ${y.border}`,fontSize:10},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[g.jsx("strong",{children:L.user}),g.jsx("span",{style:{fontSize:8,color:y.muted2},children:"just now"})]}),g.jsxs("div",{style:{color:y.muted,fontSize:9,margin:"2px 0"},children:[g.jsx("span",{style:{color:L.type==="buy"?y.green:y.red,fontWeight:600},children:L.type==="buy"?"YES":"NO"})," on ",g.jsx("strong",{style:{color:y.text},children:L.name.split(" ")[0]})," · ",L.role]}),g.jsxs("span",{style:{fontWeight:600,color:L.type==="buy"?y.green:y.red},children:[L.type==="buy"?"+":"−",L.amt," pts"]})]},L.id))]})]}),g.jsxs("div",{style:{background:y.surface,border:`1px solid ${y.border}`,borderRadius:8,overflow:"hidden",display:"flex",flexDirection:"column",flex:1},children:[g.jsxs("div",{style:{padding:".65rem 1rem",borderBottom:`1px solid ${y.border}`,display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("span",{style:{fontSize:9,fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:y.muted},children:"💬 Chat"}),g.jsx("span",{style:{fontSize:8,color:y.muted2,background:y.s2,border:`1px solid ${y.border}`,borderRadius:3,padding:"1px 5px"},children:"humans only"})]}),g.jsxs("span",{style:{fontSize:9,color:y.green,display:"flex",alignItems:"center",gap:4},children:[g.jsx("span",{style:{width:5,height:5,background:y.green,borderRadius:"50%",display:"inline-block",animation:"pulse 1.4s infinite"}}),A," online"]})]}),g.jsxs("div",{ref:Z,style:{height:175,overflowY:"auto",padding:".4rem"},children:[x.length===0&&g.jsx("div",{style:{padding:"1rem",textAlign:"center",fontSize:10,color:y.muted2,fontStyle:"italic"},children:"No messages yet — say something!"}),x.map((L,H)=>g.jsxs("div",{style:{padding:".25rem .4rem",borderRadius:4,marginBottom:2,fontSize:10,lineHeight:1.5},children:[g.jsx("span",{style:{fontWeight:600,marginRight:5,color:L.user===r.username?y.green:y.amber},children:L.user}),g.jsx("span",{style:{color:y.muted},children:L.text}),g.jsx("span",{style:{float:"right",fontSize:8,color:y.muted2,marginLeft:6},children:new Date(L.ts).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})})]},L.id||H))]}),g.jsxs("div",{style:{display:"flex",gap:5,padding:".5rem",borderTop:`1px solid ${y.border}`,flexShrink:0},children:[g.jsx("input",{value:S,onChange:L=>w(L.target.value),onKeyDown:L=>L.key==="Enter"&&ln(),placeholder:"Say something…",maxLength:120,style:{flex:1,background:y.s2,border:`1px solid ${y.border}`,borderRadius:6,padding:".4rem .65rem",color:y.text,fontSize:11,outline:"none"}}),g.jsx("button",{onClick:ln,style:{padding:".4rem .8rem",background:y.green2,color:"#fff",border:"none",borderRadius:6,fontSize:10,fontWeight:600,cursor:"pointer"},children:"Send"})]})]})]})]}),e==="portfolio"&&g.jsx(oV,{userData:r,markets:s,onSell:yn}),e==="leaderboard"&&g.jsx(dV,{currentUid:t.uid,markets:s}),e==="admin"&&Ie&&g.jsx(hV,{markets:s,onResolve:vn}),pi!==null&&g.jsx(cV,{market:pi,mi:R,userData:r,onClose:()=>Nt(null),onTrade:(L,H,ne,Q)=>Fe(L,H,ne,Q)}),j&&g.jsx("div",{className:"slideup",style:{position:"fixed",bottom:"1.25rem",right:"1.25rem",background:y.s2,border:`1px solid ${j.type==="ok"?"rgba(57,211,83,.4)":"rgba(248,81,73,.4)"}`,borderRadius:8,padding:".65rem 1.1rem",fontSize:12,fontWeight:600,color:j.type==="ok"?y.green:y.red,zIndex:1e3,maxWidth:280},children:j.msg})]})}function JC(){return g.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:y.bg,flexDirection:"column",gap:16},children:[g.jsx("style",{children:Gg}),g.jsx("div",{style:{width:40,height:40,border:`3px solid ${y.border}`,borderTopColor:y.green,borderRadius:"50%",animation:"spin 1s linear infinite"}}),g.jsx("div",{style:{fontSize:12,color:y.muted},children:"Loading CUMSA Markets…"})]})}Wd.createRoot(document.getElementById("root")).render(g.jsx(U1.StrictMode,{children:g.jsx(fV,{})}));
