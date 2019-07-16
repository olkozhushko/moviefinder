import { SIDE_PANEL } from "../../constants";

const { SET_VISIBILITY } = SIDE_PANEL;

export const setSidePanelVisivility = (value) => ({
  type: SET_VISIBILITY,
  value
})