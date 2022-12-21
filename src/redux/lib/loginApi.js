import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __login = createAsyncThunk('login', async (payload, thunkAPI) => {
    try {
        const res = await axios.post(
            `https://dev-jn.shop/api/users/login`,
            payload
        );
        alert('로그인에 성공하였습니다!');
        localStorage.setItem('authentication', res.data.authentication);
        payload.navigate('/');
    } catch (e) {
        alert('로그인에 실패하였습니다!!');
    }
});
