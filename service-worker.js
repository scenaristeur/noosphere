if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let i={};const u=e=>o(e,l),c={module:{uri:l},exports:i,require:u};s[l]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(n(...e),i)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/218.68e30a8f.css",revision:null},{url:"/noosphere/css/231.56b4db59.css",revision:null},{url:"/noosphere/css/298.ea411ec3.css",revision:null},{url:"/noosphere/css/814.3929797f.css",revision:null},{url:"/noosphere/css/app.53a9e9c7.css",revision:null},{url:"/noosphere/css/chunk-vendors.c632c9ea.css",revision:null},{url:"/noosphere/index.html",revision:"dfe5185e6c261951659913c322dafb5b"},{url:"/noosphere/js/218.2e9fdcd6.js",revision:null},{url:"/noosphere/js/231.d4e7241d.js",revision:null},{url:"/noosphere/js/298.3020c13f.js",revision:null},{url:"/noosphere/js/814.48ca8689.js",revision:null},{url:"/noosphere/js/about.002a5bc0.js",revision:null},{url:"/noosphere/js/app.86095577.js",revision:null},{url:"/noosphere/js/chunk-vendors.ad0a8623.js",revision:null},{url:"/noosphere/js/config.12fbfd22.js",revision:null},{url:"/noosphere/js/share.c03f20c5.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
