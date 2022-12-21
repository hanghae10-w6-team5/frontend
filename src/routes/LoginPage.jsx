import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { __login } from '../redux/lib/loginApi';

function Login() {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    // const token = localStorage.getItem('authentication');
    const handleLogin = (e) => {
        e.preventDefault();
        if (id === '' || password === '') {
            alert('아이디와 비밀번호를 모두 입력하세요!');
        } else {
            dispatch(__login({ id, password }));
            // if (token) {
            //     navigate('/');
            // } else {
            //     alert('로그인 실패!');
            // }
        }
    };

    return (
        <Wrapper>
            <SignUpBox onSubmit={handleLogin}>
                <h1 style={{ fontFamily: 'Elice_Bold' }}>로그인</h1>
                <div>
                    <div>ID</div>
                    <Input placeholder="아이디" onChange={onChangeId}></Input>
                </div>
                <br />
                <div>
                    <div>Password</div>
                    <Input
                        type="password"
                        placeholder="비밀번호"
                        onChange={onChangePassword}
                    ></Input>
                </div>
                <br />
                <SubmitBtn>로그인</SubmitBtn>
                <SignUpLinkWrapper>
                    <span>아직 회원이 아니신가요?</span>
                    <SignUpLink to="/signup">
                        <span> 회원가입</span>
                    </SignUpLink>
                </SignUpLinkWrapper>
            </SignUpBox>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignUpBox = styled.form`
    font-family: 'Elice_Regular';
    margin: 0 auto;
    border: 5px solid #ff7e36;
    border-radius: 50px;
    width: 600px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 10px;
    background-color: #fbf3e8;
    border: none;
    border-radius: 20px;
    width: 450px;
    height: 50px;
    text-indent: 2em;
`;

const SubmitBtn = styled.button`
    margin: 10px;
    color: white;
    font-family: 'Elice_Bold';
    font-size: 25px;
    border: none;
    background-color: #ff7e36;
    border-radius: 20px;
    width: 450px;
    height: 50px;
    cursor: pointer;
    box-shadow: 3px 4px 0 rgb(0, 0, 0, 0.3);
    &:active {
        box-shadow: 0px 0px 0 rgb(0, 0, 0, 0.3);
        background-color: white;
    }
`;

const SignUpLinkWrapper = styled.div`
    margin-top: 20px;
    font-family: 'Elice_Regular';
    font-size: 15px;
`;

const SignUpLink = styled(Link)`
    text-decoration: none;
    font-family: 'Elice_Bold';
    font-size: 16px;
    color: black;
`;

export default Login;
