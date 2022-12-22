import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from './instance';
import { getToken } from './token';

// db에서 필요한 데이터의 id값을 payload로 넘겨 받아 data를 받아옴
export const __getComments = createAsyncThunk(
    'getComments',
    async (payload, thunkAPI) => {
        try {
            const data = await instance.get(
                `api/posts/${payload}`
                // `http://localhost:3001/comments`
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
            const data = await instance.post(
                `api/posts/${payload.postId}/comments`,
                { comment: payload.comment }, //data
                {
                    headers: { authentication: getToken() },
                    params: { postId: payload.postId },
                } //config

                //params는 객체 혹은 URLSearchParams 객체여야 한다
                // `http://localhost:3001/comments`,
                // payload
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
            const data = await instance.patch(
                `api/posts/${payload.postId}/comments/${payload.commentId}`,
                { comment: payload.comment }, //data(req.body)
                {
                    headers: { authentication: getToken() },
                    params: {
                        postId: payload.postId,
                        commentId: payload.commentId,
                    },
                }
                // `http://localhost:3001/comments/${payload.id}`,
                // payload.edit
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
            const data = await instance.delete(
                `api/posts/${payload.postId}/comments/${payload.commentId}`,
                {
                    headers: { authentication: getToken() },
                    params: {
                        payload,
                    },
                }

                // `http://localhost:3001/comments/${payload}`
            );
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);
