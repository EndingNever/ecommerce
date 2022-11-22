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
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      state.itemCount++;
      state.total += action.payload.price
    },
  }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;