import { useDispatch } from 'react-redux';
import { addConcact } from 'redux/contactsSlice';
import styles from './contactForm.module.css';

export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const { name, number } = form.elements;
        dispatch(addConcact(name.value, number.value));
        form.reset();
    };

    return (
        <form className={styles.contactForm} name="phoneBook" onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    className={styles.contactForm__input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>
                Phone
                <input
                    className={styles.contactForm__input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button
                className={styles.contactForm__btn}
                type="submit">
                Add contact
            </button>
        </form>
    );
};