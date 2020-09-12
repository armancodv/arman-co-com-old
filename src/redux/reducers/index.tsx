import {combineReducers} from 'redux';
import {user} from "./user";
import {general} from "./general";

export default combineReducers({
    user,
    general
});