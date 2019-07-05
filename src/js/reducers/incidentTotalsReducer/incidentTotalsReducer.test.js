import {
  GET_INCIDENT_TOTALS,
} from '../../actions/types';

import incidentTotalsReducer from '.';

describe('Incident Totals Reducer', () => {
  it('Should return the initial state', () => {
    const newState = incidentTotalsReducer(undefined, {});
    expect(newState.interventionTotals.pending).toBe(0);
  });

  it('Should indicate the start of loading', () => {
    const payload = {
      redflagTotals: {
        pending: 10,
        rejected: 0,
        investigation: 0,
        resolved: 0,
        total: 0,
      },
      interventionTotals: {
        pending: 0,
        rejected: 0,
        investigation: 0,
        resolved: 0,
        total: 0,
      }
    };

    const newState = incidentTotalsReducer(undefined, { type: GET_INCIDENT_TOTALS, payload });
    expect(newState.redflagTotals.pending).toBe(10);
    expect(newState.redflagTotals.resolved).toBe(0);
  });
});
