import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authActions';
import { TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Username is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      dispatch(register(formData));
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Username"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!formErrors.name}
        helperText={formErrors.name}
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!formErrors.email}
        helperText={formErrors.email}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!formErrors.password}
        helperText={formErrors.password}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  );
};
