import { createSlice } from '@reduxjs/toolkit';
import { __getValidId, __signUp } from '../lib/modules/signUpApi';

const initialState = {
    isLoading: false,
    error: null,
};

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {},
    extraReducers: {
        [__getValidId.pending]: (state) => {
            state.isLoading = true;
        },
        [__getValidId.fulfilled]: (state) => {
            state.isLoading = false;
        },
        [__getValidId.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__signUp.pending]: (state) => {
            state.isLoading = true;
        },
        [__signUp.fulfilled]: (state) => {
            state.isLoading = false;
        },
        [__signUp.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default signUpSlice.reducer;
