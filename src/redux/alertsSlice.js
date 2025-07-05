import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert: (state, action) => {
      state.push(action.payload);
    },
    updateAlert: (state, action) => {
      const index = state.findIndex(alert => alert.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    removeAlert: (state, action) => {
      return state.filter(alert => alert.id !== action.payload);
    },
  },
});

export const { addAlert, updateAlert, removeAlert } = alertsSlice.actions;
export default alertsSlice.reducer; 