import {combineReducers} from "redux";

import getDataReducer from "./fetchData";
import movieModalReducer from "./movieModal";
import setFilterReducer from "./setFilter";
import addFavoriteReducer from "./FavoriteMovies";
import paginate from "./pagination";



const rootReducer = combineReducers({
  movies: getDataReducer, 
  movie: movieModalReducer,
  movieFilter: setFilterReducer,
  favorite: addFavoriteReducer,
  page: paginate
});

export default rootReducer;