import { addToFavorite } from "./constants";

const { ADD_MOVIE } = addToFavorite;

const initialState = {
  movieId: "tt12234",
  poster: "",
  title: "Some Title",
  rating: 6.8
}

const addToFavorite = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        ...action.data
      }
  }
}