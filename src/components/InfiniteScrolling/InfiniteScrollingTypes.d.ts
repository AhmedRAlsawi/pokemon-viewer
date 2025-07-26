import { TransformedPokemonListResponse } from '../../types';

export interface InfiniteScrollingProps {
  data: TransformedPokemonListResponse | undefined;
  hasNextPage: boolean;
  fetchNextPage: () => void;
}
