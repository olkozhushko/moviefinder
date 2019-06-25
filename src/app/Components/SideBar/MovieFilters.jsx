import React from "react";
import uuid from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MovieFilters = () => {
  const filters = [
    "New Releases",
    "Trending",
    "Coming Soon",
    "Favourites",
    "Watch Later"
  ];

  return (
    <ul className="movie-filters__list">
      {filters.map(el => {
        return (
          <li key={uuid.v4()} className="movie-filters__item">
            {el}
            <FontAwesomeIcon icon={faArrowRight}   className="movie-filters__icon" />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieFilters;
