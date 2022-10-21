<template>
  <div class="channel-view" v-if="channel!= null">
    <b-button v-b-modal.modal-channel size='sm' disabled>channel: {{channel.id}}</b-button>

    <b-modal id="modal-channel" title="Channel" ok-only @ok="changeChannel">
      <p class="my-4">
        <b-input v-model="channelID" type="search" placeholder="channel" @keyup.enter="changeChannel" />
        <b-button @click='channelID = "noosphere-demo"'>Default</b-button>
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
      channelID : "noosphere-demo"
    }
  },
  methods:{
    changeChannel(){
      this.$newChannel({id: this.channelID})
      this.$bvModal.hide('modal-channel')
    }
  },
  watch:{
    channel(){
      this.channelID = this.channel.id
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
