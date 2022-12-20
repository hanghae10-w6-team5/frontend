import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __login = createAsyncThunk('login', async (payload, thunkAPI) => {
    try {
        await axios.post(`http://localhost:3001/users`, payload);
        // if (res.status === 200) {
        //     alert('사용 가능한 아이디 입니다!');
        // } else if (res.status === 401) {
        //     alert('이미 사용중인 아이디 입니다!');
        // }
    } catch (e) {
        alert(e);
    }
});
