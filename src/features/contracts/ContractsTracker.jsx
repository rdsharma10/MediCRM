import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContract } from '../../redux/contractsSlice';
import { mockContracts } from '../../static/mockData';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button
} from '@mui/material';
import styles from '../../styles/ContractsTracker.module.css';

function daysUntil(date) {
  const now = new Date();
  const end = new Date(date);
  return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
}

function exportToCSV(contracts) {
  const header = ['Device ID', 'Contract Type', 'Start Date', 'End Date', 'Status'];
  const rows = contracts.map(c => [c.deviceId, c.contractType, c.startDate, c.endDate, c.status]);
  let csvContent = 'data:text/csv;charset=utf-8,' + [header, ...rows].map(e => e.join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'contracts_report.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const ContractsTracker = () => {
  const contracts = useSelector(state => state.contracts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contracts.length === 0) {
      mockContracts.forEach(contract => dispatch(addContract(contract)));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <Typography variant="h5" gutterBottom className={styles.heading}>
        AMC/CMC Contracts Tracker
      </Typography>
      <Button
        variant="outlined"
        className={styles.exportBtn}
        onClick={() => exportToCSV(contracts)}
      >
        Export to CSV
      </Button>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHeadCell + ' ' + styles.firstHeadCell}>Device ID</TableCell>
              <TableCell className={styles.tableHeadCell}>Contract Type</TableCell>
              <TableCell className={styles.tableHeadCell}>Start Date</TableCell>
              <TableCell className={styles.tableHeadCell}>End Date</TableCell>
              <TableCell className={styles.tableHeadCell + ' ' + styles.lastHeadCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.map((contract, idx) => {
              const days = daysUntil(contract.endDate);
              const isExpiring = days <= 30;
              return (
                <TableRow
                  key={contract.id}
                  className={
                    styles.tableRow + ' ' + (idx % 2 === 0 ? styles.zebra : '')
                  }
                >
                  <TableCell className={styles.tableCell}>{contract.deviceId}</TableCell>
                  <TableCell className={styles.tableCell}>{contract.contractType}</TableCell>
                  <TableCell className={styles.tableCell}>{contract.startDate}</TableCell>
                  <TableCell className={styles.tableCell}>{contract.endDate}</TableCell>
                  <TableCell className={styles.tableCell}>
                    {isExpiring ? (
                      <span className={styles.expiring}>Expiring in {days} days</span>
                    ) : (
                      <span className={styles.status}>{contract.status}</span>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContractsTracker; 