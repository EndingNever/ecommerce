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
    },
    login(state) {
      // state.isAuthenticated = true;
      localStorage.setItem('token', state.user.token)
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },

  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;