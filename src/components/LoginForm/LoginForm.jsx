import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authActions';
import { TextField, Button, Typography } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        const response = await dispatch(login(formData));
        if (response.status === 200) {
          console.log('User logged in successfully');
        } else {
          const responseData = await response.json();
          if (responseData && responseData.message) {
            setLoginError(responseData.message);
          } else {
            setLoginError('An error occurred. Please try again later.');
          }
        }
      } catch (error) {
        setLoginError('An error occurred. Please try again later.');
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
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
      {loginError && (
        <Typography variant="body2" color="error" gutterBottom>
          {loginError}
        </Typography>
      )}
      <Button type="submit" variant="contained" color="primary">
        Log In
      </Button>
    </form>
  );
};
