import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "redux/auth/operations";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
        isLoading: false,
        isLoadingNewContact: false,
    },
    reducers: {
        setFilter(state, { payload }) {
            return state = payload;
        }
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [addContact.pending](state, _) {
            state.isLoadingNewContact = true;  
        },
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,

        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.items = payload;
        },

        [addContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.items.push(payload);
            state.isLoadingNewContact = false;
        },

        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            const index = state.items.findIndex(
                ({ id }) => id === payload.id
            );
            state.items.splice(index, 1);
        },
        [logOut.fulfilled](state) {
            state.items = [];
            state.isLoading = false;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;