import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDevice } from '../../redux/devicesSlice';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';
import styles from '../../styles/DeviceDashboard.module.css';

const mockDevices = [
  {
    id: 'DVC001',
    type: 'ECG Monitor',
    facility: 'City Hospital',
    status: 'Online',
    battery: 85,
    lastService: '2024-05-01',
    lastInstallation: '2023-12-15',
    contract: 'AMC (2024-12-31)',
  },
  {
    id: 'DVC002',
    type: 'Infusion Pump',
    facility: 'Metro Clinic',
    status: 'Maintenance',
    battery: 60,
    lastService: '2024-04-10',
    lastInstallation: '2023-11-20',
    contract: 'CMC (2025-03-15)',
  },
];

const DeviceDashboard = () => {
  const devices = useSelector((state) => state.devices);
  const dispatch = useDispatch();

  useEffect(() => {
    if (devices.length === 0) {
      mockDevices.forEach(device => dispatch(addDevice(device)));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <Typography variant="h5" gutterBottom className={styles.heading}>
        Device Inventory Dashboard
      </Typography>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHeadCell + ' ' + styles.firstHeadCell}>Type</TableCell>
              <TableCell className={styles.tableHeadCell}>ID</TableCell>
              <TableCell className={styles.tableHeadCell}>Facility</TableCell>
              <TableCell className={styles.tableHeadCell}>Status</TableCell>
              <TableCell className={styles.tableHeadCell}>Battery %</TableCell>
              <TableCell className={styles.tableHeadCell}>Last Service</TableCell>
              <TableCell className={styles.tableHeadCell}>Last Installation</TableCell>
              <TableCell className={styles.tableHeadCell + ' ' + styles.lastHeadCell}>AMC/CMC Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices.map((device, idx) => (
              <TableRow
                key={device.id}
                className={
                  styles.tableRow + ' ' + (idx % 2 === 0 ? styles.zebra : '')
                }
              >
                <TableCell className={styles.tableCell}>{device.type}</TableCell>
                <TableCell className={styles.tableCell}>{device.id}</TableCell>
                <TableCell className={styles.tableCell}>{device.facility}</TableCell>
                <TableCell className={styles.tableCell}>{device.status}</TableCell>
                <TableCell className={styles.tableCell}>{device.battery}%</TableCell>
                <TableCell className={styles.tableCell}>{device.lastService}</TableCell>
                <TableCell className={styles.tableCell}>{device.lastInstallation}</TableCell>
                <TableCell className={styles.tableCell}>{device.contract}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DeviceDashboard; 