import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import redFlags from './redflags';
import interventions from './interventions';
import incidentReducer from './incidentReducer';
import incidentTotalsReducer from './incidentTotalsReducer';

const rootReducer = combineReducers({
    loginReducer,
    signupReducer,
    incidentReducer,
    incidentTotalsReducer,
    redFlags,
    interventions,
});

export default rootReducer;