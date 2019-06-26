import React from "react";

const MovieCard = ({ data, onClick }) => {
  
  const rateMarkColor =
    data.rating < 6 ? "tomato" : data.rating >= 7 ? "#2db92d" : "#FFB10A";

  return (
    <div className="movie-card" onClick={() => onClick(data.id)}>
      <span
        className="movie-card__rate-mark"
        style={{ backgroundColor: rateMarkColor }}
      >
        {data.rating}
      </span>
      <div className="movie-card__poster">
        <img src={data.poster} alt="film-poster" className="movie-card__img" />
      </div>
      <div className="movie-card__title">
        <h3 className="movie-card__title-text">
          {data.title
            .split(" ")
            .slice(0, 2)
            .join(" ")}
        </h3>
        <p className="movie-card__text">{data.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
