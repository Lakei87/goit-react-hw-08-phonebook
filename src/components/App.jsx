import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Notification from './Notification';
import Filter from './Filter';
import { Box } from './Box';
import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box textAlign='center'>
      <h1>Phonebook</h1>

      <ContactForm/>
      <h2>Contacts</h2>
      {contacts.length === 0
        ? (<Notification message={'Phonebook is empty. Please add new contact.'} />)
        : <>
          <Filter/>
          <ContactList/>
        </>}
    </Box>
  );
};