if(!self.define){let s,e={};const o=(o,r)=>(o=new URL(o+".js",r).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let i={};const u=s=>o(s,l),c={module:{uri:l},exports:i,require:u};e[l]=Promise.all(r.map((s=>c[s]||u(s)))).then((s=>(n(...s),i)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/135.0474313a.css",revision:null},{url:"/noosphere/css/282.331e29ae.css",revision:null},{url:"/noosphere/css/377.fed19803.css",revision:null},{url:"/noosphere/css/400.0770ab75.css",revision:null},{url:"/noosphere/css/444.41be91af.css",revision:null},{url:"/noosphere/css/71.e5029ece.css",revision:null},{url:"/noosphere/css/857.f5ef5e82.css",revision:null},{url:"/noosphere/css/903.4d1e74b4.css",revision:null},{url:"/noosphere/css/904.51a68eb6.css",revision:null},{url:"/noosphere/css/982.104d2d4d.css",revision:null},{url:"/noosphere/css/app.8e0cc2e1.css",revision:null},{url:"/noosphere/css/chunk-vendors.00ae179f.css",revision:null},{url:"/noosphere/css/editor.761ec7f2.css",revision:null},{url:"/noosphere/css/graph.6aa2d1d7.css",revision:null},{url:"/noosphere/css/profile.45602e39.css",revision:null},{url:"/noosphere/index.html",revision:"d80ae1e5776e95369b5b40647fd09a26"},{url:"/noosphere/js/135.3548c2cb.js",revision:null},{url:"/noosphere/js/282.a63a64f0.js",revision:null},{url:"/noosphere/js/37.bb800d11.js",revision:null},{url:"/noosphere/js/377.f102150e.js",revision:null},{url:"/noosphere/js/400.4b8c3938.js",revision:null},{url:"/noosphere/js/444.f2327cd7.js",revision:null},{url:"/noosphere/js/555.8b278239.js",revision:null},{url:"/noosphere/js/558.66333a78.js",revision:null},{url:"/noosphere/js/71.9c75f6b9.js",revision:null},{url:"/noosphere/js/765.2b4610fc.js",revision:null},{url:"/noosphere/js/857.cfd26d78.js",revision:null},{url:"/noosphere/js/903.28289c43.js",revision:null},{url:"/noosphere/js/904.1e0d6f2d.js",revision:null},{url:"/noosphere/js/982.5e38cc1b.js",revision:null},{url:"/noosphere/js/about.4bbbec5d.js",revision:null},{url:"/noosphere/js/app.ee3cd402.js",revision:null},{url:"/noosphere/js/config.ad95e553.js",revision:null},{url:"/noosphere/js/editor.4b63908c.js",revision:null},{url:"/noosphere/js/graph.53b8ea6a.js",revision:null},{url:"/noosphere/js/profile.769c89b5.js",revision:null},{url:"/noosphere/js/share.04d7a6bc.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
