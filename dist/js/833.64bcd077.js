"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[833],{2833:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"modal-pin",title:"Pin Data on Web3.storage",size:"lg"},on:{shown:e.populate}},[t("b-row",{staticClass:"my-1"},[t("b-col",{attrs:{sm:"2"}},[t("label",{attrs:{for:"input-small"}},[e._v("Filename:")])]),t("b-col",{attrs:{sm:"10"}},[t("b-input",{attrs:{size:"sm",placeholder:"filename"},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}})],1)],1),e._v(" Content: "),t("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),t("b-button",{on:{click:e.pin}},[e._v("Pin it")]),t("br"),t("ul",e._l(e.messages,(function(s,a){return t("li",{key:a},[e._v(e._s(s))])})),0),t("br"),null!=e.cid?t("span",[e._v(" saved on ipfs with cid "),t("a",{attrs:{href:"https://"+e.cid+".ipfs.w3s.link/",target:"_blank"}},[e._v(e._s(e.cid))])]):e._e()],1)},i=[],l={name:"Web3Modal",data(){return{data:null,fileName:"",cid:null}},methods:{populate(){console.log("populate"),this.$store.commit("web3/resetPinMessages");let e=this.$store.state.editor.editorData;delete e.clientID,e.roomId=this.user.roomId;let t="_";this.fileName=this.user.roomId+t+Date.now(),this.data=JSON.stringify(e,null,2),this.cid=null},async pin(){this.cid=await this.$web3Pin({data:this.data,fileName:this.fileName})}},computed:{user(){return this.$store.state.actor.user},messages(){return this.$store.state.web3.pinMessages}}},n=l,o=s(1001),r=(0,o.Z)(n,a,i,!1,null,null,null),u=r.exports}}]);
//# sourceMappingURL=833.64bcd077.js.map