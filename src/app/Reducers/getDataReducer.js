import  { SEARCH_FETCH } from "../Actions/constants";

const { FETCH_SEARCH_DATA, FETCHED_DATA, RECEIVE_ERROR } = SEARCH_FETCH;

const initialState = {
    fetchedData: [{title: "american pie", poster: "https://images.pexels.com/photos/2395264/pexels-photo-2395264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}],
    isFetching: false,
    isErrored: false,
    movieFilter: "New Releases"
}

const getDataReducers = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SEARCH_DATA:
            return {
                ...state, 
                isFetching: true,
                isErrored: false
            }
        case FETCHED_DATA:
            return {
                ...state,
                fetchedData: action.data,
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

export default getDataReducers;