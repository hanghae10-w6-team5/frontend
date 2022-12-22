import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './core/axiosBaseInstance';

export const __getValidId = createAsyncThunk(
    'getValidId',
    async (payload, thunkAPI) => {
        try {
            const res = await axios.get(`/users/signup/${payload.id}`, {
                params: payload,
            });
            alert('사용 가능한 아이디 입니다!');
            payload.setIsUsableId(true);
            return thunkAPI.fulfillWithValue(res);
        } catch (e) {
            alert(e.response.data.errorMessage);
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const __signUp = createAsyncThunk(
    'postsignUp',
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`/users/signup`, payload);
            alert(res.data.message);
            payload.navigate('/login');
            return thunkAPI.fulfillWithValue(res);
        } catch (e) {
            alert(e.response.data.errorMessage);
            return thunkAPI.rejectWithValue(e);
        }
    }
);
