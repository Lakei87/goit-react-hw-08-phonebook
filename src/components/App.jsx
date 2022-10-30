// import { useSelector, useDispatch } from 'react-redux';
// import { getContacts, filterContacts } from 'redux/contactsSlice';
// import { getFilter } from 'redux/filterSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';

export default function App() {
  return (
    <Box textAlign='center'>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </Box>
  );
};