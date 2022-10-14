<template>
  <b-container fluid class="room-history" v-if="user != null">

    <b-col lg="6" class="my-1">
      <b-form-group
      label="Filter"
      label-for="filter-input"
      label-cols-sm="3"
      label-align-sm="right"
      label-size="sm"
      class="mb-0"
      >
      <b-input-group size="sm">
        <b-form-input
        id="filter-input"
        v-model="filter"
        type="search"
        placeholder="Find in uploads"
        ></b-form-input>

        <b-input-group-append>
          <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </b-col>

  <b-table
  small
  selectable
  select-mode="single"
  responsive="sm"
  hover
  caption-top
  table-variant="info"
  :filter="filter"
  sort-by.sync="date"
  :fields="fields"
  @row-selected="onRowSelected"
  class="table"
  :items="Object.values(uploads)">



  <!-- <template #cell(date)="data">
    {{new Date(data.item.date).toLocaleString()}}
  </template> -->
  <template #cell(delete)="data">
    <!-- {{data}} -->
    <div style="float:right">
      <b-button size="sm" @click="trash(data.item.roomId)" variant="outline-info">
        <b-icon icon="trash" variant="danger" aria-hidden="true"></b-icon>
      </b-button>
    </div>
  </template>

  <!-- <template #cell(roomId)="data">
  # TODO
  _rowVariant when = user.roomId
</template> -->
<!--    @filtered="onFiltered"
filter-included-fields="['roomId']"-->
<template #table-caption>Web3 uploads
  <div v-if="uploads == undefined || uploads.length == 0">
    see <router-link to="/config" class="nav-item mx-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon>Web3 Storage Config </router-link>
  </div>
  <div v-else>
    <b-link href="https://web3.storage/account/" class="nav-item mx-2" target="_blank">All my Web3 Storage pinned files</b-link>
    <b-input size="sm" placeholder="cid to open" v-model="cidToOpen" @change="openCid" @enter="openCid" />
  </div>

</template>
</b-table>
</b-container>
</template>

<script>
export default {
  name: 'Web3Uploads',
  data(){
    return{
      filter: null,
      fields: [
        {
          key: 'name',
          label: 'room',
          sortable: true
        },
        {
          key: 'updated',
          label: 'date',
          formatter: value => {
             return this.$secondsToHms((new Date()-new Date(value))/1000) //value.charAt(0).toUpperCase()
           },
          sortable: true
        },
        //   {key: 'delete',
        //   label:'delete',
        //   headerAbbr: 'delete',
        //   headerTitle: 'delete from history'
        // }
      ],
      cidToOpen: null
    }
  },
  methods: {
    onRowSelected(r){
      this.$web3Load(r[0].cid)
      this.$emit('hide')
      // if(r[0]!= undefined){
      //   this.user.roomId = r[0].roomId
      //   this.$openRoom()
      // }
    },
    openCid(){
      this.$web3Load(this.cidToOpen)
    },
    // trash(roomId){
    //   console.log(roomId)
    //   this.$store.commit('actor/removeRoomIdFromHistory', roomId)
    //   this.$forceUpdate()
    //   this.$userChanged()
    // }
  },
  computed: {
    user() {
      return this.$store.state.noosphere.localUser
    },
    uploads() {
      return this.$store.state.web3.uploads
    },
    web3Token(){
      return this.$store.state.web3.token
    }
  }

}
</script>

<style lang="css" scoped>
.room-history {

}
.table{
  max-height:"200px"
}
</style>
