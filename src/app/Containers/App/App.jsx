import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../../Components/Header/Header";
import MainContent from "../MainContent/MainContent";

import "./App.css";

import { thunkFetchMoviesAction } from "../../Actions/fetchMovies";



class App extends React.Component {

  componentDidMount() {
    this.props.fetchMovies("movie/now_playing");
  }

  render() {
    return (
      <div className="whole-page-wrapper">
        <Header />
        <MainContent />
      </div>
    );
  }
}

App.propTypes = {
  fetchMovies: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  fetchMovies: (type, typeInput) => dispatch(thunkFetchMoviesAction(type, typeInput))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
