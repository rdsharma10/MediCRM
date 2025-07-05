import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DeviceDashboard from '../features/devices/DeviceDashboard';
import InstallationsPage from '../features/installations';
import ServiceVisitForm from '../features/services/ServiceVisitForm';
import ContractsTracker from '../features/contracts/ContractsTracker';
import AlertForm from '../features/alerts/AlertForm';
import Login from '../features/auth/Login';
import Signup from '../features/auth/Signup';
import ForgotPassword from '../features/auth/ForgotPassword';
import ResetPassword from '../features/auth/ResetPassword';
import { useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPrompt = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #e3f2fd 0%, #90caf9 100%)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Box sx={{ p: 5, bgcolor: '#fff', borderRadius: 4, boxShadow: 6, textAlign: 'center', maxWidth: 400, mt: 8 }}>
        <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 700, mb: 2 }}>Welcome!</Typography>
        <Typography variant="body1" sx={{ color: '#333', mb: 3 }}>
          Please <span style={{ color: '#1976d2', fontWeight: 600 }}>login</span> to see your dashboard and data.
        </Typography>
        <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)', color: '#fff', fontWeight: 700, borderRadius: 2, boxShadow: 2 }} onClick={() => navigate('/login')}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

const AppRoutes = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<LoginPrompt />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<DeviceDashboard />} />
      <Route path="/installations" element={<InstallationsPage />} />
      <Route path="/services" element={<ServiceVisitForm />} />
      <Route path="/contracts" element={<ContractsTracker />} />
      <Route path="/alerts" element={<AlertForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default AppRoutes;
