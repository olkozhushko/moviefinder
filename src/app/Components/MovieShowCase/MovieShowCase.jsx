import React from "react";
import { connect } from "react-redux";

import FilmCardsContainer from "../../Containers/FilmCardsContainer/FilmCardsContainer";
import Pagination from "../Pagination/Pagination";

import "./MovieShowCase.css";

const MovieShowCase = ({ movieFilter }) => {

    return (
        <div className="movies-showcase">
            <h2 className="movie-showcase__movies-type">{movieFilter}</h2>
            <FilmCardsContainer />
            <Pagination />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movieFilter: state.movieFilter
    }
}

export default connect(mapStateToProps, null)(MovieShowCase);