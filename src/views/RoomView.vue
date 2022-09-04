<template>
  <div class="room-view">
    <RoomCard />
    <RoomHistory />
  </div>
</template>

<script>
export default {
  name: 'RoomView',
  components: {
    'RoomCard': ()=>import('@/views/RoomCard'),
    'RoomHistory': ()=>import('@/views/RoomHistory'),
    // 'DataCaching': ()=>import('@/views/experiments/DataCaching'),
    // 'LevelgraphJsonld': ()=>import('@/views/experiments/LevelgraphJsonld'),
  },
  

}
</script>

<style lang="css" scoped>
.room-view {

}
</style>
