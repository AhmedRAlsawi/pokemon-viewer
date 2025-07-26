export interface PaginationControlsProps {
  handlePageClick: (event: { selected: number }) => void;
  totalPages: number;
  pageForApi: number;
  pageFromUrl: number;
  limit: number;
  totalCount: number;
}
