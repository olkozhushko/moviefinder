import React, { useState } from "react";

const SearchBar = () => {

    const [ searchInput, setSearchInput ] = useState("");

    return (
        <div className="search-bar w-75">
          <label htmlFor="search"></label>
          <input 
            type="text"
            className="search-bar__input form-control w-100 py-1"
            onChange={(e) => setSearchInput(e.target.value)}
            id="search"
            value={searchInput}
            placeholder="search..."
          />
        </div>
    )
}

export default SearchBar;