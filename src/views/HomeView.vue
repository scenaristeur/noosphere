<template>
  <div class="home">
    <UsersView />
    <RoomCard />
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    'RoomCard': ()=>import('@/views/RoomCard'),
    'UsersView': ()=>import('@/views/UsersView'),
    // 'StorageView': ()=>import('@/views/StorageView'),
  },

}
</script>
