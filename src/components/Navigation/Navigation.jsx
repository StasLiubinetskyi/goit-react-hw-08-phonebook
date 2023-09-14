import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex" justifyContent="center" marginTop="16px">
      <Button
        variant="contained"
        color="primary"
        component={NavLink}
        to="/"
        activeClassName="Mui-selected"
        sx={{ marginRight: '16px' }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          variant="contained"
          color="primary"
          component={NavLink}
          to="/contact"
          activeClassName="Mui-selected"
        >
          Contact
        </Button>
      )}
    </Box>
  );
};
