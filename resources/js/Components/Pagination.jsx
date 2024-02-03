import React from 'react';

const Pagination = ({ totalPages, currentPage, onChangePage, onPreviousPage, onNextPage }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a href="#" className="page-link" aria-label="Previous" onClick={() => onPreviousPage()}>
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
  
          {pages.map((page) => (
            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
              <a href="#" className="page-link" onClick={() => onChangePage(page)}>
                {page}
              </a>
            </li>
          ))}
  
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a href="#" className="page-link" aria-label="Next" onClick={() => onNextPage()}>
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  };

export default Pagination;
