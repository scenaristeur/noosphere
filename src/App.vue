<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
  <li class="nav-item active">
  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Link</a>
</li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Dropdown
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</li>
<li class="nav-item">
<a class="nav-link disabled" href="#">Disabled</a>
</li>
</ul>
<form class="form-inline my-2 my-lg-0">
<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>
</div>
</nav> -->


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <router-link to="/" class="nav-item mx-2"><b-icon font-scale="1.5" icon="house-fill" aria-hidden="true"></b-icon> </router-link>

  <router-link to="/editor" class="nav-item mx-2"><b-icon font-scale="1.5" icon="pen" aria-hidden="true"></b-icon></router-link>
  <router-link to="/room" class="nav-item mx-2"><b-icon font-scale="1.5" icon="list-stars" aria-hidden="true"></b-icon></router-link>
  <router-link to="/user" class="nav-item mx-2"><b-icon font-scale="1.5" icon="people-fill" aria-hidden="true"></b-icon></router-link>
  <!-- <router-link to="#"  class="nav-item mx-2"><b-icon @click="share" font-scale="1.5" icon="share" aria-hidden="true"></b-icon></router-link> -->
  <!-- <router-link to="##"  class="nav-item mx-2"><b-icon @click="openPinModal" font-scale="1.5" icon="pin" aria-hidden="true"></b-icon></router-link> -->
  <router-link to="###" class="nav-item mx-2"><b-icon @click="getLocation" font-scale="1.5" icon="geo-alt" aria-hidden="true"></b-icon></router-link>
  <router-link to="/about" class="nav-item mx-2"><b-icon font-scale="1.5" icon="question" aria-hidden="true"></b-icon></router-link>
  <router-link to="/config" class="nav-item mx-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon></router-link>

</nav>

<!--

<nav class="navbar navbar-dark bg-dark" style="background-color: #e3f2fd;">

<ul class="navbar-nav mr-auto">
<router-link to="/" class="nav-item"><b-icon font-scale="1.5" icon="house" aria-hidden="true"></b-icon> </router-link>
<router-link to="/editor" class="m-2"><b-icon font-scale="1.5" icon="pen" aria-hidden="true"></b-icon></router-link>
<router-link to="/user" class="mx-auto"><b-icon font-scale="1.5" icon="person" aria-hidden="true"></b-icon></router-link>


<router-link to="/room" class="m-2"><b-icon font-scale="1.5" icon="list-stars" aria-hidden="true"></b-icon></router-link>
<router-link to="/config" class="m-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon></router-link>
<router-link to="#"  class="m-2"><b-icon @click="share" font-scale="1.5" icon="share" aria-hidden="true"></b-icon></router-link>
<router-link to="##"  class="m-2"><b-icon @click="openPinModal" font-scale="1.5" icon="pin" aria-hidden="true"></b-icon></router-link>
<router-link to="/about" class="m-2"><b-icon font-scale="1.5" icon="question" aria-hidden="true"></b-icon></router-link>
<router-link to="###" class="ml-2"><b-icon @click="getLocation" font-scale="1.5" icon="geo-alt" aria-hidden="true"></b-icon></router-link>
</ul>
</nav> -->

<router-view/>
<!-- user :{{ user }}<br>
users: {{ users }} -->





<b-alert variant="info" show>
  <router-link to="/about" class="m-2">What is Noosphere <b-icon font-scale="1.5" icon="question" aria-hidden="true"></b-icon></router-link>
  <b-link href="https://matrix.to/#/#noosphere:matrix.org" class="m-2">
    Chat about Noosphere
    <b-icon font-scale="1.5" icon="chat" aria-hidden="true"></b-icon>
  </b-link>
  <br><i><small>version: pinning</small></i>
  {{ location}}
</b-alert>

</div>
</template>


<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'App',
  // components: {
  //   'NavBar': ()=>import('@/views/NavBar'),
  //   // 'DataCaching': ()=>import('@/views/experiments/DataCaching'),
  //   // 'LevelgraphJsonld': ()=>import('@/views/experiments/LevelgraphJsonld'),
  // },
  data() {
    return {
      location: null
    }
  },

  created(){
    //  console.log(this.$route)
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
