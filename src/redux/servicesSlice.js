import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    addServiceVisit: (state, action) => {
      state.push(action.payload);
    },
    updateServiceVisit: (state, action) => {
      const index = state.findIndex(visit => visit.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    removeServiceVisit: (state, action) => {
      return state.filter(visit => visit.id !== action.payload);
    },
  },
});

export const { addServiceVisit, updateServiceVisit, removeServiceVisit } = servicesSlice.actions;
export default servicesSlice.reducer; 