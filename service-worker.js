if(!self.define){let e,s={};const o=(o,r)=>(o=new URL(o+".js",r).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let i={};const u=e=>o(e,l),c={module:{uri:l},exports:i,require:u};s[l]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(n(...e),i)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/333.d9ba6c09.css",revision:null},{url:"/noosphere/css/494.3fad47de.css",revision:null},{url:"/noosphere/css/997.3669f274.css",revision:null},{url:"/noosphere/css/app.53a9e9c7.css",revision:null},{url:"/noosphere/css/chunk-vendors.c632c9ea.css",revision:null},{url:"/noosphere/index.html",revision:"b3577a3349d7dfd09a493377021bffbe"},{url:"/noosphere/js/333.fb273d3d.js",revision:null},{url:"/noosphere/js/494.286192d4.js",revision:null},{url:"/noosphere/js/997.128ff749.js",revision:null},{url:"/noosphere/js/about.9eacb122.js",revision:null},{url:"/noosphere/js/app.b01a9141.js",revision:null},{url:"/noosphere/js/chunk-vendors.ad0a8623.js",revision:null},{url:"/noosphere/js/config.8da4b0cb.js",revision:null},{url:"/noosphere/js/share.c03f20c5.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
