<template>
  <div :class="`card ${Pokemon.types ? Pokemon.types[0].type.name : ''}`">
    <div class="row">
      <div class="col-6">
        <p class="name">{{ pokemon.name }}</p>
        <div v-for="type in Pokemon.types" :key="type.id" class="type">
          {{ type.type.name }}
        </div>
      </div>
      <div v-if="Pokemon.sprites" class="col-6">
        <img
          :src="Pokemon.sprites.front_default"
          alt="Image pokemon"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { getPokemon } from '@/services/pokeApi.js'
export default Vue.extend({
  name: 'Pokemon',
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      Pokemon: {},
    }
  },
  created() {
    this.getFullPokemon()
  },
  updated() {
    this.getFullPokemon()
  },
  methods: {
    getFullPokemon() {
      getPokemon(this.pokemon.url).then((pokemon) => {
        this.Pokemon = pokemon
      })
      // .catch((err) => console.error(err))
    },
  },
})
</script>
<style lang="scss" scoped>
.card {
  padding: 0.75rem;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  min-height: 105px;
}
.type {
  display: inline-block;
  background-color: #ffffff50;
  padding: 2px 7px;
  border-radius: 0.75rem;
  color: #ffffff;
  margin-bottom: 0.25rem;
}
.name {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>
