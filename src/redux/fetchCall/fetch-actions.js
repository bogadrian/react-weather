import types from './types';
import axios from 'axios';

const key = process.env.REACT_APP_KEY;

export const startFetch = () => ({
  type: types.START_FETCH
});

export const fetchSuccess = data => ({
  type: types.FETCH_SUCCESS,
  payload: data
});

export const fetchFailure = error => ({
  type: types.FETCH_FAILURE,
  payload: error
});

export const fetchCall = (lat, lon) => {
  return async dispatch => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&exclude=minutely&lon=${lon}&appid=${key}`;

      dispatch(startFetch());

      const axiosInstance = await axios.create({
        baseURL: url,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await axiosInstance({
        method: 'GET'
      });

      dispatch(fetchSuccess(result.data));
    } catch (err) {
      console.log(err);
      dispatch(fetchFailure(err));
    }
  };
};
