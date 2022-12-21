import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './core/axiosBaseInstance';

export const __login = createAsyncThunk(
    'postLogin',
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`/users/login`, payload);
            alert('로그인에 성공하였습니다!');
            localStorage.setItem('authentication', res.data.authentication);
            payload.navigate('/');
            return thunkAPI.fulfillWithValue(res);
        } catch (e) {
            alert(e.response.data.errorMessage);
            return thunkAPI.rejectWithValue(e);
        }
    }
);
