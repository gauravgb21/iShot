import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const inittialState = {};

const middleware = [thunk,logger];

const store = createStore(rootReducer,inittialState,applyMiddleware(...middleware));

export default store;