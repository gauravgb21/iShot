import { CHANGE_ROUTE } from '../actions/types';

const INITIAL_STATE = {
    selectedRoute : 'home'
}

export const navigationReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case CHANGE_ROUTE : {
            return {
                ...state,
                ...action.payload
            };
        }
        default : return state;
    }
}