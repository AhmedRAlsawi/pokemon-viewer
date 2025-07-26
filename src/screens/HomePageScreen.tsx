import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { electricity } from '../assets';
import { PokemonCard } from '../components';
import { PaginationControls } from '../components/PaginationControls';
import { useInfiniteListPokemon } from '../hooks';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { usePaginatedListPokemon } from '../hooks/usePaginatedListPokemon';
import { AppButton, AppContainer, AppDiv, AppText } from '../styles';
import { ScrollingTypes } from '../types';

const HomePageScreen: React.FC = () => {
  // TODO: handle infinite scrolling
  const [mode, setMode] = useState<ScrollingTypes>('pagination');
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 20;

  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
  const pageForApi = Math.max(pageFromUrl - 1, 0);



  const handlePageClick = (event: { selected: number; }) => {
    setCurrentPage(event.selected);
    setSearchParams({ page: (event.selected + 1).toString() });
  };

  const { data: paginatedQueryData, isLoading: isPaginatedQueryLoading, isError: isPaginatedQueryError } = usePaginatedListPokemon({ limit, offset: pageForApi * limit });
  const { data: infiniteQueryData, isLoading: isInfiniteQueryLoading, isError: isInfiniteQueryError, hasNextPage, fetchNextPage } = useInfiniteListPokemon(limit);
  const totalPages = paginatedQueryData ? Math.ceil(paginatedQueryData?.count! / limit) : 0;

  const data =
    mode === 'pagination'
      ? paginatedQueryData?.results ?? []
      : infiniteQueryData ?? [];

  const loadMoreRef = useInfiniteScroll(
    () => fetchNextPage(),
    hasNextPage
  );

  if (isPaginatedQueryLoading || isInfiniteQueryLoading) return <AppContainer>
    <AppText>Loading Pokémon list...</AppText>
  </AppContainer>;
  if (isPaginatedQueryError ||
    isInfiniteQueryError) return <AppContainer><AppText>Error loading Pokémon list</AppText></AppContainer>;
  return (
    <AppContainer>
      <AppDiv $customizedgap='md'>
        <img src={electricity} alt="Pokédex" />
        <h1>Pokédex</h1>
      </AppDiv>
      <AppText>Discover and explore Pokemon with page controls</AppText>
      <AppDiv $customizedgap='md'>
        <AppButton>Pagination View</AppButton>
        <AppButton>Grid View</AppButton>
      </AppDiv>
      <AppDiv
        $customizeddir='row'
        $customizedverticalmargin='md'
      >
        {data && data.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
        <div ref={loadMoreRef} style={{ height: '20px' }} />
      </AppDiv>
      <PaginationControls
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        pageForApi={pageForApi}
        limit={limit}
        pageFromUrl={pageFromUrl}
        totalCount={paginatedQueryData?.count!}
      />
    </AppContainer>
  );
};

export default HomePageScreen;
