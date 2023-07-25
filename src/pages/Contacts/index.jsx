import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import Filter from 'components/Filter';
import { Main, Section, Container } from 'components/Box';
import { fetchContacts } from 'redux/contacts/operations';
import { SubTitle } from './contact.styled';

export default function Contacts() {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <Main sx={{justifyContent: "start"}}>
            <Section>
                <Container>
                    <SubTitle>Add new contact</SubTitle>
                    <ContactForm />
                </Container>
            </Section>
            <Section>
                <Container sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <SubTitle>Contact list</SubTitle>
                    {contacts.length === 0
                        ? (<Notification message={'Phonebook is empty. You can add a new contact.'} />)
                        : <>
                            <Filter />
                            <ContactList />
                        </>}
                </Container>
            </Section>
        </Main>
    );
};
