import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './core/axiosBaseInstance';

export const __getValidId = createAsyncThunk(
    'getValidId',
    async (payload, thunkAPI) => {
        try {
            await axios.get(`/users/signup/${payload.id}`, {
                params: payload,
            });
            alert('사용 가능한 아이디 입니다!');
            payload.setIsUsableId(true);
        } catch (e) {
            console.log(e);
            alert('이미 사용 중인 id 입니다.');
        }
    }
);
