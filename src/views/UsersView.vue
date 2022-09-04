<template>
  <b-container fluid class="users-view">
    <!-- Users : {{ users }}<hr>

    user : {{user}}<hr> -->


    <b-table
    small
    selectable
    sticky-header
    select-mode="single"
    responsive="sm"
    :items="Object.values(users)"
    :fields="fields"
    @row-selected="onRowSelected" >
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


</b-table>
{{ Object.values(users).length }} users

<b-modal id="modal-me" title="Change your username and color" @ok="userChanged">
  <p class="my-4">
    username<b-input v-model="user.name" placeholder="username" />
    color <b-input v-model="user.color" type="color" />
    <!-- <b-button @click="userChanged" variant="info" size="sm">Update user</b-button> -->
    <b-button @click="randomUser" variant="outline-info" size="sm">Random user</b-button>
  </p>
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
        },],
      }
    },
    methods:{
      onRowSelected(r){
        if(r[0]!= undefined){
          this.user.roomId = r[0].roomId
          this.$openRoom()
        }
      },
      userChanged(){
        this.$store.commit('core/setUser', this.user)
        this.$userChanged()
      },
      randomUser(){
        this.$randomUser()
      }
    },
    watch:{
      usersUpdateDate(){
        console.log(this.usersUpdateDate)
        this.$forceUpdate()
      }
    },
    computed: {
      users: {
        cache: false,
        get() {
          return this.$store.state.core.users;
        },
      },
      user() {
        return this.$store.state.core.user
      },
      usersUpdateDate() {
        return this.$store.state.core.usersUpdateDate
      }
    }

  }
  </script>

  <style lang="css" scoped>
  .users-view {

  }
  </style>
