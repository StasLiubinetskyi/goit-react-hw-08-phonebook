import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(formData));
    setFormData({ name: '', number: '' }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="number"
        placeholder="Phone Number"
        value={formData.number}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
