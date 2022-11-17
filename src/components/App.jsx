import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route
          path='/register'
          element={
            <RestrictedRoute redirectTo='/contacts' component={<RegisterPage />} />
          }>
        </Route>
        <Route
          path='/login'
          element={
            <RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />
          }>
        </Route>
        <Route
          path='/contacts'
          element={
            <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
          }>
        </Route>
      </Routes>
    </Suspense>
  );
};