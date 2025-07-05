import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeInstallation } from '../../redux/installationsSlice';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../../styles/InstallationList.module.css';

const InstallationList = ({ onEdit, onDelete }) => {
  const installations = useSelector(state => state.installations);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Typography variant="h6" className={styles.heading}>Installations</Typography>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHeadCell + ' ' + styles.firstHeadCell}>Device ID</TableCell>
              <TableCell className={styles.tableHeadCell}>Facility</TableCell>
              <TableCell className={styles.tableHeadCell}>Date</TableCell>
              <TableCell className={styles.tableHeadCell}>Status</TableCell>
              <TableCell className={styles.tableHeadCell + ' ' + styles.lastHeadCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {installations.map((inst, idx) => (
              <TableRow
                key={inst.id}
                className={styles.tableRow + ' ' + (idx % 2 === 0 ? styles.zebra : '')}
              >
                <TableCell className={styles.tableCell}>{inst.deviceId}</TableCell>
                <TableCell className={styles.tableCell}>{inst.facility}</TableCell>
                <TableCell className={styles.tableCell}>{inst.date}</TableCell>
                <TableCell className={styles.tableCell}>{inst.status}</TableCell>
                <TableCell className={styles.tableCell + ' ' + styles.actionsCell}>
                  <IconButton color="primary" onClick={() => onEdit && onEdit(inst)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => {
                    dispatch(removeInstallation(inst.id));
                    if (onDelete) onDelete(inst.id);
                  }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InstallationList; 