import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
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
        isAddingContact: false,
    },
    reducers: {
        setFilter(state, { payload }) {
            state.filter = payload;
        }
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        
        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.items = payload;
        },
        
        [addContact.pending](state, _) {
            state.isLoading = true;
            state.isAddingContact = true;
        },
        [addContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.items.push(payload);
            state.isAddingContact = false;
            Notify.success('Contact successfully added');
        },

        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            const index = state.items
                .findIndex(({_id}) => _id === payload.deletedContact._id);
            state.items.splice(index, 1);
        },
        [logOut.fulfilled](state) {
            state.items = [];
            state.isLoading = false;
        },
    },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;