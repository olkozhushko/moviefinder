import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MovieCard from "../../Components/MovieShowCase/MovieCard";

import { fetchThunkMovie, fetchThunkMovieCredits } from "../../Actions/movieModalAction";
import { 
  addToFavorite, 
  removeFromFavorite 
} from "../../Actions/FavoriteMovies";

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
  fetchedMovies: PropTypes.object.isRequired,
  favoriteMovies: PropTypes.object.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
  isFavoritesOpen: PropTypes.bool.isRequired,
  activeBookMarks: PropTypes.array.isRequired,
  fetchMovieCredits: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    fetchedMovies: state.movies.fetchedData,
    favoriteMovies: state.favorite.data,
    isFavoritesOpen: state.favorite.isFavoritesOpen,
    activeBookMarks: state.favorite.ui.activeBookMarks
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
