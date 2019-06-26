import React, { useState } from "react";
import {connect} from "react-redux";

import SearchBar from "../../Components/Header/SearchBar";

import { thunkFetchAction } from "../../Actions/fetchData";
import { closeMovieModal } from "../../Actions/movieModalAction";



const SearchBarContainer = ({ fetchData, closeModal }) => {
    
    const [ searchInput, setSearchInput ] = useState("");
    
    return (
        <SearchBar 
          value={searchInput} 
          onChange={(data) => setSearchInput(data)}
          onSubmit={(e) => {
            e.preventDefault();
            if(!searchInput) return;
            closeModal();
            fetchData(`https://api.themoviedb.org/3/search/movie`, searchInput);
          }}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: (type, typeInput) => dispatch(thunkFetchAction(type, typeInput)),
  closeModal: () => dispatch(closeMovieModal())
})

export default connect(null, mapDispatchToProps)(SearchBarContainer);