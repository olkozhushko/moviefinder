import { PAGINATION } from "./constants";

const { GO_TO_NEXT_PAGE, GO_BACK_TO_PAGE, GO_TO_CHOSEN_PAGE, SET_TOTAL_PAGES } = PAGINATION;

export const goToNextPage = () => {
  return {
    type: GO_TO_NEXT_PAGE
  }
}

export const goBackPage = () => {
  return {
    type: GO_BACK_TO_PAGE
  }
}

export const goToChosenPage = (data) => {
  return {
    type: GO_TO_CHOSEN_PAGE,
    data
  }
}

export const setTotalPages = (data) => {
  return {
    type: SET_TOTAL_PAGES,
    data
  }
}