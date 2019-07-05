import { GET_RED_FLAGS } from '../actions/types';

const initialState = {
  redFlags: []
};

const redFlags = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_RED_FLAGS:
      return {
        ...state,
        redFlags: actions.payload.data.data[0]
      };

    default:
      return state;
  }
};

export default redFlags;
