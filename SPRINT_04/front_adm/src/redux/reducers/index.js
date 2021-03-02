import { combineReducers } from 'redux';
import credentials from './credentials';

const allReducers = combineReducers({
  credentials,
});

export default allReducers;
