import React from "react";

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="search-bar w-75">
          <label htmlFor="search"></label>
          <input 
            type="text"
            className="search-bar__input form-control w-100 py-1"
            onChange={(e) => onChange(e.target.value)}
            id="search"
            value={value}
            placeholder="search..."
          />
        </div>
    )
}

export default SearchBar;