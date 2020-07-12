<template>
  <div class="listing">
    <div class="container">
      <nav class="top-menu">
        <fa :icon="fas.faArrowLeft" />
        <fa :icon="fas.faBars" />
      </nav>
      <div class="floating-settings"><fa :icon="fas.faSlidersH" /></div>
      <h1 class="h1 home">Pokedex</h1>
      <div v-if="pokemons.results" class="row">
        <div
          v-for="pokemon in pokemons.results"
          :key="pokemon.id"
          class="col-6"
        >
          <nuxt-link :to="'pokemon/' + pokemon.name"
            ><Pokemon :pokemon="pokemon"
          /></nuxt-link>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { getPokemons } from '@/services/pokeApi.js'
import Pokemon from '@/components/Pokemon.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Listing',
  components: {
    Pokemon,
    Pagination,
  },
  data() {
    return {
      pokemons: [],
    }
  },
  computed: {
    fas() {
      return fas
    },
  },
  watch: {
    '$store.state.pagination.currentPage'(newCount, oldCount) {
      this.getDataFromApi(newCount)
    },
  },
  created() {
    this.getDataFromApi(1)
  },
  methods: {
    getDataFromApi(offset) {
      getPokemons((offset - 1) * 10).then((pokemons) => {
        this.pokemons = pokemons
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.h1 {
  margin-bottom: 1.25rem;
}
.floating-settings {
  position: fixed;
  bottom: 4.25rem;
  right: 1.25rem;
  padding: 10px;
  background-color: #6b79d9;
  color: #fff;
  border-radius: 100%;
}
</style>
