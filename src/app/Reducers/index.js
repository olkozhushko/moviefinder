import {combineReducers} from "redux";

import fetchMovies from "./fetchMovies";
import movieModal from "./movieModal";
import filters from "./filters";
import favoriteMovies from "./favoriteMovies";
import pagination from "./pagination";



const rootReducer = combineReducers({
  movies: fetchMovies, 
  movie: movieModal,
  movieFilter: filters,
  favorite: favoriteMovies,
  page: pagination
});

export const getFavoriteMovies = (state) => {
  const activeId = state.favorite.ui.activeBookMarks;
  const currentPage = state.page.currentPage;
  const pagesNumber = getPagesNumbers(state);

  const activeIdToRender = activeId.slice((currentPage - 1) * pagesNumber, currentPage * pagesNumber);
  
  const favoriteMovies = activeIdToRender.reduce((prev, curr) => {
    prev[curr] = state.favorite.data[curr];
    return prev;
  }, {});

  return favoriteMovies;
}

export const getPagesNumbers = (state) => {
  const bookMarksLength = state.favorite.ui.activeBookMarks.length;
  
  const pagesNumber = Math.ceil(bookMarksLength / 20);

  return pagesNumber;
}

export default rootReducer;