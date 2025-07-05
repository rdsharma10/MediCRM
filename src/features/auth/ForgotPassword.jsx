import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Stack, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/ForgotPassword.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowOtp(true);
    }, 15000); // 15 seconds
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Accept any 6-digit OTP
    if (otp.length === 6 && /^[0-9]+$/.test(otp)) {
      navigate('/reset-password', { state: { email } });
    }
  };

  return (
    <Box className={styles.outer}>
      <Box className={styles.formBox}>
        <Typography variant="h5" mb={3} className={styles.title}>Forgot Password</Typography>
        {!showOtp ? (
          <form onSubmit={handleEmailSubmit}>
            <Stack spacing={2}>
              <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} required type="email" />
              <Button type="submit" className={styles.otpBtn}>Send OTP</Button>
              {loading && <Box className={styles.spinnerBox}><CircularProgress /></Box>}
            </Stack>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <Stack spacing={2}>
              <TextField label="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} required inputProps={{ maxLength: 6 }} />
              <Button type="submit" className={styles.otpBtn}>Verify OTP</Button>
            </Stack>
          </form>
        )}
      </Box>
    </Box>
  );
};

export default ForgotPassword; 