import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Box from '@mui/material/Box';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggleSidebar = () => setSidebarOpen((open) => !open);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <BrowserRouter>
      <Navbar onToggleSidebar={handleToggleSidebar} />
      <Sidebar
        open={isSmDown ? sidebarOpen : true}
        onClose={handleCloseSidebar}
        variant={isSmDown ? 'temporary' : 'permanent'}
      />
      <Box sx={{ pl: { sm: '220px' }, pt: '64px', minHeight: '100vh', background: 'var(--primary-bg)' }}>
        <AppRoutes />
      </Box>
    </BrowserRouter>
  )
}

export default App
