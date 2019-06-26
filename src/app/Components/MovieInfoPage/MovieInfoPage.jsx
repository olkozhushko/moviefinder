import React from "react";
import { connect } from "react-redux";

import getNormalDuration from "../../../utils/getNormalDuration";
import getNormalRevenueValue from "../../../utils/getNormalRevenueValue";

import "./MovieInfoPage.css";

const MovieInfoPage = ({ data }) => {
  if(!data.plot) return null;

  return (
    <section className="movie-info">
      <div
        className="movie-info__general"
        style={{ background: `url(${data.background}) center / cover no-repeat` }}
      >
        <div className="movie-info__general-overlap"></div>
        <iframe
          title="trailer"
          className="trailer-frame"
          src={`https://www.youtube.com/embed/${data.video}`}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
        />
        <section className="movie-inform__basic-inform">
          <p className="basic-inform__content">
            <span className="basic-inform__title">Release:</span> 
            <span className="basic-inform__text">{data.releaseData}</span>
          </p>
          <p className="basic-inform__content">
            <span className="basic-inform__title">Revenue:</span>
            <span className="basic-inform__text">{getNormalRevenueValue(data.revenue+"")}</span>
          </p>
          <p className="basic-inform__content">
            <span className="basic-inform__title">Runtime:</span>
            <span className="basic-inform__text">{getNormalDuration(data.runtime)}</span>
          </p>
          <p className="basic-inform__content">
            <span className="basic-inform__title">imdb</span> 
            <a 
              href={`https://www.imdb.com/title/${data.imdbId}`}
              className="basic-inform__link"
              target="_blank"
            >
              {data.imdbId}</a>
          </p>
        </section>
        <div className="plot">
          <p className="plot__text">{data.plot.slice(0, 100) + "..."}</p>
        </div>
      </div>
      <section className="movie_info__detailed">
        <header className="header">
          <h1 className="header__text">{data.title}</h1>
        </header>
        <p>
          <span className="movie-info__imdb">imdb</span>
          <span className="movie-info__rating">{data.rating}</span>/10
          <span className="movie-info__votes">{data.votes} Votes</span>
        </p>
        <div className="movie-info__container">
          <section className="movie-info__poster-wrapper">
            <img
              src={data.poster}
              alt="poster of movie"
              className="movie-info__poster"
            />
          </section>
          <section className="movie-info__main">
            <div className="inform-block">
              <h6 className="inform-block__heading">Directors</h6>
              <p className="inform-block__text">{data.directors}</p>
            </div>
            <div className="inform-block">
              <h6 className="inform-block__heading">Genre</h6>
              <p className="inform-block__text">{data.genre}</p>
            </div>
            <div className="inform-block">
              <h6 className="inform-block__heading">Stars</h6>
              <p className="inform-block__text">{data.stars}</p>
            </div>
          </section>
        </div>
        <div className="extended-plot">
          <p className="extended-plot__text">{data.extPlot}</p>
        </div>
      </section>
    </section>
  );
};

MovieInfoPage.defaultProps = {
  data: {
    background:
      "https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    poster:
      "https://images.pexels.com/photos/684363/pexels-photo-684363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 6.7,
    plot: "wfeger erebeb tebebte e tbrbrtbtt tbrr",
    title: "King in the north",
    votes: 45667,
    directors: "John Carpenter, Trivia Callo",
    genre: "Thriller, Game",
    stars: "jorge cluny, pedro pascal",
    extPlot: "frhrifhyigh4 uevhreiuvh4yirv uervheiuvh"
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.movie.movieDetails
  }
}

export default connect(mapStateToProps, null)(MovieInfoPage);
