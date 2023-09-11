import axios from 'axios';
import { setUser, setToken, clearUser } from './authSlice';

const API_URL = 'https://connections-api.herokuapp.com';

export const registerUser = userData => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, userData);

    if (response.status === 201) {
      const { user, token } = response.data;
      dispatch(setUser(user));
      dispatch(setToken(token));
    } else {
      console.error(
        'Registration failed:',
        response.data.message || response.statusText
      );
    }
  } catch (error) {
    console.error('Registration error:', error.message);
  }
};

export const loginUser = userData => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);

    if (response.status === 200) {
      const { user, token } = response.data;
      dispatch(setUser(user));
      dispatch(setToken(token));
    } else {
      console.error(
        'Login failed:',
        response.data.message || response.statusText
      );
    }
  } catch (error) {
    console.error('Login error:', error.message);
  }
};

export const logoutUser = () => dispatch => {
  dispatch(clearUser());
};

export const updateUserInfo = userData => async dispatch => {
  try {
    const response = await axios.put(`${API_URL}/users/current`, userData, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });

    if (response.status === 200) {
      const { user } = response.data;
      dispatch(setUser(user));
    } else {
      console.error(
        'Update failed:',
        response.data.message || response.statusText
      );
    }
  } catch (error) {
    console.error('Update error:', error.message);
  }
};
