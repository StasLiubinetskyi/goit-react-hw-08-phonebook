import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authActions';
import { Typography, Button, Box } from '@mui/material';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="subtitle1">Welcome, {user.name}</Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Box>
  );
};
