import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={onSubmit} role="search" autoComplete="false" >
        <label htmlFor="search" />
        <FontAwesomeIcon icon={faSearch} className="search-bar__icon" />
        <input
          type="text"
          className="search-bar__input"
          onChange={e => onChange(e.target.value)}
          id="search"
          value={value}
          placeholder="search..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
