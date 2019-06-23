import React, { useState } from "react";

import SearchBar from "../Components/Header/SearchBar";

const SearchBarContainer = () => {
    
    const [ searchInput, setSearchInput ] = useState("");
    
    return (
        <SearchBar 
          value={searchInput} 
          onChange={(data) => setSearchInput(data)}
        />
    )
}

export default SearchBarContainer;