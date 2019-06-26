import { MOVIE_FETCH } from "../Actions/constants";

const {OPEN_MOVIE_MODAL, FETCH_MOVIE_DATA, CLOSE_MOVIE_MODAL} = MOVIE_FETCH;

const initialState = {
  isOpen: false,
  isFetching: false,
  isErrored: false,
  movieDetails: {},
}

const movieModalReducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MOVIE_MODAL:
      return {
        ...state,
        isOpen: true,
        movieId: action.movieId
      }
    case FETCH_MOVIE_DATA:
      return {
        ...state,
        movieDetails: action.data
      }
    case CLOSE_MOVIE_MODAL:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state;
  }
}

export default movieModalReducer;