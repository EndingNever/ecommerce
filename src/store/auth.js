import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem('token'); // Checks if there is already a 'token' value in localStorage

const initialAuthState = {
  user: {
    uid: null,
    token: initialToken,
    cartItems: [],
    total: 0,
    itemCount: 0,
    receipts: [],
    favorites: [],
  },
  isAuthenticated: initialToken !== null, // isAuthenticatd = true if localStorage shows a token
  receiptNum: 1,
}

const authSlice = createSlice({
  name: 'authentication', // named Authentication, but contains everything about the user object as well as Auth
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
      // localStorage.setItem('cartTotal', 0)
      // localStorage.removeItem('token');
      // localStorage.removeItem('cartItems')
      // localStorage.removeItem('cartTotal')
      localStorage.clear();
      state.isAuthenticated = false;
      state.user.cartItems = [];
      state.user.itemCount = 0;
      state.user.total = 0;
    },
    //*! Authorization

    //* Cart
    getTotal(state) {
      state.user.total = JSON.parse(localStorage.getItem('cartTotal')); //localStorage only stores Strings, parseInt() converts to Int
    },
    getItemCount(state) {
      state.user.itemCount = JSON.parse(localStorage.getItem('itemCount'));
    },
    getCart(state) {
      state.user.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    },
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
        state.user.total += action.payload.price;
        localStorage.setItem('cartTotal', state.user.total)
        localStorage.setItem('itemCount', state.user.itemCount)
      }
    },
    iterateReceipt(state) {
      state.receiptNum++;
    },
    createReceipt(state) {
      const userCartAtReceipt = JSON.parse(localStorage.getItem('cartItems'));
      state.user.receipts = {...state.user.receipts, ['rcpt' + state.receiptNum]: userCartAtReceipt}
      state.receiptNum++;
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;