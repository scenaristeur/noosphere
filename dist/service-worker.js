if(!self.define){let s,e={};const o=(o,r)=>(o=new URL(o+".js",r).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let i={};const u=s=>o(s,l),c={module:{uri:l},exports:i,require:u};e[l]=Promise.all(r.map((s=>c[s]||u(s)))).then((s=>(n(...s),i)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/158.1254c9de.css",revision:null},{url:"/noosphere/css/602.6d66ea7e.css",revision:null},{url:"/noosphere/css/709.6491f46a.css",revision:null},{url:"/noosphere/css/71.e5029ece.css",revision:null},{url:"/noosphere/css/823.a7c55fa9.css",revision:null},{url:"/noosphere/css/859.b0e37d69.css",revision:null},{url:"/noosphere/css/879.9d597432.css",revision:null},{url:"/noosphere/css/app.8e0cc2e1.css",revision:null},{url:"/noosphere/css/chunk-vendors.00ae179f.css",revision:null},{url:"/noosphere/css/editor.022f4d81.css",revision:null},{url:"/noosphere/css/fork.86837fcd.css",revision:null},{url:"/noosphere/css/graph.8599b81e.css",revision:null},{url:"/noosphere/css/profile.c452758b.css",revision:null},{url:"/noosphere/index.html",revision:"d4f46698e52d11a4de36adcb6c0c8d83"},{url:"/noosphere/js/157.2b740352.js",revision:null},{url:"/noosphere/js/158.3c6c5b5e.js",revision:null},{url:"/noosphere/js/368.856cddab.js",revision:null},{url:"/noosphere/js/37.bb800d11.js",revision:null},{url:"/noosphere/js/422.a3486110.js",revision:null},{url:"/noosphere/js/602.1b2d1bcb.js",revision:null},{url:"/noosphere/js/685.5fed1b0b.js",revision:null},{url:"/noosphere/js/709.d4bb6f13.js",revision:null},{url:"/noosphere/js/71.dae19cec.js",revision:null},{url:"/noosphere/js/823.58f36222.js",revision:null},{url:"/noosphere/js/833.64bcd077.js",revision:null},{url:"/noosphere/js/859.61f430d7.js",revision:null},{url:"/noosphere/js/879.c9f36fdd.js",revision:null},{url:"/noosphere/js/about.4bbbec5d.js",revision:null},{url:"/noosphere/js/app.60a51f04.js",revision:null},{url:"/noosphere/js/config.48c4cd10.js",revision:null},{url:"/noosphere/js/editor.fafd88b9.js",revision:null},{url:"/noosphere/js/fork.c43b8aea.js",revision:null},{url:"/noosphere/js/graph.2edd7971.js",revision:null},{url:"/noosphere/js/profile.cded200d.js",revision:null},{url:"/noosphere/js/share.1f72936b.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
