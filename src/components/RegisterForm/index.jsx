import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";
import { Notify } from "notiflix";
import { register } from "redux/auth/operations";
import { FormWrap } from "components/Box";
import { FormTitle, Proposition, Link } from "./registerForm.styled";
import { selectUser } from "redux/auth/selectors";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    ).then(res => {
      if (res.error) {
        return Notify.failure(res.payload.data.message)
      } else {
        return Notify.info('Confirmation has been sent to your email')
      }
    });
    // form.reset();
  };


  return (
    <FormWrap
      onSubmit={handleSubmit}
      autoComplete="off">
      <FormTitle>
        Please register
      </FormTitle>
      <TextField
        // id="outlined-basic"
        label="Username"
        variant="outlined"
        required={true}
        type="text"
        name="name"
      />
      <TextField
        // id="outlined-basic"
        label="Email"
        variant="outlined"
        required={true}
        type="email"
        name="email"
      />
      <TextField
        // id="outlined-basic"
        label="Password"
        variant="outlined"
        required={true}
        type="password"
        name="password"
      />
      <Button
        type="submit"
        variant="contained">
        Register
      </Button>
      {user.email &&
        <Proposition>
          Have not received email. Send again
        </Proposition>}
      <Proposition>
        Alresdy have an account? Please login
        <Link to='/login'>
          HERE
        </Link>
      </Proposition>
    </FormWrap>
  );
};
