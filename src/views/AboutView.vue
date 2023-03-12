<template>
  <b-container fluid class="about">
    <b-button v-if="showJumbo == false" @click="toggleJumbo" variant="outline-info" size="sm">Info</b-button>

    <b-jumbotron
    v-else
    header="Noosphere"
    header-level="4"
    lead="Noosphere is a tool to share and grab ideas all around the world."
    >
    <div class="p-3 mb-2 bg-dark text-white">
      <small>
        <i>
          <p>wikipedia fr: <a href="https://fr.wikipedia.org/wiki/Noosph%C3%A8re" target="_blank">
            La noosphère, selon la pensée de Vladimir Vernadsky et Pierre Teilhard de Chardin, désigne la « sphère de la pensée humaine ».
            Dans la théorie originelle de Vernadsky, la noosphère est la troisième d'une succession de phases de développement de la Terre,
            après la géosphère (matière inanimée) et la biosphère (la vie biologique).
            Tout comme l'émergence de la vie a fondamentalement transformé la géosphère, l'émergence de la cognition humaine transforme fondamentalement la biosphère.
          </a>
          <br>
          -> <a href="https://fr.wikipedia.org/wiki/Noosph%C3%A8re" target="_blank">L'article Noosphere sur Wikipedia fr</a>

        </p>
        <p>wikipedia en: <a href="https://en.wikipedia.org/wiki/Noosphere" target="_blank">
          The noosphere (alternate spelling noösphere) is a philosophical concept developed and popularized by the Russian-Ukrainian Soviet biogeochemist Vladimir Vernadsky,
          and the French philosopher and Jesuit priest Pierre Teilhard de Chardin.
          Vernadsky defined the noosphere as the new state of the biosphere and described as the planetary "sphere of reason".
          The noosphere represents the highest stage of biospheric development, its defining factor being the development of humankind's rational activities.</a>
          <br>
          -> <a href="https://en.wikipedia.org/wiki/Noosphere" target="_blank">Noosphere article on Wikipedia en</a>
        </p>
        <p>
          PHILOS. [Chez Teilhard de Chardin] ,,Couche pensante (humaine) de la Terre, constituant un règne nouveau, un tout spécifique et organique`` (C. Cuénot, Nouv. Lex. Teilhard de Chardin, Paris, éd. du Seuil, 1968). Malgré ses liaisons organiques, (...) la biosphère ne formait encore qu'un assemblage de lignes divergentes, libres aux extrémités. Sous l'effet de la Réflexion (...) les chaînes se ferment; et la Noosphère tend à se constituer en un seul système clos, −où chaque élément pour soi voit, sent, désire, souffre les mêmes choses que tous les autres à la fois. Une collectivité harmonisée des consciences, équivalente à une sorte de super-conscience (Teilhard de Ch.,Phénom. hum.,1955, p.279).
REM.
Noosphérique, adj.Relatif à la noosphère. Nous n'avons encore aucune idée de la grandeur possible des effets «noosphériques». La résonance de vibrations humaines par millions! Toute une nappe de conscience pressant sur l'Avenir en même temps! Le produit collectif et additif d'un million d'années de Pensée! (Teilhard de Ch.,Phénom. hum.,1955p.318).
Prononc.: [nɔ ɔsfε:ʀ]. Étymol. et Hist. 1925 (Teilhard de Ch., Vision du Passé, L'hominisation, [éd. du Seuil, t.3, 1957] p.89 d'apr. M.-C. Deckers, Le Vocab. de T. de Chardin, p.196). Formé du gr. ν ο ́ ο ς forme non contracte de ν ο υ ̃ ς «intelligence, esprit» et de sphère*. Fréq. abs. littér.: 42.
-> <a href="https://www.cnrtl.fr/definition/noosph%C3%A8re#:~:text=f%C3%A9m.-,NOOSPH%C3%88RE%2C%20subst.,sp%C3%A9cifique%20et%20organique%60%60%20(C." target="_blank">cnrtl</a>       


</p>
      </i>  
    </small>

      <!-- <b-button variant="info" class="m-3"  size="sm" href="/user">Choose a user name</b-button>
      <b-button variant="info" class="m-3" size="sm" href="/room">Open or join a room</b-button>
      <b-button variant="info" class="m-3" size="sm" href="/editor">Start</b-button> -->
      Now
      <router-link to="/profile" class="m-2"><b-icon font-scale="1.5" icon="person" aria-hidden="true"></b-icon> Choose a user name</router-link><br>
      then
      <router-link to="/room" class="m-2"><b-icon font-scale="1.5" icon="list-stars" aria-hidden="true"></b-icon> Open or join a room and <b-icon font-scale="1.5" icon="pen" aria-hidden="true"></b-icon> Start noosphering</router-link><br>
      <!-- and
      <router-link to="/editor" class="m-2"><b-icon font-scale="1.5" icon="pen" aria-hidden="true"></b-icon> Start noosphering</router-link> ! -->

      <!-- <hr>
      If you want to grab ideas near you and share located ones, you can activate/daesactivate your location in the
      <router-link to="/config" class="m-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon> Config</router-link> menu. -->

      <!-- <b-button variant="primary" href="/about">More Info</b-button> -->
      <!-- <b-button variant="outline-info" class="m-3" size="sm" @click="toggleJumbo">Don't show this block next time</b-button> -->
    </div>
  </b-jumbotron>
  <hr>

  <!-- <router-link to="/config" class="nav-item mx-2"><b-icon font-scale="1.5" icon="gear" aria-hidden="true"></b-icon> Config to get more config options</router-link> -->

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
