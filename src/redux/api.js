import axios from 'axios';

const BASE_URL = 'https://64eb2a15e51e1e82c5770b5b.mockapi.io/';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addContact = async contactData => {
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async contactId => {
  try {
    await axios.delete(`${BASE_URL}/contacts/${contactId}`);
  } catch (error) {
    throw error;
  }
};
