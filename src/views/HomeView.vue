<template>
  <div class="home">

    <div>
      <!--
      bg-variant="info"
     text-variant="white"
     border-variant="dark"
     link-variant="dark"
   -->
      <b-jumbotron

      header="Noosphere"
      header-level="4"
      lead="Noosphere is a tool to share and grab ideas all around the world.">
      <p>If you want to grab ideas near you and share located ones, you can activate/daesactivate your location in the
         <router-link variant="dark" to="/config">Config</router-link> menu.
        <!--<b-button size="sm" variant="outline-info" @click="toggleLocation" disabled >Activate location</b-button>-->
        You can always customize </p>
        <b-button variant="primary" href="#room-card">Open a Room</b-button>
        <b-button variant="primary" href="/about">More Info</b-button>
      </b-jumbotron>
    </div>
    <RoomCard />
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    'RoomCard': ()=>import('@/views/RoomCard'),
    // 'NavBar': ()=>import('@/views/NavBar'),
  },
}
</script>
