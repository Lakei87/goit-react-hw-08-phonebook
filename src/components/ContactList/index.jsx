import ContactItem from "components/ContactItem";

const ContactList = ({ contacts, onBtnClick }) => {
    console.log(contacts)
    return (
        <ul className="contactList">
            {contacts.map(({id, name, number}) => {
                return <ContactItem
                    key={id}
                    name={name}
                    number={number}
                    onBtnClick={() => onBtnClick(id)}
                />
            })}
        </ul>
    )
}

export default ContactList;