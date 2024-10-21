import React, { useState } from 'react';
import { Box, CssBaseline, useMediaQuery, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import NavigationRail from './NavigationRail';
import BottomNavigationBar from './BottomNavigationBar';
import { Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      {!isMobile ? (
        <NavigationRail />
      ) : (
        <BottomNavigationBar />
      )}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        {/* This will render the selected page */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
