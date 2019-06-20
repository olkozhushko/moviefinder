import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import SearchBar from "./SearchBar";
import Title from "./Title";

const Header = () => {
  return (
    <header className="header w-100 px-4 py-3 d-flex justify-content-around">
      <Title />
      <SearchBar />
    </header>
  );
};

export default Header;
