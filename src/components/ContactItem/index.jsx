const ContactItem = ({ name, number }) => {
    return (
        <li className="contactList__item">
            {name}: {number}
        </li>
    )
};

export default ContactItem;