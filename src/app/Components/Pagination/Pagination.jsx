import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import getPageLayout from "../../../utils/getPageLayout";

import { goToNextPage, goBackPage, goToChosenPage } from "../../Actions/pagination";
import { thunkFetchAction } from "../../Actions/fetchData";

import "./Pagination.css";

const Pagination = ({ goToNext, goToPrevious, goToChosen, pageData, filter, fetchData}) => {
  const defineUrl = (filter) => {
    if(filter === "New Releases") {
      return "https://api.themoviedb.org/3/movie/now_playing";
    }
    if(filter === "Trending") {
      return "https://api.themoviedb.org/3/trending/movie/week";
    }
    if(filter === "Coming Soon") {
      return "https://api.themoviedb.org/3/movie/upcoming";
    }
  }

  const handleClicks = (e) => {
    const target = e.target.closest("li");

    if(!target) return;

    if(target.dataset.id === "Left") {
      goToPrevious();
    } else if(target.dataset.id === "Right") {
      goToNext();
    } else {
      goToChosen(+target.dataset.id);
    }

    fetchData(defineUrl(filter));
  }

  const pages = getPageLayout(pageData);
  return (
    <>
      <nav aria-label="Page navigation example" className="pagination-nav">
        <ul
          className="pagination-nav__list"
          onClick={handleClicks}
        >
          {pages.map((page, i) => {
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


Pagination.propTypes = {
  pageData: PropTypes.object.isRequired,
  goToNext:  PropTypes.func.isRequired,
  goToPrevious: PropTypes.func.isRequired,
  goToChosen: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
  return {
    pageData: state.page,
    filter: state.movieFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToNext: () => dispatch(goToNextPage()),
    goToPrevious: () => dispatch(goBackPage()),
    goToChosen: (data) => dispatch(goToChosenPage(data)),
    fetchData: (url) => dispatch(thunkFetchAction(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

