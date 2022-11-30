import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem('token');

const initialAuthState = {
  user: {
    uid: null,
    token: initialToken,
    cartItems: [],
    total: 0,
    itemCount: 0,
  },
  isAuthenticated: initialToken !== null,
}


const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    //*Authorization
    setUserToken(state, action) {
      state.user.token = action.payload;
      localStorage.setItem('token', state.user.token)
      state.isAuthenticated = true;
    },
    login(state) {
      if (localStorage.getItem('token') === null) {
        state.isAuthenticated = true;
      } else {
        return;
      }
      // localStorage.setItem('token', state.user.token)
    },
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('cartItems')
      state.isAuthenticated = false;
      state.user.cartItems = [];
    },
    //*Authorization

    //* Cart
    addItem(state, action) {
      if (state.isAuthenticated) {
        const itemIndex = state.user.cartItems.findIndex((item) => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state.user.cartItems[itemIndex].cartQuantity += 1;
          localStorage.setItem('cartItems', JSON.stringify(state.user.cartItems))
        } else {
          const tempProduct = { ...action.payload, cartQuantity: 1 };
          state.user.cartItems.push(tempProduct);
          localStorage.setItem('cartItems', JSON.stringify(state.user.cartItems));
        }
        state.user.itemCount++;
        state.user.total += action.payload.price
      }
    },
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;