// src/redux/lib/commentsApi.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from './core/axiosBaseInstance';
import { getToken } from './token';

// 댓글 조회
export const __getComments = createAsyncThunk(
    'getComments',
    async (payload, thunkAPI) => {
        try {
            const data = await instance.get(`/posts/${payload}`);
            // console.log(data.data);
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
            await instance.post(
                `/posts/${payload.postId}/comments`,
                { comment: payload.comment }, //data
                {
                    headers: { authentication: getToken() },
                    params: { postId: payload.postId },
                } //config
            );
            const data = await instance.get(`/posts/${payload.postId}`);
            console.log(data);
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
            await instance.patch(
                `/posts/${payload.postId}/comments/${payload.commentId}`,
                { comment: payload.comment }, //data(req.body)
                {
                    headers: { authentication: getToken() },
                    params: {
                        postId: payload.postId,
                        commentId: payload.commentId,
                    },
                }
            );
            const data = await instance.get(`/posts/${payload.postId}`);
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
            console.log(payload);
            await instance.delete(
                `/posts/${payload.postId}/comments/${payload.commentId}`,
                {
                    headers: { authentication: getToken() },
                    // params: {
                    //     payload,
                    // },
                }
            );
            const data = await instance.get(`/posts/${payload.postId}`);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);
