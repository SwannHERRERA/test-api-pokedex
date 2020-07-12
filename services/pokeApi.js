const err = (err) => err
// console.error(err)
export async function getPokemons(offset) {
  const res = await fetch(
    `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
  ).catch(err)
  const pokemons = await res.json()
  return pokemons
}
export async function getPokemon(url) {
  const res = await fetch(url).catch(err)
  const pokemon = await res.json()
  return pokemon
}
