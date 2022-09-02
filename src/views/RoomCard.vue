<template>
  <b-row>
    <b-col>

      <div class="room-card" id="room-card">


        <b-card
        title="Open a room"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >

        <!-- <b-header>
        <h2></h2>
      </b-header> -->
      <b-card-text>



        <b-input v-model="user.roomId" placeholder="roomId | random | QR"
        @keyup.enter="openRoom" />
        <b-button v-if="this.user.roomId.length !=0" size="sm" variant="info" @click="openRoom">Go</b-button>


        <span v-if="user.roomId.length ==0">
          <b-button  size="sm" variant="outline-info" @click="generateId">Randomize roomId</b-button> or
          <b-button  size="sm" variant="outline-info" @click="nowId">Now roomId</b-button> or
        </span>

        <b-button v-else size="sm" variant="outline-info" @click="user.roomId = ''">Clear</b-button>








        <QrView :roomId="user.roomId" @roomIdChanged="onRoomIdChanged"/>
        <!-- <hr>



        <hr>
        <UserView />
        <hr> -->
        <!-- <div id="ymap_div" v-if="ymap!=null"> -->

        <!-- <input v-model="newName" placeholder="name of the new node" />
        <button @click="addNodeToMap">Add node to map</button>
        <button @click="clearMap">clear map</button>
        <button @click="populateMap">populate map</button>
        <input v-model="newStuff" placeholder="name of the stuff" />
        <button @click="changeStuff">change stuff</button> -->

        <!-- <hr> -->

        <hr>
        <!-- {{user}}
        <b-button v-b-modal.modal-me size="sm"
        variant="outline-primary">
        {{user.name}}</b-button> -->
        <table>
          <thead><th>user</th><th>room</th></thead>
          <tr v-for="u in users" :key="u.clientID" >
            <td v-if="u.clientID == user.clientID" ><b-button v-b-modal.modal-me size="sm"
              variant="outline-primary">
              <div :style="'color:'+u.color"><b>{{u.name}}</b>
              </div>
            </b-button></td>
            <td v-else>  <div :style="'color:'+u.color"><b>{{u.name}}</b></div> </td>
            <td><a :href="'?room='+u.roomId">{{u.roomId}}</a></td>
          </tr>
        </table>

        <b-modal id="modal-me" title="Change your username and color" @ok="userChanged">
          <p class="my-4">
            Choose a <b-input v-model="user.name" placeholder="username" />
            and a color <b-input v-model="user.color" type="color" />
            <!-- <b-button @click="userChanged" variant="info" size="sm">Update user</b-button> -->
            <b-button @click="randomUser" variant="outline-info" size="sm">Random user</b-button>
          </p>
        </b-modal>
        <hr>
        <!-- nodes : {{ymap.nodes}}
        rooms: {{JSON.stringify(rooms)}} -->

        <!-- ymapNodes : {{ymap.map.nodes}} -->
        <!-- <hr> -->
        <!-- </div> -->
      </b-card-text>
      <!-- <hr>

      <hr>
      ymap : {{ymap}}
      <hr>

      <hr> -->
      <!-- yarray : {{yarray}}
      <button @click="clear">clear</button>
      <hr>
      <input v-model="newVal" type="number" placeholder="number, ex: 0 or 10" />
      <button @click="addToArray">Add</button> -->

    </b-card>

  </div>

</b-col>

<b-col>
  <EditorView
  @saveEditor="onSaveEditor"
  :editorData="editorData"
  @userEvent="onUserEvent"
  @editorEvent="onEditorEvent"
  />
</b-col>

</b-row>
</template>

<script>
//import yService from '@/services/y-service';
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import { v4 as uuidv4 } from 'uuid';

// sharing a single Awareness instance (per space) over several providers:

import {Awareness} from 'y-protocols/awareness'

// let calls = 0
export default {
  name: 'RoomCard',
  components: {
    'EditorView': ()=>import('@/views/EditorView'),
    'QrView': ()=>import('@/views/QrView'),
    // 'UserView': ()=>import('@/views/UserView'),
  },
  data(){
    return{
      user: {},
      users: {},
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
      editorData: null,
      editorDataDefault: {
        "time" : 1550476186479,
        "blocks" : [
          {
            "type" : "paragraph",
            "data" : {
              "text" : "You have just opened a new room in the"
            }
          },
          {
            "type" : "header",
            "data" : {
              "text" : "Noosphere",
              "level" : 2
            }
          },
          {
            "type" : "paragraph",
            "data" : {
              "text" : "Feel free to click on this text to edit, and don't forget to share this collaborative knowledge tool"
            }
          }
        ],
        "version" : "2.8.1"
      }
    }
  },
  created(){
    let app = this
    this.user = JSON.parse(localStorage.getItem('noosphere-user'))
    //console.log('[user]',this.user)

    this.ydoc = new Y.Doc()
    // this allows you to instantly get the (cached) documents data
    this.indexeddbProvider = new IndexeddbPersistence('noosphere-demo', this.ydoc)
    this.indexeddbProvider.whenSynced.then((data) => {
      console.log('[indexeddbProvider] loaded data from indexed db', data)
      this.openRoom()
    })


    let awareness = this.awareness = new Awareness(this.ydoc)
    //console.log("awareness",awareness, awareness.getStates().has(this.user.clientID))
    if (this.user == null){

      this.randomUser()
    }else{
      //awareness.clientID = this.user.clientID
    }


    this.user.roomId = this.$route.query.room || this.user.roomId || uuidv4()
    // this.ymap = this.ydoc.getMap(this.user.roomId)


    awareness.on('change', ()/*changes*/ => {

      // Whenever somebody updates their awareness information,
      // we log all awareness information from all users.
      awareness.getStates().forEach(state => {
        console.log(state)
        if (state.user) {
          //console.log('[state.user]',state.user)
          app.users[state.user.clientID]= state.user
          //strings.push(`<div style="color:${state.user.color};">• ${state.user.name}</div>`)
        }
      })

      //console.log("[awareness]",Array.from(awareness.getStates().values()), changes)
      //console.log('[app users]',app.users)
      this.$forceUpdate();
    })



    // Sync clients with the y-webrtc provider.
    let webrtcProvider = new WebrtcProvider('noosphere-demo', this.ydoc, {awareness})

    // Sync clients with the y-websocket provider
    let websocketProvider = new WebsocketProvider('wss://demos.yjs.dev', 'noosphere-demo', this.ydoc, {awareness})
    console.log("[providers]", webrtcProvider, websocketProvider)

    // array of numbers which produce a sum
    // this.yarray = this.ydoc.getArray('count')
    //
    // this.yarray.observe(event => {
    //   console.log(event)
    //   // print updates when the data changes
    //   console.log(this.yarray.toJSON())
    //   // console.log('new sum: ' + this.yarray.toArray().reduce((a,b) => a + b))
    // })
    //this.manageAwareness()

  },
  mounted(){
    //this.openRoom()
  },
  methods:{
    randomUser(){
      let awareness = this.awareness

      this.user = {
        name: 'User_'+Date.now(),
        color: '#'+Math.floor(Math.random()*16777215).toString(16),
        clientID: awareness.clientID,
        roomId: '',
        rooms: []
      }

    },
    onUserEvent(e){
      console.log("userEVent", e)
    },
    onEditorEvent(e){
      console.log("editorEvent",e)
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
    userChanged(){
      localStorage.setItem('noosphere-user', JSON.stringify(this.user));
      this.awareness.setLocalStateField('user', this.user)
      console.log("[user changed]"/*, this.awareness*/, this.user)
    },
    generateId(){
      this.user.roomId = uuidv4()
      this.openRoom()
    },
    nowId(){
      this.user.roomId = Date.now()
      this.openRoom()
    },

    async openRoom(){
      //  this.editorData = null
      this.userChanged()
      this.ymap = this.ydoc.getMap(this.user.roomId)

      console.log("[openRoom]", this.user.roomId)
      //this.updateUser()

      let editorData = await this.ymap.get('editor_map')
      console.log(editorData)
      if (editorData != undefined){
        //   console.log(editorData)
        this.editorData = editorData //|| this.editorDataDefault//.toJSON()
        // //  console.log(this.editorData)
        // //  yService.log(this.editorData)
      }else{
        this.ymap.set('editor_map', this.editorDataDefault)
        this.editorData = Object.assign({}, this.editorDataDefault)
      }
      // observe changes of the sum
      // let app = this

      // let calls = 0
      this.ymap.observeDeep(events => {
        events.forEach(event => {
          // calls++
          // console.log('calls', calls)
          // @ts-ignore
          // console.log(event.keysChanged.has('deepmap'))
          // console.log(event.path.length === 1)
          // console.log(event.path[0] === 'map')
          console.log('[event]',event)
          let editor_map_changed = event.keysChanged.has('editor_map')
          console.log('[editor_map_changed]', editor_map_changed)
          // @ts-ignore
          // let dmapid = event.target.get('deepmap')._item.id
          // console.log(dmapid)

          // console.log("nodes",event.target.get('nodes').toJSON())
          // this.nodes = event.target.get('nodes').toJSON()
          // if (event.keysChanged.has('editor_map')){
          // yService.log('editor_map changed')
          //  let editorData = this.ymap.get('editor_map')



          if (editor_map_changed == true ){
            //console.log(editorData)
            let editorData = this.ymap.get('editor_map')
            if (editorData.clientID != this.user.clientID){
              this.editorData =  editorData//.toJSON()
              console.log("[update editorData]", this.editorData)
            }else{
              console.log("[same clientID]")
            }

          }
          //  yService.log(this.editorData)
          //}
          // this.populateEditor(this.editorData)
          // }
        })
        this.$forceUpdate();
        var url = location.href;               //Save down the URL without hash.
        //location.href = "#ymap_div";                 //Go to the target element.
        history.replaceState(null,null,url);

      })

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
    populateMap(){
      //  this.ymap.set('map', new Y.Map())
      //  this.ymap.set('editor_map', new Y.Map())
      // this.ymap.set('nodes', new Y.Map())
      // this.ymap.set('links', new Y.Map())
      // const _map3 = this.ymap.get('map')
      // _map3.set('deepmap', new Y.Map())
      // this.ymap.set('stuff one', 'c2')
      // _map3.set('stuff', 'c3')

      // const _editorMap = this.ymap.get('editor_map')


      //let data= { "time": 1661945860245, "blocks": [ { "id": "6tUGo3YdzP", "type": "paragraph", "data": { "text": "dfsg" } }, { "id": "4K-n_v3Ppg", "type": "paragraph", "data": { "text": "sdf" } } ], "version": "2.25.0" }

      this.ymap.set('editor_map', this.editorData)
    },
    // changeStuff(){
    //   const _map3 = this.ymap.get('map')
    //   _map3.set('stuff', this.newStuff)
    //   this.newStuff= 'c4'
    //   this.$forceUpdate();
    // },
    onSaveEditor(data){
      console.log('saveEditor', data)
      data.clientID = this.user.clientID
      // const _editorMap = this.ymap.get('editor_map')
      // _editorMap.set('data', data)
      this.ymap.set('editor_map', data)
      this.$forceUpdate()
    },
    onRoomIdChanged(roomId){
      console.log('[roomId changed]', roomId)
      this.user.roomId = roomId
      this.openRoom()
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

  // computed: {
  //   room() {
  //     return this.$store.state.core.room
  //   },
  //   rooms() {
  //     return this.$store.state.core.rooms
  //   },
  // }


}
</script>

<style lang="css" scoped>
.room-card {

}
table, th, td {
  padding: 3px;
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
