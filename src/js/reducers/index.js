import { combineReducers } from 'redux';
import authReducer from './authReducer';
import redFlags from './redflags';
import interventions from './interventions';
import incidentReducer from './incidentReducer';
import incidentTotalsReducer from './incidentTotalsReducer';

const rootReducer = combineReducers({
  authReducer,
  incidentReducer,
  incidentTotalsReducer,
  redFlags,
  interventions,
});

export default rootReducer;
