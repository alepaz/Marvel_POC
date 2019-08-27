import React from 'react';
import ReactPaginate from 'react-paginate';

function Paginator({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      breakClassName={'break-me'}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  );
}

export default Paginator;
