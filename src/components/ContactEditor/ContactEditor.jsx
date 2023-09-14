import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactActions';
import css from './ContactEditor.module.css';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const handleNameChange = event => setName(event.target.value);
  const handlePhoneChange = event => setNumber(event.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (name && number) {
      dispatch(addContact({ name, number }));
      return;
    }

    alert('Contact cannot be empty. Enter some text!');
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
      <input
        name="tel"
        className={css.input}
        value={number}
        onChange={handlePhoneChange}
      />
      <button type="submit" className={css.button}>
        Add Contact
      </button>
    </form>
  );
};
