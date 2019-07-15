import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SideBar from "../../Components/SideBar/SideBar";
import MovieShowCase from "../../Components/MovieShowCase/MovieShowCase";
import MovieInfoPage from "../../Components/MovieInfoPage/MovieInfoPage";
import Loader from "../../Components/MainContent/Loader";
import Error from "../../Components/MainContent/Error";

import "../../Components/MainContent/MainContent.css";

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


MainContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  movieData: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isErrored: PropTypes.bool.isRequired
}

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
