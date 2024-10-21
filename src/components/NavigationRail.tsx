import React from 'react';
import { Box, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Home, People, Storage } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NavigationRail: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Box
      sx={{
        width: 72,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        borderRight: '1px solid #e0e0e0',
      }}
    >
      <List sx={{ width: '100%' }}>
        <ListItem onClick={() => navigate('/dashboard/general')}>
          <IconButton>
            <Home />
          </IconButton>
          <ListItemText primary="General" />
        </ListItem>

        <ListItem onClick={() => navigate('/dashboard/user-management')}>
          <IconButton>
            <People />
          </IconButton>
          <ListItemText primary="User Management" />
        </ListItem>

        <ListItem onClick={() => navigate('/dashboard/data-management')}>
          <IconButton>
            <Storage />
          </IconButton>
          <ListItemText primary="Data Management" />
        </ListItem>
      </List>
    </Box>
  );
};

export default NavigationRail;
