"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[823],{823:function(s,n,t){t.r(n),t.d(n,{default:function(){return d}});var e=function(){var s=this,n=s._self._c;return n("span",[s.pendingTasks.length>0?n("span",{attrs:{id:"spinner"}},[n("b-button",{attrs:{variant:"warning",disabled:""}},[n("b-spinner",{attrs:{small:"",type:"grow"}}),n("b-badge",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-tasks",modifiers:{"modal-tasks":!0}}],attrs:{variant:"primary"}},[s._v(s._s(s.pendingTasks.length))])],1)],1):s._e(),n("b-modal",{attrs:{id:"modal-tasks",title:"Tasks"}},[s._v(" "+s._s(s.pendingTasks.length)+" tasks pending "),n("b-button",{attrs:{variant:"outline-warning",size:"sm"},on:{click:s.reset}},[s._v("reset")]),n("ul",s._l(s.pendingTasks,(function(t){return n("li",{key:t.id},[s._v(" "+s._s(t.id))])})),0)],1)],1)},a=[],i={name:"SpinnerComp",methods:{reset(){this.$store.commit("util/resetSpinner")}},computed:{pendingTasks(){return this.$store.state.util.pendingTasks}}},r=i,l=t(1001),o=(0,l.Z)(r,e,a,!1,null,null,null),d=o.exports}}]);
//# sourceMappingURL=823.58f36222.js.map