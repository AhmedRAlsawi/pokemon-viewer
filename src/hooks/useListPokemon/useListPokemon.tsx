import { useQuery } from '@tanstack/react-query';
import { getPokemonList } from '../../services';
import { ListPokemonParams, PokemonListResponse, PokemonWithImage } from '../../types';
import { extractPokemonIdFromURL } from '../../utils';

const useListPokemon = ({ limit, offset }: ListPokemonParams) => useQuery<PokemonListResponse, Error, PokemonWithImage[]>({
  queryKey: ['pokemonList', limit, offset],
  queryFn: () => getPokemonList({ limit, offset }),
  select: (data) => {
    return data.results.map((pokemon) => {
      const pokemonId = extractPokemonIdFromURL(pokemon.url);
      return {
        ...pokemon,
        id: pokemonId,
        images: {
          pngImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
          gifImage: `https://play.pokemonshowdown.com/sprites/ani/${pokemon.name}.gif`,
          svgImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
        }
      };
    });
  }
});
export { useListPokemon };
