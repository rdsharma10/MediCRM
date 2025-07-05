import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../../styles/ResetPassword.module.css';

const ResetPassword = () => {
  const [form, setForm] = useState({ password: '', confirmPassword: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    toast.success('Password reset successful!');
    navigate('/login');
  };

  return (
    <Box className={styles.outer}>
      <Box component="form" onSubmit={handleSubmit} className={styles.formBox}>
        <Typography variant="h5" mb={3} className={styles.title}>Reset Password</Typography>
        <Stack spacing={2}>
          <TextField label="Email" value={email} disabled fullWidth />
          <TextField label="New Password" name="password" value={form.password} onChange={handleChange} required type="password" />
          <TextField label="Confirm Password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required type="password" />
          <Button type="submit" className={styles.resetBtn}>Reset Password</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ResetPassword; 