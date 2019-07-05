import axios from 'axios';
import {
    POST_INCIDENT_START,
    POST_INCIDENT_SUCCESS,
    POST_INCIDENT_FAILURE,
    RESET_ISINCIDENT_POSTED
} from '../types'
import { BASE_URL, getHeaders } from '../../utilities';

/*
* action to signal the start of an incident action
*/
const postIncidentStart = () => ({ type: POST_INCIDENT_START });

/**
* action to post and incident
* @param incident object
*/
const postIncindentSuccess = incident => ({ type: POST_INCIDENT_SUCCESS, incident });

/**
* action to show incident posting failure
* @param erros array
*/
const postIncidentFailed = errors => ({ type: POST_INCIDENT_FAILURE, errors });

/**
 * resets the state's isIncidentPosted flag
 */
 export const resetIsIncidentPosted = () => ({ type: RESET_ISINCIDENT_POSTED });

/** 
* post incident action creator
* @param {object}  incident to post
**/
export const postIncident = incident => dispatch => {
    dispatch(postIncidentStart());

    const url = `${BASE_URL}${'incidents'}`;
    const body = {
      'title': incident.title,
      'comment': incident.comment,
      'latitude': incident.lat,
      'longitude': incident.lng,
      'type': incident.type,
    };

    return axios.post(url, body, getHeaders())
        .then(({ data: { data: data } }) => dispatch(postIncindentSuccess(data[0])))
        .catch(data => dispatch(postIncidentFailed(data.response.data.errors)));
}
