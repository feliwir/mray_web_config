import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import General from './components/General';
import UserManagement from './components/UserManagement';
import DataManagement from './components/DataManagement';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="general" element={<General />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="data-management" element={<DataManagement />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
