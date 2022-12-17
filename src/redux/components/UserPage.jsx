import React from 'react';
import styled from 'styled-components';

const UserPage = () => {
    return (
        <StFlex style={{ height: '100vh', backgroundColor: 'gray' }}>
            <StFlex
                style={{
                    width: '500px',
                    height: '500px',
                    backgroundColor: 'white',
                }}
            >
                <StFlex style={{ flexDirection: 'column' }}>
                    <p style={{ fontSize: '30px' }}>내 정보</p>
                    <p>아이디: asdjkhgasjkd</p>
                    <p>가입일자: 2022/12/17</p>
                </StFlex>
            </StFlex>
        </StFlex>
    );
};

const StFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default UserPage;
