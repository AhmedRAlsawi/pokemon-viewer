import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { electricity } from '../assets';
import { InfiniteScrolling, PaginatedScrolling } from '../components';
import { useInfiniteListPokemon } from '../hooks';
import { usePaginatedListPokemon } from '../hooks/usePaginatedListPokemon';
import { AppButton, AppContainer, AppDiv, AppText } from '../styles';
import { ScrollingTypes } from '../types';

const HomePageScreen: React.FC = () => {
  const [mode, setMode] = useState<ScrollingTypes>('pagination');
  const limit = 20;

  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
  const pageForApi = Math.max(pageFromUrl - 1, 0);

  const handlePageClick = (event: { selected: number; }) => {
    setSearchParams({ page: (event.selected + 1).toString() });
  };

  const { data: paginatedQueryData, isLoading: isPaginatedQueryLoading, isError: isPaginatedQueryError } = usePaginatedListPokemon({ limit, offset: pageForApi * limit }, mode === 'pagination');
  const { data: infiniteQueryData, isLoading: isInfiniteQueryLoading, isError: isInfiniteQueryError, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteListPokemon(limit, mode === 'infinite');
  const totalPages = paginatedQueryData ? Math.ceil(paginatedQueryData?.count! / limit) : 0;

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
      <AppDiv $customizedgap="md">
        <AppButton
          $customizedbackground={mode === 'pagination' ? 'text' : 'cardBackground'}
          $customizedcolor={mode === 'pagination' ? 'background' : 'text'}
          onClick={() => setMode('pagination')}
        >
          Pagination View
        </AppButton>
        <AppButton
          $customizedbackground={mode === 'infinite' ? 'text' : 'cardBackground'}
          $customizedcolor={mode === 'infinite' ? 'background' : 'text'}
          onClick={() => setMode('infinite')}
        >
          Grid View
        </AppButton>
      </AppDiv>
      {mode === 'pagination' ? (
        <PaginatedScrolling
          data={paginatedQueryData}
          handlePageClick={handlePageClick}
          totalPages={totalPages}
          pageForApi={pageForApi}
          limit={limit}
          pageFromUrl={pageFromUrl}
        />
      ) : (<InfiniteScrolling
        data={infiniteQueryData}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage} />)}
    </AppContainer>
  );
};

export default HomePageScreen;
