<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <router-link to="/" class="nav-item mx-2"><b-icon font-scale="1.5" icon="house-fill" aria-hidden="true"></b-icon> </router-link>

      <router-link to="/editor" class="nav-item mx-2"><b-icon font-scale="1.5" icon="pen" aria-hidden="true"></b-icon></router-link>
      <router-link to="/room" class="nav-item mx-2"><b-icon font-scale="1.5" icon="list-stars" aria-hidden="true"></b-icon></router-link>
      <router-link to="/user" class="nav-item mx-2"><b-icon font-scale="1.5" icon="people-fill" aria-hidden="true"></b-icon></router-link>
      <!-- <router-link to="###" class="nav-item mx-2"><b-icon @click="getLocation" font-scale="1.5" icon="geo-alt" aria-hidden="true"></b-icon></router-link> -->
      <router-link to="/config" class="nav-item mx-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon></router-link>
      <router-link to="/graph" class="nav-item mx-2">net</router-link>
      <router-link to="/about" class="nav-item mx-2"><b-icon font-scale="1.5" icon="question" aria-hidden="true"></b-icon></router-link>

    </nav>

    <router-view/>

    <b-alert variant="info" show>
      <router-link to="/about" class="m-2">What is Noosphere <b-icon font-scale="1.5" icon="question" aria-hidden="true"></b-icon></router-link>
      <b-link href="https://matrix.to/#/#noosphere:matrix.org" class="m-2">
        Chat about Noosphere
        <b-icon font-scale="1.5" icon="chat" aria-hidden="true"></b-icon>
      </b-link>
      <br><i><small>version: network links</small></i>
      {{ location}}
    </b-alert>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      location: null
    }
  },
  created(){
    this.$coreInit({name: "SuperCore", route: this.$route})
  },
  async mounted(){
    let web3Token = localStorage.getItem('noosphere-web3storage-token')
    await this.$store.commit('core/setWeb3Token', web3Token)
    let uploads = await this.$web3list(web3Token)
    console.log("Web3 uploads",uploads)
    //  console.log('token', web3Token)
  },
  methods:{

    // TODO geolocation
    // https://www.w3schools.com/html/html5_geolocation.asp

    getLocation(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.location = "Geolocation is not supported by this browser.";
        console.log("location", this.location)
      }
    },
    showPosition(position) {
      this.location = "Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude;
      console.log("location", this.location)
    }
  },
  watch:{

  },
  computed: {
    user() {
      return this.$store.state.core.user
    },
    users() {
      return this.$store.state.core.users
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
