(function(){"use strict";var e={6834:function(e,t,o){var n=o(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/config"}},[e._v("Config")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view"),t("b-alert",{attrs:{variant:"success",show:""}},[e._v("Noosphere 0 - "),t("i",[t("small",[e._v("jumbo")])])])],1)},a=[],i={name:"App",created(){this.$coreInit({name:"SuperCore"})}},s=i,u=o(1001),l=(0,u.Z)(s,r,a,!1,null,null,null),c=l.exports,d=o(5431);(0,d.z)("/noosphere/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noospher has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=o(2631),h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",[e.showJumbo?t("b-jumbotron",{attrs:{header:"Noosphere","header-level":"4",lead:"Noosphere is a tool to share and grab ideas all around the world."}},[t("small",[t("i",[t("p",[e._v("wikipedia fr: "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Noosph%C3%A8re",target:"_blank"}},[e._v(" La noosphère, selon la pensée de Vladimir Vernadsky1 et Pierre Teilhard de Chardin, désigne la « sphère de la pensée humaine ». Dans la théorie originelle de Vernadsky, la noosphère est la troisième d'une succession de phases de développement de la Terre, après la géosphère (matière inanimée) et la biosphère (la vie biologique). Tout comme l'émergence de la vie a fondamentalement transformé la géosphère, l'émergence de la cognition humaine transforme fondamentalement la biosphère. ")])]),t("p",[e._v("wikipedia en: "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Noosphere",target:"_blank"}},[e._v(' The noosphere (alternate spelling noösphere) is a philosophical concept developed and popularized by the Russian-Ukrainian Soviet biogeochemist Vladimir Vernadsky, and the French philosopher and Jesuit priest Pierre Teilhard de Chardin. Vernadsky defined the noosphere as the new state of the biosphere and described as the planetary "sphere of reason". The noosphere represents the highest stage of biospheric development, its defining factor being the development of humankind\'s rational activities.')])])])]),t("p",[e._v("If you want to grab ideas near you and share located ones, you can activate/daesactivate your location in the "),t("router-link",{attrs:{variant:"dark",to:"/config"}},[e._v("Config")]),e._v(" menu. "),e._v(" You can always customize ")],1),t("b-button",{attrs:{variant:"primary",href:"#room-card"}},[e._v("Open a Room")]),t("b-button",{attrs:{variant:"primary",href:"/about"}},[e._v("More Info")]),t("b-button",{attrs:{variant:"outline-info"},on:{click:e.toggleJumbo}},[e._v("Don't show this block next time)")])],1):e._e()],1),t("RoomCard")],1)},p=[],m={name:"HomeView",components:{RoomCard:()=>o.e(333).then(o.bind(o,4333))},data(){return{showJumbo:!1}},mounted(){this.showJumbo=localStorage.getItem("noosphere-jumbo")||!0,console.log(this.showJumbo)},methods:{toggleJumbo(){this.showJumbo=!this.showJumbo,localStorage.setItem("noosphere-jumbo",this.showJumbo)}}},v=m,b=(0,u.Z)(v,h,p,!1,null,null,null),g=b.exports;n["default"].use(f.Z);const y=[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,4870))},{path:"/config",name:"config",component:()=>o.e(497).then(o.bind(o,3334))},{path:"/share",name:"share",component:()=>o.e(557).then(o.bind(o,6718))}],w=new f.Z({mode:"history",base:"/noosphere/",routes:y});var k=w,_=o(3822);const C=()=>({query:null,rooms:[]}),j={setQuery(e,t){e.query=t}},A={};var N={namespaced:!0,state:C,actions:A,mutations:j};n["default"].use(_.ZP);var O=new _.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:N}});const T={install(e,t={}){let o=t.store;e.prototype.$coreInit=async function(){void 0!=this.$route.query&&(console.log("this.$route.query",this.$route.query),o.commit("core/setQuery",this.$route.query))}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(T);var S=T,E=o(5996),P=o(9425);o(7024);n["default"].use(S,{store:O}),n["default"].use(E.XG7),n["default"].use(P.A7),n["default"].config.productionTip=!1,new n["default"]({router:k,store:O,render:e=>e(c)}).$mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],a=e[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[u])}))?n.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({443:"about",497:"config",557:"share"}[e]||e)+"."+{333:"fb273d3d",443:"9eacb122",494:"286192d4",497:"8da4b0cb",557:"c03f20c5",997:"128ff749"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{333:"d9ba6c09",494:"3fad47de",997:"3669f274"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="noosphere:";o.l=function(n,r,a,i){if(e[n])e[n].push(r);else{var s,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var f=function(t,o){s.onerror=s.onload=null,clearTimeout(h);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/noosphere/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,r.parentNode.removeChild(r),n(u)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=function(n){return new Promise((function(r,a){var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,r,a)}))},r={143:0};o.f.miniCss=function(e,t){var o={333:1,494:1,997:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,u=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,u,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],u=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(u)var c=u(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6834)}));n=o.O(n)})();
//# sourceMappingURL=app.b01a9141.js.map