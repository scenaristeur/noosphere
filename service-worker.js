if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let i={};const u=e=>o(e,l),c={module:{uri:l},exports:i,require:u};s[l]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(n(...e),i)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/331.bd6376df.css",revision:null},{url:"/noosphere/css/398.f9c1a55a.css",revision:null},{url:"/noosphere/css/41.c58dda49.css",revision:null},{url:"/noosphere/css/997.3669f274.css",revision:null},{url:"/noosphere/css/app.8e0cc2e1.css",revision:null},{url:"/noosphere/css/chunk-vendors.00ae179f.css",revision:null},{url:"/noosphere/css/editor.66eda30c.css",revision:null},{url:"/noosphere/css/roomView.6645875d.css",revision:null},{url:"/noosphere/css/user.b446147c.css",revision:null},{url:"/noosphere/index.html",revision:"10687f2bc05bce4cec9eedcd317d481f"},{url:"/noosphere/js/331.d8a25e8e.js",revision:null},{url:"/noosphere/js/398.e85da197.js",revision:null},{url:"/noosphere/js/41.83e5bfe7.js",revision:null},{url:"/noosphere/js/997.128ff749.js",revision:null},{url:"/noosphere/js/about.4bbbec5d.js",revision:null},{url:"/noosphere/js/app.22236659.js",revision:null},{url:"/noosphere/js/chunk-vendors.eb949c56.js",revision:null},{url:"/noosphere/js/config.8da4b0cb.js",revision:null},{url:"/noosphere/js/editor.6ae7e5fc.js",revision:null},{url:"/noosphere/js/roomView.484de862.js",revision:null},{url:"/noosphere/js/share.04d7a6bc.js",revision:null},{url:"/noosphere/js/user.63396401.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
