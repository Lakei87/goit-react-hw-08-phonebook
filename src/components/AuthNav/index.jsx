import { Wrapper, Link, LinkText } from "./authNav.styled";

export default function AuthNav() {
    return (
        <Wrapper>
            <Link to='/register'>
                <LinkText type="button" variant="contained">Sign up</LinkText>
            </Link>
            <Link to='/login'>
                <LinkText type="button" variant="contained">Login</LinkText>
            </Link>
        </Wrapper>
    );
};
