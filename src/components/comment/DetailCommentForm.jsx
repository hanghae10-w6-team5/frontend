import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __submitComment, __getComments } from '../../redux/lib/commentsApi';

const DetailCommentForm = () => {
    const [comments, setComments] = useState(null);
    const [comment, setComment] = useState('', []);
    console.log(comment);

    const dispatch = useDispatch();
    const param = useParams();
    console.log(param);

    // const onSubmitCommentHandler = (comment) => {
    //     dispatch(__submitComment({ id: param.id, comment: comment }));
    //     console.log(param.id);
    //     // setComments([...comments, comment]);
    //     // dispatch(__submitComment({ id: param.id, postId: param.postId }));
    // };

    const addComment = (e) => {
        const date = new Date();

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = ('0' + date.getDate()).slice(-2);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const dateStr = year + '-' + month + '-' + day;

        // console.log('date: ' + date.toLocaleDateString('ko-kr'));
        // console.log('year: ' + year);
        // console.log('month: ' + month);
        // console.log('day: ' + day);
        // console.log(date);
        // console.log('hours: ' + hours);
        // console.log('minutes: ' + minutes);

        e.preventDefault();
        if (comment === '') return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

        dispatch(
            __submitComment({
                id: param.id,
                comment: comment,
                updateAt: dateStr + ' ' + hours + ':' + minutes,
            })
        ).then(() => {
            dispatch(__getComments()).then((res) => {
                setComment(res);
            });
        });
        console.log(param);
    };

    useEffect(() => {
        try {
            dispatch(__getComments(param.id));
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, param.id]);

    return (
        <CommentForm>
            <CommentInputForm>
                <Input
                    type="text"
                    onChange={(e) => setComment(e.target.value, [])}
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
    background-color: #ccc;
    cursor: pointer;
    border: 0;
    float: right;
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

export default memo(DetailCommentForm);
