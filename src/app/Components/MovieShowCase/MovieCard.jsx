import React from "react";

const MovieCard = ({data, onClick}) => {
    return (
        <div className="movie-card" onClick={() => onClick(data.id)}>
            <span className="movie-card__rate-mark">6.7</span>
            <img 
              src={data.poster} 
              alt="film-poster" 
              className="movie-card__img"
            />
            <div className="movie-card__title">
              <h3 className="movie-card__title-text">{data.title.split(" ").slice(0, 2).join(" ")}</h3>
              <p className="movie-card__text">{data.title}</p>
            </div>
        </div>
    )
}

export default MovieCard;