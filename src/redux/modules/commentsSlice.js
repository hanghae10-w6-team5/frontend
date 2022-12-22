// src/redux/modules/todosSlice.js

import { createSlice } from '@reduxjs/toolkit';
import {
    __getComments,
    __submitComment,
    __editComment,
    __deleteComment,
} from '../lib/commentsApi';

const initialState = {
    comments: [],
    isLoading: false,
    error: null,
};

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        //__getComments
        [__getComments.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getComments.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.comments = [action.payload.data.comments]; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__getComments.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
        //__submitComment
        [__submitComment.pending]: (state) => {
            state.isLoading = true;
        },
        [__submitComment.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = [...state.comments, action.payload.data.comments];
        },
        [__submitComment.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        //__editComment
        [__editComment.pending]: (state) => {
            state.isLoading = true;
        },
        [__editComment.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = state.comments.map((e) => ({
                ...e,
                comment:
                    e.commentId === action.payload.commentId
                        ? action.payload.comment
                        : e.comment,
            }));
        },
        [__editComment.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        //__deleteComment
        [__deleteComment.pending]: (state) => {
            state.isLoading = true;
        },
        [__deleteComment.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = state.comments.filter(
                (comment) => comment.commentId !== action.payload.commentId
            );
        },
        [__deleteComment.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getComments, submitComment, editComment, deleteComment } =
    commentsSlice.actions;
export default commentsSlice.reducer;
