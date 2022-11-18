import { Link } from "react-router-dom";

export default function AuthNav() {
    return (
        <div>
            <Link to='/register'>
                <button type="submit">Sign up</button>
            </Link>
            <Link to='login'>
                <button type="submit">Login</button>
            </Link>
        </div>
    );
};
