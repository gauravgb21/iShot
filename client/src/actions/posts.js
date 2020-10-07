import { CREATE_POST , DELETE_POST , FETCH_POSTS , SET_IMAGE_URL , OPEN_CREATE_POST_MODAL , CLOSE_CREATE_POST_MODAL } from './types';
import axios from 'axios';

export const fetchPosts = () => async dispatch => {
    try{
        let axiosConfig = {
            headers : {
                "x-auth-token" : localStorage.getItem('token')
            }
        };
        const res = await axios.get('/api/posts',axiosConfig);
        dispatch({
            type : FETCH_POSTS,
            payload : {
                postsData : res.data.posts.reverse()
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
        let axiosConfig = {
            headers : {
                "x-auth-token" : localStorage.getItem('token')
            }
        };
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