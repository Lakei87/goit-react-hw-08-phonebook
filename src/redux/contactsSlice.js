import { nanoid, createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addConcact: {
            reducer(state, { payload }) {
                // we check the availability of a contact in the phonebook
                const isContactInList = state.some(({ name }) => name.toLowerCase() === payload.name.toLowerCase());

                if (isContactInList) {
                    return alert(`${payload.name} is already in contacts`);
                } else state.push(payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    }
                };
            },
        },
        deleteContact(state, { payload }) {
            return state.filter(({id}) => id !== payload);
        },
    },
});

export const getContacts = state => state.contacts;

export const { addConcact, deleteContact, filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;