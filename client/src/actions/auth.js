import { LOGIN_SUCCESS , LOGIN_FAIL , REGISTER_SUCCESS , REGISTER_FAIL , LOAD_USER_DATA , SET_ISAUTHENTICATED , LOG_OUT , AUTH_ERROR } from './types';
import axios from 'axios';

export const loadUserData = () => async dispatch => {
    try {
        let axiosConfig = {
            headers : {
                "x-auth-token" : localStorage.getItem('token')
            }
        };
        const res = await axios.get('/api/user/login',axiosConfig);
        dispatch({
            type : LOAD_USER_DATA,
            payload : res.data
        });
    }
    catch(err){
        dispatch(logOut());
        console.log("Error => ",err.response.data);
    }
}

export const setIsAuthenticated = (payload) => dispatch => {
    dispatch({
        type : SET_ISAUTHENTICATED,
        payload : {
            isAuthenticated : payload
        }
    });
}

export const loginUser = (payload) => async dispatch => {
    try {
        const res = await axios.post('/api/user/login',{...payload});
        console.log("received this ",res.data);
        localStorage.setItem('token',res.data.accessToken);
        dispatch({
            type : LOGIN_SUCCESS,
            payload : {
                isAuthenticated : true
            }
        });
        dispatch(loadUserData());
    }
    catch(err){
        const errors = err.response.data.msg;
        console.log("Error => ",errors);
    }
}


export const registerUser = payload => async dispatch => {
    try{
        const res = await axios.post('/api/user/register',{...payload});
        localStorage.setItem('token',res.data.accessToken);
        dispatch({
            type : REGISTER_SUCCESS,
            payload : {
                isAuthenticated : true
            }
        });
        dispatch(loadUserData());
    }
    catch(err){
        const errors = err.response.data.msg;
        console.log("Error => ",errors); 
    }
}

export const logOut = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({
        type : LOG_OUT
    });
}