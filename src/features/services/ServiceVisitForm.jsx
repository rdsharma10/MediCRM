import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addServiceVisit } from '../../redux/servicesSlice';
import { v4 as uuidv4 } from 'uuid';
import {
  Box, Button, TextField, Typography, MenuItem, InputLabel, Select, FormControl, Stack
} from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/ServiceVisitForm.module.css';

const ServiceVisitForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    notes: '',
    date: '',
    engineer: '',
    purpose: '',
    attachments: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, attachments: Array.from(e.target.files) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVisit = {
      id: uuidv4(),
      ...form,
      attachments: form.attachments.map(file => ({ name: file.name, type: file.type })),
    };
    dispatch(addServiceVisit(newVisit));
    setForm({ notes: '', date: '', engineer: '', purpose: '', attachments: [] });
    toast.success('Service visit logged!');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <Box className={styles.gradientHeader}>
        <Typography variant="h5" mb={0} className={styles.heading}>
          Log Service Visit
        </Typography>
      </Box>
      <Stack spacing={2} className={styles.stack}>
        <TextField label="Notes" name="notes" value={form.notes} onChange={handleChange} required multiline rows={2} />
        <TextField label="Date" name="date" type="date" value={form.date} onChange={handleChange} required InputLabelProps={{ shrink: true }} />
        <TextField label="Responsible Engineer" name="engineer" value={form.engineer} onChange={handleChange} required />
        <FormControl required>
          <InputLabel>Purpose</InputLabel>
          <Select name="purpose" value={form.purpose} label="Purpose" onChange={handleChange}>
            <MenuItem value="Preventive">Preventive</MenuItem>
            <MenuItem value="Breakdown">Breakdown</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" component="label" className={styles.uploadBtn}>
          Upload Attachments (Photo/PDF)
          <input type="file" hidden multiple accept="image/*,application/pdf" onChange={handleFileChange} />
        </Button>
        {form.attachments.length > 0 && (
          <Box>
            {form.attachments.map((file, idx) => (
              <Typography key={idx} variant="body2">{file.name}</Typography>
            ))}
          </Box>
        )}
        <Button
          type="submit"
          variant="contained"
          className={styles.submitBtn}
        >
          Log Visit
        </Button>
      </Stack>
    </Box>
  );
};

export default ServiceVisitForm; 