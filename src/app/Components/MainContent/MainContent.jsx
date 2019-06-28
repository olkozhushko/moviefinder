import React from "react";
import { connect } from "react-redux";

import SideBar from "../SideBar/SideBar";
import MovieShowCase from "../MovieShowCase/MovieShowCase";
import MovieInfoPage from "../MovieInfoPage/MovieInfoPage";
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
  const isFetching = state.movies.isFetching || state.movie.isFetching;
  const isErrored = state.movies.isErrored || state.movie.isErrored;

  return {
    isOpen: state.movie.isOpen,
    movieData: state.movie.movieDetails,
    isFetching,
    isErrored
  };
};

export default connect(
  mapStateToProps,
  null
)(MainContent);
