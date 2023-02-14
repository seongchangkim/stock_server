import{D as I,E as pe,G as ge,H as _e,I as me,J as we,K as z,L as be,S as ye,M as Re,N as ke}from"./index-d85befdf.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="firebasestorage.googleapis.com",J="storageBucket",Te=2*60*1e3,Se=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Re{constructor(e,n,r=0){super(D(e),`Firebase Storage: ${n} (${D(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return D(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function D(t){return"storage/"+t}function $(){const t="An unknown error occurred, please check the error payload for server response.";return new l("unknown",t)}function Ce(t){return new l("object-not-found","Object '"+t+"' does not exist.")}function xe(t){return new l("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ae(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",t)}function Pe(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Ee(t){return new l("unauthorized","User does not have permission to access '"+t+"'.")}function ve(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ue(){return new l("canceled","User canceled the upload/download.")}function Oe(t){return new l("invalid-url","Invalid URL '"+t+"'.")}function Ie(t){return new l("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Be(){return new l("no-default-bucket","No default bucket found. Did you set the '"+J+"' property when initializing the app?")}function Le(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function De(){return new l("no-download-url","The given file does not have any download URLs.")}function Fe(t){return new l("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function M(t){return new l("invalid-argument",t)}function Z(){return new l("app-deleted","The Firebase app was deleted.")}function Me(t){return new l("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function E(t,e){return new l("invalid-format","String does not match format '"+t+"': "+e)}function P(t){throw new l("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=p.makeFromUrl(e,n)}catch{return new p(e,"")}if(r.path==="")return r;throw Ie(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(f){f.path.charAt(f.path.length-1)==="/"&&(f.path_=f.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+s+i,"i"),u={bucket:1,path:3};function c(f){f.path_=decodeURIComponent(f.path)}const g="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",w=new RegExp(`^https?://${m}/${g}/b/${s}/o${_}`,"i"),b={bucket:1,path:3},x=n===Y?"(?:storage.googleapis.com|storage.cloud.google.com)":n,d="([^?#]*)",A=new RegExp(`^https?://${x}/${s}/${d}`,"i"),y=[{regex:a,indices:u,postModify:o},{regex:w,indices:b,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let f=0;f<y.length;f++){const v=y[f],B=v.regex.exec(e);if(B){const fe=B[v.indices.bucket];let L=B[v.indices.path];L||(L=""),r=new p(fe,L),v.postModify(r);break}}if(r==null)throw Oe(e);return r}}class $e{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e,n){let r=1,s=null,o=null,i=!1,a=0;function u(){return a===2}let c=!1;function g(...d){c||(c=!0,e.apply(null,d))}function m(d){s=setTimeout(()=>{s=null,t(w,u())},d)}function _(){o&&clearTimeout(o)}function w(d,...A){if(c){_();return}if(d){_(),g.call(null,d,...A);return}if(u()||i){_(),g.call(null,d,...A);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,m(y)}let b=!1;function x(d){b||(b=!0,_(),!c&&(s!==null?(d||(a=2),clearTimeout(s),m(0)):d||(a=1)))}return m(0),o=setTimeout(()=>{i=!0,x(!0)},n),x}function He(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t!==void 0}function qe(t){return typeof t=="object"&&!Array.isArray(t)}function N(t){return typeof t=="string"||t instanceof String}function W(t){return H()&&t instanceof Blob}function H(){return typeof Blob<"u"&&!ke()}function X(t,e,n,r){if(r<e)throw M(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw M(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Q(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(S||(S={}));/**
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
 */function ze(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,r,s,o,i,a,u,c,g,m,_=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=g,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,b)=>{this.resolve_=w,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new U(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===S.NO_ERROR,u=o.getStatus();if((!a||ze(u,this.additionalRetryCodes_))&&this.retry){const g=o.getErrorCode()===S.ABORT;r(!1,new U(!1,null,g));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new U(c,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());je(u)?o(u):o()}catch(u){i(u)}else if(a!==null){const u=$();u.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,u)):i(u)}else if(s.canceled){const u=this.appDelete_?Z():Ue();i(u)}else{const u=ve();i(u)}};this.canceled_?n(!1,new U(!1,null,!0)):this.backoffId_=Ne(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&He(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class U{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Xe(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ge(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ke(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ve(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ye(t,e,n,r,s,o,i=!0){const a=Q(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return Ke(c,e),Xe(c,n),Ge(c,o),Ve(c,r),new We(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ze(...t){const e=Je();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(H())return new Blob(t);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Qe(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function et(t){if(typeof atob>"u")throw Fe("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class F{constructor(e,n){this.data=e,this.contentType=n||null}}function tt(t,e){switch(t){case R.RAW:return new F(ee(e));case R.BASE64:case R.BASE64URL:return new F(te(t,e));case R.DATA_URL:return new F(rt(e),st(e))}throw $()}function ee(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,i=t.charCodeAt(++n);r=65536|(o&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nt(t){let e;try{e=decodeURIComponent(t)}catch{throw E(R.DATA_URL,"Malformed data URL.")}return ee(e)}function te(t,e){switch(t){case R.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw E(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case R.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw E(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=et(e)}catch(s){throw s.message.includes("polyfill")?s:E(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ne{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw E(R.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ot(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rt(t){const e=new ne(t);return e.base64?te(R.BASE64,e.rest):nt(e.rest)}function st(t){return new ne(t).contentType}function ot(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,n){let r=0,s="";W(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(W(this.data_)){const r=this.data_,s=Qe(r,e,n);return s===null?null:new k(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new k(r,!0)}}static getBlob(...e){if(H()){const n=e.map(r=>r instanceof k?r.data_:r);return new k(Ze.apply(null,n))}else{const n=e.map(i=>N(i)?tt(R.RAW,i).data:i.data_);let r=0;n.forEach(i=>{r+=i.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)s[o++]=i[a]}),new k(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t){let e;try{e=JSON.parse(t)}catch{return null}return qe(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function at(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function se(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e){return e}class h{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||ut}}let O=null;function ct(t){return!N(t)||t.length<2?t:se(t)}function oe(){if(O)return O;const t=[];t.push(new h("bucket")),t.push(new h("generation")),t.push(new h("metageneration")),t.push(new h("name","fullPath",!0));function e(o,i){return ct(i)}const n=new h("name");n.xform=e,t.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new h("size");return s.xform=r,t.push(s),t.push(new h("timeCreated")),t.push(new h("updated")),t.push(new h("md5Hash",null,!0)),t.push(new h("cacheControl",null,!0)),t.push(new h("contentDisposition",null,!0)),t.push(new h("contentEncoding",null,!0)),t.push(new h("contentLanguage",null,!0)),t.push(new h("contentType",null,!0)),t.push(new h("metadata","customMetadata",!0)),O=t,O}function lt(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new p(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function ht(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,e[i.server])}return lt(r,t),r}function ie(t,e,n){const r=re(e);return r===null?null:ht(t,r,n)}function dt(t,e,n,r){const s=re(e);if(s===null||!N(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const g=t.bucket,m=t.fullPath,_="/b/"+i(g)+"/o/"+i(m),w=j(_,n,r),b=Q({alt:"media",token:c});return w+b})[0]}function ft(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class ae{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){if(!t)throw $()}function pt(t,e){function n(r,s){const o=ie(t,s,e);return ue(o!==null),o}return n}function gt(t,e){function n(r,s){const o=ie(t,s,e);return ue(o!==null),dt(o,s,t.host,t._protocol)}return n}function ce(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Pe():s=Ae():n.getStatus()===402?s=xe(t.bucket):n.getStatus()===403?s=Ee(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function _t(t){const e=ce(t);function n(r,s){let o=e(r,s);return r.getStatus()===404&&(o=Ce(t.path)),o.serverResponse=s.serverResponse,o}return n}function mt(t,e,n){const r=e.fullServerUrl(),s=j(r,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new ae(s,o,gt(t,n),i);return a.errorHandler=_t(e),a}function wt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function bt(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=wt(null,e)),r}function yt(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let f=0;f<2;f++)y=y+Math.random().toString().slice(2);return y}const u=a();i["Content-Type"]="multipart/related; boundary="+u;const c=bt(e,r,s),g=ft(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,_=`\r
--`+u+"--",w=k.getBlob(m,r,_);if(w===null)throw Le();const b={name:c.fullPath},x=j(o,t.host,t._protocol),d="POST",A=t.maxUploadRetryTime,T=new ae(x,d,pt(t,n),A);return T.urlParams=b,T.headers=i,T.body=w.uploadData(),T.errorHandler=ce(e),T}class Rt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=S.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=S.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=S.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kt extends Rt{initXhr(){this.xhr_.responseType="text"}}function le(){return new kt}/**
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
 */class C{constructor(e,n){this._service=e,n instanceof p?this._location=n:this._location=p.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new C(e,n)}get root(){const e=new p(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return se(this._location.path)}get storage(){return this._service}get parent(){const e=it(this._location.path);if(e===null)return null;const n=new p(this._location.bucket,e);return new C(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Me(e)}}function Tt(t,e,n){t._throwIfRoot("uploadBytes");const r=yt(t.storage,t._location,oe(),new k(e,!0),n);return t.storage.makeRequestWithTokens(r,le).then(s=>({metadata:s,ref:t}))}function St(t){t._throwIfRoot("getDownloadURL");const e=mt(t.storage,t._location,oe());return t.storage.makeRequestWithTokens(e,le).then(n=>{if(n===null)throw De();return n})}function Ct(t,e){const n=at(t._location.path,e),r=new p(t._location.bucket,n);return new C(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return/^[A-Za-z]+:\/\//.test(t)}function At(t,e){return new C(t,e)}function he(t,e){if(t instanceof q){const n=t;if(n._bucket==null)throw Be();const r=new C(n,n._bucket);return e!=null?he(r,e):r}else return e!==void 0?Ct(t,e):t}function Pt(t,e){if(e&&xt(e)){if(t instanceof q)return At(t,e);throw M("To use ref(service, url), the first argument must be a Storage instance.")}else return he(t,e)}function G(t,e){const n=e==null?void 0:e[J];return n==null?null:p.makeFromBucketSpec(n,t)}function Et(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:be(s,t.app.options.projectId))}class q{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Y,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Te,this._maxUploadRetryTime=Se,this._requests=new Set,s!=null?this._bucket=p.makeFromBucketSpec(s,this._host):this._bucket=G(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=p.makeFromBucketSpec(this._url,e):this._bucket=G(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){X("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){X("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new C(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new $e(Z());{const i=Ye(e,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const K="@firebase/storage",V="0.10.0";/**
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
 */const de="storage";function Bt(t,e,n){return t=I(t),Tt(t,e,n)}function Lt(t){return t=I(t),St(t)}function Dt(t,e){return t=I(t),Pt(t,e)}function Ft(t=_e(),e){t=I(t);const r=pe(t,de).getImmediate({identifier:e}),s=ge("storage");return s&&vt(r,...s),r}function vt(t,e,n,r={}){Et(t,e,n,r)}function Ut(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new q(n,r,s,e,ye)}function Ot(){me(new we(de,Ut,"PUBLIC").setMultipleInstances(!0)),z(K,V,""),z(K,V,"esm2017")}Ot();export{Lt as a,Ft as g,Dt as r,Bt as u};
