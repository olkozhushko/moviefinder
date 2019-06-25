import React from "react";
import { connect } from "react-redux";

import SideBar from "../SideBar/SideBar";
import MovieShowCase from "../MovieShowCase/MovieShowCase";
import Loader from "./Loader";
import Error from "./Error";

import "./MainContent.css";

const MainContent = ({ isFetching, isErrored, isOpen, movieData}) => {
  return (
    <main className="page-wrapper">
      {isFetching ? (
        <Loader />
      ) : isErrored ? (
        <Error />
      ) : (
        <>
          <SideBar />
          {!isOpen ? <MovieShowCase /> : <MovieInfoPage data={movieData}/>}
        </>
      )}
    </main>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.movies.isFetching,
    isErrored: state.movies.isErrored,
    isOpen: state.movie.isOpen,
    movieData: state.movie.movieDetails
  };
};

export default connect(
  mapStateToProps,
  null
)(MainContent);
