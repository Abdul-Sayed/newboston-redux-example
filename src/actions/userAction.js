import { USER_SELECTED } from './types';

export const selectUser = (user) => {
  console.log("You clicked on user: ", user.first);
  return {
    type: USER_SELECTED,
    payload: user
  }
}


// *** Alt if you don't write mapDispatchToProps in UserList component ***
// export const selectUser = (user) => dispatch => {
//   console.log("You clicked on user: ", user.first);
//   dispatch({
//     type: USER_SELECTED,
//     payload: user
//   })
// }
