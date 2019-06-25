import React from "react";
import { connect } from "react-redux";

import FilmCardsContainer from "../../Containers/FilmCardsContainer/FilmCardsContainer";

import "./MovieShowCase.css";

const MovieShowCase = ({movieData}) => {

    return (
        <div className="movies-showcase">
            <h2 className="movie-showcase__movies-type">New Releases</h2>
            <FilmCardsContainer />
        </div>
    )
}


export default connect(mapStateToProps, null)(MovieShowCase);