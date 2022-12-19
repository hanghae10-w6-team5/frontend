import React from 'react';
import styled from 'styled-components';

const DetailComments = () => {
    return (
        <CommentsSection>
            <CommnetList>
                <CommentsBox>
                    <Content>
                        <UserId>
                            아이디
                            <span
                                style={{ marginLeft: '20px', color: '#585858' }}
                            >
                                2022-12-16 16:40
                            </span>
                        </UserId>
                        <Comment>
                            <span>
                                좀 깎아주십사ㅋ
                                <br />
                                sdasf
                                <br />
                                dsagg
                                <br />
                                dsagg
                                <br />
                                dsagg
                                <br />
                                dsagg
                            </span>
                        </Comment>
                    </Content>
                    <ModifyCommentWrap>
                        <ModifyCommentButton>수정</ModifyCommentButton>
                        <DeleteCommentButton>삭제</DeleteCommentButton>
                    </ModifyCommentWrap>
                </CommentsBox>
                <CommentForm>
                    <CommentInput>
                        <textarea
                            placeholder="댓글을 입력해주세요."
                            cols
                            rows={4}
                            style={{
                                width: '100%',
                                height: '100px',
                                resize: 'none',
                                padding: '10px',
                                boxSizing: 'border-box',
                                marginBottom: '10px',
                                border: '1px solid #ccc',
                                color: '#ccc',
                            }}
                        ></textarea>
                        <CommentButton type="submit">등록</CommentButton>
                    </CommentInput>
                </CommentForm>
            </CommnetList>
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

const ModifyCommentWrap = styled.div`
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
const ModifyCommentButton = styled.button`
    width: 80px;
    height: 35px;
    background-color: #ccc;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 10px;
    border: 0;
`;

const DeleteCommentButton = styled.button`
    width: 80px;
    height: 35px;
    background-color: #ccc;
    cursor: pointer;
    position: absolute;
    top: 45px;
    right: 10px;
    border: 0;
`;

const CommentForm = styled.div`
    width: 100%;
    /* background-color: aliceblue; */
    padding-bottom: 150px;
`;
const CommentInput = styled.div`
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

export default DetailComments;
