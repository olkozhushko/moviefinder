import { SIDE_PANEL } from "../../constants";

const { SET_VISIBILITY } = SIDE_PANEL;

const sidePanel = (state = false, action) => {
  if (action.type === SET_VISIBILITY) {
    return action.value
  }
  return state;
}

export default sidePanel;