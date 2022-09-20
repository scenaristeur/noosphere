(function(){"use strict";var e={3261:function(e,o,t){var n=t(6369),r=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app"}},[o("NavBar"),o("div",{staticStyle:{"margin-top":"60px"}},[o("router-view")],1)],1)},a=[],s={name:"App",components:{NavBar:()=>t.e(866).then(t.bind(t,7866))},data(){return{}},created(){this.$coreInit({name:"SuperCore",route:this.$route})},async mounted(){this.$web3Init()},methods:{},watch:{},computed:{user(){return this.$store.state.core.user},users(){return this.$store.state.core.users}}},i=s,c=t(1001),l=(0,c.Z)(i,r,a,!1,null,null,null),u=l.exports,d=t(5431);(0,d.z)("/noosphere/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noospher has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var p=t(2631),f=function(){var e=this,o=e._self._c;return o("div",{staticClass:"home"},[o("UsersView")],1)},m=[],h={name:"HomeView",components:{UsersView:()=>t.e(400).then(t.bind(t,7400))}},g=h,w=(0,c.Z)(g,f,m,!1,null,null,null),y=w.exports;n["default"].use(p.Z);const b=[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,5213))},{path:"/config",name:"config",component:()=>t.e(497).then(t.bind(t,4906))},{path:"/share",name:"share",component:()=>t.e(557).then(t.bind(t,9747))},{path:"/editor",name:"editor",component:()=>t.e(189).then(t.bind(t,130))},{path:"/profile",name:"profile",component:()=>t.e(845).then(t.bind(t,2868))},{path:"/graph",name:"graph",component:()=>t.e(786).then(t.bind(t,5765))}],v=new p.Z({mode:"history",base:"/noosphere/",routes:b});var k=v,D=t(3822);const $=()=>({user:null,awareness:null,users:{},query:null,usersUpdateDate:null,yDoc:null,yMap:null,web3Token:null,editorData:null,services:[],uploads:[],pinMessages:[],roomAddress:"",pod_url:"https://noosphere.solidcommunity.net/public/testrooms/",editorDataDefault:{blocks:[{type:"header",data:{text:"Title",level:2}},{type:"paragraph",data:{text:"Click to edit."}}]}}),x={setYdoc(e,o){e.yDoc=o},setYmap(e,o){e.yMap=o},setEditorData(e,o){e.editorData=o},setQuery(e,o){e.query=o},setUser(e,o){e.user=o,null!=o.roomId&&this.commit("core/updateRoomHistory",o.roomId)},removeRoomIdFromHistory(e,o){delete e.user.rooms[o]},updateRoomHistory(e,o){o.length>0&&(this.commit("core/removeRoomIdFromHistory",o),this.commit("core/setRoomAddress",o),e.user.rooms[o]={roomId:o,date:Date.now()},n["default"].prototype.$userChanged())},setAwareness(e,o){e.awareness=o},setUsers(e,o){e.users=o},setUserById(e,o){e.users[o.clientID]=o},setUsersUpdateDate(e,o){e.usersUpdateDate=o},setWeb3Token(e,o){e.web3Token=o},updateServices(e,o){e.services=o},setUploads(e,o){e.uploads=o},resetPinMessages(e){e.pinMessages=[]},addPinMessage(e,o){e.pinMessages.push(o)},setPodUrl(e,o){e.pod_url=o},setRoomAddress(e,o){console.log("roomAddress",o),e.roomAddress=o}},C={};var I={namespaced:!0,state:$,actions:C,mutations:x};const S=()=>({graph:null,nodes:[],links:[],highlightNodes:new Set,highlightLinks:new Set,currentNode:null}),j={setGraph(e,o){e.graph=o},setCurrentNode(e,o){console.log(o),e.currentNode=o}},O={};var N={namespaced:!0,state:S,actions:O,mutations:j};n["default"].use(D.ZP);var _=new D.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:I,network:N}}),E=t(567),U=t(249),P=t(2213),A=t(3089),M=t(3029),T=t(114);const F={install(e,o={}){let t=o.store;async function n(){let e=new E.QW;return t.commit("core/setYdoc",e),e}async function r(e){let o=new T.GL(e);return t.commit("core/setAwareness",o),o.on("change",(()=>{o.getStates().forEach((e=>{e.user&&t.commit("core/setUserById",e.user)})),t.commit("core/setUsersUpdateDate",Date.now())})),o}async function a(e,o,t){let n=new A.H7("noosphere-demo",e);n.on("synced",(async()=>{new U.x$("noosphere-demo",e,{awareness:o,signaling:["wss://y-webrtc-signaling-eu.herokuapp.com","wss://y-webrtc-signaling-us.herokuapp.com","wss://signaling.yjs.dev"]}),new P.VU("wss://demos.yjs.dev","noosphere-demo",e,{awareness:o}),await c(t)}))}async function s(e,t){return await o.router.onReady((async o=>{void 0!=o&&"share"==o.name?e.isSharing=o.query:void 0!=t.query.room&&(e.roomId=t.query.room)})),e}async function i(n){let r=JSON.parse(localStorage.getItem("noosphere-user"));return void 0!=r&&null!=r||(r=await e.prototype.$randomUser(n),o.router.push("/profile")),console.log("{getUser}",r),t.commit("core/setUser",r),r}async function c(o){void 0==o.isSharing&&void 0==o.roomId&&(o.roomId=(0,M.Z)()),t.commit("core/setUser",o),void 0==o.isSharing&&e.prototype.$openRoom()}async function l(e){let o=t.state.core.user;e.observe(((e,o)=>{console.log(o,o.origin)})),e.observeDeep(((n,r)=>{console.log(r,r.origin),n.forEach((n=>{console.log("[event]",n);let r=n.keysChanged.has("editor_map");if(1==r){let n=e.get("editor_map");n.clientID!=o.clientID&&(t.commit("core/setEditorData",n),console.log("[update editorData]",n))}}))}))}e.prototype.$coreInit=async function(e){let o=await n(),t=await r(o),c=await i(t);c=await s(c,e.route),await a(o,t,c)},e.prototype.$userChanged=async function(){let e=t.state.core.user;console.log("[user Changed]",e),localStorage.setItem("noosphere-user",JSON.stringify(e)),t.state.core.awareness.setLocalStateField("user",e),t.commit("core/setUserById",e)},e.prototype.$randomUser=async function(e){console.log("awareness",e),void 0==e&&(e=t.state.core.awareness);let o={name:"User_"+Date.now(),color:"#"+Math.floor(16777215*Math.random()).toString(16),clientID:e.clientID,rooms:{}};return o},e.prototype.$removeUser=async function(){localStorage.removeItem("noosphere-user"),t.commit("core/setUser",null)},e.prototype.$getEditorMap=async function(e){let o=t.state.core.yDoc.getMap(e),n=await o.get("editor_map");return console.log("{{editorDataTemp}}",n),n},e.prototype.$openRoom=async function(){let e=t.state.core.user,n=t.state.core.yDoc.getMap(e.roomId);t.commit("core/setYmap",n),t.commit("core/updateRoomHistory",e.roomId),console.log("[openRoom]",e.roomId),l(n);let r=await n.get("editor_map");if(console.log("{{editorData}}",r),void 0!=r)t.commit("core/setEditorData",r);else{let o=t.state.core.editorDataDefault;o.blocks[0]={type:"header",data:{text:e.roomId,level:3}},n.set("editor_map",o),t.commit("core/setEditorData",o)}"editor"!=o.router.history.current.name&&o.router.push("/editor")},e.prototype.$saveEditor=async function(e){console.log("saveEditor",e),e.clientID=t.state.core.user.clientID,t.state.core.yMap.set("editor_map",e)},e.prototype.$loadCid=async function(o){console.log(o);let n=t.state.core.user;n.roomId=o.roomId;let r=o.content;t.commit("core/setEditorData",r),t.commit("core/setUser",n),e.prototype.$openRoom()},e.prototype.$solidRoomList=async function(){const e=await(await fetch(this.pod_url)).text();console.log("{roomList",e)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(F);var R=F,H=t(3478);let L=null;const z={install(e,o={}){let t=o.store;e.prototype.$web3Init=async function(){let o=localStorage.getItem("noosphere-web3storage-token");if(null!=o){await t.commit("core/setWeb3Token",o);let n=await e.prototype.$web3list(o);console.log("Web3 uploads",n)}},e.prototype.$web3list=async function(e){L=new H.xk({token:e});const o=[];for await(const t of L.list({maxResults:20}))o.push(t);return t.commit("core/setUploads",o),o},e.prototype.$web3Pin=async function(n){t.commit("core/resetPinMessages");let r=t.state.core.web3Token;if(null==r||0==r.length)return alert("you need a web3.storage token, see https://web3.storage/docs/"),void o.router.push("/config");{localStorage.setItem("noosphere-web3storage-token",r);let o=new File([n.data],n.fileName+".json");console.log(o),t.commit("core/addPinMessage","[pinning]: "+n.fileName),L=new H.xk({token:r});const a=e=>{console.log("-- root cid:",e),t.commit("core/addPinMessage","[root cid] "+e)},s=e=>{console.log(`stored chunk of ${e} bytes`),t.commit("core/addPinMessage","[stored chunk of] "+e+" bytes")},i=await L.put([o],{name:"noos_"+n.fileName+"_"+Date.now(),maxRetries:3,onRootCidReady:a,onStoredChunk:s});return console.log(i),t.commit("core/addPinMessage","[done]"),e.prototype.$web3list(r),i}},e.prototype.$web3Load=async function(e){console.log(e);let o=this;const t=await L.get(e);if(0!=t.ok){const e=await t.files();for(const t of e){console.log(t),console.log(`${t.cid} ${t.name} ${t.size}`);var n=new FileReader;n.onloadstart=function(e){console.log("onloadstart!");var o="File Name: "+t.name+"<br>File Size: "+t.size+"<br>File Type: "+t.type;console.log(o,e)},n.onload=function(e){console.log("onload!");var r=n.result;console.log(" ---------------- File Content ----------------: "),console.log(r,e),o.$loadCid({roomId:t.name.split(".json")[0],cid:t.cid,content:JSON.parse(r)})},n.onloadend=function(e){console.log("onloadend!"),console.log("readyState = "+n.readyState,e)},n.onerror=function(e){console.log("onerror!",e),console.log("Has Error!")},n.readAsText(t,"UTF-8")}}else console.log(t)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(z);var B=z,V=t(3658),W=t(5209),Z=t(5498),q=t(1114);const J={install(e,o={}){let t=o.store,n=r();function r(){return{w:window.innerWidth,h:window.innerWidth>768?.9*window.innerHeight:.8*window.innerHeight}}function a(e){return null!=t.state.network.search&&t.state.network.search.text.length>0&&e.name.includes(t.state.network.search.text)}function s(e){console.log(e)}function i(e){let o,t,n=null,r=null,a=new q.YBo({color:e.color||Math.round(Math.random()*Math.pow(2,24)),transparent:!0,opacity:.75}),s=null;switch(e.shape){case"box":r=new q.DvJ(20,20,20);break;case"cylinder":r=new q.fHI(10,10,20);break;case"cone":r=new q.b_z(10,20);break;case"dodecahedron":r=new q.Kgo(10);break;case"sphere":r=new q.xo$(10);break;case"torus":r=new q.XvJ(10,2);break;case"torusKnot":r=new q.FE5(10,2);break;case"base64":o=new Image,o.src=e.base64,t=new q.xEZ,t.image=o,o.onload=function(){t.needsUpdate=!0},a=new q.xeV({map:t}),s=new q.jyi(a),s.scale.set(2,2);break;default:}if(null!=s)n=s;else if(null==r){const o=document.createElement("div");o.textContent=e.name,o.style.color=e.color||"#ffffff",o.className="node-label",n=new W.j(o)}else n=new q.Kj0(r,a);return n}async function c(o){e.prototype.$nodeFocus(o)}window.addEventListener("resize",(function(){null!=t.state.network.graph&&(n=r(),t.state.network.graph.width(n.w),t.state.network.graph.height(n.h))})),e.prototype.$zoomToFit=function(){t.state.network.graph.zoomToFit(10,10,(e=>{null==t.state.network.search||t.state.network.search.text.length>0&&e.name.includes(t.state.network.search.text)}))},e.prototype.$graphInit=async function(o){let r={nodes:[],links:[]},l=t.state.network.highlightNodes,u=t.state.network.highlightLinks,d=t.state.network.hoverNode,p=(0,V.Z)({extraRenderers:[new W.M]})(o.domElement).graphData(r);p.width(n.w).height(n.h).nodeLabel("name").nodeAutoColorBy("type").nodeColor((e=>a(e)?"yellow":l.has(e)?e===d?"rgb(255,0,0,1)":"rgba(255,160,0,0.8)":e.color)).onNodeClick((e=>c(e))).onLinkClick((e=>s(e))).nodeThreeObjectExtend((e=>void 0==e.shape||null==e.shape)).nodeThreeObject((e=>i(e))).linkCurvature("curvature").linkCurveRotation("rotation").linkThreeObjectExtend(!0).linkThreeObject((e=>{if(void 0!=e.label){const o=new Z.Z(`${e.label}`);return o.color="lightgrey",o.textHeight=1.5,o}})).linkDirectionalArrowLength(3.5).linkDirectionalArrowRelPos(1).linkPositionUpdate(((e,{start:o,end:t})=>{if(void 0!=e){const n=Object.assign(...["x","y","z"].map((e=>({[e]:o[e]+(t[e]-o[e])/4}))));Object.assign(e.position,n)}})).linkWidth((e=>u.has(e)?4:1)).linkDirectionalParticles((e=>u.has(e)?4:0)).linkDirectionalParticleWidth(4).nodeAutoColorBy("group").linkAutoColorBy("group").linkOpacity(.5).onNodeHover((o=>{!o&&!l.size||o&&d===o||(l.clear(),u.clear(),o&&l.add(o),d=o||null,e.prototype.$updateHighlight())})).onLinkHover((o=>{l.clear(),u.clear(),o&&(u.add(o),l.add(o.source),l.add(o.target)),e.prototype.$updateHighlight()})),t.commit("network/setGraph",p)},e.prototype.$nodeFocus=function(e){const o=50;let n={x:o,y:o,z:o};if(0!=e.x&&0!=e.y&&0!=e.z){const t=1+o/Math.hypot(e.x,e.y,e.z);n={x:e.x*t,y:e.y*t,z:e.z*t}}t.state.network.graph.cameraPosition(n,e,3e3);let r={id:e.id,group:e.group};t.commit("network/setCurrentNode",r)},e.prototype.$updateHighlight=function(){let e=t.state.network.graph;e.nodeColor(e.nodeColor()).linkWidth(e.linkWidth()).linkDirectionalParticles(e.linkDirectionalParticles())}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(J);var Y=J,G=t(5900),K=t(6028);const Q={install(e,o={}){let t=o.store;e.prototype.$solidCreateRoom=async function(e){let o=t.state.core.pod_url;console.log(e);let n={"@context":{dct:"http://purl.org/dc/terms/","@base":o},"@id":e,created:Date.now(),creator:t.state.core.user.name},r=o+e;const a=await(0,G._u)(r,new Blob([JSON.stringify(n)],{type:"application/ld+json"}),{contentType:"application/ld+json"});console.log(`File saved at ${(0,K.LH)(a)}`)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(Q);var X=Q,ee=t(5996),oe=t(9425);t(7024);n["default"].use(R,{store:_,router:k}),n["default"].use(B,{store:_,router:k}),n["default"].use(Y,{store:_,router:k}),n["default"].use(X,{store:_,router:k}),n["default"].use(ee.XG7),n["default"].use(oe.A7),n["default"].config.productionTip=!1,new n["default"]({router:k,store:_,render:e=>e(u)}).$mount("#app")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var a=o[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(o,n,r,a){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var l=r();void 0!==l&&(o=l)}}return o}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){var e,o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var a=Object.create(null);t.r(a);var s={};e=e||[null,o({}),o([]),o(o)];for(var i=2&r&&n;"object"==typeof i&&!~e.indexOf(i);i=o(i))Object.getOwnPropertyNames(i).forEach((function(e){s[e]=function(){return n[e]}}));return s["default"]=function(){return n},t.d(a,s),a}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,n){return t.f[n](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/"+({189:"editor",443:"about",497:"config",557:"share",786:"graph",845:"profile"}[e]||e)+"."+{37:"bb800d11",71:"9c75f6b9",189:"4b63908c",282:"a63a64f0",400:"4b8c3938",443:"4bbbec5d",444:"f2327cd7",474:"2de060e3",497:"ad95e553",555:"8b278239",557:"04d7a6bc",786:"53b8ea6a",845:"6671b60a",866:"1f154211",903:"28289c43",904:"1e0d6f2d",982:"5e38cc1b"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+({189:"editor",786:"graph",845:"profile"}[e]||e)+"."+{71:"e5029ece",189:"761ec7f2",282:"331e29ae",400:"0770ab75",444:"41be91af",786:"6aa2d1d7",845:"a3abde27",866:"3df42a90",903:"4d1e74b4",904:"51a68eb6",982:"104d2d4d"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="noosphere:";t.l=function(n,r,a,s){if(e[n])e[n].push(r);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==o+a){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",o+a),i.src=n),e[n]=[r];var p=function(o,t){i.onerror=i.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(t)})),o)return o(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/noosphere/"}(),function(){var e=function(e,o,t,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,r.parentNode.removeChild(r),n(c)}};return r.onerror=r.onload=a,r.href=o,document.head.appendChild(r),r},o=function(e,o){for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var r=t[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===o))return r}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){r=s[n],a=r.getAttribute("data-href");if(a===e||a===o)return r}},n=function(n){return new Promise((function(r,a){var s=t.miniCssF(n),i=t.p+s;if(o(s,i))return r();e(n,i,r,a)}))},r={143:0};t.f.miniCss=function(e,o){var t={71:1,189:1,282:1,400:1,444:1,786:1,845:1,866:1,903:1,904:1,982:1};r[e]?o.push(r[e]):0!==r[e]&&t[e]&&o.push(r[e]=n(e).then((function(){r[e]=0}),(function(o){throw delete r[e],o})))}}(),function(){var e={143:0};t.f.j=function(o,n){var r=t.o(e,o)?e[o]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(t,n){r=e[o]=[t,n]}));n.push(r[2]=a);var s=t.p+t.u(o),i=new Error,c=function(n){if(t.o(e,o)&&(r=e[o],0!==r&&(e[o]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+o+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,r[1](i)}};t.l(s,c,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,a,s=n[0],i=n[1],c=n[2],l=0;if(s.some((function(o){return 0!==e[o]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var u=c(t)}for(o&&o(n);l<s.length;l++)a=s[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},n=self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(3261)}));n=t.O(n)})();
//# sourceMappingURL=app.2717c0c9.js.map