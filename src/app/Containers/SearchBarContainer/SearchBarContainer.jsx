import React, { useState } from "react";
import {connect} from "react-redux";

import SearchBar from "../../Components/Header/SearchBar";

import { thunkFetchAction } from "../../Actions/fetchData";
import { closeMovieModal } from "../../Actions/movieModalAction";
import { closeFavorite } from "../../Actions/FavoriteMovies";
import { setMovieFilter } from "../../Actions/setFilterAction";



const SearchBarContainer = ({ fetchData, closeModal, closeFavorite, setFilter }) => {
    
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
            fetchData(`https://api.themoviedb.org/3/search/movie`, searchInput);
            setSearchInput("");
          }}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: (type, typeInput) => dispatch(thunkFetchAction(type, typeInput)),
  closeModal: () => dispatch(closeMovieModal()),
  closeFavorite: () => dispatch(closeFavorite()),
  setFilter: (filter) => dispatch(setMovieFilter(filter))
})

export default connect(null, mapDispatchToProps)(SearchBarContainer);