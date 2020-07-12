<template>
  <div
    v-if="Pokemon.types"
    :class="'single' + ' ' + Pokemon.types[0].type.name"
  >
    <header>
      <div class="type">
        <nav class="top-menu">
          <nuxt-link to="/"><fa :icon="fas.faArrowLeft" /></nuxt-link>
          <fa :icon="fas.faHeart" />
        </nav>
        <h1 class="h1">{{ Pokemon.name }}</h1>
        <div class="type-id-container">
          <ul class="types">
            <li v-for="(type, index) in Pokemon.types" :key="index">
              {{ type.type.name }}
            </li>
          </ul>
          <span class="id">#{{ Pokemon.id }}</span>
        </div>
        <div class="text-center">
          <img
            :src="Pokemon.sprites.front_default"
            alt="front face of pokemon"
          />
        </div>
      </div>
    </header>
    <div class="info">
      <nav>
        <ul>
          <li class="nav-item">
            <a
              :class="{ 'nav-link': true, active: actualOnglet == 'About' }"
              href="#"
              data-target="About"
              @click.prevent="changeOnglet"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              :class="{ 'nav-link': true, active: actualOnglet == 'baseStats' }"
              href="#"
              data-target="baseStats"
              role="tab"
              @click.prevent="changeOnglet"
              >Base Stats</a
            >
          </li>
          <li class="nav-item">
            <a
              :class="{ 'nav-link': true, active: actualOnglet == 'Evolution' }"
              href="#"
              data-target="Evolution"
              role="tab"
              @click.prevent="changeOnglet"
              >Evolution</a
            >
          </li>
          <li class="nav-item">
            <a
              :class="{ 'nav-link': true, active: actualOnglet == 'Moves' }"
              href="#"
              data-target="Moves"
              role="tab"
              @click.prevent="changeOnglet"
              >Moves</a
            >
          </li>
        </ul>
      </nav>
      <keep-alive>
        <component :is="actualOnglet" :pokemon="Pokemon"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { getPokemon } from '@/services/pokeApi.js'

import About from '@/components/About.vue'
import BaseStats from '@/components/BaseStats.vue'
import Evolution from '@/components/Evolution.vue'
import Moves from '@/components/Moves.vue'

export default {
  name: 'Pokemon',
  components: {
    About,
    BaseStats,
    Evolution,
    Moves,
  },
  asyncData() {
    return {
      Pokemon: {},
    }
  },
  data() {
    return {
      actualOnglet: 'About',
    }
  },
  computed: {
    fas() {
      return fas
    },
  },
  created() {
    this.getFullPokemon()
  },
  methods: {
    getFullPokemon() {
      getPokemon(
        `http://pokeapi.co/api/v2/pokemon/${this.$route.params.name}`
      ).then((pokemon) => {
        this.Pokemon = pokemon
      })
      // .catch((err) => console.error(err))
    },
    changeOnglet(event) {
      this.actualOnglet = event.target.attributes['data-target'].value
    },
  },
}
</script>
<style lang="scss" scoped>
.top-menu svg {
  color: #ffffff;
}
.h1 {
  color: #ffffff;
  margin-bottom: 0.75rem;
}
ul.types {
  margin-left: 1.5rem;
}
.type-id-container {
  display: flex;
  justify-content: space-between;
}
ul.types > li {
  color: #ffffff;
  display: inline-block;
  background-color: #ffffff50;
  padding: 2px 7px;
  border-radius: 0.75rem;
  margin-bottom: 0.25rem;
  margin-right: 0.5rem;
}
span.id {
  margin-right: 1.5rem;
  color: #ffffff;
}
img {
  height: 150px;
  margin-bottom: -3rem;
  z-index: 10;
  position: relative;
}
.single {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.single header {
  flex: 0 1 auto;
}
.info {
  flex: 1 1 auto;
  background-color: #ffffff;
  height: 100%;
  border-radius: 2rem 2rem 0 0;
  padding-top: 2rem;
}

nav ul {
  display: flex;
  justify-content: center;
}
.nav-link {
  text-transform: capitalize;
  margin: 1rem;
  color: #1d1d1d;
  &.active::after {
    content: '';
    display: block;
    height: 2px;
    width: 3rem;
    background-color: #1d1d1d;
    margin: 0.5rem 0 0 0.8rem;
  }
}
</style>
