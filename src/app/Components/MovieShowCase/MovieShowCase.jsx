import React from "react";
import { connect } from "react-redux";

import FilmCardsContainer from "../../Containers/FilmCardsContainer/FilmCardsContainer";

import "./MovieShowCase.css";

const MovieShowCase = ({ movieFilter }) => {

    return (
        <div className="movies-showcase">
            <h2 className="movie-showcase__movies-type">{movieFilter}</h2>
            <FilmCardsContainer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movieFilter: state.movieFilter
    }
}

export default connect(mapStateToProps, null)(MovieShowCase);