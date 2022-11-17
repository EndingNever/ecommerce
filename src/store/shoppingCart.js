import { createSlice } from "@reduxjs/toolkit";

const initialCartSlice = {
  cartItems: [], 
  total: 0, 
  itemCount: 0,
};

const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialCartSlice,
  reducers: {
    addItem(state, action) {
      state.cartItems.push(action.payload)
    },
    printCart(state, action) {
      console.log(state.cartItems);
    }
  }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;