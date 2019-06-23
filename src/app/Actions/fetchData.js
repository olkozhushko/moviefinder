import { FETCH_USER, FETCHED_USER, RECEIVE_ERROR } from "./constants";

import store from "../../store";

export const fetchPost = () => {
    return {
        type: FETCH_USER
    };
}

export const receivePost = (post) => {
    return {
        type: FETCHED_USER,
        data: post
    };
};

export const receiveError = () => {
    return {
        type: RECEIVE_ERROR
    };
};

export const thunkFetchAction = searchInput => {
    const input = searchInput.replace(/\s/g, "+");

    store.dispatch(fetchPost());

    return (dispatch, getState) => {
      return fetch(`http://www.omdbapi.com/?apikey=6e7bcfed&s=${input}`)
        .then(res => res.json())
        .then(data => {
            if(!data.Title) {
                throw new Error("Some error just happened");
            } else {
                dispatch(receivePost(data));
            }
        })
        .catch(err => dispatch(receiveError()));
    }
} 