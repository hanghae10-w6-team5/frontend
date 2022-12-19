import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopBar = () => {
    return (
        <StFlex
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
            <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                <div style={{ marginLeft: '40px', cursor: 'pointer' }}>
                    탈덕마켓
                </div>
            </Link>
            <div style={{ marginRight: '40px', display: 'flex' }}>
                <StBtn mr="10px">로그인</StBtn>
                <StBtn>회원가입</StBtn>
                <Link to="/user">
                    <StUser></StUser>
                </Link>
            </div>
        </StFlex>
    );
};

const StFlex = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 10px auto;
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
    background-color: white;
    border: 0;

    margin-right: ${(props) => props.mr || 'none'};

    cursor: pointer;
`;

export default TopBar;