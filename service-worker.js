if(!self.define){let s,e={};const o=(o,r)=>(o=new URL(o+".js",r).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let i={};const u=s=>o(s,l),c={module:{uri:l},exports:i,require:u};e[l]=Promise.all(r.map((s=>c[s]||u(s)))).then((s=>(n(...s),i)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"noosphere"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/noosphere/404.html",revision:"0df7a782bb3bee0c016b3053edd8be49"},{url:"/noosphere/css/158.1254c9de.css",revision:null},{url:"/noosphere/css/160.ab73700e.css",revision:null},{url:"/noosphere/css/210.01ffc4b8.css",revision:null},{url:"/noosphere/css/317.4db957b5.css",revision:null},{url:"/noosphere/css/654.690d9eb3.css",revision:null},{url:"/noosphere/css/771.3984e724.css",revision:null},{url:"/noosphere/css/89.c5f82247.css",revision:null},{url:"/noosphere/css/app.8e0cc2e1.css",revision:null},{url:"/noosphere/css/chunk-vendors.00ae179f.css",revision:null},{url:"/noosphere/css/editor.022f4d81.css",revision:null},{url:"/noosphere/css/fork.86837fcd.css",revision:null},{url:"/noosphere/css/graph.2f64b869.css",revision:null},{url:"/noosphere/css/profile.ba7b196c.css",revision:null},{url:"/noosphere/index.html",revision:"5db0efc899fd95027949d3074809f29f"},{url:"/noosphere/js/148.f64fdeca.js",revision:null},{url:"/noosphere/js/158.3c6c5b5e.js",revision:null},{url:"/noosphere/js/160.f6055ae3.js",revision:null},{url:"/noosphere/js/210.0c8e5ddf.js",revision:null},{url:"/noosphere/js/317.1307068a.js",revision:null},{url:"/noosphere/js/368.856cddab.js",revision:null},{url:"/noosphere/js/37.bb800d11.js",revision:null},{url:"/noosphere/js/485.59738e3a.js",revision:null},{url:"/noosphere/js/55.db6d730a.js",revision:null},{url:"/noosphere/js/654.7ba681ba.js",revision:null},{url:"/noosphere/js/771.3d9bf374.js",revision:null},{url:"/noosphere/js/87.45312b70.js",revision:null},{url:"/noosphere/js/89.c893666d.js",revision:null},{url:"/noosphere/js/about.6e5f99ea.js",revision:null},{url:"/noosphere/js/app.7a664c42.js",revision:null},{url:"/noosphere/js/editor.374bc1a2.js",revision:null},{url:"/noosphere/js/fork.c43b8aea.js",revision:null},{url:"/noosphere/js/graph.a6cf0003.js",revision:null},{url:"/noosphere/js/profile.b2579805.js",revision:null},{url:"/noosphere/js/share.081c65c2.js",revision:null},{url:"/noosphere/manifest.json",revision:"a6903daa29c512541a2af94c0826022d"},{url:"/noosphere/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
