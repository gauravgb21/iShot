import { LOGIN_SUCCESS , LOGIN_FAIL , REGISTER_SUCCESS , REGISTER_FAIL , LOAD_USER_DATA ,SET_ISAUTHENTICATED, LOG_OUT } from '../actions/types';

const INITIAL_STATE = {
    isAuthenticated : false,
    username : '',
    name : '',
    BIO : ''
};

export const authReducer = ( state = INITIAL_STATE , action ) => {
    switch(action.type){
        case LOGIN_SUCCESS : {
            return {
                ...state,
                ...action.payload
            }
        }

        case REGISTER_SUCCESS : {
            return {
                ...state,
                ...action.payload
            }
        }

        case LOAD_USER_DATA : {
            return {
                ...state,
                ...action.payload
            }
        }

        case SET_ISAUTHENTICATED : {
            return {
                ...state,
                ...action.payload
            };
        }

        case LOG_OUT : {
            return {
                ...state,
                isAuthenticated : false,
                username : '',
                name : '',
                BIO : ''
            };
        }

        default : return state;

    }
}