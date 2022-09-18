import ContactItem from "components/ContactItem";

const ContactList = ({ contacts }) => {
    console.log(contacts)
    return (
        <ul className="contactList">
            {contacts.map(({id, name, number}) => {
                return <ContactItem
                    key={id}
                    name={name}
                    number={number}
                />
            })}
        </ul>
    )
}

export default ContactList;