import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getPosts = createAsyncThunk(
    'getPosts',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get('http://dev-jn.shop/api/posts');
            return thunkAPI.fulfillWithValue(data.data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const __getPostById = createAsyncThunk(
    'getPostsById',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(
                `http://dev-jn.shop/api/posts/${payload}`
            );
            return thunkAPI.fulfillWithValue(data.data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);
