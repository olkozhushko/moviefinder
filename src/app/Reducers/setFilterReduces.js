import { SET_MOVIES_FILTER } from "../Actions/constants";

const setFilterReducer = (state = "New Releases", action) => {
  if(action.type === SET_MOVIES_FILTER) {
    return action.filter;
  }
  return state;
}

export default setFilterReducer;