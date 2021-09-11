import userReducer from "./user";
import { combineReducers } from 'redux';
import loginReducer from "./login";
import { routerReducer } from 'react-router-redux';

const allReducers = combineReducers({
    userReducer: userReducer,
    loginReducer: loginReducer,
    routerReducer: routerReducer
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;