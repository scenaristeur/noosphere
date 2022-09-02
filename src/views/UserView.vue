<template>
  <div class="user-view">
    {{ user }}
    <UsersView />
  </div>
</template>

<script>
export default {
  name: 'UserView',
  components: {
    'UsersView': ()=>import('@/views/UsersView'),
    // 'QrView': ()=>import('@/views/QrView'),
    // 'UserView': ()=>import('@/views/UserView'),
  },
  computed: {
    user() {
      return this.$store.state.core.user
    }
  }

}
</script>

<style lang="css" scoped>
.user-view {

}
</style>
