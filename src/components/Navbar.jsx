import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import pfp from './pexel.jpg'; // Placeholder for user profile picture
import styles from '../styles/Navbar.module.css';
// Theme toggle imports
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = ({ onToggleSidebar }) => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Theme context
  const { theme: mode, toggleTheme } = useThemeContext();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        {isSmDown && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={onToggleSidebar}
            sx={{ mr: 2 }}
            aria-label="open sidebar"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" className={styles.title}>
          MedDevice CRM
        </Typography>
        <Box className={styles.rightBox}>
          {/* Theme toggle button */}
          <IconButton color="inherit" onClick={toggleTheme} aria-label="toggle theme">
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          {isAuthenticated ? (
            <>
              <Avatar alt={user?.email || 'User'} src={pfp} className={styles.avatar} />
              <Button color="inherit" onClick={handleLogout} className={styles.button}>Logout</Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigate('/login')} className={styles.button}>Login</Button>
              <Button color="inherit" onClick={() => navigate('/signup')} className={styles.button}>Sign Up</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
