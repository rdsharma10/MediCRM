import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    addDevice: (state, action) => {
      if (!state.some(device => device.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    updateDevice: (state, action) => {
      const index = state.findIndex(device => device.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    removeDevice: (state, action) => {
      return state.filter(device => device.id !== action.payload);
    },
  },
});

export const { addDevice, updateDevice, removeDevice } = devicesSlice.actions;
export default devicesSlice.reducer; 