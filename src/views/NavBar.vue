<template>
  <div class="nav-bar">
    <b-navbar toggleable="lg" type="dark" :variant="status== 'connected' ? 'info' : 'warning'" fixed="top">
      <b-navbar-brand class="mr-1">
        <AddressInput />
        <div  v-if="status != 'connected'">
          websocket <b>{{ status}}</b>
        </div>
      </b-navbar-brand>


    <ToolBar/>

      <!-- <b-button v-b-toggle.sidebar-manager size="sm">Manager</b-button> -->



      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/"><b-icon icon="house-fill" aria-hidden="true"></b-icon></b-nav-item>
          <MenuNew />
          <b-nav-item to="/profile">profile <b-icon icon="person" aria-hidden="true"></b-icon></b-nav-item>
          <!-- <b-nav-item to="/config">config <b-icon icon="gear" aria-hidden="true"></b-icon></b-nav-item> -->
          <b-nav-item to="/graph">network</b-nav-item>

          <b-nav-item-dropdown text="more" right>
            <b-dropdown-item to="/about">What is Noosphere<b-icon icon="question" aria-hidden="true"></b-icon></b-dropdown-item>
            <b-dropdown-item href="https://matrix.to/#/#noosphere:matrix.org" target="_blank"> Chat about Noosphere <b-icon icon="chat" aria-hidden="true"></b-icon> </b-dropdown-item>
            <b-dropdown-item href="#">
              <i><small>
                version: all rooms share
              </small></i>
            </b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <QrModal />


  </div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
    'AddressInput': ()=>import('@/views/AddressInput'),
    'MenuNew': ()=>import('@/views/MenuNew'),
    'QrModal': ()=>import('@/views/QrModal'),
    'ToolBar': ()=>import('@/views/ToolBar'),


  },
  computed:{
    user(){
      return this.$store.state.actor.user
    },
    status(){
      return this.$store.state.y.status
    }
  }
}
</script>
