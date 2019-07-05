import { GET_INTERVENTIONS } from '../actions/types';

const initialState = {
  interventions: []
};

const interventions = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_INTERVENTIONS:
      return {
        ...state,
        interventions: actions.payload.data.data[0]
      };

    default:
      return state;
  }
};

export default interventions;
