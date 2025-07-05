import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInstallation, removeInstallation } from '../../redux/installationsSlice';
import { mockInstallations } from '../../static/mockData';
import InstallationList from './InstallationList';
import InstallationForm from './InstallationForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InstallationsPage = () => {
  const [editData, setEditData] = useState(null);
  const dispatch = useDispatch();
  const installations = useSelector(state => state.installations);

  useEffect(() => {
    if (installations.length === 0) {
      mockInstallations.forEach(inst => dispatch(addInstallation(inst)));
    }
    // eslint-disable-next-line
  }, []);

  // Toasts for add, update, delete
  const handleEdit = (data) => setEditData(data);
  const handleDone = () => {
    setEditData(null);
    toast.success('Installation saved!');
  };
  const handleDelete = (id) => {
    dispatch(removeInstallation(id));
    toast.info('Installation deleted');
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <InstallationList onEdit={handleEdit} onDelete={handleDelete} />
      <InstallationForm editData={editData} onDone={handleDone} />
    </>
  );
};

export default InstallationsPage; 