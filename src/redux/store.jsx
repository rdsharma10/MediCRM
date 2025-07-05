import { configureStore } from '@reduxjs/toolkit';
import devicesReducer from './devicesSlice';
import installationsReducer from './installationsSlice';
import servicesReducer from './servicesSlice';
import contractsReducer from './contractsSlice';
import alertsReducer from './alertsSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    devices: devicesReducer,
    installations: installationsReducer,
    services: servicesReducer,
    contracts: contractsReducer,
    alerts: alertsReducer,
    auth: authReducer,
  },
});

export default store;
