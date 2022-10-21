<template>
  <b-modal id="modal-modalUser" ok-only size="lg">
    <template #modal-title>
      User <b>{{modalUser.name}}</b>
    </template>
    <ul v-if="modalUser != null && modalUser.rooms != undefined">
      <li v-for="room in Object.keys(modalUser.rooms)" :key="room">
        <b-button @click="changeRoom(room)" size="sm">{{room}}</b-button>
      </li>
    </ul>


    <!-- <p class="my-4">  {{modalUser}}</p> -->
  </b-modal>
</template>

<script>
export default {
  name: 'UserRooms',
  methods:{
    changeRoom(roomID){
      //  console.log(roomID)
      //this.user.roomID = roomID
      // this.$connect('user view change room')
      this.$openRoom({id: roomID})
      this.$emit('hide')
      this.$bvModal.hide('modal-modalUser')
    },
  },
  computed: {
    modalUser() {
      return this.$store.state.actor.modalUser
    }
  }



}
</script>

<style lang="css" scoped>
. {

}
</style>
