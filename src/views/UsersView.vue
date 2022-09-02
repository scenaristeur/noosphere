<template>
  <div class="users-view">
    Users : {{ users }}<hr>

    user : {{user}}<hr>

    <b-table
    small
    selectable
    select-mode="single"
    responsive="sm"
    :items="Object.values(users)"
    :fields="fields"
    @row-selected="onRowSelected" >
    <template #cell(name)="data">
      <template v-if="data.item.clientID == user.clientID">
        <b-button v-b-modal.modal-me size="sm"
        variant="outline-primary">
        <span :style="'color:'+data.item.color">{{data.item.name}}
        </span>
      </b-button>
      <!-- <span aria-hidden="true">&check;</span> -->
    </template>
    <template v-else>
      <small :style="'color:'+data.item.color"><i>{{data.item.name}}</i></small>
    </template>
  </template>


</b-table>
</div>
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
          // this.openRoom()
          console.log("should open room")
        }
      },
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
