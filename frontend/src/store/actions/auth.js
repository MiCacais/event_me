import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            'email': email,
            'password': password
        }
        axios.post('http://localhost:5000/sign_in', authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.token, response.data.userId));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};