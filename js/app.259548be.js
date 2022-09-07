(function(){"use strict";var e={7714:function(e,o,t){var n=t(6369),s=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app"}},[o("nav",[o("router-link",{staticClass:"m-2",attrs:{to:"/"}},[o("b-icon",{attrs:{"font-scale":"1.5",icon:"house","aria-hidden":"true"}})],1),o("router-link",{staticClass:"m-2",attrs:{to:"/editor"}},[o("b-icon",{attrs:{"font-scale":"1.5",icon:"pen","aria-hidden":"true"}})],1),o("router-link",{staticClass:"m-2",attrs:{to:"/user"}},[o("b-icon",{attrs:{"font-scale":"1.5",icon:"person","aria-hidden":"true"}})],1),o("router-link",{staticClass:"m-2",attrs:{to:"/room"}},[o("b-icon",{attrs:{"font-scale":"1.5",icon:"list-stars","aria-hidden":"true"}})],1),o("router-link",{staticClass:"m-2",attrs:{to:"#"}},[o("b-icon",{attrs:{"font-scale":"1.5",icon:"share","aria-hidden":"true"},on:{click:e.share}})],1),o("router-link",{staticClass:"m-2",attrs:{to:"##"}},[o("b-icon",{attrs:{"font-scale":"1.5",icon:"pin","aria-hidden":"true"},on:{click:e.openPinModal}})],1),o("router-link",{staticClass:"m-2",attrs:{to:"/about"}},[o("b-icon",{attrs:{"font-scale":"1.5",icon:"question","aria-hidden":"true"}})],1)],1),o("router-view"),o("b-alert",{attrs:{id:"shareAlert",show:e.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(o){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[o("p",[e._v("This room's link has been copied to your clipboard, you can paste it in any other app to share it "+e._s(e.dismissCountDown)+" ...")]),o("b-progress",{attrs:{variant:"warning",max:e.dismissSecs,value:e.dismissCountDown,height:"4px"}})],1),o("b-modal",{attrs:{id:"modal-pin",title:"Pin Data on Web3.storage"}},[e._v(" see "),o("a",{attrs:{href:"https://web3.storage/docs/",target:"_blank"}},[e._v(" https://web3.storage/docs/")]),e._v(" (1GB free)"),o("br"),o("a",{attrs:{href:"https://web3.storage/tokens/",target:"_blank"}},[e._v("your web3.storage tokens")]),o("b-input",{attrs:{placeholder:"web3.storage token"},on:{input:e.tokenChanged},model:{value:e.token,callback:function(o){e.token=o},expression:"token"}}),null!=e.uploads&&e.uploads.length>0?o("div",[e._v(" Your 20 last uploads : "),o("ul",e._l(e.uploads,(function(t){return o("li",{key:t._id},[o("b-button",{staticClass:"m-0",attrs:{size:"sm",variant:"light"},on:{click:function(o){return e.clickUpload(t)}}},[e._v(e._s(t.name))])],1)})),0)]):e._e(),o("b-input",{attrs:{placeholder:"filename"},model:{value:e.fileName,callback:function(o){e.fileName=o},expression:"fileName"}}),o("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:e.data,callback:function(o){e.data=o},expression:"data"}}),o("b-button",{on:{click:e.pin}},[e._v("Pin it")]),o("br"),e._v(" "+e._s(e.messages)+" "),o("br"),null!=e.cid?o("span",[e._v(" saved on ipfs with cid "),o("a",{attrs:{href:"https://"+e.cid+".ipfs.w3s.link/",target:"_blank"}},[e._v(e._s(e.cid))])]):e._e()],1),o("b-alert",{attrs:{variant:"success",show:""}},[o("router-link",{staticClass:"m-2",attrs:{to:"/about"}},[e._v("What is Noosphere"),o("b-icon",{attrs:{"font-scale":"1.5",icon:"question","aria-hidden":"true"}})],1),o("br"),o("i",[o("small",[e._v("version: sharing 3")])])],1)],1)},r=[],a=t(3478),i={name:"App",data(){return{dismissSecs:10,dismissCountDown:0,showDismissibleAlert:!1,data:null,fileName:"",token:null,messages:[],cid:null,uploads:null}},created(){console.log(this.$route),this.$coreInit({name:"SuperCore",route:this.$route})},mounted(){let e=localStorage.getItem("noosphere-web3storage-token");this.$store.commit("core/setWeb3Token",e),console.log("token",e)},methods:{share(){let e="http://scenaristeur.github.io/noosphere?room="+this.user.roomId,o="Noosphere",t="Check this idea I want to share in Noosphere !\n  ";if(navigator&&navigator.share)window.navigator.share({title:o,text:t,url:e}).then((()=>console.log("Successful share"))).catch((e=>console.log("Error sharing",e)));else{let o=this;console.log(this.user),navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!"),o.showAlert()}),(function(e){console.error("Async: Could not copy text: ",e)}))}},openPinModal(){let e=this.$store.state.core.editorData;delete e.clientID,this.data=JSON.stringify(e,null,2),this.fileName=this.user.roomId,this.cid=null,this.$bvModal.show("modal-pin")},async pin(){if(null!=this.token&&0!=this.token.length){localStorage.setItem("noosphere-web3storage-token",this.token),console.log(this.token,this.user.roomId,this.data),this.file=new File([this.data],this.fileName+".json"),console.log(this.file),this.messages.push("[pinning]: "+this.fileName),this.client=new a.xk({token:this.token});const e=e=>{console.log("-- root cid:",e),this.messages.push("[root cid] "+e)},o=e=>{console.log(`stored chunk of ${e} bytes`),this.messages.push("[stored chunk of] "+e+" bytes")},t=await this.client.put([this.file],{name:"noosphere_"+this.fileName,maxRetries:3,onRootCidReady:e,onStoredChunk:o});console.log(t),this.messages.push("[done]"),this.cid=t,this.list()}else alert("you need a web3.storage token, see https://web3.storage/docs/")},countDownChanged(e){this.dismissCountDown=e},showAlert(){this.dismissCountDown=this.dismissSecs},async list(){this.client=new a.xk({token:this.token});const e=[];for await(const o of this.client.list({maxResults:20}))e.push(o);console.log(e),console.log("list"),this.uploads=e},tokenChanged(){localStorage.setItem("noosphere-web3storage-token",this.token),this.list()},async clickUpload(e){console.log(e),this.$bvModal.hide("modal-pin");let o=this;const t=await this.client.get(e.cid);if(0!=t.ok){const e=await t.files();for(const t of e){console.log(t),console.log(`${t.cid} ${t.name} ${t.size}`);var n=new FileReader;n.onloadstart=function(e){console.log("onloadstart!");var o="File Name: "+t.name+"<br>File Size: "+t.size+"<br>File Type: "+t.type;console.log(o,e)},n.onload=function(e){console.log("onload!");var s=n.result;console.log(" ---------------- File Content ----------------: "),console.log(s,e),o.$loadCid({roomId:t.name.split(".json")[0],cid:t.cid,content:JSON.parse(s)})},n.onloadend=function(e){console.log("onloadend!"),console.log("readyState = "+n.readyState,e)},n.onerror=function(e){console.log("onerror!",e),console.log("Has Error!")},n.readAsText(t,"UTF-8")}}else console.log(t)}},watch:{web3Token(){this.token=this.web3Token},token(){null!=this.token&&this.list()}},computed:{user(){return this.$store.state.core.user},users(){return this.$store.state.core.users},web3Token(){return this.$store.state.core.web3Token}}},l=i,c=t(1001),u=(0,c.Z)(l,s,r,!1,null,null,null),d=u.exports,h=t(5431);(0,h.z)("/noosphere/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noospher has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var p=t(2631),m=function(){var e=this,o=e._self._c;return o("div",{staticClass:"home"},[o("UsersView"),o("RoomCard"),o("EditorView",{on:{userEvent:e.onUserEvent,editorEvent:e.onEditorEvent}})],1)},f=[],g={name:"HomeView",components:{RoomCard:()=>t.e(581).then(t.bind(t,9581)),UsersView:()=>t.e(427).then(t.bind(t,1427)),EditorView:()=>t.e(189).then(t.bind(t,9456))},methods:{onUserEvent(e){console.log("userEVent",e)},onEditorEvent(e){console.log("editorEvent",e)}}},w=g,b=(0,c.Z)(w,m,f,!1,null,null,null),v=b.exports;n["default"].use(p.Z);const y=[{path:"/",name:"home",component:v},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,2940))},{path:"/config",name:"config",component:()=>t.e(497).then(t.bind(t,3334))},{path:"/share",name:"share",component:()=>t.e(557).then(t.bind(t,9747))},{path:"/editor",name:"editor",component:()=>t.e(189).then(t.bind(t,9456))},{path:"/user",name:"user",component:()=>t.e(378).then(t.bind(t,2181))},{path:"/room",name:"room",component:()=>t.e(894).then(t.bind(t,1849))}],k=new p.Z({mode:"history",base:"/noosphere/",routes:y});var C=k,D=t(3822);const _=()=>({user:null,awareness:null,users:{},query:null,usersUpdateDate:null,yDoc:null,yMap:null,web3Token:null,editorData:null,editorDataDefault:{time:1550476186479,blocks:[{type:"paragraph",data:{text:"You have just opened a new room in the"}},{type:"header",data:{text:"Noosphere",level:2}},{type:"paragraph",data:{text:"Feel free to click on this text to edit, and don't forget to share this collaborative knowledge tool. You can open a new window of this app and see how rooms are realtime synced."}}],version:"2.8.1"}}),I={setYdoc(e,o){e.yDoc=o},setYmap(e,o){e.yMap=o},setEditorData(e,o){e.editorData=o},setQuery(e,o){e.query=o},setUser(e,o){e.user=o,this.commit("core/updateRoomHistory",o.roomId)},removeRoomIdFromHistory(e,o){console.log(o),delete e.user.rooms[o]},updateRoomHistory(e,o){o.length>0&&(this.commit("core/removeRoomIdFromHistory",o),e.user.rooms[o]={roomId:o,date:Date.now()},console.log("[history]",e.user.rooms),n["default"].prototype.$userChanged())},setAwareness(e,o){e.awareness=o},setUsers(e,o){e.users=o},setUserById(e,o){console.log("[store setUserById]",o),e.users[o.clientID]=o,console.log(e.users)},setUsersUpdateDate(e,o){e.usersUpdateDate=o},setWeb3Token(e,o){e.web3Token=o}},E={};var S={namespaced:!0,state:_,actions:E,mutations:I};n["default"].use(D.ZP);var x=new D.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:S}}),N=t(567),$=t(249),U=t(2213),T=t(3089),A=t(3029),R=t(114);const O={install(e,o={}){let t=o.store;async function n(){let e=new N.QW;return t.commit("core/setYdoc",e),e}async function s(e){let o=new R.GL(e);return t.commit("core/setAwareness",o),o.on("change",(()=>{o.getStates().forEach((e=>{e.user&&t.commit("core/setUserById",e.user)})),t.commit("core/setUsersUpdateDate",Date.now())})),o}async function r(e,o,t){let n=new T.H7("noosphere-demo",e),s=await n.whenSynced;console.log("[indexeddbProvider] loaded data from indexed db",s),new $.x$("noosphere-demo",e,{awareness:o,signaling:["wss://y-webrtc-signaling-eu.herokuapp.com","wss://y-webrtc-signaling-us.herokuapp.com","wss://signaling.yjs.dev"]}),new U.VU("wss://demos.yjs.dev","noosphere-demo",e,{awareness:o}),await l(t)}async function a(e,t){return console.log("{getRouterParameters}",o.router,t),await o.router.onReady((async o=>{console.log("[RRRRRouter]",o),void 0!=o&&"share"==o.name?e.isSharing=o.query:void 0!=t.query.room&&(e.roomId=t.query.room)})),e}async function i(o){let t=JSON.parse(localStorage.getItem("noosphere-user"));return void 0!=t&&null!=t||(t=await e.prototype.$randomUser(o)),t}async function l(o){void 0==o.isSharing&&void 0==o.roomId&&(o.roomId=(0,A.Z)()),t.commit("core/setUser",o),console.log("{set local storage user, send awareness, open room}",o),void 0==o.isSharing&&e.prototype.$openRoom()}async function c(e){let o=t.state.core.user;e.observeDeep((n=>{n.forEach((n=>{console.log("[event]",n);let s=n.keysChanged.has("editor_map");if(console.log("[editor_map_changed]",s),1==s){let n=e.get("editor_map");n.clientID!=o.clientID?(t.commit("core/setEditorData",n),console.log("[update editorData]",n)):console.log("[same clientID]")}}))}))}e.prototype.$coreInit=async function(e){console.log("{init options}",e);let o=await n(),t=await s(o),l=await i(t);l=await a(l,e.route),console.log(l),await r(o,t,l)},e.prototype.$userChanged=async function(){let e=t.state.core.user;console.log("[user Changed]",e),localStorage.setItem("noosphere-user",JSON.stringify(e)),t.state.core.awareness.setLocalStateField("user",e),console.log("[user changed]",e),t.commit("core/setUserById",e)},e.prototype.$randomUser=async function(e){console.log("awareness",e);let o={name:"User_"+Date.now(),color:"#"+Math.floor(16777215*Math.random()).toString(16),clientID:e.clientID,rooms:{}};return o},e.prototype.$getEditorMap=async function(e){let o=t.state.core.yDoc.getMap(e),n=await o.get("editor_map");return console.log("{{editorDataTemp}}",n),n},e.prototype.$openRoom=async function(){let e=t.state.core.user;console.log("{user]",e);let n=t.state.core.yDoc.getMap(e.roomId);t.commit("core/setYmap",n),t.commit("core/updateRoomHistory",e.roomId),console.log("[openRoom]",e.roomId),c(n);let s=await n.get("editor_map");if(console.log("{{editorData}}",s),void 0!=s)t.commit("core/setEditorData",s);else{let o=t.state.core.editorDataDefault;o.blocks.push({type:"paragraph",data:{text:"The roomId of this room is "+e.roomId}}),n.set("editor_map",o),t.commit("core/setEditorData",o)}o.router.push("/editor")},e.prototype.$saveEditor=async function(e){console.log("saveEditor",e),e.clientID=t.state.core.user.clientID,t.state.core.yMap.set("editor_map",e)},e.prototype.$loadCid=async function(o){console.log(o);let n=t.state.core.user;n.roomId=o.roomId;let s=o.content;t.commit("core/setEditorData",s),t.commit("core/setUser",n),e.prototype.$openRoom()}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(O);var j=O,F=t(5996),M=t(9425);t(7024);n["default"].use(j,{store:x,router:C}),n["default"].use(F.XG7),n["default"].use(M.A7),n["default"].config.productionTip=!1,new n["default"]({router:C,store:x,render:e=>e(d)}).$mount("#app")}},o={};function t(n){var s=o[n];if(void 0!==s)return s.exports;var r=o[n]={exports:{}};return e[n].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(o,n,s,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],r=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var c=s();void 0!==c&&(o=c)}}return o}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,s,r]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,n){return t.f[n](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/"+({189:"editor",378:"user",443:"about",497:"config",557:"share",894:"roomView"}[e]||e)+"."+{41:"83e5bfe7",189:"32811895",378:"b0dff8a4",427:"37e6ef5c",443:"8ad9afdd",497:"8da4b0cb",557:"04d7a6bc",581:"bf6eba5f",894:"af3cec58",997:"128ff749"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+({189:"editor",378:"user",894:"roomView"}[e]||e)+"."+{41:"c58dda49",189:"af51e703",378:"b446147c",427:"0d3d110f",581:"ad07a625",894:"6645875d",997:"3669f274"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="noosphere:";t.l=function(n,s,r,a){if(e[n])e[n].push(s);else{var i,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==o+r){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",o+r),i.src=n),e[n]=[s];var h=function(o,t){i.onerror=i.onload=null,clearTimeout(p);var s=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(t)})),o)return o(t)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/noosphere/"}(),function(){var e=function(e,o,t,n){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(r){if(s.onerror=s.onload=null,"load"===r.type)t();else{var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=i,s.parentNode.removeChild(s),n(l)}};return s.onerror=s.onload=r,s.href=o,document.head.appendChild(s),s},o=function(e,o){for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var s=t[n],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===o))return s}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){s=a[n],r=s.getAttribute("data-href");if(r===e||r===o)return s}},n=function(n){return new Promise((function(s,r){var a=t.miniCssF(n),i=t.p+a;if(o(a,i))return s();e(n,i,s,r)}))},s={143:0};t.f.miniCss=function(e,o){var t={41:1,189:1,378:1,427:1,581:1,894:1,997:1};s[e]?o.push(s[e]):0!==s[e]&&t[e]&&o.push(s[e]=n(e).then((function(){s[e]=0}),(function(o){throw delete s[e],o})))}}(),function(){var e={143:0};t.f.j=function(o,n){var s=t.o(e,o)?e[o]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(t,n){s=e[o]=[t,n]}));n.push(s[2]=r);var a=t.p+t.u(o),i=new Error,l=function(n){if(t.o(e,o)&&(s=e[o],0!==s&&(e[o]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+o+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,s[1](i)}};t.l(a,l,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,n){var s,r,a=n[0],i=n[1],l=n[2],c=0;if(a.some((function(o){return 0!==e[o]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(l)var u=l(t)}for(o&&o(n);c<a.length;c++)r=a[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},n=self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(7714)}));n=t.O(n)})();
//# sourceMappingURL=app.259548be.js.map