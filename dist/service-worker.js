if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let i={};const c=e=>o(e,l),u={module:{uri:l},exports:i,require:c};s[l]=Promise.all(r.map((e=>u[e]||c(e)))).then((e=>(n(...e),i)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/2.a95f49e7.css",revision:null},{url:"/noosphere/css/218.68e30a8f.css",revision:null},{url:"/noosphere/css/262.18bc3cac.css",revision:null},{url:"/noosphere/css/374.c9ab5dfb.css",revision:null},{url:"/noosphere/css/457.cab013a8.css",revision:null},{url:"/noosphere/css/app.53a9e9c7.css",revision:null},{url:"/noosphere/css/chunk-vendors.c632c9ea.css",revision:null},{url:"/noosphere/index.html",revision:"33ce513ae8753900abece6d09cc75939"},{url:"/noosphere/js/2.41f690ea.js",revision:null},{url:"/noosphere/js/218.2e9fdcd6.js",revision:null},{url:"/noosphere/js/262.fb919c5b.js",revision:null},{url:"/noosphere/js/374.1a39e1f9.js",revision:null},{url:"/noosphere/js/457.1b11a7b3.js",revision:null},{url:"/noosphere/js/about.002a5bc0.js",revision:null},{url:"/noosphere/js/app.5606b2b6.js",revision:null},{url:"/noosphere/js/chunk-vendors.ad0a8623.js",revision:null},{url:"/noosphere/js/config.12fbfd22.js",revision:null},{url:"/noosphere/js/share.c03f20c5.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
