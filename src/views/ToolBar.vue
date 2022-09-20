<template>
  <div class="tool-bar">

    <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
      <b-button-group class="mx-1">
        <!-- <b-button>New</b-button>
        <b-button>Edit</b-button>
        <b-button>Undo</b-button> -->

        <b-button size="sm"><b-icon v-b-modal.modal-share font-scale="1.5" icon="share" aria-hidden="true"></b-icon></b-button>
        <b-button size="sm"><b-icon v-b-modal.modal-pin font-scale="1.5" icon="pin" aria-hidden="true"></b-icon></b-button>
        <b-button size="sm" @click="fork" disabled>fork</b-button>
        <b-button size="sm" @click="getLocation" disabled><b-icon icon="geo-alt" aria-hidden="true"></b-icon></b-button>

      </b-button-group>
      <!-- <b-dropdown class="mx-1" right text="Addons">
      <b-dropdown-item @click="getLocation">

  </b-dropdown-item>
  <b-dropdown-item>Wikidata Tags</b-dropdown-item>
  <b-dropdown-item>Item 3</b-dropdown-item>
</b-dropdown>
<b-button-group class="mx-1">
<b-button>Save</b-button>
<b-button>Cancel</b-button>
</b-button-group> -->
</b-button-toolbar>

{{ location}}

<Web3Modal />
<ShareModal />

</div>
</template>

<script>


export default {
  name: 'ToolBar',
  components: {
    'Web3Modal': ()=>import('@/views/Web3Modal'),
    'ShareModal': ()=>import('@/views/ShareModal'),
  },
  data(){
    return{
      location: null,
    }
  },
  methods: {
    getLocation(){
      console.log('getting location')
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.location = "Geolocation is not supported by this browser.";
        console.log("location", this.location)
      }
    },
    showPosition(position) {
      this.location = "Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude;
      console.log("location", this.location)
    },

    fork(){
      alert('not implemented yet, see More menu to help !')
    }
  },
}
</script>
