import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import styles from './contactItem.module.css';

export default function ContactItem({ contact }) {
    const { name, number, id } = contact;
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id))
    
    return (
        <li className={styles.contactList__item}>
            <p className={styles.contactList__name}>{name}:</p>
            <p className={styles.contactList__number}>{number}</p>
            <button
                className={styles.contactList__btn}
                type="button"
            onClick={handleDelete}
            >
                Delete
            </button>
        </li>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};