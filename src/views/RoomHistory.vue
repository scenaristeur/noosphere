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
        placeholder="Find in Room History"
        ></b-form-input>

        <b-input-group-append>
          <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </b-col>
  {{Object.values(user.rooms).length}}
  <b-table
  small
  selectable
  class="table"
  max-height="400px"
  select-mode="single"
  responsive="sm"
  hover
  caption-top
  table-variant="info"
  :filter="filter"
  sort-by.sync="date"
  sort-direction="desc"
  :fields="fields"
  @row-selected="onRowSelected"
  :items="Object.values(user.rooms).reverse()">

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
<!-- <template #table-caption>My Room History</template> -->
</b-table>
</b-container>
</template>

<script>
export default {
  name: 'RoomHistory',
  data(){
    return{
      filter: null,
      fields: [
        {
          key: 'roomId',
          label: 'room',
          sortable: true
        },
        {
          key: 'date',
          label: 'date',
          // formatter: this.formatter,
          formatter: value => {
             return this.$secondsToHms((new Date()-value)/1000) //value.charAt(0).toUpperCase()
           },
          sortable: true
        },
        {key: 'delete',
        label:'delete',
        headerAbbr: 'delete',
        headerTitle: 'delete from history'
      }
    ],
  }
},
methods: {
  // formatter(value){
  //   return this.$secondsToHms((new Date()-value)/1000)
  // },
  onRowSelected(r){
    if(r[0]!= undefined){
      this.user.roomId = r[0].roomId
      this.$openRoom()
      this.$emit('hide')
      // v-b-toggle.sidebar-right
      // this.$bvSideBar.hide('sidebar-right')
    }
  },
  trash(roomId){
    console.log(roomId)
    this.$store.commit('core/removeRoomIdFromHistory', roomId)
    this.$forceUpdate()
    this.$userChanged()
  }
},
watch:{
  historyUpdated(){
    this.$forceUpdate()
  }
},
computed: {
  user: {
    cache: false,
    get() {
      return this.$store.state.core.user;
    },
  },
  historyUpdated() {
    return this.$store.state.core.historyUpdated
  }
}

}
</script>

<style lang="css" scoped>
.room-history {

}
.table{
  max-height:"400px"
}
</style>
