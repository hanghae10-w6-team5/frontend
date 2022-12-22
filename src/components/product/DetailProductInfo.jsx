import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from 'styled-components';
import { __getPostById, __deletePost } from '../../redux/lib/postsApi';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import AWS from 'aws-sdk';
import axios from '../../redux/lib/core/axiosBaseInstance';

const DetailProductInfo = ({ id }) => {
    const token = localStorage.getItem('authentication');
    // console.log(useParams());
    //수정하기에서 onclick써서 함수 만들고 dispatch로 put으로 수정
    //삭제하기에서 onclick써서 함수 만들고 dispatch로 삭제
    const dispatch = useDispatch();
    const { post, isLoading, error } = useSelector((store) => store.posts);
    const paramId = id;
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const [input, setInput] = useState({
        title: '',
        detail: '',
    });

    const navigate = useNavigate();
    const postDetail = post?.data;

    const albumBucketName = 'sblawsimage';
    const [imageSrc, setImageSrc] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    AWS.config.update({
        region: 'ap-northeast-2', // 버킷이 존재하는 리전을 문자열로 입력합니다. (Ex. "ap-northeast-2")
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId:
                'ap-northeast-2:08c52685-346d-4362-9490-8617a791432f', // cognito 인증 풀에서 받아온 키를 문자열로 입력합니다. (Ex. "ap-northeast-2...")
        }),
    });

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

    useEffect(() => {
        dispatch(__getPostById(id));
    }, [dispatch]);

    const onChangeInputHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const postDelete = () => {
        dispatch(__deletePost({ id, navigate, token }));
    };

    const postModify = () => {
        setIsOpen(true);
        dispatch(
            __deletePost({
                postId: id,
                navigate,
                title: postDetail?.title,
                id: postDetail?.id,
                detail: postDetail?.detail,
                price: postDetail?.price,
                thumbnail: thumbnail,
            })
        );
    };

    const toggleJjim = async () => {
        try {
            await axios.put(
                `/posts/${id}/like`,
                {},
                {
                    params: {
                        postId: +id,
                    },
                    headers: {
                        authentication: token,
                    },
                }
            );
            window.location.reload(false); //리프레쉬
            // alert(res.data.message);
        } catch (error) {
            console.log(error);
            // alert(error);
        }
    };

    return (
        <ProductSection>
            <ContentButtonWrap>
                <MainContentButton type="button" onClick={() => navigate('/')}>
                    메인으로
                </MainContentButton>
                <ModifyContentButton type="button" onClick={postModify}>
                    수정
                </ModifyContentButton>
                <DeleteContentButton type="button" onClick={postDelete}>
                    삭제
                </DeleteContentButton>
            </ContentButtonWrap>
            <TopInfo>
                <Thumbnail>
                    <img
                        style={{ width: '380px', height: '380px' }}
                        src={postDetail?.thumbnail}
                    />
                </Thumbnail>
                <RightInfo>
                    <ProductTitle>{postDetail?.title}</ProductTitle>
                    <Price>
                        {postDetail?.price}
                        <span
                            style={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                                marginLeft: '5px',
                            }}
                        >
                            원
                        </span>
                    </Price>
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <SellerId>판매자 : {postDetail?.id}</SellerId>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                        <Date>작성일자 : {postDetail?.createdAt}</Date>
                        <Date>수정일자 : {postDetail?.updatedAt}</Date>
                    </div>
                    <Wish type="button" onClick={toggleJjim}>
                        <span style={{ fontSize: '21px', marginBottom: '5px' }}>
                            ♡
                        </span>
                        <span style={{ fontSize: '21px', marginLeft: '4px' }}>
                            {postDetail?.likes}
                        </span>
                    </Wish>
                </RightInfo>
            </TopInfo>
            <BottomInfo>
                <span style={{ fontSize: '24px' }}>상품정보</span>
                <DetailInfo>
                    <p style={{ wrap: 'wrap' }}>{postDetail?.detail}</p>
                </DetailInfo>
            </BottomInfo>
            <div style={BUTTON_WRAPPER_STYLE}>
                <Modal
                    setImageSrc={setImageSrc}
                    prevThumbnail={postDetail?.thumbnail}
                    onClose={() => setIsOpen(false)}
                    open={isOpen}
                    input={input}
                    thumbnail={thumbnail}
                    setThumbnail={setThumbnail}
                    price={price}
                    postId={paramId}
                    myId={postDetail?.id}
                >
                    <StModalFlex>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <StLabel style={{ width: '50px', margin: '8px 0' }}>
                                Title:
                            </StLabel>
                            <StModalInput
                                style={{
                                    height: '20px',
                                    width: '180px',
                                    margin: '10px 10px',
                                }}
                                name="title"
                                onChange={onChangeInputHandler}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <StLabel style={{ width: '50px', margin: '8px 0' }}>
                                Price:
                            </StLabel>
                            <StModalInput
                                style={{ height: '20px' }}
                                type="number"
                                name="price"
                                onChange={(e) => setPrice(+e.target.value)}
                            />
                        </div>

                        <StThumbnailFlex>
                            <Label htmlFor="file">이미지 바꾸기</Label>
                            <StThumbnail>
                                {/* {console.log(postDetail?.thumbnail)}
                                {<img src={postDetail?.thumbnail} />} */}
                                {!imageSrc ? (
                                    <img
                                        style={{
                                            width: '230px',
                                            height: '200px',
                                        }}
                                        src={postDetail?.thumbnail}
                                    />
                                ) : (
                                    <img
                                        style={{
                                            width: '230px',
                                            height: '200px',
                                        }}
                                        src={imageSrc}
                                        alt="preview-img"
                                    />
                                )}
                            </StThumbnail>
                            <Test
                                onChange={(e) => {
                                    encodeFileToBase64(e.target.files[0]);
                                    handleFileInput(e);
                                }}
                                name="thumbnail"
                                type="file"
                                id="file"
                            />
                        </StThumbnailFlex>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ width: '50px', margin: '8px 0' }}>
                                Detail:
                            </p>
                            <StModalInput
                                style={{ height: '20px' }}
                                name="detail"
                                onChange={onChangeInputHandler}
                            />
                        </div>
                    </StModalFlex>
                </Modal>
            </div>
        </ProductSection>
    );
};

const StLabel = styled.p`
    font-family: 'Elice_regular';
`;

const StModalFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ceneter;
`;

const StModalInput = styled.input`
    width: 180px;
    height: 20px;
    margin: 8px 10px;
`;

const StThumbnailFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StThumbnail = styled.div`
    width: 230px;
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

const BUTTON_WRAPPER_STYLE = {
    position: 'relative',
    zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px',
};

const ProductSection = styled.div`
    font-family: 'Elice_Regular';

    max-width: 1200px;
    min-width: 800px;
    /* height: 750px; */
    /* background-color: #797979; */
    margin: 0 100px 0 100px;
    /* border: 1px solid gray; */
`;

const TopInfo = styled.div`
    width: 100%;
    height: 400px;
    /* background-color: #7bff00; */
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #444;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 10px;
    border-bottom: 1px solid #444;
`;

const Thumbnail = styled.div`
    width: 398px;
    height: 398px;
    margin-right: 30px;
    border: 1px solid #ccc;
    /* background-color: aqua; */
`;

const RightInfo = styled.div`
    width: 570px;
    height: 400px;
    /* margin-top: 25px; */
    /* background-color: #ff9100; */
    position: relative;
`;

const ProductTitle = styled.div`
    width: 570px;
    font-size: 26px;
    font-weight: bold;
    /* height: 50px; */
    padding-bottom: 20px;
    /* background-color: #fffb00; */
`;

const Price = styled.div`
    width: 570px;
    height: 70px;
    /* background-color: #94bfff; */
    font-size: 50px;
`;

const SellerId = styled.div`
    font-size: 20px;
    margin-top: 5px;
`;

const Date = styled.div`
    font-size: 15px;
    margin-top: 5px;
    margin-right: 5px;
    color: #7c7c7c;
    /* background-color: aqua; */
`;

const Wish = styled.button`
    width: 120px;
    height: 50px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 35px;
    /* margin-top: 5px;
    margin-right: 5px;
    color: #7c7c7c; */
    background-color: #ff7e36;
    position: absolute;
    bottom: 0;
    text-align: center;
    border: 0;
    cursor: pointer;
`;

const BottomInfo = styled.div`
    width: 100%;
    /* height: 400px; */
    /* background-color: #ff657f; */
    /* display: flex; */
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 40px;
`;

const DetailInfo = styled.div`
    width: 100%;
    /* background-color: #fffeb3; */
    display: flex;
    margin-top: 15px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    word-break: keep-all;
    line-height: 30px;
    color: #2e2e2e;
`;

const ContentButtonWrap = styled.div`
    width: 100%;
    height: 35px;
    /* background-color: #7644ff; */
    display: flex;
    position: relative;
    text-align: center;
`;

const MainContentButton = styled.button`
    font-family: 'Elice_Regular';
    width: 80px;
    height: 35px;
    background-color: white;
    border: 1px solid #ff7e36;
    color: #ff7e36;
    position: absolute;
    left: 0px;
    cursor: pointer;

    border-radius: 5px;

    :hover {
        background-color: #ff7e36;
        color: white;
    }
`;

const ModifyContentButton = styled.button`
    font-family: 'Elice_Regular';
    width: 80px;
    height: 35px;

    position: absolute;
    background-color: white;
    color: #ff7e36;
    border: 1px solid #ff7e36;
    right: 90px;
    cursor: pointer;

    border-radius: 5px;

    :hover {
        background-color: #ff7e36;
        color: white;
    }
`;
const DeleteContentButton = styled.button`
    font-family: 'Elice_Regular';
    width: 80px;
    height: 35px;
    background-color: white;
    color: gray;
    position: absolute;
    border: 1px solid gray;
    right: 0;
    cursor: pointer;

    border-radius: 5px;

    :hover {
        background-color: gray;
        color: white;
    }
`;

export default DetailProductInfo;
