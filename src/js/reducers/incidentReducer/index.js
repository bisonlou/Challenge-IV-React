import {
  POST_INCIDENT_START,
  POST_INCIDENT_FAILURE,
  POST_INCIDENT_SUCCESS,
  RESET_IS_INCIDENT_POSTED,
  RESET_IS_INCIDENT_DELETED,
  DELETE_INCIDENT_FAILURE,
  DELETE_INCIDENT_SUCCESS,
  DELETE_INCIDENT_START,
  UPDATE_INCIDENT_FAILURE,
  UPDATE_INCIDENT_START,
  UPDATE_INCIDENT_SUCCESS,
  RESET_IS_INCIDENT_UPDATED,
} from '../../actions/types';

const initialState = {
  title: '',
  comment: '',
  lng: '',
  lat: '',
  isLoading: false,
  isIncidentPosted: false,
  isIncidentUpdated: false,
  isIncidentDeleted: false,
  isIncidentPostingFailed: false,
  isIncidentDeletionFailed: false,
  isIncidentUpdateFailed: false,
  errors: []
};

const incidentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };

    case POST_INCIDENT_SUCCESS:
      return {
        ...state,
        isIncidentPosted: true,
        isLoading: false,
        isIncidentPostingFailed: false,
        errors: [],
      };

    case UPDATE_INCIDENT_SUCCESS:
      return {
        ...state,
        isIncidentUpdated: true,
        isLoading: false,
        isIncidentUpdateFailed: false,
        errors: [],
      };

    case DELETE_INCIDENT_SUCCESS:
      return {
        ...state,
        isIncidentDeleted: true,
        isLoading: false,
        isIncidentDeletionFailed: false,
        errors: [],
      };

    case POST_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isIncidentPosted: false,
        isIncidentPostingFailed: true,
        errors: action.errors,
      };

    case UPDATE_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isIncidentUpdated: false,
        isIncidentUpdateFailed: true,
        errors: action.errors,
      };

    case DELETE_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isIncidentDeleted: false,
        isIncidentDeletionFailed: true,
        errors: action.errors,
      };

    case RESET_IS_INCIDENT_POSTED:
      return {
        ...state,
        isIncidentPosted: false,
      };

    case RESET_IS_INCIDENT_UPDATED:
      return {
        ...state,
        isIncidentUpdated: false,
      };

    case RESET_IS_INCIDENT_DELETED:
      return {
        ...state,
        isIncidentDeleted: false,
      };

    default:
      return state;
  }
};

export default incidentReducer;
