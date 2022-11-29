import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem('token');

const initialAuthState = {
  user: {
    uid: null,
    token: initialToken,
  },
  isAuthenticated: false,
}


const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    setUserToken(state, action) {
      state.user.token = action.payload;
      localStorage.setItem('token', state.user.token)
      state.isAuthenticated = true;
    },
    login(state) {
      if (localStorage.getItem('token') !== null) {
        state.isAuthenticated = true;
      } else {
        return;
      }
      // localStorage.setItem('token', state.user.token)
    },
    logout(state) {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
    },

  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;