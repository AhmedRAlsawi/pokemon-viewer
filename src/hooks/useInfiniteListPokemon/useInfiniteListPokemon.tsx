import { useInfiniteQuery } from '@tanstack/react-query';
import { getPokemonList } from '../../services';
import { extractPokemonIdFromURL } from '../../utils';
import { PokemonListResponse, PokemonWithImage } from '../../types';
import { pokemonImagesObject } from '../../utils/pokemonImagesObject';

const useInfiniteListPokemon = (limit: number = 20) =>
  // to be fixed as the return transformed data is wrong
  useInfiniteQuery<PokemonListResponse, Error, PokemonWithImage[]>({
    queryKey: ['pokemonListInfinite'],
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        return Number(url.searchParams.get('offset'));
      }
      return undefined;
    },
    initialPageParam: 0,
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getPokemonList({ limit, offset: Number(pageParam) });
      return response;
    },
    select: (data) =>
      data.pages.flatMap((page) =>
        page.results.map((pokemon) => {
          const pokemonId = extractPokemonIdFromURL(pokemon.url);
          return {
            ...pokemon,
            ...pokemonImagesObject(pokemon.name, pokemonId)
          };
        })
      ),
  });

export { useInfiniteListPokemon };
