<template>
  <b-container class="user-profile text-light">
    <!-- Profile -->



    <!-- <b-button @click="userChanged" variant="info" size="sm">Update user</b-button> -->


    <!-- title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top -->


    <b-card
    bg-variant="info" text-variant="white" header="Profile"
    class="text-center mb-2"
    tag="article"
    style="max-width: 20rem;"
    >
    <b-card-title>
      username<b-input v-model="user.name" placeholder="username" />
    </b-card-title>
    <b-card-text>
      prefered color
      <b-input v-model="user.color" type="color" />
      <!-- Some quick example text to build on the card title and make up the bulk of the card's content. -->
    </b-card-text>

    <b-button @click="save" variant="primary">Save</b-button>
  </b-card>

  {{ user }}
  <br>
  <b-button @click="randomUser" variant="outline-info" size="sm">Random user</b-button>
  <b-button variant="outline-primary" disabled size="sm">export this identity</b-button>
  <b-button variant="outline-primary" disabled size="sm">remove from this device</b-button>

</b-container>
</template>

<script>
export default {
  name: 'UserProfile',
  methods:{
    async randomUser(){
      this.currentUser = await this.$randomUser()
      console.log(this.currentUser)
      this.$store.commit('core/setUser', this.currentUser)
      // this.$userChanged()
      // this.userChanged()
    },
    save(){
      this.$store.commit('core/setUser', this.user)
      this.$userChanged()
        this.$router.push('/')
    }
  },
  computed:{
    user(){
      return this.$store.state.core.user
    },
    // uploads(){
    //   return this.$store.state.core.uploads
    // }
  }


}
</script>

<style lang="css" scoped>
.user-profile {

}
</style>
