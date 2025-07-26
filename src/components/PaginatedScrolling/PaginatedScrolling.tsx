import React from 'react';
import { AppDiv } from '../../styles';
import { PaginationControls } from '../PaginationControls';
import { PokemonCard } from '../PokemonCard';
import { PaginatedScrollingProps } from './PaginatedScrollingTypes';

const PaginatedScrolling: React.FC<PaginatedScrollingProps> = ({
  data,
  handlePageClick,
  totalPages,
  pageForApi,
  limit,
  pageFromUrl,
}) => {
  return (
    <>
      <AppDiv
        $customizeddir='row'
        $customizedverticalmargin='md'
      >
        {data && data.results.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </AppDiv>
      <PaginationControls
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        pageForApi={pageForApi}
        limit={limit}
        pageFromUrl={pageFromUrl}
        totalCount={data?.count!}
      /></>
  );
};

export { PaginatedScrolling };
