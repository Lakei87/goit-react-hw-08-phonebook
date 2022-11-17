import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import ContactItem from "components/ContactItem";
import styles from './contactList.module.css';

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filteredContacts = contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={styles.contactList}>
            {filteredContacts.map(contact => {
                return <ContactItem
                    key={contact.id}
                    contact={contact}
                />
            })}
        </ul>
    );
};