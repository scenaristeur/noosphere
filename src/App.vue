<template>
  <div id="app">
    <NavBar />
    <div style="margin-top: 60px;">


      <router-view/>
    </div>
    <SpinnerComp />
    <!-- <b-alert variant="info" show>

    <i><small>version: navbar</small></i>
    {{ location}}
  </b-alert> -->
  <!-- <RoomManager /> -->
  <SideBar />
  <Web3Modal />
  <ShareModal />


</div>
</template>

<script>

export default {
  name: 'App',
  components: {
    'NavBar': ()=>import('@/views/NavBar'),
    'SpinnerComp': ()=>import('@/components/SpinnerComp'),
    // 'RoomManager': ()=>import('@/views/RoomManager'),
    'SideBar': ()=>import('@/views/SideBar'),
    'Web3Modal': ()=>import('@/views/Web3Modal'),
    'ShareModal': ()=>import('@/views/ShareModal'),

    // 'UserView': ()=>import('@/views/UserView'),
  },
  data() {
    return {
      // location: null
    }
  },
  created(){
    this.$coreInit({name: "SuperCore", route: this.$route})
  },
  async mounted(){
    //this.$web3Init()
    //  console.log('token', web3Token)
  },
  methods:{

    // TODO geolocation
    // https://www.w3schools.com/html/html5_geolocation.asp

    // getLocation(){
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(this.showPosition);
    //   } else {
    //     this.location = "Geolocation is not supported by this browser.";
    //     console.log("location", this.location)
    //   }
    // },
    // showPosition(position) {
    //   this.location = "Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude;
    //   console.log("location", this.location)
    // }
  },
  watch:{

  },
  computed: {
    user() {
      return this.$store.state.actor.user
    },
    users() {
      return this.$store.state.actor.users
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#shareAlert{
  position: absolute;
  bottom: 0px;
  z-index:10;
}
</style>
