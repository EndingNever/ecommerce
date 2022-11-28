import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },

  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;