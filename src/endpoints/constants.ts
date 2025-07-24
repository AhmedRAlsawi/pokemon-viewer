const API_BASE: string = 'https://pokeapi.co/api/v2';
const LIST_POKEMON: string = `${API_BASE}/pokemon`;
const GET_POKEMON: (id: number) => string = (id) => `${API_BASE}/pokemon/${id}`;

export { API_BASE, LIST_POKEMON, GET_POKEMON };
