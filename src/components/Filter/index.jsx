import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';
import styles from './filter.module.css';

export default function Filter() {
    const dispatch = useDispatch();

    const handleFilterChange = e => {
        console.log(e.target.value)
        dispatch(setFilter(e.target.value));
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