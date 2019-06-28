import { MOVIE_FETCH } from "../Actions/constants";

import store from "../../store";

const API_KEY = "e439cc3bb62f4282847a5012c7511e5f";

const {
  OPEN_MOVIE_MODAL, 
  FETCH_MOVIE_DATA, 
  CLOSE_MOVIE_MODAL,
  SHOW_ERROR,
  FETCH_CREDITS
} = MOVIE_FETCH;

const openMovieModal = () => {
  return {
    type: OPEN_MOVIE_MODAL
  }
}

const fetchMovie = (data) => {
  return {
    type: FETCH_MOVIE_DATA,
    data
  }
}

const fetchCredits = (data) => {
  return {
    type: FETCH_CREDITS,
    data
  }
}

export const closeMovieModal = () => {
  return {
    type: CLOSE_MOVIE_MODAL
  }
}

const showError = () => {
  return {
    type: SHOW_ERROR
  }
}

export const fetchThunkMovie = (movieId) => {
  store.dispatch(openMovieModal());

  return (dispatch) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`)
      .then(
        res => res.json(),
        err => dispatch(showError())
      )
      .then(data => {
        const editedData = {
            background: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`,
            poster: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
            video: data.videos.results[0].key,
            rating: 6.7,
            plot: data.overview,
            title: data.title,
            votes: data.vote_count,
            genre: data.genres.map(el => el.name).join(", "),
            extPlot: data.overview,
            releaseData: data.release_date,
            revenue: data.revenue,
            runtime: data.runtime,
            imdbId: data.imdb_id
        }
        dispatch(fetchMovie(editedData));
      })
      .catch(err => dispatch(showError()));
  }
}

export const fetchThunkMovieCredits = (movieId) => {
  return (dispatch) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(
        res => res.json(),
        err => dispatch(showError())
      )
      .then(data => {
        console.log(data);
        const editedData = {
          stars: data.cast.slice(0, 4).map(el => el.name).join(", "),
          directors: data.crew[0].name
        }
        dispatch(fetchCredits(editedData));
      })
  } 
}