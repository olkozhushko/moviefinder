import { FAVORITE } from "../../constants";

const { ADD_MOVIE, GO_TO_FAVORITES, CLOSE_FAVORITE, REMOVE_FROM_FAVORITE } = FAVORITE;

const initialState = {
  data: {},
  isFavoritesOpen: false,
  ui: {
    activeBookMarks: []
  }
}

const favoriteMovies = (state = initialState, action) => {

  switch(action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.data.id]: action.data
        },
        ui: {
          activeBookMarks: [...state.ui.activeBookMarks, action.data.id]
        }
      }
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        data: {
          ...Object.keys(state.data).reduce((prev, curr) => {
            if(+action.movieId === +curr) return prev;
            prev[curr] = state.data[curr];
            return prev;
          }, {})
        },
        ui: {
          activeBookMarks: state.ui.activeBookMarks.filter(id => id !== action.movieId)
        }
      }
    case GO_TO_FAVORITES:
      return {
        ...state,
        isFavoritesOpen: true
      }
    case CLOSE_FAVORITE: 
      return {
        ...state,
        isFavoritesOpen: false
      }
    default:
      return state;
  }
}

export default favoriteMovies;