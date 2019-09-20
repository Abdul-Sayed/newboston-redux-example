// // This function is used whenever we do any logic, like CRUD on a user. Contains the data we want to save to store.

// import { USER_SELECTED } from '../actions/types';

// const initialState = {
//   users: [
//     {
//       id: 1,
//       first: "Bucky",
//       last: "Roberts",
//       age: 81,
//       description: "Youtuber"
//     },
//     {
//       id: 2,
//       first: "Traversy",
//       last: "Media",
//       age: 35,
//       description: "Youtuber/Gamer"
//     },
//     {
//       id: 3,
//       first: "Marx",
//       last: "Schwarchlinger",
//       age: 43,
//       description: "Youtuber/Programmer"
//     }
//   ]
// }

// // Evaluates the action type and returns the state with the relevant property being updated to the action's payload
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case USER_SELECTED:
//       return { ...state, users: [action.payload] }
//     default: return state;
//   }
// }



export default () => (
  [
    {
      id: 1,
      first: "Bucky",
      last: "Roberts",
      age: 81,
      description: "Youtuber"
    },
    {
      id: 2,
      first: "Traversy",
      last: "Media",
      age: 35,
      description: "Youtuber/Gamer"
    },
    {
      id: 3,
      first: "Marx",
      last: "Schwarchlinger",
      age: 43,
      description: "Youtuber/Programmer"
    }
  ]
)