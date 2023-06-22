import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";
import { Notify } from "notiflix";
import { register, resendMail } from "redux/auth/operations";
import { FormWrap } from "components/Box";
import { FormTitle, Proposition, Link, SendMailAgain } from "./registerForm.styled";
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
        return Notify.failure(res.payload.data.message, {
          position: 'center-top',
          timeout: 7000,
          fontSize: '16px',
        })
      } else {
        return Notify.info('Check your e-mail and confirm registration, please.', {
          position: 'center-top',
          timeout: 7000,
          fontSize: '16px',
        })
      }
    });
    // form.reset();
  };

  const handleResendMail = () => {
    dispatch(
      resendMail({ email: user.email })
    ).then(() => {
      return Notify.info('Check your e-mail and confirm registration, please.', {
        position: 'center-top',
        timeout: 7000,
        fontSize: '16px',
      });
    });
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
          Have not received email? Send 
          <SendMailAgain onClick={handleResendMail} href="#">
            again
          </SendMailAgain>
        </Proposition>
      }
      <Proposition>
        Alresdy have an account? Please login
        <Link to='/login'>
          HERE
        </Link>
      </Proposition>
    </FormWrap>
  );
};
