<template>
  <div class="container">
    <table class="table">
      <tr>
        <td>Species</td>
        <td>{{ pokemon.species.name }}</td>
      </tr>
      <tr>
        <td>Height</td>
        <td>{{ pokemon.height }}</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>{{ pokemon.weight }}</td>
      </tr>
      <tr>
        <td>Ablilites</td>
        <td></td>
      </tr>
    </table>
    <h2>Breading</h2>
    <table class="table">
      <tr>
        <td>Gender</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Egg Group</td>
        <td></td>
      </tr>
      <tr>
        <td>Egg cycle</td>
        <td></td>
      </tr>
    </table>
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
