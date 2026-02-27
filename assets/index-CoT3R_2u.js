(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ZE={exports:{}},Oc={},e0={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),_R=Symbol.for("react.portal"),yR=Symbol.for("react.fragment"),vR=Symbol.for("react.strict_mode"),ER=Symbol.for("react.profiler"),wR=Symbol.for("react.provider"),TR=Symbol.for("react.context"),IR=Symbol.for("react.forward_ref"),SR=Symbol.for("react.suspense"),CR=Symbol.for("react.memo"),RR=Symbol.for("react.lazy"),F_=Symbol.iterator;function AR(t){return t===null||typeof t!="object"?null:(t=F_&&t[F_]||t["@@iterator"],typeof t=="function"?t:null)}var t0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n0=Object.assign,r0={};function io(t,e,n){this.props=t,this.context=e,this.refs=r0,this.updater=n||t0}io.prototype.isReactComponent={};io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i0(){}i0.prototype=io.prototype;function yp(t,e,n){this.props=t,this.context=e,this.refs=r0,this.updater=n||t0}var vp=yp.prototype=new i0;vp.constructor=yp;n0(vp,io.prototype);vp.isPureReactComponent=!0;var U_=Array.isArray,s0=Object.prototype.hasOwnProperty,Ep={current:null},o0={key:!0,ref:!0,__self:!0,__source:!0};function a0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)s0.call(e,r)&&!o0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ja,type:t,key:s,ref:o,props:i,_owner:Ep.current}}function kR(t,e){return{$$typeof:Ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ja}function PR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var j_=/\/+/g;function Kh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PR(""+t.key):e.toString(36)}function au(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ja:case _R:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kh(o,0):r,U_(i)?(n="",t!=null&&(n=t.replace(j_,"$&/")+"/"),au(i,e,n,"",function(c){return c})):i!=null&&(wp(i)&&(i=kR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(j_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",U_(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Kh(s,l);o+=au(s,e,n,u,i)}else if(u=AR(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Kh(s,l++),o+=au(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ll(t,e,n){if(t==null)return t;var r=[],i=0;return au(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},lu={transition:null},NR={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:lu,ReactCurrentOwner:Ep};function l0(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Ll,forEach:function(t,e,n){Ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ll(t,function(){e++}),e},toArray:function(t){return Ll(t,function(e){return e})||[]},only:function(t){if(!wp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=io;he.Fragment=yR;he.Profiler=ER;he.PureComponent=yp;he.StrictMode=vR;he.Suspense=SR;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NR;he.act=l0;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=n0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ep.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)s0.call(e,u)&&!o0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ja,type:t.type,key:i,ref:s,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:TR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wR,_context:t},t.Consumer=t};he.createElement=a0;he.createFactory=function(t){var e=a0.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:IR,render:t}};he.isValidElement=wp;he.lazy=function(t){return{$$typeof:RR,_payload:{_status:-1,_result:t},_init:xR}};he.memo=function(t,e){return{$$typeof:CR,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=lu.transition;lu.transition={};try{t()}finally{lu.transition=e}};he.unstable_act=l0;he.useCallback=function(t,e){return Mt.current.useCallback(t,e)};he.useContext=function(t){return Mt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};he.useEffect=function(t,e){return Mt.current.useEffect(t,e)};he.useId=function(){return Mt.current.useId()};he.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Mt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};he.useRef=function(t){return Mt.current.useRef(t)};he.useState=function(t){return Mt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Mt.current.useTransition()};he.version="18.3.1";e0.exports=he;var oe=e0.exports;const bR=gR(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DR=oe,OR=Symbol.for("react.element"),MR=Symbol.for("react.fragment"),LR=Object.prototype.hasOwnProperty,VR=DR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FR={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)LR.call(e,r)&&!FR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:OR,type:t,key:s,ref:o,props:i,_owner:VR.current}}Oc.Fragment=MR;Oc.jsx=u0;Oc.jsxs=u0;ZE.exports=Oc;var R=ZE.exports,jd={},c0={exports:{}},tn={},h0={exports:{}},d0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var se=$.length;$.push(X);e:for(;0<se;){var Ae=se-1>>>1,Ie=$[Ae];if(0<i(Ie,X))$[Ae]=X,$[se]=Ie,se=Ae;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],se=$.pop();if(se!==X){$[0]=se;e:for(var Ae=0,Ie=$.length,Se=Ie>>>1;Ae<Se;){var U=2*(Ae+1)-1,H=$[U],J=U+1,G=$[J];if(0>i(H,se))J<Ie&&0>i(G,H)?($[Ae]=G,$[J]=se,Ae=J):($[Ae]=H,$[U]=se,Ae=U);else if(J<Ie&&0>i(G,se))$[Ae]=G,$[J]=se,Ae=J;else break e}}return X}function i($,X){var se=$.sortIndex-X.sortIndex;return se!==0?se:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,_=!1,T=!1,x=!1,O=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=$)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function M($){if(x=!1,A($),!T)if(n(u)!==null)T=!0,hi(z);else{var X=n(c);X!==null&&dn(M,X.startTime-$)}}function z($,X){T=!1,x&&(x=!1,C(y),y=-1),_=!0;var se=m;try{for(A(X),p=n(u);p!==null&&(!(p.expirationTime>X)||$&&!P());){var Ae=p.callback;if(typeof Ae=="function"){p.callback=null,m=p.priorityLevel;var Ie=Ae(p.expirationTime<=X);X=t.unstable_now(),typeof Ie=="function"?p.callback=Ie:p===n(u)&&r(u),A(X)}else r(u);p=n(u)}if(p!==null)var Se=!0;else{var U=n(c);U!==null&&dn(M,U.startTime-X),Se=!1}return Se}finally{p=null,m=se,_=!1}}var B=!1,v=null,y=-1,E=5,I=-1;function P(){return!(t.unstable_now()-I<E)}function N(){if(v!==null){var $=t.unstable_now();I=$;var X=!0;try{X=v(!0,$)}finally{X?S():(B=!1,v=null)}}else B=!1}var S;if(typeof w=="function")S=function(){w(N)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,Ye=kt.port2;kt.port1.onmessage=N,S=function(){Ye.postMessage(null)}}else S=function(){O(N,0)};function hi($){v=$,B||(B=!0,S())}function dn($,X){y=O(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,hi(z))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var se=m;m=X;try{return $()}finally{m=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var se=m;m=$;try{return X()}finally{m=se}},t.unstable_scheduleCallback=function($,X,se){var Ae=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Ae+se:Ae):se=Ae,$){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=se+Ie,$={id:d++,callback:X,priorityLevel:$,startTime:se,expirationTime:Ie,sortIndex:-1},se>Ae?($.sortIndex=se,e(c,$),n(u)===null&&$===n(c)&&(x?(C(y),y=-1):x=!0,dn(M,se-Ae))):($.sortIndex=Ie,e(u,$),T||_||(T=!0,hi(z))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var X=m;return function(){var se=m;m=X;try{return $.apply(this,arguments)}finally{m=se}}}})(d0);h0.exports=d0;var UR=h0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jR=oe,en=UR;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f0=new Set,va={};function Hi(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(va[t]=e,t=0;t<e.length;t++)f0.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zd=Object.prototype.hasOwnProperty,zR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z_={},B_={};function BR(t){return zd.call(B_,t)?!0:zd.call(z_,t)?!1:zR.test(t)?B_[t]=!0:(z_[t]=!0,!1)}function WR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $R(t,e,n,r){if(e===null||typeof e>"u"||WR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tp=/[\-:]([a-z])/g;function Ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tp,Ip);pt[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tp,Ip);pt[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tp,Ip);pt[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sp(t,e,n,r){var i=pt.hasOwnProperty(e)?pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($R(e,n,i,r)&&(n=null),r||i===null?BR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=jR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vl=Symbol.for("react.element"),ds=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),Cp=Symbol.for("react.strict_mode"),Bd=Symbol.for("react.profiler"),p0=Symbol.for("react.provider"),m0=Symbol.for("react.context"),Rp=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),$d=Symbol.for("react.suspense_list"),Ap=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),g0=Symbol.for("react.offscreen"),W_=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=W_&&t[W_]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,Gh;function $o(t){if(Gh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gh=e&&e[1]||""}return`
`+Gh+t}var Qh=!1;function Yh(t,e){if(!t||Qh)return"";Qh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Qh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function qR(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=Yh(t.type,!1),t;case 11:return t=Yh(t.type.render,!1),t;case 1:return t=Yh(t.type,!0),t;default:return""}}function qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case ds:return"Portal";case Bd:return"Profiler";case Cp:return"StrictMode";case Wd:return"Suspense";case $d:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m0:return(t.displayName||"Context")+".Consumer";case p0:return(t._context.displayName||"Context")+".Provider";case Rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ap:return e=t.displayName||null,e!==null?e:qd(t.type)||"Memo";case Rr:e=t._payload,t=t._init;try{return qd(t(e))}catch{}}return null}function HR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qd(e);case 8:return e===Cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KR(t){var e=_0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fl(t){t._valueTracker||(t._valueTracker=KR(t))}function y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hd(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function v0(t,e){e=e.checked,e!=null&&Sp(t,"checked",e,!1)}function Kd(t,e){v0(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gd(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function q_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gd(t,e,n){(e!=="number"||xu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qo=Array.isArray;function Rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function H_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(qo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function E0(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function K_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function w0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?w0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ul,T0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ul=Ul||document.createElement("div"),Ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GR=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){GR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function I0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function S0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=I0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var QR=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xd(t,e){if(e){if(QR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function kp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ef=null,As=null,ks=null;function G_(t){if(t=tl(t)){if(typeof ef!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Uc(e),ef(t.stateNode,t.type,e))}}function C0(t){As?ks?ks.push(t):ks=[t]:As=t}function R0(){if(As){var t=As,e=ks;if(ks=As=null,G_(t),e)for(t=0;t<e.length;t++)G_(e[t])}}function A0(t,e){return t(e)}function k0(){}var Xh=!1;function P0(t,e,n){if(Xh)return t(e,n);Xh=!0;try{return A0(t,e,n)}finally{Xh=!1,(As!==null||ks!==null)&&(k0(),R0())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var r=Uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var tf=!1;if(ir)try{var No={};Object.defineProperty(No,"passive",{get:function(){tf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{tf=!1}function YR(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ta=!1,Nu=null,bu=!1,nf=null,XR={onError:function(t){ta=!0,Nu=t}};function JR(t,e,n,r,i,s,o,l,u){ta=!1,Nu=null,YR.apply(XR,arguments)}function ZR(t,e,n,r,i,s,o,l,u){if(JR.apply(this,arguments),ta){if(ta){var c=Nu;ta=!1,Nu=null}else throw Error(F(198));bu||(bu=!0,nf=c)}}function Ki(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function x0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Q_(t){if(Ki(t)!==t)throw Error(F(188))}function eA(t){var e=t.alternate;if(!e){if(e=Ki(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Q_(i),t;if(s===r)return Q_(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function N0(t){return t=eA(t),t!==null?b0(t):null}function b0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b0(t);if(e!==null)return e;t=t.sibling}return null}var D0=en.unstable_scheduleCallback,Y_=en.unstable_cancelCallback,tA=en.unstable_shouldYield,nA=en.unstable_requestPaint,He=en.unstable_now,rA=en.unstable_getCurrentPriorityLevel,Pp=en.unstable_ImmediatePriority,O0=en.unstable_UserBlockingPriority,Du=en.unstable_NormalPriority,iA=en.unstable_LowPriority,M0=en.unstable_IdlePriority,Mc=null,Nn=null;function sA(t){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(Mc,t,void 0,(t.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:lA,oA=Math.log,aA=Math.LN2;function lA(t){return t>>>=0,t===0?32:31-(oA(t)/aA|0)|0}var jl=64,zl=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ho(l):(s&=o,s!==0&&(r=Ho(s)))}else o=n&~i,o!==0?r=Ho(o):s!==0&&(r=Ho(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tn(e),i=1<<n,r|=t[n],e&=~i;return r}function uA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=uA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L0(){var t=jl;return jl<<=1,!(jl&4194240)&&(jl=64),t}function Jh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tn(e),t[e]=n}function hA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function V0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var F0,Np,U0,j0,z0,sf=!1,Bl=[],Fr=null,Ur=null,jr=null,Ta=new Map,Ia=new Map,kr=[],dA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function X_(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(e.pointerId)}}function bo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=tl(e),e!==null&&Np(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function fA(t,e,n,r,i){switch(e){case"focusin":return Fr=bo(Fr,t,e,n,r,i),!0;case"dragenter":return Ur=bo(Ur,t,e,n,r,i),!0;case"mouseover":return jr=bo(jr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ta.set(s,bo(Ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ia.set(s,bo(Ia.get(s)||null,t,e,n,r,i)),!0}return!1}function B0(t){var e=Ei(t.target);if(e!==null){var n=Ki(e);if(n!==null){if(e=n.tag,e===13){if(e=x0(n),e!==null){t.blockedOn=e,z0(t.priority,function(){U0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zd=r,n.target.dispatchEvent(r),Zd=null}else return e=tl(n),e!==null&&Np(e),t.blockedOn=n,!1;e.shift()}return!0}function J_(t,e,n){uu(t)&&n.delete(e)}function pA(){sf=!1,Fr!==null&&uu(Fr)&&(Fr=null),Ur!==null&&uu(Ur)&&(Ur=null),jr!==null&&uu(jr)&&(jr=null),Ta.forEach(J_),Ia.forEach(J_)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,sf||(sf=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,pA)))}function Sa(t){function e(i){return Do(i,t)}if(0<Bl.length){Do(Bl[0],t);for(var n=1;n<Bl.length;n++){var r=Bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fr!==null&&Do(Fr,t),Ur!==null&&Do(Ur,t),jr!==null&&Do(jr,t),Ta.forEach(e),Ia.forEach(e),n=0;n<kr.length;n++)r=kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)B0(n),n.blockedOn===null&&kr.shift()}var Ps=pr.ReactCurrentBatchConfig,Mu=!0;function mA(t,e,n,r){var i=we,s=Ps.transition;Ps.transition=null;try{we=1,bp(t,e,n,r)}finally{we=i,Ps.transition=s}}function gA(t,e,n,r){var i=we,s=Ps.transition;Ps.transition=null;try{we=4,bp(t,e,n,r)}finally{we=i,Ps.transition=s}}function bp(t,e,n,r){if(Mu){var i=of(t,e,n,r);if(i===null)ld(t,e,r,Lu,n),X_(t,r);else if(fA(i,t,e,n,r))r.stopPropagation();else if(X_(t,r),e&4&&-1<dA.indexOf(t)){for(;i!==null;){var s=tl(i);if(s!==null&&F0(s),s=of(t,e,n,r),s===null&&ld(t,e,r,Lu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ld(t,e,r,null,n)}}var Lu=null;function of(t,e,n,r){if(Lu=null,t=kp(r),t=Ei(t),t!==null)if(e=Ki(t),e===null)t=null;else if(n=e.tag,n===13){if(t=x0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lu=t,null}function W0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rA()){case Pp:return 1;case O0:return 4;case Du:case iA:return 16;case M0:return 536870912;default:return 16}default:return 16}}var Or=null,Dp=null,cu=null;function $0(){if(cu)return cu;var t,e=Dp,n=e.length,r,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cu=i.slice(t,1<r?1-r:void 0)}function hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function Z_(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wl:Z_,this.isPropagationStopped=Z_,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Op=nn(so),el=je({},so,{view:0,detail:0}),_A=nn(el),Zh,ed,Oo,Lc=je({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(Zh=t.screenX-Oo.screenX,ed=t.screenY-Oo.screenY):ed=Zh=0,Oo=t),Zh)},movementY:function(t){return"movementY"in t?t.movementY:ed}}),ey=nn(Lc),yA=je({},Lc,{dataTransfer:0}),vA=nn(yA),EA=je({},el,{relatedTarget:0}),td=nn(EA),wA=je({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),TA=nn(wA),IA=je({},so,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),SA=nn(IA),CA=je({},so,{data:0}),ty=nn(CA),RA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kA[t])?!!e[t]:!1}function Mp(){return PA}var xA=je({},el,{key:function(t){if(t.key){var e=RA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mp,charCode:function(t){return t.type==="keypress"?hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NA=nn(xA),bA=je({},Lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ny=nn(bA),DA=je({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mp}),OA=nn(DA),MA=je({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),LA=nn(MA),VA=je({},Lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FA=nn(VA),UA=[9,13,27,32],Lp=ir&&"CompositionEvent"in window,na=null;ir&&"documentMode"in document&&(na=document.documentMode);var jA=ir&&"TextEvent"in window&&!na,q0=ir&&(!Lp||na&&8<na&&11>=na),ry=" ",iy=!1;function H0(t,e){switch(t){case"keyup":return UA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function zA(t,e){switch(t){case"compositionend":return K0(e);case"keypress":return e.which!==32?null:(iy=!0,ry);case"textInput":return t=e.data,t===ry&&iy?null:t;default:return null}}function BA(t,e){if(ps)return t==="compositionend"||!Lp&&H0(t,e)?(t=$0(),cu=Dp=Or=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return q0&&e.locale!=="ko"?null:e.data;default:return null}}var WA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WA[t.type]:e==="textarea"}function G0(t,e,n,r){C0(r),e=Vu(e,"onChange"),0<e.length&&(n=new Op("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ra=null,Ca=null;function $A(t){sw(t,0)}function Vc(t){var e=_s(t);if(y0(e))return t}function qA(t,e){if(t==="change")return e}var Q0=!1;if(ir){var nd;if(ir){var rd="oninput"in document;if(!rd){var oy=document.createElement("div");oy.setAttribute("oninput","return;"),rd=typeof oy.oninput=="function"}nd=rd}else nd=!1;Q0=nd&&(!document.documentMode||9<document.documentMode)}function ay(){ra&&(ra.detachEvent("onpropertychange",Y0),Ca=ra=null)}function Y0(t){if(t.propertyName==="value"&&Vc(Ca)){var e=[];G0(e,Ca,t,kp(t)),P0($A,e)}}function HA(t,e,n){t==="focusin"?(ay(),ra=e,Ca=n,ra.attachEvent("onpropertychange",Y0)):t==="focusout"&&ay()}function KA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vc(Ca)}function GA(t,e){if(t==="click")return Vc(e)}function QA(t,e){if(t==="input"||t==="change")return Vc(e)}function YA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Cn=typeof Object.is=="function"?Object.is:YA;function Ra(t,e){if(Cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zd.call(e,i)||!Cn(t[i],e[i]))return!1}return!0}function ly(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uy(t,e){var n=ly(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ly(n)}}function X0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function J0(){for(var t=window,e=xu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xu(t.document)}return e}function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XA(t){var e=J0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X0(n.ownerDocument.documentElement,n)){if(r!==null&&Vp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=uy(n,s);var o=uy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JA=ir&&"documentMode"in document&&11>=document.documentMode,ms=null,af=null,ia=null,lf=!1;function cy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lf||ms==null||ms!==xu(r)||(r=ms,"selectionStart"in r&&Vp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&Ra(ia,r)||(ia=r,r=Vu(af,"onSelect"),0<r.length&&(e=new Op("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ms)))}function $l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},id={},Z0={};ir&&(Z0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Fc(t){if(id[t])return id[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Z0)return id[t]=e[n];return t}var ew=Fc("animationend"),tw=Fc("animationiteration"),nw=Fc("animationstart"),rw=Fc("transitionend"),iw=new Map,hy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function si(t,e){iw.set(t,e),Hi(e,[t])}for(var sd=0;sd<hy.length;sd++){var od=hy[sd],ZA=od.toLowerCase(),ek=od[0].toUpperCase()+od.slice(1);si(ZA,"on"+ek)}si(ew,"onAnimationEnd");si(tw,"onAnimationIteration");si(nw,"onAnimationStart");si("dblclick","onDoubleClick");si("focusin","onFocus");si("focusout","onBlur");si(rw,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function dy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ZR(r,e,void 0,t),t.currentTarget=null}function sw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;dy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;dy(i,l,c),s=u}}}if(bu)throw t=nf,bu=!1,nf=null,t}function Ne(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var r=t+"__bubble";n.has(r)||(ow(e,t,2,!1),n.add(r))}function ad(t,e,n){var r=0;e&&(r|=4),ow(n,t,r,e)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[ql]){t[ql]=!0,f0.forEach(function(n){n!=="selectionchange"&&(tk.has(n)||ad(n,!1,t),ad(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ql]||(e[ql]=!0,ad("selectionchange",!1,e))}}function ow(t,e,n,r){switch(W0(e)){case 1:var i=mA;break;case 4:i=gA;break;default:i=bp}n=i.bind(null,e,n,t),i=void 0,!tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ld(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ei(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}P0(function(){var c=s,d=kp(n),p=[];e:{var m=iw.get(t);if(m!==void 0){var _=Op,T=t;switch(t){case"keypress":if(hu(n)===0)break e;case"keydown":case"keyup":_=NA;break;case"focusin":T="focus",_=td;break;case"focusout":T="blur",_=td;break;case"beforeblur":case"afterblur":_=td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=ey;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=vA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=OA;break;case ew:case tw:case nw:_=TA;break;case rw:_=LA;break;case"scroll":_=_A;break;case"wheel":_=FA;break;case"copy":case"cut":case"paste":_=SA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=ny}var x=(e&4)!==0,O=!x&&t==="scroll",C=x?m!==null?m+"Capture":null:m;x=[];for(var w=c,A;w!==null;){A=w;var M=A.stateNode;if(A.tag===5&&M!==null&&(A=M,C!==null&&(M=wa(w,C),M!=null&&x.push(ka(w,M,A)))),O)break;w=w.return}0<x.length&&(m=new _(m,T,null,n,d),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Zd&&(T=n.relatedTarget||n.fromElement)&&(Ei(T)||T[sr]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=c,T=T?Ei(T):null,T!==null&&(O=Ki(T),T!==O||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=c),_!==T)){if(x=ey,M="onMouseLeave",C="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(x=ny,M="onPointerLeave",C="onPointerEnter",w="pointer"),O=_==null?m:_s(_),A=T==null?m:_s(T),m=new x(M,w+"leave",_,n,d),m.target=O,m.relatedTarget=A,M=null,Ei(d)===c&&(x=new x(C,w+"enter",T,n,d),x.target=A,x.relatedTarget=O,M=x),O=M,_&&T)t:{for(x=_,C=T,w=0,A=x;A;A=is(A))w++;for(A=0,M=C;M;M=is(M))A++;for(;0<w-A;)x=is(x),w--;for(;0<A-w;)C=is(C),A--;for(;w--;){if(x===C||C!==null&&x===C.alternate)break t;x=is(x),C=is(C)}x=null}else x=null;_!==null&&fy(p,m,_,x,!1),T!==null&&O!==null&&fy(p,O,T,x,!0)}}e:{if(m=c?_s(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var z=qA;else if(sy(m))if(Q0)z=QA;else{z=KA;var B=HA}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=GA);if(z&&(z=z(t,c))){G0(p,z,n,d);break e}B&&B(t,m,c),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&Gd(m,"number",m.value)}switch(B=c?_s(c):window,t){case"focusin":(sy(B)||B.contentEditable==="true")&&(ms=B,af=c,ia=null);break;case"focusout":ia=af=ms=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,cy(p,n,d);break;case"selectionchange":if(JA)break;case"keydown":case"keyup":cy(p,n,d)}var v;if(Lp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ps?H0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(q0&&n.locale!=="ko"&&(ps||y!=="onCompositionStart"?y==="onCompositionEnd"&&ps&&(v=$0()):(Or=d,Dp="value"in Or?Or.value:Or.textContent,ps=!0)),B=Vu(c,y),0<B.length&&(y=new ty(y,t,null,n,d),p.push({event:y,listeners:B}),v?y.data=v:(v=K0(n),v!==null&&(y.data=v)))),(v=jA?zA(t,n):BA(t,n))&&(c=Vu(c,"onBeforeInput"),0<c.length&&(d=new ty("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=v))}sw(p,e)})}function ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wa(t,n),s!=null&&r.unshift(ka(t,s,i)),s=wa(t,e),s!=null&&r.push(ka(t,s,i))),t=t.return}return r}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=wa(n,s),u!=null&&o.unshift(ka(n,u,l))):i||(u=wa(n,s),u!=null&&o.push(ka(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nk=/\r\n?/g,rk=/\u0000|\uFFFD/g;function py(t){return(typeof t=="string"?t:""+t).replace(nk,`
`).replace(rk,"")}function Hl(t,e,n){if(e=py(e),py(t)!==e&&n)throw Error(F(425))}function Fu(){}var uf=null,cf=null;function hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,ik=typeof clearTimeout=="function"?clearTimeout:void 0,my=typeof Promise=="function"?Promise:void 0,sk=typeof queueMicrotask=="function"?queueMicrotask:typeof my<"u"?function(t){return my.resolve(null).then(t).catch(ok)}:df;function ok(t){setTimeout(function(){throw t})}function ud(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Sa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Sa(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oo=Math.random().toString(36).slice(2),Pn="__reactFiber$"+oo,Pa="__reactProps$"+oo,sr="__reactContainer$"+oo,ff="__reactEvents$"+oo,ak="__reactListeners$"+oo,lk="__reactHandles$"+oo;function Ei(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gy(t);t!==null;){if(n=t[Pn])return n;t=gy(t)}return e}t=n,n=t.parentNode}return null}function tl(t){return t=t[Pn]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Uc(t){return t[Pa]||null}var pf=[],ys=-1;function oi(t){return{current:t}}function De(t){0>ys||(t.current=pf[ys],pf[ys]=null,ys--)}function Pe(t,e){ys++,pf[ys]=t.current,t.current=e}var Jr={},Rt=oi(Jr),$t=oi(!1),xi=Jr;function js(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function Uu(){De($t),De(Rt)}function _y(t,e,n){if(Rt.current!==Jr)throw Error(F(168));Pe(Rt,e),Pe($t,n)}function aw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,HR(t)||"Unknown",i));return je({},n,r)}function ju(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,xi=Rt.current,Pe(Rt,t),Pe($t,$t.current),!0}function yy(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=aw(t,e,xi),r.__reactInternalMemoizedMergedChildContext=t,De($t),De(Rt),Pe(Rt,t)):De($t),Pe($t,n)}var Kn=null,jc=!1,cd=!1;function lw(t){Kn===null?Kn=[t]:Kn.push(t)}function uk(t){jc=!0,lw(t)}function ai(){if(!cd&&Kn!==null){cd=!0;var t=0,e=we;try{var n=Kn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,jc=!1}catch(i){throw Kn!==null&&(Kn=Kn.slice(t+1)),D0(Pp,ai),i}finally{we=e,cd=!1}}return null}var vs=[],Es=0,zu=null,Bu=0,sn=[],on=0,Ni=null,Gn=1,Qn="";function gi(t,e){vs[Es++]=Bu,vs[Es++]=zu,zu=t,Bu=e}function uw(t,e,n){sn[on++]=Gn,sn[on++]=Qn,sn[on++]=Ni,Ni=t;var r=Gn;t=Qn;var i=32-Tn(r)-1;r&=~(1<<i),n+=1;var s=32-Tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-Tn(e)+i|n<<i|r,Qn=s+t}else Gn=1<<s|n<<i|r,Qn=t}function Fp(t){t.return!==null&&(gi(t,1),uw(t,1,0))}function Up(t){for(;t===zu;)zu=vs[--Es],vs[Es]=null,Bu=vs[--Es],vs[Es]=null;for(;t===Ni;)Ni=sn[--on],sn[on]=null,Qn=sn[--on],sn[on]=null,Gn=sn[--on],sn[on]=null}var Zt=null,Xt=null,Me=!1,yn=null;function cw(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Xt=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ni!==null?{id:Gn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zt=t,Xt=null,!0):!1;default:return!1}}function mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gf(t){if(Me){var e=Xt;if(e){var n=e;if(!vy(t,e)){if(mf(t))throw Error(F(418));e=zr(n.nextSibling);var r=Zt;e&&vy(t,e)?cw(r,n):(t.flags=t.flags&-4097|2,Me=!1,Zt=t)}}else{if(mf(t))throw Error(F(418));t.flags=t.flags&-4097|2,Me=!1,Zt=t}}}function Ey(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function Kl(t){if(t!==Zt)return!1;if(!Me)return Ey(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hf(t.type,t.memoizedProps)),e&&(e=Xt)){if(mf(t))throw hw(),Error(F(418));for(;e;)cw(t,e),e=zr(e.nextSibling)}if(Ey(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=Zt?zr(t.stateNode.nextSibling):null;return!0}function hw(){for(var t=Xt;t;)t=zr(t.nextSibling)}function zs(){Xt=Zt=null,Me=!1}function jp(t){yn===null?yn=[t]:yn.push(t)}var ck=pr.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Gl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wy(t){var e=t._init;return e(t._payload)}function dw(t){function e(C,w){if(t){var A=C.deletions;A===null?(C.deletions=[w],C.flags|=16):A.push(w)}}function n(C,w){if(!t)return null;for(;w!==null;)e(C,w),w=w.sibling;return null}function r(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function i(C,w){return C=qr(C,w),C.index=0,C.sibling=null,C}function s(C,w,A){return C.index=A,t?(A=C.alternate,A!==null?(A=A.index,A<w?(C.flags|=2,w):A):(C.flags|=2,w)):(C.flags|=1048576,w)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,w,A,M){return w===null||w.tag!==6?(w=_d(A,C.mode,M),w.return=C,w):(w=i(w,A),w.return=C,w)}function u(C,w,A,M){var z=A.type;return z===fs?d(C,w,A.props.children,M,A.key):w!==null&&(w.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Rr&&wy(z)===w.type)?(M=i(w,A.props),M.ref=Mo(C,w,A),M.return=C,M):(M=yu(A.type,A.key,A.props,null,C.mode,M),M.ref=Mo(C,w,A),M.return=C,M)}function c(C,w,A,M){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=yd(A,C.mode,M),w.return=C,w):(w=i(w,A.children||[]),w.return=C,w)}function d(C,w,A,M,z){return w===null||w.tag!==7?(w=ki(A,C.mode,M,z),w.return=C,w):(w=i(w,A),w.return=C,w)}function p(C,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=_d(""+w,C.mode,A),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Vl:return A=yu(w.type,w.key,w.props,null,C.mode,A),A.ref=Mo(C,null,w),A.return=C,A;case ds:return w=yd(w,C.mode,A),w.return=C,w;case Rr:var M=w._init;return p(C,M(w._payload),A)}if(qo(w)||xo(w))return w=ki(w,C.mode,A,null),w.return=C,w;Gl(C,w)}return null}function m(C,w,A,M){var z=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return z!==null?null:l(C,w,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Vl:return A.key===z?u(C,w,A,M):null;case ds:return A.key===z?c(C,w,A,M):null;case Rr:return z=A._init,m(C,w,z(A._payload),M)}if(qo(A)||xo(A))return z!==null?null:d(C,w,A,M,null);Gl(C,A)}return null}function _(C,w,A,M,z){if(typeof M=="string"&&M!==""||typeof M=="number")return C=C.get(A)||null,l(w,C,""+M,z);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Vl:return C=C.get(M.key===null?A:M.key)||null,u(w,C,M,z);case ds:return C=C.get(M.key===null?A:M.key)||null,c(w,C,M,z);case Rr:var B=M._init;return _(C,w,A,B(M._payload),z)}if(qo(M)||xo(M))return C=C.get(A)||null,d(w,C,M,z,null);Gl(w,M)}return null}function T(C,w,A,M){for(var z=null,B=null,v=w,y=w=0,E=null;v!==null&&y<A.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var I=m(C,v,A[y],M);if(I===null){v===null&&(v=E);break}t&&v&&I.alternate===null&&e(C,v),w=s(I,w,y),B===null?z=I:B.sibling=I,B=I,v=E}if(y===A.length)return n(C,v),Me&&gi(C,y),z;if(v===null){for(;y<A.length;y++)v=p(C,A[y],M),v!==null&&(w=s(v,w,y),B===null?z=v:B.sibling=v,B=v);return Me&&gi(C,y),z}for(v=r(C,v);y<A.length;y++)E=_(v,C,y,A[y],M),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),w=s(E,w,y),B===null?z=E:B.sibling=E,B=E);return t&&v.forEach(function(P){return e(C,P)}),Me&&gi(C,y),z}function x(C,w,A,M){var z=xo(A);if(typeof z!="function")throw Error(F(150));if(A=z.call(A),A==null)throw Error(F(151));for(var B=z=null,v=w,y=w=0,E=null,I=A.next();v!==null&&!I.done;y++,I=A.next()){v.index>y?(E=v,v=null):E=v.sibling;var P=m(C,v,I.value,M);if(P===null){v===null&&(v=E);break}t&&v&&P.alternate===null&&e(C,v),w=s(P,w,y),B===null?z=P:B.sibling=P,B=P,v=E}if(I.done)return n(C,v),Me&&gi(C,y),z;if(v===null){for(;!I.done;y++,I=A.next())I=p(C,I.value,M),I!==null&&(w=s(I,w,y),B===null?z=I:B.sibling=I,B=I);return Me&&gi(C,y),z}for(v=r(C,v);!I.done;y++,I=A.next())I=_(v,C,y,I.value,M),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?y:I.key),w=s(I,w,y),B===null?z=I:B.sibling=I,B=I);return t&&v.forEach(function(N){return e(C,N)}),Me&&gi(C,y),z}function O(C,w,A,M){if(typeof A=="object"&&A!==null&&A.type===fs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Vl:e:{for(var z=A.key,B=w;B!==null;){if(B.key===z){if(z=A.type,z===fs){if(B.tag===7){n(C,B.sibling),w=i(B,A.props.children),w.return=C,C=w;break e}}else if(B.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Rr&&wy(z)===B.type){n(C,B.sibling),w=i(B,A.props),w.ref=Mo(C,B,A),w.return=C,C=w;break e}n(C,B);break}else e(C,B);B=B.sibling}A.type===fs?(w=ki(A.props.children,C.mode,M,A.key),w.return=C,C=w):(M=yu(A.type,A.key,A.props,null,C.mode,M),M.ref=Mo(C,w,A),M.return=C,C=M)}return o(C);case ds:e:{for(B=A.key;w!==null;){if(w.key===B)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(C,w.sibling),w=i(w,A.children||[]),w.return=C,C=w;break e}else{n(C,w);break}else e(C,w);w=w.sibling}w=yd(A,C.mode,M),w.return=C,C=w}return o(C);case Rr:return B=A._init,O(C,w,B(A._payload),M)}if(qo(A))return T(C,w,A,M);if(xo(A))return x(C,w,A,M);Gl(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(C,w.sibling),w=i(w,A),w.return=C,C=w):(n(C,w),w=_d(A,C.mode,M),w.return=C,C=w),o(C)):n(C,w)}return O}var Bs=dw(!0),fw=dw(!1),Wu=oi(null),$u=null,ws=null,zp=null;function Bp(){zp=ws=$u=null}function Wp(t){var e=Wu.current;De(Wu),t._currentValue=e}function _f(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){$u=t,zp=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function cn(t){var e=t._currentValue;if(zp!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if($u===null)throw Error(F(308));ws=t,$u.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var wi=null;function $p(t){wi===null?wi=[t]:wi.push(t)}function pw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$p(e)):(n.next=i.next,i.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function qp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,or(t,n)}return i=r.interleaved,i===null?(e.next=e,$p(r)):(e.next=i.next,i.next=e),r.interleaved=e,or(t,n)}function du(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xp(t,n)}}function Ty(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qu(t,e,n,r){var i=t.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,_=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var T=t,x=l;switch(m=e,_=n,x.tag){case 1:if(T=x.payload,typeof T=="function"){p=T.call(_,p,m);break e}p=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=x.payload,m=typeof T=="function"?T.call(_,p,m):T,m==null)break e;p=je({},p,m);break e;case 2:Ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else _={eventTime:_,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=_,u=p):d=d.next=_,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Di|=o,t.lanes=o,t.memoizedState=p}}function Iy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var nl={},bn=oi(nl),xa=oi(nl),Na=oi(nl);function Ti(t){if(t===nl)throw Error(F(174));return t}function Hp(t,e){switch(Pe(Na,e),Pe(xa,t),Pe(bn,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yd(e,t)}De(bn),Pe(bn,e)}function Ws(){De(bn),De(xa),De(Na)}function gw(t){Ti(Na.current);var e=Ti(bn.current),n=Yd(e,t.type);e!==n&&(Pe(xa,t),Pe(bn,n))}function Kp(t){xa.current===t&&(De(bn),De(xa))}var Fe=oi(0);function Hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hd=[];function Gp(){for(var t=0;t<hd.length;t++)hd[t]._workInProgressVersionPrimary=null;hd.length=0}var fu=pr.ReactCurrentDispatcher,dd=pr.ReactCurrentBatchConfig,bi=0,Ue=null,Xe=null,it=null,Ku=!1,sa=!1,ba=0,hk=0;function vt(){throw Error(F(321))}function Qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Cn(t[n],e[n]))return!1;return!0}function Yp(t,e,n,r,i,s){if(bi=s,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fu.current=t===null||t.memoizedState===null?mk:gk,t=n(r,i),sa){s=0;do{if(sa=!1,ba=0,25<=s)throw Error(F(301));s+=1,it=Xe=null,e.updateQueue=null,fu.current=_k,t=n(r,i)}while(sa)}if(fu.current=Gu,e=Xe!==null&&Xe.next!==null,bi=0,it=Xe=Ue=null,Ku=!1,e)throw Error(F(300));return t}function Xp(){var t=ba!==0;return ba=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Ue.memoizedState=it=t:it=it.next=t,it}function hn(){if(Xe===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=it===null?Ue.memoizedState:it.next;if(e!==null)it=e,Xe=t;else{if(t===null)throw Error(F(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},it===null?Ue.memoizedState=it=t:it=it.next=t}return it}function Da(t,e){return typeof e=="function"?e(t):e}function fd(t){var e=hn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((bi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ue.lanes|=d,Di|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Cn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ue.lanes|=s,Di|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pd(t){var e=hn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Cn(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _w(){}function yw(t,e){var n=Ue,r=hn(),i=e(),s=!Cn(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,Jp(ww.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Oa(9,Ew.bind(null,n,r,i,e),void 0,null),at===null)throw Error(F(349));bi&30||vw(n,e,i)}return i}function vw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ew(t,e,n,r){e.value=n,e.getSnapshot=r,Tw(e)&&Iw(t)}function ww(t,e,n){return n(function(){Tw(e)&&Iw(t)})}function Tw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Cn(t,n)}catch{return!0}}function Iw(t){var e=or(t,1);e!==null&&In(e,t,1,-1)}function Sy(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=pk.bind(null,Ue,t),[e.memoizedState,t]}function Oa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Sw(){return hn().memoizedState}function pu(t,e,n,r){var i=kn();Ue.flags|=t,i.memoizedState=Oa(1|e,n,void 0,r===void 0?null:r)}function zc(t,e,n,r){var i=hn();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&Qp(r,o.deps)){i.memoizedState=Oa(e,n,s,r);return}}Ue.flags|=t,i.memoizedState=Oa(1|e,n,s,r)}function Cy(t,e){return pu(8390656,8,t,e)}function Jp(t,e){return zc(2048,8,t,e)}function Cw(t,e){return zc(4,2,t,e)}function Rw(t,e){return zc(4,4,t,e)}function Aw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kw(t,e,n){return n=n!=null?n.concat([t]):null,zc(4,4,Aw.bind(null,e,t),n)}function Zp(){}function Pw(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xw(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Nw(t,e,n){return bi&21?(Cn(n,e)||(n=L0(),Ue.lanes|=n,Di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function dk(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=dd.transition;dd.transition={};try{t(!1),e()}finally{we=n,dd.transition=r}}function bw(){return hn().memoizedState}function fk(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dw(t))Ow(e,n);else if(n=pw(t,e,n,r),n!==null){var i=Dt();In(n,t,r,i),Mw(n,e,r)}}function pk(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dw(t))Ow(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Cn(l,o)){var u=e.interleaved;u===null?(i.next=i,$p(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=pw(t,e,i,r),n!==null&&(i=Dt(),In(n,t,r,i),Mw(n,e,r))}}function Dw(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function Ow(t,e){sa=Ku=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xp(t,n)}}var Gu={readContext:cn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},mk={readContext:cn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:Cy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pu(4194308,4,Aw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pu(4194308,4,t,e)},useInsertionEffect:function(t,e){return pu(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fk.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Sy,useDebugValue:Zp,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Sy(!1),e=t[0];return t=dk.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,i=kn();if(Me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),at===null)throw Error(F(349));bi&30||vw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cy(ww.bind(null,r,s,t),[t]),r.flags|=2048,Oa(9,Ew.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=at.identifierPrefix;if(Me){var n=Qn,r=Gn;n=(r&~(1<<32-Tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gk={readContext:cn,useCallback:Pw,useContext:cn,useEffect:Jp,useImperativeHandle:kw,useInsertionEffect:Cw,useLayoutEffect:Rw,useMemo:xw,useReducer:fd,useRef:Sw,useState:function(){return fd(Da)},useDebugValue:Zp,useDeferredValue:function(t){var e=hn();return Nw(e,Xe.memoizedState,t)},useTransition:function(){var t=fd(Da)[0],e=hn().memoizedState;return[t,e]},useMutableSource:_w,useSyncExternalStore:yw,useId:bw,unstable_isNewReconciler:!1},_k={readContext:cn,useCallback:Pw,useContext:cn,useEffect:Jp,useImperativeHandle:kw,useInsertionEffect:Cw,useLayoutEffect:Rw,useMemo:xw,useReducer:pd,useRef:Sw,useState:function(){return pd(Da)},useDebugValue:Zp,useDeferredValue:function(t){var e=hn();return Xe===null?e.memoizedState=t:Nw(e,Xe.memoizedState,t)},useTransition:function(){var t=pd(Da)[0],e=hn().memoizedState;return[t,e]},useMutableSource:_w,useSyncExternalStore:yw,useId:bw,unstable_isNewReconciler:!1};function mn(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bc={isMounted:function(t){return(t=t._reactInternals)?Ki(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=$r(t),s=er(r,i);s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(In(e,t,i,r),du(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=$r(t),s=er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(In(e,t,i,r),du(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=$r(t),i=er(n,r);i.tag=2,e!=null&&(i.callback=e),e=Br(t,i,r),e!==null&&(In(e,t,r,n),du(e,t,r))}};function Ry(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,r)||!Ra(i,s):!0}function Lw(t,e,n){var r=!1,i=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=cn(s):(i=qt(e)?xi:Rt.current,r=e.contextTypes,s=(r=r!=null)?js(t,i):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ay(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bc.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},qp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=cn(s):(s=qt(e)?xi:Rt.current,i.context=js(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Bc.enqueueReplaceState(i,i.state,null),qu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $s(t,e){try{var n="",r=e;do n+=qR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function md(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yk=typeof WeakMap=="function"?WeakMap:Map;function Vw(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yu||(Yu=!0,xf=r),Ef(t,e)},n}function Fw(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ef(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ef(t,e),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ky(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bk.bind(null,t,e,n),e.then(t,t))}function Py(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Br(n,e,1))),n.lanes|=1),t)}var vk=pr.ReactCurrentOwner,zt=!1;function bt(t,e,n,r){e.child=t===null?fw(e,null,n,r):Bs(e,t.child,n,r)}function Ny(t,e,n,r,i){n=n.render;var s=e.ref;return xs(e,i),r=Yp(t,e,n,r,s,i),n=Xp(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Me&&n&&Fp(e),e.flags|=1,bt(t,e,r,i),e.child)}function by(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!am(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Uw(t,e,s,r,i)):(t=yu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(o,r)&&t.ref===e.ref)return ar(t,e,i)}return e.flags|=1,t=qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Uw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ra(s,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,ar(t,e,i)}return wf(t,e,n,r,i)}function jw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Is,Yt),Yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(Is,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Pe(Is,Yt),Yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Pe(Is,Yt),Yt|=r;return bt(t,e,i,n),e.child}function zw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wf(t,e,n,r,i){var s=qt(n)?xi:Rt.current;return s=js(e,s),xs(e,i),n=Yp(t,e,n,r,s,i),r=Xp(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Me&&r&&Fp(e),e.flags|=1,bt(t,e,n,i),e.child)}function Dy(t,e,n,r,i){if(qt(n)){var s=!0;ju(e)}else s=!1;if(xs(e,i),e.stateNode===null)mu(t,e),Lw(e,n,r),vf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=cn(c):(c=qt(n)?xi:Rt.current,c=js(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ay(e,o,r,c),Ar=!1;var m=e.memoizedState;o.state=m,qu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||$t.current||Ar?(typeof d=="function"&&(yf(e,n,d,r),u=e.memoizedState),(l=Ar||Ry(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,mw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:mn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=cn(u):(u=qt(n)?xi:Rt.current,u=js(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Ay(e,o,r,u),Ar=!1,m=e.memoizedState,o.state=m,qu(e,r,o,i);var T=e.memoizedState;l!==p||m!==T||$t.current||Ar?(typeof _=="function"&&(yf(e,n,_,r),T=e.memoizedState),(c=Ar||Ry(e,n,c,r,m,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Tf(t,e,n,r,s,i)}function Tf(t,e,n,r,i,s){zw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yy(e,n,!1),ar(t,e,s);r=e.stateNode,vk.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,l,s)):bt(t,e,l,s),e.memoizedState=r.state,i&&yy(e,n,!0),e.child}function Bw(t){var e=t.stateNode;e.pendingContext?_y(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_y(t,e.context,!1),Hp(t,e.containerInfo)}function Oy(t,e,n,r,i){return zs(),jp(i),e.flags|=256,bt(t,e,n,r),e.child}var If={dehydrated:null,treeContext:null,retryLane:0};function Sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ww(t,e,n){var r=e.pendingProps,i=Fe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(Fe,i&1),t===null)return gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qc(o,r,0,null),t=ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sf(n),e.memoizedState=If,t):em(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ek(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=qr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=qr(l,s):(s=ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=If,r}return s=t.child,t=s.sibling,r=qr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function em(t,e){return e=qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ql(t,e,n,r){return r!==null&&jp(r),Bs(e,t.child,null,n),t=em(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ek(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=md(Error(F(422))),Ql(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=qc({mode:"visible",children:r.children},i,0,null),s=ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=Sf(o),e.memoizedState=If,s);if(!(e.mode&1))return Ql(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=md(s,r,void 0),Ql(t,e,o,r)}if(l=(o&t.childLanes)!==0,zt||l){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,or(t,i),In(r,t,i,-1))}return om(),r=md(Error(F(421))),Ql(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Dk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xt=zr(i.nextSibling),Zt=e,Me=!0,yn=null,t!==null&&(sn[on++]=Gn,sn[on++]=Qn,sn[on++]=Ni,Gn=t.id,Qn=t.overflow,Ni=e),e=em(e,r.children),e.flags|=4096,e)}function My(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_f(t.return,e,n)}function gd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $w(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(bt(t,e,r.children,n),r=Fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&My(t,n,e);else if(t.tag===19)My(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(Fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Hu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Hu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gd(e,!0,n,null,s);break;case"together":gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wk(t,e,n){switch(e.tag){case 3:Bw(e),zs();break;case 5:gw(e);break;case 1:qt(e.type)&&ju(e);break;case 4:Hp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(Wu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Fe,Fe.current&1),e.flags|=128,null):n&e.child.childLanes?Ww(t,e,n):(Pe(Fe,Fe.current&1),t=ar(t,e,n),t!==null?t.sibling:null);Pe(Fe,Fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $w(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Fe,Fe.current),r)break;return null;case 22:case 23:return e.lanes=0,jw(t,e,n)}return ar(t,e,n)}var qw,Cf,Hw,Kw;qw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cf=function(){};Hw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ti(bn.current);var s=null;switch(n){case"input":i=Hd(t,i),r=Hd(t,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=Qd(t,i),r=Qd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fu)}Xd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(va.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(va.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ne("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Kw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Lo(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tk(t,e,n){var r=e.pendingProps;switch(Up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return qt(e.type)&&Uu(),Et(e),null;case 3:return r=e.stateNode,Ws(),De($t),De(Rt),Gp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(Df(yn),yn=null))),Cf(t,e),Et(e),null;case 5:Kp(e);var i=Ti(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)Hw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Et(e),null}if(t=Ti(bn.current),Kl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pn]=e,r[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<Ko.length;i++)Ne(Ko[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":$_(r,s),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ne("invalid",r);break;case"textarea":H_(r,s),Ne("invalid",r)}Xd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,l,t),i=["children",""+l]):va.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":Fl(r),q_(r,s,!0);break;case"textarea":Fl(r),K_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=w0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[Pa]=r,qw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jd(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),i=r;break;case"iframe":case"object":case"embed":Ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ko.length;i++)Ne(Ko[i],t);i=r;break;case"source":Ne("error",t),i=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),i=r;break;case"details":Ne("toggle",t),i=r;break;case"input":$_(t,r),i=Hd(t,r),Ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":H_(t,r),i=Qd(t,r),Ne("invalid",t);break;default:i=r}Xd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?S0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&T0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ea(t,u):typeof u=="number"&&Ea(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ne("scroll",t):u!=null&&Sp(t,s,u,o))}switch(n){case"input":Fl(t),q_(t,r,!1);break;case"textarea":Fl(t),K_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)Kw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Ti(Na.current),Ti(bn.current),Kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(s=r.nodeValue!==n)&&(t=Zt,t!==null))switch(t.tag){case 3:Hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return Et(e),null;case 13:if(De(Fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&Xt!==null&&e.mode&1&&!(e.flags&128))hw(),zs(),e.flags|=98560,s=!1;else if(s=Kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Pn]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else yn!==null&&(Df(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Fe.current&1?et===0&&(et=3):om())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return Ws(),Cf(t,e),t===null&&Aa(e.stateNode.containerInfo),Et(e),null;case 10:return Wp(e.type._context),Et(e),null;case 17:return qt(e.type)&&Uu(),Et(e),null;case 19:if(De(Fe),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Lo(s,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hu(t),o!==null){for(e.flags|=128,Lo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(Fe,Fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>qs&&(e.flags|=128,r=!0,Lo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Hu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Me)return Et(e),null}else 2*He()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,r=!0,Lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=Fe.current,Pe(Fe,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return sm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Yt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function Ik(t,e){switch(Up(e),e.tag){case 1:return qt(e.type)&&Uu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),De($t),De(Rt),Gp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kp(e),null;case 13:if(De(Fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(Fe),null;case 4:return Ws(),null;case 10:return Wp(e.type._context),null;case 22:case 23:return sm(),null;case 24:return null;default:return null}}var Yl=!1,It=!1,Sk=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function Rf(t,e,n){try{n()}catch(r){Be(t,e,r)}}var Ly=!1;function Ck(t,e){if(uf=Mu,t=J0(),Vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},Mu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var x=T.memoizedProps,O=T.memoizedState,C=e.stateNode,w=C.getSnapshotBeforeUpdate(e.elementType===e.type?x:mn(e.type,x),O);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(M){Be(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return T=Ly,Ly=!1,T}function oa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rf(e,n,s)}i=i.next}while(i!==r)}}function Wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gw(t){var e=t.alternate;e!==null&&(t.alternate=null,Gw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[Pa],delete e[ff],delete e[ak],delete e[lk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qw(t){return t.tag===5||t.tag===3||t.tag===4}function Vy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fu));else if(r!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}function Pf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pf(t,e,n),t=t.sibling;t!==null;)Pf(t,e,n),t=t.sibling}var ut=null,_n=!1;function Tr(t,e,n){for(n=n.child;n!==null;)Yw(t,e,n),n=n.sibling}function Yw(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(Mc,n)}catch{}switch(n.tag){case 5:It||Ts(n,e);case 6:var r=ut,i=_n;ut=null,Tr(t,e,n),ut=r,_n=i,ut!==null&&(_n?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(_n?(t=ut,n=n.stateNode,t.nodeType===8?ud(t.parentNode,n):t.nodeType===1&&ud(t,n),Sa(t)):ud(ut,n.stateNode));break;case 4:r=ut,i=_n,ut=n.stateNode.containerInfo,_n=!0,Tr(t,e,n),ut=r,_n=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rf(n,e,o),i=i.next}while(i!==r)}Tr(t,e,n);break;case 1:if(!It&&(Ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Be(n,e,l)}Tr(t,e,n);break;case 21:Tr(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Tr(t,e,n),It=r):Tr(t,e,n);break;default:Tr(t,e,n)}}function Fy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sk),e.forEach(function(r){var i=Ok.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ut=l.stateNode,_n=!1;break e;case 3:ut=l.stateNode.containerInfo,_n=!0;break e;case 4:ut=l.stateNode.containerInfo,_n=!0;break e}l=l.return}if(ut===null)throw Error(F(160));Yw(s,o,i),ut=null,_n=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xw(e,t),e=e.sibling}function Xw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),An(t),r&4){try{oa(3,t,t.return),Wc(3,t)}catch(x){Be(t,t.return,x)}try{oa(5,t,t.return)}catch(x){Be(t,t.return,x)}}break;case 1:pn(e,t),An(t),r&512&&n!==null&&Ts(n,n.return);break;case 5:if(pn(e,t),An(t),r&512&&n!==null&&Ts(n,n.return),t.flags&32){var i=t.stateNode;try{Ea(i,"")}catch(x){Be(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&v0(i,s),Jd(l,o);var c=Jd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?S0(i,p):d==="dangerouslySetInnerHTML"?T0(i,p):d==="children"?Ea(i,p):Sp(i,d,p,c)}switch(l){case"input":Kd(i,s);break;case"textarea":E0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Rs(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?Rs(i,!!s.multiple,s.defaultValue,!0):Rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Pa]=s}catch(x){Be(t,t.return,x)}}break;case 6:if(pn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Be(t,t.return,x)}}break;case 3:if(pn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(x){Be(t,t.return,x)}break;case 4:pn(e,t),An(t);break;case 13:pn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rm=He())),r&4&&Fy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||d,pn(e,t),It=c):pn(e,t),An(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(p=q=d;q!==null;){switch(m=q,_=m.child,m.tag){case 0:case 11:case 14:case 15:oa(4,m,m.return);break;case 1:Ts(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(x){Be(r,n,x)}}break;case 5:Ts(m,m.return);break;case 22:if(m.memoizedState!==null){jy(p);continue}}_!==null?(_.return=m,q=_):jy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=I0("display",o))}catch(x){Be(t,t.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){Be(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:pn(e,t),An(t),r&4&&Fy(t);break;case 21:break;default:pn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ea(i,""),r.flags&=-33);var s=Vy(t);Pf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Vy(t);kf(t,l,o);break;default:throw Error(F(161))}}catch(u){Be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rk(t,e,n){q=t,Jw(t)}function Jw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||It;l=Yl;var c=It;if(Yl=o,(It=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?zy(i):u!==null?(u.return=o,q=u):zy(i);for(;s!==null;)q=s,Jw(s),s=s.sibling;q=i,Yl=l,It=c}Uy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Uy(t)}}function Uy(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Iy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Iy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Sa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}It||e.flags&512&&Af(e)}catch(m){Be(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function jy(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function zy(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wc(4,e)}catch(u){Be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Be(e,i,u)}}var s=e.return;try{Af(e)}catch(u){Be(e,s,u)}break;case 5:var o=e.return;try{Af(e)}catch(u){Be(e,o,u)}}}catch(u){Be(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var Ak=Math.ceil,Qu=pr.ReactCurrentDispatcher,tm=pr.ReactCurrentOwner,ln=pr.ReactCurrentBatchConfig,me=0,at=null,Ge=null,dt=0,Yt=0,Is=oi(0),et=0,Ma=null,Di=0,$c=0,nm=0,aa=null,Ut=null,rm=0,qs=1/0,Hn=null,Yu=!1,xf=null,Wr=null,Xl=!1,Mr=null,Xu=0,la=0,Nf=null,gu=-1,_u=0;function Dt(){return me&6?He():gu!==-1?gu:gu=He()}function $r(t){return t.mode&1?me&2&&dt!==0?dt&-dt:ck.transition!==null?(_u===0&&(_u=L0()),_u):(t=we,t!==0||(t=window.event,t=t===void 0?16:W0(t.type)),t):1}function In(t,e,n,r){if(50<la)throw la=0,Nf=null,Error(F(185));Za(t,n,r),(!(me&2)||t!==at)&&(t===at&&(!(me&2)&&($c|=n),et===4&&Pr(t,dt)),Ht(t,r),n===1&&me===0&&!(e.mode&1)&&(qs=He()+500,jc&&ai()))}function Ht(t,e){var n=t.callbackNode;cA(t,e);var r=Ou(t,t===at?dt:0);if(r===0)n!==null&&Y_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Y_(n),e===1)t.tag===0?uk(By.bind(null,t)):lw(By.bind(null,t)),sk(function(){!(me&6)&&ai()}),n=null;else{switch(V0(r)){case 1:n=Pp;break;case 4:n=O0;break;case 16:n=Du;break;case 536870912:n=M0;break;default:n=Du}n=oT(n,Zw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zw(t,e){if(gu=-1,_u=0,me&6)throw Error(F(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var r=Ou(t,t===at?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ju(t,r);else{e=r;var i=me;me|=2;var s=tT();(at!==t||dt!==e)&&(Hn=null,qs=He()+500,Ai(t,e));do try{xk();break}catch(l){eT(t,l)}while(!0);Bp(),Qu.current=s,me=i,Ge!==null?e=0:(at=null,dt=0,e=et)}if(e!==0){if(e===2&&(i=rf(t),i!==0&&(r=i,e=bf(t,i))),e===1)throw n=Ma,Ai(t,0),Pr(t,r),Ht(t,He()),n;if(e===6)Pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!kk(i)&&(e=Ju(t,r),e===2&&(s=rf(t),s!==0&&(r=s,e=bf(t,s))),e===1))throw n=Ma,Ai(t,0),Pr(t,r),Ht(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:_i(t,Ut,Hn);break;case 3:if(Pr(t,r),(r&130023424)===r&&(e=rm+500-He(),10<e)){if(Ou(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=df(_i.bind(null,t,Ut,Hn),e);break}_i(t,Ut,Hn);break;case 4:if(Pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ak(r/1960))-r,10<r){t.timeoutHandle=df(_i.bind(null,t,Ut,Hn),r);break}_i(t,Ut,Hn);break;case 5:_i(t,Ut,Hn);break;default:throw Error(F(329))}}}return Ht(t,He()),t.callbackNode===n?Zw.bind(null,t):null}function bf(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(Ai(t,e).flags|=256),t=Ju(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&Df(e)),t}function Df(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function kk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~nm,e&=~$c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tn(e),r=1<<n;t[n]=-1,e&=~r}}function By(t){if(me&6)throw Error(F(327));Ns();var e=Ou(t,0);if(!(e&1))return Ht(t,He()),null;var n=Ju(t,e);if(t.tag!==0&&n===2){var r=rf(t);r!==0&&(e=r,n=bf(t,r))}if(n===1)throw n=Ma,Ai(t,0),Pr(t,e),Ht(t,He()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_i(t,Ut,Hn),Ht(t,He()),null}function im(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(qs=He()+500,jc&&ai())}}function Oi(t){Mr!==null&&Mr.tag===0&&!(me&6)&&Ns();var e=me;me|=1;var n=ln.transition,r=we;try{if(ln.transition=null,we=1,t)return t()}finally{we=r,ln.transition=n,me=e,!(me&6)&&ai()}}function sm(){Yt=Is.current,De(Is)}function Ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ik(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Up(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uu();break;case 3:Ws(),De($t),De(Rt),Gp();break;case 5:Kp(r);break;case 4:Ws();break;case 13:De(Fe);break;case 19:De(Fe);break;case 10:Wp(r.type._context);break;case 22:case 23:sm()}n=n.return}if(at=t,Ge=t=qr(t.current,null),dt=Yt=e,et=0,Ma=null,nm=$c=Di=0,Ut=aa=null,wi!==null){for(e=0;e<wi.length;e++)if(n=wi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wi=null}return t}function eT(t,e){do{var n=Ge;try{if(Bp(),fu.current=Gu,Ku){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ku=!1}if(bi=0,it=Xe=Ue=null,sa=!1,ba=0,tm.current=null,n===null||n.return===null){et=1,Ma=e,Ge=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=dt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Py(o);if(_!==null){_.flags&=-257,xy(_,o,l,s,e),_.mode&1&&ky(s,c,e),e=_,u=c;var T=e.updateQueue;if(T===null){var x=new Set;x.add(u),e.updateQueue=x}else T.add(u);break e}else{if(!(e&1)){ky(s,c,e),om();break e}u=Error(F(426))}}else if(Me&&l.mode&1){var O=Py(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),xy(O,o,l,s,e),jp($s(u,l));break e}}s=u=$s(u,l),et!==4&&(et=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var C=Vw(s,u,e);Ty(s,C);break e;case 1:l=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Wr===null||!Wr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Fw(s,l,e);Ty(s,M);break e}}s=s.return}while(s!==null)}rT(n)}catch(z){e=z,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function tT(){var t=Qu.current;return Qu.current=Gu,t===null?Gu:t}function om(){(et===0||et===3||et===2)&&(et=4),at===null||!(Di&268435455)&&!($c&268435455)||Pr(at,dt)}function Ju(t,e){var n=me;me|=2;var r=tT();(at!==t||dt!==e)&&(Hn=null,Ai(t,e));do try{Pk();break}catch(i){eT(t,i)}while(!0);if(Bp(),me=n,Qu.current=r,Ge!==null)throw Error(F(261));return at=null,dt=0,et}function Pk(){for(;Ge!==null;)nT(Ge)}function xk(){for(;Ge!==null&&!tA();)nT(Ge)}function nT(t){var e=sT(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?rT(t):Ge=e,tm.current=null}function rT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ik(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Ge=null;return}}else if(n=Tk(n,e,Yt),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);et===0&&(et=5)}function _i(t,e,n){var r=we,i=ln.transition;try{ln.transition=null,we=1,Nk(t,e,n,r)}finally{ln.transition=i,we=r}return null}function Nk(t,e,n,r){do Ns();while(Mr!==null);if(me&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hA(t,s),t===at&&(Ge=at=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xl||(Xl=!0,oT(Du,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ln.transition,ln.transition=null;var o=we;we=1;var l=me;me|=4,tm.current=null,Ck(t,n),Xw(n,t),XA(cf),Mu=!!uf,cf=uf=null,t.current=n,Rk(n),nA(),me=l,we=o,ln.transition=s}else t.current=n;if(Xl&&(Xl=!1,Mr=t,Xu=i),s=t.pendingLanes,s===0&&(Wr=null),sA(n.stateNode),Ht(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yu)throw Yu=!1,t=xf,xf=null,t;return Xu&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===Nf?la++:(la=0,Nf=t):la=0,ai(),null}function Ns(){if(Mr!==null){var t=V0(Xu),e=ln.transition,n=we;try{if(ln.transition=null,we=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,Xu=0,me&6)throw Error(F(331));var i=me;for(me|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:oa(8,d,s)}var p=d.child;if(p!==null)p.return=d,q=p;else for(;q!==null;){d=q;var m=d.sibling,_=d.return;if(Gw(d),d===c){q=null;break}if(m!==null){m.return=_,q=m;break}q=_}}}var T=s.alternate;if(T!==null){var x=T.child;if(x!==null){T.child=null;do{var O=x.sibling;x.sibling=null,x=O}while(x!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,q=C;break e}q=s.return}}var w=t.current;for(q=w;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=w;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wc(9,l)}}catch(z){Be(l,l.return,z)}if(l===o){q=null;break e}var M=l.sibling;if(M!==null){M.return=l.return,q=M;break e}q=l.return}}if(me=i,ai(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(Mc,t)}catch{}r=!0}return r}finally{we=n,ln.transition=e}}return!1}function Wy(t,e,n){e=$s(n,e),e=Vw(t,e,1),t=Br(t,e,1),e=Dt(),t!==null&&(Za(t,1,e),Ht(t,e))}function Be(t,e,n){if(t.tag===3)Wy(t,t,n);else for(;e!==null;){if(e.tag===3){Wy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){t=$s(n,t),t=Fw(e,t,1),e=Br(e,t,1),t=Dt(),e!==null&&(Za(e,1,t),Ht(e,t));break}}e=e.return}}function bk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(dt&n)===n&&(et===4||et===3&&(dt&130023424)===dt&&500>He()-rm?Ai(t,0):nm|=n),Ht(t,e)}function iT(t,e){e===0&&(t.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var n=Dt();t=or(t,e),t!==null&&(Za(t,e,n),Ht(t,n))}function Dk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iT(t,n)}function Ok(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),iT(t,n)}var sT;sT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,wk(t,e,n);zt=!!(t.flags&131072)}else zt=!1,Me&&e.flags&1048576&&uw(e,Bu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mu(t,e),t=e.pendingProps;var i=js(e,Rt.current);xs(e,n),i=Yp(null,e,r,t,i,n);var s=Xp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,ju(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qp(e),i.updater=Bc,e.stateNode=i,i._reactInternals=e,vf(e,r,t,n),e=Tf(null,e,r,!0,s,n)):(e.tag=0,Me&&s&&Fp(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Lk(r),t=mn(r,t),i){case 0:e=wf(null,e,r,t,n);break e;case 1:e=Dy(null,e,r,t,n);break e;case 11:e=Ny(null,e,r,t,n);break e;case 14:e=by(null,e,r,mn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),wf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Dy(t,e,r,i,n);case 3:e:{if(Bw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,mw(t,e),qu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$s(Error(F(423)),e),e=Oy(t,e,r,n,i);break e}else if(r!==i){i=$s(Error(F(424)),e),e=Oy(t,e,r,n,i);break e}else for(Xt=zr(e.stateNode.containerInfo.firstChild),Zt=e,Me=!0,yn=null,n=fw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),r===i){e=ar(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return gw(e),t===null&&gf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hf(r,i)?o=null:s!==null&&hf(r,s)&&(e.flags|=32),zw(t,e),bt(t,e,o,n),e.child;case 6:return t===null&&gf(e),null;case 13:return Ww(t,e,n);case 4:return Hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Ny(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Pe(Wu,r._currentValue),r._currentValue=o,s!==null)if(Cn(s.value,o)){if(s.children===i.children&&!$t.current){e=ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=er(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),_f(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xs(e,n),i=cn(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),by(t,e,r,i,n);case 15:return Uw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),mu(t,e),e.tag=1,qt(r)?(t=!0,ju(e)):t=!1,xs(e,n),Lw(e,r,i),vf(e,r,i,n),Tf(null,e,r,!0,t,n);case 19:return $w(t,e,n);case 22:return jw(t,e,n)}throw Error(F(156,e.tag))};function oT(t,e){return D0(t,e)}function Mk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new Mk(t,e,n,r)}function am(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lk(t){if(typeof t=="function")return am(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rp)return 11;if(t===Ap)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")am(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return ki(n.children,i,s,e);case Cp:o=8,i|=8;break;case Bd:return t=an(12,n,e,i|2),t.elementType=Bd,t.lanes=s,t;case Wd:return t=an(13,n,e,i),t.elementType=Wd,t.lanes=s,t;case $d:return t=an(19,n,e,i),t.elementType=$d,t.lanes=s,t;case g0:return qc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case p0:o=10;break e;case m0:o=9;break e;case Rp:o=11;break e;case Ap:o=14;break e;case Rr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ki(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function qc(t,e,n,r){return t=an(22,t,r,e),t.elementType=g0,t.lanes=n,t.stateNode={isHidden:!1},t}function _d(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function yd(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jh(0),this.expirationTimes=Jh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lm(t,e,n,r,i,s,o,l,u){return t=new Vk(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qp(s),t}function Fk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function aT(t){if(!t)return Jr;t=t._reactInternals;e:{if(Ki(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(qt(n))return aw(t,n,e)}return e}function lT(t,e,n,r,i,s,o,l,u){return t=lm(n,r,!0,t,i,s,o,l,u),t.context=aT(null),n=t.current,r=Dt(),i=$r(n),s=er(r,i),s.callback=e??null,Br(n,s,i),t.current.lanes=i,Za(t,i,r),Ht(t,r),t}function Hc(t,e,n,r){var i=e.current,s=Dt(),o=$r(i);return n=aT(n),e.context===null?e.context=n:e.pendingContext=n,e=er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Br(i,e,o),t!==null&&(In(t,i,o,s),du(t,i,o)),o}function Zu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $y(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function um(t,e){$y(t,e),(t=t.alternate)&&$y(t,e)}function Uk(){return null}var uT=typeof reportError=="function"?reportError:function(t){console.error(t)};function cm(t){this._internalRoot=t}Kc.prototype.render=cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Hc(t,e,null,null)};Kc.prototype.unmount=cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Oi(function(){Hc(null,t,null,null)}),e[sr]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=j0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kr.length&&e!==0&&e<kr[n].priority;n++);kr.splice(n,0,t),n===0&&B0(t)}};function hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qy(){}function jk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Zu(o);s.call(c)}}var o=lT(e,r,t,0,null,!1,!1,"",qy);return t._reactRootContainer=o,t[sr]=o.current,Aa(t.nodeType===8?t.parentNode:t),Oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Zu(u);l.call(c)}}var u=lm(t,0,!1,null,null,!1,!1,"",qy);return t._reactRootContainer=u,t[sr]=u.current,Aa(t.nodeType===8?t.parentNode:t),Oi(function(){Hc(e,u,n,r)}),u}function Qc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Zu(o);l.call(u)}}Hc(e,o,t,i)}else o=jk(n,e,t,i,r);return Zu(o)}F0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(xp(e,n|1),Ht(e,He()),!(me&6)&&(qs=He()+500,ai()))}break;case 13:Oi(function(){var r=or(t,1);if(r!==null){var i=Dt();In(r,t,1,i)}}),um(t,1)}};Np=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=Dt();In(e,t,134217728,n)}um(t,134217728)}};U0=function(t){if(t.tag===13){var e=$r(t),n=or(t,e);if(n!==null){var r=Dt();In(n,t,e,r)}um(t,e)}};j0=function(){return we};z0=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};ef=function(t,e,n){switch(e){case"input":if(Kd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uc(r);if(!i)throw Error(F(90));y0(r),Kd(r,i)}}}break;case"textarea":E0(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};A0=im;k0=Oi;var zk={usingClientEntryPoint:!1,Events:[tl,_s,Uc,C0,R0,im]},Vo={findFiberByHostInstance:Ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bk={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=N0(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||Uk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{Mc=Jl.inject(Bk),Nn=Jl}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zk;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hm(e))throw Error(F(200));return Fk(t,e,null,n)};tn.createRoot=function(t,e){if(!hm(t))throw Error(F(299));var n=!1,r="",i=uT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lm(t,1,!1,null,null,n,!1,r,i),t[sr]=e.current,Aa(t.nodeType===8?t.parentNode:t),new cm(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=N0(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return Oi(t)};tn.hydrate=function(t,e,n){if(!Gc(e))throw Error(F(200));return Qc(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!hm(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lT(e,null,t,1,n??null,i,!1,s,o),t[sr]=e.current,Aa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Kc(e)};tn.render=function(t,e,n){if(!Gc(e))throw Error(F(200));return Qc(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(F(40));return t._reactRootContainer?(Oi(function(){Qc(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};tn.unstable_batchedUpdates=im;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Gc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Qc(t,e,n,!1,r)};tn.version="18.3.1-next-f1338f8080-20240426";function cT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cT)}catch(t){console.error(t)}}cT(),c0.exports=tn;var Wk=c0.exports,Hy=Wk;jd.createRoot=Hy.createRoot,jd.hydrateRoot=Hy.hydrateRoot;var Ky={};/**
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
 */const hT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const j=function(t,e){if(!t)throw ao(e)},ao=function(t){return new Error("Firebase Database ("+hT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const dT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$k=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$k(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new qk;const m=s<<2|l>>4;if(r.push(m),c!==64){const _=l<<4&240|c>>2;if(r.push(_),p!==64){const T=c<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fT=function(t){const e=dT(t);return dm.encodeByteArray(e,!0)},ec=function(t){return fT(t).replace(/\./g,"")},tc=function(t){try{return dm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hk(t){return pT(void 0,t)}function pT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Kk(n)||(t[n]=pT(t[n],e[n]));return t}function Kk(t){return t!=="__proto__"}/**
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
 */function Gk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qk=()=>Gk().__FIREBASE_DEFAULTS__,Yk=()=>{if(typeof process>"u"||typeof Ky>"u")return;const t=Ky.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tc(t[1]);return e&&JSON.parse(e)},Yc=()=>{try{return Qk()||Yk()||Xk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mT=t=>{var e,n;return(n=(e=Yc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gT=t=>{const e=mT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_T=()=>{var t;return(t=Yc())===null||t===void 0?void 0:t.config},yT=t=>{var e;return(e=Yc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Xc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ec(JSON.stringify(n)),ec(JSON.stringify(o)),""].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Jk(){var t;const e=(t=Yc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ET(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function t1(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function n1(){return hT.NODE_ADMIN===!0}function r1(){return!Jk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function i1(){try{return typeof indexedDB=="object"}catch{return!1}}function s1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const o1="FirebaseError";class mr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=o1,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rl.prototype.create)}}class rl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?a1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new mr(i,l,r)}}function a1(t,e){return t.replace(l1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const l1=/\{\$([^}]+)}/g;/**
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
 */function La(t){return JSON.parse(t)}function ot(t){return JSON.stringify(t)}/**
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
 */const wT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=La(tc(s[0])||""),n=La(tc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},u1=function(t){const e=wT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},c1=function(t){const e=wT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function gr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Hs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Of(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function rc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gy(s)&&Gy(o)){if(!rc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gy(t){return t!==null&&typeof t=="object"}/**
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
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Go(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Qo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class h1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const m=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],c,d;for(let p=0;p<80;p++){p<40?p<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):p<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[p]&4294967295;u=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function d1(t,e){const n=new f1(t,e);return n.subscribe.bind(n)}class f1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");p1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vd),i.error===void 0&&(i.error=vd),i.complete===void 0&&(i.complete=vd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function p1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vd(){}function pm(t,e){return`${t} failed: ${e} argument `}/**
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
 */const m1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,j(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yi="[DEFAULT]";/**
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
 */class g1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(y1(e))try{this.getOrInitializeService({instanceIdentifier:yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yi){return this.instances.has(e)}getOptions(e=yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yi){return this.component?this.component.multipleInstances?e:yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _1(t){return t===yi?void 0:t}function y1(t){return t.instantiationMode==="EAGER"}/**
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
 */class v1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new g1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const E1={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},w1=de.INFO,T1={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},I1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=T1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=w1,this._logHandler=I1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const S1=(t,e)=>e.some(n=>t instanceof n);let Qy,Yy;function C1(){return Qy||(Qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R1(){return Yy||(Yy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TT=new WeakMap,Mf=new WeakMap,IT=new WeakMap,Ed=new WeakMap,mm=new WeakMap;function A1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&TT.set(n,t)}).catch(()=>{}),mm.set(e,t),e}function k1(t){if(Mf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mf.set(t,e)}let Lf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||IT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function P1(t){Lf=t(Lf)}function x1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wd(this),e,...n);return IT.set(r,e.sort?e.sort():[e]),Hr(r)}:R1().includes(t)?function(...e){return t.apply(wd(this),e),Hr(TT.get(this))}:function(...e){return Hr(t.apply(wd(this),e))}}function N1(t){return typeof t=="function"?x1(t):(t instanceof IDBTransaction&&k1(t),S1(t,C1())?new Proxy(t,Lf):t)}function Hr(t){if(t instanceof IDBRequest)return A1(t);if(Ed.has(t))return Ed.get(t);const e=N1(t);return e!==t&&(Ed.set(t,e),mm.set(e,t)),e}const wd=t=>mm.get(t);function b1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const D1=["get","getKey","getAll","getAllKeys","count"],O1=["put","add","delete","clear"],Td=new Map;function Xy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Td.get(e))return Td.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=O1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||D1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Td.set(e,s),s}P1(t=>({...t,get:(e,n,r)=>Xy(e,n)||t.get(e,n,r),has:(e,n)=>!!Xy(e,n)||t.has(e,n)}));/**
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
 */class M1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(L1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function L1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vf="@firebase/app",Jy="0.10.13";/**
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
 */const lr=new Zc("@firebase/app"),V1="@firebase/app-compat",F1="@firebase/analytics-compat",U1="@firebase/analytics",j1="@firebase/app-check-compat",z1="@firebase/app-check",B1="@firebase/auth",W1="@firebase/auth-compat",$1="@firebase/database",q1="@firebase/data-connect",H1="@firebase/database-compat",K1="@firebase/functions",G1="@firebase/functions-compat",Q1="@firebase/installations",Y1="@firebase/installations-compat",X1="@firebase/messaging",J1="@firebase/messaging-compat",Z1="@firebase/performance",eP="@firebase/performance-compat",tP="@firebase/remote-config",nP="@firebase/remote-config-compat",rP="@firebase/storage",iP="@firebase/storage-compat",sP="@firebase/firestore",oP="@firebase/vertexai-preview",aP="@firebase/firestore-compat",lP="firebase",uP="10.14.1";/**
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
 */const Ff="[DEFAULT]",cP={[Vf]:"fire-core",[V1]:"fire-core-compat",[U1]:"fire-analytics",[F1]:"fire-analytics-compat",[z1]:"fire-app-check",[j1]:"fire-app-check-compat",[B1]:"fire-auth",[W1]:"fire-auth-compat",[$1]:"fire-rtdb",[q1]:"fire-data-connect",[H1]:"fire-rtdb-compat",[K1]:"fire-fn",[G1]:"fire-fn-compat",[Q1]:"fire-iid",[Y1]:"fire-iid-compat",[X1]:"fire-fcm",[J1]:"fire-fcm-compat",[Z1]:"fire-perf",[eP]:"fire-perf-compat",[tP]:"fire-rc",[nP]:"fire-rc-compat",[rP]:"fire-gcs",[iP]:"fire-gcs-compat",[sP]:"fire-fst",[aP]:"fire-fst-compat",[oP]:"fire-vertex","fire-js":"fire-js",[lP]:"fire-js-all"};/**
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
 */const ic=new Map,hP=new Map,Uf=new Map;function Zy(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mi(t){const e=t.name;if(Uf.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;Uf.set(e,t);for(const n of ic.values())Zy(n,t);for(const n of hP.values())Zy(n,t);return!0}function eh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xn(t){return t.settings!==void 0}/**
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
 */const dP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new rl("app","Firebase",dP);/**
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
 */class fP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
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
 */const Gi=uP;function ST(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ff,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Kr.create("bad-app-name",{appName:String(i)});if(n||(n=_T()),!n)throw Kr.create("no-options");const s=ic.get(i);if(s){if(rc(n,s.options)&&rc(r,s.config))return s;throw Kr.create("duplicate-app",{appName:i})}const o=new v1(i);for(const u of Uf.values())o.addComponent(u);const l=new fP(n,r,o);return ic.set(i,l),l}function gm(t=Ff){const e=ic.get(t);if(!e&&t===Ff&&_T())return ST();if(!e)throw Kr.create("no-app",{appName:t});return e}function Dn(t,e,n){var r;let i=(r=cP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(l.join(" "));return}Mi(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pP="firebase-heartbeat-database",mP=1,Va="firebase-heartbeat-store";let Id=null;function CT(){return Id||(Id=b1(pP,mP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Va)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kr.create("idb-open",{originalErrorMessage:t.message})})),Id}async function gP(t){try{const n=(await CT()).transaction(Va),r=await n.objectStore(Va).get(RT(t));return await n.done,r}catch(e){if(e instanceof mr)lr.warn(e.message);else{const n=Kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function ev(t,e){try{const r=(await CT()).transaction(Va,"readwrite");await r.objectStore(Va).put(e,RT(t)),await r.done}catch(n){if(n instanceof mr)lr.warn(n.message);else{const r=Kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function RT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _P=1024,yP=30*24*60*60*1e3;class vP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=yP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tv(),{heartbeatsToSend:r,unsentEntries:i}=EP(this._heartbeatsCache.heartbeats),s=ec(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return lr.warn(n),""}}}function tv(){return new Date().toISOString().substring(0,10)}function EP(t,e=_P){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i1()?s1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nv(t){return ec(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TP(t){Mi(new Zr("platform-logger",e=>new M1(e),"PRIVATE")),Mi(new Zr("heartbeat",e=>new vP(e),"PRIVATE")),Dn(Vf,Jy,t),Dn(Vf,Jy,"esm2017"),Dn("fire-js","")}TP("");function _m(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function AT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IP=AT,kT=new rl("auth","Firebase",AT());/**
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
 */const sc=new Zc("@firebase/auth");function SP(t,...e){sc.logLevel<=de.WARN&&sc.warn(`Auth (${Gi}): ${t}`,...e)}function vu(t,...e){sc.logLevel<=de.ERROR&&sc.error(`Auth (${Gi}): ${t}`,...e)}/**
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
 */function Rn(t,...e){throw ym(t,...e)}function On(t,...e){return ym(t,...e)}function PT(t,e,n){const r=Object.assign(Object.assign({},IP()),{[e]:n});return new rl("auth","Firebase",r).create(e,{appName:t.name})}function tr(t){return PT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kT.create(t,...e)}function Z(t,e,...n){if(!t)throw ym(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vu(e),new Error(e)}function ur(t,e){t||Yn(e)}/**
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
 */function jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CP(){return rv()==="http:"||rv()==="https:"}function rv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function RP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CP()||e1()||"connection"in navigator)?navigator.onLine:!0}function AP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class il{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=fm()||ET()}get(){return RP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vm(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PP=new il(3e4,6e4);function li(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _r(t,e,n,r,i={}){return NT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=lo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Zk()||(c.referrerPolicy="no-referrer"),xT.fetch()(bT(t,t.config.apiHost,n,l),c)})}async function NT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kP),e);try{const i=new NP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Zl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Zl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw PT(t,d,c);Rn(t,d)}}catch(i){if(i instanceof mr)throw i;Rn(t,"network-request-failed",{message:String(i)})}}async function sl(t,e,n,r,i={}){const s=await _r(t,e,n,r,i);return"mfaPendingCredential"in s&&Rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function bT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vm(t.config,i):`${t.config.apiScheme}://${i}`}function xP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),PP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=On(t,e,r);return i.customData._tokenResponse=n,i}function iv(t){return t!==void 0&&t.enterprise!==void 0}class bP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function DP(t,e){return _r(t,"GET","/v2/recaptchaConfig",li(t,e))}/**
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
 */async function OP(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function DT(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ua(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MP(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=Em(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ua(Sd(i.auth_time)),issuedAtTime:ua(Sd(i.iat)),expirationTime:ua(Sd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sd(t){return Number(t)*1e3}function Em(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=tc(n);return i?JSON.parse(i):(vu("Failed to decode base64 JWT payload"),null)}catch(i){return vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sv(t){const e=Em(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mr&&LP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ua(this.lastLoginAt),this.creationTime=ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ks(t,DT(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?OT(s.providerUserInfo):[],l=UP(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new zf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function FP(t){const e=Oe(t);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function OT(t){return t.map(e=>{var{providerId:n}=e,r=_m(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jP(t,e){const n=await NT(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=bT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",xT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zP(t,e){return _r(t,"POST","/v2/accounts:revokeToken",li(t,e))}/**
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
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=sv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bs;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
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
 */function Ir(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_m(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MP(this,e)}reload(){return FP(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await Ks(this,OP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:A,emailVerified:M,isAnonymous:z,providerData:B,stsTokenManager:v}=n;Z(A&&v,e,"internal-error");const y=bs.fromJSON(this.name,v);Z(typeof A=="string",e,"internal-error"),Ir(p,e.name),Ir(m,e.name),Z(typeof M=="boolean",e,"internal-error"),Z(typeof z=="boolean",e,"internal-error"),Ir(_,e.name),Ir(T,e.name),Ir(x,e.name),Ir(O,e.name),Ir(C,e.name),Ir(w,e.name);const E=new Xn({uid:A,auth:e,email:m,emailVerified:M,displayName:p,isAnonymous:z,photoURL:T,phoneNumber:_,tenantId:x,stsTokenManager:y,createdAt:C,lastLoginAt:w});return B&&Array.isArray(B)&&(E.providerData=B.map(I=>Object.assign({},I))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new bs;i.updateFromServerResponse(n);const s=new Xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?OT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new bs;l.updateFromIdToken(r);const u=new Xn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const ov=new Map;function Jn(t){ur(t instanceof Function,"Expected a class definition");let e=ov.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ov.set(t,e),e)}/**
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
 */class MT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}MT.type="NONE";const av=MT;/**
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
 */function Eu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Eu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Eu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ds(Jn(av),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Jn(av);const o=Eu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Xn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ds(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ds(s,e,r))}}/**
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
 */function lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zT(e))return"Blackberry";if(BT(e))return"Webos";if(VT(e))return"Safari";if((e.includes("chrome/")||FT(e))&&!e.includes("edge/"))return"Chrome";if(jT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function LT(t=At()){return/firefox\//i.test(t)}function VT(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FT(t=At()){return/crios\//i.test(t)}function UT(t=At()){return/iemobile/i.test(t)}function jT(t=At()){return/android/i.test(t)}function zT(t=At()){return/blackberry/i.test(t)}function BT(t=At()){return/webos/i.test(t)}function wm(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BP(t=At()){var e;return wm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WP(){return t1()&&document.documentMode===10}function WT(t=At()){return wm(t)||jT(t)||BT(t)||zT(t)||/windows phone/i.test(t)||UT(t)}/**
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
 */function $T(t,e=[]){let n;switch(t){case"Browser":n=lv(At());break;case"Worker":n=`${lv(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gi}/${r}`}/**
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
 */class $P{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qP(t,e={}){return _r(t,"GET","/v2/passwordPolicy",li(t,e))}/**
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
 */const HP=6;class KP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class GP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new $P(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await DT(this,{idToken:e}),r=await Xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(tr(this));const n=e?Oe(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qP(this),n=new KP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$T(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qi(t){return Oe(t)}class uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=d1(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QP(t){th=t}function qT(t){return th.loadJS(t)}function YP(){return th.recaptchaEnterpriseScript}function XP(){return th.gapiScript}function JP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZP="recaptcha-enterprise",ex="NO_RECAPTCHA";class tx{constructor(e){this.type=ZP,this.auth=Qi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{DP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new bP(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;iv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ex)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&iv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=YP();u.length!==0&&(u+=l),qT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function cv(t,e,n,r=!1){const i=new tx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await cv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function nx(t,e){const n=eh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(rc(s,e??{}))return i;Rn(i,"already-initialized")}return n.initialize({options:e})}function rx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ix(t,e,n){const r=Qi(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=HT(e),{host:o,port:l}=sx(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ox()}function HT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sx(t){const e=HT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hv(o)}}}function hv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ox(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function ax(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lx(t,e){return sl(t,"POST","/v1/accounts:signInWithPassword",li(t,e))}/**
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
 */async function ux(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",li(t,e))}async function cx(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",li(t,e))}/**
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
 */class Fa extends Tm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bf(e,n,"signInWithPassword",lx);case"emailLink":return ux(e,{email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bf(e,r,"signUpPassword",ax);case"emailLink":return cx(e,{idToken:n,email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Os(t,e){return sl(t,"POST","/v1/accounts:signInWithIdp",li(t,e))}/**
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
 */const hx="http://localhost";class Li extends Tm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_m(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Os(e,n)}buildRequest(){const e={requestUri:hx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
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
 */function dx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fx(t){const e=Go(Qo(t)).link,n=e?Go(Qo(e)).deep_link_id:null,r=Go(Qo(t)).deep_link_id;return(r?Go(Qo(r)).link:null)||r||n||e||t}class Im{constructor(e){var n,r,i,s,o,l;const u=Go(Qo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=dx((i=u.mode)!==null&&i!==void 0?i:null);Z(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=fx(e);try{return new Im(n)}catch{return null}}}/**
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
 */class uo{constructor(){this.providerId=uo.PROVIDER_ID}static credential(e,n){return Fa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Im.parseLink(n);return Z(r,"argument-error"),Fa._fromEmailAndCode(e,r.code,r.tenantId)}}uo.PROVIDER_ID="password";uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class KT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ol extends KT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xr extends ol{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
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
 */class Nr extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
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
 */class br extends ol{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.GITHUB_SIGN_IN_METHOD="github.com";br.PROVIDER_ID="github.com";/**
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
 */class Dr extends ol{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
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
 */async function px(t,e){return sl(t,"POST","/v1/accounts:signUp",li(t,e))}/**
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
 */class Vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xn._fromIdTokenResponse(e,r,i),o=dv(r);return new Vi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dv(r);return new Vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ac extends mr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ac(e,n,r,i)}}function GT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(t,s,e,r):s})}async function mx(t,e,n=!1){const r=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vi._forOperation(t,"link",r)}/**
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
 */async function gx(t,e,n=!1){const{auth:r}=t;if(xn(r.app))return Promise.reject(tr(r));const i="reauthenticate";try{const s=await Ks(t,GT(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Em(s.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),Vi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rn(r,"user-mismatch"),s}}/**
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
 */async function QT(t,e,n=!1){if(xn(t.app))return Promise.reject(tr(t));const r="signIn",i=await GT(t,r,e),s=await Vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _x(t,e){return QT(Qi(t),e)}/**
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
 */async function YT(t){const e=Qi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yx(t,e,n){if(xn(t.app))return Promise.reject(tr(t));const r=Qi(t),o=await Bf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",px).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&YT(t),u}),l=await Vi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function vx(t,e,n){return xn(t.app)?Promise.reject(tr(t)):_x(Oe(t),uo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&YT(t),r})}/**
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
 */async function Ex(t,e){return _r(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Oe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ks(r,Ex(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Tx(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function Ix(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function Sx(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}function Cx(t){return Oe(t).signOut()}const lc="__sak";/**
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
 */class XT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Rx=1e3,Ax=10;class JT extends XT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=WT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);WP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ax):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Rx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}JT.type="LOCAL";const kx=JT;/**
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
 */class ZT extends XT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ZT.type="SESSION";const eI=ZT;/**
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
 */function Px(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Px(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nh.receivers=[];/**
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
 */function Sm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Sm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mn(){return window}function Nx(t){Mn().location.href=t}/**
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
 */function tI(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function bx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ox(){return tI()?self:null}/**
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
 */const nI="firebaseLocalStorageDb",Mx=1,uc="firebaseLocalStorage",rI="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rh(t,e){return t.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function Lx(){const t=indexedDB.deleteDatabase(nI);return new al(t).toPromise()}function Wf(){const t=indexedDB.open(nI,Mx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uc,{keyPath:rI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uc)?e(r):(r.close(),await Lx(),e(await Wf()))})})}async function fv(t,e,n){const r=rh(t,!0).put({[rI]:e,value:n});return new al(r).toPromise()}async function Vx(t,e){const n=rh(t,!1).get(e),r=await new al(n).toPromise();return r===void 0?null:r.value}function pv(t,e){const n=rh(t,!0).delete(e);return new al(n).toPromise()}const Fx=800,Ux=3;class iI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ux)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nh._getInstance(Ox()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bx(),!this.activeServiceWorker)return;this.sender=new xx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wf();return await fv(e,lc,"1"),await pv(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=rh(i,!1).getAll();return new al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iI.type="LOCAL";const jx=iI;new il(3e4,6e4);/**
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
 */function zx(t,e){return e?Jn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cm extends Tm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bx(t){return QT(t.auth,new Cm(t),t.bypassAuthState)}function Wx(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),gx(n,new Cm(t),t.bypassAuthState)}async function $x(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),mx(n,new Cm(t),t.bypassAuthState)}/**
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
 */class sI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bx;case"linkViaPopup":case"linkViaRedirect":return $x;case"reauthViaPopup":case"reauthViaRedirect":return Wx;default:Rn(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qx=new il(2e3,1e4);class Ss extends sI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=Sm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qx.get())};e()}}Ss.currentPopupAction=null;/**
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
 */const Hx="pendingRedirect",wu=new Map;class Kx extends sI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const r=await Gx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gx(t,e){const n=Xx(e),r=Yx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Qx(t,e){wu.set(t._key(),e)}function Yx(t){return Jn(t._redirectPersistence)}function Xx(t){return Eu(Hx,t.config.apiKey,t.name)}async function Jx(t,e,n=!1){if(xn(t.app))return Promise.reject(tr(t));const r=Qi(t),i=zx(r,e),o=await new Kx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Zx=10*60*1e3;class eN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zx&&this.cachedEventUids.clear(),this.cachedEventUids.has(mv(e))}saveEventToCache(e){this.cachedEventUids.add(mv(e)),this.lastProcessedEventTime=Date.now()}}function mv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oI(t);default:return!1}}/**
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
 */async function nN(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
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
 */const rN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iN=/^https?/;async function sN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nN(t);for(const n of e)try{if(oN(n))return}catch{}Rn(t,"unauthorized-domain")}function oN(t){const e=jf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iN.test(n))return!1;if(rN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aN=new il(3e4,6e4);function gv(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lN(t){return new Promise((e,n)=>{var r,i,s;function o(){gv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gv(),n(On(t,"network-request-failed"))},timeout:aN.get()})}if(!((i=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mn().gapi)===null||s===void 0)&&s.load)o();else{const l=JP("iframefcb");return Mn()[l]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},qT(`${XP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Tu=null,e})}let Tu=null;function uN(t){return Tu=Tu||lN(t),Tu}/**
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
 */const cN=new il(5e3,15e3),hN="__/auth/iframe",dN="emulator/auth/iframe",fN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mN(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vm(e,dN):`https://${t.config.authDomain}/${hN}`,r={apiKey:e.apiKey,appName:t.name,v:Gi},i=pN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lo(r).slice(1)}`}async function gN(t){const e=await uN(t),n=Mn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:mN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),l=Mn().setTimeout(()=>{s(o)},cN.get());function u(){Mn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const _N={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yN=500,vN=600,EN="_blank",wN="http://localhost";class _v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TN(t,e,n,r=yN,i=vN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},_N),{width:r.toString(),height:i.toString(),top:s,left:o}),c=At().toLowerCase();n&&(l=FT(c)?EN:n),LT(c)&&(e=e||wN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[_,T])=>`${m}${_}=${T},`,"");if(BP(c)&&l!=="_self")return IN(e||"",l),new _v(null);const p=window.open(e||"",l,d);Z(p,t,"popup-blocked");try{p.focus()}catch{}return new _v(p)}function IN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SN="__/auth/handler",CN="emulator/auth/handler",RN=encodeURIComponent("fac");async function yv(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gi,eventId:i};if(e instanceof KT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Of(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ol){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${RN}=${encodeURIComponent(u)}`:"";return`${AN(t)}?${lo(l).slice(1)}${c}`}function AN({config:t}){return t.emulator?vm(t,CN):`https://${t.authDomain}/${SN}`}/**
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
 */const Cd="webStorageSupport";class kN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eI,this._completeRedirectFn=Jx,this._overrideRedirectResult=Qx}async _openPopup(e,n,r,i){var s;ur((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yv(e,n,r,jf(),i);return TN(e,o,Sm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yv(e,n,r,jf(),i);return Nx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ur(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gN(e),r=new eN(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cd,{type:Cd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cd];o!==void 0&&n(!!o),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WT()||VT()||wm()}}const PN=kN;var vv="@firebase/auth",Ev="1.7.9";/**
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
 */class xN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bN(t){Mi(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$T(t)},c=new GP(r,i,s,u);return rx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mi(new Zr("auth-internal",e=>{const n=Qi(e.getProvider("auth").getImmediate());return(r=>new xN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(vv,Ev,NN(t)),Dn(vv,Ev,"esm2017")}/**
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
 */const DN=5*60,ON=yT("authIdTokenMaxAge")||DN;let wv=null;const MN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ON)return;const i=n==null?void 0:n.token;wv!==i&&(wv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LN(t=gm()){const e=eh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nx(t,{popupRedirectResolver:PN,persistence:[jx,kx,eI]}),r=yT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=MN(s.toString());Ix(n,o,()=>o(n.currentUser)),Tx(n,l=>o(l))}}const i=mT("auth");return i&&ix(n,`http://${i}`),n}function VN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=On("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bN("Browser");var Tv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pi,aI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function E(){}E.prototype=y.prototype,v.D=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.C=function(I,P,N){for(var S=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)S[kt-2]=arguments[kt];return y.prototype[P].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,E){E||(E=0);var I=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)I[P]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(P=0;16>P;++P)I[P]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],P=v.g[2];var N=v.g[3],S=y+(N^E&(P^N))+I[0]+3614090360&4294967295;y=E+(S<<7&4294967295|S>>>25),S=N+(P^y&(E^P))+I[1]+3905402710&4294967295,N=y+(S<<12&4294967295|S>>>20),S=P+(E^N&(y^E))+I[2]+606105819&4294967295,P=N+(S<<17&4294967295|S>>>15),S=E+(y^P&(N^y))+I[3]+3250441966&4294967295,E=P+(S<<22&4294967295|S>>>10),S=y+(N^E&(P^N))+I[4]+4118548399&4294967295,y=E+(S<<7&4294967295|S>>>25),S=N+(P^y&(E^P))+I[5]+1200080426&4294967295,N=y+(S<<12&4294967295|S>>>20),S=P+(E^N&(y^E))+I[6]+2821735955&4294967295,P=N+(S<<17&4294967295|S>>>15),S=E+(y^P&(N^y))+I[7]+4249261313&4294967295,E=P+(S<<22&4294967295|S>>>10),S=y+(N^E&(P^N))+I[8]+1770035416&4294967295,y=E+(S<<7&4294967295|S>>>25),S=N+(P^y&(E^P))+I[9]+2336552879&4294967295,N=y+(S<<12&4294967295|S>>>20),S=P+(E^N&(y^E))+I[10]+4294925233&4294967295,P=N+(S<<17&4294967295|S>>>15),S=E+(y^P&(N^y))+I[11]+2304563134&4294967295,E=P+(S<<22&4294967295|S>>>10),S=y+(N^E&(P^N))+I[12]+1804603682&4294967295,y=E+(S<<7&4294967295|S>>>25),S=N+(P^y&(E^P))+I[13]+4254626195&4294967295,N=y+(S<<12&4294967295|S>>>20),S=P+(E^N&(y^E))+I[14]+2792965006&4294967295,P=N+(S<<17&4294967295|S>>>15),S=E+(y^P&(N^y))+I[15]+1236535329&4294967295,E=P+(S<<22&4294967295|S>>>10),S=y+(P^N&(E^P))+I[1]+4129170786&4294967295,y=E+(S<<5&4294967295|S>>>27),S=N+(E^P&(y^E))+I[6]+3225465664&4294967295,N=y+(S<<9&4294967295|S>>>23),S=P+(y^E&(N^y))+I[11]+643717713&4294967295,P=N+(S<<14&4294967295|S>>>18),S=E+(N^y&(P^N))+I[0]+3921069994&4294967295,E=P+(S<<20&4294967295|S>>>12),S=y+(P^N&(E^P))+I[5]+3593408605&4294967295,y=E+(S<<5&4294967295|S>>>27),S=N+(E^P&(y^E))+I[10]+38016083&4294967295,N=y+(S<<9&4294967295|S>>>23),S=P+(y^E&(N^y))+I[15]+3634488961&4294967295,P=N+(S<<14&4294967295|S>>>18),S=E+(N^y&(P^N))+I[4]+3889429448&4294967295,E=P+(S<<20&4294967295|S>>>12),S=y+(P^N&(E^P))+I[9]+568446438&4294967295,y=E+(S<<5&4294967295|S>>>27),S=N+(E^P&(y^E))+I[14]+3275163606&4294967295,N=y+(S<<9&4294967295|S>>>23),S=P+(y^E&(N^y))+I[3]+4107603335&4294967295,P=N+(S<<14&4294967295|S>>>18),S=E+(N^y&(P^N))+I[8]+1163531501&4294967295,E=P+(S<<20&4294967295|S>>>12),S=y+(P^N&(E^P))+I[13]+2850285829&4294967295,y=E+(S<<5&4294967295|S>>>27),S=N+(E^P&(y^E))+I[2]+4243563512&4294967295,N=y+(S<<9&4294967295|S>>>23),S=P+(y^E&(N^y))+I[7]+1735328473&4294967295,P=N+(S<<14&4294967295|S>>>18),S=E+(N^y&(P^N))+I[12]+2368359562&4294967295,E=P+(S<<20&4294967295|S>>>12),S=y+(E^P^N)+I[5]+4294588738&4294967295,y=E+(S<<4&4294967295|S>>>28),S=N+(y^E^P)+I[8]+2272392833&4294967295,N=y+(S<<11&4294967295|S>>>21),S=P+(N^y^E)+I[11]+1839030562&4294967295,P=N+(S<<16&4294967295|S>>>16),S=E+(P^N^y)+I[14]+4259657740&4294967295,E=P+(S<<23&4294967295|S>>>9),S=y+(E^P^N)+I[1]+2763975236&4294967295,y=E+(S<<4&4294967295|S>>>28),S=N+(y^E^P)+I[4]+1272893353&4294967295,N=y+(S<<11&4294967295|S>>>21),S=P+(N^y^E)+I[7]+4139469664&4294967295,P=N+(S<<16&4294967295|S>>>16),S=E+(P^N^y)+I[10]+3200236656&4294967295,E=P+(S<<23&4294967295|S>>>9),S=y+(E^P^N)+I[13]+681279174&4294967295,y=E+(S<<4&4294967295|S>>>28),S=N+(y^E^P)+I[0]+3936430074&4294967295,N=y+(S<<11&4294967295|S>>>21),S=P+(N^y^E)+I[3]+3572445317&4294967295,P=N+(S<<16&4294967295|S>>>16),S=E+(P^N^y)+I[6]+76029189&4294967295,E=P+(S<<23&4294967295|S>>>9),S=y+(E^P^N)+I[9]+3654602809&4294967295,y=E+(S<<4&4294967295|S>>>28),S=N+(y^E^P)+I[12]+3873151461&4294967295,N=y+(S<<11&4294967295|S>>>21),S=P+(N^y^E)+I[15]+530742520&4294967295,P=N+(S<<16&4294967295|S>>>16),S=E+(P^N^y)+I[2]+3299628645&4294967295,E=P+(S<<23&4294967295|S>>>9),S=y+(P^(E|~N))+I[0]+4096336452&4294967295,y=E+(S<<6&4294967295|S>>>26),S=N+(E^(y|~P))+I[7]+1126891415&4294967295,N=y+(S<<10&4294967295|S>>>22),S=P+(y^(N|~E))+I[14]+2878612391&4294967295,P=N+(S<<15&4294967295|S>>>17),S=E+(N^(P|~y))+I[5]+4237533241&4294967295,E=P+(S<<21&4294967295|S>>>11),S=y+(P^(E|~N))+I[12]+1700485571&4294967295,y=E+(S<<6&4294967295|S>>>26),S=N+(E^(y|~P))+I[3]+2399980690&4294967295,N=y+(S<<10&4294967295|S>>>22),S=P+(y^(N|~E))+I[10]+4293915773&4294967295,P=N+(S<<15&4294967295|S>>>17),S=E+(N^(P|~y))+I[1]+2240044497&4294967295,E=P+(S<<21&4294967295|S>>>11),S=y+(P^(E|~N))+I[8]+1873313359&4294967295,y=E+(S<<6&4294967295|S>>>26),S=N+(E^(y|~P))+I[15]+4264355552&4294967295,N=y+(S<<10&4294967295|S>>>22),S=P+(y^(N|~E))+I[6]+2734768916&4294967295,P=N+(S<<15&4294967295|S>>>17),S=E+(N^(P|~y))+I[13]+1309151649&4294967295,E=P+(S<<21&4294967295|S>>>11),S=y+(P^(E|~N))+I[4]+4149444226&4294967295,y=E+(S<<6&4294967295|S>>>26),S=N+(E^(y|~P))+I[11]+3174756917&4294967295,N=y+(S<<10&4294967295|S>>>22),S=P+(y^(N|~E))+I[2]+718787259&4294967295,P=N+(S<<15&4294967295|S>>>17),S=E+(N^(P|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,v.g[2]=v.g[2]+P&4294967295,v.g[3]=v.g[3]+N&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var E=y-this.blockSize,I=this.B,P=this.h,N=0;N<y;){if(P==0)for(;N<=E;)i(this,v,N),N+=this.blockSize;if(typeof v=="string"){for(;N<y;)if(I[P++]=v.charCodeAt(N++),P==this.blockSize){i(this,I),P=0;break}}else for(;N<y;)if(I[P++]=v[N++],P==this.blockSize){i(this,I),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var E=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=E&255,E/=256;for(this.u(v),v=Array(16),y=E=0;4>y;++y)for(var I=0;32>I;I+=8)v[E++]=this.g[y]>>>I&255;return v};function s(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function o(v,y){this.h=y;for(var E=[],I=!0,P=v.length-1;0<=P;P--){var N=v[P]|0;I&&N==y||(E[P]=N,I=!1)}this.g=E}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return O(c(-v));for(var y=[],E=1,I=0;v>=E;I++)y[I]=v/E|0,E*=4294967296;return new o(y,0)}function d(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return O(d(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(y,8)),I=p,P=0;P<v.length;P+=8){var N=Math.min(8,v.length-P),S=parseInt(v.substring(P,P+N),y);8>N?(N=c(Math.pow(y,N)),I=I.j(N).add(c(S))):(I=I.j(E),I=I.add(c(S)))}return I}var p=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-O(this).m();for(var v=0,y=1,E=0;E<this.g.length;E++){var I=this.i(E);v+=(0<=I?I:4294967296+I)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T(this))return"0";if(x(this))return"-"+O(this).toString(v);for(var y=c(Math.pow(v,6)),E=this,I="";;){var P=M(E,y).g;E=C(E,P.j(y));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(v);if(E=P,T(E))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function T(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function x(v){return v.h==-1}t.l=function(v){return v=C(this,v),x(v)?-1:T(v)?0:1};function O(v){for(var y=v.g.length,E=[],I=0;I<y;I++)E[I]=~v.g[I];return new o(E,~v.h).add(m)}t.abs=function(){return x(this)?O(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0,P=0;P<=y;P++){var N=I+(this.i(P)&65535)+(v.i(P)&65535),S=(N>>>16)+(this.i(P)>>>16)+(v.i(P)>>>16);I=S>>>16,N&=65535,S&=65535,E[P]=S<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function C(v,y){return v.add(O(y))}t.j=function(v){if(T(this)||T(v))return p;if(x(this))return x(v)?O(this).j(O(v)):O(O(this).j(v));if(x(v))return O(this.j(O(v)));if(0>this.l(_)&&0>v.l(_))return c(this.m()*v.m());for(var y=this.g.length+v.g.length,E=[],I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var P=0;P<v.g.length;P++){var N=this.i(I)>>>16,S=this.i(I)&65535,kt=v.i(P)>>>16,Ye=v.i(P)&65535;E[2*I+2*P]+=S*Ye,w(E,2*I+2*P),E[2*I+2*P+1]+=N*Ye,w(E,2*I+2*P+1),E[2*I+2*P+1]+=S*kt,w(E,2*I+2*P+1),E[2*I+2*P+2]+=N*kt,w(E,2*I+2*P+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new o(E,0)};function w(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function A(v,y){this.g=v,this.h=y}function M(v,y){if(T(y))throw Error("division by zero");if(T(v))return new A(p,p);if(x(v))return y=M(O(v),y),new A(O(y.g),O(y.h));if(x(y))return y=M(v,O(y)),new A(O(y.g),y.h);if(30<v.g.length){if(x(v)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=y;0>=I.l(v);)E=z(E),I=z(I);var P=B(E,1),N=B(I,1);for(I=B(I,2),E=B(E,2);!T(I);){var S=N.add(I);0>=S.l(v)&&(P=P.add(E),N=S),I=B(I,1),E=B(E,1)}return y=C(v,P.j(y)),new A(P,y)}for(P=p;0<=v.l(y);){for(E=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=c(E),S=N.j(y);x(S)||0<S.l(v);)E-=I,N=c(E),S=N.j(y);T(N)&&(N=m),P=P.add(N),v=C(v,S)}return new A(P,v)}t.A=function(v){return M(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)&v.i(I);return new o(E,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)|v.i(I);return new o(E,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)^v.i(I);return new o(E,this.h^v.h)};function z(v){for(var y=v.g.length+1,E=[],I=0;I<y;I++)E[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(E,v.h)}function B(v,y){var E=y>>5;y%=32;for(var I=v.g.length-E,P=[],N=0;N<I;N++)P[N]=0<y?v.i(N+E)>>>y|v.i(N+E+1)<<32-y:v.i(N+E);return new o(P,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,aI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Pi=o}).apply(typeof Tv<"u"?Tv:typeof self<"u"?self:typeof window<"u"?window:{});var eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lI,Yo,uI,Iu,$f,cI,hI,dI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof eu=="object"&&eu];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in f))break e;f=f[b]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,b={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function T(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,b,D){for(var W=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)W[Ce-2]=arguments[Ce];return h.prototype[b].apply(g,W)}}function x(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function O(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const b=a.length||0,D=g.length||0;a.length=b+D;for(let W=0;W<D;W++)a[b+W]=g[W]}else a.push(g)}}class C{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var z=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function B(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function v(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)a[f]=g[f];for(let D=0;D<E.length;D++)f=E[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function S(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class kt{constructor(){this.h=this.g=null}add(h,f){const g=Ye.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ye=new C(()=>new hi,a=>a.reset());class hi{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let dn,$=!1,X=new kt,se=()=>{const a=l.Promise.resolve(void 0);dn=()=>{a.then(Ae)}};var Ae=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){N(f)}var h=Ye;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var U=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function H(a,h){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(z){e:{try{M(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:J[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&H.aa.h.call(this)}}T(H,Se);var J={2:"touch",3:"pen",4:"mouse"};H.prototype.h=function(){H.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),te=0;function ae(a,h,f,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=b,this.key=++te,this.da=this.fa=!1}function ve(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,h,f,g,b){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var W=zn(a,h,g,b);return-1<W?(h=a[W],f||(h.fa=!1)):(h=new ae(h,this.src,D,!!g,b),h.fa=f,a.push(h)),h};function $e(a,h){var f=h.type;if(f in a.g){var g=a.g[f],b=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=b)&&Array.prototype.splice.call(g,b,1),D&&(ve(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function zn(a,h,f,g){for(var b=0;b<a.length;++b){var D=a[b];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return b}return-1}var Vt="closure_lm_"+(1e6*Math.random()|0),Bn={};function Ve(a,h,f,g,b){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Ve(a,h[D],f,g,b);return null}return f=Bg(f),a&&a[G]?a.K(h,f,c(g)?!!g.capture:!1,b):yr(a,h,f,!1,g,b)}function yr(a,h,f,g,b,D){if(!h)throw Error("Invalid event type");var W=c(b)?!!b.capture:!!b,Ce=Ph(a);if(Ce||(a[Vt]=Ce=new Ee(a)),f=Ce.add(h,f,g,W,D),f.proxy)return f;if(g=Pt(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)U||(b=W),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(Ft(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Pt(){function a(f){return h.call(a.src,a.listener,f)}const h=kh;return a}function Zi(a,h,f,g,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)Zi(a,h[D],f,g,b);else g=c(g)?!!g.capture:!!g,f=Bg(f),a&&a[G]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=zn(D,f,g,b),-1<f&&(ve(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Ph(a))&&(h=a.g[h.toString()],a=-1,h&&(a=zn(h,f,g,b)),(f=-1<a?h[a]:null)&&rn(f))}function rn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[G])$e(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Ft(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Ph(h))?($e(f,a),f.h==0&&(f.src=null,h[Vt]=null)):ve(a)}}}function Ft(a){return a in Bn?Bn[a]:Bn[a]="on"+a}function kh(a,h){if(a.da)a=!0;else{h=new H(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&rn(a),a=f.call(g,h)}return a}function Ph(a){return a=a[Vt],a instanceof Ee?a:null}var xh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bg(a){return typeof a=="function"?a:(a[xh]||(a[xh]=function(h){return a.handleEvent(h)}),a[xh])}function gt(){Ie.call(this),this.i=new Ee(this),this.M=this,this.F=null}T(gt,Ie),gt.prototype[G]=!0,gt.prototype.removeEventListener=function(a,h,f,g){Zi(this,a,h,f,g)};function xt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Se(h,a);else if(h instanceof Se)h.target=h.target||a;else{var b=h;h=new Se(g,a),I(h,b)}if(b=!0,f)for(var D=f.length-1;0<=D;D--){var W=h.g=f[D];b=El(W,g,!0,h)&&b}if(W=h.g=a,b=El(W,g,!0,h)&&b,b=El(W,g,!1,h)&&b,f)for(D=0;D<f.length;D++)W=h.g=f[D],b=El(W,g,!1,h)&&b}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)ve(f[g]);delete a.g[h],a.h--}}this.F=null},gt.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},gt.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function El(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,D=0;D<h.length;++D){var W=h[D];if(W&&!W.da&&W.capture==f){var Ce=W.listener,lt=W.ha||W.src;W.fa&&$e(a.i,W),b=Ce.call(lt,g)!==!1&&b}}return b&&!g.defaultPrevented}function Wg(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function $g(a){a.g=Wg(()=>{a.g=null,a.i&&(a.i=!1,$g(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $C extends Ie{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:$g(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _o(a){Ie.call(this),this.h=a,this.g={}}T(_o,Ie);var qg=[];function Hg(a){B(a.g,function(h,f){this.g.hasOwnProperty(f)&&rn(h)},a),a.g={}}_o.prototype.N=function(){_o.aa.N.call(this),Hg(this)},_o.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nh=l.JSON.stringify,qC=l.JSON.parse,HC=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function bh(){}bh.prototype.h=null;function Kg(a){return a.h||(a.h=a.i())}function Gg(){}var yo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dh(){Se.call(this,"d")}T(Dh,Se);function Oh(){Se.call(this,"c")}T(Oh,Se);var di={},Qg=null;function wl(){return Qg=Qg||new gt}di.La="serverreachability";function Yg(a){Se.call(this,di.La,a)}T(Yg,Se);function vo(a){const h=wl();xt(h,new Yg(h))}di.STAT_EVENT="statevent";function Xg(a,h){Se.call(this,di.STAT_EVENT,a),this.stat=h}T(Xg,Se);function Nt(a){const h=wl();xt(h,new Xg(h,a))}di.Ma="timingevent";function Jg(a,h){Se.call(this,di.Ma,a),this.size=h}T(Jg,Se);function Eo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function wo(){this.g=!0}wo.prototype.xa=function(){this.g=!1};function KC(a,h,f,g,b,D){a.info(function(){if(a.g)if(D)for(var W="",Ce=D.split("&"),lt=0;lt<Ce.length;lt++){var ge=Ce[lt].split("=");if(1<ge.length){var _t=ge[0];ge=ge[1];var yt=_t.split("_");W=2<=yt.length&&yt[1]=="type"?W+(_t+"="+ge+"&"):W+(_t+"=redacted&")}}else W=null;else W=D;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+f+`
`+W})}function GC(a,h,f,g,b,D,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+f+`
`+D+" "+W})}function es(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+YC(a,f)+(g?" "+g:"")})}function QC(a,h){a.info(function(){return"TIMEOUT: "+h})}wo.prototype.info=function(){};function YC(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var W=1;W<b.length;W++)b[W]=""}}}}return Nh(f)}catch{return h}}var Tl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mh;function Il(){}T(Il,bh),Il.prototype.g=function(){return new XMLHttpRequest},Il.prototype.i=function(){return{}},Mh=new Il;function vr(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new _o(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new e_}function e_(){this.i=null,this.g="",this.h=!1}var t_={},Lh={};function Vh(a,h,f){a.L=1,a.v=Al(Wn(h)),a.m=f,a.P=!0,n_(a,null)}function n_(a,h){a.F=Date.now(),Sl(a),a.A=Wn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),g_(f.i,"t",g),a.C=0,f=a.j.J,a.h=new e_,a.g=O_(a.j,f?h:null,!a.m),0<a.O&&(a.M=new $C(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(qg[0]=b.toString()),b=qg);for(var D=0;D<b.length;D++){var W=Ve(f,b[D],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),vo(),KC(a.i,a.u,a.A,a.l,a.R,a.m)}vr.prototype.ca=function(a){a=a.target;const h=this.M;h&&$n(a)==3?h.j():this.Y(a)},vr.prototype.Y=function(a){try{if(a==this.g)e:{const yt=$n(this.g);var h=this.g.Ba();const rs=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||I_(this.g)))){this.J||yt!=4||h==7||(h==8||0>=rs?vo(3):vo(2)),Fh(this);var f=this.g.Z();this.X=f;t:if(r_(this)){var g=I_(this.g);a="";var b=g.length,D=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fi(this),To(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==b-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,GC(this.i,this.u,this.A,this.l,this.R,yt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,lt=this.g;if((Ce=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ce)){var ge=Ce;break t}}ge=null}if(f=ge)es(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uh(this,f);else{this.o=!1,this.s=3,Nt(12),fi(this),To(this);break e}}if(this.P){f=!0;let fn;for(;!this.J&&this.C<W.length;)if(fn=XC(this,W),fn==Lh){yt==4&&(this.s=4,Nt(14),f=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==t_){this.s=4,Nt(15),es(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else es(this.i,this.l,fn,null),Uh(this,fn);if(r_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||W.length!=0||this.h.h||(this.s=1,Nt(16),f=!1),this.o=this.o&&f,!f)es(this.i,this.l,W,"[Invalid Chunked Response]"),fi(this),To(this);else if(0<W.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),qh(_t),_t.M=!0,Nt(11))}}else es(this.i,this.l,W,null),Uh(this,W);yt==4&&fi(this),this.o&&!this.J&&(yt==4?x_(this.j,this):(this.o=!1,Sl(this)))}else pR(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),fi(this),To(this)}}}catch{}finally{}};function r_(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function XC(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Lh:(f=Number(h.substring(f,g)),isNaN(f)?t_:(g+=1,g+f>h.length?Lh:(h=h.slice(g,g+f),a.C=g+f,h)))}vr.prototype.cancel=function(){this.J=!0,fi(this)};function Sl(a){a.S=Date.now()+a.I,i_(a,a.I)}function i_(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Eo(m(a.ba,a),h)}function Fh(a){a.B&&(l.clearTimeout(a.B),a.B=null)}vr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(QC(this.i,this.A),this.L!=2&&(vo(),Nt(17)),fi(this),this.s=2,To(this)):i_(this,this.S-a)};function To(a){a.j.G==0||a.J||x_(a.j,a)}function fi(a){Fh(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Hg(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Uh(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||jh(f.h,a))){if(!a.K&&jh(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Dl(f),Nl(f);else break e;$h(f),Nt(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=Eo(m(f.Za,f),6e3));if(1>=a_(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else mi(f,11)}else if((a.K||f.g==a)&&Dl(f),!w(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let ge=b[h];if(f.T=ge[0],ge=ge[1],f.G==2)if(ge[0]=="c"){f.K=ge[1],f.ia=ge[2];const _t=ge[3];_t!=null&&(f.la=_t,f.j.info("VER="+f.la));const yt=ge[4];yt!=null&&(f.Aa=yt,f.j.info("SVER="+f.Aa));const rs=ge[5];rs!=null&&typeof rs=="number"&&0<rs&&(g=1.5*rs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const fn=a.g;if(fn){const Ml=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ml){var D=g.h;D.g||Ml.indexOf("spdy")==-1&&Ml.indexOf("quic")==-1&&Ml.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(zh(D,D.h),D.h=null))}if(g.D){const Hh=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Hh&&(g.ya=Hh,xe(g.I,g.D,Hh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var W=a;if(g.qa=D_(g,g.J?g.ia:null,g.W),W.K){l_(g.h,W);var Ce=W,lt=g.L;lt&&(Ce.I=lt),Ce.B&&(Fh(Ce),Sl(Ce)),g.g=W}else k_(g);0<f.i.length&&bl(f)}else ge[0]!="stop"&&ge[0]!="close"||mi(f,7);else f.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?mi(f,7):Wh(f):ge[0]!="noop"&&f.l&&f.l.ta(ge),f.v=0)}}vo(4)}catch{}}var JC=class{constructor(a,h){this.g=a,this.map=h}};function s_(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function o_(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function a_(a){return a.h?1:a.g?a.g.size:0}function jh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function zh(a,h){a.g?a.g.add(h):a.h=h}function l_(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}s_.prototype.cancel=function(){if(this.i=u_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function u_(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return x(a.i)}function ZC(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function eR(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function c_(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=eR(a),g=ZC(a),b=g.length,D=0;D<b;D++)h.call(void 0,g[D],f&&f[D],a)}var h_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tR(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),b=null;if(0<=g){var D=a[f].substring(0,g);b=a[f].substring(g+1)}else D=a[f];h(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function pi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof pi){this.h=a.h,Cl(this,a.j),this.o=a.o,this.g=a.g,Rl(this,a.s),this.l=a.l;var h=a.i,f=new Co;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),d_(this,f),this.m=a.m}else a&&(h=String(a).match(h_))?(this.h=!1,Cl(this,h[1]||"",!0),this.o=Io(h[2]||""),this.g=Io(h[3]||"",!0),Rl(this,h[4]),this.l=Io(h[5]||"",!0),d_(this,h[6]||"",!0),this.m=Io(h[7]||"")):(this.h=!1,this.i=new Co(null,this.h))}pi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(So(h,f_,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(So(h,f_,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(So(f,f.charAt(0)=="/"?iR:rR,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",So(f,oR)),a.join("")};function Wn(a){return new pi(a)}function Cl(a,h,f){a.j=f?Io(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Rl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function d_(a,h,f){h instanceof Co?(a.i=h,aR(a.i,a.h)):(f||(h=So(h,sR)),a.i=new Co(h,a.h))}function xe(a,h,f){a.i.set(h,f)}function Al(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Io(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function So(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,nR),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nR(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var f_=/[#\/\?@]/g,rR=/[#\?:]/g,iR=/[#\?]/g,sR=/[#\?@]/g,oR=/#/g;function Co(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Er(a){a.g||(a.g=new Map,a.h=0,a.i&&tR(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Co.prototype,t.add=function(a,h){Er(this),this.i=null,a=ts(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function p_(a,h){Er(a),h=ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function m_(a,h){return Er(a),h=ts(a,h),a.g.has(h)}t.forEach=function(a,h){Er(this),this.g.forEach(function(f,g){f.forEach(function(b){a.call(h,b,g,this)},this)},this)},t.na=function(){Er(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const b=a[g];for(let D=0;D<b.length;D++)f.push(h[g])}return f},t.V=function(a){Er(this);let h=[];if(typeof a=="string")m_(this,a)&&(h=h.concat(this.g.get(ts(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Er(this),this.i=null,a=ts(this,a),m_(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function g_(a,h,f){p_(a,h),0<f.length&&(a.i=null,a.g.set(ts(a,h),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var b=D;W[g]!==""&&(b+="="+encodeURIComponent(String(W[g]))),a.push(b)}}return this.i=a.join("&")};function ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function aR(a,h){h&&!a.j&&(Er(a),a.i=null,a.g.forEach(function(f,g){var b=g.toLowerCase();g!=b&&(p_(this,g),g_(this,b,f))},a)),a.j=h}function lR(a,h){const f=new wo;if(l.Image){const g=new Image;g.onload=_(wr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(wr,f,"TestLoadImage: error",!1,h,g),g.onabort=_(wr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(wr,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function uR(a,h){const f=new wo,g=new AbortController,b=setTimeout(()=>{g.abort(),wr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(b),D.ok?wr(f,"TestPingServer: ok",!0,h):wr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),wr(f,"TestPingServer: error",!1,h)})}function wr(a,h,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function cR(){this.g=new HC}function hR(a,h,f){const g=f||"";try{c_(a,function(b,D){let W=b;c(b)&&(W=Nh(b)),h.push(g+D+"="+encodeURIComponent(W))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function kl(a){this.l=a.Ub||null,this.j=a.eb||!1}T(kl,bh),kl.prototype.g=function(){return new Pl(this.l,this.j)},kl.prototype.i=function(a){return function(){return a}}({});function Pl(a,h){gt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Pl,gt),t=Pl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ao(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ro(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ao(this)),this.g&&(this.readyState=3,Ao(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;__(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function __(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ro(this):Ao(this),this.readyState==3&&__(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ro(this))},t.Qa=function(a){this.g&&(this.response=a,Ro(this))},t.ga=function(){this.g&&Ro(this)};function Ro(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ao(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ao(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function y_(a){let h="";return B(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Bh(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=y_(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):xe(a,h,f))}function ze(a){gt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(ze,gt);var dR=/^https?$/i,fR=["POST","PUT"];t=ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mh.g(),this.v=this.o?Kg(this.o):Kg(Mh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){v_(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fR,h,void 0))||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,W]of f)this.g.setRequestHeader(D,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{T_(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){v_(this,D)}};function v_(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,E_(a),xl(a)}function E_(a){a.A||(a.A=!0,xt(a,"complete"),xt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,xt(this,"complete"),xt(this,"abort"),xl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xl(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?w_(this):this.bb())},t.bb=function(){w_(this)};function w_(a){if(a.h&&typeof o<"u"&&(!a.v[1]||$n(a)!=4||a.Z()!=2)){if(a.u&&$n(a)==4)Wg(a.Ea,0,a);else if(xt(a,"readystatechange"),$n(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=W===0){var b=String(a.D).match(h_)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),g=!dR.test(b?b.toLowerCase():"")}f=g}if(f)xt(a,"complete"),xt(a,"success");else{a.m=6;try{var D=2<$n(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",E_(a)}}finally{xl(a)}}}}function xl(a,h){if(a.g){T_(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||xt(a,"ready");try{f.onreadystatechange=g}catch{}}}function T_(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function $n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),qC(h)}};function I_(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pR(a){const h={};a=(a.g&&2<=$n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var f=P(a[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[b]||[];h[b]=D,D.push(f)}v(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ko(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function S_(a){this.Aa=0,this.i=[],this.j=new wo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ko("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ko("baseRetryDelayMs",5e3,a),this.cb=ko("retryDelaySeedMs",1e4,a),this.Wa=ko("forwardChannelMaxRetries",2,a),this.wa=ko("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new s_(a&&a.concurrentRequestLimit),this.Da=new cR,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=S_.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Nt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=D_(this,null,this.W),bl(this)};function Wh(a){if(C_(a),a.G==3){var h=a.U++,f=Wn(a.I);if(xe(f,"SID",a.K),xe(f,"RID",h),xe(f,"TYPE","terminate"),Po(a,f),h=new vr(a,a.j,h),h.L=2,h.v=Al(Wn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=O_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Sl(h)}b_(a)}function Nl(a){a.g&&(qh(a),a.g.cancel(),a.g=null)}function C_(a){Nl(a),a.u&&(l.clearTimeout(a.u),a.u=null),Dl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function bl(a){if(!o_(a.h)&&!a.s){a.s=!0;var h=a.Ga;dn||se(),$||(dn(),$=!0),X.add(h,a),a.B=0}}function mR(a,h){return a_(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Eo(m(a.Ga,a,h),N_(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new vr(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=A_(this,b,h),f=Wn(this.I),xe(f,"RID",a),xe(f,"CVER",22),this.D&&xe(f,"X-HTTP-Session-Id",this.D),Po(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(y_(D)))+"&"+h:this.m&&Bh(f,this.m,D)),zh(this.h,b),this.Ua&&xe(f,"TYPE","init"),this.P?(xe(f,"$req",h),xe(f,"SID","null"),b.T=!0,Vh(b,f,null)):Vh(b,f,h),this.G=2}}else this.G==3&&(a?R_(this,a):this.i.length==0||o_(this.h)||R_(this))};function R_(a,h){var f;h?f=h.l:f=a.U++;const g=Wn(a.I);xe(g,"SID",a.K),xe(g,"RID",f),xe(g,"AID",a.T),Po(a,g),a.m&&a.o&&Bh(g,a.m,a.o),f=new vr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=A_(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),zh(a.h,f),Vh(f,g,h)}function Po(a,h){a.H&&B(a.H,function(f,g){xe(h,g,f)}),a.l&&c_({},function(f,g){xe(h,g,f)})}function A_(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let D=-1;for(;;){const W=["count="+f];D==-1?0<f?(D=b[0].g,W.push("ofs="+D)):D=0:W.push("ofs="+D);let Ce=!0;for(let lt=0;lt<f;lt++){let ge=b[lt].g;const _t=b[lt].map;if(ge-=D,0>ge)D=Math.max(0,b[lt].g-100),Ce=!1;else try{hR(_t,W,"req"+ge+"_")}catch{g&&g(_t)}}if(Ce){g=W.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function k_(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;dn||se(),$||(dn(),$=!0),X.add(h,a),a.v=0}}function $h(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Eo(m(a.Fa,a),N_(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,P_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Eo(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),Nl(this),P_(this))};function qh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function P_(a){a.g=new vr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Wn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),Po(a,h),a.m&&a.o&&Bh(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Al(Wn(h)),f.m=null,f.P=!0,n_(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Nl(this),$h(this),Nt(19))};function Dl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function x_(a,h){var f=null;if(a.g==h){Dl(a),qh(a),a.g=null;var g=2}else if(jh(a.h,h))f=h.D,l_(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;g=wl(),xt(g,new Jg(g,f)),bl(a)}else k_(a);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&mR(a,h)||g==2&&$h(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),b){case 1:mi(a,5);break;case 4:mi(a,10);break;case 3:mi(a,6);break;default:mi(a,2)}}}function N_(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function mi(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const b=!g;g=new pi(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Cl(g,"https"),Al(g),b?lR(g.toString(),f):uR(g.toString(),f)}else Nt(2);a.G=0,a.l&&a.l.sa(h),b_(a),C_(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function b_(a){if(a.G=0,a.ka=[],a.l){const h=u_(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function D_(a,h,f){var g=f instanceof pi?Wn(f):new pi(f);if(g.g!="")h&&(g.g=h+"."+g.g),Rl(g,g.s);else{var b=l.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var D=new pi(null);g&&Cl(D,g),h&&(D.g=h),b&&Rl(D,b),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&xe(g,f,h),xe(g,"VER",a.la),Po(a,g),g}function O_(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ze(new kl({eb:f})):new ze(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function M_(){}t=M_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ol(){}Ol.prototype.g=function(a,h){return new Qt(a,h)};function Qt(a,h){gt.call(this),this.g=new S_(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ns(this)}T(Qt,gt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Wh(this.g)},Qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Nh(a),a=f);h.i.push(new JC(h.Ya++,a)),h.G==3&&bl(h)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Wh(this.g),delete this.g,Qt.aa.N.call(this)};function L_(a){Dh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}T(L_,Dh);function V_(){Oh.call(this),this.status=1}T(V_,Oh);function ns(a){this.g=a}T(ns,M_),ns.prototype.ua=function(){xt(this.g,"a")},ns.prototype.ta=function(a){xt(this.g,new L_(a))},ns.prototype.sa=function(a){xt(this.g,new V_)},ns.prototype.ra=function(){xt(this.g,"b")},Ol.prototype.createWebChannel=Ol.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,dI=function(){return new Ol},hI=function(){return wl()},cI=di,$f={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Tl.NO_ERROR=0,Tl.TIMEOUT=8,Tl.HTTP_ERROR=6,Iu=Tl,Zg.COMPLETE="complete",uI=Zg,Gg.EventType=yo,yo.OPEN="a",yo.CLOSE="b",yo.ERROR="c",yo.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Yo=Gg,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,lI=ze}).apply(typeof eu<"u"?eu:typeof self<"u"?self:typeof window<"u"?window:{});const Iv="@firebase/firestore";/**
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
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */let co="10.14.0";/**
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
 */const Fi=new Zc("@firebase/firestore");function Fo(){return Fi.logLevel}function K(t,...e){if(Fi.logLevel<=de.DEBUG){const n=e.map(Rm);Fi.debug(`Firestore (${co}): ${t}`,...n)}}function cr(t,...e){if(Fi.logLevel<=de.ERROR){const n=e.map(Rm);Fi.error(`Firestore (${co}): ${t}`,...n)}}function Gs(t,...e){if(Fi.logLevel<=de.WARN){const n=e.map(Rm);Fi.warn(`Firestore (${co}): ${t}`,...n)}}function Rm(t){if(typeof t=="string")return t;try{/**
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function Te(t,e){t||ne()}function ie(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends mr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class fI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class UN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jN{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new fI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Tt(e)}}class zN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $N{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Te(this.o===void 0);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new WN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class pI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new tt(0,0))}static max(){return new re(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ua{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ua.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ua?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Ua{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const HN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Ua{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return HN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Le.fromString(e))}static fromName(e){return new Y(Le.fromString(e).popFirst(5))}static empty(){return new Y(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Le(e.slice()))}}function KN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new ei(i,Y.empty(),e)}function GN(t){return new ei(t.readTime,t.key,-1)}class ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ei(re.min(),Y.empty(),-1)}static max(){return new ei(re.max(),Y.empty(),-1)}}function QN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const YN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ll(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==YN)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function JN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ul(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Am{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Am.oe=-1;function ih(t){return t==null}function cc(t){return t===0&&1/t==-1/0}function ZN(t){return typeof t=="number"&&Number.isInteger(t)&&!cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Sv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Qe=class qf{constructor(e,n){this.comparator=e,this.root=n||Gr.EMPTY}insert(e,n){return new qf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Gr.BLACK,null,null))}remove(e){return new qf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tu(this.root,e,this.comparator,!0)}},tu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Gr=class qn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qn.RED,this.left=i??qn.EMPTY,this.right=s??qn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}};Gr.EMPTY=null,Gr.RED=!0,Gr.BLACK=!1;Gr.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Gr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cv(this.data.getIterator())}getIteratorFrom(e){return new Cv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class Cv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new ft(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new gI("Invalid base64 string: "+s):s}}(e);return new mt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const eb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(t){if(Te(!!t),typeof t=="string"){let e=0;const n=eb.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ui(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function km(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pm(t){const e=t.mapValue.fields.__previous_value__;return km(e)?Pm(e):e}function ja(t){const e=ti(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class tb{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const nu={mapValue:{}};function ji(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?km(t)?4:rb(t)?9007199254740991:nb(t)?10:11:ne()}function Un(t,e){if(t===e)return!0;const n=ji(t);if(n!==ji(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ja(t).isEqual(ja(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ti(i.timestampValue),l=ti(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ui(i.bytesValue).isEqual(Ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),l=qe(s.doubleValue);return o===l?cc(o)===cc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Sv(o)!==Sv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Un(o[u],l[u])))return!1;return!0}(t,e);default:return ne()}}function Ba(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=ji(t),r=ji(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=qe(s.integerValue||s.doubleValue),u=qe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Rv(t.timestampValue,e.timestampValue);case 4:return Rv(ja(t),ja(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ui(s),u=Ui(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=_e(l[c],u[c]);if(d!==0)return d}return _e(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=_e(qe(s.latitude),qe(o.latitude));return l!==0?l:_e(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Av(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,T=(u=m.value)===null||u===void 0?void 0:u.arrayValue,x=_e(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Av(_,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===nu.mapValue&&o===nu.mapValue)return 0;if(s===nu.mapValue)return 1;if(o===nu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=_e(u[p],d[p]);if(m!==0)return m;const _=Ys(l[u[p]],c[d[p]]);if(_!==0)return _}return _e(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ne()}}function Rv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=ti(t),r=ti(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function Av(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ys(n[i],r[i]);if(s)return s}return _e(n.length,r.length)}function Xs(t){return Hf(t)}function Hf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Hf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Hf(n.fields[o])}`;return i+"}"}(t.mapValue):ne()}function Kf(t){return!!t&&"integerValue"in t}function xm(t){return!!t&&"arrayValue"in t}function kv(t){return!!t&&"nullValue"in t}function Pv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Su(t){return!!t&&"mapValue"in t}function nb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ca(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ca(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ca(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ca(n)}setAll(e){let n=ht.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ca(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(ca(this.value))}}function _I(t){const e=[];return Yi(t.fields,(n,r)=>{const i=new ht([n]);if(Su(r)){const s=_I(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
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
 */class St{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new St(e,0,re.min(),re.min(),re.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new St(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new St(e,2,n,re.min(),re.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,re.min(),re.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hc{constructor(e,n){this.position=e,this.inclusive=n}}function xv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Ys(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dc{constructor(e,n="asc"){this.field=e,this.dir=n}}function ib(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yI{}class Je extends yI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ob(e,n,r):n==="array-contains"?new ub(e,r):n==="in"?new cb(e,r):n==="not-in"?new hb(e,r):n==="array-contains-any"?new db(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ab(e,r):new lb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ys(n,this.value)):n!==null&&ji(this.value)===ji(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends yI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jn(e,n)}matches(e){return vI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vI(t){return t.op==="and"}function EI(t){return sb(t)&&vI(t)}function sb(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Gf(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Xs(t.value);if(EI(t))return t.filters.map(e=>Gf(e)).join(",");{const e=t.filters.map(n=>Gf(n)).join(",");return`${t.op}(${e})`}}function wI(t,e){return t instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&Un(r.value,i.value)}(t,e):t instanceof jn?function(r,i){return i instanceof jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&wI(o,i.filters[l]),!0):!1}(t,e):void ne()}function TI(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${Xs(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(TI).join(" ,")+"}"}(t):"Filter"}class ob extends Je{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class ab extends Je{constructor(e,n){super(e,"in",n),this.keys=II("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lb extends Je{constructor(e,n){super(e,"not-in",n),this.keys=II("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function II(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class ub extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xm(n)&&Ba(n.arrayValue,this.value)}}class cb extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ba(this.value.arrayValue,n)}}class hb extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ba(this.value.arrayValue,n)}}class db extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ba(this.value.arrayValue,r))}}/**
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
 */class fb{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function bv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new fb(t,e,n,r,i,s,o)}function Nm(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ih(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xs(r)).join(",")),e.ue=n}return e.ue}function bm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ib(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nv(t.startAt,e.startAt)&&Nv(t.endAt,e.endAt)}function Qf(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class sh{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pb(t,e,n,r,i,s,o,l){return new sh(t,e,n,r,i,s,o,l)}function oh(t){return new sh(t)}function Dv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mb(t){return t.collectionGroup!==null}function ha(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ft(ht.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new dc(s,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new dc(ht.keyField(),r))}return e.ce}function Ln(t){const e=ie(t);return e.le||(e.le=gb(e,ha(t))),e.le}function gb(t,e){if(t.limitType==="F")return bv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new dc(i.field,s)});const n=t.endAt?new hc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hc(t.startAt.position,t.startAt.inclusive):null;return bv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yf(t,e,n){return new sh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ah(t,e){return bm(Ln(t),Ln(e))&&t.limitType===e.limitType}function SI(t){return`${Nm(Ln(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>TI(i)).join(", ")}]`),ih(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xs(i)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function lh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ha(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=xv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ha(r),i)||r.endAt&&!function(o,l,u){const c=xv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ha(r),i))}(t,e)}function _b(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CI(t){return(e,n)=>{let r=!1;for(const i of ha(t)){const s=yb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yb(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ys(u,c):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
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
 */class ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return mI(this.inner)}size(){return this.innerSize}}/**
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
 */const vb=new Qe(Y.comparator);function hr(){return vb}const RI=new Qe(Y.comparator);function Xo(...t){let e=RI;for(const n of t)e=e.insert(n.key,n);return e}function AI(t){let e=RI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ii(){return da()}function kI(){return da()}function da(){return new ho(t=>t.toString(),(t,e)=>t.isEqual(e))}const Eb=new Qe(Y.comparator),wb=new ft(Y.comparator);function fe(...t){let e=wb;for(const n of t)e=e.add(n);return e}const Tb=new ft(_e);function Ib(){return Tb}/**
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
 */function Dm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function PI(t){return{integerValue:""+t}}function Sb(t,e){return ZN(e)?PI(e):Dm(t,e)}/**
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
 */class uh{constructor(){this._=void 0}}function Cb(t,e,n){return t instanceof fc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&km(s)&&(s=Pm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Wa?NI(t,e):t instanceof $a?bI(t,e):function(i,s){const o=xI(i,s),l=Ov(o)+Ov(i.Pe);return Kf(o)&&Kf(i.Pe)?PI(l):Dm(i.serializer,l)}(t,e)}function Rb(t,e,n){return t instanceof Wa?NI(t,e):t instanceof $a?bI(t,e):n}function xI(t,e){return t instanceof pc?function(r){return Kf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fc extends uh{}class Wa extends uh{constructor(e){super(),this.elements=e}}function NI(t,e){const n=DI(e);for(const r of t.elements)n.some(i=>Un(i,r))||n.push(r);return{arrayValue:{values:n}}}class $a extends uh{constructor(e){super(),this.elements=e}}function bI(t,e){let n=DI(e);for(const r of t.elements)n=n.filter(i=>!Un(i,r));return{arrayValue:{values:n}}}class pc extends uh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ov(t){return qe(t.integerValue||t.doubleValue)}function DI(t){return xm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ab(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Wa&&i instanceof Wa||r instanceof $a&&i instanceof $a?Qs(r.elements,i.elements,Un):r instanceof pc&&i instanceof pc?Un(r.Pe,i.Pe):r instanceof fc&&i instanceof fc}(t.transform,e.transform)}class kb{constructor(e,n){this.version=e,this.transformResults=n}}class Vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ch{}function OI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new LI(t.key,Vn.none()):new cl(t.key,t.data,Vn.none());{const n=t.data,r=jt.empty();let i=new ft(ht.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new Jt(i.toArray()),Vn.none())}}function Pb(t,e,n){t instanceof cl?function(i,s,o){const l=i.value.clone(),u=Lv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!Cu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Lv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(MI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fa(t,e,n,r){return t instanceof cl?function(s,o,l,u){if(!Cu(s.precondition,o))return l;const c=s.value.clone(),d=Vv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,l,u){if(!Cu(s.precondition,o))return l;const c=Vv(s.fieldTransforms,u,o),d=o.data;return d.setAll(MI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Cu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function xb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=xI(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function Mv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qs(r,i,(s,o)=>Ab(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cl extends ch{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends ch{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function MI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lv(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Rb(o,l,n[i]))}return r}function Vv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Cb(s,o,e))}return r}class LI extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nb extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Pb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=OI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,r)=>Mv(n,r))&&Qs(this.baseMutations,e.baseMutations,(n,r)=>Mv(n,r))}}class Om{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return Eb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Om(e,n,r,i)}}/**
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
 */class Db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ob{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,pe;function Mb(t){switch(t){default:return ne();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function VI(t){if(t===void 0)return cr("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ke.OK:return L.OK;case Ke.CANCELLED:return L.CANCELLED;case Ke.UNKNOWN:return L.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return L.INTERNAL;case Ke.UNAVAILABLE:return L.UNAVAILABLE;case Ke.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ke.NOT_FOUND:return L.NOT_FOUND;case Ke.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ke.ABORTED:return L.ABORTED;case Ke.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ke.DATA_LOSS:return L.DATA_LOSS;default:return ne()}}(pe=Ke||(Ke={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Lb(){return new TextEncoder}/**
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
 */const Vb=new Pi([4294967295,4294967295],0);function Fv(t){const e=Lb().encode(t),n=new aI;return n.update(e),new Uint8Array(n.digest())}function Uv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pi([n,r],0),new Pi([i,s],0)]}class Mm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Jo(`Invalid padding: ${n}`);if(r<0)throw new Jo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Jo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Jo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Pi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Pi.fromNumber(r)));return i.compare(Vb)===1&&(i=new Pi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Fv(e),[r,i]=Uv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Mm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Fv(e),[r,i]=Uv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Jo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,hl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hh(re.min(),i,new Qe(_e),hr(),fe())}}class hl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new hl(r,n,fe(),fe(),fe())}}/**
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
 */class Ru{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class FI{constructor(e,n){this.targetId=e,this.me=n}}class UI{constructor(e,n,r=mt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jv{constructor(){this.fe=0,this.ge=Bv(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new hl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Bv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Fb{constructor(e){this.Le=e,this.Be=new Map,this.ke=hr(),this.qe=zv(),this.Qe=new Qe(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Qf(s))if(r===0){const o=new Y(s.path);this.Ue(n,o,St.newNoDocument(o,re.min()))}else Te(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ui(r).toUint8Array()}catch(u){if(u instanceof gI)return Gs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Mm(o,i,s)}catch(u){return Gs(u instanceof Jo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Qf(l.target)){const u=new Y(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,St.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=fe();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new hh(e,n,this.Qe,this.ke,r);return this.ke=hr(),this.qe=zv(),this.Qe=new Qe(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new jv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ft(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function zv(){return new Qe(Y.comparator)}function Bv(){return new Qe(Y.comparator)}const Ub={asc:"ASCENDING",desc:"DESCENDING"},jb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zb={and:"AND",or:"OR"};class Bb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xf(t,e){return t.useProto3Json||ih(e)?e:{value:e}}function mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Wb(t,e){return mc(t,e.toTimestamp())}function Fn(t){return Te(!!t),re.fromTimestamp(function(n){const r=ti(n);return new tt(r.seconds,r.nanos)}(t))}function Lm(t,e){return Jf(t,e).canonicalString()}function Jf(t,e){const n=function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zI(t){const e=Le.fromString(t);return Te(HI(e)),e}function Zf(t,e){return Lm(t.databaseId,e.path)}function Rd(t,e){const n=zI(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(WI(n))}function BI(t,e){return Lm(t.databaseId,e)}function $b(t){const e=zI(t);return e.length===4?Le.emptyPath():WI(e)}function ep(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function WI(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wv(t,e,n){return{name:Zf(t,e),fields:n.value.mapValue.fields}}function qb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Te(d===void 0||typeof d=="string"),mt.fromBase64String(d||"")):(Te(d===void 0||d instanceof Buffer||d instanceof Uint8Array),mt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:VI(c.code);return new Q(d,c.message||"")}(o);n=new UI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rd(t,r.document.name),s=Fn(r.document.updateTime),o=r.document.createTime?Fn(r.document.createTime):re.min(),l=new jt({mapValue:{fields:r.document.fields}}),u=St.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ru(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rd(t,r.document),s=r.readTime?Fn(r.readTime):re.min(),o=St.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ru([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rd(t,r.document),s=r.removedTargetIds||[];n=new Ru([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ob(i,s),l=r.targetId;n=new FI(l,o)}}return n}function Hb(t,e){let n;if(e instanceof cl)n={update:Wv(t,e.key,e.value)};else if(e instanceof LI)n={delete:Zf(t,e.key)};else if(e instanceof ui)n={update:Wv(t,e.key,e.data),updateMask:tD(e.fieldMask)};else{if(!(e instanceof Nb))return ne();n={verify:Zf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof fc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Wa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $a)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Wb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne()}(t,e.precondition)),n}function Kb(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Fn(i.updateTime):Fn(s);return o.isEqual(re.min())&&(o=Fn(s)),new kb(o,i.transformResults||[])}(n,e))):[]}function Gb(t,e){return{documents:[BI(t,e.path)]}}function Qb(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=BI(t,i);const s=function(c){if(c.length!==0)return qI(jn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:us(m.field),direction:Jb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Xf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Yb(t){let e=$b(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=$I(p);return m instanceof jn&&EI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(T){return new dc(cs(T.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ih(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,_=p.values||[];return new hc(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,_=p.values||[];return new hc(_,m)}(n.endAt)),pb(e,i,o,s,l,"F",u,c)}function Xb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $I(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cs(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=cs(n.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=cs(n.unaryFilter.field);return Je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cs(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(cs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>$I(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function Jb(t){return Ub[t]}function Zb(t){return jb[t]}function eD(t){return zb[t]}function us(t){return{fieldPath:t.canonicalString()}}function cs(t){return ht.fromServerFormat(t.fieldPath)}function qI(t){return t instanceof Je?function(n){if(n.op==="=="){if(Pv(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NAN"}};if(kv(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Pv(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NAN"}};if(kv(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:us(n.field),op:Zb(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(i=>qI(i));return r.length===1?r[0]:{compositeFilter:{op:eD(n.op),filters:r}}}(t):ne()}function tD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function HI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Lr{constructor(e,n,r,i,s=re.min(),o=re.min(),l=mt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nD{constructor(e){this.ct=e}}function rD(t){const e=Yb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yf(e,e.limit,"L"):e}/**
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
 */class iD{constructor(){this.un=new sD}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(ei.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(ei.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class sD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ft(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ft(Le.comparator)).toArray()}}/**
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
 */class Js{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Js(0)}static kn(){return new Js(-1)}}/**
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
 */class oD{constructor(){this.changes=new ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class aD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fa(r.mutation,i,Jt.empty(),tt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Ii();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ii();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=hr();const o=da(),l=function(){return da()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ui)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),fa(d.mutation,c,d.mutation.getFieldMask(),tt.now())):o.set(c.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new aD(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=da();let i=new Qe((o,l)=>o-l),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Jt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||fe()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=kI();d.forEach(m=>{if(!s.has(m)){const _=OI(n.get(m),r.get(m));_!==null&&p.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Ii());let l=-1,u=s;return o.next(c=>V.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,fe())).next(d=>({batchId:l,changes:AI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=Xo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xo();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const c=function(p,m){return new sh(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,St.newInvalidDocument(d)))});let l=Xo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&fa(d.mutation,c,Jt.empty(),tt.now()),lh(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class uD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Fn(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:rD(i.bundledQuery),readTime:Fn(i.readTime)}}(n)),V.resolve()}}/**
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
 */class cD{constructor(){this.overlays=new Qe(Y.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ii();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Ii(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Qe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ii(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Ii(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Db(n,r));let s=this.Ir.get(n);s===void 0&&(s=fe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class hD{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Vm{constructor(){this.Tr=new ft(rt.Er),this.dr=new ft(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new rt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new Le([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new Le([])),r=new rt(n,e),i=new rt(n,e+1);let s=fe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
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
 */class dD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ft(rt.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new rt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(_e);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new rt(new Y(s),0);let l=new ft(_e);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new rt(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class fD{constructor(e){this.Mr=e,this.docs=function(){return new Qe(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():St.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=hr();const o=n.path,l=new Y(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||QN(GN(d),r)<=0||(i.has(d.key)||lh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pD(this)}getSize(e){return V.resolve(this.size)}}class pD extends oD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class mD{constructor(e){this.persistence=e,this.Nr=new ho(n=>Nm(n),bm),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Vm,this.targetCount=0,this.kr=Js.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
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
 */class gD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Am(0),this.Kr=!1,this.Kr=!0,this.$r=new hD,this.referenceDelegate=e(this),this.Ur=new mD(this),this.indexManager=new iD,this.remoteDocumentCache=function(i){return new fD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nD(n),this.Gr=new uD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new dD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new _D(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class _D extends XN{constructor(e){super(),this.currentSequenceNumber=e}}class Fm{constructor(e){this.persistence=e,this.Jr=new Vm,this.Yr=null}static Zr(e){return new Fm(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=Y.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Um{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Um(e,n.fromCache,r,i)}}/**
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
 */class yD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return r1()?8:JN(At())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new yD;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Fo()<=de.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Fo()<=de.DEBUG&&K("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Fo()<=de.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):V.resolve())}Yi(e,n){if(Dv(n))return V.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yf(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Yf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Dv(n)||i.isEqual(re.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(Fo()<=de.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ls(n)),this.rs(e,o,n,KN(i,-1)).next(l=>l))})}ts(e,n){let r=new ft(CI(e));return n.forEach((i,s)=>{lh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Fo()<=de.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",ls(n)),this.Ji.getDocumentsMatchingQuery(e,n,ei.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class ED{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Qe(_e),this._s=new ho(s=>Nm(s),bm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function wD(t,e,n,r){return new ED(t,e,n,r)}async function KI(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=fe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function TD(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let _=V.resolve();return m.forEach(T=>{_=_.next(()=>d.getEntry(u,T)).next(x=>{const O=c.docVersions.get(T);Te(O!==null),x.version.compareTo(O)<0&&(p.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),d.addEntry(x)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=fe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function GI(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ID(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(mt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(p,_),function(x,O,C){return x.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(m,_,d)&&l.push(n.Ur.updateTargetData(s,_))});let u=hr(),c=fe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(SD(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(re.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function SD(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=hr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function CD(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function RD(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function tp(t,e,n){const r=ie(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ul(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function $v(t,e,n){const r=ie(t);let i=re.min(),s=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ie(u),m=p._s.get(d);return m!==void 0?V.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,Ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:fe())).next(l=>(AD(r,_b(e),l),{documents:l,Ts:s})))}function AD(t,e,n){let r=t.us.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class qv{constructor(){this.activeTargetIds=Ib()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kD{constructor(){this.so=new qv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new qv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PD{_o(e){}shutdown(){}}/**
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
 */class Hv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ru=null;function Ad(){return ru===null?ru=function(){return 268435456+Math.round(2147483648*Math.random())}():ru++,"0x"+ru.toString(16)}/**
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
 */const xD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ND{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const wt="WebChannelConnection";class bD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Ad(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(K("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Gs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=xD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Ad();return new Promise((o,l)=>{const u=new lI;u.setWithCredentials(!0),u.listenOnce(uI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Iu.NO_ERROR:const d=u.getResponseJson();K(wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Iu.TIMEOUT:K(wt,`RPC '${e}' ${s} timed out`),l(new Q(L.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const p=u.getStatus();if(K(wt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const T=function(O){const C=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(C)>=0?C:L.UNKNOWN}(_.status);l(new Q(T,_.message))}else l(new Q(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Q(L.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{K(wt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);K(wt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Ad(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dI(),l=hI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");K(wt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,_=!1;const T=new ND({Io:O=>{_?K(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(K(wt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),K(wt,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},To:()=>p.close()}),x=(O,C,w)=>{O.listen(C,A=>{try{w(A)}catch(M){setTimeout(()=>{throw M},0)}})};return x(p,Yo.EventType.OPEN,()=>{_||(K(wt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),x(p,Yo.EventType.CLOSE,()=>{_||(_=!0,K(wt,`RPC '${e}' stream ${i} transport closed`),T.So())}),x(p,Yo.EventType.ERROR,O=>{_||(_=!0,Gs(wt,`RPC '${e}' stream ${i} transport errored:`,O),T.So(new Q(L.UNAVAILABLE,"The operation could not be completed")))}),x(p,Yo.EventType.MESSAGE,O=>{var C;if(!_){const w=O.data[0];Te(!!w);const A=w,M=A.error||((C=A[0])===null||C===void 0?void 0:C.error);if(M){K(wt,`RPC '${e}' stream ${i} received error:`,M);const z=M.status;let B=function(E){const I=Ke[E];if(I!==void 0)return VI(I)}(z),v=M.message;B===void 0&&(B=L.INTERNAL,v="Unknown error status: "+z+" with message "+M.message),_=!0,T.So(new Q(B,v)),p.close()}else K(wt,`RPC '${e}' stream ${i} received:`,w),T.bo(w)}}),x(l,cI.STAT_EVENT,O=>{O.stat===$f.PROXY?K(wt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===$f.NOPROXY&&K(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function kd(){return typeof document<"u"?document:null}/**
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
 */function dh(t){return new Bb(t,!0)}/**
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
 */class QI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class YI{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new QI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DD extends YI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=qb(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?Fn(o.readTime):re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ep(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Qf(u)?{documents:Gb(s,u)}:{query:Qb(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=jI(s,o.resumeToken);const c=Xf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){l.readTime=mc(s,o.snapshotVersion.toTimestamp());const c=Xf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Xb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ep(this.serializer),n.removeTarget=e,this.a_(n)}}class OD extends YI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Te(!!e.streamToken),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Kb(e.writeResults,e.commitTime),r=Fn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ep(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Hb(this.serializer,r))};this.a_(n)}}/**
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
 */class MD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Jf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Jf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class LD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(cr(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class VD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Xi(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ie(u);c.L_.add(4),await dl(c),c.q_.set("Unknown"),c.L_.delete(4),await fh(c)}(this))})}),this.q_=new LD(r,i)}}async function fh(t){if(Xi(t))for(const e of t.B_)await e(!0)}async function dl(t){for(const e of t.B_)await e(!1)}function XI(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Wm(n)?Bm(n):fo(n).r_()&&zm(n,e))}function jm(t,e){const n=ie(t),r=fo(n);n.N_.delete(e),r.r_()&&JI(n,e),n.N_.size===0&&(r.r_()?r.o_():Xi(n)&&n.q_.set("Unknown"))}function zm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fo(t).A_(e)}function JI(t,e){t.Q_.xe(e),fo(t).R_(e)}function Bm(t){t.Q_=new Fb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fo(t).start(),t.q_.v_()}function Wm(t){return Xi(t)&&!fo(t).n_()&&t.N_.size>0}function Xi(t){return ie(t).L_.size===0}function ZI(t){t.Q_=void 0}async function FD(t){t.q_.set("Online")}async function UD(t){t.N_.forEach((e,n)=>{zm(t,e)})}async function jD(t,e){ZI(t),Wm(t)?(t.q_.M_(e),Bm(t)):t.q_.set("Unknown")}async function zD(t,e,n){if(t.q_.set("Online"),e instanceof UI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gc(t,r)}else if(e instanceof Ru?t.Q_.Ke(e):e instanceof FI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(re.min()))try{const r=await GI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(mt.EMPTY_BYTE_STRING,d.snapshotVersion)),JI(s,u);const p=new Lr(d.target,u,c,d.sequenceNumber);zm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await gc(t,r)}}async function gc(t,e,n){if(!ul(e))throw e;t.L_.add(1),await dl(t),t.q_.set("Offline"),n||(n=()=>GI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await fh(t)})}function eS(t,e){return e().catch(n=>gc(t,n,e))}async function ph(t){const e=ie(t),n=ni(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;BD(e);)try{const i=await CD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,WD(e,i)}catch(i){await gc(e,i)}tS(e)&&nS(e)}function BD(t){return Xi(t)&&t.O_.length<10}function WD(t,e){t.O_.push(e);const n=ni(t);n.r_()&&n.V_&&n.m_(e.mutations)}function tS(t){return Xi(t)&&!ni(t).n_()&&t.O_.length>0}function nS(t){ni(t).start()}async function $D(t){ni(t).p_()}async function qD(t){const e=ni(t);for(const n of t.O_)e.m_(n.mutations)}async function HD(t,e,n){const r=t.O_.shift(),i=Om.from(r,e,n);await eS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ph(t)}async function KD(t,e){e&&ni(t).V_&&await async function(r,i){if(function(o){return Mb(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();ni(r).s_(),await eS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ph(r)}}(t,e),tS(t)&&nS(t)}async function Kv(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Xi(n);n.L_.add(3),await dl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await fh(n)}async function GD(t,e){const n=ie(t);e?(n.L_.delete(2),await fh(n)):e||(n.L_.add(2),await dl(n),n.q_.set("Unknown"))}function fo(t){return t.K_||(t.K_=function(n,r,i){const s=ie(n);return s.w_(),new DD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:FD.bind(null,t),Ro:UD.bind(null,t),mo:jD.bind(null,t),d_:zD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Wm(t)?Bm(t):t.q_.set("Unknown")):(await t.K_.stop(),ZI(t))})),t.K_}function ni(t){return t.U_||(t.U_=function(n,r,i){const s=ie(n);return s.w_(),new OD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:$D.bind(null,t),mo:KD.bind(null,t),f_:qD.bind(null,t),g_:HD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ph(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class $m{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new $m(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qm(t,e){if(cr("AsyncQueue",`${e}: ${t}`),ul(t))return new Q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ms{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Xo(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new Ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Gv{constructor(){this.W_=new Qe(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Zs(e,n,Ms.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class QD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class YD{constructor(){this.queries=Qv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ie(n),s=i.queries;i.queries=Qv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new Q(L.ABORTED,"Firestore shutting down"))}}function Qv(){return new ho(t=>SI(t),ah)}async function Hm(t,e){const n=ie(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new QD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=qm(o,`Initialization of query '${ls(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Gm(n)}async function Km(t,e){const n=ie(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XD(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Gm(n)}function JD(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Gm(t){t.Y_.forEach(e=>{e.next()})}var np,Yv;(Yv=np||(np={})).ea="default",Yv.Cache="cache";class Qm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==np.Cache}}/**
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
 */class rS{constructor(e){this.key=e}}class iS{constructor(e){this.key=e}}class ZD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=CI(e),this.Ra=new Ms(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Gv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),_=lh(this.query,p)?p:null,T=!!m&&this.mutatedKeys.has(m.key),x=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;m&&_?m.data.isEqual(_.data)?T!==x&&(r.track({type:3,doc:_}),O=!0):this.ga(m,_)||(r.track({type:2,doc:_}),O=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),O=!0):m&&!_&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(l=!0)),O&&(_?(o=o.add(_),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,T){const x=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return x(_)-x(T)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Zs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Gv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new iS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new rS(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Zs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class eO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tO{constructor(e){this.key=e,this.va=!1}}class nO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ho(l=>SI(l),ah),this.Ma=new Map,this.xa=new Set,this.Oa=new Qe(Y.comparator),this.Na=new Map,this.La=new Vm,this.Ba={},this.ka=new Map,this.qa=Js.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function rO(t,e,n=!0){const r=cS(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await sS(r,e,n,!0),i}async function iO(t,e){const n=cS(t);await sS(n,e,!0,!1)}async function sS(t,e,n,r){const i=await RD(t.localStore,Ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await sO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&XI(t.remoteStore,i),l}async function sO(t,e,n,r,i){t.Ka=(p,m,_)=>async function(x,O,C,w){let A=O.view.ma(C);A.ns&&(A=await $v(x.localStore,O.query,!1).then(({documents:v})=>O.view.ma(v,A)));const M=w&&w.targetChanges.get(O.targetId),z=w&&w.targetMismatches.get(O.targetId)!=null,B=O.view.applyChanges(A,x.isPrimaryClient,M,z);return Jv(x,O.targetId,B.wa),B.snapshot}(t,p,m,_);const s=await $v(t.localStore,e,!0),o=new ZD(e,s.Ts),l=o.ma(s.documents),u=hl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Jv(t,n,c.wa);const d=new eO(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function oO(t,e,n){const r=ie(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ah(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await tp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&jm(r.remoteStore,i.targetId),rp(r,i.targetId)}).catch(ll)):(rp(r,i.targetId),await tp(r.localStore,i.targetId,!0))}async function aO(t,e){const n=ie(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),jm(n.remoteStore,r.targetId))}async function lO(t,e,n){const r=mO(t);try{const i=await function(o,l){const u=ie(o),c=tt.now(),d=l.reduce((_,T)=>_.add(T.key),fe());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=hr(),x=fe();return u.cs.getEntries(_,d).next(O=>{T=O,T.forEach((C,w)=>{w.isValidDocument()||(x=x.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(O=>{p=O;const C=[];for(const w of l){const A=xb(w,p.get(w.key).overlayedDocument);A!=null&&C.push(new ui(w.key,A,_I(A.value.mapValue),Vn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,C,l)}).next(O=>{m=O;const C=O.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(_,O.batchId,C)})}).then(()=>({batchId:m.batchId,changes:AI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Qe(_e)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await fl(r,i.changes),await ph(r.remoteStore)}catch(i){const s=qm(i,"Failed to persist write");n.reject(s)}}async function oS(t,e){const n=ie(t);try{const r=await ID(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Te(o.va):i.removedDocuments.size>0&&(Te(o.va),o.va=!1))}),await fl(n,r,e)}catch(r){await ll(r)}}function Xv(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ie(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&Gm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uO(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Qe(Y.comparator);o=o.insert(s,St.newNoDocument(s,re.min()));const l=fe().add(s),u=new hh(re.min(),new Map,new Qe(_e),o,l);await oS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ym(r)}else await tp(r.localStore,e,!1).then(()=>rp(r,e,n)).catch(ll)}async function cO(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await TD(n.localStore,e);lS(n,r,null),aS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fl(n,i)}catch(i){await ll(i)}}async function hO(t,e,n){const r=ie(t);try{const i=await function(o,l){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(Te(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);lS(r,e,n),aS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fl(r,i)}catch(i){await ll(i)}}function aS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function lS(t,e,n){const r=ie(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function rp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||uS(t,r)})}function uS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(jm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ym(t))}function Jv(t,e,n){for(const r of n)r instanceof rS?(t.La.addReference(r.key,e),dO(t,r)):r instanceof iS?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||uS(t,r.key)):ne()}function dO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ym(t))}function Ym(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(Le.fromString(e)),r=t.qa.next();t.Na.set(r,new tO(n)),t.Oa=t.Oa.insert(n,r),XI(t.remoteStore,new Lr(Ln(oh(n.path)),r,"TargetPurposeLimboResolution",Am.oe))}}async function fl(t,e,n){const r=ie(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Um.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=ie(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,m=>V.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>V.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!ul(p))throw p;K("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const _=d.os.get(m),T=_.snapshotVersion,x=_.withLastLimboFreeSnapshotVersion(T);d.os=d.os.insert(m,x)}}}(r.localStore,s))}async function fO(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await KI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new Q(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fl(n,r.hs)}}function pO(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function cS(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uO.bind(null,e),e.Ca.d_=XD.bind(null,e.eventManager),e.Ca.$a=JD.bind(null,e.eventManager),e}function mO(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hO.bind(null,e),e}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return wD(this.persistence,new vD,e.initialUser,this.serializer)}Ga(e){return new gD(Fm.Zr,this.serializer)}Wa(e){return new kD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class ip{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fO.bind(null,this.syncEngine),await GD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YD}()}createDatastore(e){const n=dh(e.databaseInfo.databaseId),r=function(s){return new bD(s)}(e.databaseInfo);return function(s,o,l,u){return new MD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new VD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xv(this.syncEngine,n,0),function(){return Hv.D()?new Hv:new PD}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new nO(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ie(i);K("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await dl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ip.provider={build:()=>new ip};/**
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
 */class Xm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class gO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=pI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pd(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await KI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _O(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Kv(e.remoteStore,i)),t._onlineComponents=e}async function _O(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Gs("Error using user provided cache. Falling back to memory cache: "+n),await Pd(t,new _c)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Pd(t,new _c);return t._offlineComponents}async function hS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Zv(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Zv(t,new ip))),t._onlineComponents}function yO(t){return hS(t).then(e=>e.syncEngine)}async function yc(t){const e=await hS(t),n=e.eventManager;return n.onListen=rO.bind(null,e.syncEngine),n.onUnlisten=oO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aO.bind(null,e.syncEngine),n}function vO(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Xm({next:m=>{d.Za(),o.enqueueAndForget(()=>Km(s,p));const _=m.docs.has(l);!_&&m.fromCache?c.reject(new Q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new Q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Qm(oh(l.path),d,{includeMetadataChanges:!0,_a:!0});return Hm(s,p)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}function EO(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Xm({next:m=>{d.Za(),o.enqueueAndForget(()=>Km(s,p)),m.fromCache&&u.source==="server"?c.reject(new Q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Qm(l,d,{includeMetadataChanges:!0,_a:!0});return Hm(s,p)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function dS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const eE=new Map;/**
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
 */function fS(t,e,n){if(!n)throw new Q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wO(t,e,n,r){if(e===!0&&r===!0)throw new Q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tE(t){if(!Y.isDocumentKey(t))throw new Q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nE(t){if(Y.isDocumentKey(t))throw new Q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jm(t);throw new Q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class rE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new FN;switch(r.type){case"firstParty":return new BN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=eE.get(n);r&&(K("ComponentProvider","Removing Datastore"),eE.delete(n),r.terminate())}(this),Promise.resolve()}}function TO(t,e,n,r={}){var i;const s=(t=un(t,mh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Tt.MOCK_USER;else{l=vT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Tt(c)}t._authCredentials=new UN(new fI(l,u))}}/**
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
 */class pl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pl(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Qr extends pl{constructor(e,n,r){super(e,n,oh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new Y(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function IO(t,e,...n){if(t=Oe(t),fS("collection","path",e),t instanceof mh){const r=Le.fromString(e,...n);return nE(r),new Qr(t,null,r)}{if(!(t instanceof Ot||t instanceof Qr))throw new Q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return nE(r),new Qr(t.firestore,null,r)}}function Si(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=pI.newId()),fS("doc","path",e),t instanceof mh){const r=Le.fromString(e,...n);return tE(r),new Ot(t,null,new Y(r))}{if(!(t instanceof Ot||t instanceof Qr))throw new Q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return tE(r),new Ot(t.firestore,t instanceof Qr?t.converter:null,new Y(r))}}/**
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
 */class iE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new QI(this,"async_queue_retry"),this.Vu=()=>{const r=kd();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=kd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new nr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ul(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=$m.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function sE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class zi extends mh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new iE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new iE(e),this._firestoreClient=void 0,await e}}}function SO(t,e){const n=typeof t=="object"?t:gm(),r=typeof t=="string"?t:"(default)",i=eh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gT("firestore");s&&TO(i,...s)}return i}function gh(t){if(t._terminated)throw new Q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CO(t),t._firestoreClient}function CO(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new tb(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,dS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new gO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class eo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new eo(mt.fromBase64String(e))}catch(n){throw new Q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new eo(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _h{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zm{constructor(e){this._methodName=e}}/**
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
 */class eg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class tg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const RO=/^__.*__$/;class AO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new cl(e,this.data,n,this.fieldTransforms)}}class pS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ui(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class ng{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ng(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(mS(this.Cu)&&RO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class kO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dh(e)}Qu(e,n,r,i=!1){return new ng({Cu:e,methodName:n,qu:r,path:ht.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gS(t){const e=t._freezeSettings(),n=dh(t._databaseId);return new kO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PO(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);rg("Data must be an object, but it was:",o,r);const l=_S(r,o);let u,c;if(s.merge)u=new Jt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=sp(e,p,n);if(!o.contains(m))throw new Q(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);vS(d,m)||d.push(m)}u=new Jt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new AO(new jt(l),u,c)}class yh extends Zm{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yh}}function xO(t,e,n,r){const i=t.Qu(1,e,n);rg("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();Yi(r,(u,c)=>{const d=ig(e,u,n);c=Oe(c);const p=i.Nu(d);if(c instanceof yh)s.push(d);else{const m=vh(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Jt(s);return new pS(o,l,i.fieldTransforms)}function NO(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[sp(e,r,n)],u=[i];if(s.length%2!=0)throw new Q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(sp(e,s[m])),u.push(s[m+1]);const c=[],d=jt.empty();for(let m=l.length-1;m>=0;--m)if(!vS(c,l[m])){const _=l[m];let T=u[m];T=Oe(T);const x=o.Nu(_);if(T instanceof yh)c.push(_);else{const O=vh(T,x);O!=null&&(c.push(_),d.set(_,O))}}const p=new Jt(c);return new pS(d,p,o.fieldTransforms)}function vh(t,e){if(yS(t=Oe(t)))return rg("Unsupported field value:",e,t),_S(t,e);if(t instanceof Zm)return function(r,i){if(!mS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=vh(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=tt.fromDate(r);return{timestampValue:mc(i.serializer,s)}}if(r instanceof tt){const s=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mc(i.serializer,s)}}if(r instanceof eg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof eo)return{bytesValue:jI(i.serializer,r._byteString)};if(r instanceof Ot){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Lm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof tg)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Dm(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Jm(r)}`)}(t,e)}function _S(t,e){const n={};return mI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(t,(r,i)=>{const s=vh(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof eg||t instanceof eo||t instanceof Ot||t instanceof Zm||t instanceof tg)}function rg(t,e,n){if(!yS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jm(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function sp(t,e,n){if((e=Oe(e))instanceof _h)return e._internalPath;if(typeof e=="string")return ig(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const bO=new RegExp("[~\\*/\\[\\]]");function ig(t,e,n){if(e.search(bO)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _h(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Q(L.INVALID_ARGUMENT,l+t+u)}function vS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ES{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DO extends ES{data(){return super.data()}}function wS(t,e){return typeof e=="string"?ig(t,e):e instanceof _h?e._internalPath:e._delegate._internalPath}/**
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
 */function TS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class OO{convertValue(e,n="none"){switch(ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>qe(o.doubleValue));return new tg(s)}convertGeoPoint(e){return new eg(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ja(e));default:return null}}convertTimestamp(e){const n=ti(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Te(HI(r));const i=new za(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function MO(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class IS extends ES{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Au extends IS{data(e={}){return super.data(e)}}class SS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Au(this._firestore,this._userDataWriter,r.key,r,new Zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Au(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Au(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:LO(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
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
 */function oE(t){t=un(t,Ot);const e=un(t.firestore,zi);return vO(gh(e),t._key).then(n=>RS(e,t,n))}class sg extends OO{constructor(e){super(),this.firestore=e}convertBytes(e){return new eo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function VO(t){t=un(t,pl);const e=un(t.firestore,zi),n=gh(e),r=new sg(e);return TS(t._query),EO(n,t._query).then(i=>new SS(e,r,t,i))}function aE(t,e,n){t=un(t,Ot);const r=un(t.firestore,zi),i=MO(t.converter,e);return CS(r,[PO(gS(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Vn.none())])}function lE(t,e,n,...r){t=un(t,Ot);const i=un(t.firestore,zi),s=gS(i);let o;return o=typeof(e=Oe(e))=="string"||e instanceof _h?NO(s,"updateDoc",t._key,e,n,r):xO(s,"updateDoc",t._key,e),CS(i,[o.toMutation(t._key,Vn.exists(!0))])}function FO(t,...e){var n,r,i;t=Oe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||sE(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(sE(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof Ot)c=un(t.firestore,zi),d=oh(t._key.path),u={next:p=>{e[o]&&e[o](RS(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=un(t,pl);c=un(p.firestore,zi),d=p._query;const m=new sg(c);u={next:_=>{e[o]&&e[o](new SS(c,m,p,_))},error:e[o+1],complete:e[o+2]},TS(t._query)}return function(m,_,T,x){const O=new Xm(x),C=new Qm(_,O,T);return m.asyncQueue.enqueueAndForget(async()=>Hm(await yc(m),C)),()=>{O.Za(),m.asyncQueue.enqueueAndForget(async()=>Km(await yc(m),C))}}(gh(c),d,l,u)}function CS(t,e){return function(r,i){const s=new nr;return r.asyncQueue.enqueueAndForget(async()=>lO(await yO(r),i,s)),s.promise}(gh(t),e)}function RS(t,e,n){const r=n.docs.get(e._key),i=new sg(t);return new IS(t,i,e._key,r,new Zo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){co=i})(Gi),Mi(new Zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new zi(new jN(r.getProvider("auth-internal")),new $N(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Dn(Iv,"4.7.3",e),Dn(Iv,"4.7.3","esm2017")})();var uE={};const cE="@firebase/database",hE="1.0.8";/**
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
 */let AS="";function UO(t){AS=t}/**
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
 */class jO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ot(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:La(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class zO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const kS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jO(e)}}catch{}return new zO},Ci=kS("localStorage"),BO=kS("sessionStorage");/**
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
 */const Ls=new Zc("@firebase/database"),WO=function(){let t=1;return function(){return t++}}(),PS=function(t){const e=m1(t),n=new h1;n.update(e);const r=n.digest();return dm.encodeByteArray(r)},ml=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ml.apply(null,r):typeof r=="object"?e+=ot(r):e+=r,e+=" "}return e};let pa=null,dE=!0;const $O=function(t,e){j(!0,"Can't turn on custom loggers persistently."),Ls.logLevel=de.VERBOSE,pa=Ls.log.bind(Ls)},Ct=function(...t){if(dE===!0&&(dE=!1,pa===null&&BO.get("logging_enabled")===!0&&$O()),pa){const e=ml.apply(null,t);pa(e)}},gl=function(t){return function(...e){Ct(t,...e)}},op=function(...t){const e="FIREBASE INTERNAL ERROR: "+ml(...t);Ls.error(e)},dr=function(...t){const e=`FIREBASE FATAL ERROR: ${ml(...t)}`;throw Ls.error(e),new Error(e)},Kt=function(...t){const e="FIREBASE WARNING: "+ml(...t);Ls.warn(e)},qO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},HO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},to="[MIN_NAME]",Bi="[MAX_NAME]",po=function(t,e){if(t===e)return 0;if(t===to||e===Bi)return-1;if(e===to||t===Bi)return 1;{const n=fE(t),r=fE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},KO=function(t,e){return t===e?0:t<e?-1:1},Uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ot(e))},og=function(t){if(typeof t!="object"||t===null)return ot(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ot(e[r]),n+=":",n+=og(t[e[r]]);return n+="}",n},NS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bS=function(t){j(!xS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let p="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},GO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},QO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function YO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const XO=new RegExp("^-?(0*)\\d{1,10}$"),JO=-2147483648,ZO=2147483647,fE=function(t){if(XO.test(t)){const e=Number(t);if(e>=JO&&e<=ZO)return e}return null},mo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Kt("Exception was thrown by user callback.",n),e},Math.floor(0))}},e2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ma=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class t2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Kt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class n2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kt(e)}}class ku{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ku.OWNER="owner";/**
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
 */const ag="5",DS="v",OS="s",MS="r",LS="f",VS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,FS="ls",US="p",ap="ac",jS="websocket",zS="long_polling";/**
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
 */class BS{constructor(e,n,r,i,s=!1,o="",l=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ci.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ci.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function r2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function WS(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let r;if(e===jS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);r2(t)&&(n.ns=t.namespace);const i=[];return Gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class i2{constructor(){this.counters_={}}incrementCounter(e,n=1){gr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hk(this.counters_)}}/**
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
 */const xd={},Nd={};function lg(t){const e=t.toString();return xd[e]||(xd[e]=new i2),xd[e]}function s2(t,e){const n=t.toString();return Nd[n]||(Nd[n]=e()),Nd[n]}/**
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
 */class o2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&mo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const pE="start",a2="close",l2="pLPCommand",u2="pRTLPCB",$S="id",qS="pw",HS="ser",c2="cb",h2="seg",d2="ts",f2="d",p2="dframe",KS=1870,GS=30,m2=KS-GS,g2=25e3,_2=3e4;class Cs{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gl(e),this.stats_=lg(n),this.urlFn=u=>(this.appCheckToken&&(u[ap]=this.appCheckToken),WS(n,zS,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new o2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_2)),HO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ug((...s)=>{const[o,l,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===pE)this.id=l,this.password=u;else if(o===a2)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[pE]="t",r[HS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[c2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[DS]=ag,this.transportSessionId&&(r[OS]=this.transportSessionId),this.lastSessionId&&(r[FS]=this.lastSessionId),this.applicationId&&(r[US]=this.applicationId),this.appCheckToken&&(r[ap]=this.appCheckToken),typeof location<"u"&&location.hostname&&VS.test(location.hostname)&&(r[MS]=LS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cs.forceAllow_=!0}static forceDisallow(){Cs.forceDisallow_=!0}static isAvailable(){return Cs.forceAllow_?!0:!Cs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!GO()&&!QO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=fT(n),i=NS(r,m2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[p2]="t",r[$S]=e,r[qS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ot(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ug{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=WO(),window[l2+this.uniqueCallbackIdentifier]=e,window[u2+this.uniqueCallbackIdentifier]=n,this.myIFrame=ug.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ct("frame writing exception"),l.stack&&Ct(l.stack),Ct(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ct("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$S]=this.myID,e[qS]=this.myPW,e[HS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+GS+r.length<=KS;){const o=this.pendingSegs.shift();r=r+"&"+h2+i+"="+o.seg+"&"+d2+i+"="+o.ts+"&"+f2+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(g2)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const y2=16384,v2=45e3;let Ec=null;typeof MozWebSocket<"u"?Ec=MozWebSocket:typeof WebSocket<"u"&&(Ec=WebSocket);class vn{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gl(this.connId),this.stats_=lg(n),this.connURL=vn.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[DS]=ag,typeof location<"u"&&location.hostname&&VS.test(location.hostname)&&(o[MS]=LS),n&&(o[OS]=n),r&&(o[FS]=r),i&&(o[ap]=i),s&&(o[US]=s),WS(e,jS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ci.set("previous_websocket_failure",!0);try{let r;n1(),this.mySock=new Ec(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ec!==null&&!vn.forceDisallow_}static previouslyFailed(){return Ci.isInMemoryStorage||Ci.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ci.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=La(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=NS(n,y2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(v2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vn.responsesRequiredToBeHealthy=2;vn.healthyTimeout=3e4;/**
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
 */class qa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cs,vn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=vn&&vn.isAvailable();let r=n&&!vn.previouslyFailed();if(e.webSocketOnly&&(n||Kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vn];else{const i=this.transports_=[];for(const s of qa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);qa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qa.globalTransportInitialized_=!1;/**
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
 */const E2=6e4,w2=5e3,T2=10*1024,I2=100*1024,bd="t",mE="d",S2="s",gE="r",C2="e",_E="o",yE="a",vE="n",EE="p",R2="h";class A2{constructor(e,n,r,i,s,o,l,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gl("c:"+this.id+":"),this.transportManager_=new qa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ma(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>I2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>T2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bd in e){const n=e[bd];n===yE?this.upgradeIfSecondaryHealthy_():n===gE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_E&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Uo("t",e),r=Uo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:EE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Uo("t",e),r=Uo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Uo(bd,e);if(mE in e){const r=e[mE];if(n===R2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===vE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===S2?this.onConnectionShutdown_(r):n===gE?this.onReset_(r):n===C2?op("Server Error: "+r):n===_E?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):op("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ag!==r&&Kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ma(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(E2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ma(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(w2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:EE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ci.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class QS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class YS{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class wc extends YS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wc}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const wE=32,TE=768;class Re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Re("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ri(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Re(t.pieces_,e)}function XS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function k2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function JS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ZS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Re(e,0)}function Ze(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Re(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function Bt(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return Bt(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cg(t,e){if(ri(t)!==ri(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function En(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ri(t)>ri(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class P2{constructor(e,n){this.errorPrefix_=n,this.parts_=JS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Jc(this.parts_[r]);eC(this)}}function x2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jc(e),eC(t)}function N2(t){const e=t.parts_.pop();t.byteLength_-=Jc(e),t.parts_.length>0&&(t.byteLength_-=1)}function eC(t){if(t.byteLength_>TE)throw new Error(t.errorPrefix_+"has a key path longer than "+TE+" bytes ("+t.byteLength_+").");if(t.parts_.length>wE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wE+") or object contains a cycle "+vi(t))}function vi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class hg extends YS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new hg}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const jo=1e3,b2=60*5*1e3,IE=30*1e3,D2=1.3,O2=3e4,M2="server_kill",SE=3;class rr extends QS{constructor(e,n,r,i,s,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=rr.nextPersistentConnectionId_++,this.log_=gl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jo,this.maxReconnectDelay_=b2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ot(s)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Xc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const u=l.d,c=l.s;rr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gr(e,"w")){const r=Hs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||c1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=IE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=u1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ot(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):op("Unrecognized action received from server: "+ot(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>O2&&(this.reconnectDelay_=jo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*D2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rr.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},c=function(p){j(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ct("getToken() completed but was canceled"):(Ct("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new A2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Kt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(M2)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Kt(p),u())}}}interrupt(e){Ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Of(this.interruptReasons_)&&(this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>og(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ct("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=SE&&(this.reconnectDelay_=IE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ct("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=SE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+AS.replace(/\./g,"-")]=1,fm()?e["framework.cordova"]=1:ET()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wc.getInstance().currentlyOnline();return Of(this.interruptReasons_)&&e}}rr.nextPersistentConnectionId_=0;rr.nextConnectionId_=0;/**
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
 */class ue{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ue(e,n)}}/**
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
 */class Eh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ue(to,e),i=new ue(to,n);return this.compare(r,i)!==0}minPost(){return ue.MIN}}/**
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
 */let iu;class tC extends Eh{static get __EMPTY_NODE(){return iu}static set __EMPTY_NODE(e){iu=e}compare(e,n){return po(e.name,n.name)}isDefinedOn(e){throw ao("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(Bi,iu)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,iu)}toString(){return".key"}}const Vs=new tC;/**
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
 */class su{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??Wt.EMPTY_NODE,this.right=s??Wt.EMPTY_NODE}copy(e,n,r,i,s){return new st(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Wt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}st.RED=!0;st.BLACK=!1;class L2{copy(e,n,r,i,s){return this}insert(e,n,r){return new st(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Wt{constructor(e,n=Wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,st.BLACK,null,null))}remove(e){return new Wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,st.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new su(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new su(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new su(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new su(this.root_,null,this.comparator_,!0,e)}}Wt.EMPTY_NODE=new L2;/**
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
 */function V2(t,e){return po(t.name,e.name)}function dg(t,e){return po(t,e)}/**
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
 */let lp;function F2(t){lp=t}const nC=function(t){return typeof t=="number"?"number:"+bS(t):"string:"+t},rC=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gr(e,".sv"),"Priority must be a string or number.")}else j(t===lp||t.isEmpty(),"priority of unexpected type.");j(t===lp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let CE;class nt{constructor(e,n=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rC(this.priorityNode_)}static set __childrenNodeConstructor(e){CE=e}static get __childrenNodeConstructor(){return CE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:le(e)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(j(r!==".priority"||ri(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bS(this.value_):e+=this.value_,this.lazyHash_=PS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nt.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=nt.VALUE_TYPE_ORDER.indexOf(n),s=nt.VALUE_TYPE_ORDER.indexOf(r);return j(i>=0,"Unknown leaf type: "+n),j(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let iC,sC;function U2(t){iC=t}function j2(t){sC=t}class z2 extends Eh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?po(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(Bi,new nt("[PRIORITY-POST]",sC))}makePost(e,n){const r=iC(e);return new ue(n,new nt("[PRIORITY-POST]",r))}toString(){return".priority"}}const We=new z2;/**
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
 */const B2=Math.log(2);class W2{constructor(e){const n=s=>parseInt(Math.log(s)/B2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tc=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let p,m;if(d===0)return null;if(d===1)return p=t[u],m=n?n(p):p,new st(m,p.node,st.BLACK,null,null);{const _=parseInt(d/2,10)+u,T=i(u,_),x=i(_+1,c);return p=t[_],m=n?n(p):p,new st(m,p.node,st.BLACK,T,x)}},s=function(u){let c=null,d=null,p=t.length;const m=function(T,x){const O=p-T,C=p;p-=T;const w=i(O+1,C),A=t[O],M=n?n(A):A;_(new st(M,A.node,x,null,w))},_=function(T){c?(c.left=T,c=T):(d=T,c=T)};for(let T=0;T<u.count;++T){const x=u.nextBitIsOne(),O=Math.pow(2,u.count-(T+1));x?m(O,st.BLACK):(m(O,st.BLACK),m(O,st.RED))}return d},o=new W2(t.length),l=s(o);return new Wt(r||e,l)};/**
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
 */let Dd;const ss={};class Zn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(ss&&We,"ChildrenNode.ts has not been loaded"),Dd=Dd||new Zn({".priority":ss},{".priority":We}),Dd}get(e){const n=Hs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Wt?n:null}hasIndex(e){return gr(this.indexSet_,e.toString())}addIndex(e,n){j(e!==Vs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ue.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Tc(r,e.getCompare()):l=ss;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=l,new Zn(d,c)}addToIndexes(e,n){const r=nc(this.indexes_,(i,s)=>{const o=Hs(this.indexSet_,s);if(j(o,"Missing index implementation for "+s),i===ss)if(o.isDefinedOn(e.node)){const l=[],u=n.getIterator(ue.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&l.push(c),c=u.getNext();return l.push(e),Tc(l,o.getCompare())}else return ss;else{const l=n.get(e.name);let u=i;return l&&(u=u.remove(new ue(e.name,l))),u.insert(e,e.node)}});return new Zn(r,this.indexSet_)}removeFromIndexes(e,n){const r=nc(this.indexes_,i=>{if(i===ss)return i;{const s=n.get(e.name);return s?i.remove(new ue(e.name,s)):i}});return new Zn(r,this.indexSet_)}}/**
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
 */let zo;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&rC(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zo||(zo=new ee(new Wt(dg),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zo}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zo:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ue(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?zo:this.priorityNode_;return new ee(i,o,s)}}updateChild(e,n){const r=le(e);if(r===null)return n;{j(le(e)!==".priority"||ri(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ke(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(We,(o,l)=>{n[o]=l.val(e),r++,s&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nC(this.getPriority().val())+":"),this.forEachChild(We,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":PS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ue(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ue.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_l?-1:0}withIndex(e){if(e===Vs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(We),i=n.getIterator(We);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vs?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $2 extends ee{constructor(){super(new Wt(dg),ee.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const _l=new $2;Object.defineProperties(ue,{MIN:{value:new ue(to,ee.EMPTY_NODE)},MAX:{value:new ue(Bi,_l)}});tC.__EMPTY_NODE=ee.EMPTY_NODE;nt.__childrenNodeConstructor=ee;F2(_l);j2(_l);/**
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
 */const q2=!0;function ct(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new nt(n,ct(e))}if(!(t instanceof Array)&&q2){const n=[];let r=!1;if(Gt(t,(o,l)=>{if(o.substring(0,1)!=="."){const u=ct(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ue(o,u)))}}),n.length===0)return ee.EMPTY_NODE;const s=Tc(n,V2,o=>o.name,dg);if(r){const o=Tc(n,We.getCompare());return new ee(s,ct(e),new Zn({".priority":o},{".priority":We}))}else return new ee(s,ct(e),Zn.Default)}else{let n=ee.EMPTY_NODE;return Gt(t,(r,i)=>{if(gr(t,r)&&r.substring(0,1)!=="."){const s=ct(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ct(e))}}U2(ct);/**
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
 */class H2 extends Eh{constructor(e){super(),this.indexPath_=e,j(!ce(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?po(e.name,n.name):s}makePost(e,n){const r=ct(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new ue(n,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,_l);return new ue(Bi,e)}toString(){return JS(this.indexPath_,0).join("/")}}/**
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
 */class K2 extends Eh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?po(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const r=ct(e);return new ue(n,r)}toString(){return".value"}}const G2=new K2;/**
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
 */function oC(t){return{type:"value",snapshotNode:t}}function no(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ha(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ka(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Q2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class fg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ha(n,l)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(no(n,r)):o.trackChildChange(Ka(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(We,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ha(i,s))}),n.isLeafNode()||n.forEachChild(We,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ka(i,s,o))}else r.trackChildChange(no(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ga{constructor(e){this.indexedFilter_=new fg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ga.getStartPost_(e),this.endPost_=Ga.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ue(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ee.EMPTY_NODE);const s=this;return n.forEachChild(We,(o,l)=>{s.matches(new ue(o,l))||(i=i.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Y2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ga(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ue(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ee.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ee.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,_)=>p(_,m)}else o=this.index_.getCompare();const l=e;j(l.numChildren()===this.limit_,"");const u=new ue(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(l.hasChild(n)){const p=l.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||l.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const _=m==null?1:o(m,u);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Ka(n,r,p)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ha(n,p));const x=l.updateImmediateChild(n,ee.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(no(m.name,m.node)),x.updateImmediateChild(m.name,m.node)):x}}else return r.isEmpty()?e:d&&o(c,u)>=0?(s!=null&&(s.trackChildChange(Ha(c.name,c.node)),s.trackChildChange(no(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,ee.EMPTY_NODE)):e}}/**
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
 */class pg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:to}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new pg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function X2(t){return t.loadsAllData()?new fg(t.getIndex()):t.hasLimit()?new Y2(t):new Ga(t)}function RE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===G2?n="$value":t.index_===Vs?n="$key":(j(t.index_ instanceof H2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ot(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ot(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ot(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ot(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ot(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function AE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
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
 */class Ic extends QS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=gl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ic.getListenId_(e,r),l={};this.listens_[o]=l;const u=RE(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let p=d;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(s,p,!1,r),Hs(this.listens_,o)===l){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Ic.getListenId_(e,n);delete this.listens_[r]}get(e){const n=RE(e._queryParams),r=e._path.toString(),i=new Xc;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lo(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=La(l.responseText)}catch{Kt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&Kt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class J2{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Sc(){return{value:null,children:new Map}}function aC(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,Sc());const i=t.children.get(r);e=ke(e),aC(i,e,n)}}function up(t,e,n){t.value!==null?n(e,t.value):Z2(t,(r,i)=>{const s=new Re(e.toString()+"/"+r);up(i,s,n)})}function Z2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class eM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const kE=10*1e3,tM=30*1e3,nM=5*60*1e3;class rM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new eM(e);const r=kE+(tM-kE)*Math.random();ma(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Gt(e,(i,s)=>{s>0&&gr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ma(this.reportStats_.bind(this),Math.floor(Math.random()*2*nM))}}/**
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
 */var wn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wn||(wn={}));function lC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Cc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wn.ACK_USER_WRITE,this.source=lC()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Re(e));return new Cc(ye(),n,this.revert)}}else return j(le(this.path)===e,"operationForChild called for unrelated child."),new Cc(ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class Qa{constructor(e,n){this.source=e,this.path=n,this.type=wn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Qa(this.source,ye()):new Qa(this.source,ke(this.path))}}/**
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
 */class Wi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wn.OVERWRITE}operationForChild(e){return ce(this.path)?new Wi(this.source,ye(),this.snap.getImmediateChild(e)):new Wi(this.source,ke(this.path),this.snap)}}/**
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
 */class Ya{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Re(e));return n.isEmpty()?null:n.value?new Wi(this.source,ye(),n.value):new Ya(this.source,ye(),n)}else return j(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ya(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $i{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class iM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sM(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Q2(o.childName,o.snapshotNode))}),Bo(t,i,"child_removed",e,r,n),Bo(t,i,"child_added",e,r,n),Bo(t,i,"child_moved",s,r,n),Bo(t,i,"child_changed",e,r,n),Bo(t,i,"value",e,r,n),i}function Bo(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,u)=>aM(t,l,u)),o.forEach(l=>{const u=oM(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(u,t.query_))})})}function oM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aM(t,e,n){if(e.childName==null||n.childName==null)throw ao("Should only compare child_ events.");const r=new ue(e.childName,e.snapshotNode),i=new ue(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function wh(t,e){return{eventCache:t,serverCache:e}}function ga(t,e,n,r){return wh(new $i(e,n,r),t.serverCache)}function uC(t,e,n,r){return wh(t.eventCache,new $i(e,n,r))}function cp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Od;const lM=()=>(Od||(Od=new Wt(KO)),Od);class be{constructor(e,n=lM()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return Gt(e,(r,i)=>{n=n.set(new Re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(ce(e))return null;{const r=le(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ke(e),n);return s!=null?{path:Ze(new Re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(ke(e)):new be(null)}}set(e,n){if(ce(e))return new be(n,this.children);{const r=le(e),s=(this.children.get(r)||new be(null)).set(ke(e),n),o=this.children.insert(r,s);return new be(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const i=r.remove(ke(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new be(null):new be(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(ke(e)):null}}setTree(e,n){if(ce(e))return n;{const r=le(e),s=(this.children.get(r)||new be(null)).setTree(ke(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new be(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ze(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const s=le(e),o=this.children.get(s);return o?o.findOnPath_(ke(e),Ze(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=le(e),s=this.children.get(i);return s?s.foreachOnPath_(ke(e),Ze(n,i),r):new be(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ze(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Sn{constructor(e){this.writeTree_=e}static empty(){return new Sn(new be(null))}}function _a(t,e,n){if(ce(e))return new Sn(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Bt(i,e);return s=s.updateChild(o,n),new Sn(t.writeTree_.set(i,s))}else{const i=new be(n),s=t.writeTree_.setTree(e,i);return new Sn(s)}}}function PE(t,e,n){let r=t;return Gt(n,(i,s)=>{r=_a(r,Ze(e,i),s)}),r}function xE(t,e){if(ce(e))return Sn.empty();{const n=t.writeTree_.setTree(e,new be(null));return new Sn(n)}}function hp(t,e){return Ji(t,e)!=null}function Ji(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bt(n.path,e)):null}function NE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(r,i)=>{e.push(new ue(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ue(r,i.value))}),e}function Yr(t,e){if(ce(e))return t;{const n=Ji(t,e);return n!=null?new Sn(new be(n)):new Sn(t.writeTree_.subtree(e))}}function dp(t){return t.writeTree_.isEmpty()}function ro(t,e){return cC(ye(),t.writeTree_,e)}function cC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(j(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=cC(Ze(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ze(t,".priority"),r)),n}}/**
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
 */function _g(t,e){return pC(e,t)}function uM(t,e,n,r,i){j(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=_a(t.visibleWrites,e,n)),t.lastWriteId=r}function cM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function hM(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&dM(l,r.path)?i=!1:En(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return fM(t),!0;if(r.snap)t.visibleWrites=xE(t.visibleWrites,r.path);else{const l=r.children;Gt(l,u=>{t.visibleWrites=xE(t.visibleWrites,Ze(r.path,u))})}return!0}else return!1}function dM(t,e){if(t.snap)return En(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&En(Ze(t.path,n),e))return!0;return!1}function fM(t){t.visibleWrites=hC(t.allWrites,pM,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pM(t){return t.visible}function hC(t,e,n){let r=Sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)En(n,o)?(l=Bt(n,o),r=_a(r,l,s.snap)):En(o,n)&&(l=Bt(o,n),r=_a(r,ye(),s.snap.getChild(l)));else if(s.children){if(En(n,o))l=Bt(n,o),r=PE(r,l,s.children);else if(En(o,n))if(l=Bt(o,n),ce(l))r=PE(r,ye(),s.children);else{const u=Hs(s.children,le(l));if(u){const c=u.getChild(ke(l));r=_a(r,ye(),c)}}}else throw ao("WriteRecord should have .snap or .children")}}return r}function dC(t,e,n,r,i){if(!r&&!i){const s=Ji(t.visibleWrites,e);if(s!=null)return s;{const o=Yr(t.visibleWrites,e);if(dp(o))return n;if(n==null&&!hp(o,ye()))return null;{const l=n||ee.EMPTY_NODE;return ro(o,l)}}}else{const s=Yr(t.visibleWrites,e);if(!i&&dp(s))return n;if(!i&&n==null&&!hp(s,ye()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(En(c.path,e)||En(e,c.path))},l=hC(t.allWrites,o,e),u=n||ee.EMPTY_NODE;return ro(l,u)}}}function mM(t,e,n){let r=ee.EMPTY_NODE;const i=Ji(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(We,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Yr(t.visibleWrites,e);return n.forEachChild(We,(o,l)=>{const u=ro(Yr(s,new Re(o)),l);r=r.updateImmediateChild(o,u)}),NE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Yr(t.visibleWrites,e);return NE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gM(t,e,n,r,i){j(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ze(e,n);if(hp(t.visibleWrites,s))return null;{const o=Yr(t.visibleWrites,s);return dp(o)?i.getChild(n):ro(o,i.getChild(n))}}function _M(t,e,n,r){const i=Ze(e,n),s=Ji(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Yr(t.visibleWrites,i);return ro(o,r.getNode().getImmediateChild(n))}else return null}function yM(t,e){return Ji(t.visibleWrites,e)}function vM(t,e,n,r,i,s,o){let l;const u=Yr(t.visibleWrites,e),c=Ji(u,ye());if(c!=null)l=c;else if(n!=null)l=ro(u,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],p=o.getCompare(),m=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=m.getNext();for(;_&&d.length<i;)p(_,r)!==0&&d.push(_),_=m.getNext();return d}else return[]}function EM(){return{visibleWrites:Sn.empty(),allWrites:[],lastWriteId:-1}}function Rc(t,e,n,r){return dC(t.writeTree,t.treePath,e,n,r)}function yg(t,e){return mM(t.writeTree,t.treePath,e)}function bE(t,e,n,r){return gM(t.writeTree,t.treePath,e,n,r)}function Ac(t,e){return yM(t.writeTree,Ze(t.treePath,e))}function wM(t,e,n,r,i,s){return vM(t.writeTree,t.treePath,e,n,r,i,s)}function vg(t,e,n){return _M(t.writeTree,t.treePath,e,n)}function fC(t,e){return pC(Ze(t.treePath,e),t.writeTree)}function pC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class TM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ka(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ha(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,no(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ka(r,e.snapshotNode,i.oldSnap));else throw ao("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class IM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const mC=new IM;class Eg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qi(this.viewCache_),s=wM(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function SM(t){return{filter:t}}function CM(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function RM(t,e,n,r,i){const s=new TM;let o,l;if(n.type===wn.OVERWRITE){const c=n;c.source.fromUser?o=fp(t,e,c.path,c.snap,r,i,s):(j(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=kc(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===wn.MERGE){const c=n;c.source.fromUser?o=kM(t,e,c.path,c.children,r,i,s):(j(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=pp(t,e,c.path,c.children,r,i,l,s))}else if(n.type===wn.ACK_USER_WRITE){const c=n;c.revert?o=NM(t,e,c.path,r,i,s):o=PM(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===wn.LISTEN_COMPLETE)o=xM(t,e,n.path,r,s);else throw ao("Unknown operation type: "+n.type);const u=s.getChanges();return AM(e,o,u),{viewCache:o,changes:u}}function AM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(oC(cp(e)))}}function gC(t,e,n,r,i,s){const o=e.eventCache;if(Ac(r,n)!=null)return e;{let l,u;if(ce(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qi(e),d=c instanceof ee?c:ee.EMPTY_NODE,p=yg(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const c=Rc(r,qi(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=le(n);if(c===".priority"){j(ri(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const p=bE(r,n,d,u);p!=null?l=t.filter.updatePriority(d,p):l=o.getNode()}else{const d=ke(n);let p;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=bE(r,n,o.getNode(),u);m!=null?p=o.getNode().getImmediateChild(c).updateChild(d,m):p=o.getNode().getImmediateChild(c)}else p=vg(r,c,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),c,p,d,i,s):l=o.getNode()}}return ga(e,l,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function kc(t,e,n,r,i,s,o,l){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(ce(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),_,null)}else{const _=le(n);if(!u.isCompleteForPath(n)&&ri(n)>1)return e;const T=ke(n),O=u.getNode().getImmediateChild(_).updateChild(T,r);_===".priority"?c=d.updatePriority(u.getNode(),O):c=d.updateChild(u.getNode(),_,O,T,mC,null)}const p=uC(e,c,u.isFullyInitialized()||ce(n),d.filtersNodes()),m=new Eg(i,p,s);return gC(t,p,n,i,m,l)}function fp(t,e,n,r,i,s,o){const l=e.eventCache;let u,c;const d=new Eg(i,e,s);if(ce(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=ga(e,c,!0,t.filter.filtersNodes());else{const p=le(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=ga(e,c,l.isFullyInitialized(),l.isFiltered());else{const m=ke(n),_=l.getNode().getImmediateChild(p);let T;if(ce(m))T=r;else{const x=d.getCompleteChild(p);x!=null?XS(m)===".priority"&&x.getChild(ZS(m)).isEmpty()?T=x:T=x.updateChild(m,r):T=ee.EMPTY_NODE}if(_.equals(T))u=e;else{const x=t.filter.updateChild(l.getNode(),p,T,m,d,o);u=ga(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function DE(t,e){return t.eventCache.isCompleteForChild(e)}function kM(t,e,n,r,i,s,o){let l=e;return r.foreach((u,c)=>{const d=Ze(n,u);DE(e,le(d))&&(l=fp(t,l,d,c,i,s,o))}),r.foreach((u,c)=>{const d=Ze(n,u);DE(e,le(d))||(l=fp(t,l,d,c,i,s,o))}),l}function OE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function pp(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ce(n)?c=r:c=new be(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((p,m)=>{if(d.hasChild(p)){const _=e.serverCache.getNode().getImmediateChild(p),T=OE(t,_,m);u=kc(t,u,new Re(p),T,i,s,o,l)}}),c.children.inorderTraversal((p,m)=>{const _=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!d.hasChild(p)&&!_){const T=e.serverCache.getNode().getImmediateChild(p),x=OE(t,T,m);u=kc(t,u,new Re(p),x,i,s,o,l)}}),u}function PM(t,e,n,r,i,s,o){if(Ac(i,n)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ce(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return kc(t,e,n,u.getNode().getChild(n),i,s,l,o);if(ce(n)){let c=new be(null);return u.getNode().forEachChild(Vs,(d,p)=>{c=c.set(new Re(d),p)}),pp(t,e,n,c,i,s,l,o)}else return e}else{let c=new be(null);return r.foreach((d,p)=>{const m=Ze(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),pp(t,e,n,c,i,s,l,o)}}function xM(t,e,n,r,i){const s=e.serverCache,o=uC(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return gC(t,o,n,r,mC,i)}function NM(t,e,n,r,i,s){let o;if(Ac(r,n)!=null)return e;{const l=new Eg(r,e,i),u=e.eventCache.getNode();let c;if(ce(n)||le(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Rc(r,qi(e));else{const p=e.serverCache.getNode();j(p instanceof ee,"serverChildren would be complete if leaf node"),d=yg(r,p)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=le(n);let p=vg(r,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=u.getImmediateChild(d)),p!=null?c=t.filter.updateChild(u,d,p,ke(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,ee.EMPTY_NODE,ke(n),l,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rc(r,qi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ac(r,ye())!=null,ga(e,c,o,t.filter.filtersNodes())}}/**
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
 */class bM{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new fg(r.getIndex()),s=X2(r);this.processor_=SM(s);const o=n.serverCache,l=n.eventCache,u=i.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ee.EMPTY_NODE,l.getNode(),null),d=new $i(u,o.isFullyInitialized(),i.filtersNodes()),p=new $i(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=wh(p,d),this.eventGenerator_=new iM(this.query_)}get query(){return this.query_}}function DM(t){return t.viewCache_.serverCache.getNode()}function OM(t,e){const n=qi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function ME(t){return t.eventRegistrations_.length===0}function MM(t,e){t.eventRegistrations_.push(e)}function LE(t,e,n){const r=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function VE(t,e,n,r){e.type===wn.MERGE&&e.source.queryId!==null&&(j(qi(t.viewCache_),"We should always have a full cache before handling merges"),j(cp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=RM(t.processor_,i,e,n,r);return CM(t.processor_,s.viewCache),j(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,_C(t,s.changes,s.viewCache.eventCache.getNode(),null)}function LM(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(We,(s,o)=>{r.push(no(s,o))}),n.isFullyInitialized()&&r.push(oC(n.getNode())),_C(t,r,n.getNode(),e)}function _C(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return sM(t.eventGenerator_,e,n,i)}/**
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
 */let Pc;class VM{constructor(){this.views=new Map}}function FM(t){j(!Pc,"__referenceConstructor has already been defined"),Pc=t}function UM(){return j(Pc,"Reference.ts has not been loaded"),Pc}function jM(t){return t.views.size===0}function wg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return j(s!=null,"SyncTree gave us an op for an invalid query."),VE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(VE(o,e,n,r));return s}}function zM(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Rc(n,i?r:null),u=!1;l?u=!0:r instanceof ee?(l=yg(n,r),u=!1):(l=ee.EMPTY_NODE,u=!1);const c=wh(new $i(l,u,!1),new $i(r,i,!1));return new bM(e,c)}return o}function BM(t,e,n,r,i,s){const o=zM(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),MM(o,n),LM(o,n)}function WM(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=ii(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(LE(c,n,r)),ME(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(LE(u,n,r)),ME(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return l&&!ii(t)&&s.push(new(UM())(e._repo,e._path)),{removed:s,events:o}}function yC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Fs(t,e){let n=null;for(const r of t.views.values())n=n||OM(r,e);return n}function vC(t,e){if(e._queryParams.loadsAllData())return Th(t);{const r=e._queryIdentifier;return t.views.get(r)}}function EC(t,e){return vC(t,e)!=null}function ii(t){return Th(t)!=null}function Th(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let xc;function $M(t){j(!xc,"__referenceConstructor has already been defined"),xc=t}function qM(){return j(xc,"Reference.ts has not been loaded"),xc}let HM=1;class FE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=EM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wC(t,e,n,r,i){return uM(t.pendingWriteTree_,e,n,r,i),i?yl(t,new Wi(lC(),e,n)):[]}function Ri(t,e,n=!1){const r=cM(t.pendingWriteTree_,e);if(hM(t.pendingWriteTree_,e)){let s=new be(null);return r.snap!=null?s=s.set(ye(),!0):Gt(r.children,o=>{s=s.set(new Re(o),!0)}),yl(t,new Cc(r.path,s,n))}else return[]}function Ih(t,e,n){return yl(t,new Wi(mg(),e,n))}function KM(t,e,n){const r=be.fromObject(n);return yl(t,new Ya(mg(),e,r))}function GM(t,e){return yl(t,new Qa(mg(),e))}function QM(t,e,n){const r=Ig(t,n);if(r){const i=Sg(r),s=i.path,o=i.queryId,l=Bt(s,e),u=new Qa(gg(o),l);return Cg(t,s,u)}else return[]}function mp(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||EC(o,e))){const u=WM(o,e,n,r);jM(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(l=u.events,!i){const d=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(m,_)=>ii(_));if(d&&!p){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const _=JM(m);for(let T=0;T<_.length;++T){const x=_[T],O=x.query,C=SC(t,x);t.listenProvider_.startListening(ya(O),Nc(t,O),C.hashFn,C.onComplete)}}}!p&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(ya(e),null):c.forEach(m=>{const _=t.queryToTagMap.get(Sh(m));t.listenProvider_.stopListening(ya(m),_)}))}ZM(t,c)}return l}function YM(t,e,n,r){const i=Ig(t,r);if(i!=null){const s=Sg(i),o=s.path,l=s.queryId,u=Bt(o,e),c=new Wi(gg(l),u,n);return Cg(t,o,c)}else return[]}function XM(t,e,n,r){const i=Ig(t,r);if(i){const s=Sg(i),o=s.path,l=s.queryId,u=Bt(o,e),c=be.fromObject(n),d=new Ya(gg(l),u,c);return Cg(t,o,d)}else return[]}function UE(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,_)=>{const T=Bt(m,i);s=s||Fs(_,T),o=o||ii(_)});let l=t.syncPointTree_.get(i);l?(o=o||ii(l),s=s||Fs(l,ye())):(l=new VM,t.syncPointTree_=t.syncPointTree_.set(i,l));let u;s!=null?u=!0:(u=!1,s=ee.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,T)=>{const x=Fs(T,ye());x&&(s=s.updateImmediateChild(_,x))}));const c=EC(l,e);if(!c&&!e._queryParams.loadsAllData()){const m=Sh(e);j(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const _=eL();t.queryToTagMap.set(m,_),t.tagToQueryMap.set(_,m)}const d=_g(t.pendingWriteTree_,i);let p=BM(l,e,n,d,s,u);if(!c&&!o&&!r){const m=vC(l,e);p=p.concat(tL(t,e,m))}return p}function Tg(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const u=Bt(o,e),c=Fs(l,u);if(c)return c});return dC(i,e,s,n,!0)}function yl(t,e){return TC(e,t.syncPointTree_,null,_g(t.pendingWriteTree_,ye()))}function TC(t,e,n,r){if(ce(t.path))return IC(t,e,n,r);{const i=e.get(ye());n==null&&i!=null&&(n=Fs(i,ye()));let s=[];const o=le(t.path),l=t.operationForChild(o),u=e.children.get(o);if(u&&l){const c=n?n.getImmediateChild(o):null,d=fC(r,o);s=s.concat(TC(l,u,c,d))}return i&&(s=s.concat(wg(i,t,r,n))),s}}function IC(t,e,n,r){const i=e.get(ye());n==null&&i!=null&&(n=Fs(i,ye()));let s=[];return e.children.inorderTraversal((o,l)=>{const u=n?n.getImmediateChild(o):null,c=fC(r,o),d=t.operationForChild(o);d&&(s=s.concat(IC(d,l,u,c)))}),i&&(s=s.concat(wg(i,t,r,n))),s}function SC(t,e){const n=e.query,r=Nc(t,n);return{hashFn:()=>(DM(e)||ee.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?QM(t,n._path,r):GM(t,n._path);{const s=YO(i,n);return mp(t,n,null,s)}}}}function Nc(t,e){const n=Sh(e);return t.queryToTagMap.get(n)}function Sh(t){return t._path.toString()+"$"+t._queryIdentifier}function Ig(t,e){return t.tagToQueryMap.get(e)}function Sg(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Re(t.substr(0,e))}}function Cg(t,e,n){const r=t.syncPointTree_.get(e);j(r,"Missing sync point for query tag that we're tracking");const i=_g(t.pendingWriteTree_,e);return wg(r,n,i,null)}function JM(t){return t.fold((e,n,r)=>{if(n&&ii(n))return[Th(n)];{let i=[];return n&&(i=yC(n)),Gt(r,(s,o)=>{i=i.concat(o)}),i}})}function ya(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(qM())(t._repo,t._path):t}function ZM(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Sh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function eL(){return HM++}function tL(t,e,n){const r=e._path,i=Nc(t,e),s=SC(t,n),o=t.listenProvider_.startListening(ya(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)j(!ii(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((c,d,p)=>{if(!ce(c)&&d&&ii(d))return[Th(d).query];{let m=[];return d&&(m=m.concat(yC(d).map(_=>_.query))),Gt(p,(_,T)=>{m=m.concat(T)}),m}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(ya(d),Nc(t,d))}}return o}/**
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
 */class Rg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rg(n)}node(){return this.node_}}class Ag{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ze(this.path_,e);return new Ag(this.syncTree_,n)}node(){return Tg(this.syncTree_,this.path_)}}const nL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jE=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return iL(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},iL=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&j(!1,"Unexpected increment value: "+r);const i=e.node();if(j(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},sL=function(t,e,n,r){return kg(e,new Ag(n,t),r)},CC=function(t,e,n){return kg(t,new Rg(e),n)};function kg(t,e,n){const r=t.getPriority().val(),i=jE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=jE(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new nt(l,ct(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new nt(i))),o.forEachChild(We,(l,u)=>{const c=kg(u,e.getImmediateChild(l),n);c!==u&&(s=s.updateImmediateChild(l,c))}),s}}/**
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
 */class Pg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function xg(t,e){let n=e instanceof Re?e:new Re(e),r=t,i=le(n);for(;i!==null;){const s=Hs(r.node.children,i)||{children:{},childCount:0};r=new Pg(i,r,s),n=ke(n),i=le(n)}return r}function go(t){return t.node.value}function RC(t,e){t.node.value=e,gp(t)}function AC(t){return t.node.childCount>0}function oL(t){return go(t)===void 0&&!AC(t)}function Ch(t,e){Gt(t.node.children,(n,r)=>{e(new Pg(n,t,r))})}function kC(t,e,n,r){n&&e(t),Ch(t,i=>{kC(i,e,!0)})}function aL(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vl(t){return new Re(t.parent===null?t.name:vl(t.parent)+"/"+t.name)}function gp(t){t.parent!==null&&lL(t.parent,t.name,t)}function lL(t,e,n){const r=oL(n),i=gr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,gp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gp(t))}/**
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
 */const uL=/[\[\].#$\/\u0000-\u001F\u007F]/,cL=/[\[\].#$\u0000-\u001F\u007F]/,Md=10*1024*1024,PC=function(t){return typeof t=="string"&&t.length!==0&&!uL.test(t)},xC=function(t){return typeof t=="string"&&t.length!==0&&!cL.test(t)},hL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),xC(t)},NC=function(t,e,n,r){r&&e===void 0||Ng(pm(t,"value"),e,n)},Ng=function(t,e,n){const r=n instanceof Re?new P2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vi(r));if(typeof e=="function")throw new Error(t+"contains a function "+vi(r)+" with contents = "+e.toString());if(xS(e))throw new Error(t+"contains "+e.toString()+" "+vi(r));if(typeof e=="string"&&e.length>Md/3&&Jc(e)>Md)throw new Error(t+"contains a string greater than "+Md+" utf8 bytes "+vi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Gt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!PC(o)))throw new Error(t+" contains an invalid key ("+o+") "+vi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);x2(r,o),Ng(t,l,r),N2(r)}),i&&s)throw new Error(t+' contains ".value" child '+vi(r)+" in addition to actual children.")}},bC=function(t,e,n,r){if(!xC(n))throw new Error(pm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},dL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bC(t,e,n)},DC=function(t,e){if(le(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!PC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!hL(n))throw new Error(pm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class pL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bg(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!cg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function OC(t,e,n){bg(t,n),MC(t,r=>cg(r,e))}function fr(t,e,n){bg(t,n),MC(t,r=>En(r,e)||En(e,r))}function MC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(mL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();pa&&Ct("event: "+n.toString()),mo(r)}}}/**
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
 */const gL="repo_interrupt",_L=25;class yL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sc(),this.transactionQueueTree_=new Pg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vL(t,e,n){if(t.stats_=lg(t.repoInfo_),t.forceRestClient_||e2())t.server_=new Ic(t.repoInfo_,(r,i,s,o)=>{zE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>BE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rr(t.repoInfo_,e,(r,i,s,o)=>{zE(t,r,i,s,o)},r=>{BE(t,r)},r=>{EL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=s2(t.repoInfo_,()=>new rM(t.stats_,t.server_)),t.infoData_=new J2,t.infoSyncTree_=new FE({startListening:(r,i,s,o)=>{let l=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(l=Ih(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Og(t,"connected",!1),t.serverSyncTree_=new FE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,u)=>{const c=o(l,u);fr(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function LC(t){const n=t.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Dg(t){return nL({timestamp:LC(t)})}function zE(t,e,n,r,i){t.dataUpdateCount++;const s=new Re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=nc(n,c=>ct(c));o=XM(t.serverSyncTree_,s,u,i)}else{const u=ct(n);o=YM(t.serverSyncTree_,s,u,i)}else if(r){const u=nc(n,c=>ct(c));o=KM(t.serverSyncTree_,s,u)}else{const u=ct(n);o=Ih(t.serverSyncTree_,s,u)}let l=s;o.length>0&&(l=Rh(t,s)),fr(t.eventQueue_,l,o)}function BE(t,e){Og(t,"connected",e),e===!1&&TL(t)}function EL(t,e){Gt(e,(n,r)=>{Og(t,n,r)})}function Og(t,e,n){const r=new Re("/.info/"+e),i=ct(n);t.infoData_.updateSnapshot(r,i);const s=Ih(t.infoSyncTree_,r,i);fr(t.eventQueue_,r,s)}function VC(t){return t.nextWriteId_++}function wL(t,e,n,r,i){Mg(t,"set",{path:e.toString(),value:n,priority:r});const s=Dg(t),o=ct(n,r),l=Tg(t.serverSyncTree_,e),u=CC(o,l,s),c=VC(t),d=wC(t.serverSyncTree_,e,u,c,!0);bg(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(m,_)=>{const T=m==="ok";T||Kt("set at "+e+" failed: "+m);const x=Ri(t.serverSyncTree_,c,!T);fr(t.eventQueue_,e,x),RL(t,i,m,_)});const p=BC(t,e);Rh(t,p),fr(t.eventQueue_,p,[])}function TL(t){Mg(t,"onDisconnectEvents");const e=Dg(t),n=Sc();up(t.onDisconnect_,ye(),(i,s)=>{const o=sL(i,s,t.serverSyncTree_,e);aC(n,i,o)});let r=[];up(n,ye(),(i,s)=>{r=r.concat(Ih(t.serverSyncTree_,i,s));const o=BC(t,i);Rh(t,o)}),t.onDisconnect_=Sc(),fr(t.eventQueue_,ye(),r)}function IL(t,e,n){let r;le(e._path)===".info"?r=UE(t.infoSyncTree_,e,n):r=UE(t.serverSyncTree_,e,n),OC(t.eventQueue_,e._path,r)}function SL(t,e,n){let r;le(e._path)===".info"?r=mp(t.infoSyncTree_,e,n):r=mp(t.serverSyncTree_,e,n),OC(t.eventQueue_,e._path,r)}function CL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gL)}function Mg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ct(n,...e)}function RL(t,e,n,r){e&&mo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function FC(t,e,n){return Tg(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function Lg(t,e=t.transactionQueueTree_){if(e||Ah(t,e),go(e)){const n=jC(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&AL(t,vl(e),n)}else AC(e)&&Ch(e,n=>{Lg(t,n)})}function AL(t,e,n){const r=n.map(c=>c.currentWriteId),i=FC(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];j(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=Bt(e,d.path);s=s.updateChild(p,d.currentOutputSnapshotRaw)}const l=s.val(!0),u=e;t.server_.put(u.toString(),l,c=>{Mg(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const p=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(Ri(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&p.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Ah(t,xg(t.transactionQueueTree_,e)),Lg(t,t.transactionQueueTree_),fr(t.eventQueue_,e,d);for(let m=0;m<p.length;m++)mo(p[m])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Kt("transaction at "+u.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}Rh(t,e)}},o)}function Rh(t,e){const n=UC(t,e),r=vl(n),i=jC(t,n);return kL(t,i,r),r}function kL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],c=Bt(n,u.path);let d=!1,p;if(j(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,p=u.abortReason,i=i.concat(Ri(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=_L)d=!0,p="maxretry",i=i.concat(Ri(t.serverSyncTree_,u.currentWriteId,!0));else{const m=FC(t,u.path,o);u.currentInputSnapshot=m;const _=e[l].update(m.val());if(_!==void 0){Ng("transaction failed: Data returned ",_,u.path);let T=ct(_);typeof _=="object"&&_!=null&&gr(_,".priority")||(T=T.updatePriority(m.getPriority()));const O=u.currentWriteId,C=Dg(t),w=CC(T,m,C);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=w,u.currentWriteId=VC(t),o.splice(o.indexOf(O),1),i=i.concat(wC(t.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),i=i.concat(Ri(t.serverSyncTree_,O,!0))}else d=!0,p="nodata",i=i.concat(Ri(t.serverSyncTree_,u.currentWriteId,!0))}fr(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(p),!1,null))))}Ah(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)mo(r[l]);Lg(t,t.transactionQueueTree_)}function UC(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&go(r)===void 0;)r=xg(r,n),e=ke(e),n=le(e);return r}function jC(t,e){const n=[];return zC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zC(t,e,n){const r=go(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ch(e,i=>{zC(t,i,n)})}function Ah(t,e){const n=go(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,RC(e,n.length>0?n:void 0)}Ch(e,r=>{Ah(t,r)})}function BC(t,e){const n=vl(UC(t,e)),r=xg(t.transactionQueueTree_,e);return aL(r,i=>{Ld(t,i)}),Ld(t,r),kC(r,i=>{Ld(t,i)}),n}function Ld(t,e){const n=go(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ri(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?RC(e,void 0):n.length=s+1,fr(t.eventQueue_,vl(e),i);for(let o=0;o<r.length;o++)mo(r[o])}}/**
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
 */function PL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function xL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Kt(`Invalid query segment '${n}' in query '${t}'`)}return e}const WE=function(t,e){const n=NL(t),r=n.namespace;n.domain==="firebase.com"&&dr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&dr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||qO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new BS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Re(n.pathString)}},NL=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(d,p)),d<p&&(i=PL(t.substring(d,p)));const m=xL(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const $E="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bL=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=$E.charAt(n%64),n=Math.floor(n/64);j(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$E.charAt(e[i]);return j(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class DL{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ot(this.snapshot.exportVal())}}class OL{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ML{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Vg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:XS(this._path)}get ref(){return new ci(this._repo,this._path)}get _queryIdentifier(){const e=AE(this._queryParams),n=og(e);return n==="{}"?"default":n}get _queryObject(){return AE(this._queryParams)}isEqual(e){if(e=Oe(e),!(e instanceof Vg))return!1;const n=this._repo===e._repo,r=cg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+k2(this._path)}}class ci extends Vg{constructor(e,n){super(e,n,new pg,!1)}get parent(){const e=ZS(this._path);return e===null?null:new ci(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Re(e),r=Xa(this.ref,e);return new bc(this._node.getChild(n),r,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new bc(i,Xa(this.ref,r),We)))}hasChild(e){const n=new Re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sr(t,e){return t=Oe(t),t._checkNotDeleted("ref"),e!==void 0?Xa(t._root,e):t._root}function Xa(t,e){return t=Oe(t),le(t._path)===null?dL("child","path",e):bC("child","path",e),new ci(t._repo,Ze(t._path,e))}function Vd(t,e){t=Oe(t),DC("push",t._path),NC("push",e,t._path,!0);const n=LC(t._repo),r=bL(n),i=Xa(t,r),s=Xa(t,r);let o;return e!=null?o=hs(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function hs(t,e){t=Oe(t),DC("set",t._path),NC("set",e,t._path,!1);const n=new Xc;return wL(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Fg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new DL("value",this,new bc(e.snapshotNode,new ci(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new OL(this,e,n):null}matches(e){return e instanceof Fg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function LL(t,e,n,r,i){const s=new ML(n,void 0),o=new Fg(s);return IL(t._repo,t,o),()=>SL(t._repo,t,o)}function qE(t,e,n,r){return LL(t,"value",e)}FM(ci);$M(ci);/**
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
 */const VL="FIREBASE_DATABASE_EMULATOR_HOST",_p={};let FL=!1;function UL(t,e,n,r){t.repoInfo_=new BS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function jL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||dr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ct("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=WE(s,i),l=o.repoInfo,u;typeof process<"u"&&uE&&(u=uE[VL]),u?(s=`http://${u}?ns=${l.namespace}`,o=WE(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new n2(t.name,t.options,e);fL("Invalid Firebase Database URL",o),ce(o.path)||dr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=BL(l,t,c,new t2(t.name,n));return new WL(d,t)}function zL(t,e){const n=_p[e];(!n||n[t.key]!==t)&&dr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),CL(t),delete n[t.key]}function BL(t,e,n,r){let i=_p[e.name];i||(i={},_p[e.name]=i);let s=i[t.toURLString()];return s&&dr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new yL(t,FL,n,r),i[t.toURLString()]=s,s}class WL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ci(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&dr("Cannot call "+e+" on a deleted database.")}}function $L(t=gm(),e){const n=eh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=gT("database");r&&qL(n,...r)}return n}function qL(t,e,n,r={}){t=Oe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&dr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&dr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ku(ku.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:vT(r.mockUserToken,t.app.options.projectId);s=new ku(o)}UL(i,e,n,s)}/**
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
 */function HL(t){UO(Gi),Mi(new Zr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return jL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Dn(cE,hE,t),Dn(cE,hE,"esm2017")}rr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};HL();var KL="firebase",GL="10.14.1";/**
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
 */Dn(KL,GL,"app");const QL={apiKey:"AIzaSyAEm1IYop7C83WEyX4hqZ7qyTkFTrRtRUQ",authDomain:"cumsa-market-675fb.firebaseapp.com",databaseURL:"https://cumsa-market-675fb-default-rtdb.firebaseio.com",projectId:"cumsa-market-675fb",storageBucket:"cumsa-market-675fb.firebasestorage.app",messagingSenderId:"311185515501",appId:"1:311185515501:web:17bdd879ad871b3000bde4"},Ug=ST(QL),Dc=LN(Ug),Vr=SO(Ug),Cr=$L(Ug),Pu=300,HE=t=>{const e=Math.max(...t),n=t.reduce((r,i)=>r+Math.exp((i-e)/Pu),0);return Pu*(Math.log(n)+e/Pu)},gn=t=>{const e=Math.max(...t),n=t.map(i=>Math.exp((i-e)/Pu)),r=n.reduce((i,s)=>i+s,0);return n.map(i=>i/r)},YL=(t,e,n)=>{const r=[...t];return r[e]+=n,HE(r)-HE(t)},Fd=(t,e,n)=>{let r=0,i=n*12;for(let s=0;s<64;s++){const o=(r+i)/2;YL(t,e,o)<n?r=o:i=o}return(r+i)/2},jg="28 Feb 2026",XL=new Date("2026-03-07T23:59:59"),JL=new Date("2026-02-28T10:00:00"),Wo=()=>new Date>=XL,KE=()=>new Date<JL,ZL=5e3,GE=["#39d353","#58a6ff","#e3b341","#bc8cff","#f78166"],k={green:"#39d353",green2:"#2ea043",red:"#f85149",blue:"#58a6ff",amber:"#e3b341",bg:"#060a0f",surface:"#0d1117",s2:"#161b22",s3:"#1c2128",border:"#21262d",text:"#e6edf3",muted:"#7d8590",muted2:"#484f58"},os=[{id:"president",role:"President",icon:"🎓",title:"Who will be elected President?",unc:!0,cands:[{name:"Abdul Mateen Kamal"},{name:"Ron"}],q:[200,200],vol:2e3,hist:[[50,50]]},{id:"vp",role:"Vice President",icon:"🤝",title:"Who will be elected Vice President?",unc:!0,cands:[{name:"Chloe Young"},{name:"Ron"}],q:[200,200],vol:1500,hist:[[50,50]]},{id:"treasurer",role:"Honorary Treasurer",icon:"💰",title:"Who will be elected Treasurer?",unc:!0,cands:[{name:"Yu Tang Koo"},{name:"Ron"}],q:[200,200],vol:1200,hist:[[50,50]]},{id:"secretary",role:"Honorary Secretary",icon:"📋",title:"Who will be elected Secretary?",unc:!0,cands:[{name:"Tan Jia Xuan"},{name:"Ron"}],q:[200,200],vol:1e3,hist:[[50,50]]},{id:"database",role:"Database Officer",icon:"🗄️",title:"Who will be elected Database Officer?",unc:!0,cands:[{name:"Ethan Kuai"},{name:"Ron"}],q:[200,200],vol:800,hist:[[50,50]]},{id:"access",role:"Access Officer",icon:"🚪",title:"Who will be elected Access Officer?",cands:[{name:"Brandon Loy"},{name:"Urian Qian"},{name:"Samuel Benedict"}],q:[200,156.3,200],vol:1500,hist:[[35,30,35]]},{id:"gencom",role:"General Committee",icon:"👥",title:"Who will be elected General Committee?",multi:!0,cands:[{name:"Joel Chik"},{name:"Brian"},{name:"Mohanty Puja"},{name:"Zackaria Too"},{name:"Matthew Lee"}],q:[200,200,48,88.5,48],vol:2e3,hist:[[25,25,15,20,15]]},{id:"publicity",role:"Publicity Secretary",icon:"📣",title:"Who will be elected Publicity Secretary?",cands:[{name:"Sophie Khoo"},{name:"Zhao Yuxuan"}],q:[200,12],vol:1500,hist:[[65,35]]},{id:"sponsorship",role:"Sponsorship Officer",icon:"🤑",title:"Who will be elected Sponsorship Officer?",cands:[{name:"Jessie Chen"},{name:"Kartik"},{name:"Enzo Hu"},{name:"Claire Sim"}],q:[200,200,200,200],vol:1500,hist:[[25,25,25,25]]}],as=["albert","alldon","daniel","chenxi","shih_ee","jinghao","mateen","chloe","isabel","cedric","xavier"],ou=["who's everyone backing for Access Officer? 👀","Brandon Loy looking strong rn","Samuel Benedict is a dark horse 👀","Sophie Khoo is a lock imo","Urian still has time to close the gap","GenCom race is genuinely insane with 5 candidates","anyone else holding Joel Chik?","Matthew Lee entering late but looking strong","just dropped 200 on Jessie Chen","Kartik supporters are quiet 👀","Enzo Hu sneaking up in sponsorship","Claire Sim don't sleep on her","these odds feel off tbh","first time using this, how do shares work?","CUMSA elections never been more hype lol","Sophie vs Yuxuan is the one to watch 👀","Zhao Yuxuan gaining momentum 📈","Mohanty Puja for GenCom!!","Zackaria Too has been quiet lately 🤔","the market never lies 📊","i believe in my picks 🙏","sponsorship market is wild, 4-way race","LMSR is wild, one big trade moves everything","election day is coming fast ⏰","bruh I'm up 500pts already","i'm scared to look at my portfolio lol","Brandon vs Urian vs Samuel — anyone's game tbh","Jessie or Kartik or Enzo who u got","will the uncontested candidates get roned 😂","Sophie at 65% feels too high ngl"],zg=`
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
`;function eV(){const[t,e]=oe.useState("login"),[n,r]=oe.useState(""),[i,s]=oe.useState(""),[o,l]=oe.useState(""),[u,c]=oe.useState(""),[d,p]=oe.useState(!1),m=async()=>{c(""),p(!0);const _=n.trim().toLowerCase();if(!_||_.length<3){c("Username must be at least 3 characters"),p(!1);return}if(!/^[a-z0-9_]+$/.test(_)){c("Username: only letters, numbers, underscores"),p(!1);return}if(!i.includes("@")){c("Enter a valid email address"),p(!1);return}if(o.length<6){c("Password must be at least 6 characters"),p(!1);return}try{if(t==="register"){if((await oE(Si(Vr,"usernames",_))).exists()){c("Username already taken — try another"),p(!1);return}const x=await yx(Dc,i,o);await wx(x.user,{displayName:_}),await aE(Si(Vr,"users",x.user.uid),{username:_,email:i,balance:ZL,portfolio:{},trades:[],joined:new Date().toISOString()}),await aE(Si(Vr,"usernames",_),{uid:x.user.uid})}else{if(!(await oE(Si(Vr,"usernames",_))).exists()){c("Username not found — register first"),p(!1);return}await vx(Dc,i,o)}}catch(T){const x=T.code==="auth/email-already-in-use"?"Email already registered — sign in instead":T.code==="auth/wrong-password"?"Wrong password":T.code==="auth/user-not-found"?"No account with that email":T.code==="auth/too-many-requests"?"Too many attempts — try again later":T.message;c(x),p(!1)}};return R.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:k.bg,padding:"2rem"},children:[R.jsx("style",{children:zg}),R.jsxs("div",{className:"slideup",style:{width:"100%",maxWidth:420},children:[R.jsxs("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[R.jsx("div",{style:{width:60,height:60,borderRadius:14,background:`linear-gradient(135deg, ${k.green2}, #1a7a3c)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,fontWeight:700,color:"#fff",margin:"0 auto 1rem",boxShadow:"0 8px 32px rgba(46,160,67,.3)"},children:"C"}),R.jsx("div",{style:{fontSize:22,fontWeight:600,letterSpacing:"-.04em",marginBottom:6},children:"CUMSA Markets"}),R.jsx("div",{style:{fontSize:11,color:k.muted,letterSpacing:".06em"},children:"MALAYSIA & SINGAPORE · CAMBRIDGE · 2026–27"})]}),R.jsxs("div",{style:{background:k.surface,border:`1px solid ${k.border}`,borderRadius:12,padding:"1.75rem",boxShadow:"0 24px 64px rgba(0,0,0,.6)"},children:[R.jsx("div",{style:{display:"flex",border:`1px solid ${k.border}`,borderRadius:8,overflow:"hidden",marginBottom:"1.5rem"},children:[["login","SIGN IN"],["register","REGISTER"]].map(([_,T])=>R.jsx("button",{onClick:()=>{e(_),c("")},style:{flex:1,padding:"9px",background:t===_?k.green2:"transparent",color:t===_?"#fff":k.muted,border:"none",cursor:"pointer",fontSize:12,fontWeight:600,letterSpacing:".06em",transition:"all .15s"},children:T},_))}),R.jsx(Ud,{label:"Username",value:n,onChange:r,placeholder:"e.g. nasi_lemak99",onEnter:m}),R.jsx(Ud,{label:"Email address",value:i,onChange:s,placeholder:"you@cam.ac.uk",onEnter:m,type:"email"}),R.jsx(Ud,{label:"Password",value:o,onChange:l,placeholder:"min. 6 characters",onEnter:m,type:"password"}),t==="register"&&R.jsxs("div",{style:{background:"rgba(57,211,83,.07)",border:"1px solid rgba(57,211,83,.2)",borderRadius:6,padding:".6rem .75rem",marginBottom:"1rem",fontSize:11,color:k.green},children:["🎉 Every new account starts with exactly ",R.jsx("strong",{children:"1,000 pts"})," — no exceptions"]}),u&&R.jsx("div",{style:{background:"rgba(248,81,73,.1)",border:"1px solid rgba(248,81,73,.2)",borderRadius:6,padding:".6rem .75rem",marginBottom:"1rem",fontSize:11,color:k.red},children:u}),R.jsx("button",{onClick:m,disabled:d,style:{width:"100%",padding:"11px",background:d?k.s3:k.green2,color:d?k.muted:"#fff",border:"none",borderRadius:8,fontSize:13,fontWeight:600,cursor:d?"not-allowed":"pointer",letterSpacing:".04em",transition:"all .15s",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:d?R.jsxs(R.Fragment,{children:[R.jsx("span",{className:"spin"}),"Loading…"]}):t==="login"?"Sign In →":"Create Account →"}),R.jsxs("div",{style:{marginTop:"1rem",fontSize:10,color:k.muted2,textAlign:"center",lineHeight:1.7},children:["Election: ",R.jsx("strong",{style:{color:k.amber},children:jg})," · ","Market closes: ",R.jsx("strong",{style:{color:k.amber},children:"7 Mar 2026"})]})]})]})]})}function Ud({label:t,value:e,onChange:n,type:r="text",placeholder:i,onEnter:s}){return R.jsxs("div",{style:{marginBottom:"1rem"},children:[R.jsx("div",{style:{fontSize:9,letterSpacing:".14em",textTransform:"uppercase",color:k.muted,marginBottom:5},children:t}),R.jsx("input",{type:r,value:e,placeholder:i,onChange:o=>n(o.target.value),onKeyDown:o=>o.key==="Enter"&&s(),style:{width:"100%",background:k.s2,border:`1px solid ${k.border}`,borderRadius:6,padding:".65rem .85rem",color:k.text,fontSize:14,fontWeight:500,outline:"none",transition:"border-color .15s"}})]})}function tV({userData:t,markets:e,onSell:n}){var d,p;const r=t.portfolio||{},i=Object.keys(r),s=i.reduce((m,_)=>m+r[_].cost,0),o=i.reduce((m,_)=>{const T=r[_],x=e.find(C=>C.id===T.marketId);if(!x)return m;const O=gn(x.q);return m+T.shares*(T.side==="YES"?O[T.ci]:1-O[T.ci])},0),l=o-s,u=s>0?(l/s*100).toFixed(1):"0",c=[["Balance",t.balance.toLocaleString(),t.balance<500?k.red:k.amber,"pts remaining"],["Invested",s.toFixed(0),k.blue,"pts deployed"],["Portfolio Value",o.toFixed(0),l>=0?k.green:k.red,"mark-to-market"],["Unrealised P&L",(l>=0?"+":"")+l.toFixed(0),l>=0?k.green:k.red,(l>=0?"+":"")+u+"%"],["Open Positions",i.length,k.blue,"trades"]];return R.jsxs("div",{style:{padding:"2rem",maxWidth:1100,margin:"0 auto"},children:[R.jsxs("div",{style:{marginBottom:"2rem"},children:[R.jsxs("h1",{style:{fontSize:24,fontWeight:600,letterSpacing:"-.04em",marginBottom:6},children:["Portfolio · ",t.username]}),R.jsxs("div",{style:{fontSize:12,color:k.muted},children:["CUMSA Election Market 2026–27 · Election: ",jg]})]}),R.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:1,background:k.border,border:`1px solid ${k.border}`,borderRadius:8,overflow:"hidden",marginBottom:"2rem"},children:c.map(([m,_,T,x])=>R.jsxs("div",{style:{background:k.surface,padding:"1.25rem 1.5rem"},children:[R.jsx("div",{style:{fontSize:9,letterSpacing:".14em",textTransform:"uppercase",color:k.muted,marginBottom:6},children:m}),R.jsx("div",{style:{fontSize:22,fontWeight:600,letterSpacing:"-.04em",lineHeight:1,color:T},children:_}),R.jsx("div",{style:{fontSize:10,color:k.muted,marginTop:3},children:x})]},m))}),R.jsx(QE,{children:"Open Positions"}),i.length===0?R.jsx(YE,{children:"No positions yet — head to Markets to start trading"}):R.jsx("div",{style:{background:k.surface,border:`1px solid ${k.border}`,borderRadius:8,overflow:"hidden",marginBottom:"2rem"},children:R.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[R.jsx("thead",{children:R.jsx("tr",{style:{background:k.s2},children:["Candidate","Role","Side","Shares","Avg Cost","Cur Price","Mkt Value","P&L","P&L %",""].map(m=>R.jsx("th",{style:{fontSize:9,letterSpacing:".12em",textTransform:"uppercase",color:k.muted,textAlign:"left",padding:".6rem 1rem",borderBottom:`1px solid ${k.border}`,fontWeight:600},children:m},m))})}),R.jsx("tbody",{children:i.map(m=>{const _=r[m],T=e.find(B=>B.id===_.marketId),x=T?gn(T.q):null,O=x?_.side==="YES"?x[_.ci]:1-x[_.ci]:.5,C=_.shares*O,w=_.shares>0?_.cost/_.shares:0,A=C-_.cost,M=_.cost>0?(A/_.cost*100).toFixed(1):"0",z=C.toFixed(0);return R.jsxs("tr",{style:{borderBottom:`1px solid ${k.border}`},children:[R.jsx("td",{style:{padding:".75rem 1rem",fontWeight:600,fontSize:13},children:_.name}),R.jsx("td",{style:{padding:".75rem 1rem",color:k.muted,fontSize:11},children:_.role}),R.jsx("td",{style:{padding:".75rem 1rem"},children:R.jsx("span",{style:{background:_.side==="YES"?"rgba(57,211,83,.12)":"rgba(248,81,73,.12)",color:_.side==="YES"?k.green:k.red,border:`1px solid ${_.side==="YES"?"rgba(57,211,83,.2)":"rgba(248,81,73,.2)"}`,fontSize:9,fontWeight:700,padding:"2px 7px",borderRadius:100},children:_.side})}),R.jsx("td",{style:{padding:".75rem 1rem"},children:_.shares.toFixed(2)}),R.jsxs("td",{style:{padding:".75rem 1rem"},children:[(w*100).toFixed(1),"¢"]}),R.jsxs("td",{style:{padding:".75rem 1rem"},children:[(O*100).toFixed(1),"¢"]}),R.jsxs("td",{style:{padding:".75rem 1rem",fontWeight:600},children:[C.toFixed(0)," pts"]}),R.jsxs("td",{style:{padding:".75rem 1rem",fontWeight:600,color:A>=0?k.green:k.red},children:[A>=0?"+":"",A.toFixed(0)]}),R.jsxs("td",{style:{padding:".75rem 1rem",fontWeight:600,color:A>=0?k.green:k.red},children:[A>=0?"+":"",M,"%"]}),R.jsx("td",{style:{padding:".75rem 1rem"},children:R.jsxs("button",{onClick:()=>n&&n(m,_,T,O,C),style:{padding:"4px 12px",borderRadius:5,fontSize:10,fontWeight:600,cursor:"pointer",background:"rgba(248,81,73,.1)",color:k.red,border:"1px solid rgba(248,81,73,.3)",transition:"all .12s",whiteSpace:"nowrap"},children:["Sell · ",z," pts"]})})]},m)})})]})}),R.jsxs(QE,{children:["Trade History (",((d=t.trades)==null?void 0:d.length)||0,")"]}),R.jsx("div",{style:{background:k.surface,border:`1px solid ${k.border}`,borderRadius:8,overflow:"hidden"},children:(p=t.trades)!=null&&p.length?t.trades.slice(0,50).map((m,_)=>R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:".7rem 1.25rem",borderBottom:`1px solid ${k.border}`,fontSize:11},children:[R.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:m.side==="YES"?k.green:(m.side==="SELL",k.red),flexShrink:0}}),R.jsxs("div",{style:{flex:1},children:[R.jsxs("div",{style:{fontWeight:600,color:k.text},children:[m.name," — ",m.side]}),R.jsxs("div",{style:{fontSize:10,color:k.muted,marginTop:2},children:[m.role,m.shares?` · ${m.shares.toFixed(2)} shares @ ${(m.price*100).toFixed(1)}¢`:""]})]}),R.jsxs("div",{style:{fontWeight:600,color:m.side==="SELL"||m.side==="YES"?k.green:k.red},children:[m.side==="SELL"||m.side==="YES"?"+":"−",m.amt," pts"]}),R.jsx("div",{style:{fontSize:9,color:k.muted2,flexShrink:0},children:new Date(m.time).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})]},_)):R.jsx(YE,{children:"No trades yet"})})]})}function QE({children:t}){return R.jsx("div",{style:{fontSize:11,fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:k.muted,marginBottom:"1rem",paddingBottom:".5rem",borderBottom:`1px solid ${k.border}`},children:t})}function YE({children:t}){return R.jsx("div",{style:{padding:"2rem",textAlign:"center",fontSize:12,color:k.muted2,fontStyle:"italic"},children:t})}function nV({currentUid:t,markets:e}){const[n,r]=oe.useState([]),[i,s]=oe.useState(!0),o=async()=>{s(!0);try{const c=(await VO(IO(Vr,"users"))).docs.map(d=>{const p=d.data(),m=Object.values(p.portfolio||{}).reduce((_,T)=>{const x=e.find(C=>C.id===T.marketId);if(!x||x.unc)return _;const O=gn(x.q);return _+T.shares*(T.side==="YES"?O[T.ci]:1-O[T.ci])},0);return{uid:d.id,username:p.username,balance:p.balance||0,portVal:m,total:(p.balance||0)+m}});c.sort((d,p)=>p.total-d.total),r(c.slice(0,20))}finally{s(!1)}};oe.useEffect(()=>{o()},[]);const l=["🥇","🥈","🥉"];return R.jsxs("div",{style:{padding:"2rem",maxWidth:680,margin:"0 auto"},children:[R.jsxs("div",{style:{marginBottom:"2rem",display:"flex",alignItems:"flex-end",justifyContent:"space-between"},children:[R.jsxs("div",{children:[R.jsx("h1",{style:{fontSize:24,fontWeight:600,letterSpacing:"-.04em",marginBottom:6},children:"🏆 Leaderboard"}),R.jsx("div",{style:{fontSize:12,color:k.muted},children:"Ranked by total value · balance + open positions"})]}),R.jsx("button",{onClick:o,style:{padding:"6px 16px",background:k.s2,border:`1px solid ${k.border}`,borderRadius:6,color:k.muted,fontSize:11,cursor:"pointer",transition:"all .15s"},children:"↻ Refresh"})]}),i?R.jsxs("div",{style:{textAlign:"center",padding:"3rem",color:k.muted},children:[R.jsx("div",{style:{width:32,height:32,border:`3px solid ${k.border}`,borderTopColor:k.green,borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 1rem"}}),"Loading…"]}):n.length===0?R.jsx("div",{style:{textAlign:"center",padding:"3rem",color:k.muted2,fontSize:12},children:"No traders yet — be the first to register!"}):R.jsx("div",{style:{background:k.surface,border:`1px solid ${k.border}`,borderRadius:8,overflow:"hidden"},children:n.map((u,c)=>R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem 1.25rem",borderBottom:`1px solid ${k.border}`,background:u.uid===t?"rgba(57,211,83,.04)":"transparent",transition:"background .2s"},children:[R.jsx("div",{style:{fontSize:c<3?20:14,fontWeight:600,color:c<3?k.amber:k.muted2,width:28,textAlign:"center",letterSpacing:"-.03em",flexShrink:0},children:c<3?l[c]:c+1}),R.jsxs("div",{style:{flex:1,minWidth:0},children:[R.jsxs("div",{style:{fontWeight:600,fontSize:14,color:u.uid===t?k.green:k.text},children:[u.username,u.uid===t&&R.jsx("span",{style:{color:k.green,fontSize:10,marginLeft:6},children:"(you)"})]}),R.jsxs("div",{style:{fontSize:10,color:k.muted,marginTop:2},children:["Balance: ",R.jsx("span",{style:{color:k.text},children:u.balance.toFixed(0)})," pts  ·  Portfolio: ",R.jsx("span",{style:{color:k.text},children:u.portVal.toFixed(0)})," pts"]})]}),R.jsxs("div",{style:{fontWeight:600,fontSize:16,color:u.total>=1e3?k.green:k.red,letterSpacing:"-.02em",flexShrink:0},children:[u.total.toFixed(0)," pts"]})]},u.uid))})]})}function rV(){const t=new Date("2026-03-07T23:59:59"),e=()=>{const i=t-new Date;if(i<=0)return{h:"00",m:"00",s:"00",closed:!0,label:""};const s=Math.floor(i/864e5),o=Math.floor(i%864e5/36e5),l=Math.floor(i%36e5/6e4),u=Math.floor(i%6e4/1e3);return s>0?{h:String(s).padStart(2,"0"),m:String(o).padStart(2,"0"),s:String(l).padStart(2,"0"),closed:!1,label:"days:hrs:min"}:{h:String(o).padStart(2,"0"),m:String(l).padStart(2,"0"),s:String(u).padStart(2,"0"),closed:!1,label:"hrs:min:sec"}},[n,r]=oe.useState(e);return oe.useEffect(()=>{const i=setInterval(()=>r(e()),1e3);return()=>clearInterval(i)},[]),n}function iV(){const[t,e]=oe.useState(void 0);return oe.useEffect(()=>Sx(Dc,n=>e(n??null)),[]),t===void 0?R.jsx(WC,{}):t?R.jsx(sV,{firebaseUser:t}):R.jsx(eV,{})}function sV({firebaseUser:t}){const[e,n]=oe.useState("markets"),[r,i]=oe.useState(null),[s,o]=oe.useState(os),[l,u]=oe.useState(os.reduce((U,H)=>U+H.vol,0)),[c,d]=oe.useState(418),[p,m]=oe.useState(0),[_,T]=oe.useState([]),[x,O]=oe.useState([]),[C,w]=oe.useState(""),[A,M]=oe.useState(12),[z,B]=oe.useState(null),[v,y]=oe.useState(null),[E,I]=oe.useState(50),[P,N]=oe.useState("all"),S=oe.useRef(null),kt=oe.useRef(null),Ye=rV();oe.useEffect(()=>FO(Si(Vr,"users",t.uid),H=>{H.exists()&&i(H.data())}),[t.uid]),oe.useEffect(()=>{const U=Sr(Cr,"marketState"),H=qE(U,J=>{if(J.exists()){const G=J.val(),te=os.map(ae=>{const ve=(G.markets||[]).find($e=>$e.id===ae.id);if(!ve)return ae;const Ee=ve.q&&ve.q.length===ae.cands.length;return{...ae,q:Ee?ve.q:ae.q,vol:ve.vol||ae.vol,hist:ve.hist||ae.hist}});o(te),G.totalVol&&u(G.totalVol),G.traders&&d(G.traders),hs(U,{markets:te,totalVol:G.totalVol||os.reduce((ae,ve)=>ae+ve.vol,0),traders:G.traders||418})}else hs(U,{markets:os,totalVol:os.reduce((G,te)=>G+te.vol,0),traders:418})});return()=>H()},[]),oe.useEffect(()=>{const U=Sr(Cr,"chat"),H=qE(U,J=>{if(J.exists()){const G=J.val(),te=Object.values(G).sort((ae,ve)=>(ae.ts||0)-(ve.ts||0)).slice(-80);O(te)}});return()=>H()},[]),oe.useEffect(()=>{S.current&&(S.current.scrollTop=S.current.scrollHeight)},[x]),oe.useEffect(()=>{if(!r||Wo()||KE())return;const U=s.filter(G=>!G.unc);let H;const J=async()=>{if(!(Wo()||KE())){if(Math.random()<.65&&U.length>0){const G=U[Math.floor(Math.random()*U.length)],te=s.findIndex(Ve=>Ve.id===G.id),ae=Math.floor(Math.random()*G.cands.length),ve=Math.random()>.38,Ee=[10,15,20,25,25,30,40,40,50][Math.floor(Math.random()*9)],$e=as[Math.floor(Math.random()*as.length)],zn=s.map((Ve,yr)=>{if(yr!==te)return Ve;const Pt=[...Ve.q];if(ve){const rn=Fd(Pt,ae,Ee);Pt[ae]+=rn}else{const rn=Math.max(.05,1-gn(Pt)[ae]);Pt[ae]=Math.max(10,Pt[ae]-Ee/rn*.3)}const Zi=gn(Pt).map(rn=>Math.round(rn*100));return{...Ve,q:Pt,vol:Ve.vol+Ee,hist:[...Ve.hist,Zi].slice(-80)}}),Vt=l+Ee,Bn=Math.random()<.15?c+1:c;await hs(Sr(Cr,"marketState"),{markets:zn,totalVol:Vt,traders:Bn}),T(Ve=>[{name:G.cands[ae].name,role:G.role,type:ve?"buy":"sell",amt:Ee,user:$e,id:Date.now()+Math.random()},...Ve].slice(0,14)),m(Ve=>Ve+Ee)}if(Math.random()<.06){const G=as[Math.floor(Math.random()*as.length)],te=ou[Math.floor(Math.random()*ou.length)];await Vd(Sr(Cr,"chat"),{user:G,text:te,type:"bot",ts:Date.now()})}Math.random()<.1&&M(G=>Math.max(8,Math.min(30,G+(Math.random()<.5?1:-1)))),H=setTimeout(J,4e3+Math.random()*6e3)}};return H=setTimeout(J,3e3+Math.random()*3e3),()=>clearTimeout(H)},[r,s]);const hi=oe.useCallback(async(U,H,J,G,te)=>{if(!r||Wo())return;const ae=Math.floor(te);if(ae<=0){X("Position has no value","err");return}const ve=s.findIndex(Vt=>Vt.id===H.marketId);let Ee=s;ve>=0&&(Ee=s.map((Vt,Bn)=>{if(Bn!==ve)return Vt;const Ve=[...Vt.q];Ve[H.ci]=Math.max(10,Ve[H.ci]-H.shares*.35);const yr=[...Vt.hist,gn(Ve).map(Pt=>Math.round(Pt*100))].slice(-80);return{...Vt,q:Ve,hist:yr}}),await hs(Sr(Cr,"marketState"),{markets:Ee,totalVol:l,traders:c}));const $e={...r.portfolio};delete $e[U];const zn={name:H.name,role:H.role,side:"SELL",amt:ae,shares:H.shares,price:G,time:new Date().toISOString()};await lE(Si(Vr,"users",t.uid),{balance:r.balance+ae,portfolio:$e,trades:[zn,...r.trades||[]].slice(0,100)}),X(`✓ Sold ${H.name.split(" ")[0]} position — +${ae} pts`,"ok")},[r,s,l,c,t.uid]),dn=oe.useCallback(async(U,H,J,G)=>{var rn;if(!r||Wo())return;if(G<=0){X("Enter a valid amount","err");return}if(G>r.balance){X("Insufficient balance","err");return}const te=s[U],ve=gn(te.q)[H];let Ee,$e;if(J==="buy")Ee=Fd(te.q,H,G),$e=[...te.q],$e[H]+=Ee;else{const Ft=Math.max(.05,1-ve);Ee=G/Ft,$e=[...te.q],$e[H]=Math.max(10,$e[H]-Ee*.4)}const zn=[...te.hist,gn($e).map(Ft=>Math.round(Ft*100))].slice(-80),Vt=s.map((Ft,kh)=>kh===U?{...Ft,q:$e,vol:Ft.vol+G,hist:zn}:Ft),Bn=l+G,Ve=J==="buy"?"YES":"NO",yr=`${te.id}_${H}${J==="sell"?"_no":""}`,Pt=((rn=r.portfolio)==null?void 0:rn[yr])||{name:te.cands[H].name,role:te.role,side:Ve,shares:0,cost:0,marketId:te.id,ci:H},Zi={name:te.cands[H].name,role:te.role,side:Ve,amt:G,shares:Ee,price:ve,time:new Date().toISOString()};await lE(Si(Vr,"users",t.uid),{balance:r.balance-G,[`portfolio.${yr}`]:{...Pt,shares:Pt.shares+Ee,cost:Pt.cost+G},trades:[Zi,...r.trades||[]].slice(0,100)}),await hs(Sr(Cr,"marketState"),{markets:Vt,totalVol:Bn,traders:c}),T(Ft=>[{name:te.cands[H].name,role:te.role,type:J==="buy"?"buy":"sell",amt:G,user:r.username,id:Date.now()},...Ft].slice(0,14)),m(Ft=>Ft+G),X(`✓ ${Ve==="YES"?"Bought YES":"Bought NO"} on ${te.cands[H].name.split(" ")[0]} — ${G} pts`,"ok"),y(null)},[r,s,l,c,t.uid]),$=async()=>{const U=C.trim();!U||!r||(await Vd(Sr(Cr,"chat"),{user:r.username,text:U,type:"you",ts:Date.now()}),w(""),Math.random()<.4&&setTimeout(async()=>{const H=as[Math.floor(Math.random()*as.length)],J=ou[Math.floor(Math.random()*ou.length)];await Vd(Sr(Cr,"chat"),{user:H,text:J,type:"bot",ts:Date.now()+500})},900+Math.random()*2e3))},X=(U,H="ok")=>{B({msg:U,type:H}),clearTimeout(kt.current),kt.current=setTimeout(()=>B(null),3500)};if(!r)return R.jsx(WC,{});const se=s.filter(U=>P==="contested"?!U.unc:P==="uncontested"?U.unc:!0),Ae=Object.keys(r.portfolio||{}).length,Se=(()=>{if(!v)return null;const U=s[v.mi],J=gn(U.q)[v.ci];if(v.tab==="buy"){const ae=Fd(U.q,v.ci,E),ve=ae>0?E/ae:0;return{avg:(ve*100).toFixed(1),shares:ae.toFixed(2),slip:(Math.abs(ve-J)/J*100).toFixed(2),ret:(ae-E).toFixed(0)}}const G=1-J,te=E/G;return{avg:(G*100).toFixed(1),shares:te.toFixed(2),slip:"0.30",ret:(te-E).toFixed(0)}})();return R.jsxs("div",{style:{background:k.bg,minHeight:"100vh",color:k.text,fontFamily:"'IBM Plex Mono',monospace"},children:[R.jsx("style",{children:zg}),R.jsxs("div",{style:{height:52,background:k.surface,borderBottom:`1px solid ${k.border}`,display:"flex",alignItems:"center",padding:"0 1.5rem",gap:"1.5rem",position:"sticky",top:0,zIndex:300},children:[R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[R.jsx("div",{style:{width:30,height:30,borderRadius:6,background:`linear-gradient(135deg,${k.green2},#1a7a3c)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:600,color:"#fff"},children:"C"}),R.jsx("span",{style:{fontSize:14,fontWeight:600,letterSpacing:"-.02em"},children:"CUMSA"}),R.jsx("span",{style:{color:k.muted2},children:"·"}),R.jsx("span",{style:{fontSize:10,color:k.muted,letterSpacing:".04em"},children:"ELECTION MARKET"})]}),R.jsx("nav",{style:{display:"flex",marginLeft:"auto"},children:[["markets","Markets"],["portfolio",`Portfolio${Ae>0?` (${Ae})`:""}`],["leaderboard","Leaderboard"]].map(([U,H])=>R.jsx("button",{onClick:()=>n(U),style:{padding:"0 1rem",height:52,fontSize:12,fontWeight:500,color:e===U?k.text:k.muted,cursor:"pointer",borderBottom:`2px solid ${e===U?k.green:"transparent"}`,borderTop:"none",borderLeft:"none",borderRight:"none",background:"none",transition:"all .15s",letterSpacing:".02em"},children:H},U))}),R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginLeft:"auto"},children:[!Ye.closed&&R.jsx(XE,{}),Ye.closed&&R.jsx("span",{style:{fontSize:10,fontWeight:600,color:k.red,background:"rgba(248,81,73,.1)",border:"1px solid rgba(248,81,73,.2)",borderRadius:100,padding:"3px 10px"},children:"🔒 CLOSED"}),R.jsxs("span",{style:{fontSize:12,fontWeight:600,color:k.amber},children:[r.balance.toLocaleString()," pts"]}),R.jsx("span",{style:{fontSize:11,color:k.muted},children:r.username}),R.jsx("button",{onClick:()=>Cx(Dc),style:{fontSize:10,color:k.muted2,background:"none",border:`1px solid ${k.border}`,borderRadius:4,padding:"3px 8px",cursor:"pointer"},children:"sign out"})]})]}),R.jsx("div",{style:{background:k.surface,borderBottom:`1px solid ${k.border}`,display:"flex",padding:"0 1.5rem",overflowX:"auto"},children:[["Total Volume",l.toLocaleString(),k.green,`+${Math.floor(p)} today`],["Live Traders",c,k.blue,null],["Election",jg,k.amber,null],["Market Closes","7 Mar 2026",k.amber,null],["Your Balance",r.balance.toLocaleString()+" pts",r.balance<100?k.red:k.green,null]].map(([U,H,J,G])=>R.jsxs("div",{style:{padding:".9rem 2rem .9rem 0",borderRight:`1px solid ${k.border}`,marginRight:"2rem",flexShrink:0},children:[R.jsx("div",{style:{fontSize:9,letterSpacing:".14em",textTransform:"uppercase",color:k.muted,marginBottom:4},children:U}),R.jsx("div",{style:{fontSize:18,fontWeight:600,letterSpacing:"-.03em",lineHeight:1,color:J},children:H}),G&&R.jsx("div",{style:{fontSize:10,color:k.green,marginTop:2},children:G})]},U))}),Ye.closed&&R.jsxs("div",{style:{background:"linear-gradient(90deg,#1a0a0a,#1f0d0d)",borderBottom:"2px solid rgba(248,81,73,.6)",padding:"1rem 2rem",textAlign:"center"},children:[R.jsx("div",{style:{fontSize:16,fontWeight:600,color:k.red,marginBottom:3},children:"🔒 Market Closed — Trading Has Ended"}),R.jsxs("div",{style:{fontSize:11,color:k.muted},children:["Results finalised on ",R.jsx("strong",{style:{color:k.amber},children:"7 March 2026"}),". Thanks for playing! 🇲🇾🇸🇬"]})]}),e==="markets"&&R.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 340px",minHeight:"calc(100vh - 107px)"},children:[R.jsxs("div",{style:{borderRight:`1px solid ${k.border}`,padding:"1.5rem",overflowY:"auto"},children:[R.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"},children:[R.jsx("span",{style:{fontSize:11,fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:k.muted},children:"All Markets · 2026–27"}),R.jsx(oV,{value:P,onChange:N})]}),se.map(U=>{const H=s.findIndex(G=>G.id===U.id),J=U.unc?[1]:gn(U.q);return R.jsxs("div",{style:{background:k.surface,border:`1px solid ${k.border}`,borderRadius:8,marginBottom:8,overflow:"hidden"},children:[R.jsxs("div",{style:{padding:"1rem 1.25rem",display:"flex",alignItems:"flex-start",gap:"1rem"},children:[R.jsx("div",{style:{width:36,height:36,borderRadius:8,background:k.s2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0},children:U.icon}),R.jsxs("div",{style:{flex:1,minWidth:0},children:[R.jsx("div",{style:{fontSize:9,fontWeight:600,letterSpacing:".12em",textTransform:"uppercase",color:k.muted,marginBottom:3},children:U.role}),R.jsx("div",{style:{fontSize:14,fontWeight:600,letterSpacing:"-.02em"},children:U.title}),R.jsxs("div",{style:{fontSize:10,color:k.muted,marginTop:4},children:["Vol: ",R.jsx("strong",{style:{color:k.text},children:U.vol.toLocaleString()})," pts"]})]}),R.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4,flexShrink:0},children:[U.unc&&R.jsx(JE,{color:k.amber,bg:"rgba(227,179,65,.12)",border:"rgba(227,179,65,.2)",children:"Uncontested"}),U.multi&&R.jsx(JE,{color:k.blue,bg:"rgba(88,166,255,.12)",border:"rgba(88,166,255,.2)",children:"Multi-winner"})]})]}),R.jsx("div",{style:{padding:"0 1.25rem 1rem"},children:U.cands.map((G,te)=>{var $e;const ae=Math.round(J[te]*100),ve=(($e=U.hist[U.hist.length-1])==null?void 0:$e[te])??ae,Ee=ae-ve;return R.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto auto",alignItems:"center",gap:".75rem",padding:".5rem 0",borderTop:`1px solid ${k.border}`},children:[R.jsxs("div",{children:[R.jsxs("div",{style:{fontSize:13,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[G.name,!U.unc&&Math.abs(Ee)>0&&R.jsxs("span",{style:{fontSize:9,fontWeight:600,padding:"1px 5px",borderRadius:3,background:Ee>0?"rgba(57,211,83,.12)":"rgba(248,81,73,.12)",color:Ee>0?k.green:k.red},children:[Ee>0?"+":"",Ee,"%"]})]}),R.jsx("div",{style:{marginTop:4,height:4,background:k.s3,borderRadius:2,overflow:"hidden"},children:R.jsx("div",{style:{height:"100%",width:(U.unc?100:ae)+"%",background:GE[te%4],borderRadius:2,transition:"width .6s cubic-bezier(.4,0,.2,1)"}})})]}),R.jsx("div",{style:{fontSize:15,fontWeight:600,color:GE[te%4],minWidth:44,textAlign:"right"},children:U.unc?"—":ae+"%"}),!U.unc&&!Wo()?R.jsxs("div",{style:{display:"flex",gap:4},children:[R.jsxs("button",{onClick:()=>{y({mi:H,ci:te,tab:"buy"}),I(50)},style:{padding:"5px 10px",borderRadius:5,fontSize:11,fontWeight:600,cursor:"pointer",background:"rgba(57,211,83,.12)",color:k.green,border:"1px solid rgba(57,211,83,.3)",transition:"all .12s"},children:["Buy ",ae,"¢"]}),R.jsxs("button",{onClick:()=>{y({mi:H,ci:te,tab:"sell"}),I(50)},style:{padding:"5px 10px",borderRadius:5,fontSize:11,fontWeight:600,cursor:"pointer",background:"rgba(248,81,73,.12)",color:k.red,border:"1px solid rgba(248,81,73,.3)",transition:"all .12s"},children:["No ",100-ae,"¢"]})]}):R.jsx("div",{})]},te)})})]},U.id)})]}),R.jsxs("div",{style:{padding:"1.25rem",overflowY:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:[R.jsxs("div",{style:{background:k.surface,border:`1px solid ${Ye.closed?"rgba(248,81,73,.3)":k.border}`,borderRadius:8,padding:".85rem 1rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[R.jsx("div",{style:{fontSize:10,color:Ye.closed?k.red:k.muted,letterSpacing:".06em"},children:Ye.closed?"🔒 Market closed":`Closes in (${Ye.label})`}),R.jsx("div",{style:{display:"flex",alignItems:"baseline",gap:4},children:[Ye.h,Ye.m,Ye.s].map((U,H)=>R.jsxs("span",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[R.jsx("span",{style:{fontSize:18,fontWeight:600,letterSpacing:"-.04em",color:Ye.closed?k.red:k.amber,minWidth:28,textAlign:"center"},children:U}),H<2&&R.jsx("span",{style:{color:k.muted2,fontSize:14,margin:"0 2px"},children:":"})]},H))})]}),v&&(()=>{const U=s[v.mi],H=gn(U.q);return R.jsxs("div",{className:"fadein",style:{background:k.surface,border:`1px solid ${k.border}`,borderRadius:8,overflow:"hidden"},children:[R.jsxs("div",{style:{padding:".85rem 1rem",borderBottom:`1px solid ${k.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[R.jsx("span",{style:{fontSize:12,fontWeight:600},children:"Place Order"}),R.jsx("button",{onClick:()=>y(null),style:{background:"none",border:"none",color:k.muted,fontSize:18,cursor:"pointer",lineHeight:1},children:"×"})]}),R.jsxs("div",{style:{padding:"1rem"},children:[R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:"1rem",padding:".6rem .8rem",background:k.s2,borderRadius:6,border:`1px solid ${k.border}`},children:[R.jsx("div",{style:{fontSize:13,fontWeight:600,flex:1},children:U.cands[v.ci].name}),R.jsxs("div",{style:{fontSize:16,fontWeight:600,color:k.green},children:[Math.round(H[v.ci]*100),"¢"]})]}),R.jsx("div",{style:{display:"flex",border:`1px solid ${k.border}`,borderRadius:6,overflow:"hidden",marginBottom:"1rem"},children:[["buy","BUY YES"],["sell","BUY NO"]].map(([J,G])=>R.jsx("button",{onClick:()=>y(te=>({...te,tab:J})),style:{flex:1,padding:7,background:v.tab===J?J==="buy"?k.green2:"#c0392b":"transparent",color:v.tab===J?"#fff":k.muted,border:"none",cursor:"pointer",fontSize:11,fontWeight:600,letterSpacing:".06em",transition:"all .15s"},children:G},J))}),R.jsx("div",{style:{fontSize:9,letterSpacing:".14em",textTransform:"uppercase",color:k.muted,marginBottom:5},children:"Amount (pts)"}),R.jsxs("div",{style:{position:"relative",marginBottom:".5rem"},children:[R.jsx("input",{type:"number",value:E,onChange:J=>I(Math.max(1,parseInt(J.target.value)||0)),style:{width:"100%",background:k.s2,border:`1px solid ${k.border}`,borderRadius:6,padding:".6rem 2.5rem .6rem .75rem",color:k.text,fontSize:16,fontWeight:600,outline:"none"}}),R.jsx("span",{style:{position:"absolute",right:".75rem",top:"50%",transform:"translateY(-50%)",fontSize:11,color:k.muted},children:"pts"})]}),R.jsx("div",{style:{display:"flex",gap:4,marginBottom:"1rem"},children:[25,50,100,250].map(J=>R.jsx("button",{onClick:()=>I(Math.min(J===250?r.balance:J,r.balance)),style:{flex:1,padding:4,background:k.s3,border:`1px solid ${k.border}`,borderRadius:4,color:k.muted,fontSize:10,cursor:"pointer",transition:"all .12s"},children:J===250?"Max":J},J))}),Se&&R.jsx("div",{style:{background:k.s2,border:`1px solid ${k.border}`,borderRadius:6,padding:".75rem",marginBottom:"1rem"},children:[["Avg price",Se.avg+"¢"],["Shares",Se.shares],["Slippage",Se.slip+"%"],["Potential return","+"+Se.ret+" pts"]].map(([J,G],te)=>R.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:te<3?5:0,alignItems:"center"},children:[R.jsx("span",{style:{color:k.muted},children:J}),R.jsx("span",{style:{fontWeight:600,color:te===3?k.green:k.text,fontSize:te===3?13:11},children:G})]},J))}),R.jsxs("button",{onClick:()=>dn(v.mi,v.ci,v.tab,E),style:{width:"100%",padding:11,background:v.tab==="buy"?k.green2:"#c0392b",color:"#fff",border:"none",borderRadius:6,fontSize:13,fontWeight:600,cursor:"pointer",letterSpacing:".04em",transition:"all .15s"},children:[v.tab==="buy"?"BUY YES":"BUY NO"," — ",E," pts"]})]})]})})(),R.jsxs("div",{style:{background:k.surface,border:`1px solid ${k.border}`,borderRadius:8,overflow:"hidden"},children:[R.jsxs("div",{style:{padding:".75rem 1rem",borderBottom:`1px solid ${k.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[R.jsx("span",{style:{fontSize:11,fontWeight:600,letterSpacing:".06em",textTransform:"uppercase",color:k.muted},children:"Live Activity"}),R.jsx(XE,{small:!0})]}),R.jsxs("div",{style:{maxHeight:200,overflowY:"auto"},children:[_.length===0&&R.jsx("div",{style:{padding:"1rem",fontSize:11,color:k.muted2,textAlign:"center"},children:"Waiting for trades…"}),_.map(U=>R.jsxs("div",{className:"fadein",style:{padding:".6rem 1rem",borderBottom:`1px solid ${k.border}`,fontSize:11},children:[R.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[R.jsx("strong",{children:U.user}),R.jsx("span",{style:{fontSize:9,color:k.muted2},children:"just now"})]}),R.jsxs("div",{style:{color:k.muted,fontSize:10,margin:"2px 0"},children:[R.jsx("span",{style:{color:U.type==="buy"?k.green:k.red,fontWeight:600},children:U.type==="buy"?"BUY YES":"BUY NO"})," on ",R.jsx("strong",{style:{color:k.text},children:U.name.split(" ")[0]})," · ",U.role]}),R.jsxs("span",{style:{fontWeight:600,color:U.type==="buy"?k.green:k.red},children:[U.type==="buy"?"+":"−",U.amt," pts"]})]},U.id))]})]}),R.jsxs("div",{style:{background:k.surface,border:`1px solid ${k.border}`,borderRadius:8,overflow:"hidden",display:"flex",flexDirection:"column"},children:[R.jsxs("div",{style:{padding:".75rem 1rem",borderBottom:`1px solid ${k.border}`,display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[R.jsx("span",{style:{fontSize:11,fontWeight:600,letterSpacing:".06em",textTransform:"uppercase",color:k.muted},children:"💬 Live Chat"}),R.jsxs("span",{style:{fontSize:10,color:k.green,display:"flex",alignItems:"center",gap:4},children:[R.jsx("span",{style:{width:5,height:5,background:k.green,borderRadius:"50%",display:"inline-block",animation:"pulse 1.4s infinite"}}),A," online"]})]}),R.jsx("div",{ref:S,style:{height:190,overflowY:"auto",padding:".5rem"},children:x.map((U,H)=>R.jsxs("div",{style:{padding:".3rem .5rem",borderRadius:4,marginBottom:2,fontSize:11,lineHeight:1.5},children:[R.jsx("span",{style:{fontWeight:600,marginRight:6,color:U.user===r.username?k.green:k.amber},children:U.user}),R.jsx("span",{style:{color:k.muted},children:U.text}),R.jsx("span",{style:{float:"right",fontSize:9,color:k.muted2,marginLeft:8},children:new Date(U.ts).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})})]},U.id||H))}),R.jsxs("div",{style:{display:"flex",gap:6,padding:".6rem",borderTop:`1px solid ${k.border}`,flexShrink:0},children:[R.jsx("input",{value:C,onChange:U=>w(U.target.value),onKeyDown:U=>U.key==="Enter"&&$(),placeholder:"Say something…",maxLength:120,style:{flex:1,background:k.s2,border:`1px solid ${k.border}`,borderRadius:6,padding:".45rem .75rem",color:k.text,fontSize:12,outline:"none"}}),R.jsx("button",{onClick:$,style:{padding:".45rem .9rem",background:k.green2,color:"#fff",border:"none",borderRadius:6,fontSize:11,fontWeight:600,cursor:"pointer",transition:"all .15s"},children:"Send"})]})]})]})]}),e==="portfolio"&&R.jsx(tV,{userData:r,markets:s,onSell:hi}),e==="leaderboard"&&R.jsx(nV,{currentUid:t.uid,markets:s}),z&&R.jsx("div",{className:"slideup",style:{position:"fixed",bottom:"1.5rem",right:"1.5rem",background:k.s2,border:`1px solid ${z.type==="ok"?"rgba(57,211,83,.4)":"rgba(248,81,73,.4)"}`,borderRadius:8,padding:".75rem 1.25rem",fontSize:12,fontWeight:600,color:z.type==="ok"?k.green:k.red,zIndex:1e3,maxWidth:300},children:z.msg})]})}function XE({small:t}){return R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,background:"rgba(57,211,83,.1)",border:"1px solid rgba(57,211,83,.2)",borderRadius:100,padding:"3px 10px",fontSize:10,fontWeight:600,color:k.green,letterSpacing:".08em",...t?{transform:"scale(.85)"}:{}},children:[R.jsx("div",{style:{width:5,height:5,background:k.green,borderRadius:"50%",animation:"pulse 1.4s infinite"}}),"LIVE"]})}function JE({children:t,color:e,bg:n,border:r}){return R.jsx("span",{style:{background:n,color:e,border:`1px solid ${r}`,fontSize:9,fontWeight:600,letterSpacing:".08em",padding:"2px 8px",borderRadius:100},children:t})}function oV({value:t,onChange:e}){return R.jsx("div",{style:{display:"flex",gap:2,background:k.s2,border:`1px solid ${k.border}`,borderRadius:6,padding:2},children:["all","contested","uncontested"].map(n=>R.jsx("button",{onClick:()=>e(n),style:{padding:"3px 10px",borderRadius:4,fontSize:10,fontWeight:600,cursor:"pointer",background:t===n?k.s3:"none",color:t===n?k.text:k.muted,border:"none",transition:"all .15s",letterSpacing:".04em"},children:n},n))})}function WC(){return R.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:k.bg,flexDirection:"column",gap:16},children:[R.jsx("style",{children:zg}),R.jsx("div",{style:{width:40,height:40,border:`3px solid ${k.border}`,borderTopColor:k.green,borderRadius:"50%",animation:"spin 1s linear infinite"}}),R.jsx("div",{style:{fontSize:12,color:k.muted},children:"Loading CUMSA Markets…"})]})}jd.createRoot(document.getElementById("root")).render(R.jsx(bR.StrictMode,{children:R.jsx(iV,{})}));
