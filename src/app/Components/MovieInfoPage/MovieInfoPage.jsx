import React from "react";
import PropTypes from "prop-types";
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
              rel="noopener noreferrer"
            >
              {data.imdbId}</a>
          </p>
        </section>
        <div className="plot">
          <p className="plot__text">{data.plot.slice(0, 100) + "..."}</p>
        </div>
      </div>
      <section className="movie-info__detailed">
        <header className="movie-info__header">
          <h1 className="movie-info__header-text">{data.title}</h1>
        </header>
        <p className="movie-info__short-desc">
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
    
  }
};

MovieInfoPage.propTypes = {
  data: PropTypes.shape({
    background: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    plot: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    directors: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
    extPlot: PropTypes.string.isRequired,
  })
}

const mapStateToProps = (state) => {
  return {
    data: state.page.movie.movieDetails
  }
}

export default connect(mapStateToProps, null)(MovieInfoPage);
