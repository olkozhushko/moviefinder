import  { SEARCH_FETCH } from "./constants";

import store from "../../store";

const { FETCH_SEARCH_DATA, FETCHED_DATA, RECEIVE_ERROR, SET_MOVIES_FILTER } = SEARCH_FETCH;

const API_KEY = "e439cc3bb62f4282847a5012c7511e5f";

const fetchPost = () => {
    return {
        type: FETCH_SEARCH_DATA
    };
}

const receivePost = (data) => {
    return {
        type: FETCHED_DATA,
        data
    };
};

const receiveError = () => {
    return {
        type: RECEIVE_ERROR
    };
};

export const thunkFetchAction = (url, input="") => {

    input = `query=${input.replace(/\s+/g, "+")}`;

    store.dispatch(fetchPost());

    return (dispatch, getState) => {
      return fetch(`${url}?api_key=${API_KEY}&${input}`)
        .then(
            res => res.json(),
            err => dispatch(receiveError())
        )
        .then(data => {
            if(!data.results) {
                dispatch(receiveError());
            } else {
                const editedData = data.results.map(el => {
                    return {
                        title: el.title,
                        id: el.id,
                        poster: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
                        rating: el.vote_average
                    }
                })
                dispatch(receivePost(editedData));
            }
        })
    }
} 