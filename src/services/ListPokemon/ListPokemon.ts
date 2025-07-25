import { POKEMON_LIST_URL } from '../../endpoints';
import { ListPokemonParams, PokemonListResponse } from '../../types';

export const getPokemonList = async ({
  limit,
  offset,
}: ListPokemonParams): Promise<PokemonListResponse> => {
  const res = await fetch(
    `${POKEMON_LIST_URL}?limit=${limit}&offset=${offset}`
  );
  if (!res.ok) throw new Error('Failed to fetch Pokémon list');
  return res.json();
};
