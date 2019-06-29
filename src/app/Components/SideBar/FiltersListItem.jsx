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
        <button type="button" className="movie-filters__btn-link">{filter}</button>
      </Link>
      <FontAwesomeIcon icon={faArrowRight} className="movie-filters__icon" />
    </li>
  );
};

export default FiltersListItem;
