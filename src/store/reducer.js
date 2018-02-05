import {combineReducers} from 'redux';
import { counterReducer } from "./index.redux";
import { authReducer } from "./auth.redux";

export default combineReducers({counterReducer,authReducer})