import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const installationsSlice = createSlice({
  name: 'installations',
  initialState,
  reducers: {
    addInstallation: (state, action) => {
      state.push(action.payload);
    },
    updateInstallation: (state, action) => {
      const index = state.findIndex(inst => inst.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    removeInstallation: (state, action) => {
      return state.filter(inst => inst.id !== action.payload);
    },
  },
});

export const { addInstallation, updateInstallation, removeInstallation } = installationsSlice.actions;
export default installationsSlice.reducer; 