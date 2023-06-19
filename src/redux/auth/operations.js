import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:3001/api/';
axios.defaults.baseURL = 'https://react-phonebook-backend.onrender.com/api/';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/auth/signup', credentials);
            // After successful login, add the token to the HTTP header
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
    },
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/auth/login', credentials);
            // After successful login, add the token to the HTTP header
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response);
        }
    },
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/auth/logout');
            // After a successful logout, remove the token from the HTTP header
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            // If there is no token, exit without performing any request
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            // If there is a token, add it to the HTTP header and perform the request
            setAuthHeader(persistedToken);
            const res = await axios.get('/auth/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);