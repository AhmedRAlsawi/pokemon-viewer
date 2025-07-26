import { useInfiniteQuery } from '@tanstack/react-query';
import { getPokemonList } from '../../services';
import {
  PokemonListResponse,
  TransformedPokemonListResponse
} from '../../types';
import { extractPokemonIdFromURL } from '../../utils';
import { pokemonImagesObject } from '../../utils/pokemonImagesObject';

export const useInfiniteListPokemon = (limit = 20,
  enabled = true) =>
  useInfiniteQuery<PokemonListResponse, Error, TransformedPokemonListResponse>({
    queryKey: ['pokemonListInfinite'],
    initialPageParam: 0,
    enabled,
    queryFn: async ({ pageParam = 0 }) => {
      return getPokemonList({ limit, offset: Number(pageParam) });
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const nextOffset = new URL(lastPage.next).searchParams.get('offset');
      return nextOffset ? parseInt(nextOffset) : undefined;
    },
    select: (data) => {
      const allResults = data.pages.flatMap((page) =>
        page.results.map((pokemon) => {
          const id = extractPokemonIdFromURL(pokemon.url);
          return {
            ...pokemon,
            ...pokemonImagesObject(pokemon.name, id)
          };
        })
      );

      return {
        count: data.pages[0].count,
        next: data.pages[data.pages.length - 1].next,
        previous: data.pages[data.pages.length - 1].previous,
        results: allResults,
      };
    },
  });
