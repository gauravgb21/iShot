import { CREATE_POST , DELETE_POST , FETCH_POSTS , SET_IMAGE_URL , OPEN_CREATE_POST_MODAL , CLOSE_CREATE_POST_MODAL , LIKE_POST , UNLIKE_POST , POST_COMMENT , OPEN_COMMENTS_LIST , CLOSE_COMMENTS_LIST , FETCH_COMMENTS } from '../actions/types';

const INITIAL_STATE = {
    postsData : [],
    likedByMe : [],
    postImageUrl : '',
    showCreatePostModal : false,
    showCommentListModal : false,
    commentsData : []
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

        case LIKE_POST : {
            return {
                ...state,
                ...action.payload
            };
        }

        case UNLIKE_POST : {
            return {
                ...state,
                ...action.payload
            };
        }

        case POST_COMMENT : {
            return {
                ...state,
                ...action.payload
            };
        }

        case OPEN_COMMENTS_LIST : {
            return {
                ...state,
                ...action.payload
            };
        }

        case CLOSE_COMMENTS_LIST : {
            return {
                ...state,
                ...action.payload
            };
        }

        case FETCH_COMMENTS : {
            return {
                ...state,
                ...action.payload
            };
        }
    
        default: return state;
    }
}

