import {
  SIGNUP_START,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from '../../actions/types';

const initialState = {
  username: '',
  isLoading: false,
  isSignedUp: false,
  isSignupFailed: false,
  errors: []
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
      case SIGNUP_START:
          return {
              ...state,
              isLoading: true,
          };
          
      case SIGNUP_SUCCESS:
          return {
              ...state,
              isSignedUp: true,
              isLoading: false,
              isSignupFailed: false,
              username: action.username,
              };

      case SIGNUP_FAILURE:
          return {
              ...state,
              isLoading: false,
              isSignedUp: false,
              isSignupFailed: true,
              errors: action.errors,
          };

      default:
          return state;
  }
};

export default signupReducer;
