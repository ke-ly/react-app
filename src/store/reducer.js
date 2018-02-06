import { combineReducers } from 'redux';
import { counterReducer } from "./index.redux.js";
import { authReducer } from "./auth.redux.js";

export default combineReducers({counterReducer,authReducer})