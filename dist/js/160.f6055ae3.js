"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[160],{1160:function(e,s,o){o.r(s),o.d(s,{default:function(){return d}});var t=function(){var e=this,s=e._self._c;return s("b-input-group",[s("b-input",{attrs:{placeholder:"room address",size:"sm",type:"search"},on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.openRoom.apply(null,arguments)}},model:{value:e.ra,callback:function(s){e.ra=s},expression:"ra"}})],1)},r=[],n={name:"AddressInput",props:["options"],data(){return{ra:"",isFavorite:!1,showFav:!1}},methods:{toogleFav(){this.isFavorite=!this.isFavorite},openRoom(){let e=this.user,s=this.options;void 0!=this.options&&"fork"==this.options.mode&&(s.parent=this.user.roomId,s.user=e.name),e.roomId=this.ra.trim(),this.$store.commit("actor/setUser",e),this.$connect("adressinput")}},watch:{roomAddress(){console.log(this.roomAddress),this.ra=this.roomAddress}},computed:{roomAddress(){return this.$store.state.actor.roomAddress},user(){return this.$store.state.actor.user}}},i=n,a=o(1001),u=(0,a.Z)(i,t,r,!1,null,"08779634",null),d=u.exports}}]);
//# sourceMappingURL=160.f6055ae3.js.map