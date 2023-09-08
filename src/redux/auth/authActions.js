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
  // Ось додайте код для оновлення інформації про користувача на сервері
  try {
    const response = await fetch(
      'https://connections-api.herokuapp.com/users/update',
      {
        method: 'PUT', // Або метод, який ви використовуєте для оновлення інформації користувача на сервері
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      const data = await response.json();

      // Оновити інформацію про користувача у вашому сторі
      dispatch(setUser(data.user));
      // Можливо, вам потрібно також оновити токен, якщо він змінився
      // dispatch(setToken(data.token));
    } else {
      console.error('Update failed');
    }
  } catch (error) {
    console.error('Update error:', error);
  }
};
