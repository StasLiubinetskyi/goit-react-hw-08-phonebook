import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com/';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        return response.data;
      } else {
        const data = response.data.message
          ? response.data.message
          : 'Registration failed';
        return rejectWithValue(data);
      }
    } catch (error) {
      return rejectWithValue('Registration error');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        return response.data;
      } else {
        const data = response.data.message
          ? response.data.message
          : 'Login failed';
        return rejectWithValue(data);
      }
    } catch (error) {
      return rejectWithValue('Login error');
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await axios.post(`${BASE_URL}/users/logout`);
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/current`);
      return response.data;
    } catch (error) {
      return rejectWithValue('User fetch error');
    }
  }
);

const authActions = {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
};

export default authActions;
