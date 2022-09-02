<template>
  <div id="app">
    <nav>

      <router-link to="/" class="m-2"><b-icon font-scale="1.5" icon="house" aria-hidden="true"></b-icon></router-link>
      <router-link to="/editor" class="m-2"><b-icon font-scale="1.5" icon="pen" aria-hidden="true"></b-icon></router-link>
      <router-link to="/user" class="m-2"><b-icon font-scale="1.5" icon="person" aria-hidden="true"></b-icon></router-link>
      <router-link to="/room" class="m-2"><b-icon font-scale="1.5" icon="list-stars" aria-hidden="true"></b-icon></router-link>
      <router-link to="/config" class="m-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon></router-link>
      <router-link to="/about" class="m-2"><b-icon font-scale="1.5" icon="question" aria-hidden="true"></b-icon></router-link>

    </nav>

    <router-view/>
      user :{{ user }}<br>
      users: {{ users }}
    <b-alert variant="success" show>Noosphere 0 - <i><small>menu</small></i></b-alert>
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
  created(){
    this.$coreInit({name: "SuperCore"})
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
</style>
