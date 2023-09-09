import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import ContactList from './ContactList/ContactList';
import LoginForm from '../pages/LoginForm';
import RegistrationForm from '../pages/RegistrationForm';
import Navigation from './Navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Головна сторінка */}
        <Route path="/register" element={<RegistrationForm />} />{' '}
        {/* Реєстрація */}
        <Route path="/login" element={<LoginForm />} /> {/* Логін */}
        <Route path="/contacts" element={<ContactList />} /> {/* Контакти */}
      </Routes>
    </>
  );
};

export default App;
