import cityTypes from './types';

const INTIAL_STATE = {
  isLoading: false,
  city: null,
  error: null
};

const setCityReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case cityTypes.START_SET_CITY:
      return {
        ...state,
        isLoading: true,
        city: null,
        error: null
      };
    case cityTypes.SET_CITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        city: action.payload,
        error: null
      };
    case cityTypes.SET_CITY_FAILURE:
      return {
        ...state,
        city: null,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default setCityReducer;
