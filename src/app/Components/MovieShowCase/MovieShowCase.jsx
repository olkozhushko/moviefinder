import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FilmCardsContainer from "../../Containers/FilmCardsContainer/FilmCardsContainer";
import PaginationContainer from "../../Containers/Pagination/PaginationContainer";

import "./MovieShowCase.css";

const MovieShowCase = ({ movieFilter }) => {

    return (
        <div className="movies-showcase">
            <h2 className="movie-showcase__movies-type">{movieFilter}</h2>
            <FilmCardsContainer />
            <PaginationContainer />
        </div>
    )
}

MovieShowCase.propTypes = {
    movieFilter: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        movieFilter: state.page.movieFilter
    }
}

export default connect(mapStateToProps, null)(MovieShowCase);