import React from "react";
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FiltersListItem = ({filter}) => {
  return (
    <li
      className={`movie-filters__item ${filter
        .toLowerCase()
        .split(" ")
        .join("-")}`}
    >
      <Link
        to={`/${filter.replace(/\s/g, "")}`}
      >
        <div style={{color: "#ffffff", textDecoration: "none"}}>{filter}</div>
      </Link>
      <FontAwesomeIcon icon={faArrowRight} className="movie-filters__icon" />
    </li>
  );
};

export default FiltersListItem;
