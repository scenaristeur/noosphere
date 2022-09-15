<template>
  <div>
    <div id="graph" width="100px" ref="graph">Loading graph...</div>
    <div>
      {{users}}
      <hr>
      {{uploads}}
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GraphView',
  mounted(){
    this.$graphInit({domElement: this.$refs.graph})
    // this.users = this.$store.state.core.users
  },
  methods:{
    update(){
      if (this.graph != undefined){
        let nodes = this.nodes.map(a => {return {...a}})
        let links = this.links.map(a => {return {...a}})
        this.graph.graphData({nodes: nodes, links: links})
        console.log(this.graph.graphData())
      }
    },
    updateUsers(){
      for (const [clientID, user] of Object.entries(this.users)) {
        console.log(`${clientID}: ${user}`);
        user.id = user.clientID
        var index = this.nodes.findIndex(x => x.id==user.id);
        index === -1 ? this.nodes.push(user) : Object.assign(this.nodes[index], user)
        console.log(this.nodes)
      }
    }
  },
  watch:{
    nodes(){
      this.update()
    },
    links(){
      this.update()
    },
    graph(){
      this.update()
    },
    users(){
      this.updateUsers()

    },
    usersUpdateDate(){
      console.log(this.usersUpdateDate)
      this.updateUsers()
      this.$forceUpdate()
    }
  },
  computed: {
    nodes() {
      return this.$store.state.network.nodes
    },
    links() {
      return this.$store.state.network.links
    },
    graph() {
      return this.$store.state.network.graph
    },
    users: {
      cache: false,
      get() {
        return this.$store.state.core.users;
      },
    },
    usersUpdateDate() {
      return this.$store.state.core.usersUpdateDate
    },
    uploads() {
      return this.$store.state.core.uploads
    }
  },

}
</script>

<style lang="css" scoped>
.graph-view {

}
.node-label {
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.5);
  user-select: none;
}
</style>
