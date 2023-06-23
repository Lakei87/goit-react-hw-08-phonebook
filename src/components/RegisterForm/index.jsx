import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";
import { Notify } from "notiflix";
import { register, resendMail } from "redux/auth/operations";
import { FormWrap } from "components/Box";
import { FormTitle, Proposition, Link, SendMailAgain } from "./registerForm.styled";
import { selectUser } from "redux/auth/selectors";

Notify.init({
  position: 'center-top',
  timeout: 7000,
  fontSize: '16px',
});

export default function RegisterForm() {
  const [isSendingMailAgain, setIssendingMailAgain] = useState(false);
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
        return Notify.info('Check your email and confirm registration, please.')
      }
    });
  };

  const handleResendMail = () => {
    if (isSendingMailAgain) {
      return Notify.info('Check for correct your email address.');
    }
    dispatch(
      resendMail({ email: user.email })
    ).then(() => {
      return Notify.info('Mail was sent again.');
    });
    setIssendingMailAgain(true);
  };

  return (
    <FormWrap
      onSubmit={handleSubmit}
      autoComplete="off">
      <FormTitle>
        Please register
      </FormTitle>
      <TextField
        label="Username"
        variant="outlined"
        required={true}
        type="text"
        name="name"
      />
      <TextField
        label="Email"
        variant="outlined"
        required={true}
        type="email"
        name="email"
      />
      <TextField
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
          Didn't get your email? Send 
          <SendMailAgain
            onClick={handleResendMail}
            href="#"
            isSendingMailAgain={isSendingMailAgain}>
            again
          </SendMailAgain>
        </Proposition>
      }
      <Proposition>
        Have an account already? Please, login
        <Link to='/login'>
          HERE
        </Link>
      </Proposition>
    </FormWrap>
  );
};
