import userReducer from "./user";
import { combineReducers } from 'redux';
import loginReducer from "./login";
import { routerReducer } from 'react-router-redux';

const allReducers = combineReducers({
    userReducer: userReducer,
    loginReducer: loginReducer,
    routerReducer: routerReducer
});

export default allReducers;