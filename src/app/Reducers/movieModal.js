import { MOVIE_FETCH } from "../../constants";

const {
  OPEN_MOVIE_MODAL,
  FETCH_MOVIE_DATA,
  CLOSE_MOVIE_MODAL,
  FETCH_CREDITS,
  SHOW_ERROR
} = MOVIE_FETCH;

const initialState = {
  isOpen: false,
  isFetching: false,
  isErrored: false,
  movieDetails: {}
};

const movieModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MOVIE_MODAL:
      return {
        ...state,
        isOpen: true,
        isFetching: true,
        isErrored: false,
        movieId: action.movieId
      };
    case FETCH_MOVIE_DATA:
      return {
        ...state,
        movieDetails: {...state.movieDetails, ...action.data}
      };
    case CLOSE_MOVIE_MODAL:
      return {
        ...state,
        isOpen: false,
        isErrored: false
      };
    case FETCH_CREDITS:
      return {
        ...state,
        isFetching: false,
        movieDetails: {...state.movieDetails, ...action.data}
      }
    case SHOW_ERROR:
      return {
        ...state,
        isErrored: true
      }
    default:
      return state;
  }
};

export default movieModal;
