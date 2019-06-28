import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";



const MovieCard = ({ data, onClick, onBookmarkClick, isBookMarkAdded }) => {

  const rateMarkColor =
    data.rating < 6 ? "tomato" : data.rating >= 7 ? "#2db92d" : "#FFB10A";

  return (
    <div className="movie-card" onClick={(e) => {
      if(e.target.closest(".movie-card__add-favorite")) return;
      onClick(data.id)
      }}>
      <span
        className="movie-card__rate-mark"
        style={{ backgroundColor: rateMarkColor }}
      >
        {data.rating}
      </span>
      <FontAwesomeIcon 
        icon={faBookmark} 
        className="movie-card__add-favorite" 
        onClick={() => onBookmarkClick(isBookMarkAdded, data)}
        style={{color: isBookMarkAdded ? "#228b22" : "#F83745"}}
      />
      <div className="movie-card__poster">
        <img src={data.poster} alt="film-poster" className="movie-card__img" />
      </div>
      <div className="movie-card__title">
        <h3 className="movie-card__title-text">
          {data.title
            .split(" ")
            .slice(0, 3)
            .join(" ")}
        </h3>
        <p className="movie-card__text">{data.title}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired
}

export default MovieCard;
