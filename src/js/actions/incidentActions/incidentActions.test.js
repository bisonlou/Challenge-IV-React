import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { postIncident, updateIncident, deleteIncident } from '.';
import {
  POST_INCIDENT_FAILURE, POST_INCIDENT_START, POST_INCIDENT_SUCCESS,
  UPDATE_INCIDENT_START, UPDATE_INCIDENT_FAILURE, UPDATE_INCIDENT_SUCCESS,
  DELETE_INCIDENT_FAILURE, DELETE_INCIDENT_START, DELETE_INCIDENT_SUCCESS,
} from '../types';

jest.mock('axios');
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
let incident;

beforeEach(() => {
  store = mockStore();

  incident = {
    id: 1,
    type: 'red-flag',
    title: 'testing',
    comment: 'testing comment',
    lat: 90.9000,
    lng: 120.000
  };

  jest.clearAllMocks();
});

it('Should create a success and start actions on success', async () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: null }));

  const expectedActions = [
    { type: POST_INCIDENT_START },
    { type: POST_INCIDENT_SUCCESS },
  ];

  await store.dispatch(postIncident(incident));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});

it('Should create a failure and start actions on failure', async () => {
  mockAxios.post.mockRejectedValueOnce({ response: { data: { errors: ['Invalid credentials'] } } });

  const expectedActions = [
    { type: POST_INCIDENT_START },
    { type: POST_INCIDENT_FAILURE, errors: ['Invalid credentials'] },
  ];

  await store.dispatch(postIncident(incident));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
});

it('Should create a success and start actions on successfuly updating an incident', async () => {
  mockAxios.put.mockResolvedValueOnce();

  const expectedActions = [
    { type: UPDATE_INCIDENT_START },
    { type: UPDATE_INCIDENT_SUCCESS },
  ];

  await store.dispatch(updateIncident(incident));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.put).toHaveBeenCalledTimes(1);
});

it('Should create failure and start actions on failure to  update an incident', async () => {
  mockAxios.put.mockRejectedValueOnce({ response: { data: { errors: ['Invalid credentials'] } } });

  const expectedActions = [
    { type: UPDATE_INCIDENT_START },
    { type: UPDATE_INCIDENT_FAILURE, errors: ['Invalid credentials'] },
  ];

  await store.dispatch(updateIncident(incident));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.put).toHaveBeenCalledTimes(1);
});

it('Should create success and start actions on successfuly deleting an incident', async () => {
  mockAxios.delete.mockResolvedValueOnce();

  const expectedActions = [
    { type: DELETE_INCIDENT_START },
    { type: DELETE_INCIDENT_SUCCESS },
  ];

  const incidentId = 1;

  await store.dispatch(deleteIncident(incidentId));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.delete).toHaveBeenCalledTimes(1);
});

it('Should create failure and start actions on failure to delete an incident', async () => {
  mockAxios.delete.mockRejectedValueOnce({ response: { data: { errors: ['Invalid credentials'] } } });

  const expectedActions = [
    { type: DELETE_INCIDENT_START },
    { type: DELETE_INCIDENT_FAILURE, errors: ['Invalid credentials'] },
  ];
  const incidentId = 1;

  await store.dispatch(deleteIncident(incidentId));

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockAxios.delete).toHaveBeenCalledTimes(1);
});
