import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
    __editComment,
    __deleteComment,
    __getComments,
} from '../../redux/lib/commentsApi';

const DetailCommentList = ({ id }) => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.commentsSlice.data.data);

    useEffect(() => {
        try {
            dispatch(__getComments(id));
        } catch (error) {
            // console.log(error);
        }
    }, []);

    // 댓글 수정
    const editComment = (id, commentId) => {
        const editing = prompt('댓글 내용 수정', '');
        dispatch(
            __editComment({
                postId: id,
                commentId: commentId,
                comment: editing,
            })
        );
        // dispatch(__getComments(id));
        // setState();
    };

    //댓글 삭제
    const deleteComment = (id, commentId) => {
        dispatch(
            __deleteComment({
                postId: id,
                commentId: commentId,
            })
        );
        // dispatch(__getComments(id));
    };

    const item = data?.post?.comments?.map((comment) => {
        return (
            <CommentsBox key={comment.commentId}>
                <Content>
                    <UserId style={{ color: '#555555', fontWeight: 'bold' }}>
                        {comment.id}
                        <span
                            style={{
                                marginLeft: '20px',
                                color: '#6b6b6b',
                                fontWeight: 'normal',
                            }}
                        >
                            {comment?.updatedAt}
                        </span>
                    </UserId>
                    <Comment>{comment?.comment}</Comment>
                </Content>
                <EditCommentWrap>
                    <EditCommentButton
                        // type='button' 을 추가해야 form의 영향에서 벗어남
                        type="button"
                        onClick={() => editComment(id, comment?.commentId)}
                    >
                        수정
                    </EditCommentButton>
                    <DeleteCommentButton
                        type="button"
                        onClick={() => deleteComment(id, comment?.commentId)}
                    >
                        삭제
                    </DeleteCommentButton>
                </EditCommentWrap>
            </CommentsBox>
        );
    });

    return (
        <CommentsSection>
            <CommnetList>{item}</CommnetList>
        </CommentsSection>
    );
};

const CommentsSection = styled.div`
    max-width: 1200px;
    min-width: 800px;
    /* background-color: gray; */
    margin: 0 100px 0 100px;
    /* border: 1px solid gray; */
    /* display: 'flex';
    justify-content: center; */
`;

const CommnetList = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 100px 0 100px;
    /* background-color: #58c5f0; */
    /* border: 1px solid gray; */
    margin: auto;
`;

const CommentsBox = styled.div`
    width: 100%;
    /* background-color: #5f9200; */
    /* border: 1px solid gray; */
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    position: relative;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
`;

const Content = styled.div`
    width: 90%;
    /* background-color: #ff7fdf; */
    /* border: 1px solid gray; */
    padding-left: 20px;
`;

const UserId = styled.div`
    width: 100%;
    /* background-color: #cec43f; */
    /* border: 1px solid gray; */
    margin: auto;
    padding-bottom: 20px;
`;

const Comment = styled.div`
    width: 100%;
    /* background-color: #3fce7b; */
    /* border: 1px solid gray; */
    margin: auto;
    word-break: keep-all;
    line-height: 30px;
    color: #4d4d4d;
`;

const EditCommentWrap = styled.div`
    width: 10%;
    height: 100px;
    /* background-color: #654aff; */
    /* border: 1px solid gray; */
    margin: auto;
    word-break: keep-all;
    line-height: 30px;
    /* position: relative; */
    position: absolute;
    right: 0px;
    top: 20px;
`;
const EditCommentButton = styled.button`
    width: 80px;
    height: 35px;
    background-color: #ff7e36;
    color: white;
    /* font-weight: bold; */
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 10px;
    border: 0;
    :hover {
        background-color: #ffa148;
    }
`;

const DeleteCommentButton = styled.button`
    width: 80px;
    height: 35px;
    background-color: #adadad;
    color: white;
    /* font-weight: bold; */
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
    position: absolute;
    top: 45px;
    right: 10px;
    border: 0;
    :hover {
        background-color: #cacaca;
    }
`;

export default DetailCommentList;
