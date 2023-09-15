import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        component={NavLink}
        to="/register"
        style={{ marginRight: '10px' }}
      >
        Register
      </Button>
      <Button
        variant="contained"
        color="primary"
        component={NavLink}
        to="/login"
      >
        Log In
      </Button>
    </div>
  );
};
