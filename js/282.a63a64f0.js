"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[282],{5282:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=function(){var e=this,t=e._self._c;return null!=e.user?t("b-container",{staticClass:"room-history",attrs:{fluid:""}},[t("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[t("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[t("b-input-group",{attrs:{size:"sm"}},[t("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Find in uploads"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),t("b-input-group-append",[t("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Clear")])],1)],1)],1)],1),t("b-table",{staticClass:"table",attrs:{small:"",selectable:"","sticky-header":"","select-mode":"single",responsive:"sm",hover:"","caption-top":"","table-variant":"info",filter:e.filter,"sort-by.sync":"date",fields:e.fields,items:Object.values(e.uploads)},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(date)",fn:function(t){return[e._v(" "+e._s(new Date(t.item.date).toLocaleString())+" ")]}},{key:"cell(delete)",fn:function(a){return[t("div",{staticStyle:{float:"right"}},[t("b-button",{attrs:{size:"sm",variant:"outline-info"},on:{click:function(t){return e.trash(a.item.roomId)}}},[t("b-icon",{attrs:{icon:"trash",variant:"danger","aria-hidden":"true"}})],1)],1)]}},{key:"table-caption",fn:function(){return[e._v("Web3 uploads "),void 0==e.uploads||0==e.uploads.length?t("div",[e._v(" see "),t("router-link",{staticClass:"nav-item mx-2",attrs:{to:"/config"}},[t("b-icon",{attrs:{"font-scale":"1.5",icon:"gear","aria-hidden":"true"}}),e._v("Web3 Storage Config ")],1)],1):t("div",[t("b-link",{staticClass:"nav-item mx-2",attrs:{href:"https://web3.storage/account/",target:"_blank"}},[e._v("All my Web3 Storage pinned files")]),t("b-input",{attrs:{size:"sm",placeholder:"cid to open"},on:{change:e.openCid,enter:e.openCid},model:{value:e.cidToOpen,callback:function(t){e.cidToOpen=t},expression:"cidToOpen"}})],1)]},proxy:!0}],null,!1,874447618)})],1):e._e()},s=[],n={name:"Web3Uploads",data(){return{filter:null,fields:[{key:"name",label:"room",sortable:!0},{key:"updated",label:"date",sortable:!0}],cidToOpen:null}},methods:{onRowSelected(e){this.$web3Load(e[0].cid),this.$emit("hide")},openCid(){this.$web3Load(this.cidToOpen)}},computed:{user(){return this.$store.state.core.user},uploads(){return this.$store.state.core.uploads},web3Token(){return this.$store.state.core.web3Token}}},i=n,o=a(1001),r=(0,o.Z)(i,l,s,!1,null,"0b10588d",null),c=r.exports}}]);
//# sourceMappingURL=282.a63a64f0.js.map