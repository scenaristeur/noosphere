<template>


  <b-input-group >




    <b-input  placeholder="room adress" v-model="ra" size="sm" @keyup.enter="openRoom"/>
    <b-input-group-append>
      <b-button @click="ra = ''" size="sm">X</b-button>

    </b-input-group-append>
    <b-input-group-append class="mt-1 ml-1" v-if="showFav">
      <b-icon v-if="isFavorite == true" icon="star-fill" variant="warning" @click="toogleFav"></b-icon>
      <b-icon v-else icon="star" variant="warning" @click="toogleFav"></b-icon>
    </b-input-group-append>
  </b-input-group>

</template>

<script>
export default {
  name: 'AdressInput',
  data(){
    return{
    ra: '',
      isFavorite: false,
      showFav: true
    }
  },
  methods:{
    toogleFav(){
      this.isFavorite = !this.isFavorite
    },
    openRoom(){
      let user = this.user
      user.roomId = this.ra
      this.$store.commit('core/setUser', user)
      this.$openRoom()
    }
  },
  watch:{
    roomAdress(){
      this.ra = this.roomAdress
    }
  },
  computed:{
    roomAdress(){
        return this.$store.state.core.roomAdress
    },
    user(){
      return this.$store.state.core.user
    }
  }


}
</script>

<style lang="css" scoped>
.adress-input {

}
</style>
