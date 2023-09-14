import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authActions';
import css from './RegisterForm.module.css';

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
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && <div className={css.error}>{formErrors.name}</div>}
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
};
