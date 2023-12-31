import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactActions';
import { selectAllContacts } from 'redux/contacts/contactSelectors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');

  const isNameUnique = name => {
    return !contacts.some(contact => contact.name === name);
  };

  const isNumberUnique = number => {
    return !contacts.some(contact => contact.number === number);
  };

  const handleNameChange = event => {
    setName(event.target.value);

    if (event.target.value.length < 2) {
      setNameError('Name should be at least 2 characters');
    } else {
      setNameError('');
    }
  };

  const handlePhoneChange = event => {
    setNumber(event.target.value);

    const numberRegex =
      /^\+?\d{0,4}?[-.\s]?\(?\d{0,3}?\)?[-.\s]?\d{0,4}[-.\s]?\d{0,4}[-.\s]?\d{0,9}$/;
    if (!numberRegex.test(event.target.value)) {
      setNumberError('Invalid phone number format');
    } else {
      setNumberError('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name && number && !nameError && !numberError) {
      if (isNameUnique(name) && isNumberUnique(number)) {
        dispatch(addContact({ name, number }));
        setName('');
        setNumber('');
      } else {
        alert('Contact with the same name or number already exists.');
      }
    } else {
      alert('Please correct the form errors before submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            name="name"
            value={name}
            onChange={handleNameChange}
            error={!!nameError}
            helperText={nameError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            name="tel"
            value={number}
            onChange={handlePhoneChange}
            error={!!numberError}
            helperText={numberError}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Contact
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
