import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Notification from './Notification';
// import Filter from './Filter';
// import { Box } from './Box';
import Home from './Home';
import { fetchContacts } from 'redux/operations';
// import { selectContacts, selectIsLoading } from 'redux/selectors';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

export default function App() {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
      </Routes>
      {/* <Box textAlign='center'>
        <h1>Phonebook</h1>

        <ContactForm/>
        <h2>Contacts</h2>
        {contacts.length === 0
          ? (<Notification message={'Phonebook is empty. You can add a new contact.'} />)
          : <>
            <Filter/>
            <ContactList/>
          </>}
        {isLoading
          ? Loading.circle('Loading...',{
            backgroundColor: 'rgba(0,0,0,0.8)',
            svgSize: '40px',
          })
          : Loading.remove()
        }
      </Box> */}
    </>
  );
};