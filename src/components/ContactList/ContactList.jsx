import React from 'react';
import ContactListStyled from './ContactListStyled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAsync } from '../../redux/contactsSlice';
import { selectFilter, selectContacts } from '../../redux/selectors';
import { nanoid } from 'nanoid';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContactAsync(contactId));
  };

  return (
    <ContactListStyled>
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <li key={nanoid()}>
              {name}: {number}
              <button type="button" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </ContactListStyled>
  );
};

export default ContactList;
