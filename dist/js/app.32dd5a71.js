(function(){"use strict";var e={5925:function(e,t,o){var n=o(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("NavBar"),t("div",{staticStyle:{"margin-top":"60px","margin-bottom":"60px"}},[t("router-view")],1)],1)},s=[],a={name:"App",components:{NavBar:()=>o.e(248).then(o.bind(o,1248))},data(){return{}},created(){this.$coreInit({name:"SuperCore",route:this.$route})},methods:{},watch:{}},i=a,u=o(1001),c=(0,u.Z)(i,r,s,!1,null,null,null),d=c.exports,l=o(5431);(0,l.z)("/noosphere/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noospher has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var p=o(2631);n["default"].use(p.ZP);const f=[{path:"/",name:"home",component:()=>o.e(177).then(o.bind(o,8944))},{path:"/editor",name:"editor",component:()=>o.e(189).then(o.bind(o,4636))},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,5213))},{path:"/config",name:"config",component:()=>o.e(497).then(o.bind(o,5002))},{path:"/share",name:"share",component:()=>o.e(557).then(o.bind(o,5383))},{path:"/profile",name:"profile",component:()=>o.e(845).then(o.bind(o,4377))},{path:"/graph",name:"graph",component:()=>o.e(786).then(o.bind(o,9344))}],m=new p.ZP({mode:"history",base:"/noosphere/",routes:f});var h=m,g=o(3822);const v=()=>({}),y={},b={};var w={namespaced:!0,state:v,actions:b,mutations:y};const k=()=>({user:null,users:{},usersUpdated:null,roomAddress:"",historyUpdated:null}),S={setUser(e,t){e.user=t,null!=t&&null!=t.roomId&&this.commit("actor/updateRoomHistory",t.roomId)},removeRoomIdFromHistory(e,t){delete e.user.rooms[t],e.historyUpdated=Date.now()},updateRoomHistory(e,t){t.length>0&&(this.commit("actor/removeRoomIdFromHistory",t),this.commit("actor/setRoomAddress",t),e.user.rooms[t]={roomId:t,date:Date.now()},n["default"].prototype.$userChanged(),e.historyUpdated=Date.now())},setRoomAddress(e,t){e.roomAddress=t},setUsers(e,t){e.users=t},setUserById(e,t){e.users[t.clientID]=t},setUsersUpdated(e,t){e.usersUpdated=t}},U={};var A={namespaced:!0,state:k,actions:U,mutations:S};const $=()=>({yDoc:null,awareness:null,yMap:null}),I={setYdoc(e,t){e.yDoc=t},setAwareness(e,t){e.awareness=t},setYmap(e,t){e.yMap=t}},N={};var C={namespaced:!0,state:$,actions:N,mutations:I};o(7658);const O=()=>({token:null,uploads:[],pinMessages:[]}),M={setToken(e,t){e.token=t},setUploads(e,t){e.uploads=t},resetPinMessages(e){e.pinMessages=[]},addPinMessage(e,t){e.pinMessages.push(t)}},P={};var T={namespaced:!0,state:O,actions:P,mutations:M};const R=()=>({pendingTasks:[],pod_url:"https://noosphere.solidcommunity.net/public/testrooms/"}),j={spinnerAdd(e,t){e.pendingTasks.push(t)},spinnerRemove(e,t){e.pendingTasks=e.pendingTasks.filter((e=>e.id!=t.id))},setPodUrl(e,t){e.pod_url=t}},E={};var _={namespaced:!0,state:R,actions:E,mutations:j};const D=()=>({graph:null,nodes:[],links:[],highlightNodes:new Set,highlightLinks:new Set,currentNode:null}),x={setGraph(e,t){e.graph=t},setCurrentNode(e,t){console.log(t),e.currentNode=t}},B={};var F={namespaced:!0,state:D,actions:B,mutations:x};n["default"].use(g.ZP);var H=new g.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:w,actor:A,network:F,y:C,util:_,web3:T}}),q=o(5996),L=o(9425);o(7024);const V={install(e,t={}){let o=t.store;e.prototype.$coreInit=async function(t){e.prototype.$getUser(),e.prototype.$getRouterParameters(t.route),e.prototype.$ready()},e.prototype.$getRouterParameters=async function(e){let n=o.state.actor.user;return await t.router.onReady((async t=>{void 0!=t&&"share"==t.name?n.isSharing=t.query:void 0!=e.query.room&&(n.roomId=e.query.room)})),n},e.prototype.$ready=function(){let t=o.state.actor.user;void 0==t.isSharing&&void 0==t.roomId&&(t.roomId=e.prototype.$random()),o.commit("actor/setUser",t),void 0==t.isSharing&&console.log("openRoom",t)},e.prototype.$openRoom=function(){let e=o.state.actor.user;o.commit("actor/updateRoomHistory",e.roomId)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(V);var Z=V;const G={install(e,t={}){let o=t.store;e.prototype.$getUser=function(){let t=localStorage.getItem("noosphere-user"),n=JSON.parse(t);return void 0!=n&&null!=n||(n=e.prototype.$randomUser()),o.commit("actor/setUser",n),n},e.prototype.$randomUser=function(){let e=o.state.y.awareness,t={name:"User_"+Date.now(),color:"#"+Math.floor(16777215*Math.random()).toString(16),clientID:e.clientID,rooms:{}};return t},e.prototype.$userChanged=async function(){let e=o.state.actor.user;console.log("[user Changed]",e),localStorage.setItem("noosphere-user",JSON.stringify(e)),o.commit("actor/setUserById",e)},e.prototype.$removeUser=async function(){localStorage.removeItem("noosphere-user"),o.commit("core/setUser",null)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(G);var J=G,Y=o(3029);const z={install(e,t={}){let o=t.store;e.prototype.$spinnerAdd=function(e){o.commit("util/spinnerAdd",e)},e.prototype.$spinnerRemove=function(e){o.commit("util/spinnerRemove",e)},e.prototype.$random=function(){return(0,Y.Z)()},e.prototype.$secondsToHms=function(e){e=Number(e);var t=Math.floor(e/86400),o=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%3600%60),s="";return s=t>0?t+"j":o>0?o+"h":n>0?n+"m":r+"s",s}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(z);var K=z;n["default"].use(q.XG7),n["default"].use(L.A7),n["default"].use(Z,{store:H,router:h}),n["default"].use(J,{store:H,router:h}),n["default"].use(K,{store:H,router:h}),n["default"].config.productionTip=!1,new n["default"]({router:h,store:H,render:e=>e(d)}).$mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,s){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],s=e[d][2];for(var i=!0,u=0;u<n.length;u++)(!1&s||a>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[u])}))?n.splice(u--,1):(i=!1,s<a&&(a=s));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({177:"home",189:"editor",443:"about",497:"config",557:"share",786:"graph",845:"profile"}[e]||e)+"."+{71:"3b4fa39b",158:"47b6a7d6",177:"ce4901c8",189:"1e9c5391",248:"80fbe208",280:"aed1e8ab",422:"b19c8e2c",443:"14b19635",497:"6950f69c",557:"ff8b53d5",602:"0e4f1f47",786:"5c4e1714",845:"a74ba0ba",873:"78ec0ca9",879:"8cfe14c8"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+({177:"home",189:"editor",786:"graph",845:"profile"}[e]||e)+"."+{71:"e5029ece",158:"1254c9de",177:"afe9fbcb",189:"661e98f7",280:"6bad569a",602:"6d66ea7e",786:"8599b81e",845:"c452758b",879:"9d597432"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="noosphere:";o.l=function(n,r,s,a){if(e[n])e[n].push(r);else{var i,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+s){i=l;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[r];var p=function(t,o){i.onerror=i.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/noosphere/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)o();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,r.parentNode.removeChild(r),n(u)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],s=r.getAttribute("data-href");if(s===e||s===t)return r}},n=function(n){return new Promise((function(r,s){var a=o.miniCssF(n),i=o.p+a;if(t(a,i))return r();e(n,i,r,s)}))},r={143:0};o.f.miniCss=function(e,t){var o={71:1,158:1,177:1,189:1,280:1,602:1,786:1,845:1,879:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=s);var a=o.p+o.u(t),i=new Error,u=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}};o.l(a,u,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,a=n[0],i=n[1],u=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(u)var d=u(o)}for(t&&t(n);c<a.length;c++)s=a[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5925)}));n=o.O(n)})();
//# sourceMappingURL=app.32dd5a71.js.map