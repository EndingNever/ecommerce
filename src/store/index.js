// import { createStore,} from "redux"; Ditching Redux
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
// import cartReducer from './cart'

const store = configureStore({
  reducer: {
    auth: authReducer,
    // cart: cartReducer,
  }
});

// export const counterActions = counterSlice.actions; //* export actions from the file rather than here 
// export const authActions = authSlice.actions; //* export actions from the file rather than here 
export default store;