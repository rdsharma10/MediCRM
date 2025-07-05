import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../../styles/Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: form.email }));
    toast.success('Logged in!');
    navigate('/');
  };

  return (
    <Box className={styles.outer}>
      <Box component="form" onSubmit={handleSubmit} className={styles.formBox}>
        <Typography variant="h5" mb={3} className={styles.title}>Login</Typography>
        <Stack spacing={2}>
          <TextField label="Email" name="email" value={form.email} onChange={handleChange} required type="email" />
          <TextField label="Password" name="password" value={form.password} onChange={handleChange} required type="password" />
          <Button type="submit" className={styles.loginBtn}>Login</Button>
          <Button variant="text" className={styles.forgotLink} onClick={() => navigate('/forgot-password')}>
            Forgot Password?
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login; 