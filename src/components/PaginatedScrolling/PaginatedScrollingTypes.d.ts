import { TransformedPokemonListResponse } from '../../types';

export interface PaginatedScrollingProps {
  data: TransformedPokemonListResponse | undefined;
  handlePageClick: (event: { selected: number }) => void;
  totalPages: number;
  pageForApi: number;
  limit: number;
  pageFromUrl: number;
}
