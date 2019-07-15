import { SET_SEARCH_INPUT } from "../../constants";

const initialState = "";

const searchInput = (state = initialState, action) => {
  if(action.type === SET_SEARCH_INPUT) {
    return action.data;
  }

  return state;
}

export default searchInput;