import { useQuery } from '@tanstack/react-query';
import { getPokemonList } from '../../services';
import { ListPokemonParams, PokemonListResponse, TransformedPokemonListResponse } from '../../types';
import { extractPokemonIdFromURL } from '../../utils';
import { pokemonImagesObject } from '../../utils/pokemonImagesObject';

const usePaginatedListPokemon = (params: ListPokemonParams,
  enabled = true) => useQuery<PokemonListResponse, Error, TransformedPokemonListResponse>({
    queryKey: ['pokemonList', params.limit, params.offset],
    queryFn: () => getPokemonList(params),
    staleTime: 60 * 1000,
    enabled,
    select: (data) => {
      const transformedData = {
        ...data,
        results: data.results.map((pokemon) => {
          const pokemonId = extractPokemonIdFromURL(pokemon.url);
          return {
            ...pokemon,
            ...pokemonImagesObject(pokemon.name, pokemonId)
          };
        })
      };
      return transformedData;
    }
  });


export { usePaginatedListPokemon };
