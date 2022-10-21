(function(){"use strict";var e={9601:function(e,o,t){var n=t(6369),r=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app"}},[o("NavBar"),o("div",{staticStyle:{"margin-top":"60px"}},[o("router-view")],1),o("SpinnerComp"),o("SideBar"),o("Web3Modal"),o("ShareModal")],1)},s=[],a={name:"App",components:{NavBar:()=>t.e(945).then(t.bind(t,7945)),SpinnerComp:()=>t.e(109).then(t.bind(t,1109)),SideBar:()=>t.e(22).then(t.bind(t,22)),Web3Modal:()=>t.e(329).then(t.bind(t,1329)),ShareModal:()=>t.e(844).then(t.bind(t,844))},data(){return{}},created(){this.$coreInit({name:"SuperCore",route:this.$route})},async mounted(){this.$web3Init()},methods:{},watch:{},computed:{user(){return this.$store.state.actor.user},users(){return this.$store.state.actor.users}}},i=a,l=t(1001),c=(0,l.Z)(i,r,s,!1,null,null,null),d=c.exports,u=t(5431);(0,u.z)("/noosphere/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noosphere has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var h=t(2631),p=function(){var e=this,o=e._self._c;return o("div",{staticClass:"home text-light"},[o("ChannelView"),o("UsersView")],1)},m=[],f={name:"HomeView",components:{UsersView:()=>t.e(449).then(t.bind(t,4449)),ChannelView:()=>t.e(983).then(t.bind(t,2983))}},g=f,w=(0,l.Z)(g,p,m,!1,null,null,null),y=w.exports;n["default"].use(h.ZP);const b=[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,6024))},{path:"/share",name:"share",component:()=>t.e(557).then(t.bind(t,2312))},{path:"/editor",name:"editor",component:()=>t.e(189).then(t.bind(t,3190))},{path:"/profile",name:"profile",component:()=>t.e(845).then(t.bind(t,3368))},{path:"/graph",name:"graph",component:()=>t.e(786).then(t.bind(t,367))},{path:"/fork",name:"fork",component:()=>t.e(589).then(t.bind(t,1581))},{path:"/debug",name:"debug",component:()=>t.e(711).then(t.bind(t,3097))}],v=new h.ZP({mode:"history",base:"/noosphere/",routes:b});var k=v,D=t(3822);const I=()=>({}),R={},$={};var C={namespaced:!0,state:I,actions:$,mutations:R};const P=()=>({user:null,users:{},usersUpdated:null,roomAddress:"",historyUpdated:null,modalUser:null}),x={setUser(e,o){e.user=o,null!=o&&null!=o.roomId&&this.commit("actor/updateRoomHistory",o.roomId)},removeRoomIdFromHistory(e,o){delete e.user.rooms[o],e.historyUpdated=Date.now()},updateRoomHistory(e,o){o.length>0&&(this.commit("actor/removeRoomIdFromHistory",o),this.commit("actor/setRoomAddress",o),e.user.rooms[o]={roomId:o,date:Date.now()},n["default"].prototype.$userChanged(),e.historyUpdated=Date.now())},setRoomAddress(e,o){e.roomAddress=o},setUsers(e,o){e.users=o},updateUsersStates(e,o){console.log(o),e.users=o.users},setUserByIdOLD(e,o){let t=void 0==e.users[o.clientID]||void 0==e.users[o.clientID].roomID||e.users[o.clientID].roomID!=o.roomID||e.users[o.clientID].name!=o.name||e.users[o.clientID].color!=o.color;t?(console.log("[store setUserById]",t,e.users[o.clientID],o),e.users[o.clientID]=o,console.log(o.clientID,o.name,o.roomId),this.commit("actor/setUsersUpdated",Date.now())):console.log(".")},setUsersUpdated(e,o){e.usersUpdated=o},setModalUser(e,o){e.modalUser=o}},S={};var A={namespaced:!0,state:P,actions:S,mutations:x};const O=()=>({editor:null,markdownContent:null,parent:null}),U={setEditor(e,o){e.editor=o},setMarkdownContent(e,o){e.markdownContent=o},setParent(e,o){console.log("parent",o),e.parent=o}},M={};var N={namespaced:!0,state:O,actions:M,mutations:U};const T=()=>({yDoc:null,awareness:null,status:"init"}),j={setYdoc(e,o){e.yDoc=o},setAwareness(e,o){e.awareness=o},setStatus(e,o){e.status=o}},L={};var E={namespaced:!0,state:T,actions:L,mutations:j};t(7658);const F=()=>({token:null,uploads:[],pinMessages:[]}),H={setToken(e,o){e.token=o},setUploads(e,o){e.uploads=o},resetPinMessages(e){e.pinMessages=[]},addPinMessage(e,o){e.pinMessages.push(o)}},V={};var _={namespaced:!0,state:F,actions:V,mutations:H};const z=()=>({}),B={},W={};var Z={namespaced:!0,state:z,actions:W,mutations:B};const q=()=>({pendingTasks:[],pod_url:"https://noosphere.solidcommunity.net/public/testrooms/"}),J={spinnerAdd(e,o){console.log("add spinner",o),e.pendingTasks.push(o)},spinnerRemove(e,o){console.log("remove spinner",o),e.pendingTasks=e.pendingTasks.filter((e=>e.id!=o.id))},setPodUrl(e,o){e.pod_url=o}},G={};var Y={namespaced:!0,state:q,actions:G,mutations:J};const K=()=>({graph:null,nodes:[],links:[],highlightNodes:new Set,highlightLinks:new Set,currentNode:null}),Q={setGraph(e,o){e.graph=o},setCurrentNode(e,o){console.log(o),e.currentNode=o}},X={};var ee={namespaced:!0,state:K,actions:X,mutations:Q};const oe=()=>({localUser:null,channel:null,room:null,allRooms:null}),te={setLocalUser(e,o){e.localUser=o},setChannel(e,o){e.channel=o},setRoom(e,o){e.room=o},setAllRooms(e,o){console.log(o),e.allRooms=o}},ne={};var re={namespaced:!0,state:oe,actions:ne,mutations:te};n["default"].use(D.ZP);var se=new D.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:C,network:ee,actor:A,editor:N,y:E,room:Z,web3:_,util:Y,noosphere:re}});let ae=!0;class ie{constructor(e={}){Object.assign(this,e)}d(){1==ae&&console.log("[debug]",this.group,this)}}class le extends ie{constructor(e={}){super(e),this.group="user",this.init(),this.save()}init(){let e=JSON.parse(localStorage.getItem("noosphere-user"));void 0!=e&&null!=e?(Object.assign(this,e),console.log("from localstorage")):(Object.assign(this,this.randomUser()),console.log("from random")),void 0==this.rooms&&(this.rooms={}),void 0==this.channels&&(this.channels={})}randomUser(){let e=Date.now();return{name:"User_"+e,color:"#"+Math.floor(16777215*Math.random()).toString(16),created:e}}lite(){let e=this.store.state.noosphere.room?this.store.state.noosphere.room.id:null,o=this.store.state.noosphere.channel?this.store.state.noosphere.channel.id:null;return{name:this.name,color:this.color,clientID:this.clientID,channels:this.channels,channelID:o,rooms:this.rooms,roomID:e}}save(){let e=this.lite();localStorage.setItem("noosphere-user",JSON.stringify(e)),this.store.commit("noosphere/setLocalUser",e),console.log("save",this),null!=this.channel&&this.channel.awareness.setLocalStateField("user",e),this.d()}addChannel(e){this.channel=e,delete this.channels[e.id],this.channels[e.id]={id:e.id,date:Date.now()},this.clientID=this.channel.awareness.clientID,this.store.commit("noosphere/setChannel",e),this.save()}addRoom(e){console.log("add",e),this.room=e,delete this.rooms[e.id],this.rooms[e.id]={id:e.id,date:Date.now(),type:"room"},this.store.commit("noosphere/setRoom",e),this.save()}updateProfile(e){Object.assign(this,e),this.save()}}var ce=t(3029),de=t(5892),ue=t(114),he=t(3089),pe=t(8340);class me extends ie{constructor(e={}){super(e),this.id=e.id||(0,ce.Z)(),this.group="channel",this.created=Date.now(),this.rootDoc=new de.QW,this.flushIndex=0,this.createAwareness(),this.createIndexedDbProvider(),this.d()}createAwareness(){let e=this.user.clientID;this.awareness=new ue.GL(this.rootDoc),this.roomList=this.rootDoc.getMap("allrooms"),this.roomList.observe((e=>{e.target,this.roomList,console.log("this.roomList has changed",this.roomList.toJSON());let o=Array.from(this.roomList.values()).sort(((e,o)=>o.date-e.date));this.store.commit("noosphere/setAllRooms",o)})),console.log("user clientID",e),console.log("Awareness outdatedTime",this.awareness),this.awareness.on("change",(e=>{console.log("changes",e);let o={changes:e,users:{}};this.awareness.getStates().forEach((e=>{console.log("state",e),e.user&&(console.log("state.user",e.user),o.users[e.user.clientID]=e.user,console.log(o))})),console.log(o),this.store.commit("actor/updateUsersStates",o)}))}createIndexedDbProvider(){this.indexeddbProvider=new he.H7(this.id,this.rootDoc),this.indexeddbProvider.on("synced",(async e=>{console.log("{$getPersistanceDB} synced",e),this.flush({doc:this.rootDoc,roomID:this.id,type:"main"})}))}flush(e){this.flushIndex++;let o=this.awareness,t=e.doc,n=e.roomID,r=e.type;void 0!=this.roomWsProvider&&this.roomWsProvider.destroy();let s=new pe.VU("wss://yjs-leveldb.glitch.me/",n,t,{awareness:o,connect:!0});s.on("status",(t=>{t.status&&(console.log("--------------------------\nwsProvider status",this.flushIndex,t.status,n,e.type,o.clientID,"\n--------------------------"),this.store.commit("y/setStatus",t.status),this.status=t.status)})),"main"==r?this.wsProvider=s:(void 0!=this.roomWsProvider&&this.roomWsProvider.destroy(),this.roomWsProvider=s,this.addToRoomList(n))}addToRoomList(e){this.roomList.set(e,{roomID:e,date:Date.now()}),console.log("add to room List",this.roomList.toJSON(),e)}}class fe extends ie{constructor(e={}){super(e),this.group="room",this.init()}init(){this.ymap=this.channel.rootDoc.getMap(),this.roomDoc=this.ymap.get(this.id),void 0==this.roomDoc&&(this.roomDoc=new de.QW,this.ymap.set(this.id,this.roomDoc)),this.channel.flush({doc:this.roomDoc,roomID:this.id,type:"room"})}}var ge=t(3287);const we={install(e,o={}){let t=o.store,n=null,r=null;e.prototype.$coreInit=async function(r){n=new le({store:t,route:r.route});let s=n.channelID||"noosphere-demo";e.prototype.$newChannel({id:s,user:n}),console.log("{core options}",r,o.router)},e.prototype.$newChannel=async function(r){r.store=t,console.log("opts.router",o.router.history.current.name,o.router),await o.router.onReady((async o=>{let t=new me(r);n.addChannel(t),n.d(),console.log("[RRRRRouter]",o),void 0!=o&&"share"==o.name?console.log("SHAREPAGE",o.query):(console.log("pas share page",n),void 0!=n.route.query.room&&(n.roomID=n.route.query.room),null!=n.roomID&&e.prototype.$openRoom({id:n.roomID}))}))},e.prototype.$openRoom=async function(e){let s=e.id;console.log("{'openROOM params'}",e),r=void 0!=e.content?e.content:null;let a=new fe({id:s,channel:n.channel,store:t});"editor"!=o.router.history.current.name&&o.router.push("/editor"),n.addRoom(a)},e.prototype.$connectMilkdown=async function(e){console.log(e),console.log("{EDITORDATA}",r);let o=t.state.editor.editor,n=t.state.noosphere.channel,s=t.state.noosphere.localUser,a=t.state.noosphere.room;if(null!=o&&null!=a){let e=a.roomDoc,t=n.awareness;console.log(o,n,s,a,e,t),o.action((o=>{const n=o.get(ge.aZ);n.disconnect().bindDoc(e).setAwareness(t),null!=r&&(n.applyTemplate(r),r=null),n.connect()})),console.log("{EDITOR}",o,e.toJSON())}else console.log("{something is null now}")},e.prototype.$getRouterParameters11=async function(e){console.log("{getRouterParameters}",o.router,e),await o.router.onReady((async o=>(console.log("[RRRRRouter]",o,e,e.name),e.query)))},e.prototype.$removeUser=async function(){localStorage.removeItem("noosphere-user"),t.commit("noosphere/setLocalUser",null)},e.prototype.$userChanged=async function(e){console.log("[userChanged]",e),n.updateProfile(e)},e.prototype.$coreInit1=async function(o){console.log("{core options}",o),e.prototype.$createYDoc(),e.prototype.$getUser(),e.prototype.$getRouterParameters(o.route),e.prototype.$connect("core"),e.prototype.$ready()},e.prototype.$getRouterParameters1=async function(e){console.log("{getRouterParameters}",o.router,e);let n=t.state.actor.user;return await o.router.onReady((async o=>{console.log("[RRRRRouter]",o),void 0!=o&&"share"==o.name?(console.log(o.name),n.isSharing=o.query):void 0!=e.query.room&&(n.roomId=e.query.room)})),console.log(n),n},e.prototype.$ready=function(){let o=t.state.actor.user;void 0==o.isSharing&&void 0==o.roomId&&(o.roomId=e.prototype.$random()),t.commit("actor/setUser",o),console.log("{set local storage user, send awareness, open room}",o),void 0==o.isSharing&&e.prototype.$connect("core")}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(we);var ye=we;t(541);const be={install(e,o={}){let t=o.store;e.prototype.$openRoomOLD=async function(n){let r=t.state.actor.user,s=t.state.y.yDoc.getMap(r.roomId);t.commit("y/setYmap",s),t.commit("actor/updateRoomHistory",r.roomId),e.prototype.$setYMapObserver();let a=await s.get("editor_map");if(void 0==a){let e=null;void 0!=n&&"fork"==n.mode?(e=Object.assign({},t.state.editor.editorData),e.blocks.unshift({type:"paragraph",data:{text:'<small><i>forked from <a href="https://scenaristeur.github.io/noosphere?room='+n.parent+'" >"'+n.parent+'"</a></i></small>'}}),e.parent=n.parent):(e={},e.blocks=[],e.blocks.push(t.state.editor.editorDataDefault)),e.blocks.unshift({type:"header",data:{text:r.roomId,level:2}}),s.set("editor_map",e),a=Object.assign({},e)}else void 0!=n&&"fork"==n.mode?alert("room already exist : cancel / merge / append / use another name ?"):t.commit("editor/setEditorData",a);"editor"!=o.router.history.current.name&&o.router.push("/editor")}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(be);var ve=be,ke=t(2543);let De=null;const Ie={install(e,o={}){let t=o.store;e.prototype.$web3Init=async function(){let o=localStorage.getItem("noosphere-web3storage-token");null!=o&&(await t.commit("web3/setToken",o),t.commit("util/spinnerAdd","web3list"),await e.prototype.$web3list(o),t.commit("util/spinnerRemove","web3list"))},e.prototype.$web3list=async function(e){De=new ke.xk({token:e});const o=[];for await(const t of De.list({maxResults:20}))o.push(t);return console.log(o),t.commit("web3/setUploads",o),o},e.prototype.$web3Pin=async function(n){t.commit("web3/resetPinMessages");let r=t.state.web3.token;if(null==r||0==r.length)return alert("you need a web3.storage token, see https://web3.storage/docs/"),void o.router.push("/config");{localStorage.setItem("noosphere-web3storage-token",r);let o=new File([n.data],n.fileName+".json");console.log(o),t.commit("web3/addPinMessage","[pinning]: "+n.fileName),De=new ke.xk({token:r});const s=e=>{console.log("-- root cid:",e),t.commit("web3/addPinMessage","[root cid] "+e)},a=e=>{console.log(`stored chunk of ${e} bytes`),t.commit("web3/addPinMessage","[stored chunk of] "+e+" bytes")},i=await De.put([o],{name:n.fileName,maxRetries:3,onRootCidReady:s,onStoredChunk:a});return console.log(i),t.commit("web3/addPinMessage","[done]"),e.prototype.$web3list(r),i}},e.prototype.$web3Load=async function(o){e.prototype.$spinnerAdd("web3 load"),console.log(o);let t=this;const n=await De.get(o);if(0!=n.ok){const e=await n.files();for(const o of e){console.log(o),console.log(`${o.cid} ${o.name} ${o.size}`);var r=new FileReader;r.onloadstart=function(e){console.log("onloadstart!");var t="File Name: "+o.name+"<br>File Size: "+o.size+"<br>File Type: "+o.type;console.log(t,e)},r.onload=function(e){console.log("onload!");var n=r.result;console.log(" ---------------- File Content ----------------: "),console.log(n,e),t.$loadCid({roomId:o.name.split(".json")[0],cid:o.cid,result:JSON.parse(n)})},r.onloadend=function(e){console.log("onloadend!"),console.log("readyState = "+r.readyState,e)},r.onerror=function(e){console.log("onerror!",e),console.log("Has Error!")},r.readAsText(o,"UTF-8")}}else console.log(n)},e.prototype.$loadCid=async function(o){console.log(o),e.prototype.$openRoom({id:o.roomId,content:o.result.content}),e.prototype.$spinnerRemove("web3 load"),console.log("{parent room}",o.result.parent)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(Ie);var Re=Ie,$e=t(9357),Ce=t(5209),Pe=t(5498),xe=t(1114);const Se={install(e,o={}){let t=o.store,n=r();function r(){return{w:window.innerWidth,h:window.innerWidth>768?.9*window.innerHeight:.8*window.innerHeight}}function s(e){return null!=t.state.network.search&&t.state.network.search.text.length>0&&e.name.includes(t.state.network.search.text)}function a(e){console.log(e)}function i(e){let o,t,n=null,r=null,s=new xe.YBo({color:e.color||Math.round(Math.random()*Math.pow(2,24)),transparent:!0,opacity:.75}),a=null;switch(e.shape){case"box":r=new xe.DvJ(20,20,20);break;case"cylinder":r=new xe.fHI(10,10,20);break;case"cone":r=new xe.b_z(10,20);break;case"dodecahedron":r=new xe.Kgo(10);break;case"sphere":r=new xe.xo$(10);break;case"torus":r=new xe.XvJ(10,2);break;case"torusKnot":r=new xe.FE5(10,2);break;case"base64":o=new Image,o.src=e.base64,t=new xe.xEZ,t.image=o,o.onload=function(){t.needsUpdate=!0},s=new xe.xeV({map:t}),a=new xe.jyi(s),a.scale.set(2,2);break;default:}if(null!=a)n=a;else if(null==r){const o=document.createElement("div");o.textContent=e.name,o.style.color=e.color||"#ffffff",o.className="node-label",n=new Ce.j(o)}else n=new xe.Kj0(r,s);return n}async function l(o){e.prototype.$nodeFocus(o)}window.addEventListener("resize",(function(){null!=t.state.network.graph&&(n=r(),t.state.network.graph.width(n.w),t.state.network.graph.height(n.h))})),e.prototype.$zoomToFit=function(){t.state.network.graph.zoomToFit(10,10,(e=>{null==t.state.network.search||t.state.network.search.text.length>0&&e.name.includes(t.state.network.search.text)}))},e.prototype.$graphInit=async function(o){let r={nodes:[],links:[]},c=t.state.network.highlightNodes,d=t.state.network.highlightLinks,u=t.state.network.hoverNode,h=(0,$e.Z)({extraRenderers:[new Ce.M]})(o.domElement).graphData(r);h.width(n.w).height(n.h).nodeLabel("name").nodeAutoColorBy("type").nodeColor((e=>s(e)?"yellow":c.has(e)?e===u?"rgb(255,0,0,1)":"rgba(255,160,0,0.8)":e.color)).onNodeClick((e=>l(e))).onLinkClick((e=>a(e))).nodeThreeObjectExtend((e=>void 0==e.shape||null==e.shape)).nodeThreeObject((e=>i(e))).linkCurvature("curvature").linkCurveRotation("rotation").linkThreeObjectExtend(!0).linkThreeObject((e=>{if(void 0!=e.label){const o=new Pe.Z(`${e.label}`);return o.color="lightgrey",o.textHeight=1.5,o}})).linkDirectionalArrowLength(3.5).linkDirectionalArrowRelPos(1).linkPositionUpdate(((e,{start:o,end:t})=>{if(void 0!=e){const n=Object.assign(...["x","y","z"].map((e=>({[e]:o[e]+(t[e]-o[e])/4}))));Object.assign(e.position,n)}})).linkWidth((e=>d.has(e)?4:1)).linkDirectionalParticles((e=>d.has(e)?4:0)).linkDirectionalParticleWidth(4).nodeAutoColorBy("group").linkAutoColorBy("group").linkOpacity(.5).onNodeHover((o=>{!o&&!c.size||o&&u===o||(c.clear(),d.clear(),o&&c.add(o),u=o||null,e.prototype.$updateHighlight())})).onLinkHover((o=>{c.clear(),d.clear(),o&&(d.add(o),c.add(o.source),c.add(o.target)),e.prototype.$updateHighlight()})),t.commit("network/setGraph",h)},e.prototype.$nodeFocus=function(e){const o=50;let n={x:o,y:o,z:o};if(0!=e.x&&0!=e.y&&0!=e.z){const t=1+o/Math.hypot(e.x,e.y,e.z);n={x:e.x*t,y:e.y*t,z:e.z*t}}t.state.network.graph.cameraPosition(n,e,3e3);let r={id:e.id,group:e.group};t.commit("network/setCurrentNode",r)},e.prototype.$updateHighlight=function(){let e=t.state.network.graph;e.nodeColor(e.nodeColor()).linkWidth(e.linkWidth()).linkDirectionalParticles(e.linkDirectionalParticles())}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(Se);var Ae=Se;const Oe={install(e,o={}){let t=o.store;e.prototype.$spinnerAdd=function(e){t.commit("util/spinnerAdd",e)},e.prototype.$spinnerRemove=function(e){t.commit("util/spinnerRemove",e)},e.prototype.$random=function(){return(0,ce.Z)()},e.prototype.$secondsToHms=function(e){e=Number(e);var o=Math.floor(e/86400),t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%3600%60),s="";return s=o>0?o+"j":t>0?t+"h":n>0?n+"m":r+"s",s}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(Oe);var Ue=Oe,Me=t(5996),Ne=t(9425);t(7024);n["default"].use(ye,{store:se,router:k}),n["default"].use(ve,{store:se,router:k}),n["default"].use(Re,{store:se,router:k}),n["default"].use(Ae,{store:se,router:k}),n["default"].use(Ue,{store:se,router:k}),n["default"].use(Me.XG7),n["default"].use(Ne.A7),n["default"].config.productionTip=!1,new n["default"]({router:k,store:se,render:e=>e(d)}).$mount("#app")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var s=o[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}t.m=e,function(){var e=[];t.O=function(o,n,r,s){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],s=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(d--,1);var c=r();void 0!==c&&(o=c)}}return o}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,n){return t.f[n](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/"+({189:"editor",443:"about",557:"share",589:"fork",711:"debug",786:"graph",845:"profile"}[e]||e)+"."+{22:"04449631",74:"78ddc43a",97:"51132d97",109:"8c083c8f",189:"74c855a4",213:"cd7b78d2",258:"6f19ab4a",305:"795450fc",329:"42d5fab1",443:"8789563b",449:"b5f93e21",557:"19cfb86b",589:"6ab1d435",599:"3264d496",711:"0d650740",714:"2481469e",786:"de49b17a",844:"14ebfef3",845:"e6581af8",862:"932d29be",945:"3fc9a3f6",983:"44542db6"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+({189:"editor",589:"fork",711:"debug",786:"graph",845:"profile"}[e]||e)+"."+{22:"321e45fc",74:"4a5dc325",97:"1749e2d2",109:"01ffc4b8",189:"a48cad12",213:"484a22ff",305:"914a9968",449:"72e6d29b",589:"86837fcd",711:"1773ad75",714:"136205dd",786:"e6bdf72f",844:"688dd9c3",845:"bbabbca3",983:"ba4d0e84"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="noosphere:";t.l=function(n,r,s,a){if(e[n])e[n].push(r);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==o+s){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",o+s),i.src=n),e[n]=[r];var h=function(o,t){i.onerror=i.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(t)})),o)return o(t)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/noosphere/"}(),function(){var e=function(e,o,t,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)t();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=i,r.parentNode.removeChild(r),n(l)}};return r.onerror=r.onload=s,r.href=o,document.head.appendChild(r),r},o=function(e,o){for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var r=t[n],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===o))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],s=r.getAttribute("data-href");if(s===e||s===o)return r}},n=function(n){return new Promise((function(r,s){var a=t.miniCssF(n),i=t.p+a;if(o(a,i))return r();e(n,i,r,s)}))},r={143:0};t.f.miniCss=function(e,o){var t={22:1,74:1,97:1,109:1,189:1,213:1,305:1,449:1,589:1,711:1,714:1,786:1,844:1,845:1,983:1};r[e]?o.push(r[e]):0!==r[e]&&t[e]&&o.push(r[e]=n(e).then((function(){r[e]=0}),(function(o){throw delete r[e],o})))}}(),function(){var e={143:0};t.f.j=function(o,n){var r=t.o(e,o)?e[o]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(t,n){r=e[o]=[t,n]}));n.push(r[2]=s);var a=t.p+t.u(o),i=new Error,l=function(n){if(t.o(e,o)&&(r=e[o],0!==r&&(e[o]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+o+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}};t.l(a,l,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,s,a=n[0],i=n[1],l=n[2],c=0;if(a.some((function(o){return 0!==e[o]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var d=l(t)}for(o&&o(n);c<a.length;c++)s=a[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},n=self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(9601)}));n=t.O(n)})();
//# sourceMappingURL=app.7dbc5fc3.js.map