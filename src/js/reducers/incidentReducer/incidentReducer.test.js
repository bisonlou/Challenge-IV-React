import {
  POST_INCIDENT_START,
  POST_INCIDENT_FAILURE,
  POST_INCIDENT_SUCCESS,
} from '../../actions/types'

import incidentReducer from '.';

describe('Incident Reducer', () => {
  it('Should return the initial state', () => {
    const newState = incidentReducer(undefined, {});
    expect(newState.isLoading).toBe(false);
  });

  it('Should indicate the start of loading', () => {
    const newState = incidentReducer(undefined, { type: POST_INCIDENT_START });
    expect(newState.isLoading).toBe(true);
  });

  it('Should indicate a successful post of an incident', () => {
    const newState = incidentReducer(undefined, { type: POST_INCIDENT_SUCCESS });
    expect(newState.isLoading).toBe(false);
    expect(newState.isIncidentPosted).toBe(true);
    expect(newState.isIncidentPostingFailed).toBe(false);
  });

  it('Should indicate failure in incident posting on failure', () => {
    const newState = incidentReducer(undefined, { type: POST_INCIDENT_FAILURE, errors: ['Invalid Token'] });
    expect(newState.isLoading).toBe(false);
    expect(newState.isIncidentPosted).toBe(false);
    expect(newState.isIncidentPostingFailed).toBe(true);
    expect(newState.errors.length).toBe(1);
  });
});
