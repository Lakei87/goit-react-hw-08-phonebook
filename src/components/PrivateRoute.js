import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsCurrentUser, selectIsLoggedIn } from 'redux/auth/selectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isCurrentUser = useSelector(selectIsCurrentUser);
    const shouldRedirect = !isLoggedIn && !isCurrentUser;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};