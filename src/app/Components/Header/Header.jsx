import React from "react";

import SearchBarContainer from "../../Containers/SearchBarContainer/SearchBarContainer";
import TitleContainer from "../../Containers/Header/TitleContainer";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <TitleContainer />
      <SearchBarContainer />
    </header>
  );
};

export default Header;
