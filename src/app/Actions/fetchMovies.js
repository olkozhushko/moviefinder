import  { MOVIES_FETCH } from "../../constants";

import store from "../../store";
import { setTotalPages } from "./pagination";

const { FETCH_MOVIES_DATA, FETCHED_DATA, RECEIVE_ERROR } = MOVIES_FETCH;

const API_KEY = "e439cc3bb62f4282847a5012c7511e5f";

const fetchMoviesData = () => {
    return {
        type: FETCH_MOVIES_DATA
    };
}

const getfetchedData = (data) => {
    return {
        type: FETCHED_DATA,
        data
    };
};

const showError = () => {
    return {
        type: RECEIVE_ERROR
    };
};

export const thunkFetchMoviesAction = (url, input="") => {
    
    input = input ? `&query=${input.replace(/\s+/g, "+")}` : "";
    
    store.dispatch(fetchMoviesData());

    return (dispatch, getState) => {
      const currentPage = getState().page.pageState.currentPage;

      const fullUrl = `https://api.themoviedb.org/3/${url}?api_key=${API_KEY}${input}&page=${currentPage}`;

      console.log("fullurl", fullUrl);

      return fetch(fullUrl)
        .then(
            res => res.json(),
            err => dispatch(showError())
        )
        .then(data => {
            if(!data.results) {
                dispatch(showError());
            } else {
                const editedData = data.results.map(el => {
                    return {
                        title: el.title,
                        id: el.id,
                        poster: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
                        rating: el.vote_average
                    }
                })
                dispatch(getfetchedData(editedData));
                dispatch(setTotalPages(data.total_pages));
            }
        })
    }
} 