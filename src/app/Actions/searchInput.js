import { SET_SEARCH_INPUT } from "../../constants";

export const setSearchInput = (data) => {
  return {
    type: SET_SEARCH_INPUT,
    data
  }
}