import {
  SIGNUP_START,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from '../../actions/types';

import signupReducer from '.';

describe('Signup Reducer', () => {
  it('should return the initial state', () => {
    const newState = signupReducer(undefined, {});
    expect(newState.isSignedUp).toBe(false);
  });

  it('Should indicate the start of loading', () => {    
    const newState = signupReducer(undefined, { type: SIGNUP_START });
    expect(newState.isLoading).toBe(true);
  });

  it('Should indicate failure to signup', () => {  
    const errors = ['First name required', 'Last Name Required']  
    const newState = signupReducer(undefined, { type: SIGNUP_FAILURE, errors });
    expect(newState.isLoading).toBe(false);
    expect(newState.isSignupFailed).toBe(true);
    expect(newState.errors.length).toBe(2);
  });

  it('Should indicate failure to signup', () => {  
    const username = 'bison';
    const newState = signupReducer(undefined, { type: SIGNUP_SUCCESS, username });
    expect(newState.isLoading).toBe(false);
    expect(newState.isSignupFailed).toBe(false);
    expect(newState.errors.length).toBe(0);
    expect(newState.isSignedUp).toBe(true);
    expect(newState.username).toBe('bison');
  });
});
