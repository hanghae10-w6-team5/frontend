import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const [isHovering, setiIsHovering] = useState(false);
    const navigate = useNavigate();

    const token = localStorage.getItem('authentication');

    const logout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handleMouseOver = () => {
        setiIsHovering(true);
    };
    const handleMouseOut = () => {
        setiIsHovering(false);
    };

    return (
        <StFlex
            style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '20px',
            }}
        >
            <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                <div
                    style={{
                        fontFamily: 'JalnanOTF',
                        marginLeft: '40px',
                        cursor: 'pointer',
                        fontSize: '35px',
                    }}
                >
                    탈덕마켓
                </div>
            </Link>
            {!token ? (
                <div
                    style={{
                        marginRight: '40px',
                        display: 'flex',
                        height: '50px',
                    }}
                >
                    <StBtn mr="10px" onClick={() => navigate('/login')}>
                        로그인
                    </StBtn>
                    <StBtn onClick={() => navigate('/signup')}>회원가입</StBtn>
                </div>
            ) : (
                <div
                    style={{
                        marginRight: '40px',
                        display: 'flex',
                        height: '50px',

                        position: 'relative',
                    }}
                >
                    <StBtn mr="50px" onClick={logout}>
                        로그아웃
                    </StBtn>
                    <div>
                        <div
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',

                                position: 'absolute',
                                top: '-10px',
                                left: '90px',
                            }}
                        >
                            <img
                                src={require('../../assets/fonts/pic/빡빡이1.png')}
                            />
                            {isHovering ? (
                                <StUserBtn
                                    style={{
                                        fontSize: '13px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => navigate('/user')}
                                >
                                    상세보기
                                </StUserBtn>
                            ) : (
                                <p style={{ display: 'none' }}></p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </StFlex>
    );
};

const StFlex = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 10px auto 0;
    justify-content: space-between;

    display: flex;
    justify-content: ${(props) => props.justifyContent || 'none'};
`;

const StUser = styled.button`
    width: 80px;
    height: 40px;

    border: 0;
    border-radius: 100%;

    overflow: hidden;
    cursor: pointer;

    transition: all 0.5s;

    :hover {
        background-color: gray;
    }
`;

const StUserBtn = styled.button`
    margin-top: 5px;
    padding: 5px;
    border: 1px solid gray;
    color: gray;
    background-color: white;
    border-radius: 5px;

    :hover {
        background-color: gray;
        color: white;
    }
`;

const StBtn = styled.button`
    font-family: 'JalnanOTF';
    background-color: white;
    border: 0;
    font-size: 15px;
    margin-right: ${(props) => props.mr || 'none'};

    cursor: pointer;

    :hover {
        color: #ff7e36;
    }
`;

export default TopBar;
