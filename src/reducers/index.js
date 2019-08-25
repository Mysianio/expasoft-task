import {combineReducers} from 'redux';
import userData from './userData.js';
import newsData from './newsData.js';

export default combineReducers({
  userData,
  newsData
})
