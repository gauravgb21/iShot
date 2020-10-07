import { CREATE_POST , DELETE_POST , FETCH_POSTS , SET_IMAGE_URL , OPEN_CREATE_POST_MODAL , CLOSE_CREATE_POST_MODAL } from '../actions/types';

const INITIAL_STATE = {
    postsData : [],
    postImageUrl : '',
    showCreatePostModal : false
}

export const postReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case CREATE_POST : {
            return {
                ...state,
                ...action.payload
            };
        }

        case DELETE_POST : {
            return {
                ...state,
                ...action.payload
            };
        }

        case FETCH_POSTS : {
            return {
                ...state,
                ...action.payload
            };
        }

        case SET_IMAGE_URL : {
            return {
                ...state,
                ...action.payload
            };
        }

        case OPEN_CREATE_POST_MODAL : {
            return {
                ...state,
                ...action.payload
            };
        }

        case CLOSE_CREATE_POST_MODAL : {
            return {
                ...state,
                ...action.payload
            };
        }
    
        default: return state;
    }
}

