<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/config">Config</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <b-alert variant="success" show>Noosphere 0 - <i><small>jumbo</small></i></b-alert>
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
