import React from "react";

const FilmCardsBlock = ({movies}) => {
    
    return (
        <div className="movies-block">
          {""}
        </div>
    )
}

FilmCardsBlock.defaultProps = {
    movies: [{"title": "american pie", "year": 1999}]
}

export default FilmCardsBlock;