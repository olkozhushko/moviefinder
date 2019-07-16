import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import rootReducer from "./app/Reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;