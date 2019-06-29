import React from "react";

import "./Pagination.css";

const Pagination = ({onClick, pagesLayout, pageData}) => {
  return (
    <>
      <nav aria-label="Page navigation example" className="pagination-nav">
        <ul
          className="pagination-nav__list"
          onClick={onClick}
        >
          {pagesLayout.map((page, i) => {
            if (page === "Left") {
              return (
                <li className="pagination-nav__item" key={i} data-id="Left">
                  <button className="pagination-nav__button "  aria-label="Previous">
                    &laquo;
                  </button>
                </li>
              );
            }
            if (page === "Right") {
              return (
                <li className="pagination-nav__item" key={i} data-id="Right">
                  <button className="pagination-nav__button" aria-label="Next">
                    &raquo;
                  </button>
                </li>
              );
            }

            const btnActive = pageData.currentPage === +page ? "pagination-nav__button pagination-nav__button_active" : "pagination-nav__button";

            return (
              <li className="pagination-nav__item" key={i} data-id={+page}>
                <button className={btnActive}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};


export default Pagination;

