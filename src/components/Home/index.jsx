import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Phonebook</h1>
            <Link to='/register'>
                <button type="submit">Sign up</button>
            </Link>
            <Link to='login'>
                <button type="submit">Login</button>
            </Link>
        </div>
    );
};
