import { useQuery } from '@tanstack/react-query';
import { getPokemonDetails } from '../../services';
import {
  PokemonDetailsResponse,
  PokemonDetailsResponseWithHQImage,
} from '../../types';

const usePokemonDetails = (id: string) =>
  useQuery<PokemonDetailsResponse, Error, PokemonDetailsResponseWithHQImage>({
    queryKey: ['pokemonDetail', id],
    queryFn: () => getPokemonDetails(id!),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    select: (data) => ({
      ...data,
      pokemoneImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${String(
        data.id
      )}.png`,
    }),
  });
export { usePokemonDetails };
