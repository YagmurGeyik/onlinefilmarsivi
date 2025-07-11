import React from "react";
import "../styles/index.css";

function Pagination({ totalMovies, moviesPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goToFirst = () => setCurrentPage(1);
  const goToLast = () => setCurrentPage(totalPages);
  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <nav className="d-flex justify-content-center my-4">
      <ul className="pagination pagination-dark gap-1 flex-wrap">
        {currentPage !== 1 && (
          <>
            <li className="page-item">
              <button className="page-link btn-sm" onClick={goToFirst}>
                İlk
              </button>
            </li>
            <li className="page-item">
              <button className="page-link btn-sm" onClick={goToPrev}>
                Önceki
              </button>
            </li>
          </>
        )}

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button
              className="page-link btn-sm"
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          </li>
        ))}

        {currentPage !== totalPages && (
          <>
            <li className="page-item">
              <button className="page-link btn-sm" onClick={goToNext}>
                Sonraki
              </button>
            </li>
            <li className="page-item">
              <button className="page-link btn-sm" onClick={goToLast}>
                Son
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
