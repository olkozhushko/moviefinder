import { FETCH_USER, FETCHED_USER, RECEIVE_ERROR } from "./constants";

const initialState = {
    fetchedData: {},
    isFetching: false,
    isError: false
}

const getDataReducers = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER:
            return {
                ...state, 
                isFetching: true,
                isError: false
            }
        case FETCHED_USER:
            return {
                ...state,
                fetchedData: action.data,
                isFetching: false,
                isError: false
            }
        case RECEIVE_ERROR:
            return {
                ...state,
                isError: true
            }
        default:
            return state;
    }
}

export default getDataReducers;