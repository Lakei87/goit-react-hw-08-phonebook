import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/material";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { Link, Logo } from "./navigation.styled";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div>
            {isLoggedIn ? (
                <Logo>
                    Phone Book
                </Logo>
            ) : (
                <Link to='/'>
                    <Button>
                        Home
                        <HomeIcon />
                    </Button>
                </Link>
            )}
        </div>
    );
};
