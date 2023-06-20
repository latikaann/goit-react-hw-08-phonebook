import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import HomePage from 'pages/HomePage';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Contacts from 'pages/Contacts';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
}
