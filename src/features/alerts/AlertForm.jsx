import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAlert } from '../../redux/alertsSlice';
import { v4 as uuidv4 } from 'uuid';
import {
  Box, Button, TextField, Typography, MenuItem, InputLabel, Select, FormControl, Stack
} from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlertForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    deviceId: '',
    alertType: '',
    description: '',
    photos: [],
    status: 'Open',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, photos: Array.from(e.target.files) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlert = {
      id: uuidv4(),
      ...form,
      photos: form.photos.map(file => ({ name: file.name, type: file.type })),
    };
    dispatch(addAlert(newAlert));
    setForm({ deviceId: '', alertType: '', description: '', photos: [], status: 'Open' });
    toast.success('Alert logged!');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 520,
          mx: 'auto',
          mb: 4,
          mt: 6,
          p: 4,
          bgcolor: '#fff',
          borderRadius: 3,
          border: '2px solid #1976d2',
          boxShadow: 4,
        }}
      >
        <Box sx={{
          background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
          borderRadius: 2,
          mb: 3,
          p: 2,
          textAlign: 'center',
        }}>
          <Typography variant="h5" mb={0} sx={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
            Log Device Alert
          </Typography>
        </Box>
        <Stack spacing={2}>
          <TextField label="Device ID" name="deviceId" value={form.deviceId} onChange={handleChange} required />
          <FormControl required>
            <InputLabel>Alert Type</InputLabel>
            <Select name="alertType" value={form.alertType} label="Alert Type" onChange={handleChange}>
              <MenuItem value="Installation Issue">Installation Issue</MenuItem>
              <MenuItem value="Maintenance Issue">Maintenance Issue</MenuItem>
              <MenuItem value="Battery Low">Battery Low</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Description" name="description" value={form.description} onChange={handleChange} required multiline rows={2} />
          <Button variant="outlined" component="label">
            Upload Photos
            <input type="file" hidden multiple accept="image/*" onChange={handleFileChange} />
          </Button>
          {form.photos.length > 0 && (
            <Box>
              {form.photos.map((file, idx) => (
                <Typography key={idx} variant="body2">{file.name}</Typography>
              ))}
            </Box>
          )}
          <FormControl required>
            <InputLabel>Status</InputLabel>
            <Select name="status" value={form.status} label="Status" onChange={handleChange}>
              <MenuItem value="Open">Open</MenuItem>
              <MenuItem value="Resolved">Resolved</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
              color: '#fff',
              fontWeight: 700,
              py: 1.1,
              fontSize: '1rem',
              borderRadius: 2,
              boxShadow: 2,
              transition: 'transform 0.2s',
              '&:hover': {
                background: 'linear-gradient(90deg, #1565c0 0%, #1976d2 100%)',
                transform: 'scale(1.04)',
              },
            }}
          >
            Log Alert
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AlertForm; 