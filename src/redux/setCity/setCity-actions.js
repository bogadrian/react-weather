import cityTypes from './types';

export const startSetCity = () => ({
  type: cityTypes.START_SET_CITY
});

export const setCitySuccess = data => ({
  type: cityTypes.SET_CITY_SUCCESS,
  payload: data
});

export const setCityFailure = error => ({
  type: cityTypes.SET_CITY_FAILURE,
  payload: error
});

export const setCity = city => {
  return async dispatch => {
    try {
      dispatch(startSetCity());

      dispatch(setCitySuccess(city));
    } catch (err) {
      console.log(err);
      dispatch(setCityFailure(err));
    }
  };
};
