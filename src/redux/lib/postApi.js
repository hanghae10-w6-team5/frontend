import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getPosts = createAsyncThunk(
    'getPosts',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get('http://localhost:3001/posts');
            return thunkAPI.fulfillWithValue(data.data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);
