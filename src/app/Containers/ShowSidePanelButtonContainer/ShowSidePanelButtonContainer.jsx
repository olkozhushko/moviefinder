import React, { useState } from "react";
import { connect } from "react-redux";

import ShowSidePanelButton from "../../Components/ShowSidePanelButton/ShowSidePanelButton";

import { setSidePanelVisivility } from "../../Actions/sidePanel";



const ShowSidePanelButtonContainer = ({setVisibility}) => {
  
  const [isShown, setIsShown] = useState(false);

  const handleButtonClick = (e) => {
    setIsShown(!isShown);
    setVisibility(!isShown);
  }

  return (
    <ShowSidePanelButton 
      isShown={isShown} 
      onClick={handleButtonClick}
    />
  )
}

const mapDispatchToProps = (dispatch) => ({
  setVisibility: (value) => dispatch(setSidePanelVisivility(value))
})

export default connect(null, mapDispatchToProps)(ShowSidePanelButtonContainer);