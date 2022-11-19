import { Button } from "@mui/material";
import { Wrapper, Link } from "./authNav.styled";

export default function AuthNav() {
    return (
        <Wrapper>
            <Link to='/register'>
                <Button type="button" variant="contained">Sign up</Button>
            </Link>
            <Link to='login'>
                <Button type="button" variant="contained">Login</Button>
            </Link>
        </Wrapper>
    );
};
