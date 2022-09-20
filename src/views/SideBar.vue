<template>
  <b-sidebar id="sidebar-right" ref="sidebar" title="Noosphere" right shadow width="100%">
    <b-tabs card content-class="mt-3">

      <b-tab active no-body >
        <template #title>
          <b-icon font-scale="1.5" icon="list-stars" aria-hidden="true"></b-icon>
        </template>
        <!-- <b-card-text>My history</b-card-text> -->
        <RoomHistory @hide="hide" />
      </b-tab>

      <b-tab no-body >
        <template #title>
          <b-icon font-scale="1.5" icon="cloud-upload" aria-hidden="true"></b-icon>
        </template>

        <!-- <b-card-text>the web 3 storage</b-card-text> -->
        <Web3Uploads @hide="hide" />
      </b-tab>

      <b-tab no-body >
        <template #title>
          <b-icon font-scale="1.5" icon="people-fill" aria-hidden="true"></b-icon>
        </template>

        <!-- <b-card-text>The users</b-card-text> -->
        <UsersView @hide="hide" />
      </b-tab>

      <b-tab>
        <template #title>
          <b-icon font-scale="1.5" icon="star" aria-hidden="true"></b-icon>
        </template>
        <b-card-text>My favorites rooms</b-card-text>
      </b-tab>

      <b-tab title="S">
        <b-card-text>The solid part </b-card-text>
      </b-tab>

      <template #tabs-end>
        <!-- <b-nav-item href="#" role="presentation" @click="() => {}">Another tab</b-nav-item>
        <li role="presentation" class="nav-item align-self-center">Plain text</li> -->
        <b-nav-item to="/graph" class="nav-item mx-2">net</b-nav-item>
      </template>

    </b-tabs>
  </b-sidebar>
</template>

<script>
export default {
  name: 'SideBar',
  components: {
    'UsersView': ()=>import('@/views/UsersView'),
    'RoomHistory': ()=>import('@/views/RoomHistory'),
    'Web3Uploads': ()=>import('@/views/Web3Uploads'),
    // 'QrView': ()=>import('@/views/QrView'),
    // 'UserView': ()=>import('@/views/UserView'),
  },
  methods:{
    hide(){
    this.$refs.sidebar.hide()
    }
  }


}
</script>

<style lang="css" scoped>
.tabs-view {

}
</style>
