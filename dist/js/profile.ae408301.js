"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[845],{63286:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("b-container",{staticClass:"user-profile text-light"},[t("b-card-group",{attrs:{columns:""}},[t("b-card",{staticClass:"text-center mb-2",staticStyle:{"max-width":"20rem"},attrs:{"bg-variant":"info","text-variant":"white",header:"Profile",tag:"article"}},[t("b-card-title",[e._v(" username"),t("b-input",{attrs:{placeholder:"username"},model:{value:e.localUser.name,callback:function(t){e.$set(e.localUser,"name",t)},expression:"localUser.name"}})],1),t("b-card-text",[e._v(" prefered color "),t("b-input",{attrs:{type:"color"},model:{value:e.localUser.color,callback:function(t){e.$set(e.localUser,"color",t)},expression:"localUser.color"}})],1),t("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Save")])],1),t("b-card",{staticClass:"text-center mb-2",staticStyle:{"max-width":"20rem"},attrs:{"bg-variant":"info","text-variant":"white",header:"IDentity Manager",tag:"article"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("b-alert",{attrs:{show:"",variant:"warning"}},[t("h4",{staticClass:"alert-heading"},[e._v("CAN NOT BE UNDONE !")]),t("p",[e._v(" You will loose your history ! ")]),t("hr"),t("p",{staticClass:"mb-0"},[e._v(" Be sur to download the actual identity before ! ")])]),t("b-form-file",{attrs:{state:Boolean(e.identityFile),placeholder:"Choose a identity file or drop it here...","drop-placeholder":"Drop identity file here..."},model:{value:e.identityFile,callback:function(t){e.identityFile=t},expression:"identityFile"}}),t("b-button",{attrs:{size:"sm",variant:"outline-warning text-dark"},on:{click:e.randomUser}},[t("b-icon",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-share",modifiers:{"modal-share":!0}}],attrs:{"font-scale":"1.5",icon:"dice3","aria-hidden":"true"}}),e._v("random user")],1),t("b-button",{attrs:{variant:"danger text-dark",size:"sm"},on:{click:e.removeUser}},[t("b-icon",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-share",modifiers:{"modal-share":!0}}],attrs:{"font-scale":"1.5",icon:"trash","aria-hidden":"true"}}),e._v("remove from this device")],1)]},proxy:!0}])},[t("b-card-text",[t("b-button",{attrs:{variant:"success text-dark"},on:{click:e.download}},[t("b-icon",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-share",modifiers:{"modal-share":!0}}],attrs:{"font-scale":"1.5",icon:"download","aria-hidden":"true"}}),e._v("download this identity")],1)],1)],1)],1)],1)},o=[],i=(a(57658),{name:"UserProfile",data(){return{identityFile:null}},methods:{async randomUser(){let e=await this.$randomUser();console.log(e)},save(){this.$userChanged({color:this.localUser.color,name:this.localUser.name}),this.$router.push("/")},removeUser(){this.$removeUser(),this.randomUser()},async upload(e,t){const a=new FileReader;await a.addEventListener("load",(()=>{t(a.result)})),a.readAsText(e,"UTF-8")},populateIDentity(e){console.log("populate",e);let t=JSON.parse(e);this.$userChanged(t)},download(){console.log(this.localUser);var e=JSON.stringify(this.localUser,null,2);let t=this.localUser.name;var a=prompt("Choose a name for the exported file :",t);if(null==a||""==a)return;let r="application/json",o=a+".json";var i=new Blob([e],{type:r}),n=document.createElement("a");n.download=o,n.innerHTML="Download File",-1!=navigator.userAgent.indexOf("Chrome")?n.href=window.URL.createObjectURL(i):(n.href=window.URL.createObjectURL(i),n.target="_blank",n.style.display="none",document.body.appendChild(n));var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(l),setTimeout((function(){document.body.removeChild(n),window.URL.revokeObjectURL(n)}),1e3)}},watch:{identityFile(){console.log(this.identityFile),this.upload(this.identityFile,this.populateIDentity)}},computed:{localUser(){return this.$store.state.noosphere.localUser}}}),n=i,l=a(1001),s=(0,l.Z)(n,r,o,!1,null,"d4f58482",null),d=s.exports}}]);
//# sourceMappingURL=profile.ae408301.js.map