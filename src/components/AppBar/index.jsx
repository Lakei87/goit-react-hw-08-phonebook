import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import { UserMenu } from "components/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { Wrapper } from "./appbar.styled";


export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Wrapper>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Wrapper>
    );
};
