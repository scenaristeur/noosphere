"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[215],{3215:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav-bar"},[t("div",[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[t("b-navbar-brand",[t("AddressInput")],1),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{size:"sm"}},[e._v("noosphere")])],1),t("b-navbar-nav",{staticClass:"ml-auto"},[t("MenuNew"),null!=e.user?t("b-nav-item-dropdown",{attrs:{id:"dropdown-right",right:"",text:"hystory",variant:"primary"}},[t("b-input-group",[t("b-input",{attrs:{placeholder:"search",size:"sm"},model:{value:e.historySearch,callback:function(t){e.historySearch=t},expression:"historySearch"}}),t("b-input-group-append",[t("b-button",{attrs:{size:"sm"},on:{click:function(t){e.historySearch=""}}},[e._v("X")])],1)],1),e._l(Object.values(e.user.rooms),(function(r,o){return t("div",{key:o},[r.roomId.toLowerCase().includes(e.historySearch.toLowerCase())?t("b-dropdown-item",{attrs:{href:"#"},on:{click:function(t){return e.openRoom(r.roomId)}}},[e._v(" "+e._s(r.roomId)+" ")]):e._e()],1)}))],2):e._e(),null!=e.user?t("b-nav-item-dropdown",{attrs:{id:"dropdown-right",right:"",text:"uploads",variant:"primary"}},[t("b-dropdown-item",[e._v(" Config Web3 Storage ")]),t("b-dropdown-item",[t("b-link",{staticClass:"nav-item mx-2",attrs:{href:"https://web3.storage/account/",target:"_blank"}},[e._v("All my Web3 Storage pinned files")])],1),t("b-input-group",[t("b-input",{attrs:{placeholder:"search",size:"sm"},model:{value:e.uploadsSearch,callback:function(t){e.uploadsSearch=t},expression:"uploadsSearch"}}),t("b-input-group-append",[t("b-button",{attrs:{size:"sm"},on:{click:function(t){e.uploadsSearch=""}}},[e._v("X")])],1)],1),e._l(e.uploads,(function(r,o){return t("div",{key:o},[r.name.toLowerCase().includes(e.uploadsSearch.toLowerCase())?t("b-dropdown-item",{attrs:{href:"#"},on:{click:function(t){return e.openRoomWeb3(r)}}},[e._v(" "+e._s(r.name)+" ")]):e._e()],1)}))],2):e._e()],1)],1)],1),t("QrModal"),t("b-sidebar",{attrs:{id:"sidebar-right",title:"Sidebar",right:"",shadow:"",width:"100%"}},[t("div",{staticClass:"px-3 py-2"},[t("p",[e._v(" Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ")]),t("GraphView"),t("b-img",{attrs:{src:"https://picsum.photos/500/500/?image=54",fluid:"",thumbnail:""}})],1)])],1)])},s=[],a={name:"NavBar",components:{AddressInput:()=>r.e(195).then(r.bind(r,7195)),MenuNew:()=>r.e(555).then(r.bind(r,9555)),QrModal:()=>Promise.all([r.e(558),r.e(765)]).then(r.bind(r,5765)),GraphView:()=>r.e(786).then(r.bind(r,1550))},data(){return{historySearch:"",uploadsSearch:""}},methods:{openRoom(e){console.log(e);let t=this.user;t.roomId=e,this.$store.commit("core/setUser",t),this.$openRoom()},openRoomWeb3(e){let t=e.name.substring(e.name.indexOf("_")+1),r=this.user;r.roomId=t,this.$store.commit("core/setUser",r),this.$openRoom()}},computed:{user(){return this.$store.state.core.user},uploads(){return this.$store.state.core.uploads}}},n=a,i=r(1001),u=(0,i.Z)(n,o,s,!1,null,"fadee28e",null),d=u.exports}}]);
//# sourceMappingURL=215.2e6dc08b.js.map