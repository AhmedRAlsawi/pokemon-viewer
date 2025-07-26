import React from 'react';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { AppDiv } from '../../styles';
import { PokemonCard } from '../PokemonCard';
import { InfiniteScrollingProps } from './InfiniteScrollingTypes';

const InfiniteScrolling: React.FC<InfiniteScrollingProps> = ({
  data,
  fetchNextPage,
  hasNextPage
}) => {
  const loadMoreRef = useInfiniteScroll(
    () => fetchNextPage(),
    hasNextPage
  );
  return (
    <AppDiv
      $customizeddir='row'
      $customizedverticalmargin='md'
    >
      {data?.results?.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
      <div ref={loadMoreRef} style={{ height: '20px' }} />
    </AppDiv>
  );
};

export { InfiniteScrolling };
