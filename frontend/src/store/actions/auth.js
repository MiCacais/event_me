import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, client, uid, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        client: client,
        uid: uid,
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
    localStorage.removeItem('token');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        }
        axios.post('http://localhost:5000/auth/sign_in', authData)
            .then(response => {
                localStorage.setItem('token', response.headers["access-token"])
                localStorage.setItem('client', response.headers["client"])
                localStorage.setItem('uid', response.headers["uid"])
                localStorage.setItem('userId', response.data.data.id)
                dispatch(authSuccess(response.headers["access-token"], response.headers["client"], response.headers["uid"], response.data.data.id));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};

export const signUp = (name, last_name, email, password) => {
    return dispatch => {
        dispatch(authStart());
        const newUser = {
            name: name,
            last_name: last_name,
            email: email,
            password: password
        }
        axios.post('http://localhost:5000/auth', newUser)
            .then(response => {
                localStorage.setItem('token', response.headers["access-token"])
                localStorage.setItem('client', response.headers["client"])
                localStorage.setItem('uid', response.headers["uid"])
                localStorage.setItem('userId', response.data.data.id)
                dispatch(authSuccess(response.headers["access-token"], response.headers["client"], response.headers["uid"], response.data.data.id));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};

export const setAuthRedirectPath = ( path ) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}