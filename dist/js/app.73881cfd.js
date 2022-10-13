(function(){"use strict";var e={4330:function(e,t,o){var n=o(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("NavBar"),t("div",{staticStyle:{"margin-top":"60px"}},[t("router-view")],1),t("SpinnerComp"),t("SideBar"),t("Web3Modal"),t("ShareModal")],1)},s=[],a={name:"App",components:{NavBar:()=>o.e(974).then(o.bind(o,2974)),SpinnerComp:()=>o.e(210).then(o.bind(o,8210)),SideBar:()=>o.e(943).then(o.bind(o,2943)),Web3Modal:()=>o.e(55).then(o.bind(o,8055)),ShareModal:()=>o.e(318).then(o.bind(o,9318))},data(){return{}},created(){this.$coreInit({name:"SuperCore",route:this.$route})},async mounted(){},methods:{},watch:{},computed:{user(){return this.$store.state.actor.user},users(){return this.$store.state.actor.users}}},i=a,l=o(1001),c=(0,l.Z)(i,r,s,!1,null,null,null),d=c.exports,u=o(5431);(0,u.z)("/noosphere/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noosphere has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var h=o(2631),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home text-light"},[t("ChannelView"),t("UsersView")],1)},m=[],f={name:"HomeView",components:{UsersView:()=>o.e(807).then(o.bind(o,1195)),ChannelView:()=>o.e(875).then(o.bind(o,7875))}},g=f,w=(0,l.Z)(g,p,m,!1,null,null,null),y=w.exports;n["default"].use(h.Z);const b=[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,9687))},{path:"/share",name:"share",component:()=>o.e(557).then(o.bind(o,2847))},{path:"/editor",name:"editor",component:()=>o.e(189).then(o.bind(o,3069))},{path:"/profile",name:"profile",component:()=>o.e(845).then(o.bind(o,9310))},{path:"/graph",name:"graph",component:()=>o.e(786).then(o.bind(o,6153))},{path:"/fork",name:"fork",component:()=>o.e(589).then(o.bind(o,7609))},{path:"/debug",name:"debug",component:()=>o.e(711).then(o.bind(o,6940))}],v=new h.Z({mode:"history",base:"/noosphere/",routes:b});var k=v,$=o(3822);const D=()=>({}),C={},R={};var x={namespaced:!0,state:D,actions:R,mutations:C};const I=()=>({user:null,users:{},usersUpdated:null,roomAddress:"",historyUpdated:null,modalUser:null}),P={setUser(e,t){e.user=t,null!=t&&null!=t.roomId&&this.commit("actor/updateRoomHistory",t.roomId)},removeRoomIdFromHistory(e,t){delete e.user.rooms[t],e.historyUpdated=Date.now()},updateRoomHistory(e,t){t.length>0&&(this.commit("actor/removeRoomIdFromHistory",t),this.commit("actor/setRoomAddress",t),e.user.rooms[t]={roomId:t,date:Date.now()},n["default"].prototype.$userChanged(),e.historyUpdated=Date.now())},setRoomAddress(e,t){e.roomAddress=t},setUsers(e,t){e.users=t},setUserById(e,t){e.users[t.clientID]=t,console.log(t.clientID,t.name,t.roomId)},setUsersUpdated(e,t){e.usersUpdated=t},setModalUser(e,t){e.modalUser=t}},S={};var U={namespaced:!0,state:I,actions:S,mutations:P};const O=()=>({editor:null,markdownContent:null,parent:null}),M={setEditor(e,t){e.editor=t},setMarkdownContent(e,t){e.markdownContent=t},setParent(e,t){console.log("parent",t),e.parent=t}},j={};var A={namespaced:!0,state:O,actions:j,mutations:M};const N=()=>({yDoc:null,awareness:null,status:"init"}),T={setYdoc(e,t){e.yDoc=t},setAwareness(e,t){e.awareness=t},setStatus(e,t){e.status=t}},E={};var F={namespaced:!0,state:N,actions:E,mutations:T};const H=()=>({token:null,uploads:[],pinMessages:[]}),L={setToken(e,t){e.token=t},setUploads(e,t){e.uploads=t},resetPinMessages(e){e.pinMessages=[]},addPinMessage(e,t){e.pinMessages.push(t)}},V={};var _={namespaced:!0,state:H,actions:V,mutations:L};const z=()=>({}),B={},Z={};var W={namespaced:!0,state:z,actions:Z,mutations:B};const q=()=>({pendingTasks:[],pod_url:"https://noosphere.solidcommunity.net/public/testrooms/"}),J={spinnerAdd(e,t){console.log("add spinner",t),e.pendingTasks.push(t)},spinnerRemove(e,t){console.log("remove spinner",t),e.pendingTasks=e.pendingTasks.filter((e=>e.id!=t.id))},setPodUrl(e,t){e.pod_url=t}},Y={};var G={namespaced:!0,state:q,actions:Y,mutations:J};const K=()=>({graph:null,nodes:[],links:[],highlightNodes:new Set,highlightLinks:new Set,currentNode:null}),Q={setGraph(e,t){e.graph=t},setCurrentNode(e,t){console.log(t),e.currentNode=t}},X={};var ee={namespaced:!0,state:K,actions:X,mutations:Q};const te=()=>({localUser:null,channel:null,room:null}),oe={setLocalUser(e,t){e.localUser=t},setChannel(e,t){e.channel=t},setRoom(e,t){e.room=t}},ne={};var re={namespaced:!0,state:te,actions:ne,mutations:oe};n["default"].use($.ZP);var se=new $.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:x,network:ee,actor:U,editor:A,y:F,room:W,web3:_,util:G,noosphere:re}});let ae=!0;class ie{constructor(e={}){Object.assign(this,e)}d(){1==ae&&console.log("[debug]",this.group,this)}}class le extends ie{constructor(e={}){super(e),this.group="user",this.init(),this.save()}init(){let e=JSON.parse(localStorage.getItem("noosphere-user"));void 0!=e&&null!=e?(Object.assign(this,e),console.log("from localstorage")):(Object.assign(this,this.randomUser()),console.log("from random")),void 0==this.rooms&&(this.rooms={}),void 0==this.channels&&(this.channels={})}randomUser(){let e=Date.now();return{name:"User_"+e,color:"#"+Math.floor(16777215*Math.random()).toString(16),created:e}}lite(){let e=this.store.state.noosphere.room?this.store.state.noosphere.room.id:null,t=this.store.state.noosphere.channel?this.store.state.noosphere.channel.id:null;return{name:this.name,color:this.color,clientID:this.clientID,channels:this.channels,channelID:t,rooms:this.rooms,roomID:e}}save(){let e=this.lite();localStorage.setItem("noosphere-user",JSON.stringify(e)),this.store.commit("noosphere/setLocalUser",e),console.log("save",this),null!=this.channel&&this.channel.awareness.setLocalStateField("user",e),this.d()}addChannel(e){this.channel=e,delete this.channels[e.id],this.channels[e.id]={id:e.id,date:Date.now()},this.clientID=this.channel.awareness.clientID,this.store.commit("noosphere/setChannel",e),this.save()}addRoom(e){console.log("add",e),this.room=e,delete this.rooms[e.id],this.rooms[e.id]={id:e.id,date:Date.now(),type:"room"},this.store.commit("noosphere/setRoom",e),this.save()}updateProfile(e){Object.assign(this,e),this.save()}}var ce=o(3029),de=o(5892),ue=o(114),he=o(3089),pe=o(5011);class me extends ie{constructor(e={}){super(e),this.id=e.id||(0,ce.Z)(),this.group="channel",this.created=Date.now(),this.rootDoc=new de.QW,this.createAwareness(),this.createIndexedDbProvider(),this.d()}createAwareness(){this.awareness=new ue.GL(this.rootDoc),this.awareness.on("change",(e=>{console.log("changes",e),this.awareness.getStates().forEach((e=>{console.log("state",e),e.user&&(console.log("state.user",e.user),this.store.commit("actor/setUserById",e.user),this.store.commit("actor/setUsersUpdated",Date.now()))}))}))}createIndexedDbProvider(){let e=this.awareness;this.indexeddbProvider=new he.H7(this.id,this.rootDoc),this.indexeddbProvider.on("synced",(async t=>{console.log("{$getPersistanceDB} synced",t),this.wsProvider=new pe.VU("wss://yjs-leveldb.glitch.me/",this.id,this.rootDoc,{awareness:e,connect:!0}),this.wsProvider.on("status",(e=>{e.status&&(console.log("--------------------------\nwsProvider status",e.status,"\n--------------------------"),this.store.commit("y/setStatus",e.status),this.status=e.status)}))}))}}class fe extends ie{constructor(e={}){super(e),this.group="room",this.init()}init(){let e=this.channel.awareness;this.ymap=this.channel.rootDoc.getMap(),this.roomDoc=this.ymap.get(this.id),void 0==this.roomDoc&&(this.roomDoc=new de.QW,this.ymap.set(this.id,this.roomDoc)),this.wsProvider=new pe.VU("wss://yjs-leveldb.glitch.me/",this.id,this.roomDoc,{awareness:e,connect:!0}),this.wsProvider.on("status",(e=>{e.status&&(console.log("--------------------------\nwsProvider status",e.status,"\n--------------------------"),this.store.commit("y/setStatus",e.status),this.status=e.status)}))}}var ge=o(3287);const we={install(e,t={}){let o=t.store,n=null;e.prototype.$coreInit=async function(t){n=new le({store:o});let r=n.channelID||"noosphere-demo";e.prototype.$newChannel({id:r}),console.log("{core options}",t)},e.prototype.$newChannel=async function(t){t.store=o;let r=new me(t);n.addChannel(r),n.d(),null!=n.roomID&&e.prototype.$openRoom(n.roomID)},e.prototype.$openRoom=async function(e){console.log(e);let r=new fe({id:e,channel:n.channel,store:o});"editor"!=t.router.history.current.name&&t.router.push("/editor"),n.addRoom(r)},e.prototype.$connectMilkdown=async function(e){console.log(e);let t=o.state.editor.editor,n=o.state.noosphere.channel,r=o.state.noosphere.localUser,s=o.state.noosphere.room;if(null!=t&&null!=s){let e=s.roomDoc,o=n.awareness;console.log(t,n,r,s,e,o),t.action((t=>{const n=t.get(ge.aZ);n.disconnect().bindDoc(e).setAwareness(o).connect()})),console.log("{EDITOR}",t,e.toJSON())}else console.log("{something is null now}")},e.prototype.$getRouterParameters=async function(e){console.log("{getRouterParameters}",t.router,e),await t.router.onReady((async t=>{console.log("[RRRRRouter]",t,e,e.name)}))},e.prototype.$removeUser=async function(){localStorage.removeItem("noosphere-user"),o.commit("noosphere/setLocalUser",null)},e.prototype.$userChanged=async function(e){console.log("[userChanged]",e),n.updateProfile(e)},e.prototype.$coreInit1=async function(t){console.log("{core options}",t),e.prototype.$createYDoc(),e.prototype.$getUser(),e.prototype.$getRouterParameters(t.route),e.prototype.$connect("core"),e.prototype.$ready()},e.prototype.$getRouterParameters=async function(e){console.log("{getRouterParameters}",t.router,e);let n=o.state.actor.user;return await t.router.onReady((async t=>{console.log("[RRRRRouter]",t),void 0!=t&&"share"==t.name?(console.log(t.name),n.isSharing=t.query):void 0!=e.query.room&&(n.roomId=e.query.room)})),console.log(n),n},e.prototype.$ready=function(){let t=o.state.actor.user;void 0==t.isSharing&&void 0==t.roomId&&(t.roomId=e.prototype.$random()),o.commit("actor/setUser",t),console.log("{set local storage user, send awareness, open room}",t),void 0==t.isSharing&&e.prototype.$connect("core")}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(we);var ye=we;const be={install(e,t={}){let o=t.store;e.prototype.$openRoomOLD=async function(n){let r=o.state.actor.user,s=o.state.y.yDoc.getMap(r.roomId);o.commit("y/setYmap",s),o.commit("actor/updateRoomHistory",r.roomId),e.prototype.$setYMapObserver();let a=await s.get("editor_map");if(void 0==a){let e=null;void 0!=n&&"fork"==n.mode?(e=Object.assign({},o.state.editor.editorData),e.blocks.unshift({type:"paragraph",data:{text:'<small><i>forked from <a href="https://scenaristeur.github.io/noosphere?room='+n.parent+'" >"'+n.parent+'"</a></i></small>'}}),e.parent=n.parent):(e={},e.blocks=[],e.blocks.push(o.state.editor.editorDataDefault)),e.blocks.unshift({type:"header",data:{text:r.roomId,level:2}}),s.set("editor_map",e),a=Object.assign({},e)}else void 0!=n&&"fork"==n.mode?alert("room already exist : cancel / merge / append / use another name ?"):o.commit("editor/setEditorData",a);"editor"!=t.router.history.current.name&&t.router.push("/editor")}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(be);var ve=be,ke=o(3478);let $e=null;const De={install(e,t={}){let o=t.store;e.prototype.$web3Init=async function(){let t=localStorage.getItem("noosphere-web3storage-token");null!=t&&(await o.commit("web3/setToken",t),o.commit("util/spinnerAdd","web3list"),await e.prototype.$web3list(t),o.commit("util/spinnerRemove","web3list"))},e.prototype.$web3list=async function(e){$e=new ke.xk({token:e});const t=[];for await(const o of $e.list({maxResults:20}))t.push(o);return console.log(t),o.commit("web3/setUploads",t),t},e.prototype.$web3Pin=async function(n){o.commit("web3/resetPinMessages");let r=o.state.web3.token;if(null==r||0==r.length)return alert("you need a web3.storage token, see https://web3.storage/docs/"),void t.router.push("/config");{localStorage.setItem("noosphere-web3storage-token",r);let t=new File([n.data],n.fileName+".json");console.log(t),o.commit("web3/addPinMessage","[pinning]: "+n.fileName),$e=new ke.xk({token:r});const s=e=>{console.log("-- root cid:",e),o.commit("web3/addPinMessage","[root cid] "+e)},a=e=>{console.log(`stored chunk of ${e} bytes`),o.commit("web3/addPinMessage","[stored chunk of] "+e+" bytes")},i=await $e.put([t],{name:n.fileName,maxRetries:3,onRootCidReady:s,onStoredChunk:a});return console.log(i),o.commit("web3/addPinMessage","[done]"),e.prototype.$web3list(r),i}},e.prototype.$web3Load=async function(t){e.prototype.$spinnerAdd("web3 load"),console.log(t);let o=this;const n=await $e.get(t);if(0!=n.ok){const e=await n.files();for(const t of e){console.log(t),console.log(`${t.cid} ${t.name} ${t.size}`);var r=new FileReader;r.onloadstart=function(e){console.log("onloadstart!");var o="File Name: "+t.name+"<br>File Size: "+t.size+"<br>File Type: "+t.type;console.log(o,e)},r.onload=function(e){console.log("onload!");var n=r.result;console.log(" ---------------- File Content ----------------: "),console.log(n,e),o.$loadCid({roomId:t.name.split(".json")[0],cid:t.cid,result:JSON.parse(n)})},r.onloadend=function(e){console.log("onloadend!"),console.log("readyState = "+r.readyState,e)},r.onerror=function(e){console.log("onerror!",e),console.log("Has Error!")},r.readAsText(t,"UTF-8")}}else console.log(n)},e.prototype.$loadCid=async function(t){console.log(t);let n=o.state.actor.user;n.roomId=t.roomId,o.commit("actor/setUser",n),await e.prototype.$connect({data:t,origin:"web3.loadCid"}),e.prototype.$spinnerRemove("web3 load"),console.log("{parent room}",t.result.parent)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(De);var Ce=De,Re=o(3658),xe=o(5209),Ie=o(5498),Pe=o(1114);const Se={install(e,t={}){let o=t.store,n=r();function r(){return{w:window.innerWidth,h:window.innerWidth>768?.9*window.innerHeight:.8*window.innerHeight}}function s(e){return null!=o.state.network.search&&o.state.network.search.text.length>0&&e.name.includes(o.state.network.search.text)}function a(e){console.log(e)}function i(e){let t,o,n=null,r=null,s=new Pe.YBo({color:e.color||Math.round(Math.random()*Math.pow(2,24)),transparent:!0,opacity:.75}),a=null;switch(e.shape){case"box":r=new Pe.DvJ(20,20,20);break;case"cylinder":r=new Pe.fHI(10,10,20);break;case"cone":r=new Pe.b_z(10,20);break;case"dodecahedron":r=new Pe.Kgo(10);break;case"sphere":r=new Pe.xo$(10);break;case"torus":r=new Pe.XvJ(10,2);break;case"torusKnot":r=new Pe.FE5(10,2);break;case"base64":t=new Image,t.src=e.base64,o=new Pe.xEZ,o.image=t,t.onload=function(){o.needsUpdate=!0},s=new Pe.xeV({map:o}),a=new Pe.jyi(s),a.scale.set(2,2);break;default:}if(null!=a)n=a;else if(null==r){const t=document.createElement("div");t.textContent=e.name,t.style.color=e.color||"#ffffff",t.className="node-label",n=new xe.j(t)}else n=new Pe.Kj0(r,s);return n}async function l(t){e.prototype.$nodeFocus(t)}window.addEventListener("resize",(function(){null!=o.state.network.graph&&(n=r(),o.state.network.graph.width(n.w),o.state.network.graph.height(n.h))})),e.prototype.$zoomToFit=function(){o.state.network.graph.zoomToFit(10,10,(e=>{null==o.state.network.search||o.state.network.search.text.length>0&&e.name.includes(o.state.network.search.text)}))},e.prototype.$graphInit=async function(t){let r={nodes:[],links:[]},c=o.state.network.highlightNodes,d=o.state.network.highlightLinks,u=o.state.network.hoverNode,h=(0,Re.Z)({extraRenderers:[new xe.M]})(t.domElement).graphData(r);h.width(n.w).height(n.h).nodeLabel("name").nodeAutoColorBy("type").nodeColor((e=>s(e)?"yellow":c.has(e)?e===u?"rgb(255,0,0,1)":"rgba(255,160,0,0.8)":e.color)).onNodeClick((e=>l(e))).onLinkClick((e=>a(e))).nodeThreeObjectExtend((e=>void 0==e.shape||null==e.shape)).nodeThreeObject((e=>i(e))).linkCurvature("curvature").linkCurveRotation("rotation").linkThreeObjectExtend(!0).linkThreeObject((e=>{if(void 0!=e.label){const t=new Ie.Z(`${e.label}`);return t.color="lightgrey",t.textHeight=1.5,t}})).linkDirectionalArrowLength(3.5).linkDirectionalArrowRelPos(1).linkPositionUpdate(((e,{start:t,end:o})=>{if(void 0!=e){const n=Object.assign(...["x","y","z"].map((e=>({[e]:t[e]+(o[e]-t[e])/4}))));Object.assign(e.position,n)}})).linkWidth((e=>d.has(e)?4:1)).linkDirectionalParticles((e=>d.has(e)?4:0)).linkDirectionalParticleWidth(4).nodeAutoColorBy("group").linkAutoColorBy("group").linkOpacity(.5).onNodeHover((t=>{!t&&!c.size||t&&u===t||(c.clear(),d.clear(),t&&c.add(t),u=t||null,e.prototype.$updateHighlight())})).onLinkHover((t=>{c.clear(),d.clear(),t&&(d.add(t),c.add(t.source),c.add(t.target)),e.prototype.$updateHighlight()})),o.commit("network/setGraph",h)},e.prototype.$nodeFocus=function(e){const t=50;let n={x:t,y:t,z:t};if(0!=e.x&&0!=e.y&&0!=e.z){const o=1+t/Math.hypot(e.x,e.y,e.z);n={x:e.x*o,y:e.y*o,z:e.z*o}}o.state.network.graph.cameraPosition(n,e,3e3);let r={id:e.id,group:e.group};o.commit("network/setCurrentNode",r)},e.prototype.$updateHighlight=function(){let e=o.state.network.graph;e.nodeColor(e.nodeColor()).linkWidth(e.linkWidth()).linkDirectionalParticles(e.linkDirectionalParticles())}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(Se);var Ue=Se;const Oe={install(e,t={}){let o=t.store;e.prototype.$spinnerAdd=function(e){o.commit("util/spinnerAdd",e)},e.prototype.$spinnerRemove=function(e){o.commit("util/spinnerRemove",e)},e.prototype.$random=function(){return(0,ce.Z)()},e.prototype.$secondsToHms=function(e){e=Number(e);var t=Math.floor(e/86400),o=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%3600%60),s="";return s=t>0?t+"j":o>0?o+"h":n>0?n+"m":r+"s",s}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(Oe);var Me=Oe,je=o(5996),Ae=o(9425);o(7024);n["default"].use(ye,{store:se,router:k}),n["default"].use(ve,{store:se,router:k}),n["default"].use(Ce,{store:se,router:k}),n["default"].use(Ue,{store:se,router:k}),n["default"].use(Me,{store:se,router:k}),n["default"].use(je.XG7),n["default"].use(Ae.A7),n["default"].config.productionTip=!1,new n["default"]({router:k,store:se,render:e=>e(d)}).$mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,s){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],s=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({189:"editor",443:"about",557:"share",589:"fork",711:"debug",786:"graph",845:"profile"}[e]||e)+"."+{55:"db6d730a",148:"f64fdeca",158:"3c6c5b5e",189:"3e6d1240",210:"0c8e5ddf",315:"c6cb41d6",318:"65cf6061",368:"856cddab",443:"6e5f99ea",485:"da666a10",557:"081c65c2",589:"c43b8aea",711:"60a78aa8",786:"a6cf0003",807:"9d7fe580",833:"dca34f6a",845:"4cf6d8ae",875:"0cc10312",880:"2c5ae585",943:"f0e8d2ff",974:"b177d948"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+({189:"editor",589:"fork",711:"debug",786:"graph",845:"profile"}[e]||e)+"."+{158:"1254c9de",189:"022f4d81",210:"01ffc4b8",315:"f20e9d97",318:"2f0f6b35",589:"86837fcd",711:"1773ad75",786:"2f64b869",807:"8a8cfadf",833:"b7473bea",845:"bbabbca3",875:"ba4d0e84",880:"27317c67",943:"e97ddb8d"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="noosphere:";o.l=function(n,r,s,a){if(e[n])e[n].push(r);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[r];var h=function(t,o){i.onerror=i.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/noosphere/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)o();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=i,r.parentNode.removeChild(r),n(l)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],s=r.getAttribute("data-href");if(s===e||s===t)return r}},n=function(n){return new Promise((function(r,s){var a=o.miniCssF(n),i=o.p+a;if(t(a,i))return r();e(n,i,r,s)}))},r={143:0};o.f.miniCss=function(e,t){var o={158:1,189:1,210:1,315:1,318:1,589:1,711:1,786:1,807:1,833:1,845:1,875:1,880:1,943:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=s);var a=o.p+o.u(t),i=new Error,l=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}};o.l(a,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,a=n[0],i=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var d=l(o)}for(t&&t(n);c<a.length;c++)s=a[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4330)}));n=o.O(n)})();
//# sourceMappingURL=app.73881cfd.js.map