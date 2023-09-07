import { setUser, setToken, clearUser } from './authSlice';

// Дія для реєстрації користувача
export const registerUser = userData => async dispatch => {
  try {
    // Відправляємо запит на сервер для реєстрації
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
      // Зберігаємо дані користувача та токен у Redux store
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
    } else {
      // Обробка помилок реєстрації
      // Наприклад, виведення повідомлення про помилку
      console.error('Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
  }
};

// Дія для логіну користувача
export const loginUser = userData => async dispatch => {
  try {
    // Відправляємо запит на сервер для логіна
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
      // Зберігаємо дані користувача та токен у Redux store
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
    } else {
      // Обробка помилок логіна
      // Наприклад, виведення повідомлення про помилку
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
  }
};

// Дія для логауту користувача
export const logoutUser = () => dispatch => {
  // Очищаємо дані користувача та токену у Redux store
  dispatch(clearUser());
};
