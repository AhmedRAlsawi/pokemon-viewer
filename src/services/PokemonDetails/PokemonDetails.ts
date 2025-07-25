import { GET_POKEMON_DETAILS } from '../../endpoints';
import { PokemonDetailsResponse } from '../../types';

export const getPokemonDetails = async (
  id: string
): Promise<PokemonDetailsResponse> => {
  const res = await fetch(GET_POKEMON_DETAILS(id));
  if (!res.ok) throw new Error('Failed to fetch Pokémon list');
  return res.json();
};
