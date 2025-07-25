const API_BASE: string = 'https://pokeapi.co/api/v2';
const POKEMON_LIST_URL: string = `${API_BASE}/pokemon`;
const GET_POKEMON_DETAILS: (id: string) => string = (id) =>
  `${API_BASE}/pokemon/${id}`;

export { API_BASE, GET_POKEMON_DETAILS, POKEMON_LIST_URL };

