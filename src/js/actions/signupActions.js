import axios from 'axios';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_START,
} from './types'
import { BASE_URL, setCookie, getHeaders } from '../utilities';

/*
* action to signal the start of a SIGNUP action
*/
const startSignup = () => ({ type: SIGNUP_START });

/**
* action to login in a user
* @param username string
*/
const signup = username => ({ type: SIGNUP_SUCCESS, username });

/**
* action to show login failure
* @param erros array
*/
const signupFailed = errors => ({ type: SIGNUP_FAILURE, errors });

/** 
* signup action creator
* @param {string}  email of the uer
* @param {string}  passsword of the user
**/
export const signupAction = user => dispatch => {
    dispatch(startSignup());

    const url = `${BASE_URL}${'auth/signup'}`;
    const body = {
        'user_name': user.username,
        'email': user.email,
        'first_name': user.firstname,
        'last_name': user.lastname,
        'phone_number': user.phonenumber,
        'password': user.password,
        'other_names': user.othernames,
        'is_admin': false
    };

    return axios.post(url, body, getHeaders)
        .then(({ data: { data: data } }) => {
            setCookie(data[0]['access_token']);
            return dispatch(signup(data[0]['user']['username']))
        })
        .catch(data => dispatch(signupFailed(data.response.data.errors)));
}
