import React from "react";
import { connect } from "react-redux";

import Header from "../../Components/Header/Header";
import MainContent from "../../Components/MainContent/MainContent";

import "./App.css";

import { thunkFetchAction } from "../../Actions/fetchData";

class App extends React.Component {

  componentDidMount() {
    this.props.fetchData("https://api.themoviedb.org/3/movie/now_playing");
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

const mapDispatchToProps = dispatch => ({
  fetchData: (type, typeInput) => dispatch(thunkFetchAction(type, typeInput))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
