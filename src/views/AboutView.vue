<template>
  <b-container fluid class="about">
    <b-button v-if="showJumbo == false" @click="toggleJumbo" variant="outline-info" size="sm">Info</b-button>

    <b-jumbotron
    v-else
    header="Noosphere"
    header-level="4"
    lead="Noosphere is a tool to share and grab ideas all around the world.">

    <small>
      <i>
        <p>wikipedia fr: <a href="https://fr.wikipedia.org/wiki/Noosph%C3%A8re" target="_blank">
          La noosphère, selon la pensée de Vladimir Vernadsky1 et Pierre Teilhard de Chardin, désigne la « sphère de la pensée humaine ».
          Dans la théorie originelle de Vernadsky, la noosphère est la troisième d'une succession de phases de développement de la Terre,
          après la géosphère (matière inanimée) et la biosphère (la vie biologique).
          Tout comme l'émergence de la vie a fondamentalement transformé la géosphère, l'émergence de la cognition humaine transforme fondamentalement la biosphère.
        </a></p>
        <p>wikipedia en: <a href="https://en.wikipedia.org/wiki/Noosphere" target="_blank">
          The noosphere (alternate spelling noösphere) is a philosophical concept developed and popularized by the Russian-Ukrainian Soviet biogeochemist Vladimir Vernadsky,
          and the French philosopher and Jesuit priest Pierre Teilhard de Chardin.
          Vernadsky defined the noosphere as the new state of the biosphere and described as the planetary "sphere of reason".
          The noosphere represents the highest stage of biospheric development, its defining factor being the development of humankind's rational activities.</a></p>
        </i>  </small>

        <!-- <b-button variant="info" class="m-3"  size="sm" href="/user">Choose a user name</b-button>
        <b-button variant="info" class="m-3" size="sm" href="/room">Open or join a room</b-button>
        <b-button variant="info" class="m-3" size="sm" href="/editor">Start</b-button> -->
        Now
        <router-link to="/user" class="m-2"><b-icon font-scale="1.5" icon="person" aria-hidden="true"></b-icon> Choose a user name</router-link><br>
        then
        <router-link to="/room" class="m-2"><b-icon font-scale="1.5" icon="list-stars" aria-hidden="true"></b-icon> Open or join a room</router-link><br>
        and
        <router-link to="/editor" class="m-2"><b-icon font-scale="1.5" icon="pen" aria-hidden="true"></b-icon> Start noosphering</router-link> !

        <!-- <hr>
        If you want to grab ideas near you and share located ones, you can activate/daesactivate your location in the
        <router-link to="/config" class="m-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon> Config</router-link> menu. -->

        <!-- <b-button variant="primary" href="/about">More Info</b-button> -->
        <b-button variant="outline-info" class="m-3" size="sm" @click="toggleJumbo">Don't show this block next time</b-button>
      </b-jumbotron>
      <hr>


      <a href="https://github.com/scenaristeur/noosphere" target="_blank">Noosphere Source Code</a>
      <hr>
      What is the Noosphere ?
      <br>
      <a href="https://fr.wikipedia.org/wiki/Noosph%C3%A8re" target="_blank">Noosphere Wikipedia FR</a> | <br>
      <a href="https://en.wikipedia.org/wiki/Noosphere" target="_blank">Noosphere Wikipedia EN</a> | <br>
    </b-container>
  </template>


  <script>

  export default {
    name: 'AboutView',
    data(){
      return{
        showJumbo: true
      }
    },
    mounted(){
      this.showJumbo = localStorage.getItem('noosphere-jumbo') || true
      //this.showJumbo = localStorage.getItem('noosphere-jumbo')
      //  this.toggleJumbo()
      console.log(this.showJumbo)
    },
    methods:{
      toggleJumbo(){
        this.showJumbo = !this.showJumbo
        localStorage.setItem('noosphere-jumbo', this.showJumbo);
      }
    }

  }
  </script>
