import { CREATE_POST , DELETE_POST , FETCH_POSTS , SET_IMAGE_URL , OPEN_CREATE_POST_MODAL , CLOSE_CREATE_POST_MODAL , LIKE_POST , UNLIKE_POST , POST_COMMENT , OPEN_COMMENTS_LIST , CLOSE_COMMENTS_LIST , FETCH_COMMENTS } from './types';
import axios from 'axios';

let axiosConfig = {
    headers : {
        "x-auth-token" : localStorage.getItem('token')
    }
};

export const fetchPosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/posts',axiosConfig);
        dispatch({
            type : FETCH_POSTS,
            payload : {
                postsData : res.data.posts.reverse(),
                likedByMe : res.data.likedByMe.map( data => data.ACTIVITY_ID)
            }
        });
        console.log("posts Data is => ",res.data);
    }
    catch(err){
        console.log("Error is => ",err.response.data);
    }
}

export const createNewPost = (payload) => async dispatch => {
    try{
        const res = await axios.post('/api/posts',payload,axiosConfig);
        dispatch(closeCreatePostModal());
        dispatch(fetchPosts());
        console.log("Post Created => ",res.data);
    }
    catch(err){
        console.log("Errors are ",err.response.data);
    }
}

export const openCreatePostModal = () => dispatch => {
    dispatch({
        type : OPEN_CREATE_POST_MODAL,
        payload : {
            showCreatePostModal : true        
        }
    });
}

export const setImageURL = (data) => dispatch => {
    dispatch({
        type : SET_IMAGE_URL,
        payload : {
            postImageUrl : data        
        }
    });
}

export const closeCreatePostModal = () => dispatch => {
    dispatch({
        type : CLOSE_CREATE_POST_MODAL,
        payload : {
            showCreatePostModal : false
        }
    });
}

export const likePost = (postId,updatedLikeByMe,updatedPostData) => async dispatch => {
    try{
        dispatch({
            type : LIKE_POST,
            payload : {
                likedByMe : updatedLikeByMe,
                postsData : updatedPostData
            }
        });
        const res = await axios.put(`/api/posts/like/${postId}`,{},axiosConfig);
    }
    catch(err){
        console.log("Errors are ",err.response.data);
    }   
}

export const unlikePost = (postId,updatedLikeByMe,updatedPostData) => async dispatch => {
    try{
        dispatch({
            type : UNLIKE_POST,
            payload : {
                likedByMe : updatedLikeByMe,
                postsData : updatedPostData
            }
        });
        const res = await axios.put(`/api/posts/unlike/${postId}`,{},axiosConfig);
    }
    catch(err){
        console.log("Errors are ",err.response.data);
    }
}

export const postComment = (postId,commentText,updatedPostData) => async dispatch => {
    try{
        dispatch({
            type : POST_COMMENT,
            payload : {
                postsData : updatedPostData
            }
        });
        const payload = {
            COMMENT_TEXT : commentText
        };
        const res = await axios.post(`/api/posts/comment/${postId}`,payload,axiosConfig);
    }
    catch(err){
        console.log("Err while Posting Comment => ",err.response.data);
    }
}

export const openCommentsList = () => dispatch => {
    dispatch({
        type : OPEN_COMMENTS_LIST,
        payload : {
            showCommentListModal : true
        }
    });
}

export const closeCommentsList = () => dispatch => {
    dispatch({
        type : CLOSE_COMMENTS_LIST,
        payload : {
            showCommentListModal : false
        }
    });
} 

export const fetchComments = postId => async dispatch => {
    try{
        const res = await axios.get(`/api/posts/comment/${postId}`,axiosConfig);
        dispatch({
            type : FETCH_COMMENTS,
            payload : {
                commentsData : res.data.comments
            }
        });
    }
    catch(err){
        console.log("Error fetching comments => ",err.response.data);
    }
}