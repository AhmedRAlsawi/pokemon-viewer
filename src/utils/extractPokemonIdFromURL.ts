export const extractPokemonIdFromURL = (url: string): string => {
  const pokemonId = url.split('/')[6];
  return pokemonId;
};
