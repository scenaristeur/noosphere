<template>
  <b-nav-item-dropdown text="new" right>
    <b-dropdown-item href="#" v-b-modal.modal-qrscan>from QR code</b-dropdown-item>
    <b-dropdown-item @click="randomRoom">random</b-dropdown-item>
    <b-dropdown-item href="#" @click="nowRoom">now (timestamp)</b-dropdown-item>
    <b-dropdown-item href="#" disabled>fork the current room</b-dropdown-item>
  </b-nav-item-dropdown>

</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'MenuNew',
  methods:{
    randomRoom(){
      console.log('random')
      this.user.roomId = uuidv4()
      this.$store.commit('core/setUser', this.user)
      this.$openRoom()
    },
    nowRoom(){
      console.log('now')
      this.user.roomId = Date.now()
      this.$store.commit('core/setUser', this.user)
      this.$openRoom()
    }

  },
  computed: {
    user() {
      return this.$store.state.core.user
    },
  }
}
</script>
