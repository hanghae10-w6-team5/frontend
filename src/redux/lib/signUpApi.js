import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getValidId = createAsyncThunk(
    'getValidId',
    async (payload, thunkAPI) => {
        try {
            const res = await axios.get(`http://localhost:3001/users`, {
                params: payload,
            });
            console.log(res);
            const filtered = res.data.filter((prev) => prev.id === payload.id);
            filtered.length === 1
                ? alert('이미 사용중인 아이디 입니다!')
                : alert('사용 가능한 아이디 입니다!');
            // if (res.status === 200) {
            //     alert('사용 가능한 아이디 입니다!');
            // } else if (res.status === 401) {
            //     alert('이미 사용중인 아이디 입니다!');
            // }
        } catch (e) {
            alert(e);
        }
    }
);
