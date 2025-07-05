import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contractsSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    addContract: (state, action) => {
      state.push(action.payload);
    },
    updateContract: (state, action) => {
      const index = state.findIndex(contract => contract.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    removeContract: (state, action) => {
      return state.filter(contract => contract.id !== action.payload);
    },
  },
});

export const { addContract, updateContract, removeContract } = contractsSlice.actions;
export default contractsSlice.reducer; 