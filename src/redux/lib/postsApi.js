import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './core/axiosBaseInstance';

export const __getPosts = createAsyncThunk(
    'getPosts',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get('/posts');
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
            const data = await axios.get(`/posts/${payload}`);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);
