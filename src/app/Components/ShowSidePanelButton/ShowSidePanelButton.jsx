import React from "react";

import "./ShowSidePanelButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const ShowSidePanelButton = ({isShown, onClick}) => {
  return (
    <>
      <button 
        type="button" 
        className="show-bar-button"
        onClick={onClick}
      >
        {
          isShown ?  
          <FontAwesomeIcon 
            icon={faTimes} 
            className="show-bar-button__icon" 
          /> :
          <FontAwesomeIcon 
            icon={faBars} 
            className="show-bar-button__icon" 
          />
        }
      </button>
    </>
  )
}

export default ShowSidePanelButton;