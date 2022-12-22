import React, { useState, useEffect, memo, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { __submitComment, __getComments } from '../../redux/lib/commentsApi';

//댓글 입력창. param 값을 props로 받아옴.
const DetailCommentForm = ({ id }) => {
    const [comment, setComment] = useState('', []);
    const dispatch = useDispatch();

    // 댓글 등록 버튼
    const addComment = (e) => {
        e.preventDefault();
        if (comment === '') return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

        dispatch(
            __submitComment({
                postId: id,
                comment: comment,
            })
        ).then(() => {
            dispatch(__getComments(id)).then((res) => {
                setComment('');
            });
        });
    };

    useEffect(() => {
        try {
            dispatch(__getComments(id));
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    //댓글폼
    return (
        <CommentForm>
            <CommentInputForm>
                <Input
                    type="text"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    placeholder="댓글을 입력해주세요."
                ></Input>
                <CommentButton type="button" onClick={addComment}>
                    등록
                </CommentButton>
            </CommentInputForm>
        </CommentForm>
    );
};

const CommentForm = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 100px 0 100px;
    /* background-color: aliceblue; */
    padding-bottom: 150px;
`;
const CommentInputForm = styled.form`
    width: 100%;
`;

const CommentButton = styled.button`
    width: 80px;
    height: 35px;
    background-color: #ff7e36;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    border-radius: 20px;
    border: 0;
    float: right;
    :hover {
        background-color: #ffa148;
    }
`;

const Input = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    color: #838383;
`;

export default DetailCommentForm;
