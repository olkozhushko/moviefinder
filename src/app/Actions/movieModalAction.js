import { MOVIE_FETCH } from "../Actions/constants";

const {
  OPEN_MOVIE_MODAL, 
  FETCH_MOVIE_DATA, 
  CLOSE_MOVIE_MODAL,
  SHOW_ERROR
} = MOVIE_FETCH;

import store from "../../store";

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

const closeMovieModal = () => {
  return {
    type: CLOSE_MOVIE_MODAL
  }
}

const showError = () => {
  return {
    type: SHOW_ERROR
  }
}

export const fetchThunkMovie = (title) => {
  const input = title.replace(/\s+/g, '+');

  store.dispatch(openMovieModal());

  return (dispatch) => {
    return fetch(`http://www.omdbapi.com/?apikey=6e7bcfed&s=${input}`)
      .then(res => res.json())
      .then(data => {

      })
  }
}