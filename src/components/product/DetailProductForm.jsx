import React from 'react';
import styled from 'styled-components';

const DetailProductForm = () => {
    return (
        <InputSection>
            <InputForm>
                <InputBox>
                    <InputTitle>제목</InputTitle>
                    <Input>
                        <input
                            placeholder="상품 제목을 입력해주세요."
                            minLength={2}
                            maxLength={40}
                            style={{
                                width: '800px',
                                height: '30px',
                                justifyContent: 'center',
                                paddingLeft: '8px',
                                border: '1px solid #ccc',
                            }}
                        ></input>
                    </Input>
                </InputBox>
            </InputForm>
            <InputForm>
                <InputBox>
                    <InputTitle>가격</InputTitle>
                    <Input>
                        <input
                            placeholder="숫자를 입력해주세요."
                            style={{
                                width: '200px',
                                height: '30px',
                                justifyContent: 'center',
                                marginRight: '4px',
                                paddingLeft: '8px',
                                border: '1px solid #ccc',
                            }}
                        ></input>
                        <span>원</span>
                    </Input>
                </InputBox>
            </InputForm>
            <InputForm style={{ height: '260px', paddingBottom: '10px' }}>
                <InputBox style={{ height: '260px', alignItems: 'normal' }}>
                    <InputTitle style={{ marginTop: '10px' }}>
                        상품 이미지
                    </InputTitle>
                    <div style={{ flexDirection: 'column', marginTop: '10px' }}>
                        {/* <input
                                class="upload-name"
                                value="첨부파일"
                                placeholder="첨부파일"
                            /> */}
                        <Label for="file">이미지 등록</Label>
                        <Test type="file" id="file" />
                        <Thumbnail>이미지 미리보기</Thumbnail>
                    </div>
                </InputBox>
            </InputForm>
            <InputForm style={{ height: '220px' }}>
                <InputBox style={{ height: '220px', alignItems: 'normal' }}>
                    <InputTitle style={{ marginTop: '15px' }}>
                        상세 설명
                    </InputTitle>
                    <Input style={{ alignItems: 'center', marginTop: '95px' }}>
                        <textarea
                            placeholder="판매 상품에 대한 상세 정보를 기재해주세요."
                            cols
                            rows={4}
                            style={{
                                width: '800px',
                                height: '200px',
                                resize: 'none',
                                padding: '10px',
                                boxSizing: 'border-box',
                                marginBottom: '10px',
                                border: '1px solid #ccc',
                                color: '#ccc',
                            }}
                        ></textarea>
                    </Input>
                </InputBox>
            </InputForm>
            <ButtonBox>
                <Button style={{ margin: 'auto' }} type="submit">
                    등록하기
                </Button>
            </ButtonBox>
        </InputSection>
    );
};

const InputSection = styled.div`
    max-width: 1200px;
    min-width: 800px;
    height: 750px;
    /* background-color: green; */
    margin: 0 100px 0 10px;
    /* border: 1px solid gray; */
`;

const InputForm = styled.div`
    width: 1000px;
    height: 60px;
    margin: auto;
`;

const InputBox = styled.div`
    width: 1000px;
    height: 50px;
    flex-direction: row;
    /* background-color: yellow; */
    align-items: center;
    display: flex;
`;

const InputTitle = styled.div`
    width: 150px;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
`;

const Input = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
`;

const ButtonBox = styled.div`
    width: 600px;
    height: 50px;
    display: flex;
    margin: auto;
    margin-top: 48px;
`;

const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: #b8b8b8;
    border: 0;
    color: white;
    cursor: pointer;
`;

const Thumbnail = styled.div`
    width: 200px;
    height: 200px;
    background-color: #b8b8b8;
    color: white;
    justify-content: center;
    align-items: center;
    display: flex;
    border: '1px solid #ccc';
`;

const FileBox = styled.div`
    display: inline-block;
    height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    width: 78%;
    color: #999999;
`;

const Label = styled.label`
    display: inline-block;
    padding: 8px 20px 13px 20px;
    color: #fff;
    vertical-align: middle;
    background-color: #999999;
    cursor: pointer;
    height: 17px;
    margin-bottom: 7px;
`;

const Test = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
`;

export default DetailProductForm;
