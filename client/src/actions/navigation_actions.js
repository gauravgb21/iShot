import { CHANGE_ROUTE } from './types';

export const changeRoute = (routeName) => dispatch => {
    dispatch({
        type :  CHANGE_ROUTE,
        payload : {
            selectedRoute : routeName
        }
    });   
}