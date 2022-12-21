import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { __getPosts } from '../redux/lib/postsApi';
import { useDispatch, useSelector } from 'react-redux';

const MainPage = () => {
    const token = localStorage.getItem('authentication');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { posts, error, isLoading } = useSelector((store) => store.posts);

    const addProduct = () => {
        if (!token) return alert('로그인이 필요한 서비스 입니다');
        return navigate('detailform');
    };

    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch]);

    if (isLoading) {
        return <div>로딩 중....</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <StContainer>
            <img
                style={{
                    width: '100%',
                    height: '200px',
                    boxShadow: '0 0 10px 3px #ff7e36',
                }}
                src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0 0 30px 0',
                }}
            >
                <StBtn style={{ marginTop: '30px' }} onClick={addProduct}>
                    상품 등록해주세요 ㅋ
                </StBtn>
            </div>
            <StPosts>
                {posts.data?.map((post) => {
                    return (
                        <StPost
                            key={post.data.id}
                            onClick={() => navigate(`/${post.data.postId}`)}
                        >
                            <img
                                style={{ width: '172px', height: '172px' }}
                                src={post.data.thumbnail}
                            />
                            <div style={{ maxWidth: '15ch' }}>
                                {post.data.title}
                            </div>
                            <div>{post.data.price}</div>
                            <StFlexSpacebtw>
                                <div>{post.data.id}</div>
                                <div>{post.data.likes} ❤️</div>
                            </StFlexSpacebtw>
                        </StPost>
                    );
                })}
            </StPosts>
        </StContainer>
    );
};

const StContainer = styled.div`
    font-family: 'Elice_Bold';
    display: flex;
    flex-direction: column;

    max-width: 1200px;
    width: 95%;
    padding: 40px;
    margin: 0 auto;
`;

const StBtn = styled.button`
    font-family: 'Elice_Bold';
    width: 150px;
    height: 40px;
    align-items: center;
    cursor: pointer;

    border: 1px solid #ff7e36;
    background-color: #fff;
    color: #ff7e36;
    border-radius: 5px;

    font-weight: bold;
    margin: 0 10px 20px 0;

    :hover {
        color: #fff;
        background-color: #ff7e36;
    }
`;

const StPosts = styled.div`
    display: flex;

    gap: 35px;
    flex-wrap: wrap;
`;

const StPost = styled.div`
    cursor: pointer;
    padding: 20px;
    box-shadow: 0 0 10px 3px #ff7e36;

    border-radius: 5px;
`;

const StFlexSpacebtw = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default MainPage;
