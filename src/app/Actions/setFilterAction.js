import { SET_MOVIES_FILTER } from "./constants";

export const setMovieFilter = (filter) => {
  return {
    type: SET_MOVIES_FILTER,
    filter
  }
} 
