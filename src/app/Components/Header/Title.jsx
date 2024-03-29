import React from "react";
import { NavLink } from "react-router-dom";

const Title = ({onClick}) => {
  return (
    <div className="header__title" onClick={onClick}>
      <NavLink to="/" activeStyle={{
        width: "100%", display: "block", textDecoration: "none"}}>
        <h1 className="header__text">
          Movie Finder
        </h1>
      </NavLink>
    </div>
  );
};

export default Title;
