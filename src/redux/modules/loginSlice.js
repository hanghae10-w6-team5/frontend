// src/redux/modules/todosSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { __login } from '../lib/modules/loginApi';

const initialState = {
    isLoading: false,
    error: null,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: {
        [__login.pending]: (state) => {
            state.isLoading = true;
        },
        [__login.fulfilled]: (state) => {
            state.isLoading = false;
        },
        [__login.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default loginSlice.reducer;
