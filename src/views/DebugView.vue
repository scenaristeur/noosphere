<template>
  <div class="debug-view text-light">
    localUser : {{localUser}}<hr>
    channel: {{channel}}


  </div>
</template>

<script>
export default {
  name: 'DebugView',
  computed: {
    localUser() {
      return this.$store.state.noosphere.localUser
    },
    channel() {
      return this.$store.state.noosphere.channel
    },
  }


}
</script>

<style lang="css" scoped>
.debug-view {

}
</style>
