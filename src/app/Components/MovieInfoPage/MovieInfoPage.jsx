import React from "react";
import { url } from "inspector";


const MovieInfoPage = ({data}) => {

  return (
    <section className="movie-info">
      <div className="movie-info__general" style={{background: url(data.background)}}>
        <iframe className="trailer-frame" src={data.trailer} frameBorder="0" controls/>
        <div className="review">
          <button className="btn-review btn-critics">Critics Reviews</button>
          <button className="btn-review btn-critics">Users Reviews</button>
          <div className="marks-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="plot">
          <p className="plot__text">{data.plot}</p>
        </div>
      </div>
      <section className="movie_info__detailed">
        <header className="header">
          <h1 className="header__text">{data.title}</h1>
          <p>
            <span className="movie-info__rating">{data.rating}/10</span>
            <span className="movie-info__votes">{data.votes} votes</span>
          </p>
          <div className="movie-info__container">
            <section className="movie-info__poster">
              <img src={data.poster} alt="poster of movie"/>
            </section>
            <section className="movie-info__main-info">
              <div className="main-inform__block">
                <h3 className="main-inform__heading">Directors</h3>
                <p className="main-inform__text">{data.directors}</p>
              </div>
              <div className="main-inform__section">
                <h3 className="main-inform__heading">Genre</h3>
                <p className="main-inform__text">{data.genre}</p>
              </div>
              <div className="main-inform__section">
                <h3 className="main-inform__heading">Stars</h3>
                <p className="main-inform__text">{data.stars}</p>
              </div>
            </section>
            <div className="extended-plot">
              <p className="extended-plot__text">{data.extPlot}</p>
              <p className="extended-plot__text">{data.extPlot}</p>
            </div>
          </div>
        </header>
      </section>
    </section>
  )
}

MovieInfoPage.defaultProps = {
  data: {
    background: 'https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    poster: "https://images.pexels.com/photos/684363/pexels-photo-684363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 6.7,
    plot: "wfeger erebeb tebebte e tbrbrtbtt tbrr",
    title: "King in the north",
    votes: 45667,
    directors: "John Carpenter, Trivia Callo",
    genre: "Thriller, Game",
    stars: "jorge cluny, pedro pascal",
    extPlot: "frhrifhyigh4 uevhreiuvh4yirv uervheiuvh"
  }
}

export default MovieInfoPage;
