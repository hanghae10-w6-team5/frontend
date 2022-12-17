import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignUpBox = styled.div`
    margin: 0 auto;
    width: 1000px;
    height: 700px;
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

const IdForm = styled.div`
    position: relative;

    Input {
        width: 400px;
        height: 40px;
    }
    button {
        top: 32px;
        position: absolute;
        right: 20px;
    }
`;

function SignUp() {
    return (
        <Wrapper>
            <SignUpBox>
                <h1>회원가입</h1>
                <IdForm>
                    <div>ID</div>
                    <input placeholder="아이디 (영소문자, 숫자 4~16자)"></input>
                    <button>중복 확인</button>
                </IdForm>
                <br />
                <br />
                <div>
                    <div>Password</div>
                    <Input
                        placeholder="비밀번호 (영대소문자, 특수문자(!,@,#,$,%), 숫자
  8~20자"
                    ></Input>
                    <br />
                    <Input placeholder="비밀번호 확인"></Input>
                </div>
                <SubmitBtn>가입하기</SubmitBtn>
            </SignUpBox>
        </Wrapper>
    );
}

export default SignUp;
