import { createSlice } from "@reduxjs/toolkit";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { logIn, logOut, currentUser, register, tokenVerification } from "./operations";

const handlePending = () => {
    Loading.circle();
};

const handleRejected = (state, { payload }) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    state.isVerify = false;
    Loading.remove();
};

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isCurrentUser: false,
    isVerify: Boolean,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending]: handlePending,
        [logIn.pending]: handlePending,
        [tokenVerification.pending]: handlePending,
        [register.rejected]: handleRejected,
        [logIn.rejected]: handleRejected,
        [tokenVerification.rejected]: handleRejected,

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

        [tokenVerification.fulfilled](state, { payload }) {
            state.isVerify = payload.verifiedUser.verify;
            Loading.remove();
        },

        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        
        [currentUser.pending](state) {
            state.isCurrentUser = true;
        },
        [currentUser.fulfilled](state, {payload}) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isCurrentUser = false;
        },
        [currentUser.rejected](state) {
            state.isCurrentUser = false;
        },
    },
});

export const authReducer = authSlice.reducer;