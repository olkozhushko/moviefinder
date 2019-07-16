import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MovieCard from "../../Components/MovieShowCase/MovieCard";

import { fetchThunkMovie, fetchThunkMovieCredits } from "../../Actions/movieModal";
import { addToFavorite, removeFromFavorite } from "../../Actions/favoriteMovies";
import { getFavoriteMovies } from "../../Reducers";

class FilmCardsContainer extends React.Component {

  handleBookMarkClick = (isActive, data) => {
    
    if(!isActive) {
      this.props.addToFavorite(data);
    } else {
      this.props.removeFromFavorite(data.id);
    }
  }

  render() {
    const { 
      fetchedMovies, 
      fetchMovie, 
      fetchMovieCredits,
      favoriteMovies, 
      isFavoritesOpen,
      activeBookMarks
    } = this.props;
    
    //depending on if we went to favorite movies choose correct movies set
    const movies = isFavoritesOpen ? favoriteMovies : fetchedMovies;

    if (!Object.keys(movies).length) return null;
    
    return (
      <div className="movies-container">
        {Object.keys(movies).map(key => {
          return (
            <MovieCard
              data={movies[key]}
              isBookMarkAdded={activeBookMarks.includes(+key)}
              key={movies[key].id}
              onClick={(id) => {
                fetchMovie(id);
                fetchMovieCredits(id);
              }}
              onBookmarkClick={this.handleBookMarkClick}
            />
          );
        })}
      </div>
    );
  }
}

FilmCardsContainer.propTypes = {
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
  fetchMovieCredits: PropTypes.func.isRequired,
  isFavoritesOpen: PropTypes.bool.isRequired,
  fetchedMovies: PropTypes.object.isRequired,
  favoriteMovies: PropTypes.object.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  activeBookMarks: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    fetchedMovies: state.page.movies.fetchedData,
    isFavoritesOpen: state.page.favorite.isFavoritesOpen,
    activeBookMarks: state.page.favorite.activeBookMarks,
    favoriteMovies: getFavoriteMovies(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovie: movieId => dispatch(fetchThunkMovie(movieId)),
  fetchMovieCredits: (movieId) => dispatch(fetchThunkMovieCredits(movieId)),
  addToFavorite: (data) => dispatch(addToFavorite(data)),
  removeFromFavorite: (id) => dispatch(removeFromFavorite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmCardsContainer);
