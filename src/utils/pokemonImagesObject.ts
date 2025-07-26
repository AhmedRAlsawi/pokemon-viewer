import { AdditionalPokemonData } from '../types';

export const pokemonImagesObject = (
  name: string,
  pokemonId: string
): AdditionalPokemonData => ({
  id: pokemonId,
  images: {
    pngImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
    gifImage: `https://play.pokemonshowdown.com/sprites/ani/${name}.gif`,
    svgImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
  },
});
