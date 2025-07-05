import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/authSlice';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../../styles/Signup.module.css';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });

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
    dispatch(signup({ email: form.email }));
    toast.success('Account created!');
    navigate('/');
  };

  return (
    <Box className={styles.outer}>
      <Box component="form" onSubmit={handleSubmit} className={styles.formBox}>
        <Typography variant="h5" mb={3} className={styles.title}>Sign Up</Typography>
        <Stack spacing={2}>
          <TextField label="Email" name="email" value={form.email} onChange={handleChange} required type="email" />
          <TextField label="Password" name="password" value={form.password} onChange={handleChange} required type="password" />
          <TextField label="Confirm Password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required type="password" />
          <Button type="submit" className={styles.signupBtn}>Sign Up</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Signup; 