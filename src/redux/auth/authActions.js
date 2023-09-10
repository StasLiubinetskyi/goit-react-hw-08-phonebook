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

    const data = await response.json();

    if (response.ok) {
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
    } else {
      console.error('Registration failed:', data);
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

    const data = await response.json();

    if (response.ok) {
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
    } else {
      console.error('Login failed:', data);
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
      'https://connections-api.herokuapp.com/users/current',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userData.token}`,
        },
        body: JSON.stringify({ name: userData.name, email: userData.email }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch(setUser(data.user));
    } else {
      console.error('Update failed:', data);
    }
  } catch (error) {
    console.error('Update error:', error);
  }
};
