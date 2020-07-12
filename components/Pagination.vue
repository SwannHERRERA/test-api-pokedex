<template>
  <nav>
    <ul>
      <li @click="decrement()"><fa :icon="fas.faChevronLeft" /></li>
      <template v-if="$store.state.pagination.currentPage < 3">
        <li
          v-for="n in 5"
          :key="n"
          :class="{ active: n == $store.state.pagination.currentPage }"
          @click="setPage(n)"
        >
          {{ n }}
        </li>
      </template>
      <template
        v-else-if="
          $store.state.pagination.currentPage >
          $store.state.pagination.maxPage - 2
        "
      >
        <li
          v-for="n in range(
            $store.state.pagination.maxPage - 4,
            $store.state.pagination.maxPage
          )"
          :key="n"
          :class="{ active: n == $store.state.pagination.currentPage }"
          @click="setPage(n)"
        >
          {{ n }}
        </li>
      </template>
      <template v-else>
        <li
          v-for="n in range(
            $store.state.pagination.currentPage - 2,
            $store.state.pagination.currentPage + 2
          )"
          :key="n"
          :class="{ active: n == $store.state.pagination.currentPage }"
          @click="setPage(n)"
        >
          {{ n }}
        </li>
      </template>

      <li @click="increment()"><fa :icon="fas.faChevronRight" /></li>
    </ul>
  </nav>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { mapMutations } from 'vuex'

export default {
  computed: {
    fas() {
      return fas
    },
  },
  methods: {
    setPage(value) {
      this.$store.commit('pagination/setPage', value)
    },
    ...mapMutations({
      increment: 'pagination/increment',
      decrement: 'pagination/decrement',
    }),
    range: (min, max) => {
      const array = []
      let j = 0
      for (let i = min; i <= max; i += 1) {
        array[j] = i
        j += 1
      }
      return array
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 20px;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}
ul {
  display: flex;
  justify-content: space-around;
}
li {
  display: inline-block;
  color: cornflowerblue;
  border: solid 1px cornflowerblue;
  width: 100%;
  text-align: center;
  padding: 10px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
li.active {
  color: #ffffff;
  background-color: cornflowerblue;
}
li:not(:last-child) {
  border-right: none;
}
</style>
