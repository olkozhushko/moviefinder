import React from "react";
import { connect } from "react-redux";

import MovieCard from "../../Components/MovieShowCase/MovieCard";

import { fetchThunkMovie } from "../../Actions/movieModalAction";

const FilmCardsContainer = ({ movies, fetchMovie}) => {
  if(!movies[0].id) return null;
  return (
    <div
      className="movies-container"
    >
      {movies.map((el) => {
        return <MovieCard data={el} key={el.id} onClick={fetchMovie}/>;
      })}
    </div>
  );
};


const mapStateToProps = state => {
  return {
    movies: state.movies.fetchedData
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovie: (movieId) => dispatch(fetchThunkMovie(movieId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmCardsContainer);
