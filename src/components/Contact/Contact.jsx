import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactActions';
import { Button, Typography } from '@mui/material';

export const Contact = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <Typography variant="body1">{text}</Typography>
      <Button variant="contained" color="primary" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};
