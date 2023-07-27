import { useDispatch, useSelector } from 'react-redux';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { NavWrap, Greeting, BtnLogout } from './userMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        Confirm.show(
            'Logout from PhoneBook',
            'Are you sure?',
            'Yes',
            'No',
            () => {
                dispatch(logOut());
            },
            () => {
                return;
            }
        );
    };
    
    return (
        <NavWrap>
            <Greeting>{`Welcome, ${user.name}`}</Greeting>
            <BtnLogout
                type="submit"
                variant="contained"
                onClick={handleLogout}>
                Logout
            </BtnLogout>
        </NavWrap>
    );
};
