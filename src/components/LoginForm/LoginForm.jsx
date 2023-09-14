import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authActions';
import css from './LoginForm.module.css';

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
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <div className={css.error}>{formErrors.email}</div>
        )}
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && (
          <div className={css.error}>{formErrors.password}</div>
        )}
      </label>
      {loginError && <div className={css.error}>{loginError}</div>}
      <button type="submit">Log In</button>
    </form>
  );
};
