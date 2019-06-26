import axios from 'axios';
import { BASE_URL, getHeaders } from '../utilities';
import {
    GET_INTERVENTIONS
} from './types'

const getInterventionAction = () => dispatch => {
    const url = `${BASE_URL}${'interventions'}`;

    return axios.get(url, getHeaders())
        .then(data => dispatch({ type: GET_INTERVENTIONS, payload: data }))
};

export default getInterventionAction;
