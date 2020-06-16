import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import fetchReducer from './fetchCall/fetchReducer';
import setCityReducer from './setCity/setCityReducer';

const middleware = [ReduxThunk, logger];

const rootReducer = combineReducers({
  data: fetchReducer,
  city: setCityReducer
});
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
