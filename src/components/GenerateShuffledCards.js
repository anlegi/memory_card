import { fetchPokemons } from './FetchPokemon';

export async function generateShuffledCards(count) {
  const pokemons = await fetchPokemons(count);
  const cards = pokemons.map(pokemon => ({
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[pokemon.url.split('/').length - 2]}.png`
  }));
  return cards.sort(() => Math.random() - 0.5);
}
