import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SidePanel from "../../Components/SidePanel/SidePanel";
import MovieShowCase from "../../Components/MovieShowCase/MovieShowCase";
import MovieInfoPage from "../../Components/MovieInfoPage/MovieInfoPage";
import Loader from "../../Components/MainContent/Loader";
import Error from "../../Components/MainContent/Error";
import ShowSidePanelButtonContainer from "../ShowSidePanelButtonContainer/ShowSidePanelButtonContainer";

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
          <ShowSidePanelButtonContainer />
          <SidePanel />
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
  const isFetching = state.page.movies.isFetching || state.page.movie.isFetching;
  const isErrored = state.page.movies.isErrored || state.page.movie.isErrored;

  return {
    isOpen: state.page.movie.isOpen,
    movieData: state.page.movie.movieDetails,
    isFetching,
    isErrored
  };
};

export default connect(
  mapStateToProps,
  null
)(MainContent);
