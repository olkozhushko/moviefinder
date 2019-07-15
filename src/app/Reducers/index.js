import {combineReducers} from "redux";

import fetchMovies from "./fetchMovies";
import movieModal from "./movieModal";
import filters from "./filters";
import favoriteMovies from "./favoriteMovies";
import pagination from "./pagination";
import searchInput from "./searchInput";



const rootReducer = combineReducers({
  movies: fetchMovies, 
  movie: movieModal,
  movieFilter: filters,
  favorite: favoriteMovies,
  page: pagination,
  searchInput
});

//retrieving favorite movies depending on what favorite-movies page we are 
//currently on
export const getFavoriteMovies = (state) => {
  const activeIds = state.favorite.ui.activeBookMarks;
  const currentPage = state.page.currentPage;
  
  //20 is number of movie items per page you can change that value on whatever you want;
  const activeIdsToRender = activeIds.slice((currentPage - 1) * 20, currentPage * 20);


  const favoriteMovies = activeIdsToRender.reduce((prev, curr) => {
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