<template>
  <b-nav-item-dropdown text="new" right ref="newDropdown">


    <!-- <b-dropdown-form> -->
    <!-- <b-form-group label="RoomId" label-for="dropdown-form-roomId" @submit.stop.prevent> -->
    <!-- <b-form-input
    id="dropdown-form-roomId"
    size="sm"
    v-model="roomId"
    placeholder="roomId"
    ></b-form-input> -->
    <b-dropdown-group id="dropdown-group-1" header="Specify roomId" class="m-3" >
      <div class="text-dark">
        <b-form-radio-group
        id="radio-mode"
        v-model="mode"
        name="radio-mode"
        class="m-3 p-3"
        >
        <b-form-radio value="empty">empty room</b-form-radio>
        <b-form-radio value="fork" disabled>fork current room</b-form-radio>
        <!-- <b-form-radio value="third" disabled>This one is Disabled</b-form-radio>
        <b-form-radio :value="{ fourth: 4 }">This is the 4th radio</b-form-radio> -->
      </b-form-radio-group>

      <AddressInput :options="{mode: mode, toolbar: false}" class="m-3" />
    </div>
    <!-- </b-form-group> -->
    <!-- </b-dropdown-form> -->

    <!-- <b-dropdown-divider></b-dropdown-divider> -->
    <!-- <b-dropdown-item-button variant="outline-primary">New empty room</b-dropdown-item-button>
    <b-dropdown-item-button variant="primary">Fork current room</b-dropdown-item-button> -->
    <b-dropdown-divider></b-dropdown-divider>
  </b-dropdown-group>
  <b-dropdown-group id="dropdown-group-2" header="Generated roomId" class="m-3 p-3">
    <b-dropdown-item href="#" v-b-modal.modal-qrscan>from QR code</b-dropdown-item>
    <b-dropdown-item @click="randomRoom">random Id</b-dropdown-item>
    <b-dropdown-item href="#" @click="nowRoom">now (id = timestamp)</b-dropdown-item>
  </b-dropdown-group>

</b-nav-item-dropdown>

</template>

<script>


export default {
  name: 'MenuNew',
  components: {
    'AddressInput': ()=>import('@/views/AddressInput'),
  },
  data(){
    return{
      roomId: this.$random(),
      mode: 'empty'
    }
  },
  methods:{
    submit(){
      console.log('onSubmit')
    },
    randomRoom(){
      console.log('random')
      // let roomId = this.$random()
      // this.$store.commit('actor/setUser', this.user)
      // this.$connect('menu random')
      this.$openRoom({id: this.$random()})
    },
    nowRoom(){
      console.log('now')
      // let roomId = Date.now()
      this.$openRoom({id: Date.now()})
      // this.$store.commit('actor/setUser', this.user)
      // this.$connect('menu now')
    }
  },
  watch:{
    roomAddress(){
      this.$refs.newDropdown.hide()
    }
  },
  computed: {
    user() {
      return this.$store.state.actor.user
    },
    roomAddress() {
      return this.$store.state.actor.roomAddress
    },
  }
}
</script>
