import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, People, Storage } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const BottomNavigationBar: React.FC = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/dashboard/general');
        break;
      case 1:
        navigate('/dashboard/user-management');
        break;
      case 2:
        navigate('/dashboard/data-management');
        break;
    }
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="General" icon={<Home />} />
        <BottomNavigationAction label="User Management" icon={<People />} />
        <BottomNavigationAction label="Data Management" icon={<Storage />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;
