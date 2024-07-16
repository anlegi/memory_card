export async function fetchPokemons(count) {
  const randomIds = getRandomPokemonIds(count, 898); // Adjust the maxId based on the total number of Pokémon available
  const promises = randomIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json()));
  return Promise.all(promises);
}
//function to generate random Pokémon IDs
function getRandomPokemonIds(count, maxId) {
  const ids = new Set();
  while (ids.size < count) {
    const randomId = Math.floor(Math.random() * maxId) + 1;
    ids.add(randomId);
  }
  return Array.from(ids);
}
