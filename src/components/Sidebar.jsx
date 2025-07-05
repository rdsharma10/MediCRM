import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BuildIcon from '@mui/icons-material/Build';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WarningIcon from '@mui/icons-material/Warning';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

const drawerWidth = 220;

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Installations', icon: <BuildIcon />, path: '/installations' },
  { text: 'Services', icon: <MedicalServicesIcon />, path: '/services' },
  { text: 'Contracts', icon: <AssignmentIcon />, path: '/contracts' },
  { text: 'Alerts', icon: <WarningIcon />, path: '/alerts' },
];

const Sidebar = ({ open, onClose, variant = 'permanent' }) => {
  return (
    <Drawer
      variant={variant}
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{ paper: styles.drawerPaper }}
      sx={{
        display: { xs: variant === 'temporary' ? 'block' : 'none', sm: 'block' },
        zIndex: 1200,
        width: drawerWidth,
        flexShrink: 0,
      }}
      ModalProps={{ keepMounted: true }}
    >
      {variant === 'temporary' && (
        <Typography variant="h6" className={styles.heading}>
          MedDevice CRM
        </Typography>
      )}
      <Divider />
      <List className={styles.navList}>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              onClick={variant === 'temporary' ? onClose : undefined}
              className={({ isActive }) =>
                [styles.navItemButton, isActive ? styles.active : ''].join(' ')
              }
            >
              <ListItemIcon className={styles.navItemIcon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} className={styles.navItemText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar; 