import { combineReducers } from 'redux';

import { navigationReducer } from './navigation_reducer';
import { postReducer } from './posts';
import { authReducer } from './auth';

export default combineReducers({
    navigationReducer,
    postReducer,
    authReducer
});