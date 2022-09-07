(()=>{var e={43:function(e,n,t){var o,r;!function(i,s){"use strict";void 0===(r="function"==typeof(o=function(){var e=function(){},n="undefined",t=typeof window!==n&&typeof window.navigator!==n&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"];function r(e,n){var t=e[n];if("function"==typeof t.bind)return t.bind(e);try{return Function.prototype.bind.call(t,e)}catch(n){return function(){return Function.prototype.apply.apply(t,[e,arguments])}}}function i(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(o){return"debug"===o&&(o="log"),typeof console!==n&&("trace"===o&&t?i:void 0!==console[o]?r(console,o):void 0!==console.log?r(console,"log"):e)}function c(n,t){for(var r=0;r<o.length;r++){var i=o[r];this[i]=r<n?e:this.methodFactory(i,n,t)}this.log=this.debug}function u(e,t,o){return function(){typeof console!==n&&(c.call(this,t,o),this[e].apply(this,arguments))}}function a(e,n,t){return s(e)||u.apply(this,arguments)}function f(e,t,r){var i,s=this;t=null==t?"WARN":t;var u="loglevel";function f(){var e;if(typeof window!==n&&u){try{e=window.localStorage[u]}catch(e){}if(typeof e===n)try{var t=window.document.cookie,o=t.indexOf(encodeURIComponent(u)+"=");-1!==o&&(e=/^([^;]+)/.exec(t.slice(o))[1])}catch(e){}return void 0===s.levels[e]&&(e=void 0),e}}"string"==typeof e?u+=":"+e:"symbol"==typeof e&&(u=void 0),s.name=e,s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=r||a,s.getLevel=function(){return i},s.setLevel=function(t,r){if("string"==typeof t&&void 0!==s.levels[t.toUpperCase()]&&(t=s.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(i=t,!1!==r&&function(e){var t=(o[e]||"silent").toUpperCase();if(typeof window!==n&&u){try{return void(window.localStorage[u]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(u)+"="+t+";"}catch(e){}}}(t),c.call(s,t,e),typeof console===n&&t<s.levels.SILENT)return"No console available for logging"},s.setDefaultLevel=function(e){t=e,f()||s.setLevel(e,!1)},s.resetLevel=function(){s.setLevel(t,!1),function(){if(typeof window!==n&&u){try{return void window.localStorage.removeItem(u)}catch(e){}try{window.document.cookie=encodeURIComponent(u)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},s.enableAll=function(e){s.setLevel(s.levels.TRACE,e)},s.disableAll=function(e){s.setLevel(s.levels.SILENT,e)};var l=f();null==l&&(l=t),s.setLevel(l,!1)}var l=new f,d={};l.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var n=d[e];return n||(n=d[e]=new f(e,l.getLevel(),l.methodFactory)),n};var h=typeof window!==n?window.log:void 0;return l.noConflict=function(){return typeof window!==n&&window.log===l&&(window.log=h),l},l.getLoggers=function(){return d},l.default=l,l})?o.call(n,t,n,e):o)||(e.exports=r)}()}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";t.r(o);var e=t(43),n=t.n(e);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,n,t){return n&&s(e.prototype,n),t&&s(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,r,i=[],s=!0,c=!1;try{for(t=t.call(e);!(s=(o=t.next()).done)&&(i.push(o.value),!n||i.length!==n);s=!0);}catch(e){c=!0,r=e}finally{try{s||null==t.return||t.return()}finally{if(c)throw r}}return i}}(e,n)||f(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){if(e){if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function d(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=f(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==t.return||t.return()}finally{if(c)throw i}}}}function h(e){return"swb_".concat(e)}var p={DEBUG:h("debug"),LOG_LEVEL:h("log"),ENV:h("env"),REGION:h("region"),DEPLOYMENT:h("d"),POLICY_SCOPE:h("p"),LANGUAGE:h("l"),SHOW:h("show"),get:function(e,n){return new URLSearchParams(n).get(e)||""},has:function(e,n){return new URLSearchParams(n).has(e)}};if(p.get(p.DEBUG,window.location.search))n().setLevel("debug",!0);else{var v=p.get(p.LOG_LEVEL,window.location.search);v&&n().setLevel(v,!0)}var g=n().methodFactory;n().methodFactory=function(e,n,t){return function(){for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];g(e,n,t).apply(void 0,["[semaphore] ".concat(String(t))].concat(r))}};var y,m,E,_,w,C,I,b,P,R={actionNotFoundError:function(e){return new Error('action "'.concat(e,'" not found'))},missingArgumentsError:function(e){return new Error('action "'.concat(e,'" missing arguments'))},expectedFunctionError:function(e){return new Error('action "'.concat(e,'" expected a function'))},unrecognizedLocationError:new Error("unrecognized location"),noIdentitiesError:new Error("no identities"),noPurposesError:new Error("no purposes"),noEnvironmentError:new Error("no environment"),noJurisdictionError:new Error("no jurisdiction"),notImplementedError:new Error("not implemented"),timedOutError:function(e){return new Error("Timed out in ".concat(e," ms."))},itemNotFoundError:new Error("item not found")},S=function(e,n){return fetch(e,n).then((function(e){return e.json()}))};function T(e,n){var t={method:e,mode:"cors",credentials:"omit"};return null!=n&&(t.body=JSON.stringify(n),t.headers={"Content-Type":"application/json"}),t}!function(e){e[e.BANNER=1]="BANNER",e[e.MODAL=2]="MODAL"}(y||(y={})),function(e){e[e.GOTO_MODAL=1]="GOTO_MODAL",e[e.GOTO_PREFERENCE=2]="GOTO_PREFERENCE"}(m||(m={})),function(e){e[e.SAVE_CURRENT_STATE=1]="SAVE_CURRENT_STATE",e[e.ACCEPT_ALL=2]="ACCEPT_ALL"}(E||(E={})),function(e){e[e.MIGRATE_DEFAULT=0]="MIGRATE_DEFAULT",e[e.MIGRATE_NEVER=1]="MIGRATE_NEVER",e[e.MIGRATE_FROM_ALLOW=2]="MIGRATE_FROM_ALLOW",e[e.MIGRATE_FROM_DENY=3]="MIGRATE_FROM_DENY",e[e.MIGRATE_ALWAYS=4]="MIGRATE_ALWAYS"}(_||(_={})),function(e){e[e.SESSION=1]="SESSION",e[e.PERSISTENT=2]="PERSISTENT"}(w||(w={})),function(e){e[e.FIRST_PARTY=1]="FIRST_PARTY",e[e.THIRD_PARTY=2]="THIRD_PARTY"}(C||(C={})),function(e){e[e.STRICTLY_NECESSARY=1]="STRICTLY_NECESSARY",e[e.FUNCTIONAL=2]="FUNCTIONAL",e[e.PERFORMANCE=3]="PERFORMANCE",e[e.MARKETING=4]="MARKETING"}(I||(I={})),function(e){e[e.BOTTOM=1]="BOTTOM",e[e.TOP=2]="TOP",e[e.BOTTOM_LEFT=3]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=4]="BOTTOM_RIGHT"}(b||(b={})),function(e){e[e.CENTER=1]="CENTER",e[e.LEFT_FULL_HEIGHT=2]="LEFT_FULL_HEIGHT",e[e.RIGHT_FULL_HEIGHT=3]="RIGHT_FULL_HEIGHT"}(P||(P={}));var k=n().getLogger("Future"),x=function(){function e(n,t){i(this,e),this._name=n,this._value=t,this._pendingResolvers=[],this._subscribers=[]}return c(e,[{key:"hasValue",value:function(){return void 0!==this._value}},{key:"getRawValue",value:function(){return this._value}},{key:"setRawValue",value:function(e){if(this._value=e,void 0!==e){for(var n=this._pendingResolvers.shift();n;n=this._pendingResolvers.shift())n(e);for(var t=this._subscribers.length-1;t>=0;t--)(0,this._subscribers[t])(e)}}},{key:"getValue",value:function(){var e=this;return new Promise((function(n){e._pendingResolvers.push(n),e.hasValue()&&n(e.getRawValue())}))}},{key:"setValue",value:function(e){var n=this;return k.trace("setValue",this._name,e),new Promise((function(t){n.setRawValue(e),t(e)}))}},{key:"subscribe",value:function(e){k.trace("subscribe",this._name,e);for(var n=this._subscribers.length-1;n>=0;n--)if(e===this._subscribers[n])return;this._subscribers.push(e)}}]),e}();function L(){return window.dataLayer=window.dataLayer||[]}function O(e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))return!1;return!0}var A,j=n().getLogger("cookie");function G(e){return j.trace("getItem",e),new Promise((function(n,t){try{var o=window.document.cookie.split("; ").reduce((function(n,t){var o=t.split("=");return o[0]===e?decodeURIComponent(o[1]):n}),"");o?n(o):t(R.itemNotFoundError)}catch(e){t(e)}}))}var N=new Uint8Array(16);function V(){if(!A&&!(A="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return A(N)}var F=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function M(e){return"string"==typeof e&&F.test(e)}for(var J=[],U=0;U<256;++U)J.push((U+256).toString(16).substr(1));function D(e,n,t){var o=(e=e||{}).random||(e.rng||V)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n){t=t||0;for(var r=0;r<16;++r)n[t+r]=o[r];return n}return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(J[e[n+0]]+J[e[n+1]]+J[e[n+2]]+J[e[n+3]]+"-"+J[e[n+4]]+J[e[n+5]]+"-"+J[e[n+6]]+J[e[n+7]]+"-"+J[e[n+8]]+J[e[n+9]]+"-"+J[e[n+10]]+J[e[n+11]]+J[e[n+12]]+J[e[n+13]]+J[e[n+14]]+J[e[n+15]]).toLowerCase();if(!M(t))throw TypeError("Stringified UUID is invalid");return t}(o)}var z,H,B=n().getLogger("scripts"),W="semaphore",Y=n().getLogger("ketch");function q(e){if(e.services){var n=e.services.shoreline;return n.endsWith("/")&&(n=n.slice(0,-1)),n.endsWith("/web/v2")||(n+="/web/v2"),n}return"https://global.ketchcdn.com/web/v2"}!function(e){e.Consent="experiences.consent",e.Preference="experiences.preference"}(z||(z={})),function(e){e.SetConsent="setConsent",e.InvokeRight="invokeRight",e.Close="close",e.WillNotShow="willNotShow"}(H||(H={}));var K,$=function(){function e(n){i(this,e),this._config=n,this._consent=new x("consent"),this._environment=new x("environment"),this._geoip=new x("geoip"),this._identities=new x("identities"),this._jurisdiction=new x("jurisdiction"),this._regionInfo=new x("regionInfo"),this._origin=window.location.protocol+"//"+window.location.host,this._appDivs=[],this._hideExperience=[],this._willShowExperience=[],this._invokeRights=[],this._showPreferenceExperience=void 0,this._showConsentExperience=void 0}return c(e,[{key:"registerPlugin",value:function(e){var n=this;e.init&&e.init(this,this._config),e.environmentLoaded&&this.onEnvironment((function(t){if(e.environmentLoaded)return e.environmentLoaded(n,n._config,t)})),e.geoIPLoaded&&this.onGeoIP((function(t){if(e.geoIPLoaded)return e.geoIPLoaded(n,n._config,t)})),e.identitiesLoaded&&this.onIdentities((function(t){if(e.identitiesLoaded)return e.identitiesLoaded(n,n._config,t)})),e.jurisdictionLoaded&&this.onJurisdiction((function(t){if(e.jurisdictionLoaded)return e.jurisdictionLoaded(n,n._config,t)})),e.regionInfoLoaded&&this.onRegionInfo((function(t){if(e.regionInfoLoaded)return e.regionInfoLoaded(n,n._config,t)})),e.showConsentExperience&&this.onShowConsentExperience(e.showConsentExperience),e.showPreferenceExperience&&this.onShowPreferenceExperience(e.showPreferenceExperience),e.willShowExperience&&this.onWillShowExperience((function(){if(e.willShowExperience)return e.willShowExperience(n,n._config)})),e.experienceHidden&&this.onHideExperience((function(t){if(e.experienceHidden)return e.experienceHidden(n,n._config,t)})),e.consentChanged&&this.onConsent((function(t){if(e.consentChanged)return e.consentChanged(n,n._config,t)})),e.rightInvoked&&this.onInvokeRight((function(t){if(e.rightInvoked)return e.rightInvoked(n,n._config,t)}))}},{key:"getConfig",value:function(){return Promise.resolve(this._config)}},{key:"shouldShowConsent",value:function(e){var n;if(null!==(n=this._config.experiences)&&void 0!==n&&n.consent&&this._config.purposes){var t,o=d(this._config.purposes);try{for(o.s();!(t=o.n()).done;){var r=t.value;if(void 0===e.purposes[r.code])return Y.debug("shouldShowConsent",!0),!0}}catch(e){o.e(e)}finally{o.f()}}return p.has(p.SHOW,window.location.search)&&!this._hasExperienceBeenDisplayed?(Y.debug("shouldShowConsent",!0),!0):(Y.debug("shouldShowConsent",!1),!1)}},{key:"selectExperience",value:function(){if(this._config.purposes){var e,n=d(this._config.purposes);try{for(n.s();!(e=n.n()).done;){var t,o;if(e.value.requiresOptIn&&2==(null===(t=this._config.experiences)||void 0===t||null===(o=t.consent)||void 0===o?void 0:o.experienceDefault))return Y.debug("selectExperience","experiences.consent.modal"),"experiences.consent.modal"}}catch(e){n.e(e)}finally{n.f()}}return Y.debug("selectExperience","experiences.consent.banner"),"experiences.consent.banner"}},{key:"willShowExperience",value:function(e){var n;if(null!==(n=this._config.options)&&void 0!==n&&n.appDivs){var t,o=d(this._config.options.appDivs.split(","));try{for(o.s();!(t=o.n()).done;){var r=t.value,i=document.getElementById(r);i&&(this._appDivs.push({id:r,zIndex:i.style.zIndex}),i.style.zIndex="-1")}}catch(e){o.e(e)}finally{o.f()}}this._willShowExperience.forEach((function(n){return n(e)})),this._isExperienceDisplayed=!0}},{key:"showConsentExperience",value:function(){var e=this;return Y.info("showConsentExperience"),(this._consent.hasValue()?this._consent.getValue():Promise.resolve({purposes:{},vendors:[]})).then((function(n){return void 0===n?{purposes:{},vendors:[]}:(e._showConsentExperience&&(e.willShowExperience(z.Consent),e._showConsentExperience(e,e._config,n,{displayHint:e.selectExperience()})),n)}))}},{key:"hasConsent",value:function(){return this._consent.hasValue()}},{key:"triggerPermitChangedEvent",value:function(e){Y.info("triggerPermitChangedEvent");var n={event:"ketchPermitChanged"},t={event:"switchbitPermitChanged"};for(var o in e.purposes)n[o]=e.purposes[o],t[o]=e.purposes[o];L().push(n),L().push(t)}},{key:"changeConsent",value:function(e){return this.pollIdentity([4e3,8e3]),this.setConsent(e)}},{key:"updateClientConsent",value:function(e){if(Y.info("updateClientConsent",e),!e||O(e))return this._consent.setValue(void 0);if(this.hasConsent()){var n=this._consent.getRawValue();for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&!Object.prototype.hasOwnProperty.call(e,t)&&(e.purposes[t]=n.purposes[t])}return this.triggerPermitChangedEvent(e),sessionStorage.setItem("consent",JSON.stringify(e)),this._consent.setValue(e)}},{key:"setConsent",value:function(e){var n=this;return Y.info("setConsent",e),this.updateClientConsent(e).then((function(){return n.getIdentities().then((function(t){return n.updateConsent(t,e)})).then((function(){return e}))}))}},{key:"mergeSessionConsent",value:function(e,n){if(Y.info("mergeSessionConsent",e,n),!n||!e)return this.updateClientConsent(e);var t={};if(this._config.purposes){var o,r=d(this._config.purposes);try{for(r.s();!(o=r.n()).done;)t[o.value.code]=!0}catch(e){r.e(e)}finally{r.f()}}var i=!1;for(var s in n.purposes)Object.prototype.hasOwnProperty.call(n.purposes,s)&&!Object.prototype.hasOwnProperty.call(e.purposes,s)&&t[s]&&(e.purposes[s]=n.purposes[s],i=!0);return i?this.setConsent(e):this.updateClientConsent(e)}},{key:"getConsent",value:function(){var e=this;if(Y.info("getConsent"),this.hasConsent())return this._consent.getValue();var n,t=sessionStorage.getItem("consent");return t&&(n=JSON.parse(t)),this.getIdentities().then((function(t){return e.fetchConsent(t).then((function(t){return e.mergeSessionConsent(t,n)})).then((function(n){var t=!1,o=e.shouldShowConsent(n);if(e._config.purposes){var r,i=d(e._config.purposes);try{for(i.s();!(r=i.n()).done;){var s=r.value;void 0!==n.purposes[s.code]||s.requiresOptIn||(n.purposes[s.code]=!0,t=!0)}}catch(e){i.e(e)}finally{i.f()}}return(t?e.setConsent(n):e.updateClientConsent(n)).then((function(){if(o)return e.showConsentExperience();e._hideExperience.forEach((function(e){e(H.WillNotShow)}))}))}))})).then((function(){return e._consent.getValue()}))}},{key:"retrieveConsent",value:function(){return Y.info("retrieveConsent"),this._consent.hasValue()?this._consent.getValue():Promise.resolve({purposes:{},vendors:[]})}},{key:"onConsent",value:function(e){this._consent.subscribe(e)}},{key:"onInvokeRight",value:function(e){this._invokeRights.push(e)}},{key:"fetchConsent",value:function(e){var n=this;if(Y.debug("getConsent",e),!e||0===Object.keys(e).length)return Promise.reject(R.noIdentitiesError);if(!(this._config&&this._config.property&&this._config.organization&&this._config.environment&&this._config.purposes&&this._config.jurisdiction&&0!==this._config.purposes.length))return Promise.reject(R.noPurposesError);var t,o={organizationCode:this._config.organization.code||"",propertyCode:this._config.property.code||"",environmentCode:this._config.environment.code,jurisdictionCode:this._config.jurisdiction.code||"",controllerCode:"",identities:e,purposes:{}},r=d(this._config.purposes);try{for(r.s();!(t=r.n()).done;){var i=t.value;o.purposes[i.code]={legalBasisCode:i.legalBasisCode}}}catch(e){r.e(e)}finally{r.f()}return function(e,n){var t="/consent/".concat(n.organizationCode,"/get");return S(e+t,T("POST",n)).then((function(e){return e}))}(q(this._config),o).then((function(e){var t={purposes:{}};if(n._config.purposes&&e.purposes){var o,r=d(n._config.purposes);try{for(r.s();!(o=r.n()).done;){var i=o.value;if(e.purposes[i.code]){var s=e.purposes[i.code];"string"==typeof s?t.purposes[i.code]="true"===s:s.allowed&&(t.purposes[i.code]="true"===s.allowed)}}}catch(e){r.e(e)}finally{r.f()}}return e.vendors&&(t.vendors=e.vendors),t}))}},{key:"updateConsent",value:function(e,n){if(Y.debug("updateConsent",e,n),!e||0===Object.keys(e).length)return Y.debug("updateConsent","skipping"),Promise.resolve();if(!(this._config&&this._config.organization&&this._config.property&&this._config.environment&&this._config.jurisdiction&&this._config.purposes&&0!==this._config.purposes.length))return Y.debug("updateConsent","skipping"),Promise.resolve();if(O(n))return Y.debug("updateConsent","skipping"),Promise.resolve();var t={organizationCode:this._config.organization.code||"",propertyCode:this._config.property.code||"",environmentCode:this._config.environment.code,controllerCode:"",identities:e,jurisdictionCode:this._config.jurisdiction.code||"",purposes:{},migrationOption:0,vendors:n.vendors};if(this._config.options&&(t.migrationOption=parseInt(String(this._config.options.migration))),this._config.purposes&&n){var o,r=d(this._config.purposes);try{for(r.s();!(o=r.n()).done;){var i=o.value;void 0!==n.purposes[i.code]&&(t.purposes[i.code]={allowed:n.purposes[i.code].toString(),legalBasisCode:i.legalBasisCode})}}catch(e){r.e(e)}finally{r.f()}}return O(t.purposes)?(Y.debug("updateConsent","calculated consents empty"),Promise.resolve()):function(e,n){var t="/consent/".concat(n.organizationCode,"/update");return S(e+t,T("POST",n)).then((function(){}))}(q(this._config),t)}},{key:"setEnvironment",value:function(e){return Y.info("setEnvironment",e),this._environment.setValue(e)}},{key:"detectEnvironment",value:function(){if(Y.info("detectEnvironment"),!this._config.environments)return Y.debug("detectEnvironment","no environments"),Promise.reject(R.noEnvironmentError);var e=p.get(p.ENV,window.location.search);if(e){for(var n=0;n<this._config.environments.length;n++){var t=this._config.environments[n];if(e&&t.code===e)return Y.debug("found",t),this.setEnvironment(t)}return Y.error("not found",e),Promise.reject(R.noEnvironmentError)}for(var o={},r=0;r<this._config.environments.length;r++){var i=this._config.environments[r],s=atob(i.pattern||"");s&&new RegExp(s).test(window.document.location.href)&&(!o.pattern||s.length>atob(o.pattern).length)&&(o=i)}if(o.pattern)return Y.debug("matched",o),this.setEnvironment(o);for(var c=0;c<this._config.environments.length;c++){var u=this._config.environments[c];if("production"===u.code)return Y.debug(u.code,u),this.setEnvironment(u)}return Promise.reject(R.noEnvironmentError)}},{key:"getEnvironment",value:function(){var e=this;return Y.info("getEnvironment"),this._environment.hasValue()?this._environment.getValue():this.detectEnvironment().then((function(n){return e.setEnvironment(n)}))}},{key:"onEnvironment",value:function(e){this._environment.subscribe(e)}},{key:"pushGeoIP",value:function(e){Y.info("pushGeoIP",e);var n={event:"ketchGeoip",ip:e.ip,countryCode:e.countryCode,regionCode:e.regionCode};return L().push(n)}},{key:"setGeoIP",value:function(e){return Y.info("setGeoIP",e),this.pushGeoIP(e),this._geoip.setValue(e)}},{key:"loadGeoIP",value:function(){return Y.info("loadGeoIP"),e=q(this._config),S(e+"/ip",T("GET")).then((function(e){return e}));var e}},{key:"getGeoIP",value:function(){var e=this;return Y.info("getGeoIP"),this._geoip.hasValue()?this._geoip.getValue():this.loadGeoIP().then((function(e){return e.location})).then((function(n){return e.setGeoIP(n)}))}},{key:"onGeoIP",value:function(e){this._geoip.subscribe(e)}},{key:"setIdentities",value:function(e){return Y.info("setIdentities",e),this._identities.setValue(e)}},{key:"getProperty",value:function(e){for(var n=e.split("."),t=window,o=null;n.length>0;)if("window"===n[0])n.shift();else if("object"===r(t))"()"===n[0].slice(-2)?(o=t,t=t[n[0].slice(0,-2)]):(o=t,t=t[n.shift()]);else{if("function"!=typeof t)return null;var i=t.call(o);o=t,t=i,n.shift()}return t&&"number"==typeof t&&(t=t.toString()),t}},{key:"collectIdentities",value:function(){Y.info("collectIdentities");var e=this._config.identities;if(!this._config||!this._config.organization||null==e||O(e))return Promise.resolve({});var n=[],t=[],o=[],r=[],i=[];for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s))switch(e[s].type){case"window":n.push([s,e[s].variable]);break;case"cookie":o.push([s,e[s].variable]);break;case"managedCookie":r.push([s,e[s].variable]);break;default:t.push([s,e[s].variable])}if(n.length>0){var c,u=d(n);try{for(u.s();!(c=u.n()).done;){var a=c.value,f=this.getProperty(a[1]);f&&i.push(Promise.resolve([a[0],f]))}}catch(e){u.e(e)}finally{u.f()}}if(t.length>0){var l,h=d(L());try{for(h.s();!(l=h.n()).done;){var p,v=l.value,g=d(t);try{for(g.s();!(p=g.n()).done;){var y=p.value;if(Object.prototype.hasOwnProperty.call(v,y[1])){var m=v[y[1]];if(!m)continue;i.push(Promise.resolve([y[0],m]))}}}catch(e){g.e(e)}finally{g.f()}}}catch(e){h.e(e)}finally{h.f()}}if(o.length>0){var E,_=d(o);try{var w=function(){var e=E.value;i.push(G(e[1]).then((function(n){return[e[0],n]}),(function(e){return Y.trace(e),[]})))};for(_.s();!(E=_.n()).done;)w()}catch(e){_.e(e)}finally{_.f()}}if(r.length>0){var C,I=d(r);try{var b=function(){var e=C.value;i.push(G(e[1]).then((function(n){return[e[0],n]}),(function(){return function(e,n,t){j.trace("setItem",e,n);var o=new Date(Date.now()+63072e6).toUTCString(),r=window.document.location.hostname.split(".");return new Promise((function(t,i){try{for(var s=2;s<=r.length;s++)if(window.document.cookie=e+"="+encodeURIComponent(n)+"; expires="+o+"; path=/; domain="+r.slice(-1*s).join("."),window.document.cookie.split("; ").reduce((function(n,t){var o=t.split("=");return o[0]===e?decodeURIComponent(o[1]):n}),""))return t(n);window.document.cookie=e+"="+encodeURIComponent(n)+"; expires="+o+"; path=/",t(n)}catch(e){i(e)}}))}(e[1],D()).then((function(n){return[e[0],n]}),(function(e){return Y.trace(e),[]}))})))};for(I.s();!(C=I.n()).done;)b()}catch(e){I.e(e)}finally{I.f()}}var P={};return Promise.all(i).then((function(e){var n,t=d(e);try{for(t.s();!(n=t.n()).done;){var o=n.value;2===o.length&&o[1]&&"0"!==o[1]&&(P[o[0]]=o[1])}}catch(e){t.e(e)}finally{t.f()}return P}))}},{key:"getIdentities",value:function(){var e=this;return Y.info("getIdentities"),this._identities.hasValue()?this._identities.getValue():this.collectIdentities().then((function(n){return e.setIdentities(n)}))}},{key:"onIdentities",value:function(e){this._identities.subscribe(e)}},{key:"pushJurisdiction",value:function(e){Y.info("pushJurisdiction",e);var n={event:"ketchJurisdiction",jurisdictionCode:e};L().push(n)}},{key:"setJurisdiction",value:function(e){return Y.info("setJurisdiction",e),this.pushJurisdiction(e),this._jurisdiction.setValue(e)}},{key:"getJurisdiction",value:function(){var e=this;return Y.info("getJurisdiction"),this._jurisdiction.hasValue()?this._jurisdiction.getValue():this.loadJurisdiction().then((function(n){return e.setJurisdiction(n)}))}},{key:"onJurisdiction",value:function(e){this._jurisdiction.subscribe(e)}},{key:"loadJurisdiction",value:function(){var e=this;Y.info("loadJurisdiction",this._config.jurisdiction);var n=p.get(p.POLICY_SCOPE,window.location.search);if(n)return this.setJurisdiction(n);var t=this._config.jurisdiction;if(!t)return Promise.reject(R.noJurisdictionError);var o=t.variable;if(o){var r,i=d(L());try{for(i.s();!(r=i.n()).done;){var s=r.value[o];if(s)return this.setJurisdiction(s)}}catch(e){i.e(e)}finally{i.f()}}return this.loadRegionInfo().then((function(e){return t.scopes&&t.scopes[e]?t.scopes[e]:t.defaultScopeCode})).then((function(n){return n?e.setJurisdiction(n):Promise.reject(R.noJurisdictionError)})).catch((function(){return t.defaultScopeCode?e.setJurisdiction(t.defaultScopeCode):Promise.reject(R.noJurisdictionError)}))}},{key:"setRegionInfo",value:function(e){return Y.info("setRegionInfo",e),this._regionInfo.setValue(e)}},{key:"loadRegionInfo",value:function(){var e=this;Y.info("loadRegionInfo");var n=p.get(p.REGION,window.location.search);return n?this.setRegionInfo(n):this.loadGeoIP().then((function(e){return e.location})).then((function(n){return e.setGeoIP(n)})).then((function(e){if(null==e)return Promise.reject(R.unrecognizedLocationError);var n=e.countryCode;if(!n)return Promise.reject(R.unrecognizedLocationError);var t=n;return"US"===n&&(t="".concat(n,"-").concat(e.regionCode)),t})).then((function(n){return e.setRegionInfo(n)}))}},{key:"getRegionInfo",value:function(){var e=this;return Y.info("getRegionInfo"),this._regionInfo.hasValue()?this._regionInfo.getValue():this.loadRegionInfo().then((function(n){return e.setRegionInfo(n)}))}},{key:"onRegionInfo",value:function(e){this._regionInfo.subscribe(e)}},{key:"showPreferenceExperience",value:function(){var e=this;return Y.info("showPreference"),Promise.all([this.getConfig(),this.getConsent()]).then((function(n){var t,o=u(n,2),r=o[0],i=o[1];return null!==(t=r.experiences)&&void 0!==t&&t.preference?(e._showPreferenceExperience&&(e.willShowExperience(z.Preference),e._showPreferenceExperience(e,r,i)),i):i}))}},{key:"invokeRight",value:function(e){if(Y.debug("invokeRights",e),!e.rightsEmail||""===e.rightsEmail||!e.right||""===e.right)return Promise.resolve();var n=this._identities._value;if(void 0===n&&(n={}),n.email=e.rightsEmail,!(this._config&&this._config.organization&&this._config.property&&this._config.environment&&this._config.jurisdiction&&this._config.rights&&0!==this._config.rights.length))return Promise.resolve();var t,o={email:e.rightsEmail,first:e.firstName,last:e.lastName,country:e.country,stateRegion:e.state,description:e.details},r={organizationCode:this._config.organization.code||"",propertyCode:this._config.property.code||"",environmentCode:this._config.environment.code,controllerCode:"",identities:n,jurisdictionCode:this._config.jurisdiction.code||"",rightCode:e.right,user:o},i=d(this._invokeRights);try{for(i.s();!(t=i.n()).done;)(0,t.value)(r)}catch(e){i.e(e)}finally{i.f()}return function(e,n){var t="/rights/".concat(n.organizationCode,"/invoke");return S(e+t,T("POST",n)).then((function(){}))}(q(this._config),r)}},{key:"experienceClosed",value:function(e){var n,t=this,o=d(this._appDivs);try{for(o.s();!(n=o.n()).done;){var r=n.value,i=document.getElementById(r.id);i&&(i.style.zIndex=r.zIndex)}}catch(e){o.e(e)}finally{o.f()}return this._appDivs=[],this._isExperienceDisplayed=!1,this._hasExperienceBeenDisplayed=!0,this._hideExperience.forEach((function(n){n(e)})),"setConsent"!==e?this.retrieveConsent().then((function(e){if(t._config.purposes){var n,o=d(t._config.purposes);try{for(o.s();!(n=o.n()).done;){var r=n.value;void 0===e.purposes[r.code]&&r.requiresOptIn&&(e.purposes[r.code]=!1)}}catch(e){o.e(e)}finally{o.f()}}return t.setConsent(e)})):Promise.resolve({purposes:{},vendors:[]})}},{key:"onWillShowExperience",value:function(e){this._willShowExperience.push(e)}},{key:"onHideExperience",value:function(e){this._hideExperience.push(e)}},{key:"onShowPreferenceExperience",value:function(e){this._showPreferenceExperience=e}},{key:"onShowConsentExperience",value:function(e){this._showConsentExperience=e}},{key:"refreshIdentityConsent",value:function(){var e=this;return Y.debug("refreshIdentityConsent"),Promise.all([this.collectIdentities(),this.getIdentities()]).then((function(n){var t=u(n,2),o=t[0],r=t[1];if(o.size===r.size){var i=!0;if(Object.keys(o).forEach((function(e){o[e]!==r[e]&&(i=!1)})),i)return}return e.setIdentities(o).then((function(n){if(!e._isExperienceDisplayed)return Promise.all([e.fetchConsent(n),e.retrieveConsent()]).then((function(t){var o=u(t,2),r=o[0],i=o[1];if(Object.keys(r).length===Object.keys(i).length){var s=!1;for(var c in r)if(r.purposes[c]!==i.purposes[c]){s=!0;break}if(!s)return}return e._hasExperienceBeenDisplayed?e.updateConsent(n,i):e.showConsentExperience()}))}))}))}},{key:"pollIdentity",value:function(e){Y.info("pollIdentity");var n,t=d(e);try{for(t.s();!(n=t.n()).done;){var o=n.value;setTimeout(this.refreshIdentityConsent.bind(this),o)}}catch(e){t.e(e)}finally{t.f()}}}]),e}(),Q=n().getLogger("index");function X(){var e=oe().shift();return Array.isArray(e)&&"init"==e[0]?function(e){Y.info("loadConfig");var n=[],t=new $(e);return n.push(t.detectEnvironment()),n.push(t.loadJurisdiction()),Promise.all(n).then((function(n){var o=u(n,2),r=o[0],i=o[1];if(!r.hash)return Promise.reject(R.noEnvironmentError);if(Y.info("loadConfig",r,i),!(t._config&&t._config.organization&&t._config.property&&i))throw R.noJurisdictionError;var s=p.get(p.LANGUAGE,window.location.search)||t._config.language;Y.info("language",s);var c={organizationCode:t._config.organization.code||"",propertyCode:t._config.property.code||"",environmentCode:r.code,hash:r.hash||"",languageCode:s||"en",jurisdictionCode:i};return function(e,n){var t="/config/".concat(n.organizationCode,"/").concat(n.propertyCode,"/").concat(n.environmentCode,"/").concat(n.hash,"/").concat(n.jurisdictionCode,"/").concat(n.languageCode,"/config.json");return S(e+t,T("GET")).then((function(e){return e}))}(q(e),c).then((function(n){if(e&&e.services){var t=e.services.lanyard;if(t)return t=t.split("/").slice(0,-1).join("/")+"/lanyard.".concat(n.language,".js"),(o=t,B.trace("load",o),new Promise((function(e,n){B.trace("loaded",o);var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.src=o,r.onerror=n,r.addEventListener("load",e,!1),t.appendChild(r)}))).then((function(){return new $(n)}))}var o;return new $(n)}))}))}(e[1]).then((function(e){Q.trace("init"),K=e;for(var n=[],t=oe(te);t.length>0;){var o=t.shift(),r=void 0;if(Array.isArray(o)){var i=o.shift();r=ne.apply(void 0,[i].concat(a(o)))}else void 0!==o&&(r=ne(o));r&&r.then&&n.push(r)}return n.push(K.getConsent()),Promise.all(n).then((function(){e.pollIdentity([1e3,2e3,4e3,8e3])}))})):(Q.error("ketch tag command queue is not configured correctly"),Promise.resolve())}function Z(e){if(void 0!==K)switch(e){case"getConfig":return K.getConfig;case"getConsent":return K.getConsent;case"getEnvironment":return K.getEnvironment;case"getGeoIP":return K.getGeoIP;case"getIdentities":return K.getIdentities;case"getJurisdiction":return K.getJurisdiction;case"getRegionInfo":return K.getRegionInfo;case"onConsent":return K.onConsent;case"onEnvironment":return K.onEnvironment;case"onGeoIP":return K.onGeoIP;case"onHideExperience":return K.onHideExperience;case"onWillShowExperience":return K.onWillShowExperience;case"onIdentities":return K.onIdentities;case"onJurisdiction":return K.onJurisdiction;case"onRegionInfo":return K.onRegionInfo;case"setEnvironment":return K.setEnvironment;case"setGeoIP":return K.setGeoIP;case"setIdentities":return K.setIdentities;case"setJurisdiction":return K.setJurisdiction;case"setRegionInfo":return K.setRegionInfo;case"showConsent":return K.showConsentExperience;case"showPreferences":return K.showPreferenceExperience;case"registerPlugin":return K.registerPlugin}}function ee(e){return!!(e&&e.constructor&&e.call&&e.apply)}function ne(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];Q.trace(e,t);var r=Z(e);if(void 0===r)return Promise.reject(R.actionNotFoundError(e));var i=r.toString().match(/^function\s*[^(]*\(\s*([^)]*)\)/m);if(null===i)return Promise.reject(R.actionNotFoundError(e));var s=i[1],c=s.split(",");if(""===s&&(c=[]),Q.debug("entrypoint",e,t,c),t.length<c.length)return Promise.reject(R.missingArgumentsError(e));if(t.length==c.length)return r.apply(K,t);if(t.length==c.length+1){var u=t.pop();return ee(u)?r.apply(K,t).then(u):Promise.reject(R.expectedFunctionError(e))}var a=t.pop();if(!ee(a))return Promise.reject(R.expectedFunctionError(e));var f=t.pop();return ee(f)?r.apply(K,t).then(f).catch(a):Promise.reject(R.expectedFunctionError(e))}function te(e){var n,t;Array.isArray(e)?(t=e.shift(),n=ne.apply(void 0,[t].concat(a(e)))):n=ne(t=e),n&&n.then&&n.then((function(){Q.trace("".concat(t," completed"))})).catch((function(e){Q.trace("".concat(t," failed: ").concat(e))}))}function oe(e){var n="Ketch";window.semaphore&&(n=W);var t=window[n]=window[n]||[];return void 0!==e&&(t.push=e),t}Q.trace("booting"),"loading"===document.readyState?(Q.debug("adding event listener"),document.addEventListener("DOMContentLoaded",X)):(Q.debug("page already loaded"),X().then((function(){Q.trace("booted")})))})(),window.__semaphore__=o})();