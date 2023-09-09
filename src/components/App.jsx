import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout/Layout';
import ContactList from './ContactList/ContactList';
import LoginForm from '../pages/LoginForm';
import UserProfileForm from '../pages/UserProfileForm';
import RegistrationForm from '../pages/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/profile" element={<UserProfileForm />} />
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/login" element={<UserProfileForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
