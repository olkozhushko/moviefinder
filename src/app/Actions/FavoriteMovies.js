import { FAVORITE } from "../../constants";

const { ADD_MOVIE, GO_TO_FAVORITES, CLOSE_FAVORITE, REMOVE_FROM_FAVORITE } = FAVORITE;


export const addToFavorite = (data) => {
  return {
    type: ADD_MOVIE,
    data
  }
}

export const goToFavorite = () => {
  return {
    type: GO_TO_FAVORITES
  }
}

export const closeFavorite = () => {
  return {
    type: CLOSE_FAVORITE
  }
}

export const removeFromFavorite = (id) => {
  return {
    type: REMOVE_FROM_FAVORITE,
    movieId: id
  }
}