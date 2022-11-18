import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import { UserMenu } from "components/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";


export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </div>
    );
};
