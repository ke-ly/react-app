import {combineReducers} from 'redux';
import { userReducer } from './user.redux';
import { chatReducer } from './chat.redux';

export default combineReducers({userReducer,chatReducer})