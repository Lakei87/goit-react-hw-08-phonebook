import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "redux/auth/operations";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload.data;
    state.isAddingContact = false;
    state.status = payload.status;
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
        isLoading: false,
        isAddingContact: false,
        status: null,
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
            state.isAddingContact = true;
        },
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,

        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.items = payload.data;
        },

        [addContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.items.push(payload.data);
            state.isAddingContact = false;
            state.status = payload.status;
        },

        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            const index = state.items.findIndex(
                ({ id }) => id === payload.data.id
            );
            state.items.splice(index, 1);
        },
        [logOut.fulfilled](state) {
            state.items = [];
            state.isLoading = false;
            state.status = null;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;