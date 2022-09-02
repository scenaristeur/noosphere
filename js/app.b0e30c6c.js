(function(){"use strict";var e={9:function(e,t,o){var n=o(6369),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{staticClass:"m-2",attrs:{to:"/"}},[t("b-icon",{attrs:{"font-scale":"1.5",icon:"house","aria-hidden":"true"}})],1),t("router-link",{staticClass:"m-2",attrs:{to:"/editor"}},[t("b-icon",{attrs:{"font-scale":"1.5",icon:"pen","aria-hidden":"true"}})],1),t("router-link",{staticClass:"m-2",attrs:{to:"/user"}},[t("b-icon",{attrs:{"font-scale":"1.5",icon:"person","aria-hidden":"true"}})],1),t("router-link",{staticClass:"m-2",attrs:{to:"/room"}},[t("b-icon",{attrs:{"font-scale":"1.5",icon:"list-stars","aria-hidden":"true"}})],1),t("router-link",{staticClass:"m-2",attrs:{to:"#"}},[t("b-icon",{attrs:{"font-scale":"1.5",icon:"share","aria-hidden":"true"},on:{click:e.share}})],1),t("router-link",{staticClass:"m-2",attrs:{to:"##"}},[t("b-icon",{attrs:{"font-scale":"1.5",icon:"pin","aria-hidden":"true"},on:{click:e.openPinModal}})],1),t("router-link",{staticClass:"m-2",attrs:{to:"/about"}},[t("b-icon",{attrs:{"font-scale":"1.5",icon:"question","aria-hidden":"true"}})],1)],1),t("router-view"),t("b-alert",{attrs:{id:"shareAlert",show:e.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[t("p",[e._v("This room's link has been copied to your clipboard, you can paste it in any other app to share it "+e._s(e.dismissCountDown)+" ...")]),t("b-progress",{attrs:{variant:"warning",max:e.dismissSecs,value:e.dismissCountDown,height:"4px"}})],1),t("b-alert",{attrs:{variant:"success",show:""}},[e._v("Noosphere 0 - "),t("i",[t("small",[e._v("menu")])])]),t("b-modal",{attrs:{id:"modal-pin",title:"Pin Data on Web3.storage"}},[e._v(" see "),t("a",{attrs:{href:"https://web3.storage/docs/",target:"_blank"}},[e._v(" https://web3.storage/docs/")]),e._v(" (1GB free)"),t("br"),t("a",{attrs:{href:"https://web3.storage/tokens/",target:"_blank"}},[e._v("your web3.storage tokens")]),t("b-input",{attrs:{placeholder:"web3.storage token"},on:{input:e.tokenChanged},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}}),null!=e.uploads&&e.uploads.length>0?t("div",[e._v(" Your 20 last uploads : "),t("ul",e._l(e.uploads,(function(o){return t("li",{key:o._id},[t("b-button",{staticClass:"m-0",attrs:{size:"sm",variant:"light"},on:{click:function(t){return e.clickUpload(o)}}},[e._v(e._s(o.name))])],1)})),0)]):e._e(),t("b-input",{attrs:{placeholder:"filename"},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}}),t("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),t("b-button",{on:{click:e.pin}},[e._v("Pin it")]),t("br"),e._v(" "+e._s(e.messages)+" "),t("br"),null!=e.cid?t("span",[e._v(" saved on ipfs with cid "),t("a",{attrs:{href:"https://"+e.cid+".ipfs.w3s.link/",target:"_blank"}},[e._v(e._s(e.cid))])]):e._e()],1)],1)},r=[],a=o(3478),i={name:"App",data(){return{dismissSecs:10,dismissCountDown:0,showDismissibleAlert:!1,data:null,fileName:"",token:null,messages:[],cid:null,uploads:null}},created(){this.$coreInit({name:"SuperCore"})},mounted(){let e=localStorage.getItem("noosphere-web3storage-token");this.$store.commit("core/setWeb3Token",e),console.log("token",e)},methods:{share(){let e=this;console.log(this.user);let t="http://scenaristeur.github.io/noosphere?room="+this.user.roomId;navigator.clipboard.writeText(t).then((function(){console.log("Async: Copying to clipboard was successful!"),e.showAlert()}),(function(e){console.error("Async: Could not copy text: ",e)}))},openPinModal(){let e=this.$store.state.core.editorData;delete e.clientID,this.data=JSON.stringify(e,null,2),this.fileName=this.user.roomId,this.cid=null,this.$bvModal.show("modal-pin")},async pin(){if(null!=this.token&&0!=this.token.length){localStorage.setItem("noosphere-web3storage-token",this.token),console.log(this.token,this.user.roomId,this.data),this.file=new File([this.data],this.fileName+".json"),console.log(this.file),this.messages.push("[pinning]: "+this.fileName),this.client=new a.xk({token:this.token});const e=e=>{console.log("-- root cid:",e),this.messages.push("[root cid] "+e)},t=e=>{console.log(`stored chunk of ${e} bytes`),this.messages.push("[stored chunk of] "+e+" bytes")},o=await this.client.put([this.file],{name:"noosphere_"+this.fileName,maxRetries:3,onRootCidReady:e,onStoredChunk:t});console.log(o),this.messages.push("[done]"),this.cid=o,this.list()}else alert("you need a web3.storage token, see https://web3.storage/docs/")},countDownChanged(e){this.dismissCountDown=e},showAlert(){this.dismissCountDown=this.dismissSecs},async list(){this.client=new a.xk({token:this.token});const e=[];for await(const t of this.client.list({maxResults:20}))e.push(t);console.log(e),console.log("list"),this.uploads=e},tokenChanged(){localStorage.setItem("noosphere-web3storage-token",this.token),this.list()},async clickUpload(e){console.log(e),this.$bvModal.hide("modal-pin");let t=this;const o=await this.client.get(e.cid);if(0!=o.ok){const e=await o.files();for(const o of e){console.log(o),console.log(`${o.cid} ${o.name} ${o.size}`);var n=new FileReader;n.onloadstart=function(e){console.log("onloadstart!");var t="File Name: "+o.name+"<br>File Size: "+o.size+"<br>File Type: "+o.type;console.log(t,e)},n.onload=function(e){console.log("onload!");var s=n.result;console.log(" ---------------- File Content ----------------: "),console.log(s,e),t.$loadCid({roomId:o.name.split(".json")[0],cid:o.cid,content:JSON.parse(s)})},n.onloadend=function(e){console.log("onloadend!"),console.log("readyState = "+n.readyState,e)},n.onerror=function(e){console.log("onerror!",e),console.log("Has Error!")},n.readAsText(o,"UTF-8")}}else console.log(o)}},watch:{web3Token(){this.token=this.web3Token},token(){null!=this.token&&this.list()}},computed:{user(){return this.$store.state.core.user},users(){return this.$store.state.core.users},web3Token(){return this.$store.state.core.web3Token}}},l=i,c=o(1001),u=(0,c.Z)(l,s,r,!1,null,null,null),d=u.exports,h=o(5431);(0,h.z)("/noosphere/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noospher has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var p=o(2631),m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("UsersView"),t("RoomCard"),t("EditorView",{on:{userEvent:e.onUserEvent,editorEvent:e.onEditorEvent}})],1)},f=[],g={name:"HomeView",components:{RoomCard:()=>o.e(605).then(o.bind(o,4036)),UsersView:()=>o.e(974).then(o.bind(o,974)),EditorView:()=>o.e(189).then(o.bind(o,874))},methods:{onUserEvent(e){console.log("userEVent",e)},onEditorEvent(e){console.log("editorEvent",e)}}},b=g,v=(0,c.Z)(b,m,f,!1,null,null,null),w=v.exports;n["default"].use(p.Z);const y=[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,2940))},{path:"/config",name:"config",component:()=>o.e(497).then(o.bind(o,3334))},{path:"/share",name:"share",component:()=>o.e(557).then(o.bind(o,6718))},{path:"/editor",name:"editor",component:()=>o.e(189).then(o.bind(o,874))},{path:"/user",name:"user",component:()=>o.e(378).then(o.bind(o,2181))},{path:"/room",name:"room",component:()=>o.e(605).then(o.bind(o,4036))}],k=new p.Z({mode:"history",base:"/noosphere/",routes:y});var C=k,D=o(3822);const _=()=>({user:null,awareness:null,users:{},query:null,rooms:[],usersUpdateDate:null,yDoc:null,yMap:null,web3Token:null,editorData:null,editorDataDefault:{time:1550476186479,blocks:[{type:"paragraph",data:{text:"You have just opened a new room in the"}},{type:"header",data:{text:"Noosphere",level:2}},{type:"paragraph",data:{text:"Feel free to click on this text to edit, and don't forget to share this collaborative knowledge tool. You can open a new window of this app and see how rooms are realtime synced."}}],version:"2.8.1"}}),E={setYdoc(e,t){e.yDoc=t},setYmap(e,t){e.yMap=t},setEditorData(e,t){e.editorData=t},setQuery(e,t){e.query=t},setUser(e,t){e.user=t},setAwareness(e,t){e.awareness=t},setUsers(e,t){e.users=t},setUserById(e,t){e.users[t.clientID]=t,console.log(e.users)},setUsersUpdateDate(e,t){e.usersUpdateDate=t},setWeb3Token(e,t){e.web3Token=t}},x={};var I={namespaced:!0,state:_,actions:x,mutations:E};n["default"].use(D.ZP);var S=new D.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:I}}),$=o(567),N=o(249),T=o(2213),U=o(3089),A=o(536),O=o(114);const j={install(e,t={}){let o=t.store;e.prototype.$coreInit=async function(){let t=JSON.parse(localStorage.getItem("noosphere-user")),n=new $.QW;o.commit("core/setYdoc",n),this.indexeddbProvider=new U.H7("noosphere-demo",n),this.indexeddbProvider.whenSynced.then((t=>{console.log("[indexeddbProvider] loaded data from indexed db",t),e.prototype.$openRoom()}));let s=new O.GL(n);o.commit("core/setAwareness",s),void 0!=t&&null!=t||(t=await e.prototype.$randomUser()),t.roomId=this.$route.query.room||t.roomId||(0,A.Z)(),o.commit("core/setUser",t),e.prototype.$userChanged(),s.on("change",(()=>{s.getStates().forEach((e=>{console.log(e),e.user&&o.commit("core/setUserById",e.user)})),o.commit("core/setUsersUpdateDate",Date.now())}));let r=new N.x$("noosphere-demo",n,{awareness:s}),a=new T.V("wss://demos.yjs.dev","noosphere-demo",n,{awareness:s});console.log("[providers]",r,a),void 0!=this.$route.query&&(console.log("this.$route.query",this.$route.query),o.commit("core/setQuery",this.$route.query))},e.prototype.$userChanged=async function(){let e=o.state.core.user;localStorage.setItem("noosphere-user",JSON.stringify(e)),o.state.core.awareness.setLocalStateField("user",e),console.log("[user changed]",e)},e.prototype.$randomUser=async function(){let t={name:"User_"+Date.now(),color:"#"+Math.floor(16777215*Math.random()).toString(16),clientID:o.state.core.awareness.clientID,roomId:"",rooms:[]};return o.commit("core/setUser",t),e.prototype.$userChanged(),t},e.prototype.$openRoom=async function(){e.prototype.$userChanged();let n=o.state.core.user,s=o.state.core.yDoc.getMap(n.roomId);o.commit("core/setYmap",s),console.log("[openRoom]",n.roomId);let r=await s.get("editor_map");if(console.log(r),void 0!=r)o.commit("core/setEditorData",r);else{let e=o.state.core.editorDataDefault;e.blocks.push({type:"paragraph",data:{text:"The roomId of this room is "+n.roomId}}),s.set("editor_map",e),o.commit("core/setEditorData",e)}s.observeDeep((e=>{e.forEach((e=>{console.log("[event]",e);let t=e.keysChanged.has("editor_map");if(console.log("[editor_map_changed]",t),1==t){let e=s.get("editor_map");e.clientID!=n.clientID?(o.commit("core/setEditorData",e),console.log("[update editorData]",this.editorData)):console.log("[same clientID]")}}))})),t.router.push("/editor")},e.prototype.$saveEditor=async function(e){console.log("saveEditor",e),e.clientID=o.state.core.user.clientID,o.state.core.yMap.set("editor_map",e)},e.prototype.$loadCid=async function(t){console.log(t);let n=o.state.core.user;n.roomId=t.roomId;let s=t.content;o.commit("core/setEditorData",s),o.commit("core/setUser",n),e.prototype.$openRoom()}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(j);var P=j,F=o(5996),M=o(9425);o(7024);n["default"].use(P,{store:S,router:C}),n["default"].use(F.XG7),n["default"].use(M.A7),n["default"].config.productionTip=!1,new n["default"]({router:C,store:S,render:e=>e(d)}).$mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],r=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,s,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({189:"editor",378:"user",443:"about",497:"config",557:"share",605:"room"}[e]||e)+"."+{189:"bc17e0db",378:"1a88fb84",443:"8ad9afdd",497:"8da4b0cb",557:"c03f20c5",605:"4e7cb7c3",974:"b5645e01",997:"128ff749"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+({189:"editor",378:"user",605:"room"}[e]||e)+"."+{189:"3aaefb82",378:"b446147c",605:"7b516344",974:"a29b35ad",997:"3669f274"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="noosphere:";o.l=function(n,s,r,a){if(e[n])e[n].push(s);else{var i,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+r){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+r),i.src=n),e[n]=[s];var h=function(t,o){i.onerror=i.onload=null,clearTimeout(p);var s=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/noosphere/"}(),function(){var e=function(e,t,o,n){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(r){if(s.onerror=s.onload=null,"load"===r.type)o();else{var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=i,s.parentNode.removeChild(s),n(l)}};return s.onerror=s.onload=r,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var s=o[n],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){s=a[n],r=s.getAttribute("data-href");if(r===e||r===t)return s}},n=function(n){return new Promise((function(s,r){var a=o.miniCssF(n),i=o.p+a;if(t(a,i))return s();e(n,i,s,r)}))},s={143:0};o.f.miniCss=function(e,t){var o={189:1,378:1,605:1,974:1,997:1};s[e]?t.push(s[e]):0!==s[e]&&o[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var s=o.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(o,n){s=e[t]=[o,n]}));n.push(s[2]=r);var a=o.p+o.u(t),i=new Error,l=function(n){if(o.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,s[1](i)}};o.l(a,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,a=n[0],i=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var u=l(o)}for(t&&t(n);c<a.length;c++)r=a[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9)}));n=o.O(n)})();
//# sourceMappingURL=app.b0e30c6c.js.map