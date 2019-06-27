import {
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from '../../actions/types'

import signupReducer from '../authReducer';

describe('Signup Reducer', () => {
  it('should return the initial state', () => {
    const newState = signupReducer(undefined, {});
    expect(newState.isLoggedIn).toBe(false);
  });

  it('Should indicate the start of loading', () => {    
    const newState = signupReducer(undefined, { type: LOGIN_START });
    expect(newState.isLoading).toBe(true);
  });

  it('Should indicate failure to signup', () => {  
    const errors = ['First name required', 'Last Name Required']  
    const newState = signupReducer(undefined, { type: LOGIN_FAILURE, errors });
    expect(newState.isLoading).toBe(false);
    expect(newState.isLoginFailed).toBe(true);
    expect(newState.errors.length).toBe(2);
  });

  it('Should indicate failure to signup', () => {  
    const username = 'bison';
    const newState = signupReducer(undefined, { type: LOGIN_SUCCESS, username });
    expect(newState.isLoading).toBe(false);
    expect(newState.isLoginFailed).toBe(false);
    expect(newState.errors.length).toBe(0);
    expect(newState.isLoggedIn).toBe(true);
    expect(newState.username).toBe('bison');
  });
});
