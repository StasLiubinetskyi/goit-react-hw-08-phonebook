import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../redux/auth/authActions';
import { selectUser } from '../../redux/contacts/contactSelectors';
import axios from 'axios';

const UserProfileForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.put(
        'https://connections-api.herokuapp.com/users/current',
        {
          name: formData.name,
          email: formData.email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const data = response.data;

      if (response.status === 200) {
        dispatch(updateUserInfo(data));
      } else {
        if (data.message) {
          console.error('Update failed:', data.message);
        } else {
          console.error('Update failed:', data);
        }
      }
    } catch (error) {
      console.error('Update error:', error);
    }
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
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UserProfileForm;
