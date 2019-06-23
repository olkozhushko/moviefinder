import { FETCH_USER, FETCHED_USER, RECEIVE_ERROR } from "../Actions/constants";

const initialState = {
    fetchedData: [{title: "american pie", poster: "https://images.pexels.com/photos/2395264/pexels-photo-2395264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}],
    isFetching: false,
    isErrored: false
}

const getDataReducers = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER:
            return {
                ...state, 
                isFetching: true,
                isErrored: false
            }
        case FETCHED_USER:
            return {
                ...state,
                fetchedData: action.data,
                isFetching: false,
                isErrored: false
            }
        case RECEIVE_ERROR:
            return {
                ...state,
                isErrored: true
            }
        default:
            console.log(state);
            return state;
    }
}

export default getDataReducers;