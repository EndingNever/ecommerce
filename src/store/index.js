// import { createStore,} from "redux"; Ditching Redux
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth"



// const counterReducer = (state = initialState, action) => { //*Plain Redux, ReduxToolkit helps make this lean
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter -1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     }
//   }

//   return state;
// };

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  }
});

// export const counterActions = counterSlice.actions; //* export actions from the file rather than here 
// export const authActions = authSlice.actions; //* export actions from the file rather than here 
export default store;