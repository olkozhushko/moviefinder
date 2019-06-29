import React, { useState } from "react";
import {connect} from "react-redux";

import SearchBar from "../../Components/Header/SearchBar";

import { thunkFetchMoviesAction } from "../../Actions/fetchMovies";
import { closeMovieModal } from "../../Actions/movieModal";
import { closeFavorite } from "../../Actions/favoriteMovies";
import { setMovieFilter } from "../../Actions/filters";
import { resetCurrentPage } from "../../Actions/pagination";


const SearchBarContainer = ({ fetchMovies, closeModal, closeFavorite, setFilter }) => {
    
    const [ searchInput, setSearchInput ] = useState("");
    
    return (
        <SearchBar 
          value={searchInput} 
          onChange={(data) => setSearchInput(data)}
          onSubmit={(e) => {
            e.preventDefault();
            if(!searchInput) return;
            closeModal();
            closeFavorite();
            setFilter(`Search Results related to "${searchInput}"`);
            fetchMovies(`https://api.themoviedb.org/3/search/movie`, searchInput);
            setSearchInput("");
          }}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (type, typeInput) => dispatch(thunkFetchMoviesAction(type, typeInput)),
  closeModal: () => dispatch(closeMovieModal()),
  closeFavorite: () => dispatch(closeFavorite()),
  setFilter: (filter) => dispatch(setMovieFilter(filter)),
  resetCurrentPage: () => dispatch(resetCurrentPage())
})

export default connect(null, mapDispatchToProps)(SearchBarContainer);