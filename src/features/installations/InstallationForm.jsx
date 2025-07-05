import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addInstallation, updateInstallation } from '../../redux/installationsSlice';
import { v4 as uuidv4 } from 'uuid';
import {
  Box, Button, TextField, Typography, MenuItem, InputLabel, Select, FormControl, Stack, Grow
} from '@mui/material';
import styles from '../../styles/InstallationForm.module.css';

const statusOptions = ['Pending', 'Completed'];

const InstallationForm = ({ editData, onDone }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    deviceId: '',
    facility: '',
    date: '',
    status: 'Pending',
    photos: [],
    checklist: '',
    training: '',
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, photos: Array.from(e.target.files) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      id: editData ? form.id : uuidv4(),
      photos: form.photos.map(file => ({ name: file.name, type: file.type })),
    };
    if (editData) {
      dispatch(updateInstallation(payload));
    } else {
      dispatch(addInstallation(payload));
    }
    setForm({ deviceId: '', facility: '', date: '', status: 'Pending', photos: [], checklist: '', training: '' });
    if (onDone) onDone();
  };

  return (
    <Grow in={true} timeout={600}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className={styles.formContainer}
      >
        <Box className={styles.gradientHeader}>
          <Typography variant="h5" mb={0} className={styles.heading}>
            {editData ? 'Edit' : 'Add'} Installation
          </Typography>
        </Box>
        <Stack spacing={2} className={styles.stack}>
          <TextField label="Device ID" name="deviceId" value={form.deviceId} onChange={handleChange} required />
          <TextField label="Facility" name="facility" value={form.facility} onChange={handleChange} required />
          <TextField label="Date" name="date" type="date" value={form.date} onChange={handleChange} required InputLabelProps={{ shrink: true }} />
          <FormControl required>
            <InputLabel>Status</InputLabel>
            <Select name="status" value={form.status} label="Status" onChange={handleChange}>
              {statusOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
            </Select>
          </FormControl>
          <Button variant="outlined" component="label" className={styles.uploadBtn}>
            Upload Unboxing Photos
            <input type="file" hidden multiple accept="image/*" onChange={handleFileChange} />
          </Button>
          {form.photos.length > 0 && (
            <Box>
              {form.photos.map((file, idx) => (
                <Typography key={idx} variant="body2">{file.name}</Typography>
              ))}
            </Box>
          )}
          <TextField label="Checklist" name="checklist" value={form.checklist} onChange={handleChange} multiline rows={2} />
          <TextField label="Training" name="training" value={form.training} onChange={handleChange} multiline rows={2} />
          <Button
            type="submit"
            variant="contained"
            className={styles.submitBtn}
          >
            {editData ? 'Update' : 'Add'} Installation
          </Button>
        </Stack>
      </Box>
    </Grow>
  );
};

export default InstallationForm; 