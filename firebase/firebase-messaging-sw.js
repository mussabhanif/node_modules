import{registerVersion as e,_registerComponent as t,_getProvider as n,getApp as i}from"https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";class o extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,a.prototype.create)}}class a{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],s=a?function(e,t){return e.replace(r,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(a,n):"Error",c=`${this.serviceName}: ${s} (${i}).`;return new o(i,c,n)}}const r=/\{\$([^}]+)}/g;function s(e){return e&&e._delegate?e._delegate:e}class c{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}let u,d;const l=new WeakMap,p=new WeakMap,f=new WeakMap,g=new WeakMap,h=new WeakMap;let w={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return p.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(d||(d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(v(this),t),y(l.get(this))}:function(...t){return y(e.apply(v(this),t))}:function(t,...n){const i=e.call(v(this),t,...n);return f.set(i,t.sort?t.sort():[t]),y(i)}}function b(e){return"function"==typeof e?m(e):(e instanceof IDBTransaction&&function(e){if(p.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)}));p.set(e,t)}(e),t=e,(u||(u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,w):e);var t}function y(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{t(y(e.result)),i()},a=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&l.set(t,e)})).catch((()=>{})),h.set(t,e),t}(e);if(g.has(e))return g.get(e);const t=b(e);return t!==e&&(g.set(e,t),h.set(t,e)),t}const v=e=>h.get(e);function k(e,t,{blocked:n,upgrade:i,blocking:o,terminated:a}={}){const r=indexedDB.open(e,t),s=y(r);return i&&r.addEventListener("upgradeneeded",(e=>{i(y(r.result),e.oldVersion,e.newVersion,y(r.transaction))})),n&&r.addEventListener("blocked",(()=>n())),s.then((e=>{a&&e.addEventListener("close",(()=>a())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}function I(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),y(n).then((()=>{}))}const S=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],D=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(D.get(t))return D.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=T.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!S.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,o?"readwrite":"readonly");let r=a.store;return i&&(r=r.index(t.shift())),(await Promise.all([r[n](...t),o&&a.done]))[0]};return D.set(t,a),a}w=(e=>({...e,get:(t,n,i)=>C(t,n)||e.get(t,n,i),has:(t,n)=>!!C(t,n)||e.has(t,n)}))(w);const j="@firebase/installations",_=new a("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function E(e){return e instanceof o&&e.code.includes("request-failed")}function M({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function O(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function P(e,t){const n=(await t.json()).error;return _.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function A({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function x(e,{refreshToken:t}){const n=A(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}(t)),n}async function B(e){const t=await e();return t.status>=500&&t.status<600?e():t}function N(e){return new Promise((t=>{setTimeout(t,e)}))}const K=/^[cdef][\w-]{21}$/;function L(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return K.test(t)?t:""}catch(e){return""}}function $(e){return`${e.appName}!${e.appId}`}const F=new Map;function q(e,t){const n=$(e);H(n,t),function(e,t){const n=function(){!R&&"BroadcastChannel"in self&&(R=new BroadcastChannel("[Firebase] FID Change"),R.onmessage=e=>{H(e.data.key,e.data.fid)});return R}();n&&n.postMessage({key:e,fid:t});0===F.size&&R&&(R.close(),R=null)}(n,t)}function H(e,t){const n=F.get(e);if(n)for(const e of n)e(t)}let R=null;const U="firebase-installations-store";let W=null;function V(){return W||(W=k("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(U)}})),W}async function G(e,t){const n=$(e),i=(await V()).transaction(U,"readwrite"),o=i.objectStore(U),a=await o.get(n);return await o.put(t,n),await i.done,a&&a.fid===t.fid||q(e,t.fid),t}async function J(e){const t=$(e),n=(await V()).transaction(U,"readwrite");await n.objectStore(U).delete(t),await n.done}async function z(e,t){const n=$(e),i=(await V()).transaction(U,"readwrite"),o=i.objectStore(U),a=await o.get(n),r=t(a);return void 0===r?await o.delete(n):await o.put(r,n),await i.done,!r||a&&a.fid===r.fid||q(e,r.fid),r}async function Y(e){let t;const n=await z(e.appConfig,(n=>{const i=function(e){return X(e||{fid:L(),registrationStatus:0})}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(_.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=M(e),o=A(e),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const r={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.6.0"},s={method:"POST",headers:o,body:JSON.stringify(r)},c=await B((()=>fetch(i,s)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:O(e.authToken)}}throw await P("Create Installation",c)}(e,t);return G(e.appConfig,n)}catch(n){throw E(n)&&409===n.customData.serverCode?await J(e.appConfig):await G(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Q(e)}:{installationEntry:t}}(e,i);return t=o.registrationPromise,o.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Q(e){let t=await Z(e.appConfig);for(;1===t.registrationStatus;)await N(100),t=await Z(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Y(e);return n||t}return t}function Z(e){return z(e,(e=>{if(!e)throw _.create("installation-not-found");return X(e)}))}function X(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}async function ee({appConfig:e,heartbeatServiceProvider:t},n){const i=function(e,{fid:t}){return`${M(e)}/${t}/authTokens:generate`}(e,n),o=x(e,n),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const r={installation:{sdkVersion:"w:0.6.0",appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(r)},c=await B((()=>fetch(i,s)));if(c.ok){return O(await c.json())}throw await P("Generate Auth Token",c)}async function te(e,t=!1){let n;const i=await z(e.appConfig,(i=>{if(!ie(i))throw _.create("not-registered");const o=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(o))return i;if(1===o.requestStatus)return n=async function(e,t){let n=await ne(e.appConfig);for(;1===n.authToken.requestStatus;)await N(100),n=await ne(e.appConfig);const i=n.authToken;return 0===i.requestStatus?te(e,t):i}(e,t),i;{if(!navigator.onLine)throw _.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await ee(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await G(e.appConfig,i),n}catch(n){if(!E(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await G(e.appConfig,n)}else await J(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function ne(e){return z(e,(e=>{if(!ie(e))throw _.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n}))}function ie(e){return void 0!==e&&2===e.registrationStatus}async function oe(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Y(e);t&&await t}(n);return(await te(n,t)).token}function ae(e){return _.create("missing-app-config-values",{valueName:e})}const re=e=>{const t=e.getProvider("app").getImmediate(),i=n(t,"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await Y(t);return i?i.catch(console.error):te(t).catch(console.error),n.fid}(i),getToken:e=>oe(i,e)}};t(new c("installations",(e=>{const t=e.getProvider("app").getImmediate(),i=function(e){if(!e||!e.options)throw ae("App Configuration");if(!e.name)throw ae("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ae(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:i,heartbeatServiceProvider:n(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),t(new c("installations-internal",re,"PRIVATE")),e(j,"0.6.0"),e(j,"0.6.0","esm2017");const se="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";var ce,ue;function de(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function le(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),i=new Uint8Array(n.length);for(let e=0;e<n.length;++e)i[e]=n.charCodeAt(e);return i}!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(ce||(ce={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(ue||(ue={}));const pe="firebase-messaging-store";let fe=null;function ge(){return fe||(fe=k("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(pe)}})),fe}async function he(e){const t=me(e),n=await ge(),i=await n.transaction(pe).objectStore(pe).get(t);if(i)return i;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map((e=>e.name));if(!e.includes("fcm_token_details_db"))return null}let t=null;return(await k("fcm_token_details_db",5,{upgrade:async(n,i,o,a)=>{var r;if(i<2)return;if(!n.objectStoreNames.contains("fcm_token_object_Store"))return;const s=a.objectStore("fcm_token_object_Store"),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(r=e.createTime)&&void 0!==r?r:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:de(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:de(e.auth),p256dh:de(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:de(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:de(e.auth),p256dh:de(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:de(e.vapidKey)}}}}})).close(),await I("fcm_token_details_db"),await I("fcm_vapid_details_db"),await I("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await we(e,t),t}}async function we(e,t){const n=me(e),i=(await ge()).transaction(pe,"readwrite");return await i.objectStore(pe).put(t,n),await i.done,t}function me({appConfig:e}){return e.appId}const be=new a("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function ye(e,t){const n={method:"DELETE",headers:await ke(e)};try{const i=await fetch(`${ve(e.appConfig)}/${t}`,n),o=await i.json();if(o.error){const e=o.error.message;throw be.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw be.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function ve({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function ke({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ie({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==se&&(o.web.applicationPubKey=i),o}async function Se(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:le(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:de(t.getKey("auth")),p256dh:de(t.getKey("p256dh"))},i=await he(e.firebaseDependencies);if(i){if(function(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&i&&o&&a}(i.subscriptionOptions,n))return Date.now()>=i.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await ke(e),i=Ie(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let a;try{const n=await fetch(`${ve(e.appConfig)}/${t.token}`,o);a=await n.json()}catch(e){throw be.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(a.error){const e=a.error.message;throw be.create("token-update-failed",{errorInfo:e})}if(!a.token)throw be.create("token-update-no-token");return a.token}(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await we(e.firebaseDependencies,i),n}catch(t){throw await Te(e),t}}(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await ye(e.firebaseDependencies,i.token)}catch(e){console.warn(e)}return De(e.firebaseDependencies,n)}return De(e.firebaseDependencies,n)}async function Te(e){const t=await he(e.firebaseDependencies);t&&(await ye(e.firebaseDependencies,t.token),await async function(e){const t=me(e),n=(await ge()).transaction(pe,"readwrite");await n.objectStore(pe).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function De(e,t){const n=await async function(e,t){const n=await ke(e),i=Ie(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let a;try{const t=await fetch(ve(e.appConfig),o);a=await t.json()}catch(e){throw be.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(a.error){const e=a.error.message;throw be.create("token-subscribe-failed",{errorInfo:e})}if(!a.token)throw be.create("token-subscribe-no-token");return a.token}(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await we(e,i),i.token}async function Ce(e,t){const n=function(e,t){var n,i;const o={};e.from&&(o.project_number=e.from);e.fcmMessageId&&(o.message_id=e.fcmMessageId);o.instance_id=t,e.notification?o.message_type=ce.DISPLAY_NOTIFICATION.toString():o.message_type=ce.DATA_MESSAGE.toString();o.sdk_platform=3..toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),!e.collapse_key||(o.collapse_key=e.collapse_key);o.event=1..toString(),!(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)||(o.analytics_label=null===(i=e.fcmOptions)||void 0===i?void 0:i.analytics_label);return o}(t,await e.firebaseDependencies.installations.getId());!function(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}(e,n)}function je(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}async function _e(e,t){const n=function({data:e}){if(!e)return null;try{return e.json()}catch(e){return null}}(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await Ce(t,n);const i=await Me();if(function(e){return e.some((e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")))}(i))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=ue.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(i,n);if(n.notification&&await function(e){var t;const{actions:n}=e,{maxActions:i}=Notification;n&&i&&n.length>i&&console.warn(`This browser only supports ${i} actions. The remaining actions will not be displayed.`);return self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={FCM_MSG:e},t}(n)),t&&t.onBackgroundMessageHandler){const e=function(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const a=t.notification.icon;a&&(e.notification.icon=a)}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){var n,i,o,a,r;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(o=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==o?o:null===(a=t.notification)||void 0===a?void 0:a.click_action;s&&(e.fcmOptions.link=s);const c=null===(r=t.fcmOptions)||void 0===r?void 0:r.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}(t,e),t}(n);"function"==typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function Ee(e){var t,n;const i=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG;if(!i)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const o=function(e){var t,n,i;const o=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(i=e.notification)||void 0===i?void 0:i.click_action;if(o)return o;return a=e.data,"object"==typeof a&&a&&"google.c.a.c_id"in a?self.location.origin:null;var a}(i);if(!o)return;const a=new URL(o,self.location.href),r=new URL(self.location.origin);if(a.host!==r.host)return;let s=await async function(e){const t=await Me();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}(a);var c;return s?s=await s.focus():(s=await self.clients.openWindow(o),await(c=3e3,new Promise((e=>{setTimeout(e,c)})))),s?(i.messageType=ue.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,s.postMessage(i)):void 0}function Me(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Oe(e){return be.create("missing-app-config-values",{valueName:e})}je("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),je("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Pe{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=function(e){if(!e||!e.options)throw Oe("App Configuration Object");if(!e.name)throw Oe("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw Oe(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}async function Ae(){return function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&await new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function xe(e=i()){return Ae().then((e=>{if(!e)throw be.create("unsupported-browser")}),(e=>{throw be.create("indexed-db-unsupported")})),n(s(e),"messaging-sw").getImmediate()}function Be(e,t){return function(e,t){if(void 0!==self.document)throw be.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=s(e),t)}function Ne(e,t){return function(e,t){e.deliveryMetricsExportedToBigQueryEnabled=t}(e=s(e),t)}t(new c("messaging-sw",(e=>{const t=new Pe(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",(e=>{e.waitUntil(_e(e,t))})),self.addEventListener("pushsubscriptionchange",(e=>{e.waitUntil(async function(e,t){var n,i;const{newSubscription:o}=e;if(!o)return void await Te(t);const a=await he(t.firebaseDependencies);await Te(t),t.vapidKey=null!==(i=null===(n=null==a?void 0:a.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==i?i:se,await Se(t)}(e,t))})),self.addEventListener("notificationclick",(e=>{e.waitUntil(Ee(e))})),t}),"PUBLIC"));export{Ne as experimentalSetDeliveryMetricsExportedToBigQueryEnabled,xe as getMessaging,Ae as isSupported,Be as onBackgroundMessage};

//# sourceMappingURL=firebase-messaging-sw.js.map
