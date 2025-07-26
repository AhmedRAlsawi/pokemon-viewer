import React from 'react';
import ReactPaginate from 'react-paginate';
import { AppDiv } from '../../styles';
import { InfoMessage, PaginationWrapper } from '../../styles/PaginationControlsStyles';
import { PaginationControlsProps } from './PaginationControlsProps';

const PaginationControls: React.FC<PaginationControlsProps> = ({
  handlePageClick,
  totalPages,
  pageForApi,
  limit,
  pageFromUrl,
  totalCount
}) => {
  return (
    <>
      <PaginationWrapper>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          pageCount={totalPages}
          previousLabel="< Previous"
          forcePage={pageForApi}
          containerClassName="pagination"
          activeClassName="active"
        />

      </PaginationWrapper>
      <AppDiv>
        <InfoMessage>
          Page {pageFromUrl} of {totalPages} (
          {pageFromUrl === totalPages
            ? totalCount % limit || limit
            : limit} Pokémon shown)
        </InfoMessage>
      </AppDiv>
    </>
  );
};

export { PaginationControls };
