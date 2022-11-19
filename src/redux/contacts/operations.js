import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export function getStatus(status) {
    return status;
};

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/contacts');
            return {
                data: res.data,
                status: res.status,
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const res = await axios.post('/contacts', contact);
            return {
                data: res.data,
                status: res.status,
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactID, thunkAPI) => {
        try {
            const res = await axios.delete(`/contacts/${contactID}`);
            return {
                data: res.data,
                status: res.status,
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);