import { useDispatch } from 'react-redux';
import { Field } from 'components/Box';
import { setFilter } from 'redux/contacts/slice';

export default function Filter() {
    const dispatch = useDispatch();

    const handleFilterChange = e => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <Field
            type='text'
            label='Search'
            variant='outlined'
            onChange={handleFilterChange}
            sx={{marginBottom:"10px"}}
        />
    );
};