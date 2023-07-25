import { useSelector } from 'react-redux';
import ContactItem from "components/ContactItem";
import { selectFilter, selectContacts } from 'redux/contacts/selectors';
import { List } from './contactList.styled';

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filteredContacts = contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <List>
            {filteredContacts.map(({ _id, name, phone }) => {
                return <ContactItem
                    key={_id}
                    name={name}
                    phone={phone}
                    contactId={_id}
                />
            })}
        </List>
    );
};