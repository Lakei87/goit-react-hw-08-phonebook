import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import { selectIsLoggedIn } from "redux/auth/selectors";
import { Link, Text } from "./navigation.styled";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div>
            {isLoggedIn ? (
                "Phone Book"
            ) : (
                <Link to='/'>
                    <HomeIcon fontSize="large" />
                    <Text>
                        Home
                    </Text>
                </Link>
            )}
        </div>
    );
};
