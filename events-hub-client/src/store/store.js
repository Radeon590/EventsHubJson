import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/reducers';
import reduxCookiesMiddleware from 'redux-cookies-middleware';
import { initialState, paths } from './initialState';

//const middlewares = () => 
//const enhancers = compose(...[initialState, middlewares]); 
const enhancers = [initialState, applyMiddleware(reduxCookiesMiddleware(paths))];

const store = createStore(reducers, compose(...enhancers));

export default store;