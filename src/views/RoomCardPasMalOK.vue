<template>
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



    <div v-if="roomId.length ==0">
      <b-button  size="sm" variant="info" @click="generateId">Randomize roomId</b-button> or
      <b-button size="sm" variant="outline-info" @click="toggle_qr_scanner">Join with QR</b-button>
    </div>
    <div v-else>
      <b-button size="sm" variant="outline-info" @click="roomId = ''">Clear</b-button>

    </div>




    <b-input v-model="roomId" placeholder="roomId | random | QR" />

    <div v-if="roomId.length !=0">
      <b-button size="sm" variant="info" @click="openRoom">Go</b-button> and
      <b-button size="sm" variant="info" @click="generateQR">Share</b-button>

    </div>

    <div id="reader" ref="reader" width="600px"></div>
    <div  v-if="QRsrc">
      <small>{{ this.url}}</small><br>
      <b-button @click="saveQR" disabled size="sm" variant="info">save QR</b-button>

      <b-button @click="saveQR" disabled size="sm" variant="info">copy url</b-button>
      <b-button @click="QRsrc=null" size="sm" variant="info">hide</b-button>
      <img :src="QRsrc" width="280px" /><br>



    </div>


    <div v-if="this.url != null">

    </div>

    <div id="ymap_div" v-if="ymap!=null">

      <input v-model="newName" placeholder="name of the new node" />
      <button @click="addNodeToMap">Add node to map</button>
      <button @click="clearMap">clear map</button>
      <button @click="populateMap">populate map</button>
      <input v-model="newStuff" placeholder="name of the stuff" />
      <button @click="changeStuff">change stuff</button>
      <hr>
      ymap : {{ymap}}
      <hr>
      <!-- nodes : {{ymap.nodes}}
      rooms: {{JSON.stringify(rooms)}} -->

      <!-- ymapNodes : {{ymap.map.nodes}} -->
      <hr>
    </div>
  </b-card-text>
  <hr><hr>
  yarray : {{yarray}}
  <button @click="clear">clear</button>
  <hr>
  <input v-model="newVal" type="number" placeholder="number, ex: 0 or 10" />
  <button @click="addToArray">Add</button>

</b-card>

</div>
</template>

<script>
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode'
import {Html5QrcodeScanner} from "html5-qrcode"

let calls = 0
export default {
  name: 'RoomCard',
  data(){
    return{
      roomId: null,
      yarray: null,
      newVal: 3,
      ymap: null,
      newStuff: 'c4',
      nodes: [],
      newName: '',
      QRsrc: null,
      url: null,
      scanner: null
    }
  },
  created(){
    this.roomId = this.$route.query.room || uuidv4()
    this.ydoc = new Y.Doc()

    // this allows you to instantly get the (cached) documents data
    const indexeddbProvider = new IndexeddbPersistence('noosphere-demo', this.ydoc)
    indexeddbProvider.whenSynced.then(() => {
      console.log('loaded data from indexed db')
    })

    // Sync clients with the y-webrtc provider.
    const webrtcProvider = new WebrtcProvider('noosphere-demo', this.ydoc)

    // Sync clients with the y-websocket provider
    const websocketProvider = new WebsocketProvider(
      'wss://demos.yjs.dev', 'noosphere-demo', this.ydoc
    )
    console.log("providers", webrtcProvider, websocketProvider)

    // array of numbers which produce a sum
    this.yarray = this.ydoc.getArray('count')

    this.yarray.observe(event => {
      console.log(event)
      // print updates when the data changes
      console.log(this.yarray.toJSON())
      // console.log('new sum: ' + this.yarray.toArray().reduce((a,b) => a + b))
    })
  },
  methods:{
    generateId(){
      this.roomId = uuidv4()
    },
    async generateQR(){

      this.url = 'https://scenaristeur.github.io/noosphere/?room='+this.roomId
      // var myHeaders = new Headers();
      //
      // var myInit = { method: 'GET',
      // headers: myHeaders,
      // mode: 'cors',
      // cache: 'default' };
      // this.shorturl = await fetch("https://is.gd/create.php?format=simple&url="+this.url,myInit)
      // .then(function(response) {
      //   return response.text();
      // })
      console.log ("short", this.shorturl)
      this.QRsrc = await QRCode.toDataURL(this.url, {color: {light: '#98faf5'}})
    },
    toggle_qr_scanner(){
      if(this.$refs.reader.innerHTML == ""){
        this.scanner = new Html5QrcodeScanner(
          "reader",
          { fps: 10, qrbox: {width: 250, height: 250} },
          /* verbose= */ false);
          this.scanner.render(this.onScanSuccess, this.onScanFailure);
        }else{
          console.log(this.scanner)
          this.scanner.stop().then(() => {
            // QR Code scanning is stopped.
            this.$refs.reader.innerHTML == ""
          }).catch((err) => {
            console.log(err)
            // Stop failed, handle it.
          });
        }


      },
      onScanSuccess(decodedText, decodedResult) {
        // handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
        let eq_splitted = decodedText.split('=')
        if(eq_splitted[0] == 'https://scenaristeur.github.io/noosphere/?room'){
          this.roomId=eq_splitted[1]
          this.openRoom()
          this.toggle_qr_scanner()
        }else{
          console.log("i don't know what to do with", eq_splitted)
        }
      },

      onScanFailure(error) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        console.warn(`Code scan error = ${error}`);
        this.scanner = error
      },
      saveQR(){
        console.log('todo', this.QRsrc)
      },
      openRoom(){
        this.ymap = this.ydoc.getMap(this.roomId)

        // observe changes of the sum
        // let app = this

        let calls = 0
        this.ymap.observeDeep(events => {
          events.forEach(event => {
            calls++
            console.log('calls', calls)
            // @ts-ignore
            console.log(event.keysChanged.has('deepmap'))
            console.log(event.path.length === 1)
            console.log(event.path[0] === 'map')
            // @ts-ignore
            // let dmapid = event.target.get('deepmap')._item.id
            // console.log(dmapid)
            console.log(event, event)
            // console.log("nodes",event.target.get('nodes').toJSON())
            // this.nodes = event.target.get('nodes').toJSON()
          })
          this.$forceUpdate();
          var url = location.href;               //Save down the URL without hash.
          location.href = "#ymap_div";                 //Go to the target element.
          history.replaceState(null,null,url);
        })

        // add 1 to the sum
        this.yarray.push([2]) // => "new sum: 1"
        if(this.ymap.get('map') == undefined){
          this.populateMap()
        }

      },
      addToArray(){
        this.yarray.push([this.newVal])
        this.newVal = '1'
      },
      clear(){
        this.yarray.delete(0, this.yarray.length)
      },
      addNodeToMap(){
        const _mapNodes = this.ymap.get('nodes')

        let node = {id: uuidv4(), name: this.newName, created: Date.now()}
        _mapNodes.set(node.id, new Y.Map())
        this.ymap.set(node.id, node)
        this.newName = ''
        this.$forceUpdate();
      },
      clearMap(){
        this.ymap.clear()
        this.$forceUpdate();
      },
      populateMap(){
        this.ymap.set('map', new Y.Map())
        this.ymap.set('nodes', new Y.Map())
        this.ymap.set('links', new Y.Map())
        const _map3 = this.ymap.get('map')
        _map3.set('deepmap', new Y.Map())
        this.ymap.set('stuff one', 'c2')
        _map3.set('stuff', 'c3')
      },
      changeStuff(){
        const _map3 = this.ymap.get('map')
        _map3.set('stuff', this.newStuff)
        this.newStuff= 'c4'
        this.$forceUpdate();
      }
    },
    watch:{
      room(){
        console.log("room", this.room)
        this.room.observeDeep(events => {
          events.forEach(event => {
            calls++
            console.log('calls', calls)
            // @ts-ignore
            console.log(event.keysChanged.has('deepmap'))
            console.log(event.path.length === 1)
            console.log(event.path[0] === 'map')
            // @ts-ignore
            // let dmapid = event.target.get('deepmap')._item.id
            // console.log(dmapid)
            console.log(event, event)
          })
          // this.$forceUpdate();
        })
        this.$forceUpdate();
        var url = location.href;               //Save down the URL without hash.
        location.href = "?room="+this.room+"#room-card";                 //Go to the target element.
        history.replaceState(null,null,url);
      }
    },

    computed: {
      room() {
        return this.$store.state.room.room
      },
      rooms() {
        return this.$store.state.room.rooms
      },
    }


  }
  </script>

  <style lang="css" scoped>
  .room-card {

  }
  </style>
