"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[407],{9407:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-bar"},[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",fixed:"top"}},[e("b-navbar-brand",[e("AddressInput")],1),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{size:"sm"}},[t._v(">")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav"),e("b-navbar-nav",{staticClass:"ml-auto"},[e("MenuNew"),null!=t.user?e("b-nav-item-dropdown",{attrs:{id:"dropdown-right",right:"",text:"hystory",variant:"primary"}},[e("b-input-group",[e("b-input",{attrs:{placeholder:"search",size:"sm"},model:{value:t.historySearch,callback:function(e){t.historySearch=e},expression:"historySearch"}}),e("b-input-group-append",[e("b-button",{attrs:{size:"sm"},on:{click:function(e){t.historySearch=""}}},[t._v("X")])],1)],1),t._l(Object.values(t.user.rooms),(function(r,o){return e("div",{key:o},[r.roomId.toLowerCase().includes(t.historySearch.toLowerCase())?e("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.openRoom(r.roomId)}}},[t._v(" "+t._s(r.roomId)+" ")]):t._e()],1)}))],2):t._e(),null!=t.user?e("b-nav-item-dropdown",{attrs:{id:"dropdown-right",right:"",text:"uploads",variant:"primary"}},[e("b-dropdown-item",[t._v(" Config Web3 Storage ")]),e("b-dropdown-item",[e("b-link",{staticClass:"nav-item mx-2",attrs:{href:"https://web3.storage/account/",target:"_blank"}},[t._v("All my Web3 Storage pinned files")])],1),e("b-input-group",[e("b-input",{attrs:{placeholder:"search",size:"sm"},model:{value:t.uploadsSearch,callback:function(e){t.uploadsSearch=e},expression:"uploadsSearch"}}),e("b-input-group-append",[e("b-button",{attrs:{size:"sm"},on:{click:function(e){t.uploadsSearch=""}}},[t._v("X")])],1)],1),t._l(t.uploads,(function(r,o){return e("div",{key:o},[r.name.toLowerCase().includes(t.uploadsSearch.toLowerCase())?e("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.openRoomWeb3(r)}}},[t._v(" "+t._s(r.name)+" ")]):t._e()],1)}))],2):t._e(),e("b-nav-item",{attrs:{to:"/config"}},[e("b-icon",{attrs:{"font-scale":"1.5",icon:"gear","aria-hidden":"true"}}),t._v(" Config")],1),e("b-nav-item-dropdown",{attrs:{text:"More",right:""}},[e("b-dropdown-item",{attrs:{to:"/about"}},[t._v("What is Noosphere"),e("b-icon",{attrs:{"font-scale":"1.5",icon:"question","aria-hidden":"true"}})],1),e("b-dropdown-item",{attrs:{href:"https://matrix.to/#/#noosphere:matrix.org",target:"_blank"}},[e("b-icon",{attrs:{"font-scale":"1.5",icon:"chat","aria-hidden":"true"}}),t._v(" Chat about Noosphere ")],1),e("b-dropdown-item",{attrs:{href:"#"}},[e("i",[e("small",[t._v("version: navbar")])])])],1),e("router-link",{staticClass:"nav-item mx-2",attrs:{to:"/"}},[e("b-icon",{attrs:{"font-scale":"1.5",icon:"house-fill","aria-hidden":"true"}})],1),e("router-link",{staticClass:"nav-item mx-2",attrs:{to:"/editor"}},[e("b-icon",{attrs:{"font-scale":"1.5",icon:"pen","aria-hidden":"true"}})],1),e("router-link",{staticClass:"nav-item mx-2",attrs:{to:"/graph"}},[t._v("net")])],1)],1)],1),e("QrModal"),e("b-sidebar",{attrs:{id:"sidebar-right",title:"Sidebar",right:"",shadow:"",width:"100%"}},[e("TabsView")],1)],1)},a=[],s={name:"NavBar",components:{AddressInput:()=>r.e(914).then(r.bind(r,914)),MenuNew:()=>r.e(555).then(r.bind(r,9555)),QrModal:()=>Promise.all([r.e(558),r.e(765)]).then(r.bind(r,269)),TabsView:()=>r.e(510).then(r.bind(r,6510))},data(){return{historySearch:"",uploadsSearch:""}},methods:{openRoom(t){console.log(t);let e=this.user;e.roomId=t,this.$store.commit("core/setUser",e),this.$openRoom()},openRoomWeb3(t){let e=t.name.substring(t.name.indexOf("_")+1),r=this.user;r.roomId=e,this.$store.commit("core/setUser",r),this.$openRoom()}},computed:{user(){return this.$store.state.core.user},uploads(){return this.$store.state.core.uploads}}},n=s,i=r(1001),d=(0,i.Z)(n,o,a,!1,null,"45c0bdf8",null),l=d.exports}}]);
//# sourceMappingURL=407.988178b7.js.map