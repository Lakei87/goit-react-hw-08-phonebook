import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        [fetchContacts.rejected]: handleRejected,

        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        },
        [addContact.rejected]: handleRejected,

        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, { payload }) {
            console.log(payload.id)
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                ({id}) => id === payload.id
            );
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
    },
    // reducers: {
    //     addConcact: {
    //         reducer(state, { payload }) {
    //             // we check the availability of a contact in the phonebook
    //             const isContactInList = state.some(({ name }) => name.toLowerCase() === payload.name.toLowerCase());

    //             if (isContactInList) {
    //                 return alert(`${payload.name} is already in contacts`);
    //             } else state.push(payload);
    //         },
    //         prepare(name, number) {
    //             return {
    //                 payload: {
    //                     id: nanoid(),
    //                     name,
    //                     number,
    //                 }
    //             };
    //         },
    //     },
    //     deleteContact(state, { payload }) {
    //         return state.filter(({id}) => id !== payload);
    //     },
    // },
});

export const contactsReducer = contactsSlice.reducer;