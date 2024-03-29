import { PAGINATION } from "../../constants";

const {
  GO_TO_NEXT_PAGE,
  GO_BACK_TO_PAGE,
  GO_TO_CHOSEN_PAGE,
  SET_TOTAL_PAGES,
  RESET_PAGE
} = PAGINATION;

const initialState = {
  currentPage: 1,
  totalPages: 0,
  pageNeighboursNumber: 2,
};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_NEXT_PAGE:
      return {
        ...state,
        currentPage: Math.min(
          state.currentPage + state.pageNeighboursNumber * 2 + 1,
          state.totalPages
        )
      };
    case GO_BACK_TO_PAGE:
      return {
        ...state,
        currentPage: Math.max(
          state.currentPage - state.pageNeighboursNumber * 2 - 1,
          0
        )
      };
    case GO_TO_CHOSEN_PAGE:
      return {
        ...state,
        currentPage: action.data
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.data
      };
    case RESET_PAGE:
      return {
        ...state,
        currentPage: 1
      }
    default:
      return state;
  }
};

export default pagination;
