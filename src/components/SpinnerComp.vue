<template>
  <!-- <div> Spinner -->
  <span>
    <span id="spinner" v-if="pendingTasks.length > 0">
      <!-- Loading, {{spinner}} -->
      <b-button variant="warning" disabled>
        <b-spinner small type="grow"></b-spinner>
        <b-badge v-b-modal.modal-tasks variant="primary">{{pendingTasks.length}}</b-badge>
           {{ pendingTasks}}
      </b-button>


    </span>
    <b-modal id="modal-tasks" title="Tasks">
      {{pendingTasks.length}} tasks pending <b-button @click="reset" variant="outline-warning" size="sm">reset</b-button>
      <ul>
        <li v-for="w in pendingTasks" :key="w.id"> {{w.id}}</li>
      </ul>
    </b-modal>
  </span>
</template>

<script>
export default {
  name: "SpinnerComp",
  methods: {
    reset(){
      this.$store.commit('util/resetSpinner')
    }
  },
  computed: {
    pendingTasks() {
      return this.$store.state.util.pendingTasks
    },
  }
}
</script>

<style>
#spinner{
  position: absolute;
  bottom: 0px;
  z-index: 10
}
</style>
