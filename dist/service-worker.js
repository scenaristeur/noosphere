if(!self.define){let s,e={};const o=(o,r)=>(o=new URL(o+".js",r).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let i={};const u=s=>o(s,l),c={module:{uri:l},exports:i,require:u};e[l]=Promise.all(r.map((s=>c[s]||u(s)))).then((s=>(n(...s),i)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/109.01ffc4b8.css",revision:null},{url:"/noosphere/css/22.321e45fc.css",revision:null},{url:"/noosphere/css/243.b1ab52b4.css",revision:null},{url:"/noosphere/css/255.e99fb5d2.css",revision:null},{url:"/noosphere/css/324.4c34d2bf.css",revision:null},{url:"/noosphere/css/459.15ee665b.css",revision:null},{url:"/noosphere/css/59.364729e1.css",revision:null},{url:"/noosphere/css/714.136205dd.css",revision:null},{url:"/noosphere/css/739.e774facb.css",revision:null},{url:"/noosphere/css/996.e1fab58f.css",revision:null},{url:"/noosphere/css/app.8e0cc2e1.css",revision:null},{url:"/noosphere/css/chunk-vendors.c2552251.css",revision:null},{url:"/noosphere/css/debug.1773ad75.css",revision:null},{url:"/noosphere/css/editor.a48cad12.css",revision:null},{url:"/noosphere/css/fork.86837fcd.css",revision:null},{url:"/noosphere/css/graph.e6bdf72f.css",revision:null},{url:"/noosphere/css/profile.a28904ab.css",revision:null},{url:"/noosphere/index.html",revision:"2682dac34d0d289b561d415d09c2b81d"},{url:"/noosphere/js/109.8c083c8f.js",revision:null},{url:"/noosphere/js/22.ee80f874.js",revision:null},{url:"/noosphere/js/243.dcf59246.js",revision:null},{url:"/noosphere/js/255.32bf120f.js",revision:null},{url:"/noosphere/js/324.affcff22.js",revision:null},{url:"/noosphere/js/334.b207be8b.js",revision:null},{url:"/noosphere/js/394.1232424d.js",revision:null},{url:"/noosphere/js/459.54d49824.js",revision:null},{url:"/noosphere/js/59.a07ff38d.js",revision:null},{url:"/noosphere/js/599.3264d496.js",revision:null},{url:"/noosphere/js/701.c282123f.js",revision:null},{url:"/noosphere/js/714.2481469e.js",revision:null},{url:"/noosphere/js/739.9fc05381.js",revision:null},{url:"/noosphere/js/747.a12f836f.js",revision:null},{url:"/noosphere/js/996.f0e0490d.js",revision:null},{url:"/noosphere/js/about.8789563b.js",revision:null},{url:"/noosphere/js/app.26c5f8c0.js",revision:null},{url:"/noosphere/js/debug.0d650740.js",revision:null},{url:"/noosphere/js/editor.8959e147.js",revision:null},{url:"/noosphere/js/fork.6ab1d435.js",revision:null},{url:"/noosphere/js/graph.de49b17a.js",revision:null},{url:"/noosphere/js/profile.b0826a08.js",revision:null},{url:"/noosphere/js/share.297d69c6.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
