import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/tasks/tasksActions';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteTask(contactId));
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
