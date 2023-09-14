import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactActions';
import css from './ContactEditor.module.css';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');

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
      dispatch(addContact({ name, number }));

      setName('');
      setNumber('');
    } else {
      alert('Please correct the form errors before submitting.');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        className={css.input}
        value={name}
        onChange={handleNameChange}
      />
      {nameError && <div className={css.error}>{nameError}</div>}
      <input
        name="tel"
        className={css.input}
        value={number}
        onChange={handlePhoneChange}
      />
      {numberError && <div className={css.error}>{numberError}</div>}
      <button type="submit" className={css.button}>
        Add Contact
      </button>
    </form>
  );
};
