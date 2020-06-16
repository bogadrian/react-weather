import types from './types';

const INTIAL_STATE = {
  data: null,
  isLoading: false,
  arror: null
};

const fetchReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case types.START_FETCH:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      };
    case types.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default fetchReducer;
