import React from 'react';
import { useInfiniteListPokemon } from '../../hooks';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import ErrorScreen from '../../screens/ErrorScreen';
import { AppDiv } from '../../styles';
import { LoadingComp } from '../LoadingComp';
import { PokemonCard } from '../PokemonCard';
import { ScrollingProps } from '../types';

const InfiniteScrolling: React.FC<ScrollingProps> = ({
  limit,
  mode
}) => {
  const { data: infiniteQueryData, isLoading: isInfiniteQueryLoading, isError: isInfiniteQueryError, hasNextPage, fetchNextPage } = useInfiniteListPokemon(limit, mode === 'infinite');



  const loadMoreRef = useInfiniteScroll(
    () => fetchNextPage(),
    hasNextPage
  );

  if (isInfiniteQueryLoading) return <LoadingComp />;

  if (isInfiniteQueryError) return <ErrorScreen />;

  return (
    <AppDiv
      $customizeddir='row'
      $customizedverticalmargin='md'
    >
      {infiniteQueryData?.results?.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
      <div ref={loadMoreRef} style={{ height: '20px' }} />
    </AppDiv>
  );
};

export { InfiniteScrolling };
