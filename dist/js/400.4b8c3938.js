"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[400],{7400:function(e,s,t){t.r(s),t.d(s,{default:function(){return u}});var r=function(){var e=this,s=e._self._c;return s("b-container",{staticClass:"users-view",attrs:{fluid:""}},[null!=e.user?s("b-table",{staticClass:"table",attrs:{small:"",hover:"",selectable:"","sticky-header":"","max-height":"800px","select-mode":"single",responsive:"sm","table-variant":"info",items:Object.values(e.users),fields:e.fields,"caption-top":""},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(name)",fn:function(t){return[t.item.clientID==e.user.clientID?[s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-me",modifiers:{"modal-me":!0}}],attrs:{size:"sm",variant:"outline-primary"}},[s("span",{style:"color:"+t.item.color},[s("b",[e._v(e._s(t.item.name))])])])]:[s("small",{style:"color:"+t.item.color},[s("i",[s("b",[e._v(e._s(t.item.name))])])])]]}},{key:"cell(rooms)",fn:function(t){return[s("b-button",{attrs:{size:"sm"},on:{click:function(s){return e.openUserModal(t.item)}}},[e._v(e._s(Object.keys(t.item.rooms).length))])]}},{key:"table-caption",fn:function(){return[e._v(e._s(Object.values(e.users).length)+" users")]},proxy:!0}],null,!1,457144895)}):e._e(),s("b-modal",{attrs:{id:"modal-me",title:"Change your username and color"},on:{ok:e.userChanged}},[null!=e.user?s("p",{staticClass:"my-4"},[e._v(" username"),s("b-input",{attrs:{placeholder:"username"},model:{value:e.user.name,callback:function(s){e.$set(e.user,"name",s)},expression:"user.name"}}),e._v(" color "),s("b-input",{attrs:{type:"color"},model:{value:e.user.color,callback:function(s){e.$set(e.user,"color",s)},expression:"user.color"}}),s("b-button",{attrs:{variant:"outline-info",size:"sm"},on:{click:e.randomUser}},[e._v("Random user")])],1):e._e()]),s("b-modal",{attrs:{id:"modal-currentUser","ok-only":"",size:"lg"},scopedSlots:e._u([{key:"modal-title",fn:function(){return[e._v(" User "),s("b",[e._v(e._s(e.currentUser.name))])]},proxy:!0}])},[void 0!=e.currentUser.rooms?s("ul",e._l(Object.values(e.currentUser.rooms),(function(t){return s("li",{key:t.roomId},[s("b-button",{attrs:{size:"sm"},on:{click:function(s){return e.changeRoom(t.roomId)}}},[e._v(e._s(t.roomId))])],1)})),0):e._e()])],1)},o=[],n={name:"UsersView",data(){return{fields:[{key:"name",sortable:!0},{key:"roomId",label:"room",sortable:!0},{key:"rooms",label:"rooms",sortable:!0}],currentUser:{}}},methods:{onRowSelected(e){void 0!=e[0]&&(this.user.roomId=e[0].roomId,this.$openRoom(),this.$emit("hide"))},userChanged(){this.$store.commit("core/setUser",this.user),this.$userChanged()},async randomUser(){this.currentUser=await this.$randomUser(),console.log(this.currentUser),this.$store.commit("core/setUser",this.currentUser)},openUserModal(e){console.log(e),this.currentUser=e,this.$bvModal.show("modal-currentUser")},changeRoom(e){console.log(e),this.user.roomId=e,this.$openRoom(),this.$emit("hide"),this.$bvModal.hide("modal-currentUser")}},watch:{usersUpdateDate(){console.log(this.usersUpdateDate),this.$forceUpdate()}},computed:{users:{cache:!1,get(){return this.$store.state.core.users}},user(){return this.$store.state.core.user},usersUpdateDate(){return this.$store.state.core.usersUpdateDate}}},a=n,l=t(1001),i=(0,l.Z)(a,r,o,!1,null,"9f1ade38",null),u=i.exports}}]);
//# sourceMappingURL=400.4b8c3938.js.map