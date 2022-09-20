<template>
    <b-input-group >
      <b-input  placeholder="room address" v-model="ra" size="sm" @keyup.enter="openRoom" type="search"/>
      <!-- <b-input-group-append>
      <b-button v-if="ra.length > 0" @click="ra = ''" size="sm">X</b-button>

    </b-input-group-append> -->
    <b-input-group-append class="mt-1 ml-1" v-if="showFav">
      <b-icon v-if="isFavorite == true" icon="star-fill" variant="warning" @click="toogleFav"></b-icon>
      <b-icon v-else icon="star" variant="warning" @click="toogleFav"></b-icon>
    </b-input-group-append>
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
    openRoom(){
      let user = this.user
      user.roomId = this.ra.trim()
      this.$store.commit('core/setUser', user)
      this.$openRoom(this.options)
    }
  },
  watch:{
    roomAddress(){
      console.log(this.roomAddress)
      this.ra = this.roomAddress
    }
  },
  computed:{
    roomAddress(){
      return this.$store.state.core.roomAddress
    },
    user(){
      return this.$store.state.core.user
    }
  }


}
</script>

<style lang="css" scoped>
.address-input {

}
</style>
