import { combineReducers } from "redux"

import countReducer from "./count";
import productsReducer from "./product";
import authReducer from "./auth";
import commonReducer from "./commonReducers";

export default combineReducers({
    countReducer,
    productsReducer,
    authReducer,
    commonReducer
})