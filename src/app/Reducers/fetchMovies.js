import  { MOVIES_FETCH } from "../../constants";

const { FETCH_MOVIES_DATA, FETCHED_DATA, RECEIVE_ERROR } = MOVIES_FETCH;

const initialState = {
    fetchedData: {},
    isFetching: false,
    isErrored: false,
    movieFilter: "New Releases"
}

const fetchMovies = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_DATA:
            return {
                ...state, 
                isFetching: true,
                isErrored: false
            }
        case FETCHED_DATA:
            return {
                ...state,
                fetchedData: action.data.reduce((prev, curr) => {
                  prev[curr.id] = curr;
                  return prev;
                }, {}),
                isFetching: false,
                isErrored: false
            }
        case RECEIVE_ERROR:
            return {
                ...state,
                isErrored: true,
                isFetching: false
            }
        default:
            return state;
    }
}

export default fetchMovies;