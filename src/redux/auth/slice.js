import { createSlice } from "@reduxjs/toolkit";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { logIn, logOut, refreshUser, register } from "./operations";

const handlePending = () => {
    Loading.circle();
};

const handleRejected = (state, { payload }) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    Loading.remove();
};

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending]: handlePending,
        [logIn.pending]: handlePending,
        [register.rejected]: handleRejected,
        [logIn.rejected]: handleRejected,

        [register.fulfilled](state, { payload }) {
            state.user = payload.user;
            Loading.remove();
        },

        [logIn.fulfilled](state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            Loading.remove();
        },

        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, {payload}) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});

export const authReducer = authSlice.reducer;