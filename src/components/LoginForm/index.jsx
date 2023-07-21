import { useDispatch } from 'react-redux';
import { Notify } from "notiflix";
import { logIn } from 'redux/auth/operations';
import {
  FormWrap,
  Section,
  Container,
  FormTitle,
  Proposition,
  Link,
  Field,
  Btn
} from "components/Box";

Notify.init({
  position: 'center-top',
  timeout: 7000,
  fontSize: '16px',
});

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
    ).then(res => {
      return res.error
        ? Notify.failure(res.payload.data.message)
        : Notify.success("Welcome to Phonebook")
      });
    // form.reset();
  };

  return (
    <Section>
      <Container>
        <FormWrap
          onSubmit={handleSubmit}
          autoComplete="off">
          <FormTitle>
            Please login
          </FormTitle>
          <Field
            label="Email"
            variant="outlined"
            required={true}
            type="email"
            name="email"
          />
          <Field
            label="Password"
            variant="outlined"
            required={true}
            type="password"
            name="password"
          />
          <Btn
            type="submit"
            variant="contained">
            Log In
          </Btn>
          <Proposition>
            You don't have an account yet? Please register
            <Link to='/register'>
              here
            </Link>
          </Proposition>
        </FormWrap>
      </Container>
    </Section>
  );
};

