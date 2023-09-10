import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ContactList from './ContactList/ContactList';
import LoginForm from '../pages/LoginForm';
import RegistrationForm from '../pages/RegistrationForm';
import Navigation from './Navigation/Navigation';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contacts" element={<ContactList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
