import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import {detailedViewReducer} from './reducers';

export const reducers = combineReducers({
  detailedViewReducer
});
