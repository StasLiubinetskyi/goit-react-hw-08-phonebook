import React from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import RegistrationForm from '../pages/RegistrationForm';
import LoginForm from '../pages/LoginForm';
import UserProfileForm from '../pages/UserProfileForm';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Layout from './Layout/Layout';

const App = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <Router>
      <Layout>
        <Route exact path="/">
          {user ? <ContactList /> : <LoginForm />}
        </Route>
        <Route exact path="/register">
          {user ? <ContactList /> : <RegistrationForm />}
        </Route>
        <Route exact path="/profile">
          {user ? <UserProfileForm /> : <LoginForm />}
        </Route>
        <Route exact path="/contacts">
          {user ? <ContactForm /> : <LoginForm />}
        </Route>
        <Route exact path="/login">
          {user ? <UserProfileForm /> : <LoginForm />}
        </Route>
      </Layout>
    </Router>
  );
};

export default App;
