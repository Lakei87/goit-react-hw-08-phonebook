import { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { selectIsCurrentUser } from 'redux/auth/selectors';
import { currentUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Verify from 'pages/Verify';

const Layout = lazy(() => import('./Layout'));
const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(selectIsCurrentUser);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return isCurrentUser ? (
    Loading.circle()
  ) : (
    <Suspense>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo='/contacts' component={<HomePage />} />
            }/>
          <Route
            path='/register'
            element={
              <RestrictedRoute redirectTo='/contacts' component={<RegisterPage />} />
            }/>

          <Route
            path='/register/:verifycationToken'
            element={<Verify />}/>

          <Route
            path='/login'
            element={
              <RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />
            }/>
          <Route
            path='/contacts'
            element={
              <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
            }/>
          <Route path='*' element={<Navigate to='/' />}/>
        </Route>
      </Routes>
      {Loading.remove()}
    </Suspense>
  );
};