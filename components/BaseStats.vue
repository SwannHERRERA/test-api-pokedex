<template>
  <div class="container">
    <table class="table">
      <tr v-for="(stat, index) in pokemon.stats" :key="index">
        <td>{{ stat.stat.name }}</td>
        <td>{{ stat.base_stat }}</td>
        <td>
          <progress
            id="file"
            max="100"
            :class="{ low: stat.base_stat < 60, high: stat.base_stat >= 60 }"
            :value="stat.base_stat"
          ></progress>
        </td>
      </tr>
    </table>
    <h2>Type defenses</h2>
    <p>The effective of each type on {{ pokemon.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
progress.low {
  color: salmon;
}
progress.high {
  color: lightgreen;
}
</style>
