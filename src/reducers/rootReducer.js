import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import activeUserReducer from './activeUserReducer';

export default combineReducers({
  users: usersReducer,
  activeUser: activeUserReducer
});