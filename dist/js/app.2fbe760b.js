(function(){"use strict";var e={9404:function(e,t,n){var o=n(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/config"}},[e._v("Config")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view"),t("b-alert",{attrs:{variant:"success",show:""}},[e._v("Noosphere 0 - editorjs plugins")])],1)},a=[],i={name:"App",created(){this.$coreInit({name:"SuperCore"})}},u=i,s=n(1001),c=(0,s.Z)(u,r,a,!1,null,null,null),l=c.exports,f=n(5431);(0,f.z)("/noosphere/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noospher has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=n(2631),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",[t("b-jumbotron",{attrs:{header:"Noosphere","header-level":"4",lead:"Noosphere is a tool to share and grab ideas all around the world."}},[t("p",[e._v("If you want to grab ideas near you and share located ones, you can activate/daesactivate your location in the "),t("router-link",{attrs:{variant:"dark",to:"/config"}},[e._v("Config")]),e._v(" menu. "),e._v(" You can always customize ")],1),t("b-button",{attrs:{variant:"primary",href:"#room-card"}},[e._v("Open a Room")]),t("b-button",{attrs:{variant:"primary",href:"/about"}},[e._v("More Info")])],1)],1),t("RoomCard")],1)},h=[],v={name:"HomeView",components:{RoomCard:()=>n.e(716).then(n.bind(n,1716))}},m=v,b=(0,s.Z)(m,p,h,!1,null,null,null),g=b.exports;o["default"].use(d.Z);const y=[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5399))},{path:"/config",name:"config",component:()=>n.e(497).then(n.bind(n,700))},{path:"/share",name:"share",component:()=>n.e(557).then(n.bind(n,6718))}],w=new d.Z({mode:"history",base:"/noosphere/",routes:y});var k=w,_=n(3822);const C=()=>({query:null,rooms:[]}),O={setQuery(e,t){e.query=t}},j={};var A={namespaced:!0,state:C,actions:j,mutations:O};o["default"].use(_.ZP);var N=new _.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{core:A}});const E={install(e,t={}){let n=t.store;e.prototype.$coreInit=async function(){void 0!=this.$route.query&&(console.log("this.$route.query",this.$route.query),n.commit("core/setQuery",this.$route.query))}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(E);var S=E,T=n(5996),q=n(9425);n(7024);o["default"].use(S,{store:N}),o["default"].use(T.XG7),o["default"].use(q.A7),o["default"].config.productionTip=!1,new o["default"]({router:k,store:N,render:e=>e(l)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({443:"about",497:"config",557:"share"}[e]||e)+"."+{262:"fb919c5b",443:"002a5bc0",497:"12fbfd22",557:"c03f20c5",716:"1898d0ea"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{262:"18bc3cac",716:"b0181453"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="noosphere:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[r];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/noosphere/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),u=n.p+i;if(t(i,u))return r();e(o,u,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={262:1,716:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),u=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],u=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var l=s(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9404)}));o=n.O(o)})();
//# sourceMappingURL=app.2fbe760b.js.map