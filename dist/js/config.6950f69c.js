"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[497],{5002:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an config page")]),e("div",[t._v(" "+t._s(t.services))]),e("div",{staticClass:"accordion",attrs:{role:"tablist"}},[e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-web3",modifiers:{"accordion-web3":!0}}],attrs:{block:"",variant:"info"}},[t._v(" Web3Storage ")])],1),e("b-collapse",{attrs:{id:"accordion-web3",visible:"",accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[t._v(" see "),e("a",{attrs:{href:"https://web3.storage/docs/",target:"_blank"}},[t._v(" https://web3.storage/docs/")]),t._v(" (1GB free)"),e("br"),e("a",{attrs:{href:"https://web3.storage/tokens/",target:"_blank"}},[t._v("my web3.storage tokens")]),e("b-row",{staticClass:"my-1"},[e("b-col",{attrs:{sm:"2"}},[e("label",{attrs:{for:"input-small"}},[t._v("Token:")])]),e("b-col",{attrs:{sm:"10"}},[e("b-input",{attrs:{id:"input-small",size:"sm",placeholder:"web3.storage token",type:"password"},on:{input:t.tokenChanged},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1)],1)],1)],1)],1),e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-solid",modifiers:{"accordion-solid":!0}}],attrs:{block:"",variant:"info"}},[t._v(" Solid ")])],1),e("b-collapse",{attrs:{id:"accordion-solid",accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[t._v(" Where are is the persistannt list of all rooms "),e("b-row",{staticClass:"my-1"},[e("b-col",{attrs:{sm:"2"}},[e("label",{attrs:{for:"input-pod"}},[t._v("Pod url:")])]),e("b-col",{attrs:{sm:"10"}},[e("b-input",{attrs:{id:"input-pod",size:"sm",placeholder:"pod url"},on:{input:t.pod_urlChanged},model:{value:t.pod_url,callback:function(e){t.pod_url=e},expression:"pod_url"}})],1),e("a",{attrs:{href:t.pod_url,target:"_blank"}},[t._v("open")])],1)],1)],1)],1)],1)],1)])},a=[],r={name:"ConfigView",data(){return{text:"Todo, Work in progress",token:null}},async created(){this.token=this.$store.state.web3.token,this.$solidRoomList(),this.$solidCreateRoom("Room_"+Date.now())},methods:{async tokenChanged(){localStorage.setItem("noosphere-web3storage-token",this.token),await this.$web3list(this.token)},async pod_urlChanged(){console.log("pod_urlChanged",this.pod_url),this.$solidRoomList()}},watch:{web3Token(){this.token=this.web3Token}},computed:{pod_url:{get(){return this.$store.state.util.pod_url},set(t){this.$store.commit("util/setPodUrl",t)}},web3Token(){return this.$store.state.web3.token},uploads(){return this.$store.state.web3.uploads}}},n=r,i=o(1001),l=(0,i.Z)(n,s,a,!1,null,null,null),d=l.exports}}]);
//# sourceMappingURL=config.6950f69c.js.map