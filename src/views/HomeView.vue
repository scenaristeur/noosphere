<template>
  <div class="home">

    <div>
      <!--
      bg-variant="info"
      text-variant="white"
      border-variant="dark"
      link-variant="dark"
    -->

      </div>



      <RoomCard />

      <!-- <StorageView /> -->
    </div>
  </template>

  <script>

  export default {
    name: 'HomeView',
    components: {
      'RoomCard': ()=>import('@/views/RoomCard'),
      // 'StorageView': ()=>import('@/views/StorageView'),
    },

  }
  </script>
