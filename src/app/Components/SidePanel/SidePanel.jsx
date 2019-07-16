import React from "react";
import { connect } from "react-redux";

import MovieFilters from "../../Containers/SidePanel/MovieFilters";
import SomeBlock from "./SomeBlock";

import "./SidePanel.css";

const SidePanel = ({ isShown }) => {
  let barStyle = {
    width: "200px"
  };

  barStyle = isShown ? barStyle : {};

  return (
    <div className="page__sidebar" style={barStyle}>
      <MovieFilters />
      <SomeBlock />
    </div>
  );
};

const mapStateToProps = state => ({
  isShown: state.ui.isSidePanelShown
});

export default connect(
  mapStateToProps,
  null
)(SidePanel);
