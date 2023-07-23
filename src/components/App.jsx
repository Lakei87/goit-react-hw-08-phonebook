import { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Layout = lazy(() => import('./Layout'));
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
    Loading.circle()
  ) : (
    <Suspense>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo='/contacts' component={<HomePage />} />
            }>
          </Route>
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
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Route>
      </Routes>
      {Loading.remove()}
    </Suspense>
  );
};