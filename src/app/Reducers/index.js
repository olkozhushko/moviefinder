import {combineReducers} from "redux";

import getDataReducer from "./getDataReducer";
import movieModalReducer from "./movieModalReducer";
import setFilterReducer from "./setFilterReduces";

const rootReducer = combineReducers({
  movies: getDataReducer, 
  movie: movieModalReducer,
  movieFilter: setFilterReducer
});

export default rootReducer;