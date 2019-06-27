import {
  GET_INCIDENT_TOTALS,
} from '../../actions/types';

const initialState = {
  redflagTotals: {
    pending: 0,
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

const incidentTotalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INCIDENT_TOTALS:
      return {
        ...state,
        redflagTotals: {
          pending: action.payload.redflagTotals.pending,
          rejected: action.payload.redflagTotals.rejected,
          investigation: action.payload.redflagTotals.investigation,
          resolved: action.payload.redflagTotals.resolved,
          total: action.payload.redflagTotals.total,
        },
        interventionTotals: {
          pending: action.payload.interventionTotals.pending,
          rejected: action.payload.interventionTotals.rejected,
          investigation: action.payload.interventionTotals.investigation,
          resolved: action.payload.interventionTotals.resolved,
          total: action.payload.interventionTotals.total,
        }
      };

    default:
      return state;
  }
};

export default incidentTotalsReducer;
