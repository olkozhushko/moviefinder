import  { SEARCH_FETCH } from "./constants";

import store from "../../store";

const { FETCH_SEARCH_DATA, FETCHED_DATA, RECEIVE_ERROR } = SEARCH_FETCH;

const API_KEY = "e439cc3bb62f4282847a5012c7511e5f";

export const fetchPost = () => {
    return {
        type: FETCH_SEARCH_DATA
    };
}

export const receivePost = (data) => {
    return {
        type: FETCHED_DATA,
        data
    };
};

export const receiveError = () => {
    return {
        type: RECEIVE_ERROR
    };
};

export const thunkFetchAction = (process="discovery", input="" , type="movie") => {

    input = input.replace(/\s+/g, "+");
    let filter = "";

    if(process === "search") {
        filter = `query=${input}`;
    } else if(process === "discovery") {
        filter = "primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22";
    }

    store.dispatch(fetchPost());

    return (dispatch, getState) => {
      return fetch(`https://api.themoviedb.org/3/${process}/${type}?api_key=${API_KEY}&${filter}`)
        .then(
            res => res.json(),
            err => dispatch(receiveError())
        )
        .then(data => {
            console.log(data);
            if(!data.results) {
                dispatch(receiveError());
            } else {
                const editedData = data.results.map(el => {
                    return {
                        title: el.title,
                        id: el.id,
                        poster: `https://image.tmdb.org/t/p/w500${el.poster_path}`
                    }
                })
                console.log(editedData);
                dispatch(receivePost(editedData));
            }
        })
    }
} 