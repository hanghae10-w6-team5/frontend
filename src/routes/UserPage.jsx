// import axios from '../redux/lib/core/axiosBaseInstance';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const UserPage = () => {
    const token = localStorage.getItem('authentication');
    const [userInfo, setUserInfo] = useState({});

    const getData = async () => {
        const res = await axios.get('https://dev-jn.shop/api/users', {
            headers: {
                authentication: token,
            },
        });
        setUserInfo(res.data.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <StFlex style={{ height: '100vh' }}>
            <StFlex
                style={{
                    width: '500px',
                    height: '500px',
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px 1px #ff7e36',
                    borderRadius: '50%',
                }}
            >
                <StFlex
                    style={{
                        flexDirection: 'column',
                        fontFamily: 'Elice_Regular',
                    }}
                >
                    <p style={{ fontSize: '30px' }}>내 정보</p>
                    <p>아이디: {userInfo?.id}</p>
                    <p>가입일자: {userInfo?.createdAt}</p>
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
