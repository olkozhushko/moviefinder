import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { thunkFetchMoviesAction } from "../../Actions/fetchMovies";
import { setMovieFilter } from "../../Actions/filters";
import { closeMovieModal } from "../../Actions/movieModal";
import { closeFavorite } from "../../Actions/favoriteMovies";
import { resetCurrentPage } from "../../Actions/pagination";

import Title from "../../Components/Header/Title";

const TitleContainer = ({fetchData, setFilter, closeFavorite, resetCurrentPage, closeModal}) => {

  const handleTitleClick = () => {
    setFilter("New Releases");
    fetchData("movie/now_playing");
    closeFavorite();
    resetCurrentPage();
    closeModal();
  }

  return (
    <Title onClick={handleTitleClick}/>
  )
}


TitleContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  resetCurrentPage: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeFavorite: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(thunkFetchMoviesAction(url)),
    setFilter: (filter) => dispatch(setMovieFilter(filter)),
    resetCurrentPage: () => dispatch(resetCurrentPage()),
    closeModal: () => dispatch(closeMovieModal()),
    closeFavorite: () => dispatch(closeFavorite()),
  }
}

export default connect(null, mapDispatchToProps)(TitleContainer)