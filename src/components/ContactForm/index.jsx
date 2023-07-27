import { useDispatch, useSelector } from 'react-redux';
import { Notify } from "notiflix";
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
            return Notify.failure(`"${name.value}" is already in contacts`, {
                timeout: 5000,
            });
        } else {
            dispatch(addContact({
                name: name.value,
                phone: phone.value,
            })).then(res => {
                if (res.type.includes("fulfilled")) Notify.success("Added", {
                    timeout: 2000,
                    position: "right-bottom",
                    width: "130px",
                });
            });
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
    );
};