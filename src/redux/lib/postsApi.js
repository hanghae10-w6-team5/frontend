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

export const __deletePost = createAsyncThunk(
    'deletePost',
    async (payload, thunkAPI) => {
        console.log(payload);
        try {
            const data = await axios.delete(`/posts/${payload.id}`, {
                params: { postId: +payload.id },
                headers: {
                    authentication: payload.token,
                },
            });
            payload.navigate('/');
            console.log(payload);
            // return thunkAPI.fulfillWithValue(data.data);
        } catch (e) {
            // return thunkAPI.rejectWithValue(e);
        }
    }
);

export const __modifyPost = createAsyncThunk(
    'modifyPost',
    async (payload, thunkAPI) => {
        console.log(payload);
        // try {
        //     const data = await axios.put(`/posts/${payload.id}`, {

        //     }, {
        //         params: { postId: +payload.id },
        //     });
        //     payload.navigate('/');
        //     console.log(payload);
        //     // return thunkAPI.fulfillWithValue(data.data);
        // } catch (e) {
        //     // return thunkAPI.rejectWithValue(e);
        // }
    }
);
