import React from "react";

import SearchBarContainer from "../../Containers/SearchBarContainer/SearchBarContainer";
import Title from "./Title";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Title />
      <SearchBarContainer />
    </header>
  );
};

export default Header;
