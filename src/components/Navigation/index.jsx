import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { Link, Logo, LogoIcon, LogoText } from "./navigation.styled";


export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <>
            {isLoggedIn ? (
                <Logo>
                    Phone Book
                </Logo>
            ) : (
                <Link to='/'>
                    <LogoText>Home</LogoText>
                    <LogoIcon/>
                </Link>
            )}
        </>
    );
};
