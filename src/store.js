import {createStore} from "redux";

import getDataReducer from "./app/Reducers/getDataReducer";

const store = createStore(getDataReducer);

export default store;