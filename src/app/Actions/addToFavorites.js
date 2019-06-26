import { addToFavorite } from "./constants";

const { ADD_MOVIE, GO_TO_FAVORITES } = addToFavorite;


export const addToFavorites = () => {
  return {
    type: ADD_MOVIE
  }
}

export const goToFavorites = () => {
  return {
    type: GO_TO_FAVORITES
  }
}