import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, Container, Box } from '@mui/material';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authActions';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ActionsPage = lazy(() => import('../pages/Actions'));

const App = () => {
  const dispatch = useDispatch();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline /> 
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contact"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contact"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute redirectTo="/login" component={<ActionsPage />} />
              }
            />
          </Route>
        </Routes>
      </Container>
    </Box>
  );
};

export default App;
