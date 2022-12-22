import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './core/axiosBaseInstance';

export const __getPosts = createAsyncThunk(
    'getPosts',
    async (payload, thunkAPI) => {
        // try {
        //     const data = await axios.get('/posts', {
        //         headers: {
        //             authentication: payload.token
        //         },
        //         params: {
        //             postId: payload.id
        //         }
        //     });
        //     return thunkAPI.fulfillWithValue(data.data);
        // } catch (e) {
        //     return thunkAPI.rejectWithValue(e);
        // }
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
            const data = await axios.get(`/posts/${payload.id}`, {
                headers: {
                    authentication: payload.token,
                },
                params: {
                    postId: +payload.id,
                },
            });
            return thunkAPI.fulfillWithValue(data.data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const __deletePost = createAsyncThunk(
    'deletePost',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.delete(`/posts/${payload.id}`, {
                params: { postId: +payload.id },
                headers: {
                    authentication: payload.token,
                },
            });
            payload.navigate('/');
            // return thunkAPI.fulfillWithValue(data.data);
        } catch (e) {
            // return thunkAPI.rejectWithValue(e);
        }
    }
);

export const __modifyPost = createAsyncThunk(
    'modifyPost',
    async (payload, thunkAPI) => {
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
