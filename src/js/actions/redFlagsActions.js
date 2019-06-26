import axios from 'axios';
import { BASE_URL, getHeaders } from '../utilities';
import {
    GET_RED_FLAGS
} from './types'

const getRedFlagsAction = () => dispatch => {
    const url = `${BASE_URL}${'redflags'}`;

    return axios.get(url, getHeaders())
        .then(data => dispatch({ type: GET_RED_FLAGS, payload: data }))
};

export default getRedFlagsAction;
