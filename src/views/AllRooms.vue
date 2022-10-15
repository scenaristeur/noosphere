<template>
  <b-container fluid class="all-rooms">
    <!-- {{ allRooms}} -->

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
    striped
    :items="allRooms"
    ></b-table>
  </b-container>
</template>

<script>
export default {
  name: 'AllRooms',
  data(){
    return{
      filter: null,
      fields: [
        {
          key: 'roomID',
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
      ],
    }
  },
  methods: {
    onRowSelected(r){
      if(r[0]!= undefined){
        this.$openRoom({id: r[0].roomID})
        // this.$connect('room history')
        this.$emit('hide')
        // v-b-toggle.sidebar-right
        // this.$bvSideBar.hide('sidebar-right')
      }
    },
  },
  computed: {
    allRooms() {
      return this.$store.state.noosphere.allRooms
    },

  }


}
</script>

<style lang="css" scoped>
.all-rooms {

}
</style>
