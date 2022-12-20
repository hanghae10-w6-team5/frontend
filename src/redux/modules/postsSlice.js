// src/redux/modules/todosSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { __getPosts, __getPostById } from '../lib/postsApi';

const initialState = {
    posts: [],
    post: [],
    isLoading: false,
    error: null,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [__getPosts.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getPosts.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.posts = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__getPosts.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
        [__getPostById.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getPostById.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.post = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__getPostById.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
    },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
