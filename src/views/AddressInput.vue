<template>
  <b-input-group >
    <b-input  placeholder="room address" v-model="ra" size="sm" @keyup.enter="openRoom" type="search"/>
    <!-- <b-input-group-append>
    <b-button v-if="ra.length > 0" @click="ra = ''" size="sm">X</b-button>

  </b-input-group-append> -->
  <!-- <b-input-group-append> -->
  <!-- <b-icon v-if="isFavorite == true" icon="star-fill" variant="warning" @click="toogleFav"></b-icon> -->
  <!-- <b-icon v-else icon="star" variant="warning" @click="toogleFav"></b-icon> -->
  <!--
</b-input-group-append> -->

</b-input-group>
</template>

<script>
export default {
  name: 'AddressInput',

  props: ['options'],
  data(){
    return{
      ra: '',
      isFavorite: false,
      showFav: false
    }
  },
  methods:{
    toogleFav(){
      this.isFavorite = !this.isFavorite
    },
    async openRoom(){
      let id = this.ra.trim()
      id.length > 0 ? await this.$openRoom(id) : alert("RoomId must be at least one character !")
    },
    // openRoom1(){
    //   let user = this.user
    //   let options = this.options
    //   if (this.options!= undefined && this.options.mode == 'fork'){
    //     options.parent = this.user.roomId
    //     options.user = user.name
    //   }
    //   user.roomId = this.ra.trim()
    //   this.$store.commit('actor/setUser', user)
    //   // this.$openRoom(options)
    //   this.$connect('adressinput')
    // }
  },
  watch:{
    room(){
      console.log(this.room)
      this.ra = this.room.id
    }
  },
  computed:{
    room(){
      return this.$store.state.noosphere.room
    },
    // user(){
    //   return this.$store.state.actor.user
    // }
  }


}
</script>

<style lang="css" scoped>
.address-input {

}
</style>
