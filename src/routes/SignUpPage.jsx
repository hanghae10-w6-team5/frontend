import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __getValidId } from '../redux/lib/signUpApi';

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPw, setConfirmPw] = useState('');

    const [idMessage, setIdMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [confirmPwMessage, setConfirmPwMessage] = useState('');

    const [isId, setIsId] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isConfirmPw, setIsConfirmPw] = useState(false);

    const onChangeId = (e) => {
        const newId = e.target.value;
        setId(newId);
        const RegExpId = /^[a-z0-9]{4,16}$/;
        if (!RegExpId.test(newId)) {
            setIdMessage('4~16자 사이 영소문자 또는 숫자만 입력해주세요!');
            setIsId(false);
        } else {
            setIdMessage('✔');
            setIsId(true);
        }
    };

    const onChangePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const RegExpPw =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/;
        if (!RegExpPw.test(newPassword)) {
            setPasswordMessage(
                '영어 대소문자, 특수문자(!@#$%), 숫자 모두 1개 이상 포함하여 입력해주세요!'
            );
            setIsPassword(false);
        } else {
            setPasswordMessage('안전한 비밀번호 입니다.');
            setIsPassword(true);
        }
    };

    const onChangeConfirmPw = (e) => {
        const newConfirmPw = e.target.value;
        setConfirmPw(newConfirmPw);
        if (password !== newConfirmPw) {
            setConfirmPwMessage('비밀번호가 일치하지 않습니다!');
            setIsConfirmPw(false);
        } else {
            setConfirmPwMessage('비밀번호가 일치합니다!');
            setIsConfirmPw(true);
        }
    };

    const handleValidationId = () => {
        dispatch(__getValidId({ id: id }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id === '' || password === '' || confirmPw === '') {
            alert('빈칸을 입력하세요!');
        } else {
            try {
                const res = await axios.post(
                    `https://dev-jn.shop/api/users/signup`,
                    {
                        id: id,
                        password: password,
                    }
                );
                alert(res.data.message);
            } catch (res) {
                alert('패스워드에 id가 포함되어 있습니다.');
            }
        }
    };

    return (
        <Wrapper>
            <BoxWrapper>
                <SignUpBox onSubmit={handleSubmit}>
                    <h1>회원가입</h1>
                    <IdForm>
                        <div>ID</div>
                        <input
                            type="id"
                            name="id"
                            onChange={onChangeId}
                            placeholder="아이디 (영소문자, 숫자 4~16자)"
                        ></input>
                        <CheckBtn
                            type="button"
                            disabled={!isId}
                            onClick={handleValidationId}
                        >
                            중복확인
                        </CheckBtn>
                    </IdForm>
                    {isId ? (
                        <TrueIdMsg>{idMessage}</TrueIdMsg>
                    ) : (
                        <FalseIdMsg>{idMessage}</FalseIdMsg>
                    )}
                    <div>
                        <div style={{ marginTop: '20px' }}>Password</div>
                        <Input
                            type="password"
                            name="password"
                            onChange={onChangePassword}
                            placeholder="비밀번호 (영대소문자, 특수문자(!,@,#,$,%), 숫자 8~20자)"
                        ></Input>
                        {isPassword ? (
                            <TruePwMsg>{passwordMessage}</TruePwMsg>
                        ) : (
                            <FalsePwMsg>{passwordMessage}</FalsePwMsg>
                        )}
                        <Input
                            type="password"
                            name="confirmPw"
                            onChange={onChangeConfirmPw}
                            placeholder="비밀번호 확인"
                        ></Input>
                        {isConfirmPw ? (
                            <TruePwMsg>{confirmPwMessage}</TruePwMsg>
                        ) : (
                            <FalsePwMsg>{confirmPwMessage}</FalsePwMsg>
                        )}
                    </div>
                    <SubmitBtn type="submit">가입하기</SubmitBtn>
                </SignUpBox>
            </BoxWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    font-family: 'Elice_Regular';
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BoxWrapper = styled.div`
    border: 5px solid #ff7e36;
    border-radius: 50px;
    width: 600px;
    height: 700px;
    position: relative;
`;

const SignUpBox = styled.form`
    margin: 0 auto;
    left: 100px;
    width: 410px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Input = styled.input`
    text-indent: 2em;
    background-color: #fbf3e8;
    border: none;
    border-radius: 20px;
    width: 450px;
    height: 50px;
`;

const SubmitBtn = styled.button`
    color: white;
    font-family: 'Elice_Bold';
    font-size: 25px;
    border: none;
    background-color: #ff7e36;
    border-radius: 20px;
    margin-top: 20px;
    width: 450px;
    height: 50px;
    cursor: pointer;
    box-shadow: 3px 4px 0 rgb(0, 0, 0, 0.3);
    &:active {
        box-shadow: 0px 0px 0 rgb(0, 0, 0, 0.3);
        background-color: white;
    }
`;

const CheckBtn = styled.button`
    font-family: 'Elice_Regular';
`;

const IdForm = styled.div`
    position: relative;

    input {
        background-color: #fbf3e8;
        border: none;
        border-radius: 20px;
        width: 450px;
        height: 50px;
        text-indent: 2em;
    }
    button {
        background-color: #ff7e36;
        border: none;
        border-radius: 10px;
        width: 100px;
        height: 30px;
        top: 32px;
        position: absolute;
        right: 20px;
        cursor: pointer;
        box-shadow: 2px 3px 0 rgb(0, 0, 0, 0.3);
    }
    button:active {
        box-shadow: 0px 0px 0 rgb(0, 0, 0, 0.3);
        background-color: white;
    }
`;

const TrueIdMsg = styled.p`
    position: absolute;
    float: right;
    font-size: 25px;
    color: green;
    top: 240px;
    right: 40px;
`;

const FalseIdMsg = styled.p`
    font-size: 12px;
    color: red;
`;

const TruePwMsg = styled.p`
    font-size: 12px;
    color: green;
`;

const FalsePwMsg = styled.p`
    font-size: 11px;
    color: red;
`;

export default SignUp;
