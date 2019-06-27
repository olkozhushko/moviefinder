import React from "react";
import uuid from "uuid";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { thunkFetchAction } from "../../Actions/fetchData";
import { setMovieFilter } from "../../Actions/setFilterAction";
import { closeMovieModal } from "../../Actions/movieModalAction";
import { goToFavorite, closeFavorite } from "../../Actions/FavoriteMovies";


const filters = [
  "New Releases",
  "Trending",
  "Coming Soon",
  "Favourites",
  "Watch Later"
];

class MovieFilters  extends React.Component {
  
  handleClick(e) {
    let target = e.target.closest("li");

    if(!target) return;

    if(target.classList.contains("new-releases")) {
      this.props.setFilter("New Releases");
      this.props.fetchData("https://api.themoviedb.org/3/movie/now_playing");
    } else if(target.classList.contains("trending")) {
        this.props.setFilter("Trending");
        this.props.fetchData("https://api.themoviedb.org/3/trending/movie/week");
    } else if(target.classList.contains("coming-soon")) {
        this.props.setFilter("Coming Soon");
        this.props.fetchData("https://api.themoviedb.org/3/movie/upcoming");
    } else if(target.classList.contains("favourites")) {
      this.props.setFilter("Favourites");
      this.props.goToFavorite();
    }
    
    console.log(!target.classList.contains("favourites"));
    if(!target.classList.contains("favourites")) {
      this.props.closeFavorite();
    }

    this.props.closeModal();
  }

  render() {
    return (
      <ul className="movie-filters__list" onClick={(e) => this.handleClick(e)}>
        {filters.map(el => {
          return (
            <li key={uuid.v4()} className={`movie-filters__item ${el.toLowerCase().split(" ").join("-")}`}>
              {el}
              <FontAwesomeIcon icon={faArrowRight}   className="movie-filters__icon" />
            </li>
          );
        })}
      </ul>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(thunkFetchAction(url)),
    setFilter: (filter) => dispatch(setMovieFilter(filter)),
    closeModal: () => dispatch(closeMovieModal()),
    goToFavorite: () => dispatch(goToFavorite()),
    closeFavorite: () => dispatch(closeFavorite())
  }
}

export default connect(null, mapDispatchToProps)(MovieFilters);
