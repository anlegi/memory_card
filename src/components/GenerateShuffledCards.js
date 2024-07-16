import { fetchPokemons } from './FetchPokemon';

export async function generateShuffledCards(count) {
  const pokemons = await fetchPokemons(count);
  const cards = pokemons.map(pokemon => ({
    name: pokemon.name,
    image: pokemon.sprites.front_default // Use the correct property for the image URL
  }));
  return cards.sort(() => Math.random() - 0.5);
}
