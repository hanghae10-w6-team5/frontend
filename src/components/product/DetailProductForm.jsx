import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import AWS from 'aws-sdk';

const DetailProductForm = () => {
    const albumBucketName = 'sblawsimage';

    const [imageSrc, setImageSrc] = useState('');

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [detail, setDetail] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    const token = localStorage.getItem('authentication');

    AWS.config.update({
        region: 'ap-northeast-2', // 버킷이 존재하는 리전을 문자열로 입력합니다. (Ex. "ap-northeast-2")
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId:
                'ap-northeast-2:08c52685-346d-4362-9490-8617a791432f', // cognito 인증 풀에서 받아온 키를 문자열로 입력합니다. (Ex. "ap-northeast-2...")
        }),
    });

    const onChangeTitleHandler = (e) => {
        setTitle(e.target.value);
    };
    const onChangePriceHandler = (e) => {
        setPrice(+e.target.value);
    };

    const onChangeDetailHandler = (e) => {
        setDetail(e.target.value);
    };

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setThumbnail(
            `https://sblawsimage.s3.ap-northeast-2.amazonaws.com/${file.name}`
        );

        // S3 SDK에 내장된 업로드 함수
        const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: albumBucketName, // 업로드할 대상 버킷명
                Body: file, // 업로드할 파일 객체
                ContentType: file.type,
                Key: file.name, // 업로드할 파일명 (* 확장자를 추가해야 합니다!)
            },
        });

        const promise = upload.promise();

        promise.then(
            function (data) {
                alert('이미지 업로드에 성공했습니다.');
            },
            function (err) {
                return alert('오류가 발생했습니다: ', err.message);
            }
        );
    };

    const config = {
        headers: {
            'Content-Type': 'application/json',
            authentication: token,
        },
    };

    const sendData = () => {
        if (title === '' || price === 0 || detail === '') {
            alert('제목, 가격, 상세 설명란을 기입해주세요!');
        }
        axios
            .post(
                'https://dev-jn.shop/api/posts',
                {
                    title: title,
                    detail: detail,
                    price: price,
                    thumbnail: thumbnail,
                },
                config
            )
            .then((res) => navigate(`/${res.data.postId}`));
        // await axios.get('https://dev-jn.shop/api/posts');
    };

    return (
        <InputSection>
            <InputForm>
                <InputBox>
                    <InputTitle>제목</InputTitle>
                    <Input>
                        <input
                            name="title"
                            placeholder="상품 제목을 입력해주세요."
                            minLength={2}
                            maxLength={40}
                            style={{
                                maxWidth: '800px',
                                width: '800px',
                                height: '30px',
                                justifyContent: 'center',
                                paddingLeft: '8px',
                                border: '1px solid #ccc',
                            }}
                            onChange={onChangeTitleHandler}
                        ></input>
                    </Input>
                </InputBox>
            </InputForm>
            <InputForm>
                <InputBox>
                    <InputTitle>가격</InputTitle>
                    <Input>
                        <input
                            name="price"
                            type="number"
                            placeholder="숫자를 입력해주세요."
                            style={{
                                width: '200px',
                                height: '30px',
                                justifyContent: 'center',
                                marginRight: '4px',
                                paddingLeft: '8px',
                                border: '1px solid #ccc',
                            }}
                            onChange={onChangePriceHandler}
                        ></input>
                        <span>원</span>
                    </Input>
                </InputBox>
            </InputForm>
            <InputForm style={{ height: '260px', paddingBottom: '10px' }}>
                <InputBox style={{ height: '260px', alignItems: 'normal' }}>
                    <InputTitle style={{ marginTop: '18px' }}>
                        상품 이미지
                    </InputTitle>
                    <div
                        style={{
                            flexDirection: 'column',
                            marginTop: '10px',
                        }}
                    >
                        <Label htmlFor="file" style={{ fontStyle: 'normal' }}>
                            이미지 등록
                        </Label>
                        <Test
                            onChange={(e) => {
                                encodeFileToBase64(e.target.files[0]);
                                handleFileInput(e);
                            }}
                            name="thumbnail"
                            type="file"
                            id="file"
                        />
                        <Thumbnail>
                            {imageSrc ? (
                                <img
                                    style={{ width: '200px', height: '200px' }}
                                    src={imageSrc}
                                    alt="preview-img"
                                />
                            ) : (
                                <p>이미지 프리뷰</p>
                            )}
                        </Thumbnail>
                    </div>
                </InputBox>
            </InputForm>
            <InputForm style={{ height: '220px' }}>
                <InputBox style={{ height: '220px', alignItems: 'normal' }}>
                    <InputTitle style={{ marginTop: '22px' }}>
                        상세 설명
                    </InputTitle>
                    <Input style={{ alignItems: 'center', marginTop: '95px' }}>
                        <textarea
                            name="detail"
                            placeholder="판매 상품에 대한 상세 정보를 기재해주세요."
                            // cols
                            rows={4}
                            style={{
                                width: '800px',
                                height: '200px',
                                resize: 'none',
                                padding: '10px',
                                boxSizing: 'border-box',
                                marginBottom: '10px',
                                border: '1px solid #ccc',
                                color: '#000',
                            }}
                            onChange={onChangeDetailHandler}
                        ></textarea>
                    </Input>
                </InputBox>
            </InputForm>
            <ButtonBox>
                <Button
                    style={{ marginRight: '5px' }}
                    onClick={sendData}
                    type="submit"
                    color="#ff7e36"
                >
                    등록하기
                </Button>
                <Button onClick={() => navigate('/')} type="submit">
                    돌아가기
                </Button>
            </ButtonBox>
        </InputSection>
    );
};

const InputSection = styled.div`
    /* font-family: 'JalnanOTF'; */
    max-width: 1200px;
    min-width: 800px;
    height: 750px;
    margin: 0 100px 0 10px;
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
    align-items: center;
    display: flex;
`;

const InputTitle = styled.div`
    width: 150px;
    justify-content: center;
    align-items: center;
    font-family: 'JalnanOTF';
`;

const Input = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
`;

const ButtonBox = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    margin-top: 48px;
`;

const Button = styled.button`
    width: 110px;
    height: 48px;
    font-size: 15px;
    background-color: ${(props) => props.color || '#adadad'};
    border: 0;
    color: white;
    cursor: pointer;

    border-radius: 30px;
`;

const Thumbnail = styled.div`
    width: 200px;
    height: 200px;
    background-color: #fff;
    color: #747373;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 1px solid #b8b8b8;
`;

const Label = styled.label`
    display: inline-block;
    padding: 8px 20px 13px 20px;
    color: #fff;
    vertical-align: middle;
    background-color: #ff7e36;
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
