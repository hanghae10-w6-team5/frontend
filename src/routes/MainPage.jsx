import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { __getPosts } from '../redux/lib/postsApi';
import { useDispatch, useSelector } from 'react-redux';

const MainPage = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { posts, isLoading, error } = useSelector((store) => store.posts);
    // console.log(posts);

    const addProduct = () => {
        if (!token) return alert('로그인이 필요한 서비스 입니다');
        return navigate('detailform');
    };

    useEffect(() => {
        dispatch(__getPosts());
    }, []);

    if (isLoading) {
        return <div>로딩 중....</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <StContainer>
            <img
                style={{ width: '100%', height: '200px' }}
                src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0 0 30px 0',
                }}
            >
                <StBtn onClick={addProduct}>상품 등록해주세요 ㅋ</StBtn>
            </div>
            <StPosts>
                {posts.map((post) => {
                    return (
                        <StPost key={post.postId}>
                            <img
                                style={{ width: '210px' }}
                                src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
                            />
                            <div>{post.title}</div>
                            <div>{post.price}</div>
                            <StFlexSpacebtw>
                                <div>{post.id}</div>
                                <div>{post.likes} ❤️</div>
                            </StFlexSpacebtw>
                        </StPost>
                    );
                })}
                <StPost>
                    <img
                        style={{ width: '210px' }}
                        src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
                    />
                    <div>제목</div>
                    <div>가격</div>
                    <StFlexSpacebtw>
                        <div>아이디</div>
                        <div>❤️</div>
                    </StFlexSpacebtw>
                </StPost>

                <StPost>
                    <img
                        style={{ width: '210px' }}
                        src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
                    />
                    <div>제목</div>
                    <div>가격</div>
                    <StFlexSpacebtw>
                        <div>아이디</div>
                        <div>❤️</div>
                    </StFlexSpacebtw>
                </StPost>
                <StPost>
                    <img
                        style={{ width: '210px' }}
                        src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
                    />
                    <div>제목</div>
                    <div>가격</div>
                    <StFlexSpacebtw>
                        <div>아이디</div>
                        <div>❤️</div>
                    </StFlexSpacebtw>
                </StPost>
            </StPosts>
        </StContainer>
    );
};

const StContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 1200px;
    width: 95%;
    padding: 40px;
    margin: 0 auto;
`;

const StBtn = styled.button`
    width: 150px;
    height: 40px;
    align-items: center;
    cursor: pointer;

    margin: 0 10px 20px 0;
`;

const StPosts = styled.div`
    display: flex;

    gap: 35px;
    flex-wrap: wrap;
`;

const StPost = styled.div`
    /* border: 2px solid gray; */
`;

const StFlexSpacebtw = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default MainPage;
