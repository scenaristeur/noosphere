if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let l={};const c=e=>o(e,i),u={module:{uri:i},exports:l,require:c};s[i]=Promise.all(r.map((e=>u[e]||c(e)))).then((e=>(n(...e),l)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/406.31d65ea3.css",revision:null},{url:"/noosphere/css/app.bd071c00.css",revision:null},{url:"/noosphere/css/chunk-vendors.c632c9ea.css",revision:null},{url:"/noosphere/index.html",revision:"c86c7d21bdf62674fa3a17933025f5b1"},{url:"/noosphere/js/406.7263786d.js",revision:null},{url:"/noosphere/js/about.002a5bc0.js",revision:null},{url:"/noosphere/js/app.eda9b7b8.js",revision:null},{url:"/noosphere/js/chunk-vendors.530e257d.js",revision:null},{url:"/noosphere/js/share.c03f20c5.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
