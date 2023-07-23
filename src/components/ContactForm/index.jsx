import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectIsAddingContact} from 'redux/contacts/selectors';
import {
  FormWrap,
  Field,
  Btn
} from "components/Box";

export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsAddingContact);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const { name, phone } = form.elements;
        const isContactInList = contacts.some(contact =>
            contact.name.toLowerCase() === name.value.toLowerCase());
        
        if (isContactInList) {
            name.focus();
            return alert(`"${name.value}" is already in contacts`);
        } else {
            dispatch(addContact({
                name: name.value,
                phone: phone.value,
            }));
        };

        form.reset();
        name.focus();
    };

    return (
        <FormWrap
            onSubmit={handleSubmit}>
            <Field
                label='Name'
                variant='outlined'
                required={true}
                type='text'
                name='name'
            />
            <Field
                label='Phone'
                variant='outlined'
                required={true}
                type='tel'
                name='phone'
            />
            <Btn
                type='submit'
                variant='contained'
                sx={{
                    fontSize: 18,
                    textTransform: "none"
                }}
            >
                {isLoading
                    ? ("Loading...")
                    : ("Add contact")
                }
            </Btn>
        </FormWrap>

//=======================================================================================
        // <form className={styles.contactForm} name="phoneBook" onSubmit={handleSubmit}>
        //     <label>
        //         Name
        //         <input
        //             autoFocus="autofocus"
        //             className={styles.contactForm__input}
        //             type="text"
        //             name="name"
        //             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //             required
        //         />
        //     </label>
        //     <label>
        //         Phone
        //         <input
        //             className={styles.contactForm__input}
        //             type="tel"
        //             name="phone"
        //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        //             required
        //         />
        //     </label>
        //     <button
        //         className={styles.contactForm__btn}
        //         type="submit">
                // {isLoading ? (
                //     "Loading..."
                // ) : (
                //     "Add contact"
                // )}
        //     </button>
        // </form>
    );
};