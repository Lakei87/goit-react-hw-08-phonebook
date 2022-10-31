import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Notification from './Notification';
import Filter from './Filter';
import { Box } from './Box';

export default function App() {
  const contacts = useSelector(getContacts);

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