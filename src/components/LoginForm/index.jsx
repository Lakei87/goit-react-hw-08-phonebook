import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { logIn } from 'redux/auth/operations';
import { FormWrap } from 'components/Box';
import { FormTitle, Proposition, Link } from './loginForm.slyled';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    
    <FormWrap
      onSubmit={handleSubmit}
      autoComplete="off">
      <FormTitle>
        Please login
      </FormTitle>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        required={true}
        type="email"
        name="email"
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        required={true}
        type="password"
        name="password"
      />
      <Button
        type="submit"
        variant="contained">
        Log In
      </Button>
      <Proposition>
        You don't have an account yet? Please register
        <Link to='/register'>
          HERE
        </Link>
      </Proposition>
    </FormWrap>
  );
};

