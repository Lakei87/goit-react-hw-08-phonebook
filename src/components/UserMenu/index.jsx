import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { NavWrap, Greeting, BtnLogout } from './userMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    
    return (
        <NavWrap>
            <Greeting>{`Welcome, ${user.name}`}</Greeting>
            <BtnLogout
                type="submit"
                variant="contained"
                onClick={() => dispatch(logOut())}>
                Logout
            </BtnLogout>
        </NavWrap>
    );
};
