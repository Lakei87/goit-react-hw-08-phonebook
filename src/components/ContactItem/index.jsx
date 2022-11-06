import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import styles from './contactItem.module.css';

export default function ContactItem({ contact }) {
    const { name, number, id } = contact;
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

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
                {isLoading ? (
                    "Loading..."
                ) : (
                        "Delete"
                )}
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