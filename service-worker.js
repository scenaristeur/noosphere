if(!self.define){let s,e={};const o=(o,r)=>(o=new URL(o+".js",r).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let i={};const u=s=>o(s,l),c={module:{uri:l},exports:i,require:u};e[l]=Promise.all(r.map((s=>c[s]||u(s)))).then((s=>(n(...s),i)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/158.1254c9de.css",revision:null},{url:"/noosphere/css/174.b7add89d.css",revision:null},{url:"/noosphere/css/210.01ffc4b8.css",revision:null},{url:"/noosphere/css/318.2f0f6b35.css",revision:null},{url:"/noosphere/css/807.8a8cfadf.css",revision:null},{url:"/noosphere/css/833.b7473bea.css",revision:null},{url:"/noosphere/css/875.ba4d0e84.css",revision:null},{url:"/noosphere/css/880.27317c67.css",revision:null},{url:"/noosphere/css/943.e97ddb8d.css",revision:null},{url:"/noosphere/css/app.8e0cc2e1.css",revision:null},{url:"/noosphere/css/chunk-vendors.00ae179f.css",revision:null},{url:"/noosphere/css/debug.1773ad75.css",revision:null},{url:"/noosphere/css/editor.022f4d81.css",revision:null},{url:"/noosphere/css/fork.86837fcd.css",revision:null},{url:"/noosphere/css/graph.c6aa20eb.css",revision:null},{url:"/noosphere/css/profile.bbabbca3.css",revision:null},{url:"/noosphere/index.html",revision:"8909f1c1a7320d031af8c4ea174c7fce"},{url:"/noosphere/js/148.f64fdeca.js",revision:null},{url:"/noosphere/js/158.3c6c5b5e.js",revision:null},{url:"/noosphere/js/174.aac37043.js",revision:null},{url:"/noosphere/js/210.0c8e5ddf.js",revision:null},{url:"/noosphere/js/279.e573d805.js",revision:null},{url:"/noosphere/js/318.65cf6061.js",revision:null},{url:"/noosphere/js/368.856cddab.js",revision:null},{url:"/noosphere/js/485.da666a10.js",revision:null},{url:"/noosphere/js/55.db6d730a.js",revision:null},{url:"/noosphere/js/807.9d7fe580.js",revision:null},{url:"/noosphere/js/833.dca34f6a.js",revision:null},{url:"/noosphere/js/875.0cc10312.js",revision:null},{url:"/noosphere/js/880.2c5ae585.js",revision:null},{url:"/noosphere/js/943.cdfa0012.js",revision:null},{url:"/noosphere/js/about.6e5f99ea.js",revision:null},{url:"/noosphere/js/app.44f9ecb8.js",revision:null},{url:"/noosphere/js/debug.60a78aa8.js",revision:null},{url:"/noosphere/js/editor.3e6d1240.js",revision:null},{url:"/noosphere/js/fork.c43b8aea.js",revision:null},{url:"/noosphere/js/graph.34d485e9.js",revision:null},{url:"/noosphere/js/profile.4cf6d8ae.js",revision:null},{url:"/noosphere/js/share.081c65c2.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
