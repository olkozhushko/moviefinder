import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import SearchBarContainer from "../Containers/SearchBarContainer";
import Title from "./Title";

const Header = () => {
  return (
    <header className="header w-100 px-4 py-3 d-flex justify-content-around">
      <Title />
      <SearchBarContainer />
    </header>
  );
};

export default Header;
