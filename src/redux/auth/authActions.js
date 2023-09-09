// authActions.js
import { setUser, setToken, clearUser } from './authSlice';

export const registerUser = userData => async dispatch => {
  try {
    const response = await fetch(
      'https://connections-api.herokuapp.com/users/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      const data = await response.json();

      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
    } else {
      console.error('Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
  }
};

export const loginUser = userData => async dispatch => {
  try {
    const response = await fetch(
      'https://connections-api.herokuapp.com/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      const data = await response.json();

      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
  }
};

export const logoutUser = () => dispatch => {
  dispatch(clearUser());
};

export const updateUserInfo = userData => async dispatch => {
  
  try {
    const response = await fetch(
      'https://connections-api.herokuapp.com/users/update',
      {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      const data = await response.json();

      
      dispatch(setUser(data.user));
      
    } else {
      console.error('Update failed');
    }
  } catch (error) {
    console.error('Update error:', error);
  }
};
