import { useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import styles from './filter.module.css';

export default function Filter() {
    const dispatch = useDispatch();

    const handleFilterChange = e => {
        dispatch(selectFilter(e.target.value));
    };

    return (
        <label>
            Find contacts by name
            <input
                className={styles.filter}
                type="text"
                onChange={handleFilterChange}
            />
        </label>
    );
};