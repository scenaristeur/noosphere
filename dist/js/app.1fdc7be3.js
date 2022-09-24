(function(){"use strict";var e={3887:function(e,t,o){var r=o(6369),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("NavBar"),t("div",{staticStyle:{"margin-top":"60px"}},[t("router-view")],1)],1)},s=[],a={name:"App",components:{NavBar:()=>o.e(248).then(o.bind(o,1248))},data(){return{}},created(){this.$coreInit({name:"SuperCore",route:this.$route})},methods:{},watch:{}},i=a,u=o(1001),c=(0,u.Z)(i,n,s,!1,null,null,null),d=c.exports,l=o(5431);(0,l.z)("/noosphere/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noospher has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var p=o(2631);r["default"].use(p.ZP);const f=[{path:"/",name:"home",component:()=>o.e(177).then(o.bind(o,8944))},{path:"/editor",name:"editor",component:()=>o.e(189).then(o.bind(o,9360))}],m=new p.ZP({mode:"history",base:"/noosphere/",routes:f});var h=m,g=o(3822);const v=()=>({}),y={},w={};var b={namespaced:!0,state:v,actions:w,mutations:y};const k=()=>({user:null,users:{},usersUpdated:null,roomAddress:"",historyUpdated:null}),S={setUser(e,t){e.user=t,null!=t&&null!=t.roomId&&this.commit("actor/updateRoomHistory",t.roomId)},removeRoomIdFromHistory(e,t){delete e.user.rooms[t],e.historyUpdated=Date.now()},updateRoomHistory(e,t){t.length>0&&(this.commit("actor/removeRoomIdFromHistory",t),this.commit("actor/setRoomAddress",t),e.user.rooms[t]={roomId:t,date:Date.now()},r["default"].prototype.$userChanged(),e.historyUpdated=Date.now())},setRoomAddress(e,t){e.roomAddress=t},setUsers(e,t){e.users=t},setUserById(e,t){e.users[t.clientID]=t},setUsersUpdated(e,t){e.usersUpdated=t}},U={};var A={namespaced:!0,state:k,actions:U,mutations:S};const N=()=>({yDoc:null,awareness:null,yMap:null}),$={setYdoc(e,t){e.yDoc=t},setAwareness(e,t){e.awareness=t},setYmap(e,t){e.yMap=t}},C={};var I={namespaced:!0,state:N,actions:C,mutations:$};o(7658);const O=()=>({token:null,uploads:[],pinMessages:[]}),M={setToken(e,t){e.token=t},setUploads(e,t){e.uploads=t},resetPinMessages(e){e.pinMessages=[]},addPinMessage(e,t){e.pinMessages.push(t)}},P={};var T={namespaced:!0,state:O,actions:P,mutations:M};const j=()=>({pendingTasks:[],pod_url:"https://noosphere.solidcommunity.net/public/testrooms/"}),R={spinnerAdd(e,t){e.pendingTasks.push(t)},spinnerRemove(e,t){e.pendingTasks=e.pendingTasks.filter((e=>e.id!=t.id))},setPodUrl(e,t){e.pod_url=t}},E={};var _={namespaced:!0,state:j,actions:E,mutations:R};const D=()=>({graph:null,nodes:[],links:[],highlightNodes:new Set,highlightLinks:new Set,currentNode:null}),x={setGraph(e,t){e.graph=t},setCurrentNode(e,t){console.log(t),e.currentNode=t}},B={};var F={namespaced:!0,state:D,actions:B,mutations:x};r["default"].use(g.ZP);var q=new g.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:b,actor:A,network:F,y:I,util:_,web3:T}}),H=o(5996),L=o(9425);o(7024);const V={install(e,t={}){let o=t.store;e.prototype.$coreInit=async function(t){e.prototype.$getUser(),e.prototype.$getRouterParameters(t.route),e.prototype.$ready()},e.prototype.$getRouterParameters=async function(e){let r=o.state.actor.user;return await t.router.onReady((async t=>{void 0!=t&&"share"==t.name?r.isSharing=t.query:void 0!=e.query.room&&(r.roomId=e.query.room)})),r},e.prototype.$ready=function(){let t=o.state.actor.user;void 0==t.isSharing&&void 0==t.roomId&&(t.roomId=e.prototype.$random()),o.commit("actor/setUser",t),void 0==t.isSharing&&console.log("openRoom",t)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(V);var Z=V;const G={install(e,t={}){let o=t.store;e.prototype.$getUser=function(){let t=localStorage.getItem("noosphere-user"),r=JSON.parse(t);return void 0!=r&&null!=r||(r=e.prototype.$randomUser()),o.commit("actor/setUser",r),r},e.prototype.$randomUser=function(){let e=o.state.y.awareness,t={name:"User_"+Date.now(),color:"#"+Math.floor(16777215*Math.random()).toString(16),clientID:e.clientID,rooms:{}};return t},e.prototype.$userChanged=async function(){let e=o.state.actor.user;console.log("[user Changed]",e),localStorage.setItem("noosphere-user",JSON.stringify(e)),o.commit("actor/setUserById",e)},e.prototype.$removeUser=async function(){localStorage.removeItem("noosphere-user"),o.commit("core/setUser",null)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(G);var J=G,Y=o(3029);const z={install(e,t={}){let o=t.store;e.prototype.$spinnerAdd=function(e){o.commit("util/spinnerAdd",e)},e.prototype.$spinnerRemove=function(e){o.commit("util/spinnerRemove",e)},e.prototype.$random=function(){return(0,Y.Z)()},e.prototype.$secondsToHms=function(e){e=Number(e);var t=Math.floor(e/86400),o=Math.floor(e/3600),r=Math.floor(e%3600/60),n=Math.floor(e%3600%60),s="";return s=t>0?t+"j":o>0?o+"h":r>0?r+"m":n+"s",s}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(z);var K=z;r["default"].use(H.XG7),r["default"].use(L.A7),r["default"].use(Z,{store:q,router:h}),r["default"].use(J,{store:q,router:h}),r["default"].use(K,{store:q,router:h}),r["default"].config.productionTip=!1,new r["default"]({router:h,store:q,render:e=>e(d)}).$mount("#app")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,s){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],s=e[d][2];for(var i=!0,u=0;u<r.length;u++)(!1&s||a>=s)&&Object.keys(o.O).every((function(e){return o.O[e](r[u])}))?r.splice(u--,1):(i=!1,s<a&&(a=s));if(i){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({177:"home",189:"editor"}[e]||e)+"."+{71:"3b4fa39b",158:"47b6a7d6",177:"ce4901c8",189:"ff256b9e",248:"80fbe208",280:"aed1e8ab",422:"b19c8e2c",602:"0e4f1f47",873:"78ec0ca9",879:"8cfe14c8"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+({177:"home",189:"editor"}[e]||e)+"."+{71:"e5029ece",158:"1254c9de",177:"afe9fbcb",189:"34f8fbe3",280:"6bad569a",602:"6d66ea7e",879:"9d597432"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="noosphere:";o.l=function(r,n,s,a){if(e[r])e[r].push(n);else{var i,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+s){i=l;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=r),e[r]=[n];var p=function(t,o){i.onerror=i.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/noosphere/"}(),function(){var e=function(e,t,o,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var s=function(s){if(n.onerror=n.onload=null,"load"===s.type)o();else{var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,n.parentNode.removeChild(n),r(u)}};return n.onerror=n.onload=s,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===e||s===t))return n}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){n=a[r],s=n.getAttribute("data-href");if(s===e||s===t)return n}},r=function(r){return new Promise((function(n,s){var a=o.miniCssF(r),i=o.p+a;if(t(a,i))return n();e(r,i,n,s)}))},n={143:0};o.f.miniCss=function(e,t){var o={71:1,158:1,177:1,189:1,280:1,602:1,879:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=s);var a=o.p+o.u(t),i=new Error,u=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,n[1](i)}};o.l(a,u,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,a=r[0],i=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(u)var d=u(o)}for(t&&t(r);c<a.length;c++)s=a[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(3887)}));r=o.O(r)})();
//# sourceMappingURL=app.1fdc7be3.js.map