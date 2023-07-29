import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { Main, Container } from 'components/Box';
import { tokenVerification } from 'redux/auth/operations';
import { selectIsVerify } from 'redux/auth/selectors';
import { Title, Text } from './verify.styled';

export default function Verify() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const currentLocation = useLocation();
    const isVerify = useSelector(selectIsVerify);

    const pathnameArr = currentLocation.pathname.split('/');
    const token = pathnameArr[pathnameArr.length - 1];
    
    useEffect(() => {
        if (isVerify === true) {
            Notify.success('Verification successful. Please login.', {
                timeout: 3000,
                position: "center-top",
            });

            return () => { navigate('/login') };
        };
    }, [navigate, isVerify]);

    useEffect(() => {
        dispatch(tokenVerification(token));
    },[dispatch, token])
    
    return (
        <>
            {isVerify === false &&
                <Main>
                    <Container sx={{textAlign: "center"}}>
                        <Title>Oops..!</Title>
                        <Text>Something Went Wrong. Please try again later or contact support.</Text>
                    </Container>
                </Main>
            }
        </>
    );
};
