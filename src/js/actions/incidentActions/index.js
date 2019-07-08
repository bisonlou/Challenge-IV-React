import axios from 'axios';
import {
  POST_INCIDENT_START,
  POST_INCIDENT_SUCCESS,
  POST_INCIDENT_FAILURE,
  RESET_IS_INCIDENT_POSTED,
  DELETE_INCIDENT_FAILURE,
  DELETE_INCIDENT_START,
  DELETE_INCIDENT_SUCCESS,
  RESET_IS_INCIDENT_DELETED,
} from '../types';
import { BASE_URL, getHeaders } from '../../utilities';

/*
* action to signal the start of an incident post action
*/
const postIncidentStart = () => ({ type: POST_INCIDENT_START });

/*
* action to signal the start of an incident delete action
*/
const deleteIncidentStart = () => ({ type: DELETE_INCIDENT_START });

/**
* action to post and incident
* @param incident object
*/
const postIncindentSuccess = incident => ({ type: POST_INCIDENT_SUCCESS, incident });

/**
* action to indicate incident deletion success
*/
const deleteIncindentSuccess = () => ({ type: DELETE_INCIDENT_SUCCESS });

/**
* action to show incident posting failure
* @param errors array
*/
const postIncidentFailed = errors => ({ type: POST_INCIDENT_FAILURE, errors });

/**
* action to show incident deletion failure
* @param errors array
*/
const deleteIncidentFailed = errors => ({ type: DELETE_INCIDENT_FAILURE, errors });

/**
 * resets the state's isIncidentPosted flag
 */
export const resetIsIncidentPosted = () => ({ type: RESET_IS_INCIDENT_POSTED });

/**
 * resets the state's isIncidentDeleted flag
 */
export const resetIsIncidentDeleted = () => ({ type: RESET_IS_INCIDENT_DELETED });

/**
* post incident action creator
* @param {object}  incident to post
* */

export const postIncident = incident => (dispatch) => {
  dispatch(postIncidentStart());

  const url = `${BASE_URL}${'incidents'}`;
  const body = {
    title: incident.title,
    comment: incident.comment,
    latitude: incident.lat,
    longitude: incident.lng,
    type: incident.type,
  };

  return axios.post(url, body, getHeaders())
    .then(({ data: { data } }) => dispatch(postIncindentSuccess(data[0])))
    .catch(data => dispatch(postIncidentFailed(data.response.data.errors)));
};

export const deleteIncident = incidentId => (dispatch) => {
  dispatch(deleteIncidentStart());

  const url = `${BASE_URL}${'incidents/'}${incidentId}`;

  return axios.delete(url, getHeaders())
    .then(() => dispatch(deleteIncindentSuccess()))
    .catch(data => dispatch(deleteIncidentFailed(data.response.data.errors)));
};
