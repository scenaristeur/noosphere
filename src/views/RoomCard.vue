<template>
  <div class="room-card" id="room-card">
    <b-card
    v-if="user!= null"
    title="Open a room"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    >



    <b-card-text>

      <b-input-group class="mt-3">
        <b-input v-model="user.roomID" placeholder="roomID | random | QR"
        @keyup.enter="openRoom" />
        <b-input-group-append>
          <b-button class="text-warning" variant="outline-warning" @click="user.roomID = ''" size="sm">X</b-button>

        </b-input-group-append>
      </b-input-group>


      <b-form-checkbox
      disabled
      id="checkbox-isPublic"
      v-model="isPublic"
      name="checkbox-isPublic"
      >
      is a public room
    </b-form-checkbox>
    <b-button v-if="user.roomID.length !=0" size="sm" variant="info" @click="openRoom">Go</b-button>


    <span v-if="user.roomID.length ==0">
      <b-button  size="sm" variant="outline-info" @click="generateID">Randomize roomID</b-button> or
      <b-button  size="sm" variant="outline-info" @click="nowID">Now roomID</b-button> or
    </span>

    <!-- <b-button v-else size="sm" variant="outline-info" @click="user.roomID = ''">Reset roomID</b-button> -->


    <QrView @roomIDChanged="onRoomIDChanged"/>

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
      isPublic: true,
      users: {},
      fields: [
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'roomID',
          label: 'room',
          sortable: true
        },],
        // username: "",
        // usercolor: null,
        // roomID: null,
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
      //   //   this.roomID = user.roomID
      //   //   this.updateUser()
      //   // }
      //
      //
      //   // // All of our network providers implement the awareness crdt
      //
      //   // You can observe when a user updates their awareness information
      //
      // },
open(){
  this.$store.commit('actor/setUser', this.user)
  this.openRoom()
},
      generateID(){
        this.user.roomID = uuidv4()
this.open()
      },
      nowID(){
        this.user.roomID = Date.now()
        this.open()
      },

      async openRoom(){
this.open()

      },

      onRoomIDChanged(roomID){
        console.log('[roomID changed]', roomID)
        this.user.roomID = roomID
      this.open()
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
        return this.$store.state.actor.user
      },

    }


  }
  </script>

  <style lang="css" scoped>
  .room-card {

  }
  </style>
