import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div>
            {isLoggedIn ? (
                "Phone Book"
            ) : (
                <Link to='/'>
                    Home
                </Link>
            )}
        </div>
    );
};
