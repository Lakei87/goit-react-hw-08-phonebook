import { selectContacts } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import Filter from 'components/Filter';
import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <Box textAlign='center'>
            <h2>Add new contact</h2>
            <ContactForm />
            <h2>Contacts</h2>
            {contacts.length === 0
                ? (<Notification message={'Phonebook is empty. You can add a new contact.'} />)
                : <>
                    <Filter />
                    <ContactList />
                </>}
        </Box>
    );
};
