<template>
      <div class="room-card" id="room-card">
        <b-card
        title="Open a room"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
      <b-card-text>



        <b-input v-model="user.roomId" placeholder="roomId | random | QR"
        @keyup.enter="openRoom" />
        <b-button v-if="user.roomId.length !=0" size="sm" variant="info" @click="openRoom">Go</b-button>


        <span v-if="user.roomId.length ==0">
          <b-button  size="sm" variant="outline-info" @click="generateId">Randomize roomId</b-button> or
          <b-button  size="sm" variant="outline-info" @click="nowId">Now roomId</b-button> or
        </span>

        <b-button v-else size="sm" variant="outline-info" @click="user.roomId = ''">Reset roomId</b-button>


        <QrView :roomId="user.roomId" @roomIdChanged="onRoomIdChanged"/>

</b-card-text>


</b-card>

</div>


</template>

<script>

import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'RoomCard',
  components: {
    'QrView': ()=>import('@/views/QrView'),
    // 'UserView': ()=>import('@/views/UserView'),
  },
  data(){
    return{
      //user: {},
      users: {},
      fields: [
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'roomId',
          label: 'room',
          sortable: true
        },],
        // username: "",
        // usercolor: null,
        // roomId: null,
        yarray: null,
        newVal: 3,
        ymap: null,
        newStuff: 'c4',
        nodes: [],
        newName: '',

        url: null,
        scanner: null,

      }
    },

    methods:{

      randomUser(){
        this.$randomUser()
      },
      // manageAwareness(){
      //
      //   // see https://stackblitz.com/edit/y-quill-awareness?file=index.ts
      //   // this.webrtcAwareness = this.webrtcProvider.awareness
      //   // this.websocketAwareness = this.websocketProvider.awareness
      //   let app = this
      //
      //   // this.clientID = this.awareness.clientID
      //   // console.log("CLIENTS ID", this.awareness, this.clientID)
      //   //
      //
      //
      //   // if (user != undefined){
      //   //   this.username = user.name
      //   //   this.usercolor = user.color
      //   //   this.roomId = user.roomId
      //   //   this.updateUser()
      //   // }
      //
      //
      //   // // All of our network providers implement the awareness crdt
      //
      //   // You can observe when a user updates their awareness information
      //
      // },

      generateId(){
        this.user.roomId = uuidv4()
        this.openRoom()
      },
      nowId(){
        this.user.roomId = Date.now()
        this.openRoom()
      },

      async openRoom(){
        this.$openRoom()
        //  this.editorData = null
        // this.userChanged()
        // this.ymap = this.ydoc.getMap(this.user.roomId)
        //
        // console.log("[openRoom]", this.user.roomId)
        // //this.updateUser()
        //
        // let editorData = await this.ymap.get('editor_map')
        // console.log(editorData)
        // if (editorData != undefined){
        //   //   console.log(editorData)
        //   this.editorData = editorData //|| this.editorDataDefault//.toJSON()
        //   // //  console.log(this.editorData)
        //   // //  yService.log(this.editorData)
        // }else{
        //   this.ymap.set('editor_map', this.editorDataDefault)
        //   this.editorData = Object.assign({}, this.editorDataDefault)
        // }
        // // observe changes of the sum
        // // let app = this
        //
        // // let calls = 0
        // this.ymap.observeDeep(events => {
        //   events.forEach(event => {
        //     // calls++
        //     // console.log('calls', calls)
        //     // @ts-ignore
        //     // console.log(event.keysChanged.has('deepmap'))
        //     // console.log(event.path.length === 1)
        //     // console.log(event.path[0] === 'map')
        //     console.log('[event]',event)
        //     let editor_map_changed = event.keysChanged.has('editor_map')
        //     console.log('[editor_map_changed]', editor_map_changed)
        //     // @ts-ignore
        //     // let dmapid = event.target.get('deepmap')._item.id
        //     // console.log(dmapid)
        //
        //     // console.log("nodes",event.target.get('nodes').toJSON())
        //     // this.nodes = event.target.get('nodes').toJSON()
        //     // if (event.keysChanged.has('editor_map')){
        //     // yService.log('editor_map changed')
        //     //  let editorData = this.ymap.get('editor_map')
        //
        //
        //
        //     if (editor_map_changed == true ){
        //       //console.log(editorData)
        //       let editorData = this.ymap.get('editor_map')
        //       if (editorData.clientID != this.user.clientID){
        //         this.editorData =  editorData//.toJSON()
        //         console.log("[update editorData]", this.editorData)
        //       }else{
        //         console.log("[same clientID]")
        //       }
        //
        //     }
        //     //  yService.log(this.editorData)
        //     //}
        //     // this.populateEditor(this.editorData)
        //     // }
        //   })
        //   this.$forceUpdate();
        //   var url = location.href;               //Save down the URL without hash.
        //   //location.href = "#ymap_div";                 //Go to the target element.
        //   history.replaceState(null,null,url);
        //
        // })

        // add 1 to the sum
        // this.yarray.push([2]) // => "new sum: 1"
        // if(this.ymap.get('editor_map') == undefined){
        //   this.populateMap()
        // }

      },
      // addToArray(){
      //   this.yarray.push([this.newVal])
      //   this.newVal = '1'
      // },
      // clear(){
      //   this.yarray.delete(0, this.yarray.length)
      // },
      // addNodeToMap(){
      //   const _mapNodes = this.ymap.get('nodes')
      //
      //   let node = {id: uuidv4(), name: this.newName, created: Date.now()}
      //   _mapNodes.set(node.id, new Y.Map())
      //   this.ymap.set(node.id, node)
      //   this.newName = ''
      //   this.$forceUpdate();
      // },
      // clearMap(){
      //   this.ymap.clear()
      //   this.$forceUpdate();
      // },
      // populateMap(){
      //   //  this.ymap.set('map', new Y.Map())
      //   //  this.ymap.set('editor_map', new Y.Map())
      //   // this.ymap.set('nodes', new Y.Map())
      //   // this.ymap.set('links', new Y.Map())
      //   // const _map3 = this.ymap.get('map')
      //   // _map3.set('deepmap', new Y.Map())
      //   // this.ymap.set('stuff one', 'c2')
      //   // _map3.set('stuff', 'c3')
      //
      //   // const _editorMap = this.ymap.get('editor_map')
      //
      //
      //   //let data= { "time": 1661945860245, "blocks": [ { "id": "6tUGo3YdzP", "type": "paragraph", "data": { "text": "dfsg" } }, { "id": "4K-n_v3Ppg", "type": "paragraph", "data": { "text": "sdf" } } ], "version": "2.25.0" }
      //
      //   this.ymap.set('editor_map', this.editorData)
      // },
      // changeStuff(){
      //   const _map3 = this.ymap.get('map')
      //   _map3.set('stuff', this.newStuff)
      //   this.newStuff= 'c4'
      //   this.$forceUpdate();
      // },

      onRoomIdChanged(roomId){
        console.log('[roomId changed]', roomId)
        this.user.roomId = roomId
        this.openRoom()
        this.$forceUpdate()
      }
    },
    // watch:{
    //   room(){
    //     console.log("room", this.room)
    //     this.room.observeDeep(events => {
    //       events.forEach(event => {
    //         calls++
    //         console.log('calls', calls)
    //         // @ts-ignore
    //         // console.log(event.keysChanged.has('deepmap'))
    //         // console.log(event.path.length === 1)
    //         // console.log(event.path[0] === 'map')
    //         // @ts-ignore
    //         // let dmapid = event.target.get('deepmap')._item.id
    //         // console.log(dmapid)
    //         console.log(event, event)
    //       })
    //       // this.$forceUpdate();
    //     })
    //     this.$forceUpdate();
    //     var url = location.href;               //Save down the URL without hash.
    //     location.href = "?room="+this.room+"#room-card";                 //Go to the target element.
    //     history.replaceState(null,null,url);
    //   }
    // },

    computed: {
      user() {
        return this.$store.state.core.user
      },
      // users() {
      //   return this.$store.state.core.users
      // },
    }


  }
  </script>

  <style lang="css" scoped>
  .room-card {

  }
  </style>
