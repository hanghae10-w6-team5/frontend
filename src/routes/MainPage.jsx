import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { __getPosts } from '../redux/lib/postsApi';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/pagination/Pagination';

const MainPage = () => {
    const token = localStorage.getItem('authentication');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { posts, error, isLoading } = useSelector((store) => store.posts);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(15);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts?.data?.slice(firstPostIndex, lastPostIndex);

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
            {/* <img
                style={{
                    width: '100%',
                    height: '200px',
                    boxShadow: '0 0 10px 3px #ff7e36',
                }}
                src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a"
            /> */}
            <div
                style={{
                    width: '100%',
                    height: '100px',
                    backgroundColor: '#ff9946',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0 0 30px 0',
                }}
            >
                <StBtn style={{ marginTop: '28px' }} onClick={addProduct}>
                    상품 등록
                </StBtn>
            </div>
            <StPosts>
                {currentPosts?.map((post) => {
                    return (
                        <StPost
                            key={post.data.postId}
                            onClick={() => navigate(`/${post.data.postId}`)}
                        >
                            {post.data.thumbnail ? (
                                <img
                                    style={{ width: '172px', height: '172px' }}
                                    src={post.data.thumbnail}
                                />
                            ) : (
                                <img
                                    style={{ width: '172px', height: '172px' }}
                                    src={require('../assets/fonts/pic/빡빡이1.png')}
                                />
                            )}

                            <div
                                style={{
                                    marginTop: '12px',
                                    marginBottom: '7px',
                                    maxWidth: '15ch',
                                    fontFamily: 'JalnanOTF',
                                }}
                            >
                                {post.data.title}
                            </div>
                            <div style={{ fontWeight: 'bold' }}>
                                {post.data.price}원
                            </div>
                            <StFlexSpacebtw>
                                <div>{post.data.id}</div>
                                <StHeartCount>
                                    <StHeartNum>{post.data.likes}</StHeartNum>
                                    <span> ❤️</span>
                                </StHeartCount>
                            </StFlexSpacebtw>
                        </StPost>
                    );
                })}
            </StPosts>
            <Pagination
                currentPage={currentPage}
                totalPosts={posts.data?.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
            />
        </StContainer>
    );
};

const StHeartNum = styled.span`
    position: absolute;
    bottom: 18px;
    left: 6px;
`;

const StHeartCount = styled.div`
    position: relative;
`;

const StContainer = styled.div`
    /* font-family: 'Ttangs_Medium'; */
    display: flex;
    flex-direction: column;

    max-width: 1200px;
    width: 95%;
    padding: 40px;
    margin: 0 auto;
`;

const StBtn = styled.button`
    font-family: 'JalnanOTF';
    font-size: 18px;
    width: 130px;
    height: 45px;
    align-items: center;
    cursor: pointer;
    border: 1px solid #ff975f;
    background-color: #fff;
    color: #ff7e36;
    border-radius: 5px;

    /* font-weight: bold; */
    margin: 0 10px 20px 0;

    :hover {
        color: #fff;
        background-color: #ff9257;
        border: 2px solid white;
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
    box-shadow: 0 0 0px 1px #ffc5a6;
    /* border: 1px solid #ff7e36; */

    border-radius: 5px;
    :hover {
        box-shadow: 0 0 8px 1px #ffc5a6;
    }
`;

const StFlexSpacebtw = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default MainPage;
