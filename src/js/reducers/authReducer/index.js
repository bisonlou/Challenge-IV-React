import {
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from '../../actions/types';

const initialState = {
  username: '',
  isLoading: false,
  isLoggedIn: false,
  isLoginFailed: false,
  errors: []
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        isLoginFailed: false,
        username: action.username,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        isLoginFailed: true,
        errors: action.errors,
      };

    default:
      return state;
  }
};

export default loginReducer;
