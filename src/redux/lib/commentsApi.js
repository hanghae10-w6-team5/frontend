import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// db에서 필요한 데이터의 id값을 payload로 넘겨 받아 data를 받아옴
export const __getComments = createAsyncThunk(
    'getContents',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(
                `http://localhost:3001/comments`
                // `http://localhost:3001/comments/${payload}`
            );
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//댓글 입력
export const __submitComment = createAsyncThunk(
    'submitComment',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.post(
                `http://localhost:3001/comments`,
                payload
            );
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//댓글 수정
export const __editComment = createAsyncThunk(
    'editComment',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.patch(
                `http://localhost:3001/comments/${payload.id}`,
                payload.edit
                // `http://localhost:3001/api/posts/${payload.postId}/comments/${payload.commentId}`,
                // payload.newMemeObj2
            );
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//댓글 삭제
export const __deleteComment = createAsyncThunk(
    'deleteComment',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.delete(
                `http://localhost:3001/comments/${payload}`
                // `http://localhost:3001/api/posts/${payload.postId}/comments/${payload.commentId}`,
                // payload.newMemeObj
            );
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);
