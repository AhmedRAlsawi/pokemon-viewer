import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePaginatedListPokemon } from '../../hooks';
import ErrorScreen from '../../screens/ErrorScreen';
import { AppDiv } from '../../styles';
import { LoadingComp } from '../LoadingComp';
import { PaginationControls } from '../PaginationControls';
import { PokemonCard } from '../PokemonCard';
import { ScrollingPropsTypes } from '../ScrollingPropsTypes';

const PaginatedScrolling: React.FC<ScrollingPropsTypes> = ({
  mode, limit
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
  const pageForApi = Math.max(pageFromUrl - 1, 0);

  const handlePageClick = (event: { selected: number; }) => {
    setSearchParams({ page: (event.selected + 1).toString() });
  };

  const { data: paginatedQueryData, isLoading: isPaginatedQueryLoading, isError: isPaginatedQueryError } = usePaginatedListPokemon({ limit, offset: pageForApi * limit }, mode === 'pagination');
  const totalPages = paginatedQueryData ? Math.ceil(paginatedQueryData?.count! / limit) : 0;



  if (isPaginatedQueryLoading) return <LoadingComp />;

  if (isPaginatedQueryError
  ) return <ErrorScreen />;
  return (
    <>
      <AppDiv
        $customizeddir='row'
        $customizedverticalmargin='md'
      >
        {paginatedQueryData && paginatedQueryData.results.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </AppDiv>
      <PaginationControls
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        pageForApi={pageForApi}
        limit={limit}
        pageFromUrl={pageFromUrl}
        totalCount={paginatedQueryData?.count!}
      /></>
  );
};

export { PaginatedScrolling };
