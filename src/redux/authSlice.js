import { createSlice } from '@reduxjs/toolkit';

const userFromStorage = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: userFromStorage || null,
  isAuthenticated: !!userFromStorage,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { email: action.payload.email };
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    signup: (state, action) => {
      state.user = { email: action.payload.email };
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    },
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer; 