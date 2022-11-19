import { selectContacts, selectStatus } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import Filter from 'components/Filter';
import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { useState } from 'react';

export default function Contacts() {
    // const [status, setStatus] = useState(null);
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
    const statusState = useSelector(selectStatus);
    // console.log(status)

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    const getStatus = (status) => {
        switch (status) {
            case 201:
                Notify.success('add contact');
                break;
            case 400:
                Notify.failure('Error creating contact');
                break;
            default:
                return;
                
        };
    };

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
            {getStatus(statusState)}
        </Box>
    );
};
