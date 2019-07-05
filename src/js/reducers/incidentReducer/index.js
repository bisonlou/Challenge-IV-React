import {
  POST_INCIDENT_START,
  POST_INCIDENT_FAILURE,
  POST_INCIDENT_SUCCESS,
  RESET_ISINCIDENT_POSTED,
} from '../../actions/types';

const initialState = {
  title: '',
  comment: '',
  lng: '',
  lat: '',
  isLoading: false,
  isIncidentPosted: false,
  isIncidentPostingFailed: false,
  errors: []
};

const incidentReducer = (state = initialState, action) => {
  switch (action.type) {
      case POST_INCIDENT_START:
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

      case POST_INCIDENT_FAILURE:
          return {
              ...state,
              isLoading: false,
              isIncidentPosted: false,
              isIncidentPostingFailed: true,
              errors: action.errors,
          };

      case RESET_ISINCIDENT_POSTED:
        return {
          ...state,
          isIncidentPosted: false,
        };

      default:
          return state;
  }
};

export default incidentReducer;
