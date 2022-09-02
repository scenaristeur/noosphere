<template>
  <div class="users-view">
    Users : {{ users }}
  </div>
</template>

<script>
export default {
  name: 'UsersView',
  computed: {
    users() {
      return this.$store.state.core.users
    }
  }

}
</script>

<style lang="css" scoped>
.users-view {

}
</style>
