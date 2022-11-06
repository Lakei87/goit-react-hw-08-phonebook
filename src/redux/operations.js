import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://636653ab046eddf1bafd8938.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (dataContact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", dataContact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    },
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactID, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactID}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);