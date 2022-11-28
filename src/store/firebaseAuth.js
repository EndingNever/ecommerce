import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,

});