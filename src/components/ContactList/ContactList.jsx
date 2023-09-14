import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/contactSelectors.js';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} text={`Name: ${name}, Number: ${number}`} />
        </li>
      ))}
    </ul>
  );
};
