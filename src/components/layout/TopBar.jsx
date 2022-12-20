import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const [isHovering, setiIsHovering] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('token', 'sadjkashdkj');
    }, []);

    const token = localStorage.getItem('token');

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
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
            <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                <div
                    style={{
                        fontFamily: 'Elice_Bold',
                        marginLeft: '40px',
                        cursor: 'pointer',
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
                                top: '5px',
                                left: '90px',
                            }}
                        >
                            <StUser></StUser>
                            {isHovering ? (
                                <p
                                    style={{
                                        fontSize: '10px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => navigate('/user')}
                                >
                                    상세보기
                                </p>
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
    width: 40px;
    height: 40px;

    border: 0;
    border-radius: 100%;

    overflow: hidden;
    cursor: pointer;

    :hover {
        background-color: green;
    }
`;

const StBtn = styled.button`
    font-family: 'Elice_Bold';
    background-color: white;
    border: 0;

    margin-right: ${(props) => props.mr || 'none'};

    cursor: pointer;
`;

export default TopBar;
