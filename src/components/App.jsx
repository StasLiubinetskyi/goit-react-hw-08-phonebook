import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegistrationForm from './pages/RegistrationForm';
import LoginForm from './pages/LoginForm';
import UserProfileForm from './pages/UserProfileForm';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

const App = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <header>
        {user ? (
          <>
            <h1>Welcome, {user.name}!</h1>
            <button>Logout</button>
          </>
        ) : (
          <h1>Welcome to the App</h1>
        )}
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/contacts" /> : <LoginForm />}
          </Route>
          <Route exact path="/register">
            {user ? <Redirect to="/contacts" /> : <RegistrationForm />}
          </Route>
          <Route exact path="/profile">
            {user ? <UserProfileForm /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/contacts">
            {user ? (
              <>
                <ContactForm />
                <ContactList />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
