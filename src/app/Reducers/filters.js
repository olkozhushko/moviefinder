import { SET_MOVIES_FILTER } from "../../constants";

const filters = (state = "New Releases", action) => {
  if(action.type === SET_MOVIES_FILTER) {
    return action.filter;
  }
  return state;
}

export default filters;