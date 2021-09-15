import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import monitorReducersEnhancer from './monitorReducers';
import loggerMiddleware from './logger';
import allReducers from './reducers';
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync';

export default function configureStore(preloadedState) {
    
    const config = {};

    const middlewares = [loggerMiddleware, thunkMiddleware, createStateSyncMiddleware(config)];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = compose(...enhancers);
    
    const store = createStore(allReducers, preloadedState, composedEnhancers);

    initStateWithPrevTab(store);

    return store;
}