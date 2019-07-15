import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SearchBar from "../../Components/Header/SearchBar";

import { thunkFetchMoviesAction } from "../../Actions/fetchMovies";
import { closeMovieModal } from "../../Actions/movieModal";
import { closeFavorite } from "../../Actions/favoriteMovies";
import { setMovieFilter } from "../../Actions/filters";
import { resetCurrentPage } from "../../Actions/pagination";
import { setSearchInput } from "../../Actions/searchInput";

const SearchBarContainer = ({
  fetchMovies,
  closeModal,
  closeFavorite,
  setFilter,
  setInput,
  resetCurrentPage
}) => {
  
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!searchInput) return;

    closeModal();
    closeFavorite();
    setFilter(`Search Results related to "${searchInput}"`);
    resetCurrentPage();

    fetchMovies(`search/movie`, searchInput);
    setInput(searchInput);
    setSearchInput("");
  };

  return (
    <SearchBar
      value={searchInput}
      onChange={data => setSearchInput(data)}
      onSubmit={handleSubmit}
    />
  );
};

SearchBarContainer.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeFavorite: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  resetCurrentPage: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: (type, typeInput) =>
    dispatch(thunkFetchMoviesAction(type, typeInput)),
  closeModal: () => dispatch(closeMovieModal()),
  closeFavorite: () => dispatch(closeFavorite()),
  setFilter: filter => dispatch(setMovieFilter(filter)),
  resetCurrentPage: () => dispatch(resetCurrentPage()),
  setInput: (data) => dispatch(setSearchInput(data))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBarContainer);
