<template>
  <b-nav-item-dropdown text="new" right ref="newDropdown">


    <!-- <b-dropdown-form> -->
    <!-- <b-form-group label="RoomID" label-for="dropdown-form-roomID" @submit.stop.prevent> -->
    <!-- <b-form-input
    id="dropdown-form-roomID"
    size="sm"
    v-model="roomID"
    placeholder="roomID"
    ></b-form-input> -->
    <b-dropdown-group id="dropdown-group-1" header="Specify roomID" class="m-3" >
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
  <b-dropdown-group id="dropdown-group-2" header="Generated roomID" class="m-3 p-3">
    <b-dropdown-item href="#" v-b-modal.modal-qrscan>from QR code</b-dropdown-item>
    <b-dropdown-item @click="randomRoom">random ID</b-dropdown-item>
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
      roomID: this.$random(),
      mode: 'empty'
    }
  },
  methods:{
    submit(){
      console.log('onSubmit')
    },
    randomRoom(){
      console.log('random')
      // let roomID = this.$random()
      // this.$store.commit('actor/setUser', this.user)
      // this.$connect('menu random')
      this.$openRoom({id: this.$random()})
    },
    nowRoom(){
      console.log('now')
      // let roomID = Date.now()
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
