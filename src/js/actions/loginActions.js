import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_START,
} from './types';
import { BASE_URL, setCookie, getHeaders } from '../utilities';

/*
* action to signal the start of a login action
*/
const startLogin = () => ({ type: LOGIN_START });

/**
* action to login in a user
* @param username string
*/
const login = username => ({ type: LOGIN_SUCCESS, username });

/**
* action to show login failure
* @param erros array
*/
const loginFailed = errors => ({ type: LOGIN_FAILURE, errors });

/**
* login action creator
* @param {string}  email of the uer
* @param {string}  passsword of the user
* */
const loginAction = (email, password) => (dispatch) => {
  dispatch(startLogin());

  const url = `${BASE_URL}${'auth/login'}`;
  const body = {
    email,
    password
  };

  return axios.post(url, body, getHeaders)
    .then(({ data: { data } }) => {
      setCookie(data[0].access_token);
      return dispatch(login(data[0].user.username));
    })
    .catch(data => dispatch(loginFailed(data.response.data.errors)));
};

export default loginAction;
