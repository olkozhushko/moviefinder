import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuid from "uuid";

import FiltersListItem from "../../Components/SideBar/FiltersListItem";

import { thunkFetchMoviesAction } from "../../Actions/fetchMovies";
import { setMovieFilter } from "../../Actions/filters";
import { closeMovieModal } from "../../Actions/movieModal";
import { goToFavorite, closeFavorite } from "../../Actions/favoriteMovies";
import { setTotalPages, resetCurrentPage } from "../../Actions/pagination";

import { getPagesNumbers } from "../../Reducers/index";

const filters = {
  "New Releases": "movie/now_playing",
  "Trending": "trending/movie/week",
  "Coming Soon": "movie/upcoming",
  "Favourites": ""
};

class MovieFilters  extends React.Component {

  //helper functions to be invoked to avoid code repeating;
  dispatchFuncs(filter) {
    this.props.setFilter(filter);
    this.props.fetchMovies(filters[filter]);
    this.props.closeFavorite();
    this.props.resetCurrentPage();
    this.props.closeModal();
  }
  
  handleClick(e) {
    let target = e.target.closest("li");

    if(!target) return;

    if (target.classList.contains("new-releases")) {
      this.dispatchFuncs("New Releases");
    } 

    else if (target.classList.contains("trending")) {
        this.dispatchFuncs("Trending");
    } 

    else if(target.classList.contains("coming-soon")) {
        this.dispatchFuncs("Coming Soon");
    } 
    
    else if(target.classList.contains("favourites")) {
      this.props.setFilter("Favourites");
      this.props.closeModal();
      this.props.resetCurrentPage();
      this.props.setPagesNumbers(this.props.pagesNumber);
      this.props.goToFavorite();
    }
  
  }

  render() {
    return (
      <ul className="movie-filters__list" onClick={(e) => this.handleClick(e)}>
        {Object.keys(filters).map(el => {
          return (
            <FiltersListItem key={uuid.v4()} filter={el}/>
          );
        })}
      </ul>
    );
  }
};

MovieFilters.propTypes = {
  pagesNumber: PropTypes.number.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  goToFavorite: PropTypes.func.isRequired,
  closeFavorite: PropTypes.func.isRequired,
  setPagesNumbers: PropTypes.func.isRequired,
  resetCurrentPage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    pagesNumber: getPagesNumbers(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (url) => dispatch(thunkFetchMoviesAction(url)),
    setFilter: (filter) => dispatch(setMovieFilter(filter)),
    closeModal: () => dispatch(closeMovieModal()),
    goToFavorite: () => dispatch(goToFavorite()),
    closeFavorite: () => dispatch(closeFavorite()),
    setPagesNumbers: (data) => dispatch(setTotalPages(data)),
    resetCurrentPage: () => dispatch(resetCurrentPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieFilters);
