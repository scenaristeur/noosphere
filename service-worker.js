if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let i={};const c=e=>o(e,l),u={module:{uri:l},exports:i,require:c};s[l]=Promise.all(r.map((e=>u[e]||c(e)))).then((e=>(n(...e),i)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/896.e46b49c1.css",revision:null},{url:"/noosphere/css/997.3669f274.css",revision:null},{url:"/noosphere/css/app.8e0cc2e1.css",revision:null},{url:"/noosphere/css/chunk-vendors.c632c9ea.css",revision:null},{url:"/noosphere/css/editor.c6c6b058.css",revision:null},{url:"/noosphere/css/room.7b516344.css",revision:null},{url:"/noosphere/css/user.b446147c.css",revision:null},{url:"/noosphere/index.html",revision:"365252f4895cbbbc16bb575eb7ecb61e"},{url:"/noosphere/js/896.6f815545.js",revision:null},{url:"/noosphere/js/997.128ff749.js",revision:null},{url:"/noosphere/js/about.8ad9afdd.js",revision:null},{url:"/noosphere/js/app.305149ac.js",revision:null},{url:"/noosphere/js/chunk-vendors.21b53a83.js",revision:null},{url:"/noosphere/js/config.8da4b0cb.js",revision:null},{url:"/noosphere/js/editor.530d917d.js",revision:null},{url:"/noosphere/js/room.4e7cb7c3.js",revision:null},{url:"/noosphere/js/share.c03f20c5.js",revision:null},{url:"/noosphere/js/user.17b704bc.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map