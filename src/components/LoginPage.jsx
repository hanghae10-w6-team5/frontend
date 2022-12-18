import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignUpBox = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 10px;
    width: 400px;
    height: 40px;
`;

const SubmitBtn = styled.button`
    margin: 10px;
    width: 400px;
    height: 40px;
`;

function Login() {
    return (
        <Wrapper>
            <SignUpBox>
                <h1>로그인</h1>
                <div>
                    <div>ID</div>
                    <Input placeholder="아이디"></Input>
                </div>
                <br />
                <div>
                    <div>Password</div>
                    <Input placeholder="비밀번호"></Input>
                </div>
                <br />
                <SubmitBtn>로그인</SubmitBtn>
                <div>
                    <span>아직 회원이 아니신가요?</span>
                    <Link to="/signup">
                        <span>회원가입</span>
                    </Link>
                </div>
            </SignUpBox>
        </Wrapper>
    );
}

export default Login;
