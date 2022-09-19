<template>
  <div class="nav-bar">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand >

          <!-- <b-col cols="auto" > -->
          <!-- <b-nav-form> -->
          <AddressInput />
          <!-- <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
          <!-- </b-nav-form> -->

          <!-- </b-col> -->

        </b-navbar-brand>



        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>



              <b-button v-b-toggle.sidebar-right size="sm">noosphere</b-button>



            <!-- <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">




            <MenuNew />


            <!-- HISTORY -->
            <b-nav-item-dropdown  v-if="user != null" id="dropdown-right" right text="hystory" variant="primary">
              <b-input-group>
                <b-input v-model="historySearch" placeholder="search" size="sm"/>
                <b-input-group-append>
                  <b-button  @click="historySearch=''" size="sm">X</b-button>

                </b-input-group-append>
              </b-input-group>


              <div v-for="(r,id) in Object.values(user.rooms)" :key="id">
                <b-dropdown-item v-if="r.roomId.toLowerCase().includes(historySearch.toLowerCase())"  href="#" @click="openRoom(r.roomId)">
                  {{r.roomId}}
                </b-dropdown-item>
              </div>
            </b-nav-item-dropdown>

            <!-- UPLOADS -->

            <!-- {{uploads}} -->

            <b-nav-item-dropdown  v-if="user != null" id="dropdown-right" right text="uploads" variant="primary">

              <b-dropdown-item>
                Config Web3 Storage
              </b-dropdown-item>

              <b-dropdown-item>
                <b-link href="https://web3.storage/account/" class="nav-item mx-2" target="_blank">All my Web3 Storage pinned files</b-link>
              </b-dropdown-item>


              <b-input-group>
                <b-input v-model="uploadsSearch" placeholder="search" size="sm"/>
                <b-input-group-append>
                  <b-button  @click="uploadsSearch=''" size="sm">X</b-button>

                </b-input-group-append>
              </b-input-group>


              <div v-for="(r,id) in uploads" :key="id">
                <b-dropdown-item v-if="r.name.toLowerCase().includes(uploadsSearch.toLowerCase())"  href="#" @click="openRoomWeb3(r)">
                  {{r.name}}
                </b-dropdown-item>
              </div>
            </b-nav-item-dropdown>

            <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
          <template #button-content>
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
<QrModal />

<b-sidebar id="sidebar-right" title="Sidebar" right shadow width="100%">
  <!-- <div class="px-3 py-2"> -->
    <!-- <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p> -->

    <GraphView style="inherit"/>

    <!-- <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img> -->
  <!-- </div> -->
</b-sidebar>

</div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
    'AddressInput': ()=>import('@/views/AddressInput'),
    'MenuNew': ()=>import('@/views/MenuNew'),
    'QrModal': ()=>import('@/views/QrModal'),
    'GraphView': ()=>import('@/views/GraphView'),
    // 'UserView': ()=>import('@/views/UserView'),
  },
  data(){
    return{
      historySearch: "",
      uploadsSearch: ""
    }
  },
  methods:{
    openRoom(r){
      console.log(r)
      let user = this.user
      user.roomId = r
      this.$store.commit('core/setUser', user)
      this.$openRoom()
    },
    openRoomWeb3(r){
      //temporary hack : must save roomId properly in web3 according to separator, prefix and web3 meta data

      let roomId = r.name.substring(r.name.indexOf("_") + 1)
      let user = this.user
      user.roomId = roomId
      this.$store.commit('core/setUser', user)
      this.$openRoom()


    }
  },
  computed:{
    user(){
      return this.$store.state.core.user
    },
    uploads(){
      return this.$store.state.core.uploads
    }
  }


}
</script>

<style lang="css" scoped>
.nav-bar {

}
</style>
