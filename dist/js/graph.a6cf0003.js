"use strict";(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[786],{6153:function(e,s,t){t.r(s),t.d(s,{default:function(){return h}});var r=function(){var e=this,s=e._self._c;return s("div",{ref:"graph",attrs:{id:"graph"}},[e._v("Loading graph...")])},o=[],i={name:"GraphView",data(){return{nodes:[],links:[]}},mounted(){this.$graphInit({domElement:this.$refs.graph}),this.updateUsers()},methods:{update(){if(void 0!=this.graph){let e=this.nodes.map((e=>({...e}))),s=this.links.map((e=>({...e})));this.graph.graphData({nodes:e,links:s}),console.log(this.graph.graphData())}},updateUsers(){for(const[r,o]of Object.entries(this.users)){console.log("[user]",r,o),o.id=o.clientID,o.group="user";var e=this.nodes.findIndex((e=>e.id==o.id));-1===e?this.nodes.push(o):Object.assign(this.nodes[e],o),console.log(o.rooms);for(const[e,r]of Object.entries(o.rooms)){r.id=e,r.name=e,r.group="room";var s=this.nodes.findIndex((e=>e.id==r.id));-1===s?this.nodes.push(r):Object.assign(this.nodes[s],r);let i={source:o.id,target:r.id,group:"visited",label:"visited",color:"blue"};r.id==o.roomId&&(i.group="current",i.label="current",i.color="red",console.log("#link",i));var t=this.links.findIndex((e=>e.source==i.source&&e.target==i.target));-1===t?this.links.push(i):Object.assign(this.links[t],i)}}this.update()}},watch:{nodes(){this.update()},links(){this.update()},graph(){this.update()},users(){this.updateUsers()},usersUpdated(){console.log(this.usersUpdated),this.updateUsers(),this.$forceUpdate()},currentNode(){console.log(this.currentNode);let e=this.$store.state.actor.user;switch(this.currentNode.group){case"room":e.roomId=this.currentNode.id,this.$store.commit("actor/setUser",e),this.$connect("graphview");break;case"user":break;default:console.log("i don't know what to do")}}},computed:{graph(){return this.$store.state.network.graph},users:{cache:!1,get(){return this.$store.state.actor.users}},usersUpdated(){return this.$store.state.actor.usersUpdated},uploads(){return this.$store.state.web3.uploads},currentNode(){return this.$store.state.network.currentNode}}},n=i,a=t(1001),d=(0,a.Z)(n,r,o,!1,null,"505a8c62",null),h=d.exports}}]);
//# sourceMappingURL=graph.a6cf0003.js.map