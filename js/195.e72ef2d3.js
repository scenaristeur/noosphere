"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[195],{7195:function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});var r=function(){var e=this,t=e._self._c;return t("b-input-group",[t("b-input",{attrs:{placeholder:"room address",size:"sm"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.openRoom.apply(null,arguments)}},model:{value:e.ra,callback:function(t){e.ra=t},expression:"ra"}}),t("b-input-group-append",[t("b-button",{attrs:{size:"sm"},on:{click:function(t){e.ra=""}}},[e._v("X")])],1),e.showFav?t("b-input-group-append",{staticClass:"mt-1 ml-1"},[1==e.isFavorite?t("b-icon",{attrs:{icon:"star-fill",variant:"warning"},on:{click:e.toogleFav}}):t("b-icon",{attrs:{icon:"star",variant:"warning"},on:{click:e.toogleFav}})],1):e._e()],1)},s=[],n={name:"AddressInput",data(){return{ra:"",isFavorite:!1,showFav:!0}},methods:{toogleFav(){this.isFavorite=!this.isFavorite},openRoom(){let e=this.user;e.roomId=this.ra,this.$store.commit("core/setUser",e),this.$openRoom()}},watch:{roomAddress(){this.ra=this.roomAddress}},computed:{roomAdress(){return this.$store.state.core.roomAddress},user(){return this.$store.state.core.user}}},a=n,i=o(1001),u=(0,i.Z)(a,r,s,!1,null,"f005eac6",null),c=u.exports}}]);
//# sourceMappingURL=195.e72ef2d3.js.map