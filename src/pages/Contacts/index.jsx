import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectStatus } from 'redux/contacts/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import Filter from 'components/Filter';
import { Box } from 'components/Box';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
    const statusState = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    const getStatus = (status) => {
        switch (status) {
            case 201:
                Notify.success('The contact was successfully created');
                break;
            case 200:
                Notify.success('The contact was successfully deleted');
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
