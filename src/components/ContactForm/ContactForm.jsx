import React, { useState } from 'react';
import ContactFormStyled from './ContactFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAsync } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    const numberInput = event.target.value;
    const numberRegex =
      /^\+?\d{0,4}?[-.\s]?\(?\d{0,3}?\)?[-.\s]?\d{0,4}[-.\s]?\d{0,4}[-.\s]?\d{0,9}$/;

    if (numberInput === '' || numberRegex.test(numberInput)) {
      setNumber(numberInput);
    }
  };

  const errorNotify = target => {
    alert(`${target} already exists.`);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const isDuplicate = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isDuplicate) {
      errorNotify('This contact');
      return;
    }

    const newContactData = {
      name: name.trim(),
      number: number.trim(),
    };

    dispatch(addContactAsync(newContactData));

    setName('');
    setNumber('');
  };

  return (
    <ContactFormStyled onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter name"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter phone number"
        required
      />
      <button type="submit">Add contact</button>
    </ContactFormStyled>
  );
};

export default ContactForm;
