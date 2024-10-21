import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Container, Typography, Box, CssBaseline, Grid, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define the types for our component's state
interface LoginState {
  serverURL: string;
  username: string;
  password: string;
  errorMessage: string;
}

const LoginPage: React.FC = () => {
  const [loginState, setLoginState] = useState<LoginState>({
    serverURL: '',
    username: '',
    password: '',
    errorMessage: '',
  });
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(`${loginState.serverURL}/auth`, {
        username: loginState.username,
        password: loginState.password,
      });
  
      const { token } = response.data;
  
      sessionStorage.setItem('jwtToken', token);
  
      // Redirect to the dashboard or main page
      navigate('/dashboard');
    } catch {
      setLoginState({
        ...loginState,
        errorMessage: 'Authentication failed. Please check the Server URL, Username, and Password.',
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Server URL"
                  name="serverURL"
                  value={loginState.serverURL}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  name="username"
                  value={loginState.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={loginState.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {loginState.errorMessage && (
              <Typography color="error" sx={{ mt: 2 }}>
                {loginState.errorMessage}
              </Typography>
            )}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
