// This function is used whenever we do any logic, like CRUD on a user. Contains the data we want to save to store.

import { USER_SELECTED } from '../actions/types';

const initialState = {
  users: []
}

// Evaluates the action type and returns the state with the relevant property being updated to the action's payload
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SELECTED:
      return action.payload
    default: return state;
  }
}