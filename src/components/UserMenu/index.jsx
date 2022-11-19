import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { NavWrap, Greeting } from './userMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    
    return (
        <NavWrap>
            <Greeting>Welcome, {user.name}</Greeting>
            <Button
                type="submit"
                variant="contained"
                onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </NavWrap>
    );
};
