<template>
  <div class="channel-view" v-if="channel!= null">
    <b-button v-b-modal.modal-channel size='sm' disabled>channel: {{channel.id}}</b-button>

    <b-modal id="modal-channel" title="Channel" ok-only @ok="changeChannel">
      <p class="my-4">
        <b-input v-model="channelId" type="search" placeholder="channel" @keyup.enter="changeChannel" />
        <b-button @click='channelId = "noosphere-demo"'>Default</b-button>
        <!-- <b-button @click="changeChannel()">Change</b-button> -->

      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ChannelView',
  data(){
    return{
      channelId : "noosphere-demo"
    }
  },
  methods:{
    changeChannel(){
      this.$newChannel({id: this.channelId})
      this.$bvModal.hide('modal-channel')
    }
  },
  watch:{
    channel(){
      this.channelId = this.channel.id
    }
  },
  computed: {
    channel() {
      return this.$store.state.noosphere.channel
    },
  }


}
</script>

<style lang="css" scoped>
.channel-view {

}
</style>
