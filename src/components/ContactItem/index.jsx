import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import styles from './contactItem.module.css';

export default function ContactItem({ name, phone, contactId }) {
    const dispatch = useDispatch();

    const handleDelete = id => dispatch(deleteContact(id))
    
    return (
        <li className={styles.contactList__item}>
            <p className={styles.contactList__name}>{name}:</p>
            <p className={styles.contactList__number}>{phone}</p>
            <button
                className={styles.contactList__btn}
                type="button"
            onClick={() => handleDelete(contactId)}
            >
                Delete
            </button>
        </li>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    contactId: PropTypes.string.isRequired,
};