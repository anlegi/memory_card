export async function fetchPokemons(count) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
  const data = await response.json()
  return data.results
}
