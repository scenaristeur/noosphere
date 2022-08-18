<template>
  <div class="home">
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
