<template>
  <b-container fluid class="users-view">
    <!-- Users : {{ users }}<hr>

    user : {{user}}<hr> -->


    <b-table
    v-if="user != null"
    small
    hover
    selectable
    sticky-header
    max-height="800px"
    select-mode="single"
    responsive="sm"
    table-variant="info"
    :items="Object.values(users)"
    :fields="fields"
    @row-selected="onRowSelected"
    class="table"
    caption-top >
    <template #cell(name)="data">
      <template v-if="data.item.clientID == user.clientID">
        <b-button v-b-modal.modal-me size="sm"
        variant="outline-primary">
        <span :style="'color:'+data.item.color"><b>{{data.item.name}}</b>
        </span>
      </b-button>
      <!-- <span aria-hidden="true">&check;</span> -->
    </template>
    <template v-else>
      <small :style="'color:'+data.item.color"><i><b>{{data.item.name}}</b></i></small>
    </template>
  </template>
  <template #cell(rooms)="data">
    <!-- {{Object.keys(data.item.rooms)}} -->
    <b-button size="sm" @click="openUserModal(data.item)">{{Object.keys(data.item.rooms).length}}</b-button>


  </template>

  <template #table-caption>{{ Object.values(users).length }} users</template>

</b-table>


<b-modal id="modal-me" title="Change your username and color" @ok="userChanged">
  <p class="my-4" v-if="user!=null">
    username<b-input v-model="user.name" placeholder="username" />
    color <b-input v-model="user.color" type="color" />
    <!-- <b-button @click="userChanged" variant="info" size="sm">Update user</b-button> -->
    <b-button @click="randomUser" variant="outline-info" size="sm">Random user</b-button>
  </p>
</b-modal>



<b-modal id="modal-currentUser" ok-only size="lg">
  <template #modal-title>
    User <b>{{currentUser.name}}</b>
  </template>
  <ul v-if="currentUser.rooms != undefined">
    <li v-for="room in Object.values(currentUser.rooms)" :key="room.roomId">
      <b-button @click="changeRoom(room.roomId)" size="sm">{{room.roomId}}</b-button>
    </li>
  </ul>


  <!-- <p class="my-4">  {{currentUser}}</p> -->
</b-modal>

</b-container>
</template>

<script>
export default {
  name: 'UsersView',
  data(){
    return{
      fields: [
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'roomId',
          label: 'room',
          sortable: true
        },
        {
          key: 'rooms',
          label: 'rooms',
          sortable: true
        },
      ],
      currentUser: {}
    }
  },
  methods:{
    onRowSelected(r){
      if(r[0]!= undefined){
        this.user.roomId = r[0].roomId
        this.$openRoom()
        this.$emit('hide')
      }
    },
    userChanged(){
      this.$store.commit('actor/setUser', this.user)
      this.$userChanged()
    },
    async randomUser(){
      this.currentUser = await this.$randomUser()
    //  console.log(this.currentUser)
      this.$store.commit('actor/setUser', this.currentUser)
      // this.$userChanged()
      // this.userChanged()
    },
    openUserModal(user){
    //  console.log(user)
      this.currentUser = user
      this.$bvModal.show("modal-currentUser")
    },
    changeRoom(roomId){
    //  console.log(roomId)
      this.user.roomId = roomId
      this.$openRoom()
      this.$emit('hide')
      this.$bvModal.hide('modal-currentUser')
    }
  },
  watch:{
    usersUpdated(){
    //  console.log(this.usersUpdated)
      this.$forceUpdate()
    }
  },
  computed: {
    users: {
      cache: false,
      get() {
        return this.$store.state.actor.users;
      },
    },
    user() {
      return this.$store.state.actor.user
    },
    usersUpdated() {
      return this.$store.state.actor.usersUpdated
    }
  }

}
</script>

<style lang="css" scoped>
.users-view {

}
.table{
        max-height:"800px"
}
</style>
